import ActivitySection from "@/components/Pages/Activity";
import ActivityGallery from "@/components/Pages/ActivityGallery";
import Featured from "@/components/Pages/Features";
import MemberBenefits from "@/components/Pages/MemberBenefits";
import ProductSection from "@/components/Pages/Product";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <ActivityGallery/>
 <ActivitySection/>
 <Featured/>
 <ProductSection/>
 <MemberBenefits/>
        
        </>
  );
}
