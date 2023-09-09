import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/output.css";

function Footer() {
    return(
        <div className='footer'>
            <div className='row footer-nav no-gutter center'>
                <div className='col'>
                    <h2 className='footer-header'>
                        Company
                    </h2>
                    <div className='row footer-link no-gutter'>
                        <Link href='/' className='light-link'>Home</Link>
                    </div>
                </div>
                <div className='col'>
                    <h2 className='footer-header'>
                        Contact Us
                    </h2>
                    <div className='footer-link no-gutter'>
                        Email: smellmybuds@gmail.com
                    </div>
                    <div className='footer-link no-gutter'>
                        Phone: 951 337-8915
                    </div>
                </div>
            </div>
            <div className='row service-area service-locations no-gutter center'>
                <p>
                    We design and customize floral arrangements and party decorations here in the I.E. Call us today!
                </p>
            </div>
            <div className='row social-icons no-gutter center'>
                <div className='col social-icon'>
                    <Link href='https://www.instagram.com/smellmybuds'>
                        <Image
                            width={50}
                            height={50}
                            src='https://res.cloudinary.com/dppkrg7h5/image/upload/v1669835799/icons/instagram-icon_n6xiqj.png'
                            alt='instagram icon link'
                            className='icon'/>
                    </Link>
                </div>
                <div className='col social-icon'>
                    <Link href='https://www.facebook.com/smellmybuds'>
                        <Image
                            width={50}
                            height={50}
                            src='https://res.cloudinary.com/dppkrg7h5/image/upload/v1669835799/icons/facebook-icon_imb6t4.png'
                            alt='facebook icon link'
                            className='icon'/>
                    </Link>
                </div>
                <div className='col social-icon'>
                    <Link href='https://www.yelp.com/biz/smell-my-buds-moreno-valley'>
                        <Image
                            width={50}
                            height={50}
                            src='https://res.cloudinary.com/dppkrg7h5/image/upload/v1669835800/icons/yelp-icon_evvnuu.png'
                            alt='yelp icon link'
                            className='icon'/>
                    </Link>
                </div>
            </div>
            <div className='row developer-credits no-gutter no-roofing center'>
                <p>
                    Developed, Marketed and Copyright @ 2023 <br></br>
                    <a href="https://jasonvaladezportfolio.herokuapp.com/">Jason Valadez </a> | Professional Web Developer.
                </p>
            </div>
        </div>
    )
}

export default Footer;