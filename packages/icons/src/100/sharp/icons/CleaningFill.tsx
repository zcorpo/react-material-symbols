import type { SVGProps, JSX } from 'react'

export default function CleaningFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m409-622 47-94v-26h-65v-34h208v50l-34 68h-60v-43l-74 79h-22Zm-48 490v-232l144-266h72v498H361Z" />
    </svg>
  )
}
