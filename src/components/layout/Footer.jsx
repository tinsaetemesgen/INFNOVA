import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2 className="footer-logo">INFNOVA Academy</h2>
                    <p className="footer-description">
                        Empowering learners worldwide with cutting-edge technology courses. 
                        Start your journey to success with expert-led training.
                    </p>
                </div>

                <div className="footer-links-container">
                    <div className="footer-group">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-list">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/courses">Courses</a></li>
                            <li><a href="/instructors">Instructors</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-group">
                        <h3 className="footer-title">Support</h3>
                        <ul className="footer-list">
                            <li><a href="/help">Help Center</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} INFNOVA Technologies. All rights reserved.</p>
            </div>
        </footer>
    );
}