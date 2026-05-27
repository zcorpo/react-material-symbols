import type { SVGProps } from 'react'

export default function AccountTreeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M621.69-140v-122.69H464.62v-404.62H338.54v124.62H100V-820h238.54v121.92h283.15V-820H860v277.31H621.69v-124.62H495.38v373.85h126.31v-124.62H860V-140H621.69Z" />
    </svg>
  )
}
