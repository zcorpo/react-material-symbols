import type { SVGProps, JSX } from 'react'

export default function PlayArrow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M372-345v-272q0-13 8-20t19-7q3 0 7 .5t8 2.5l214 138q6 4 9.5 9.5T641-481q0 7-3.5 12.5T628-459L414-321q-4 2-8 2.5t-7 .5q-11 0-19-7t-8-20Zm22-136Zm0 145 230-145-230-145v290Z" />
    </svg>
  )
}
