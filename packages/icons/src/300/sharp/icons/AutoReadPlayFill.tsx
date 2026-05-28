import type { SVGProps, JSX } from 'react'

export default function AutoReadPlayFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M405.08-426.39 603.38-560l-198.3-132.61v266.22ZM100-118.46V-860h760v600H241.54L100-118.46Z" />
    </svg>
  )
}
