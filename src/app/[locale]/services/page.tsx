
"use client"
import Image from 'next/image'
import img1 from '@/../public/images/nail-eed.jpg'
import img2 from '@/../public/images/nail-iznodo.jpg'
import img3 from '@/../public/images/nail-edfd.jpg'
import img4 from '@/../public/images/nail-ojncovz.jpg'
import ped1 from '@/../public/images/konstantin-shmatov-WBuwkanEPiM-unsplash.jpg'
import ped2 from '@/../public/images/konstantin-shmatov-oy8LFbcB8hQ-unsplash.jpg'
import ped3 from '@/../public/images/ped3.webp'
import ped4 from '@/../public/images/pedi.avif'
import man from '@/../public/images/anna-keibalo-LZmPAULkFUc-unsplash.jpg'
import man3 from '@/../public/images/jesse-donoghoe-2aiP_wxNrfU-unsplash.jpg'
import man2 from '@/../public/images/giorgio-trovato-gb6gtiTZKB8-unsplash.jpg'
import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'



// Define types for image IDs
type ManicureImageId = 'img1' | 'img2' | 'img3' | 'img4';
type PedicureImageId = 'ped1' | 'ped2' | 'ped3' | 'ped4';
type OtherServiceImageId = 'man' | 'man2-1' | 'man2-2' | 'man3';

