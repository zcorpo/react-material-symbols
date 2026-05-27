import type { SVGProps, JSX } from 'react'

export default function Battery1BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M262.48-65.87V-830.7h127.91v-64h179.22v64h127.91v764.83H262.48Zm79.78-166.65h275.48v-518.39H342.26v518.39Z" />
    </svg>
  )
}
