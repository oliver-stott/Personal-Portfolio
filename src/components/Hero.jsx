import React from 'react';

const Hero = () => (
  <section className="m-auto">
    <h1 className="text-center pb-5 font-semibold text-3xl md:text-6xl text-off-white">
      Hi, I'm&nbsp;
      <span className="animated-gradient text-transparent bg-(image:--custom-gradient-rich-purple) bg-clip-text [-webkit-background-clip:text]">
        Oliver! <br />
      </span>
      A Web Developer Specializing in
      <span className="animated-gradient text-transparent bg-clip-text [-webkit-background-clip:text] bg-(image:--custom-gradient-rich-purple)">
        WordPress & E-commerce
      </span>
    </h1>

    <p className="text-center mb-8 text-md md:text-xl">I build fast, SEO-friendly websites with a focus on WordPress and e-commerce. With a background in creating data-driven, high-performance sites, I focus on delivering clean, efficient solutions that work well for users and businesses alike.</p>
  </section>
);

export default Hero;