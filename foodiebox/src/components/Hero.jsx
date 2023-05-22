import React from 'react'
import Modal from './Modal'

const Hero = ({immagine}) => {
  return (
    <>
    <section className="bg-dark text-light px-4 py-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex aling-items-center justify-content-between">
          <div>
            <h1>Mangia sano e risparmia tempo con <span className="text-success">FoodieBox</span></h1>
            <p className="lead my-4">
              FoodieBox ti offre la soluzione perfetta per mangiare sano e risparmiare tempo. Con i nostri kit pasto settimanali, cucinare pasti deliziosi e salutari non è mai stato così facile. Scopri oggi come FoodieBox può semplificare la tua vita.
            </p>
            <button className="btn btn-warning btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">Inizia Ora</button>
          </div>
          <img className="img-fluid w-50 d-none d-sm-block" src={immagine} alt="Un illustrazione di una consegna" />
        </div>
      </div>
    </section>
    <Modal />
    </>
  )
}

export default Hero