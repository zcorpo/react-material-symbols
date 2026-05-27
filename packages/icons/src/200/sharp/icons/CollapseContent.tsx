import type { SVGProps, JSX } from 'react'

export default function CollapseContent({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440-440v200h-30.77v-169.23H240V-440h200Zm110.77-280v169.23H720V-520H520v-200h30.77Z" />
    </svg>
  )
}
