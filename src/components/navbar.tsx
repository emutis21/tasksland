import { getServerSession } from 'next-auth'
import { Link } from 'next-view-transitions'

import { options } from '@/app/options'
import { cn } from '@/lib/utils'

import { buttonVariants } from './ui/button'

async function Navbar() {
  const session = await getServerSession(options)

  const linksNotLogged = [
    { href: '/auth/login', text: 'Login' },
    { href: '/auth/register', text: 'Register' }
  ]

  const linksLogged = [
    { href: '/dashboard', text: 'Dashboard' },
    { href: '/api/auth/signout', text: 'Logout' }
  ]

  return (
    <nav
      className={cn(
        'flex',
        'justify-between',
        'items-center',
        'px-8',
        'bg-[var(--primary-dark)]',
        'text-[var(--primary-content)]',
        '[grid-column:full-width]',
        'md:[grid-column:breakout]',
        '[grid-row:full-height-start]',
        'my-2',
        'rounded-lg',
        'border-2',
        'border-[var(--primary)]'
      )}
    >
      <Link className={buttonVariants({ variant: 'link' })} href='/'>
        TasksLand
      </Link>

      <ul className={cn('flex', 'gap-4', 'list-none', 'md:[gap-8]')}>
        {session?.user
          ? linksLogged.map((link, index) => (
              <li key={index} className={buttonVariants({ variant: 'link' })}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))
          : linksNotLogged.map((link, index) => (
              <li key={index}>
                <Link className={buttonVariants({ variant: 'link' })} href={link.href}>
                  {link.text}
                </Link>
              </li>
            ))}
      </ul>
    </nav>
  )
}

export default Navbar
