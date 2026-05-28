import type { SVGProps, JSX } from 'react'

export default function Window({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M846.22-114.02h-732.2v-732.2h732.2v732.2ZM510-450v267.85h267.85V-450H510Zm0-60h267.85v-267.85H510V-510Zm-60 0v-267.85H182.15V-510H450Zm0 60H182.15v267.85H450V-450Z" />
    </svg>
  )
}
