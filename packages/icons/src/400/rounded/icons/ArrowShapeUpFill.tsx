import type { SVGProps, JSX } from 'react'

export default function ArrowShapeUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-150v-200H167q-14 0-20.5-13t2.5-24l308-384q9-11 23-11t23 11l308 384q9 11 2.5 24T793-350H640v200q0 13-8.5 21.5T610-120H350q-13 0-21.5-8.5T320-150Z" />
    </svg>
  )
}
