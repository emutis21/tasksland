import StyledMain from '@/components/styledMain'

export default function Home() {
  return (
    <StyledMain>
      <section className='flex flex-col'>
        <h1 className='mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>
          Tasksland, Gnubies! 🚀
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>
          Es un proyecto de código abierto para aprender :)
        </p>
      </section>
    </StyledMain>
  )
}
