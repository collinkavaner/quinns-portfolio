import '../styles/About.css'
import Quinn from '../assets/my-face.webp'

function About() {
  return (
    <div>
      <h1><span style={{fontWeight: "400"}}>About </span>Me</h1>
      <img src={Quinn} alt="Image of Quinn" className='my-face' />
    </div>
  );
}

export default About;