import type { SVGProps } from 'react'

export default function PlayPauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M226-368v-224l163 112-163 112Zm326 22v-268h22v268h-22Zm160 0v-268h22v268h-22Z" />
    </svg>
  )
}
