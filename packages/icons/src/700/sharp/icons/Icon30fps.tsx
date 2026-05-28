import type { SVGProps, JSX } from 'react'

export default function Icon30fps({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M69-194v-92h255v-148H72v-92h252v-148H69v-92h346v240l-45 46 45 46v240H69Zm524-92h207v-388H593v388Zm-91 92v-572h389v572H502Z" />
    </svg>
  )
}
