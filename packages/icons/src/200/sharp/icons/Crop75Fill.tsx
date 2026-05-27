import type { SVGProps } from 'react'

export default function Crop75Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-240v-480h640v480H160Z" />
    </svg>
  )
}
