import type { SVGProps } from 'react'

export default function Crop219Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-320v-320h720v320H120Z" />
    </svg>
  )
}
