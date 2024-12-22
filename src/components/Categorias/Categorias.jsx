import React from 'react'
import './categorias.css'
import { classico, minimalismo, maximalismo, boho } from '../../assets'

const Categorias = () => {
  return (
    <div className='container absolute'>
      <h1 className='titleCategorias transform translate-y-[1653px] transform translate-x-[770px] whitespace-nowrap'>NAVEGUE PELAS CATEGORIAS</h1>
      <div className='opcoesCategoria flex items-center gap justify-between w-full gap-4 transform translate-y-[1735px] transform translate-x-[-265px] ml-[50px]'>
        <button className='classico flex items-center gap-2 rounded-[30px]'>
          <img src={classico} alt="paw" />
          <p className='textCategoria text-[23px]'>CLÁSSICO</p>
        </button>
        <button className='minimalism flex items-center gap-2 rounded-[30px]'>
          <img src={minimalismo} alt="paw" />
          <p className='textCategoria text-[23px]'>MINIMALISMO</p>
        </button>
        <button className='maximalismo flex items-center gap-2 rounded-[30px]'>
          <img src={maximalismo} alt="paw" />
          <p className='textCategoria text-[23px]'>MAXIMALISMO</p>
        </button>
        <button className='boho flex items-center gap-2 rounded-[30px]'>
          <img src={boho} alt="paw" />
          <p className='textCategoria text-[23px]'>BOHO</p>
        </button>
        <button className='vertudo flex items-center rounded-[30px] !w-[200px]'>
          <p className='textCategoria text-[23px]'>VER TUDO</p>
        </button>
      </div>

    </div>
  )
}

export default Categorias
