import type { SVGProps } from 'react'

export default function ChangeHistory({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m152.31-200 327.92-524.62L807.69-200H152.31ZM207-230.77h546L480.23-666.54 207-230.77Zm273-217.61Z" />
    </svg>
  )
}
