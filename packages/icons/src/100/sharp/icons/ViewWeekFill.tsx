import type { SVGProps, JSX } from 'react'

export default function ViewWeekFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h218v536H132Zm240 0v-536h216v536H372Zm238 0v-536h218v536H610Z" />
    </svg>
  )
}
