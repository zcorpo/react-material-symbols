import type { SVGProps, JSX } from 'react'

export default function Shadow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-65.87V-722.7h172v-172H894.7v656.83h-172v172H65.87Zm251.22-251.22h497.82v-497.82H317.09v497.82Z" />
    </svg>
  )
}
