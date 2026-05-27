import type { SVGProps } from 'react'

export default function ElectricBoltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m261-54 159-298-355-44 551-511h83L536-603l358 43L344-54h-83Z" />
    </svg>
  )
}
