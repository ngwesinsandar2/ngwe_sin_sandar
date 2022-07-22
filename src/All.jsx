import React from 'react';
import ResponsiveAppBar from './components/Nav/ResponsiveAppBar';
import About from './Pages/AboutPage/About';
import Home from './Pages/HomePage/Home';
import Portfolio from './Pages/Projects/Projects';
import Services from './Pages/ServicesPage/Services';
import Contact from './Pages/ContactPage/Contact';
import Footer from './components/Footer/Footer'; 
import ThemeBtn from './components/Theme/ThemeBtn';
import ScrollToTopBtn from './components/ScrollToTop/ScrollToTopBtn';
import Cursor from './components/Cursor/Cursor';

const All = () => {
    return ( 
        <>
            <ResponsiveAppBar />
            <Home />
            <About />
            <Portfolio />
            <Services />
            <Contact />
            <Footer />
            <ThemeBtn />
            <ScrollToTopBtn />
            <Cursor />
        </>
     );
}
 
export default All;
