import type { SVGProps } from 'react'

export default function TvNextFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m791-60-47-46 124-124-123-123 46-46 170 169L791-60Zm-461-60v-80H80v-640h800v357H686v283h-56v80H330Z" />
    </svg>
  )
}
