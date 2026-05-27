import type { SVGProps } from 'react'

export default function TableRowsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M788-172H172v-187h616v187Zm0-209H172v-198h616v198Zm0-220H172v-187h616v187Z" />
    </svg>
  )
}
