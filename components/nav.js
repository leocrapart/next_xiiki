import Link from 'next/link'

const links = [
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="border-b-2 border-gray-300">
      <ul className="flex items-center justify-between py-2">
        <li>
          <Link href="/">
            <a className="text-4xl font-bold text-purple-500 no-underline">Xiiki</a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>
                <button className="px-4 py-2 font-semibold text-gray-100 bg-purple-600 rounded hover:bg-purple-700">
                  {label}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
