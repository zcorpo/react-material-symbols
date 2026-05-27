import type { SVGProps, JSX } from 'react'

export default function StylusHighlighterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M294.08-338.31V-820h71.31l299.15 144.46v337.23H294.08ZM180-140l35.92-96h528.16L780-140H180Z" />
    </svg>
  )
}
