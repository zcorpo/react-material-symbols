import type { SVGProps, JSX } from 'react'

export default function PictureInPictureAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm366-105h335v-257H446v257Zm168-129Z" />
    </svg>
  )
}
