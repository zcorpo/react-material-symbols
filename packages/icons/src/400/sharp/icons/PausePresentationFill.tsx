import type { SVGProps, JSX } from 'react'

export default function PausePresentationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M372-321h60v-318h-60v318Zm156 0h60v-318h-60v318ZM80-160v-640h800v640H80Z" />
    </svg>
  )
}
