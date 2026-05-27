import type { SVGProps } from 'react'

export default function Crop75({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-220v-520h680v520H140Zm45.39-45.39h589.22v-429.22H185.39v429.22Zm0 0v-429.22 429.22Z" />
    </svg>
  )
}
