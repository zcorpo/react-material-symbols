import type { SVGProps } from 'react'

export default function HMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M306-280v-400h22v189h304v-189h22v400h-22v-189H328v189h-22Z" />
    </svg>
  )
}
