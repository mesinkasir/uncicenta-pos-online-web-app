import React from "react";
import { Link } from "react-router-dom";
const Home = () => {return (<div className="p-3 p-md-5 text-center"><h1> <strong>Unincenta POS</strong> <br /> Web Apps</h1> <img className="img-fluid rounded-circle" width="200" alt="unicenta pos web app online backoffice dashboard" src="https://1.bp.blogspot.com/-kRB19vZdSOk/YDc6FGUOCgI/AAAAAAAANGc/CpwzKyuvxSodL61CSOobQO_zBzYPu5iIgCLcBGAsYHQ/s300/unicenta_device_dark_300.png" /><h3>The revolutions new generation of unincenta opos.</h3><p> This web apps is develope by axcora technology team, for frontend backoffice of unincenta opos.</p><Link to="/about" className="btn btn-info rounded-pill"> Get Started</Link></div>);};
export default Home;
