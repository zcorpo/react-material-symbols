import type { SVGProps, JSX } from 'react'

export default function SubdirectoryArrowRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m566-114.02-48.74-48.74 158.17-158.17H194.02v-485.29h68.13v417.15h414.28L518.26-547.24l48.98-48.74L806.22-357 566-114.02Z" />
    </svg>
  )
}
