import type { SVGProps } from 'react'

export default function ArrowDropUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m342-426 138-138 138 138H342Z" />
    </svg>
  )
}
