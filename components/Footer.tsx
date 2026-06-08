export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot__inner">
        <div className="foot__brand">
          <span className="nav__name foot__name">
            La Cresta<em>de la Ola</em>
          </span>
          <p>Un mover de Dios para una nación.<br />Costa Rica · 2026</p>
        </div>

        <div className="foot__col">
          <h5>Contacto</h5>
          <a href="tel:+50671107424">+506 7110 7424</a>
          <a href="https://wa.me/50671107424" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>

        <div className="foot__col">
          <h5>Síguenos</h5>
          <div className="foot__social">
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
{/* 
        <div className="foot__col">
          <h5>Idioma</h5>
          <div className="langtoggle langtoggle--foot" title="Idioma (próximamente)">
            <span className="is-on">Español</span>
            <span>English</span>
          </div>
        </div> */}
      </div>

      <div className="wrap foot__base">
        <span>© 2026 La Cresta de la Ola. Todos los derechos reservados.</span>
        <span>Iglesia Senderos de Luz · Desamparados, San José, Costa Rica</span>
      </div>
    </footer>
  );
}
