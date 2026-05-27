import type { SVGProps } from 'react'

export default function SignalCellularPauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m132-132 696-696v441H593v255H132Zm663 0v-155h22v155h-22Zm-102 0v-155h22v155h-22Z" />
    </svg>
  )
}
