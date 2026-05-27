import type { SVGProps, JSX } from 'react'

export default function Sliders({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M58-337v-286h844v286H58Zm508-83h257v-120H566v120Z" />
    </svg>
  )
}
