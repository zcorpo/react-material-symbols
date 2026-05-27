import type { SVGProps } from 'react'

export default function LabelImportantFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-154.02 319.65-480 74.02-806.22h566.57L886.22-480 641.35-154.02H74.02Z" />
    </svg>
  )
}
