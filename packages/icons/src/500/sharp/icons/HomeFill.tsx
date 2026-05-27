import type { SVGProps } from 'react'

export default function HomeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-114.02v-489.01L480-847.65l326.22 244.54v489.09H561.43v-287.41H398.57v287.41H154.02Z" />
    </svg>
  )
}
