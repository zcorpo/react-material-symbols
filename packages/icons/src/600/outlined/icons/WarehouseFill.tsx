import type { SVGProps } from 'react'

export default function WarehouseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M67-107v-582.04l413-165.09 413 165.09V-107H633.78v-307H326.22v307H67Zm309.22 0v-60h60v60h-60ZM450-227v-60h60v60h-60Zm73.78 120v-60h60v60h-60Z" />
    </svg>
  )
}
