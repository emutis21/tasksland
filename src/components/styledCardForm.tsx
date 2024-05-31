import StyledMain from './styledMain'
import { Card, CardHeader, CardTitle } from './ui/card'

interface CardFormProps {
  title: string
  form: React.ReactNode
}

function CardForm({ title, form }: CardFormProps) {
  return (
    <StyledMain>
      <Card
        className='flex w-full flex-col items-center justify-center border-none bg-transparent py-10'
        style={{
          viewTransitionName: 'form'
        }}
      >
        <CardHeader className='py-0'>
          <CardTitle
            className='mb-8 text-center text-4xl font-bold'
            style={{
              viewTransitionName: 'titleForm'
            }}
          >
            {title}
          </CardTitle>
        </CardHeader>
        {form}
      </Card>
    </StyledMain>
  )
}

export default CardForm
