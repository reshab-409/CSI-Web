import React, { useEffect } from 'react';
import './Body.scss';
import logo from './logo.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
// import gift from './gift.png';
import Slideshow from './carousel/carousel';

const Body = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div >
                <div className='main container'>
                    <div className='card grid'>
                        <div data-aos="fade-right" className='card1'>
                            <img src={logo} alt='img' className='img' />
                            <h1>
                                100% Placement Assured Career Courses in Kolkata with live project Exprience.
                            </h1>
                        </div>
                        <div data-aos="fade-left" className='card2'>
                            <p>
                                CreationSoul has the expertise in job-orientation and takes the responsibility in training the candidates to compete in the IT world.
                                Irrespective of the candidate’s background, at CreationSoul customized courses, on-job training experience, industrial training support, coaching in ongoing live project at CreationSoul development center, and well equipped labs helps to build the career and ensures that the candidate is employable. CreationSoul assures strong knowledge in latest technology and with 100% Job guarantee.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="main-1">

                    <div className="svg">
                        <svg className='curve' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dbc4f5" fill-opacity="1" d="M0,192L1440,96L1440,320L0,320Z"></path></svg>
                        <div className="body">
                            <h1>Our Specialize Courses</h1>
                            <p>CreationSoul offers curriculum in various IT fields. Choose the technology of your choice to build your career in the IT industry.</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dbc4f5" fill-opacity="1" d="M0,192L1440,96L1440,0L0,0Z"></path></svg>
                    </div>
                </div>



                <div className='main-2 container'>
                    <div className="basic-course">
                        <div data-aos="fade-right" data-aos-duration="900" className="left"></div>
                        <div data-aos="fade-right" data-aos-duration="1200" className="nathing"></div>
                        <div data-aos="fade-right" data-aos-duration="1500" className="right">
                            <h1>Our Basic Courses</h1>
                            <p>The basic technical courses offered at CreationSouls gives insight to a candidate about various compartments needed in territory of computer and networking business.
                            </p>
                        </div>
                    </div>
                </div>
                <Slideshow />
            </div>

            
            </>
    )
}

export default Body;
