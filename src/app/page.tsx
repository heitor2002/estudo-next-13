import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='p-4 font-light'>
      <h2 className='font-bold text-3xl'>Home Page</h2>
      <p>
        <Link href="/users" className='text-emerald-400 text-lg'>Users</Link>
      </p>
    </main>
  )
}
