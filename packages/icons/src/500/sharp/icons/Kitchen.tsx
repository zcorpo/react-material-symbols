import type { SVGProps, JSX } from 'react'

export default function Kitchen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M308.52-647.85v-118h62.63v118h-62.63Zm0 359.33v-194.33h62.63v194.33h-62.63Zm-154.5 214.5v-812.2h652.2v812.2h-652.2Zm68.13-68.13h515.7v-393.7h-515.7v393.7Zm0-453.7h515.7v-222h-515.7v222Z" />
    </svg>
  )
}
