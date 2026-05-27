import type { SVGProps } from 'react'

export default function CropFree({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-232h60v172h172v60H120Zm488 0v-60h172v-172h60v232H608ZM120-608v-232h232v60H180v172h-60Zm660 0v-172H608v-60h232v232h-60Z" />
    </svg>
  )
}
