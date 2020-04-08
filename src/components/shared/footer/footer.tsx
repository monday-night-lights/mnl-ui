import React from 'react';
import 'materialize-css';
import { Footer } from 'react-materialize';

var copyrightText = (new Date().getFullYear());

const Home = () => (
  <>
    <Footer
      className="grey darken-4"
      copyrights= {'© ' + copyrightText + ' Monday Night Lights Hockey League'}
      links={
        <div>
          <h5 className="white-text flow-text">Social</h5>
          <ul>
            <li>
              <a className="grey-text text-lighten-3" href="https://www.facebook.com/mnlhockey/">Facebook</a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="https://twitter.com/mnl_hockey">Twitter</a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="http://instagram.com/mnl_hockey">Instagram</a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="http://youtube.mnlhl.com/">YouTube</a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="https://www.twitch.tv/mnlhl">Twitch</a>
            </li>
          </ul>
        </div>
      }
    >
      <h5 className="white-text">
        Monday Night Lights Hockey League
  </h5>
      <p className="grey-text text-lighten-4">
        Located in Hazel Park, Michigan, Monday Night Lights is the most prestigious men's hockey league in Southeastern Michigan
  </p>
    </Footer>
  </>
);

export default Home;
