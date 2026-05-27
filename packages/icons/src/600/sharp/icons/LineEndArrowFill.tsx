import type { SVGProps } from 'react'

export default function LineEndArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M431.52-184.74v-255.65H70.39v-79.22h361.13v-255.65L895.83-480 431.52-184.74Z" />
    </svg>
  )
}
