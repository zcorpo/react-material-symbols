import type { SVGProps, JSX } from 'react'

export default function SpaceBar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-380v-220h45.39v174.61h509.22V-600H780v220H180Z" />
    </svg>
  )
}
