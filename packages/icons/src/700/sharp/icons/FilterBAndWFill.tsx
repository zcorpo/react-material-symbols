import type { SVGProps } from 'react'

export default function FilterBAndWFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M866-95H95v-771h771v771Zm-677-94h291v-333.43L771-189v-582H480v248.57L189-189Z" />
    </svg>
  )
}
