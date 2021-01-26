import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>Infinity.</div>
        <nav>
          <ul>
            <li className='discover'>
              <a href='/'>discover</a>
            </li>
            <li>
              <a href='/'>Planets</a>
            </li>
            <li>
              <a href='/'>Latest from NASA</a>
            </li>
            <li>
              <a href='/'>Send message</a>
            </li>
            <li className='btn'>
              <a href='/'>Log In</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
