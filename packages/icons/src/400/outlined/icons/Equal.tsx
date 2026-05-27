import type { SVGProps } from 'react'

export default function Equal({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-290v-100h640v100H160Zm0-280v-100h640v100H160Z" />
    </svg>
  )
}
