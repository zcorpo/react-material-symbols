import type { SVGProps, JSX } from 'react'

export default function CropPortrait({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-80v-800h640v800H160Zm60-60h520v-680H220v680Zm0 0v-680 680Z" />
    </svg>
  )
}
