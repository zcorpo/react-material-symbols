import type { SVGProps, JSX } from 'react'

export default function HardwareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M335-494v-121H135q0-109.28 76.36-185.64Q287.71-877 397-877h229v142l140-142h60v394h-60L626-625v131H335Zm0 411v-317h291v317H335Z" />
    </svg>
  )
}
