import type { SVGProps, JSX } from 'react'

export default function Icon1xMobiledataBadgeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M282-280h60v-399H200v60h82v339Zm178 0h65l85-154 87 154h64L646-486l108-194h-65l-79 143-80-143h-65l109 194-114 206ZM40-120v-720h880v720H40Z" />
    </svg>
  )
}
