import type { SVGProps } from 'react'

export default function DocsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M499-880v259h261v541H200v-800h299Zm60 0 201 199H559v-199ZM350-228h177v-60H350v60Zm0-140h260v-60H350v60Z" />
    </svg>
  )
}
