import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    const {logout} = useContext()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bejelentkezés és regisztráció</h1>
      </header>
      <ul className="nav">
        <li className="nav-item">
            <a className="nav-link" to="/">Kezdőlap</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" to="/login">Login</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" to="/register">Regisztráció</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" to="/logout">Kijelentkezés</a>
        </li>
       </ul>
       <Outlet />
       <footer>Minden jog fenntartva</footer>
    </div>
  )
}
