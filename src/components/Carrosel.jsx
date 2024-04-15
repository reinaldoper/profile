import data from "../datas/dataProjetos"
import { Carousel } from 'antd';

const contentStyle = {
  borderRadius: '5px',
  height: '260px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carrosel = () => {
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
  )
}

export default Carrosel
