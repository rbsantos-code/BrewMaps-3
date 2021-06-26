export function pluralize(name, count) {
  if (count === 1) {
    return name;
  }
  return name + "s";
}

export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    // open connection to DB "shop-shop" with version 1
    const request = window.indexedDB.open("shop-shop", 1);

    // create variables to hold reference to DB, transaction(tx), and obj store
    let db, tx, store;

    // if version changed or if it's first time using DB, run method and create 3 obj stores
    request.onupgradeneeded = function (e) {
      const db = request.result;
      // create obj store for each type of data, set "primary" key index to be "_id" of data
      // use built-in auto increment features. provide index value we want to use for looking up data (MongoDB's _id)
      db.createObjectStore("products", { keyPath: "_id" });
      db.createObjectStore("categories", { keyPath: "_id" });
      db.createObjectStore("cart", { keyPath: "_id" });
    };

    // handle errors with connecting
    request.onerror = function (e) {
      console.log("There was an error");
    };

    // on DB open success
    request.onsuccess = function (e) {
      // save reference of DB to "db" variable
      db = request.result;
      // open transaction to whatever passed into "storeName" (must match one of obj store names)
      // plus permissions we want in tx
      tx = db.transaction(storeName, "readwrite");
      // save reference to that obj store
      store = tx.objectStore(storeName);

      // if error, let us know
      db.onerror = function (e) {
        console.log("error", e);
      };

      // check the value of the method
      switch (method) {
        // overwrite data with matching _id value from object, adding if can't find match
        case "put":
          store.put(object);
          resolve(object);
          break;
        case "get":
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case "delete":
          store.delete(object._id);
          break;
        default:
          console.log("No valid method");
          break;
      }
      // when transaction complete, close connection
      tx.oncomplete = function () {
        db.close();
      };
    };
  });
}
