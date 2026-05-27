import type { SVGProps, JSX } from 'react'

export default function SignalCellularNullFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M179-132q-14 0-18.5-12t4.5-21l630-630q9-9 21-4.5t12 17.5v624q0 12-7 19t-18 7H179Zm6-22h621v-621L185-154Z" />
    </svg>
  )
}
