/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import pic from '../assets/pic.jpg';
import Herosh4 from './Herosh4';
import HerosTypingContainer from './HerosTypingContainer';
export default function Heros() {

    const [title, setTitle] = useState('');

    console.log('Heros')
    return (
    <section id="heros-section">
        <div>
            <img src={pic} alt="Noman's Profile Picture" />
            <h2>I am Noman Jafri.</h2>
            <HerosTypingContainer setTitle={setTitle}>
                <Herosh4 text={title}/>
            </HerosTypingContainer>
        </div>
    </section>
  );
}