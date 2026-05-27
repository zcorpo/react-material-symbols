import type { SVGProps } from 'react'

export default function Crop219({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-280v-400h800v400H80Zm60-60h680v-280H140v280Zm0 0v-280 280Z" />
    </svg>
  )
}
