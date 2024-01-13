import React from 'react'
import { KidsSection1 } from './Components/Kids.Section1'
import { HomeSection4 } from '../HomePage/Components/Home.Section4'
import { KidsSection2 } from './Components/Kids.Section2'

export const Kids = () => {
  return (
    <div className="space-y-5">
    <KidsSection1/>
    <KidsSection2/>
    <HomeSection4/>
  </div>
  )
}
