import type { SVGProps, JSX } from 'react'

export default function Icon1k({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M493-360h50v-90l84.49 90H692L581.35-480 692-600h-64.51L543-510v-90h-50v240Zm-157 0h50v-240H273v50h63v190ZM95-95v-771h771v771H95Zm94-94h582v-582H189v582Zm0 0v-582 582Z" />
    </svg>
  )
}
