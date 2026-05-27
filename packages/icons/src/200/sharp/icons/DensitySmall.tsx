import type { SVGProps } from 'react'

export default function DensitySmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-120v-30.77h640V-120H160Zm0-230.08v-30.77h640v30.77H160Zm0-229.07v-30.77h640v30.77H160Zm0-230.08V-840h640v30.77H160Z" />
    </svg>
  )
}
