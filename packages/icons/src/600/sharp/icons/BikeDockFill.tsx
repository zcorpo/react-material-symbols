import type { SVGProps } from 'react'

export default function BikeDockFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-105.87v-79.22l191.91-51.13 64.13-618.48h236.18l64.13 618.48 192.48 51.13v79.22H105.87Zm333.56-122.04h80v-547h-80v547Z" />
    </svg>
  )
}
