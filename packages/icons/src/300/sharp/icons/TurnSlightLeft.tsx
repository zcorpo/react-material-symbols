import type { SVGProps, JSX } from 'react'

export default function TurnSlightLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M544.62-164.62v-293.76L299.62-703v131.62h-45.39V-780h208.62v45.39H331.23L590-476.23v311.61h-45.38Z" />
    </svg>
  )
}
