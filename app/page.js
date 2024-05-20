'use client'
import React, { useEffect, useRef } from 'react';
import EventComp from "@/components/event_comp/EventComp";
import Landing from "@/components/landing/Landing";
export default function Home() {
  const landingRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const landing = landingRef.current;
      if (window.scrollY > window.innerHeight / 2) {
        landing.style.transform = `translateY(-100%)`;
      } else {
        landing.style.transform = `translateY(0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden home_container " >
      <div className="home_section" ref={landingRef}>
        <Landing/>
      </div>
      <div className="" >
        <EventComp/>
      </div>
    </div>
  );
}
