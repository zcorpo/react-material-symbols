import type { SVGProps } from 'react'

export default function LineStartSquareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M520-260H80v-440h440v190h360v60H520v190Z" />
    </svg>
  )
}
