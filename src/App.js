import React from 'react';
import "./style/App.scss"
import Header from './Header/Header';
import Slider from './Header/Slider';
import CategoriesList from "./categories/CategoriesList"
import Cards from "./categories/Cards"
import RecommendedRecipes from "../src/RecommendedRecipes/RecommendedRecipes"
import Footer from './footer/Footer';
const App = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <Slider />
        <CategoriesList/>
        <Cards/>
        <RecommendedRecipes/>
        <Footer/>
      </div>
    </>
  )
}

export default App