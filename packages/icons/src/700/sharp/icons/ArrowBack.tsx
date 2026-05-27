import type { SVGProps } from 'react'

export default function ArrowBack({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m315-433 232 232-67 66-345-345 345-346 67 67-232 232h511v94H315Z" />
    </svg>
  )
}
