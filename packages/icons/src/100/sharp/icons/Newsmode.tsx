import type { SVGProps } from 'react'

export default function Newsmode({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-172v-616h696v616H132Zm22-22h652v-572H154v572Zm129-128h394v-22H283v22Zm0-148h126v-168H283v168Zm233 0h161v-22H516v22Zm0-146h161v-22H516v22ZM154-194v-572 572Z" />
    </svg>
  )
}
