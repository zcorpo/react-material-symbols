import type { SVGProps, JSX } from 'react'

export default function HouseSidingFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M183-95v-422L72-432l-57-74 465-360 466 360-58 74-112-87v424h-94v-90H278v90h-95Zm95-349h404v-85H278v85Zm0 172h404v-85H278v85Zm30-344h344L480-749 308-616Z" />
    </svg>
  )
}
