import React, {Component} from 'react';

import {carouselData} from '../../../data';
import {Carousel, Col, Row} from 'antd';
import './carousel.css';

const CarouselItem = ({itemSrc, key}) => {
    return (
            <img src = {itemSrc} alt = {itemSrc} />           
    )
}


const CarouselVids = () => {
        
    return (
        <Carousel>

            {carouselData.map((itemSrc, id) => (
                <CarouselItem  itemSrc = {itemSrc} key = {id}/>
            ))}

        </Carousel>
    
    )
}
export default CarouselVids;