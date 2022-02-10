import '../styles/Header.css'
import React, { useState } from 'react';

function Header() {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 150){
            setNavbar(true);
        }else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    return (
        <div className="Header">
            <div className='Navbar'>
                <nav className={`navbar navbar-expand-lg navbar-${navbar ? 'light bg-dark' : 'light'} fixed-top`}>
                    <div className="container">
                        <a className="navbar-brand" href="#"><span className="text-warning">Tre</span>ksy</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                            <a href='/login'>
                                <button className="btn btn-success">Login</button>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="Carousel">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active bg-1">
                            <div className="carousel-caption">
                                <h5><span className="text-warning">Add Memories</span>To your Life</h5>
                                <p>Travel hassle free. Rejuvenate your soul with tons of memories</p>
                                <a href="#" className='bg-success text-white'>Explore</a>
                            </div>
                        </div>
                        <div className="carousel-item bg-2">
                            <div className="carousel-caption">
                                <h5><span className="text-warning">Add Memories</span>To your Life</h5>
                                <p>Travel hassle free. Rejuvenate your soul with tons of memories</p>
                                <a href="#" className='bg-success text-white'>Explore</a>
                            </div>
                        </div>
                        <div className="carousel-item bg-3">
                            <div className="carousel-caption">
                                <h5><span className="text-warning">Add Memories</span>To your Life</h5>
                                <p>Travel hassle free. Rejuvenate your soul with tons of memories</p>
                                <a href="#" className='bg-success text-white'>Explore</a>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;