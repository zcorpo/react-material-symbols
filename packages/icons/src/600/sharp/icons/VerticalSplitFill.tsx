import type { SVGProps, JSX } from 'react'

export default function VerticalSplitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M89.82-354v-79.22h340.31V-354H89.82Zm0 173.22V-260h340.31v79.22H89.82Zm0-346V-606h340.31v79.22H89.82Zm0-173.22v-79.78h340.31V-700H89.82Zm447.31 519.22v-599h334.05v599H537.13Z" />
    </svg>
  )
}
