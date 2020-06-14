import React from 'react'

import Social from './Social';
import About from '../Images/aboutpicture.png';
import Instagram from './Instagram';
import Subscribe from './Subscribe';
import Shop from './Shop';

import '../Styles/sidebar.scss';


class Sidebar extends React.Component{
  render(){
    return(
      <aside className = "sidebar">
        <div className = "widget">
          <div className = "about-me-widget">
            <div className ="about-img">
              <img className = "imag" src = {About}  />
            </div>

            <div className = "about-caption">
              <h4> Hi, I'm Katie</h4>
              <p>
                Sed adminim veniam, quiste nostrud
                exer rcitat stion ullamco laboris ext
                nisiuta utalquip quip ext orci phasellus
                stio egest stas tellus rutrum sed uq labore.
              </p>
              <div className = "abt-soc-icon">
                <Social />
              </div>
            </div>
          </div>
        </div>

        <Instagram/>

        <Subscribe />

        <Shop/>


      </aside>
    );
  }

}
export default Sidebar;
