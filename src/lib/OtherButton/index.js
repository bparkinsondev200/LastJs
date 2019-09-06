import React, { useState } from 'react';

const colorTheme = {
  primary: '#8889a8',
  primeryHover: '#9e9fba',
  info: '#1a193c',
  success: '#5ea46a',
  warning: '#db9432',
  danger: '#f44336',
}

const OtherButton = ({ text, color }) => {
  const [hover, setHover] = useState(false)
  const buttonColor = colorTheme[color]
  return (
    <button
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      style={{
        backgroundColor: buttonColor,
        border: 0,
        borderRadius: 6,
        fontSize: '90%',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
        outline: 'none',
        textDecoration: 'none',
        fontFamily: 'helvetica neue, helvetica, arial, sans-serif',
        fontSmooth: 'always',
        margin: '20px 10px 20px 10px',
        textAlign: 'center',
        fontWeight: 500,
        padding: '12px 20px 12px 20px',
        display: 'inline-block',
        transitionDuration: 1000,
        transitionProperty: 'transform',
        transform: 'translateZ(0)',
        opacity: hover ? .9 : 1,
        cursor: 'pointer',
      }}
      className="button"
    >
      {text}
    </button >
  )
}

export { OtherButton };
