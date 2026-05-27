import type { SVGProps } from 'react'

export default function ViewCozyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-540v-248h248v248H172Zm0 368v-248h248v248H172Zm368-368v-248h248v248H540Zm0 368v-248h248v248H540Z" />
    </svg>
  )
}
