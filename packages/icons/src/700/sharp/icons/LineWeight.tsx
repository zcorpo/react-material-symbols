import type { SVGProps } from 'react'

export default function LineWeight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-102v-63h771v63H95Zm0-111v-95h771v95H95Zm0-144v-101h771v101H95Zm0-150v-351h771v351H95Z" />
    </svg>
  )
}
