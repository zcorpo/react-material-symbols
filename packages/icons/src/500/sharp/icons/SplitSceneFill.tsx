import type { SVGProps, JSX } from 'react'

export default function SplitSceneFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-154.02v-652.2h271.91v652.2H114.02Zm331.91 80v-812.2h68.14v80h332.15v652.2H514.07v80h-68.14Z" />
    </svg>
  )
}
