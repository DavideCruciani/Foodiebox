import React from 'react'

const Newsletter = () => {
  return (
    <section className="bg-primary text-light px-4 py-5" id="news">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0">Registrati alla nostra Newsletter</h3>
          
          <div className="input-group news-input" id="newsletter">
            <input type="text" className="form-control" placeholder="Inserisci la tua Email" />
            <button className="btn btn-dark btn-lg" type="button">Invia</button>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Newsletter