'use client';
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function CarouselApps() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla border w-[400px] h-[300px] border-amber-400 flex justify-center text-amber-600" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  )
}
