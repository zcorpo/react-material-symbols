import type { SVGProps } from 'react'

export default function ComputerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55.39-150.77v-45.39h849.22v45.39H55.39Zm44.61-100v-560h760v560H100Z" />
    </svg>
  )
}
