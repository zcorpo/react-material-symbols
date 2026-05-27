import type { SVGProps } from 'react'

export default function KitchenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M327-643h22v-99h-22v99Zm0 314h22v-165h-22v165Zm153-151ZM212-132v-425h536v425H212Zm0-447v-249h536v249H212Z" />
    </svg>
  )
}
