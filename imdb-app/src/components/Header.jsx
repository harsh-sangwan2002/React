import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <h1>IMDB</h1>
                </Link>
            </div>
            <ul className="links">
                <li className="list-item">
                    <Link to="/">Movies</Link>
                </li>
                <li className="list-item">
                    <Link to="/details">Details</Link>
                </li>
                <li className="list-item">
                    <Link to="/watchlist">WatchList</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
