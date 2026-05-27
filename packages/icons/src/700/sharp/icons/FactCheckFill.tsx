import type { SVGProps, JSX } from 'react'

export default function FactCheckFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M228-280h194v-80H228v80Zm354.45-80L774-552l-57.45-57-134.1 136L525-530l-56 57 113.45 113ZM228-440h194v-80H228v80Zm0-160h194v-80H228v80ZM47-95v-771h867v771H47Z" />
    </svg>
  )
}
