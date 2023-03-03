import React from "react";
import '/Users/lorenzocappiello/Desktop/portfolio 2023/src/Contacts.css';

function ContactsSection() {

    return (
        <section id="contacts" className="contacts-section">
            <div className="contacts-content-general">
                <div className="services">
                    <div className="services-content">
                        <p className="services-title">What can I do for you:</p>
                            <p className="services-item">▹ Front-End Development</p>
                            <p className="services-item">▹ Back-End Development</p>
                            <p className="services-item">▹ Copywriting</p>
                            <p className="services-item">▹ SEO Optimization</p>
                            <p className="services-item">▹ Social Media Management</p>  
                    </div>      
                </div>
                <div className="contact-form">
                    <p className="services-title">Contact me</p>
                        <div className="email-address">
                            <p className="email-address-text">
                            For further information or for collaboration proposals, send an email <a className="email-link" href="mailto:lorenzocappiello.work@gmail.com">lorenzocappiello.work@gmail.com</a>.
                            </p>
                        </div>
                        <div className="social-networks-footer">
                            <a href="https://www.linkedin.com/in/lorenzocappiello/" class="fa fa-linkedin"/>
                            <a href="https://github.com/lorenzocappiello" class="fa fa-github"/>
                            <a href="https://www.instagram.com/lorenzoandcode/" class="fa fa-instagram"/>
                        </div>
                        <div className="footer">
                            <p className="footer-text">Project by Lorenzo Cappiello © 2023</p>
                        </div>
                </div>
            </div>    
        </section>
    );

}

export default ContactsSection; 