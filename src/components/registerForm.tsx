'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type z } from 'zod'
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
import { RegisterFormSchema } from '@/schemas/registerFormSchema'

import { toast } from './ui/use-toast'
import { Button } from './ui/button'
import { ToastAction } from './ui/toast'

export function RegisterForm() {
  const router = useRouter()

  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: { userName: '', email: '', password: '', confirmPassword: '' }
  })

  const onSubmit = async (data: z.infer<typeof RegisterFormSchema>) => {
    toast({
      title: `Usuario ${data.userName}`,
      description: 'Usuario creado',
      action: (
        <ToastAction
          altText='Ventana de confirmación'
          className='text-blue-500 hover:text-blue-700'
        >
          Cerrar
        </ToastAction>
      )
    })

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        userName: data.userName,
        email: data.email,
        password: data.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // const resJSON = await res.json()

    if (res.ok) router.push('/auth/login')
  }

  return (
    <Form {...form}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className='flex w-full flex-col gap-6 md:w-2/3' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='userName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='emutis21' {...field} autoComplete='userName' />
              </FormControl>
              {/* <FormDescription>This is your public display name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='emutis@gmail.com' type='email' {...field} />
              </FormControl>
              {/* <FormDescription>We will never share your email.</FormDescription> */}
              <FormMessage />
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
                  autoComplete='new-password'
                  placeholder='********'
                  type='password'
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>Must be at least 8 characters long.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  autoComplete='new-password'
                  placeholder='********'
                  type='password'
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>Must match the password above.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          style={{
            viewTransitionName: 'button'
          }}
          title='Registrar usuario'
          type='submit'
        >
          Regístrate
        </Button>
      </form>
    </Form>
  )
}
