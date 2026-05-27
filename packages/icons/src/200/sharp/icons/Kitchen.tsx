import type { SVGProps, JSX } from 'react'

export default function Kitchen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M322.85-644.62V-748h30.77v103.38h-30.77Zm0 324.85v-172.15h30.77v172.15h-30.77ZM200-120v-720h560v720H200Zm30.77-30.77h498.46v-401.85H230.77v401.85Zm0-432.61h498.46v-225.85H230.77v225.85Z" />
    </svg>
  )
}
