import { getServerSession } from 'next-auth'

import { options } from '@/app/options'
import { cn } from '@/lib/utils'

async function Navbar() {
  const session = await getServerSession(options)

  const linksNotLogged = [
    { href: '/', text: 'Home' },
    { href: '/auth/login', text: 'Login' },
    { href: '/auth/register', text: 'Register' }
  ]

  const linksLogged = [
    { href: '/', text: 'Home' },
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
      <h2>Hola</h2>
      <ul className={cn('flex', 'gap-4', 'list-none', 'md:[gap-8]')}>
        {session?.user
          ? linksLogged.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))
          : linksNotLogged.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
      </ul>
    </nav>
  )
}

export default Navbar
