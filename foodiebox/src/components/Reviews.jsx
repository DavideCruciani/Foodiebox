import React from 'react'

const Reviews = () => {
  return (
    <section className="px-4 py-5" id="testimonianze">
    <div className="container hidden">
      <h1 className="h1 text-center mb-5">Più di <span className="text-success">1000+</span> persone si <span className="text-success">fidano</span> di <span className="text-success">noi!</span></h1>
      <div className="row gap-3">
        <div className="col-lg">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <img src="https://randomuser.me/api/portraits/women/12.jpg" className="rounded-circle mb-3" alt="Sofia Conti the reviewer" />
              <h3 className="card-title">Sofia Conti</h3>
              <p className="card-text fst-italic">
                "Grazie a FoodieBox ho imparato a cucinare pasti sani e gustosi senza dover spendere ore in cucina. La scelta di ricette è vasta e variegata, e gli ingredienti sono sempre freschi e di alta qualità."
              </p>
              <div className="card-footer bg-white"><i className="bi bi-star-fill text-warning"><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i></i></div>
            </div>
          </div>
        </div>

        <div className="col-lg">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <img src="https://randomuser.me/api/portraits/men/17.jpg" className="rounded-circle mb-3" alt="Davide Esposito the reviewer" />
              <h3 className="card-title">Davide Esposito</h3>
              <p className="card-text fst-italic">
                "Sono molto soddisfatto di aver scoperto FoodieBox. Ogni settimana mi arriva a casa un kit pasto personalizzabile con tutto il necessario per preparare piatti gustosi e sani."
              </p>
              <div className="card-footer bg-white"><i className="bi bi-star-fill text-warning"><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i></i></div>
            </div>
          </div>
        </div>

        <div className="col-lg">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <img src="https://randomuser.me/api/portraits/men/28.jpg" className="rounded-circle mb-3" alt="Marco Rossi the reviewer" />
              <h3 className="card-title">Marco Rossi</h3>
              <p className="card-text fst-italic">
                "Il servizio clienti è molto cordiale e sempre disponibile a rispondere alle mie domande. Lo consiglio a tutti coloro che vogliono mangiare bene senza rinunciare alla comodità!"
              </p>
              <div className="card-footer bg-white"><i className="bi bi-star-fill text-warning"><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Reviews