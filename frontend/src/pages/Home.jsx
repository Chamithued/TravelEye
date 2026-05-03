import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import heroImage from '../assets/heroimg.jpg';
import logo from '../assets/traveleye_Logo.png';
import QuickLinks from '../components/QuickLinks';
import OurJourney from '../components/OurJourney';

export default function Home() {
	const [showStickyNav, setShowStickyNav] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setShowStickyNav(window.scrollY > 300);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="home-hero">
			<div
				className="hero-frame"
				style={{
					backgroundImage: `url(${heroImage})`,
				}}
			>
				<header className="hero-top">
					<div className="hero-logo">
						<img src={logo} alt="TravelEye Logo" />
					</div>
					<nav className="hero-nav">
						<div className="nav-item">
							<a href="#stays" className="nav-link">Stays</a>
							<div className="nav-dropdown">
								<a href="#community-stays">Community & Heritage Stays</a>
								<a href="#nature-stays">Nature & Rural Stays</a>
								<a href="#urban-stays">Urban & Lifestyle Stays</a>
								<a href="#coowner-stays">Join Us as a Co-Owner</a>
							</div>
						</div>
						<div className="nav-item">
							<a href="#experiences" className="nav-link">Experiences</a>
							<div className="nav-dropdown">
								<a href="#people-culture">People & Culture</a>
								<a href="#nature-ecology">Nature & Ecology</a>
								<a href="#food-agri">Food & Agriculture</a>
								<a href="#wellness">Wellness & Spirituality</a>
								<a href="#learning">Learning & Knowledge</a>
								<a href="#purpose">Purpose & Inclusion</a>
								<a href="#modern">Modern Lifestyles</a>
								<a href="#events">Events & Special Interests</a>
								<a href="#business">Business & Work</a>
								<a href="#creator">Join Us as an Experience Creator</a>
							</div>
						</div>
						<div className="nav-item">
							<a href="#travel" className="nav-link">Travel</a>
							<div className="nav-dropdown">
								<a href="#to-srilanka">Travel to Sri Lanka</a>
								<a href="#from-srilanka">Travel from Sri Lanka</a>
								<a href="#in-srilanka">Travel in Sri Lanka</a>
								<a href="#business-travel">Business & Special-Purpose Travel</a>
								<a href="#partner">Partner With Us (Inbound Journeys)</a>
								<a href="#coowner-travel">Join Us as a Co-Owner</a>
							</div>
						</div>
						<div className="nav-item">
							<a href="#support" className="nav-link">Support Services</a>
							<div className="nav-dropdown">
								<a href="#growth">Growth, Visibility & Engagement</a>
								<a href="#skills">Skills & Capacity Building</a>
								<a href="#tech">Technology Enablement</a>
								<a href="#strategy">Strategy & Advisory</a>
								<a href="#quality">Quality & Trust</a>
								<a href="#infrastructure">Infrastructure & Place Development</a>
								<a href="#supplies">Supplies & Resources</a>
								<a href="#coowner-support">Join Us as a Co-Owner</a>
							</div>
						</div>
						<div className="nav-item">
							<a href="#about" className="nav-link">About Traveleye</a>
							<div className="nav-dropdown">
								<a href="#about-alliance">About Traveleye Alliance</a>
								<a href="#vision">Our Vision & Mission</a>
								<a href="#framework">People-Powered Tourism Framework</a>
								<a href="#ecosystem">Our Ecosystem Approach</a>
								<a href="#centers">How Our Facilitation Centers Work</a>
								<a href="#council">The Traveleye Maestro Council</a>
								<a href="#circles">The Traveleye Experience Circles</a>
								<a href="#why">Why Traveleye</a>
								<a href="#work">Work With Us</a>
								<a href="#governance">Governance & Ethics</a>
								<a href="#media">Media & Press</a>
							</div>
						</div>
						<div className="nav-item">
							<a href="#contact" className="nav-link">Contact Us</a>
						</div>
					</nav>
				</header>

					<section className="hero-main">
					<div className="hero-left">
						<div className="eyebrow">BEST TRAVEL AGENCY</div>
						<h1 className="big-title">TravelEye</h1>
						<h2 className="subtitle">Alliance Sri Lanka</h2>
						<p className="lead">Building a People-Powered Tourism Ecosystem for Sri Lanka</p>

						<div className="hero-ctas">
							<button className="btn btn-primary">Discover</button>
							<button className="btn btn-outline">Know More</button>
						</div>
					</div>

					<div className="hero-right">
						<div className="hero-image" aria-hidden="true" />
					</div>
				</section>

				<div className="scroll-indicator">Scroll to Explore</div>
			</div>

			<QuickLinks />
			{showStickyNav && (
				<nav className="sticky-nav">
					<div className="sticky-nav-logo">
						<img src={logo} alt="TravelEye Logo" />
					</div>
					<nav className="sticky-nav-links">
						<div className="nav-item">
							<a href="#stays" className="nav-link">Stays</a>
							<div className="nav-dropdown">
								<a href="#community-stays">Community & Heritage Stays</a>
								<a href="#nature-stays">Nature & Rural Stays</a>
								<a href="#urban-stays">Urban & Lifestyle Stays</a>
								<a href="#coowner-stays">Join Us as a Co-Owner</a>
							</div>
						</div>
						<div className="nav-item">
							<a href="#experiences" className="nav-link">Experiences</a>
							<div className="nav-dropdown">
								<a href="#people-culture">People & Culture</a>
								<a href="#nature-ecology">Nature & Ecology</a>
								<a href="#food-agri">Food & Agriculture</a>
								<a href="#wellness">Wellness & Spirituality</a>
								<a href="#learning">Learning & Knowledge</a>
								<a href="#purpose">Purpose & Inclusion</a>
								<a href="#modern">Modern Lifestyles</a>
								<a href="#events">Events & Special Interests</a>
								<a href="#business">Business & Work</a>
								<a href="#creator">Join Us as an Experience Creator</a>
							</div>
						</div>
						<div className="nav-item">
							<a href="#travel" className="nav-link">Travel</a>
							<div className="nav-dropdown">
								<a href="#to-srilanka">Travel to Sri Lanka</a>
								<a href="#from-srilanka">Travel from Sri Lanka</a>
								<a href="#in-srilanka">Travel in Sri Lanka</a>
								<a href="#business-travel">Business & Special-Purpose Travel</a>
								<a href="#partner">Partner With Us (Inbound Journeys)</a>
								<a href="#coowner-travel">Join Us as a Co-Owner</a>
							</div>
						</div>
						<div className="nav-item">
							<a href="#support" className="nav-link">Support Services</a>
							<div className="nav-dropdown">
								<a href="#growth">Growth, Visibility & Engagement</a>
								<a href="#skills">Skills & Capacity Building</a>
								<a href="#tech">Technology Enablement</a>
								<a href="#strategy">Strategy & Advisory</a>
								<a href="#quality">Quality & Trust</a>
								<a href="#infrastructure">Infrastructure & Place Development</a>
								<a href="#supplies">Supplies & Resources</a>
								<a href="#coowner-support">Join Us as a Co-Owner</a>
							</div>
						</div>
						<div className="nav-item">
							<a href="#about" className="nav-link">About Traveleye</a>
							<div className="nav-dropdown">
								<a href="#about-alliance">About Traveleye Alliance</a>
								<a href="#vision">Our Vision & Mission</a>
								<a href="#framework">People-Powered Tourism Framework</a>
								<a href="#ecosystem">Our Ecosystem Approach</a>
								<a href="#centers">How Our Facilitation Centers Work</a>
								<a href="#council">The Traveleye Maestro Council</a>
								<a href="#circles">The Traveleye Experience Circles</a>
								<a href="#why">Why Traveleye</a>
								<a href="#work">Work With Us</a>
								<a href="#governance">Governance & Ethics</a>
								<a href="#media">Media & Press</a>
							</div>
						</div>
						<div className="nav-item">
							<a href="#contact" className="nav-link">Contact Us</a>
						</div>
					</nav>
				</nav>
			)}
			<OurJourney />
		</div>
	);
}
