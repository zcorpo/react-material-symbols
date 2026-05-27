import type { SVGProps } from 'react'

export default function MarginFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm176-504h90v-90h-90v90Zm164-1 91 1 1-91-91-1-1 91Zm165 1h90v-90h-90v90ZM271-435h90v-90h-90v90Zm164-1 91 1 1-91-91-1-1 91Zm165 1h90v-90h-90v90Z" />
    </svg>
  )
}
