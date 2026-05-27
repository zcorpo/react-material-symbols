import type { SVGProps } from 'react'

export default function NewsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h447l169 169v447H172Zm431-594v163h163L603-766ZM306-335h348v-22H306v22Zm0-268h174v-22H306v22Zm0 134h348v-22H306v22Z" />
    </svg>
  )
}
