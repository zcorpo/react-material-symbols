import type { SVGProps, JSX } from 'react'

export default function LandscapeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m78.08-260 203.84-272.31 170.39 226.92h82.3L404.69-477.61l157.23-209.31 320 426.92H78.08Z" />
    </svg>
  )
}
