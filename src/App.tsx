const App = () => {
  return (
    <main>
      <div className='holder flex-column-drop gap-6 font-serif font-semibold'>
        <div className=''>
          <p className='text-fluid-1 text-white max-[384px]:text-red-500'>
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className='@max-md:text-blue-500'>
          <p className='text-base @max-sm:text-amber-400'>Lorem ipsum dolor</p>
        </div>
        <div className='@max-md:text-blue-500'>
          <p className='@max-sm:text-amber-400'>Lorem ipsum dolor</p>
        </div>
        <div className='@max-md:text-green-600'>
          <p className='@max-sm:text-amber-400'>Lorem ipsum dolor</p>
        </div>
      </div>
    </main>
  )
}

export default App
