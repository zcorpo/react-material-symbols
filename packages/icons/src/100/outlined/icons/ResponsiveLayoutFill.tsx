import type { SVGProps, JSX } from 'react'

export default function ResponsiveLayoutFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M584-172v-412H378v-204h410v616H584Zm-206 0v-390h184v390H378Zm-206 0v-390h184v390H172Z" />
    </svg>
  )
}
