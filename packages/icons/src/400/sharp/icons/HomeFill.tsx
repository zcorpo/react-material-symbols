import type { SVGProps } from 'react'

export default function HomeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
    </svg>
  )
}
