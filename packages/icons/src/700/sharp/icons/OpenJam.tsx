import type { SVGProps, JSX } from 'react'

export default function OpenJam({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M234-114h492v-72H516v-342l72 72 54-55-162-162-162 162 54 55 72-72v342H234v72Zm246-365ZM55-303v-563h851v563H616v-94h195v-374H149v374h195v94H55Z" />
    </svg>
  )
}
