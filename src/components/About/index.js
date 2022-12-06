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
                I am here for the challenge! I pride myself in taking on challenges, solving them, and trying to be creative in the process. 
                </p>
                <p className='about-text'>
                Soon to be (Dec. 13) graduate from the University of Texas Austin Full Stack Coding Bootcamp. Experience with React, JavaScript, HTML, CSS, MongoDB, Bootstrap and more... I am excited to start a new career as Full-Stack Web Developer.
                </p>
                <p className='about-text'>
                Prior to web development I was Director of Percussion in a large 6A high school. I was part of a team directors that collectively led our program to many great successes in the Fine Arts World. 
                </p>
                <p className='about-text'>
                My prior skills include Teaching, Music Technology (Finale, audio design), Microsoft Office, Classroom Management, Public Speaking, Public Engagement, Communication, Team Collaboration across multiple platforms.
                </p>
                <p className='about-text'>
                I have a Bachelor of Science in Music Education (EC-12) with performance emphasis.
                </p>
                <p className='about-text'>
                I also started my own business, Lavender Cove Farm. We sell locally and online to customers in the Central, TX area. We help educate the central Texas area on growing not only lavender but many different herbs. Maitaining inventory, stocking multiple outlets that we sell too, fulfilling online orders, and keeping a strong relationshp between our customers are some of my small business skills.
                </p>
              
            </div>
            <div className='about-right-page'>
                <img className='profile-pic' src={ProfilePhoto} alt="profilePic" />
                    
            </div>
        </div>
    )
}

export default About