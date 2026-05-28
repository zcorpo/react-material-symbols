import type { SVGProps, JSX } from 'react'

export default function StickyNoteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M622.85-160H160v-640h640v462.85L622.85-160Zm-18.47-30.77 164.85-164.85H604.38v164.85ZM464.62-340.23h30.76V-589h124.39v-30.77H340.23V-589h124.39v248.77Z" />
    </svg>
  )
}
