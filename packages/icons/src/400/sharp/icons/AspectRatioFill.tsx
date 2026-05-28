import type { SVGProps, JSX } from 'react'

export default function AspectRatioFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M577-274h191v-194h-60v134H577v60ZM193-492h60v-134h131v-60H193v194ZM80-160v-640h800v640H80Z" />
    </svg>
  )
}
