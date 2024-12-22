import React, { useState } from 'react'
import './ilustracao.css'
import { ilustracao, um, dois, tres, quatro, cinco } from '../../assets'

const Ilustracao = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };
  return (
    <div>
      <div className='ilustracao w-full h-[777px] transform translate-y-[1900px] relative'>
        <img className='w-full' src={ilustracao} alt="" />
        <div className='infoIlustracao absolute w-[330px] h-[380px] transform translate-x-[1155px] transform translate-y-[-763px]'>
            <h1 className='mt-[20px] text-[35px] font-bold leading-[1.27]'>Lorem Ipsum Dolor Sit</h1>
            <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> <br />
            <p className='mt-[-5px] leading-[1.27] text-[15px]'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <button
             onClick={handleClick}
             className={`buttonInfo absolute text-[23px] rounded-[30px] border-[2px] border-black mt-[30px]
             ${clicked ? 'bg-black text-white' :  'bg-transparent text-black'}`}
            >VER SELEÇÃO
            </button>
            <img className='transform translate-y-[98px] transform translate-x-[-870px]' src={um} alt="" />
            <img className='transform translate-y-[103px] transform translate-x-[-670px]' src={dois} alt="" />
            <img className='transform translate-y-[-250px] transform translate-x-[-550px]' src={tres} alt="" />
            <img className='transform translate-y-[-195px] transform translate-x-[-250px]' src={quatro} alt="" />
            <img className='transform translate-y-[-15px] transform translate-x-[-155px]' src={cinco} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Ilustracao
