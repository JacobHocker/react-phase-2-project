import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';

function ContactMe() {
    return(
        <section className='contact-me'>
            <img src='./images/contact-me-1.png' alt='contact me' className='contact-image' />
            <h2>If you would like to reach me or have any questions</h2>
            <h2>Click the icons below!</h2>
            <div className='icons'>
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.42)" borderWidth="5" borderStyle="double" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(220,207,22,1)" iconSize="7" roundness="0%" url="https://linkedin.com/in/jacob-hocker-23a064220" size="100" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.42)" borderWidth="5" borderStyle="double" icon="medium" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(220,207,22,1)" iconSize="7" roundness="0%" url="https://jacobhocker.medium.com" size="100" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.42)" borderWidth="5" borderStyle="double" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(220,207,22,1)" iconSize="7" roundness="0%" url="https://github.com/JacobHocker" size="100" />
            </div>
        </section>
    )
}

export default ContactMe;