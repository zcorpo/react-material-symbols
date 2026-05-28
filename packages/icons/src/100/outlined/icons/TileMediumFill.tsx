import type { SVGProps, JSX } from 'react'

export default function TileMediumFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-252v-174h254v174H172Zm362 0v-174h254v174H534ZM172-534v-174h616v174H172Z" />
    </svg>
  )
}
