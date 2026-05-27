import type { SVGProps } from 'react'

export default function SelectWindow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M46-57v-553h186v-293h683v553H729v293H46Zm94-94h495v-316H140v316Zm589-293h91v-316H326v150h403v166Z" />
    </svg>
  )
}
