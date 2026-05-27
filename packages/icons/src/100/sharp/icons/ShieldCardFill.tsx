import type { SVGProps, JSX } from 'react'

export default function ShieldCardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M466-132v-282h402v282H466Zm22-22h358v-128H488v128Zm0-150h358v-88H488v88ZM372-193q-72-54-116-139.5T212-518v-206l268-100 268 100v216H372v315Z" />
    </svg>
  )
}
