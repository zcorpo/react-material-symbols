import type { SVGProps, JSX } from 'react'

export default function FileCopyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M206-171v-772h432l247 247v525H206Zm413-510h172L619-849v168ZM52-17v-704h94v610h505v94H52Z" />
    </svg>
  )
}
