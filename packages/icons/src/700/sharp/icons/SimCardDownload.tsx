import type { SVGProps, JSX } from 'react'

export default function SimCardDownload({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m482-268 170-170-55-54-76 77v-190h-77v190l-76-77-55 54 169 170ZM135-55v-597l254-254h437v851H135Zm94-94h502v-662H430L229-610.18V-149Zm0 0h502-502Z" />
    </svg>
  )
}
