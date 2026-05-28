import type { SVGProps, JSX } from 'react'

export default function DeleteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM201-120v-630h-41v-60h188v-30h264v30h188v60h-41v630H201Z" />
    </svg>
  )
}
