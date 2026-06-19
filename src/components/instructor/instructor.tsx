import React, { useState } from 'react';
import type { FC } from "react";
import inst from '../../assets/json/instructors.json';


const activeInstructors = [...inst]
    .filter(ins => ins.status === 'A')
    .sort((a, b) => a.order - b.order);


const Instructors: FC = () => (
  
  <section className="section" id="instructors">
    <div className="container">
      <div className="section-title"><h2>Our Instructors</h2></div>
      <div className="card-grid">
        {activeInstructors.map((ins) => (
          <div className="card" key={ins.id}>
            <div className="card-image-wrapper">
              <img 
                src={ins.imageUrl} 
                alt={ins.name} 
                className="card-image" 
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">{ins.name}</h2>
              <p className="card-description">{ins.position}</p>
            </div>
          </div>
          
        ))}
      </div>
     
    </div>
  </section>
);

export default Instructors;