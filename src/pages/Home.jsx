import { useState } from 'react';
import '../styles/Home.css'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Home = () => {

    const [commentsPosition, setCommentsPosition] = useState(1)

    const handleLeft = () => {
        let newPosition = commentsPosition - 1;
        if (newPosition === 0) {
            setCommentsPosition(4)
        } else {
            setCommentsPosition(newPosition)
        }
    }

    const handleRight = () => {
        let newPosition = commentsPosition + 1;
        if (newPosition === 5) {
            setCommentsPosition(1)
        } else {
            setCommentsPosition(newPosition)
        }
    }

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
            <div className='comments section'>
                <button className='left-button-comments' onClick={handleLeft}>
                    <SlArrowLeft />
                </button>
                <button className='right-button-comments' onClick={handleRight}>
                    <SlArrowRight />
                </button>
                <div className='comments-container'>
                    <div className={`comment ${commentsPosition === 1 ? 'center' : ' '}`}>
                        <h4 className='author-name'>Denis Gandarillas</h4>
                        <p className='author-comment'>Increíble experiencia con Mikuna. La creatividad en cada platillo nos dejó boquiabiertos. No solo delicioso, ¡sino también una obra de arte para el paladar! Definitivamente, volveremos a contar con su servicio para futuros eventos.</p>
                    </div>
                    <div className={`comment ${commentsPosition === 2 ? 'center' : ' '}`}>
                        <h4 className='author-name'>Isabel Block</h4>
                        <p className='author-comment'>La adaptabilidad de Mikuna fue clave para hacer de nuestra boda un evento inolvidable. Personalizaron el menú según nuestras preferencias y las de nuestros invitados. La atención detallada al cliente hizo que nos sintiéramos realmente especiales. ¡Altamente recomendados!</p>
                    </div>
                    <div className={`comment ${commentsPosition === 3 ? 'center' : ' '}`}>
                        <h4 className='author-name'>Flor Montecinos</h4>
                        <p className='author-comment'>Quedamos asombrados con el servicio de catering. La presentación de los platos era tan hermosa como su sabor. Además, el equipo estuvo atento a cada detalle, asegurándose de que todo saliera perfecto. ¡Gracias por hacer de nuestra fiesta un éxito!</p>
                    </div>
                    <div className={`comment ${commentsPosition === 4 ? 'center' : ' '}`}>
                        <h4 className='author-name'>Andres Flores</h4>
                        <p className='author-comment'>Impresionado con la profesionalidad de Mikuna. Desde el primer contacto hasta el último bocado, todo fue impecable. La calidad de los ingredientes y la atención al cliente hicieron que nuestro evento corporativo fuera todo un éxito. Sin duda, serán nuestra elección para futuras ocasiones.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home