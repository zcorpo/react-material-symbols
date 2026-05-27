import type { SVGProps, JSX } from 'react'

export default function ScreenshotRegion({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M690-35v-140H550v-95h140v-140h95v140h140v95H785v140h-95ZM175-175v-235h95v140h140v95H175Zm0-375v-235h235v95H270v140h-95Zm515 0v-140H550v-95h235v235h-95Z" />
    </svg>
  )
}
