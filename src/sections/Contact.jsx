import Title from '../components/Title';
import Form from '../components/Form';
import {Phone, Mail, Facebook, Instagram, Linkedin} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className='pt-32'>
        <div className="container">
            <Title title='contact' highlight='saya' subtitle='Kirimkan saya pesan' isCenter={false} />
            <div className='md:grid md:grid-cols-2 md:gap-16'>
                <Form />
                <div className='mb-16 mt-8'>
                    <h2 className='capitalize text-2xl font-bold mb-2 md:text-3xl lg:text-4xl'>Sosial Media</h2>
                    <div className='mb-2 flex flex-wrap items-center justify-start gap-2'>
                        <Phone className='size-5' />
                        <a className='text-lg font-semibold transition-colors duration-300 hover:text-blue-600 dark:hover:text-orange-400' href="#">085282939265</a>
                    </div>
                    <div className='mb-2 flex flex-wrap items-center justify-start gap-2'>
                        <Mail className='size-5' />
                        <a className='text-lg font-semibold transition-colors duration-300 hover:text-blue-600 dark:hover:text-orange-400' href="#">rizky.dwi@mhs.itenas.ac.id</a>
                    </div>
                    <div className='flex flex-wrap items-center justify-start gap-4'>
                        <a className='hover:text-blue-600 dark:hover:text-orange-400 hover:-translate-y-2 transition-all duration-300 ease-in-out' href="#">
                            <Facebook className='size-6' />
                        </a>
                        <a className='hover:text-blue-600 dark:hover:text-orange-400 hover:-translate-y-2 transition-all duration-300 ease-in-out' href="https://www.instagram.com/rzydwiii">
                            <Instagram className='size-6' />
                        </a>
                        <a className='hover:text-blue-600 dark:hover:text-orange-400 hover:-translate-y-2 transition-all duration-300 ease-in-out' href="#">
                            <Linkedin className='size-6' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact