import '../styles/Event.css'

export const Event = () => {
    return (
        <div className="event-page">
            <div className="cover-event">
                <img src='https://i.postimg.cc/yNtyg5JQ/mikuna-logo.png' alt='Mikuna logo' draggable={false} className='mikuna-logo' />
                <img src='https://i.postimg.cc/xTj4KBst/logo-web-page.webp' alt='Hotel Cochabamba logo' draggable={false} className='hotel-logo' />
            </div>
            <div className='descrption-event'>
                <h2 className='subtitle'>
                    Experiencia Exclusiva en el Hotel Cochabamba
                </h2>
                <p className='event-date'>
                    16 - diciembre - 2023, 08:00 A.M.
                </p>
                <p className='event-location'>
                    Hotel Cochabamba
                </p>
                <ul className='event-details'>
                    <li>
                        Únete a nosotros para una experiencia única en el corazón de Cochabamba en el prestigioso Hotel Cochabamba.
                    </li>
                    <li>
                        Disfruta de una noche llena de elegancia, gastronomía de primera clase y entretenimiento excepcional.
                    </li>
                    <li>
                        El evento contará con la participación de chefs reconocidos, artistas locales y muchas sorpresas que te cautivarán.
                    </li>
                    <li>
                        Deléitate con exquisitos platos preparados por nuestros talentosos chefs, que fusionan lo mejor de la cocina local e internacional.
                    </li>
                    <li>
                        Sumérgete en un ambiente sofisticado y disfruta de la hospitalidad única que caracteriza al Hotel Cochabamba.
                    </li>
                    <li>
                        No te pierdas esta oportunidad de vivir una experiencia inolvidable. ¡Te esperamos en el Hotel Cochabamba!
                    </li>
                </ul>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.703620254188!2d-66.15480402382396!3d-17.37798886394137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3741ab92b4f45%3A0x8c71d7883da81f81!2sGran%20Hotel%20Cochabamba!5e0!3m2!1sen!2sbo!4v1702726538865!5m2!1sen!2sbo" className='google-maps' allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
