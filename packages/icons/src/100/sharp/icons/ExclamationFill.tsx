import type { SVGProps } from 'react'

export default function ExclamationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-390v-314h22v314h-22Zm0 134v-22h22v22h-22Z" />
    </svg>
  )
}
