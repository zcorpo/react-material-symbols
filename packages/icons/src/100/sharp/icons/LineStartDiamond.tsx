import type { SVGProps } from 'react'

export default function LineStartDiamond({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m360-348 132-132-132-132-132 132 132 132Zm0 32L196-480l164-164 153 153h311v22H513L360-316Zm0-164Z" />
    </svg>
  )
}
