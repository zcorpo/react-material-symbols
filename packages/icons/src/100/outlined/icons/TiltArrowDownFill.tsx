import type { SVGProps, JSX } from 'react'

export default function TiltArrowDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M266-172q-23 0-38.5-15.5T212-226v-508q0-23 15.5-38.5T266-788h429q23 0 38.5 15.5T749-734v508q0 23-15.5 38.5T695-172H266Zm204-216-94-94-16 15 121 121 119-119-16-15-92 92v-212h-22v212Z" />
    </svg>
  )
}
