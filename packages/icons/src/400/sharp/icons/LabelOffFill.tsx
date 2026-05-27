import type { SVGProps } from 'react'

export default function LabelOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M747-300 247-800h394l240 320-134 180ZM867 18 685-160H80v-609l-94-94 43-42L910-24l-43 42Z" />
    </svg>
  )
}
