import img1 from '@/../public/images/annie-spratt-MUVKrHNMvoQ-unsplash.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

function Booknow() {
    const t = useTranslations('BookNow');  // Utilisation de useTranslations pour charger les traductions

    return (
        <section className="w-screen relative font-josefin-sans px-2 py-8 md:px-5">
            <div className=' shadow-2xl shadow-black/40  bg-black/20 border border-pink-200/25 p-3 md:p-5 rounded-4xl z-20 py-12 lg:py-16  flex flex-col justify-center  w-5/6 md:w-4/5 lg:w-4/5 max-w-3xl lg:top-1/6 space-y-5 text-white lg:leading-7 ml-auto '>
                <h2 className='text-4xl md:text-5xl lg:text-7xl font-bold  leading-8 md:leading-10 lg:leading-16'>
                    {t('title')}  {/* Remplacer par la clé de traduction */}
                </h2>
                <p className='text-neutral-100 font-poppins tracking-wide word-spacing font-medium lg:font-normal md:text-lg leading-6 md:leading-7 text-[16px]'>
                    {t('description')}  {/* Remplacer par la clé de traduction */}
                </p>
                <Link href={"https://www.instagram.com/se_nailstudio"} className='w-fit border transition-colors duration-300 px-7 py-1 md:py-3 hover:bg-nail-special2/15 backdrop-blur-sm hover:text-nail-50 hover:border-nail-special2/15'>
                    {t('bookNowButton')}  {/* Remplacer par la clé de traduction */}
                </Link>
            </div>
            <div className="-z-10 absolute inset-0  w-full h-full bg-neutral-400  md:aspect-16-9 lg:aspect-2-39-1 overflow-hidden">
                <Image
                    src={img1}
                    alt={t('imageAlt')}
                    className='object-cover size-full object-bottom  '


                />
            </div>
            <div className="-z-10 absolute inset-0  w-full h-full bg-nail-special2/30 mix-blend-darken  md:aspect-16-9 lg:aspect-2-39-1 backdrop-blur-sm opacity-70" ></div>

        </section>
    )
}

export default Booknow;
