import classNames from "classnames";
import React, { useContext } from "react";
import { ScrollContext } from "../../../utils/scroll-observer";
import { SectionProps } from "../../../utils/SectionProps";
import Button from "../../elements/Button";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const OrderButton = () =>{
    const {scrollY} = useContext(ScrollContext);

    // console.log(scrollY, window.innerHeight)
    const outerClasses = classNames(
        'btn-order-now-wrapper',
        scrollY > window.innerHeight*0.8 && 'btn-visible'
    )
    const classes = classNames(
        'btn-order-now'
    )

    return (<> 
    <div className={outerClasses}>
        <Button color="primary" wide={true} className={classes} tag="button" isRound={true} data-glf-cuid="34d14a10-f27f-4ca4-9379-a56fdb3bec53" data-glf-ruid="a1654ea9-73ac-4738-ac58-ca16dc332c65">Jetzt bestellen</Button>
    </div>
    </>)
}

OrderButton.propTypes = propTypes;
OrderButton.defaultProps = defaultProps;

export default OrderButton;