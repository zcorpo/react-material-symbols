import type { SVGProps, JSX } from 'react'

export default function More({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320.3-160 80-480l239-320h562v640H320.3ZM155-480l195 260h471v-520H350L155-480Zm333 0Zm-134 41h82v-82h-82v82Zm152 0h82v-82h-82v82Zm152 0h82v-82h-82v82Z" />
    </svg>
  )
}
