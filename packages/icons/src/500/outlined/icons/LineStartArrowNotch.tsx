import type { SVGProps } from 'react'

export default function LineStartArrowNotch({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M523.59-193.54 73.3-480l450.29-286.46-148.94 252.39h499.42v68.14H374.65l148.94 252.39Z" />
    </svg>
  )
}
