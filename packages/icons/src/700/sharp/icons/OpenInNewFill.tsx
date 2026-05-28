import type { SVGProps, JSX } from 'react'

export default function OpenInNewFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h364v95H189v582h582v-270h95v364H95Zm310-244-65-66 366-366H519v-95h347v347h-95v-186L405-339Z" />
    </svg>
  )
}
