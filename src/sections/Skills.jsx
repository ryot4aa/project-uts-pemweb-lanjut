import Title from '../components/Title';
import {skills } from '../utils/constant';


const Skills = () => {
  return (
    <section id="skills" className='pt-32'>
        <div className='container'>
            <Title title="Skills" highlight="Saya" subtitle="Berikut adalah skills yang saya kuasai" />
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-8'>
                {skills.map(skill => (
                    <div key={skill.id} className='flex items-center gap-2 flex-col'>
                        <img className='size-12 hover:-translate-y-2 transition-transform duration-500 ease-in-out md:size-16' src={skill.icon} alt={skill.name} />
                        <span className='font-bold'>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills