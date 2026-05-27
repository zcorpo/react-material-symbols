import type { SVGProps, JSX } from 'react'

export default function ArrowTopLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M691-135v-423H315l145 146-68 67-257-258 259-263 67 67-145 147h470v517h-95Z" />
    </svg>
  )
}
