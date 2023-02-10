import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import SmoothScroll from '../elements/SmoothScroll';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {



  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      id="section-hero"
      {...props}
      className={outerClasses}
    >
      {/* <image src="../../assets/images/Sattuni_Close up_1.jpg" width={'100%'} height={'100%'} style={{position:'absolute', height:'100%', width:'100%'}}/> */}
      {/* <Image src={require(`./../../assets/images/Sattuni_Close up_1.jpg`)} style={{margin:"0 auto", width:'100%', height:'100%', zIndex:'1111', position:'absolute', top:'0', left:'0'}}/> */}
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">Herzlich Willkommen bei  <span className="text-color-primary">Sattuni</span></h1>
            <div className="container-xs">
              <h4 className="m-0 mb-32 hero-subtitle reveal-from-bottom" data-reveal-delay="400">Die besten arabischen Köstlichkeiten - jetzt bequem geliefert.</h4>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile data-glf-cuid="34d14a10-f27f-4ca4-9379-a56fdb3bec53" data-glf-ruid="a1654ea9-73ac-4738-ac58-ca16dc332c65" >Menü &amp; bestellen</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className='hero-scroll-icon-container' id="hero-scroll-icon-container" >
            <SmoothScroll to="hero-scroll-icon-container"><div className="hero-scroll-icon"></div></SmoothScroll>
          </div>
          
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;