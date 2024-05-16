import love from '../assets/gratipay.svg';
import copyright from '../assets/copyright-solid.svg';
export default function Footer(){
    return  <section id="footer">
    <div>
      <p>
        This is made with 
      </p>
      <p> 
      <img src={love} alt="heart Icon"/>
      </p>
      <p>
        by Noman Jafri
      </p>
      <p><img src={copyright} alt="copyright-symbol"/>2024</p>
    </div>
  </section>
}