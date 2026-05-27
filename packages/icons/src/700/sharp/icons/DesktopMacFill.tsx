import type { SVGProps } from 'react'

export default function DesktopMacFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M323-95v-46l84-85H55v-640h851v640H554l84 85v46H323Z" />
    </svg>
  )
}