function Services() {
    const t = useTranslations('ServicesPage');

    // State with proper type annotations
    const [frontImageManicure, setFrontImageManicure] = useState<ManicureImageId | null>(null);
    const [frontImagePedicure, setFrontImagePedicure] = useState<PedicureImageId | null>(null);
    const [frontImageOther, setFrontImageOther] = useState<OtherServiceImageId | null>(null);

    // Première variable: 6 services de manucure
    const manicureServices = [
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
            id: "nail-art-designs",
            service: t('nailArtDesigns'),
            description: t('nailArtDesignsDescription')
        },
        {
            id: "paraffin-wax-manicure",
            service: t('paraffinWaxManicure'),
            description: t('paraffinWaxManicureDescription')
        },
        {
            id: "shellac-manicure",
            service: t('shellacManicure'),
            description: t('shellacManicureDescription')
        }
    ];

    // Deuxième variable: 3 services de pédicure
    const pedicureServices = [
        {
            id: "spa-pedicure",
            service: t('spaPedicure'),
            description: t('spaPedicureDescription')
        },
        {
            id: "classic-pedicure",
            service: t('classicPedicure'),
            description: t('classicPedicureDescription')
        },
        {
            id: "deluxe-pedicure",
            service: t('deluxePedicure'),
            description: t('deluxePedicureDescription')
        }
    ];

    // Troisième variable: 5 services de réparation et autres
    const repairAndOtherServices = [
        {
            id: "nail-repair",
            service: t('nailRepair'),
            description: t('nailRepairDescription')
        },
        {
            id: "cuticle-care",
            service: t('cuticleCare'),
            description: t('cuticleCareDescription')
        },
        {
            id: "nail-strengthening-treatment",
            service: t('nailStrengtheningTreatment'),
            description: t('nailStrengtheningTreatmentDescription')
        },
        {
            id: "nail-removal",
            service: t('nailRemoval'),
            description: t('nailRemovalDescription')
        },
        {
            id: "foot-scrub",
            service: t('footScrub'),
            description: t('footScrubDescription')
        }
    ];

    // Function to handle image click for manicure section with type annotation
    const handleManicureImageClick = (imageId: ManicureImageId) => {
        setFrontImageManicure(imageId);
    };

    // Function to handle image click for pedicure section with type annotation
    const handlePedicureImageClick = (imageId: PedicureImageId) => {
        setFrontImagePedicure(imageId);
    };

    // Function to handle image click for other services section with type annotation
    const handleOtherImageClick = (imageId: OtherServiceImageId) => {
        setFrontImageOther(imageId);
    };


    return (
        <section className='w-screen max-w-[1700px] mx-auto pt-0 relative mb-52 lg:mb-0 overflow-x-hidden'>
            <h1 className='tracking-[0.9rem] font-medium w-fit text-left px-3 lg:px-10 text-2xl lg:text-3xl text-nail-special2 pt-16 word-spacing-big'>
                {t('title')}
            </h1>

            {/* Section Manucure */}
            <h2 className='mt-16 lg:mt-32 ml-10 tracking-[0.7rem] font-medium text-2xl font-fontdiner-swanky text-neutral-400 pl-2 w-fit'>
                {t('manicure')}
            </h2>
            <div className='flex px-5 flex-col lg:flex-row mb-40 md:mb-60 lg:mb-10'>
                <div className='lg:w-3/6 relative'>
                    <div className='h-fit font-cormorant-garamond word-spacing text-lg xl:text-xl font-medium leading-7 text-pretty text-zinc-600'>
                        <div className='w-full lg:w-10/12 font-poppins text-sm font-normal tracking-wide leading-7 mx-auto flex flex-col justify-center items-center'>
                            {manicureServices.map((item, index) => (
                                <div id={`item-${item.id}`} key={item.id} className='flex flex-col w-full shrink-0'>
                                    <label htmlFor={item.id} className='w-full overflow-hidden relative'>
                                        <input type="radio" name="advantage" id={item.id} className='peer hidden' />
                                        <h2 className='cursor-pointer space-x-4 font-medium font-cormorant-garamond text-zinc-800 pr-2 py-6 md:py-10 text-xl tracking-normal border-b-[0.50px] w-11/12 border-b-zinc-600 peer-checked:text-nail-special2 px-2 peer-checked:border-b-0'>
                                            <span className='h-full text-3xl font-mono font-thin'>{index + 1}.</span>
                                            <span className='h-full'>{item.service}</span>
                                        </h2>
                                        <ChevronRight className='peer-checked:text-nail-special2 size-6 lg:size-8 peer-checked:rotate-90 transition-transform ease-out absolute inset-y-0 right-0 mr-2 mt-10' strokeWidth={0.5} />
                                        <div className='peer-checked:h-48 peer-checked:opacity-100 h-0 opacity-0 overflow-hidden transition-all duration-500 w-11/12 origin-bottom'>
                                            <p className='px-4 border-b-[1px] border-b-zinc-300 pt-2 pb-9 mb-6 text-[15px]'>
                                                {item.description}
                                            </p>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='lg:w-3/6 mt-32 md:mt-40 lg:mt-20 md:w-10/12 w-full mx-auto relative h-96 lg:h-[450px]'>
                    <div className="aspect-3-4 shrink-0 w-2/5 absolute inset-0 m-auto bg-blue-200 rounded-2xl"></div>
                    <div
                        onClick={() => handleManicureImageClick('img4')}
                        className={`shadow-black shadow-2xl overflow-hidden aspect-3-4 shrink-0 w-5/12 md:w-4/12 lg:w-4/12 absolute inset-0 m-auto bottom-80 md:bottom-96 lg:bottom-80 right-96 bg-violet-400 rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${frontImageManicure === 'img4' ? 'z-30 scale-110' : 'z-10 hover:scale-105'}`}
                    >
                        <Image alt='' src={img4} className='object-cover h-full w-full' />
                    </div>
                    <div
                        onClick={() => handleManicureImageClick('img2')}
                        className={`shadow-black shadow-2xl overflow-hidden aspect-3-4 shrink-0 w-6/12 md:w-5/12 lg:w-3/11 absolute inset-0 m-auto bg-green-300 left-44 md:left-96 lg:left-80 bottom-60 rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${frontImageManicure === 'img2' ? 'z-30 scale-110' : 'z-10 hover:scale-105'}`}
                    >
                        <Image alt='' src={img2} className='object-cover h-full w-full' />
                    </div>
                    <div
                        onClick={() => handleManicureImageClick('img3')}
                        className={`shadow-black shadow-2xl overflow-hidden aspect-3-4 shrink-0 w-6/12 md:w-6/12 lg:w-3/12 absolute inset-0 top-80 md:top-96 lg:top-80 right-80 md:right-96 lg:right-80 m-auto rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${frontImageManicure === 'img3' ? 'z-30 scale-110' : 'z-10 hover:scale-105'}`}
                    >
                        <Image alt='' src={img3} className='object-cover h-full w-full' />
                    </div>
                    <div
                        onClick={() => handleManicureImageClick('img1')}
                        className={`aspect-3-4 shrink-0 w-8/12 md:w-7/12 lg:w-5/12 absolute inset-0 m-auto bg-blue-200 rounded-2xl overflow-hidden shadow-black shadow-2xl cursor-pointer transition-all duration-500 ease-in-out ${frontImageManicure === 'img1' ? 'z-30 scale-110' : 'z-20 hover:scale-105'}`}
                    >
                        <Image alt='' src={img1} className='object-cover h-full w-full' />
                    </div>
                </div>
            </div>

            {/* Section Pédicure */}
            <h2 className='mb-12 mr-10 tracking-[0.7rem] font-medium text-2xl font-fontdiner-swanky text-neutral-400 pl-2 w-fit ml-auto'>
                {t('pedicure')}
            </h2>
            <div className='flex px-5 flex-col lg:flex-row-reverse mb-40 md:mb-72 '>
                <div className='lg:w-3/6 relative'>
                    <div className='h-fit font-cormorant-garamond word-spacing text-lg xl:text-xl font-medium leading-7 text-pretty text-zinc-600'>
                        <div className='w-full lg:w-10/12 font-poppins text-sm font-normal tracking-wide leading-7 mx-auto flex flex-col justify-center items-center'>
                            {pedicureServices.map((item, index) => (
                                <div id={`item-${item.id}`} key={item.id} className='flex flex-col w-full shrink-0'>
                                    <label htmlFor={item.id} className='w-full overflow-hidden relative'>
                                        <input type="radio" name="advantage" id={item.id} className='peer hidden' />
                                        <h2 className='cursor-pointer space-x-4 font-medium font-cormorant-garamond text-zinc-800 pr-2 py-6 md:py-10 text-xl tracking-normal border-b-[0.50px] w-11/12 border-b-zinc-600 peer-checked:text-nail-special2 px-2 peer-checked:border-b-0'>
                                            <span className='h-full text-3xl font-mono font-thin'>{index + 1}.</span>
                                            <span className='h-full'>{item.service}</span>
                                        </h2>
                                        <ChevronRight className='peer-checked:text-nail-special2 size-6 lg:size-8 peer-checked:rotate-90 transition-transform ease-out absolute inset-y-0 right-0 mr-2 mt-10' strokeWidth={0.5} />
                                        <div className='peer-checked:h-48 peer-checked:opacity-100 h-0 opacity-0 overflow-hidden transition-all duration-500 w-11/12 origin-bottom'>
                                            <p className='px-4 border-b-[1px] border-b-zinc-300 pt-2 pb-9 mb-6 text-[15px]'>
                                                {item.description}
                                            </p>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='lg:w-3/6 mt-40 lg:mt-20 md:w-10/12 w-full mx-auto relative h-96 lg:h-[450px]'>
                    <div className="aspect-3-4 shrink-0 w-2/5 absolute inset-0 m-auto bg-blue-200 rounded-2xl"></div>
                    <div
                        onClick={() => handlePedicureImageClick('ped4')}
                        className={`shadow-black shadow-2xl overflow-hidden aspect-3-4 shrink-0 w-5/12 md:w-4/12 lg:w-4/12 absolute inset-0 m-auto bottom-80 md:bottom-96 lg:bottom-80 right-96 bg-violet-400 rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${frontImagePedicure === 'ped4' ? 'z-30 scale-110' : 'z-10 hover:scale-105'}`}
                    >
                        <Image alt='' src={ped4} className='object-cover h-full w-full' />
                    </div>
                    <div
                        onClick={() => handlePedicureImageClick('ped2')}
                        className={`shadow-black shadow-2xl overflow-hidden aspect-3-4 shrink-0 w-6/12 md:w-5/12 lg:w-3/11 absolute inset-0 m-auto bg-green-300 left-44 md:left-96 lg:left-80 bottom-60 rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${frontImagePedicure === 'ped2' ? 'z-30 scale-110' : 'z-10 hover:scale-105'}`}
                    >
                        <Image alt='' src={ped2} className='object-cover h-full w-full' />
                    </div>
                    <div
                        onClick={() => handlePedicureImageClick('ped1')}
                        className={`shadow-black shadow-2xl overflow-hidden aspect-3-4 shrink-0 w-6/12 md:w-6/12 lg:w-3/12 absolute inset-0 top-80 md:top-96 lg:top-80 right-80 md:right-96 lg:right-80 m-auto rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${frontImagePedicure === 'ped1' ? 'z-30 scale-110' : 'z-10 hover:scale-105'}`}
                    >
                        <Image alt='' src={ped1} className='object-cover h-full w-full' />
                    </div>
                    <div
                        onClick={() => handlePedicureImageClick('ped3')}
                        className={`aspect-3-4 shrink-0 w-8/12 md:w-7/12 lg:w-5/12 absolute inset-0 m-auto bg-blue-200 rounded-2xl overflow-hidden shadow-black shadow-2xl cursor-pointer transition-all duration-500 ease-in-out ${frontImagePedicure === 'ped3' ? 'z-30 scale-110' : 'z-20 hover:scale-105'}`}
                    >
                        <Image alt='' src={ped3} className='object-cover h-full w-full' />
                    </div>
                </div>
            </div>

            {/* Section Autres Services */}
            <h2 className='ml-10 tracking-[0.7rem] font-medium text-2xl font-fontdiner-swanky text-neutral-400 pl-2 w-fit'>
                {t('otherServices')}
            </h2>
            <div className='flex px-5 flex-col lg:flex-row mb-44 md:mb-96'>
                <div className='lg:w-3/6 relative lg:mb-0 mb-20'>
                    <div className='h-fit font-cormorant-garamond word-spacing text-lg xl:text-xl font-medium leading-7 text-pretty text-zinc-600'>
                        <div className='w-full lg:w-10/12 font-poppins text-sm font-normal tracking-wide leading-7 mx-auto flex flex-col justify-center items-center'>
                            {repairAndOtherServices.map((item, index) => (
                                <div id={`item-${item.id}`} key={item.id} className='flex flex-col w-full shrink-0'>
                                    <label htmlFor={item.id} className='w-full overflow-hidden relative'>
                                        <input type="radio" name="advantage" id={item.id} className='peer hidden' />
                                        <h2 className='cursor-pointer space-x-4 font-medium font-cormorant-garamond text-zinc-800 pr-2 py-6 md:py-10 text-xl tracking-normal border-b-[0.50px] w-11/12 border-b-zinc-600 peer-checked:text-nail-special2 px-2 peer-checked:border-b-0'>
                                            <span className='h-full text-3xl font-mono font-thin'>{index + 1}.</span>
                                            <span className='h-full'>{item.service}</span>
                                        </h2>
                                        <ChevronRight className='peer-checked:text-nail-special2 size-6 lg:size-8 peer-checked:rotate-90 transition-transform ease-out absolute inset-y-0 right-0 mr-2 mt-10' strokeWidth={0.5} />
                                        <div className='peer-checked:h-48 peer-checked:opacity-100 h-0 opacity-0 overflow-hidden transition-all duration-500 w-11/12 origin-bottom'>
                                            <p className='px-4 border-b-[1px] border-b-zinc-300 pt-2 pb-9 mb-6 text-[15px] '>
                                                {item.description}
                                            </p>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='lg:w-3/6 mt-20 md:mt-40 lg:mt-20 md:w-10/12 w-full mx-auto relative h-96 lg:h-[450px]'>
                    <div className="aspect-3-4 shrink-0 w-2/5 absolute inset-0 m-auto bg-blue-200 rounded-2xl"></div>
                    <div
                        onClick={() => handleOtherImageClick('man2-1')}
                        className={`shadow-black shadow-2xl overflow-hidden aspect-3-4 shrink-0 w-5/12 md:w-4/12 lg:w-4/12 absolute inset-0 m-auto bottom-80 md:bottom-96 lg:bottom-80 right-96 bg-violet-400 rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${frontImageOther === 'man2-1' ? 'z-30 scale-110' : 'z-10 hover:scale-105'}`}
                    >
                        <Image alt='' src={man2} className='object-cover h-full w-full' />
                    </div>
                    <div
                        onClick={() => handleOtherImageClick('man3')}
                        className={`shadow-black shadow-2xl overflow-hidden aspect-3-4 shrink-0 w-6/12 md:w-5/12 lg:w-3/11 absolute inset-0 m-auto bg-green-300 left-44 md:left-96 lg:left-80 bottom-60 rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${frontImageOther === 'man3' ? 'z-30 scale-110' : 'z-10 hover:scale-105'}`}
                    >
                        <Image alt='' src={man3} className='object-cover h-full w-full' />
                    </div>
                    <div
                        onClick={() => handleOtherImageClick('man2-2')}
                        className={`shadow-black shadow-2xl overflow-hidden aspect-3-4 shrink-0 w-6/12 md:w-6/12 lg:w-3/12 absolute inset-0 top-80 md:top-96 lg:top-80 right-80 md:right-96 lg:right-80 m-auto rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${frontImageOther === 'man2-2' ? 'z-30 scale-110' : 'z-10 hover:scale-105'}`}
                    >
                        <Image alt='' src={man2} className='object-cover h-full w-full' />
                    </div>
                    <div
                        onClick={() => handleOtherImageClick('man')}
                        className={`aspect-3-4 shrink-0 w-8/12 md:w-7/12 lg:w-5/12 absolute inset-0 m-auto bg-blue-200 rounded-2xl overflow-hidden shadow-black shadow-2xl cursor-pointer transition-all duration-500 ease-in-out ${frontImageOther === 'man' ? 'z-30 scale-110' : 'z-20 hover:scale-105'}`}
                    >
                        <Image alt='' src={man} className='object-cover h-full w-full' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;