import type { SVGProps, JSX } from 'react'

export default function WorkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-172v-496h240v-108h216v108h240v496H132Zm262-496h172v-86H394v86Z" />
    </svg>
  )
}
