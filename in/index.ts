type TagName = keyof HTMLElementTagNameMap

type X<T extends TagName> = HTMLElementTagNameMap[T]

function el<T extends TagName>(tagName: T): X<T> {
	const el = document.createElement(tagName)
	return el
}
