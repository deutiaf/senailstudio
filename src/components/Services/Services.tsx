"use client"
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import img1 from '@/../public/images/nail-eed.jpg'
import img2 from '@/../public/images/nail-iznodo.jpg'
import img3 from '@/../public/images/nail-edfd.jpg'
import img4 from '@/../public/images/nail-ojncovz.jpg'
import { ChevronRight, MoveRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

function Services() {
    const t = useTranslations('Services');
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

    const services = [
        {
            id: "classic-manicure",
            service: t('classicManicure'),
            description: t('classicManicureDescription')
        },
        {
            id: "gel-manicure",
            service: t('gelManicure'),
            description: t('gelManicureDescription')
        },
        {
            id: "acrylic-nail-extensions",
            service: t('acrylicNailExtensions'),
            description: t('acrylicNailExtensionsDescription')
        },
        {
            id: "spa-pedicure",
            service: t('spaPedicure'),
            description: t('spaPedicureDescription')
        },
        {
            id: "nail-art-designs",
            service: t('nailArtDesigns'),
            description: t('nailArtDesignsDescription')
        },
    ];

    const images = [
        {
            src: img4,
            position: "shadow-black shadow-2xl overflow-hidden aspect-3-4 shrink-0 w-5/12 md:w-4/12 lg:w-4/12 absolute inset-0 m-auto bottom-80 md:bottom-96 lg:bottom-80 right-96 bg-violet-400 rounded-2xl",
            zIndex: 40
        },
        {
            src: img2,
            position: "shadow-black shadow-2xl overflow-hidden aspect-3-4 shrink-0 w-6/12 md:w-5/12 lg:w-3/11 absolute inset-0 m-auto bg-green-300 left-44 md:left-96 lg:left-80 bottom-60 rounded-2xl",
            zIndex: 30
        },
        {
            src: img3,
            position: "shadow-black shadow-2xl overflow-hidden aspect-3-4 shrink-0 w-6/12 md:w-6/12 lg:w-3/12 absolute inset-0 top-80 md:top-96 lg:top-80 right-80 md:right-96 lg:right-80 m-auto rounded-2xl",
            zIndex: 20
        },
        {
            src: img1,
            position: "aspect-3-4 shrink-0 w-8/12 md:w-7/12 lg:w-5/12 absolute inset-0 m-auto bg-blue-200 rounded-2xl overflow-hidden shadow-black shadow-2xl",
            zIndex: 10
        }
    ];

    useEffect(() => {
        const currentSectionRef = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, []);

    const handleImageClick = (index: number) => {
        setActiveImageIndex(index === activeImageIndex ? null : index);
    };



    return (
        <section ref={sectionRef} className='pt-0 relative bg-white lg:mb-0 overflow-hidden w-screen max-w-[1700px] mx-auto'>
            <h1 className='tracking-[0.4rem] md:tracking-[0.7rem] lg:tracking-[0.9rem] font-medium w-fit text-left px-3 lg:px-10 text-2xl lg:text-3xl text-nail-special2 lg:pt-16'>
                {t('title')}
            </h1>
            <div className='flex h-full lg:pb-0 px-5 flex-col lg:flex-row'>
                {/* Services Section */}
                <div
                    className={` lg:w-3/6 relative transition-all duration-1000 ease-out ${isVisible
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-full opacity-0'
                        }`}
                >
                    <div className='h-fit font-cormorant-garamond word-spacing text-lg xl:text-xl font-medium leading-7 text-pretty text-zinc-600'>
                        <div className='w-full lg:w-10/12 font-poppins text-sm font-normal tracking-widest leading-7 mx-auto flex flex-col justify-center items-center'>
                            {services.map((item, index) => (
                                <div id={`item-${item.id}`} key={item.id} className='flex flex-col w-full shrink-0'>
                                    <label htmlFor={item.id} className='w-full overflow-hidden relative'>
                                        <input type="radio" name="advantage" id={item.id} className='peer hidden' />
                                        <h2 className='cursor-pointer space-x-4 font-medium font-cormorant-garamond text-zinc-800 pr-2 py-6 md:py-10 text-xl tracking-normal border-b-[0.50px] w-11/12 border-b-zinc-600 peer-checked:text-nail-special2 px-2 peer-checked:border-b-0'>
                                            <span className='h-full text-3xl font-mono font-thin'>{index + 1}.</span>
                                            <span className='h-full'>{item.service}</span>
                                        </h2>
                                        <ChevronRight className='peer-checked:text-nail-special2 size-6 lg:size-8 peer-checked:rotate-90 transition-transform ease-out absolute inset-y-0 right-0 mr-2 mt-10' strokeWidth={0.5} />
                                        <div className='peer-checked:h-44 md:peer-checked:h-32 peer-checked:opacity-100 h-0 opacity-0 overflow-hidden transition-all duration-500 w-11/12 origin-bottom'>
                                            <p className='px-4 border-b-[1px] border-b-zinc-300 pt-2 pb-9 mb-6 text-[15px]'>
                                                {item.description}
                                            </p>
                                        </div>
                                    </label>
                                </div>
                            ))}
                            <div className='w-full mb-10 md:w-2/5 lg:w-3/5 mx-auto mt-10 text-lg font-light hover:text-nail-special2 transition-all duration-200 tracking-[0.4rem]'>
                                <Link href={'/services'} className=' group flex items-center justify-center space-x-2 lg:space-x-4'>
                                    <div className='hidden lg:block w-2/12 border-b group-hover:scale-x-150 origin-left transition-all duration-300'></div>
                                    <span className='group-hover:translate-x-10 transition-all duration-700'>{t('seeMore')} </span>
                                    <div className='lg:hidden group-hover:scale-x-150 origin-left transition-all duration-300'><MoveRight strokeWidth={0.6} /> </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Images Section */}
                <div
                    className={`hidden lg:flex items-start justify-start origin-top scale-90 md:scale-100 lg:w-3/6 md:w-10/12 w-full mx-auto relative h-[680px] md:mb-32 -mb-14 transition-all duration-1000 ease-out ${isVisible
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-full opacity-0'
                        }`}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`
                                ${image.position}
                                transition-all duration-500 ease-in-out
                                ${activeImageIndex === index
                                    ? 'z-50 hover:scale-110'
                                    : `z-[${image.zIndex}] hover:scale-105`
                                }
                            `}
                            onClick={() => handleImageClick(index)}
                        >
                            <Image
                                alt={`Nail service image ${index + 1}`}
                                src={image.src}
                                className='object-cover h-full w-full cursor-pointer '
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;














