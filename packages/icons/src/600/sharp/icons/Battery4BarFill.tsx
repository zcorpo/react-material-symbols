import type { SVGProps } from 'react'

export default function Battery4BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M342.26-496.52h275.48v-254.39H342.26v254.39ZM262.48-64.74V-830.7h127.91v-64h179.22v64h127.91v765.96H262.48Z" />
    </svg>
  )
}
