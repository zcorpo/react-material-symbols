import type { SVGProps, JSX } from 'react'

export default function PlayArrow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M305.87-177v-612l480.7 306-480.7 306Zm79.22-306Zm0 161.39L639.39-483l-254.3-161.39v322.78Z" />
    </svg>
  )
}
