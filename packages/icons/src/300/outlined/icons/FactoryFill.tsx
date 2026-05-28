import type { SVGProps, JSX } from 'react'

export default function FactoryFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-100v-447.54l240-102.07v79.23l200-81V-540h320v440H100Zm351.92-149.23h56.16v-141.54h-56.16v141.54Zm-160 0h56.16v-141.54h-56.16v141.54Zm320 0h56.16v-141.54h-56.16v141.54Zm243.85-323.84H716.54l35.77-271.54h70l33.46 271.54Z" />
    </svg>
  )
}
