import styles from '../styles/museum.module.css'
import ProjectSwitcher from './ProjectSwitcher';
import { useEffect } from 'react';
import { HiArrowSmDown, HiChevronRight } from "react-icons/hi";
import Lightbox from '../common/lightbox';
import AbstractStatue from '../assets/abstract-statue.webp'
import AvailibleTickets from '../assets/museum_page/View-Available-Tickets.avif'
import SavedTickets from '../assets/museum_page/View-Saved-Tickets.avif'
import Ticket2 from '../assets/museum_page/View-Ticket2.avif'
import Ticket21 from '../assets/museum_page/View-Ticket2-1.avif'
import UserProfile from '../assets/museum_page/user-profile.avif'
import Maps from '../assets/museum_page/maps.avif'
import Calendar from '../assets/museum_page/Calendar.avif'
import CalendarWithTickets from '../assets/museum_page/Calendar-with-ROM-Ticket.avif'
import UXFrame01 from '../assets/museum_page/UXsprint1-Frame_01.avif'
import UXFrame02 from '../assets/museum_page/UXsprint1-Frame_02.avif'
import UXFrame03 from '../assets/museum_page/UXsprint1-Frame_03.avif'
import UXFrame04 from '../assets/museum_page/UXsprint1-Frame_04.avif'
import UXFrame05 from '../assets/museum_page/UXsprint1-Frame_05.avif'
import UXFrame06 from '../assets/museum_page/UXsprint1-Frame_06.avif'
import UXFrame07 from '../assets/museum_page/UXsprint1-Frame_07.avif'
import Mary from '../assets/museum_page/Mary.avif'
import AsIsDiagram from '../assets/museum_page/As-is-Scenario.avif'
import BigIdeas from '../assets/museum_page/Big-Ideas-Grouping.avif'
import MidPrototype from '../assets/museum_page/Mid-fi-prototype.avif'

