import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const FeaturesCatering = ({
  className,
  alignTop,
  ...props
}) => {


  const carouselImages =[1,2,3,4,5,6,7,8,9,10,11,12,13];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 3,
          slidesToScroll:2,
          infinite:true,
          autoplay:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay:false,
          arrows: false,
          centerMode: true,
          dots: false,
          centerPadding: '20px',
          slidesToShow: 1,
          infinite:true
        }
      }
    ]
  };

  const outerClasses = classNames(
    'features-catering section',
    className
  );

  const innerClasses = classNames(
    'features-catering-inner section-inner',
  );


  return (
    <section
      {...props}
      id="features-catering"
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>

            <div className="catering-section-wrapper catering-section-wrapper-1">
              <div className="center-content-mobile reveal-from-left" data-reveal-container=".catering-section-wrapper" data-reveal-delay="180">
                <h4 className="catering-title text-md text-color-secondary fw-200 mb-8">Catering von sattuni <span role="img" aria-label='catering-plate-star-emoji'>🍽✨</span> Menüs für jedes Event </h4>
                <p>Hey, willkommen bei sattuni! Wir sind Meister darin, dein Event mit kreativem Catering unvergesslich zu machen. Egal ob für Firmenfeiern <span role="img" aria-label='catering-building-emoji'>🏢</span>, Geburtstage <span role="img" aria-label='catering-cake-emoji'>🎂</span>, Hochzeiten <span role="img" aria-label='catering-ring-emoji'>💍</span> oder Partys <span role="img" aria-label='catering-celebrate-emoji'>🎉</span> - wir bringen Geschmacksexplosionen direkt zu dir.</p>
              </div>
            </div>
            <div className="catering-section-wrapper catering-section-wrapper-2">
              <div className="center-content-mobile reveal-from-left" data-reveal-container=".catering-section-wrapper" data-reveal-delay="460">
              <p>
                <strong>Business-Catering?</strong> Wir verwandeln Meetings in Feasts!<br/>
                <strong>Geburtstagsbuffets?</strong> Dein Start ins neue Lebensjahr wird legendär.<br/>
                <strong>Hochzeiten?</strong> Wir machen deinen Tag magisch mit Menüs, die Liebe schmecken lassen.<br/>
                <strong>Party-Time?</strong> Unsere Vielfalt rockt jede Party.<br/>
              </p>
              </div>
            </div>
            <div className="catering-section-wrapper catering-section-wrapper-3">
              <div className="center-content-mobile reveal-from-left" data-reveal-container=".catering-section-wrapper" data-reveal-delay="460">
                <h6 className="text-color-secondary">Du bist der Star <span role="img" aria-label='star-icon-emoji'>🌟</span>:</h6>
                <p>Sag uns, was du dir vorstellst, und wir zaubern was Einzigartiges. Check unsere Galerie für Inspiration und meld dich über unser Formular. Let's make magic together!</p>
              </div>
            </div>

            <Slider {...settings}>
              {carouselImages.map(image=>{
                return <div className="catering-image-container"><Image src={require(`./../../assets/images/catering/${image}.png`)} alt={`image${image}`}></Image></div>
              })}
            </Slider>


        </div>
      </div>
    </section>
  );
}

FeaturesCatering.propTypes = propTypes;
FeaturesCatering.defaultProps = defaultProps;

export default FeaturesCatering;