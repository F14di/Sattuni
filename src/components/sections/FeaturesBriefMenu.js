import React, { useContext, useRef } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { ScrollContext } from '../../utils/scroll-observer';
import Image from '../elements/Image';
// import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const opacityForBlock = (sectionProgress, blockNo) =>{
    if(sectionProgress - blockNo > 0 && sectionProgress - blockNo  <=1){
      return 'image-visible'
    }
    return '';
}
const FeaturesBriefMenu = ({
  className,
//   topOuterDivider,
  bottomOuterDivider,
//   topDivider,
//   bottomDivider,
//   hasBgColor,
//   invertColor,
//   pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-brief-menu section',
    // topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    // hasBgColor && 'has-bg-color',
    // invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-brief-menu-inner section-inner',
    // topDivider && 'has-top-divider',
    // bottomDivider && 'has-bottom-divider'
  );


const {scrollY} = useContext(ScrollContext);
const refContainerBriefMenu = useRef(null)
const numOfTextElement = 5
let progress = 0;

const {current: elContainer} = refContainerBriefMenu

if(elContainer){
    const {clientHeight, offsetTop} = elContainer
    const screenH = window.innerHeight;
    const halfH = screenH/2
    const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
    progress = Math.min(numOfTextElement + 1, Math.max(1, percentY * numOfTextElement))
}
  return (
    <section
      {...props}
      className={outerClasses}
      id="features-brief-menu"
      ref={refContainerBriefMenu} >
      <div className="section-inner-wrapper container" >
        <div className={innerClasses} >
          <div className="brief-menu-grid-layout">
            <div className="plates-wrapper">
              <div className="plates-inner-wrapper" >
                  <div className="plate-wrapper" >
                      <div className="plate-item" >
                          <div className="plate-item-image-area plate-item-image-area-mobile-only">
                              <Image src={require('./../../assets/images/Aleppo Bowl_Sattuni.jpg')} width={528} height={396} alt="" style={{margin:"0 auto"}}/>
                          </div>
                          <div className="plate-item-text-area">
                              <h5>Aleppo Bowl Sattuni</h5>
                              <p>Aleppo Bowl Sattuni long text  ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektr</p>
                          </div>
                      </div>
                  </div>
                  <div className="plate-wrapper" >
                    <div className="plate-item" >
                          <div className="plate-item-image-area plate-item-image-area-mobile-only">
                              <Image src={require('./../../assets/images/Baba Ganoush_Sattuni.jpg')} width={528} height={396} alt="" style={{margin:"0 auto"}}/>
                          </div>
                          <div className="plate-item-text-area">
                              <h5>Baba Ganoush_Sattuni</h5>
                              <p>Baba Ganoush_Sattuni long text  ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektr</p>
                          </div>
                      </div>
                  </div>
                  <div className="plate-wrapper" >
                    <div className="plate-item" >
                          <div className="plate-item-image-area plate-item-image-area-mobile-only">
                              <Image src={require('./../../assets/images/Damascus Plate_Sattuni.jpg')} width={528} height={396} alt="" style={{margin:"0 auto"}}/>
                          </div>
                          <div className="plate-item-text-area">
                              <h5>Damascus Plate_Sattuni</h5>
                              <p>Damascus Plate_Sattuni long text  ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektr</p>
                          </div>
                      </div>
                  </div>
                  <div className="plate-wrapper" >
                    <div className="plate-item" >
                          <div className="plate-item-image-area plate-item-image-area-mobile-only">
                              <Image src={require('./../../assets/images/Fatayer_Sattuni.jpg')} width={528} height={396} alt="" style={{margin:"0 auto"}}/>
                          </div>
                          <div className="plate-item-text-area">
                              <h5>Fatayer_Sattuni</h5>
                              <p>Fatayer_Sattuni long text  ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektr</p>
                          </div>
                      </div>
                  </div>
                  <div className="plate-wrapper" >
                    <div className="plate-item" >
                          <div className="plate-item-image-area plate-item-image-area-mobile-only">
                              <Image src={require('./../../assets/images/Salad Fawake_Sattuni.jpg')} width={528} height={396} alt="" style={{margin:"0 auto"}}/>
                          </div>
                          <div className="plate-item-text-area">
                              <h5>Salad Fawake_Sattuni</h5>
                              <p>Salad Fawake_Sattuni long text  ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektr</p>
                          </div>
                          
                      </div>
                  </div>
              </div>
            </div>
            <div className="plate-images-wrapper-section">
              <div className="plate-images-inner-wrapper">
                <Image className={`${opacityForBlock(progress , 0)}`} src={require('./../../assets/images/Aleppo Bowl_Sattuni.jpg')} width={528} height={396} alt="" style={{position:'absolute'}}/>
                <Image className={`${opacityForBlock(progress , 1)}`} src={require('./../../assets/images/Baba Ganoush_Sattuni.jpg')} width={528} height={396} alt="" style={{position:'absolute'}}/>
                <Image className={`${opacityForBlock(progress , 2)}`} src={require('./../../assets/images/Damascus Plate_Sattuni.jpg')} width={528} height={396} alt="" style={{position:'absolute'}}/>
                <Image className={`${opacityForBlock(progress , 3)}`} src={require('./../../assets/images/Fatayer_Sattuni.jpg')} width={528} height={396} alt="" style={{position:'absolute'}}/>
                <Image className={`${opacityForBlock(progress , 4)}`} src={require('./../../assets/images/Salad Fawake_Sattuni.jpg')} width={528} height={396} alt="" style={{position:'absolute'}}/>
              </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}

FeaturesBriefMenu.propTypes = propTypes;
FeaturesBriefMenu.defaultProps = defaultProps;

export default FeaturesBriefMenu;