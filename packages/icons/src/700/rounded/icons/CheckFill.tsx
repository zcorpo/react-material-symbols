import type { SVGProps, JSX } from 'react'

export default function CheckFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m378-358 350-349q14-14 34-14t34 14q14 14 14 34t-14 34L412-256q-14 14-34 14t-34-14L164-436q-14-14-14-34t14-34q14-14 34-14t34 14l146 146Z" />
    </svg>
  )
}
