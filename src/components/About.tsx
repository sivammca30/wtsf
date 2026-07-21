import type { FC } from "react";
import { Link } from "react-router-dom";

import { AFFILIATES, AFFILIATION_RULES, PROGRAMS } from "../data";
import type { Affiliate, Program } from "../data";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutubeSquare } from "react-icons/fa";

import LineSidebar from './LineSidebar';
import ElectricBorder from './ElectricBorder'
import Carousel from './Carousel'
import useWindowWidth from './useWindowWidth';
import StarBorder from "./StarBorder";
import LogoLoop from './LogoLoop';
import plogo from '../assets/json/programlogo.json';
import grading from '../assets/json/grading.json'


const activeLogo = [...plogo]
    .filter(off => off.status === 'A')
    .sort((a, b) => a.order - b.order);

    
const activeGrade = [...grading]
    .filter(off => off.status === 'A')
    .sort((a, b) => a.order - b.order);


const DEFAULT_ITEMS: string[] = AFFILIATION_RULES.map(rule => rule.alt);

const socials = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/share/1D2NXAP8J6/", text: "Facebook" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/wtsfsilambam/", text: "Instagram" },
  { icon: <FaYoutubeSquare />, url: "https://www.youtube.com/@worldtraditionalsilambatta4819", text: "YouTube" },
  { icon: <FaTwitter />, url: "https://twitter.com/wtsfsilambam?t=Upr6UJ9aXxtp2aIT-rINwg&s=08", text: "Twitter" },
];


const About: FC = () => {
  
  const width: number = useWindowWidth();

  return (
    <>
    <div className="desktop-only-div ">
<div  style={{display: "flex", justifyContent: "center", marginTop: 10}}>
  <Carousel 
    baseWidth={width - 50}
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={false}
    loop={true}
    round={false}
  />
</div>
</div>
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
        <div className="section-title">
          <h2>WTSF - PROGRAMS</h2>
         
        </div>


        <div className="affiliates">
          {PROGRAMS.map((a: Program) => (
              <StarBorder
              key={a.id} 
                as="button"
                className="custom-class"
                color="magenta"
                speed="5s"
              >
               <div   >{a.alt}</div> 
              </StarBorder>
          ))}
        </div>

       

        <div className="logoloop-display">
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={activeLogo}
        speed={100}
        direction="left"
        logoHeight={100}
        gap={100}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      
      {/* Vertical loop with deceleration on hover */}
      {/* <LogoLoop
        logos={activeLogo}/> */}  

         
    </div>
<div className="text-center mt-2">
          <Link to="/program" className="btn">Explore More ...</Link>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-title"><h2>WTSF GRADING SYSTEM</h2></div>

      <div className="grading-grid">
          {activeGrade.map((ev) => {
            // const formatted: string = new Date(ev.date).toLocaleDateString("en-IN", {
            //   year: "numeric",
            //   month: "long",
            //   day: "numeric",
            // });
            return (
              <Link key={ev.id} to="/events" className="blog-card" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="blog-card-placeholder">
                    <img className="blog-card-image"
                      src={ev.img}
                      alt={ev.name}
                    />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-date"></div>
                  {/* <span className="blog-card-cat">{ev.category}</span>
                  <p className="blog-card-desc">{ev.desc}</p> */}
                  <div className="grading-card-title">{ev.name}</div>
                  <p className="grading-card-sub-desc">{ev.subdesc}</p> 
                  <p className="grading-card-desc">{ev.desc}</p> 
                  
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>

    <section className="section section-dark">
      <div className="container">
        <div className="section-title"><h2>WTSF - Affiliates - States</h2></div>


        <div className="affiliates">
          {AFFILIATES.map((a: Affiliate) => (
            <ElectricBorder
              key={a.id} 
              color="#7df9ff"
              speed={1}
              chaos={0.12}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div className="affiliate-badge">{a.alt}</div>
            </ElectricBorder>


            // <div key={a.id} >
            //   <StarBorder
            //     as="button"
            //     className="custom-class"
            //     color="magenta"
            //     speed="5s"
            //   >
            //     {a.alt}
            //   </StarBorder>
            // </div>
            
          ))}
        </div>

      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-title"><h2>Join with WTSF</h2></div>
        <div className="affiliates">
          {/* Semantic ordered list */}
          {/* <ul style={{ paddingLeft: '20px' }}>
            {AFFILIATION_RULES.map((a: Affiliate_Rule) => (
              <li
                key={a.id}
                style={{
                  marginBottom: '12px',
                  paddingBottom: '8px'
                }}
              >
                <div>
                  <p>
                    {a.alt}
                  </p>
                </div>
              </li>
            ))}
          </ul> */}
          <LineSidebar
            items={DEFAULT_ITEMS}
            accentColor="#A855F7"
            textColor="var(--text-primary)"
            markerColor="#6c6c6c"
            showIndex
            showMarker
            proximityRadius={100}
            maxShift={30}
            falloff="smooth"
            markerLength={60}
            markerGap={0}
            tickScale={0.5}
            scaleTick
            itemGap={20}
            fontSize={1.1}
            smoothing={100}
            defaultActive={0}
            onItemClick={(index, label) => console.log(index, label)}
          />
        </div>
      </div>
    </section>

    <section className="section  section-dark">

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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IqUWUa2LNzI?si=I8t4api3aBPpKMN_"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </section>
    </>
  );

      };


export default About;
