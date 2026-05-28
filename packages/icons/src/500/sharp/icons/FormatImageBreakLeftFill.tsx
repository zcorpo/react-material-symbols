import type { SVGProps, JSX } from 'react'

export default function FormatImageBreakLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-114.02v-67.89h732.2v67.89h-732.2Zm0-165.72v-400.52H514.3v400.52H114.02Zm0-498.35v-68.13h732.2v68.13h-732.2Z" />
    </svg>
  )
}
