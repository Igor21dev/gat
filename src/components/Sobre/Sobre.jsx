import React, { useState } from 'react'
import './sobre.css'
import { circuloVermelho, gatoSobre, play } from '../../assets'

const Sobre = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };
    
  return (
    <div>
      <div className='sobre w-full h-[677px] transform translate-y-[1905px] relative'>
        <img className='w-[22%] transform translate-y-[40px] transform translate-x-[230px]' src={circuloVermelho} alt="" />
        <h1 className='tituloSobre text-[80px] transform translate-y-[-205px] ml-[50px] leading-[1.1]'>
            Decorar <br />
            Arranhar & <br />
            Relaxar
        </h1>
        <img className='w-[40%] transform translate-y-[-530px] transform translate-x-[655px]' src={gatoSobre} alt="" />
        <img className='transform translate-y-[-710px] transform translate-x-[850px]' src={play} alt="" />
        <p className='transform translate-y-[-570px] ml-[650px] leading-[1.9] text-[14px]' >
            Hammer can low idea of. Lunch able design items needle here stop <br /> 
            drive. / or devil pants game close. Prioritize out key view / vendor we've. <br /> 
            4-blocker gave shift ideal based post.
        </p>
        <button
             onClick={handleClick}
             className={`buttonSobre absolute text-[23px] transform translate-y-[-530px] ml-[650px] rounded-[30px] border-[2px] border-black
             ${clicked ? 'bg-black text-white' :  'bg-transparent text-black'}`}
        >
            MAIS SOBRE A GAT 
        </button>    
      </div>
    </div>
  )
}

export default Sobre
