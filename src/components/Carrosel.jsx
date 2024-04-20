import data from "../datas/dataProjetos"
import { Carousel } from 'antd';
import { useState, useEffect } from 'react';

const Carrosel = () => {
  const [contentStyle, setContentStyle] = useState({
    borderRadius: '5px',
    height: '260px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = () => {
      if (mediaQuery.matches) {
        setContentStyle({
          ...contentStyle,
          height: '100px',
          lineHeight: '50px',
        });
      } else {
        setContentStyle({
          borderRadius: '5px',
          height: '260px',
          color: '#fff',
          lineHeight: '160px',
          textAlign: 'center',
          background: '#364d79',
        });
      }
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    handleMediaQueryChange();

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const dataProject = data.map(i => (
    <div key={i.id}>
      <img style={contentStyle} src={i.image} alt={i.title} />
    </div>
  ));

  return (
    <>
      <Carousel autoplay>
          {dataProject}
      </Carousel>
    </>
  );
}

export default Carrosel;
