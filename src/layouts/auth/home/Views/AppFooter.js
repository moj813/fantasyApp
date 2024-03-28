import * as React from 'react';
import './styles/AooFooter.css';
import instagram from '../Components/174855.png';
import facebook from '../Components/733547.png';
export default function AppFooter() {
  return (
    <section>

    <div class="sec4">

        <div class="sec4First">
                <div class="sec4LogoAndSocialMedia">
                    <div class="sec4Img">
                        CricFantasy
                    </div>
                    <div class="sec4slogo">
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        
                    </div>
                </div>
                <div class="sec4QuickLinks">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>
                            <h4>Products</h4>
                        </li>
                        <li>
                            <h4>Industries</h4>
                        </li>
                        <li>
                            <h4>Sustainbilitys</h4>
                        </li>
                        <li>
                            <h4>R&D</h4>
                        </li>
                        <li>
                            <h4>Carrer</h4>
                        </li>
                    </ul>
                </div>
                <div class="sec4Contactus">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>
                            <h4>Email : marakanadarshil@gmail.com</h4>
                        </li>
                        <li>
                            <h4>Tel : +91 8347296122</h4>
                        </li>
                        <li>
                            <h4>Fax : +91 9316172495</h4>
                        </li>
                    </ul>
                </div>
        </div>

        <div class="line">
            
        </div>
        
        <div class="sec4Second">
            <div class="sec4footerpart1">
                <h3>Copyright © 2024 CricFantasy App ltd. All rights reserved.</h3>
            </div>
            <div class="sec4footerpart2">
                <h3>Terms & Condition - Purchase - Sales Disclaimer Privacy Policy</h3>
            </div>
        </div>
    </div>

</section>
  );
}