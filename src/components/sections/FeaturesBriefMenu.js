import React, { useContext, useRef } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { ScrollContext } from '../../utils/scroll-observer';
import Image from '../elements/Image';
import {STATIC_VARIABLES } from '../../utils/staticValues.js'
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
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
//   bottomDivider,
//   hasBgColor,
//   invertColor,
//   pushLeft,
  ...props
}) => {
  const {featuresBriefMenu} = STATIC_VARIABLES;
  const meals = featuresBriefMenu.meals;
  // console.log(meals.length)

  const outerClasses = classNames(
    'features-brief-menu section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    // hasBgColor && 'has-bg-color',
    // invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-brief-menu-inner section-inner',
    topDivider && 'has-top-divider',
    // bottomDivider && 'has-bottom-divider'
  );


const {scrollY} = useContext(ScrollContext);
const refContainerBriefMenu = useRef(null)
const numOfTextElement = meals.length
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
                {meals.map((MEAL, idx) => {
                  return (<div className="plate-wrapper" key={idx}>
                      <div className="plate-item" >
                          <div className="plate-item-image-area plate-item-image-area-mobile-only">
                              <Image src={require(`./../../assets/images/bowls-minified/${MEAL.imgNoBg}.png`)}   alt={MEAL.alt} style={{margin:"0 auto"}}/>
                          </div>
                          <div className="plate-item-text-area">
                              <h4>{MEAL.headerText}</h4>
                              <p>{MEAL.descriptionText}</p>
                          </div>
                      </div>
                  </div>)
                })}
              </div>
            </div>
            <div className="plate-images-wrapper-section">
              <div className="plate-images-inner-wrapper">
                {meals.map((MEAL, i)=><Image className={`${opacityForBlock(progress , i)}`} src={require(`./../../assets/images/bowls-minified/${MEAL.imgNoBg}.png`)} width={280} height={280} alt={MEAL.alt} style={{position:'absolute'}} key={i}/>)}
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