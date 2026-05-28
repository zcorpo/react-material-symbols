import type { SVGProps, JSX } from 'react'

export default function CurrencyFrancFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M301.15-140v-127.31h-87.3v-45.38h87.3V-820h405v45.39H346.54v268.07h319.61v45.39H346.54v148.46h156.15v45.38H346.54V-140h-45.39Z" />
    </svg>
  )
}
