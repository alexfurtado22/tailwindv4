import { gridItems } from '@/data/index'
import { BentoTilt } from './BentoTilt' // Adjust path as necessary

const Features = () => {
  return (
    <section id='features' className='holder section col-span-3'>
      <div className='px-5 py-32'>
        <p className='text-lg'>Into the Metagame Layer</p>
        <p className='max-w-md text-lg opacity-50'>
          Immerse yourself in a rich and ever-expanding universe where a vibrant array of products
          converge into an interconnected overlay experience on your world.
        </p>
      </div>
      <div className='data-grid-fit max-md:grid-cols-1'>
        {gridItems.map((item, index) => (
          <BentoTilt
            key={index}
            className='border-border row-span-3 grid grid-rows-subgrid rounded-lg border p-4 shadow-sm'
          >
            <div className='relative'>
              <video
                className='size-full object-cover object-center'
                src={item.Video}
                autoPlay
                loop
                muted
              />
              <h3
                className='special-font text-fluid-2 text-primary absolute top-0 left-0 rounded p-2 font-bold'
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>
            <p className='mt-4 text-sm' dangerouslySetInnerHTML={{ __html: item.description }} />
          </BentoTilt>
        ))}
      </div>
    </section>
  )
}

export default Features
