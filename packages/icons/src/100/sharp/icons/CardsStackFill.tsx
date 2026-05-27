import type { SVGProps } from 'react'

export default function CardsStackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M413-628h268v-22H413v22Zm0 134h148v-22H413v22ZM191-168l-61-425 42-5v336h591l5 27-577 67Zm75-189v-431h562v431H266Z" />
    </svg>
  )
}
