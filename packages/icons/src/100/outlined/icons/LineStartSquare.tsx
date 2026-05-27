import type { SVGProps } from 'react'

export default function LineStartSquare({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M184-364h232v-232H184v232Zm254 22H162v-276h276v127h386v22H438v127ZM300-480Z" />
    </svg>
  )
}
