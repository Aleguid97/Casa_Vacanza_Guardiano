import { Link } from 'react-router-dom'

function NonTrovata() {
  return (
    <section>
      <h1>Pagina non trovata</h1>
      <Link to="/">Torna alla home</Link>
    </section>
  )
}

export default NonTrovata
