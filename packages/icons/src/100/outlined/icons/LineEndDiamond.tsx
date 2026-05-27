import type { SVGProps } from 'react'

export default function LineEndDiamond({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m600-348 132-132-132-132-132 132 132 132Zm0 32L447-469H136v-22h311l153-153 164 164-164 164Zm0-164Z" />
    </svg>
  )
}
