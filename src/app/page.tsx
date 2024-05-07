import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <main
      className={cn(
        'bg-gray-100',
        'text-gray-800',
        'p-4',
        'sm:p-8',
        'md:p-12',
        'lg:p-16',
        'xl:p-20',
        '2xl:p-24',
        'rounded-lg',
        'shadow-lg'
      )}
    >
      <h1
        className={cn(
          'text-3xl',
          'sm:text-4xl',
          'md:text-5xl',
          'lg:text-6xl',
          'xl:text-7xl',
          '2xl:text-8xl',
          'font-bold',
          'mb-4'
        )}
      >
        Welcome to your new project!
      </h1>
      <p
        className={cn(
          'text-lg',
          'sm:text-xl',
          'md:text-2xl',
          'lg:text-3xl',
          'xl:text-4xl',
          '2xl:text-5xl'
        )}
      >
        This is a simple example of how you can use Tailwind CSS with your new Blitz app.
      </p>
    </main>
  )
}
