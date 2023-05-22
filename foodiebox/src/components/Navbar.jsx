import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <div>
          <a href="#" className="navbar-brand text-white h1">FoodieBox<i className="bi bi-box ms-2"></i></a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto" id="navigazione">
            <li className="nav-item">
              <a href="#" className="nav-link text-white">Home</a>
            </li>
            <li className="nav-item">
              <a href="#noi" className="nav-link text-white">Chi siamo</a>
            </li>
            <li className="nav-item">
              <a href="#piani" className="nav-link text-white">Piani e prezzi</a>
            </li>
            <li className="nav-item">
              <a href="#testimonianze" className="nav-link text-white">Testimonianze</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
  )
}

export default Navbar