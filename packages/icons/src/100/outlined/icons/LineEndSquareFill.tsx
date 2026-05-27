import type { SVGProps } from 'react'

export default function LineEndSquareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M522-342v-127H136v-22h386v-127h276v276H522Z" />
    </svg>
  )
}
