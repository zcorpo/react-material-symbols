import type { SVGProps, JSX } from 'react'

export default function DensitySmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-120v-30.77h640V-120H160Zm0-225.46v-30.77h640v30.77H160Zm0-238.31v-30.77h640v30.77H160Zm0-225.46V-840h640v30.77H160Z" />
    </svg>
  )
}
