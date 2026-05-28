import type { SVGProps, JSX } from 'react'

export default function ArrowTopLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M700-160v-415H274l162 162-43 43-233-233 234-237 43 43-162 162h485v475h-60Z" />
    </svg>
  )
}
