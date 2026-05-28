import type { SVGProps, JSX } from 'react'

export default function BoltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m320-80 40-280H160l360-520h80l-40 320h240L400-80h-80Z" />
    </svg>
  )
}
