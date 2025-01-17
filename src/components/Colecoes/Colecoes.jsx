import React, { useState } from 'react'
import './colecoes.css'
import { arrow1, arrow2, triangulo, gatoCaixa, mais, complementoMais, circulo, noventaGraus } from '../../assets'

const Colecoes = () => {
    const [clicked, setClicked] = useState(false);
    
    const handleClick = () => {
        setClicked(!clicked);
    };
  return (
    <div>
      <div className='container absolute !mt-[135px]'>
        <h1 className='colecoesTitulo absolute flex justify-center ml-[140px]'>COLEÇÕES</h1>
        <a className='underline ml-[450px] mt-[5px]' href="#">VER TODAS</a>
        <div className='absolute flex justify-center ml-[725px]'>
            <img className='w-[50px] mx-[40px]' src={arrow1} alt="" />
            <img className='w-[50px]' src={arrow2} alt="" />
        </div>
        <div className='tracos absolute'>
            <img className='w-[670px] transform translate-y-[410px] transform translate-x-[-110px]' src={noventaGraus} alt="traços de efeito" />
        </div>
        <div className='minimalismo absolute mt-[227px] ml-[-655px] w-[570px] h-[247px] break-words text-left'>
            <h1 className='tituloMinimalismo ml-[300px] mt-[55px] leading-[1.2] transform translate-x-[-50px]'>MINIMALISMO</h1>
        </div>
        <div className='triangulo absolute'>
            <img className='w-[385px] h-[1010px] mt-[710px] transform translate-x-[-568px]' src={triangulo} alt="" />
        </div>
        <div className='tracos absolute'>
            <img className='transform w-[345px] z-2 translate-y-[245px] transform translate-x-[340px]' src={circulo} alt="circulo pontilhado para enfeite" />
        </div>
        <div className='imgGatoCaixa absolute left-0'>
            <img className='w-[450px] transform translate-y-[505px] transform translate-x-[775px] z-3' src={gatoCaixa} alt="Gato em uma caixa" />
            <img className='w-[33px] ml-[1000px] transform translate-y-[175px] transform translate-x-[-95px] ' src={mais} alt="" />
            <img className='w-[13px] ml-[1000px] transform translate-y-[151px] transform translate-x-[-85px] ' src={complementoMais} alt="" />
        </div>
        <div className='texto absolute'>
            <p className='text-left text-[20.5px] ml-[-220px] transform translate-y-[392px] w-[400px]'>
                Also reality power discussion <br />
                buy-in closest goto model. Have <br />
                protocol at long practices low- <br />
                hanging data most driver's.
                </p>
        </div>
        <div className='butao absolute'>
        <button
          onClick={handleClick}
          className={`botao text-[23px] ml-[1100px] transform translate-y-[528px] translate-x-[-763px] rounded-[30px] 
            ${clicked ? 'bg-black text-white' : 'bg-transparent text-black'}`}
        >
          EXPLORAR
        </button>
    </div>
      </div>
    </div>
  )
}

export default Colecoes