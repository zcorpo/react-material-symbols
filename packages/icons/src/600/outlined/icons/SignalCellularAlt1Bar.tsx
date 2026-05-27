import type { SVGProps } from 'react'

export default function SignalCellularAlt1Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M189.83-145.87V-372.3h119.78v226.43H189.83Z" />
    </svg>
  )
}
