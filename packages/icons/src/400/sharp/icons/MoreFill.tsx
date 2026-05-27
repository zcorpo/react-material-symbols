import type { SVGProps, JSX } from 'react'

export default function MoreFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320.3-160 80-480l239-320h562v640H320.3ZM354-439h82v-82h-82v82Zm152 0h82v-82h-82v82Zm152 0h82v-82h-82v82Z" />
    </svg>
  )
}
