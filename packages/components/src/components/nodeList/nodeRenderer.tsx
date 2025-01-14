import { FunctionalComponent, h, VNode } from '@stencil/core'
import { isA, isCode, isPrimitive, Node } from '@stencila/schema'

const schemNodeHTMLRegExp = /itemtype=".+?"/

const renderNode = (node: Node): VNode => {
  if (typeof node === 'string' && schemNodeHTMLRegExp.test(node)) {
    return <span innerHTML={node}></span>
  }

  if (isPrimitive(node)) {
    const text =
      typeof node === 'string' || typeof node === 'number'
        ? node
        : JSON.stringify(node)

    return (
      <pre>
        <output>{text}</output>
      </pre>
    )
  } else if (isCode(node)) {
    return (
      <pre>
        <output>{node.text}</output>
      </pre>
    )
  } else if (isA('ImageObject', node)) {
    return <stencila-image-object image={node}></stencila-image-object>
  } else if (isA('Datatable', node)) {
    return <stencila-data-table table={node}></stencila-data-table>
  }

  return <span>{JSON.stringify(node)}</span>
}

interface Props {
  node?: Node
}

export const NodeRenderer: FunctionalComponent<Props> = ({ node }) => (
  <span class="output">{node !== undefined ? renderNode(node) : null}</span>
)
