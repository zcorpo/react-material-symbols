import type { SVGProps, JSX } from 'react'

export default function TileMediumFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-240v-186.23h266.23V-240H160Zm373.54 0v-186.23H800V-240H533.54ZM160-533.77V-720h640v186.23H160Z" />
    </svg>
  )
}
