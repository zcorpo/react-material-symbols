import type { SVGProps, JSX } from 'react'

export default function FolderOff({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m906-163-95-94v-403H485l-79-79h-77l-87-87h188l71 72h405v591ZM872-12 750-135H55v-688h106l91 92H149v502h506L40-843l50-50L921-62l-49 50ZM403-480Zm168-18Z" />
    </svg>
  )
}
