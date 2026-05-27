import type { SVGProps } from 'react'

export default function Crop23({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-80v-800h480v800H240Zm60-60h360v-680H300v680Zm0 0v-680 680Z" />
    </svg>
  )
}
