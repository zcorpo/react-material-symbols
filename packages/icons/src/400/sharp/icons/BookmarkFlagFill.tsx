import type { SVGProps } from 'react'

export default function BookmarkFlagFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M385-405h50v-120h175l-56.25-75L610-675H385v270ZM200-120v-725h560v725L480-240 200-120Z" />
    </svg>
  )
}
