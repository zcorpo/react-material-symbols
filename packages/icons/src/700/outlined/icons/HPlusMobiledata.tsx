import type { SVGProps, JSX } from 'react'

export default function HPlusMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M149-274v-412h71v170h249v-170h72v412h-72v-170H220v170h-71Zm586-74v-96.5h-96V-516h96v-96h71v96.5h97v71.5h-96.5v96H735Z" />
    </svg>
  )
}
