import type { SVGProps, JSX } from 'react'

export default function SubdirectoryArrowRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m562.92-160-22.23-22.23 159.69-160.46H240V-760h30.77v386.54h430.61L540.92-533.15l22.23-22.23L760-358.54 562.92-160Z" />
    </svg>
  )
}
