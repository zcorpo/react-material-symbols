import type { SVGProps } from 'react'

export default function ViewComfyAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M69.26-549.26V-891.3H411.3v342.04H69.26Zm0 480V-411.3H411.3v342.04H69.26Zm480-480V-891.3H891.3v342.04H549.26Zm0 480V-411.3H891.3v342.04H549.26Z" />
    </svg>
  )
}
