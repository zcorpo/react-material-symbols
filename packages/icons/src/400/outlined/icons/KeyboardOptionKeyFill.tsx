import type { SVGProps } from 'react'

export default function KeyboardOptionKeyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M597-200 320-700H120v-60h234l277 500h209v60H597Zm13-500v-60h230v60H610Z" />
    </svg>
  )
}
