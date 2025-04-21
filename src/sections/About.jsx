import AboutImg from '../assets/port1.jpeg';
import Title from '../components/Title';

const About = () => {
  return (
    <section id="about" className="pt-32">
        <div className="container">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="mb-8 md:mb-0">
                    <img className='object-cover rounded-2xl' src={AboutImg} alt="" />
                </div>
                <div>
                    <Title title="Tentang" highlight="Saya" subtitle="Deskripsi tentang saya" isCenter={false} />
                    <p className='leading-7'>Saya adalah seorang mahasiswa jurusan Informatika di universitas Itenas,yang memiliki minat besar pada keamanan jaringan dan robotics, saya memiliki keahlian dalam bahasa pemograman python,java dan c++</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About