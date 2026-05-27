import type { SVGProps } from 'react'

export default function EMobiledataBadgeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M337.69-290h284.62v-45.38H383.08v-121.93h199.23v-45.38H383.08v-121.93h239.23V-670H337.69v380ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
