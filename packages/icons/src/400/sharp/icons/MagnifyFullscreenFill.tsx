import type { SVGProps, JSX } from 'react'

export default function MagnifyFullscreenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm490-240h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Z" />
    </svg>
  )
}
