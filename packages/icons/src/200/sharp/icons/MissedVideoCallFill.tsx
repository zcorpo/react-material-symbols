import type { SVGProps } from 'react'

export default function MissedVideoCallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M139.23-200v-560h560v257.31l121.54-121.54v287.69L699.23-458.08V-200h-560ZM449-352.54l150.38-151.15-22.23-22.23L449-397 296-550.77h104.62v-30.77H242.31v155.39h30.77v-103.08L449-352.54Z" />
    </svg>
  )
}
