import type { SVGProps, JSX } from 'react'

export default function StylusPencil({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m245-326 201-514h68l201 514H245Zm87-60h296L480-760 332-386Zm0 0h296-296ZM160-120l39-106h562l39 106H160Z" />
    </svg>
  )
}
