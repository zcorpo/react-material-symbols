import type { SVGProps } from 'react'

export default function LooksOneFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M481-277h71v-406H398v71h83v335ZM866-95H95v-771h771v771Z" />
    </svg>
  )
}
