import type { SVGProps, JSX } from 'react'

export default function AzmFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M630-583v278q0 15 15 21t26-5l116-116q13-13 20.5-31t7.5-37v-248q0-39-27.5-66.5T721-815H473q-19 0-37 7.5T405-787L289-671q-11 11-5 26t21 15h278q20 0 33.5 13.5T630-583ZM385-338v278q0 15 15 21t26-5l116-116q13-13 20.5-31t7.5-37v-248q0-39-27.5-66.5T476-570H228q-19 0-37 7.5T160-542L44-426q-11 11-5 26t21 15h278q20 0 33.5 13.5T385-338Z" />
    </svg>
  )
}
