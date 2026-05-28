import type { SVGProps, JSX } from 'react'

export default function LabPanelFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-172v-256h80v-190h-40v-116h256v116h-40v190h264v-190h-40v-116h256v116h-40v190h80v256H92Zm542-256h132v-192H634v192Zm-440 0h132v-192H194v192Z" />
    </svg>
  )
}
