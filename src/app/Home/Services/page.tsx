import { Button } from '@/components/ui/button'
import Search from '@/components/search/searchbar'
import Image from 'next/image'
import Cards from '@/components/card/Cards'


export default function Service() {

    const cardsData = [
        {
            imgurl: 'https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2023/02/iStock-587206190-scaled.jpg',
            title: 'Pedreiro',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        // Adicione mais objetos de dados para mais cartões
        {
            imgurl: 'https://static.wixstatic.com/media/04008f_f9c24736e79341549c930d6937574068~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/04008f_f9c24736e79341549c930d6937574068~mv2.jpg',
            title: 'Pintor',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        // Adicione mais objetos de dados para mais cartões
        {
            imgurl: 'https://arvoreta.com.br/wp-content/uploads/2021/01/jardineiro-autonomo.jpg',
            title: 'Jardineiro',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            imgurl: 'https://6064049.fs1.hubspotusercontent-na1.net/hubfs/6064049/Sonha%20em%20ser%20chef%20e%20ter%20o%20proprio%20restaurante%20Saiba%20como%20ser%20um%20cozinheiro%20profissional.webp',
            title: 'Cozinheiro',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        ////////

        {
            imgurl: 'https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2023/02/iStock-587206190-scaled.jpg',
            title: 'Pedreiro',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        // Adicione mais objetos de dados para mais cartões
        {
            imgurl: 'https://static.wixstatic.com/media/04008f_f9c24736e79341549c930d6937574068~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/04008f_f9c24736e79341549c930d6937574068~mv2.jpg',
            title: 'Pintor',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        // Adicione mais objetos de dados para mais cartões
        {
            imgurl: 'https://arvoreta.com.br/wp-content/uploads/2021/01/jardineiro-autonomo.jpg',
            title: 'Jardineiro',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            imgurl: 'https://6064049.fs1.hubspotusercontent-na1.net/hubfs/6064049/Sonha%20em%20ser%20chef%20e%20ter%20o%20proprio%20restaurante%20Saiba%20como%20ser%20um%20cozinheiro%20profissional.webp',
            title: 'Cozinheiro',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },

        {
            imgurl: 'https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2023/02/iStock-587206190-scaled.jpg',
            title: 'Pedreiro',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        // Adicione mais objetos de dados para mais cartões
        {
            imgurl: 'https://static.wixstatic.com/media/04008f_f9c24736e79341549c930d6937574068~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/04008f_f9c24736e79341549c930d6937574068~mv2.jpg',
            title: 'Pintor',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        // Adicione mais objetos de dados para mais cartões
        {
            imgurl: 'https://arvoreta.com.br/wp-content/uploads/2021/01/jardineiro-autonomo.jpg',
            title: 'Jardineiro',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            imgurl: 'https://6064049.fs1.hubspotusercontent-na1.net/hubfs/6064049/Sonha%20em%20ser%20chef%20e%20ter%20o%20proprio%20restaurante%20Saiba%20como%20ser%20um%20cozinheiro%20profissional.webp',
            title: 'Cozinheiro',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
    ];

    return (
        <div className='flex flex-col min-h-screen bg-slate-50 items-center justify-center'>
            <Search />
            <main className='mb-6 flex items-center justify-center w-full h-[20em]'>
                <Cards cardsData={cardsData}/>
            </main>
        </div>
    )
}
