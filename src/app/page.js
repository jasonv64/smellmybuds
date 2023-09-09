'use client'
import React from 'react';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ContactForm from '../../components/contactForm';
import Footer from '../../components/footer';
import '../../css/output.css';

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
        <div className='home-image-container position-relative text-center'>
          <div class="col home-hero-text">
            <h1 class="display-5 fw-bold home-company-name">Smell My Buds</h1>
            <h3 class="fw-normal mb-3 home-slogan">Your imagination, our creation.</h3>
          </div>
        </div>
        <div className='home-showcase'>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card">
                <Image width={500} height={500} src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1693757574/not-sw/SmellMyBuds/356377913_230109599867141_8486478550665249815_n_gk5yth.jpg" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <Image width={500} height={500} src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1693757574/not-sw/SmellMyBuds/338020196_3518264185062243_1624852471120135899_n_q6dzxa.jpg" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <Image width={500} height={500} src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1693757574/not-sw/SmellMyBuds/338011654_1327026454535435_8072269778958009938_n_xjjss9.jpg" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <Image width={500} height={500} src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1693757574/not-sw/SmellMyBuds/352200881_997053944983149_5865046798401221158_n_npo3re.jpg" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
          </div>
        </div>
        <div className='home-showcase'>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card">
                <Image width={500} height={500} src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1693757574/not-sw/SmellMyBuds/332949454_513398084282248_254182524728074295_n_wdhfkj.jpg" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <Image width={500} height={500} src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1693757574/not-sw/SmellMyBuds/330392253_1393234158168247_81033546047408178_n_yy8sdm.jpg" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <Image width={500} height={500} src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1693757573/not-sw/SmellMyBuds/330022242_500690085571087_5498964792846775212_n_hxgcli.jpg" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <Image width={500} height={500} src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1693757573/not-sw/SmellMyBuds/338173318_1575037542991780_5067474983376745219_n_u5kna5.jpg" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='section-header'>
            Our Services
          </div>
          <div className='row service-cards no-gutter'>
            <Card className='col service-card' style={{ width: '30%' }}>
              <Card.Img className='service-card-image' variant="top" src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1693758657/not-sw/SmellMyBuds/353752802_222648403946594_4856413691643836614_n_ll8zbz.jpg" />
              <Card.Body>
                <Card.Title>Birthdays</Card.Title>
                <Card.Text>
                  Get all your birthday theme dialed in perfectly with custom decor!
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='col service-card' style={{ width: '30%' }}>
              <Card.Img className='service-card-image' variant="top" src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1693758656/not-sw/SmellMyBuds/338304832_6035786013201351_3086320838988815022_n_pxosbf.jpg" />
              <Card.Body>
                <Card.Title>Weddings</Card.Title>
                <Card.Text>
                  Getting ready for your special day? Lets create something that will leave a lasting impression.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='col service-card' style={{ width: '30%' }}>
              <Card.Img className='service-card-image' variant="top" src="https://res.cloudinary.com/dppkrg7h5/image/upload/v1693758657/not-sw/SmellMyBuds/337995756_152491831076976_158331118402417760_n_ylyogu.jpg" />
              <Card.Body>
                <Card.Title>Funerals</Card.Title>
                <Card.Text>
                  Honor your loved ones with something special.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className='section'>
          <div className='section-header'>
            Contact Form
          </div>
          <ContactForm></ContactForm>
        </div>
    </div>
  )
}