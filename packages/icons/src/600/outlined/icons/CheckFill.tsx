import type { SVGProps, JSX } from 'react'

export default function CheckFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M378-232.43 140.43-470l57.14-57.13L378-346.7l383.43-383.43L818.57-673 378-232.43Z" />
    </svg>
  )
}
