import type { SVGProps } from 'react'

export default function CheckSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M400-293 230-464l67-66 103 103 264-263 66 66-330 331Z" />
    </svg>
  )
}
