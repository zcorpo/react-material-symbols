import type { SVGProps } from 'react'

export default function Filter7({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M452-379h24l145-328v-22H436v22h161L452-379Zm-198 99v-548h548v548H254Zm22-22h504v-504H276v504ZM158-184v-516h22v494h494v22H158Zm118-118v-504 504Z" />
    </svg>
  )
}
