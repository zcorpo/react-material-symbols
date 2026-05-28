import type { SVGProps, JSX } from 'react'

export default function DensityMediumFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-30.77h640V-160H160Zm0-304.62v-30.76h640v30.76H160Zm0-304.61V-800h640v30.77H160Z" />
    </svg>
  )
}
