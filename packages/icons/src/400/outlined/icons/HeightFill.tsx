import type { SVGProps } from 'react'

export default function HeightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-120 320-280l42-42 88 87v-490l-88 87-42-42 160-160 160 160-43 43-87-88v490l88-87 42 42-160 160Z" />
    </svg>
  )
}
