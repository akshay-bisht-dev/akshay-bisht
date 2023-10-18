import React from 'react'
import about from '../assets/about.jpg'
import contact from '../assets/contact.jpg'
import { SiGmail } from 'react-icons/si'
import { BsPhoneVibrateFill } from 'react-icons/bs'

const Home = () => {
    return (
        <>
            <section className='bg-gray-300 h-screen flex justify-center items-center'>
                <div className="w-3/5">
                    <h4 className='uppercase text-red-500 font-bold'>Hello Developers</h4>
                    <h1 className='text-5xl'>I'm <span className='text-yellow-600 font-bold'>AKSHAY BISHT</span></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum porro pariatur sit odio ut nulla maxime molestias aliquid obcaecati. Obcaecati, deserunt fugit optio fugiat, neque laboriosam delectus exercitationem error ea recusandae aliquam, eaque quae quas repellendus voluptas quam id libero.</p>
                    <button className='bg-red-600 py-2 px-4 rounded-md mt-4 text-white hover:bg-red-500'>Resume</button>
                </div>
            </section>




            <section className='bg-white h-screen flex justify-center items-center'>
                <div className="w-3/5 flex justify-between items-center gap-1">
                    <div className='w-2/4'>
                        <h2 className='text-4xl uppercase text-red-600 font-bold'>About Me</h2>
                        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex mollitia nisi modi aspernatur natus velit aut reiciendis quasi dolore ipsam.</p>

                        <a href="/" className='bg-red-600 py-2 px-4 rounded-md mt-4 text-white hover:bg-red-500'>Know More</a>
                    </div>

                    <div className='w-2/4'>
                        <img src={about} alt="about me" />
                    </div>
                </div>
            </section>



            <section className='bg-red-500 h-screen flex justify-center flex-col items-center'>

                <div className="w-3/5 flex mb-8 justify-between items-center">
                    <h2 className='text-4xl uppercase font-bold text-white'>Projects</h2>
                    <a href="/" className='uppercase text-white'>View ALL</a>
                </div>
                <div className="w-3/5 flex justify-between items-center flex-wrap">
                    <div className="w-60 relative">
                        <img src={about} alt='projects' />

                        <div className="absolute -z-10 h-full top-0 flex flex-col justify-center px-4 bg-white">
                            <h4 className='font-bold uppercase text-red-600 text-3xl'>Title</h4>
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt.</p>
                            <p>skills: html,css</p>
                            <a href='/' className='bg-red-600 w-max py-2 px-4 rounded-md mt-4 text-white hover:bg-red-500'>Visit Now</a>
                        </div>
                    </div>

                    <div className="w-60 relative">
                        <img src={about} alt='projects' />

                        <div className="absolute -z-10 h-full top-0 flex flex-col justify-center px-4 bg-white">
                            <h4 className='font-bold uppercase text-red-600 text-3xl'>Title</h4>
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt.</p>
                            <p>skills: html,css</p>
                            <a href='/' className='bg-red-600 w-max py-2 px-4 rounded-md mt-4 text-white hover:bg-red-500'>Visit Now</a>
                        </div>
                    </div>

                    <div className="w-60 relative">
                        <img src={about} alt='projects' />

                        <div className="absolute -z-10 h-full top-0 flex flex-col justify-center px-4 bg-white">
                            <h4 className='font-bold uppercase text-red-600 text-3xl'>Title</h4>
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt.</p>
                            <p>skills: html,css</p>
                            <a href='/' className='bg-red-600 w-max py-2 px-4 rounded-md mt-4 text-white hover:bg-red-500'>Visit Now</a>
                        </div>
                    </div>
                </div>
            </section>






            <section className='bg-gray-500 h-max py-20 flex justify-center flex-col items-center'>

                <div className="w-3/5 flex mb-8 justify-between items-center">
                    <h2 className='text-4xl uppercase font-bold text-white'>Skills</h2>
                    <a href="/" className='uppercase text-white'>View ALL</a>
                </div>

                <div className="w-3/5 flex justify-between items-center flex-wrap gap-8">
                    <div className="w-60 relative">
                        <img src={about} alt='projects' />

                        <div className="absolute -z-10 h-full top-0 flex flex-col justify-center px-4 bg-white">
                            <h4 className='font-bold uppercase text-red-600 text-3xl'>Title</h4>
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt.</p>
                            <p>skills: html,css</p>
                            <a href='/' className='bg-red-600 w-max py-2 px-4 rounded-md mt-4 text-white hover:bg-red-500'>Visit Now</a>
                        </div>
                    </div>

                    <div className="w-60 relative">
                        <img src={about} alt='projects' />

                        <div className="absolute -z-10 h-full top-0 flex flex-col justify-center px-4 bg-white">
                            <h4 className='font-bold uppercase text-red-600 text-3xl'>Title</h4>
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt.</p>
                            <p>skills: html,css</p>
                            <a href='/' className='bg-red-600 w-max py-2 px-4 rounded-md mt-4 text-white hover:bg-red-500'>Visit Now</a>
                        </div>
                    </div>

                    <div className="w-60 relative">
                        <img src={about} alt='projects' />

                        <div className="absolute -z-10 h-full top-0 flex flex-col justify-center px-4 bg-white">
                            <h4 className='font-bold uppercase text-red-600 text-3xl'>Title</h4>
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt.</p>
                            <p>skills: html,css</p>
                            <a href='/' className='bg-red-600 w-max py-2 px-4 rounded-md mt-4 text-white hover:bg-red-500'>Visit Now</a>
                        </div>
                    </div>



                    <div className="w-60 relative">
                        <img src={about} alt='projects' />

                        <div className="absolute -z-10 h-full top-0 flex flex-col justify-center px-4 bg-white">
                            <h4 className='font-bold uppercase text-red-600 text-3xl'>Title</h4>
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt.</p>
                            <p>skills: html,css</p>
                            <a href='/' className='bg-red-600 w-max py-2 px-4 rounded-md mt-4 text-white hover:bg-red-500'>Visit Now</a>
                        </div>
                    </div>

                    <div className="w-60 relative">
                        <img src={about} alt='projects' />

                        <div className="absolute -z-10 h-full top-0 flex flex-col justify-center px-4 bg-white">
                            <h4 className='font-bold uppercase text-red-600 text-3xl'>Title</h4>
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt.</p>
                            <p>skills: html,css</p>
                            <a href='/' className='bg-red-600 w-max py-2 px-4 rounded-md mt-4 text-white hover:bg-red-500'>Visit Now</a>
                        </div>
                    </div>

                    <div className="w-60 relative">
                        <img src={about} alt='projects' />

                        <div className="absolute -z-10 h-full top-0 flex flex-col justify-center px-4 bg-white">
                            <h4 className='font-bold uppercase text-red-600 text-3xl'>Title</h4>
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt.</p>
                            <p>skills: html,css</p>
                            <a href='/' className='bg-red-600 w-max py-2 px-4 rounded-md mt-4 text-white hover:bg-red-500'>Visit Now</a>
                        </div>
                    </div>
                </div>

            </section>




            <section className='bg-gray-500 h-screen py-20 flex justify-center flex-col items-center'>

                <div className="w-3/5 flex mb-8 justify-start items-center">
                    <h2 className='text-4xl uppercase font-bold text-white'>Education, Internship & Experience</h2>
                </div>

                <div className="w-3/5 flex justify-between items-center flex-wrap gap-8">
                    <div className="flex">
                        <p className='px-4 py-4 bg-red-600 text-white'>Education</p>
                        <p className='px-4 py-4 bg-white text-black'>Internship</p>
                        <p className='px-4 py-4 bg-white text-black'>Experience</p>
                    </div>


                    <div className="flex flex-col gap-4">
                        <h4 className='text-red-600 text-4xl font-bold uppercase'>title</h4>
                        <p className='text-black text-2xl'>Address</p>
                        <p className='text-red-600'>Percentage or Skills</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste accusamus, repudiandae fuga est reiciendis eaque excepturi fugit id possimus. Distinctio eos debitis delectus perspiciatis eaque reprehenderit numquam alias illo fuga nostrum, maxime beatae blanditiis dicta, similique ab! Ducimus, debitis ad!</p>
                    </div>
                </div>

            </section>





            <section className='bg-white h-screen flex justify-center items-center'>
                <div className="w-3/5 flex justify-between items-center gap-1">
                    <div className='w-2/4'>
                        <h2 className='text-4xl uppercase text-red-600 font-bold'>Get in Touch</h2>
                        <p className='my-5 flex gap-1 items-center'><SiGmail />akshay.bisht.dev@gmail.com</p>

                        <a href="/" className='bg-red-600 py-2 px-4 rounded-md mt-4 text-white hover:bg-red-500 flex items-center gap-2 w-max'><BsPhoneVibrateFill /> 9068822661</a>
                    </div>

                    <div className='w-2/4'>
                        <img src={contact} alt="about me" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home