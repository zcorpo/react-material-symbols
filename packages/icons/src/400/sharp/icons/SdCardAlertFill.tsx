import type { SVGProps } from 'react'

export default function SdCardAlertFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M445-289h70v-70h-70v70Zm7-143h60v-205h-60v205ZM800-80H160v-561l239-239h401v800Z" />
    </svg>
  )
}
