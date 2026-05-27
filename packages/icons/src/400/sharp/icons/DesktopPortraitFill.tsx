import type { SVGProps } from 'react'

export default function DesktopPortraitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440-240h200v-360H440v360ZM320-360h40v-320h140v-40H320v360ZM800-80H160v-800h640v800Z" />
    </svg>
  )
}
