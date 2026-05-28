import type { SVGProps, JSX } from 'react'

export default function NetworkCellFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M168-55q-22 0-34.5-14.5T121-102q0-8 3.5-17t11.5-17l689-689q7-7 16-10.5t17-3.5q18 0 33 12.5t15 34.5v666q0 30-20.5 50.5T835-55H168Zm506-94h137v-530L674-542v393Z" />
    </svg>
  )
}
