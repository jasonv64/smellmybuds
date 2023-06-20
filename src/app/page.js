'use client'
import React from 'react';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../../css/output.css'

export default function Home() {
  const [cardColumns, setCardColums] = useState('');
  const [whyColumns, setWhyColums] = useState('');

  //you can only access window from client. useEffect is a client side 
  //react hook (as are all react hooks)
  useEffect(() => {
    if (window.innerWidth < 534) {
      setWhyColums('row-cols-2 row-cols-md-2');
      setCardColums('');
    } else if (window.innerWidth < 1561) {
      setCardColums('row-cols-2 row-cols-md-2');
      setWhyColums('row-cols-2 row-cols-md-2');
    } else {
      setWhyColums('row-cols-4 row-cols-md-4');
    }    
  }, []);

  return (
    <div className='home-container'>
        <div className='home-image-container'>
          <Image 
            src='https://res.cloudinary.com/dppkrg7h5/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1669835799/samples/solar%20panel%20cleaning/cleanpanels_teqnhf.jpg'
            className='main-home-image'
            alt='clean solar panels'
          />
          <div className='main-home-image-div'>
            <h1 className='main-home-image-header'>
              Smell My Buds
            </h1>
            <p className='main-home-image-slogan'>
              My Work Showcase
            </p>
          </div>
        </div>
        <div className='home-showcase'>
          pretty pictures
        </div>
        <div>
          cool ass quote
        </div>
        <div>
          instagram feed
        </div>
        <div>
          services
        </div>
        <div>
          contact form
        </div>
    </div>
  )
}