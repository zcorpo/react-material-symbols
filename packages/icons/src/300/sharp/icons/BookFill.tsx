import type { SVGProps, JSX } from 'react'

export default function BookFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-100v-760h600v760H180Zm313.69-462.46 87.77-51 87.77 51v-252.15H493.69v252.15Z" />
    </svg>
  )
}
