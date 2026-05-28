import type { SVGProps, JSX } from 'react'

export default function BorderAll({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h616v616H172Zm594-22v-275H491v275h275Zm0-572H491v275h275v-275Zm-572 0v275h275v-275H194Zm0 572h275v-275H194v275Z" />
    </svg>
  )
}
