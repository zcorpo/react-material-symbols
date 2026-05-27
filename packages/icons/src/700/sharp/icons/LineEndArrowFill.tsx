import type { SVGProps } from 'react'

export default function LineEndArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M425-173v-260H63v-94h362v-260l483 307-483 307Z" />
    </svg>
  )
}
