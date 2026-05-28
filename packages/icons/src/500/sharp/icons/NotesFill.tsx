import type { SVGProps, JSX } from 'react'

export default function NotesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-231.15v-68.37h492.2v68.37h-492.2Zm0-214.78v-68.14h732.2v68.14h-732.2Zm0-214.55v-68.37h732.2v68.37h-732.2Z" />
    </svg>
  )
}
