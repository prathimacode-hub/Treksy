import React from 'react';
import '../styles/Footer.css'

function Footer() {
    return <div>
        <footer>
            <div className="footer-content">
                <h3>Treksy</h3>
                <p>Treksy is a full fledged travel app solution for unique experiences, offbeat explorations, customized planning and user-friendly booking system. Spend your time making the most of your experiences instead of spending countless hours searching for bookings, activities and local resources. Travel hassle free. Rejuvenate your soul with tons of memories that we get you covered.</p>
                <ul class="socials">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                </ul>
                <div className="footer-bottom">
                    <p>copyright &copy;2022 treksy</p>
                    <div class="footer-menu">
                        <ul class="f-menu">
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>;
}

export default Footer;
