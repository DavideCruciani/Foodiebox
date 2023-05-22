import React from 'react'

const Plans = () => {
  return (
    <section className="px-4 py-5 bg-primary" id="piani">
    <div className="container hidden">
      <div className="row g-5 justify-content-center">
        <div className="col-lg col-md-7 col-sm-8 col-12">
          <div className="card bg-dark shadow-sm p-4 text-light">
            <div className="card-body">
              <div className="h1 mb-3">
                <i className="bi bi-person" style={{fontSize: "50px"}}></i>
              </div>
              <h3 className="card-title mb-4">
                Piano Basic
              </h3>
              <div className="card-text">
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>3 kit pasto per due persone
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Servizio di supporto culinario
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Spedizione gratuita
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Abbonamento flessibile
                </p>
                <hr />
                <p>
                  <i className="bi bi-x-circle-fill text-danger me-2"></i>Accesso a ricette esclusive
                </p>
                <hr />
                <p>
                  <i className="bi bi-x-circle-fill text-danger me-2"></i>Programma di punti fedeltà
                </p>
                <hr />
                <p>
                  <i className="bi bi-x-circle-fill text-danger me-2"></i>Personalizzazione dei kit pasto
                </p>
                <h4 className="card-subtitle text-warning h1 mt-3">€34,99</h4>
                <p>a settimana</p>
                <a href="#" className="btn btn-warning">Acquista Ora</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg col-md-7 col-sm-8 col-12">
          <div className="card bg-dark shadow-sm p-4 text-light">
            <div className="card-body">
              <div className="h1 mb-3">
                <i className="bi bi-house" style={{fontSize: "50px"}}></i>
              </div>
              <h3 className="card-title mb-4">
                Piano <span className="text-warning">Family</span>
              </h3>
              <div className="card-text">
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>5 kit pasto per quattro persone
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Servizio di supporto culinario
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Spedizione gratuita
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Abbonamento flessibile
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Accesso a ricette esclusive
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Programma di punti fedeltà
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Personalizzazione dei kit pasto
                </p>
                <h4 className="card-subtitle text-warning mt-3 h1">€99,99</h4>
                <p>a settimana</p>
                <a href="#" className="btn btn-warning">Acquista Ora</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg col-md-7 col-sm-8 col-12">
          <div className="card bg-dark shadow-sm p-4 text-light">
            <div className="card-body">
              <div className="h1 mb-3">
                <i className="bi bi-star" style={{fontSize: "50px"}}></i>
              </div>
              <h3 className="card-title mb-4">
                Piano Premium
              </h3>
              <div className="card-text">
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>5 kit pasto per due persone
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Servizio di supporto culinario
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Spedizione gratuita
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Abbonamento flessibile
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Accesso a ricette esclusive
                </p>
                <hr />
                <p>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>Programma di punti fedeltà
                </p>
                <hr />
                <p>
                  <i className="bi bi-x-circle-fill text-danger me-2"></i>Personalizzazione dei kit pasto
                </p>
                <h4 className="card-subtitle text-warning h1 mt-3">€59,99</h4>
                <p>a settimana</p>
                <a href="#" className="btn btn-warning">Acquista Ora</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Plans