import type { SVGProps } from 'react'

export default function LineEndSquare({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M544-364h232v-232H544v232Zm-22 22v-127H136v-22h386v-127h276v276H522Zm138-138Z" />
    </svg>
  )
}
