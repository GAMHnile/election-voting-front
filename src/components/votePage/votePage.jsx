import React from 'react';
import './votePage.css';

const VotePage = () => {
  return (
    <div>
      <div className="heading">
        <h1>BENSON IDAHOSA UNIVERSITY</h1>
        <h1 className="year">2020/2021</h1>
      </div>
      <form>
        <div className="position">
          <h2 className="post">President</h2>
          <div>
            <div className="name">
              <input type="radio" name="president" id="Accra" />
              <label htmlFor="Accra">Accra Jeffery</label>
            </div>
            <img
              src="https://www.realmadrid.com/img/vertical_380px/modric_380x501_20201203095835.jpg"
              alt="Zlatan"
            />
          </div>
          <div>
            <div className="name">
              <input type="radio" name="president" id="Accra" />
              <label htmlFor="Accra">Esimaje Misan</label>
            </div>
            <img
              src="https://resizing.flixster.com/rNjnlJijkuR4JKPt1eTyDUxf-lo=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/316589/316589_v9_bb.jpg"
              alt="Misan"
            />
          </div>
        </div>

        <div className="position">
          <h2 className="post">Vice-President</h2>
          <div>
            <div className="name">
              <input type="radio" name="vice-president" id="Accra" />
              <label htmlFor="Accra">Accra Jeffery</label>
            </div>
            <img
              src="https://www.realmadrid.com/img/vertical_380px/modric_380x501_20201203095835.jpg"
              alt="Zlatan"
            />
          </div>
          <div>
            <div className="name">
              <input type="radio" name="vice-president" id="Misan" />
              <label htmlFor="Misan">Esimaje Misan</label>
            </div>
            <img
              src="https://resizing.flixster.com/rNjnlJijkuR4JKPt1eTyDUxf-lo=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/316589/316589_v9_bb.jpg"
              alt="Misan"
            />
          </div>
        </div>

        <div className="position">
          <h2 className="post">Secretary</h2>
          <div>
            <div className="name">
              <input type="radio" name="secretary" id="Accra" />
              <label htmlFor="Accra">Accra Jeffery</label>
            </div>
            <img
              src="https://www.realmadrid.com/img/vertical_380px/modric_380x501_20201203095835.jpg"
              alt="Zlatan"
            />
          </div>
          <div>
            <div className="name">
              <input type="radio" name="secretary" id="Misan" />
              <label htmlFor="Misan">Esimaje Misan</label>
            </div>
            <img
              src="https://resizing.flixster.com/rNjnlJijkuR4JKPt1eTyDUxf-lo=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/316589/316589_v9_bb.jpg"
              alt="Misan"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default VotePage;
