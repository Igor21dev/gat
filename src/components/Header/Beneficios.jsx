import React from 'react'
import './beneficios.css'
import { numdez, prize, paw, pawL } from '../../assets'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Beneficios = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        centerPadding: '20%',
        rtl: true
      };

  return (
    <div>
      <div className='barra w-[92.5%] mx-auto h-[9px] mt-[-7px]'></div>
      <div className='banner w-[92.5%] mx-auto h-[285px] flex items-center justify-center'>
            <div className='container border-2 !w-[1220px] h-[210px] mt-[5px]'>
                <div className='beneficioPrincipal border w-[369px] h-full'>
                    <img className='ml-[20px] mt-[30px] h-[130px]' src={numdez} alt="numdez" />
                    <h1 className='titulo1 leading-tight mt-[-140px] ml-[165px] mr-[20px]'>Benifício Principal</h1>
                    <p className='paragrafo1 mt-80px] ml-[165px]'>Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className='benefi1 border w-[400px] h-[150px] mt-[-60px] '>
                    <img src={prize} className='ml-[25px] mt-[17px] h-[55px]' alt="Imagem ilustrativa" />
                    <h2 className='title2 text-right mt-[-60px] mr-[20px]'>Benefício Secundário</h2>
                    <p className='paragrafo2 mt-[2px] ml-[26px]'>Lorem ipsum dolor sit amet, consectetur al muad’ib.</p>
                </div>
                <div className='benefi2 border w-[400px] h-[150px] mt-[-60px] '>
                    <img src={prize} className='ml-[25px] mt-[17px] h-[55px]' alt="Imagem ilustrativa" />
                    <h2 className='title2 text-right mt-[-60px] mr-[20px]'>Benefício Secundário</h2>
                    <p className='paragrafo2 mt-[2px] ml-[26px]'>Lorem ipsum dolor sit amet, consectetur al muad’ib.</p>
                </div>
                <div className='benefi3 border w-[400px] h-[150px] mt-[-60px] '>
                    <img src={prize} className='ml-[25px] mt-[17px] h-[55px]' alt="Imagem ilustrativa" />
                    <h2 className='title2 text-right mt-[-60px] mr-[20px]'>Benefício Secundário</h2>
                    <p className='paragrafo2 mt-[2px] ml-[26px]'>Lorem ipsum dolor sit amet, consectetur al muad’ib.</p>
                </div>
            </div>
        </div>
        <Slider {...settings} className='carrossel mt-[-75px] w-[55.8%] ml-[34.2%]'>
            <div className='max-w-full'>
                <p className='textPCarrossel whitespace-nowrap'>Benefício Terciário</p>
            </div>
            <div className='mx-[60px]' >
                <img src={paw} alt="" />
            </div>
            <div className='max-w-full'>
                <p className='textPCarrossel whitespace-nowrap'>Benefício Terciário</p>
            </div>
            <div className='mx-[60px]' >
                <img src={pawL} alt="" />
            </div>
            <div className='max-w-full'>
                <p className='textPCarrossel whitespace-nowrap'>Lisan Al Gaib</p>
            </div>
            <div className='mx-[60px]'>
                <img src={paw} alt="" />
            </div>
            <div className='max-w-full'>
                <p className='textPCarrossel whitespace-nowrap'>Benefício Terciário</p>
            </div>
            <div className='mx-[60px]' >
                <img src={pawL} alt="" />
            </div>
        </Slider>  
    </div>
  )
}

export default Beneficios
