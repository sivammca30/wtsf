import type { FC } from "react";
import { UPCOMINGEVENTS } from "../data";
import { MOMENTS } from "../data";
import type { EventItem } from "../data";

const Events: FC = () => (
  <>
    <section className="page-header">
      <div className="page-header-content">
        {/* <p className="tagline">Calendar</p> */}
        <h1>Upcoming Events</h1>
        <p>Tournaments, Training camps, Grading and Workshops happening across the federation.</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="event-grid">
          {UPCOMINGEVENTS.map((ev: EventItem) => {
            // const formatted: string = new Date(ev.date).toLocaleDateString("en-IN", {
            //   year: "numeric",
            //   month: "long",
            //   day: "numeric",
            // });
            return (
              <div key={ev.id} className="event-card">
                <div className="event-card-placeholder">
                  <span>WTSF - {ev.title}</span>
                </div>
                <div className="event-card-body">
                  {/* <div className="blog-card-date">{formatted}</div>
                  <span className="blog-card-cat">{ev.category}</span>
                  <div className="blog-card-title">{ev.title}</div>
                  <p className="blog-card-desc">{ev.desc}</p> */}
                   <img className="event-card-image"
                      src={ev.img}
                      alt={ev.title}
                    />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

     <section className="section section-dark">
      <div className="container">
        <div className="section-title"><h2>RECENT EVENTS</h2></div>
        <div className="blog-grid">
          {MOMENTS.map((ev: EventItem) => {
            const formatted: string = new Date(ev.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            return (
              <div key={ev.id} className="blog-card">
                <div className="event-card-placeholder">
                  <span>{ev.title}</span>
                </div>
                <div className="blog-card-body">
                   <div className="blog-card-date">{formatted}</div>
                  <span className="blog-card-cat">{ev.category}</span>
                  <div className="blog-card-title">{ev.title}</div>
                  <p className="blog-card-desc">{ev.desc}</p>
                 
                </div>
              </div>
              
            );
          })}
        </div>
       
      </div>
    </section>
  </>
);

export default Events;
