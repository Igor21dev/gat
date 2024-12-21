import React from 'react'
import './navbar.css'
import { logo, icon, lupa, cat, cesta, notification } from '../../assets'
const navbar = () => {
  return (
      <div className='navbar'>
        <img className='logo' src={logo} alt="logo" />
        <div className='produtos'>
          <img className='iconProduto' src={icon} alt="ícone de produtos" />
          <a href="#produtos"><p className='textProduto'>produtos</p></a>
        </div>
        <div className='colecoes'>
          <img className='iconColecoes' src={icon} alt="ícone de coleções" />
          <a href="#coleções"><p className='textColecoes'>coleções</p></a>
        </div>
        <div className='opcoes'>
          <a href="#blog"> <p className='blog'>blog</p> </a>
          <a href="#lookbook"><p className='lookbook'>lookbook</p> </a>
          <a href="#sobreGat"><p className='sobreGat'>sobre a Gat</p> </a>
          <a href="#wishlist"><p className='wishlist'>wishlist</p></a>
        </div>
        <div className='pesquisa'>
          <img src={lupa} alt="lupa de pesquisa" />
          <input className='input' type="text" placeholder='digite aqui o que procura' />
        </div>
        <div className='cat'>
          <img className='iconCat' src={cat} alt="ícone de gato" />
        </div>
        <div className='cart'>
          <img className='cesta' src={cesta} alt="cesta de compras" />
          <img className='notification' src={notification} alt="notificando que tem compra" />
        </div>
    </div>
  )
}

export default navbar
