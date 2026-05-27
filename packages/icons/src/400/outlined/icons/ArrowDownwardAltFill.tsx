import type { SVGProps, JSX } from 'react'

export default function ArrowDownwardAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M479-240 238-481l42-43 170 167v-400h60v402l168-168 42 42-241 241Z" />
    </svg>
  )
}
