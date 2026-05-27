import type { SVGProps } from 'react'

export default function ResumeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M213.43-213.43v-533.14h79.22v533.14h-79.22Zm193.22 0L844.78-480 406.65-746.57v533.14Z" />
    </svg>
  )
}
