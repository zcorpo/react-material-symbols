import type { SVGProps, JSX } from 'react'

export default function TrendingDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M628-218v-94h118L543-517 376-350 55-670l67-67 253 253 167-167 270 271v-115h94v277H628Z" />
    </svg>
  )
}
