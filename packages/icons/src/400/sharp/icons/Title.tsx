import type { SVGProps } from 'react'

export default function Title({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M430-160v-540H200v-100h560v100H530v540H430Z" />
    </svg>
  )
}
