import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/output.css";

function Footer() {
    return(
        <div className='footer'>
            <div className='row footer-nav no-gutter'>
                <div className='col'>
                    <h2 className='footer-header'>
                        Company
                    </h2>
                    <div className='row footer-link no-gutter'>
                        <Link href='/' className='light-link'>Home</Link>
                    </div>
                    <div className='row footer-link no-gutter'>
                        <Link href='/services' className='light-link'>Services</Link>
                    </div>
                    <div className='row footer-link no-gutter'>
                        <Link href='/about' className='light-link'>About Us</Link>
                    </div>
                    <div className='row footer-link no-gutter'>
                        <Link href='/faq' className='light-link'>FAQ</Link>
                    </div>
                </div>
                <div className='col right-align'>
                    <h2 className='footer-header right-align'>
                        Services
                    </h2>
                    <div className='row footer-link no-gutter'>
                        <Link href='/services/carDetailing' className='light-link'>Mobile Car Detailing</Link>                        
                    </div>
                    <div className='row footer-link no-gutter'>
                        <Link href='/services/birdProofing' className='light-link'>Bird Proofing</Link>
                    </div>
                    <div className='row footer-link no-gutter'>
                        <Link href='/services/solarPanelCleaning' className='light-link'>Solar Panel Cleaning</Link>
                    </div>
                    <div className='row footer-link no-gutter'>
                        <Link href='/services/windowCleaning' className='light-link'>Window Cleaning</Link>                        
                    </div>
                    <div className='row footer-link no-gutter'>
                        <Link href='/services/pressureWashing' className='light-link'>Pressure Washing</Link>                        
                    </div>
                </div>
            </div>
            <div className='row footer-contact no-gutter'>
                <h2 className='footer-action'>
                    Contact Us
                </h2>
                <div>
                    Email: Business@sunwashers.com
                </div>
                <div>
                    Phone: 951 591-1334
                </div>
            </div>
            <div className='row service-area service-locations no-gutter'>
                <p>
                    Sunwashers is Southern Californias go-to solar panel cleaning and
                    window cleaning company. <br/>We activily service Riverside,
                    Corona, San Bernardino, Temecula, Menifee, Fontana,
                    Chino and surrounding areas.
                </p>
            </div>
            <div className='row social-icons no-gutter'>
                <div className='col social-icon'>
                    <Link href='https://www.instagram.com/sunwashers/'>
                        <Image
                            src='https://res.cloudinary.com/dppkrg7h5/image/upload/v1669835799/icons/instagram-icon_n6xiqj.png'
                            alt='instagram icon link'
                            className='icon'/>
                    </Link>
                </div>
                <div className='col social-icon'>
                    <Link href='https://www.facebook.com/profile.php?id=100083854606377'>
                        <Image
                            src='https://res.cloudinary.com/dppkrg7h5/image/upload/v1669835799/icons/facebook-icon_imb6t4.png'
                            alt='facebook icon link'
                            className='icon'/>
                    </Link>
                </div>
                <div className='col social-icon'>
                    <Link href='https://www.linkedin.com/company/sunwashers/'>
                        <Image
                            src='https://res.cloudinary.com/dppkrg7h5/image/upload/v1669835799/icons/linkedIn-icon_l9u4id.png'
                            alt='linkedin icon link'
                            className='icon'/>
                    </Link>
                </div>
                <div className='col social-icon'>
                    <Image
                        src='https://res.cloudinary.com/dppkrg7h5/image/upload/v1669835800/icons/tiktok-icon_uq1ui9.png'
                        alt='tiktok icon link'
                        className='icon'/>
                </div>
                <div className='col social-icon'>
                    <Link href='https://www.yelp.com/biz/sunwashers-moreno-valley-2'>
                        <Image
                            src='https://res.cloudinary.com/dppkrg7h5/image/upload/v1669835800/icons/yelp-icon_evvnuu.png'
                            alt='yelp icon link'
                            className='icon'/>
                    </Link>
                </div>
                <div className='col social-icon'>
                    <Link href='https://www.youtube.com/channel/UCzAvZFzEhCHFK7ohxH2eujQ'>
                        <Image
                            src='https://res.cloudinary.com/dppkrg7h5/image/upload/v1669835800/icons/youtube-icon_bxlryw.png'
                            alt='youtube icon link'
                            className='icon'/>
                    </Link>
                </div>
            </div>
            <div className='row developer-credits no-gutter no-roofing'>
                <p>
                    Developed, Marketed and Copyright @ 2023 <br></br>
                    <a>Jason Valadez </a> | Professional Web Developer.
                </p>
            </div>
        </div>
    )
}

export default Footer;