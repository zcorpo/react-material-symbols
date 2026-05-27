import type { SVGProps, JSX } from 'react'

export default function ShopTwoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m471-398 140-89-140-88v177ZM92-174v-404h22v382h581v22H92Zm96-96v-433h229v-113h222v113h229v433H188Zm251-433h178v-91H439v91Z" />
    </svg>
  )
}
