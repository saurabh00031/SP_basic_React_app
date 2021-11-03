//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-info pt-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" >my-app</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">ABOUT US</a>
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
          <a className="nav-link disabled"></a>
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

    </>
    // <>
    // <h1>sp react</h1>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       ... Learn React with SSP ...
    //     </a>
    //   </header>
    // </div>
    
    // </>
  );
}

export default App;
