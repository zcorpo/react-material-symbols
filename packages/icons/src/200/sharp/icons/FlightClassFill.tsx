import type { SVGProps, JSX } from 'react'

export default function FlightClassFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M504.62-480v-280H680v280H504.62ZM680-280H344.62L240-639.15V-760h30.77v114.15l98.08 335.08H680V-280ZM336.15-160v-30.77h343.08V-160H336.15Z" />
    </svg>
  )
}
