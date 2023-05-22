import React from 'react'

const Modal = () => {
  return (
    <div className="modal fade" id="enroll" tabindex="-1" aria-labelledby="enrollLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Inizia Ora</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p className="lead">Compila questo modulo per maggiori informazioni</p>
          <form>
            <div className="mb-3">
              <label for="first-name" className="col-form-label">Nome:</label>
              <input type="text" className="form-control" id="first-name" />
            </div>
            <div className="mb-3">
              <label for="last-name" className="col-form-label">Cognome:</label>
              <input type="text" className="form-control" id="last-name" />
            </div>
            <div className="mb-3">
              <label for="email" className="col-form-label">Email:</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label for="phone" className="col-form-label">Telefono:</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
          </form> 
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
          <button type="button" className="btn btn-warning">Invia</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal