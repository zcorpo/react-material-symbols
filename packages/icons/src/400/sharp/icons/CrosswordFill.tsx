import type { SVGProps, JSX } from 'react'

export default function CrosswordFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M356-79v-237h247v237H356ZM80-356v-247h236v247H80Zm276 0v-247h247v247H356Zm287 0v-247h237v247H643Zm0-287v-237h237v237H643Z" />
    </svg>
  )
}
