import type { SVGProps } from 'react'

export default function ProcessChart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m128-204-84-43 259-509 83 42-258 510Zm264 0-84-43 259-509 83 42-258 510Zm264 0-84-43 259-509 83 42-258 510Z" />
    </svg>
  )
}
