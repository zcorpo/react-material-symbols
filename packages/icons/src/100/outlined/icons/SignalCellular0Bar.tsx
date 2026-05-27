import type { SVGProps } from 'react'

export default function SignalCellular0Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m132-132 696-696v696H132Zm53-22h621v-621L185-154Z" />
    </svg>
  )
}
