import type { SVGProps, JSX } from 'react'

export default function KeyboardOptionKey({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m594.61-195.93-277-500H114.02v-68.14h242.37l277 500h212.83v68.14H594.61Zm11.32-500v-68.14h240.29v68.14H605.93Z" />
    </svg>
  )
}
