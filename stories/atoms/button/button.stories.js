import { boolean, select, text } from '@storybook/addon-knobs'
import { html } from 'lit-html'
import { iconNames } from '../icons/iconNames'

export default {
  title: 'Atoms/Button/Primary',
  component: 'stencila-button',
  excludeStories: ['props'],
}

const defaultText = 'Sign In'
const defaultIcon = 'magic'

export const props = (overrides = {}) => ({
  color: select(
    'color',
    [
      'primary',
      'success',
      'warn',
      'danger',
      'neutral',
      'stock',
      'key',
      'brand',
    ],
    overrides.color || 'primary'
  ),
  disabled: boolean('disabled', overrides.disabled || false),
  fill: boolean('fill', overrides.fill || false),
  href: text('href', overrides.href || ''),
  icon: select('icon', iconNames, overrides.icon || defaultIcon),
  isLoading: boolean('isLoading', overrides.isLoading || false),
  label: text('Button Text', overrides.label || defaultText),
  minimal: boolean('minimal', overrides.minimal || false),
  secondary: boolean('isSecondary', overrides.isSecondary || false),
  size: select(
    'size',
    ['xsmall', 'small', 'default', 'large'],
    overrides.size || 'default'
  ),
  tooltip: text('tooltip', overrides.tooltip || undefined),
})

export const withText = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props()

  return html`
    <button
      class="color-${color} ${minimal === true ? 'minimal' : ''} ${fill === true
        ? 'fill'
        : ''}"
      ?disabled=${disabled}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      ${label}
    </button>
  `
}

export const withEmoji = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props({
    label: '😀 😎 👍 💯',
  })

  return html`
    <button
      class="color-${color} ${minimal === true ? 'minimal' : ''} ${fill === true
        ? 'fill'
        : ''}"
      ?disabled=${disabled}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      ${label}
    </button>
  `
}

export const small = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props({
    label: 'A small step',
    size: 'small',
  })

  return html`
    <button
      class="color-${color} ${minimal === true ? 'minimal' : ''} ${fill === true
        ? 'fill'
        : ''}"
      ?disabled=${disabled}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      ${label}
    </button>
  `
}

export const extraSmall = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props({
    label: 'a very small step',
    size: 'xsmall',
  })

  return html`
    <button
      class="color-${color} ${minimal === true ? 'minimal' : ''} ${fill === true
        ? 'fill'
        : ''}"
      ?disabled=${disabled}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      ${label}
    </button>
  `
}

export const anchorButton = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props({
    label: 'a very small step',
    size: 'xsmall',
  })

  return html`
    <button
      class="color-${color} ${minimal === true ? 'minimal' : ''} ${fill === true
        ? 'fill'
        : ''}"
      ?disabled=${disabled}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      ${label}
    </button>
  `
}

export const webComponent = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props()

  return html`
    <stencila-button
      ?minimal=${minimal}
      color=${color}
      ?disabled=${disabled}
      fill=${fill}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      ${label}</stencila-button
    >
  `
}

export const webComponent_withAnIcon = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props({ icon: undefined, color: 'stock', fill: true })

  return html`
    <stencila-button
      ?minimal=${minimal}
      color=${color}
      ?disabled=${disabled}
      fill=${fill}
      .icon=${undefined}
      .fill=${fill}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      size=${size}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <g fill="none" fill-rule="evenodd">
          <path
            d="M12 11v3h4.5c-.19 1.02-.711 1.742-1.575 2.32v2.048h2.637c1.543-1.42 2.434-3.513 2.434-5.998 0-.31-.033-.76-.097-1.352L12 11z"
            fill="#4285F4"
          ></path>
          <path
            d="M12.161 20.345c2.203 0 4.05-.73 5.401-1.977l-2.637-2.047c-.731.49-1.666.779-2.764.779-2.126 0-3.925-1.436-4.566-3.365H4.868v2.115a8.158 8.158 0 007.293 4.495z"
            fill="#34A853"
          ></path>
          <path
            d="M7.595 13.735a4.904 4.904 0 01-.256-1.55c0-.538.092-1.061.256-1.551V8.52H4.868A8.158 8.158 0 004 12.184c0 1.317.315 2.564.868 3.666l2.727-2.115z"
            fill="#FBBC04"
          ></path>
          <path
            d="M12.161 7.27c1.198 0 2.274.411 3.12 1.22l2.34-2.34c-1.413-1.318-3.26-2.126-5.46-2.126A8.158 8.158 0 004.868 8.52l2.727 2.114c.641-1.929 2.44-3.365 4.566-3.365z"
            fill="#EA4335"
          ></path>
        </g>
      </svg>
      ${label}
    </stencila-button>
  `
}

export const webComponent_withAFeatherIcon = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props()

  return html`
    <stencila-button
      ?minimal=${minimal}
      color=${color}
      ?disabled=${disabled}
      fill=${fill}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      .tooltip=${tooltip === '' ? undefined : tooltip}
      size=${size}
    >
      ${label}
    </stencila-button>
  `
}

export const webComponent_Link = () => {
  const {
    color,
    disabled,
    fill,
    href,
    icon,
    isLoading,
    label,
    minimal,
    secondary,
    size,
    tooltip,
  } = props({
    icon: null,
    href: '#',
  })

  return html`
    <stencila-button
      ?minimal=${minimal}
      color=${color}
      ?disabled=${disabled}
      fill=${fill}
      icon=${icon}
      ?is-secondary=${secondary}
      ?is-loading=${isLoading}
      .href=${href === '' ? undefined : href}
      .tooltip=${tooltip === '' ? undefined : tooltip}
      size=${size}
    >
      ${label}
    </stencila-button>
  `
}
