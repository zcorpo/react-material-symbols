import type { SVGProps } from 'react'

export default function Looks4Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm440-182h71v-406h-71v165H425v-165h-71v237h181v169Z" />
    </svg>
  )
}
