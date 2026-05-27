import type { SVGProps } from 'react'

export default function AlignJustifyCenter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-132v-696h22v696h-22Zm108-177v-342h62v342h-62Zm-256 0v-342h62v342h-62Z" />
    </svg>
  )
}
