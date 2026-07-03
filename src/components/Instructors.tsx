import type { FC } from "react";
// import React, { useState } from 'react';
// import { INSTRUCTORS } from "../data";
// import type { Instructor } from "../data";
//import inst from '../assets/json/instructors.json';
//import states from '../assets/json/state.json';
//import StateSelection from './StateSelection'
//import DistrictSelection from './DistrictSelection'
//import districts from '../assets/json/district.json';
//import DDLSelection from './DDLSelection';
import InstructorPage  from './Instructor';

const Instructors: FC = () => (
  
  <>
  
    <section className="page-header">
      <div className="page-header-content">
        {/* <p className="tagline">Our Team</p> */}
        <h1>WTSF Instructors</h1>
        <p>WTSF Affiliated/Qualified instructors carrying forward the Silambattam tradition across world.</p>
      </div>
    </section>

     <section className="section-small">
          <div className="container">
           {/* <StateSelection/> */}
           {/* <DistrictSelection/> */}
          {/* <DDLSelection/> */}
          <InstructorPage/>
         
       
          </div>
        </section>

{/*
    <section className="section">
      <div className="container">
        <div className="card-grid">
          {activeInst.map((inst) => (
            <div key={inst.id} className="card">
              <div className="card-image-wrapper">
                <img 
                src={inst.imageUrl} 
                alt={inst.name} 
                className="card-image" 
              />
              </div>
              <div className="card-body">
                <div className="card-title">{inst.name}</div>
                
                <div className="card-text">{inst.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
     </section> */}
  </>
);

export default Instructors;
