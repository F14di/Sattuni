import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';







// const PLACE_ID = "ChIJufAIx9PJuEcRmGaB3_K58Ek";
// const API_KEY = "AIzaSyCuEvWKO77iRzg3EBFlRRl-dRfgFfVhlLk";



const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Das sagen unsere Kunden über uns',
    paragraph: ''
  };

  // useEffect(()=>{
  //   fetch(
  //     `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&key=${API_KEY}`
  //   )
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       let reviews = data.result.reviews;
  //       reviews = reviews.filter(review => review.rating === 5);
  //       reviews.sort((a, b) => new Date(b.time) - new Date(a.time));
  //       reviews = reviews.slice(0, 3);
  //       console.log("\n Latest Three 5-Star Business Reviews: \n");
  //       for (const review of reviews) {
  //         console.log(`Author Name: ${review.author_name}`);
  //         console.log(`Rating: ${review.rating} out of 5.0`);
  //         console.log(`Text: ${review.text}`);
  //         console.log("\n");
  //       }
  //     })
  //     .catch(error => {
  //       console.error(`Looks like something went wrong: ${error}`);
  //     });
    
  // },[])
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-left" data-reveal-delay="20">
              {/* <Image className="testimonials-image-avatar" width={'65'} height={'65'} src={require(`./../../assets/images/avatars/avataaars3.png`)}/> */}
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0"> — Incredible delicious <span role="img" aria-label="emoji-delicious">😋</span>. I can't get enough of it. Absolutely recommendable. Very nice owner.</p>
                </div>
                <div className="testimonial-item-footer text-xs mt-12 pt-8 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high"></span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <span>Google</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="280">
            {/* <Image className="testimonials-image-avatar" width={'65'} height={'65'} src={require(`./../../assets/images/avatars/avataaars2.png`)}/> */}
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0"> — Nice concept and tasty food. I like particularly the main dishes and the rice! The owner is very friendly and approachable. I definitely recommend this place! </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-12 pt-8 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high"></span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <span>Google</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="420">
            {/* <Image className="testimonials-image-avatar" width={'65'} height={'65'} src={require(`./../../assets/images/avatars/avataaars4.png`)}/> */}
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0"> — Ganz neues Restaurant in unmittelbarer Nähe zum Rhein! Auf der Karte findet ihr verschiedene frisch zubereitete, orientalische Gerichte. Wir hatten einen Hummus Teller, Couscous, gegrilltes Gemüse, Hühnchen und Falafel! Alles war sehr lecker <span role="img" aria-label="emoji-delicious">😋</span> wir kommen auf jeden Fall wieder! <span role="img" aria-label="emoji-hearts">💕</span> </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-12 pt-8 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high"></span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <span>Google</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;




