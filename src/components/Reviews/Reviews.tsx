'use client'
import React, { useState, useRef, useEffect, JSX } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl';



// Define the type for a slide
interface Slide {
    nom: string;
    date: string;
    note: number;
    texte: string;
    imageUrl: string | null;
}

// Define props type for the component
interface ImageCarouselProps {
    maxTextLength?: number;
}

function ImageCarousel({ maxTextLength = 150 }: ImageCarouselProps) {

    const t = useTranslations('ImageCarousel'); // Utilisation de useTranslations pour charger les traductions

    // Explicitly type refs as RefObject with HTMLDivElement
    const carouselRef = useRef<HTMLDivElement>(null)
    const leftSideRef = useRef<HTMLDivElement>(null)
    const rightSideRef = useRef<HTMLDivElement>(null)

    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [expandedTexts, setExpandedTexts] = useState<{ [key: number]: boolean }>({})
    const [isLeftVisible, setIsLeftVisible] = useState<boolean>(false)
    const [isRightVisible, setIsRightVisible] = useState<boolean>(false)

    // Tableau d'objets contenant les informations pour chaque slide
    const slidesData: Slide[] = [
        {
            nom: "Angie Juha",
            date: "2025-03-01",
            note: 5,
            texte: "I can't say enough about this nail salon! From the moment you step inside, you feel right at home. The atmosphere is cozy and beautifully designed – it's the perfect balance of chic and welcoming. The nail tech here is incredibly skilled and pays such close attention to every detail, making sure your nails look absolutely flawless.She's not only talented but also so warm and friendly, which makes the whole experience enjoyable and relaxing. If you're looking for a salon where you can feel comfortable and leave with amazing nails every time, this is the place to go.Highly recommend! ",
            imageUrl: null
        },
        {
            nom: "Angelina Petridou",
            date: "2025-03-05",
            note: 5,
            texte: "Excellent service by Irene. Highly recommended!!!",
            imageUrl: null // Pas d'URL d'image
        },
        {
            nom: "Κατερινα Χαλκιοπουλου",
            date: "2025-03-10",
            note: 5,
            texte: "Incredible place and the best service from Irini 👏🏻❤️",
            imageUrl: null
        },
        {
            nom: "maria violari",
            date: "2025-03-15",
            note: 5,
            texte: "They are really very beautiful, clean with a very friendly environment!!!🩷",
            imageUrl: null // Pas d'URL d'image
        },
        {
            nom: "Rafaella belevie",
            date: "2025-03-15",
            note: 5,
            texte: "The girl is awesome!!! Live it",
            imageUrl: null // Pas d'URL d'image
        }
    ]

    const slides = slidesData.length // Total number of slides

    // Configurer l'Intersection Observer
    useEffect(() => {
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
        }

        const observerLeft = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsLeftVisible(true)
                    observerLeft.unobserve(entry.target)
                }
            })
        }, options)

        const observerRight = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsRightVisible(true)
                    observerRight.unobserve(entry.target)
                }
            })
        }, options)

        // Store current refs in local variables to ensure stable reference in cleanup
        const currentLeftRef = leftSideRef.current
        const currentRightRef = rightSideRef.current

        if (currentLeftRef) {
            observerLeft.observe(currentLeftRef)
        }

        if (currentRightRef) {
            observerRight.observe(currentRightRef)
        }

        return () => {
            if (currentLeftRef) observerLeft.unobserve(currentLeftRef)
            if (currentRightRef) observerRight.unobserve(currentRightRef)
        }
    }, [])


    // Typed goToSlide function
    const goToSlide = (index: number) => {
        setCurrentSlide(index)
        if (carouselRef.current) {
            const slideWidth = carouselRef.current.clientWidth
            carouselRef.current.scrollTo({
                left: index * slideWidth,
                behavior: 'smooth'
            })
        }
    }

    // Typed toggleTextExpand function
    const toggleTextExpand = (index: number) => {
        setExpandedTexts(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    // Typed truncateText function
    const truncateText = (text: string, index: number) => {
        if (text.length <= maxTextLength || expandedTexts[index]) {
            return text
        }
        return (
            <>
                {text.substring(0, maxTextLength)}...{' '}
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        toggleTextExpand(index)
                    }}
                    className="text-nail-special2 font-medium hover:underline"
                >
                    Show more
                </button>
            </>
        )
    }


    // Auto-scrolling
    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextSlide = (currentSlide + 1) % slides
            goToSlide(nextSlide)
        }, 5000) // 5000 ms = 5 seconds

        // Clear interval when component is unmounted
        return () => clearInterval(intervalId)
    }, [currentSlide, slides])

    // Synchroniser le défilement manuel avec l'état
    useEffect(() => {
        const handleScroll = () => {
            if (!carouselRef.current) return

            const scrollPosition = carouselRef.current.scrollLeft
            const slideWidth = carouselRef.current.clientWidth
            const newCurrentSlide = Math.round(scrollPosition / slideWidth)

            // Update current slide based on scroll position
            if (newCurrentSlide !== currentSlide && newCurrentSlide >= 0 && newCurrentSlide < slides) {
                setCurrentSlide(newCurrentSlide)
            }
        }

        const currentRef = carouselRef.current
        currentRef?.addEventListener('scroll', handleScroll)

        return () => {
            currentRef?.removeEventListener('scroll', handleScroll)
        }
    }, [currentSlide, slides])

    // Fonction pour afficher les étoiles basées sur la note
    const renderRating = (rating: number) => {
        const stars: JSX.Element[] = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={`text-xl ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}>
                    ★
                </span>
            );
        }
        return stars;
    };

    // Typed getFirstLetter function
    const getFirstLetter = (name: string) => {
        return name.charAt(0).toUpperCase();
    };

    return (
        <section className="mb-10 md:mb-20 mt-20 overflow-hidden py-10 text-sm md:text-lg text-zinc-600 px-4 lg:px-20 xl:px-32 leading-6 md:leading-tight relative">
            <div className='justify-center mx-auto max-w-[1700px] items-center w-full flex flex-col md:flex-row'>
                <div
                    ref={leftSideRef}
                    className={`flex flex-col  items-center md:items-start justify-center md:w-1/2 md:border-r-[0.5px] md:pr-10 space-y-5 word-spacing font-poppins transition-all delay-300 duration-1000 ease-out transform ${isLeftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
                >
                    <h2 className='w-11/12   text-5xl lg:text-7xl text-zinc-800 leading-14 lg:leading-20'>
                        {t('h2')}
                    </h2>
                    <p className=' w-11/12    md:w-full pb-10 md:pb-0 leading-7  word-spacing-big tracking-wide font-medium text-[16px] md:leading-8 text-neutral-600'>
                        {t('p')}
                    </p>
                </div>

                <div
                    ref={rightSideRef}
                    className={`w-full md:w-1/2 pt-4 md:pt-0 md:px-4 transition-all delay-500 duration-1000 ease-out transform ${isRightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
                >
                    {/* Carousel container */}
                    <div
                        ref={carouselRef}
                        className=" font-josefin-sans flex overflow-x-auto snap-x snap-mandatory w-full scrollbar-hide items-center"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Slides */}
                        {slidesData.map((slide, index) => (
                            <div
                                key={index}
                                className="  z-40 flex-shrink-0 w-full h-fit snap-center px-2"
                            >
                                <div className=" shadow-black/10 shadow-lg md:shadow-none z-40 relative w-full overflow-hidden space-y-3 flex flex-col items-center justify-center">
                                    <div className='w-auto flex flex-col space-x-4 justify-center'>
                                        <div className='flex flex-col space-x-4 w-fit justify-center items-center mx-auto '>
                                            <div className=' mb-3 mx-auto aspect-1-1 overflow-hidden relative h-full size-16'>
                                                {slide.imageUrl ? (
                                                    <Image
                                                        src={slide.imageUrl}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        alt={slide.nom}
                                                        className="rounded-full aspect-1-1 object-cover absolute inset-0"
                                                    />
                                                ) : (
                                                    <div className="rounded-full aspect-1-1 object-cover absolute inset-0 bg-nail-50 flex justify-center items-center">
                                                        <span className="text-nail-special2 text-xl font-bold">{getFirstLetter(slide.nom)}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className='flex flex-col items-center'>
                                                <div>
                                                    <h3 className="text-lg md:text-xl">{slide.nom}</h3>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">{new Date(slide.date).toLocaleDateString()}</p>
                                                </div>
                                                <div className="flex scale-75 w-fit">{renderRating(slide.note)}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="  z-20 font-josefin-sans word-spacing">
                                        <p className="text-center text-lg p-7">
                                            &quot;{truncateText(slide.texte, index)}&quot;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Points indicators */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {slidesData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-nail-special2' : 'bg-gray-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>



            {/*    -------------------------------    DESIGN  ---------------------     */}

            <div className="hidden h-96 overflow-hidden lg:grid grid-cols-5 md:grid-rows-5 gap-1 -rotate-12 w-1/12 right-0 top-0 lg:bottom-0 absolute origin-top-right text-nail-special2">
                {/* Première rangée */}
                <div className="col-span-2 row-start-1 font-cherry-bomb-one text-4xl overflow-hidden">Polished Perfection</div>
                <div className="col-start-3 row-start-1 font-fontdiner-swanky text-2xl"> Nail Art Studio</div>
                <div className="col-span-2 col-start-4 row-start-1 font-fontdiner-swanky text-4xl overflow-hidden">Sparkle & Shine</div>

                {/* Deuxième rangée */}
                <div className="row-span-4 col-start-1 row-start-2 font-cherry-bomb-one flex items-center justify-center flex-col space-y-10">
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                    <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
                </div>
                <div className="col-span-2 col-start-2 row-start-2 font-bangers text-5xl overflow-hidden">Nailed By Irene</div>
                <div className="col-span-2 col-start-4 row-start-2 font-bangers text-5xl">Chic & Glossy</div>

                {/* Troisième rangée */}
                <div className="col-span-2 col-start-2 row-start-3 font-fontdiner-swanky text-5xl text-center flex items-center -rotate-12 overflow-hidden">Vivid Nails</div>
                <div className="col-span-2 col-start-4 row-start-3 row-end-5 overflow-hidden flex justify-center items-center text-4xl font-bangers tracking-wider font-bold"><div className='text-center m-auto  -rotate-90 h-fit w-full '>Hydrating Hand Treatments</div></div>

                {/* Quatrième rangée */}
                <div className="col-start-2 row-start-4 font-cherry-bomb-one text-2xl">Creative Nails</div>
                <div className="col-start-3 row-start-4 font-fontdiner-swanky rotate-6">Unique Designs. Unique Designs</div>

                {/* Cinquième rangée */}
                <div className="col-span-2 col-start-2 row-start-5 font-bangers text-2xl word-spacing tracking-wider">Flawless Finish Flawless Finish Flawless Finish</div>
                <div className="col-span-2 col-start-4 row-start-5 font-cherry-bomb-one text-4xl rotate-12">Sculpted Acrylics</div>
            </div>
            <div className='h-96 overflow-hidden bg-gradient-to-r from-white to-transparent lg:grid grid-cols-5 grid-rows-5 gap-1  -rotate-12 w-1/12 right-0 top-0 lg:bottom-0 absolute  origin-top-right  text-nail-special2 '></div>



            {/*    -------------------------------    DESIGN MOBILE ONLY  ---------------------     */}



        </section>
    )
}

export default ImageCarousel















// <div className="-z-10 md:hidden  h-96 overflow-hidden grid grid-cols-5 grid-rows-5 gap-1  -rotate-12 w-11/12 -left-[17rem] -bottom-24 scale-75  absolute   text-nail-special2 ">
// {/* Première rangée */}
// <div className="col-span-2 row-start-1 font-cherry-bomb-one text-4xl overflow-hidden">Polished Perfection</div>
// <div className="col-start-3 row-start-1 font-fontdiner-swanky text-2xl"> Nail Art Studio</div>
// <div className="col-span-2 col-start-4 row-start-1 font-fontdiner-swanky text-4xl overflow-hidden">Sparkle & Shine</div>

// {/* Deuxième rangée */}
// <div className="row-span-4 col-start-1 row-start-2 font-cherry-bomb-one flex items-center justify-center flex-col space-y-10">
//     <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
//     <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
//     <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
//     <div className=' -rotate-90  '>Luxury Hand & Foot Care </div>
// </div>
// <div className="col-span-2 col-start-2 row-start-2 font-bangers text-5xl overflow-hidden">Nailed By Irene</div>
// <div className="col-span-2 col-start-4 row-start-2 font-bangers text-5xl">Chic & Glossy</div>

// {/* Troisième rangée */}
// <div className="col-span-2 col-start-2 row-start-3 font-fontdiner-swanky text-5xl text-center flex items-center -rotate-12 overflow-hidden">Vivid Nails</div>
// <div className="col-span-2 col-start-4 row-start-3 row-end-5 overflow-hidden flex justify-center items-center text-4xl font-bangers tracking-wider font-bold"><div className='text-center m-auto  -rotate-90 h-fit w-full '>Hydrating Hand Treatments</div></div>

// {/* Quatrième rangée */}
// <div className="col-start-2 row-start-4 font-cherry-bomb-one text-2xl">Creative Nails</div>
// <div className="col-start-3 row-start-4 font-fontdiner-swanky rotate-6">Unique Designs. Unique Designs</div>

// {/* Cinquième rangée */}
// <div className="col-span-2 col-start-2 row-start-5 font-bangers text-2xl word-spacing tracking-wider">Flawless Finish Flawless Finish Flawless Finish</div>
// <div className="col-span-2 col-start-4 row-start-5 font-cherry-bomb-one text-4xl rotate-12">Sculpted Acrylics</div>
// </div>
// <div className=' -z-10 md:hidden  h-96 overflow-hidden grid grid-cols-5 grid-rows-5 gap-1   -rotate-12 w-11/12 -left-[17rem] -bottom-24 scale-75  absolute  bg-gradient-to-tl from-white via-white via-20% to-transparent'></div>