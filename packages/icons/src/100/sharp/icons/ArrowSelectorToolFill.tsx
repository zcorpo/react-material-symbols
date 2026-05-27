import type { SVGProps } from 'react'

export default function ArrowSelectorToolFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M538-177 407-459 278-279v-523l412 324H466l128 274-56 27Z" />
    </svg>
  )
}
