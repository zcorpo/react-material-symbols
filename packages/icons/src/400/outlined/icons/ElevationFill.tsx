import type { SVGProps } from 'react'

export default function ElevationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m82-120 258-360h202l298-348v708H82Zm62-257-48-35 163-228h201l185-215 45 39-202 236H289L144-377Z" />
    </svg>
  )
}
