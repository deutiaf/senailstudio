import img2 from '@/../public/images/nail-iznodo.jpg'
import img3 from '@/../public/images/jenn-causing-8g9sStvDV34-unsplash.jpg'
import img4 from '@/../public/images/giorgio-trovato-gb6gtiTZKB8-unsplash.jpg'
import Image from 'next/image'
import { useTranslations } from 'next-intl';


function Thebest() {


    const t = useTranslations('Thebest');


    return (
        <div className="w-screen relative overflow-x-hidden pt-0 lg:pt-0 ">
            <h1 className="   pt-0.5 md:pt-0 text-[2.10rem] md:text-7xl  lg:text-[6rem] xl:lg:text-[9rem] font-[900] tracking-tight  origin-left font-inter text-nail-special2 relative ">{t('title')}</h1>
            <div className=" flex w-full gap-1 md:gap-2 lg:gap-4 mb-20 relative overflow-hidden ">
                <div className="w-3/6 md:w-2/6 aspect-9-16 lg:aspect-4-5 overflow-hidden relative bg-nail-special2 ">


                    <Image alt='' src={img3} className='object-cover h-full w-full ' />
                    {/* <div className='bg-nail-special2 opacity-40 absolute inset-0 mix-blend-lighten'></div> */}
                </div>
                <div className="hidden md:block w-2/6 lg:aspect-4-5 overflow-hidden relative bg-nail-special2  ">
                    <Image alt='' src={img2} className='object-cover h-full w-full mix-blend-exclusion' />
                    {/* <div className=' bg-nail-special2 mix-blend-screen opacity-40 absolute inset-0 '></div> */}
                </div>



                <div className=" w-3/6 md:w-2/6 aspect-9-16 lg:aspect-4-5 overflow-hidden relative  bg-nail-special2 rounded-tr-full z-20">
                    <Image alt='' src={img4} className='object-cover h-full w-full   ' />
                    {/* <div className='bg-nail-special2 opacity-40 absolute inset-0 mix-blend-lighten'></div> */}
                </div>

                <div className=" absolute inset-0 w-1/2 h-full -right-80 translate-y-40 mx-auto rounded-full bg-radial-[at_50%_75%] from-white via-transparent to-transparent to-60%"></div>

            </div>


            <div className="  h-96 overflow-hidden  lg:grid grid-cols-5 grid-rows-5 gap-1  w-2/6 right-0 top-0 absolute scale-75 origin-top-right rotate-6 text-nail-special2 ">
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
            <div className='  -rotate-12 md:-rotate-0 lg:block w-3/6 md:w-2/6 lg:w-2/5  right-0 lg:right-0 md:right-5 md:top-0 -top-10 absolute scale-75 h-96 origin-top-right bg-gradient-to-tr from-white via-white  to-transparent'>

            </div>
        </div>
    )
}

export default Thebest







// <div className="grid grid-cols-5 grid-rows-5 gap-1  w-full h-full text-nail-special2">
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

