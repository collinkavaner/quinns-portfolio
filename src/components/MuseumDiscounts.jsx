import styles from '../styles/museum.module.css'
import { useEffect } from 'react';
import { HiArrowSmDown } from "react-icons/hi";
import AbstractStatue from '../assets/abstract-statue.webp'
import PhoneMockup from '../assets/UXsprint1-phones.avif'
import UXFrame01 from '../assets/UXsprint1-Frame_01.avif'
import UXFrame02 from '../assets/UXsprint1-Frame_02.avif'
import UXFrame03 from '../assets/UXsprint1-Frame_03.avif'
import UXFrame04 from '../assets/UXsprint1-Frame_04.avif'
import UXFrame05 from '../assets/UXsprint1-Frame_05.avif'
import UXFrame06 from '../assets/UXsprint1-Frame_06.avif'
import UXFrame07 from '../assets/UXsprint1-Frame_07.avif'
import Mary from '../assets/Mary.avif'
import AsIsDiagram from '../assets/As-is-Scenario.avif'

function MuseumDiscounts() {

  useEffect(() => {
    document.title = "Museum Discounts | UX Case Study"
 }, []);

  return (
    <>
      <section className={styles.heroSection}>
        <div>
          <h1>How can we help Toronto residents find discounted museum tickets?</h1>
          <p>
            For the second half of my first semester (fall 2023) at UofT, I worked with five of my peers on a summative project. Our task was simple: Improve the lives of Toronto residents. 
            With a shared interest in the entertainment and recreation sector, we narrowed our scope to museums. More specifically, the expensive prices that often drive people away from visiting. Our goal was to make it easier and faster to find discounted museum tickets, which lead us to our <b>solution:</b>
          </p>
        </div>
        <img src={AbstractStatue} alt="Person standing by an abstract statue" className={styles.statue}/>
      </section>

      <section className={styles.mockupSection}>
        <h3>A mobile app with an updated list of all discounts available for Toronto museums. <HiArrowSmDown /></h3>
        <img src={PhoneMockup} alt="Mobile app mockup" className={styles.phoneMockup}/>
        <h2><span style={{fontWeight: 400}}>But how did we get here?</span> Let me show you.</h2>
        <div className={styles.demographic}>
          <p>Primary <b>research</b> was the foundation of this project and our research methods included surveys and interviews. </p>
          <div>
            <p><b>Participant demographic:</b></p>
            <ul>
              <li>Age: 18+</li>
              <li>Living in Toronto</li>
              <li>Interested in visiting museums</li>
            </ul>
          </div>
          <p>The survey was filled out by <b>36</b> participants and <b>12</b> interviews were conducted. All participants consented to participate, no personal information was recorded and all data was collected anonymously.</p>
        </div>
      </section>

      <section className={styles.affinitySection}>
        <h2>Affinity Diagram</h2>
        <p>After all of the data was collected, I created an affinity diagram to organize interview data into natural groups. As shown in the image below, I grouped participant responses into <b>seven categories.</b> This gave my group and I a better understanding of the common themes and ideas in our research.</p>
        <div className={styles.affinityContainer}>
          <div className={styles.affinityColumn}>
            <img src={UXFrame01} alt="Affinity diagram" />
            <img src={UXFrame02} alt="Affinity diagram" />
            <img src={UXFrame03} alt="Affinity diagram" />
          </div>
          <div className={styles.affinityColumn}>
            <img src={UXFrame04} alt="Affinity diagram" />
          </div>
          <div className={styles.affinityColumn}>
            <img src={UXFrame05} alt="Affinity diagram" />
            <img src={UXFrame06} alt="Affinity diagram" />
            <img src={UXFrame07} alt="Affinity diagram" />
          </div>
        </div>
      </section>

      <section className={styles.personaSection}>
        <div className={styles.personaContainer}>
          <img src={Mary} alt="Mary the Museum Goer persona" className={styles.mary}/>
          <div>
            <h2>User Persona</h2>
            <p>With the data sorted, we created a user persona; a fictional character to represent the participants. Say hello to <b>Mary the Museum Goer.</b></p>
            <ul>
              <li>Mary is a student</li>
              <li>Mary loves museums</li>
              <li>Mary is fond of events like ROM After Dark</li>
              <li>Mary likes to go to these events with her friends when she has time in her busy schedule</li>
              <li>Mary has a few sources she checks frequently for discounted tickets, but she finds this time consuming and overwhelming</li>
              <li>Mary wishes she could visit museums more often</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.asIsSection}>
        <h2>As-is Diagram</h2>
        <p>In order to provide a solution for Mary, we created an as-is diagram (as shown below) that maps out Mary's typical museum visit and the events leading up to it. This helped us get an understanding of what Mary is doing, thinking and feeling during each step of the process. Based on our primary research data, I broke this process down into four steps.</p>
        <img src={AsIsDiagram} alt="As-is diagram" />
      </section>
    </>
  );
}

export default MuseumDiscounts;