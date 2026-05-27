import type { SVGProps } from 'react'

export default function Flag2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M252-132v-656h536l-88 160 88 160H274v336h-22Z" />
    </svg>
  )
}
