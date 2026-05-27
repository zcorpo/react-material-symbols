import type { SVGProps, JSX } from 'react'

export default function StickyNoteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M645.06-105.87H105.87V-854.7H854.7v539.2L645.06-105.87Zm-41.15-79.22 171-171h-171v171Zm-157.3-132.52h66.78v-258h129v-66.78H317.61v66.78h129v258Z" />
    </svg>
  )
}
