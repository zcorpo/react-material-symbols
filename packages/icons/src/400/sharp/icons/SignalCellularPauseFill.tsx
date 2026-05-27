import type { SVGProps, JSX } from 'react'

export default function SignalCellularPauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m80-80 800-800v490H570v310H80Zm710 0v-230h60v230h-60Zm-140 0v-230h60v230h-60Z" />
    </svg>
  )
}
