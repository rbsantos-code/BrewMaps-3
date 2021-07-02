import React from 'react';

export default function Nav() {
    return (
        <div className='columns'>
            <div className='container profile'>
                <div className='modal' id='edit-preferences-modal'>
                    <div className='modal-background'></div>
                        <div className='modal-card'>
                            <header className='modal-card-head'>
                                <p className='modal-card-title'>Edit Preferences</p>
                                <button className='delete'></button>
                            </header>
                            <section className='modal-card-body'>
                                <label className='label'>Name</label>
                                    <p className='control'>
                                        <input className='input' placeholder='Text input' type='text'></input>
                                    </p>
                                <label className='label'>Username</label>
                                <p className='control has-icon has-icon-right'>
                                    <input className='input' placeholder='Text input' type='text' value='pmillerk'></input>
                                </p>
                                <label className='label'>Email</label>
                                <p className='control has-icon has-icon-right'>
                                    <input className='input' placeholder='Email input' type='text' value='hello@'></input>
                                    <i className='fa fa-warning'></i>
                                    <span className='help is-danger'>This email is invalid</span>
                                </p>
                                <div className='control'>
                                    <div className='control-label is-pulled-left'>
                                        <label className='label'>Date of Birth</label>
                                    </div>
                                    <span>
                                        <span className='select'>
                                            <select>
                                                <option>Month</option>
                                                <option>With options</option>
                                            </select>
                                        </span>
                                        <span className='select'>
                                            <select>
                                                <option>Day</option>
                                                <option>With options</option>
                                            </select>
                                        </span>
                                        <span className='select'>
                                            <select>
                                                <option>Year</option>
                                                <option>With options</option>
                                            </select>
                                        </span>
                                    </span>
                                </div>
                                <label className='label'>Description</label>
                                <p className='control'>
                                    <textarea className='textarea' placeholder='Describe Yourself!'></textarea>
                                </p>
                                <div className='content'>
                                    <h1>Optional Information</h1>
                                </div>
                                <label className='label'>Phone Number</label>
                                <p className='control has-icon has-icon-right'>
                                    <input className='input' placeholder='Text input' type='text' value='+1 *** *** 0535'></input>
                                </p>
                                <label className='label'>Work</label>
                                <p className='control has-icon has-icon-right'>
                                    <input className='input' placeholder='Text input' type='text' value='Greater Washington Publishing'></input>
                                </p>
                                <label className='label'>School</label>
                                <p className='control has-icon has-icon-right'>
                                    <input className='input' placeholder='Text input' type='text' value='George Mason University'></input>
                                </p>
                            </section>
                            <footer className='modal-card-foot'>
                                <a className='button is-primary modal-save'>Save changes</a>
                                <a className='button modal-cancel'>Cancel</a>
                            </footer>
                        </div>
                    </div>
                    <div className='section profile-heading'>
                        <div className='columns is-mobile is-multiline'>
                            <div className='column is-2'>
                                <span className='header-icon user-profile-image'>
                                <img alt='' src='http://placehold.it/300x225'></img>
                                </span>
                            </div>
                        <div className='column is-4-tablet is-10-mobile name'>
                            <p>
                                <span className='title is-bold'>johndoe</span>
                                <a className='button is-primary is-outlined' href='#' id='edit-preferences'>
                                    Edit Preferences
                                </a>   
                            </p>
                            <p className='tagline'>
                                The users profile bio would go here, of course. It could be two lines or more or whatever. We should probably limit the amount of characters to ~500 at most though.
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
                            <p className='stat-key'>lists</p>
                        </div>
                    </div>
                </div>
                <div className='profile-options is-fullwidth'>
                    <div className='tabs is-fullwidth is-medium'>
                        <ul>
                            <li className='link'>
                            <a>
                                <span className='icon'>
                                <i className='fa fa-list'></i>
                                </span>
                                <span>My Lists</span>
                            </a>
                            </li>
                            <li className='link is-active'>
                            <a>
                                <span className='icon'>
                                <i className='fa fa-thumbs-up'></i>
                                </span>
                                <span>My Likes</span>
                            </a>
                            </li>
                            <li className='link'>
                            <a>
                                <span className='icon'>
                                <i className='fa fa-search'></i>
                                </span>
                                <span>My Searches</span>
                            </a>
                            </li>
                            <li className='link'>
                            <a>
                                <span className='icon'>
                                <i className='fa fa-balance-scale'></i>
                                </span>
                                <span>Compare</span>
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
            </div>
        </div>
    )
}
            