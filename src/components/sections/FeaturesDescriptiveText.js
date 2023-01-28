import React, { useContext, useRef } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { ScrollContext } from '../../utils/scroll-observer';
// import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const opacityForBlock = (sectionProgress, textElNo) =>{
    const progress = sectionProgress - textElNo;
    if(progress >=0 && progress<1) return 'text-focus';
    return '';
}
const FeaturesDescriptiveText = ({
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
    'features-descriptive-text section',
    // topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    // hasBgColor && 'has-bg-color',
    // invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-descriptive-text-inner section-inner',
    // topDivider && 'has-top-divider',
    // bottomDivider && 'has-bottom-divider'
  );

  const descriptiveTextClasses = classNames(
    'descriptive-text-wrap center-content',
    // pushLeft && 'push-left'
  );

//   const sectionHeader = {
//     title: 'Build up the whole picture',
//     paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
//   };

const {scrollY} = useContext(ScrollContext);
const refContainer = useRef(null)
const numOfTextElement = 3
// const scrollTopCorrectionFactor = 0.108;
let progress = 0;

const {current: elContainer} = refContainer

if(elContainer){
    const {clientHeight, offsetTop} = elContainer
    const screenH = window.innerHeight;
    const halfH = screenH/2
    const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
    progress = Math.min(numOfTextElement - 0.5, Math.max(0.5, percentY * numOfTextElement))
}
  return (
    <section
      {...props}
      className={outerClasses}
      id="features-descriptive-text"
      ref={refContainer} >
      <div className="section-inner-wrapper container flex flex-column justify-center">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={descriptiveTextClasses}>

            <div className="descriptive-text-item reveal-from-bottom">
              <div className="descriptive-text-item-inner">
                <div className="features-descriptive-text-item-content">
                    <h1 className={`descriptive-text ${opacityForBlock(progress , 0)}`} >Willkommen im Sattuni, Ihrem Mittelost-Restaurant in Düsseldorf!</h1>
                    <span  className={`descriptive-text ${opacityForBlock(progress , 1)}`}>Wir bieten Ihnen eine breite Auswahl an leckeren, gesunden Gerichten aus der palästinensischen Küche. Ob traditionelle Rezepte oder moderne Interpretationen, es ist für jeden Geschmack etwas dabei.</span>
                    <span  className={`descriptive-text ${opacityForBlock(progress , 2)}`}> Besuchen Sie unsere Website, um unsere vollständige Speisekarte zu sehen und Ihre Bestellung aufzugeben. Wir bieten auch Lieferservice innerhalb Düsseldorfs an. Wir freuen uns darauf, Ihnen bald Ihr Essen zu liefern!</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesDescriptiveText.propTypes = propTypes;
FeaturesDescriptiveText.defaultProps = defaultProps;

export default FeaturesDescriptiveText;