import type { SVGProps } from 'react'

export default function PlaylistPlay({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-330v-60h306v60H120Zm0-165v-60h473v60H120Zm0-165v-60h473v60H120Zm542 540v-322l218 161-218 161Z" />
    </svg>
  )
}
