import type { SVGProps, JSX } from 'react'

export default function Man3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M420-70v-280h-80v-313h280v313h-80v280H420Zm60-644-83-83 83-83 83 83-83 83Z" />
    </svg>
  )
}
