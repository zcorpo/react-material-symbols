import type { SVGProps } from 'react'

export default function AlignHorizontalLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-800h60v800H80Zm160-210v-100h400v100H240Zm0-280v-100h640v100H240Z" />
    </svg>
  )
}
