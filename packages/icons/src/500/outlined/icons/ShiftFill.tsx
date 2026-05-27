import type { SVGProps } from 'react'

export default function ShiftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M316.38-116.41v-310H112.59L480-885.74l367.65 459.33H643.59v310H316.38Z" />
    </svg>
  )
}
