import { RegisterForm } from '@/components/registerForm'
import { cn } from '@/lib/utils'

const page = () => {
  return (
    <main
      className={cn('container', 'flex', 'flex-col', 'items-center', 'w-full', 'justify-center')}
    >
      <h1 className={cn('text-4xl', 'font-bold', 'text-center', 'mb-8')}>Regístrate</h1>
      <RegisterForm />
    </main>
  )
}

export default page
