import type { SVGProps, JSX } from 'react'

export default function PageHeaderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-775.48v-79.22H854.7v79.22H105.87Zm0 669.61v-569.61H854.7v569.61H105.87Z" />
    </svg>
  )
}
