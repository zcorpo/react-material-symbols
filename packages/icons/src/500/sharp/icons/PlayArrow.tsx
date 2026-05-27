import type { SVGProps } from 'react'

export default function PlayArrow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M314.02-192v-582l457.22 291-457.22 291Zm68.13-291Zm0 166.93L644.93-483 382.15-649.93v333.86Z" />
    </svg>
  )
}
