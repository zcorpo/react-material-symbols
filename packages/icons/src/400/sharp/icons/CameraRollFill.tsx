import type { SVGProps } from 'react'

export default function CameraRollFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-760h120v-80h240v80h120v80h320v600H560v80H80Zm300-200h60v-60h-60v60Zm0-300h60v-60h-60v60Zm160 300h60v-60h-60v60Zm0-300h60v-60h-60v60Zm160 300h60v-60h-60v60Zm0-300h60v-60h-60v60Z" />
    </svg>
  )
}
