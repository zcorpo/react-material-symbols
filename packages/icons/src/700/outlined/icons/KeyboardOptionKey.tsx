import type { SVGProps, JSX } from 'react'

export default function KeyboardOptionKey({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M587-183 310-683H95v-94h269l277 500h225v94H587Zm6-500v-94h273v94H593Z" />
    </svg>
  )
}
