import type { SVGProps } from 'react'

export default function EjectFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-234v-18h440v18H260Zm3-142 217-324 218 324H263Z" />
    </svg>
  )
}
