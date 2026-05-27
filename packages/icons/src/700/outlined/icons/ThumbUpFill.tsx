import type { SVGProps, JSX } from 'react'

export default function ThumbUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M702-77H231v-540l267-277 52 38q13 10 19 23.5t6 31.5v1l-43 183h312q37 0 66 29t29 65v37q0 13-3.5 29.5T927-429L807-148q-12 30-42 50.5T702-77ZM171-617v540H46v-540h125Z" />
    </svg>
  )
}
