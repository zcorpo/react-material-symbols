import type { SVGProps, JSX } from 'react'

export default function DraftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M266-132q-23 0-38.5-15.5T212-186v-588q0-23 15.5-38.5T266-828h326l156 156v486q0 23-15.5 38.5T694-132H266Zm315-530h145L581-806v144Z" />
    </svg>
  )
}
