import type { SVGProps } from 'react'

export default function PlaylistRemoveFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m571-80-43-43 114-113-114-113 43-43 113 114 113-114 43 43-114 113 114 113-43 43-113-114L571-80ZM120-330v-60h300v60H120Zm0-165v-60h470v60H120Zm0-165v-60h470v60H120Z" />
    </svg>
  )
}
