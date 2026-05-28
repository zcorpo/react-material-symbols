import type { SVGProps, JSX } from 'react'

export default function SplitSceneLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M579.61-145.87V-814.7H854.7v668.83H579.61Zm-139.22 80v-80H105.87V-814.7h334.52v-80h79.22v828.83h-79.22Z" />
    </svg>
  )
}
