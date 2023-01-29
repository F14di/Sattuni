import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
// import FeaturesTiles from '../components/sections/FeaturesTiles';
// import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
// import Cta from '../components/sections/Cta';
import FeaturesDescriptiveText from '../components/sections/FeaturesDescriptiveText';
import FeaturesBriefMenu from '../components/sections/FeaturesBriefMenu';
import FeaturesContactUs from '../components/sections/FeaturesContactUs';
// import ScrollObserver from '../utils/scroll-observer';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesDescriptiveText /> {/*bottomOuterDivider*/}
      <FeaturesBriefMenu />
      <Testimonial topDivider />
      <FeaturesContactUs />
      {/* <FeaturesTiles /> */}
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/* <Cta split /> */}
    </>
  );
}

export default Home;