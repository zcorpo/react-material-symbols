import type { SVGProps, JSX } from 'react'

export default function ImageInsetFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-280h560v-400H200v400Zm120-120 85-113 55 73 75-100 105 140H320ZM80-160v-640h800v640H80Z" />
    </svg>
  )
}
