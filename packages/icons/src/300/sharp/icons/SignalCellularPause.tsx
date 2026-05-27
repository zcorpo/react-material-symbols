import type { SVGProps } from 'react'

export default function SignalCellularPause({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m100-100 760-760v471.15h-45.39V-750L209-145.39h369.85V-100H100Zm566.54 0v-201.15h45.38V-100h-45.38Zm125.38 0v-201.15h45.39V-100h-45.39ZM512-448Z" />
    </svg>
  )
}
