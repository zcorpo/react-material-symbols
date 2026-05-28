import type { SVGProps, JSX } from 'react'

export default function AddColumnRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M148-772v584h243v-584H148ZM55-95v-771h771v174h-94v-80H485v584h247v-81h94v174H55Zm430-385Zm-94 0h94-94Zm0 0Zm341 126v-80h-80v-93h80v-80h94v80h80v93h-80v80h-94Z" />
    </svg>
  )
}
