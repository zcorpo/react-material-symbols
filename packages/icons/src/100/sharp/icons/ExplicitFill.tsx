import type { SVGProps, JSX } from 'react'

export default function ExplicitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M388-306h184v-22H410v-140h162v-22H410v-140h162v-22H388v346ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
