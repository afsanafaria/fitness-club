import React from 'react';
import './Header.css'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from '../Home/Home'
import About from '../About/About'
import Services from '../Services/Services'
import NotFound from '../NotFound/NotFound'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Contact from '../Contact/Contact';
// import Offers from '../Offers/Offers';
import ServicePage from '../ServicePage/ServicePage';
// import Button from '@restart/ui/esm/Button';

const Header = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar bg="light" expand="lg" >
                    <Container>
                        <Navbar.Brand className="logo">Fitness Club By Afsana</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto navbar">

                                <NavLink className="anchor" to="/home">Home</NavLink>
                                <NavLink className="anchor" to="/about">About</NavLink>
                                <NavLink className="anchor" to="/services">Services</NavLink>
                                {/* <NavLink className="anchor" to="/offers">Offers</NavLink> */}
                                <NavLink className="anchor" to="/contact">Contact</NavLink>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>



                <Switch>
                    <Route exact path="/">
                        <Home></Home>

                    </Route>

                    <Route path="/home">
                        <Home></Home>

                    </Route>

                    <Route path="/about">
                        <About></About>
                    </Route>

                    <Route path="/services">
                        <Services></Services>
                    </Route>

                    <Route path="/servicepage/:serviceIndex">
                        <ServicePage></ServicePage>
                    </Route>

                    {/*   <Route path="/offers">
                        <Offers></Offers>
                    </Route> */}

                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>

                    <Route>
                        <NotFound></NotFound>
                    </Route>


                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Header;