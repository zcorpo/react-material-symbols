import type { SVGProps, JSX } from 'react'

export default function ElevationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m69-89 279-390h202l321-374v764H69Zm63-281-76-55 178-249h201l191-222 72 61-218 256H282L132-370Z" />
    </svg>
  )
}
