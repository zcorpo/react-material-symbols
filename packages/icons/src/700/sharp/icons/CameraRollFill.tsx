import type { SVGProps, JSX } from 'react'

export default function CameraRollFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-55v-811h146v-80h247v80h138v102h320v607H586v102H55Zm310-257h72v-72h-72v72Zm0-225h72v-72h-72v72Zm157 225h72v-72h-72v72Zm0-225h72v-72h-72v72Zm157 225h72v-72h-72v72Zm0-225h72v-72h-72v72Z" />
    </svg>
  )
}
