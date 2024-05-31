import CardForm from '@/components/styledCardForm'
import { LoginForm } from '@/components/loginForm'

function LoginPage() {
  return <CardForm form={<LoginForm />} title='Inicia sesión' />
}

export default LoginPage
