import '../styles/Work.css';
import FourDots from '../assets/4-circles.png'
import AbstractStatue from '../assets/abstract-statue.webp'
import SewingMachine from '../assets/sewing-machine.webp'
import PosMachine from '../assets/pos-machine.webp'
import { Link } from 'react-router-dom';
import { HiChevronRight } from "react-icons/hi";

function Work() {
  return (
    <>
        <div className='hero-section-dots'>
            <div className="hero-title">
                <h1>Hey! I'm Quinn.</h1>
                <h4>A user experience designer from Toronto.</h4>
            </div>
            <img src={FourDots} alt="Four Dots in a square shape" className='dot-square'/>
        </div>
        <div className='line'></div>
        <div className='work-section'>
            <h2>My Work</h2>
            <div className='work-projects'>
                <div className='work-item'>
                    <div className='project-desc'>
                        <h3>Museum Discounts</h3>
                        <h4>UX case study</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <Link to="/museum-discounts">
                            <button><span>View Project</span><HiChevronRight className='chev-r'/></button>
                        </Link>
                    </div>
                    <img src={AbstractStatue} className='project-hero-img' alt="Person standing by an abstract statue" />
                </div>

                <div className='work-item'>
                    <img src={SewingMachine} className='project-hero-img' alt="sewing machine" />
                    <div className='project-desc'>
                        <h3>Textile Museum of Canada</h3>
                        <h4>IA & NAV redesign</h4>
                        <p>In this project I re-imagined the information architecture and navigation for the Textile Museum of Canada's website.</p>
                        <Link to="/textile-museum-canada">
                            <button><span>View Project</span><HiChevronRight className='chev-r'/></button>
                        </Link>
                    </div>
                </div>

                <div className='work-item'>
                    <div className='project-desc'>
                        <h3>POS tipping screen</h3>
                        <h4>Mini UX case study</h4>
                        <p>Point of sale (POS) machines are everywhere, but that doesn't mean they're fun to use. In this project, I re-imagined the POS machine tipping screen. </p>
                        <Link to="/pos-tipping-screen">
                            <button><span>View Project</span><HiChevronRight className='chev-r'/></button>
                        </Link>
                    </div>
                    <img src={PosMachine} className='project-hero-img' alt="point of sales machine" />
                </div>
            </div>
        </div>
    </>
  );
}

export default Work;