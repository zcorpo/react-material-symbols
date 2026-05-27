import type { SVGProps, JSX } from 'react'

export default function HighlighterSize3({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m303.22-163.22-141-141q-11.83-11.82-11.83-27.78t11.83-27.78l437-438q11.82-11.83 28.28-12.11 16.46-.28 28.28 12.11l141 142q11.83 11.82 11.83 27.78t-11.83 27.78l-437 437q-11.82 11.83-28.28 11.83t-28.28-11.83Z" />
    </svg>
  )
}
