'use client';

import "./page.scss";
import {
  Header,
  NavBar,
  Slideshow,
  About,
  Packages,
  Featured,
  SlideshowTwo,
  Contact,
  Footer
} from "@/sections";

export default function Home() {
  return (
    <div className="page">
      <NavBar />
      <Header />
      <Slideshow />
      <About />
      <Packages />
      <Featured />
      <SlideshowTwo />
      <Contact />
      <Footer />
    </div>
  );
}
