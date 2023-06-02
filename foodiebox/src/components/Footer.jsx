import React from 'react'

const Footer = () => {
  return (
    <footer className="px-4 py-5 bg-dark text-white text-center position-relative">
      <div className="container">
        <div className="d-md-flex justify-content-between">
          <p className="lead">Website by Cruciani Davide</p>
          <p className="lead">People illustrations by <a href="https://storyset.com/people" className="link-success text-decoration-none" target="_blank" rel="noopener">Storyset</a></p>
        </div>
        
        <p className="lead">Copyright &copy; 2023 FoodieBox</p>
        <a href="#" className="position-absoulute bottom-0 end-0">
          <i className="bi bi-arrow-up-circle h1 text-success"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer