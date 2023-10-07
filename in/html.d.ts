interface HtmlElementNameMap {
	a: HtmlAnchor
	abbr: HtmlElement
	address: HtmlElement
	area: HtmlArea
	article: HtmlElement
	aside: HtmlElement
	audio: HtmlAudio
	b: HtmlElement
	base: HtmlBase
	bdi: HtmlElement
	bdo: HtmlElement
	blockquote: HtmlQuote
	body: HtmlBody
	br: HtmlBR
	button: HtmlButton
	canvas: HtmlCanvas
	caption: HtmlTableCaption
	cite: HtmlElement
	code: HtmlElement
	col: HtmlTableCol
	colgroup: HtmlTableCol
	data: HtmlData
	datalist: HtmlDataList
	dd: HtmlElement
	del: HtmlMod
	details: HtmlDetails
	dfn: HtmlElement
	dialog: HtmlDialog
	div: HtmlDiv
	dl: HtmlDList
	dt: HtmlElement
	em: HtmlElement
	embed: HtmlEmbed
	fieldset: HtmlFieldSet
	figcaption: HtmlElement
	figure: HtmlElement
	footer: HtmlElement
	form: HtmlForm
	h1: HtmlHeading
	h2: HtmlHeading
	h3: HtmlHeading
	h4: HtmlHeading
	h5: HtmlHeading
	h6: HtmlHeading
	head: HtmlHead
	header: HtmlElement
	hgroup: HtmlElement
	hr: HtmlHR
	html: HtmlHtml
	i: HtmlElement
	iframe: HtmlIFrame
	img: HtmlImage
	input: HtmlInput
	ins: HtmlMod
	kbd: HtmlElement
	label: HtmlLabel
	legend: HtmlLegend
	li: HtmlLI
	link: HtmlLink
	main: HtmlElement
	map: HtmlMap
	mark: HtmlElement
	menu: HtmlMenu
	meta: HtmlMeta
	meter: HtmlMeter
	nav: HtmlElement
	noscript: HtmlElement
	object: HtmlObject
	ol: HtmlOList
	optgroup: HtmlOptGroup
	option: HtmlOption
	output: HtmlOutput
	p: HtmlParagraph
	picture: HtmlPicture
	pre: HtmlPre
	progress: HtmlProgress
	q: HtmlQuote
	rp: HtmlElement
	rt: HtmlElement
	ruby: HtmlElement
	s: HtmlElement
	samp: HtmlElement
	script: HtmlScript
	search: HtmlElement
	section: HtmlElement
	select: HtmlSelect
	small: HtmlElement
	source: HtmlSource
	span: HtmlSpan
	strong: HtmlElement
	style: HtmlStyle
	sub: HtmlElement
	summary: HtmlElement
	sup: HtmlElement
	table: HtmlTable
	tbody: HtmlTableSection
	td: HtmlTableCell
	textarea: HtmlTextArea
	tfoot: HtmlTableSection
	th: HtmlTableCell
	thead: HtmlTableSection
	time: HtmlTime
	title: HtmlTitle
	tr: HtmlTableRow
	track: HtmlTrack
	u: HtmlElement
	ul: HtmlUList
	var: HtmlElement
	video: HtmlVideo
	wbr: HtmlElement
}

type HtmlElementTypeFrom<T> = {
	[K in keyof T]?: PrimitivePlusString<T[K]> | undefined
}

type PrimitivePlusString<T> = T extends boolean | number ? T | `${T}` : T

type Data = { [key: string]: string | boolean | number | undefined }
type Class =
	| string
	| (string | { [key: string]: boolean })[]
	| { [key: string]: boolean }

