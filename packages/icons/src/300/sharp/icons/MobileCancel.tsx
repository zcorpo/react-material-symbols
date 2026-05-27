import type { SVGProps, JSX } from 'react'

export default function MobileCancel({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m373-341 107-107 107 107 32-32-107-107 107-107-32-32-107 107-107-107-32 32 107 107-107 107 32 32ZM220-60v-840h519.92v203.08H780v155.69h-40.08V-60H220Zm45.39-45.39h429.15v-749.22H265.39v749.22Zm0 0v-749.22 749.22Z" />
    </svg>
  )
}
