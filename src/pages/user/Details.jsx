import React, { useEffect, useState } from 'react'
import './../../style/sass/detail.scss'
import axios from 'axios';
import {  useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './../../style/sass/swiper.scss';
import { Pagination, Navigation } from 'swiper/modules';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Detail() {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;
  
    const prepend2 = () => {
      swiperRef.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      ]);
    };
  
    const prepend = () => {
      swiperRef.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
      );
    };
  
    const append = () => {
      swiperRef.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
      );
    };
  
    const append2 = () => {
      swiperRef.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      ]);
    };
  
    const {id} = useParams();
    const [meals, setMeal] = useState([])
    useEffect(()=>{
        axios(`http://localhost:3000/meals/${id}`).then((res)=>{
            setMeal(res.data)
        })
    },[id])
    
    return (
        <section className='burgerdetail'>
            <div className="container">
                <div className="burgerdiv">
                    <div className="leftburger">
                        <img src={meals.image} alt="" />
                    </div>
                    <div className="rightburger">
                        <h1>{meals.name}</h1>
                        <div className="text">
                            <p>{meals.description} </p>
                        </div>
                    </div>
                </div>
                <section className='burgermedium'>
                    <div className="container2"> <br />
                        <h1>Əlaqədar məhsullar</h1>
                      
                        <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mcdonalds.az/images/36e04d7fca426a5e7a4ad922a0041f8e.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
        
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p>
    
                    </div>

                </section>
                
            </div>
        </section>
    )
}

export default Detail