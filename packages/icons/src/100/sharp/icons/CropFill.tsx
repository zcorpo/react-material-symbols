import type { SVGProps, JSX } from 'react'

export default function CropFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M711-66v-162.5H228V-711H66v-22h162v-161h22v644h644v22H733v162h-22Zm0-206v-439H272v-22h461v461h-22Z" />
    </svg>
  )
}
