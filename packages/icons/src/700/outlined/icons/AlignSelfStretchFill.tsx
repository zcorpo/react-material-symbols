import type { SVGProps } from 'react'

export default function AlignSelfStretchFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-811v-95h851v95H55Zm0 756v-94h851v94H55Zm358-198v-474h134v474H413Z" />
    </svg>
  )
}
