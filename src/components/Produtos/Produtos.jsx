import React, { useState } from 'react'
import './produtos.css'
import { circuloAmarelo, tocaTunel, gatoCaixa, cestaBlack } from '../../assets'

const Produtos = () => {
  const[isHovered1, setIsHovered1] = useState(false);
  const imgSrc1 = isHovered1 ? gatoCaixa : tocaTunel;

  const[isHovered2, setIsHovered2] = useState(false);
  const imgSrc2 = isHovered2 ? gatoCaixa : tocaTunel;

  const[isHovered3, setIsHovered3] = useState(false);
  const imgSrc3 = isHovered3 ? gatoCaixa : tocaTunel;

  const [clicked, setClicked] = useState(false);
      
  const handleClick = () => {
      setClicked(!clicked);
  };
  return (
    <div>
        <div className='container absolute'>
          <div className='queridinhos absolute'>
            <img className=' w-[245px] mt-[2345px] transform translate-x-[-700px]' src={circuloAmarelo} alt="" />
            <p className='textQueridinhos absolute text-[80px] transform translate-x-[-610px] transform translate-y-[-136px] leading-[1.1]'>
              <span className='font-bold'>QUERI</span><br />
              <span className='font-bold'>DINHO</span><br />
              <span>DELES</span>
            </p>
            <button
             onClick={handleClick}
             className={`buttonQueridinhos absolute text-[23px] transform translate-x-[-615px] transform translate-y-[170px] rounded-[30px] border-[2px] border-black
             ${clicked ? 'bg-black text-white' :  'bg-transparent text-black'}`}
            >
              VER TUDO</button>
          </div>
          <div className='cards absolute'>
            <div className='produtoCard absolute w-[360px] h-[516px] mt-[1135px] ml-[-370px]'
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <div className='containerImg w-full h-3/4 relative'>
                <div className='porcentagem flex justify-end w-[70px] ml-[280px] z-50 absolute'> <span className='font-bold'> 10% </span>OFF</div>
                <div className='lancamento flex justify-end w-[105px] ml-[245px] mt-[35px] font-bold z-50 absolute'>Lançamento</div>
                <img className={`transform transition-all duration-400 w-[150px] h-[200px] ml-[100px] mt-[50px] ${isHovered1 ? 'w-[3500px] h-[380px] transform translate-y-[-50px] transform translate-x-[-100px] z-10' : 'w-[150px] h-[200px] ml-[100px] mt-[130px]'}`}
                src={imgSrc1} alt="" />
              </div>
              <div className='containerInfo w-full h-1/4'>
                <h3 className='font-bold'>
                  TOCA TÚNEL <br />
                  MÓDULOS
                </h3>
                <p>
                  <span className='line-through'>R$00,00</span>
                  <span className='font-bold'> R$0000,00 </span>
                  </p>
                <div className='dots flex gap-2 mt-[-70px] ml-[277px]'>
                  <div className="w-3 h-3 bg-[#7EABE3] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#BF362E] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#637C52] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#433643] rounded-full"></div>
                </div>
                { isHovered1 && (
                  <div className='addCarrinho mt-[70px] ml-[10px] mr-[10px] flex gap-14 align-center justify-center rounded-[30px]'>
                    <button className='hover:translate-x-11 trasition transform duration-300'>ADICIONAR AO CARRINHO</button>
                    <img className='cestaCard mt-[-4px]' src={cestaBlack} alt="" />
                  </div>
                )}
              </div>
            </div>
            <div className='produtoCard absolute w-[360px] h-[516px] mt-[1135px]'
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <div className='containerImg w-full h-3/4 relative'>
                <div className='porcentagem flex justify-end w-[70px] ml-[280px] z-50 absolute'> <span className='font-bold'> 10% </span>OFF</div>
                <div className='lancamento flex justify-end w-[105px] ml-[245px] mt-[35px] font-bold z-50 absolute'>Lançamento</div>
                <img className={`transform transition-all duration-400 w-[150px] h-[200px] ml-[100px] mt-[50px] ${isHovered2 ? 'w-[3500px] h-[380px] transform translate-y-[-50px] transform translate-x-[-100px] z-10' : 'w-[150px] h-[200px] ml-[100px] mt-[130px]'}`}
                src={imgSrc2} alt="" />
              </div>
              <div className='containerInfo w-full h-1/4'>
                <h3 className='font-bold'>
                  TOCA TÚNEL <br />
                  MÓDULOS
                </h3>
                <p>
                  <span className='line-through'>R$00,00</span>
                  <span className='font-bold'> R$0000,00 </span>
                  </p>
                <div className='dots flex gap-2 mt-[-70px] ml-[277px]'>
                  <div className="w-3 h-3 bg-[#7EABE3] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#BF362E] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#637C52] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#433643] rounded-full"></div>
                </div>
                { isHovered2 && (
                  <div className='addCarrinho mt-[70px] ml-[10px] mr-[10px] flex gap-14 align-center justify-center rounded-[30px]'>
                    <button className='hover:translate-x-11 trasition transform duration-300'>ADICIONAR AO CARRINHO</button>
                    <img className='cestaCard mt-[-4px]' src={cestaBlack} alt="" />
                  </div>
                )}
              </div>
            </div>
            <div className='produtoCard absolute w-[360px] h-[516px] mt-[1135px] ml-[370px]'
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <div className='containerImg w-full h-3/4 relative'>
                <div className='porcentagem flex justify-end w-[70px] ml-[280px] z-50 absolute'> <span className='font-bold'> 10% </span>OFF</div>
                <div className='lancamento flex justify-end w-[105px] ml-[245px] mt-[35px] font-bold z-50 absolute'>Lançamento</div>
                <img className={`transform transition-all duration-400 w-[150px] h-[200px] ml-[100px] mt-[50px] ${isHovered3 ? 'w-[3500px] h-[380px] transform translate-y-[-50px] transform translate-x-[-100px] z-10' : 'w-[150px] h-[200px] ml-[100px] mt-[130px]'}`}
                src={imgSrc3} alt="" />
              </div>
              <div className='containerInfo w-full h-1/4'>
                <h3 className='font-bold'>
                  TOCA TÚNEL <br />
                  MÓDULOS
                </h3>
                <p>
                  <span className='line-through'>R$00,00</span>
                  <span className='font-bold'> R$0000,00 </span>
                  </p>
                <div className='dots flex gap-2 mt-[-70px] ml-[277px]'>
                  <div className="w-3 h-3 bg-[#7EABE3] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#BF362E] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#637C52] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#433643] rounded-full"></div>
                </div>
                { isHovered3 && (
                  <div className='addCarrinho mt-[70px] ml-[10px] mr-[10px] flex gap-14 align-center justify-center rounded-[30px]'>
                    <button className='hover:translate-x-11 trasition transform duration-300'>ADICIONAR AO CARRINHO</button>
                    <img className='cestaCard mt-[-4px]' src={cestaBlack} alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Produtos
