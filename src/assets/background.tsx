import React from 'react';
import allstarImage    from './allstar.jpg';
import americansImage  from './americans.jpg';
import broadcastImage  from './broadcast.jpeg';
import championsImage  from './champions.jpg';
import diquesImage     from './diques.jpg';
import draftImage      from './draft.jpg';
import draftboardImage from './draftboard.jpeg';
import hatsImage       from './hats.jpg';
import joeEImage       from './joeE.jpg';
import speechImage     from './speech.jpg';
import taylorsImage    from './taylors.jpg';
import weaverImage     from './weaver.jpg';

const allstar = {
  image: allstarImage,
  offset: -15
};

const americans = {
  image: americansImage,
  offset: -3
};

const broadcast = {
  image: broadcastImage,
  offset: -9
};

const champions = {
  image: championsImage,
  offset: -6
};

const diques = {
  image: diquesImage,
  offset: -9
};

const draft = {
  image: draftImage,
  offset: -20
};

const draftboard = {
  image: draftboardImage,
  offset: -11
};

const hats = {
  image: hatsImage,
  offset: -12
};

const speech = {
  image: speechImage,
  offset: -15
};

const taylors = {
  image: taylorsImage,
  offset: -18
};

const weaver = {
  image: weaverImage,
  offset: -22
};

const Background = () => {
    const pictures = [allstar, americans, broadcast, champions, diques, draft, draftboard, hats, speech, taylors, weaver];
    const { image, offset } = pictures[Math.floor(Math.random()*pictures.length)];
    
    // Import result is the URL of your image
    return <img src={image} style={{ marginTop: `${offset}%` }} className="hero-image" />;
}
export default Background;
