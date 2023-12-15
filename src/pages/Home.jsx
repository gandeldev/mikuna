import { useState } from 'react';
import '../styles/Home.css'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Quality } from '../components/Home/Quality';
import commentsJSON from '../util/Comments.json'
import { Comment } from '../components/Home/Comment';

const Home = () => {

    const [commentsPosition, setCommentsPosition] = useState(0)
    const [leftIsDisable, setLeftIsDisable] = useState(true)
    const [rightIsDisable, setRightIsDisable] = useState(false)

    const handleLeft = () => {
        const newPosition = commentsPosition - 1;
        setCommentsPosition(newPosition < 0 ? commentsJSON.comments.length - 1 : newPosition);
        setRightIsDisable(false);
        setLeftIsDisable(newPosition === 0);
    };

    const handleRight = () => {
        const newPosition = commentsPosition + 1;
        setCommentsPosition(newPosition >= commentsJSON.comments.length ? 0 : newPosition);
        setLeftIsDisable(false);
        setRightIsDisable(newPosition === commentsJSON.comments.length - 1);
    };


    return (
        <div className="home-page">
            <div className="cover-home">
                <img src='https://i.postimg.cc/yNtyg5JQ/mikuna-logo.png' alt='Mikuna logo' draggable={false} />
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
                <Quality title='CREATIVIDAD GASTRONÓMICA' description='Nuestro equipo de chefs altamente creativos va más allá de lo convencional para ofrecerte una experiencia culinaria única. Cada plato es una obra maestra de sabores innovadores y presentaciones artísticas, diseñadas para cautivar a tus invitados y despertar sus sentidos.' />
                <Quality title='ADAPTABILIDAD PERSONALIZADA' description='Nos adaptamos a tus necesidades específicas, creando menús personalizados que reflejen tu estilo y temática del evento. Ya sea una celebración íntima o un gran evento corporativo, nuestro servicio de catering se ajusta a tus gustos, preferencias y requisitos dietéticos, garantizando una experiencia gastronómica personalizada.' />
                <Quality title='ATENCIÓN DETALLADA AL CLIENTE' description='La satisfacción del cliente es nuestra prioridad. Desde la planificación hasta la ejecución, nuestro equipo está dedicado a proporcionar un servicio impecable. Cuidamos cada detalle, asegurándonos de que tu evento sea perfecto. Nuestra atención personalizada garantiza que te sientas respaldado y que cada aspecto del catering cumpla con tus expectativas y más.' />
            </div>
            <div className='comments section'>
                <button className='left-button-comments' onClick={handleLeft} disabled={leftIsDisable}>
                    <SlArrowLeft />
                </button>
                <button className='right-button-comments' onClick={handleRight} disabled={rightIsDisable}>
                    <SlArrowRight />
                </button>
                <div className='comments-container'>
                    {
                        commentsJSON.comments.map(({ name, comment, id, image }) => (
                            <Comment
                                currentPosition={commentsPosition}
                                image={image}
                                name={name}
                                comment={comment}
                                idComment={id}
                                key={id}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home