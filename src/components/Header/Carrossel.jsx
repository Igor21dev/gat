import './carrossel.css'
import React from 'react'
import { img1, img2, img3, arrow1, arrow2 } from '../../assets';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev mt-[40px] " onClick={onClick}>
    <img src={arrow1} alt="Seta Esquerda" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next mt-[40px]" onClick={onClick}>
    <img src={arrow2} alt="Seta Direita" />
  </div>
);


const carrossel = () => {


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true, 
      focusOnSelect: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      appendDots: dots => (
        <div className='z-100'>
          <ul className="dots flex gap-3 h-[80px] ml-[144px]">{dots}</ul>
        </div>
      ),
    };

    const imgs = [
        { id: 1, name: 'img1', img: img1, review: <div></div> },
        { id: 2, name: 'img3', img: img3, review: 'null' },
        { id: 3, name: 'img2', img: img2, review: 'null' },
    ]

  return (
    <div className='w-full m-auto mt-[10px]'>
      <div className='w-full m-auto'>
        <div className='main'>
        <Slider {...settings}>
          {imgs.map((img) => (
              <div key={img.id}> 
                <img className="w-full h-auto max-h-[660px] m-auto" src={img.img} alt="" />           
                {img.review !== 'null' && img.id === 1 && (
                  <div className='containerHoldButton relative flex justify-center'>
                    <button className='button-container bg-black text-white py-4 px-6 rounded-[30px]'>VER COLEÇÃO</button>
                  </div>
                )}
              </div>
          ))}
        </Slider>
        </div>  
      </div>
    </div>
  )
}

export default carrossel