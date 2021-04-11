import React from 'react'
import SliderData from './SliderData'
import {Img,  SliderCard, CoinName, CoinPrice, CoinMCap, Container } from './Slider.elements'
import { ButtonLink } from '../Button.element'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"


const Slider2 = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
			<Container id="market"> 
              <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              ssr={true}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all 1"
              transitionDuration={1500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              >

                {SliderData().map((coin) => {
                    return (
                        <>
                        <SliderCard key={coin.id}>
                            <Img src={coin.image} alt={coin.name} />   
                            <CoinName>{coin.name}</CoinName>
                            <CoinPrice>${(coin.current_price).toLocaleString()}</CoinPrice>
                            <CoinMCap>Market Cap: ${(coin.market_cap).toLocaleString()}</CoinMCap>
                            <ButtonLink to="/marketplace">Buy now</ButtonLink>
                        </SliderCard>
                    </>
                    )
                })}
              </Carousel>
			</Container>
	)		
}

export default Slider2
