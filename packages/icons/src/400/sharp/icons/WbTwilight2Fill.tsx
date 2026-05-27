import type { SVGProps } from 'react'

export default function WbTwilight2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-170v-60h800v60H80Zm120-150q0-117 81.5-198.5T480-600q117 0 198.5 81.5T760-320H200Z" />
    </svg>
  )
}
