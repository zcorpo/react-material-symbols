import type { SVGProps } from 'react'

export default function ArrowMenuOpen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M321-95v-771h94v771h-94Zm209-163v-445l229 223-229 222Z" />
    </svg>
  )
}
