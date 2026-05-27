import type { SVGProps } from 'react'

export default function Battery2Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M297.69-100v-702.15h108.46V-860h147.7v57.85h108.46V-100H297.69Zm45.39-217.15h273.84v-440H343.08v440Z" />
    </svg>
  )
}
