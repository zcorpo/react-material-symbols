import type { SVGProps, JSX } from 'react'

export default function TrendingUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m122-218-67-67 321-319 167 167 203-205H628v-95h278v278h-94v-115L542-303 375-470 122-218Z" />
    </svg>
  )
}
