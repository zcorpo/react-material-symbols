import type { SVGProps, JSX } from 'react'

export default function ArrowDownwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M464.62-760v501.38L222-502l-22 22 280 280 280-280-22-22-242.62 243.38V-760h-30.76Z" />
    </svg>
  )
}
