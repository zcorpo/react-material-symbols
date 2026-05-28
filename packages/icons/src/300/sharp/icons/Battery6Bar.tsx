import type { SVGProps, JSX } from 'react'

export default function Battery6Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M297.69-100v-702.15h108.46V-860h147.7v57.85h108.46V-100H297.69Zm45.39-564.15h273.84v-93H343.08v93Z" />
    </svg>
  )
}
