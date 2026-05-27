import type { SVGProps, JSX } from 'react'

export default function FinanceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M86-86v-777h94v683h695v94H86Zm169-169v-357h130v357H255Zm209 0v-563h131v563H464Zm206 0v-193h131v193H670Z" />
    </svg>
  )
}
