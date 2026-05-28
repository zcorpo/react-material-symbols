import type { SVGProps, JSX } from 'react'

export default function SkipPreviousFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M173-193v-574h94v574h-94Zm614 0L370-480l417-287v574Z" />
    </svg>
  )
}
