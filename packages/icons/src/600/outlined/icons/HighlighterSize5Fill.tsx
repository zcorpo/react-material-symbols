import type { SVGProps } from 'react'

export default function HighlighterSize5Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m403.22-63.22-340-340Q51.39-415.04 51.39-431t11.83-27.78l438-438q10.82-10.83 27.28-10.83t28.28 11.83l340 339q11.83 11.82 11.83 27.78t-11.83 27.78l-438 438Q446.96-51.39 431-51.39t-27.78-11.83Z" />
    </svg>
  )
}
