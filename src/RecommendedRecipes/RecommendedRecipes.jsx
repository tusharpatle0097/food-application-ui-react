import React from 'react';
import Card from '../categories/Card';

const RecommendedRecipes = () => {
  return (
    <>
    <div className="header pt-5">
        <p className='Recipes_heading'>Recommended Recipes</p>
    </div>
    <div className="wishlist-card-container d-flex flex-wrap justify-content-evenly pt-5">
                <Card />
               
            </div>

            <div className="Read_more pt-5">
                <center>
                <button className='for_loading'>Load More</button>
                </center>
            </div>
    </>
  )
}

export default RecommendedRecipes