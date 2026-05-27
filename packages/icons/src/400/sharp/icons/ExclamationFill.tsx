import type { SVGProps } from 'react'

export default function ExclamationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M450-380v-380h60v380h-60Zm0 180v-60h60v60h-60Z" />
    </svg>
  )
}
