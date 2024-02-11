import styles from '../styles/textile.module.css'
import Sewing from '../assets/sewing-machine.webp'
import InfoArch from '../assets/textile_page/info-arch.avif'
import TextileOne from '../assets/textile_page/textile-1.avif'
import TextileTwo from '../assets/textile_page/textile-2.avif'
import TextileThree from '../assets/textile_page/textile-3.avif'
import TextileFour from '../assets/textile_page/textile-4.avif'
import TextileFive from '../assets/textile_page/textile-5.avif'
import TextileGroup from '../assets/textile_page/textile-group.avif'

function TextileMuseum() {
  return (
    <>
      <section className={styles.heroSection}>
        <div>
          <h1 className={styles.titleSpacing}>
            <span className={styles.reImagine}>Re-imagining the </span>
            Textile Museum of Canada
          </h1>
          <p>
            During an information architecture course at UofT, my classmates and I had the opportunity to redesign the website for the <a href='https://textilemuseum.ca' target='_blank'>Textile Museum of Canada</a>.
            This was not a full UX project as the focus was on enhancing information architecture and navigation. There is an extensive amount of content on the website,
            so the main goal of this redesign was to make this content more accessible for their audience.
          </p>
        </div>
        <img src={Sewing} alt="Sewing Machine" className={styles.sewingMachine} />
      </section>

      <section>
        <h2 className={styles.titleSpacing}>Card Sorting</h2>
        <p>In order to minimize biases and effectively evaluate the website, my group and I conducted several card sorting sessions. Our goal was to improve the user experience by gathering sorting data from users. In order to do so, we first had to conduct a content inventory of ever page on the website. Then we created a “card” for each page, which gave us <b>46 cards</b>. </p>
        <br />
        <p>Using <b>Optimal</b> Workshop to run the card sorts, we sent <b>12 participants</b> a link to a page with all 46 cards. They were then told to organize these topics into categories that make sense to them. It took participants a median time of 10 minutes to complete the study and 84% of participants created at least eight categories. In short, participants were struggling to find commonalities between the cards. Using the card sorting findings, we identified common groupings and fit the 46 cards into six categories.</p>
      </section>

      <section className={styles.infoArchSection}>
        <h2 className={styles.titleSpacing}>Information Architecture</h2>
        <p className={styles.paraSpacing}>I used <b>Miro</b> to create an information architecture diagram that shows where every page exists on the website’s hierarchy and how to get there. In order to increase accessibility for users, we included a “buy tickets” action button in the header navigation and under the visit menu. Similarly, we moved the shop further up in the hierarchy to increase traffic and expose local textile artists to a wider audience.</p>
        <img src={InfoArch} alt="Information Architecture Diagram" />
      </section>

      <section className={styles.navigationSection}>
        <h2 className={styles.titleSpacing}>Navigation Design</h2>
        <p className={styles.paraSpacing}>The last part of this project was to bring the information architecture to life. The following screens were created using <b>Balsamiq</b> and they show the desktop navigation task flow for locating the “Community Quilt Drop In Sessions” page.</p>
        <div className={styles.textileImgsContainer}>
          <img src={TextileOne} alt="Textile Museum Website Navigation Part 1" className={styles.textileImgs} />
          <img src={TextileTwo} alt="Textile Museum Website Navigation Part 2" className={styles.textileImgs} />
          <img src={TextileThree} alt="Textile Museum Website Navigation Part 3" className={styles.textileImgs} />
          <img src={TextileFour} alt="Textile Museum Website Navigation Part 4" className={styles.textileImgs} />
          <img src={TextileFive} alt="Textile Museum Website Navigation Part 5" className={styles.textileImgs} />
        </div>
      </section>

      <section className={styles.finalSection}>
        <div>
          <h2 className={styles.titleSpacing}>Final Thoughts</h2>
          <p>After completing the project, my group and I had the pleasure of presenting our IA and NAV redesign for the museum director and CEO, Kirsten Kamper. She loved the presentation and our approach to the redesign. Definitely a rewarding a project!</p>
        </div>
        <img src={TextileGroup} alt="Group Project Members" className={styles.textileGroup} />
      </section>
    </>
  );
}

export default TextileMuseum;