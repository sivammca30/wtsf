import type { FC } from "react";
//import SectionOnePhoto from './SectionOnePhoto';
//import SectionThreePhoto from './SectionThreePhoto';
//import { ArrowLeft } from 'lucide-react';

// import LightGallery from "lightgallery/react";

// import lgZoom from "lightgallery/plugins/zoom";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgThumbnail from "lightgallery/plugins/thumbnail";
//import lgShare from "lightgallery/plugins/share";

// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-fullscreen.css";
import sectionphoto from '../assets/json/sectionphoto.json'
// import sectiononephoto from '../assets/json/sectionone.json';
// import sectiontwophoto from '../assets/json/sectiontwo.json';
// import sectionthreephoto from '../assets/json/sectionthree.json';
import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import ImageStack from './ImageStack';

import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
//import { GradingGallery } from "./Programs";

export interface ImageItem {
  id: number;
  alt: string;
  src: string;
  sectionid: number;
  order: number;
  status: string;
}

export interface Program {
  id: number;
  alt: string;
  section: string;
  ref: HTMLDivElement
}

const sectionPhotos = [1, 2, 3].reduce<Record<string, string[]>>((acc, sectionId) => {
    acc[`section_${sectionId}`] = [...sectionphoto]
        .filter(off => off.status === 'A' && off.sectionid === sectionId)
        .sort((a, b) => a.order - b.order)
        .slice(0, 3)
        .map(off => off.src); // <-- Extracts strings to match your string[] type

    return acc;
}, {});


const seconephoto = [...sectionphoto]
    .filter(off => off.status === 'A' && off.sectionid === 1)
    .sort((a, b) => a.order - b.order);

const sectwophoto = [...sectionphoto]
    .filter(off => off.status === 'A' && off.sectionid === 2)
    .sort((a, b) => a.order - b.order);


const secthreephoto = [...sectionphoto]
    .filter(off => off.status === 'A' && off.sectionid === 3)
    .sort((a, b) => a.order - b.order);

const secfourphoto = [...sectionphoto]
    .filter(off => off.status === 'A' && off.sectionid === 4)
    .sort((a, b) => a.order - b.order);






