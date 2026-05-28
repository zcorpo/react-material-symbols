import type { SVGProps, JSX } from 'react'

export default function CastleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M66-146v-425h22v80h141v-323h22v80h138v-80h22v80h138v-80h22v80h138v-80h22v323h141v-80h22v425H589v-203H371v203H66Zm323-363h22v-75h-22v75Zm160 0h22v-75h-22v75Z" />
    </svg>
  )
}
