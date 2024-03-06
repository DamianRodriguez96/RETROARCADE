import { Link } from "react-router-dom"

const Nadvar = () => {
  return (
    
    <div>
      <header>
      <a href="/" className="logo">
      <img src="./arcadelogo.png" alt="logo compañia" />
        <h2 className="nombre-empresa">RETRO ARCADE</h2>
      </a>
      <nav className="center">
        <Link  className="nav-link" to="/">Inicio</Link>
        <Link  className="nav-link" to="Nosotros">Nosotros</Link>
        <Link  className="nav-link"to="Contactos">Contacto</Link>

      </nav>
      </header>

</div>

  )
}

export default Nadvar