import type { SVGProps, JSX } from 'react'

export default function WaterEcFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M450-250h25l146-220H510v-160h-25L339-410h111v160Zm-198.5 76Q160-268 160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80q-137 0-228.5-94Z" />
    </svg>
  )
}
