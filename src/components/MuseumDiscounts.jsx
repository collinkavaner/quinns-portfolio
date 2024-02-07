import styles from '../styles/museum.module.css'
import { HiArrowSmDown } from "react-icons/hi";
import AbstractStatue from '../assets/abstract-statue.webp'
import PhoneMockup from '../assets/UXsprint1-phones.avif'

function MuseumDiscounts() {
  return (
    <>
      <section className={styles.heroSection}>
        <div>
          <h1>How can we help Toronto residents find discounted museum tickets?</h1>
          <p>
            For the second half of my first semester (fall 2023) at UofT, I worked with five of my peers on a summative project. Our task was simple: Improve the lives of Toronto residents. 
            With a shared interest in the entertainment and recreation sector, we narrowed our scope to museums. More specifically, the expensive prices that often drive people away from visiting. Our goal was to make it easier and faster to find discounted museum tickets, which lead us to our solution:
          </p>
        </div>
        <img src={AbstractStatue} alt="Person standing by an abstract statue" className={styles.statue}/>
      </section>

      <section className={styles.mockupSection}>
        <h3>A mobile app with an updated list of all discounts available for Toronto museums. <HiArrowSmDown /></h3>
        <img src={PhoneMockup} alt="Mobile app mockup" className={styles.phoneMockup}/>
      </section>
    </>
  );
}

export default MuseumDiscounts;