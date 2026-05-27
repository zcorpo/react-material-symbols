import type { SVGProps } from 'react'

export default function MagnifyFullscreenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm498-248h94v-90h90v-94h-90v-90h-94v90h-90v94h90v90Z" />
    </svg>
  )
}
