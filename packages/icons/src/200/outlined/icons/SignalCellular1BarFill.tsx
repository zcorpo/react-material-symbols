import type { SVGProps } from 'react'

export default function SignalCellular1BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m120-120 720-720v720H120Zm254.46-30.77h434.77V-766L374.46-331.23v180.46Z" />
    </svg>
  )
}
