import type { SVGProps, JSX } from 'react'

export default function DoubleArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m262.77-210 200.38-270-200.38-270h55.92l200.39 270-200.39 270h-55.92Zm245.08 0 200.38-270-200.38-270h55.92l200.38 270-200.38 270h-55.92Z" />
    </svg>
  )
}
