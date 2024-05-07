import { LoginForm } from '@/components/loginForm'
import { cn } from '@/lib/utils'

const page = () => {
  return (
    <main
      className={cn('container', 'flex', 'flex-col', 'items-center', 'w-full', 'justify-center')}
    >
      <h1 className={cn('text-4xl', 'font-bold', 'text-center', 'mb-8')}>Inicia sesión</h1>
      <LoginForm />
    </main>
  )
}

export default page
