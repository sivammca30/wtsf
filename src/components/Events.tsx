import type { FC } from "react";
import { EVENTS } from "../data";
import type { EventItem } from "../data";

const Events: FC = () => (
  <>
    <section className="page-header">
      <div className="page-header-content">
        {/* <p className="tagline">Calendar</p> */}
        <h1>Upcoming Events</h1>
        <p>Tournaments, camps, and workshops happening across the federation.</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="blog-grid">
          {EVENTS.map((ev: EventItem) => {
            const formatted: string = new Date(ev.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            return (
              <div key={ev.id} className="blog-card">
                <div className="blog-card-placeholder">
                  <span>WTSF</span>
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
