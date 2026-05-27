import type { SVGProps, JSX } from 'react'

export default function NearMeDisabledFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M527-120 413-413 120-527v-43l217-81-219-219 43-43 752 752-43 43-219-219-81 217h-43Zm171-342L462-698l378-142-142 378Z" />
    </svg>
  )
}
