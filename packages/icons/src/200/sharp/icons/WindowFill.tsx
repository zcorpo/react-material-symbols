import type { SVGProps } from 'react'

export default function WindowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M495.38-464.62H800V-160H495.38v-304.62Zm0-30.76V-800H800v304.62H495.38Zm-30.76 0H160V-800h304.62v304.62Zm0 30.76V-160H160v-304.62h304.62Z" />
    </svg>
  )
}
