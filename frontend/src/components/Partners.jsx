import { ChevronRight, Globe, Mail, Phone, MapPinIcon, Home, Clock } from 'lucide-react'
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram, FaLinkedin, FaPinterest, FaXTwitter } from 'react-icons/fa6'
import './Partners.css'

const experienceLinks = [
  'Explore People-Powered Stays',
  'Explore People-Powered Travel Experiences',
  'Plan Your Sri Lanka Journey (Inbound)',
  'Discover Sri Lanka in Ultimate Luxury (Inbound)',
  'Plan Your Corporate Event in Sri Lanka (MICE)',
  'Explore the World with Traveleye (Outbound – Sri Lankans)',
  'Discover Sri Lanka Your Way (Domestic – Sri Lankans)',
  'Access People-Powered Support Services'
]

const workWithUsLinks = [
  'Join Us as a Co-Owner',
  'Become an Experience Creator',
  'Partner With Us (Inbound Journeys)',
  'Collaborate With Us',
  'Join the Movement',
  'Travel With Purpose',
  'Support Local People & Communities'
]

const movementLinks = [
  'About Traveleye Alliance',
  'Our Vision & Mission',
  'People-Powered Tourism Framework',
  'Our Ecosystem Approach',
  'How Our Facilitation Centers Work',
  'The Traveleye Maestro Council',
  'The Traveleye Experience Circles',
  'Why Traveleye',
  'Work With Us',
  'Governance & Ethics',
  'Media & Press'
]

const modelLinks = {
  framework: ['People-Powered Tourism (PPT) Framework'],
  pillars: [
    'PPS – People-Powered Stays',
    'PPET – People-Powered Experiential Tourism',
    'PPTO – People-Powered Tour Operations',
    'PPSS – People-Powered Support Services',
    'PPFC – People-Powered Facilitation Centers'
  ],
  legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
}

export default function Footer() {
  return (
    <footer className="footer-section contained" aria-labelledby="footer-title">
      <div className="footer-container">
        <div className="footer-content three-up">
          <div className="footer-column">
            <h4 className="footer-section-title">Experience Sri Lanka & Beyond</h4>
            <h5 className="footer-subheading">Explore & Travel</h5>
            <ul className="footer-links">
              {experienceLinks.map((t) => (
                <li key={t}><a href="#"><span className="chev"><ChevronRight size={14} /></span>{t}</a></li>
              ))}
            </ul>

            <h5 className="footer-subheading">Work With Us</h5>
            <ul className="footer-links">
              {workWithUsLinks.map((t) => (
                <li key={t}><a href="#"><span className="chev"><ChevronRight size={14} /></span>{t}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-section-title">Traveleye Movement</h4>
            <h5 className="footer-subheading">About Traveleye</h5>
            <ul className="footer-links">
              {movementLinks.map((t) => (
                <li key={t}><a href="#"><span className="chev"><ChevronRight size={14} /></span>{t}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-section-title">Models, Contact & Trust</h4>
            <h5 className="footer-subheading">Our Framework</h5>
            <ul className="footer-links small">
              {modelLinks.framework.map((t) => (
                <li key={t}><a href="#"><span className="chev"><ChevronRight size={14} /></span>{t}</a></li>
              ))}
            </ul>

            <h5 className="footer-subheading">Our Pillars</h5>
            <ul className="footer-links small">
              {modelLinks.pillars.map((t) => (
                <li key={t}><a href="#"><span className="chev"><ChevronRight size={14} /></span>{t}</a></li>
              ))}
            </ul>

            <h5 className="footer-subheading">Legal</h5>
            <ul className="footer-links small">
              {modelLinks.legal.map((t) => (
                <li key={t}><a href="#"><span className="chev"><ChevronRight size={14} /></span>{t}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-column connect-column">
            <h4 className="footer-section-title">Connect With Us</h4>
            <h5 className="footer-subheading">Follow Us On Social Media</h5>

            <div className="connect-group">
              <p className="connect-group-title"><Globe size={16} /> For International Visitors</p>
              <ul className="social-list">
                <li><a href="#"><FaFacebook className="social-icon-brand" /> Facebook</a></li>
                <li><a href="#"><FaYoutube className="social-icon-brand" /> YouTube</a></li>
                <li><a href="#"><FaTiktok className="social-icon-brand" /> TikTok</a></li>
              </ul>
            </div>

            <div className="connect-group">
              <p className="connect-group-title"><Home size={16} /> For Sri Lankans</p>
              <ul className="social-list">
                <li><a href="#"><FaFacebook className="social-icon-brand" /> Facebook</a></li>
                <li><a href="#"><FaYoutube className="social-icon-brand" /> YouTube</a></li>
                <li><a href="#"><FaTiktok className="social-icon-brand" /> TikTok</a></li>
              </ul>
            </div>

            <div className="connect-group">
              <p className="connect-group-title"><Clock size={16} /> Traveleye Alliance</p>
              <ul className="social-list">
                <li><a href="#"><FaInstagram className="social-icon-brand" /> Instagram</a></li>
                <li><a href="#"><FaLinkedin className="social-icon-brand" /> LinkedIn</a></li>
                <li><a href="#"><FaPinterest className="social-icon-brand" /> Pinterest</a></li>
                <li><a href="#"><FaXTwitter className="social-icon-brand" /> X</a></li>
              </ul>
            </div>

            <h5 className="footer-subheading">Stay Connected</h5>
            <ul className="contact-list">
              <li><MapPinIcon className="contact-icon" /> Colombo, Sri Lanka</li>
              <li><Mail className="contact-icon" /> hello@traveleyealliance.com</li>
              <li><a href="https://www.traveleyealliance.com">www.traveleyealliance.com</a></li>
              <li><Phone className="contact-icon" /> +94 0777 123 456</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2026 TravelEye Alliance. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
