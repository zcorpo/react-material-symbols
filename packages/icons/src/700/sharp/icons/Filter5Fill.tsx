import type { SVGProps, JSX } from 'react'

export default function Filter5Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M431-355h253v-238H502v-96h182v-71H431v239h181v94H431v72ZM192-192v-731h731v731H192ZM37-37v-731h95v636h636v95H37Z" />
    </svg>
  )
}
