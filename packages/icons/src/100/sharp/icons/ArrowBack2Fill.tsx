import type { SVGProps } from 'react'

export default function ArrowBack2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M588-293 296-479l292-186v372Z" />
    </svg>
  )
}
