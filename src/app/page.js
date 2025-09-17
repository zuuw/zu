
import ZuuwHeader from "@/components/ZuuwHeader";
import About from "@/components/About";
import CarouselApps from "@/components/CarouselApps";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";


export default function Home() {
  return (
   <div className="container">
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
