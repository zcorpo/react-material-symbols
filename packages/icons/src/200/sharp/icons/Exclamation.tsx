import type { SVGProps, JSX } from 'react'

export default function Exclamation({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M464.62-387.69v-329.23h30.76v329.23h-30.76Zm0 144.61v-30.77h30.76v30.77h-30.76Z" />
    </svg>
  )
}
