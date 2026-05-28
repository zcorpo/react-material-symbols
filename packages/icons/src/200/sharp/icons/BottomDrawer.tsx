import type { SVGProps, JSX } from 'react'

export default function BottomDrawer({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-640h640v640H160Zm30.77-609.23v382.31L259-455.15h442l68.23 68.23v-382.31H190.77Zm0 578.46h578.46v-151.92l-81.69-81.69H272.46l-81.69 81.69v151.92Zm0 0h578.46-578.46Z" />
    </svg>
  )
}
