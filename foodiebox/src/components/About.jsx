import React from 'react'

const About = ({immagine}) => {
  return (
    <section className="px-4 py-5" id="noi">
      <div className="container hidden">
        <h1 className="h1 text-center mb-5">Chi siamo</h1>
        <div className="row aling-items-center justify-content-center">
          <div className="col-lg my-auto">
            <img className="img-fluid" src={immagine} alt="Il nostro team" />
          </div>
          <div className="col-lg my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-text lead">
                  <p><i className="bi bi-people-fill me-2" style={{ fontSize: '22px' }} /><span className="text-success fw-bold">Chi siamo:</span> siamo un team di appassionati di cucina che crede nell'importanza di mangiare sano e gustoso ogni giorno. Offriamo kit pasto di alta qualità, con ingredienti freschi e di stagione, forniti da produttori locali e sostenibili.</p>
                  <p><i className="bi bi-hourglass-bottom me-2" style={{ fontSize: '22px' }} /><span className="text-success fw-bold">La nostra storia:</span> abbiamo iniziato la nostra attività nel 2015 con l'obiettivo di creare un'alternativa sana e conveniente ai pasti pronti. Da allora, abbiamo continuato a crescere e a migliorare, ampliando la nostra offerta e collaborando con sempre più produttori locali.</p>
                  <p><i className="bi bi-basket-fill me-2" style={{ fontSize: '22px' }} /><span className="text-success fw-bold">Il nostro impegno per la qualità:</span> ci preoccupiamo della qualità degli ingredienti e della loro provenienza, selezionando solo prodotti freschi e di stagione.</p>
                  <p><i className="bi bi-heart-fill me-2" style={{ fontSize: '22px' }} /><span className="text-success fw-bold">Cosa offriamo:</span> i nostri kit pasto sono pensati per aiutarti a risparmiare tempo e a mantenere uno stile di vita sano, offrendoti un'esperienza culinaria unica con ricette creative e gustose.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}

export default About