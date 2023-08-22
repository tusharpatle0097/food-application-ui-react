import React from 'react';
import chevron from "../assets/chevron.svg"

const CategoriesList = () => {
    const img1 = chevron;
    return (
        <div className="container pt-3">

            <div className="wishlist-card-container d-flex flex-wrap justify-content-evenly ">
                <button className='custom_buttom'>
                    <span>Recipes & Menus</span>
                    <span><img src={img1} alt="" /></span>
                </button>

                <button className='custom_buttom1'>
                    <span>Recipes & Menus</span>
                    <span><img src={img1} alt="" /></span>
                </button>

                <button className='custom_buttom2'>
                    <span>Recipes & Menus</span>
                    <span><img src={img1} alt="" /></span>
                </button>
                <button className='custom_buttom3'>
                    <span>Recipes & Menus</span>
                    <span><img src={img1} alt="" /></span>
                </button>

                <button className='custom_buttom4'>
                    <span>Recipes & Menus</span>
                    <span><img src={img1} alt="" /></span>
                </button>
            </div>
        </div>
    )
}

export default CategoriesList