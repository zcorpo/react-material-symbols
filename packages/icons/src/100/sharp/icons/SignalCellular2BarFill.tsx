import type { SVGProps, JSX } from 'react'

export default function SignalCellular2BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m132-132 696-696v696H132Zm353-22h321v-621L485-454v300Z" />
    </svg>
  )
}
