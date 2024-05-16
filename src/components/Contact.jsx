import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import envelope from '../assets/envelope-regular.svg';

export default function Contact() {
    return <section id="contact">   
    <div>                 
        <a href="https://uk.linkedin.com/in/NomanJafri" target="_blank"><img src={linkedin} alt="LinkedIn Image Icon" /></a>
        
        <a href="https://github.com/NomanJafri" target="_blank"><img src={github} alt="Github Image Icon" /></a>
        
        <a href="mailto:jafrinoman@yahoo.co.uk" target="_blank"><img src={envelope} alt="LinkedIn Image Icon" /></a>     
    </div>
  </section>
}