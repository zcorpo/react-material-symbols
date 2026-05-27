import type { SVGProps, JSX } from 'react'

export default function KeyboardArrowDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-338.26 234.26-584 283-632.74l197 197 197-197L725.74-584 480-338.26Z" />
    </svg>
  )
}
