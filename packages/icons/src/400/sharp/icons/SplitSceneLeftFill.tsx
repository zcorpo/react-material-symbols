import type { SVGProps, JSX } from 'react'

export default function SplitSceneLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M570-160v-640h270v640H570ZM450-80v-80H120v-640h330v-80h60v800h-60Z" />
    </svg>
  )
}
