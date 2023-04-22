import React from 'react';
import NavbarStandard from './NavbarStandard';
import Hero from './Hero';
import Partners from './Partners';
import Processes from './Processes';
import Services from './Services';
import Testimonial from './Testimonial';
import { Card } from 'react-bootstrap';
import Cta from './Cta';
import FooterStandard from './FooterStandard';
import FrontendAddProduct from 'Mai Components/Product/FrontendAddProduct';
const Landing = () => {
  return (
    <>
      <NavbarStandard />
    
      <FrontendAddProduct />
  
      <FooterStandard />
      {/* <Hero /> */}
      {/* <Partners /> */}
      {/* <Processes /> */}
      {/* <Services /> */}
      {/* <Testimonial /> */}
      {/* <Cta /> */}
    </>
  );
};

export default Landing;
