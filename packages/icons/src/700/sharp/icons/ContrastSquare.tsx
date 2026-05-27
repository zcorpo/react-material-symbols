import type { SVGProps } from 'react'

export default function ContrastSquare({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm94-94h582v-582L189-189Zm25-419h76v76h62v-76h76v-62h-76v-76h-62v76h-76v62Zm521 291H497v-62h238v62Z" />
    </svg>
  )
}
