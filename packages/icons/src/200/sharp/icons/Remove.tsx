import type { SVGProps } from 'react'

export default function Remove({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-464.62v-30.76h480v30.76H240Z" />
    </svg>
  )
}
