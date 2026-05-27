import type { SVGProps } from 'react'

export default function ArrowMenuClose({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M418.08-344.08v-271.07L285.38-480l132.7 135.92ZM529.23-160H560v-640h-30.77v640Z" />
    </svg>
  )
}
