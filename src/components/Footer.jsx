import '../styles/Footer.css'

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="information-mikuna-footer footer-section">
                    <img src="https://i.postimg.cc/yNtyg5JQ/mikuna-logo.png" alt="mikuna logo" className="logo-footer" />
                    <p className="description-footer">
                        Descubre Cochabamba con Mikuna, tu guía turístico personal. Explora rutas culturales, disfruta de la gastronomía local, y aventúrate en senderos impresionantes. Mikuna hace que cada experiencia sea única y adaptada a tus preferencias.
                    </p>
                </div>
                <div className="menu-footer footer-section">
                    <a className='menu-option-footer' href="/home">Inicio</a>
                    <a className='menu-option-footer' href="/services">Servicios</a>
                </div>
                <div className="event-footer footer-section">
                    <a className="event-option" href="/event"></a>
                </div>
                <div className='social-media footer-section'>
                    <address className='social-media-option'>
                        Facebook: Mikuna-Servicio de Catering.
                    </address>
                    <address className='social-media-option'>
                        E-mail: contact@mikuna.com
                    </address>
                    <address className='social-media-option'>
                        Telefonos: +591 65730642 - +591 60767702
                    </address>
                </div>
            </footer>
            <div className='copy'>
                <p className='copy-mikuna'>Mikuna © 2023</p>
                <p className='gandel-dev'>Creado por <a href='https://gandel.netlify.app/'>GANDEL DEV</a></p>
            </div>
        </>
    )
}
