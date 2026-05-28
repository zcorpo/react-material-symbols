import type { SVGProps, JSX } from 'react'

export default function StylusFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m325.23-189.08-172.61 36.46 36.46-172.61 136.15 136.15Zm25.08-19.38L208.46-350.31 675-816.08 816.08-675 350.31-208.46Z" />
    </svg>
  )
}
