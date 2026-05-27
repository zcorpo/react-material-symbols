import type { SVGProps } from 'react'

export default function Crop23({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-100v-760h440v760H260Zm45.39-45.39h349.22v-669.22H305.39v669.22Zm0 0v-669.22 669.22Z" />
    </svg>
  )
}
