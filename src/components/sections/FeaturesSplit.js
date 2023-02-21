import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
// import SectionHeader from './partials/SectionHeader';
// import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );


  return (
    <section
      {...props}
      id="features-split"
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8"> Qualität </div>
                <p className="m-0 text-color-bg">Genieße den Geschmack von Frische und Aromen mit unseren Bowls! Unsere Küche besteht aus den besten Zutaten wie frischen Salaten, aromatischen Kräutern und knackigem Gemüse. Erlebe jeden Tag frisch zubereitete Köstlichkeiten bei uns.</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8"> Pünktlichkeit &amp; Zuverlässigkeit </div>
                <p className="m-0 text-color-bg">Garantierte Pünktlichkeit und Zuverlässigkeit - das ist unser Versprechen an dich! Bei uns kannst du dich auf schnelle und termingerechte Lieferung deiner Lieblingsgerichte verlassen. Unser Team arbeitet hart daran, jede Bestellung pünktlich und frisch zuzubereiten. Vertraue auf uns und genieße dein Essen bequem zu Hause - pünktlich geliefert!</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">Gewürze &amp; Rezepte</div>
                <p className="m-0 text-color-bg">Intensive, rassige Aromen begleiten unsere köstlichen Speisen. Bei uns findest du exotische und wunderbare Bowls, die durch unsere ausgefeilten Gewürzkreationen und Rezepturen deine Sinne beflügeln werden.</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;