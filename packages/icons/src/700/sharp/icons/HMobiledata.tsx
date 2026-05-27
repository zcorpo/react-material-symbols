import type { SVGProps, JSX } from 'react'

export default function HMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M274-274v-412h72v170h268v-170h72v412h-72v-170H346v170h-72Z" />
    </svg>
  )
}
