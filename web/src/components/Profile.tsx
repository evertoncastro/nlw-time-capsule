import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[170px] text-sm leading-snug">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-red-200 hover:text-red-300"
        >
          logout
        </a>
      </p>
    </div>
  )
}
