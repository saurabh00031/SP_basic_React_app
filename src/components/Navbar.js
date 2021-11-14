import React from 'react'
import PropTypes from 'prop-types'   //type impt for it

//let name="saurabh patil";


export default function Navbar(props) {
    return (
        <div><nav className="navbar navbar-expand-lg navbar-light bg-info pt-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" >{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutTxt}</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  OPTIONS
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">A</a></li>
                  <li><a className="dropdown-item" href="/">B</a></li>
                  <li><a className="dropdown-item" href="/">C</a></li>
                  <li><a className="dropdown-item" href="/">D</a></li>
                </ul>
              </li>
              <li className="nav-item">
               
              </li>
            </ul>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
     
           {/* <div className="blank">
            <nav>
              <li>HOME</li>
              <li>ABOUS US</li>
              <li>CONTACT US</li>
              <li>BACK</li>
            </nav>
            </div>
      
          <div className="container">
          <h1>hello <b>{name}</b></h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nisi quos! Aliquam quasi, 
          ipsam minus id in distinctio labore totam asperiores nesciunt cum.
          </div>  */}
      
          
          
          
          </div>

    )
}

Navbar.propTypes={
    title:PropTypes.string,
    aboutTxt:PropTypes.string,
}


Navbar.defaultProps={
    title:"set name",
    aboutTxt:"ABOUT US"
}

// Navbar.defaultProps={
//     title:"set name",
//     aboutTxt:"set about"
// }



//type rfc fot above syntax,impt for props syntax