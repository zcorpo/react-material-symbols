import type { SVGProps, JSX } from 'react'

export default function ArrowMenuOpen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M380-140v-680h45.39v680H380Zm158.85-182.54v-314.54L697.31-480 538.85-322.54Z" />
    </svg>
  )
}
