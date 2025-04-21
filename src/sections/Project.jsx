import Title from '../components/Title';
import {projects} from '../utils/constant';
import {Eye, Github} from 'lucide-react';

const Project = () => {
  return (
    <section id="project" className="pt-32">
        <div className="container">
            <Title title='Projek' highlight='Saya' subtitle='Berikut ini adalah beberapa projek saya'/>

            <div className='space-y-10 md:space-y-0 md:grid md:grid-cols2 md:gap-4 lg:grid-cols-3'>
                {projects.map(projek => (
                    <div key={projek.id}>
                        <img className='rounded-tr-2xl rounded-tl-2xl' src={projek.image} alt={projek.title} />
                        <div className='bg-gray-900 dark:bg-gray-400 rounded-br-2xl rounded-bl-2xl px-4 py-6'>
                            <h3 className='text-xl text-white dark:text-black font-bold mb-2'>{projek.title}</h3>
                            <p className='text-white dark:text-black line-clamp-3 mb-6'>{projek.description}</p>
                            <div className='mb-8 flex flex-wrap gap-2'>
                                {projek.stack.map(tech => (
                                    <span key={tech} className='px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-full mb-2'>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className='flex items-center gap-4'>
                                <a className='px-6 py-3 flex items-center gap-2 capitalize font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-orange-500 dark:to-yellow-400 text-white dark:text-black rounded-md' href={projek.liveUrl} target='_blank'>
                                    <Eye size={20} />
                                    <p className='font-semibold'>Live</p>
                                </a>
                                <a className='px-6 py-3 flex items-center gap-2 capitalize font-semibold bg-gray-600 dark:bg-gray-200 dark:text-black hover:bg-blue-700 transition-colors duration-300 ease-in text-white rounded-md' href={projek.liveUrl} target='_blank'>
                                    <Github size={20} />
                                    <p className='font-semibold'>Source</p>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Project
