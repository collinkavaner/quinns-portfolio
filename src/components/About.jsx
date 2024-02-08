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
                        I'm a 22-year-old creative from Toronto, Canada. After publishing my first book at twelve, I knew I had a gift for writing and a passion for sharing ideas. In June of 2023 I graduated from the University of Guelph-Humber with a bachelor's degree in media and communication studies. With a diverse range of skills
                        and interests, I directed my focus towards UXD (user experience design). In September of 2023, I embarked on the next phase of my academic journey by joining the Master of Information program at the University of Toronto, specializing in UXD.
                    </p>
                    <br />
                    <p>As a master of information student, effective communication is always at the top of my priority list. Whether I'm writing, researching, designing or presenting, I am constantly exploring new ways to share my ideas with the world. When I'm not doing that, you can find me at the gym or making music in my room.</p>
                </div>
            </div>
        </div>
    </>
  );
}

export default About;