import type { SVGProps, JSX } from 'react'

export default function Receipt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-144v-672l48 32 52-32 52 32 52-32 52 32 52-32 52 32 52-32 52 32 52-32 52 32 48-32v672l-48-32-52 32-52-32-52 32-52-32-52 32-52-32-52 32-52-32-52 32-52-32-48 32Zm93-199h431v-22H265v22Zm0-126h431v-22H265v22Zm0-127h431v-22H265v22Zm-71 404h572v-576H194v576Zm0-576v576-576Z" />
    </svg>
  )
}
