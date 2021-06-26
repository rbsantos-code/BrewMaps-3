const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: "Don't forget about the title!",
            minlength: 1,
            maxlength: 20
        },
        body: {
            type: String,
            required: "Don't forget to post!",
            maxlengh: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        coomments: [commentSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);


// add comment count later?

const Post = model('Post', postSchema);

module.exports = Post;