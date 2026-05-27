import type { SVGProps } from 'react'

export default function ViewComfyAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M61-541v-359h359v359H61Zm0 480v-359h359v359H61Zm480-480v-359h359v359H541Zm0 480v-359h359v359H541Z" />
    </svg>
  )
}
