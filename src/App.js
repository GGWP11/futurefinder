import React from 'react'
import './App.css'
import image1 from './assets/Ai.png';
import image2 from './assets/Businessteamai.png';

import { Header, GraphicDescription, Footer, FeatureCardLayout, LandingTitle, WorkshopCarousel, PackageCardLayout, LogoLayout, Newsletter} from './components';

const App = () => {
  return (
    <div className="App">
      <Header />
      <GraphicDescription
        imageSrc={image1}
        title="Find Your Future With FutureFinder"
        description="Explore endless possibilities and unlock your potential with FutureFinder."
        imagePosition="right"
      />
      <GraphicDescription
        imageSrc={image2}
        title="About FutureFinder"
        description="FutureFinder is a cutting-edge platform designed to help individuals discover their career paths and unlock their full potential."
        imagePosition="left"
      />
      <LandingTitle title={"What We Offered"}/>
      <FeatureCardLayout />
      <WorkshopCarousel />
      <LandingTitle title={"Choose The Right Package"}/>
      <PackageCardLayout />
      <LandingTitle title={"Our Collaborators"}/>
      <LogoLayout />
      <Newsletter />
      <Footer />
    </div>
  )
}


export default App;