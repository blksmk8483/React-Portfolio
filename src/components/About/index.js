import './index.scss';
import ProfilePhoto from '../../assets/images/profilePhoto.jpg';

const About = () => {
    
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                About Me:
                </h1>
                <p>
                stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me
                </p>
                <p>
                stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me
                </p>
                <p>
                stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me  stuff about me
                </p>
            </div>
            <div className='about-right-page'>
                <img className='profile-pic' src={ProfilePhoto} alt="profilePic" />
                    
            </div>
        </div>
    )
}

export default About