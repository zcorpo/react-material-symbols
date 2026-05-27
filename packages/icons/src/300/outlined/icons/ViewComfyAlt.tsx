import type { SVGProps } from 'react'

export default function ViewComfyAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-560v-300h300v300H100Zm45.39-45.38h209.23v-209.23H145.39v209.23ZM100-100v-300h300v300H100Zm45.39-45.39h209.23v-209.23H145.39v209.23ZM560-560v-300h300v300H560Zm45.38-45.38h209.23v-209.23H605.38v209.23ZM560-100v-300h300v300H560Zm45.38-45.39h209.23v-209.23H605.38v209.23ZM354.62-605.38Zm0 250.76Zm250.76-250.76Zm0 250.76Z" />
    </svg>
  )
}
