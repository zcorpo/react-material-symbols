import type { SVGProps, JSX } from 'react'

export default function Mobile3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M353.08-190h253.77v-45.38H353.08V-190ZM220-60v-840h519.92v203.08H780v155.69h-40.08V-60H220Z" />
    </svg>
  )
}
