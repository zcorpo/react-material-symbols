import type { SVGProps, JSX } from 'react'

export default function CheckIndeterminateSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M295.38-464.62q-6.53 0-10.96-4.48-4.42-4.49-4.42-11.12 0-6.63 4.42-10.9 4.43-4.26 10.96-4.26h369.24q6.53 0 10.96 4.48 4.42 4.49 4.42 11.12 0 6.63-4.42 10.9-4.43 4.26-10.96 4.26H295.38Z" />
    </svg>
  )
}
