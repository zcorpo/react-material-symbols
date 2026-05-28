import type { SVGProps, JSX } from 'react'

export default function SignalCellular0Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m120-120 720-720v720H120Zm74-30.77h615.23V-766L194-150.77Z" />
    </svg>
  )
}
