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
            <h3 class="fw-normal text-muted mb-3 home-slogan">My work showcase</h3>
          </div>
        </div>
        <div className='home-showcase'>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card">
                <Image width={25} height={25} src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <Image width={25} height={25} src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <Image width={25} height={25} src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <Image width={25} height={25} src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
          </div>
        </div>
        <div className='home-showcase'>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card">
                <Image width={25} height={25} src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <Image width={25} height={25} src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <Image width={25} height={25} src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <Image width={25} height={25} src="https://amymhaddad.s3.amazonaws.com/morocco-blue.png" class="card-img-top showcase-cards" alt="..."/>
              </div>
            </div>
          </div>
        </div>
        <div>
          instagram feed
        </div>
        <div className='section'>
          <div className='section-header'>
            Our Services
          </div>
          <div className='row service-cards no-gutter'>
            <Card className='col' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card className='col' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card className='col' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the cards content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className='section'>
          <div className='section-header'>
            contact form
          </div>
          <ContactForm></ContactForm>
        </div>
        <div className='section'> 
          <Footer></Footer>
        </div>
    </div>
  )
}