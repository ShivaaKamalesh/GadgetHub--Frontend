import React from "react";
import Layout from "../components/Layout";

import '../styles/About.css';

const About = () => {
  return (
    <Layout>
      <div className="about-container">

        <h2 className="about-title">About GadgetHub</h2>

        <div className="about-head">
          <p>
            GadgetHub is a simple and modern online store built to help users
            explore and shop the latest electronic gadgets with ease. From
            smartphones and laptops to everyday accessories, our goal is to
            provide a smooth browsing experience and a hassle-free
            shopping flow.
          </p>
        </div>

        <div className="about-list">
          <h3>At GadgetHub, we focus on:</h3>

          <ul>
            <li>Easy navigation</li>
            <li>Clean and minimal design</li>
            <li>Reliable product data</li>
            <li>Simple and secure ordering</li>
          </ul>

          <p>
            Whether you are browsing for tech inspiration
            or managing inventory behind the scenes,
            GadgetHub makes the process seamless and enjoyable.
          </p>
        </div>

        

        <div className="about-contact">
          <h3>Contact</h3>
          <p>Have questions or suggestions?</p>
          <p>
            <strong>Email:</strong> support@gadgethub.com
          </p>
        </div>

      </div>
    </Layout>
  );
};

export default About;
