import type { SVGProps, JSX } from 'react'

export default function TransitionChopFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7H894.7v668.83H65.87Zm155.92-79.22h593.12v-509.82H622.3l98.57 381.26-499.08 128.56Z" />
    </svg>
  )
}
