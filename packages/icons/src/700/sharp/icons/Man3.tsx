import type { SVGProps } from 'react'

export default function Man3({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M397-62v-277h-80v-330h326v330h-80v277H397Zm83-658-94-94 94-95 94 95-94 94Z" />
    </svg>
  )
}
