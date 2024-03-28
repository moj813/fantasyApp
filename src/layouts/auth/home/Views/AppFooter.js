import * as React from 'react';
import './AppFooter.css';
import FinalLogo from '../../../../Assets/Images/finalLogo.png'
import Insta from '../../../../Assets/Images/instgram2.png'
import Face from '../../../../Assets/Images/instgram2.png'
import LinkdIn from '../../../../Assets/Images/linkdin2.png'
import Twitter from '../../../../Assets/Images/twitter2.png'

export default function AppFooter() {
  return (
    
    <section>

        <div class="sec4">
            <div class="sec4First">
                    <div class="sec4LogoAndSocialMedia">
                        <div class="sec4Img">
                            <img src={FinalLogo} alt="" />
                        </div>
                        <div class="sec4slogo">
                            {/* <img src="Assets/facebook2.png" alt="">
                            <img src="Assets/instgram2.png" alt="">
                            <img src="Assets/linkdin2.png" alt="">
                            <img src="Assets/twitter2.png" alt=""> */}
                        </div>
                    </div>
                    <div class="sec4QuickLinks">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>
                                <h4>Login</h4>
                            </li>
                            <li>
                                <h4>Live Score</h4>
                            </li>
                            <li>
                                <h4>Contact Us</h4>
                            </li>
                            <li>
                                <h4>Privacy&Policy</h4>
                            </li>
                        </ul>
                    </div>
                    <div class="sec4Contactus">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>
                                <h4>Email :marakanadarshil@gmail.com</h4>
                            </li>
                            <li>
                                <h4>Tel : +91 94849XXXXX</h4>
                            </li>
                            <li>
                                <h4>Fax : +91 93161XXXXX</h4>
                            </li>
                        </ul>
                    </div>
            </div>

            <div class="line">
                <hr />
            </div>
            

            <div class="sec4Second">
                <div class="sec4footerpart1">
                    <h3>Copyright © 2024 Fantasy Cricket  All rights reserved.</h3>
                    
                </div>
                <div class="sec4footerpart2">
                    <h3>Terms & Condition -  Disclaimer Privacy Policy</h3>
                </div>
            </div>
        </div>

    </section>
  );
}