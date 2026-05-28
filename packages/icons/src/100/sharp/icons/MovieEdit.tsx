import type { SVGProps, JSX } from 'react'

export default function MovieEdit({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154-234v-386 386Zm-22 22v-536h54l52 106h123l-52-106h83l52 106h123l-52-106h82l53 106h123l-53-106h108v111l-17 17H154v386h324v22H132Zm440 40v-78l231-230 77 78-230 230h-78Zm268-230-37-38 37 38ZM600-200h38l144-144-19-19-18-20-145 145v38Zm163-163-18-20 37 39-19-19Z" />
    </svg>
  )
}
