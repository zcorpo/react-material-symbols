import type { SVGProps, JSX } from 'react'

export default function LaptopWindowsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M0-139.09v-66.78h146.09v-42H66.87V-854.7H893.7v606.83h-79.79v42H960v66.78H0Z" />
    </svg>
  )
}
