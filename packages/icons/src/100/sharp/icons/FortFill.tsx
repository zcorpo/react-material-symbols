import type { SVGProps, JSX } from 'react'

export default function FortFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M66-146v-122l80-80v-267l-80-80v-119h22v80h138v-80h22v80h138v-80h22v119l-80 80v87h304v-87l-80-80v-119h22v80h138v-80h22v80h138v-80h22v119l-80 80v267l80 80v122H589v-203H371v203H66Z" />
    </svg>
  )
}
