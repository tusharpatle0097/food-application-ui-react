import React from 'react';
import circle from "../assets/Ellipse 3.svg";
import arrow from "../assets/arrow.svg";

const Slider = () => {
    const circleIcone = circle;
    const arrow1 = arrow;
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></li>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://images.services.kitchenstories.io/PV-rl5pSp1lL_XRe7KDBW1KGan4=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R2798-photo-final-1.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://b.zmtcdn.com/data/pictures/chains/8/3300058/ede99b219298f55142b265e412caf0bd.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://www.giverecipe.com/wp-content/uploads/2023/01/Turkish-Breakfast.jpg        " alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span  aria-hidden="true">
                        <div>
                            <span><img src={circleIcone} alt="" /></span>
                            <span className='arrowset'><img src={arrow1} alt="" /></span>
                        </div>
                       </span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span aria-hidden="true">
                    <div>
                            <span><img src={circleIcone} alt="" /></span>
                            <span className='arrow right arrowset1'><img src={arrow1} alt="" /></span>
                        </div>
                    </span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider