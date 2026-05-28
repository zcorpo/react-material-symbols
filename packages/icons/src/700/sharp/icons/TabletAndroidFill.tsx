import type { SVGProps, JSX } from 'react'

export default function TabletAndroidFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M97-17v-926h766v926H97Zm311-119h164v-40H408v40ZM191-261h578v-498H191v498Z" />
    </svg>
  )
}
