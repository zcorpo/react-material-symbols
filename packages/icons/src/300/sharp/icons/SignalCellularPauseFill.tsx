import type { SVGProps, JSX } from 'react'

export default function SignalCellularPauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m100-100 760-760v471.15H578.85V-100H100Zm691.92 0v-201.15h45.39V-100h-45.39Zm-125.38 0v-201.15h45.38V-100h-45.38Z" />
    </svg>
  )
}
