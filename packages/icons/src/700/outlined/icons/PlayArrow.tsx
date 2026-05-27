import type { SVGProps } from 'react'

export default function PlayArrow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M295-157v-652l512 326-512 326Zm94-326Zm0 154 243-154-243-154v308Z" />
    </svg>
  )
}
