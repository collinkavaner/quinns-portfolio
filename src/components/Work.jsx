import styles from '../styles/work.module.css'
import { useEffect } from 'react'
import FourDots from '../assets/4-circles.png'
import AbstractStatue from '../assets/abstract-statue.webp'
import SewingMachine from '../assets/sewing-machine.webp'
import PosMachine from '../assets/pos-machine.webp'
import TwoWayBay from '../assets/twowaybay.avif'
import { Link } from 'react-router-dom';
import { HiChevronRight } from "react-icons/hi";

function Work() {

    useEffect(() => {
        document.title = "Quinn Kavaner | UX Portfolio"
     }, []);

  return (
    <>
        <div className={styles.heroSectionDots}>
            <div className={styles.heroTitle}>
                <h1>Hey! I'm Quinn.</h1>
                <h4>A user experience designer from Toronto.</h4>
            </div>
            <img src={FourDots} alt="Four Dots in a square shape" className={styles.dotSquare} />
        </div>
        <div className={styles.line}></div>
        <div className={styles.workSection}>
            <h2>My Work</h2>
            <div className={styles.workProjects}>
                <div className={styles.workItem}>
                    <div className={styles.projectDesc}>
                        <h3>Museum Discounts</h3>
                        <h4>UX case study</h4>
                        <p>Everyone loves a good discount, right? From interviews to prototypes, the focus of this project was to help Toronto residents discover discounted museum tickets.</p>
                        <Link to="/museum-discounts" className='primary-button'>
                            <span>View Project</span><HiChevronRight className='chev-r'/>
                        </Link>
                    </div>
                    <img src={AbstractStatue} className={styles.projectHeroImg} alt="Person standing by an abstract statue" />
                </div>

                <div className={styles.workItem}>
                    <img src={TwoWayBay} className={styles.projectHeroImg} alt="2waybay project" />
                    <div className={styles.projectDesc}>
                        <h3>2WayBay</h3>
                        <h4>App design</h4>
                        <p>In this project I re-imagined a marketplace without the need for currency.</p>
                        <Link to="/two-way-bay" className='primary-button'>
                            <span>View Project</span><HiChevronRight className='chev-r'/>
                        </Link>
                    </div>
                </div>

                <div className={styles.workItem}>
                    <div className={styles.projectDesc}>
                        <h3>Textile Museum of Canada</h3>
                        <h4>IA & NAV redesign</h4>
                        <p>In this project I re-imagined the information architecture and navigation for the Textile Museum of Canada's website.</p>
                        <Link to="/textile-museum-canada" className='primary-button'>
                            <span>View Project</span><HiChevronRight className='chev-r'/>
                        </Link>
                    </div>
                    <img src={SewingMachine} className={styles.projectHeroImg} alt="sewing machine" />
                </div>

                <div className={styles.workItem}>
                    <img src={PosMachine} className={styles.projectHeroImg} alt="point of sales machine" />
                    <div className={styles.projectDesc}>
                        <h3>POS tipping screen</h3>
                        <h4>Mini UX case study</h4>
                        <p>Point of sale (POS) machines are everywhere, but that doesn't mean they're fun to use. In this project, I re-imagined the POS machine tipping screen. </p>
                        <Link to="/pos-tipping-screen" className='primary-button'>
                            <span>View Project</span><HiChevronRight className='chev-r'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Work;