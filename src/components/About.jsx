import styles from '../styles/about.module.css'
import { useEffect } from 'react';
import Quinn from '../assets/my-face.webp'
import FourDots from '../assets/4-circles-straight.png'
import { FaLinkedin } from "react-icons/fa";

function About() {

    useEffect(() => {
        document.title = "About Quinn Kavaner"
     }, []);

  return (
    <>
        <div className={styles.aboutSection}>
            <div>
                <img src={Quinn} alt="Image of Quinn" className={styles.myFace} />
                <div className={styles.contactDetails}>
                    <p>Reach me anytime at <a href="mailto:qkavaner@gmail.com" className={styles.email}>qkavaner@gmail.com</a> or</p>
                    <a href="https://www.linkedin.com/in/quinnkavaner/" target='_blank'><FaLinkedin className={styles.linkedIn} /></a>
                </div>
            </div>
            <div>
                <div className={styles.titleDots}>
                    <h1><span style={{fontWeight: "400"}}>About </span>Me</h1>
                    <img src={FourDots} alt="Four Dots in a straight line" className={styles.dotLine} />
                </div>
                <div>
                    <p>
                       I am a 24-year-old creative from Toronto with a lifelong passion for storytelling and design. After publishing my first book at twelve, I discovered a love for writing and a drive to share ideas in meaningful ways.
                    </p>
                    <br />
                    <p>In June of 2023, I earned my bachelor's degree in Media and Communication Studies from the University of Guelph-Humber. Building on that foundation, I directed my focus toward UXD (User Experience Design). In June of 2025, I graduated from the Master of Information program at the University of Toronto, specializing in UXD.</p>
                    <br />
                    <p>As a UX professional, effective communication is always at the top of my priority list. Whether I'm writing, researching, designing or presenting, I am constantly exploring creative ways to connect ideas with people. When I'm not doing that, you can find me at the gym, in the woods, or making music in my room.</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default About;