import type { SVGProps, JSX } from 'react'

export default function VariableAdd({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M572-332H172v-296h616v80h-22v-58H194v252h378v22Zm-378-22v-252 252Zm572 142v-120H646v-22h120v-120h22v120h120v22H788v120h-22Z" />
    </svg>
  )
}
