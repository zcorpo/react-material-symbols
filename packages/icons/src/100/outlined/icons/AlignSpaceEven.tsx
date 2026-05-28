import type { SVGProps, JSX } from 'react'

export default function AlignSpaceEven({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-806v-22h696v22H132Zm0 674v-22h696v22H132Zm177-457v-62h342v62H309Zm0 280v-62h342v62H309Z" />
    </svg>
  )
}
