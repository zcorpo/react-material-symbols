import type { SVGProps } from 'react'

export default function ChipsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M247-445.78h466v-72.44H247v72.44ZM105.87-105.87V-854.7H854.7v748.83H105.87Z" />
    </svg>
  )
}
