
import ZuuwHeader from "@/components/ZuuwHeader";
import About from "@/components/About";
import CarouselApps from "@/components/CarouselApps";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
   <div className="container">
      <Image
                src="/cherry-bgg.png"
                alt="Background"
                layout="fill"
                objectFit="cover"
                style={{imageRendering: "pixelated"}}
                quality={100}
                className="mx-0 z-[-1] absolute"

              />

              <Image
                src="/trppy-bg.png"
                alt="Background"
                layout="fill"
                objectFit="cover"
                style={{imageRendering: "pixelated"}}
                quality={100}
                className="mx-0 z-[-20] absolute"

              />


    {/* !!FIRST PAGE!! HEADER */}
   <section className="page">
    {/* <Header /> */}
     <ZuuwHeader />

   </section>
            {/* !!SECOND PAGE!! ABOUT ME */}
   <section className="page">
      <About />
   </section>
{/* !!THIRD PAGE!! PROJECTS */}
   {/* <section class="page">
    <CarouselApps />
   </section> */}
            {/* !!4TH PAGE!! CONTACT ME  */}
   <section className="page">

    <ContactForm />

   </section>
   </div>
  );
}
