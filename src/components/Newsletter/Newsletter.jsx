import React, { useState } from 'react'
import './newsletter.css'
import { lastFotoCat, logoVertical, cartoes, empresaB, trueOpinion, security, redesSociais } from '../../assets'

const Newsletter = () => {
    const [clicked, setClicked] = useState(false);
    
    const handleClick = () => {
        setClicked(!clicked);
    };
  return (
    <div>
      <div className='h-[1px] w-[96%] bg-black mt-[1930px] mx-auto'></div>
      <div className='containerNewsletter'>
        <div className='flex'>
            <div className='mt-[48px] ml-[20px]'>
                <img className='w-[600px] h-[350px]' src={lastFotoCat} alt="" />
            </div>
            <div className='mt-[58px] ml-[20px]'>
                <h1 className='text-[58px]'>NEWSLETTER</h1>
                <p className='font-bold mt-[40px] tracking-[0.5px] leading-[30px]'>CADASTRE-SE E GANHE 10% OFF NA <br />
                 SUA PRIMEIRA COMPRA</p>
                 <p className='mt-[2px]'>Seja a primeira a receber lançamentos, <br />
                  novidades e promoções.</p>
            </div>
            <div className='campos'>
                <div className="relative mt-[165px] ml-[-20px] w-[473px]">
                    <input 
                        className="peer mb-[25px] border-b-[2px] border-gray-500 focus:border-black outline-none w-full bg-transparent placeholder-transparent mt-[10px]" 
                        type="text" 
                        id="pet-name" 
                        placeholder="NOME DO SEU PET" 
                    />
                    <label 
                        htmlFor="pet-name" 
                        className="absolute left-0 text-gray-500 transform transition-all duration-300 -translate-y-6 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100  peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black"
                    >
                        NOME DO SEU PET
                    </label>
                </div>
                <div className="relative mt-[15px] ml-[-20px]">
                    <input 
                        className="peer mb-[25px] border-b-[2px] border-gray-500 focus:border-black outline-none w-full bg-transparent placeholder-transparent mt-[10px]" 
                        type="text" 
                        id="email" 
                        placeholder="SEU EMAIL" 
                    />
                    <label 
                        htmlFor="email" 
                        className="absolute left-0 text-gray-500 transform transition-all duration-300 -translate-y-6 scale-75 origin-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black"
                    >
                        SEU EMAIL
                    </label>
                </div>
                <div>
                    <button 
                        onClick={handleClick} 
                        className={`buttonNewsletter text-[23px] rounded-[30px] border-[2px] border-black mt-[20px] w-[220px] ml-[-20px]
                        ${clicked ? 'bg-black text-white' :  'bg-transparent text-black'}`} 
                    >
                        CADASTRAR
                    </button>
                </div>
            </div>
        </div>
        <div className='informacoes mt-[60px]'>
            <div className='w-[200px] h-full bg-[#373737]'>
                <img className='w-[90px] ml-[60px] transform translate-y-[50px]' src={logoVertical} alt="" />
            </div>
            <div>
                <div className="w-[520px] h-[55px] border border-black ml-[200px] mt-[-222px] flex flex-row justify-evenly items-center font-bold">
                    <p className="flex-grow">PRODUTOS</p>
                    <p className="flex-grow">COLEÇÕES</p>
                    <p className="flex-grow">LOOKBOOK</p>
                    <p className="flex-grow">SOBRE</p>
                    <p className="flex-grow">WISHLIST</p>
                    <p className="flex-grow">BLOG</p>
                </div>
                <div className='flex'>
                    <div className='w-[227px] h-[168px] border border-black ml-[200px] flex flex-row justify-between items-center font-bold'>
                        <p className='ml-[10px] mt-[-110px] text-[15px] whitespace-nowrap'>FORMAS DE PAGAMENTO</p>
                        <img className='mt-[-13px] transform translate-x-[-200px] grayscale' src={cartoes} alt="" />
                    </div>
                    <div className='w-[293px] h-[168px] border border-black flex flex-row justify-between items-center font-bold'>
                        <p className='ml-[10px] mt-[-110px] text-[15px] whitespace-nowrap'>CERTIFICADOS E SEGURANÇA</p>
                        <img className='ml-[-280px] mt-[23px]' src={empresaB} alt="" />
                        <img className='transform translate-x-[-25px] grayscale' src={trueOpinion} alt="" />
                        <img className='transform translate-x-[-53px] grayscale' src={security} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-[230px] h-[222px] border border-black ml-[720px] mt-[-223px] flex flex-col ' >
                <p className='font-bold ml-[25px] text-[14px] mt-[15px]'>AJUDA</p>
                <p className='ml-[23px] mt-[10px]'>FAQ</p>
                <p className='ml-[23px] mt-[5px]'>Sobre nossos produtos</p>
                <p className='ml-[23px] mt-[5px] '>Trocas e devoluções</p>
                <p className='ml-[23px] mt-[5px]'>Entregas</p>
                <p className='ml-[23px] mt-[5px]'>Indique e ganhe</p>
                <p className='ml-[23px] mt-[5px]'>Garantias</p>
            </div>
            <div>
                <div className='w-[245px] h-[222px] border border-black ml-[950px] mt-[-223px]'>
                    <div className='w-[245px] h-[53%] border border-black  mt-[-1px]'>
                            <p className='font-bold ml-[10px] text-[14px] mt-[16px]'>CONTATO</p>
                            <p className='mt-[10px] ml-[10px]'>WhatsApp - (51) 9999-9999</p>
                            <p className='ml-[10px]'>E-mail - ajuda@gat.com.br</p>
                    </div>
                    <div className='w-[245px] h-[48%] border border-black'>
                            <p className='font-bold ml-[10px] text-[14px] mt-[23px]'>REDES SOCIAIS</p>
                            <img className='ml-[10px] mt-[18px]' src={redesSociais} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p className='text-[12px] mt-[15px]'>© 2024, GAT. TODOS OS DIREITOS RESERVADOS.</p>
            <p className='text-[12px] ml-[590px] mt-[-20px]' >GAT  LTDA. | R. Ondina Carvalheira Peixoto, 300 - Chácaras Palmeiras | Cataguases - MG | CEP 36774-550</p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
