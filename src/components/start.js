import React, {useState, useEffect} from 'react';
import styles from '../styles/start.module.scss';

const START_SECTIONS = ['bio', 'cv', 'statement', 'music'];

const CV = require("../../public/images/JWIICV.pdf");


const Start = (props) => {
    const [activeSection, setActiveSection] = useState('bio');

    const handleClick = (event) => {
        setActiveSection(event.currentTarget.id);
    }

    const displayInfo = () => {
        if(activeSection === 'bio') {
            return <p>James Williams II (b. 1982, Upstate New York) is an interdisciplinary artist who creates paintings and sculptures centered on topics of racial constructs, systematic racism, and cultural identity in the United States. His paintings integrate non-traditional materials to create layered reliefs. His most recent solo exhibitions have been with UTA Artist Space, Atlanta, GA; LCVA Museum, Longwood, VA; Langer Over Dickie, Chicago, IL; Resort Baltimore, Baltimore, MD. His work has been included in group exhibitions at GAVLAK Gallery, Los Angeles, CA; Catalyst Contemporary and Walters Art Museum, Baltimore, MD among others. He is also a recipient of the 2022 Janet & Walter Sondheim Art Prize and the MFA Joan Mitchell Foundation award. His exhibitions have been reviewed by the Atlanta Journal Constitution, Baltimore Beat, the Baltimore Sun, BmoreArt, and many more. Williams currently resides in Baltimore, MD.</p>;
        }

        if(activeSection === 'statement') {
            return (
                <div>
                    <p>My work uses satire and visual riposte to challenge the ambiguity of the black construct as both an
                    object and personhood. What started as an inquiry about the discursive formation of the black race by my
                    then five-year-old daughter followed my investigation into the subject within American society both
                    past and present. The black construct is complicated, fluid, and unreliable with anthropomorphic
                    qualities. The “truth” of race and complexities is intrinsic to our lives yet as my daughter reminds me
                    daily it's not as complex as we make it. The use of various photographic, technology, and fiber materials
                    blended within the painting is an attempt to find a childlike understanding of the inaccuracies and
                    indecisiveness of racial classifications of Black Americans and the achromatic color they both share.
                    </p>
                </div>
            );
        }

        if(activeSection === 'cv') {
            return <iframe title="CV" frameBorder="0" src={CV} width={'100%'} height={'100%'} style={{border: 'none'}}></iframe>
        }

        return <iframe title="Playlist" frameBorder="0" width={'100%'} height={'100%'} src="https://embed.music.apple.com/us/playlist/jw-painting-playlist/pl.u-4JommxbIMzNm16"></iframe>
    }

    const displaySection = displayInfo();

    useEffect(() => {
        for(const section of START_SECTIONS) {
            if(activeSection === section) {
                if(document.getElementById(activeSection)) {
                    document.getElementById(activeSection).style.backgroundColor = "#00168f";
                    document.getElementById(activeSection).style.color = "white";
                }
            } else {
                if(document.getElementById(section)) {
                    document.getElementById(section).style.backgroundColor = "unset";
                    document.getElementById(section).style.color = "#00168f";
                }
            }
        }            
    });
    return(
        <div>
            {props.active ? 
                <div className={styles.container}>
                    <div className={styles.header}>
                        <img src="./images/avatar.png" alt="avatar"/>
                        <div>
                            <h3>James Williams II</h3>
                            <a href="mailto:contact.jameswilliamsii@gmail.com">contact.jameswilliamsii@gmail.com</a>    
                        </div>
                    </div>
                    <div className={styles.content}>
                        <section className={styles.white}>
                            {displaySection}
                        </section>
                        <section className={styles.blue}>
                            <button id="bio" onClick={handleClick}>
                                <img className={styles.cv} src="./images/cv_icon.png" alt="bio link"/>
                                <p>My Bio</p>
                            </button>
                            <button id="statement" onClick={handleClick}>
                                <img className={styles.cv} src="./images/cv_icon.png" alt="statement link"/>
                                <p>My Statement</p>
                            </button>
                            <button id="cv" onClick={handleClick}
                            >
                                <img className={styles.cv} src="./images/cv_icon.png" alt="cv link"/>
                                <p>My CV</p>
                            </button>
                            <button 
                                id="music" onClick={handleClick}
                            >
                                <img className={styles.music} src="./images/music_icon.png" alt="music link"/>
                                <p>My Music</p>
                            </button>
                        </section>
                    </div>
                    <div className={styles.footer}>
                    </div>
                </div>
                : null
            }
        </div>
    )
}

export default Start;
