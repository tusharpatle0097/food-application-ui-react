import React from 'react';
import mainLogo from "../assets/Cookpal 1.png"
import atdi from "../assets/at.svg"

const Footer = () => {
    const logo = mainLogo;
    const kkk = atdi;

    return (
        <>
            <div class="container pt-5">
                <div class="row gap-4">
                    <div class="col-sm">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="para pt-2">
                            <p>Cookpal is a recipe website with a wide variety of delicious recipes, easy-to-use search function. Join our community and let's cook together!</p>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div className="compnay">
                            <div className="heading">
                                <p>Company</p>
                            </div>
                            <div className='content'>

                                <li>Home</li>
                                <li>Explore</li>
                                <li>Team</li>
                                <li>About us</li>
                                <li>Activity</li>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div className="compnay">
                            <div className="heading">
                                <p>Resources</p>
                            </div>
                            <div className='content'>

                                <li>Blog</li>
                                <li>Use Cases</li>
                                <li>Testimonials</li>
                                <li>Insights</li>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="discr pt-4">
                            <p>Ut risus mattis interdum faucibus facilisi. Facilisi purus accumsan aliquam.</p>
                        </div>
                        <div className="email_sec d-flex gap-1">
                            <div className='searchBar'>
                                <input type="text" />
                            </div>
                            <div className='atd'>
                            <img src={kkk} alt="" />    
                            </div>
                            <div>
                                <button className='btn btn-success' style={{height:"50px"}}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer