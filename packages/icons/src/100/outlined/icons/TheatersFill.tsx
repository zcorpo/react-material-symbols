import type { SVGProps, JSX } from 'react'

export default function TheatersFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M186-146v-668h22v74h144v-74h256v74h144v-74h22v668h-22v-74H608v74H352v-74H208v74h-22Zm22-96h144v-144H208v144Zm0-166h144v-144H208v144Zm0-166h144v-144H208v144Zm400 332h144v-144H608v144Zm0-166h144v-144H608v144Zm0-166h144v-144H608v144Z" />
    </svg>
  )
}