function MuseumDiscounts() {

  useEffect(() => {
      document.title = "Museum Discounts | UX Case Study"
  }, []);

  return (
    <>
      <section className={styles.heroSection}>
        <div>
          <h1 className={styles.titleSpacing}>How can we help Toronto residents find discounted museum tickets?</h1>
          <p>
            For the second half of my first semester (fall 2023) at UofT, I worked with five of my peers on a summative project. Our task was simple: Improve the lives of Toronto residents. 
            With a shared interest in the entertainment and recreation sector, we narrowed our scope to museums. More specifically, the expensive prices that often drive people away from visiting. Our goal was to make it easier and faster to find discounted museum tickets, which lead us to our <b>solution:</b>
          </p>
        </div>
        <img src={AbstractStatue} alt="Person standing by an abstract statue" className={styles.statue}/>
      </section>

      <section className={styles.mockupSection}>
        <h3>A mobile app with an updated list of all discounts available for Toronto museums. <HiArrowSmDown /></h3>
        <div className={styles.mockupPhoneContainer}>
          <img src={AvailibleTickets} alt="View available tickets"className={styles.mockupPhoneImg}/>
          <img src={SavedTickets} alt="View saved tickets" className={styles.mockupPhoneImg}/>
          <img src={Ticket2} alt="View ticket 2" className={styles.mockupPhoneImg}/>
          <img src={Ticket21} alt="View ticket 2-1" className={styles.mockupPhoneImg}/>
          <img src={UserProfile} alt="User profile" className={styles.mockupPhoneImg}/>
          <img src={Maps} alt="Maps" className={styles.mockupPhoneImg}/>
          <img src={Calendar} alt="Calendar" className={styles.mockupPhoneImg}/>
          <img src={CalendarWithTickets} alt="Calendar with ROM ticket" className={styles.mockupPhoneImg}/>
        </div>
        <h2 className={styles.titleSpacing}><span style={{fontWeight: 400}}>But how did we get here?</span> Let me show you.</h2>
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
        <h2 className={styles.titleSpacing}>Affinity Diagram</h2>
        <p className={styles.paraSpacing}>After all of the data was collected, I created an affinity diagram to organize interview data into natural groups. As shown in the image below, I grouped participant responses into <b>seven categories.</b> This gave my group and I a better understanding of the common themes and ideas in our research.</p>
        <div className={styles.affinityContainer}>
          <div className={styles.affinityColumn}>
            <Lightbox src={UXFrame01} alt="Affinity diagram" />
            <Lightbox src={UXFrame02} alt="Affinity diagram" />
            <Lightbox src={UXFrame03} alt="Affinity diagram" />
          </div>
          <div className={styles.affinityColumn}>
            <Lightbox src={UXFrame04} alt="Affinity diagram" />
          </div>
          <div className={styles.affinityColumn}>
            <Lightbox src={UXFrame05} alt="Affinity diagram" />
            <Lightbox src={UXFrame06} alt="Affinity diagram" />
            <Lightbox src={UXFrame07} alt="Affinity diagram" />
          </div>
        </div>
      </section>

      <section className={styles.personaSection}>
        <div className={styles.personaContainer}>
          <img src={Mary} alt="Mary the Museum Goer persona" className={styles.mary}/>
          <div>
            <h2 className={styles.titleSpacing}>User Persona</h2>
            <p className={styles.paraSpacing}>With the data sorted, we created a user persona; a fictional character to represent the participants. Say hello to <b>Mary the Museum Goer.</b></p>
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
        <h2 className={styles.titleSpacing}>As-is Diagram</h2>
        <p className={styles.paraSpacing}>In order to provide a solution for Mary, we created an as-is diagram (as shown below) that maps out Mary's typical museum visit and the events leading up to it. This helped us get an understanding of what Mary is doing, thinking and feeling during each step of the process. Based on our primary research data, I broke this process down into four steps.</p>
        <Lightbox 
          src={AsIsDiagram}
          alt="As-is diagram"
        />
      </section>

      <section className={styles.ideationSection}>
        <h2 className={styles.titleSpacing}>Ideation & Sketches</h2>
        <p className={styles.paraSpacing}>After outlining Mary's journey, we began ideating solutions to make her experience more enjoyable. During our brainstorming sessions, we focused on <b>BIG</b> ideas and discarded nothing. Everyone came up with several ideas and we did rough sketches to illustrate our visions (as shown below). Then we grouped our ideas before deciding on which ones to move forward with. </p>
        <Lightbox
          src={BigIdeas}
          alt="Big ideas grouping"
        />
      </section>

      <section className={styles.usabilitySection}>
        <h2 className={styles.titleSpacing}>Usability Testing</h2>
        <p className={styles.paraSpacing}>With all of these great ideas, it was hard to pinpoint one solution that outshined the rest. But we all agreed that a <b>one-stop spot</b> would fix the issues in Mary's journey. Once we decided on our <b>mobile app solution</b>, my teammate Rebecca drafted the rough prototype drawings. </p>
        <p>Along with my teammates Vivian and Ankush, I was responsible for testing these prototype task flows through formative usability testing. Each test lasted between 20-40 minutes and was conducted in person. Our three participants were between the ages of 22-45 and they use phone apps on a daily basis.</p>
      </section>

      <section className={styles.prototypeSection}>
        <h2 className={styles.titleSpacing}>Prototype</h2>
        <p className={styles.paraSpacing}>Once the usability testing was completed, my teammates Kyle and Karthik used the feedback to create a digital prototype on Figma. The following image shows the task flows for our mobile museum app.</p>
        <a href="https://www.figma.com/proto/yX7C1cRpOEkEvvYozmgIg1/Museum-Discounts?type=design&node-id=2314-6&t=G6f6hbnNJYq6WP2F-1&scaling=scale-down&page-id=2314%3A3&starting-point-node-id=2314%3A6&mode=design"
        className='primary-button' target='_blank'><span>View Live Prototype</span><HiChevronRight className='chev-r'/></a>
        <Lightbox
          src={MidPrototype}
          alt="Mid-fi prototype"
        />
      </section>

      <section className={styles.takeawaysSection}>
        <h2 className={styles.titleSpacing}>My Takeaways</h2>
        <p className={styles.paraSpacing}>
          Our solution still needs improvements because the focus of this project was on the process. The end goal is important, and I think we hit the nail on the head, but it was nice to work on this project step-by-step without worrying about where it was headed.
          Perhaps the biggest lesson I learned from this project is that primary <b>research is the backbone of a strong solution</b>. Considering that our time constraints restricted us from conducting more interviews, I think we did a great job with what we had.
          But if I could do this project again I would <b>collect more data</b>. With only 12 interviews and 36 survey reponses, there were some gaps in our research that could have been resolved if we had more time.
        </p>
        <p className={styles.paraSpacing}>
          It is worth mentioning that every diagram I included in this case study was created on <b>Miro</b>, which was our <b>main collaboration tool</b> throughout this project.
          I am always looking for ways to improve my communiction and collabortion skills, so I love using applications like Miro, especially since it allowed our fairly large group of six people to work on this project at the same time.
          Although this project was mostly smooth sailing, there were times where our creative differences hindered our progress and success. When some group members weren't on the same page or didn't agree with a decision, it caused feelings of frustration and confusion. The most important lesson I learned from this is to make sure <b>everyone has a voice</b>. 
        </p>
      </section>
      <ProjectSwitcher NextProject="Textile Museum of Canada" PrevProject="POS Tipping Screen" NextUrl="/textile-museum-canada" PrevUrl="/pos-tipping-screen" />
    </>
  );
}

export default MuseumDiscounts;