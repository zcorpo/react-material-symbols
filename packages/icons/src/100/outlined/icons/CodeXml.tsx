import type { SVGProps } from 'react'

export default function CodeXml({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-321 81-480l159-159 16 15-144 144 144 144-16 15Zm159 136-20-6 182-584 21 6-183 584Zm321-136-16-15 144-144-144-144 16-15 159 159-159 159Z" />
    </svg>
  )
}
