import type { SVGProps, JSX } from 'react'

export default function OverviewKeyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-200v-560h560v560H40Zm660 0v-560h60v560h-60Zm160 0v-560h60v560h-60Z" />
    </svg>
  )
}
