import type { SVGProps, JSX } from 'react'

export default function GMobiledataFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M277.85-280v-400h360.06v65.5H343.35v269h233.3v-102.11h-141v-62.87h206.26V-280H277.85Z" />
    </svg>
  )
}
