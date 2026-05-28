import type { SVGProps, JSX } from 'react'

export default function CardsStackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M390-608h320v-60H390v60Zm0 140h199v-60H390v60ZM174-112l-74-537 59-7v420h611l7 52-603 72Zm46-184v-544h660v544H220Z" />
    </svg>
  )
}
