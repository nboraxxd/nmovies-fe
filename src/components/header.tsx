import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="flex h-header-height items-center justify-between">
      <div className="container flex items-center text-primary-foreground sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="nmovies logo" className="size-8" />
          <span>nmovies</span>
        </Link>
        {/* <nav className="ml-10">
          <ul className="flex items-center gap-4 lg:gap-6">
            <li>
              <Link to="/" className="px-2 py-1">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/" className="px-2 py-1">
                TV Series
              </Link>
            </li>
          </ul>
        </nav> */}
        <Button asChild>
          <Link to="/login" className="ml-auto">
            Sign In
          </Link>
        </Button>
        <Button variant="secondary">Sign Up</Button>
      </div>
    </header>
  )
}
