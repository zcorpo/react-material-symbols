import type { SVGProps, JSX } from 'react'

export default function Icon60fpsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M126-246v-468h220v16H142v189h245v263H126Zm16-16h229v-231H142v231Zm407 0h269v-436H549v436Zm-16 16v-468h301v468H533Z" />
    </svg>
  )
}
