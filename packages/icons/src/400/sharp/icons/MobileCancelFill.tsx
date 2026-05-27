import type { SVGProps } from 'react'

export default function MobileCancelFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m368-326 112-112 112 112 42-42-112-112 112-112-42-42-112 112-112-112-42 42 112 112-112 112 42 42ZM200-40v-880h558v210h42v173h-42v497H200Z" />
    </svg>
  )
}
