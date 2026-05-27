import type { SVGProps } from 'react'

export default function ArrowInsert({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M719-279 301-696v390h-22v-428h428v22H317l417 418-15 15Z" />
    </svg>
  )
}
