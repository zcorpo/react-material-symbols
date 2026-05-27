import type { SVGProps, JSX } from 'react'

export default function MoreUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M712-344v-368H372v-22h362v390h-22ZM512-144v-368H172v-22h362v390h-22Z" />
    </svg>
  )
}
