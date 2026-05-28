import type { SVGProps, JSX } from 'react'

export default function FilterList({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M382-190v-94h196v94H382ZM218-434v-93h524v93H218ZM95-677v-94h771v94H95Z" />
    </svg>
  )
}
