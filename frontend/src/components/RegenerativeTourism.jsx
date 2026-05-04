import React from 'react';
import './RegenerativeTourism.css';
import logo1 from '../assets/logo1.jpeg';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.jpeg';
import peoplePoweredImage from '../assets/people_powered.png';

export default function RegenerativeTourism() {
	return (
		<section className="regenerative-tourism">
			<div className="regenerative-container">
				<div className="regenerative-left">
					<div className="eco-tag">Regenerative Tourism Ecosystem</div>
					<h2 className="eco-title">Where Regenerative Tourism Meets People-Powered Design</h2>
					
					<p className="eco-description">
						At the heart of Traveleye Alliance is a people-powered tourism ecosystem where local people, communities, youth entrepreneurs, and experts co-own, co-create, and co-manage, micro and small scale tourism enterprises.
					</p>

					<p className="eco-description">
						Guided by our People-Powered Tourism (PPT) Model and five integrated pillars, every journey is designed to strengthen people, culture, and destinations — ensuring tourism gives back more than it takes.
					</p>

					<p className="eco-pillars-intro">More than a network, it is a shared-value system built on five integrated pillars:</p>

					<div className="eco-pillars-grid">
						<div className="eco-pillar">
							<div className="pillar-icon pps"><img src={logo1} alt="PPS logo" className="pillar-image" /></div>
							<div className="pillar-text">
								<div className="pillar-label">PPS</div>
								<div className="pillar-name">People-Powered Stays</div>
							</div>
						</div>

						<div className="eco-pillar">
							<div className="pillar-icon pyet"><img src={logo2} alt="PYET logo" className="pillar-image" /></div>
							<div className="pillar-text">
								<div className="pillar-label">PYET</div>
								<div className="pillar-name">People-Powered Experiential Tourism</div>
							</div>
						</div>

						<div className="eco-pillar">
							<div className="pillar-icon ppto"><img src={logo3} alt="PPTO logo" className="pillar-image" /></div>
							<div className="pillar-text">
								<div className="pillar-label">PPTO</div>
								<div className="pillar-name">People-Powered Tour Operations</div>
							</div>
						</div>

						<div className="eco-pillar">
							<div className="pillar-icon ppss"><img src={logo4} alt="PPSS logo" className="pillar-image" /></div>
							<div className="pillar-text">
								<div className="pillar-label">PPSS</div>
								<div className="pillar-name">People-Powered Support Services</div>
							</div>
						</div>

						<div className="eco-pillar">
							<div className="pillar-icon ppfc"><img src={logo5} alt="PPFC logo" className="pillar-image" /></div>
							<div className="pillar-text">
								<div className="pillar-label">PPFC</div>
								<div className="pillar-name">People-Powered Facilitation Centers</div>
							</div>
						</div>
					</div>

					<button className="btn btn-primary eco-btn">Learn About the Ecosystem</button>
				</div>

				<div className="regenerative-right">
					<div className="eco-image-container">
						<img
							src={peoplePoweredImage}
							alt="People-powered tourism ecosystem"
							className="eco-image"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
