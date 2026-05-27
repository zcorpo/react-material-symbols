import type { SVGProps, JSX } from 'react'

export default function Man4({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m407-75.48-80-600.91h306L553-75.48H407Zm73.15-661.91q-32.98 0-56.17-23.3-23.2-23.3-23.2-56.02 0-32.73 23.04-56.2 23.04-23.48 56.03-23.48 32.98 0 56.17 23.39 23.2 23.39 23.2 56.24 0 32.61-23.04 55.99-23.04 23.38-56.03 23.38Z" />
    </svg>
  )
}
