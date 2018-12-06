import { storiesOf } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Atoms/Button', module)
  .addDecorator(withNotes)

  .add('Call-to-action', () => `
<a class="button call-to-action is-primary is-rounded" href="#">
  Call to action
</a>
  `, {
    notes: {markdown: `
## Usage
A call to action button is a regular button, with classes of:

\`button call-to-action is-primary is-rounded\`

The colour variation can be changed via one of Bulma's \`is-colour\` classes.

## Variables

The call to action uses the following variables:

| Variable name                              || Default value        |
|:-------------------------------------------||---------------------:|
| \`$stencila-call-to-action-font-size\`     ||               \`16\` |
| \`$stencila-call-to-action-padding\`       ||  \`rem(20) rem(40)\` |
| \`$stencila-call-to-action-padding-large\` ||  \`rem(20) rem(80)\` |
`}
  })

  .add('Call-to-action Large', () => `
    <a class="button call-to-action is-primary is-rounded is-large" href="#">
      Large call to action
    </a>
  `, {
    notes: {
      markdown: `A call to action button with an additional class of \`is-large\``
    }
  })
