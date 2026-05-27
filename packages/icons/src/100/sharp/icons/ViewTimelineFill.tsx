import type { SVGProps } from 'react'

export default function ViewTimelineFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm99-134h178v-22H271v22Zm240-326h178v-22H511v22ZM391-469h178v-22H391v22Z" />
    </svg>
  )
}
