import type { FC } from "react";
import { INSTRUCTORS } from "../data";
import type { Instructor } from "../data";

const Instructors: FC = () => (
  <>
    <section className="page-header">
      <div className="page-header-content">
        <p className="tagline">Our Team</p>
        <h1>Our Instructors</h1>
        <p>Certified masters carrying forward the Silambattam tradition across Tamil Nadu.</p>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="card-grid">
          {INSTRUCTORS.map((inst: Instructor) => (
            <div key={inst.id} className="card">
              <div className="card-image-placeholder">{inst.initials}</div>
              <div className="card-body">
                <div className="card-title">{inst.name}</div>
                <div className="card-subtitle">{inst.district}, {inst.state}</div>
                <div className="card-text">{inst.specialization}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Instructors;
