import React from 'react';
import { SectionProps } from '../../utils/SectionProps';
import { STATIC_VARIABLES } from '../../utils/staticValues';

const PropTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const TermsAndConditions = ({
  className,
  hasBgColor,
  ...props
}) => {
    const {termsAndConditions} = STATIC_VARIABLES;
    const {header, text} = termsAndConditions[props.termName];
    return(
        <>
            <h4>{header ?? ''}</h4>
            <pre>{text ?? ''}</pre>
        </>
    )
}


TermsAndConditions.propTypes = PropTypes;
TermsAndConditions.defaultProps = defaultProps;

export default TermsAndConditions;