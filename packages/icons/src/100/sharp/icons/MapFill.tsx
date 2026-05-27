import type { SVGProps } from 'react'

export default function MapFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m604-176-247-87-185 73v-531l185-63 247 86 184-72v533l-184 61Zm-13-27v-479l-222-77v479l222 77Z" />
    </svg>
  )
}
