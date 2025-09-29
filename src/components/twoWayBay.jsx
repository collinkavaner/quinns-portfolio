import styles from '../styles/twoWayBay.module.css'
import Lightbox from '../common/lightbox';
import MiniPersona from '../assets/two-way-bay/mini-persona.avif'
import Colours from '../assets/two-way-bay/colours.avif'
import Typography from '../assets/two-way-bay/typography.avif'

import HomePage from '../assets/two-way-bay/home-page.avif'
import SwapError from '../assets/two-way-bay/swap-error.avif'
import ItemUpload from '../assets/two-way-bay/item-upload.avif'
import Swap from '../assets/two-way-bay/swap.avif'
import ThankYou from '../assets/two-way-bay/thank-you.avif'
import SwapTwo from '../assets/two-way-bay/swap-two.avif'
import Notifications from '../assets/two-way-bay/notifications.avif'
import MessageHub from '../assets/two-way-bay/message-hub.avif'
import Chat from '../assets/two-way-bay/chat.avif'
import ChatTwo from '../assets/two-way-bay/chat-two.avif'


function TwoWayBay() {
  return (
    <>
        <section className={styles.heroSection}>
                <h1 className={styles.paraSpacing}><span>2WayBay</span><span className={styles.notBold}> | App Design</span></h1>
                <p className={styles.paraSpacing}>
                    During a user interface design course at the University of Toronto,
                    I conceptualized and designed a fictional mobile app that enables
                    users to trade items without the use of money, fostering sustainable exchange and community engagement.
                </p>
                <p>Key Features:</p>
                <ul>
                    <li>Post: Users can upload photos, write descriptions, and list items they want to trade.</li>
                    <li>Browse: A clean and intuitive interface allows users to explore available items by category, location, or tags.</li>
                    <li>Chat: A built-in messaging feature lets users negotiate trades and coordinate exchanges in real-time.</li>
                </ul>
        </section>

        <section className={styles.personaSection}>
            <h2 className={styles.titleSpacing}>Mini Persona</h2>
            <p className={styles.paraSpacing}>Despite having no research to base this project on, I started the process by creating a mini persona. Meet Armin:</p>
            <Lightbox 
                src={MiniPersona}
                alt="Mini Persona for armin"
                style={styles.personaImg}
            />
        </section>

        <section className={styles.designSystem}>
            <h2 className={styles.titleSpacing}>Design System</h2>
            <p className={styles.paraSpacing}>
                My next step was to create a design system within Figma. I started by creating a
                colour palette and typography style table (show below). After that I found some
                icons online and began creating components and component sets for the eventual design.
            </p>
            <div className={styles.designImgsContainer}>
                <Lightbox 
                    src={Colours}
                    alt="Colour System for 2WayBay"
                    style={styles.designImg}
                />
                <Lightbox 
                    src={Typography}
                    alt="Typography System for 2WayBay"
                    style={styles.designImg}
                />
            </div>
        </section>

        <section className={styles.storyboard}>
            <h2 className={styles.titleSpacing}>Storyboard</h2>
            <p className={styles.paraSpacing}>The following screens display Armin's journey, from opening the app to making a trade.</p>
            <div className={styles.screensContainer}>
                <div className={styles.screenCard}>
                    <Lightbox src={HomePage} alt="home page" />
                    <p>1. Armin opens 2WayBay and finds himself on the home page.</p>
                </div>
                <div className={styles.screenCard}>
                    <Lightbox src={SwapError} alt="swap error" />
                    <p>
                        2. He clicks on the swap page and an error message pops up,
                        informing him that in order to use the swap feature he needs to upload an item.
                    </p>
                </div>
                <div className={styles.screenCard}>
                    <Lightbox src={ItemUpload} alt="item upload" />
                    <p>
                        3. He clicks “upload now”, which brings him to the “Item Upload” page,
                        where he fills out information for an item he would like to swap.
                    </p>
                </div>
                <div className={styles.screenCard}>
                    <Lightbox src={Swap} alt="swap page" />
                    <p>
                        4. After successfully uploading an item, Armin then returns to the swap page
                        and finds that results have appeared. He likes the first item so he clicks “interested”.
                    </p>
                </div>
                <div className={styles.screenCard}>
                    <Lightbox src={ThankYou} alt="thank you page" />
                    <p>
                        5. A pop-up thanks him for using 2WayBay, and Armin presses “continue”.
                    </p>
                </div>
                <div className={styles.screenCard}>
                    <Lightbox src={SwapTwo} alt="second swap page" />
                    <p>
                        6. As he looks at the next item, a notification appears, so he presses the notification icon.
                    </p>
                </div>
                <div className={styles.screenCard}>
                    <Lightbox src={Notifications} alt="notifications page" />
                    <p>
                        7. Armin is brought to the notification hub, where he is informed that the owner of the item he
                        was interested in wants to trade. His name is Owen and he has already sent Armin a message.
                    </p>
                </div>
                <div className={styles.screenCard}>
                    <Lightbox src={MessageHub} alt="messaging page" />
                    <p>
                        8. After clicking “Chat Now!”, he is brought to the message hub where his conversation with Owen has appeared.
                    </p>
                </div>
                <div className={styles.screenCard}>
                    <Lightbox src={Chat} alt="chat page" />
                    <p>
                       9. Armin opens the chat and reads Owen’s message before typing out a short response.
                    </p>
                </div>
                <div className={styles.screenCard}>
                    <Lightbox src={ChatTwo} alt="second chat page" />
                    <p>
                       10. He presses send on the message, confirming a time and place to meet and swap items.
                    </p>
                </div>
            </div>
        </section>
    </>
    );
}

export default TwoWayBay;