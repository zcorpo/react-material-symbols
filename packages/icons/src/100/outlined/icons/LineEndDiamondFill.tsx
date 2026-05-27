import type { SVGProps } from 'react'

export default function LineEndDiamondFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M600-316 447-469H136v-22h311l153-153 164 164-164 164Z" />
    </svg>
  )
}
