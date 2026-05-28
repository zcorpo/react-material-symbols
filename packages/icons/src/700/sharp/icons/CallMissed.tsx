import type { SVGProps, JSX } from 'react'

export default function CallMissed({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M481-242 189-534v188H95v-353h345v95H253l228 229 319-319 67 67-386 385Z" />
    </svg>
  )
}
