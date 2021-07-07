import React from 'react';
import cheers from '../../public/images/cheers.png';
import { useStoreContext } from "../../utils/GlobalState";

export default function Nav() {
    const [state, dispatch] = useStoreContext();
    console.log(state);

    return (
        <div className='columns'>
            <div className='container profile'>
                    <div className='section profile-heading'>
                        <div className='columns is-mobile is-multiline'>
                            <div className='column is-2'>
                                <span className='header-icon user-profile-image'>
                                <img alt='' src={cheers}></img>
                                </span>
                            </div>
                        <div className='column is-4-tablet is-10-mobile name'>
                            <p>
                                <span className='title is-bold'>USERNAME</span>
                                <a className='button is-primary is-outlined' href='#' id='edit-preferences'>
                                    Edit Preferences
                                </a>   
                            </p>
                            <p className='tagline'>
                                The users profile bio (need to make box that can be edited)
                            </p>
                        </div>
                        <div className='column is-2-tablet is-4-mobile has-text-centered'>
                            <p className='stat-val'>30</p>
                            <p className='stat-key'>searches</p>
                        </div>
                        <div className='column is-2-tablet is-4-mobile has-text-centered'>
                            <p className='stat-val'>10</p>
                            <p className='stat-key'>likes</p>
                        </div>
                        <div className='column is-2-tablet is-4-mobile has-text-centered'>
                            <p className='stat-val'>3</p>
                            <p className='stat-key'>favorites</p>
                        </div>
                    </div>
                </div>
                <div className='profile-options is-fullwidth'>
                    <div className='tabs is-fullwidth is-medium'>
                        <ul>
                            <li className='link is-active'>
                            <a>
                                <span className='icon'>
                                <i className='fa fa-list'></i>
                                </span>
                                <span>My Favorite Breweries</span>
                            </a>
                            </li>
                            <li className='link'>
                            <a>
                                <span className='icon'>
                                <i className='fa fa-thumbs-up'></i>
                                </span>
                                <span>Blog Posts</span>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='box'>
                    <div className='columns'>
                        <div className='column is-2-tablet user-property-count has-text-centered'>
                            <p className='subtitle is-5'>
                            <strong></strong>
                            My Breweries
                            </p>
                        </div>
                        <div className='column is-8'>
                            <p className='control has-addons'>
                                <input className='input' placeholder='Search your favorited breweries' type='text'></input>
                            <button className='button'>
                                Search
                            </button>
                            </p>
                        </div>
                    </div>
                </div>
                {state.favorites.map(favorite => (
          <div key={favorite._id} item={favorite}>{favorite.name}</div>
        ))}
            </div>
        </div>
    )
}
            