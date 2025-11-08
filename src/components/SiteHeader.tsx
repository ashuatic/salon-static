import { NavLink } from 'react-router-dom'

const linkBaseClasses =
  'inline-flex items-center px-3 py-2 text-sm font-semibold transition-colors duration-150'

export default function SiteHeader() {
  const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
    `${linkBaseClasses} ${
      isActive
        ? 'text-brand border-b-2 border-brand'
        : 'text-slate-600 hover:text-brand hover:border-b-2 hover:border-brand/60 border-b-2 border-transparent'
    }`

  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <NavLink to="/" className="text-lg font-display font-bold text-slate-900">
          SPIN Salon
        </NavLink>
        <div className="flex gap-4">
          <NavLink to="/" className={navLinkClassName} end>
            Home
          </NavLink>
          <NavLink to="/menu" className={navLinkClassName}>
            Menu
          </NavLink>
        </div>
      </nav>
    </div>
  )
}


