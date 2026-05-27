import type { SVGProps } from 'react'

export default function Beenhere({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-17 135-276v-637h691v637L480-17Zm0-118 251-193v-491H229v491l251 193Zm-42-224 234-233-52-50-183 184-100-100-49 51 150 148Zm42-460H229h502-251Z" />
    </svg>
  )
}
