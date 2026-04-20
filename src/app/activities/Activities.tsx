import ProgramsListSection from '@/components/Pages/Activities/ProgramList'
import Featured from '@/components/Pages/Features'
import ProgramHeader from '@/components/Pages/Hero'
import MemberBenefits from '@/components/Pages/MemberBenefits'
import React from 'react'

const Activities = () => {
  return (
   <>
         <ProgramHeader
           badgeText="2024 ACTIVITIES"
           title="Explore all programs"
           description="Explore our upcoming seasons designed to push boundaries and build champions. Professional coaching meets elite athletic development."
           backgroundImage="/path-to-your-leaf-image.jpg" // Yarpaq şəkli və ya arxa fon şəklinin ünvanı
         />
         <ProgramsListSection/>
         <Featured/>
         <MemberBenefits/>
   </>
  )
}

export default Activities