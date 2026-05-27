import type { SVGProps } from 'react'

export default function SpaceBar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-335v-265h94v171h502v-171h95v265H135Z" />
    </svg>
  )
}
