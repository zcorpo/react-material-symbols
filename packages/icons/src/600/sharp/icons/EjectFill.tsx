import type { SVGProps } from 'react'

export default function EjectFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180.78-180.78V-260h599v79.22h-599ZM182.43-352 480-800.13 777.57-352H182.43Z" />
    </svg>
  )
}
