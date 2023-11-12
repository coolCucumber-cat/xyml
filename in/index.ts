import { HtmlElementNameMap } from './html'

type TagName = keyof HTMLElementTagNameMap & keyof HtmlElementNameMap

function el<_TagName extends TagName>(
	tagName: _TagName,
	attributes?: HtmlElementNameMap[_TagName] | null
): HTMLElementTagNameMap[_TagName] {
	const el = document.createElement(tagName)
	if (attributes) {
		for (const attribute in attributes) {
			const value: (typeof attributes)[typeof attribute] =
				attributes[attribute]
			if (typeof value === 'function' && attribute.startsWith('on')) {
				// @ts-expect-error
				el.addEventListener(attribute.slice(2), value)
			} else if (attribute === 'data') {
			} else if (attribute === 'class') {
			} else if (true) {
				// @ts-expect-error
				el[attribute] = value
			}
		}
	}
	return el
}

const anEl = el('div', { onanimationcancel: () => {} })
