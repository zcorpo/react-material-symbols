import type { SVGProps } from 'react'

export default function BatteryChargingFull2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M97.31-297.31v-365.38H619L448.92-436.15v93.46h135.23l-8.3 45.38H97.31Zm592.46 0 26.08-154.23H596l152.15-211.15h2.08l-26.08 154.23H844L692.23-297.31h-2.46Z" />
    </svg>
  )
}
