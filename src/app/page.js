
import ZuuwHeader from "@/components/ZuuwHeader";
import About from "@/components/About";
import CarouselApps from "@/components/CarouselApps";
import Header from "@/components/Header";


export default function Home() {
  return (
   <div class="container">
    {/* !!FIRST PAGE!! HEADER */}
   <section class="page">
    <Header />
     <ZuuwHeader />

   </section>
            {/* !!SECOND PAGE!! ABOUT ME */}
   <section class="page" className="flex flex-col justify-center items-center">
      <About />
   </section>
{/* !!THIRD PAGE!! PROJECTS */}
   <section class="page">
    <CarouselApps />
   </section>
            {/* !!4TH PAGE!! CONTACT ME  */}
   <section class="page">

   </section>
   </div>
  );
}
