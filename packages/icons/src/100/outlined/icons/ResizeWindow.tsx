import type { SVGProps } from 'react'

export default function ResizeWindow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M772-172 172-772l16-16 600 600-16 16Zm-385 0L172-387l16-15 215 214-16 16Z" />
    </svg>
  )
}
