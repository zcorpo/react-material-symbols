import type { SVGProps, JSX } from 'react'

export default function FlashOnFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440-206.15V-440H335.38v-400h291.54L560-608.46h156.15L440-206.15Z" />
    </svg>
  )
}
