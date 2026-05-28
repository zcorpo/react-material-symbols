import type { SVGProps, JSX } from 'react'

export default function AlignJustifySpaceEvenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M806-132v-696h22v696h-22Zm-674 0v-696h22v696h-22Zm457-177v-342h62v342h-62Zm-280 0v-342h62v342h-62Z" />
    </svg>
  )
}
