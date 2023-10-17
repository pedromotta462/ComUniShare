import React from 'react'
import Cards from '@/components/card/Cards'
import Search from '@/components/search/searchbar'

function Objects () {
    const cardsData = [
        {
            imgurl: 'https://m.media-amazon.com/images/I/71B+VwD3GGL._AC_UF894,1000_QL80_.jpg',
            title: 'Furadeira',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        // Adicione mais objetos de dados para mais cartões
        {
            imgurl: 'https://cdn.dooca.store/114552/products/mjgzkc4a6twurejrs7jvou0vjes9kbpqacg4.png?v=1686169170&webp=0',
            title: 'Bicicleta',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        // Adicione mais objetos de dados para mais cartões
        {
            imgurl: 'https://polishop.vtexassets.com/arquivos/ids/668981/02-1000x1000_batedeira-planetaria-ichef-polishop_01dez.jpg?v=637427059963430000',
            title: 'Batedeira',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            imgurl: 'https://images-americanas.b2w.io/produtos/4600812969/imagens/chave-inglesa-8-ajustavel-chave-grifo-para-tubo-e-cano-12/4600812969_1_large.jpg',
            title: 'Chave Ingles',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        ////////

        {
            imgurl: 'https://m.media-amazon.com/images/I/71B+VwD3GGL._AC_UF894,1000_QL80_.jpg',
            title: 'Furadeira',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        // Adicione mais objetos de dados para mais cartões
        {
            imgurl: 'https://cdn.dooca.store/114552/products/mjgzkc4a6twurejrs7jvou0vjes9kbpqacg4.png?v=1686169170&webp=0',
            title: 'Bicicleta',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        // Adicione mais objetos de dados para mais cartões
        {
            imgurl: 'https://polishop.vtexassets.com/arquivos/ids/668981/02-1000x1000_batedeira-planetaria-ichef-polishop_01dez.jpg?v=637427059963430000',
            title: 'Batedeira',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            imgurl: 'https://images-americanas.b2w.io/produtos/4600812969/imagens/chave-inglesa-8-ajustavel-chave-grifo-para-tubo-e-cano-12/4600812969_1_large.jpg',
            title: 'Chave Ingles',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },

        {
            imgurl: 'https://m.media-amazon.com/images/I/71B+VwD3GGL._AC_UF894,1000_QL80_.jpg',
            title: 'Furadeira',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        // Adicione mais objetos de dados para mais cartões
        {
            imgurl: 'https://cdn.dooca.store/114552/products/mjgzkc4a6twurejrs7jvou0vjes9kbpqacg4.png?v=1686169170&webp=0',
            title: 'Bicicleta',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        // Adicione mais objetos de dados para mais cartões
        {
            imgurl: 'https://polishop.vtexassets.com/arquivos/ids/668981/02-1000x1000_batedeira-planetaria-ichef-polishop_01dez.jpg?v=637427059963430000',
            title: 'Batedeira',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            imgurl: 'https://images-americanas.b2w.io/produtos/4600812969/imagens/chave-inglesa-8-ajustavel-chave-grifo-para-tubo-e-cano-12/4600812969_1_large.jpg',
            title: 'Chave Ingles',
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

export default Objects