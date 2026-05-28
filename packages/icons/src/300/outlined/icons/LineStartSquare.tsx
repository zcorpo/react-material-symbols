import type { SVGProps, JSX } from 'react'

export default function LineStartSquare({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M156.92-336.92h286.16v-286.16H156.92v286.16Zm331.54 45.38H111.54v-376.92h376.92v165.77h370v45.38h-370v165.77ZM300-480Z" />
    </svg>
  )
}
