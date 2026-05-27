import type { SVGProps } from 'react'

export default function ArticleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M305-306h227v-22H305v22Zm0-163h350v-22H305v22Zm0-163h350v-22H305v22ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
