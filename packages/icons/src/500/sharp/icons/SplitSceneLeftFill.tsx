import type { SVGProps } from 'react'

export default function SplitSceneLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M574.07-154.02v-652.2h272.15v652.2H574.07Zm-128.14 80v-80H114.02v-652.2h331.91v-80h68.14v812.2h-68.14Z" />
    </svg>
  )
}
