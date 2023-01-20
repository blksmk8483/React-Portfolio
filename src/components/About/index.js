import './index.scss';
import ProfilePhoto from '../../assets/images/profilePhoto.jpg';

const About = () => {
    
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                About Me:
                </h1>
                <p className='about-text'>
                I am ready to begin my journey as a professional Full Stack Web Developer! I pride myself in taking on challenges, solving them, and being creative in the process.
                </p>
                <p className='about-text'>
                I recently graduated from the University of Texas Austin Full Stack Coding Bootcamp. I have experience with React, JavaScript, HTML, CSS, MongoDB, Bootstrap and more.
                </p>
                <p className='about-text'>
                Prior to web development, I was Director of Percussion in a large 6A high school. I was part of a team of directors that collectively led our student musicians to many great successes in the Fine Arts World. 
                </p>
                <p className='about-text'>
                My prior skills include teaching, music technology (Finale, audio design), Microsoft Office, classroom management, public speaking, public engagement, communication, and team collaboration across multiple platforms.
                </p>
                <p className='about-text'>
                I have a Bachelor of Science in Music Education (EC-12) with performance emphasis.
                </p>
                <p className='about-text'>
                I also started my own business, Lavender Cove Farm. We sell locally and online to customers. We help educate the Central Texas area on growing, not only lavender, but also a variety of different herbs. Maintaining inventory, stocking multiple outlets that we sell to, fulfilling online orders, and keeping a strong relationship with our customers are some of my small business skills.
                </p>
              
            </div>
            <div className='about-right-page'>
                <img className='profile-pic' src={ProfilePhoto} alt="profilePic" />
                    
            </div>
        </div>
    )
}

export default About