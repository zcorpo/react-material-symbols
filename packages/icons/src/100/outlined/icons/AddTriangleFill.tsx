import type { SVGProps } from 'react'

export default function AddTriangleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m93-212 387-656 388 656H93Zm376-135h22v-78h80v-22h-80v-77h-22v77h-79v22h79v78Z" />
    </svg>
  )
}
