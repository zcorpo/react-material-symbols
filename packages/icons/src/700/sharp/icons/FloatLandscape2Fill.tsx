import type { SVGProps, JSX } from 'react'

export default function FloatLandscape2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M529-409h222v-262H529v262ZM55-135v-691h851v691H55Z" />
    </svg>
  )
}
