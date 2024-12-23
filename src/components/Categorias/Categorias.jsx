import React from 'react'
import './categorias.css'
import { classico, minimalismo, maximalismo, boho } from '../../assets'

const Categorias = () => {
  return (
    <div className='container'>
      <h1 className='titleCategorias transform translate-y-[1653px] transform translate-x-[500px] whitespace-nowrap'>NAVEGUE PELAS CATEGORIAS</h1>
      <div className='opcoesCategoria flex items-center justify-between w-full transform translate-y-[1735px] transform translate-x-[-280px] gap-[20px]'>
        <button className='classico flex items-center gap rounded-[30px]'>
          <img src={classico} alt="paw" />
          <p className='textCategoria text-[18px]'>CLÁSSICO</p>
        </button>
        <button className='minimalism flex items-center gap rounded-[30px]'>
          <img src={minimalismo} alt="paw" />
          <p className='textCategoria text-[17px]'>MINIMALISMO</p>
        </button>
        <button className='maximalismo flex items-center gap rounded-[30px]'>
          <img src={maximalismo} alt="paw" />
          <p className='textCategoria text-[17px]'>MAXIMALISMO</p>
        </button>
        <button className='boho flex items-center gap rounded-[30px]'>
          <img src={boho} alt="paw" />
          <p className='textCategoria text-[18px]'>BOHO</p>
        </button>
        <button className='vertudo flex items-center rounded-[30px] !w-[120px]'>
          <p className='textCategoria text-[18px]'>VER TUDO</p>
        </button>
      </div>

    </div>
  )
}

export default Categorias
