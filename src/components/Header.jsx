import { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleMenuButton = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${ isScrolled ? 'scrolled' : ' ' }`}>
            <a className='menu-option' href="/home">Inicio</a>
            <a className='menu-option' href="/services">Servicios</a>
            <a href='/' className='go-home'>
                <img src="https://i.postimg.cc/yNtyg5JQ/mikuna-logo.png" className='logo-mikuna' draggable={false} />
            </a>
            <a className='menu-option' href='/our'>Nosotros</a>
            <a className='menu-option' href='/contact'>Contactanos</a>
            <button className='menu-btn-mobile' onClick={handleMenuButton}>
                <span className='line-menu-btn'></span>
                <span className='line-menu-btn'></span>
                <span className='line-menu-btn'></span>
            </button>
            <div className={`menu-mobile ${isOpen ? 'active' : ''}`}>
                <div className='container-menu-mobile'>
                    <a className='menu-option-mobile' href="/inicio">Inicio</a>
                    <a className='menu-option-mobile' href="/services">Servicios</a><a className='menu-option-mobile' href='/our'>Nosotros</a>
                    <a className='menu-option-mobile' href='/contact'>Contactanos</a>
                </div>
            </div>
        </header>
    )
}

export default Header