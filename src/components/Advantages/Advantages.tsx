import React from 'react'
import cert from '@/../public/images/certificate.png'
import calendar from '@/../public/images/calendar.png'
import sani from '@/../public/images/hand-sanitizer.png'
import offer from '@/../public/images/limited-offer.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

function Advantages() {
    const t = useTranslations('Advantages');  // Utilisation de useTranslations pour charger les traductions

    return (
        <section className='w-screen pb-16'>
            <h1 className='md:tracking-[0.6rem] lg:tracking-[0.9rem] font-medium text-right px-3 lg:px-10 text-2xl lg:text-3xl text-nail-special2 py-4 word-spacing-big'>
                {t('title')}  {/* Remplacer par la clé de traduction */}
            </h1>

            <div className='flex w-full'>
                <div className='mx-auto w-11/12 lg:w-full pr-2 lg:flex grid md:grid-cols-2 text-neutral-600'>
                    <div className="w-full flex z-10 lg:border-r-[0.5px] border-nail-special2 py-5">
                        <div className='w-3/12 lg:w-4/12 h-full relative p-5 bg-white'>
                            <Image alt='' src={cert} className='object-cover' />
                            <div className='bg-nail-special2 absolute inset-0 size-full mix-blend-color'></div>
                        </div>
                        <div className='w-9/12 lg:w-8/12 space-y-3'>
                            <h2 className='font-medium text-lg word-spacing-big italic text-nail-special2'>
                                {t('licencedSpecialist')}  {/* Remplacer par la clé de traduction */}
                            </h2>
                            <p className='font-josefin-sans font-normal italic word-spacing-big leading-5'>
                                {t('licencedSpecialistDescription')}  {/* Remplacer par la clé de traduction */}
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex z-10 lg:border-r-[0.5px] border-nail-special2 py-5">
                        <div className='w-3/12 lg:w-4/12 h-full relative p-5 bg-white'>
                            <Image alt='' src={calendar} className='object-cover' />
                            <div className='bg-nail-special2 absolute inset-0 size-full mix-blend-color'></div>
                        </div>
                        <div className='w-9/12 lg:w-8/12 space-y-3'>
                            <h2 className='font-medium text-lg word-spacing-big italic text-nail-special2'>
                                {t('onlineBooking')}  {/* Remplacer par la clé de traduction */}
                            </h2>
                            <p className='font-josefin-sans font-normal italic word-spacing-big leading-5'>
                                {t('onlineBookingDescription')}  {/* Remplacer par la clé de traduction */}
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex z-10 lg:border-r-[0.5px] border-nail-special2 py-5">
                        <div className='w-3/12 lg:w-4/12 h-full relative p-5 bg-white'>
                            <Image alt='' src={offer} className='object-cover' />
                            <div className='bg-nail-special2 absolute inset-0 size-full mix-blend-color'></div>
                        </div>
                        <div className='w-9/12 lg:w-8/12 space-y-3'>
                            <h2 className='font-medium text-lg word-spacing-big italic text-nail-special2'>
                                {t('specialDeals')}  {/* Remplacer par la clé de traduction */}
                            </h2>
                            <p className='font-josefin-sans font-normal italic word-spacing-big leading-5'>
                                {t('specialDealsDescription')}  {/* Remplacer par la clé de traduction */}
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex z-10 py-5">
                        <div className='w-3/12 lg:w-4/12 h-full relative p-5 bg-white'>
                            <Image alt='' src={sani} className='object-cover' />
                            <div className='bg-nail-special2 absolute inset-0 size-full mix-blend-color'></div>
                        </div>
                        <div className='w-9/12 lg:w-8/12 space-y-3'>
                            <h2 className='font-medium text-lg word-spacing-big italic text-nail-special2'>
                                {t('sanitizedSafeEnvironment')}  {/* Remplacer par la clé de traduction */}
                            </h2>
                            <p className='font-josefin-sans font-normal italic word-spacing-big leading-5'>
                                {t('sanitizedSafeEnvironmentDescription')}  {/* Remplacer par la clé de traduction */}
                            </p>
                        </div>
                    </div>
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