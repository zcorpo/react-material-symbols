import type { SVGProps } from 'react'

export default function FitPageHeightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M391-617h178l-89-89-89 89Zm89 363 89-89H391l89 89Zm268 122H212v-696h536v696Z" />
    </svg>
  )
}
