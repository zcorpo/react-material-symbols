import type { SVGProps, JSX } from 'react'

export default function ArrowCoolDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-132 234-378l15-16 220 221v-290h22v291l220-221 15 15-246 246Zm-11-405v-126h22v126h-22Zm0-200v-92h22v92h-22Z" />
    </svg>
  )
}
