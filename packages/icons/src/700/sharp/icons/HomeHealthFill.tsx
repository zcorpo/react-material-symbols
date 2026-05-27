import type { SVGProps, JSX } from 'react'

export default function HomeHealthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M413-273h134v-100h100v-134H547v-100H413v100H313v134h100v100ZM135-95v-518l345-259 346 259v518H135Z" />
    </svg>
  )
}
