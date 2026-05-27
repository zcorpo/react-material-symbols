import type { SVGProps } from 'react'

export default function UnfoldLess({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m352-196-16-16 144-144 144 144-16 16-128-128-128 128Zm128-408L336-748l16-16 128 128 128-128 16 16-144 144Z" />
    </svg>
  )
}
