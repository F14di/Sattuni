import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {
  
  const width = props.width?+props.width:64
  const height = props.height?+props.height:64
  const logoSrc = props.src || require(`./../../../assets/images/logo/Logo for Website/${width}.png`)

  const classes = classNames(
    'brand',
    className
  );

return (
  <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={logoSrc}
            alt="Open"
            width={width}
            height={height} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;