import type { SVGProps, JSX } from 'react'

export default function TurnSlightRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M380-169.23v-301.23l259.54-258.77H503.31V-760h188.23v188.23h-30.77V-708l-250 249.23v289.54H380Z" />
    </svg>
  )
}
