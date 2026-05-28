import type { SVGProps, JSX } from 'react'

export default function TextFormat({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M226-224v-22h508v22H226Zm87-148 157-404h22l153 404h-24l-44-116H380l-43 116h-24Zm76-136h180l-86-232h-4l-90 232Z" />
    </svg>
  )
}
