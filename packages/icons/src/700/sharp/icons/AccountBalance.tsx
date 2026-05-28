import type { SVGProps, JSX } from 'react'

export default function AccountBalance({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M189-233v-339h83v339h-83Zm254 0v-339h82v339h-82ZM55-102v-94h851v94H55Zm633-131v-339h83v339h-83ZM55-609v-95l425-240 426 240v95H55Zm198-95h454-454Zm0 0h454L480-836 253-704Z" />
    </svg>
  )
}
