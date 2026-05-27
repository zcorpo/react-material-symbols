import type { SVGProps } from 'react'

export default function WidgetsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M687-443 443-687l244-244 244 244-244 244ZM53-515v-345h345v345H53ZM515-53v-345h345v345H515ZM53-53v-345h345v345H53Z" />
    </svg>
  )
}
