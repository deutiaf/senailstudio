"use client"

import { useTranslations } from 'next-intl';
import img4 from '@/../public/images/giorgio-trovato-gb6gtiTZKB8-unsplash.jpg'
import insta from '@/../public/images/instapic 2.jpg'
import shop from '@/../public/images/ezgi-deliklitas-FEIK7lPmKqw-unsplash.jpg'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from '@/i18n/routing';

function Page() {
    const t = useTranslations('AboutUs'); // Utilisation des traductions

    // Create refs for each section we want to animate
    const heroRef = useRef(null);
    const ourStoryTitleRef = useRef(null);
    const storyContentRef = useRef(null);
    const storyImageRef = useRef(null);
    const studioSectionRef = useRef(null);
    const studioContentRef = useRef(null);
    const studioImageRef = useRef(null);
    const contactTitleRef = useRef(null);
    const contactFormRef = useRef(null);
    const contactInfoRef = useRef(null);

    useEffect(() => {
        // Configure Intersection Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add class that triggers animation
                    entry.target.classList.add('fade-in-view');
                    // Stop observing after animation has been triggered
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Start observing all section refs
        const elements = [
            heroRef.current,
            ourStoryTitleRef.current,
            storyContentRef.current,
            storyImageRef.current,
            studioSectionRef.current,
            studioContentRef.current,
            studioImageRef.current,
            contactTitleRef.current,
            contactFormRef.current,
            contactInfoRef.current
        ];

        elements.forEach(element => {
            if (element) observer.observe(element);
        });

        // Cleanup function
        return () => {
            elements.forEach(element => {
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    return (
        <section className='w-screen mb-32'>
            {/* Hero Section */}
            <div
                ref={heroRef}
                className='shadow-2xl bg-nail-special2  mt-7 px-5 w-11/12 rounded-4xl md:rounded-4xl mx-auto aspect-4-3 md:aspect-16-9 lg:aspect-21-7 overflow-hidden relative flex items-center justify-center opacity-0 translate-y-8 transition-all duration-700'
            >
                <Image src={img4} alt='' className='mix-blend-exclusion object-cover absolute size-full inset-0 ' />
                <div className='absolute size-full inset-0'></div>
                <div className='text-white relative font-poppins word-spacing-big flex-col justify-between items-center w-full md:w-7/12 mr-auto text-left pl-2 md:pl-6'>
                    <h1 className='mb-3 text-3xl leading-7 lg:leading-20 md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.3rem] font-medium'>{t('aboutUs.title')}</h1>
                    <p className='font-poppins text-[14px] md:text-sm xl:text-lg leading-4 lg:leading-6 font-normal'>
                        {t('aboutUs.description.textPart1')} <br />{t('aboutUs.description.textPart2')}
                    </p>
                </div>
            </div>

            {/* Our Story Title */}
            <h1
                ref={ourStoryTitleRef}
                className='w-fit mx-auto my-10 md:my-20 lg:my-32 text-3xl md:text-5xl tracking-[0.5rem] md:tracking-[1rem] font-normal opacity-0 translate-y-8 transition-all duration-700'
            >
                {t('ourStory.title')}
            </h1>

            <div className='w-full'>
                <div className='flex flex-col-reverse justify-center items-center lg:flex-row w-full xl:w-10/12 mx-auto my-5 px-6 md:px-14 xl:space-x-24 lg:space-x-14'>
                    {/* Story Image */}
                    <div
                        ref={storyImageRef}
                        className='w-5/6 rounded-4xl shadow-2xl lg:w-1/2 overflow-hidden relative aspect-4-5 opacity-0 translate-y-8 transition-all duration-700 delay-300'
                    >
                        <Image src={insta} alt='' className='object-cover size-full inset-0 absolute' />
                    </div>

                    {/* Story Content */}
                    <div
                        ref={storyContentRef}
                        className='lg:w-1/2 relative mb-8 lg:mb-0 lg:aspect-4-5 space-y-4 lg:space-y-8 opacity-0 translate-y-8 transition-all duration-700'
                    >
                        <h2 className='font-poppins font-light text-2xl md:text-4xl tracking-[0.50rem] md:tracking-[0.70rem]'>{t('whoIAm')}</h2>
                        <p className='font-poppins text-neutral-600 leading-7 text-[15px] word-spacing-big tracking-wide'>
                            {t('ourStory.whoAmI.textPart1')}
                            <br /> <br />
                            {t('ourStory.whoAmI.textPart2')}
                            <br />
                            {t('ourStory.whoAmI.textPart3')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Studio Section */}
            <div
                ref={studioSectionRef}
                className='w-full mt-10 md:mt-36 bg-zinc-100 opacity-0 translate-y-8 transition-all duration-700'
            >
                <div className='flex flex-col lg:flex-row w-full xl:w-10/12 mx-auto my-5 py-20 px-6 md:px-14 xl:space-x-24 lg:space-x-14'>
                    {/* Studio Content */}
                    <div
                        ref={studioContentRef}
                        className='lg:w-1/2 relative mb-8 lg:mb-0 lg:aspect-4-5 space-y-4 lg:space-y-8 opacity-0 translate-y-8 transition-all duration-700'
                    >
                        <h2 className='font-poppins font-normal text-xl md:text-4xl tracking-[0.20rem] md:tracking-[0.70rem]  leading-8 lg:leading-12'>{t('discoverBeauty')}</h2>
                        <p className='font-poppins text-neutral-600 leading-7 text-[15px] word-spacing-big tracking-wide'>
                            {t('studioDescription.textPart1')}
                            <br /> <br />
                            {t('studioDescription.textPart2')}
                            <br /> <br />
                            {t('studioDescription.textPart3')}
                            <Link href={"https://www.instagram.com/se_nailstudio"} className='text-nail-special2'> {t('bookNow')}</Link> <br />
                            <Link href={"/services"} className='text-nail-special2'> {t('exploreServices')}</Link>
                        </p>
                    </div>

                    {/* Studio Image */}
                    <div
                        ref={studioImageRef}
                        className='mx-auto rounded-t-full w-5/6 shadow-2xl lg:w-1/2 overflow-hidden relative aspect-4-5 opacity-0 translate-y-8 transition-all duration-700 delay-300'
                    >
                        <Image src={shop} alt='' className='object-cover size-full inset-0 absolute' />
                    </div>
                </div>
            </div>

            {/* Contact Title */}
            <h1
                ref={contactTitleRef}
                className='w-fit mx-auto my-14 md:my-20 xl:my-32 text-2xl md:text-5xl tracking-[0.70rem] md:tracking-[1rem] font-normal opacity-0 translate-y-8 transition-all duration-700'
            >
                {t('contactUs')}
            </h1>

            <div className='w-full'>
                <div className='flex flex-col md:flex-row w-full xl:w-10/12 mx-auto my-5 px-8 xl:px-14 xl:py-10'>
                    {/* Contact Form */}
                    <div
                        ref={contactFormRef}
                        className='w-full md:w-1/2 relative space-y-3 md:space-y-8 opacity-0 translate-y-8 transition-all duration-700'
                    >
                        <h2 className='font-poppins font-light text-2xl md:text-3xl lg:text-4xl tracking-[0.40rem] lg:tracking-[0.70rem] leading-12'>{t('writeToUs')}</h2>
                        <form action="" method="post" className='space-y-3 md:space-y-8'>
                            <input type="text" name="" id="" placeholder='name' className='border w-full p-5' />
                            <input type="email" name="" id="" placeholder='mail' className='border w-full p-5' />
                            <textarea name="" id="" className='border w-full h-full p-5' placeholder='your message...' rows={5}></textarea>
                            <button type="submit" className='duration-300 group border px-5 py-2 cursor-pointer hover:text-white transition-all relative overflow-hidden'>
                                <div className="absolute group-hover:translate-y-0 transition-all duration-300 inset-0 size-full bg-nail-special2 pointer-events-none translate-y-full"></div>
                                <div className='relative'>send</div>
                            </button>
                        </form>
                    </div>

                    <div className='hidden md:block border-[0.5px] border-neutral-400 mx-8 xl:mx-16 h-96 my-auto'></div>

                    {/* Contact Info */}
                    <div
                        ref={contactInfoRef}
                        className='mt-10 md:mt-0 w-full md:w-1/2 relative space-y-3 md:space-y-8 opacity-0 translate-y-8 transition-all duration-700 delay-300'
                    >
                        <h2 className='font-poppins font-light text-2xl md:text-3xl lg:text-4xl tracking-[0.40rem] lg:tracking-[0.70rem] leading-12'>{t('howToFindUs')}</h2>
                        <ul className="font-light lg:font-normal tracking-wide space-y-3 lg:space-y-6 font-josefin-sans text-lg lg:text-sm">
                            <li className="flex space-x-3 items-center cursor-pointer">
                                <Link href="tel:99928155" className="flex space-x-3 items-center">
                                    <Phone className="size-4" />
                                    <span>99 92 81 55</span>
                                </Link>
                            </li>
                            <li className="flex space-x-3 items-center">
                                <a href="mailto:eirini.stevenson9619@yahoo.com" className="flex space-x-3 items-center cursor-pointer">
                                    <Mail className="size-4" />
                                    <span>eirini.stevenson9619@yahoo.com</span>
                                </a>
                            </li>
                            <li className="flex space-x-3 hover:text-nail-special2 items-start">
                                <MapPin className="size-5" />
                                <span><Link href={"https://www.google.com/maps/place/SE+Nail+Studio/@35.1794932,33.3231211,17z/data=!3m1!4b1!4m6!3m5!1s0x14de11000dc5fc5b:0xbc6e4bcd54c46be1!8m2!3d35.1794932!4d33.3231211!16s%2Fg%2F11y8tz1pnz?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"}>Charilaou Michael 1a, Agios Dometios 2365</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CSS for animations */}
            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .fade-in-view {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    )
}

export default Page;