import type { SVGProps } from 'react'

export default function ArrowUpwardAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M452-244v-400L282-477l-42-43 241-241 241 241-42 42-168-168v402h-60Z" />
    </svg>
  )
}
