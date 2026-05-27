import type { SVGProps, JSX } from 'react'

export default function StylusHighlighterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M315-358v-430h67l261 126v304H315ZM212-172l31-80h474l31 80H212Z" />
    </svg>
  )
}
