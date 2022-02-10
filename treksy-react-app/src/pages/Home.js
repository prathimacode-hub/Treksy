import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';
// import img from '../assets/pictures/carousel-img/img1.jfif'

let sampleTxt = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, maxime ipsa obcaecati, illum sunt quam unde asperiores dolore inventore libero culpa quae itaque fugiat ducimus dolor nesciunt adipisci! Numquam quia ratione cumque tempore aliquid aperiam blanditiis aspernatur odit? Est possimus quos quibusdam autem voluptatibus qui, laborum harum. Perspiciatis, eligendi ducimus!";

function Home() {
  return <div>
      <Header/>

      <Section title="Booking" content={sampleTxt} imgSrc="https://images.unsplash.com/photo-1588286492514-ddb61b527086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"/>

      <Section title="Trip planner" content={sampleTxt} imgSrc="https://images.unsplash.com/photo-1506784881475-0e408bbca849?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"/>
      
      <Footer/>
  </div>;
}

export default Home;