interface _HtmlElement {
	accessKey: string
	ariaAtomic: string
	ariaAutoComplete: string
	ariaBusy: string
	ariaChecked: string
	ariaColCount: string
	ariaColIndex: string
	ariaColSpan: string
	ariaCurrent: string
	ariaDisabled: string
	ariaExpanded: string
	ariaHasPopup: string
	ariaHidden: string
	ariaInvalid: string
	ariaKeyShortcuts: string
	ariaLabel: string
	ariaLevel: string
	ariaLive: string
	ariaModal: string
	ariaMultiLine: string
	ariaMultiSelectable: string
	ariaOrientation: string
	ariaPlaceholder: string
	ariaPosInSet: string
	ariaPressed: string
	ariaReadOnly: string
	ariaRequired: string
	ariaRoleDescription: string
	ariaRowCount: string
	ariaRowIndex: string
	ariaRowSpan: string
	ariaSelected: string
	ariaSetSize: string
	ariaSort: string
	ariaValueMax: string
	ariaValueMin: string
	ariaValueNow: string
	ariaValueText: string
	autocapitalize: string
	class: Class
	contentEditable: boolean | 'plaintext-only' | 'inherit'
	data: Data
	dir: 'ltr' | 'rtl' | 'auto'
	draggable: boolean
	enterKeyHint:
		| 'enter'
		| 'done'
		| 'go'
		| 'next'
		| 'previous'
		| 'search'
		| 'send'
	hidden: boolean | 'until-found'
	id: string
	inert: boolean
	inputMode:
		| 'decimal'
		| 'email'
		| 'none'
		| 'numeric'
		| 'search'
		| 'tel'
		| 'text'
		| 'url'
	lang: string
	nonce: string
	onanimationcancel: (event: AnimationEvent) => void
	onanimationend: (event: AnimationEvent) => void
	onanimationiteration: (event: AnimationEvent) => void
	onanimationstart: (event: AnimationEvent) => void
	onauxclick: (event: MouseEvent) => void
	onbeforeinput: (event: InputEvent) => void
	onblur: (event: FocusEvent) => void
	onchange: (event: Event) => void
	onclick: (event: MouseEvent) => void
	oncontextmenu: (event: MouseEvent) => void
	oncopy: (event: ClipboardEvent) => void
	oncut: (event: ClipboardEvent) => void
	ondblclick: (event: MouseEvent) => void
	ondrag: (event: DragEvent) => void
	ondragend: (event: DragEvent) => void
	ondragenter: (event: DragEvent) => void
	ondragleave: (event: DragEvent) => void
	ondragover: (event: DragEvent) => void
	ondragstart: (event: DragEvent) => void
	ondrop: (event: DragEvent) => void
	onerror: OnErrorEventHandler
	onfocus: (event: FocusEvent) => void
	onfullscreenchange: (event: Event) => void
	onfullscreenerror: (event: Event) => void
	ongotpointercapture: (event: PointerEvent) => void
	oninput: (event: Event) => void
	onkeydown: (event: KeyboardEvent) => void
	onkeyup: (event: KeyboardEvent) => void
	onload: (event: Event) => void
	onlostpointercapture: (event: PointerEvent) => void
	onmousedown: (event: MouseEvent) => void
	onmouseenter: (event: MouseEvent) => void
	onmouseleave: (event: MouseEvent) => void
	onmousemove: (event: MouseEvent) => void
	onmouseout: (event: MouseEvent) => void
	onmouseover: (event: MouseEvent) => void
	onmouseup: (event: MouseEvent) => void
	onpaste: (event: ClipboardEvent) => void
	onpointercancel: (event: PointerEvent) => void
	onpointerdown: (event: PointerEvent) => void
	onpointerenter: (event: PointerEvent) => void
	onpointerleave: (event: PointerEvent) => void
	onpointermove: (event: PointerEvent) => void
	onpointerout: (event: PointerEvent) => void
	onpointerover: (event: PointerEvent) => void
	onpointerup: (event: PointerEvent) => void
	onscroll: (event: Event) => void
	onscrollend: (event: Event) => void
	onsecuritypolicyviolation: (event: SecurityPolicyViolationEvent) => void
	ontouchcancel: (event: TouchEvent) => void
	ontouchend: (event: TouchEvent) => void
	ontouchmove: (event: TouchEvent) => void
	ontouchstart: (event: TouchEvent) => void
	ontransitioncancel: (event: TransitionEvent) => void
	ontransitionend: (event: TransitionEvent) => void
	ontransitionrun: (event: TransitionEvent) => void
	ontransitionstart: (event: TransitionEvent) => void
	onwheel: (event: WheelEvent) => void
	popover: 'auto' | 'manual'
	role: string
	spellcheck: boolean
	tabIndex: number
	title: string
	translate: boolean
}

type HtmlElement = HtmlElementTypeFrom<_HtmlElement>

type C = {
	onabort: (event: UIEvent) => void
	oncancel: (event: Event) => void
	oncanplay: (event: Event) => void
	oncanplaythrough: (event: Event) => void
	onclose: (event: Event) => void
	oncuechange: (event: Event) => void
	ondurationchange: (event: Event) => void
	onemptied: (event: Event) => void
	onended: (event: Event) => void
	onformdata: (event: FormDataEvent) => void
	oninvalid: (event: Event) => void
	onloadeddata: (event: Event) => void
	onloadedmetadata: (event: Event) => void
	onloadstart: (event: Event) => void
	onpause: (event: Event) => void
	onplay: (event: Event) => void
	onplaying: (event: Event) => void
	onprogress: (event: ProgressEvent) => void
	onratechange: (event: Event) => void
	onreset: (event: Event) => void
	onresize: (event: UIEvent) => void
	onseeked: (event: Event) => void
	onseeking: (event: Event) => void
	onselect: (event: Event) => void
	onselectionchange: (event: Event) => void
	onselectstart: (event: Event) => void
	onslotchange: (event: Event) => void
	onstalled: (event: Event) => void
	onsubmit: (event: SubmitEvent) => void
	onsuspend: (event: Event) => void
	ontimeupdate: (event: Event) => void
	ontoggle: (event: Event) => void
	onvolumechange: (event: Event) => void
	onwaiting: (event: Event) => void
}

