import styles from '../styles/pos.module.css'
import POS from '../assets/pos-machine.webp'
import POSNotes from '../assets/pos-machine/pos-notes.avif'
import Tommy from '../assets/pos-machine/tommy-tipper.avif'
import ProtoFlow1 from '../assets/pos-machine/proto-flow-1.avif'
import ProtoFlow2 from '../assets/pos-machine/proto-flow-2.avif'

function PosTipping() {
  return (
    <>
      <section className={styles.heroSection}>
        <div>
          <h1 className={styles.titleSpacing}>What if customizing a tip was easier?</h1>
          <p>Some modern POS machines make it hard to customize tip amounts. In this small case study, I explored an alternate design for a tipping screen, placing emphasis on customization and ease. </p>
        </div>
        <img src={POS} alt="POS Machine" className={styles.posMachine} />
      </section>

      <section>
        <h2 className={styles.titleSpacing}>First Steps</h2>
        <p className={styles.paraSpacing}>In order to get a stronger idea of popular opinions about tipping and POS machines, I gathered secondary research from various online sources. After that I conducted a 15-minute interview and created an <b>affinity diagram</b> to organize the participant's responses into four categories: <b>behaviours, feelings, suggestions and obstacles</b>.</p>
        <img src={POSNotes} alt="Affinity Diagram" className={styles.posNotes} />
        <p>Using this diagram, I created the following user <b>persona</b>.</p>
      </section>

      <section className={styles.personaSection}>
        <img src={Tommy} alt="Larry Lowtip persona" className={styles.tommyTipper} />
        <div>
          <h2 className={styles.titleSpacing}>Meet Larry</h2>
          <p><b>Larry Lowtip</b> is a young adult saving money to pay off his student loans.</p>
          <br />
          <p>He loves eating out, but he dislikes tipping culture and the social pressures that come with it. Furthermore, Larry finds tipping stressful because he's being watched and it can be confusing to add a custom tip amount. Larry is getting tired of seeing tip screens when he buys fast food and he wishes there was an easily accessible “no tip” option.</p>
        </div>
      </section>

      <section>
        <h2 className={styles.titleSpacing}>So what does Larry need?</h2>
        <p>What Larry really needs is money. Unfortunately I cannot help him with that. Instead, I simplified Larry's needs into a more realistic <b>need statement:</b> </p>
        <br />
        <p>Larry Lowtip needs a way to easily customize his tipping amount so that he has control over his tip.</p>
      </section>

      <section>
        <h2 className={styles.titleSpacing}>Prototype Task Flow</h2>
        <p className={styles.paraSpacing}>After deciding on a final idea to move ahead with, I sketched a rough prototype and then recreated it digitally using <b>Balsamiq</b>. The following storyboards consist of four frames, illustrating how the design would react to the tipping screen.</p>
        <div className={styles.protoFlowContainer}>
          <img src={ProtoFlow1} alt="Prototype Task Flow Slide 1" className={styles.protoFlow} />
          <img src={ProtoFlow2} alt="Prototype Task Flow Slide 2" className={styles.protoFlow} />
        </div>
      </section>

      <section className={styles.takeawaysSection}>
        <h2 className={styles.titleSpacing}>My Takeaways</h2>
        <p>
          During this project, I came to understand the simplicity of critiquing designs and identifying areas for enhancement, compared to the challenges of actually improving the design. Despite my initial belief that my design "solution" effectively addressed the issue, I realize there is still much room for refinement.
          This modest project helped me discover the complexities of solving user issues; there is no easy "fix" and everyone has a different opinion. While I concentrated on tip customization, a broader project could have allowed me to explore the numerous other reasons why many people dislike POS tipping screens.
        </p>
      </section>
    </>
  );
}

export default PosTipping;