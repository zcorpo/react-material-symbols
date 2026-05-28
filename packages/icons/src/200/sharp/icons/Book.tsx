import type { SVGProps, JSX } from 'react'

export default function Book({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-120v-720h560v720H200Zm30.77-30.77h498.46v-658.46h-70.77v238.31l-78.54-46-78.54 46v-238.31H230.77v658.46Zm0 0v-658.46 658.46Zm270.61-420.15 78.54-46 78.54 46-78.54-46-78.54 46Z" />
    </svg>
  )
}