const Program: FC = () => {

    const refereeRef = useRef<HTMLDivElement>(null);
const competitionRef = useRef<HTMLDivElement>(null);
const gradingRef = useRef<HTMLDivElement>(null);


const [activeSection, setActiveSection] = useState("referee");

const handleCardClick = (
  section: string,
  ref: React.RefObject<HTMLDivElement | null>
) => {
  setActiveSection(section);
console.log(ref);
  setTimeout(() => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 0);
};


const PROGRAMS = [
  { id: 1, alt: "WTSF Referee/Judges", section: "referee", ref: refereeRef },
  { id: 2, alt: "WTSF Competitions", section: "competition", ref: competitionRef  },
  { id: 3, alt: "WTSF Grading", section: "grading", ref: gradingRef }
];

    const [open1, setOpen1] = useState(false);
    const [index1, setIndex1] = useState(0);
    const [open2, setOpen2] = useState(false);
    const [index2, setIndex2] = useState(0);
    const [open3, setOpen3] = useState(false);
    const [index3, setIndex3] = useState(0);
    const [open4, setOpen4] = useState(false);
    const [index4, setIndex4] = useState(0);
    return (
        <>
            {/* <button
      type="button"
      onClick={() => window.history.back()}
      className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors"
      aria-label="Go back to previous page"
    >
      <ArrowLeft className="w-6 h-6 text-gray-850" />Click to go back
    </button> */}
            <section className="page-header">
                <div className="page-header-content">
                    <h1>WTSF Programs</h1>
                    <p>WTSF Conducting National/State/District level Silambam competitions, training camps and workshops
                        to promotes our traditional silambam art to the younger society and the overall growth of the art.</p>
                    {/* <p>Competitions-Tournaments | Referee-Judge | Training Camps | Grading</p> */}
                    <div className="program-list">
                        <div className="program-item">🏆 Competitions & Tournaments</div>
                        <div className="program-item">⚖️ Referee & Judge</div>
                        <div className="program-item">🥢 Training Camps</div>
                        <div className="program-item">🎖️ Grading</div>
                    </div>
                </div>
            </section>

           


            <div className="grading-grid">
                {PROGRAMS.map((ev, index) => {
                     const sectionKey = `section_${index + 1}`;
                     const currentSectionImages: string[] = sectionPhotos[sectionKey] || [];
                     console.log(ev.ref);

                    return (
                        <div key={ev.id} 
                         className={`blog-card ${activeSection === ev.section ? "active-card" : ""}`} 
                        style={{ textDecoration: "none", color: "inherit", flex: 1 }}
                        
                         onClick={() => handleCardClick(ev.section, ev.ref)}>
                            <div className="blog-card-placeholder">
                                <ImageStack images={currentSectionImages} />
                                
                            </div>

                            <div className="blog-card-body">
                                <div className="grading-card-title">{ev.alt}</div>
                            </div>

                        </div>
                    );
                })}
            </div>

            

            {activeSection === "referee" && (
            <div ref={refereeRef} className="section section-dark">
                <div className="container">
                    <div className="section-placeholder">
                        <span>WTSF Referees Organizing Tournaments</span>
                        <p>
                        Our instructors have comprehensive knowledge and experience in refereeing and judging 
                        silambam competitions. They are well-versed in the official rules, regulations, scoring systems, 
                        and ethical standards of competitive events. Their expertise ensures fair, transparent, 
                        and unbiased decision-making while maintaining discipline and sportsmanship throughout the competition. 
                        In addition, they provide valuable guidance to participants on competition rules, performance standards,
                        and best practices, helping athletes prepare effectively for competitive events.
                    </p>
                    </div>
                    
                </div>
                <div className="container">

                    <div className="gallery">

                        {seconephoto.map((slide, i) => (

                            <img
                                key={i}
                                src={slide.src}
                                alt=""
                                className="gallery-image"
                                onClick={() => {
                                    setIndex1(i);
                                    setOpen1(true);
                                }}
                            />

                        ))}

                    </div>

                    <Lightbox
                        open={open1}
                        close={() => setOpen1(false)}
                        index={index1}
                        slides={seconephoto}
                        plugins={[
                            Zoom,
                            Fullscreen,
                            Counter,
                            Thumbnails
                        ]}
                    />
                    

                </div>
            </div>
            )}

            {activeSection === "promotion" && (
             <div  className="section section-dark">
                <div className="container">
                    <div className="section-placeholder">
                        <span>WTSF Referee/Judge Promotion</span>
                        <p>
                       The Referee and Judge Examination is conducted to assess the knowledge, skills, and competency of instructors in officiating competitions. 
                       The examination covers competition rules, scoring procedures, decision-making, ethics, and event management. 
                       Instructors who successfully complete the examination are certified as qualified referees and judges, enabling them to officiate competitions with fairness, accuracy, professionalism, and integrity.
                    </p>
                    </div>
                    
                </div>
                <div className="container">

                    <div className="gallery">

                        {secfourphoto.map((slide, i) => (

                            <img
                                key={i}
                                src={slide.src}
                                alt=""
                                className="gallery-image"
                                onClick={() => {
                                    setIndex4(i);
                                    setOpen4(true);
                                }}
                            />

                        ))}

                    </div>

                    <Lightbox
                        open={open4}
                        close={() => setOpen4(false)}
                        index={index4}
                        slides={secfourphoto}
                        plugins={[
                            Zoom,
                            Fullscreen,
                            Counter,
                            Thumbnails
                        ]}
                    />

                </div>
            </div>
            )}

            {activeSection === "competition" && (
            <div ref={competitionRef} className="section section-dark">
                <div className="container">
                    <div className="section-placeholder">
                        <span>WTSF Competitions</span>
                        <p>
                        Our federation regularly organizes competitions at the National/State/District levels
                        across India to promote the Silambam art.
                        These events are conducted according to standardized rules and regulations, ensuring fairness, transparency, and professionalism.
                        By organizing competitions, the federation provides athletes with opportunities to demonstrate their skills, 
                        gain competitive experience, achieve recognition, and advance to higher levels of participation while fostering discipline, sportsmanship, and excellence.
                    </p>
                    </div>
                    
                </div>
                <div className="container">

                    <div className="gallery">

                        {sectwophoto.map((slide, i) => (

                            <img
                                key={i}
                                src={slide.src}
                                alt=""
                                className="gallery-image"
                                onClick={() => {
                                    setIndex2(i);
                                    setOpen2(true);
                                }}
                            />

                        ))}

                    </div>

                    <Lightbox
                        open={open2}
                        close={() => setOpen2(false)}
                        index={index2}
                        slides={sectwophoto}
                        plugins={[
                            Zoom,
                            Fullscreen,
                            Counter,
                            Thumbnails
                        ]}
                    />

                </div>
            </div>
            )}

            {activeSection === "grading" && (
            <div  ref={gradingRef}  className="section-small section-dark">
                <div className="container">
                    <div className="section-placeholder">
                        <span>WTSF Grading</span>
                        <p>
                        WTSF Silambam Grading is a structured assessment system that evaluates a students's technical skills, discipline, physical fitness, and overall proficiency in the art of Silambam. 
                        Grading examinations are conducted at regular intervals by our qualified judges based on standardized criteria. 
                        Successful students are awarded grade certificates, recognizing their progress and encouraging continuous learning, dedication, and excellence in this traditional martial art.
                    </p>
                    </div>
                    
                </div>
                <div className="container">

                    <div className="gallery">

                        {secthreephoto.map((slide, i) => (

                            <img
                                key={i}
                                src={slide.src}
                                alt=""
                                className="gallery-image"
                                onClick={() => {
                                    setIndex3(i);
                                    setOpen3(true);
                                }}
                            />

                        ))}

                    </div>

                    <Lightbox
                        open={open3}
                        close={() => setOpen3(false)}
                        index={index3}
                        slides={secthreephoto}
                        plugins={[
                            Zoom,
                            Fullscreen,
                            Counter,
                            Thumbnails
                        ]}
                    />
                    
                </div>
            </div>
            )}


        </>
    );

};


export default Program;
