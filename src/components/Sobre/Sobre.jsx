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
        <img className='w-[22%] transform translate-y-[40px] transform translate-x-[340px]' src={circuloVermelho} alt="" />
        <h1 className='tituloSobre text-[80px] transform translate-y-[-205px] ml-[150px] leading-[1.1]'>
            Decorar <br />
            Arranhar & <br />
            Relaxar
        </h1>
        <img className='w-[40%] transform translate-y-[-530px] transform translate-x-[765px]' src={gatoSobre} alt="" />
        <img className='transform translate-y-[-750px] transform translate-x-[1020px]' src={play} alt="" />
        <p className='transform translate-y-[-570px] ml-[765px] leading-[1.9]' >
            Hammer can low idea of. Lunch able design items needle here stop <br /> 
            drive. / or devil pants game close. Prioritize out key view / vendor we've. <br /> 
            4-blocker gave shift ideal based post.
        </p>
        <button
             onClick={handleClick}
             className={`buttonSobre absolute text-[23px] transform translate-y-[-530px] ml-[765px] rounded-[30px] border-[2px] border-black
             ${clicked ? 'bg-black text-white' :  'bg-transparent text-black'}`}
        >
            MAIS SOBRE A GAT 
        </button>    
      </div>
    </div>
  )
}

export default Sobre