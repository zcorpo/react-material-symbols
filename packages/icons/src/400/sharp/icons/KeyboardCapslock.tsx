import type { SVGProps, JSX } from 'react'

export default function KeyboardCapslock({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-240v-60h480v60H240Zm240-496 235 235-43 43-192-192-188 188-43-43 231-231Z" />
    </svg>
  )
}
