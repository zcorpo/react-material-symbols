import type { SVGProps } from 'react'

export default function FilterFrames({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-55v-771h252l173-154 174 154h252v771H55Zm94-94h662v-582H149v582Zm100-100v-382h462v382H249Zm80-80h303v-223H329v223Zm151-110Z" />
    </svg>
  )
}
