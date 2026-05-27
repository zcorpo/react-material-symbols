import type { SVGProps } from 'react'

export default function WbTwilight2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M63-130v-94h834v94H63Zm120-173q0-129 85.25-221.5Q353.51-617 480-617t211.75 92.5Q777-432 777-303H183Z" />
    </svg>
  )
}
