import type { SVGProps } from 'react'

export default function PlaylistAddCheck({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-331v-60h306v60H120Zm0-165v-60h473v60H120Zm0-165v-60h473v60H120Zm532 460L516-337l42-43 94 93 185-185 43 43-228 228Z" />
    </svg>
  )
}
