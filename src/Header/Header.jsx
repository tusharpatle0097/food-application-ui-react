import React from 'react';
import mainLogo from "../assets/Cookpal 1.png"
import menubar from "../assets/menu.svg"
import searchicone from "../assets/li_search.svg"


const logo = mainLogo;
const menu = menubar;
const mysearchi = searchicone;

const Header = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                        <div className="logo">
                            {/* <img src={menu} alt="" /> */}
                        </div>
                        <div className="navbar-brand" href="#">
                            <img src={logo} alt="" style={{ width: "96px", height: "46px" }} />
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                                <div className="searchbar">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle buttonChange" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            All Categories
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <div className="line">
                                    </div>
                                    <div className="inputbar">
                                        <input className='inputtype' type="text" placeholder='Search for recipes...' onclick="this.blur()" />
                                    </div>
                                    <div className="searchIcone">
                                        <img src={mysearchi} alt="" />
                                    </div>
                                </div>



                            </ul>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active programs1" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active programs" aria-current="page" href="#">Explore</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active programs" aria-current="page" href="#">Help</a>
                                </li>

                            </ul>
                            <div className="userprofile">

                                <a className="nav-link active" aria-current="page" href="#">
                                    <img className='UserPerson' src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                                </a>

                            </div>
                        </div>
                    </div>
                </nav>

            </div>

        </>
    )
}

export default Header