'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type z } from 'zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginFormSchema } from '@/schemas/loginFormSchema'

import { Button } from './ui/button'
import { toast } from './ui/use-toast'

export function LoginForm() {
  const router = useRouter()

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: { email: '', password: '' }
  })

  const onSubmit = async (data: z.infer<typeof LoginFormSchema>) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    })

    if (res!.error) {
      toast({
        title: 'Error',
        description: 'Usuario o contraseña incorrectos'
      })
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <Form {...form}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className='flex w-full flex-col gap-6 md:w-2/3' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='emutis@gmail.com'
                  type='email'
                  {...field}
                  autoComplete='userName'
                />
              </FormControl>
              {/* <FormDescription>We will never share your email.</FormDescription> */}
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  autoComplete='current-password'
                  placeholder='********'
                  type='password'
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>Must be at least 8 characters long.</FormDescription> */}
              <FormMessage className='text-red-500' />
            </FormItem>
          )}
        />
        <Button type='submit'>Ingresa</Button>
      </form>
    </Form>
  )
}
