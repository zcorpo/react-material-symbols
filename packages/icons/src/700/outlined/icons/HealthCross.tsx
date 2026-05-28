import type { SVGProps, JSX } from 'react'

export default function HealthCross({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M307-95v-212H95v-347h212v-212h347v212h212v347H654v212H307Zm94-94h159v-212h211v-159H560v-211H401v211H189v159h212v212Zm79-291Z" />
    </svg>
  )
}
