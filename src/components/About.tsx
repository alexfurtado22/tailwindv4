import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)
  const clipRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Animation for the paragraph
    const paragraphAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: 'top 50%',
        end: 'top 20%',
        scrub: 1,
      },
    })

    paragraphAnimation.to(paragraphRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out',
    })

    // Responsive animation for the mask clip
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      // Desktop animation
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: clipRef.current,
          start: 'center center',
          end: '+=800 center',
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      })

      clipAnimation.fromTo(
        '.mask-clip-path',
        {
          width: '20rem', // Matches Tailwind `w-40`
          height: '20rem', // Matches Tailwind `h-40`
          borderRadius: '50%', // Rounded circle
        },
        {
          width: '100vw', // Full screen width
          height: '100vh', // Full screen height
          borderRadius: '0%', // Removes rounding
          ease: 'power2.inOut',
        }
      )
    })

    mm.add('(max-width: 767px)', () => {
      // Mobile animation
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: clipRef.current,
          start: 'center center',
          end: '+=800 center',
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      })

      clipAnimation.fromTo(
        '.mask-clip-path',
        {
          width: '10rem', // Smaller size for mobile
          height: '10rem', // Matches Tailwind `h-20`
          borderRadius: '50%', // Rounded circle
        },
        {
          width: '100vw', // Full screen width
          height: '100vh', // Full screen height
          borderRadius: '0%', // Removes rounding
          ease: 'power2.inOut',
        }
      )
    })

    // Cleanup on component unmount
    return () => {
      mm.revert() // Revert matchMedia animations
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id='about' className='section holder col-span-3'>
      <div className='grid grid-cols-1 items-center justify-center gap-5'>
        <div className='mt-10'>
          <h1 className='text-fluid-1 text-center'>Welcome to Zentry</h1>
        </div>
        <div className='mt-10'>
          <p
            ref={paragraphRef}
            className='text-fluid-6 special-font @max-3xl:text-fluid-3 @max-md:text-fluid-1 translate-x-10 transform text-center uppercase opacity-0'
          >
            "Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          </p>
        </div>
        <div className='h-screen w-full overflow-hidden' ref={clipRef}>
          <div className='mask-clip-path absolute top-0 left-1/2 z-20 h-40 w-40 origin-center -translate-x-1/2 overflow-hidden rounded-full @max-md:h-20 @max-md:w-20'>
            <img
              src='img/about.webp'
              alt='Background image representing the Zentry adventure'
              className='absolute top-0 left-0 size-full object-cover'
            />
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <p className='text-fluid-2 text-center leading-relaxed'>
          Zentry unites every player from countless games and platforms, both digital and physical,
          into a unified Play Economy.
        </p>
      </div>
    </section>
  )
}

export default About
