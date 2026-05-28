import type { SVGProps, JSX } from 'react'

export default function TableLampFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M520-146v-22h268v22H520Zm123-102v-457H424v145H199l100-228h125v61h241v479h-22Z" />
    </svg>
  )
}