interface _HtmlAnchor extends HtmlHyperLink {
	download: string
	hreflang: string
	ping: string
	referrerPolicy: string
	rel: string
	target: string
	text: string
	type: string
}
type HtmlAnchor = HtmlElementTypeFrom<_HtmlAnchor>

interface _HtmlArea extends HtmlElement, HtmlHyperLink {
	alt: string
	coords: string
	download: string
	ping: string
	referrerPolicy: string
	rel: string
	shape: string
	target: string
}
type HtmlArea = HtmlElementTypeFrom<_HtmlArea>

interface _HtmlAudio extends HtmlElement, HtmlMedia {}
type HtmlAudio = HtmlElementTypeFrom<_HtmlAudio>

interface _HtmlBase extends HtmlElement {
	href: string
	target: string
}
type HtmlBase = HtmlElementTypeFrom<_HtmlBase>

interface _HtmlQuote extends HtmlElement {
	cite: string
}
type HtmlQuote = HtmlElementTypeFrom<_HtmlQuote>

interface _HtmlBody extends HtmlElement {}
type HtmlBody = HtmlElementTypeFrom<_HtmlBody>

interface _HtmlBR extends HtmlElement {}
type HtmlBR = HtmlElementTypeFrom<_HtmlBR>

interface _HtmlButton extends HtmlElement {}
type HtmlButton = HtmlElementTypeFrom<_HtmlButton>

interface _HtmlCanvas extends HtmlElement {}
type HtmlCanvas = HtmlElementTypeFrom<_HtmlCanvas>

interface _HtmlTableCaption extends HtmlElement {}
type HtmlTableCaption = HtmlElementTypeFrom<_HtmlTableCaption>

interface _HtmlTableCol extends HtmlElement {}
type HtmlTableCol = HtmlElementTypeFrom<_HtmlTableCol>

interface _HtmlData extends HtmlElement {}
type HtmlData = HtmlElementTypeFrom<_HtmlData>

interface _HtmlDataList extends HtmlElement {}
type HtmlDataList = HtmlElementTypeFrom<_HtmlDataList>

interface _HtmlMod extends HtmlElement {}
type HtmlMod = HtmlElementTypeFrom<_HtmlMod>

interface _HtmlDetails extends HtmlElement {}
type HtmlDetails = HtmlElementTypeFrom<_HtmlDetails>

interface _HtmlDialog extends HtmlElement {}
type HtmlDialog = HtmlElementTypeFrom<_HtmlDialog>

interface _HtmlDiv extends HtmlElement {}
type HtmlDiv = HtmlElementTypeFrom<_HtmlDiv>

interface _HtmlDList extends HtmlElement {}
type HtmlDList = HtmlElementTypeFrom<_HtmlDList>

interface _HtmlEmbed extends HtmlElement {}
type HtmlEmbed = HtmlElementTypeFrom<_HtmlEmbed>

interface _HtmlFieldSet extends HtmlElement {}
type HtmlFieldSet = HtmlElementTypeFrom<_HtmlFieldSet>

interface _HtmlForm extends HtmlElement {}
type HtmlForm = HtmlElementTypeFrom<_HtmlForm>

interface _HtmlHeading extends HtmlElement {}
type HtmlHeading = HtmlElementTypeFrom<_HtmlHeading>

interface _HtmlHead extends HtmlElement {}
type HtmlHead = HtmlElementTypeFrom<_HtmlHead>

interface _HtmlHR extends HtmlElement {}
type HtmlHR = HtmlElementTypeFrom<_HtmlHR>

interface _HtmlHtml extends HtmlElement {}
type HtmlHtml = HtmlElementTypeFrom<_HtmlHtml>

interface HtmlHyperLink {
	hash: string
	host: string
	hostname: string
	href: string
	password: string
	pathname: string
	port: string
	protocol: string
	search: string
	username: string
}

interface _HtmlIFrame extends HtmlElement {}
type HtmlIFrame = HtmlElementTypeFrom<_HtmlIFrame>

interface _HtmlImage extends HtmlElement {}
type HtmlImage = HtmlElementTypeFrom<_HtmlImage>

interface _HtmlInput extends HtmlElement {}
type HtmlInput = HtmlElementTypeFrom<_HtmlInput>

