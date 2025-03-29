import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
    UserCheck,   // For licensed specialist
    Calendar,    // For online booking
    Tag,         // For special deals
    ShieldCheck  // For sanitized safe environment
} from 'lucide-react'
import img1 from '@/../public/images/annie-spratt-FqpSyjCdccw-unsplash.jpg'

function Advantages() {
    const t = useTranslations('Advantages');

    const advantagesData = [
        {
            icon: UserCheck,
            title: t('licencedSpecialist'),
            description: t('licencedSpecialistDescription')
        },
        {
            icon: Calendar,
            title: t('onlineBooking'),
            description: t('onlineBookingDescription')
        },
        {
            icon: Tag,
            title: t('specialDeals'),
            description: t('specialDealsDescription')
        },
        {
            icon: ShieldCheck,
            title: t('sanitizedSafeEnvironment'),
            description: t('sanitizedSafeEnvironmentDescription')
        }
    ];

    return (
        <section className='w-screen overflow-hidden py-20 relative my-28 px-3'>
            {/* Full section background with glass effect */}
            <div className='absolute inset-0 z-0'>
                <Image
                    alt='Background'
                    src={img1}
                    layout='fill'
                    objectFit='cover'
                    className='opacity-80'
                />
                <div className='absolute inset-0 backdrop-blur-sm bg-black/20 opacity-85 mix-blend-multiply'></div>
            </div>

            <h1 className='md:tracking-[0.6rem] lg:tracking-[0.9rem] font-medium text-right px-3 lg:px-10 text-2xl lg:text-3xl text-white py-4 word-spacing-big relative z-10'>
                {t('title')}
            </h1>

            <div className='flex w-full'>
                <div className=' max-w-[1700px] mx-auto w-11/12 lg:w-full pr-2 gap-2 lg:flex grid md:grid-cols-2 text-nail-50 relative z-10'>
                    {advantagesData.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={index}
                                className="rounded-2xl shadow-2xl shadow-black/40 w-full flex mb-4 bg-black/25"
                            >
                                <div className='z-20 flex flex-col items-center justify-center space-y-3 p-4 w-full'>
                                    {/* Icon Container */}
                                    <div className='flex items-center justify-center w-full'>
                                        <IconComponent
                                            size={48}
                                            className='text-pink-200 mb-2'
                                        />
                                    </div>

                                    <h2 className='tracking-widest font-medium text-lg word-spacing-big italic text-pink-200 text-center w-5/6'>
                                        {item.title}
                                    </h2>

                                    <p className='w-11/12 text-center text-lg mx-auto font-josefin-sans font-light tracking-wide italic word-spacing leading-6 text-white'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Advantages;





// const faqData = [
//     {
//         id: "classic-manicure",
//         service: "Classic Manicure",
//         description: "A classic manicure includes cleaning, shaping, and polishing the nails. It also involves cuticle care and hand moisturizing for a polished and healthy look."
//     },
//     {
//         id: "gel-manicure",
//         service: "Gel Manicure",
//         description: "A gel manicure involves the application of a gel polish that is cured under UV or LED light. It offers a longer-lasting finish, typically lasting 2-3 weeks without chipping."
//     },
//     {
//         id: "acrylic-nail-extensions",
//         service: "Acrylic Nail Extensions",
//         description: "Acrylic nail extensions are artificial nails applied over your natural nails to add length and shape. These extensions are customizable and come in various styles and designs."
//     },
//     {
//         id: "spa-pedicure",
//         service: "Spa Pedicure",
//         description: "A spa pedicure is a luxurious treatment that includes exfoliation, foot massage, moisturizing, and nail care, along with a relaxing soak for your feet."
//     },
//     {
//         id: "nail-art-designs",
//         service: "Nail Art Designs",
//         description: "We offer a variety of custom nail art designs, including intricate patterns, rhinestones, and hand-painted artwork for your nails."
//     },
//     {
//         id: "pedicure-for-sensitive-feet",
//         service: "Pedicure for Sensitive Feet",
//         description: "We offer special pedicure treatments for sensitive feet, using hypoallergenic and soothing products to avoid irritation and ensure comfort."
//     },
//     {
//         id: "paraffin-wax-treatment",
//         service: "Paraffin Wax Treatment",
//         description: "A paraffin wax treatment involves dipping the hands or feet into warm, soothing wax. This helps to hydrate the skin, relax the muscles, and improve circulation."
//     },
//     {
//         id: "nail-strengthening-treatments",
//         service: "Nail Strengthening Treatments",
//         description: "We offer nail strengthening treatments that include nourishing oils, hydrating creams, and vitamin-rich treatments to promote healthy nail growth and prevent breakage."
//     },
//     {
//         id: "manicure-for-damaged-nails",
//         service: "Manicure for Damaged Nails",
//         description: "We offer restorative manicures for damaged nails. These treatments include nail repair, nourishment, and protection to help restore and maintain healthy nails."
//     },
//     {
//         id: "foot-care-services",
//         service: "Foot Care Services",
//         description: "We offer various foot care services, including callus removal, foot exfoliation, and moisturizing treatments to maintain healthy and beautiful feet."
//     },
//     {
//         id: "biab-manicure",
//         service: "BIAB Manicure",
//         description: "BIAB (Builder In A Bottle) is a semi-permanent gel manicure that strengthens and protects your nails while offering a natural, long-lasting finish."
//     },
//     {
//         id: "nail-removal-services",
//         service: "Nail Removal Services",
//         description: "We offer nail polish and gel removal services. We use gentle techniques to remove the polish without damaging the natural nail."
//     }
// ];