import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home-page">
            <div className="cover-home">
                <img src='https://i.postimg.cc/7Lms3YzY/image-removebg-preview.png' />
            </div>
            <div className='about-home-section'>
                <h2 className='subtitle'>
                    BUENA GENTE + BUENA COMIDA
                </h2>
                <p className='description-about-home'>

                    Descubre la excelencia culinaria con nuestro servicio de catering en Mikuna. Desde eventos corporativos hasta bodas íntimas, nuestro equipo de chefs expertos se dedica a crear experiencias gastronómicas inolvidables. Con ingredientes frescos y presentación impecable, elevamos cada evento a un nivel superior. ¡Haz que tus momentos especiales sean inolvidables con Mikuna!
                </p>
                <a href='/services' className='our-services-about'></a>
            </div>
            <div className='qualities-section'>
                <div className='quality'>
                    <h3 className='quality-name'>CREATIVIDAD GASTRONÓMICA</h3>
                    <p className='quality-description'>Nuestro equipo de chefs altamente creativos va más allá de lo convencional para ofrecerte una experiencia culinaria única. Cada plato es una obra maestra de sabores innovadores y presentaciones artísticas, diseñadas para cautivar a tus invitados y despertar sus sentidos.</p>
                </div>
                <div className='quality'>
                    <h3 className='quality-name'>ADAPTABILIDAD PERSONALIZADA</h3>
                    <p className='quality-description'>Nos adaptamos a tus necesidades específicas, creando menús personalizados que reflejen tu estilo y temática del evento. Ya sea una celebración íntima o un gran evento corporativo, nuestro servicio de catering se ajusta a tus gustos, preferencias y requisitos dietéticos, garantizando una experiencia gastronómica personalizada.</p>
                </div>
                <div className='quality'>
                    <h3 className='quality-name'>ATENCIÓN DETALLADA AL CLIENTE</h3>
                    <p className='quality-description'>La satisfacción del cliente es nuestra prioridad. Desde la planificación hasta la ejecución, nuestro equipo está dedicado a proporcionar un servicio impecable. Cuidamos cada detalle, asegurándonos de que tu evento sea perfecto. Nuestra atención personalizada garantiza que te sientas respaldado y que cada aspecto del catering cumpla con tus expectativas y más.</p>
                </div>
            </div>
        </div>
    )
}

export default Home