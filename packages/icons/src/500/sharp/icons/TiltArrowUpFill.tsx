import type { SVGProps, JSX } from 'react'

export default function TiltArrowUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m74.02-114.02 162.15-732.2h487.66l162.39 732.2H74.02Zm373.59-403.89v219.58h64.78v-219.58l68.5 68.74 45.35-45.11L480-640.52 333.76-494.28l45.35 45.11 68.5-68.74Z" />
    </svg>
  )
}
