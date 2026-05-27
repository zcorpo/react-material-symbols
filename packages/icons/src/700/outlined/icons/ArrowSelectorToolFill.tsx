import type { SVGProps } from 'react'

export default function ArrowSelectorToolFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M574-24 414-365 212-81v-860l665 523H530L688-77 574-24Z" />
    </svg>
  )
}
