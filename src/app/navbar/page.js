import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import CardNavbar from '../componen/navbar';
import './navbar.css'

const Page = () => {
    return (
        <Layout>
            <div className='box'>
                <div class="contact-container">
                    <h2>Contact Us</h2>
                    <div class="contact-info">
                        <p>Name: Your Company</p>
                        <p>Email: info@yourcompany.com</p>
                        <p>Phone: +123 456 789</p>
                    </div>
                </div> 

                <div class="contact-container">
                    <h2>Contact Us</h2>
                    <div class="contact-info">
                        <p><i class="contact-icon">🏢</i>Name: Your Company</p>
                        <p><i class="contact-icon">📧</i>Email: info@yourcompany.com</p>
                        <p><i class="contact-icon">📞</i>Phone: +123 456 789</p>
                    </div>
                    <form>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <input type="tel" name="phone" placeholder="Your Phone" required />
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <input type="submit" value="Send Message" />
                    </form>

                </div>

                <div class="contact-container">
                    <h2>Get in Touch</h2>
                    <div class="contact-info">
                    <div class="info-item">
                        <i class="contact-icon">🏢</i>
                        <span>Company Name:</span> Your Company
                    </div>
                    <div class="info-item">
                        <i class="contact-icon">📧</i>
                        <span>Email:</span> info@yourcompany.com
                </div>
                    <div class="info-item">
                        <i class="contact-icon">📞</i>
                        <span>Phone:</span> +123 456 789
                    </div>
                </div>
                    <form class="contact-form">
                        <div class="form-group">
                            <input type="text" name="name" placeholder="Your Full Name" required />
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" placeholder="Your Email Address" required />
                        </div>
                        <div class="form-group">
                            <input type="tel" name="phone" placeholder="Your Contact Number" required />
                        </div>
                        <div class="form-group">
                            <textarea name="message" rows="6" placeholder="Your Message Here" required></textarea>
                        </div>
                        <button type="submit" class="submit-button">Send Message</button>
                    </form>
                    {/* sosial media */}
                    <div class="social-media">
                        <p>Follow Us:</p>
                        <a href="https://facebook.com/yourcompany" target="_blank" class="social-icon">📘</a>
                        <a href="https://twitter.com/yourcompany" target="_blank" class="social-icon">🐦</a>
                        <a href="https://instagram.com/yourcompany" target="_blank" class="social-icon">📸</a>
                        <a href="https://linkedin.com/company/yourcompany" target="_blank" class="social-icon">🔗</a>
                    </div>
                </div>

            </div>
        </Layout>
    );
}
export default Page;