import type { SVGProps, JSX } from 'react'

export default function PageFooterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-105.87v-78.65H854.7v78.65H105.87Zm0-178.65V-854.7H854.7v570.18H105.87Z" />
    </svg>
  )
}
