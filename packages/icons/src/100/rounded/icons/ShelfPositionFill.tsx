import type { SVGProps } from 'react'

export default function ShelfPositionFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M226-172q-21.5 0-37.75-16.25T172-226v-121h616v121q0 21.5-16.25 37.75T734-172H226Zm411-197v-419h97q21.5 0 37.75 16.25T788-734v365H637Zm-465 0v-365q0-21.5 16.25-37.75T226-788h97v419H172Zm173 0v-419h270v419H345Z" />
    </svg>
  )
}
