import { useState } from 'react'
import Button from './ui/Button'
import { NavigationIcon } from 'lucide-react'

const Hero = () => {
  // Video sources
  const videos = [
    '/videos/hero-1.mp4',
    '/videos/hero-2.mp4',
    '/videos/hero-3.mp4',
    '/videos/hero-4.mp4',
  ]
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  // Handle video end
  const handleVideoEnd = () => {
    // Move to the next video, loop back to the first one if at the end
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  return (
    <section id='hero' className='holder relative col-span-3 overflow-x-hidden'>
      <div className='grid grid-cols-1 items-center justify-center'>
        {/* Video Background */}
        <div className='aspect-widescreen'>
          <video
            src={videos[currentVideoIndex]} // Dynamically select the video
            autoPlay
            loop={false} // Disable individual looping to transition between videos
            muted
            onEnded={handleVideoEnd} // Detect video end
            className='h-full w-full overflow-hidden rounded-lg object-cover object-center'
            title='Hero Background Video'
          ></video>
        </div>

        {/* Text Overlays */}
        <h1 className='text-primary special-font font-zentry text-fluid-7 @max-lg:text-fluid-2 absolute right-5 bottom-5 z-40 font-extrabold uppercase @max-3xl:right-5 @max-3xl:bottom-3'>
          G<b>A</b>MING
        </h1>

        <div className='absolute top-0 left-0 z-40 mt-5 px-5'>
          <h1 className='text-fluid-7 special-font text-primary @max-lg:text-fluid-2 uppercase'>
            redefi<b>n</b>e
          </h1>
          <p className='text-fluid-1 @max-sm:text-fluid-00 -mb-5 text-white'>
            Enter the Metagame Layer <br /> Unleash the Play Economy
          </p>
          <Button
            id='watch-trailer'
            size='sm'
            variant='outline'
            theme='dark'
            leftIcon={<NavigationIcon className='text-white' />}
            className='bg-primary/40 mt-8 cursor-pointer text-white @max-3xs:hidden'
          >
            Watch Preview
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
