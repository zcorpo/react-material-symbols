import type { SVGProps } from 'react'

export default function Stat0({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-228.46 228.46-480 480-731.54 731.54-480 480-228.46Zm0-61.39L670.15-480 480-670.15 289.85-480 480-289.85ZM480-480Z" />
    </svg>
  )
}
