import { Component, h, Host, Prop } from '@stencil/core'

@Component({
  tag: 'stencila-menu',
  styleUrls: {
    default: 'menu.css',
    material: 'menu.material.css',
  },
  scoped: true,
})
export class Menu {
  /**
   * Determines whether the Menu is shown or not
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public isOpen: boolean = false

  private toggleMenu = (e: MouseEvent) => {
    e.preventDefault()
    this.isOpen = !this.isOpen
  }

  private menuId = `stencila-menu-${menuIds++}`

  public render() {
    return (
      <Host>
        <span onClick={this.toggleMenu} aria-controls={this.menuId}>
          <slot name="toggle" />
        </span>

        <ul
          role="menu"
          aria-hidden={!this.isOpen}
          aria-orientation="vertical"
          tabindex="-1"
          aria-expanded="false"
          id={this.menuId}
        >
          <slot />
        </ul>
      </Host>
    )
  }
}

let menuIds = 0
