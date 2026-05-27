import type { SVGProps, JSX } from 'react'

export default function AddCommentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M446.61-396.61h66.78v-130h130v-66.78h-130v-130h-66.78v130h-130v66.78h130v130ZM65.87-65.87V-894.7H894.7v668.83H225.87l-160 160Z" />
    </svg>
  )
}
