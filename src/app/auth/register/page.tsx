import { RegisterForm } from '@/components/registerForm'
import CardForm from '@/components/styledCardForm'

function RegisterPage() {
  return <CardForm form={<RegisterForm />} title='Regístrate' />
}

export default RegisterPage
