import type { SVGProps, JSX } from 'react'

export default function NorthWest({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M758-160 260-658v294h-60v-396h396v60H302l498 498-42 42Z" />
    </svg>
  )
}
