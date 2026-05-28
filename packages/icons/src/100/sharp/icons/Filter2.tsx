import type { SVGProps, JSX } from 'react'

export default function Filter2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M436-379h185v-22H458v-142h163v-186H436v22h163v142H436v186Zm-182 99v-548h548v548H254Zm22-22h504v-504H276v504ZM158-184v-516h22v494h494v22H158Zm118-118v-504 504Z" />
    </svg>
  )
}
