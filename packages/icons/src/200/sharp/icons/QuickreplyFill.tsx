import type { SVGProps, JSX } from 'react'

export default function QuickreplyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M759.85-129.23V-280h-40v-184.62h85.77l-40.31 133.85h70.07l-75.53 201.54ZM120-156.92V-840h720v273.85H618.31V-280H243.08L120-156.92Z" />
    </svg>
  )
}
