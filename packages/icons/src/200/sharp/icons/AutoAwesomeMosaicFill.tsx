import type { SVGProps, JSX } from 'react'

export default function AutoAwesomeMosaicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M444.85-160H160v-640h284.85v640Zm70.77-355.62V-800H800v284.38H515.62Zm0 355.62v-284.85H800V-160H515.62Z" />
    </svg>
  )
}
