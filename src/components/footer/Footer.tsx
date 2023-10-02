import React from 'react'
import Image from "next/image";
import imgs from "../../../public/imgs"


function Footer() {
    return (
        <footer className='flex items-center justify-around fixed bg-[#FFFFFF] w-full bottom-0 left-0 p-1 shadow-xl'>
            <div className='flex flex-col items-center justify-center'>
                <div className="flex items-center justify-center m-2">
                    <Image
                        src={imgs.logoComunishareFooter}
                        alt="comunishare's logo"
                        width={40}
                        height={40}
                    >
                    </Image>
                    <Image
                        className="ml-3"
                        src={imgs.logoNomeFooter}
                        alt="comunishare"
                        width={150}
                        height={150}
                    >
                    </Image>
                    
                </div>
                <p className='text-sm text-[#8A8A8A] m-1'>Copyright © 2023-2023</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-base text-[#8A8A8A] mb-3'>Formas de Pagamento Aceitas:</p>
                <Image
                    src={imgs.creditCards}
                    alt="formas de pagamento"
                    width={100}
                    height={100}
                >
                </Image>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-base text-[#8A8A8A]'>Central de Atedimento</p>
                <ul className='list-disc text-sm text-[#E26E44] mt-1'>
                    <li><a className='hover:underline' href="">Dúvidas</a></li>
                    <li><a className='hover:underline' href="">Condição de uso do Site</a></li>
                    <li><a className='hover:underline' href="">Política de entrega</a></li>
                    <li><a className='hover:underline' href="">Trocas e Devoluções</a></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer