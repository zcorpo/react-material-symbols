import type { SVGProps, JSX } from 'react'

export default function WebAssetFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm60-60h680v-436H140v436Z" />
    </svg>
  )
}
