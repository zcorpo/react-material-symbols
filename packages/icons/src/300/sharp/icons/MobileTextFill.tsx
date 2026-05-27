import type { SVGProps, JSX } from 'react'

export default function MobileTextFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M327.69-502.08h304.54v-45.38H327.69v45.38ZM220-60v-840h519.92v203.08H780v155.69h-40.08V-60H220Z" />
    </svg>
  )
}
