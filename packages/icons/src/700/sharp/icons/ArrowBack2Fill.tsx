import type { SVGProps, JSX } from 'react'

export default function ArrowBack2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M666-151 153-477l513-326v652Z" />
    </svg>
  )
}
