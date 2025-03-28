'use client'
import React, { useState, useRef, useEffect } from 'react'
import { MoveLeft, MoveRight } from 'lucide-react'
import Link from 'next/link'
import img1 from '@/../public/images/nail-edfd.jpg'
import Image from 'next/image'

function CategoryCarroussel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  const slides = 4 // Nombre total de diapositives

  const navigateToSlide = (slideIndex: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth
      carouselRef.current.scrollTo({
        left: slideIndex * slideWidth,
        behavior: 'smooth'
      })

      // Mise à jour immédiate de l'état
      setCurrentSlide(slideIndex)
      setIsAtStart(slideIndex === 0)
      setIsAtEnd(slideIndex === slides - 1)
    }
  }

  const handleNext = () => {
    if (currentSlide < slides - 1) {
      navigateToSlide(currentSlide + 1)
    }
  }

  const handlePrev = () => {
    if (currentSlide > 0) {
      navigateToSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return

      const scrollPosition = carouselRef.current.scrollLeft
      const slideWidth = carouselRef.current.clientWidth
      const newCurrentSlide = Math.round(scrollPosition / slideWidth)

      // Mettre à jour l'état uniquement si nécessaire
      if (newCurrentSlide !== currentSlide) {
        setCurrentSlide(newCurrentSlide)
        setIsAtStart(newCurrentSlide === 0)
        setIsAtEnd(newCurrentSlide === slides - 1)
      }
    }

    const currentRef = carouselRef.current
    currentRef?.addEventListener('scroll', handleScroll)

    return () => {
      currentRef?.removeEventListener('scroll', handleScroll)
    }
  }, [currentSlide, slides])

  // Défilement automatique
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentSlide < slides - 1) {
        navigateToSlide(currentSlide + 1)
      } else {
        navigateToSlide(0) // Retour au premier slide après le dernier
      }
    }, 5000) // 5000 ms = 5 secondes

    // Nettoyer l'intervalle à la désactivation du composant
    return () => clearInterval(intervalId)
  }, [currentSlide, slides])

  return (
    <div className="bg-neutral-100 text-lg text-zinc-600 px-32 py-7  leading-6 md:leading-tight ">
      <div
        ref={carouselRef}
        className="
          flex 
          mx-auto 
          
          overflow-x-auto 
          scroll-smooth 
          snap-x 
          snap-mandatory 
            md:w-full
           
        "
      >
        {/* Slides */}
        {[1, 2, 3, 4].map((slide) => (
          <div
            key={slide}
            className="
              flex 
              shrink-0 
              w-full 
              h-full 
              snap-center
            "
          >
            <div className=" scale-y-90 flex w-full flex-col px-2  space-y-3 md:space-y-5 lg:space-y-8 justify-center items-center">
              <h1 className="font-bold text-xs md:text-sm tracking-widest text-zinc-800">
                {slide === 1 && 'GRAVURE'}
                {slide === 2 && 'BIJOUX PERMANENTS'}
                {slide === 3 && 'RESERVEZ'}
                {slide === 4 && 'GALLERY PHOTOS'}
              </h1>
              <p className="text-center">
                {slide === 1 && 'Ajoutez une touche personnelle à vos bijoux avec une gravure spéciale.'}
                {slide === 2 && 'Offrez à vos bijoux une place éternelle avec nos créations permanentes.'}
                {slide === 3 && 'Réservez votre créneau pour découvrir nos bijoux !'}
                {slide === 4 && 'Explorez notre collection de bijoux à travers des images inspirantes et trouvez la pièce parfaite pour vous ✨📸'}
              </p>
              <Link href={""} className="px-3 py-1 md:py-2 text-white bg-zinc-700 hover:bg-black">Voir plus</Link>
            </div>
            <div className="relative w-0/4 overflow-hidden">
              <Image src={img1} className="size-full object-cover" alt={`slide ${slide}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Nouvelle navigation avec une barre de progression */}
      <div className="h-1/4 px-2 flex justify-center w-full space-x-28 lg:space-x-80 py-3">
        <div className="justify-end w-20 lg:w-32 flex">
          <div className="w-full flex justify-center items-center">
            <div
              className="relative w-full h-1 bg-zinc-300 rounded-full"
              style={{ maxWidth: '200px' }} // Limite la largeur de la barre
            >
              <div
                className="absolute top-0 left-0 h-1 bg-zinc-700 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / slides) * 100}%` }} // Calcul de la largeur en fonction du slide actuel
              />
            </div>
          </div>
        </div>

        {/* Boutons de navigation */}
        <div className="flex space-x-4 items-center">
          <MoveLeft
            onClick={handlePrev}
            className={`
              size-11 
              lg:size-16 
              cursor-pointer 
              transition-opacity 
              duration-300
              ${isAtStart ? 'opacity-50' : 'opacity-100 hover:opacity-75'}
            `}
            strokeWidth={0.5}
          />
          <MoveRight
            onClick={handleNext}
            className={`
              size-11 
              lg:size-16 
              cursor-pointer 
              transition-opacity 
              duration-300
              ${isAtEnd ? 'opacity-50' : 'opacity-100 hover:opacity-75'}
            `}
            strokeWidth={0.5}
          />
        </div>
      </div>
    </div>
  )
}

export default CategoryCarroussel




// md:w-10/12
// lg:h-[400px] 
// md:h-60 