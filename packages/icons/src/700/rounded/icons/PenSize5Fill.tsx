import type { SVGProps, JSX } from 'react'

export default function PenSize5Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M192-320.12Q192-372 230-410l320-320q38.15-38 90.07-38Q692-768 730-729.88q38 38.12 38 90T730-550L410-230q-38.15 38-90.07 38Q268-192 230-230.12q-38-38.12-38-90Z" />
    </svg>
  )
}
