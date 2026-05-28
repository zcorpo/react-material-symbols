import type { SVGProps, JSX } from 'react'

export default function SignalCellularPauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m120-120 720-720v452.31H587.69V-120H120Zm673.85 0v-172.31h30.77V-120h-30.77Zm-110.77 0v-172.31h30.77V-120h-30.77Z" />
    </svg>
  )
}
