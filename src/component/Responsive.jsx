import React, { useState, useEffect } from 'react';

const ResponsiveImage = ({ mobileImgSrc, desktopImgSrc }) => {
  const [imageView, setImageView] = useState(
    window.matchMedia('(max-width: 600px)').matches ? (
      <img src={mobileImgSrc} alt="Mobile Image" />
    ) : (
      <img src={desktopImgSrc} alt="Desktop Image" />
    )
  );

  useEffect(() => {
    const widthHandle = () => {
      if (window.matchMedia('(max-width: 600px)').matches) {
        setImageView(<img src={mobileImgSrc} alt="Mobile Image" />);
      } else {
        setImageView(<img src={desktopImgSrc} alt="Desktop Image" />);
      }
    };

    window.addEventListener('resize', widthHandle);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', widthHandle);
    };
  }, [mobileImgSrc, desktopImgSrc]);

  return <div>{imageView}</div>;
};

export default ResponsiveImage;
