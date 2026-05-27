import type { SVGProps, JSX } from 'react'

export default function PictureInPictureMobile({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M748-132H212v-696h536v696Zm-22-22v-652H234v652h492Zm0-652H234h492Zm-43 348v-308H453v308h230Zm-22-22H475v-264h186v264Z" />
    </svg>
  )
}
