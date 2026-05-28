import type { SVGProps, JSX } from 'react'

export default function MovieFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h60l74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h172v640H80Z" />
    </svg>
  )
}
