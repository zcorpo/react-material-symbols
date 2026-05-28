import type { SVGProps, JSX } from 'react'

export default function TransitEnterexitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M254.62-252.31v-376h77.3v239.7L647-703.69l59 59.38-314.69 314.7h239.3v77.3H254.62Z" />
    </svg>
  )
}
