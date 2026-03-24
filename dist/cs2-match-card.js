const $4fcaa3c95ba349ea$export$a4ad2735b021c132 = "v0.1.2";


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$h, getOwnPropertyNames: $19fe8e3abedf4df0$var$r, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$b = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $19fe8e3abedf4df0$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $19fe8e3abedf4df0$var$h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$r(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i, e = !1, h) {
        if (void 0 !== t) {
            const r = this.constructor;
            if (!1 === e && (h = this[t]), i ??= r.getPropertyOptions(t), !((i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.1.2");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = (t)=>t, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$e = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$h = "$lit$", $f58f44579a4747ac$var$o = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$n = "?" + $f58f44579a4747ac$var$o, $f58f44579a4747ac$var$r = `<${$f58f44579a4747ac$var$n}>`, $f58f44579a4747ac$var$l = document, $f58f44579a4747ac$var$c = ()=>$f58f44579a4747ac$var$l.createComment(""), $f58f44579a4747ac$var$a = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$u = Array.isArray, $f58f44579a4747ac$var$d = (t)=>$f58f44579a4747ac$var$u(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$f = "[ \t\n\f\r]", $f58f44579a4747ac$var$v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$_ = /-->/g, $f58f44579a4747ac$var$m = />/g, $f58f44579a4747ac$var$p = RegExp(`>|${$f58f44579a4747ac$var$f}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$f}*=${$f58f44579a4747ac$var$f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$g = /'/g, $f58f44579a4747ac$var$$ = /"/g, $f58f44579a4747ac$var$y = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$x = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$x(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$x(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$x(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$C = new WeakMap, $f58f44579a4747ac$var$P = $f58f44579a4747ac$var$l.createTreeWalker($f58f44579a4747ac$var$l, 129);
function $f58f44579a4747ac$var$V(t, i) {
    if (!$f58f44579a4747ac$var$u(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$e ? $f58f44579a4747ac$var$e.createHTML(i) : i;
}
const $f58f44579a4747ac$var$N = (t, i)=>{
    const s = t.length - 1, e = [];
    let n, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $f58f44579a4747ac$var$v;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, f = 0;
        for(; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);)f = c.lastIndex, c === $f58f44579a4747ac$var$v ? "!--" === u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[1] ? c = $f58f44579a4747ac$var$m : void 0 !== u[2] ? ($f58f44579a4747ac$var$y.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$p) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$p ? ">" === u[0] ? (c = n ?? $f58f44579a4747ac$var$v, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$p : '"' === u[3] ? $f58f44579a4747ac$var$$ : $f58f44579a4747ac$var$g) : c === $f58f44579a4747ac$var$$ || c === $f58f44579a4747ac$var$g ? c = $f58f44579a4747ac$var$p : c === $f58f44579a4747ac$var$_ || c === $f58f44579a4747ac$var$m ? c = $f58f44579a4747ac$var$v : (c = $f58f44579a4747ac$var$p, n = void 0);
        const x = c === $f58f44579a4747ac$var$p && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$v ? s + $f58f44579a4747ac$var$r : d >= 0 ? (e.push(a), s.slice(0, d) + $f58f44579a4747ac$var$h + s.slice(d) + $f58f44579a4747ac$var$o + x) : s + $f58f44579a4747ac$var$o + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        e
    ];
};
class $f58f44579a4747ac$var$S {
    constructor({ strings: t, _$litType$: i }, e){
        let r;
        this.parts = [];
        let l = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$N(t, i);
        if (this.el = $f58f44579a4747ac$var$S.createElement(f, e), $f58f44579a4747ac$var$P.currentNode = this.el.content, 2 === i || 3 === i) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$P.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$h)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$o), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: l,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$I : "?" === e[1] ? $f58f44579a4747ac$var$L : "@" === e[1] ? $f58f44579a4747ac$var$z : $f58f44579a4747ac$var$H
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$o) && (d.push({
                    type: 6,
                    index: l
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$y.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$o), i = t.length - 1;
                    if (i > 0) {
                        r.textContent = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)r.append(t[s], $f58f44579a4747ac$var$c()), $f58f44579a4747ac$var$P.nextNode(), d.push({
                            type: 2,
                            index: ++l
                        });
                        r.append(t[i], $f58f44579a4747ac$var$c());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$n) d.push({
                    type: 2,
                    index: l
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$o, t + 1));)d.push({
                        type: 7,
                        index: l
                    }), t += $f58f44579a4747ac$var$o.length - 1;
                }
            }
            l++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$l.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$M(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$a(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$M(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$R {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$l).importNode(i, !0);
        $f58f44579a4747ac$var$P.currentNode = e;
        let h = $f58f44579a4747ac$var$P.nextNode(), o = 0, n = 0, r = s[0];
        for(; void 0 !== r;){
            if (o === r.index) {
                let i;
                2 === r.type ? i = new $f58f44579a4747ac$var$k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new $f58f44579a4747ac$var$Z(h, this, t)), this._$AV.push(i), r = s[++n];
            }
            o !== r?.index && (h = $f58f44579a4747ac$var$P.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$P.currentNode = $f58f44579a4747ac$var$l, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$k {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$M(this, t, i), $f58f44579a4747ac$var$a(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$d(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$a(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$l.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$S.createElement($f58f44579a4747ac$var$V(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$R(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$C.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$C.set(t.strings, i = new $f58f44579a4747ac$var$S(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$k(this.O($f58f44579a4747ac$var$c()), this.O($f58f44579a4747ac$var$c()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, s) {
        for(this._$AP?.(!1, !0, s); t !== this._$AB;){
            const s = $f58f44579a4747ac$var$i(t).nextSibling;
            $f58f44579a4747ac$var$i(t).remove(), t = s;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$H {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$M(this, t, i, 0), o = !$f58f44579a4747ac$var$a(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$M(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$a(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$H {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$H {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$z extends $f58f44579a4747ac$var$H {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$M(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$M(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$h,
    P: $f58f44579a4747ac$var$o,
    A: $f58f44579a4747ac$var$n,
    C: 1,
    L: $f58f44579a4747ac$var$N,
    R: $f58f44579a4747ac$var$R,
    D: $f58f44579a4747ac$var$d,
    V: $f58f44579a4747ac$var$M,
    I: $f58f44579a4747ac$var$k,
    H: $f58f44579a4747ac$var$H,
    N: $f58f44579a4747ac$var$L,
    U: $f58f44579a4747ac$var$z,
    B: $f58f44579a4747ac$var$I,
    F: $f58f44579a4747ac$var$Z
}, $f58f44579a4747ac$var$B = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$B?.($f58f44579a4747ac$var$S, $f58f44579a4747ac$var$k), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.3.2");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$k(i.insertBefore($f58f44579a4747ac$var$c(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $ab210b2da7b39b9d$var$s = globalThis;
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, $ab210b2da7b39b9d$var$s.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$o = $ab210b2da7b39b9d$var$s.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$o?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($ab210b2da7b39b9d$var$s.litElementVersions ??= []).push("4.2.2");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;






function $32e2f72be859b718$export$d6bad15bd473a528(c) {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <ha-card class="card">
      <!-- Background logos -->
      <img class="team-bg" src="${c.logo[1] || "/local/cs2-placeholder.png"}" alt="" />
      <img class="opponent-bg" src="${c.logo[2] || "/local/cs2-placeholder.png"}" alt="" />
      
      ${c.title ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="title">${c.title}</div>` : ""}
      <div class="line"></div>
      ${c.venue ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="venue">${c.venue}</div>` : ""}
      <div class="card-content">
        <div class="team">
          <div class="logo-box">
            <img
              class="logo"
              src="${c.logo[1] || "/local/cs2-placeholder.png"}"
              alt="${c.name[1]}"
              @error="${(e)=>e.target.style.display = "none"}"
            />
          </div>
          <div class="name">${c.name[1] || "\u2014"}</div>
        </div>
        <div class="divider">${c.vs}</div>
        <div class="team">
          <div class="logo-box">
            <img
              class="logo"
              src="${c.logo[2] || "/local/cs2-placeholder.png"}"
              alt="${c.name[2]}"
              @error="${(e)=>e.target.style.display = "none"}"
            />
          </div>
          <div class="name">${c.name[2] || "\u2014"}</div>
        </div>
      </div>
      ${c.gameWeekday || c.gameDate || c.gameTime ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
        <div class="date-time">
          ${[
        c.gameWeekday,
        c.gameDate,
        c.gameTime
    ].filter(Boolean).join(" \u2022 ")}
        </div>
      ` : ""}
    </ha-card>
  `;
}



function $654f96c20a3bcd40$export$3f4c9efb42c5bfd8(c) {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <ha-card class="card">
      <!-- Background logos -->
      <img class="team-bg" src="${c.logo[1] || "/local/cs2-placeholder.png"}" alt="" />
      <img class="opponent-bg" src="${c.logo[2] || "/local/cs2-placeholder.png"}" alt="" />
      
      ${c.title ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="title">${c.title}</div>` : ""}
      <div class="line"></div>
      <div class="live-venue-row">
        ${c.venue ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="venue-center">${c.venue}</div>` : ""}
        <div class="live-badge">${c.live}</div>
      </div>
      <div class="card-content">
        <div class="team">
          <div class="logo-box">
            <img
              class="logo"
              src="${c.logo[1] || ""}"
              alt="${c.name[1]}"
              @error="${(e)=>e.target.style.display = "none"}"
            />
          </div>
          <div class="name">${c.name[1] || "\u2014"}</div>
          <div class="score">${c.score[1] ?? "\u2014"}</div>
        </div>
        <div class="divider">:</div>
        <div class="team">
          <div class="logo-box">
            <img
              class="logo"
              src="${c.logo[2] || ""}"
              alt="${c.name[2]}"
              @error="${(e)=>e.target.style.display = "none"}"
            />
          </div>
          <div class="name">${c.name[2] || "\u2014"}</div>
          <div class="score">${c.score[2] ?? "\u2014"}</div>
        </div>
      </div>
    </ha-card>
  `;
}



function $ba84a5acf45954c4$export$823f4865e91cfbff(c) {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <ha-card class="card">
      <!-- Background logos -->
      <img class="team-bg" src="${c.logo[1] || "/local/cs2-placeholder.png"}" alt="" />
      <img class="opponent-bg" src="${c.logo[2] || "/local/cs2-placeholder.png"}" alt="" />
      
      ${c.title ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="title">${c.title}</div>` : ""}
      <div class="line"></div>
      <div class="post-status-strip">
        <span class="final-pill">${c.finalStatus || c.final || "FINAL"}</span>
      </div>
      <div class="card-content">
        <div class="team">
          <div class="logo-box">
            <img
              class="logo"
              src="${c.logo[1] || ""}"
              alt="${c.name[1]}"
              @error="${(e)=>e.target.style.display = "none"}"
            />
          </div>
          <div class="name">${c.name[1] || "\u2014"}</div>
          <div class="score">${c.score[1] ?? "\u2014"}</div>
        </div>
        <div class="divider">:</div>
        <div class="team">
          <div class="logo-box">
            <img
              class="logo"
              src="${c.logo[2] || ""}"
              alt="${c.name[2]}"
              @error="${(e)=>e.target.style.display = "none"}"
            />
          </div>
          <div class="name">${c.name[2] || "\u2014"}</div>
          <div class="score">${c.score[2] ?? "\u2014"}</div>
        </div>
      </div>
      ${c.scoreKind === "maps" ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="score-context">${c.mapsLabel}</div>` : ""}
      ${c.scoreKind === "none" ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="score-context">${c.noScoreHint}</div>` : ""}
      ${c.venue ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="venue">${c.venue}</div>` : ""}
    </ha-card>
  `;
}



function $5cc9eebd21270610$export$cbe2629e62de17f0(c) {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <ha-card class="card">
      ${c.title ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="title">${c.title}</div>` : ""}
      <div class="line"></div>
      <div class="not-found-msg">
        ${c.notFoundMsg}
      </div>
    </ha-card>
  `;
}



function $07b3e4094688f328$export$b2e19b637b85e37f() {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``;
}
function $07b3e4094688f328$export$adab126bb38c4dbc(entity) {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <ha-card class="card">
      <div class="not-found-msg">Unknown entity: ${entity}</div>
    </ha-card>
  `;
}
function $07b3e4094688f328$export$83a5095ba0388927(entity) {
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <ha-card class="card">
      <div class="not-found-msg">Sensor unavailable: ${entity}</div>
    </ha-card>
  `;
}



const $1a7c5d625ead7579$export$c579ff79a032fc68 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  .card {
    position: relative;
    overflow: hidden;
    padding: 16px 16px 20px;
    font-weight: 400;
    border-radius: var(--ha-card-border-radius, 10px);
  }
  .team-bg {
    opacity: 0.02;
    position: absolute;
    top: 50%;
    left: -10%;
    width: 70%;
    height: 70%;
    transform: translateY(-50%);
    object-fit: contain;
    z-index: 0;
  }
  .opponent-bg {
    opacity: 0.02;
    position: absolute;
    top: 50%;
    right: -10%;
    width: 70%;
    height: 70%;
    transform: translateY(-50%);
    object-fit: contain;
    z-index: 0;
  }
  .title {
    text-align: center;
    font-size: 1.2em;
    font-weight: 500;
    position: relative;
    z-index: 1;
  }
  .card-content {
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  .team {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 35%;
    min-width: 0;
  }
  .logo-box {
    width: min(100%, 132px);
    height: 7.5rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
  }
  .logo-box .logo {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }
  .score {
    font-size: var(--score_size, 3em);
    opacity: var(--score_opacity, 1);
    text-align: center;
    line-height: 1;
  }
  .name {
    font-size: 1.4em;
  }
  .line {
    height: 1px;
    background-color: var(--primary-text-color);
    margin: 10px 0;
    position: relative;
    z-index: 1;
  }
  .live-venue-row {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 8px;
    z-index: 1;
  }
  .venue-center {
    font-size: 1em;
    color: var(--secondary-text-color);
    text-align: center;
    flex: 1;
  }
  .live-badge {
    background: #e53935;
    color: white;
    font-size: 0.9em;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    position: absolute;
    right: 0;
  }
  .final-badge {
    background: #2e7d32;
    color: white;
    font-size: 0.9em;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    position: absolute;
    right: 0;
  }
  .post-status-strip {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 0 16px;
    position: relative;
    z-index: 2;
    min-height: 36px;
  }
  .final-pill {
    display: inline-block;
    background: #2e7d32;
    color: #fff;
    font-size: 0.88em;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding: 8px 20px;
    border-radius: 999px;
    text-transform: uppercase;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
    z-index: 2;
    position: relative;
  }
  .score-context {
    font-size: 0.85em;
    color: var(--secondary-text-color);
    text-align: center;
    margin: 6px 0 0;
    position: relative;
    z-index: 1;
  }
  .venue {
    font-size: 1em;
    color: var(--secondary-text-color);
    text-align: center;
    margin: 4px 0 12px;
    position: relative;
    z-index: 1;
  }
  .date-time {
    text-align: center;
    margin: 8px 0;
    font-size: 1.1em;
    font-weight: 500;
    position: relative;
    z-index: 1;
  }
  .game-weekday {
    font-size: 1.4em;
    font-weight: 500;
  }
  .game-date {
    font-size: 1.1em;
  }
  .game-time {
    font-size: 1.1em;
  }
  .divider {
    font-size: 2.5em;
    line-height: 1;
    text-align: center;
    margin: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .not-found-msg {
    font-size: 1.2em;
    text-align: center;
    padding: 20px;
    position: relative;
    z-index: 1;
  }
`;


const $22b27e2d84aa9878$var$translations = {
    en: {
        today: "Today",
        tomorrow: "Tomorrow",
        vs: "vs",
        live: "LIVE",
        final: "FINAL",
        final_status: "FINISHED",
        maps_won: "Maps",
        no_score_available: "Score unavailable",
        no_match: "No upcoming match",
        no_match_for_team: "No upcoming matches found for {team}"
    },
    pt: {
        today: "Hoje",
        tomorrow: "Amanh\xe3",
        vs: "vs",
        live: "AO VIVO",
        final: "FINAL",
        final_status: "Finalizado",
        maps_won: "Mapas",
        no_score_available: "Placar indispon\xedvel",
        no_match: "Nenhum jogo pr\xf3ximo",
        no_match_for_team: "Nenhum jogo encontrado para {team}"
    }
};
function $22b27e2d84aa9878$export$b3bd0bc58e36cd63(key, hass, params = {}) {
    const language = hass?.language || hass?.locale?.language || "en";
    const lang = language.split("-")[0]; // "pt-BR" -> "pt"
    let text = $22b27e2d84aa9878$var$translations[lang]?.[key] || $22b27e2d84aa9878$var$translations.en[key] || key;
    // Replace placeholders like {team}
    Object.keys(params).forEach((param)=>{
        text = text.replace(`{${param}}`, params[param]);
    });
    return text;
}
function $22b27e2d84aa9878$export$228c5680a42db823(date, hass) {
    if (!date) return null;
    try {
        const d = new Date(date);
        // Check if date is valid
        if (isNaN(d.getTime())) {
            console.error("Invalid date:", date);
            return null;
        }
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const isToday = d.toDateString() === today.toDateString();
        const isTomorrow = d.toDateString() === tomorrow.toDateString();
        const language = hass?.language || hass?.locale?.language || "pt-BR";
        if (isToday) return {
            weekday: $22b27e2d84aa9878$export$b3bd0bc58e36cd63("today", hass),
            date: d.toLocaleDateString(language, {
                month: "long",
                day: "numeric"
            }),
            time: d.toLocaleTimeString(language, {
                hour: "2-digit",
                minute: "2-digit"
            })
        };
        else if (isTomorrow) return {
            weekday: $22b27e2d84aa9878$export$b3bd0bc58e36cd63("tomorrow", hass),
            date: d.toLocaleDateString(language, {
                month: "long",
                day: "numeric"
            }),
            time: d.toLocaleTimeString(language, {
                hour: "2-digit",
                minute: "2-digit"
            })
        };
        else return {
            weekday: d.toLocaleDateString(language, {
                weekday: "long"
            }),
            date: d.toLocaleDateString(language, {
                month: "long",
                day: "numeric"
            }),
            time: d.toLocaleTimeString(language, {
                hour: "2-digit",
                minute: "2-digit"
            })
        };
    } catch (error) {
        console.warn("Error parsing date:", date, error);
        return null;
    }
}


function $542433e8f350e815$var$_usableScore(v) {
    if (v === null || v === undefined) return false;
    if (typeof v === "string") {
        const s = v.trim().toLowerCase();
        if (s === "" || s === "unknown" || s === "unavailable" || s === "none") return false;
    }
    return true;
}
function $542433e8f350e815$var$_toDisplayNumber(v) {
    if (!$542433e8f350e815$var$_usableScore(v)) return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
}
function $542433e8f350e815$var$_apiMatchStatus(stateObj) {
    const a = stateObj?.attributes ?? {};
    return String(a.match_status ?? a.status ?? "").toLowerCase().trim();
}
/** BO3: alguém com ≥2 mapas; BO5: ≥3 (fallback se state/status não marcarem fim). */ function $542433e8f350e815$var$_seriesDecidedByMapWins(attrs) {
    const w1 = Number(attrs?.team1Win);
    const w2 = Number(attrs?.team2Win);
    if (!Number.isFinite(w1) || !Number.isFinite(w2)) return false;
    if (w1 >= 3 || w2 >= 3) return true;
    if (w1 >= 2 || w2 >= 2) return true;
    return false;
}
function $542433e8f350e815$var$_isFinishedMatchView(stateObj) {
    if (!stateObj || stateObj.state === "NOT_FOUND") return false;
    if (stateObj.state === "POST") return true;
    const st = $542433e8f350e815$var$_apiMatchStatus(stateObj);
    if (st === "end" || st === "over" || st === "finished" || st === "ended") return true;
    return $542433e8f350e815$var$_seriesDecidedByMapWins(stateObj.attributes || {});
}
class $542433e8f350e815$export$703d10387f56a16f extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static get properties() {
        return {
            hass: {},
            _config: {}
        };
    }
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
      ${0, $1a7c5d625ead7579$export$c579ff79a032fc68}
    `;
    }
    setConfig(config) {
        this._config = config;
    }
    getCardSize() {
        const stateObj = this.hass?.states?.[this._config?.entity];
        if (!stateObj) return 4;
        if ($542433e8f350e815$var$_isFinishedMatchView(stateObj)) return 6;
        switch(stateObj.state){
            case "PRE":
                return 6;
            case "IN":
                return 7;
            case "POST":
                return 6;
            case "NOT_FOUND":
                return 4;
            default:
                return 4;
        }
    }
    _buildCardData(stateObj) {
        const attrs = stateObj?.attributes || {};
        const c = {
            logo: {},
            name: {},
            score: {},
            title: this._config.card_title || "",
            date: attrs.date || null,
            venue: attrs.venue || null,
            gameTime: null,
            notFoundMsg: attrs.api_message || this._getNoMatchMessage(attrs),
            vs: (0, $22b27e2d84aa9878$export$b3bd0bc58e36cd63)("vs", this.hass),
            live: (0, $22b27e2d84aa9878$export$b3bd0bc58e36cd63)("live", this.hass),
            final: (0, $22b27e2d84aa9878$export$b3bd0bc58e36cd63)("final", this.hass),
            finalStatus: (0, $22b27e2d84aa9878$export$b3bd0bc58e36cd63)("final_status", this.hass)
        };
        c.logo[1] = attrs.team_logo;
        c.logo[2] = attrs.opponent_logo;
        c.name[1] = attrs.team_name || stateObj.entity_id?.split(".")[1] || "\u2014";
        c.name[2] = attrs.opponent_name || "\u2014";
        const r1 = $542433e8f350e815$var$_toDisplayNumber(attrs.team_score);
        const r2 = $542433e8f350e815$var$_toDisplayNumber(attrs.opponent_score);
        const m1 = $542433e8f350e815$var$_toDisplayNumber(attrs.team1Win);
        const m2 = $542433e8f350e815$var$_toDisplayNumber(attrs.team2Win);
        if (r1 !== null && r2 !== null) {
            c.score[1] = r1;
            c.score[2] = r2;
            c.scoreKind = "rounds";
        } else if (m1 !== null || m2 !== null) {
            c.score[1] = m1 ?? "\u2014";
            c.score[2] = m2 ?? "\u2014";
            c.scoreKind = "maps";
        } else {
            c.score[1] = null;
            c.score[2] = null;
            c.scoreKind = "none";
        }
        c.mapsLabel = (0, $22b27e2d84aa9878$export$b3bd0bc58e36cd63)("maps_won", this.hass);
        c.noScoreHint = (0, $22b27e2d84aa9878$export$b3bd0bc58e36cd63)("no_score_available", this.hass);
        if (attrs.date) {
            const dateInfo = (0, $22b27e2d84aa9878$export$228c5680a42db823)(attrs.date, this.hass);
            if (dateInfo) {
                c.gameWeekday = dateInfo.weekday;
                c.gameDate = dateInfo.date;
                c.gameTime = dateInfo.time;
            }
        }
        return c;
    }
    _getNoMatchMessage(attrs) {
        const teamName = attrs.team_name;
        if (teamName && teamName !== "\u2014") return (0, $22b27e2d84aa9878$export$b3bd0bc58e36cd63)("no_match_for_team", this.hass, {
            team: teamName
        });
        return (0, $22b27e2d84aa9878$export$b3bd0bc58e36cd63)("no_match", this.hass);
    }
    render() {
        if (!this.hass || !this._config) return (0, $07b3e4094688f328$export$b2e19b637b85e37f)();
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) return (0, $07b3e4094688f328$export$adab126bb38c4dbc)(this._config.entity);
        if (stateObj.state === "unavailable") return (0, $07b3e4094688f328$export$83a5095ba0388927)(this._config.entity);
        const c = this._buildCardData(stateObj);
        if ($542433e8f350e815$var$_isFinishedMatchView(stateObj)) return (0, $ba84a5acf45954c4$export$823f4865e91cfbff)(c);
        switch(stateObj.state){
            case "PRE":
                return (0, $32e2f72be859b718$export$d6bad15bd473a528)(c);
            case "IN":
                return (0, $654f96c20a3bcd40$export$3f4c9efb42c5bfd8)(c);
            case "POST":
                return (0, $ba84a5acf45954c4$export$823f4865e91cfbff)(c);
            case "NOT_FOUND":
                return (0, $5cc9eebd21270610$export$cbe2629e62de17f0)(c);
            default:
                return (0, $5cc9eebd21270610$export$cbe2629e62de17f0)({
                    ...c,
                    notFoundMsg: `State: ${stateObj.state}`
                });
        }
    }
    static getConfigElement() {
        return document.createElement("cs2-match-card-editor");
    }
}



class $de5768471e29ae80$export$f6ee18cdf0222855 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static get properties() {
        return {
            _config: {
                type: Object
            },
            hass: {
                type: Object
            },
            _entity: {
                type: String
            }
        };
    }
    constructor(){
        super();
        this._entity = "";
    }
    setConfig(config) {
        if (!config) throw new Error("Invalid configuration");
        this._config = config;
        this._entity = config.entity || "";
    }
    updated(changedProperties) {
        if (changedProperties.has("_config") && this._config?.entity) this._entity = this._config.entity;
    }
    _entityChanged(ev) {
        const val = ev.detail?.value ?? ev.target?.value ?? "";
        this._entity = val;
        this._config = {
            ...this._config,
            entity: val
        };
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: {
                config: this._config
            },
            bubbles: true,
            composed: true
        }));
        this.requestUpdate();
    }
    _valueChanged(ev, key) {
        const val = ev.target.checked !== undefined ? ev.target.checked : ev.target.value;
        this._config = {
            ...this._config,
            [key]: val
        };
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: {
                config: this._config
            },
            bubbles: true,
            composed: true
        }));
        this.requestUpdate();
    }
    render() {
        if (!this.hass || !this._config) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="card-config">
        <div class="textfield-container">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._entity}
            .label=${"CS2 Tracker sensor"}
            allow-custom-entity
            @value-changed=${this._entityChanged}
          ></ha-entity-picker>
        </div>
        <div class="textfield-container">
          <ha-textfield
            .label=${"Card title (optional)"}
            .value=${this._config.card_title || ""}
            @input=${(e)=>this._valueChanged(e, "card_title")}
          ></ha-textfield>
        </div>
      </div>
    `;
    }
}


customElements.define("cs2-match-card", (0, $542433e8f350e815$export$703d10387f56a16f));
customElements.define("cs2-match-card-editor", (0, $de5768471e29ae80$export$f6ee18cdf0222855));
console.info("%c CS2-MATCH-CARD %s IS INSTALLED", "color: green; font-weight: bold", (0, $4fcaa3c95ba349ea$export$a4ad2735b021c132));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "custom:cs2-match-card",
    name: "CS2 Match Card",
    preview: false,
    description: "Card to display the cs2_tracker sensor next match"
});


//# sourceMappingURL=cs2-match-card.js.map
