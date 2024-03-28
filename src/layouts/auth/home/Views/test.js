import React from 'react'
import Button from '../Components/Button';
import HeroImg from "../../../../Assets/Images/6403767.jpg"

const test = () => {
  return (
    <div className='heroSectionInnerContainer'>
        <div className='rightSideContainerAtHeroSection'>
            <div className='heroSectionContentContainer'>
            <h1> Upgrade your Tournaments</h1>
            <h3>Play in your Friends Match Without Playing Match</h3>
            <p>Upgrade the Level of Playing</p>
            <div className='herosectionBtnContainer'>
            <Button
                variant="contained"
                component="a"
                href="/login">
                Login
            </Button>
            <Button
                className='customebtn'
                href="/signup">
                Register
            </Button>
            </div>
            </div>
        </div>
        <div className="leftSideContainerAtHeroSection">
            <img src={HeroImg} />
        </div>
    </div>
  )
}

export default test