interface _HtmlLabel extends HtmlElement {}
type HtmlLabel = HtmlElementTypeFrom<_HtmlLabel>

interface _HtmlLegend extends HtmlElement {}
type HtmlLegend = HtmlElementTypeFrom<_HtmlLegend>

interface _HtmlLI extends HtmlElement {}
type HtmlLI = HtmlElementTypeFrom<_HtmlLI>

interface _HtmlLink extends HtmlElement {}
type HtmlLink = HtmlElementTypeFrom<_HtmlLink>

interface _HtmlMap extends HtmlElement {}
type HtmlMap = HtmlElementTypeFrom<_HtmlMap>

interface HtmlMedia {
	autoplay: boolean
	controls: boolean
	crossOrigin: string
	currentTime: number
	defaultMuted: boolean
	defaultPlaybackRate: number
	disableRemotePlayback: boolean
	loop: boolean
	muted: boolean
	onencrypted: (event: MediaEncryptedEvent) => void
	onwaitingforkey: (event: Event) => void
	playbackRate: number
	preload: 'none' | 'metadata' | 'auto'
	preservesPitch: boolean
	src: string
	srcObject: MediaProvider
	volume: number
}

interface _HtmlMenu extends HtmlElement {}
type HtmlMenu = HtmlElementTypeFrom<_HtmlMenu>

interface _HtmlMeta extends HtmlElement {}
type HtmlMeta = HtmlElementTypeFrom<_HtmlMeta>

interface _HtmlMeter extends HtmlElement {}
type HtmlMeter = HtmlElementTypeFrom<_HtmlMeter>

interface _HtmlObject extends HtmlElement {}
type HtmlObject = HtmlElementTypeFrom<_HtmlObject>

interface _HtmlOList extends HtmlElement {}
type HtmlOList = HtmlElementTypeFrom<_HtmlOList>

interface _HtmlOptGroup extends HtmlElement {}
type HtmlOptGroup = HtmlElementTypeFrom<_HtmlOptGroup>

interface _HtmlOption extends HtmlElement {}
type HtmlOption = HtmlElementTypeFrom<_HtmlOption>

interface _HtmlOutput extends HtmlElement {}
type HtmlOutput = HtmlElementTypeFrom<_HtmlOutput>

interface _HtmlParagraph extends HtmlElement {}
type HtmlParagraph = HtmlElementTypeFrom<_HtmlParagraph>

interface _HtmlPicture extends HtmlElement {}
type HtmlPicture = HtmlElementTypeFrom<_HtmlPicture>

interface _HtmlPre extends HtmlElement {}
type HtmlPre = HtmlElementTypeFrom<_HtmlPre>

interface _HtmlProgress extends HtmlElement {}
type HtmlProgress = HtmlElementTypeFrom<_HtmlProgress>

interface _HtmlScript extends HtmlElement {}
type HtmlScript = HtmlElementTypeFrom<_HtmlScript>

interface _HtmlSelect extends HtmlElement {}
type HtmlSelect = HtmlElementTypeFrom<_HtmlSelect>

interface _HtmlSource extends HtmlElement {}
type HtmlSource = HtmlElementTypeFrom<_HtmlSource>

interface _HtmlSpan extends HtmlElement {}
type HtmlSpan = HtmlElementTypeFrom<_HtmlSpan>

interface _HtmlStyle extends HtmlElement {}
type HtmlStyle = HtmlElementTypeFrom<_HtmlStyle>

interface _HtmlTable extends HtmlElement {}
type HtmlTable = HtmlElementTypeFrom<_HtmlTable>

interface _HtmlTableSection extends HtmlElement {}
type HtmlTableSection = HtmlElementTypeFrom<_HtmlTableSection>

interface _HtmlTableCell extends HtmlElement {}
type HtmlTableCell = HtmlElementTypeFrom<_HtmlTableCell>

interface _HtmlTextArea extends HtmlElement {}
type HtmlTextArea = HtmlElementTypeFrom<_HtmlTextArea>

interface _HtmlTime extends HtmlElement {}
type HtmlTime = HtmlElementTypeFrom<_HtmlTime>

interface _HtmlTitle extends HtmlElement {}
type HtmlTitle = HtmlElementTypeFrom<_HtmlTitle>

interface _HtmlTableRow extends HtmlElement {}
type HtmlTableRow = HtmlElementTypeFrom<_HtmlTableRow>

interface _HtmlTrack extends HtmlElement {}
type HtmlTrack = HtmlElementTypeFrom<_HtmlTrack>

interface _HtmlUList extends HtmlElement {}
type HtmlUList = HtmlElementTypeFrom<_HtmlUList>

interface _HtmlVideo extends HtmlElement {}
type HtmlVideo = HtmlElementTypeFrom<_HtmlVideo>
