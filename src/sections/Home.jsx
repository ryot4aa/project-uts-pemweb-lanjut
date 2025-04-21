import Heroimg from '../assets/hero-image.png';

const Home = () => {
  return (
    <section id='home' >
        <div className='z-40'>
            <div className='container h-screen flex items-center justify-center text-center'>
                <div className='max-w-[800px] mx-auto'>
                    {/* img */}
                    <div className='mb-6'>
                        <img className='size-[100px] rounded-full mx-auto bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-400 object-cover' src={Heroimg} alt="" />
                    </div>

                    {/* content */}
                    <div>
                        <h1 className='mb-2 text-3xl font-extrabold capitalize leading-[1.2] md:text-5xl'>Selamat{'    '} <span className='bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-400 bg-clip-text text-transparent'>Datang</span></h1>
                    </div>
                    <p className='mb-4 md:text-lg'>Saya Rizky Dwi Akamlrio Praditha, Saya adalah seorang mahasiswa jurusan Informatika di Institut Nasional Bandung</p>
                    <a className='px-6 py-3 inline-block capitalize font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-400 text-white dark:text-black rounded-md' href="#about">Lanjutkan</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home