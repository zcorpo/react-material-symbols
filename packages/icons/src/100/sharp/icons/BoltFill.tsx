import type { SVGProps } from 'react'

export default function BoltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m380-138 40-274H259l281-405-39 309h188L380-138Z" />
    </svg>
  )
}
