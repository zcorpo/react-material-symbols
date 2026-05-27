import type { SVGProps } from 'react'

export default function ArrowBack2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M588-293 296-479l292-186v372Zm-22-186Zm0 145v-290L336-479l230 145Z" />
    </svg>
  )
}
