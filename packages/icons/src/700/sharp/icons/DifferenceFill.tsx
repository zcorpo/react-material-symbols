import type { SVGProps, JSX } from 'react'

export default function DifferenceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M516-515h60v-84h84v-60h-84v-84h-60v84h-84v60h84v84Zm-84 122h228v-60H432v60ZM206-171v-772h432l247 247v525H206ZM52-17v-704h94v610h505v94H52Z" />
    </svg>
  )
}
