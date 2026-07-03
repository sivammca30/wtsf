import type { FC } from "react";

import { AFFILIATES } from "../data";
import type {  Affiliate } from "../data";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutubeSquare } from "react-icons/fa";


  const socials = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/share/1D2NXAP8J6/", text:"Facebook" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/wtsfsilambam/", text:"Instagram" },
    { icon: <FaYoutubeSquare />, url: "https://www.youtube.com/@worldtraditionalsilambatta4819", text:"YouTube" },
    { icon: <FaTwitter />, url: "https://twitter.com/wtsfsilambam?t=Upr6UJ9aXxtp2aIT-rINwg&s=08", text:"Twitter" },
  ];

const About: FC = () => (
  <>
    <section className="page-header">
      <div className="page-header-content">
        {/* <p className="tagline">About Us</p> */}
        <h1>About Our Federation</h1>
        <p>Learn how WTSF came to be, and what drives our mission across India.</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="prose">
          <p>
            World Traditional Silambattam Federation — WTSF was established for the overall
            promotion and development of Silambattam in all over the world. WTSF is registered
            under the Tamil Nadu Society Registration Act. The overall aim of WTSF is to
            popularise this tremendous Silambam art amongst youth and growing children of the
            world by conducting training camps, seminars, tournaments etc. at district, state,
            and national level. WTSF is spread across various states of India and more than
            2,000 students are actively learning this Silambam art.
          </p>
          <p>
            WTSF has well-qualified Instructors, Judges/Referees, and Masters. WTSF has spread
            this Silambam art in the southern parts of India. World Traditional Silambattam
            Federation's aim is to Learn, Secure, and Teach this Silambam art to all over the
            world. The Indian Government has recognised this Silambam Martial Art under the
            Khelo India Programme. Tamil Nadu State includes Silambam in the 3% sports quota
            for government jobs.
          </p>
          <p>
          WTSF is a pioneer in practising one style of Silambam across India. 
          WTSF promotes and standardizes its own curriculum (including instructor training programs like Kaaladi Kuthuvarisai) 
          to help teach and popularize the art systematically. At present, 10 states in India have affiliated with our federation 
          and are teaching this art. Karnataka, Andra Pradesh, Gujarat, Uttar Pradesh, Maharashtra, Diu and Daman, Puducherry, 
          Andaman, Telangana, Odisha
        </p>
        </div>
      </div>
    </section>

    <section className="section section-dark">
          <div className="container">
            <div className="section-title"><h2>WTSF - Affiliates - States</h2></div>
            <div className="affiliates">
              {AFFILIATES.map((a: Affiliate) => (
                <div key={a.id} className="affiliate-badge">{a.alt}</div>
              ))}
            </div>
          </div>
    </section>

    

    <section className="section ">
      
      <div className="section-title"><h2>WTSF - Social Media - Links</h2></div>

<div className="social-media-wrapper">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.url}
          className="social-media-circle"
          aria-label={item.text}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="social-media-icon">{item.icon}</span>
        </a>
      ))}
    </div>

       <div className="video-container">
      
      {/* <p>Subscribe our YouTube Channel</p> */}
      
      {/* Video Wrapper for Responsiveness */}
      <div className="video-responsive">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/DPAIatxHXvk?si=aNheT4XgBw7knOHs"
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
    </section>
  </>
);

export default About;
