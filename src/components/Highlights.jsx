import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import VideoCarousel from './VideoCarousel'


function Highlights() {
    useGSAP(() => {
        gsap.to('#title',
            {
                opacity: 1,
                delay: 1,
                y:0,
                stagger: 0.25
            }
        )
    }, [])

    gsap.to('#link1', {opacity: 1, delay:1.5, y: 0})
    gsap.to('#link2', {opacity: 1, delay:1.5, y: 0})
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
        <div className='screen-max-width'>
            <div className='w-full mb-12 items-end justify-between flex'>
                <h1 id='title' className='section-heading'>
                    Hightlights
                </h1>
                <div className='flex flex-wrap items-end gap-5'>
                    <p id='link1' className='link'>
                        Watch the film
                        <img src="/assets/images/watch.svg" alt="" className='ml-2'/>
                    </p>
                    <p id='link2' className='link'>
                        Watch the event
                        <img src="/assets/images/right.svg" alt="" className='ml-2'/>
                    </p>
                </div>
            </div>

            <VideoCarousel/>
        </div>
    </section>
  )
}

export default Highlights