import type { SVGProps, JSX } from 'react'

export default function MobileCancel({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m378-356 102-102 102 102 22-22-102-102 102-102-22-22-102 102-102-102-22 22 102 102-102 102 22 22ZM240-80v-800h481.85v196.15H760v138.39h-38.15V-80H240Zm30.77-30.77h420.31v-738.46H270.77v738.46Zm0 0v-738.46 738.46Z" />
    </svg>
  )
}
