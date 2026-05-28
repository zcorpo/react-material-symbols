import type { SVGProps, JSX } from 'react'

export default function FitPageHeight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M389.38-618.62h181.24L480-709.23l-90.62 90.61ZM480-250.77l90.62-90.61H389.38L480-250.77ZM760-120H200v-720h560v720Zm-30.77-30.77v-658.46H230.77v658.46h498.46Zm0-658.46H230.77h498.46Z" />
    </svg>
  )
}
