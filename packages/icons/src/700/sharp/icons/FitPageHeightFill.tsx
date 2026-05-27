import type { SVGProps } from 'react'

export default function FitPageHeightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M371-600h219L480-710 371-600Zm109 351 110-110H371l109 110ZM826-55H135v-851h691v851Z" />
    </svg>
  )
}
