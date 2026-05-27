import type { SVGProps } from 'react'

export default function ToastFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M250-250h460v-45.38H250V-250ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
