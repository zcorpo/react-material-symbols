import type { SVGProps } from 'react'

export default function LineWeightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M250-250v-11h460v11H250Zm0-85v-22h460v22H250Zm0-96v-31h460v31H250Zm0-107v-172h460v172H250Z" />
    </svg>
  )
}
