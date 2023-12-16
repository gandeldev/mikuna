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
                    DESCUBRE EL PATRIMONIO DE COCHABAMBA CON MIKUNA
                </h2>
                <p className='description-about-home'>
                    Mikuna, el circuito turístico cultural, tiene como objetivo brindar una experiencia completa y única sobre las casonas de Cochabamba. Nos dedicamos a promover el patrimonio histórico y cultural de nuestra ciudad, destacando el potencial turístico que ofrece Cochabamba.
                </p>
                <a href='/services' className='our-services-about'></a>
            </div>
            <div className='qualities-section'>
                <Quality title='EXPERIENCIA CULTURAL ÚNICA' description='Ofrecemos una combinación de atractivos culturales, naturales y gastronómicos que convierten a Cochabamba en un destino ideal para viajeros de todo el mundo. Explora nuestras casonas históricas, sumérgete en la riqueza de nuestra herencia y disfruta de una experiencia turística inigualable.' />
                <Quality title='GASTRONOMÍA LOCAL Y AUTÉNTICA' description='Nuestro enfoque culinario resalta la diversidad de la gastronomía local. Con ingredientes frescos y presentaciones auténticas, Mikuna eleva la experiencia gastronómica para que disfrutes de sabores únicos que reflejan la riqueza cultural de Cochabamba.' />
                <Quality title='ATENCIÓN DETALLADA AL VIAJERO' description='La satisfacción del viajero es nuestra prioridad. Desde la planificación hasta la ejecución, nuestro equipo está dedicado a proporcionar un servicio turístico impecable. Cuidamos cada detalle, asegurándonos de que tu experiencia en Cochabamba sea perfecta y cumpla con tus expectativas y más.' />
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