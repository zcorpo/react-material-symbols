import type { SVGProps } from 'react'

export default function PauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M552.13-189v-582h191.5v582h-191.5Zm-335.76 0v-582h191.5v582h-191.5Z" />
    </svg>
  )
}
