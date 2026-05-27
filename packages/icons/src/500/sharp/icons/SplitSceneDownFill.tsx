import type { SVGProps } from 'react'

export default function SplitSceneDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-574.07v-272.15h652.2v272.15h-652.2Zm0 460.05v-331.91h-80v-68.14h812.2v68.14h-80v331.91h-652.2Z" />
    </svg>
  )
}
