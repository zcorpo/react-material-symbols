import type { SVGProps } from 'react'

export default function PhotoLibrary({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M362-394h391L626-565 523-430l-68-87-93 123ZM192-192v-731h731v731H192Zm94-94h542v-542H286v542ZM37-37v-731h95v636h636v95H37Zm249-791v542-542Z" />
    </svg>
  )
}
