import type { SVGProps } from 'react'

export default function PanoramaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h760v600H100Zm167.77-140h428.15L566.61-494.77 446.38-338.46l-81.61-108.61-97 127.07Z" />
    </svg>
  )
}
