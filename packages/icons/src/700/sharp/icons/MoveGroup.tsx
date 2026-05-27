import type { SVGProps } from 'react'

export default function MoveGroup({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M192-192v-240h94v146h542v-491H286v145h-94v-291h731v731H192ZM37-37v-731h95v636h636v95H37Zm493-315-55-56 83-84H192v-80h366l-83-84 55-55 180 179-180 180Z" />
    </svg>
  )
}
