import type { SVGProps, JSX } from 'react'

export default function AlignVerticalBottom({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-55v-94h851v94H55Zm212-194v-657h134v657H267Zm292 0v-417h134v417H559Z" />
    </svg>
  )
}
