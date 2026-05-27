import type { SVGProps } from 'react'

export default function SouthWest({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-200v-396h60v294l498-498 42 42-498 498h294v60H200Z" />
    </svg>
  )
}
