import type { SVGProps, JSX } from 'react'

export default function StackGroupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M319.43-65.87v-253.56H65.3V-894.7h575.27v253.57H894.7v575.26H319.43Z" />
    </svg>
  )
}
