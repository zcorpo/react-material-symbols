import type { SVGProps } from 'react'

export default function MobileArrowUpRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m383.85-351.62 160.77-160.77v123H590v-200.99H389V-545h124L351.85-384.23l32 32.61ZM220-60v-840h519.92v203.08H780v155.69h-40.08V-60H220Z" />
    </svg>
  )
}
