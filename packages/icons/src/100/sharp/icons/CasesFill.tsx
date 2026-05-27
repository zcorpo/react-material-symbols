import type { SVGProps } from 'react'

export default function CasesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-174v-404h22v382h581v22H92Zm96-96v-433h229v-113h222v113h229v433H188Zm251-433h178v-91H439v91Z" />
    </svg>
  )
}
