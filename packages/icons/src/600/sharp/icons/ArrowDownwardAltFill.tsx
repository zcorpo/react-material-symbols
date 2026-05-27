import type { SVGProps } from 'react'

export default function ArrowDownwardAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M479-226.43 224.43-481 280-537.57l160.39 157.39v-386.43h79.22v388.43L678-536.57 733.57-481 479-226.43Z" />
    </svg>
  )
}
