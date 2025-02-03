import React from 'react';

const Hero = () => (
  <section className="m-auto">
    <h1 className="text-center font-semibold text-6xl text-white">
      Hi, I'm{' '}
      <span className="animated-gradient text-transparent bg-(image:--custom-gradient-rich-purple) bg-clip-text [-webkit-background-clip:text]">
        Oliver! <br />
      </span>{' '}
      and I'm a{' '}
      <span className="animated-gradient text-transparent bg-clip-text [-webkit-background-clip:text] bg-(image:--custom-gradient-rich-purple)">
        Web Developer
      </span>
    </h1>
  </section>
);

export default Hero;