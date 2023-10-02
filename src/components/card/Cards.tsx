"use client"

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from 'react';


import './swiper/swiper-bundle.min.css';
import Card from './Card';

//https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2023/02/iStock-587206190-scaled.jpg
// Importações...

interface CardData {
    imgurl: string;
    title: string;
    description: string;
}

interface CardsProps {
    cardsData: CardData[];
}

const Cards: React.FC<CardsProps> = ({ cardsData }) => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={6}
            className="mySwiper"
        >
            {cardsData.map((card, index) => (
                <SwiperSlide key={index}>
                    <Card
                        imgurl={card.imgurl}
                        title={card.title}
                        description={card.description}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Cards;
