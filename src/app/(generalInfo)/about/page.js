'use client'
import React from 'react';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import Instagram from 'instagram-web-api';


const username = process.env.instagramUser;
const password = process.env.instagramPassword;




export default function About() {
  const client = new Instagram({ username, password });
 
  (async () => {
    await client.login()
    const profile = await client.getProfile()
   
    console.log(profile)
  })()
  return (
    <div className='about-container'>
      About 
    </div>
  )
}