import type { SVGProps } from 'react'

export default function MobileArrowRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M326.54-503.08v45.39h221.23L466.08-376l32 32 136-136.38L498.85-616l-32 32 80.92 80.92H326.54ZM220-60v-840h519.92v203.08H780v155.69h-40.08V-60H220Z" />
    </svg>
  )
}
