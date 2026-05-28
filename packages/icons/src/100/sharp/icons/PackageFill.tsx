import type { SVGProps, JSX } from 'react'

export default function PackageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-306h200v-28H280v28ZM172-172v-616h616v616H172Zm200-594v269l108-54 108 54v-269H372Z" />
    </svg>
  )
}
