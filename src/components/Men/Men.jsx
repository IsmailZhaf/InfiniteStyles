import React from 'react'
import { MenSection1 } from './Components/Men.Section1'
import { HomeSection4 } from '../HomePage/Components/Home.Section4'
import { MenSection2 } from './Components/Men.Section2'

export const Men = () => {
  return (
    <div> <div className="space-y-5">
    <MenSection1/>
    <MenSection2/>
    <HomeSection4/>
  </div></div>
  )
}
