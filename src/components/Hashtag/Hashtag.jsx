import React, { useState } from 'react'
import './hashtag.css'
import { gato1, gato2, gato3, gato4, gato5, heart, redHeart } from '../../assets'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  

const images = [gato1, gato2, gato3, gato4, gato5];

const Hashtag = () => {
    // Array de estados para cada imagem, iniciando como falso (não curtir)
    const [likes, setLikes] = useState(Array(images.length).fill(false));

    // Função para alternar o estado de "curtido" para cada imagem
    const toggleLike = (index) => {
        const newLikes = [...likes]; // Cria uma cópia do estado atual
        newLikes[index] = !newLikes[index]; // Inverte o valor do "curtido"
        setLikes(newLikes); // Atualiza o estado
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        pauseOnHover: false,
    };

    return (
        <div>
            <div className='containerHashtag w-full h-[857px] transform translate-y-[1930px] relative'>
                <div>
                    <p className='ml-[280px] text-[23.5px] transform translate-y-[78px] leading-[1.2] '>Faça parte da comunidade de gatunos que amam <br />
                        design e papelão compartilhando a hashtag:</p>
                    <h1 className='relative ml-[270px] mt-[57px] text-[90px] z-50 text-[#7EB4C8]'>#AdoradoresDePapelão</h1>
                </div>
                <div className='carrosselGatos mt-[-55px] z-10'>
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Gato ${index}`} className='gato' />
                                <div className='flex'>
                                    <img 
                                        src={likes[index] ? redHeart : heart}
                                        alt="Coração"
                                        className='iconHeart transform translate-y-[-50px] ml-[305px] cursor-pointer'
                                        onClick={() => toggleLike(index)} 
                                    />
                                    <p className='transform translate-y-[-25px] ml-[320px] text-[white] text-[15px]'>10mil</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Hashtag