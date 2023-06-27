import React,{useEffect} from 'react';
import './Home.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
}, [])

  return (
    <section className='home'>
      <div className='img'>
        <img src='https://media.istockphoto.com/id/1281796609/photo/join-video-conference-call-from-home-asian-woman-writing-plan-collaboration-with-colleagues.jpg?s=612x612&w=0&k=20&c=wqwjo1OSx1b6_NNv_kM5yHGkPizec29zOA183ejWeJg=' alt='img' />
      </div>

      <div className='overlap container '>
        <div data-aos="fade-up" className='headerr'>
          <small>Keep Learning With Us</small>
          <h1>CREATIONSOUL INSTITUTE</h1>
      
          <p>Lorem30 The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: </p>
        </div>
      </div>
    </section>
  )
}

export default Home
