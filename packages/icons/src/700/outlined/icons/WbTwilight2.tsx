import type { SVGProps, JSX } from 'react'

export default function WbTwilight2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M63-130v-94h834v94H63Zm225-260h384q-20-63-72.17-101.5t-120-38.5Q412-530 360-491.5T288-390Zm-105 87q0-129 85.25-221.5Q353.51-617 480-617t211.75 92.5Q777-432 777-303H183Zm297-87Z" />
    </svg>
  )
}
