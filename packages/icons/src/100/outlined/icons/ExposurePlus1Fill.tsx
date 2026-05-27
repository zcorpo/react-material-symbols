import type { SVGProps, JSX } from 'react'

export default function ExposurePlus1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M269-312v-123H146v-22h123v-123h22v123h123v22H291v123h-22Zm397 58v-423l-106 74-13-17 123-86h18v452h-22Z" />
    </svg>
  )
}
