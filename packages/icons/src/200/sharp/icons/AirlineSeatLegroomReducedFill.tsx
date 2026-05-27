import type { SVGProps } from 'react'

export default function AirlineSeatLegroomReducedFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M572.38-150.77v-62.85l55.24-171H235.38V-820h190.77v284.62h283.08l26.69 36.46-94.23 289.69h110.62v58.46H572.38ZM470.77-300h-320v-520h30.77v489.23h289.23V-300Z" />
    </svg>
  )
}
