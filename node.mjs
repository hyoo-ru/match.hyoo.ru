#!/usr/bin/env node
"use strict";
var exports = void 0;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;

;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object' && typeof having !== 'function')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return this[Symbol.toStringTag] || this.$.$mol_func_name(this);
        }
        static toJSON() {
            return this.toString();
        }
        destructor() { }
        static destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '<>';
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            return {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.length = end;
            if (end === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        get incompleted() {
            return false;
        }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                try {
                    return val[$.$mol_dev_format_head]();
                }
                catch (error) {
                    return $.$mol_dev_format_accent($mol_dev_format_native(val), '💨', $mol_dev_format_native(error), '');
                }
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            if (Symbol.toStringTag in val) {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
            }
            this.data.length = this.sub_from;
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let end = this.data.length;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                end -= 2;
                if (this.sub_from <= end)
                    this.peer_move(end, cursor);
            }
            this.data.length = end;
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        static promise = null;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            if (!$mol_after_tick.promise)
                $mol_after_tick.promise = Promise.resolve().then(() => {
                    $mol_after_tick.promise = null;
                });
            $mol_after_tick.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        try {
            return val && typeof val === 'object' && 'then' in val && typeof val.then === 'function';
        }
        catch {
            return false;
        }
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const wrappers = new WeakMap();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_tick(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        [Symbol.toStringTag];
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '<>';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
            return this;
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_owning_check(this, this.cache)
                ? $mol_dev_format_auto({
                    [$mol_dev_format_head]: () => $mol_dev_format_shade(cursor),
                    [$mol_dev_format_body]: () => $mol_dev_format_native(this),
                })
                : $mol_dev_format_shade($mol_dev_format_native(this), cursor), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result).then(a => a);
                    }
                    else {
                        const put = (res) => {
                            if (this.cache === result)
                                this.put(res);
                            return res;
                        };
                        wrappers.set(result, result = Object.assign(result.then(put, put), { destructor: result.destructor || (() => { }) }));
                        wrappers.set(result, result);
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result)) {
                    if (wrappers.has(result)) {
                        result = wrappers.get(result);
                    }
                    else {
                        wrappers.set(result, result = Object.assign(result.finally(() => {
                            if (this.cache === result)
                                this.absorb();
                        }), { destructor: result.destructor || (() => { }) }));
                        const error = new Error(`Promise in ${this}`);
                        Object.defineProperty(result, 'stack', { get: () => error.stack });
                    }
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
            return this;
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async_raw() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await Promise.race([this.cache, this.step()]);
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
        async() {
            const promise = this.async_raw();
            if (!promise.destructor)
                promise.destructor = () => this.destructor();
            return promise;
        }
        step() {
            return new Promise(done => {
                const sub = new $mol_wire_pub_sub;
                const prev = sub.track_on();
                sub.track_next(this);
                sub.track_off(prev);
                sub.absorb = () => {
                    done(null);
                    setTimeout(() => sub.destructor());
                };
            });
        }
        destructor() {
            super.destructor();
            if ($mol_owning_check(this, this.cache)) {
                this.cache.destructor();
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    const TypedArray = Object.getPrototypeOf(Uint8Array);
    function $mol_key(value) {
        if (typeof value === 'bigint')
            return value.toString() + 'n';
        if (typeof value === 'symbol')
            return value.description;
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (typeof value === 'bigint')
                return value.toString() + 'n';
            if (typeof value === 'symbol')
                return value.description;
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            if (value instanceof TypedArray)
                return [...value];
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_after_timeout {
        task;
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && left.stack === right.stack;
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap();
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        left_cache.set(right, true);
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        if (left instanceof DataView)
            return compare_buffer(new Uint8Array(left.buffer, left.byteOffset, left.byteLength), new Uint8Array(right.buffer, left.byteOffset, left.byteLength));
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_span extends $mol_object2 {
        uri;
        source;
        row;
        col;
        length;
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = this.uri + ('#' + this.row + ':' + this.col + '/' + this.length);
        }
        static unknown = $mol_span.begin('?');
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, 0);
        }
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        error(message, Class = Error) {
            return new Class(`${message} (${this})`);
        }
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(this.error(`Begin value '${begin}' out of range`, RangeError));
            if (end < 0 || end > len)
                this.$.$mol_fail(this.error(`End value '${end}' out of range`, RangeError));
            if (end < begin)
                this.$.$mol_fail(this.error(`End value '${end}' can't be less than begin value`, RangeError));
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $.$mol_span = $mol_span;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_tree2 extends Object {
        type;
        value;
        kids;
        span;
        constructor(type, value, kids, span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        static list(kids, span = $mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        static data(value, kids = [], span = $mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        static struct(type, kids = [], span = $mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                $$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        static fromString(str, uri = 'unknown') {
            return $$.$mol_tree2_from_string(str, uri);
        }
        toString() {
            return $$.$mol_tree2_to_string(this);
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                }).filter(Boolean);
                if (!replaced && value) {
                    sub.push(this.struct(type, []).insert(value, ...path.slice(1)));
                }
                return this.clone(sub);
            }
            else if (typeof type === 'number') {
                const sub = this.kids.slice();
                sub[type] = (sub[type] || this.list([]))
                    .insert(value, ...path.slice(1));
                return this.clone(sub.filter(Boolean));
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .map(item => item.insert(value, ...path.slice(1)))
                    .filter(Boolean);
                return this.clone(kids);
            }
        }
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (child.type == type) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack_self(belt, context = {}) {
            let handle = belt[this.type] || belt[''];
            if (!handle || handle === Object.prototype[this.type]) {
                handle = (input, belt, context) => [
                    input.clone(input.hack(belt, context), context.span)
                ];
            }
            try {
                return handle(this, belt, context);
            }
            catch (error) {
                error.message += `\n${this.clone([])}${this.span}`;
                $mol_fail_hidden(error);
            }
        }
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => child.hack_self(belt, context)));
        }
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_error_syntax extends SyntaxError {
        reason;
        line;
        span;
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_string(str, uri = '?') {
        const span = $mol_span.entire(uri, str);
        var root = $mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start + 1, pos - error_start);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 2, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Unexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_json(json, span = $mol_span.unknown) {
        if (typeof json === 'boolean' || typeof json === 'number' || json === null) {
            return new $mol_tree2(String(json), '', [], span);
        }
        if (typeof json === 'string') {
            return $mol_tree2.data(json, [], span);
        }
        if (typeof json.toJSON === 'function') {
            return $mol_tree2_from_json(json.toJSON());
        }
        if (Array.isArray(json)) {
            const sub = json.map(json => $mol_tree2_from_json(json, span));
            return new $mol_tree2('/', '', sub, span);
        }
        if (ArrayBuffer.isView(json)) {
            const buf = new Uint8Array(json.buffer, json.byteOffset, json.byteLength);
            return $mol_tree2.data(String.fromCharCode(...buf), [], span);
        }
        if (json instanceof Date) {
            return new $mol_tree2('', json.toISOString(), [], span);
        }
        if (json.toString !== Object.prototype.toString) {
            return $mol_tree2.data(json.toString(), [], span);
        }
        if (json instanceof Error) {
            const { name, message, stack } = json;
            json = { ...json, name, message, stack };
        }
        const sub = [];
        for (var key in json) {
            const val = json[key];
            if (val === undefined)
                continue;
            const subsub = $mol_tree2_from_json(val, span);
            if (/^[^\n\t\\ ]+$/.test(key)) {
                sub.push(new $mol_tree2(key, '', [subsub], span));
            }
            else {
                sub.push($mol_tree2.data(key, [subsub], span));
            }
        }
        return new $mol_tree2('*', '', sub, span);
    }
    $.$mol_tree2_from_json = $mol_tree2_from_json;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_term_color {
        static reset = this.ansi(0, 0);
        static bold = this.ansi(1, 22);
        static italic = this.ansi(3, 23);
        static underline = this.ansi(4, 24);
        static inverse = this.ansi(7, 27);
        static hidden = this.ansi(8, 28);
        static strike = this.ansi(9, 29);
        static gray = this.ansi(90, 39);
        static red = this.ansi(91, 39);
        static green = this.ansi(92, 39);
        static yellow = this.ansi(93, 39);
        static blue = this.ansi(94, 39);
        static magenta = this.ansi(95, 39);
        static cyan = this.ansi(96, 39);
        static Gray = (str) => this.inverse(this.gray(str));
        static Red = (str) => this.inverse(this.red(str));
        static Green = (str) => this.inverse(this.green(str));
        static Yellow = (str) => this.inverse(this.yellow(str));
        static Blue = (str) => this.inverse(this.blue(str));
        static Magenta = (str) => this.inverse(this.magenta(str));
        static Cyan = (str) => this.inverse(this.cyan(str));
        static ansi(open, close) {
            if (typeof process === 'undefined')
                return String;
            if (!process.stdout.isTTY)
                return String;
            const prefix = `\x1b[${open}m`;
            const postfix = `\x1b[${close}m`;
            const suffix_regexp = new RegExp(postfix.replace('[', '\\['), 'g');
            return function colorer(str) {
                str = String(str);
                if (str === '')
                    return str;
                const suffix = str.replace(suffix_regexp, prefix);
                return prefix + suffix + postfix;
            };
        }
    }
    $.$mol_term_color = $mol_term_color;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = { time: new Date().toISOString(), ...event };
            let tree = this.$mol_tree2_from_json(event);
            tree = tree.struct(type, tree.kids);
            let str = color(tree.toString());
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', $mol_term_color.blue);
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', $mol_term_color.green);
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', $mol_term_color.red);
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', $mol_term_color.yellow);
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', $mol_term_color.magenta);
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', $mol_term_color.cyan);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                const key = (host?.[Symbol.toStringTag] ?? host) + ('.' + task.name + '<#>');
                const next = new $mol_wire_task(key, task, host, args);
                if (existen?.temp) {
                    $$.$mol_log3_warn({
                        place: '$mol_wire_task',
                        message: `Non idempotency`,
                        sub,
                        pubs: [...sub?.pub_list ?? [], existen],
                        next,
                        hint: 'Ignore it',
                    });
                }
                return next;
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '<>';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = prefix + ('.' + field);
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '<>';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key_str = $mol_key(key);
            if (dict) {
                const existen = dict.get(key_str);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const id = prefix + ('.' + task.name) + ('<' + key_str.replace(/^"|"$/g, "'") + '>');
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(key_str, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete($mol_key(this.args[0]));
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Reflect.defineProperty(descr2.value, 'length', { value: orig.length });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        if (name.startsWith('node:'))
            return target.require(name);
        if (name[0] === '.')
            return target.require(name);
        const mod = target.require('module');
        if (mod.builtinModules.indexOf(name) >= 0)
            return target.require(name);
        try {
            target.require.resolve(name);
        }
        catch {
            const $$ = $;
            $$.$mol_exec('.', 'npm', 'install', '--omit=dev', name);
            try {
                $$.$mol_exec('.', 'npm', 'install', '--omit=dev', '@types/' + name);
            }
            catch (e) {
                if ($$.$mol_fail_catch(e)) {
                    $$.$mol_fail_log(e);
                }
            }
        }
        try {
            return target.require(name);
        }
        catch (error) {
            if ($.$mol_fail_catch(error) && error.code === 'ERR_REQUIRE_ESM') {
                const module = cache.get(name);
                if (module)
                    return module;
                throw import(name).then(module => cache.set(name, module));
            }
            $.$mol_fail_log(error);
            return null;
        }
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
const cache = new Map();
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);

;
"use strict";
var $;
(function ($) {
    function cause_serialize(cause) {
        return JSON.stringify(cause, null, '  ')
            .replace(/\(/, '<')
            .replace(/\)/, ' >');
    }
    function frame_normalize(frame) {
        return (typeof frame === 'string' ? frame : cause_serialize(frame))
            .trim()
            .replace(/at /gm, '   at ')
            .replace(/^(?!    +at )(.*)/gm, '    at | $1 (#)');
    }
    class $mol_error_mix extends AggregateError {
        cause;
        name = $$.$mol_func_name(this.constructor).replace(/^\$/, '') + '_Error';
        constructor(message, cause = {}, ...errors) {
            super(errors, message, { cause });
            this.cause = cause;
            const desc = Object.getOwnPropertyDescriptor(this, 'stack');
            const stack_get = () => desc?.get?.() ?? super.stack ?? desc?.value ?? this.message;
            Object.defineProperty(this, 'stack', {
                get: () => stack_get() + '\n' + [
                    this.cause ?? 'no cause',
                    ...this.errors.flatMap(e => [
                        e.stack,
                        ...e instanceof $mol_error_mix || !e.cause ? [] : [e.cause]
                    ])
                ].map(frame_normalize).join('\n')
            });
            Object.defineProperty(this, 'cause', {
                get: () => cause
            });
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            return $$.$mol_func_name(this);
        }
        static make(...params) {
            return new this(...params);
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const factories = new WeakMap();
    function factory(val) {
        let make = factories.get(val);
        if (make)
            return make;
        make = $mol_func_name_from((...args) => new val(...args), val);
        factories.set(val, make);
        return make;
    }
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                let val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            construct(obj, args) {
                const temp = $mol_wire_task.getter(factory(obj));
                return temp(obj, args).sync();
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                return temp(self, args).sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_run_error extends $mol_error_mix {
    }
    $.$mol_run_error = $mol_run_error;
    $.$mol_run_spawn = (...args) => $node['child_process'].spawn(...args);
    $.$mol_run_spawn_sync = (...args) => $node['child_process'].spawnSync(...args);
    class $mol_run extends $mol_object {
        static async_enabled() {
            return Boolean(this.$.$mol_env()['MOL_RUN_ASYNC']);
        }
        static spawn(options) {
            const sync = !this.async_enabled() || !Boolean($mol_wire_auto());
            const env = options.env ?? this.$.$mol_env();
            return $mol_wire_sync(this).spawn_async({ ...options, sync, env });
        }
        static spawn_async({ dir, sync, timeout, command, env }) {
            const args_raw = typeof command === 'string' ? command.split(' ') : command;
            const [app, ...args] = args_raw;
            const opts = { shell: true, cwd: dir, env };
            const log_object = {
                place: `${this}.spawn()`,
                message: 'Run',
                command: args_raw.join(' '),
                dir: $node.path.relative('', dir),
            };
            if (sync) {
                this.$.$mol_log3_come({
                    hint: 'Run inside fiber',
                    ...log_object
                });
                let error;
                let res;
                try {
                    res = this.$.$mol_run_spawn_sync(app, args, opts);
                    error = res.error;
                }
                catch (err) {
                    error = err;
                }
                if (!res || error || res.status) {
                    throw new $mol_run_error(this.error_message(res), { ...log_object, status: res?.status, signal: res?.signal }, ...(error ? [error] : []));
                }
                return res;
            }
            let sub;
            try {
                sub = this.$.$mol_run_spawn(app, args, {
                    ...opts,
                    stdio: ['pipe', 'inherit', 'inherit'],
                });
            }
            catch (error) {
                throw new $mol_run_error(this.error_message(undefined), log_object, error);
            }
            const pid = sub.pid ?? 0;
            this.$.$mol_log3_come({
                ...log_object,
                pid,
            });
            let timeout_kill = false;
            let timer;
            const std_data = [];
            const error_data = [];
            const add = (std_chunk, error_chunk) => {
                if (std_chunk)
                    std_data.push(std_chunk);
                if (error_chunk)
                    error_data.push(error_chunk);
                if (!timeout)
                    return;
                clearTimeout(timer);
                timer = setTimeout(() => {
                    const signal = timeout_kill ? 'SIGKILL' : 'SIGTERM';
                    timeout_kill = true;
                    add();
                    sub.kill(signal);
                }, timeout);
            };
            add();
            sub.stdout?.on('data', data => add(data));
            sub.stderr?.on('data', data => add(undefined, data));
            const result_promise = new Promise((done, fail) => {
                const close = (error, status = null, signal = null) => {
                    if (!timer && timeout)
                        return;
                    clearTimeout(timer);
                    timer = undefined;
                    const res = {
                        pid,
                        signal,
                        get stdout() { return Buffer.concat(std_data); },
                        get stderr() { return Buffer.concat(error_data); }
                    };
                    if (error || status || timeout_kill)
                        return fail(new $mol_run_error(this.error_message(res) + (timeout_kill ? ', timeout' : ''), { ...log_object, pid, status, signal, timeout_kill }, ...error ? [error] : []));
                    this.$.$mol_log3_done({
                        ...log_object,
                        pid,
                    });
                    done(res);
                };
                sub.on('disconnect', () => close(new Error('Disconnected')));
                sub.on('error', err => close(err));
                sub.on('exit', (status, signal) => close(null, status, signal));
            });
            return Object.assign(result_promise, { destructor: () => {
                    clearTimeout(timer);
                    sub.kill('SIGKILL');
                } });
        }
        static error_message(res) {
            return res?.stderr.toString() || res?.stdout.toString() || 'Run error';
        }
    }
    $.$mol_run = $mol_run;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        return this.$mol_run.spawn({ command: [command, ...args], dir });
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            const fun = function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
            Reflect.defineProperty(fun, 'name', { value: task.name + ' ' });
            return fun;
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom = $mol_dom_context;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        getter[$mol_dev_format_head] = () => $mol_dev_format_span({}, '()=> ', $mol_dev_format_auto(value));
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        let current = $mol_wire_auto();
        if (current.temp)
            current = current.host;
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === undefined) {
                continue;
            }
            else if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            if (val === el[key])
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_attach(id, text) {
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        const elid = `$mol_style_attach:${id}`;
        let el = doc.getElementById(elid);
        if (!el) {
            el = doc.createElement('style');
            el.id = elid;
            doc.head.appendChild(el);
        }
        if (el.innerHTML != text)
            el.innerHTML = text;
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise extends Promise {
        done;
        fail;
        constructor(executor) {
            let done;
            let fail;
            super((d, f) => {
                done = d;
                fail = f;
                executor?.(d, f);
            });
            this.done = done;
            this.fail = fail;
        }
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_promise_blocker extends $mol_promise {
        static [Symbol.toStringTag] = '$mol_promise_blocker';
    }
    $.$mol_promise_blocker = $mol_promise_blocker;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static linear_gradient(value) {
            return new $mol_style_func('linear-gradient', value);
        }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name, defaultValue) {
            return new $mol_style_func('var', defaultValue ? [name, defaultValue] : name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static linear(...breakpoints) {
            return new $mol_style_func("linear", breakpoints.map((e) => Array.isArray(e)
                ? String(e[0]) +
                    " " +
                    (typeof e[1] === "number" ? e[1] + "%" : e[1].toString())
                : String(e)));
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
        static steps(value, step_position) {
            return new $mol_style_func('steps', [value, step_position]);
        }
        static blur(value) {
            return new $mol_style_func('blur', value ?? "");
        }
        static brightness(value) {
            return new $mol_style_func('brightness', value ?? "");
        }
        static contrast(value) {
            return new $mol_style_func('contrast', value ?? "");
        }
        static drop_shadow(color, x_offset, y_offset, blur_radius) {
            return new $mol_style_func("drop-shadow", blur_radius
                ? [color, x_offset, y_offset, blur_radius]
                : [color, x_offset, y_offset]);
        }
        static grayscale(value) {
            return new $mol_style_func('grayscale', value ?? "");
        }
        static hue_rotate(value) {
            return new $mol_style_func('hue-rotate', value ?? "");
        }
        static invert(value) {
            return new $mol_style_func('invert', value ?? "");
        }
        static opacity(value) {
            return new $mol_style_func('opacity', value ?? "");
        }
        static sepia(value) {
            return new $mol_style_func('sepia', value ?? "");
        }
        static saturate(value) {
            return new $mol_style_func('saturate', value ?? "");
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_prop(prefix, keys) {
        const record = keys.reduce((rec, key) => {
            rec[key] = $mol_style_func.vary(`--${prefix}_${key}`);
            return rec;
        }, {});
        return record;
    }
    $.$mol_style_prop = $mol_style_prop;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_theme = $mol_style_prop('mol_theme', [
        'back',
        'hover',
        'card',
        'current',
        'special',
        'text',
        'control',
        'shade',
        'line',
        'focus',
        'field',
        'image',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 240deg;\n\t--mol_theme_hue_spread: 90deg;\n}\n\n:where([mol_theme]) {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 10% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 20%, .25 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 8%, .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 80% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 60%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 65% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 60%, 65% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 60%, 65% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 60%, 65% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n:root, [mol_theme=\"$mol_theme_dark\"], :where([mol_theme=\"$mol_theme_dark\"]) [mol_theme]  {\n\t\n\t--mol_theme_back: oklch( 20% .03 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 30% .05 var(--mol_theme_hue) / .25 );\n\t--mol_theme_field: oklch( 15% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_hover: oklch( 70% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 80% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 60% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 80% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 70% .1 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 70% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 70% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n\t\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 20%, 92% );\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 50%, 100%, .5 );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, 100%, .75 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, 0% );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 40%, 1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .25 );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, 40% );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 80%, 30% );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ), 80%, 30% );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ), 80%, 30% );\n\n} @supports( color: oklch( 0% 0 0deg ) ) {\n[mol_theme=\"$mol_theme_light\"], :where([mol_theme=\"$mol_theme_light\"]) [mol_theme] {\n\t--mol_theme_back: oklch( 92% .01 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 99% .01 var(--mol_theme_hue) / .5 );\n\t--mol_theme_field: oklch( 100% 0 var(--mol_theme_hue) / .5 );\n\t--mol_theme_hover: oklch( 70% 0 var(--mol_theme_hue) / .1 );\n\t\n\t--mol_theme_text: oklch( 20% 0 var(--mol_theme_hue) );\n\t--mol_theme_shade: oklch( 60% 0 var(--mol_theme_hue) );\n\t--mol_theme_line: oklch( 50% 0 var(--mol_theme_hue) / .25 );\n\t--mol_theme_focus: oklch( 60% .2 calc( var(--mol_theme_hue) + 180deg ) );\n\t\n\t--mol_theme_control: oklch( 40% .15 var(--mol_theme_hue) );\n\t--mol_theme_current: oklch( 50% .2 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_special: oklch( 50% .2 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\n} }\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 25% .05 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 35% .1 var(--mol_theme_hue) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: oklch( 85% .05 var(--mol_theme_hue) );\n\t--mol_theme_card: oklch( 98% .03 var(--mol_theme_hue) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) - var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 25% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 35% .1 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: oklch( 85% .05 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + var(--mol_theme_hue_spread) ) / .25 );\n}\n\n:where( :root, [mol_theme=\"$mol_theme_dark\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 35% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 45% .15 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n:where( [mol_theme=\"$mol_theme_light\"] ) [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: oklch( 83% .1 calc( var(--mol_theme_hue) + 180deg ) );\n\t--mol_theme_card: oklch( 98% .03 calc( var(--mol_theme_hue) + 180deg ) / .25 );\n}\n\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_gap = $mol_style_prop('mol_gap', [
        'block',
        'text',
        'round',
        'space',
        'blur',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString().replace(/</g, '(').replace(/>/g, ')').replaceAll(/"/g, "'");
        }
        dom_node_external(next) {
            const node = next ?? $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            return node;
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = this.dom_node_external(next);
            $mol_dom_render_attributes(node, this.attr_static());
            const events = this.event_async();
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                const mol_view_error = $mol_promise_like(error)
                    ? error.constructor[Symbol.toStringTag] ?? 'Promise'
                    : error.name || error.constructor.name;
                $mol_dom_render_attributes(node, { mol_view_error });
                if ($mol_promise_like(error))
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        theme(next = null) {
            return next;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {
                mol_theme: this.theme() ?? undefined,
            };
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return { ...$mol_wire_async(this.event()) };
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            try {
                this.dom_final();
            }
            catch (err) {
                $mol_fail_log(err);
            }
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_timeout(0, () => {
                this.focused(true);
            });
        }
        destructor() {
            const node = $mol_wire_probe(() => this.dom_node());
            if (!node)
                return;
            const events = $mol_wire_probe(() => this.event_async());
            if (!events)
                return;
            for (let event_name in events) {
                node.removeEventListener(event_name, events[event_name]);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_id", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "theme", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n\toverscroll-behavior: contain; /** Disable navigation gestures **/\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"], [mol_view_error=\"$mol_promise_blocker\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"$mol_promise_blocker\"]),\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps(20,end) infinite;\n}\n");
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node_external(next) {
            return next ?? $mol_owning_get(this).host.dom_node();
        }
        render() {
            this.dom_node_actual();
        }
    }
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));

;
	($.$mol_scroll) = class $mol_scroll extends ($.$mol_view) {
		tabindex(){
			return -1;
		}
		event_scroll(next){
			if(next !== undefined) return next;
			return null;
		}
		scroll_top(next){
			if(next !== undefined) return next;
			return 0;
		}
		scroll_left(next){
			if(next !== undefined) return next;
			return 0;
		}
		field(){
			return {...(super.field()), "tabIndex": (this.tabindex())};
		}
		event(){
			return {...(super.event()), "scroll": (next) => (this.event_scroll(next))};
		}
	};
	($mol_mem(($.$mol_scroll.prototype), "event_scroll"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_top"));
	($mol_mem(($.$mol_scroll.prototype), "scroll_left"));


;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else if (key[0] === '[' && key[key.length - 1] === ']') {
                    const attr = key.slice(1, -1);
                    const vals = config[key];
                    for (let val in vals) {
                        make_class(selector(prefix, path) + ':where([' + attr + '=' + JSON.stringify(val) + '])', [], vals[val]);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            display: 'grid',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
            },
            outline: 'none',
            align: {
                self: 'stretch',
                items: 'flex-start',
            },
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    gridArea: '1/1',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            '@media': {
                'print': {
                    overflow: 'hidden',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_book2) = class $mol_book2 extends ($.$mol_scroll) {
		pages(){
			return [];
		}
		menu_title(){
			return "";
		}
		sub(){
			return (this.pages());
		}
		minimal_width(){
			return 0;
		}
		Placeholder(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Gap(id){
			const obj = new this.$.$mol_view();
			(obj.title) = () => ("");
			return obj;
		}
	};
	($mol_mem(($.$mol_book2.prototype), "Placeholder"));
	($mol_mem_key(($.$mol_book2.prototype), "Gap"));


;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_layer = $mol_style_prop('mol_layer', [
        'hover',
        'focus',
        'speck',
        'float',
        'popup',
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => {
                    try {
                        return page?.title();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                    }
                }).reverse().filter(Boolean).join(' | ');
            }
            menu_title() {
                return this.pages()[0]?.title() || this.title();
            }
            sub() {
                const placeholder = this.Placeholder();
                const next = [...this.pages(), placeholder];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    if (n === placeholder)
                        continue;
                    new this.$.$mol_after_tick(() => {
                        const b = this.dom_node();
                        const p = n.dom_node();
                        b.scroll({
                            left: p.offsetLeft + p.offsetWidth - b.offsetWidth,
                            behavior: 'smooth',
                        });
                    });
                    break;
                }
                return next;
            }
            bring() {
                const pages = this.pages();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\tscroll-snap-type: x mandatory;\n\t/* padding: 0 1px;\n\tscroll-padding: 0 1px;\n\tgap: 1px; */\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_field);\n}\n\n[mol_book2] > *:not(:first-of-type):before,\n[mol_book2] > *:not(:last-of-type)::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 1.5rem;\n\twidth: 3px;\n\theight: 1rem;\n\tbackground: linear-gradient(\n\t\tto bottom,\n\t\tvar(--mol_theme_focus) 0%,\n\t\tvar(--mol_theme_focus) 14%,\n\t\ttransparent 15%,\n\t\ttransparent 42%,\n\t\tvar(--mol_theme_focus) 43%,\n\t\tvar(--mol_theme_focus) 57%,\n\t\ttransparent 58%,\n\t\ttransparent 85%,\n\t\tvar(--mol_theme_focus) 86%,\n\t\tvar(--mol_theme_focus) 100%\n\t);\n\topacity: .5;\n\tz-index: var(--mol_layer_speck);\n}\n[mol_book2] > *:not(:first-of-type):before {\n\tleft: -1px;\n}\n[mol_book2] > *:not(:last-of-type)::after {\n\tright: -1px;\n}\n\n:where([mol_book2]) > * {\n\tbackground-color: var(--mol_theme_card);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_back); */\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\tbackground: none;\n}\n\n[mol_book2_gap] {\n\tbackground: none;\n\tflex-grow: 1;\n\tscroll-snap-align: none;\n\tmargin-right: -1px;\n\tbox-shadow: none;\n}\n\n[mol_book2_gap]::before,\n[mol_book2_gap]::after {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_pop) = class $mol_pop extends ($.$mol_view) {
		Anchor(){
			return null;
		}
		align(){
			return "bottom_center";
		}
		bubble_content(){
			return [];
		}
		height_max(){
			return 9999;
		}
		Bubble(){
			const obj = new this.$.$mol_pop_bubble();
			(obj.align) = () => ((this.align()));
			(obj.content) = () => ((this.bubble_content()));
			(obj.height_max) = () => ((this.height_max()));
			return obj;
		}
		showed(next){
			if(next !== undefined) return next;
			return false;
		}
		align_vert(){
			return "";
		}
		align_hor(){
			return "";
		}
		prefer(){
			return "vert";
		}
		sub(){
			return [(this.Anchor())];
		}
		sub_visible(){
			return [(this.Anchor()), (this.Bubble())];
		}
	};
	($mol_mem(($.$mol_pop.prototype), "Bubble"));
	($mol_mem(($.$mol_pop.prototype), "showed"));
	($.$mol_pop_bubble) = class $mol_pop_bubble extends ($.$mol_view) {
		content(){
			return [];
		}
		height_max(){
			return 9999;
		}
		align(){
			return "";
		}
		sub(){
			return (this.content());
		}
		style(){
			return {...(super.style()), "maxHeight": (this.height_max())};
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_pop_align": (this.align()), 
				"tabindex": 0
			};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                switch (this.prefer()) {
                    case 'hor': return `${this.align_hor()}_${this.align_vert()}`;
                    case 'vert': return `${this.align_vert()}_${this.align_hor()}`;
                    default: return this.prefer();
                }
            }
            align_vert() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.top > (viewport.top + viewport.height / 2) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.left > (viewport.left + viewport.width / 2) ? 'left' : 'right';
            }
            View_port() {
                const view = new $mol_view;
                view.dom_node = () => {
                    let node = this.dom_node();
                    while (node = node.offsetParent) {
                        if (this.$.$mol_dom_context.getComputedStyle(node).overflow !== 'visible')
                            return node;
                    }
                    return this.$.$mol_dom_context.document.documentElement;
                };
                return view;
            }
            view_port() {
                return this.View_port().view_rect() ?? { ...this.$.$mol_window.size(), left: 0, top: 0 };
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "View_port", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "view_port", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\t/* overflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay; */\n\tword-break: normal;\n\twidth: max-content;\n\t/* height: max-content; */\n\tflex-direction: column;\n\tmax-width: 80vw;\n\tmax-height: 80vw;\n\tcontain: paint;\n\ttransition-property: opacity;\n}\n\n:where( [mol_pop_bubble] > * ) {\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense_suspense\"] {\n\topacity: 0;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));

;
	($.$mol_hotkey) = class $mol_hotkey extends ($.$mol_plugin) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		key(){
			return {};
		}
		mod_ctrl(){
			return false;
		}
		mod_alt(){
			return false;
		}
		mod_shift(){
			return false;
		}
	};
	($mol_mem(($.$mol_hotkey.prototype), "keydown"));


;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== (event.ctrlKey || event.metaKey))
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_nav) = class $mol_nav extends ($.$mol_plugin) {
		event_key(next){
			if(next !== undefined) return next;
			return null;
		}
		cycle(next){
			if(next !== undefined) return next;
			return false;
		}
		mod_ctrl(){
			return false;
		}
		mod_shift(){
			return false;
		}
		mod_alt(){
			return false;
		}
		keys_x(next){
			if(next !== undefined) return next;
			return [];
		}
		keys_y(next){
			if(next !== undefined) return next;
			return [];
		}
		current_x(next){
			if(next !== undefined) return next;
			return null;
		}
		current_y(next){
			if(next !== undefined) return next;
			return null;
		}
		event_up(next){
			if(next !== undefined) return next;
			return null;
		}
		event_down(next){
			if(next !== undefined) return next;
			return null;
		}
		event_left(next){
			if(next !== undefined) return next;
			return null;
		}
		event_right(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.event_key(next))};
		}
	};
	($mol_mem(($.$mol_nav.prototype), "event_key"));
	($mol_mem(($.$mol_nav.prototype), "cycle"));
	($mol_mem(($.$mol_nav.prototype), "keys_x"));
	($mol_mem(($.$mol_nav.prototype), "keys_y"));
	($mol_mem(($.$mol_nav.prototype), "current_x"));
	($mol_mem(($.$mol_nav.prototype), "current_y"));
	($mol_mem(($.$mol_nav.prototype), "event_up"));
	($mol_mem(($.$mol_nav.prototype), "event_down"));
	($mol_mem(($.$mol_nav.prototype), "event_left"));
	($mol_mem(($.$mol_nav.prototype), "event_right"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                    case $mol_keyboard_code.pageUp: return this.event_up(event);
                    case $mol_keyboard_code.pageDown: return this.event_down(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_mem_persist = $mol_wire_solid;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_storage extends $mol_object2 {
        static native() {
            return this.$.$mol_dom_context.navigator.storage ?? {
                persisted: async () => false,
                persist: async () => false,
                estimate: async () => ({}),
                getDirectory: async () => null,
            };
        }
        static persisted(next, cache) {
            $mol_mem_persist();
            if (cache)
                return Boolean(next);
            const native = this.native();
            if (next && !$mol_mem_cached(() => this.persisted())) {
                native.persist().then(actual => {
                    setTimeout(() => this.persisted(actual, 'cache'), 5000);
                    if (actual)
                        this.$.$mol_log3_done({ place: `$mol_storage`, message: `Persist: Yes` });
                    else
                        this.$.$mol_log3_fail({ place: `$mol_storage`, message: `Persist: No` });
                });
            }
            return next ?? $mol_wire_sync(native).persisted();
        }
        static estimate() {
            return $mol_wire_sync(this.native() ?? {}).estimate();
        }
        static dir() {
            return $mol_wire_sync(this.native()).getDirectory();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_storage, "native", null);
    __decorate([
        $mol_mem
    ], $mol_storage, "persisted", null);
    $.$mol_storage = $mol_storage;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null) {
                this.native().removeItem(key);
            }
            else {
                this.native().setItem(key, JSON.stringify(next));
                this.$.$mol_storage.persisted(true);
            }
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_lock extends $mol_object {
        promise = null;
        async wait() {
            let next = () => { };
            let destructed = false;
            const task = $mol_wire_auto();
            if (!task)
                return next;
            const destructor = task.destructor.bind(task);
            task.destructor = () => {
                destructor();
                destructed = true;
                next();
            };
            let promise;
            do {
                promise = this.promise;
                await promise;
                if (destructed)
                    return next;
            } while (promise !== this.promise);
            this.promise = new Promise(done => { next = done; });
            return next;
        }
        grab() { return $mol_wire_sync(this).wait(); }
    }
    $.$mol_lock = $mol_lock;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_transaction extends $mol_object {
        path() { return ''; }
        modes() { return []; }
        write(options) {
            return 0;
        }
        read() {
            return new Uint8Array();
        }
        truncate(size) { }
        close() { }
        destructor() {
            this.close();
        }
    }
    $.$mol_file_transaction = $mol_file_transaction;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let file_modes;
    (function (file_modes) {
        file_modes[file_modes["create"] = $node.fs.constants.O_CREAT] = "create";
        file_modes[file_modes["exists_truncate"] = $node.fs.constants.O_TRUNC] = "exists_truncate";
        file_modes[file_modes["exists_fail"] = $node.fs.constants.O_EXCL] = "exists_fail";
        file_modes[file_modes["read_only"] = $node.fs.constants.O_RDONLY] = "read_only";
        file_modes[file_modes["write_only"] = $node.fs.constants.O_WRONLY] = "write_only";
        file_modes[file_modes["read_write"] = $node.fs.constants.O_RDWR] = "read_write";
        file_modes[file_modes["append"] = $node.fs.constants.O_APPEND] = "append";
    })(file_modes || (file_modes = {}));
    function mode_mask(modes) {
        return modes.reduce((res, mode) => res | file_modes[mode], 0);
    }
    class $mol_file_transaction_node extends $mol_file_transaction {
        descr() {
            $mol_wire_solid();
            return $node.fs.openSync(this.path(), mode_mask(this.modes()));
        }
        write({ buffer, offset = 0, length, position = null }) {
            if (Array.isArray(buffer)) {
                return $node.fs.writevSync(this.descr(), buffer, position ?? undefined);
            }
            if (typeof buffer === 'string') {
                return $node.fs.writeSync(this.descr(), buffer, position);
            }
            length = length ?? buffer.byteLength;
            return $node.fs.writeSync(this.descr(), buffer, offset, length, position);
        }
        truncate(size) {
            $node.fs.ftruncateSync(this.descr());
        }
        read() {
            return $mol_file_node_buffer_normalize($node.fs.readFileSync(this.descr()));
        }
        close() {
            $node.fs.closeSync(this.descr());
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_transaction_node.prototype, "descr", null);
    $.$mol_file_transaction_node = $mol_file_transaction_node;
    $.$mol_file_transaction = $mol_file_transaction_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file_base extends $mol_object {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        exists_cut() { return this.exists(); }
        root() {
            const path = this.path();
            const base = this.constructor.base;
            return base.startsWith(path) || this == this.parent();
        }
        stat(next, virt) {
            const path = this.path();
            const parent = this.parent();
            if (!this.root()) {
                parent.version();
            }
            parent.watcher();
            if (virt)
                return next ?? null;
            return next ?? this.info(path);
        }
        static changed = new Set;
        static frame = null;
        static changed_add(type, path) {
            if (/([\/\\]\.|___$)/.test(path))
                return;
            const file = this.relative(path.at(-1) === '/' ? path.slice(0, -1) : path);
            this.changed.add(file);
            if (!this.watching)
                return;
            this.frame?.destructor();
            this.frame = new this.$.$mol_after_timeout(this.watch_debounce(), () => {
                if (!this.watching)
                    return;
                this.watching = false;
                $mol_wire_async(this).flush();
            });
        }
        static watch_debounce() { return 500; }
        static flush() {
            for (const file of this.changed) {
                const parent = file.parent();
                try {
                    if ($mol_wire_probe(() => parent.sub()))
                        parent.sub(null);
                    file.reset();
                }
                catch (error) {
                    if ($mol_fail_catch(error))
                        $mol_fail_log(error);
                }
            }
            this.changed.clear();
            this.watching = true;
        }
        static watching = true;
        static lock = new $mol_lock;
        static watch_off(path) {
            this.watching = false;
            this.flush();
            this.watching = false;
            this.changed.add(this.absolute(path));
        }
        static unwatched(side_effect, affected_dir) {
            const unlock = this.lock.grab();
            this.watch_off(affected_dir);
            try {
                const result = side_effect();
                this.flush();
                unlock();
                return result;
            }
            catch (e) {
                if (!$mol_promise_like(e)) {
                    this.flush();
                    unlock();
                }
                $mol_fail_hidden(e);
            }
        }
        reset() {
            this.stat(null);
        }
        modified() { return this.stat()?.mtime ?? null; }
        version() {
            const next = this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
            return next;
        }
        info(path) { return null; }
        ensure() { }
        drop() { }
        copy(to) { }
        read() { return new Uint8Array; }
        write(buffer) { }
        kids() {
            return [];
        }
        readable(opts) {
            return new ReadableStream;
        }
        writable(opts) {
            return new WritableStream;
        }
        buffer(next) {
            let readed = new Uint8Array();
            if (next === undefined) {
                if (this.version())
                    readed = this.read();
            }
            const prev = $mol_mem_cached(() => this.buffer());
            const changed = prev === undefined || !$mol_compare_array(prev, next ?? readed);
            if (prev !== undefined && changed) {
                this.$.$mol_log3_rise({
                    place: `$mol_file_node.buffer()`,
                    message: 'Changed',
                    path: this.relate(),
                });
            }
            if (next === undefined)
                return changed ? readed : prev;
            if (!changed && this.exists())
                return prev;
            this.parent().exists(true);
            this.stat(this.stat_make(next.length), 'virt');
            this.write(next);
            return next;
        }
        stat_make(size) {
            const now = new Date();
            return {
                type: 'file',
                size,
                atime: now,
                mtime: now,
                ctime: now,
            };
        }
        clone(to) {
            if (!this.exists())
                return null;
            const target = this.constructor.absolute(to);
            try {
                this.version();
                target.parent().exists(true);
                this.copy(to);
                target.reset();
                return target;
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    console.error(error);
                }
            }
            return null;
        }
        watcher() {
            return {
                destructor() { }
            };
        }
        exists(next) {
            const exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next) {
                this.parent().exists(true);
                this.ensure();
            }
            else {
                this.drop();
            }
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (next !== undefined)
                this.exists();
            return this.text_int(next, virt);
        }
        text_int(next, virt) {
            if (virt) {
                this.stat(this.stat_make(0), 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer());
            }
            else {
                const buffer = $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        sub(reset) {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            this.version();
            return this.kids().filter(file => file.exists());
        }
        resolve(path) {
            throw new Error('implement');
        }
        relate(base = this.constructor.relative('.')) {
            const base_path = base.path();
            const path = this.path();
            return path.startsWith(base_path) ? path.slice(base_path.length) : path;
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
        toJSON() {
            return this.path();
        }
        open(...modes) {
            return this.$.$mol_file_transaction.make({
                path: () => this.path(),
                modes: () => modes
            });
        }
    }
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "exists_cut", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "modified", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "version", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "readable", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "writable", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "stat_make", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base.prototype, "clone", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "text_int", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "sub", null);
    __decorate([
        $mol_mem
    ], $mol_file_base.prototype, "size", null);
    __decorate([
        $mol_action
    ], $mol_file_base.prototype, "open", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_base, "absolute", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "flush", null);
    __decorate([
        $mol_action
    ], $mol_file_base, "watch_off", null);
    $.$mol_file_base = $mol_file_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_file extends $mol_file_base {
    }
    $.$mol_file = $mol_file;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        if (!stat)
            return null;
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function $mol_file_node_buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    $.$mol_file_node_buffer_normalize = $mol_file_node_buffer_normalize;
    class $mol_file_node extends $mol_file {
        static relative(path) {
            return this.absolute($node.path.resolve(this.base, path).replace(/\\/g, '/'));
        }
        watcher(reset) {
            const path = this.path();
            const root = this.root();
            if (!root && !this.exists())
                return super.watcher();
            let watcher;
            try {
                watcher = $node.fs.watch(path);
            }
            catch (error) {
                if (!(error instanceof Error))
                    error = new Error('Unknown watch error', { cause: error });
                error.message += '\n' + path;
                if (root || error.code !== 'ENOENT') {
                    this.$.$mol_fail_log(error);
                }
                return super.watcher();
            }
            watcher.on('change', (type, name) => {
                if (!name)
                    return;
                const path = $node.path.join(this.path(), name.toString());
                this.constructor.changed_add(type, path);
            });
            watcher.on('error', e => this.$.$mol_fail_log(e));
            let destructed = false;
            watcher.on('close', () => {
                if (!destructed)
                    setTimeout(() => $mol_wire_async(this).watcher(null), 500);
            });
            return {
                destructor() {
                    destructed = true;
                    watcher.close();
                }
            };
        }
        info(path) {
            try {
                return stat_convert($node.fs.statSync(path));
            }
            catch (error) {
                if (this.$.$mol_fail_catch(error)) {
                    if (error.code === 'ENOENT')
                        return null;
                    error.message += '\n' + path;
                    this.$.$mol_fail_hidden(error);
                }
            }
            return null;
        }
        ensure() {
            const path = this.path();
            try {
                $node.fs.mkdirSync(path, { recursive: true });
                return null;
            }
            catch (e) {
                if (this.$.$mol_fail_catch(e)) {
                    if (e.code === 'EEXIST')
                        return null;
                    e.message += '\n' + path;
                    this.$.$mol_fail_hidden(e);
                }
            }
        }
        copy(to) {
            $node.fs.copyFileSync(this.path(), to);
        }
        drop() {
            $node.fs.unlinkSync(this.path());
        }
        read() {
            const path = this.path();
            try {
                return $mol_file_node_buffer_normalize($node.fs.readFileSync(path));
            }
            catch (error) {
                if (!$mol_promise_like(error)) {
                    error.message += '\n' + path;
                }
                $mol_fail_hidden(error);
            }
        }
        write(buffer) {
            const path = this.path();
            try {
                $node.fs.writeFileSync(path, buffer);
            }
            catch (error) {
                if (this.$.$mol_fail_catch(error)) {
                    error.message += '\n' + path;
                }
                return this.$.$mol_fail_hidden(error);
            }
        }
        kids() {
            const path = this.path();
            try {
                const kids = $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
                return kids;
            }
            catch (e) {
                if (this.$.$mol_fail_catch(e)) {
                    if (e.code === 'ENOENT')
                        return [];
                    e.message += '\n' + path;
                }
                $mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor
                .relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        readable(opts) {
            const { Readable } = $node['node:stream'];
            const stream = $node.fs.createReadStream(this.path(), {
                flags: 'r',
                autoClose: true,
                start: opts?.start,
                end: opts?.end,
                encoding: 'binary',
            });
            return Readable.toWeb(stream);
        }
        writable(opts) {
            const { Writable } = $node['node:stream'];
            const stream = $node.fs.createWriteStream(this.path(), {
                flags: 'w+',
                autoClose: true,
                start: opts?.start,
                encoding: 'binary',
            });
            return Writable.toWeb(stream);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "info", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "ensure", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "copy", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "drop", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "read", null);
    __decorate([
        $mol_action
    ], $mol_file_node.prototype, "write", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_node.prototype, "readable", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "writable", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_state_local_node extends $mol_state_local {
        static dir() {
            const base = process.env.XDG_DATA_HOME || ($node.os.homedir() + '/.local/share');
            return $mol_file.absolute(base).resolve('./mol_state_local');
        }
        static value(key, next) {
            const file = this.dir().resolve(encodeURIComponent(key) + '.json');
            if (next === null) {
                file.exists(false);
                return null;
            }
            const arg = next === undefined ? undefined : JSON.stringify(next);
            return JSON.parse(file.text(arg) || 'null');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local_node, "dir", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local_node, "value", null);
    $.$mol_state_local_node = $mol_state_local_node;
    $.$mol_state_local = $mol_state_local_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                }
            }
            return {};
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));

;
	($.$mol_string) = class $mol_string extends ($.$mol_view) {
		selection_watcher(){
			return null;
		}
		error_report(){
			return null;
		}
		disabled(){
			return false;
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		value_changed(next){
			return (this.value(next));
		}
		hint(){
			return "";
		}
		hint_visible(){
			return (this.hint());
		}
		spellcheck(){
			return true;
		}
		autocomplete_native(){
			return "";
		}
		selection_end(){
			return 0;
		}
		selection_start(){
			return 0;
		}
		keyboard(){
			return "text";
		}
		enter(){
			return "go";
		}
		length_max(){
			return +Infinity;
		}
		type(next){
			if(next !== undefined) return next;
			return "text";
		}
		event_change(next){
			if(next !== undefined) return next;
			return null;
		}
		submit_with_ctrl(){
			return false;
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Submit(){
			const obj = new this.$.$mol_hotkey();
			(obj.mod_ctrl) = () => ((this.submit_with_ctrl()));
			(obj.key) = () => ({"enter": (next) => (this.submit(next))});
			return obj;
		}
		dom_name(){
			return "input";
		}
		enabled(){
			return true;
		}
		minimal_height(){
			return 40;
		}
		autocomplete(){
			return false;
		}
		selection(next){
			if(next !== undefined) return next;
			return [0, 0];
		}
		auto(){
			return [(this.selection_watcher()), (this.error_report())];
		}
		field(){
			return {
				...(super.field()), 
				"disabled": (this.disabled()), 
				"value": (this.value_changed()), 
				"placeholder": (this.hint_visible()), 
				"spellcheck": (this.spellcheck()), 
				"autocomplete": (this.autocomplete_native()), 
				"selectionEnd": (this.selection_end()), 
				"selectionStart": (this.selection_start()), 
				"inputMode": (this.keyboard()), 
				"enterkeyhint": (this.enter())
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"maxlength": (this.length_max()), 
				"type": (this.type())
			};
		}
		event(){
			return {...(super.event()), "input": (next) => (this.event_change(next))};
		}
		plugins(){
			return [(this.Submit())];
		}
	};
	($mol_mem(($.$mol_string.prototype), "value"));
	($mol_mem(($.$mol_string.prototype), "type"));
	($mol_mem(($.$mol_string.prototype), "event_change"));
	($mol_mem(($.$mol_string.prototype), "submit"));
	($mol_mem(($.$mol_string.prototype), "Submit"));
	($mol_mem(($.$mol_string.prototype), "selection"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = this.dom_node();
                const from = el.selectionStart;
                const to = el.selectionEnd;
                try {
                    el.value = this.value_changed(el.value);
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                    $mol_fail_hidden(error);
                }
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            error_report() {
                try {
                    if (this.focused())
                        this.value();
                }
                catch (error) {
                    const el = this.dom_node();
                    if (error instanceof Error) {
                        el.setCustomValidity(error.message);
                        el.reportValidity();
                    }
                }
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
                if (to !== from && el.selectionEnd === el.selectionStart) {
                    el.selectionEnd = to;
                }
            }
            selection_start() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionStart == null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (!this.focused())
                    return undefined;
                if (el.selectionEnd == null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_action
        ], $mol_string.prototype, "event_change", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "error_report", null);
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_svg) = class $mol_svg extends ($.$mol_view) {
		dom_name(){
			return "svg";
		}
		dom_name_space(){
			return "http://www.w3.org/2000/svg";
		}
		font_size(){
			return 16;
		}
		font_family(){
			return "";
		}
		style_size(){
			return {};
		}
	};


;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_svg_root) = class $mol_svg_root extends ($.$mol_svg) {
		view_box(){
			return "0 0 100 100";
		}
		aspect(){
			return "xMidYMid";
		}
		dom_name(){
			return "svg";
		}
		attr(){
			return {
				...(super.attr()), 
				"viewBox": (this.view_box()), 
				"preserveAspectRatio": (this.aspect())
			};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_svg_path) = class $mol_svg_path extends ($.$mol_svg) {
		geometry(){
			return "";
		}
		dom_name(){
			return "path";
		}
		attr(){
			return {...(super.attr()), "d": (this.geometry())};
		}
	};


;
"use strict";

;
	($.$mol_icon) = class $mol_icon extends ($.$mol_svg_root) {
		path(){
			return "";
		}
		Path(){
			const obj = new this.$.$mol_svg_path();
			(obj.geometry) = () => ((this.path()));
			return obj;
		}
		view_box(){
			return "0 0 24 24";
		}
		minimal_width(){
			return 16;
		}
		minimal_height(){
			return 16;
		}
		sub(){
			return [(this.Path())];
		}
	};
	($mol_mem(($.$mol_icon.prototype), "Path"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_close) = class $mol_icon_close extends ($.$mol_icon) {
		path(){
			return "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
		}
	};


;
"use strict";

;
	($.$mol_speck) = class $mol_speck extends ($.$mol_view) {
		theme(){
			return "$mol_theme_accent";
		}
		value(){
			return null;
		}
		attr(){
			return {...(super.attr()), "mol_theme": (this.theme())};
		}
		style(){
			return {...(super.style()), "minHeight": "1em"};
		}
		sub(){
			return [(this.value())];
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button) = class $mol_button extends ($.$mol_view) {
		event_activate(next){
			if(next !== undefined) return next;
			return null;
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		event_key_press(next){
			if(next !== undefined) return next;
			return null;
		}
		disabled(){
			return false;
		}
		tab_index(){
			return 0;
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		error(){
			return "";
		}
		enabled(){
			return true;
		}
		click(next){
			if(next !== undefined) return next;
			return null;
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		event(){
			return {
				...(super.event()), 
				"click": (next) => (this.event_activate(next)), 
				"dblclick": (next) => (this.clicks(next)), 
				"keydown": (next) => (this.event_key_press(next))
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"disabled": (this.disabled()), 
				"role": "button", 
				"tabindex": (this.tab_index()), 
				"title": (this.hint_safe())
			};
		}
		sub(){
			return [(this.title())];
		}
		Speck(){
			const obj = new this.$.$mol_speck();
			(obj.value) = () => ((this.error()));
			return obj;
		}
	};
	($mol_mem(($.$mol_button.prototype), "event_activate"));
	($mol_mem(($.$mol_button.prototype), "clicks"));
	($mol_mem(($.$mol_button.prototype), "event_key_press"));
	($mol_mem(($.$mol_button.prototype), "click"));
	($mol_mem(($.$mol_button.prototype), "event_click"));
	($mol_mem(($.$mol_button.prototype), "Speck"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    Promise.resolve().then(() => this.status([error]));
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n\tbackground: transparent;\n\tcolor: inherit;\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus-visible {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));

;
	($.$mol_button_typed) = class $mol_button_typed extends ($.$mol_button) {
		minimal_height(){
			return 40;
		}
		minimal_width(){
			return 40;
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus-visible {\n\tbox-shadow: inset 0 0 0 10rem var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_button_minor) = class $mol_button_minor extends ($.$mol_button_typed) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_list) = class $mol_list extends ($.$mol_view) {
		rows(){
			return [];
		}
		gap_before(){
			return 0;
		}
		gap_after(){
			return 0;
		}
		render_visible_only(){
			return true;
		}
		render_over(){
			return 0;
		}
		sub(){
			return (this.rows());
		}
		Empty(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Gap_before(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_before())});
			return obj;
		}
		Gap_after(){
			const obj = new this.$.$mol_view();
			(obj.style) = () => ({"paddingTop": (this.gap_after())});
			return obj;
		}
		view_window(){
			return [0, 0];
		}
	};
	($mol_mem(($.$mol_list.prototype), "Empty"));
	($mol_mem(($.$mol_list.prototype), "Gap_before"));
	($mol_mem(($.$mol_list.prototype), "Gap_after"));


;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = this.$mol_dom_context.CSS?.supports('overflow-anchor:auto') ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top < limit_top) && (bottom < limit_bottom) && (max < kids.length)) {
                    min2 = max;
                    top2 = bottom;
                }
                if ((bottom > limit_bottom) && (top > limit_top) && (min > 0)) {
                    max2 = min;
                    bottom2 = top;
                }
                while (anchoring && ((top2 > limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: 1.5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_paragraph) = class $mol_paragraph extends ($.$mol_view) {
		line_height(){
			return 24;
		}
		letter_width(){
			return 7;
		}
		width_limit(){
			return +Infinity;
		}
		row_width(){
			return 0;
		}
		sub(){
			return [(this.title())];
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));

;
	($.$mol_dimmer) = class $mol_dimmer extends ($.$mol_paragraph) {
		parts(){
			return [];
		}
		string(id){
			return "";
		}
		haystack(){
			return "";
		}
		needle(){
			return "";
		}
		sub(){
			return (this.parts());
		}
		Low(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ([(this.string(id))]);
			return obj;
		}
		High(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ([(this.string(id))]);
			return obj;
		}
	};
	($mol_mem_key(($.$mol_dimmer.prototype), "Low"));
	($mol_mem_key(($.$mol_dimmer.prototype), "High"));


;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = (params) => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));

;
	($.$mol_search) = class $mol_search extends ($.$mol_pop) {
		clear(next){
			if(next !== undefined) return next;
			return null;
		}
		Hotkey(){
			const obj = new this.$.$mol_hotkey();
			(obj.key) = () => ({"escape": (next) => (this.clear(next))});
			return obj;
		}
		nav_components(){
			return [];
		}
		nav_focused(next){
			if(next !== undefined) return next;
			return null;
		}
		Nav(){
			const obj = new this.$.$mol_nav();
			(obj.keys_y) = () => ((this.nav_components()));
			(obj.current_y) = (next) => ((this.nav_focused(next)));
			return obj;
		}
		suggests_showed(next){
			if(next !== undefined) return next;
			return false;
		}
		query(next){
			if(next !== undefined) return next;
			return "";
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_search_hint"));
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		enabled(){
			return true;
		}
		keyboard(){
			return "search";
		}
		enter(){
			return "search";
		}
		bring(){
			return (this.Query().bring());
		}
		Query(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.query(next)));
			(obj.hint) = () => ((this.hint()));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.enabled) = () => ((this.enabled()));
			(obj.keyboard) = () => ((this.keyboard()));
			(obj.enter) = () => ((this.enter()));
			return obj;
		}
		Clear_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		Clear(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_search_Clear_hint")));
			(obj.click) = (next) => ((this.clear(next)));
			(obj.sub) = () => ([(this.Clear_icon())]);
			return obj;
		}
		anchor_content(){
			return [(this.Query()), (this.Clear())];
		}
		menu_items(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.menu_items()));
			return obj;
		}
		Bubble_pane(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Menu())]);
			return obj;
		}
		suggest_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		suggest_label(id){
			return "";
		}
		Suggest_label(id){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ((this.suggest_label(id)));
			(obj.needle) = () => ((this.query()));
			return obj;
		}
		suggest_content(id){
			return [(this.Suggest_label(id))];
		}
		suggests(){
			return [];
		}
		plugins(){
			return [
				...(super.plugins()), 
				(this.Hotkey()), 
				(this.Nav())
			];
		}
		showed(next){
			return (this.suggests_showed(next));
		}
		align_hor(){
			return "right";
		}
		Anchor(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.anchor_content()));
			return obj;
		}
		bubble_content(){
			return [(this.Bubble_pane())];
		}
		Suggest(id){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.suggest_select(id, next)));
			(obj.sub) = () => ((this.suggest_content(id)));
			return obj;
		}
	};
	($mol_mem(($.$mol_search.prototype), "clear"));
	($mol_mem(($.$mol_search.prototype), "Hotkey"));
	($mol_mem(($.$mol_search.prototype), "nav_focused"));
	($mol_mem(($.$mol_search.prototype), "Nav"));
	($mol_mem(($.$mol_search.prototype), "suggests_showed"));
	($mol_mem(($.$mol_search.prototype), "query"));
	($mol_mem(($.$mol_search.prototype), "submit"));
	($mol_mem(($.$mol_search.prototype), "Query"));
	($mol_mem(($.$mol_search.prototype), "Clear_icon"));
	($mol_mem(($.$mol_search.prototype), "Clear"));
	($mol_mem(($.$mol_search.prototype), "Menu"));
	($mol_mem(($.$mol_search.prototype), "Bubble_pane"));
	($mol_mem_key(($.$mol_search.prototype), "suggest_select"));
	($mol_mem_key(($.$mol_search.prototype), "Suggest_label"));
	($mol_mem(($.$mol_search.prototype), "Anchor"));
	($mol_mem_key(($.$mol_search.prototype), "Suggest"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search extends $.$mol_search {
            anchor_content() {
                return [
                    this.Query(),
                    ...this.query() ? [this.Clear()] : [],
                ];
            }
            suggests_showed(next = true) {
                this.query();
                if (!this.focused())
                    return false;
                return next;
            }
            suggest_selected(next) {
                if (next === undefined)
                    return;
                this.query(next);
                this.Query().focused(true);
            }
            nav_components() {
                return [
                    this.Query(),
                    ...this.menu_items(),
                ];
            }
            nav_focused(component) {
                if (!this.focused())
                    return null;
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.suggests_showed()) {
                    this.ensure_visible(component, "center");
                    component.focused(true);
                }
                return component;
            }
            suggest_label(key) {
                return key;
            }
            menu_items() {
                return this.suggests().map((suggest) => this.Suggest(suggest));
            }
            suggest_select(id, event) {
                this.query(id);
                this.Query().selection([id.length, id.length]);
                this.Query().focused(true);
            }
            clear(event) {
                this.query('');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "anchor_content", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "suggests_showed", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "nav_focused", null);
        __decorate([
            $mol_mem
        ], $mol_search.prototype, "menu_items", null);
        $$.$mol_search = $mol_search;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/search/search.view.css", "[mol_search] {\n\talign-self: flex-start;\n\tflex: auto;\n}\n\n[mol_search_anchor] {\n\tflex: 1 1 auto;\n}\n\n[mol_search_query] {\n\tflex-grow: 1;\n}\n\n[mol_search_menu] {\n\tmin-height: .75rem;\n\tdisplay: flex;\n}\n\n[mol_search_suggest] {\n\ttext-align: left;\n}\n\n[mol_search_suggest_label_high] {\n\tcolor: var(--mol_theme_shade);\n\ttext-shadow: none;\n}\n");
})($ || ($ = {}));

;
	($.$mol_link) = class $mol_link extends ($.$mol_view) {
		uri_toggle(){
			return "";
		}
		hint(){
			return "";
		}
		hint_safe(){
			return (this.hint());
		}
		target(){
			return "_self";
		}
		file_name(){
			return "";
		}
		current(){
			return false;
		}
		relation(){
			return "";
		}
		event_click(next){
			if(next !== undefined) return next;
			return null;
		}
		click(next){
			return (this.event_click(next));
		}
		uri(){
			return "";
		}
		dom_name(){
			return "a";
		}
		uri_off(){
			return "";
		}
		uri_native(){
			return null;
		}
		external(){
			return false;
		}
		attr(){
			return {
				...(super.attr()), 
				"href": (this.uri_toggle()), 
				"title": (this.hint_safe()), 
				"target": (this.target()), 
				"download": (this.file_name()), 
				"mol_link_current": (this.current()), 
				"rel": (this.relation())
			};
		}
		sub(){
			return [(this.title())];
		}
		arg(){
			return {};
		}
		event(){
			return {...(super.event()), "click": (next) => (this.click(next))};
		}
	};
	($mol_mem(($.$mol_link.prototype), "event_click"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static prolog = '';
        static separator = ' ';
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static href_normal() {
            return this.link({});
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] ?? null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            const params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            const chunks = [];
            for (const key in next) {
                if (next[key] !== null) {
                    chunks.push([key, next[key]].map(encodeURIComponent).join('='));
                }
            }
            return chunks.join(' ');
        }
        static go(next) {
            this.href(this.link(next));
        }
        static commit() { }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            const prefix = this.prefix;
            const dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus-visible': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));

;
	($.$mol_page) = class $mol_page extends ($.$mol_view) {
		tabindex(){
			return -1;
		}
		Logo(){
			return null;
		}
		title_content(){
			return [(this.Logo()), (this.title())];
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("h1");
			(obj.sub) = () => ((this.title_content()));
			return obj;
		}
		tools(){
			return [];
		}
		Tools(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.tools()));
			return obj;
		}
		head(){
			return [(this.Title()), (this.Tools())];
		}
		Head(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (64);
			(obj.dom_name) = () => ("header");
			(obj.sub) = () => ((this.head()));
			return obj;
		}
		body_scroll_top(next){
			return (this.Body().scroll_top(next));
		}
		body(){
			return [];
		}
		Body_content(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.body()));
			return obj;
		}
		body_content(){
			return [(this.Body_content())];
		}
		Body(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ((this.body_content()));
			return obj;
		}
		foot(){
			return [];
		}
		Foot(){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("footer");
			(obj.sub) = () => ((this.foot()));
			return obj;
		}
		dom_name(){
			return "article";
		}
		attr(){
			return {...(super.attr()), "tabIndex": (this.tabindex())};
		}
		sub(){
			return [
				(this.Head()), 
				(this.Body()), 
				(this.Foot())
			];
		}
	};
	($mol_mem(($.$mol_page.prototype), "Title"));
	($mol_mem(($.$mol_page.prototype), "Tools"));
	($mol_mem(($.$mol_page.prototype), "Head"));
	($mol_mem(($.$mol_page.prototype), "Body_content"));
	($mol_mem(($.$mol_page.prototype), "Body"));
	($mol_mem(($.$mol_page.prototype), "Foot"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { hsla, blur } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                box: {
                    shadow: [
                        [0, `-0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                        [0, `0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                    ],
                },
                zIndex: 2,
                '@media': {
                    'print': {
                        box: {
                            shadow: [[0, `1px`, 0, 0, hsla(0, 0, 0, .25)]],
                        },
                    },
                },
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 0,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                '@media': {
                    'print': {
                        display: 'none',
                    },
                },
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
            },
            Body_content: {
                padding: $mol_gap.block,
                flex: {
                    direction: 'column',
                    shrink: 1,
                    grow: 1,
                },
                justify: {
                    self: 'stretch',
                },
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                box: {
                    shadow: [
                        [0, `-0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                        [0, `0.5rem`, `0.5rem`, `-0.5rem`, hsla(0, 0, 0, .25)],
                    ],
                },
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_book2_catalog) = class $mol_book2_catalog extends ($.$mol_book2) {
		Menu_title(){
			return (this.Menu().Title());
		}
		menu_title(){
			return "";
		}
		Menu_tools(){
			return (this.Menu().Tools());
		}
		Menu_logo(){
			return null;
		}
		menu_head(){
			return [(this.Menu_title()), (this.Menu_tools())];
		}
		menu_filter(next){
			if(next !== undefined) return next;
			return "";
		}
		Menu_filter(){
			const obj = new this.$.$mol_search();
			(obj.query) = (next) => ((this.menu_filter(next)));
			return obj;
		}
		Menu_links_empty(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		arg(id){
			return {};
		}
		menu_link_arg(id){
			return (this.arg(id));
		}
		spread_title(id){
			return "";
		}
		Menu_link_title(id){
			const obj = new this.$.$mol_dimmer();
			(obj.needle) = () => ((this.menu_filter()));
			(obj.haystack) = () => ((this.spread_title(id)));
			return obj;
		}
		menu_link_content(id){
			return [(this.Menu_link_title(id))];
		}
		Menu_link(id){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ((this.menu_link_arg(id)));
			(obj.sub) = () => ((this.menu_link_content(id)));
			return obj;
		}
		menu_links(){
			return [(this.Menu_link("0"))];
		}
		Menu_links(){
			const obj = new this.$.$mol_list();
			(obj.Empty) = () => ((this.Menu_links_empty()));
			(obj.rows) = () => ((this.menu_links()));
			return obj;
		}
		menu_body(){
			return [(this.Menu_filter()), (this.Menu_links())];
		}
		menu_foot(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ((this.menu_title()));
			(obj.Logo) = () => ((this.Menu_logo()));
			(obj.tools) = () => ([...(this.menu_tools()), ...(this.addon_tools())]);
			(obj.head) = () => ((this.menu_head()));
			(obj.body) = () => ((this.menu_body()));
			(obj.foot) = () => ((this.menu_foot()));
			return obj;
		}
		spread_close_arg(){
			return {};
		}
		Spread_close_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		param(){
			return "";
		}
		spread(next){
			if(next !== undefined) return next;
			return "";
		}
		spreads(){
			return {};
		}
		Spread(id){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Spread_default(){
			return null;
		}
		spread_ids(){
			return [];
		}
		menu_filter_enabled(){
			return false;
		}
		spread_ids_filtered(){
			return [];
		}
		menu_tools(){
			return [];
		}
		addon_tools(){
			return [];
		}
		pages(){
			return [(this.Menu())];
		}
		Spread_close(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ((this.spread_close_arg()));
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_book2_catalog_Spread_close_hint")));
			(obj.sub) = () => ([(this.Spread_close_icon())]);
			return obj;
		}
	};
	($mol_mem(($.$mol_book2_catalog.prototype), "menu_filter"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Menu_filter"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Menu_links_empty"));
	($mol_mem_key(($.$mol_book2_catalog.prototype), "Menu_link_title"));
	($mol_mem_key(($.$mol_book2_catalog.prototype), "Menu_link"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Menu_links"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Menu"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Spread_close_icon"));
	($mol_mem(($.$mol_book2_catalog.prototype), "spread"));
	($mol_mem_key(($.$mol_book2_catalog.prototype), "Spread"));
	($mol_mem(($.$mol_book2_catalog.prototype), "Spread_close"));


;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2_catalog extends $.$mol_book2_catalog {
            spread_current() {
                return this.spread() === '' ? this.Spread_default() : this.Spread(this.spread());
            }
            pages() {
                const spread = this.spread_current();
                return [
                    this.Menu(),
                    ...spread
                        ? spread instanceof $mol_book2
                            ? spread.pages()
                            : [spread]
                        : [],
                ];
            }
            auto() {
                const spread = this.spread_current();
                if (spread instanceof $mol_book2)
                    spread.auto();
            }
            spread_ids() {
                return Object.keys(this.spreads());
            }
            menu_body() {
                return [
                    ...this.menu_filter_enabled() ? [this.Menu_filter()] : [],
                    this.Menu_links(),
                ];
            }
            menu_filter_enabled() {
                return this.spread_ids().length >= 10;
            }
            menu_links() {
                return this.spread_ids_filtered()
                    .map(spread => this.Menu_link(spread));
            }
            spread_ids_filtered() {
                return this.spread_ids()
                    .filter($mol_match_text(this.menu_filter(), spread => [this.spread_title(spread)]));
            }
            Spread(id) {
                return this.spreads()[id];
            }
            Spread_default() {
                return this.spreads()[''];
            }
            spread(next) {
                return this.$.$mol_state_arg.value(this.param(), next) ?? '';
            }
            arg(spread) {
                return { [this.param()]: spread || null };
            }
            spread_close_arg() {
                return { [this.param()]: null };
            }
            spread_title(spread) {
                const page = this.Spread(spread);
                return page instanceof $mol_book2
                    && page.menu_title()
                    || page.title()
                    || spread;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "pages", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread_ids", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "menu_body", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "menu_links", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread_ids_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_book2_catalog.prototype, "spread", null);
        $$.$mol_book2_catalog = $mol_book2_catalog;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/catalog/catalog.view.css", "[mol_book2_catalog_menu_filter] {\n\tflex-shrink: 0;\n\tflex-grow: 0;\n\talign-self: stretch;\n}\n\n");
})($ || ($ = {}));

;
	($.$mol_theme_auto) = class $mol_theme_auto extends ($.$mol_plugin) {
		theme(){
			return "";
		}
		attr(){
			return {"mol_theme": (this.theme())};
		}
	};


;
"use strict";
var $;
(function ($) {
    class $mol_media extends $mol_object2 {
        static match(query, next) {
            if (next !== undefined)
                return next;
            const res = this.$.$mol_dom_context.matchMedia?.(query) ?? {};
            res.onchange = () => this.match(query, res.matches);
            return res.matches;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_media, "match", null);
    $.$mol_media = $mol_media;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = this.$mol_media.match('(prefers-color-scheme: light)');
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_check) = class $mol_check extends ($.$mol_button_minor) {
		checked(next){
			if(next !== undefined) return next;
			return false;
		}
		aria_checked(){
			return "false";
		}
		aria_role(){
			return "checkbox";
		}
		Icon(){
			return null;
		}
		title(){
			return "";
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		label(){
			return [(this.Title())];
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_check_checked": (this.checked()), 
				"aria-checked": (this.aria_checked()), 
				"role": (this.aria_role())
			};
		}
		sub(){
			return [(this.Icon()), (this.label())];
		}
	};
	($mol_mem(($.$mol_check.prototype), "checked"));
	($mol_mem(($.$mol_check.prototype), "Title"));


;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\t/* align-items: flex-start; */\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
            aria_checked() {
                return String(this.checked());
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_check_icon) = class $mol_check_icon extends ($.$mol_check) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon]:where([mol_check_checked]) {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_brightness_4) = class $mol_icon_brightness_4 extends ($.$mol_icon) {
		path(){
			return "M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z";
		}
	};


;
"use strict";

;
	($.$mol_lights_toggle) = class $mol_lights_toggle extends ($.$mol_check_icon) {
		Lights_icon(){
			const obj = new this.$.$mol_icon_brightness_4();
			return obj;
		}
		lights(next){
			if(next !== undefined) return next;
			return false;
		}
		Icon(){
			return (this.Lights_icon());
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_lights_toggle_hint"));
		}
		checked(next){
			return (this.lights(next));
		}
	};
	($mol_mem(($.$mol_lights_toggle.prototype), "Lights_icon"));
	($mol_mem(($.$mol_lights_toggle.prototype), "lights"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
let $hyoo_sync_revision = "echo";

;
"use strict";
var $;
(function ($) {
    function $mol_int62_string_ensure(str) {
        if (typeof str !== 'string')
            return null;
        return $mol_int62_from_string(str) && str;
    }
    $.$mol_int62_string_ensure = $mol_int62_string_ensure;
    $.$mol_int62_max = (2 ** 30) - 1;
    $.$mol_int62_min = -(2 ** 30);
    $.$mol_int62_range = $.$mol_int62_max - $.$mol_int62_min + 1;
    function $mol_int62_to_string({ lo, hi }) {
        lo = (lo + $.$mol_int62_range) % $.$mol_int62_range;
        hi = (hi + $.$mol_int62_range) % $.$mol_int62_range;
        return lo.toString(36) + '_' + hi.toString(36);
    }
    $.$mol_int62_to_string = $mol_int62_to_string;
    function $mol_int62_from_string(str) {
        const [str_lo, str_hi] = str.split('_');
        const int_lo = parseInt(str_lo, 36);
        const int_hi = parseInt(str_hi, 36);
        if (int_lo.toString(36) !== str_lo || int_hi.toString(36) !== str_hi) {
            return null;
        }
        return {
            lo: (int_lo - $.$mol_int62_min) % $.$mol_int62_range + $.$mol_int62_min,
            hi: (int_hi - $.$mol_int62_min) % $.$mol_int62_range + $.$mol_int62_min,
        };
    }
    $.$mol_int62_from_string = $mol_int62_from_string;
    function $mol_int62_compare(left_lo, left_hi, right_lo, right_hi) {
        return (right_hi - left_hi) || (right_lo - left_lo);
    }
    $.$mol_int62_compare = $mol_int62_compare;
    function $mol_int62_inc(lo, hi, max = $.$mol_int62_max) {
        if (lo === max) {
            return { lo: -max, hi: hi + 1 };
        }
        else {
            return { lo: lo + 1, hi };
        }
    }
    $.$mol_int62_inc = $mol_int62_inc;
    function $mol_int62_random() {
        return {
            lo: Math.floor(Math.random() * $.$mol_int62_range + $.$mol_int62_min),
            hi: Math.floor(Math.random() * $.$mol_int62_range + $.$mol_int62_min),
        };
    }
    $.$mol_int62_random = $mol_int62_random;
    function $mol_int62_hash_string(str) {
        return $mol_int62_to_string($mol_int62_hash_buffer($mol_charset_encode(str)));
    }
    $.$mol_int62_hash_string = $mol_int62_hash_string;
    function $mol_int62_hash_buffer(buf, seed = { lo: 0, hi: 0 }) {
        let h1 = 0xdeadbeef ^ seed.lo;
        let h2 = 0x41c6ce57 ^ seed.hi;
        for (const byte of buf) {
            h1 = Math.imul(h1 ^ byte, 2654435761);
            h2 = Math.imul(h2 ^ byte, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return { lo: h1 << 1 >> 1, hi: h2 << 1 >> 1 };
    }
    $.$mol_int62_hash_buffer = $mol_int62_hash_buffer;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_data_enum(name, dict) {
        const index = {};
        for (let key in dict) {
            if (Number.isNaN(Number(key))) {
                index[dict[key]] = key;
            }
        }
        return $mol_data_setup((value) => {
            if (typeof index[value] !== 'string') {
                return $mol_fail(new $mol_data_error(`${value} is not value of ${name} enum`));
            }
            return value;
        }, { name, dict });
    }
    $.$mol_data_enum = $mol_data_enum;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_crypto_native = $node.crypto.webcrypto;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode(src) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_encode = $mol_base64_encode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_encode_node(str) {
        if (!str)
            return '';
        if (Buffer.isBuffer(str))
            return str.toString('base64');
        return Buffer.from(str).toString('base64');
    }
    $.$mol_base64_encode_node = $mol_base64_encode_node;
    $.$mol_base64_encode = $mol_base64_encode_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode(base64) {
        throw new Error('Not implemented');
    }
    $.$mol_base64_decode = $mol_base64_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_decode_node(base64Str) {
        base64Str = base64Str.replace(/-/g, '+').replace(/_/g, '/');
        const buffer = Buffer.from(base64Str, 'base64');
        return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    }
    $.$mol_base64_decode_node = $mol_base64_decode_node;
    $.$mol_base64_decode = $mol_base64_decode_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_url_encode(buffer) {
        return $mol_base64_encode(buffer).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    }
    $.$mol_base64_url_encode = $mol_base64_url_encode;
    function $mol_base64_url_decode(str) {
        return $mol_base64_decode(str.replace(/-/g, '+').replace(/_/g, '/'));
    }
    $.$mol_base64_url_decode = $mol_base64_url_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const algorithm = {
        name: 'ECDSA',
        hash: 'SHA-256',
        namedCurve: "P-256",
    };
    async function $mol_crypto_auditor_pair() {
        const pair = await $mol_crypto_native.subtle.generateKey(algorithm, true, ['sign', 'verify']);
        return {
            public: new $mol_crypto_auditor_public(pair.publicKey),
            private: new $mol_crypto_auditor_private(pair.privateKey),
        };
    }
    $.$mol_crypto_auditor_pair = $mol_crypto_auditor_pair;
    class $mol_crypto_auditor_public extends Object {
        native;
        static size_str = 86;
        static size_bin = 64;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            if (typeof serial !== 'string') {
                serial = $mol_base64_url_encode(serial.subarray(0, 32))
                    + $mol_base64_url_encode(serial.subarray(32, 64));
            }
            return new this(await $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['verify'],
                kty: "EC",
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
            }, algorithm, true, ['verify']));
        }
        async serial() {
            const { x, y } = await $mol_crypto_native.subtle.exportKey('jwk', this.native);
            return x + y;
        }
        async toArray() {
            const { x, y, d } = await $mol_crypto_native.subtle.exportKey('jwk', this.native);
            return new Uint8Array([
                ...$mol_base64_url_decode(x),
                ...$mol_base64_url_decode(y),
            ]);
        }
        async verify(data, sign) {
            return await $mol_crypto_native.subtle.verify(algorithm, this.native, sign, data);
        }
    }
    $.$mol_crypto_auditor_public = $mol_crypto_auditor_public;
    class $mol_crypto_auditor_private extends Object {
        native;
        static size_str = 129;
        static size_bin = 96;
        constructor(native) {
            super();
            this.native = native;
        }
        static async from(serial) {
            if (typeof serial !== 'string') {
                serial = $mol_base64_url_encode(serial.subarray(0, 32))
                    + $mol_base64_url_encode(serial.subarray(32, 64))
                    + $mol_base64_url_encode(serial.subarray(64));
            }
            return new this(await $mol_crypto_native.subtle.importKey('jwk', {
                crv: "P-256",
                ext: true,
                key_ops: ['sign'],
                kty: "EC",
                x: serial.slice(0, 43),
                y: serial.slice(43, 86),
                d: serial.slice(86, 129),
            }, algorithm, true, ['sign']));
        }
        async serial() {
            const { x, y, d } = await $mol_crypto_native.subtle.exportKey('jwk', this.native);
            return x + y + d;
        }
        async toArray() {
            const { x, y, d } = await $mol_crypto_native.subtle.exportKey('jwk', this.native);
            return new Uint8Array([
                ...$mol_base64_url_decode(x),
                ...$mol_base64_url_decode(y),
                ...$mol_base64_url_decode(d),
            ]);
        }
        async sign(data) {
            return await $mol_crypto_native.subtle.sign(algorithm, this.native, data);
        }
        async public() {
            return await $mol_crypto_auditor_public.from($mol_crypto_auditor_private_to_public(await this.serial()));
        }
    }
    $.$mol_crypto_auditor_private = $mol_crypto_auditor_private;
    $.$mol_crypto_auditor_sign_size = 64;
    function $mol_crypto_auditor_private_to_public(serial) {
        return serial.slice(0, 86);
    }
    $.$mol_crypto_auditor_private_to_public = $mol_crypto_auditor_private_to_public;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $hyoo_crowd_peer_level;
    (function ($hyoo_crowd_peer_level) {
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["get"] = 0] = "get";
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["add"] = 1] = "add";
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["mod"] = 2] = "mod";
        $hyoo_crowd_peer_level[$hyoo_crowd_peer_level["law"] = 3] = "law";
    })($hyoo_crowd_peer_level = $.$hyoo_crowd_peer_level || ($.$hyoo_crowd_peer_level = {}));
    class $hyoo_crowd_peer extends Object {
        key_public;
        key_public_serial;
        key_private;
        key_private_serial;
        id;
        constructor(key_public, key_public_serial, key_private, key_private_serial) {
            super();
            this.key_public = key_public;
            this.key_public_serial = key_public_serial;
            this.key_private = key_private;
            this.key_private_serial = key_private_serial;
            this.id = $mol_int62_hash_string(this.key_public_serial);
        }
        static async generate() {
            const pair = await $$.$mol_crypto_auditor_pair();
            const serial = await pair.private.serial();
            return new this(pair.public, $mol_crypto_auditor_private_to_public(serial), pair.private, serial);
        }
        static async restore(serial) {
            return new this(await $$.$mol_crypto_auditor_public.from(serial), $mol_crypto_auditor_private_to_public(serial), await $$.$mol_crypto_auditor_private.from(serial), serial);
        }
    }
    $.$hyoo_crowd_peer = $hyoo_crowd_peer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const level = $mol_data_enum('level', $hyoo_crowd_peer_level);
    let $hyoo_crowd_unit_kind;
    (function ($hyoo_crowd_unit_kind) {
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["grab"] = 0] = "grab";
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["join"] = 1] = "join";
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["give"] = 2] = "give";
        $hyoo_crowd_unit_kind[$hyoo_crowd_unit_kind["data"] = 3] = "data";
    })($hyoo_crowd_unit_kind = $.$hyoo_crowd_unit_kind || ($.$hyoo_crowd_unit_kind = {}));
    let $hyoo_crowd_unit_group;
    (function ($hyoo_crowd_unit_group) {
        $hyoo_crowd_unit_group[$hyoo_crowd_unit_group["auth"] = 0] = "auth";
        $hyoo_crowd_unit_group[$hyoo_crowd_unit_group["data"] = 1] = "data";
    })($hyoo_crowd_unit_group = $.$hyoo_crowd_unit_group || ($.$hyoo_crowd_unit_group = {}));
    class $hyoo_crowd_unit extends Object {
        land;
        auth;
        head;
        self;
        next;
        prev;
        time;
        data;
        bin;
        constructor(land, auth, head, self, next, prev, time, data, bin) {
            super();
            this.land = land;
            this.auth = auth;
            this.head = head;
            this.self = self;
            this.next = next;
            this.prev = prev;
            this.time = time;
            this.data = data;
            this.bin = bin;
        }
        kind() {
            if (this.head === this.self && this.auth === this.self) {
                if (this.head === this.land) {
                    return $hyoo_crowd_unit_kind.grab;
                }
                else {
                    return $hyoo_crowd_unit_kind.join;
                }
            }
            if (this.head === this.land) {
                return $hyoo_crowd_unit_kind.give;
            }
            return $hyoo_crowd_unit_kind.data;
        }
        group() {
            return this.kind() === $hyoo_crowd_unit_kind.data
                ? $hyoo_crowd_unit_group.data
                : $hyoo_crowd_unit_group.auth;
        }
        level() {
            switch (this.kind()) {
                case $hyoo_crowd_unit_kind.grab: return $hyoo_crowd_peer_level.law;
                case $hyoo_crowd_unit_kind.give: return level(this.data);
                default: $mol_fail(new Error(`Wrong unit kind for getting level: ${this.kind()}`));
            }
        }
        [Symbol.toPrimitive]() {
            return JSON.stringify(this);
        }
        [$mol_dev_format_head]() {
            switch (this.kind()) {
                case $hyoo_crowd_unit_kind.grab:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), ' 👑');
                case $hyoo_crowd_unit_kind.join:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(' 🔑 ', this.self));
                case $hyoo_crowd_unit_kind.give:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(' 🏅 ', this.self, ' '), $mol_dev_format_native($hyoo_crowd_peer_level[this.data] ?? this.data));
                case $hyoo_crowd_unit_kind.data:
                    return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(' 📦 ', this.head, '!', this.self, ' '), $mol_dev_format_native(this.data));
            }
        }
    }
    $.$hyoo_crowd_unit = $hyoo_crowd_unit;
    const offset = {
        land_lo: 0,
        land_hi: 4,
        auth_lo: 8,
        auth_hi: 12,
        head_lo: 16,
        head_hi: 20,
        self_lo: 24,
        self_hi: 28,
        next_lo: 32,
        next_hi: 36,
        prev_lo: 40,
        prev_hi: 44,
        time: 48,
        size: 54,
        data: 56,
    };
    class $hyoo_crowd_unit_bin extends DataView {
        static from_buffer(buffer) {
            const size = Math.ceil(Math.abs(buffer[offset.size / 2]) / 8) * 8 + offset.data + $mol_crypto_auditor_sign_size;
            return new this(buffer.slice(0, size / 2).buffer);
        }
        static from_unit(unit) {
            if (unit.bin)
                return unit.bin;
            const type = unit.data === null
                ? 0
                : unit.data instanceof Uint8Array
                    ? -1
                    : 1;
            const buff = type === 0 ? null
                : type > 0 ? $mol_charset_encode(JSON.stringify(unit.data))
                    : unit.data;
            const size = buff?.byteLength ?? 0;
            if (type > 0 && size > 2 ** 15 - 1)
                throw new Error(`Too large json data: ${size} > ${2 ** 15 - 1}`);
            if (type < 0 && size > 2 ** 15)
                throw new Error(`Too large binary data: ${size} > ${2 ** 15}`);
            const total = offset.data + Math.ceil(size / 8) * 8 + $mol_crypto_auditor_sign_size;
            const mem = new Uint8Array(total);
            const bin = new $hyoo_crowd_unit_bin(mem.buffer);
            const land = $mol_int62_from_string(unit.land);
            bin.setInt32(offset.land_lo, land.lo, true);
            bin.setInt32(offset.land_hi, land.hi, true);
            const auth = $mol_int62_from_string(unit.auth);
            bin.setInt32(offset.auth_lo, auth.lo, true);
            bin.setInt32(offset.auth_hi, auth.hi, true);
            const head = $mol_int62_from_string(unit.head);
            bin.setInt32(offset.head_lo, head.lo, true);
            bin.setInt32(offset.head_hi, head.hi, true);
            const self = $mol_int62_from_string(unit.self);
            bin.setInt32(offset.self_lo, self.lo, true);
            bin.setInt32(offset.self_hi, self.hi, true);
            const next = $mol_int62_from_string(unit.next);
            bin.setInt32(offset.next_lo, next.lo, true);
            bin.setInt32(offset.next_hi, next.hi, true);
            const prev = $mol_int62_from_string(unit.prev);
            bin.setInt32(offset.prev_lo, prev.lo, true);
            bin.setInt32(offset.prev_hi, prev.hi, true);
            bin.setInt32(offset.time, unit.time, true);
            bin.setInt16(offset.size, type * size, true);
            if (buff)
                mem.set(buff, offset.data);
            return bin;
        }
        sign(next) {
            const sign_offset = this.byteOffset + this.byteLength - $mol_crypto_auditor_sign_size;
            const buff = new Uint8Array(this.buffer, sign_offset, $mol_crypto_auditor_sign_size);
            if (!next)
                return buff;
            buff.set(next);
            return buff;
        }
        size() {
            return Math.ceil(Math.abs(this.getInt16(offset.size, true)) / 8) * 8 + offset.data + $mol_crypto_auditor_sign_size;
        }
        sens() {
            return new Uint8Array(this.buffer, this.byteOffset, this.size() - $mol_crypto_auditor_sign_size);
        }
        unit() {
            const land = $mol_int62_to_string({
                lo: this.getInt32(offset.land_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.land_hi, true) << 1 >> 1,
            });
            const auth = $mol_int62_to_string({
                lo: this.getInt32(offset.auth_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.auth_hi, true) << 1 >> 1,
            });
            const head = $mol_int62_to_string({
                lo: this.getInt32(offset.head_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.head_hi, true) << 1 >> 1,
            });
            const self = $mol_int62_to_string({
                lo: this.getInt32(offset.self_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.self_hi, true) << 1 >> 1,
            });
            const next = $mol_int62_to_string({
                lo: this.getInt32(offset.next_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.next_hi, true) << 1 >> 1,
            });
            const prev = $mol_int62_to_string({
                lo: this.getInt32(offset.prev_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.prev_hi, true) << 1 >> 1,
            });
            const time = this.getInt32(offset.time, true) << 1 >> 1;
            const type_size = this.getInt16(offset.size, true);
            let data = null;
            if (type_size) {
                try {
                    var buff = new Uint8Array(this.buffer, this.byteOffset + offset.data, Math.abs(type_size));
                }
                catch (error) {
                    error['message'] += `\nhead=${head};self=${self}`;
                    $mol_fail_hidden(error);
                }
                if (type_size < 0)
                    data = buff;
                else
                    data = JSON.parse($mol_charset_decode(buff));
            }
            return new $hyoo_crowd_unit(land, auth, head, self, next, prev, time, data, this);
        }
    }
    $.$hyoo_crowd_unit_bin = $hyoo_crowd_unit_bin;
    function $hyoo_crowd_unit_compare(left, right) {
        return (left.group() - right.group())
            || (left.time - right.time)
            || ((left.auth > right.auth) ? 1 : (left.auth < right.auth) ? -1 : 0)
            || ((left.self > right.self) ? 1 : (left.self < right.self) ? -1 : 0)
            || ((left.head > right.head) ? 1 : (left.head < right.head) ? -1 : 0)
            || ((left.prev > right.prev) ? 1 : (left.prev < right.prev) ? -1 : 0)
            || ((left.next > right.next) ? 1 : (left.next < right.next) ? -1 : 0)
            || ((left.land > right.land) ? 1 : (left.land < right.land) ? -1 : 0);
    }
    $.$hyoo_crowd_unit_compare = $hyoo_crowd_unit_compare;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    async function $hyoo_sync_peer(path, next) {
        let serial = $mol_state_local.value('$hyoo_sync_peer', next);
        if (typeof serial === 'string') {
            return await $hyoo_crowd_peer.restore(serial);
        }
        const peer = await $hyoo_crowd_peer.generate();
        $mol_state_local.value('$hyoo_sync_peer', peer.key_private_serial);
        return peer;
    }
    $.$hyoo_sync_peer = $hyoo_sync_peer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $hyoo_crowd_time_now() {
        return Math.floor(Date.now() / 100) - 1767e7;
    }
    $.$hyoo_crowd_time_now = $hyoo_crowd_time_now;
    function $hyoo_crowd_time_stamp(time) {
        return 1767e9 + time * 100;
    }
    $.$hyoo_crowd_time_stamp = $hyoo_crowd_time_stamp;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_clock extends Map {
        static begin = -1 * 2 ** 30;
        last_time = $hyoo_crowd_clock.begin;
        constructor(entries) {
            super(entries);
            if (!entries)
                return;
            for (const [peer, time] of entries) {
                this.see_time(time);
            }
        }
        sync(right) {
            for (const [peer, time] of right) {
                this.see_peer(peer, time);
            }
        }
        see_time(time) {
            if (time < this.last_time)
                return;
            this.last_time = time;
        }
        see_peer(peer, time) {
            if (!this.fresh(peer, time))
                return;
            this.set(peer, time);
            this.see_time(time);
        }
        see_bin(bin, group) {
            for (let cursor = offset.clocks; cursor < bin.byteLength; cursor += 16) {
                this.see_peer($mol_int62_to_string({
                    lo: bin.getInt32(cursor + 0, true) << 1 >> 1,
                    hi: bin.getInt32(cursor + 4, true) << 1 >> 1,
                }), bin.getInt32(cursor + 8 + 4 * group, true));
            }
        }
        fresh(peer, time) {
            return time > this.time(peer);
        }
        ahead(clock) {
            for (const [peer, time] of this) {
                if (clock.fresh(peer, time))
                    return true;
            }
            return false;
        }
        time(peer) {
            return this.get(peer) ?? $hyoo_crowd_clock.begin;
        }
        now() {
            return $hyoo_crowd_time_now();
        }
        last_stamp() {
            return $hyoo_crowd_time_stamp(this.last_time);
        }
        tick(peer) {
            let time = this.now();
            if (time <= this.last_time) {
                time = this.last_time + 1;
            }
            this.see_peer(peer, time);
            return time;
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade(' ' + new Date(this.last_stamp()).toISOString().replace('T', ' ')));
        }
    }
    $.$hyoo_crowd_clock = $hyoo_crowd_clock;
    const offset = {
        land_lo: 0,
        land_hi: 4,
        count: 8,
        clocks: 16,
    };
    class $hyoo_crowd_clock_bin extends DataView {
        static from(land_id, clocks, count) {
            const size = offset.clocks + clocks[0].size * 16;
            const mem = new Uint8Array(size);
            const bin = new $hyoo_crowd_clock_bin(mem.buffer);
            const land = $mol_int62_from_string(land_id);
            bin.setInt32(offset.land_lo, land.lo ^ (1 << 31), true);
            bin.setInt32(offset.land_hi, land.hi, true);
            bin.setInt32(offset.count, count, true);
            let cursor = offset.clocks;
            for (const [peer_id, time] of clocks[0]) {
                const peer = $mol_int62_from_string(peer_id);
                bin.setInt32(cursor + 0, peer.lo, true);
                bin.setInt32(cursor + 4, peer.hi, true);
                bin.setInt32(cursor + 8, time, true);
                bin.setInt32(cursor + 12, clocks[1].get(peer_id) ?? $hyoo_crowd_clock.begin, true);
                cursor += 16;
            }
            return bin;
        }
        land() {
            return $mol_int62_to_string({
                lo: this.getInt32(offset.land_lo, true) << 1 >> 1,
                hi: this.getInt32(offset.land_hi, true) << 1 >> 1,
            });
        }
        count() {
            return this.getInt32(offset.count, true);
        }
    }
    $.$hyoo_crowd_clock_bin = $hyoo_crowd_clock_bin;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_node extends $mol_object2 {
        land;
        head;
        constructor(land = new $hyoo_crowd_land, head = '0_0') {
            super();
            this.land = land;
            this.head = head;
        }
        static for(land, head) {
            return new this(land, head);
        }
        static toJSON() {
            return this.name;
        }
        id() {
            return this.head === '0_0'
                ? this.land.id()
                : `${this.land.id()}!${this.head}`;
        }
        world() {
            return this.land.world();
        }
        as(Node) {
            return this.world()?.Fund(Node).Item(`${this.land.id()}!${this.head}`) ?? new Node(this.land, this.head);
        }
        units() {
            return this.land.unit_alives(this.head);
        }
        nodes(Node) {
            const fund = this.world()?.Fund(Node);
            return this.units().map(unit => fund?.Item(`${this.land.id()}!${unit.self}`) ?? new Node(this.land, unit.self));
        }
        virgin() {
            return this.land.unit_list(this.head).length === 0;
        }
        [Symbol.toPrimitive]() {
            return `${this.constructor.name}("${this.land.id()}","${this.head}")`;
        }
        toJSON() {
            return this.id();
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), $mol_dev_format_shade(':'), $mol_dev_format_auto(this.land.unit_list(this.head)));
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_crowd_node.prototype, "units", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_crowd_node.prototype, "nodes", null);
    $.$hyoo_crowd_node = $hyoo_crowd_node;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_reg extends $hyoo_crowd_node {
        value(next) {
            const unit = this.units().at(-1);
            if (next === undefined)
                return unit?.data ?? null;
            if ($mol_compare_deep(unit?.data, next))
                return next;
            this.land.put(this.head, unit?.self ?? this.land.id_new(), '0_0', next);
            return next;
        }
        str(next) {
            return String(this.value(next) ?? '');
        }
        numb(next) {
            return Number(this.value(next));
        }
        bool(next) {
            return Boolean(this.value(next));
        }
        yoke(law = [''], mod = [], add = []) {
            const world = this.world();
            let land_id = $mol_int62_string_ensure(this.value());
            if (land_id)
                return world.land_sync(land_id);
            if (!this.land.allowed_add())
                return null;
            const land = $mol_wire_sync(world).grab(law, mod, add);
            this.value(land.id());
            world.land_init(land);
            return land;
        }
    }
    $.$hyoo_crowd_reg = $hyoo_crowd_reg;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_struct extends $hyoo_crowd_node {
        sub(key, Node) {
            const head = $mol_int62_hash_string(key + '\n' + this.head);
            return this.world()?.Fund(Node).Item(`${this.land.id()}!${head}`) ?? new Node(this.land, head);
        }
        yoke(key, Node, law = [''], mod = [], add = []) {
            const land = this.sub(key, $hyoo_crowd_reg).yoke(law, mod, add);
            return land?.chief.sub(key, Node) ?? null;
        }
    }
    $.$hyoo_crowd_struct = $hyoo_crowd_struct;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_land extends $mol_object {
        id() {
            return $mol_int62_to_string($mol_int62_random());
        }
        toJSON() {
            return this.id();
        }
        peer() {
            return this.world()?.peer;
        }
        peer_id() {
            return this.peer()?.id ?? '0_0';
        }
        world() {
            return null;
        }
        get clock_auth() {
            this.pub.promote();
            return this._clocks[$hyoo_crowd_unit_group.auth];
        }
        get clock_data() {
            this.pub.promote();
            return this._clocks[$hyoo_crowd_unit_group.data];
        }
        get clocks() {
            this.pub.promote();
            return this._clocks;
        }
        get clocks_bin() {
            return new Uint8Array($hyoo_crowd_clock_bin.from(this.id(), this._clocks, this._unit_all.size).buffer);
        }
        pub = new $mol_wire_pub;
        _clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock];
        _unit_all = new Map();
        unit(head, self) {
            return this._unit_all.get(`${head}!${self}`);
        }
        _unit_lists = new Map();
        _unit_alives = new Map();
        size() {
            return this._unit_all.size;
        }
        unit_list(head) {
            let kids = this._unit_lists.get(head);
            if (!kids)
                this._unit_lists.set(head, kids = Object.assign([], { dirty: false }));
            return kids;
        }
        unit_alives(head) {
            this.pub.promote();
            let kids = this._unit_alives.get(head);
            if (!kids) {
                const all = this.unit_list(head);
                if (all.dirty)
                    this.resort(head);
                kids = all.filter(kid => kid.data !== null);
                this._unit_alives.set(head, kids);
            }
            return kids;
        }
        node(head, Node) {
            return new Node(this, head);
        }
        chief = this.node('0_0', $hyoo_crowd_struct);
        id_new() {
            for (let i = 0; i < 1000; ++i) {
                const id = $mol_int62_to_string($mol_int62_random());
                if (id === '0_0')
                    continue;
                if (id === this.id())
                    continue;
                if (this._unit_lists.has(id))
                    continue;
                return id;
            }
            throw new Error(`Can't generate ID after 1000 times`);
        }
        fork(auth) {
            const fork = $hyoo_crowd_land.make({
                id: $mol_const(this.id()),
                peer: $mol_const(auth),
            });
            return fork.apply(this.delta());
        }
        delta(clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]) {
            this.pub.promote();
            const delta = [];
            for (const unit of this._unit_all.values()) {
                const time = clocks[unit.group()].time(unit.auth);
                if (unit.time <= time)
                    continue;
                delta.push(unit);
            }
            delta.sort($hyoo_crowd_unit_compare);
            return delta;
        }
        resort(head) {
            const kids = this._unit_lists.get(head);
            if (!kids.dirty)
                return kids;
            if (kids.length < 2) {
                kids.dirty = true;
                return kids;
            }
            const queue = kids.splice(0).sort((left, right) => -$hyoo_crowd_unit_compare(left, right));
            const locate = (self) => {
                for (let i = kids.length - 1; i >= 0; --i) {
                    if (kids[i].self === self)
                        return i;
                }
                return -1;
            };
            while (queue.length) {
                kids.push(queue.pop());
                for (let cursor = queue.length - 1; cursor >= 0; --cursor) {
                    const kid = queue[cursor];
                    let index = 0;
                    if (kid.prev !== '0_0') {
                        index = locate(kid.prev) + 1;
                        if (!index)
                            continue;
                    }
                    while (kids[index] && ($hyoo_crowd_unit_compare(kids[index], kid) > 0))
                        ++index;
                    const exists = locate(kid.self);
                    if (index === exists) {
                        if (cursor === queue.length - 1)
                            queue.pop();
                        continue;
                    }
                    if (exists >= 0) {
                        kids.splice(exists, 1);
                        if (exists < index)
                            --index;
                    }
                    kids.splice(index, 0, kid);
                    if (cursor === queue.length - 1)
                        queue.pop();
                    cursor = queue.length;
                }
            }
            kids.dirty = false;
            return kids;
        }
        apply(delta) {
            for (const next of delta) {
                this._clocks[next.group()].see_peer(next.auth, next.time);
                const kids = this.unit_list(next.head);
                const next_id = `${next.head}!${next.self}`;
                let prev = this._unit_all.get(next_id);
                if (prev) {
                    if ($hyoo_crowd_unit_compare(prev, next) > 0)
                        continue;
                    kids[kids.indexOf(prev)] = next;
                }
                else {
                    kids.push(next);
                }
                this._unit_all.set(next_id, next);
                if (kids.length > 1)
                    kids.dirty = true;
                this._unit_alives.set(next.head, undefined);
            }
            this.pub.emit();
            return this;
        }
        _joined = false;
        join() {
            if (this._joined)
                return;
            const auth = this.peer();
            if (!auth)
                return;
            if (!auth.key_public_serial)
                return;
            const auth_id = `${auth.id}!${auth.id}`;
            const auth_unit = this._unit_all.get(auth_id);
            if (auth_unit?.data)
                return this._joined = true;
            const time = this._clocks[$hyoo_crowd_unit_group.auth].tick(auth.id);
            const join_unit = new $hyoo_crowd_unit(this.id(), auth.id, auth.id, auth.id, '0_0', '0_0', time, auth.key_public_serial, null);
            this._unit_all.set(auth_id, join_unit);
            this._joined = true;
            this.pub.emit();
        }
        leave() {
            const auth = this.peer();
            if (!auth)
                return;
            if (!auth.key_public_serial)
                return;
            const auth_id = `${auth.id}!${auth.id}`;
            const auth_unit = this._unit_all.get(auth_id);
            if (!auth_unit || !auth_unit.data)
                return this._joined = false;
            const time = this._clocks[$hyoo_crowd_unit_group.auth].tick(auth.id);
            const join_unit = new $hyoo_crowd_unit(this.id(), auth.id, auth.id, auth.id, '0_0', '0_0', time, null, null);
            this._unit_all.set(auth_id, join_unit);
            this._joined = false;
            this.pub.emit();
        }
        allowed_add(peer = this.peer().id) {
            return this.level(peer) >= $hyoo_crowd_peer_level.add;
        }
        allowed_mod(peer = this.peer().id) {
            return this.level(peer) >= $hyoo_crowd_peer_level.mod;
        }
        allowed_law(peer = this.peer().id) {
            return this.level(peer) >= $hyoo_crowd_peer_level.law;
        }
        level_base(next) {
            this.level('0_0', next);
        }
        level(peer, next) {
            if (next)
                this.join();
            else
                this.pub.promote();
            if (!peer)
                peer = this.peer_id();
            const level_id = `${this.id()}!${peer}`;
            const prev = this._unit_all.get(level_id)?.level()
                ?? this._unit_all.get(`${this.id()}!0_0`)?.level()
                ?? (this.id() === peer ? $hyoo_crowd_peer_level.law : $hyoo_crowd_peer_level.get);
            if (next === undefined)
                return prev;
            if (next <= prev)
                return prev;
            if (!this.allowed_law())
                return prev;
            const time = this._clocks[$hyoo_crowd_unit_group.auth].tick(peer);
            const auth = this.peer_id();
            const level_unit = new $hyoo_crowd_unit(this.id(), auth, this.id(), peer, '0_0', '0_0', time, next, null);
            this._unit_all.set(level_id, level_unit);
            this.pub.emit();
            return next;
        }
        grabbed() {
            if (this.id() === this.peer_id())
                return true;
            this.pub.promote();
            return this._unit_all.size > 0;
        }
        peers() {
            this.pub.promote();
            const lords = [];
            for (const unit of this._unit_all.values()) {
                switch (unit.kind()) {
                    case $hyoo_crowd_unit_kind.data: continue;
                    case $hyoo_crowd_unit_kind.join: continue;
                    default: lords.push(unit.self);
                }
            }
            return lords;
        }
        residents() {
            this.pub.promote();
            const lords = [];
            for (const unit of this._unit_all.values()) {
                if (unit.data === null)
                    continue;
                if (unit.kind() !== $hyoo_crowd_unit_kind.join)
                    continue;
                lords.push(unit.self);
            }
            return lords;
        }
        authors() {
            this.pub.promote();
            const authors = new Set();
            for (const unit of this._unit_all.values()) {
                if (unit.kind() !== $hyoo_crowd_unit_kind.data)
                    continue;
                if (unit.data === null)
                    continue;
                authors.add(unit.auth);
            }
            return authors;
        }
        steal_rights(donor) {
            if (!this.allowed_law())
                return;
            for (const peer of donor.peers()) {
                this.level(peer, donor.level(peer));
            }
        }
        first_stamp() {
            this.pub.promote();
            const grab_unit = this._unit_all.get(`${this.id()}!${this.id()}`);
            return (grab_unit && $hyoo_crowd_time_stamp(grab_unit.time)) ?? null;
        }
        last_stamp() {
            this.pub.promote();
            return this.clock_data.last_stamp();
        }
        selection(peer) {
            return this.world().land_sync(peer).chief.sub('$hyoo_crowd_land..selection', $hyoo_crowd_reg);
        }
        put(head, self, prev, data) {
            this.join();
            const old_id = `${head}!${self}`;
            let unit_old = this._unit_all.get(old_id);
            let unit_prev = prev !== '0_0'
                ? this._unit_all.get(`${head}!${prev}`)
                : null;
            const unit_list = this.unit_list(head);
            if (unit_old)
                unit_list.splice(unit_list.indexOf(unit_old), 1);
            const seat = unit_prev ? unit_list.indexOf(unit_prev) + 1 : 0;
            const next = unit_list[seat]?.self ?? '0_0';
            const auth = this.peer_id();
            const time = this._clocks[$hyoo_crowd_unit_group.data].tick(auth);
            const unit_new = new $hyoo_crowd_unit(this.id(), auth, head, self, next, prev, time, data, null);
            this._unit_all.set(old_id, unit_new);
            unit_list.splice(seat, 0, unit_new);
            this._unit_alives.set(head, undefined);
            this.pub.emit();
            return unit_new;
        }
        wipe(unit) {
            if (unit.data === null)
                return unit;
            const unit_list = this.unit_list(unit.head);
            const seat = unit_list.indexOf(unit);
            const prev = seat > 0 ? unit_list[seat - 1].self : seat < 0 ? unit.prev : '0_0';
            return this.put(unit.head, unit.self, prev, null);
        }
        move(unit, head, prev) {
            const unit_list = this.unit_list(unit.head);
            const seat = unit_list.indexOf(unit);
            const next = unit_list[seat + 1];
            this.wipe(unit);
            if (next)
                this.put(next.head, next.self, unit_list[unit_list.indexOf(next) - 2]?.self ?? '0_0', next.data);
            this.put(head, unit.self, prev, unit.data);
        }
        insert(unit, head, seat) {
            const list = this.unit_list(head);
            const prev = seat ? list[seat - 1].self : '0_0';
            return this.move(unit, head, prev);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
    }
    __decorate([
        $mol_memo.method
    ], $hyoo_crowd_land.prototype, "id", null);
    $.$hyoo_crowd_land = $hyoo_crowd_land;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_fund extends $mol_object {
        world;
        node_class;
        constructor(world, node_class) {
            super();
            this.world = world;
            this.node_class = node_class;
        }
        Item(id) {
            const [land, head] = id.split('!');
            if (!head)
                return this.Item(`${land}!0_0`);
            return this.world.land_sync(land).node(head, this.node_class);
        }
        make(law = [''], mod = [], add = []) {
            const land = $mol_wire_sync(this.world).grab(law, mod, add);
            return this.Item(land.id());
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_crowd_fund.prototype, "Item", null);
    __decorate([
        $mol_action
    ], $hyoo_crowd_fund.prototype, "make", null);
    $.$hyoo_crowd_fund = $hyoo_crowd_fund;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dict_key = $mol_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_key(key));
        }
        has(key) {
            return super.has($mol_key(key));
        }
        set(key, value) {
            return super.set($mol_key(key), value);
        }
        delete(key) {
            return super.delete($mol_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        keys() {
            const iterator = super.keys();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (iteration.done)
                        return iteration;
                    iteration.value = JSON.parse(iteration.value);
                    return iteration;
                }
            };
        }
        entries() {
            const iterator = super.entries();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (iteration.done)
                        return iteration;
                    iteration.value = [JSON.parse(iteration.value[0]), iteration.value[1]];
                    return iteration;
                }
            };
        }
        [Symbol.iterator]() {
            return this.entries();
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_world extends $mol_object {
        peer;
        constructor(peer) {
            super();
            this.peer = peer;
            if (peer)
                this._knights.set(peer.id, peer);
        }
        lands_pub = new $mol_wire_pub;
        _lands = new Map();
        get lands() {
            this.lands_pub.promote();
            return this._lands;
        }
        land_init(id) { }
        land(id) {
            const exists = this._lands.get(id);
            if (exists)
                return exists;
            const land = $hyoo_crowd_land.make({
                id: $mol_const(id),
                world: $mol_const(this),
            });
            this._lands.set(id, land);
            this.lands_pub.emit();
            return land;
        }
        land_sync(id) {
            const land = this.land(id);
            this.land_init(land);
            return land;
        }
        Fund(Item) {
            return new $hyoo_crowd_fund(this, Item);
        }
        home() {
            return this.land_sync(this.peer.id);
        }
        _knights = new $mol_dict();
        _signs = new WeakMap();
        async grab(law = [''], mod = [], add = []) {
            const knight = await $hyoo_crowd_peer.generate();
            this._knights.set(knight.id, knight);
            const land_inner = this.land(knight.id);
            const land_outer = $hyoo_crowd_land.make({
                id: $mol_const(knight.id),
                peer: $mol_const(knight),
            });
            land_outer.join();
            for (const peer of law)
                land_outer.level(peer || this.peer.id, $hyoo_crowd_peer_level.law);
            for (const peer of mod)
                land_outer.level(peer || this.peer.id, $hyoo_crowd_peer_level.mod);
            for (const peer of add)
                land_outer.level(peer || this.peer.id, $hyoo_crowd_peer_level.add);
            land_inner.apply(land_outer.delta());
            return land_inner;
        }
        sign_units(units) {
            return Promise.all(units.map(async (unit) => {
                if (unit.bin)
                    return unit;
                const bin = $hyoo_crowd_unit_bin.from_unit(unit);
                let sign = this._signs.get(unit);
                if (!sign) {
                    const knight = this._knights.get(unit.auth);
                    sign = new Uint8Array(await knight.key_private.sign(bin.sens()));
                }
                bin.sign(sign);
                unit.bin = bin;
                this._signs.set(unit, sign);
                return unit;
            }));
        }
        delta_land(land, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]) {
            return this.sign_units(land.delta(clocks));
        }
        async delta_batch(land, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]) {
            const units = await this.delta_land(land, clocks);
            let size = 0;
            const bins = [];
            for (const unit of units) {
                const bin = unit.bin;
                bins.push(bin);
                size += bin.byteLength;
            }
            const batch = new Uint8Array(size);
            let offset = 0;
            for (const bin of bins) {
                batch.set(new Uint8Array(bin.buffer, bin.byteOffset, bin.byteLength), offset);
                offset += bin.byteLength;
            }
            return batch;
        }
        async *delta(clocks = new Map()) {
            for (const land of this.lands.values()) {
                const batch = await this.delta_batch(land, clocks.get(land.id()));
                if (batch.length)
                    yield batch;
            }
        }
        async merge(donor) {
            for await (const batch of donor.delta())
                await this.apply(batch);
        }
        async apply(delta) {
            const units = [];
            let bin_offset = 0;
            while (bin_offset < delta.byteLength) {
                const buf = new Int16Array(delta.buffer, delta.byteOffset + bin_offset);
                const bin = $hyoo_crowd_unit_bin.from_buffer(buf);
                units.push(bin.unit());
                bin_offset += bin.size();
            }
            const land = this.land(units[0].land);
            const report = await this.audit_delta(land, units);
            land.apply(report.allow);
            return report;
        }
        async audit_delta(land, delta) {
            const all = new Map();
            const desync = 60 * 60 * 10;
            const deadline = land.clock_data.now() + desync;
            const get_unit = (id) => {
                return all.get(id) ?? land._unit_all.get(id);
            };
            const get_level = (head, self) => {
                return get_unit(`${head}!${self}`)?.level()
                    ?? get_unit(`${head}!0_0`)?.level()
                    ?? $hyoo_crowd_peer_level.get;
            };
            const check_unit = async (unit) => {
                const bin = unit.bin;
                if (unit.time > deadline)
                    return 'Far future';
                const auth_unit = get_unit(`${unit.auth}!${unit.auth}`);
                const kind = unit.kind();
                switch (kind) {
                    case $hyoo_crowd_unit_kind.grab:
                    case $hyoo_crowd_unit_kind.join: {
                        const key_str = auth_unit?.data ?? unit.data;
                        if (typeof key_str !== 'string')
                            return 'No join key';
                        const self = $mol_int62_hash_string(key_str);
                        if (unit.self !== self)
                            return 'Alien join key';
                        const key = await $mol_crypto_auditor_public.from(key_str);
                        const sign = bin.sign();
                        const valid = await key.verify(bin.sens(), sign);
                        if (!valid)
                            return 'Wrong join sign';
                        all.set(`${unit.head}!${unit.auth}`, unit);
                        this._signs.set(unit, sign);
                        return '';
                    }
                    case $hyoo_crowd_unit_kind.give: {
                        const lord_level = get_level(land.id(), unit.auth);
                        if (lord_level < $hyoo_crowd_peer_level.law)
                            return `Level too low`;
                        const peer_level = get_level(land.id(), unit.self);
                        if (peer_level > unit.level())
                            return `Cancel unsupported`;
                        break;
                    }
                    case $hyoo_crowd_unit_kind.data: {
                        const level = get_level(land.id(), unit.auth);
                        if (level >= $hyoo_crowd_peer_level.mod)
                            break;
                        if (level === $hyoo_crowd_peer_level.add) {
                            const exists = get_unit(`${unit.head}!${unit.self}`);
                            if (!exists)
                                break;
                            if (exists.auth === unit.auth)
                                break;
                        }
                        return `Level too low`;
                    }
                }
                const key_str = auth_unit?.data;
                if (typeof key_str !== 'string')
                    return 'No auth key';
                const key = await $mol_crypto_auditor_public.from(key_str);
                const sign = bin.sign();
                const valid = await key.verify(bin.sens(), sign);
                if (!valid)
                    return 'Wrong auth sign';
                all.set(`${unit.head}!${unit.self}`, unit);
                this._signs.set(unit, sign);
                return '';
            };
            const allow = [];
            const forbid = new Map();
            const proceed_unit = async (unit) => {
                const error = await check_unit(unit);
                if (error)
                    forbid.set(unit, error);
                else
                    allow.push(unit);
            };
            const tasks = [];
            for (const unit of delta) {
                const task = proceed_unit(unit);
                tasks.push(task);
                if (unit.group() === $hyoo_crowd_unit_group.auth)
                    await task;
            }
            await Promise.all(tasks);
            return { allow, forbid };
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_crowd_world.prototype, "Fund", null);
    $.$hyoo_crowd_world = $hyoo_crowd_world;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = new $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wire_race(...tasks) {
        const results = tasks.map(task => {
            try {
                return task();
            }
            catch (error) {
                return error;
            }
        });
        const promises = results.filter(res => $mol_promise_like(res));
        if (promises.length)
            $mol_fail(Promise.race(promises));
        const error = results.find(res => res instanceof Error);
        if (error)
            $mol_fail(error);
        return results;
    }
    $.$mol_wire_race = $mol_wire_race;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$hyoo_sync_masters = [
        `sync.hyoo.ru`,
        `sync-pmzz.onrender.com`,
    ];
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_sync_yard extends $mol_object2 {
        db_unit_persisted = new WeakSet();
        log_pack(data) {
            return data;
        }
        peer(next) {
            return $mol_wire_sync($hyoo_sync_peer)(this + '.peer()', next);
        }
        world() {
            $mol_wire_solid();
            const world = new this.$.$hyoo_crowd_world(this.peer());
            world.land_init = land => this.land_init(land);
            return world;
        }
        land_init(land) {
            this.db_land_init(land);
            try {
                this.land_sync(land);
            }
            catch (error) {
                $mol_fail_log(error);
            }
            if (!land.grabbed())
                this.$.$mol_wait_timeout(10_000);
        }
        land(id) {
            return this.world().land_sync(id);
        }
        land_grab(law = [''], mod = [], add = []) {
            return $mol_wire_sync(this.world()).grab(law, mod, add);
        }
        home() {
            return this.land(this.peer().id);
        }
        land_search(query) {
            const stat = new Map();
            for (const prefix of query.match(/\p{Letter}{2,}/gu) ?? []) {
                const caps = prefix.slice(0, 1).toUpperCase() + prefix.slice(1);
                const prefs = new Set([
                    caps, ' ' + caps,
                    prefix, ' ' + prefix,
                ]);
                const lands = new Set();
                const founds = $mol_wire_race(...[...prefs].map(pref => () => $mol_wire_sync(this).db_land_search(pref)));
                for (const found of founds) {
                    for (const land of [...found].reverse())
                        lands.add(land);
                }
                for (const land of lands) {
                    stat.set(land, (stat.get(land) ?? 0) + 1);
                }
            }
            return [...stat].sort((left, right) => right[1] - left[1]).map(pair => pair[0]);
        }
        sync() {
            this.server();
            for (const land of this.world().lands.values()) {
                this.db_land_sync(land);
            }
            $mol_wire_race(...this.slaves().map(line => () => this.line_sync(line)));
            try {
                const master = this.master();
                if (master)
                    $mol_wire_race(...[...this.world().lands.values()].map(land => () => this.line_land_sync({ line: master, land })));
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        land_sync(land) {
            this.db_land_init(land);
            try {
                this.db_land_sync(land);
            }
            catch (error) {
                $mol_fail_log(error);
            }
            try {
                const master = this.master();
                if (master)
                    this.line_land_sync({ line: master, land });
            }
            catch (error) {
                $mol_fail_log(error);
            }
            try {
                $mol_wire_race(...this.slaves()
                    .filter(line => this.line_lands(line).includes(land))
                    .map(line => () => this.line_land_sync({ line, land })));
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        db_land_clocks(land, next) {
            $mol_wire_solid();
            return next;
        }
        db_land_sync(land) {
            this.db_land_init(land);
            land.clocks;
            const units = [];
            for (const unit of land._unit_all.values()) {
                if (this.db_unit_persisted.has(unit))
                    continue;
                units.push(unit);
            }
            if (!units.length)
                return;
            $mol_wire_sync(this.world()).sign_units(units);
            $mol_wire_sync(this).db_land_save(land, units);
            for (const unit of units)
                this.db_unit_persisted.add(unit);
        }
        db_land_init(land) {
            try {
                var units = $mol_wire_sync(this).db_land_load(land);
            }
            catch (error) {
                if (!(error instanceof Error))
                    $mol_fail_hidden(error);
                this.$.$mol_log3_fail({
                    place: this,
                    land: land.id(),
                    message: error.message,
                });
                units = [];
            }
            for (const unit of units)
                this.db_unit_persisted.add(unit);
            units.sort($hyoo_crowd_unit_compare);
            land.apply(units);
        }
        async db_land_load(land) {
            return [];
        }
        async db_land_search(from, to = from) {
            return new Set();
        }
        async db_land_save(land, units) { }
        master_cursor(next = 0) {
            return next;
        }
        master_list() {
            const scheme = this.$.$mol_dom_context.document.location.protocol.replace(/^http/, 'ws');
            return this.$.$hyoo_sync_masters.map(host => `${scheme}//${host}`);
        }
        master_link() {
            return this.master_list()[this.master_cursor()];
        }
        master() {
            return null;
        }
        server() {
            return null;
        }
        slaves(next = []) {
            return next;
        }
        line_lands(line, next = []) {
            return next;
        }
        line_land_clocks({ line, land }, next) {
            $mol_wire_solid();
            return next;
        }
        line_sync(line) {
            $mol_wire_race(...this.line_lands(line).map(land => () => this.line_land_sync({ line, land })));
        }
        line_land_sync({ line, land }) {
            this.line_land_init({ line, land });
            let clocks = this.line_land_clocks({ line, land });
            if (!clocks)
                return;
            const units = land.delta(clocks);
            if (!units.length)
                return;
            this.line_send_units(line, units);
            for (const unit of units) {
                clocks[unit.group()].see_peer(unit.auth, unit.time);
            }
        }
        line_land_init({ line, land }) {
            this.db_land_init(land);
            this.line_send_clocks(line, land);
        }
        line_land_neck({ line, land }, next = []) {
            return next;
        }
        async line_receive(line, message) {
            if (!message.byteLength)
                return;
            const view = new DataView(message.buffer, message.byteOffset, message.byteLength);
            const int0 = view.getInt32(0, true);
            const int1 = view.getInt32(4, true);
            const land_id = $mol_int62_to_string({
                lo: int0 << 1 >> 1,
                hi: int1 << 1 >> 1,
            });
            const handle = async (prev) => {
                if (prev)
                    await prev;
                const world = this.world();
                const land = await $mol_wire_async(world).land(land_id);
                let clocks = this.line_land_clocks({ line, land });
                if (!clocks)
                    this.line_land_clocks({ line, land }, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]);
                if (int0 << 1 >> 1 ^ int0) {
                    const bin = new $hyoo_crowd_clock_bin(message.buffer, message.byteOffset, message.byteLength);
                    for (let group = 0; group < clocks.length; ++group) {
                        clocks[group].see_bin(bin, group);
                    }
                    if (bin.count() + land.delta(clocks).length < land._unit_all.size) {
                        this.line_land_clocks({ line, land }, clocks = [new $hyoo_crowd_clock, new $hyoo_crowd_clock]);
                    }
                    const lands = this.line_lands(line);
                    if (lands.includes(land)) {
                        this.$.$mol_log3_warn({
                            place: this,
                            land: land.id(),
                            message: 'Already syncing',
                            hint: 'Bug at $hyoo_sync_yard',
                            line: $mol_key(line),
                            clocks,
                        });
                    }
                    else {
                        this.line_lands(line, [...lands, land]);
                    }
                    return;
                }
                const { allow, forbid } = await world.apply(message);
                for (const [{ bin, ...unit }, error] of forbid) {
                    this.$.$mol_log3_fail({
                        place: this,
                        land: land.id(),
                        message: error,
                        line: $mol_key(line),
                        unit,
                    });
                }
                if (!allow.length)
                    return;
                for (const unit of allow) {
                    clocks[unit.group()].see_peer(unit.auth, unit.time);
                }
                this.$.$mol_log3_rise({
                    place: this,
                    land: land.id(),
                    message: 'Sync Gain',
                    line: $mol_key(line),
                    units: this.log_pack(allow),
                });
            };
            this.line_land_neck({ line, land: land_id }, [
                handle(this.line_land_neck({ line, land: land_id })[0])
                    .catch(error => {
                    this.$.$mol_log3_fail({
                        place: this,
                        land: land_id,
                        message: String(error?.message ?? error),
                    });
                })
            ]);
        }
        line_send_clocks(line, land) { }
        async line_send_units(line, units) { }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "peer", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "world", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "land_init", null);
    __decorate([
        $mol_action
    ], $hyoo_sync_yard.prototype, "land_search", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "land_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "db_land_clocks", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "db_land_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "db_land_init", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "master_cursor", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "master_link", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_yard.prototype, "slaves", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_lands", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_clocks", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_sync", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_init", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_sync_yard.prototype, "line_land_neck", null);
    $.$hyoo_sync_yard = $hyoo_sync_yard;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_db_response(request) {
        return new Promise((done, fail) => {
            request.onerror = () => fail(new Error(request.error.message));
            request.onsuccess = () => done(request.result);
        });
    }
    $.$mol_db_response = $mol_db_response;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    async function $mol_db(name, ...migrations) {
        const request = this.$mol_dom_context.indexedDB.open(name, migrations.length ? migrations.length + 1 : undefined);
        request.onupgradeneeded = event => {
            migrations.splice(0, event.oldVersion - 1);
            const transaction = new $mol_db_transaction(request.transaction);
            for (const migrate of migrations)
                migrate(transaction);
        };
        const db = await $mol_db_response(request);
        return new $mol_db_database(db);
    }
    $.$mol_db = $mol_db;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_db_store {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get path() {
            return this.native.keyPath;
        }
        get incremental() {
            return this.native.autoIncrement;
        }
        get indexes() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.indexNames],
                has: (_, name) => this.native.indexNames.contains(name),
                get: (_, name) => new $mol_db_index(this.native.index(name))
            });
        }
        index_make(name, path = [], unique = false, multiEntry = false) {
            return this.native.createIndex(name, path, { multiEntry, unique });
        }
        index_drop(name) {
            this.native.deleteIndex(name);
            return this;
        }
        get transaction() {
            return new $mol_db_transaction(this.native.transaction);
        }
        get db() {
            return this.transaction.db;
        }
        clear() {
            return $mol_db_response(this.native.clear());
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        put(doc, key) {
            return $mol_db_response(this.native.put(doc, key));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
        drop(keys) {
            return $mol_db_response(this.native.delete(keys));
        }
    }
    $.$mol_db_store = $mol_db_store;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_db_index {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get paths() {
            return this.native.keyPath;
        }
        get unique() {
            return this.native.unique;
        }
        get multiple() {
            return this.native.multiEntry;
        }
        get store() {
            return new $mol_db_store(this.native.objectStore);
        }
        get transaction() {
            return this.store.transaction;
        }
        get db() {
            return this.store.db;
        }
        count(keys) {
            return $mol_db_response(this.native.count(keys));
        }
        get(key) {
            return $mol_db_response(this.native.get(key));
        }
        select(key, count) {
            return $mol_db_response(this.native.getAll(key, count));
        }
    }
    $.$mol_db_index = $mol_db_index;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    $mol_dom_context.indexedDB = $node['fake-indexeddb'].indexedDB;
    $mol_dom_context.IDBCursor = $node['fake-indexeddb'].IDBCursor;
    $mol_dom_context.IDBCursorWithValue = $node['fake-indexeddb'].IDBCursorWithValue;
    $mol_dom_context.IDBDatabase = $node['fake-indexeddb'].IDBDatabase;
    $mol_dom_context.IDBFactory = $node['fake-indexeddb'].IDBFactory;
    $mol_dom_context.IDBIndex = $node['fake-indexeddb'].IDBIndex;
    $mol_dom_context.IDBKeyRange = $node['fake-indexeddb'].IDBKeyRange;
    $mol_dom_context.IDBObjectStore = $node['fake-indexeddb'].IDBObjectStore;
    $mol_dom_context.IDBOpenDBRequest = $node['fake-indexeddb'].IDBOpenDBRequest;
    $mol_dom_context.IDBRequest = $node['fake-indexeddb'].IDBRequest;
    $mol_dom_context.IDBTransaction = $node['fake-indexeddb'].IDBTransaction;
    $mol_dom_context.IDBVersionChangeEvent = $node['fake-indexeddb'].IDBVersionChangeEvent;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    class $mol_db_database {
        native;
        constructor(native) {
            this.native = native;
        }
        get name() {
            return this.native.name;
        }
        get version() {
            return this.native.version;
        }
        get stores() {
            return [...this.native.objectStoreNames];
        }
        read(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readonly', { durability: 'relaxed' })).stores;
        }
        change(...names) {
            return new $mol_db_transaction(this.native.transaction(names, 'readwrite', { durability: 'relaxed' }));
        }
        kill() {
            this.native.close();
            const request = $mol_dom_context.indexedDB.deleteDatabase(this.name);
            request.onblocked = console.warn;
            return $mol_db_response(request);
        }
        destructor() {
            this.native.close();
        }
    }
    $.$mol_db_database = $mol_db_database;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_db_transaction {
        native;
        constructor(native) {
            this.native = native;
        }
        get stores() {
            return new Proxy({}, {
                ownKeys: () => [...this.native.objectStoreNames],
                has: (_, name) => this.native.objectStoreNames.contains(name),
                get: (_, name, proxy) => (name in proxy)
                    ? new $mol_db_store(this.native.objectStore(name))
                    : undefined,
            });
        }
        store_make(name) {
            return this.native.db.createObjectStore(name, { autoIncrement: true });
        }
        store_drop(name) {
            this.native.db.deleteObjectStore(name);
            return this;
        }
        abort() {
            if (this.native.error)
                return;
            this.native.abort();
        }
        commit() {
            this.native.commit?.();
            return new Promise((done, fail) => {
                this.native.onerror = () => fail(new Error(this.native.error.message));
                this.native.oncomplete = () => done();
            });
        }
        get db() {
            return new $mol_db_database(this.native.db);
        }
    }
    $.$mol_db_transaction = $mol_db_transaction;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_sync_client extends $hyoo_sync_yard {
        async db() {
            const db1 = await this.$.$mol_db('$hyoo_sync_client_db');
            await db1.kill();
            return await this.$.$mol_db('$hyoo_sync_client_db2', mig => mig.store_make('Unit'), mig => mig.stores.Unit.index_make('Land', ['land']), mig => mig.stores.Unit.index_make('Data', ['data']));
        }
        async db_land_load(land) {
            try {
                var db = await this.db();
            }
            catch (error) {
                $mol_fail_log(error);
                return [];
            }
            const Unit = db.read('Unit').Unit;
            const recs = await Unit.indexes.Land.select([land.id()]);
            if (!recs)
                return [];
            const units = recs.map(rec => new $hyoo_crowd_unit(rec.land, rec.auth, rec.head, rec.self, rec.next, rec.prev, rec.time, rec.data, new $hyoo_crowd_unit_bin(rec.bin.buffer)));
            return units;
        }
        async db_land_search(from, to = from + '\uFFFF') {
            try {
                var db = await this.db();
            }
            catch (error) {
                $mol_fail_log(error);
                return new Set();
            }
            const Unit = db.read('Unit').Unit;
            const query = IDBKeyRange.bound([from], [to]);
            const recs = await Unit.indexes.Data.select(query);
            return new Set(recs.map(rec => rec.land));
        }
        async db_land_save(land, units) {
            try {
                var db = await this.db();
            }
            catch (error) {
                $mol_fail_log(error);
                return;
            }
            const trans = db.change('Unit');
            const Unit = trans.stores.Unit;
            for (const unit of units) {
                Unit.put(unit, [unit.land, unit.head, unit.self]);
            }
            await trans.commit();
            this.$.$mol_storage.persisted(true);
        }
        reconnects(reset) {
            return ($mol_wire_probe(() => this.reconnects()) ?? 0) + 1;
        }
        master() {
            this.reconnects();
            const link = this.master_link();
            const line = new $mol_dom_context.WebSocket(link, ['$hyoo_sync_protocol_1']);
            line.binaryType = 'arraybuffer';
            line.onmessage = async (event) => {
                if (event.data instanceof ArrayBuffer) {
                    await this.line_receive(line, new Uint8Array(event.data));
                }
                else {
                    this.$.$mol_log3_fail({
                        place: this,
                        message: 'Wrong data',
                        data: event.data
                    });
                }
            };
            let interval;
            line.onclose = () => {
                clearInterval(interval);
                setTimeout(() => this.reconnects(null), 1000);
            };
            Object.assign(line, {
                destructor: () => {
                    line.onclose = () => { };
                    clearInterval(interval);
                    line.close();
                }
            });
            return new Promise((done, fail) => {
                line.onopen = () => {
                    this.$.$mol_log3_come({
                        place: this,
                        message: 'Connected to Master',
                        line: $mol_key(line),
                        server: link,
                    });
                    interval = setInterval(() => line.send(new Uint8Array), 30000);
                    done(line);
                };
                line.onerror = () => {
                    line.onclose = event => {
                        fail(new Error(`Master is unavailable (${event.code})`));
                    };
                    clearInterval(interval);
                    this.master_cursor((this.master_cursor() + 1) % this.$.$hyoo_sync_masters.length);
                };
            });
        }
        line_send_clocks(line, land) {
            if (line instanceof WebSocket) {
                line.send(land.clocks_bin);
            }
            else {
                line.postMessage(['hyoo_sync_clocks', land.id(), land._clocks]);
            }
        }
        async line_send_units(line, units) {
            if (line instanceof WebSocket) {
                await this.world().sign_units(units);
                const message = new Blob(units.map(unit => unit.bin));
                line.send(message);
            }
            else {
                line.postMessage(['hyoo_sync_units', units[0].land, units]);
            }
        }
    }
    __decorate([
        $mol_memo.method
    ], $hyoo_sync_client.prototype, "db", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_client.prototype, "reconnects", null);
    __decorate([
        $mol_mem
    ], $hyoo_sync_client.prototype, "master", null);
    $.$hyoo_sync_client = $hyoo_sync_client;
})($ || ($ = {}));

;
	($.$mol_pick) = class $mol_pick extends ($.$mol_pop) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		trigger_enabled(){
			return true;
		}
		clicks(next){
			if(next !== undefined) return next;
			return null;
		}
		trigger_content(){
			return [(this.title())];
		}
		hint(){
			return "";
		}
		Trigger(){
			const obj = new this.$.$mol_check();
			(obj.minimal_width) = () => (40);
			(obj.minimal_height) = () => (40);
			(obj.enabled) = () => ((this.trigger_enabled()));
			(obj.checked) = (next) => ((this.showed(next)));
			(obj.clicks) = (next) => ((this.clicks(next)));
			(obj.sub) = () => ((this.trigger_content()));
			(obj.hint) = () => ((this.hint()));
			return obj;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		Anchor(){
			return (this.Trigger());
		}
	};
	($mol_mem(($.$mol_pick.prototype), "keydown"));
	($mol_mem(($.$mol_pick.prototype), "clicks"));
	($mol_mem(($.$mol_pick.prototype), "Trigger"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n\tflex-grow: 1;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_dots_vertical) = class $mol_icon_dots_vertical extends ($.$mol_icon) {
		path(){
			return "M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z";
		}
	};


;
"use strict";

;
	($.$mol_select) = class $mol_select extends ($.$mol_pick) {
		event_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		option_label(id){
			return "";
		}
		filter_pattern(next){
			if(next !== undefined) return next;
			return "";
		}
		Option_label(id){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ((this.option_label(id)));
			(obj.needle) = () => ((this.filter_pattern()));
			return obj;
		}
		option_content(id){
			return [(this.Option_label(id))];
		}
		no_options_message(){
			return (this.$.$mol_locale.text("$mol_select_no_options_message"));
		}
		nav_components(){
			return [];
		}
		option_focused(next){
			if(next !== undefined) return next;
			return null;
		}
		nav_cycle(next){
			if(next !== undefined) return next;
			return true;
		}
		Nav(){
			const obj = new this.$.$mol_nav();
			(obj.keys_y) = () => ((this.nav_components()));
			(obj.current_y) = (next) => ((this.option_focused(next)));
			(obj.cycle) = (next) => ((this.nav_cycle(next)));
			return obj;
		}
		menu_content(){
			return [];
		}
		Menu(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.menu_content()));
			return obj;
		}
		Bubble_pane(){
			const obj = new this.$.$mol_scroll();
			(obj.sub) = () => ([(this.Menu())]);
			return obj;
		}
		filter_hint(){
			return (this.$.$mol_locale.text("$mol_select_filter_hint"));
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		enabled(){
			return true;
		}
		dictionary(next){
			if(next !== undefined) return next;
			return {};
		}
		options(){
			return [];
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		option_label_default(){
			return "";
		}
		Option_row(id){
			const obj = new this.$.$mol_button_minor();
			(obj.event_click) = (next) => ((this.event_select(id, next)));
			(obj.sub) = () => ((this.option_content(id)));
			return obj;
		}
		No_options(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.no_options_message())]);
			return obj;
		}
		plugins(){
			return [...(super.plugins()), (this.Nav())];
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_select_hint"));
		}
		bubble_content(){
			return [(this.Filter()), (this.Bubble_pane())];
		}
		Filter(){
			const obj = new this.$.$mol_search();
			(obj.query) = (next) => ((this.filter_pattern(next)));
			(obj.hint) = () => ((this.filter_hint()));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.enabled) = () => ((this.enabled()));
			return obj;
		}
		Trigger_icon(){
			const obj = new this.$.$mol_icon_dots_vertical();
			return obj;
		}
	};
	($mol_mem_key(($.$mol_select.prototype), "event_select"));
	($mol_mem(($.$mol_select.prototype), "filter_pattern"));
	($mol_mem_key(($.$mol_select.prototype), "Option_label"));
	($mol_mem(($.$mol_select.prototype), "option_focused"));
	($mol_mem(($.$mol_select.prototype), "nav_cycle"));
	($mol_mem(($.$mol_select.prototype), "Nav"));
	($mol_mem(($.$mol_select.prototype), "Menu"));
	($mol_mem(($.$mol_select.prototype), "Bubble_pane"));
	($mol_mem(($.$mol_select.prototype), "submit"));
	($mol_mem(($.$mol_select.prototype), "dictionary"));
	($mol_mem(($.$mol_select.prototype), "value"));
	($mol_mem_key(($.$mol_select.prototype), "Option_row"));
	($mol_mem(($.$mol_select.prototype), "No_options"));
	($mol_mem(($.$mol_select.prototype), "Filter"));
	($mol_mem(($.$mol_select.prototype), "Trigger_icon"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    this.Trigger_icon(),
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));

;
	($.$mol_avatar) = class $mol_avatar extends ($.$mol_icon) {
		view_box(){
			return "0 0 24 24";
		}
		id(){
			return "";
		}
		path(){
			return "M 12 12 l 0 0 M 0 0 l 0 0 M 24 24 l 0 0 M 0 24 l 0 0 M 24 0 l 0 0";
		}
	};


;
"use strict";
var $;
(function ($) {
    function $mol_hash_string(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed;
        let h2 = 0x41c6ce57 ^ seed;
        for (let i = 0; i < str.length; i++) {
            const ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (((1 << 16) - 1) & h2) + (h1 >>> 0);
    }
    $.$mol_hash_string = $mol_hash_string;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_avatar extends $.$mol_avatar {
            path() {
                const id = $mol_hash_string(this.id());
                const p = 2.1;
                const m = 2.7;
                let path = '';
                for (let x = 0; x < 4; ++x) {
                    for (let y = 0; y < 8; ++y) {
                        if ((id >> (x + y * 7)) & 1) {
                            const mxp = Math.ceil(m * x + p);
                            const myp = Math.ceil(m * y + p);
                            path += `M ${mxp} ${myp} l 0 0 ` + `M ${24 - mxp} ${myp} l 0 0 `;
                        }
                    }
                }
                return path;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_avatar.prototype, "path", null);
        $$.$mol_avatar = $mol_avatar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/avatar/avatar.view.css", "[mol_avatar] {\n\tstroke-linecap: round;\n\tstroke-width: 3.5px;\n\tfill: none;\n\tstroke: currentColor;\n\t/* width: 1.5rem;\n\theight: 1.5rem;\n\tmargin: 0 -.25rem; */\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_sync) = class $mol_icon_sync extends ($.$mol_icon) {
		path(){
			return "M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_sync_off) = class $mol_icon_sync_off extends ($.$mol_icon) {
		path(){
			return "M20,4H14V10L16.24,7.76C17.32,8.85 18,10.34 18,12C18,13 17.75,13.94 17.32,14.77L18.78,16.23C19.55,15 20,13.56 20,12C20,9.79 19.09,7.8 17.64,6.36L20,4M2.86,5.41L5.22,7.77C4.45,9 4,10.44 4,12C4,14.21 4.91,16.2 6.36,17.64L4,20H10V14L7.76,16.24C6.68,15.15 6,13.66 6,12C6,11 6.25,10.06 6.68,9.23L14.76,17.31C14.5,17.44 14.26,17.56 14,17.65V19.74C14.79,19.53 15.54,19.2 16.22,18.78L18.58,21.14L19.85,19.87L4.14,4.14L2.86,5.41M10,6.35V4.26C9.2,4.47 8.45,4.8 7.77,5.22L9.23,6.68C9.5,6.56 9.73,6.44 10,6.35Z";
		}
	};


;
"use strict";

;
	($.$hyoo_sync_online) = class $hyoo_sync_online extends ($.$mol_select) {
		dictionary(){
			return (this.yard().master_list());
		}
		master_cursor(next){
			return (this.yard().master_cursor(next));
		}
		master_id(id){
			return "";
		}
		Option_logo(id){
			const obj = new this.$.$mol_avatar();
			(obj.id) = () => ((this.master_id(id)));
			return obj;
		}
		master_link(){
			return "";
		}
		Well(){
			const obj = new this.$.$mol_avatar();
			(obj.id) = () => ((this.master_link()));
			return obj;
		}
		Fail(){
			const obj = new this.$.$mol_icon_sync_off();
			return obj;
		}
		link_content(){
			return [(this.Well()), (this.Fail())];
		}
		hint(){
			return "$hyoo_sync";
		}
		message(){
			return (this.hint());
		}
		Link(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.master_link()));
			(obj.sub) = () => ((this.link_content()));
			(obj.hint) = () => ((this.message()));
			return obj;
		}
		minimal_width(){
			return 40;
		}
		minimal_height(){
			return 40;
		}
		yard(){
			const obj = new this.$.$hyoo_sync_yard();
			return obj;
		}
		Filter(){
			return null;
		}
		option_content(id){
			return [(this.Option_logo(id)), (this.option_label(id))];
		}
		trigger_content(){
			return [(this.Link())];
		}
	};
	($mol_mem_key(($.$hyoo_sync_online.prototype), "Option_logo"));
	($mol_mem(($.$hyoo_sync_online.prototype), "Well"));
	($mol_mem(($.$hyoo_sync_online.prototype), "Fail"));
	($mol_mem(($.$hyoo_sync_online.prototype), "Link"));
	($mol_mem(($.$hyoo_sync_online.prototype), "yard"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_sync_online extends $.$hyoo_sync_online {
            message() {
                try {
                    this.yard().sync();
                    return this.hint();
                }
                catch (error) {
                    if (error instanceof Promise)
                        $mol_fail_hidden(error);
                    $mol_fail_log(error);
                    return String(error);
                }
            }
            link_content() {
                try {
                    this.yard().sync();
                    return [this.Well()];
                }
                catch (error) {
                    if (error instanceof Promise)
                        $mol_fail_hidden(error);
                    $mol_fail_log(error);
                    return [this.Fail()];
                }
            }
            hint() {
                return super.hint() + ' ' + $hyoo_sync_revision;
            }
            master_link() {
                return this.yard().master_link().replace(/^ws(s?):/, 'http$1:');
            }
            master_id(index) {
                return this.dictionary()[index].replace(/^ws(s?):/, 'http$1:');
            }
            option_label(index) {
                return this.dictionary()[index].replace(/^ws(s?):\/\//, '');
            }
            value(next) {
                return String(this.master_cursor(next == undefined ? undefined : Number(next)));
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "message", null);
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "link_content", null);
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "hint", null);
        __decorate([
            $mol_mem
        ], $hyoo_sync_online.prototype, "master_link", null);
        $$.$hyoo_sync_online = $hyoo_sync_online;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("hyoo/sync/online/online.view.css", "[hyoo_sync_online_option_row] {\n\tpadding: var(--mol_gap_text);\n}\n\n[hyoo_sync_online_well] {\n\tcolor: var(--mol_theme_current);\n}\n\n[hyoo_sync_online_fail] {\n\tcolor: var(--mol_theme_focus);\n}\n\n[hyoo_sync_online][mol_view_error=\"Promise\"] {\n\tanimation: hyoo_sync_online_wait 1s linear infinite;\n}\n\n@keyframes hyoo_sync_online_wait {\n\tfrom {\n\t\topacity: 1;\n\t}\n\tto {\n\t\topacity: .5;\n\t}\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_script) = class $mol_icon_script extends ($.$mol_icon) {
		path(){
			return "M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2H8C6.3,2 5,3.3 5,5V16H16V17C16,17.6 16.4,18 17,18H18V5C18,4.4 18.4,4 19,4C19.6,4 20,4.4 20,5V6H22V5C22,3.3 20.7,2 19,2Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_script_text) = class $mol_icon_script_text extends ($.$mol_icon) {
		path(){
			return "M17.8,20C17.4,21.2 16.3,22 15,22H5C3.3,22 2,20.7 2,19V18H5L14.2,18C14.6,19.2 15.7,20 17,20H17.8M19,2C20.7,2 22,3.3 22,5V6H20V5C20,4.4 19.6,4 19,4C18.4,4 18,4.4 18,5V18H17C16.4,18 16,17.6 16,17V16H5V5C5,3.3 6.3,2 8,2H19M8,6V8H15V6H8M8,10V12H14V10H8Z";
		}
	};


;
"use strict";

;
	($.$mol_link_source) = class $mol_link_source extends ($.$mol_link) {
		Icon(){
			const obj = new this.$.$mol_icon_script_text();
			return obj;
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_link_source_hint"));
		}
		sub(){
			return [(this.Icon())];
		}
	};
	($mol_mem(($.$mol_link_source.prototype), "Icon"));


;
"use strict";

;
	($.$mol_icon_face) = class $mol_icon_face extends ($.$mol_icon) {
		path(){
			return "M9,11.75C8.31,11.75 7.75,12.31 7.75,13C7.75,13.69 8.31,14.25 9,14.25C9.69,14.25 10.25,13.69 10.25,13C10.25,12.31 9.69,11.75 9,11.75M15,11.75C14.31,11.75 13.75,12.31 13.75,13C13.75,13.69 14.31,14.25 15,14.25C15.69,14.25 16.25,13.69 16.25,13C16.25,12.31 15.69,11.75 15,11.75M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_face_agent) = class $mol_icon_face_agent extends ($.$mol_icon) {
		path(){
			return "M18.72,14.76C19.07,13.91 19.26,13 19.26,12C19.26,11.28 19.15,10.59 18.96,9.95C18.31,10.1 17.63,10.18 16.92,10.18C13.86,10.18 11.15,8.67 9.5,6.34C8.61,8.5 6.91,10.26 4.77,11.22C4.73,11.47 4.73,11.74 4.73,12A7.27,7.27 0 0,0 12,19.27C13.05,19.27 14.06,19.04 14.97,18.63C15.54,19.72 15.8,20.26 15.78,20.26C14.14,20.81 12.87,21.08 12,21.08C9.58,21.08 7.27,20.13 5.57,18.42C4.53,17.38 3.76,16.11 3.33,14.73H2V10.18H3.09C3.93,6.04 7.6,2.92 12,2.92C14.4,2.92 16.71,3.87 18.42,5.58C19.69,6.84 20.54,8.45 20.89,10.18H22V14.67H22V14.69L22,14.73H21.94L18.38,18L13.08,17.4V15.73H17.91L18.72,14.76M9.27,11.77C9.57,11.77 9.86,11.89 10.07,12.11C10.28,12.32 10.4,12.61 10.4,12.91C10.4,13.21 10.28,13.5 10.07,13.71C9.86,13.92 9.57,14.04 9.27,14.04C8.64,14.04 8.13,13.54 8.13,12.91C8.13,12.28 8.64,11.77 9.27,11.77M14.72,11.77C15.35,11.77 15.85,12.28 15.85,12.91C15.85,13.54 15.35,14.04 14.72,14.04C14.09,14.04 13.58,13.54 13.58,12.91A1.14,1.14 0 0,1 14.72,11.77Z";
		}
	};


;
"use strict";

;
	($.$mol_image) = class $mol_image extends ($.$mol_view) {
		uri(){
			return "";
		}
		loading(){
			return "eager";
		}
		decoding(){
			return "async";
		}
		cors(){
			return null;
		}
		natural_width(){
			return 0;
		}
		natural_height(){
			return 0;
		}
		load(next){
			if(next !== undefined) return next;
			return null;
		}
		dom_name(){
			return "img";
		}
		field(){
			return {
				...(super.field()), 
				"src": (this.uri()), 
				"alt": (this.title()), 
				"loading": (this.loading()), 
				"decoding": (this.decoding()), 
				"crossOrigin": (this.cors())
			};
		}
		attr(){
			return {
				...(super.attr()), 
				"width": (this.natural_width()), 
				"height": (this.natural_height())
			};
		}
		event(){
			return {"load": (next) => (this.load(next))};
		}
		minimal_width(){
			return 16;
		}
		minimal_height(){
			return 16;
		}
	};
	($mol_mem(($.$mol_image.prototype), "load"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_image extends $.$mol_image {
            natural_width(next) {
                const dom = this.dom_node();
                if (dom.naturalWidth)
                    return dom.naturalWidth;
                const found = this.uri().match(/\bwidth=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            natural_height(next) {
                const dom = this.dom_node();
                if (dom.naturalHeight)
                    return dom.naturalHeight;
                const found = this.uri().match(/\bheight=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            load() {
                this.natural_width(null);
                this.natural_height(null);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_width", null);
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_height", null);
        $$.$mol_image = $mol_image;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n\theight: fit-content;\n}\n");
})($ || ($ = {}));

;
	($.$mol_link_iconed) = class $mol_link_iconed extends ($.$mol_link) {
		icon(){
			return "";
		}
		Icon(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.icon()));
			(obj.title) = () => ("");
			return obj;
		}
		title(){
			return (this.uri());
		}
		sub(){
			return [(this.Icon())];
		}
		content(){
			return [(this.title())];
		}
		host(){
			return "";
		}
	};
	($mol_mem(($.$mol_link_iconed.prototype), "Icon"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link_iconed extends $.$mol_link_iconed {
            icon() {
                return `https://favicon.yandex.net/favicon/${this.host()}?color=0,0,0,0&size=32&stub=1`;
            }
            host() {
                const base = this.$.$mol_state_arg.href();
                const url = new URL(this.uri(), base);
                return url.hostname;
            }
            title() {
                const uri = this.uri();
                const host = this.host();
                const suffix = (host ? uri.split(this.host(), 2)[1] : uri)?.replace(/^[\/\?#!]+/, '');
                return decodeURIComponent(suffix || host).replace(/^\//, ' ');
            }
            sub() {
                return [
                    ...this.host() ? [this.Icon()] : [],
                    ...this.content() ? [' ', ...this.content()] : [],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "icon", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "host", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $mol_link_iconed.prototype, "sub", null);
        $$.$mol_link_iconed = $mol_link_iconed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/link/iconed/iconed.view.css", "[mol_link_iconed] {\n\talign-items: baseline;\n\tdisplay: inline-flex;\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_link_iconed_icon] {\n\tbox-shadow: none;\n\theight: 1.5em;\n\twidth: 1em;\n\tflex: 0 0 auto;\n\tdisplay: inline-block;\n\talign-self: normal;\n\tvertical-align: top;\n\tborder-radius: 0;\n\tobject-fit: scale-down;\n\topacity: .75;\n}\n\n[mol_theme=\"$mol_theme_dark\"] [mol_link_iconed_icon] {\n\tfilter: var(--mol_theme_image);\n}\n");
})($ || ($ = {}));

;
	($.$mol_stack) = class $mol_stack extends ($.$mol_view) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/stack/stack.view.css", "[mol_stack] {\n\tdisplay: grid;\n\t/* width: max-content; */\n\t/* height: max-content; */\n\talign-items: flex-start;\n\tjustify-items: flex-start;\n}\n\n[mol_stack] > * {\n\tgrid-area: 1/1;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_text_code_token) = class $mol_text_code_token extends ($.$mol_dimmer) {
		type(){
			return "";
		}
		attr(){
			return {...(super.attr()), "mol_text_code_token_type": (this.type())};
		}
	};
	($.$mol_text_code_token_link) = class $mol_text_code_token_link extends ($.$mol_text_code_token) {
		uri(){
			return "";
		}
		dom_name(){
			return "a";
		}
		type(){
			return "code-link";
		}
		attr(){
			return {
				...(super.attr()), 
				"href": (this.uri()), 
				"target": "_blank"
			};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { hsla } = $mol_style_func;
        $mol_style_define($mol_text_code_token, {
            display: 'inline',
            textDecoration: 'none',
            '@': {
                mol_text_code_token_type: {
                    'code-keyword': {
                        color: hsla(0, 70, 60, 1),
                    },
                    'code-field': {
                        color: hsla(300, 70, 50, 1),
                    },
                    'code-tag': {
                        color: hsla(330, 70, 50, 1),
                    },
                    'code-global': {
                        color: hsla(30, 80, 50, 1),
                    },
                    'code-decorator': {
                        color: hsla(180, 40, 50, 1),
                    },
                    'code-punctuation': {
                        color: hsla(0, 0, 50, 1),
                    },
                    'code-string': {
                        color: hsla(90, 40, 50, 1),
                    },
                    'code-number': {
                        color: hsla(55, 65, 45, 1),
                    },
                    'code-call': {
                        color: hsla(270, 60, 50, 1),
                    },
                    'code-link': {
                        color: hsla(210, 60, 50, 1),
                    },
                    'code-comment-inline': {
                        opacity: .5,
                    },
                    'code-comment-block': {
                        opacity: .5,
                    },
                    'code-docs': {
                        opacity: .75,
                    },
                },
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_text_code_line) = class $mol_text_code_line extends ($.$mol_paragraph) {
		numb(){
			return 0;
		}
		token_type(id){
			return "";
		}
		token_text(id){
			return "";
		}
		highlight(){
			return "";
		}
		token_uri(id){
			return "";
		}
		text(){
			return "";
		}
		minimal_height(){
			return 24;
		}
		numb_showed(){
			return true;
		}
		syntax(){
			return null;
		}
		uri_resolve(id){
			return "";
		}
		Numb(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.numb())]);
			return obj;
		}
		Token(id){
			const obj = new this.$.$mol_text_code_token();
			(obj.type) = () => ((this.token_type(id)));
			(obj.haystack) = () => ((this.token_text(id)));
			(obj.needle) = () => ((this.highlight()));
			return obj;
		}
		Token_link(id){
			const obj = new this.$.$mol_text_code_token_link();
			(obj.haystack) = () => ((this.token_text(id)));
			(obj.needle) = () => ((this.highlight()));
			(obj.uri) = () => ((this.token_uri(id)));
			return obj;
		}
		find_pos(id){
			return null;
		}
	};
	($mol_mem(($.$mol_text_code_line.prototype), "Numb"));
	($mol_mem_key(($.$mol_text_code_line.prototype), "Token"));
	($mol_mem_key(($.$mol_text_code_line.prototype), "Token_link"));


;
"use strict";
var $;
(function ($) {
    class $mol_syntax2 {
        lexems;
        constructor(lexems) {
            this.lexems = lexems;
            for (let name in lexems) {
                this.rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            const parts = '(' + this.rules.map(rule => rule.regExp.source).join(')|(') + ')';
            this.regexp = RegExp(`([\\s\\S]*?)(?:(${parts})|$(?![^]))`, 'gmu');
        }
        rules = [];
        regexp;
        tokenize(text, handle) {
            let end = 0;
            lexing: while (end < text.length) {
                const start = end;
                this.regexp.lastIndex = start;
                var found = this.regexp.exec(text);
                end = this.regexp.lastIndex;
                if (start === end)
                    throw new Error('Empty token');
                var prefix = found[1];
                if (prefix)
                    handle('', prefix, [prefix], start);
                var suffix = found[2];
                if (!suffix)
                    continue;
                let offset = 4;
                for (let rule of this.rules) {
                    if (found[offset - 1]) {
                        handle(rule.name, suffix, found.slice(offset, offset + rule.size), start + prefix.length);
                        continue lexing;
                    }
                    offset += rule.size + 1;
                }
                $mol_fail(new Error('$mol_syntax2 is broken'));
            }
        }
        parse(text, handlers) {
            this.tokenize(text, (name, ...args) => handlers[name](...args));
        }
    }
    $.$mol_syntax2 = $mol_syntax2;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_syntax2_md_flow = new $mol_syntax2({
        'quote': /^((?:(?:[>"] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'spoiler': /^((?:(?:[\?] )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^([#=]+)(\s+)(.*?)$([\n\r]*)/,
        'list': /^((?:(?: ?([*+-])|(?:\d+[\.\)])+) +(?:[^]*?)$(?:\r?\n?)(?:  (?:[^]*?)$(?:\r?\n?))*)+)((?:\r?\n)*)/,
        'code': /^(```\s*)([\w.-]*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?: |\t)(?:[^]*?)$\r?\n?)+)([\n\r]*)/,
        'table': /((?:^\|.+?$\r?\n?)+)([\n\r]*)/,
        'grid': /((?:^ *! .*?$\r?\n?)+)([\n\r]*)/,
        'cut': /^--+$((?:\r?\n)*)/,
        'block': /^(.*?)$((?:\r?\n)*)/,
    });
    $.$mol_syntax2_md_line = new $mol_syntax2({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*|\/\/(?!\s)(.+?)\/\//,
        'code': /```(.+?)```|;;(.+?);;|`(.+?)`/,
        'insert': /\+\+(.+?)\+\+/,
        'delete': /~~(.+?)~~|--(.+?)--/,
        'embed': /""(?:(.*?)\\)?(.*?)""/,
        'link': /\\\\(?:(.*?)\\)?(.*?)\\\\/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
        'text-link': /\[(.*?(?:\[[^\[\]]*?\][^\[\]]*?)*)\]\((.*?)\)/,
        'text-link-http': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
    });
    $.$mol_syntax2_md_code = new $mol_syntax2({
        'code-indent': /\t+/,
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /(?:\w+:\/\/|#)\S+?(?=\s|\\\\|""|$)/,
        'code-comment-inline': /\/\/.*?(?:$|\/\/)|- \\(?!\\).*|#!? .*/,
        'code-string': /(?:".*?"|'.*?'|`.*?`| ?\\\\.+?\\\\|\/.+?\/[dygimsu]*(?!\p{Letter})|[ \t]*\\[^\n]*)/u,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+ *(?=\()/,
        'code-sexpr': /\((\w+ )/,
        'code-field': /(?:(?:\.|::|->)\w+|[\w-]+\??\s*:(?!\/\/|:))/,
        'code-keyword': /\b(throw|readonly|unknown|keyof|typeof|never|from|class|struct|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|val|let|const|for|do|while|until|in|out|of|new|if|then|else|switch|case|this|return|async|await|yield|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void|int|float|ref)\b/,
        'code-global': /[$]+\w*|\b[A-Z][a-z0-9]+[A-Z]\w*/,
        'code-word': /\w+/,
        'code-decorator': /@.+/,
        'code-tag': /<\/?[\w-]+\/?>?|&\w+;/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>~!\?@#%&\*_\+\\\/\|;:\.,\^]+?/,
    });
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code_line extends $.$mol_text_code_line {
            maximal_width() {
                return this.text().length * this.letter_width();
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            tokens(path) {
                const tokens = [];
                const text = (path.length > 0)
                    ? this.tokens(path.slice(0, path.length - 1))[path[path.length - 1]].found.slice(1, -1)
                    : this.text();
                this.syntax().tokenize(text, (name, found, chunks) => {
                    if (name === 'code-sexpr') {
                        tokens.push({ name: 'code-punctuation', found: '(', chunks: [] });
                        tokens.push({ name: 'code-call', found: chunks[0], chunks: [] });
                    }
                    else {
                        tokens.push({ name, found, chunks });
                    }
                });
                return tokens;
            }
            sub() {
                return [
                    ...this.numb_showed() ? [this.Numb()] : [],
                    ...this.row_content([])
                ];
            }
            row_content(path) {
                return this.tokens(path).map((t, i) => this.Token([...path, i]));
            }
            Token(path) {
                return this.token_type(path) === 'code-link' ? this.Token_link(path) : super.Token(path);
            }
            token_type(path) {
                return this.tokens([...path.slice(0, path.length - 1)])[path[path.length - 1]].name;
            }
            token_content(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                switch (token.name) {
                    case 'code-string': return [
                        token.found[0],
                        ...this.row_content(path),
                        token.found[token.found.length - 1],
                    ];
                    default: return [token.found];
                }
            }
            token_text(path) {
                const tokens = this.tokens([...path.slice(0, path.length - 1)]);
                const token = tokens[path[path.length - 1]];
                return token.found;
            }
            token_uri(path) {
                const uri = this.token_text(path);
                return this.uri_resolve(uri);
            }
            *view_find(check, path = []) {
                if (check(this, this.text())) {
                    yield [...path, this];
                }
            }
            find_pos(offset) {
                return this.find_token_pos([offset]);
            }
            find_token_pos([offset, ...path]) {
                for (const [index, token] of this.tokens(path).entries()) {
                    if (token.found.length >= offset) {
                        const token = this.Token([...path, index]);
                        return { token, offset };
                    }
                    else {
                        offset -= token.found.length;
                    }
                }
                return null;
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "row_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "token_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "find_pos", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code_line.prototype, "find_token_pos", null);
        $$.$mol_text_code_line = $mol_text_code_line;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_text_code_line, {
            display: 'block',
            position: 'relative',
            font: {
                family: 'monospace',
            },
            Numb: {
                textAlign: 'right',
                color: $mol_theme.shade,
                width: rem(3),
                margin: {
                    left: rem(-4),
                },
                display: 'inline-block',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                position: 'absolute',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_blob = ($node.buffer?.Blob ?? $mol_dom_context.Blob);
})($ || ($ = {}));

;
	($.$mol_icon_clipboard) = class $mol_icon_clipboard extends ($.$mol_icon) {
		path(){
			return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3";
		}
	};


;
"use strict";

;
	($.$mol_icon_clipboard_outline) = class $mol_icon_clipboard_outline extends ($.$mol_icon) {
		path(){
			return "M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7Z";
		}
	};


;
"use strict";

;
	($.$mol_button_copy) = class $mol_button_copy extends ($.$mol_button_minor) {
		text(){
			return (this.title());
		}
		text_blob(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_blob([(this.text())], {"type": "text/plain"});
			return obj;
		}
		html(){
			return "";
		}
		html_blob(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_blob([(this.html())], {"type": "text/html"});
			return obj;
		}
		Icon(){
			const obj = new this.$.$mol_icon_clipboard_outline();
			return obj;
		}
		title(){
			return "";
		}
		blobs(){
			return [(this.text_blob()), (this.html_blob())];
		}
		data(){
			return {};
		}
		sub(){
			return [(this.Icon()), (this.title())];
		}
	};
	($mol_mem(($.$mol_button_copy.prototype), "text_blob"));
	($mol_mem(($.$mol_button_copy.prototype), "html_blob"));
	($mol_mem(($.$mol_button_copy.prototype), "Icon"));


;
"use strict";
var $;
(function ($) {
    const mapping = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    function $mol_html_encode(text) {
        return text.replace(/[&<">]/gi, str => mapping[str]);
    }
    $.$mol_html_encode = $mol_html_encode;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_copy extends $.$mol_button_copy {
            data() {
                return Object.fromEntries(this.blobs().map(blob => [blob.type, blob]));
            }
            html() {
                return $mol_html_encode(this.text());
            }
            attachments() {
                return [new ClipboardItem(this.data())];
            }
            click(event) {
                const cb = $mol_wire_sync(this.$.$mol_dom_context.navigator.clipboard);
                cb.writeText?.(this.text());
                cb.write?.(this.attachments());
                if (cb.writeText === undefined && cb.write === undefined) {
                    throw new Error("doesn't support copy to clipoard");
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "html", null);
        __decorate([
            $mol_mem
        ], $mol_button_copy.prototype, "attachments", null);
        $$.$mol_button_copy = $mol_button_copy;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_text_code) = class $mol_text_code extends ($.$mol_stack) {
		sidebar_showed(){
			return false;
		}
		render_visible_only(){
			return false;
		}
		row_numb(id){
			return 0;
		}
		row_text(id){
			return "";
		}
		syntax(){
			return null;
		}
		uri_resolve(id){
			return "";
		}
		highlight(){
			return "";
		}
		Row(id){
			const obj = new this.$.$mol_text_code_line();
			(obj.numb_showed) = () => ((this.sidebar_showed()));
			(obj.numb) = () => ((this.row_numb(id)));
			(obj.text) = () => ((this.row_text(id)));
			(obj.syntax) = () => ((this.syntax()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.highlight) = () => ((this.highlight()));
			return obj;
		}
		rows(){
			return [(this.Row("0"))];
		}
		Rows(){
			const obj = new this.$.$mol_list();
			(obj.render_visible_only) = () => ((this.render_visible_only()));
			(obj.rows) = () => ((this.rows()));
			return obj;
		}
		text_export(){
			return "";
		}
		Copy(){
			const obj = new this.$.$mol_button_copy();
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_text_code_Copy_hint")));
			(obj.text) = () => ((this.text_export()));
			return obj;
		}
		attr(){
			return {...(super.attr()), "mol_text_code_sidebar_showed": (this.sidebar_showed())};
		}
		text(){
			return "";
		}
		text_lines(){
			return [];
		}
		find_pos(id){
			return null;
		}
		uri_base(){
			return "";
		}
		sub(){
			return [(this.Rows()), (this.Copy())];
		}
	};
	($mol_mem_key(($.$mol_text_code.prototype), "Row"));
	($mol_mem(($.$mol_text_code.prototype), "Rows"));
	($mol_mem(($.$mol_text_code.prototype), "Copy"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text_code extends $.$mol_text_code {
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            text_lines() {
                return (this.text() ?? '').split('\n');
            }
            rows() {
                return this.text_lines().map((_, index) => this.Row(index + 1));
            }
            row_text(index) {
                return this.text_lines()[index - 1];
            }
            row_numb(index) {
                return index;
            }
            find_pos(offset) {
                for (const [index, line] of this.text_lines().entries()) {
                    if (line.length >= offset) {
                        return this.Row(index + 1).find_pos(offset);
                    }
                    else {
                        offset -= line.length + 1;
                    }
                }
                return null;
            }
            sub() {
                return [
                    this.Rows(),
                    ...this.sidebar_showed() ? [this.Copy()] : []
                ];
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                try {
                    const url = new URL(uri, this.uri_base());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            text_export() {
                return this.text() + '\n';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "text_lines", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "row_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "find_pos", null);
        __decorate([
            $mol_mem
        ], $mol_text_code.prototype, "sub", null);
        __decorate([
            $mol_mem_key
        ], $mol_text_code.prototype, "uri_resolve", null);
        $$.$mol_text_code = $mol_text_code;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($mol_text_code, {
            whiteSpace: 'pre-wrap',
            font: {
                family: 'monospace',
            },
            Rows: {
                padding: $mol_gap.text,
            },
            Row: {
                font: {
                    family: 'inherit',
                },
            },
            Copy: {
                alignSelf: 'flex-start',
                justifySelf: 'flex-start',
            },
            '@': {
                'mol_text_code_sidebar_showed': {
                    true: {
                        $mol_text_code_line: {
                            margin: {
                                left: rem(1.75),
                            },
                        },
                    },
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_float) = class $mol_float extends ($.$mol_view) {
		style(){
			return {...(super.style()), "minHeight": "auto"};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: var(--mol_layer_float);\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n\tbackground: linear-gradient( var(--mol_theme_card), var(--mol_theme_card) ), var(--mol_theme_back);\n\tbox-shadow: 0 0 .5rem hsla(0,0%,0%,.25);\n}\n\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_chevron) = class $mol_icon_chevron extends ($.$mol_icon) {
		path(){
			return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
		}
	};


;
"use strict";

;
	($.$mol_check_expand) = class $mol_check_expand extends ($.$mol_check) {
		level_style(){
			return "0px";
		}
		expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		expandable(){
			return false;
		}
		Icon(){
			const obj = new this.$.$mol_icon_chevron();
			return obj;
		}
		level(){
			return 0;
		}
		style(){
			return {...(super.style()), "paddingLeft": (this.level_style())};
		}
		checked(next){
			return (this.expanded(next));
		}
		enabled(){
			return (this.expandable());
		}
	};
	($mol_mem(($.$mol_check_expand.prototype), "expanded"));
	($mol_mem(($.$mol_check_expand.prototype), "Icon"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n\tmin-width: 20px;\n}\n\n:where([mol_check_expand][disabled]) [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin-left: -0.375rem;\n}\n[mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n:where([mol_check_checked]) [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));

;
	($.$mol_grid) = class $mol_grid extends ($.$mol_view) {
		rows(){
			return [];
		}
		Table(){
			const obj = new this.$.$mol_grid_table();
			(obj.sub) = () => ((this.rows()));
			return obj;
		}
		head_cells(){
			return [];
		}
		cells(id){
			return [];
		}
		cell_content(id){
			return [];
		}
		cell_content_text(id){
			return (this.cell_content(id));
		}
		cell_content_number(id){
			return (this.cell_content(id));
		}
		col_head_content(id){
			return [];
		}
		cell_level(id){
			return 0;
		}
		cell_expanded(id, next){
			if(next !== undefined) return next;
			return false;
		}
		needle(){
			return "";
		}
		cell_value(id){
			return "";
		}
		Cell_dimmer(id){
			const obj = new this.$.$mol_dimmer();
			(obj.needle) = () => ((this.needle()));
			(obj.haystack) = () => ((this.cell_value(id)));
			return obj;
		}
		row_height(){
			return 32;
		}
		row_ids(){
			return [];
		}
		row_id(id){
			return null;
		}
		col_ids(){
			return [];
		}
		records(){
			return {};
		}
		record(id){
			return null;
		}
		hierarchy(){
			return null;
		}
		hierarchy_col(){
			return "";
		}
		minimal_width(){
			return 0;
		}
		sub(){
			return [(this.Head()), (this.Table())];
		}
		Head(){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.head_cells()));
			return obj;
		}
		Row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.minimal_height) = () => ((this.row_height()));
			(obj.minimal_width) = () => ((this.minimal_width()));
			(obj.cells) = () => ((this.cells(id)));
			return obj;
		}
		Cell(id){
			const obj = new this.$.$mol_view();
			return obj;
		}
		cell(id){
			return null;
		}
		Cell_text(id){
			const obj = new this.$.$mol_grid_cell();
			(obj.sub) = () => ((this.cell_content_text(id)));
			return obj;
		}
		Cell_number(id){
			const obj = new this.$.$mol_grid_number();
			(obj.sub) = () => ((this.cell_content_number(id)));
			return obj;
		}
		Col_head(id){
			const obj = new this.$.$mol_float();
			(obj.dom_name) = () => ("th");
			(obj.sub) = () => ((this.col_head_content(id)));
			return obj;
		}
		Cell_branch(id){
			const obj = new this.$.$mol_check_expand();
			(obj.level) = () => ((this.cell_level(id)));
			(obj.label) = () => ((this.cell_content(id)));
			(obj.expanded) = (next) => ((this.cell_expanded(id, next)));
			return obj;
		}
		Cell_content(id){
			return [(this.Cell_dimmer(id))];
		}
	};
	($mol_mem(($.$mol_grid.prototype), "Table"));
	($mol_mem_key(($.$mol_grid.prototype), "cell_expanded"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_dimmer"));
	($mol_mem(($.$mol_grid.prototype), "Head"));
	($mol_mem_key(($.$mol_grid.prototype), "Row"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_text"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_number"));
	($mol_mem_key(($.$mol_grid.prototype), "Col_head"));
	($mol_mem_key(($.$mol_grid.prototype), "Cell_branch"));
	($.$mol_grid_table) = class $mol_grid_table extends ($.$mol_list) {};
	($.$mol_grid_row) = class $mol_grid_row extends ($.$mol_view) {
		cells(){
			return [];
		}
		sub(){
			return (this.cells());
		}
	};
	($.$mol_grid_cell) = class $mol_grid_cell extends ($.$mol_view) {
		minimal_height(){
			return 40;
		}
	};
	($.$mol_grid_number) = class $mol_grid_number extends ($.$mol_grid_cell) {};


;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            cell_content_text(id) {
                return this.cell_content(id).map(val => typeof val === 'object' ? JSON.stringify(val) : val);
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return true;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 0 1 auto;\n\tposition: relative;\n\toverflow-x: auto;\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > *,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\tpadding: var(--mol_gap_text);\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 2px 2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_row]:where(:first-child) > * {\n\tbox-shadow: inset 2px 0 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_table] > * > *:where(:first-child) {\n\tbox-shadow: inset 0px 2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_head] > * {\n\tbox-shadow: inset 2px -2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_head] > *:where(:first-child) {\n\tbox-shadow: inset 0px -2px 0 -1px var(--mol_theme_line);\n}\n\n[mol_grid_table] > [mol_grid_row]:where(:first-child) > *:where(:first-child) {\n\tbox-shadow: none;\n}\t\n\n[mol_grid_head] {\n\tdisplay: table-row;\n\ttransform: none !important;\n}\n\n/* [mol_grid_cell_number] {\n\ttext-align: right;\n} */\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));

;
	($.$mol_embed_native) = class $mol_embed_native extends ($.$mol_scroll) {
		mime(){
			return "";
		}
		title(){
			return "";
		}
		Fallback(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.uri()));
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		uri_change(next){
			if(next !== undefined) return next;
			return null;
		}
		uri(next){
			if(next !== undefined) return next;
			return "";
		}
		dom_name(){
			return "object";
		}
		window(){
			return null;
		}
		attr(){
			return {
				...(super.attr()), 
				"data": (this.uri()), 
				"type": (this.mime())
			};
		}
		sub(){
			return [(this.Fallback())];
		}
		message(){
			return {"hashchange": (next) => (this.uri_change(next))};
		}
	};
	($mol_mem(($.$mol_embed_native.prototype), "Fallback"));
	($mol_mem(($.$mol_embed_native.prototype), "uri_change"));
	($mol_mem(($.$mol_embed_native.prototype), "uri"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_native extends $.$mol_embed_native {
            window() {
                $mol_wire_solid();
                return $mol_wire_sync(this).load(this.dom_node_actual());
            }
            load(frame) {
                return new Promise((done, fail) => {
                    frame.onload = () => {
                        try {
                            if (frame.contentWindow.location.href === 'about:blank') {
                                return;
                            }
                        }
                        catch { }
                        done(frame.contentWindow);
                    };
                    frame.onerror = (event) => {
                        fail(typeof event === 'string' ? new Error(event) : event.error || event);
                    };
                });
            }
            uri_resource() {
                return this.uri().replace(/#.*/, '');
            }
            message_listener() {
                return new $mol_dom_listener($mol_dom_context, 'message', $mol_wire_async(this).message_receive);
            }
            message_receive(event) {
                if (!event)
                    return;
                if (event.source !== this.window())
                    return;
                if (!Array.isArray(event.data))
                    return;
                this.message()[event.data[0]]?.(event);
            }
            uri_change(event) {
                this.$.$mol_wait_timeout(1000);
                this.uri(event.data[1]);
            }
            auto() {
                return [
                    this.message_listener(),
                    this.window(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "window", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "uri_resource", null);
        __decorate([
            $mol_mem
        ], $mol_embed_native.prototype, "message_listener", null);
        $$.$mol_embed_native = $mol_embed_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/native/native.view.css", "[mol_embed_native] {\n\tmax-width: 100%;\n\tmax-height: 100vh;\n\tobject-fit: cover;\n\tdisplay: flex;\n\tflex: 1 1 auto;\n\tobject-position: top left;\n\tborder-radius: var(--mol_gap_round);\n\taspect-ratio: 4/3;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_youtube) = class $mol_icon_youtube extends ($.$mol_icon) {
		path(){
			return "M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z";
		}
	};


;
"use strict";

;
	($.$mol_frame) = class $mol_frame extends ($.$mol_embed_native) {
		allow(){
			return "";
		}
		uri(next){
			if(next !== undefined) return next;
			return "about:config";
		}
		html(){
			return null;
		}
		dom_name(){
			return "iframe";
		}
		attr(){
			return {
				...(super.attr()), 
				"data": null, 
				"type": null, 
				"allow": (this.allow()), 
				"src": (this.uri()), 
				"srcdoc": (this.html())
			};
		}
		fullscreen(){
			return true;
		}
		accelerometer(){
			return true;
		}
		autoplay(){
			return true;
		}
		encription(){
			return true;
		}
		gyroscope(){
			return true;
		}
		pip(){
			return true;
		}
		clipboard_read(){
			return true;
		}
		clipboard_write(){
			return true;
		}
	};
	($mol_mem(($.$mol_frame.prototype), "uri"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_frame extends $.$mol_frame {
            window() {
                return super.window();
            }
            allow() {
                return [
                    ...this.fullscreen() ? ['fullscreen'] : [],
                    ...this.accelerometer() ? ['accelerometer'] : [],
                    ...this.autoplay() ? ['autoplay'] : [],
                    ...this.encription() ? ['encrypted-media'] : [],
                    ...this.gyroscope() ? ['gyroscope'] : [],
                    ...this.pip() ? ['picture-in-picture'] : [],
                    ...this.clipboard_read() ? [`clipboard-read ${this.uri()}`] : [],
                    ...this.clipboard_write() ? [`clipboard-write ${this.uri()}`] : [],
                ].join('; ');
            }
        }
        $$.$mol_frame = $mol_frame;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_frame, {
        border: {
            style: 'none',
        },
        maxHeight: $mol_style_unit.vh(100),
    });
})($ || ($ = {}));

;
	($.$mol_embed_service) = class $mol_embed_service extends ($.$mol_check) {
		active(next){
			if(next !== undefined) return next;
			return false;
		}
		title(){
			return "";
		}
		video_preview(){
			return "";
		}
		Image(){
			const obj = new this.$.$mol_image();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.video_preview()));
			return obj;
		}
		Hint(){
			const obj = new this.$.$mol_icon_youtube();
			return obj;
		}
		video_embed(){
			return "";
		}
		Frame(){
			const obj = new this.$.$mol_frame();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.video_embed()));
			return obj;
		}
		uri(){
			return "";
		}
		video_id(){
			return "";
		}
		checked(next){
			return (this.active(next));
		}
		sub(){
			return [
				(this.Image()), 
				(this.Hint()), 
				(this.Frame())
			];
		}
	};
	($mol_mem(($.$mol_embed_service.prototype), "active"));
	($mol_mem(($.$mol_embed_service.prototype), "Image"));
	($mol_mem(($.$mol_embed_service.prototype), "Hint"));
	($mol_mem(($.$mol_embed_service.prototype), "Frame"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_service extends $.$mol_embed_service {
            sub() {
                return this.active()
                    ? [this.Frame()]
                    : [this.Image(), this.Hint()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_service.prototype, "sub", null);
        $$.$mol_embed_service = $mol_embed_service;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/embed/service/service.view.css", "[mol_embed_service] {\n\tpadding: 0;\n\tmax-width: 100%;\n}\n\n[mol_embed_service_image] {\n\tflex: auto 1 1;\n\twidth: 100vw;\n}\n\n[mol_embed_service_frame] {\n\twidth: 100vw;\n}\n\n[mol_embed_service_hint] {\n\tposition: absolute;\n    left: 50%;\n    top: 50%;\n    width: 50%;\n    height: 50%;\n    opacity: 0.3;\n    transform: translate(-50%, -50%);\n}\n\n[mol_embed_service]:hover [mol_embed_service_hint] {\n\topacity: .6;\n}\n");
})($ || ($ = {}));

;
	($.$mol_embed_youtube) = class $mol_embed_youtube extends ($.$mol_embed_service) {};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_youtube extends $.$mol_embed_youtube {
            video_embed() {
                return `https://www.youtube.com/embed/${encodeURIComponent(this.video_id())}?autoplay=1&loop=1`;
            }
            video_id() {
                return this.uri().match(/^https\:\/\/www\.youtube\.com\/(?:embed\/|shorts\/|watch\?v=)([^\/&?#]+)/)?.[1]
                    ?? this.uri().match(/^https\:\/\/youtu\.be\/([^\/&?#]+)/)?.[1]
                    ?? 'about:blank';
            }
            video_preview() {
                return `https://i.ytimg.com/vi/${this.video_id()}/sddefault.jpg`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_youtube.prototype, "video_preview", null);
        $$.$mol_embed_youtube = $mol_embed_youtube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_rutube) = class $mol_embed_rutube extends ($.$mol_embed_service) {};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_rutube extends $.$mol_embed_rutube {
            video_embed() {
                return `https://rutube.ru/play/embed/${encodeURIComponent(this.video_id())}`;
            }
            video_id() {
                return this.uri().match(/^https:\/\/rutube.ru\/video\/([^\/&?#]+)/)?.[1] ?? 'about:blank';
            }
            video_preview() {
                return `https://rutube.ru/api/video/${this.video_id()}/thumbnail/?redirect=1`;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_embed", null);
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_id", null);
        __decorate([
            $mol_mem
        ], $mol_embed_rutube.prototype, "video_preview", null);
        $$.$mol_embed_rutube = $mol_embed_rutube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_embed_any) = class $mol_embed_any extends ($.$mol_view) {
		title(){
			return "";
		}
		uri(){
			return "";
		}
		Image(){
			const obj = new this.$.$mol_image();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Object(){
			const obj = new this.$.$mol_embed_native();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Youtube(){
			const obj = new this.$.$mol_embed_youtube();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
		Rutube(){
			const obj = new this.$.$mol_embed_rutube();
			(obj.title) = () => ((this.title()));
			(obj.uri) = () => ((this.uri()));
			return obj;
		}
	};
	($mol_mem(($.$mol_embed_any.prototype), "Image"));
	($mol_mem(($.$mol_embed_any.prototype), "Object"));
	($mol_mem(($.$mol_embed_any.prototype), "Youtube"));
	($mol_mem(($.$mol_embed_any.prototype), "Rutube"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_any extends $.$mol_embed_any {
            type() {
                try {
                    const uri = this.uri();
                    if (/\b(png|gif|jpg|jpeg|jfif|webp|svg)\b/.test(uri))
                        return 'image';
                    if (/^https:\/\/www\.youtube\.com\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/youtu\.be\//.test(uri))
                        return 'youtube';
                    if (/^https:\/\/rutube\.ru\//.test(uri))
                        return 'rutube';
                }
                catch (error) {
                    $mol_fail_log(error);
                    return 'image';
                }
                return 'object';
            }
            sub() {
                switch (this.type()) {
                    case 'image': return [this.Image()];
                    case 'youtube': return [this.Youtube()];
                    case 'rutube': return [this.Rutube()];
                    default: return [this.Object()];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "type", null);
        __decorate([
            $mol_mem
        ], $mol_embed_any.prototype, "sub", null);
        $$.$mol_embed_any = $mol_embed_any;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_expander) = class $mol_expander extends ($.$mol_list) {
		expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		expandable(){
			return true;
		}
		label(){
			return [(this.title())];
		}
		Trigger(){
			const obj = new this.$.$mol_check_expand();
			(obj.checked) = (next) => ((this.expanded(next)));
			(obj.expandable) = () => ((this.expandable()));
			(obj.label) = () => ((this.label()));
			return obj;
		}
		Tools(){
			return null;
		}
		Label(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Trigger()), (this.Tools())]);
			return obj;
		}
		content(){
			return [];
		}
		Content(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.content()));
			return obj;
		}
		rows(){
			return [(this.Label()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_expander.prototype), "expanded"));
	($mol_mem(($.$mol_expander.prototype), "Trigger"));
	($mol_mem(($.$mol_expander.prototype), "Label"));
	($mol_mem(($.$mol_expander.prototype), "Content"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_expander extends $.$mol_expander {
            rows() {
                return [
                    this.Label(),
                    ...this.expanded() ? [this.Content()] : []
                ];
            }
            expandable() {
                return this.content().length > 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_expander.prototype, "rows", null);
        $$.$mol_expander = $mol_expander;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/expander/expander.view.css", "[mol_expander] {\n\tflex-direction: column;\n}\n\n[mol_expander_label] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_expander_trigger] {\n\tflex: auto;\n\tposition: relative;\n}\n");
})($ || ($ = {}));

;
	($.$mol_text) = class $mol_text extends ($.$mol_list) {
		auto_scroll(){
			return null;
		}
		block_content(id){
			return [];
		}
		uri_resolve(id){
			return "";
		}
		quote_text(id){
			return "";
		}
		highlight(){
			return "";
		}
		list_type(id){
			return "-";
		}
		list_text(id){
			return "";
		}
		header_level(id){
			return 1;
		}
		header_arg(id){
			return {};
		}
		pre_text(id){
			return "";
		}
		code_sidebar_showed(){
			return true;
		}
		pre_sidebar_showed(){
			return (this.code_sidebar_showed());
		}
		table_head_cells(id){
			return [];
		}
		table_rows(id){
			return [];
		}
		table_cells(id){
			return [];
		}
		table_cell_text(id){
			return "";
		}
		grid_rows(id){
			return [];
		}
		grid_cells(id){
			return [];
		}
		grid_cell_text(id){
			return "";
		}
		line_text(id){
			return "";
		}
		line_type(id){
			return "";
		}
		line_content(id){
			return [];
		}
		code_syntax(){
			return null;
		}
		link_uri(id){
			return "";
		}
		link_host(id){
			return "";
		}
		spoiler_label(id){
			return "";
		}
		Spoiler_label(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.spoiler_label(id)));
			return obj;
		}
		spoiler_content(id){
			return "";
		}
		Spoiler_content(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.spoiler_content(id)));
			return obj;
		}
		uri_base(){
			return "";
		}
		text(){
			return "";
		}
		param(){
			return "";
		}
		flow_tokens(){
			return [];
		}
		block_text(id){
			return "";
		}
		auto(){
			return [(this.auto_scroll())];
		}
		Paragraph(id){
			const obj = new this.$.$mol_paragraph();
			(obj.sub) = () => ((this.block_content(id)));
			return obj;
		}
		Quote(id){
			const obj = new this.$.$mol_text();
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.text) = () => ((this.quote_text(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.auto_scroll) = () => (null);
			return obj;
		}
		List(id){
			const obj = new this.$.$mol_text_list();
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.type) = () => ((this.list_type(id)));
			(obj.text) = () => ((this.list_text(id)));
			(obj.highlight) = () => ((this.highlight()));
			return obj;
		}
		item_index(id){
			return 0;
		}
		Header(id){
			const obj = new this.$.$mol_text_header();
			(obj.minimal_height) = () => (40);
			(obj.level) = () => ((this.header_level(id)));
			(obj.content) = () => ((this.block_content(id)));
			(obj.arg) = () => ((this.header_arg(id)));
			return obj;
		}
		Pre(id){
			const obj = new this.$.$mol_text_code();
			(obj.text) = () => ((this.pre_text(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.sidebar_showed) = () => ((this.pre_sidebar_showed()));
			return obj;
		}
		Cut(id){
			const obj = new this.$.$mol_view();
			(obj.dom_name) = () => ("hr");
			return obj;
		}
		Table(id){
			const obj = new this.$.$mol_grid();
			(obj.head_cells) = () => ((this.table_head_cells(id)));
			(obj.rows) = () => ((this.table_rows(id)));
			return obj;
		}
		Table_row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.table_cells(id)));
			return obj;
		}
		Table_cell(id){
			const obj = new this.$.$mol_text();
			(obj.auto_scroll) = () => (null);
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.text) = () => ((this.table_cell_text(id)));
			return obj;
		}
		Grid(id){
			const obj = new this.$.$mol_grid();
			(obj.rows) = () => ((this.grid_rows(id)));
			return obj;
		}
		Grid_row(id){
			const obj = new this.$.$mol_grid_row();
			(obj.cells) = () => ((this.grid_cells(id)));
			return obj;
		}
		Grid_cell(id){
			const obj = new this.$.$mol_text();
			(obj.auto_scroll) = () => (null);
			(obj.highlight) = () => ((this.highlight()));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.text) = () => ((this.grid_cell_text(id)));
			return obj;
		}
		String(id){
			const obj = new this.$.$mol_dimmer();
			(obj.dom_name) = () => ("span");
			(obj.needle) = () => ((this.highlight()));
			(obj.haystack) = () => ((this.line_text(id)));
			return obj;
		}
		Span(id){
			const obj = new this.$.$mol_text_span();
			(obj.dom_name) = () => ("span");
			(obj.type) = () => ((this.line_type(id)));
			(obj.sub) = () => ((this.line_content(id)));
			return obj;
		}
		Code_line(id){
			const obj = new this.$.$mol_text_code_line();
			(obj.numb_showed) = () => (false);
			(obj.highlight) = () => ((this.highlight()));
			(obj.text) = () => ((this.line_text(id)));
			(obj.uri_resolve) = (id) => ((this.uri_resolve(id)));
			(obj.syntax) = () => ((this.code_syntax()));
			return obj;
		}
		Link(id){
			const obj = new this.$.$mol_link_iconed();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.content) = () => ((this.line_content(id)));
			return obj;
		}
		Link_http(id){
			const obj = new this.$.$mol_link_iconed();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.content) = () => ([(this.link_host(id))]);
			return obj;
		}
		Embed(id){
			const obj = new this.$.$mol_embed_any();
			(obj.uri) = () => ((this.link_uri(id)));
			(obj.title) = () => ((this.line_text(id)));
			return obj;
		}
		Spoiler(id){
			const obj = new this.$.$mol_expander();
			(obj.label) = () => ([(this.Spoiler_label(id))]);
			(obj.content) = () => ([(this.Spoiler_content(id))]);
			return obj;
		}
	};
	($mol_mem_key(($.$mol_text.prototype), "Spoiler_label"));
	($mol_mem_key(($.$mol_text.prototype), "Spoiler_content"));
	($mol_mem_key(($.$mol_text.prototype), "Paragraph"));
	($mol_mem_key(($.$mol_text.prototype), "Quote"));
	($mol_mem_key(($.$mol_text.prototype), "List"));
	($mol_mem_key(($.$mol_text.prototype), "Header"));
	($mol_mem_key(($.$mol_text.prototype), "Pre"));
	($mol_mem_key(($.$mol_text.prototype), "Cut"));
	($mol_mem_key(($.$mol_text.prototype), "Table"));
	($mol_mem_key(($.$mol_text.prototype), "Table_row"));
	($mol_mem_key(($.$mol_text.prototype), "Table_cell"));
	($mol_mem_key(($.$mol_text.prototype), "Grid"));
	($mol_mem_key(($.$mol_text.prototype), "Grid_row"));
	($mol_mem_key(($.$mol_text.prototype), "Grid_cell"));
	($mol_mem_key(($.$mol_text.prototype), "String"));
	($mol_mem_key(($.$mol_text.prototype), "Span"));
	($mol_mem_key(($.$mol_text.prototype), "Code_line"));
	($mol_mem_key(($.$mol_text.prototype), "Link"));
	($mol_mem_key(($.$mol_text.prototype), "Link_http"));
	($mol_mem_key(($.$mol_text.prototype), "Embed"));
	($mol_mem_key(($.$mol_text.prototype), "Spoiler"));
	($.$mol_text_header) = class $mol_text_header extends ($.$mol_paragraph) {
		arg(){
			return {};
		}
		content(){
			return [];
		}
		Link(){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ((this.arg()));
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_text_header_Link_hint")));
			(obj.sub) = () => ((this.content()));
			return obj;
		}
		level(){
			return 1;
		}
		sub(){
			return [(this.Link())];
		}
	};
	($mol_mem(($.$mol_text_header.prototype), "Link"));
	($.$mol_text_span) = class $mol_text_span extends ($.$mol_paragraph) {
		type(){
			return "";
		}
		dom_name(){
			return "span";
		}
		attr(){
			return {...(super.attr()), "mol_text_type": (this.type())};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            flow_tokens() {
                const tokens = [];
                this.$.$mol_syntax2_md_flow.tokenize(this.text(), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            block_type(index) {
                return this.flow_tokens()[index].name;
            }
            rows() {
                return this.flow_tokens().map(({ name }, index) => {
                    switch (name) {
                        case 'quote': return this.Quote(index);
                        case 'spoiler': return this.Spoiler(index);
                        case 'header': return this.Header(index);
                        case 'list': return this.List(index);
                        case 'code': return this.Pre(index);
                        case 'code-indent': return this.Pre(index);
                        case 'table': return this.Table(index);
                        case 'grid': return this.Grid(index);
                        case 'cut': return this.Cut(index);
                        default: return this.Paragraph(index);
                    }
                });
            }
            param() {
                return this.toString().replace(/^.*?[\)>]\./, '').replace(/[(<>)]/g, '');
            }
            header_level(index) {
                return this.flow_tokens()[index].chunks[0].length;
            }
            header_arg(index) {
                return {
                    [this.param()]: this.block_text(index)
                };
            }
            list_type(index) {
                return this.flow_tokens()[index].chunks[1] ?? '';
            }
            item_index(index) {
                return this.flow_tokens().slice(0, index).filter(token => token.name === 'block').length + 1;
            }
            pre_text(index) {
                const token = this.flow_tokens()[index];
                return (token.chunks[2] ?? token.chunks[0].replace(/^(\t| (?:\+\+|--|\*\*|  ) )/gm, '')).replace(/[\n\r]*$/, '');
            }
            quote_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[>"] /mg, '');
            }
            list_text(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^([-*+]|(?:\d+[\.\)])+) ?/mg, '').replace(/^  ?/mg, '');
            }
            cell_content(indexBlock) {
                return this.flow_tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_content(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_content(blockId)[0]
                    .map((cell, cellId) => this.Table_cell({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_content(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_text(id) {
                return this.cell_content(id.block)[id.row][id.cell];
            }
            grid_content(indexBlock) {
                return [...this.flow_tokens()[indexBlock].chunks[0].match(/(?:^! .*?$\r?\n?)+(?:^ +! .*?$\r?\n?)*/gm)]
                    .map((row, rowId) => {
                    const cells = [];
                    for (const line of row.trim().split(/\r?\n/)) {
                        const [_, indent, content] = /^( *)! (.*)/.exec(line);
                        const col = Math.ceil(indent.length / 2);
                        cells[col] = (cells[col] ? cells[col] + '\n' : '') + content;
                    }
                    return cells;
                });
            }
            grid_rows(blockId) {
                return this.grid_content(blockId)
                    .map((row, rowId) => this.Grid_row({ block: blockId, row: rowId }));
            }
            grid_cells(id) {
                return this.grid_content(id.block)[id.row]
                    .map((cell, cellId) => this.Grid_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            grid_cell_text(id) {
                return this.grid_content(id.block)[id.row][id.cell];
            }
            uri_base() {
                return $mol_dom_context.document.location.href;
            }
            uri_base_abs() {
                return new URL(this.uri_base(), $mol_dom_context.document.location.href);
            }
            uri_resolve(uri) {
                if (/^(\w+script+:)+/.test(uri))
                    return null;
                if (/^#\!/.test(uri)) {
                    const params = {};
                    for (const chunk of uri.slice(2).split(this.$.$mol_state_arg.separator)) {
                        if (!chunk)
                            continue;
                        const vals = chunk.split('=').map(decodeURIComponent);
                        params[vals.shift()] = vals.join('=');
                    }
                    return this.$.$mol_state_arg.link(params);
                }
                try {
                    const url = new URL(uri, this.uri_base_abs());
                    return url.toString();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            code_syntax() {
                return this.$.$mol_syntax2_md_code;
            }
            block_text(index) {
                const token = this.flow_tokens()[index];
                switch (token.name) {
                    case 'header': return token.chunks[2];
                    default: return token.chunks[0];
                }
            }
            block_content(index) {
                return this.line_content([index]);
            }
            line_tokens(path) {
                const tokens = [];
                this.$.$mol_syntax2_md_line.tokenize(this.line_text(path), (name, found, chunks) => tokens.push({ name, found, chunks }));
                return tokens;
            }
            line_token(path) {
                const tokens = this.line_tokens(path.slice(0, path.length - 1));
                return tokens[path[path.length - 1]];
            }
            line_type(path) {
                return this.line_token(path).name;
            }
            line_text(path) {
                if (path.length === 1)
                    return this.block_text(path[0]);
                const { name, found, chunks } = this.line_token(path);
                switch (name) {
                    case 'link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    case 'text-link': return chunks[0] || chunks[1].replace(/^.*?\/\/|\/.*$/g, '');
                    default: return (chunks[0] || chunks[1] || chunks[2]) ?? found;
                }
            }
            line_content(path) {
                return this.line_tokens(path).map(({ name, chunks }, index) => {
                    const path2 = [...path, index];
                    switch (name) {
                        case 'embed': return this.Embed(path2);
                        case 'link': return this.Link(path2);
                        case 'text-link-http': return this.Link_http(path2);
                        case 'text-link': return this.Link(path2);
                        case 'image-link': return this.Embed(path2);
                        case 'code': return this.Code_line(path2);
                        case '': return this.String(path2);
                        default: return this.Span(path2);
                    }
                });
            }
            link_uri(path) {
                const token = this.line_token(path);
                const uri = this.uri_resolve(token.chunks[1] ?? token.found);
                if (!uri)
                    throw new Error('Bad link');
                return uri;
            }
            link_host(path) {
                return this.link_uri(path).replace(/^.*?\/\/|\/.*$/g, '');
            }
            auto_scroll() {
                for (const [index, token] of this.flow_tokens().entries()) {
                    if (token.name !== 'header')
                        continue;
                    const header = this.Header(index);
                    if (!header.Link().current())
                        continue;
                    new $mol_after_tick(() => this.ensure_visible(header));
                }
            }
            spoiler_rows(index) {
                return this.flow_tokens()[index].chunks[0].replace(/^[\?] /mg, '').split('\n');
            }
            spoiler_label(index) {
                return this.spoiler_rows(index)[0];
            }
            spoiler_content(index) {
                return this.spoiler_rows(index).slice(1).join('\n');
            }
        }
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "flow_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_type", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "param", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_level", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "header_arg", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "pre_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "quote_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "list_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "cell_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "table_cell_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cells", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "grid_cell_text", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "uri_base_abs", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "uri_resolve", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "block_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_tokens", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_token", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_type", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "line_content", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_uri", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "link_host", null);
        __decorate([
            $mol_mem
        ], $mol_text.prototype, "auto_scroll", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_rows", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_label", null);
        __decorate([
            $mol_mem_key
        ], $mol_text.prototype, "spoiler_content", null);
        $$.$mol_text = $mol_text;
        class $mol_text_header extends $.$mol_text_header {
            dom_name() {
                return 'h' + this.level();
            }
        }
        $$.$mol_text_header = $mol_text_header;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/text/text.view.css", "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_paragraph] {\n\tpadding: var(--mol_gap_text);\n\toverflow: auto;\n\toverflow-x: overlay;\n\tmax-width: 100%;\n\tdisplay: block;\n\tmax-width: 60rem;\n\tbreak-inside: avoid;\n}\n\n[mol_text_spoiler_label_paragraph] {\n\tpadding: 0;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n\tflex: 0 1 auto;\n\twhite-space: normal;\n}\n\n[mol_text_quote] {\n\tmargin: var(--mol_gap_block);\n\tpadding: var(--mol_gap_block);\n\tbackground: var(--mol_theme_card);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_back);\n\tbreak-inside: avoid;\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n\tbreak-after: avoid;\n}\n\n* + [mol_text_header] {\n\tmargin-top: 0.75rem;\n}\n\nh1[mol_text_header] {\n\tfont-size: 1.5rem;\n}\n\nh2[mol_text_header] {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\nh3[mol_text_header] {\n\tfont-size: 1.25rem;\n}\n\nh4[mol_text_header] {\n\tfont-size: 1.25em;\n\tfont-style: italic;\n}\n\nh5[mol_text_header] {\n\tfont-size: 1rem;\n}\n\nh6[mol_text_header] {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n\n[mol_text_header_link] {\n\tcolor: inherit;\n}\n\n[mol_text_table] {\n\tbreak-inside: avoid;\n}\n\n[mol_text_table_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_grid] {\n\tbreak-inside: avoid;\n}\n\n[mol_text_grid_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: top;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_cut] {\n\tborder: none;\n\twidth: 100%;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_text_link_http],\n[mol_text_link] {\n\tpadding: 0;\n\tdisplay: inline;\n\twhite-space: nowrap;\n}\n\n[mol_text_link_icon] + [mol_text_embed] {\n\tmargin-left: -1.5rem;\n}\n\n[mol_text_embed_youtube] {\n\tdisplay: inline;\n}\n\n[mol_text_embed_youtube_image],\n[mol_text_embed_youtube_frame],\n[mol_text_embed_object] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\twidth: 100vw;\n\tmax-height: calc( 100vh - 6rem );\n\tvertical-align: top;\n}\n[mol_text_embed_object_fallback] {\n\tpadding: 0;\n}\n[mol_text_embed_image] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\t/* max-height: calc( 100vh - 6rem ); */\n\tvertical-align: top;\n}\n\n[mol_text_pre] {\n\twhite-space: pre;\n\toverflow-x: auto;\n\toverflow-x: overlay;\n\ttab-size: 2;\n\tbreak-inside: avoid;\n}\n\n[mol_text_code_line] {\n\tdisplay: inline-block;\n}\n\n[mol_text_type=\"strong\"] {\n\ttext-shadow: 0 0;\n\tfilter: contrast(1.5);\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"insert\"] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_text_type=\"delete\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"remark\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"quote\"] {\n\tfont-style: italic;\n}\n");
})($ || ($ = {}));

;
	($.$hyoo_match_intro) = class $hyoo_match_intro extends ($.$mol_page) {
		Next(){
			const obj = new this.$.$mol_link();
			(obj.title) = () => ("Поехали 💨");
			(obj.arg) = () => ({"": "settings"});
			return obj;
		}
		Content(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("\" 🚧 Без рекламы и премиумов\n\" 🎭 Без фейков и мёртвых душ\n\" 📸 Только самые свежие фотки\n\" 🎲 Святой рандом и никакого AI\n\n! **Правила**\n  ! \\\\Почему это работает?\\https://page.hyoo.ru/#!=rkjlvv_lle0qa\\\\\n\n\" 🤳 Заполни свой \\\\профиль\\#!=settings\\\\\n\" 📅 Обновляй фото каждый день\n\" 💗 Лайкай других \\\\персон\\#!=look\\\\\n\" 💬 Общайся при взаимности\n\" 🔄 Возвращайся через час\n\n**Это всё не ради денег, но ради любви**\n\n\" Расскажи о \\\\match.hyoo.ru\\https://match.hyoo.ru/\\\\ всем\n\" Поддержи \\\\рублём\\https://boosty.to/hyoo\\\\ если не влом");
			return obj;
		}
		title(){
			return "Знакомимся";
		}
		foot(){
			return [(this.Next())];
		}
		body(){
			return [(this.Content())];
		}
	};
	($mol_mem(($.$hyoo_match_intro.prototype), "Next"));
	($mol_mem(($.$hyoo_match_intro.prototype), "Content"));


;
	($.$mol_text_list) = class $mol_text_list extends ($.$mol_text) {
		type(){
			return "";
		}
		auto_scroll(){
			return null;
		}
		attr(){
			return {...(super.attr()), "mol_text_list_type": (this.type())};
		}
		Paragraph(id){
			const obj = new this.$.$mol_text_list_item();
			(obj.index) = () => ((this.item_index(id)));
			(obj.sub) = () => ((this.block_content(id)));
			return obj;
		}
	};
	($mol_mem_key(($.$mol_text_list.prototype), "Paragraph"));
	($.$mol_text_list_item) = class $mol_text_list_item extends ($.$mol_paragraph) {
		index(){
			return 0;
		}
		attr(){
			return {...(super.attr()), "mol_text_list_item_index": (this.index())};
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/text/list/list.view.css", "[mol_text_list] {\r\n\tpadding-left: 1.75rem;\r\n}\r\n\r\n[mol_text_list_item] {\r\n\tcontain: none;\r\n\tdisplay: list-item;\r\n}\r\n\r\n[mol_text_list_item]::before {\r\n\tcontent: attr( mol_text_list_item_index ) \".\";\r\n\twidth: 1.25rem;\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\tmargin-left: -1.75rem;\r\n\ttext-align: end;\r\n}\r\n\r\n[mol_text_list_type=\"-\"] > [mol_text_list_item]::before,\r\n[mol_text_list_type=\"*\"] > [mol_text_list_item]::before {\r\n\tcontent: \"•\";\r\n}\r\n");
})($ || ($ = {}));

;
"use strict";

;
"use strict";

;
"use strict";
var $;
(function ($) {
    function $mol_reconcile({ prev, from, to, next, equal, drop, insert, update, replace, }) {
        if (!update)
            update = (next, prev, lead) => prev;
        if (!replace)
            replace = (next, prev, lead) => insert(next, drop(prev, lead));
        if (to > prev.length)
            to = prev.length;
        if (from > to)
            from = to;
        let p = from;
        let n = 0;
        let lead = p ? prev[p - 1] : null;
        while (p < to || n < next.length) {
            if (p < to && n < next.length && equal(next[n], prev[p])) {
                lead = update(next[n], prev[p], lead);
                ++p;
                ++n;
            }
            else if (next.length - n > to - p) {
                lead = insert(next[n], lead);
                ++n;
            }
            else if (next.length - n < to - p) {
                lead = drop(prev[p], lead);
                ++p;
            }
            else {
                lead = replace(next[n], prev[p], lead);
                ++p;
                ++n;
            }
        }
    }
    $.$mol_reconcile = $mol_reconcile;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { unicode_only, line_end, tab, repeat_greedy, optional, forbid_after, force_after, char_only, char_except } = $mol_regexp;
    $.$hyoo_crowd_tokenizer = $mol_regexp.from({
        token: {
            'line-break': line_end,
            'indents': repeat_greedy(tab, 1),
            'emoji': [
                unicode_only('Extended_Pictographic'),
                optional(unicode_only('Emoji_Modifier')),
                repeat_greedy([
                    unicode_only('Emoji_Component'),
                    unicode_only('Extended_Pictographic'),
                    optional(unicode_only('Emoji_Modifier')),
                ]),
            ],
            'link': /\b(https?:\/\/[^\s,.;:!?")]+(?:[,.;:!?")][^\s,.;:!?")]+)+)/,
            'Word': [
                [
                    forbid_after(line_end),
                    unicode_only('White_Space'),
                ],
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]), 1),
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ])),
            ],
            'word': [
                [
                    forbid_after(line_end),
                    unicode_only('White_Space'),
                ],
                repeat_greedy(char_only([
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]), 1),
            ],
            'spaces': [
                forbid_after(line_end),
                repeat_greedy(unicode_only('White_Space'), 1),
                force_after(unicode_only('White_Space')),
            ],
            'space': [
                forbid_after(line_end),
                unicode_only('White_Space'),
                forbid_after([
                    unicode_only('White_Space'),
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                ]),
            ],
            'others': [
                repeat_greedy(char_except([
                    unicode_only('General_Category', 'Uppercase_Letter'),
                    unicode_only('General_Category', 'Lowercase_Letter'),
                    unicode_only('Diacritic'),
                    unicode_only('General_Category', 'Number'),
                    unicode_only('White_Space'),
                ]), 1),
            ],
        },
    }).native;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_list extends $hyoo_crowd_node {
        list(next) {
            const units = this.units();
            if (next === undefined) {
                return units.map(unit => unit.data);
            }
            else {
                this.insert(next, 0, units.length);
                return next;
            }
        }
        set(next) {
            return new Set(this.list(next && [...next]));
        }
        insert(next, from = this.units().length, to = from) {
            $mol_reconcile({
                prev: this.units(),
                from,
                to,
                next,
                equal: (next, prev) => $mol_compare_deep(prev.data, next),
                drop: (prev, lead) => this.land.wipe(prev),
                insert: (next, lead) => this.land.put(this.head, this.land.id_new(), lead?.self ?? '0_0', next),
                replace: (next, prev, lead) => this.land.put(prev.head, prev.self, lead?.self ?? '0_0', next),
            });
        }
        move(from, to) {
            const units = this.units();
            const lead = to ? units[to - 1] : null;
            this.land.move(units[from], this.head, lead?.self ?? '0_0');
        }
        cut(seat) {
            return this.land.wipe(this.units()[seat]);
        }
        has(val, next) {
            if (next === undefined) {
                for (const unit of this.units()) {
                    if (unit.data === val)
                        return true;
                }
                return false;
            }
            if (next)
                this.add(val);
            else
                this.drop(val);
            return next;
        }
        add(val) {
            if (this.has(val))
                return;
            this.insert([val]);
        }
        drop(val) {
            for (const unit of this.units()) {
                if (unit.data !== val)
                    continue;
                this.land.wipe(unit);
            }
        }
        node_make(val, Node) {
            this.insert([val]);
            const unit = this.units().at(-1);
            return this.land.node(unit.self, Node);
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_crowd_list.prototype, "set", null);
    $.$hyoo_crowd_list = $hyoo_crowd_list;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_text extends $hyoo_crowd_node {
        text(next) {
            if (next === undefined) {
                return this.str();
            }
            else {
                const prev = this.units();
                const lines = next.match(/.*\n|.+$/g) ?? [];
                $mol_reconcile({
                    prev,
                    from: 0,
                    to: prev.length,
                    next: lines,
                    equal: (next, prev) => {
                        if (typeof prev.data === 'string')
                            return false;
                        return this.land.node(prev.self, $hyoo_crowd_text).str() === next;
                    },
                    drop: (prev, lead) => this.land.wipe(prev),
                    insert: (next, lead) => {
                        const unit = this.land.put(this.head, this.land.id_new(), lead?.self ?? '0_0', []);
                        this.land.node(unit.self, $hyoo_crowd_text).str(next);
                        return unit;
                    },
                    replace: (next, prev, lead) => {
                        this.land.node(prev.self, $hyoo_crowd_text).str(next);
                        return prev;
                    },
                });
                return next;
            }
        }
        str(next) {
            if (next === undefined) {
                let str = '';
                for (const unit of this.units()) {
                    if (typeof unit.data === 'string')
                        str += unit.data;
                    else
                        str += this.land.node(unit.self, $hyoo_crowd_text).str();
                }
                return str;
            }
            else {
                this.write(next, 0, -1);
                return next;
            }
        }
        write(next, str_from = -1, str_to = str_from) {
            const list = this.units();
            let from = str_from < 0 ? list.length : 0;
            let word = '';
            while (from < list.length) {
                word = String(list[from].data);
                if (str_from <= word.length) {
                    next = word.slice(0, str_from) + next;
                    break;
                }
                str_from -= word.length;
                if (str_to > 0)
                    str_to -= word.length;
                from++;
            }
            let to = str_to < 0 ? list.length : from;
            while (to < list.length) {
                word = String(list[to].data);
                to++;
                if (str_to < word.length) {
                    next = next + word.slice(str_to);
                    break;
                }
                str_to -= word.length;
            }
            if (from && from === list.length) {
                --from;
                next = String(list[from].data) + next;
            }
            const words = next.match($hyoo_crowd_tokenizer) ?? [];
            this.as($hyoo_crowd_list).insert(words, from, to);
            return this;
        }
        point_by_offset(offset) {
            let off = offset;
            for (const unit of this.units()) {
                if (typeof unit.data === 'string') {
                    const len = String(unit.data).length;
                    if (off <= len)
                        return [unit.self, off];
                    else
                        off -= len;
                }
                else {
                    const found = this.land.node(unit.self, $hyoo_crowd_text).point_by_offset(off);
                    if (found[0] !== '0_0')
                        return found;
                    off = found[1];
                }
            }
            return ['0_0', off];
        }
        offset_by_point([self, offset]) {
            for (const unit of this.units()) {
                if (unit.self === self)
                    return [self, offset];
                if (typeof unit.data === 'string') {
                    offset += unit.data.length;
                }
                else {
                    const found = this.land.node(unit.self, $hyoo_crowd_text).offset_by_point([self, offset]);
                    if (found[0] !== '0_0')
                        return [self, found[1]];
                    offset = found[1];
                }
            }
            return ['0_0', offset];
        }
        selection(peer, next) {
            const reg = this.land.selection(peer);
            if (next) {
                reg.value(next.map(offset => this.point_by_offset(offset)));
                return next;
            }
            else {
                this.units();
                return reg.value()
                    ?.map(point => this.offset_by_point(point)[1]) ?? [0, 0];
            }
        }
    }
    $.$hyoo_crowd_text = $hyoo_crowd_text;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_meta_model extends $hyoo_crowd_struct {
        editable() {
            return this.land.allowed_mod();
        }
        editors() {
            return this.land.peers();
        }
        title_node() {
            return this.sub('title', $hyoo_crowd_text);
        }
        title(next) {
            return this.title_node().str(next);
        }
        title_selection(next) {
            return this.title_node().selection(this.land.peer().id, next);
        }
        steal_rights(node) {
            this.land.steal_rights(node.land);
        }
        whole(next) {
            const reg = this.sub('$hyoo_meta_whole', $hyoo_crowd_reg);
            const id = $mol_int62_string_ensure(reg.str(next?.id()));
            return id ? this.world().Fund($hyoo_meta_model).Item(id) : this;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_meta_model.prototype, "editable", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_model.prototype, "editors", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_model.prototype, "title_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_model.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_model.prototype, "title_selection", null);
    __decorate([
        $mol_action
    ], $hyoo_meta_model.prototype, "steal_rights", null);
    __decorate([
        $mol_mem
    ], $hyoo_meta_model.prototype, "whole", null);
    $.$hyoo_meta_model = $hyoo_meta_model;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_blob extends $hyoo_crowd_list {
        uri() {
            return URL.createObjectURL(this.blob());
        }
        type(next) {
            return this.as($hyoo_crowd_struct).sub('type', $hyoo_crowd_reg).str(next);
        }
        blob(next) {
            if (next) {
                this.buffer(new Uint8Array($mol_wire_sync(next).arrayBuffer()), next.type);
                return next;
            }
            return new $mol_blob(this.list(), {
                type: this.type(),
            });
        }
        buffer(next, type = 'application/octet-stream') {
            if (next) {
                const chunks = [];
                let offset = 0;
                while (offset < next.byteLength) {
                    const cut = offset + 2 ** 15;
                    chunks.push(next.slice(offset, cut));
                    offset = cut;
                }
                this.list(chunks);
                this.type(type);
                return next;
            }
            else {
                const chunks = this.list();
                const size = chunks.reduce((sum, chunk) => sum + chunk.byteLength, 0);
                const res = new Uint8Array(size);
                let offset = 0;
                for (const chunk of chunks) {
                    res.set(chunk, offset);
                    offset += chunk.byteLength;
                }
                return res;
            }
        }
        str(next, type = 'text/plain') {
            if (next === undefined) {
                return $mol_charset_decode(this.buffer());
            }
            else {
                this.buffer($mol_charset_encode(next));
                this.type(type);
                return next;
            }
        }
        json(next, type = 'application/json') {
            if (next === undefined) {
                return JSON.parse(this.str());
            }
            else {
                this.str(JSON.stringify(next), type);
                return next;
            }
        }
    }
    $.$hyoo_crowd_blob = $hyoo_crowd_blob;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $mol_time_base {
        constructor(config = 0) {
            super();
            if (typeof config === 'number') {
                if (!Number.isFinite(config))
                    throw new RangeError(`Wrong ms count`);
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
        get normal() {
            let second = this.second ?? 0;
            let minute = this.minute ?? 0;
            let hour = this.hour ?? 0;
            let day = this.day ?? 0;
            minute += Math.floor(second / 60);
            second = second % 60;
            hour += Math.floor(minute / 60);
            minute = minute % 60;
            day += Math.floor(hour / 24);
            hour = hour % 24;
            return new $mol_time_duration({
                year: this.year,
                month: this.month,
                day: day,
                hour: hour,
                minute: minute,
                second: second,
            });
        }
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            '#Y': (duration) => {
                if (!duration.year)
                    return '';
                return duration.year + 'Y';
            },
            '#M': (duration) => {
                if (!duration.month)
                    return '';
                return duration.month + 'M';
            },
            '#D': (duration) => {
                if (!duration.day)
                    return '';
                return duration.day + 'D';
            },
            '#h': (duration) => {
                if (!duration.hour)
                    return '';
                return duration.hour + 'H';
            },
            '#m': (duration) => {
                if (!duration.minute)
                    return '';
                return duration.minute + 'M';
            },
            '#s': (duration) => {
                if (!duration.second)
                    return '';
                return duration.second + 'S';
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = (moment.second - Math.trunc(moment.second)).toFixed(3);
                return millisecond.slice(2);
            },
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number') {
                config = new Date(config);
                if (Number.isNaN(config.valueOf()))
                    throw new RangeError(`Wrong ms count`);
            }
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const second = Math.floor(this.second ?? 0);
            const native = new Date(this.year ?? 0, this.month ?? 0, (this.day ?? 0) + 1, this.hour ?? 0, this.minute ?? 0, second, Math.floor(((this.second ?? 0) - second) * 1000));
            const offset = -native.getTimezoneOffset();
            shift: if (this.offset) {
                const target = this.offset.count('PT1m');
                if (target === offset)
                    break shift;
                native.setMinutes(native.getMinutes() + offset - target);
            }
            return this._native = native;
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native).toOffset(this.offset);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year ?? 0,
                month: this.month ?? 0,
                day: this.day ?? 0,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config = new $mol_time_moment().offset) {
            const duration = new $mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('0001-01-01T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this), ' ', $mol_dev_format_accent(this.toString('YYYY-MM-DD hh:mm:ss.sss Z')));
        }
        static patterns = {
            'YYYY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year);
            },
            'AD': (moment) => {
                if (moment.year == null)
                    return '';
                return String(Math.floor(moment.year / 100) + 1);
            },
            'YY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year % 100);
            },
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
            },
            'D': (moment) => {
                if (moment.day == null)
                    return '';
                return String(moment.day + 1);
            },
            'Thh': (moment) => {
                if (moment.hour == null)
                    return '';
                return 'T' + $mol_time_moment.patterns['hh'](moment);
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = (moment.second - Math.trunc(moment.second)).toFixed(3);
                return millisecond.slice(2);
            },
            'Z': (moment) => {
                const offset = moment.offset;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_counter extends $hyoo_crowd_reg {
        list() {
            return this.yoke([])?.residents() ?? [];
        }
        times() {
            const land = this.yoke([]);
            land?.pub.promote();
            return Object.fromEntries([...land?._unit_all.values() ?? []]
                .filter(unit => unit.data && unit.kind() === $hyoo_crowd_unit_kind.join)
                .map(unit => [unit.auth, $hyoo_crowd_time_stamp(unit.time)]));
        }
        total() {
            return this.list().length;
        }
        counted(next) {
            const yoke = this.yoke([]);
            switch (next) {
                case true:
                    yoke?.join();
                    return Boolean(yoke);
                case false:
                    yoke?.leave();
                    return false;
                case undefined: return yoke?.residents().includes(this.land.peer_id());
            }
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_crowd_counter.prototype, "times", null);
    $.$hyoo_crowd_counter = $hyoo_crowd_counter;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_match_single extends $hyoo_meta_model {
        ready() {
            if (!this.title())
                return false;
            if (!this.greet())
                return false;
            if (!this.contacts())
                return false;
            if (!this.age_self())
                return false;
            if (!this.sex_self())
                return false;
            if (!this.age_pref_all().length)
                return false;
            if (!this.sex_pref_all().length)
                return false;
            if (!this.places().length)
                return false;
            if (!this.photo_fresh())
                return false;
            return true;
        }
        photo_node() {
            return this.yoke('$hyoo_match_single:photo', $hyoo_crowd_blob);
        }
        photo(next) {
            return this.photo_node()?.blob(next);
        }
        photo_stamp() {
            return this.photo_node()?.land.last_stamp() || new $mol_time_moment('2000-01-01').valueOf();
        }
        photo_fresh() {
            const stamp = this.photo_node()?.land.last_stamp();
            if (!stamp)
                return false;
            return stamp > $mol_state_time.now(60 * 1000) - 1000 * 60 * 60 * 32;
        }
        photo_moment() {
            return new $mol_time_moment(this.photo_stamp());
        }
        greet(next) {
            return this.sub('$hyoo_match_single:greet', $hyoo_crowd_text).text(next);
        }
        contacts(next) {
            return this.sub('$hyoo_match_single:contacts', $hyoo_crowd_text).text(next);
        }
        places(next) {
            return this.sub('$hyoo_match_single:places', $hyoo_crowd_list).list(next).map(String);
        }
        univer(next) {
            return this.sub('$hyoo_match_single:univer', $hyoo_crowd_reg).str(next);
        }
        sex_self(next) {
            return this.sub('$hyoo_match_single:sex_self', $hyoo_crowd_reg).str(next);
        }
        age_self(next) {
            return this.sub('$hyoo_match_single:age_self', $hyoo_crowd_reg).str(next);
        }
        sex_pref_node() {
            return this.sub('$hyoo_match_single:sex_pref', $hyoo_crowd_list);
        }
        sex_pref_all(next) {
            return this.sex_pref_node().list(next).map(String);
        }
        sex_pref(name, next) {
            return this.sex_pref_node().has(name, next);
        }
        age_pref_node() {
            return this.sub('$hyoo_match_single:age_pref', $hyoo_crowd_list);
        }
        age_pref_all(next) {
            return this.age_pref_node().list(next).map(String);
        }
        age_pref(name, next) {
            return this.age_pref_node().has(name, next);
        }
        likes() {
            return this.sub('$hyoo_match_single:likes:2', $hyoo_crowd_counter);
        }
        liked(next) {
            return this.likes().counted(next);
        }
        mutual() {
            const Single = this.world().Fund($hyoo_match_single);
            return this.likes().list()
                .map(id => Single.Item(id))
                .filter(pair => pair.likes().list().includes(this.id()));
        }
        skipped() {
            return this.yoke('$hyoo_match_single:skipped:2', $hyoo_crowd_list);
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "ready", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "photo_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "photo", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "photo_stamp", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "photo_fresh", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "photo_moment", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "greet", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "contacts", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "places", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "univer", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "sex_self", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "age_self", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "sex_pref_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "sex_pref_all", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_match_single.prototype, "sex_pref", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "age_pref_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "age_pref_all", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_match_single.prototype, "age_pref", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "likes", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "liked", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "mutual", null);
    __decorate([
        $mol_mem
    ], $hyoo_match_single.prototype, "skipped", null);
    $.$hyoo_match_single = $hyoo_match_single;
})($ || ($ = {}));

;
	($.$mol_video_player) = class $mol_video_player extends ($.$mol_view) {
		uri(){
			return "";
		}
		controls(){
			return true;
		}
		autoplay(){
			return true;
		}
		inline(){
			return true;
		}
		loop(){
			return false;
		}
		muted(){
			return false;
		}
		poster(){
			return "";
		}
		stream(){
			return null;
		}
		revolume(next){
			if(next !== undefined) return next;
			return null;
		}
		retime(next){
			if(next !== undefined) return next;
			return null;
		}
		redurate(next){
			if(next !== undefined) return next;
			return null;
		}
		playing_event(next){
			if(next !== undefined) return next;
			return null;
		}
		play_event(next){
			if(next !== undefined) return next;
			return null;
		}
		pause_event(next){
			if(next !== undefined) return next;
			return null;
		}
		dom_name(){
			return "video";
		}
		playing(next){
			if(next !== undefined) return next;
			return false;
		}
		play(){
			return null;
		}
		pause(){
			return null;
		}
		volume(next){
			if(next !== undefined) return next;
			return 0;
		}
		time(next){
			if(next !== undefined) return next;
			return 0;
		}
		duration(){
			return 0;
		}
		attr(){
			return {
				"src": (this.uri()), 
				"controls": (this.controls()), 
				"autoplay": (this.autoplay()), 
				"playsinline": (this.inline()), 
				"loop": (this.loop()), 
				"muted": (this.muted()), 
				"poster": (this.poster())
			};
		}
		field(){
			return {"srcObject": (this.stream())};
		}
		event(){
			return {
				"volumechange": (next) => (this.revolume(next)), 
				"timeupdate": (next) => (this.retime(next)), 
				"durationchange": (next) => (this.redurate(next)), 
				"playing": (next) => (this.playing_event(next)), 
				"play": (next) => (this.play_event(next)), 
				"pause": (next) => (this.pause_event(next))
			};
		}
	};
	($mol_mem(($.$mol_video_player.prototype), "revolume"));
	($mol_mem(($.$mol_video_player.prototype), "retime"));
	($mol_mem(($.$mol_video_player.prototype), "redurate"));
	($mol_mem(($.$mol_video_player.prototype), "playing_event"));
	($mol_mem(($.$mol_video_player.prototype), "play_event"));
	($mol_mem(($.$mol_video_player.prototype), "pause_event"));
	($mol_mem(($.$mol_video_player.prototype), "playing"));
	($mol_mem(($.$mol_video_player.prototype), "volume"));
	($mol_mem(($.$mol_video_player.prototype), "time"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_video_player extends $.$mol_video_player {
            dom_node() {
                return super.dom_node();
            }
            volume(next) {
                this.revolume();
                if (next === undefined) {
                    return this.dom_node().volume;
                }
                else {
                    return this.dom_node().volume = Math.max(0, Math.min(next, 1));
                }
            }
            time(next) {
                this.retime();
                if (next === undefined) {
                    return this.dom_node().currentTime;
                }
                else {
                    return this.dom_node().currentTime = Math.max(0, Math.min(next, this.duration()));
                }
            }
            duration() {
                this.redurate();
                return this.dom_node().duration;
            }
            playing(next) {
                const node = this.dom_node();
                this.playing_event();
                this.play_event();
                if (next === undefined)
                    return !node.paused;
                if (next && node.paused)
                    $mol_wire_sync(node).play();
                if (!next && !node.paused)
                    node.pause();
                return !node.paused;
            }
            play() {
                this.playing(true);
            }
            pause() {
                this.playing(false);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_video_player.prototype, "volume", null);
        __decorate([
            $mol_mem
        ], $mol_video_player.prototype, "time", null);
        __decorate([
            $mol_mem
        ], $mol_video_player.prototype, "duration", null);
        __decorate([
            $mol_mem
        ], $mol_video_player.prototype, "playing", null);
        $$.$mol_video_player = $mol_video_player;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/video/player/player.view.css", "[mol_video_player] {\n\tflex: 1 1 auto;\n}\n");
})($ || ($ = {}));

;
	($.$mol_video_camera) = class $mol_video_camera extends ($.$mol_video_player) {
		transform(){
			return "";
		}
		facing(){
			return "user";
		}
		aspect(){
			return 1;
		}
		size(){
			return 720;
		}
		width(){
			return (this.size());
		}
		height(){
			return (this.size());
		}
		brightness(){
			return 128;
		}
		sharpness(){
			return 2;
		}
		contrast(){
			return 32;
		}
		saturation(){
			return 64;
		}
		temperature(){
			return 4000;
		}
		torch(){
			return false;
		}
		controls(){
			return false;
		}
		style(){
			return {"transform": (this.transform())};
		}
		video_constraints(){
			return {
				"facingMode": (this.facing()), 
				"aspectRatio": (this.aspect()), 
				"width": {"ideal": (this.width())}, 
				"height": {"ideal": (this.height())}
			};
		}
		video_settings(){
			return {
				"brightness": (this.brightness()), 
				"sharpness": (this.sharpness()), 
				"contrast": (this.contrast()), 
				"saturation": (this.saturation()), 
				"advanced": [{"colorTemperature": (this.temperature())}, {"torch": (this.torch())}]
			};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_video_camera extends $.$mol_video_camera {
            stream_raw() {
                const stream = $mol_wire_sync(navigator.mediaDevices).getUserMedia({
                    video: this.video_constraints(),
                });
                return Object.assign(stream, {
                    destructor: () => stream.getTracks().forEach(track => track.stop())
                });
            }
            stream() {
                const settings = this.video_settings();
                const stream = this.stream_raw();
                for (const track of stream.getVideoTracks()) {
                    for (const param in settings) {
                        if (param === 'advanced') {
                            for (const constraint of settings.advanced) {
                                try {
                                    track.applyConstraints({ advanced: [constraint] });
                                }
                                catch (error) {
                                    $mol_fail_log(error);
                                }
                            }
                        }
                        else if (settings[param] !== null) {
                            try {
                                track.applyConstraints({ [param]: settings[param] });
                            }
                            catch (error) {
                                $mol_fail_log(error);
                            }
                        }
                    }
                }
                return stream;
            }
            dom_node_actual() {
                return super.dom_node_actual();
            }
            transform() {
                return this.facing() === 'user' ? 'scaleX(-1)' : '';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_video_camera.prototype, "stream_raw", null);
        __decorate([
            $mol_mem
        ], $mol_video_camera.prototype, "stream", null);
        $$.$mol_video_camera = $mol_video_camera;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_labeler) = class $mol_labeler extends ($.$mol_list) {
		label(){
			return [(this.title())];
		}
		Label(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (32);
			(obj.sub) = () => ((this.label()));
			return obj;
		}
		content(){
			return [];
		}
		Content(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (24);
			(obj.sub) = () => ((this.content()));
			return obj;
		}
		rows(){
			return [(this.Label()), (this.Content())];
		}
	};
	($mol_mem(($.$mol_labeler.prototype), "Label"));
	($mol_mem(($.$mol_labeler.prototype), "Content"));


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem 0;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_form_field) = class $mol_form_field extends ($.$mol_labeler) {
		name(){
			return "";
		}
		bid(){
			return "";
		}
		Bid(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.bid())]);
			return obj;
		}
		control(){
			return null;
		}
		bids(){
			return [];
		}
		label(){
			return [(this.name()), (this.Bid())];
		}
		content(){
			return [(this.control())];
		}
	};
	($mol_mem(($.$mol_form_field.prototype), "Bid"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form_field extends $.$mol_form_field {
            bid() {
                return this.bids().filter(Boolean)[0] ?? '';
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form_field.prototype, "bid", null);
        $$.$mol_form_field = $mol_form_field;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/field/field.view.css", "[mol_form_field] {\n\talign-items: stretch;\n}\n\n[mol_form_field_bid] {\n\tcolor: var(--mol_theme_focus);\n\tdisplay: inline-block;\n\ttext-shadow: 0 0;\n}\n\n[mol_form_field_content] {\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));

;
	($.$mol_check_list) = class $mol_check_list extends ($.$mol_view) {
		option_checked(id, next){
			if(next !== undefined) return next;
			return false;
		}
		option_title(id){
			return "";
		}
		option_label(id){
			return [(this.option_title(id))];
		}
		enabled(){
			return true;
		}
		option_enabled(id){
			return (this.enabled());
		}
		option_hint(id){
			return "";
		}
		items(){
			return [];
		}
		dictionary(){
			return {};
		}
		Option(id){
			const obj = new this.$.$mol_check();
			(obj.checked) = (next) => ((this.option_checked(id, next)));
			(obj.label) = () => ((this.option_label(id)));
			(obj.enabled) = () => ((this.option_enabled(id)));
			(obj.hint) = () => ((this.option_hint(id)));
			(obj.minimal_height) = () => (24);
			return obj;
		}
		options(){
			return {};
		}
		keys(){
			return [];
		}
		sub(){
			return (this.items());
		}
	};
	($mol_mem_key(($.$mol_check_list.prototype), "option_checked"));
	($mol_mem_key(($.$mol_check_list.prototype), "Option"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            dictionary(next) {
                return next ?? {};
            }
            option_checked(id, next) {
                const prev = this.dictionary();
                if (next === undefined)
                    return prev[id] ?? null;
                const next_rec = { ...prev, [id]: next };
                if (next === null)
                    delete next_rec[id];
                return this.dictionary(next_rec)[id] ?? null;
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key] || key;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"]) {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option]:where([mol_check_checked=\"true\"][disabled]) {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
	($.$mol_switch) = class $mol_switch extends ($.$mol_check_list) {
		value(next){
			if(next !== undefined) return next;
			return "";
		}
	};
	($mol_mem(($.$mol_switch.prototype), "value"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_row) = class $mol_row extends ($.$mol_view) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/row/row.view.css", "[mol_row] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\talign-content: flex-start;\n\tjustify-content: flex-start;\n\tpadding: var(--mol_gap_block);\n\tgap: var(--mol_gap_block);\n\tflex: 0 0 auto;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n}\n\n[mol_row] > * {\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_form) = class $mol_form extends ($.$mol_list) {
		keydown(next){
			if(next !== undefined) return next;
			return null;
		}
		form_fields(){
			return [];
		}
		body(){
			return (this.form_fields());
		}
		Body(){
			const obj = new this.$.$mol_list();
			(obj.sub) = () => ((this.body()));
			return obj;
		}
		buttons(){
			return [];
		}
		foot(){
			return (this.buttons());
		}
		Foot(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ((this.foot()));
			return obj;
		}
		submit_allowed(){
			return true;
		}
		submit_blocked(){
			return false;
		}
		event(){
			return {...(super.event()), "keydown": (next) => (this.keydown(next))};
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		rows(){
			return [(this.Body()), (this.Foot())];
		}
	};
	($mol_mem(($.$mol_form.prototype), "keydown"));
	($mol_mem(($.$mol_form.prototype), "Body"));
	($mol_mem(($.$mol_form.prototype), "Foot"));
	($mol_mem(($.$mol_form.prototype), "submit"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_form extends $.$mol_form {
            form_fields() {
                return [...this.view_find(view => view instanceof $mol_form_field)]
                    .map(path => path[path.length - 1]);
            }
            submit_allowed() {
                return this.form_fields().every(field => !field.bid());
            }
            submit_blocked() {
                return !this.submit_allowed();
            }
            keydown(next) {
                if (next.ctrlKey && next.keyCode === $mol_keyboard_code.enter && !this.submit_blocked())
                    this.submit(event);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "form_fields", null);
        __decorate([
            $mol_mem
        ], $mol_form.prototype, "submit_allowed", null);
        $$.$mol_form = $mol_form;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/form.view.css", "[mol_form] {\r\n\tgap: var(--mol_gap_block);\r\n}\r\n\r\n[mol_form_body] {\r\n\tgap: var(--mol_gap_block);\r\n}");
})($ || ($ = {}));

;
	($.$mol_form_group) = class $mol_form_group extends ($.$mol_view) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/form/group/group.view.css", "[mol_form_group] {\n\tflex-wrap: wrap;\n\tgap: var(--mol_gap_block);\n}\n\n[mol_form_group] > * {\n\tflex: 1 1 18rem;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$hyoo_match_univer) = class $hyoo_match_univer extends ($.$mol_select) {
		options(){
			return [
				"Академия тыла", 
				"Архи Строй", 
				"Бонч-Бруевича", 
				"Вагановка", 
				"Ветеринарный", 
				"Воен Мед", 
				"Воен Мор", 
				"Военмех", 
				"ГИКиТ", 
				"ГУАП", 
				"Герцена", 
				"Гидромет", 
				"Горный", 
				"Гос Пед Мед", 
				"Граж авиа", 
				"Духовная академия", 
				"ИТМО", 
				"Консерватория", 
				"Корабелка", 
				"Кулёк", 
				"ЛЭТИ", 
				"Лесгафта", 
				"Лесопилка", 
				"МБИ", 
				"МВД", 
				"МЧС", 
				"Макаровка", 
				"Мечникова", 
				"Михайловка", 
				"Можайка", 
				"Муха", 
				"Пед Мед", 
				"Первый мед", 
				"Политех", 
				"Профсоюзов", 
				"Путей сообщения", 
				"РХГА", 
				"Репина", 
				"СПбГУ", 
				"Связи", 
				"Театралка", 
				"Текстильный", 
				"Техноложка", 
				"Финэк", 
				"Фрейда", 
				"Хим-Фарма", 
				"Христиански"
			];
		}
	};


;
"use strict";

;
	($.$mol_icon_plus) = class $mol_icon_plus extends ($.$mol_icon) {
		path(){
			return "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
		}
	};


;
"use strict";

;
	($.$mol_select_list) = class $mol_select_list extends ($.$mol_view) {
		Badges(){
			return [];
		}
		badge_title(id){
			return "badge";
		}
		remove(id, next){
			if(next !== undefined) return next;
			return null;
		}
		badge_hint(){
			return (this.$.$mol_locale.text("$mol_select_list_badge_hint"));
		}
		enabled(){
			return true;
		}
		drop_enabled(){
			return (this.enabled());
		}
		event_select(id, next){
			if(next !== undefined) return next;
			return null;
		}
		align_hor(){
			return "right";
		}
		options(){
			return [];
		}
		options_pickable(){
			return (this.options());
		}
		pick(next){
			if(next !== undefined) return next;
			return "";
		}
		option_title(id){
			return "";
		}
		pick_enabled(){
			return (this.enabled());
		}
		pick_hint(){
			return (this.$.$mol_locale.text("$mol_select_list_pick_hint"));
		}
		filter_pattern(next){
			return (this.Pick().filter_pattern(next));
		}
		Pick_icon(){
			const obj = new this.$.$mol_icon_plus();
			return obj;
		}
		Pick(){
			const obj = new this.$.$mol_select();
			(obj.event_select) = (id, next) => ((this.event_select(id, next)));
			(obj.align_hor) = () => ((this.align_hor()));
			(obj.options) = () => ((this.options_pickable()));
			(obj.value) = (next) => ((this.pick(next)));
			(obj.option_label) = (id) => ((this.option_title(id)));
			(obj.trigger_enabled) = () => ((this.pick_enabled()));
			(obj.hint) = () => ((this.pick_hint()));
			(obj.Trigger_icon) = () => ((this.Pick_icon()));
			return obj;
		}
		value(next){
			if(next !== undefined) return next;
			return [];
		}
		dictionary(){
			return {};
		}
		badges_list(){
			return (this.Badges());
		}
		Badge(id){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.badge_title(id)));
			(obj.click) = (next) => ((this.remove(id, next)));
			(obj.hint) = () => ((this.badge_hint()));
			(obj.enabled) = () => ((this.drop_enabled()));
			return obj;
		}
		sub(){
			return [(this.Pick()), ...(this.badges_list())];
		}
	};
	($mol_mem_key(($.$mol_select_list.prototype), "remove"));
	($mol_mem_key(($.$mol_select_list.prototype), "event_select"));
	($mol_mem(($.$mol_select_list.prototype), "pick"));
	($mol_mem(($.$mol_select_list.prototype), "Pick_icon"));
	($mol_mem(($.$mol_select_list.prototype), "Pick"));
	($mol_mem(($.$mol_select_list.prototype), "value"));
	($mol_mem_key(($.$mol_select_list.prototype), "Badge"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select_list extends $.$mol_select_list {
            value(val) {
                return super.value(val);
            }
            pick(key) {
                if (!key)
                    return '';
                this.value([...this.value(), key]);
                return '';
            }
            event_select(id, event) {
                event?.preventDefault();
                this.pick(id);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_pickable() {
                if (!this.enabled())
                    return [];
                const exists = new Set(this.value());
                return this.options().filter(key => !exists.has(key));
            }
            option_title(key) {
                const value = this.dictionary()[key];
                return value == null ? key : value;
            }
            badge_title(key) {
                return this.option_title(key);
            }
            pick_enabled() {
                return this.options_pickable().length > 0;
            }
            Badges() {
                return this.value()
                    .map(id => this.Badge(id))
                    .reverse();
            }
            title() {
                return this.value().map(key => this.option_title(key)).join(' + ');
            }
            remove(key) {
                this.value(this.value().filter(id => id !== key));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "pick", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "options_pickable", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "pick_enabled", null);
        __decorate([
            $mol_mem
        ], $mol_select_list.prototype, "title", null);
        __decorate([
            $mol_action
        ], $mol_select_list.prototype, "remove", null);
        $$.$mol_select_list = $mol_select_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($mol_select_list, {
            flex: {
                wrap: 'wrap',
                shrink: 1,
                grow: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$hyoo_match_places) = class $hyoo_match_places extends ($.$mol_select_list) {
		dictionary(){
			return {
				"RU-SPE": "Санкт-Петербург", 
				"RU-MOW": "Москва", 
				"UA-40": "Севастополь", 
				"RU-AMU": "Амурская область", 
				"RU-ARK": "Архангельская область", 
				"RU-AST": "Астраханская область", 
				"RU-BEL": "Белгородская область", 
				"RU-BRY": "Брянская область", 
				"RU-VLA": "Владимирская область", 
				"RU-VGG": "Волгоградская область", 
				"RU-VLG": "Вологодская область", 
				"RU-VOR": "Воронежская область", 
				"RU-IVA": "Ивановская область", 
				"RU-IRK": "Иркутская область", 
				"RU-KGD": "Калининградская область", 
				"RU-KLU": "Калужская область", 
				"RU-KEM": "Кемеровская область", 
				"RU-KIR": "Кировская область", 
				"RU-KOS": "Костромская область", 
				"RU-KGN": "Курганская область", 
				"RU-KRS": "Курская область", 
				"RU-LEN": "Ленинградская область", 
				"RU-LIP": "Липецкая область", 
				"RU-MAG": "Магаданская область", 
				"RU-MOS": "Московская область", 
				"RU-MUR": "Мурманская область", 
				"RU-NIZ": "Нижегородская область", 
				"RU-NGR": "Новгородская область", 
				"RU-NVS": "Новосибирская область", 
				"RU-OMS": "Омская область", 
				"RU-ORE": "Оренбургская область", 
				"RU-ORL": "Орловская область", 
				"RU-PNZ": "Пензенская область", 
				"RU-PSK": "Псковская область", 
				"RU-ROS": "Ростовская область", 
				"RU-RYA": "Рязанская область", 
				"RU-SAM": "Самарская область", 
				"RU-SAR": "Саратовская область", 
				"RU-SAK": "Сахалинская область", 
				"RU-SVE": "Свердловская область", 
				"RU-SMO": "Смоленская область", 
				"RU-TAM": "Тамбовская область", 
				"RU-TVE": "Тверская область", 
				"RU-TOM": "Томская область", 
				"RU-TUL": "Тульская область", 
				"RU-TYU": "Тюменская область", 
				"RU-ULY": "Ульяновская область", 
				"RU-CHE": "Челябинская область", 
				"RU-YAR": "Ярославская область", 
				"RU-AD": "Адыгея ", 
				"RU-BA": "Башкортостан", 
				"RU-BU": "Бурятия", 
				"RU-DA": "Дагестан", 
				"RU-IN": "Ингушетия", 
				"RU-KB": "Кабардино-Балкария", 
				"RU-KL": "Калмыкия", 
				"RU-KC": "Карачаево-Черкесия", 
				"RU-KR": "Карелия", 
				"RU-ME": "Марий Эл", 
				"RU-MO": "Мордовия", 
				"RU-AL": "Республика Алтай", 
				"RU-KO": "Республика Коми", 
				"RU-SA": "Якутия", 
				"RU-SE": "Северная Осетия", 
				"RU-TA": "Татарстан", 
				"RU-TY": "Тыва", 
				"RU-UD": "Удмуртия", 
				"RU-KK": "Хакасия", 
				"RU-CE": "Чечня", 
				"RU-CU": "Чувашия", 
				"RU-ALT": "Алтайский край ", 
				"RU-ZAB": "Забайкальский край", 
				"RU-KAM": "Камчатский край", 
				"RU-KDA": "Краснодарский край", 
				"RU-KYA": "Красноярский край", 
				"RU-PER": "Пермский край", 
				"RU-PRI": "Приморский край", 
				"RU-STA": "Ставропольский край", 
				"RU-KHA": "Хабаровский край", 
				"RU-NEN": "Ненецкий АО", 
				"RU-KHM": "Ханты-Мансийский АО", 
				"RU-CHU": "Чукотский АО", 
				"RU-YAN": "Ямало-Ненецкий АО", 
				"RU-YEV": "Еврейская АО", 
				"UA-43": "Крым", 
				"RU": "Россия", 
				"By": "Беларусь", 
				"UA": "Украина", 
				"KG": "Киргизия", 
				"KZ": "Казахстан", 
				"MD": "Молдавия", 
				"RO": "Румыния", 
				"TJ": "Таджикистан", 
				"UZ": "Узбекистан", 
				"IL": "Израиль", 
				"US": "США", 
				"AU": "Австралия", 
				"AM": "Армения", 
				"CN": "Китай", 
				"PL": "Польша", 
				"SK": "Словакия", 
				"FI": "Финляндия", 
				"HR": "Хорватия", 
				"CZ": "Чехия", 
				"LV": "Латвия", 
				"GE": "Грузия", 
				"europa": "Европа", 
				"asia": "Азия", 
				"africa": "Африка", 
				"aerica-south": "Южная Америка", 
				"america-nord": "Северная Америка", 
				"antarctica": "Антарктида", 
				"oceania": "Oceania", 
				"earth": "Земля", 
				"moon": "Луна", 
				"mars": "Марс"
			};
		}
	};


;
"use strict";

;
	($.$mol_textarea) = class $mol_textarea extends ($.$mol_stack) {
		clickable(next){
			if(next !== undefined) return next;
			return false;
		}
		sidebar_showed(){
			return false;
		}
		press(next){
			if(next !== undefined) return next;
			return null;
		}
		hover(next){
			if(next !== undefined) return next;
			return null;
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		hint(){
			return " ";
		}
		enabled(){
			return true;
		}
		spellcheck(){
			return true;
		}
		length_max(){
			return +Infinity;
		}
		selection(next){
			if(next !== undefined) return next;
			return [];
		}
		bring(){
			return (this.Edit().bring());
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		submit_with_ctrl(){
			return true;
		}
		Edit(){
			const obj = new this.$.$mol_textarea_edit();
			(obj.value) = (next) => ((this.value(next)));
			(obj.hint) = () => ((this.hint()));
			(obj.enabled) = () => ((this.enabled()));
			(obj.spellcheck) = () => ((this.spellcheck()));
			(obj.length_max) = () => ((this.length_max()));
			(obj.selection) = (next) => ((this.selection(next)));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.submit_with_ctrl) = () => ((this.submit_with_ctrl()));
			return obj;
		}
		row_numb(id){
			return 0;
		}
		highlight(){
			return "";
		}
		syntax(){
			const obj = new this.$.$mol_syntax2();
			return obj;
		}
		View(){
			const obj = new this.$.$mol_text_code();
			(obj.text) = () => ((this.value()));
			(obj.render_visible_only) = () => (false);
			(obj.row_numb) = (id) => ((this.row_numb(id)));
			(obj.sidebar_showed) = () => ((this.sidebar_showed()));
			(obj.highlight) = () => ((this.highlight()));
			(obj.syntax) = () => ((this.syntax()));
			return obj;
		}
		attr(){
			return {
				...(super.attr()), 
				"mol_textarea_clickable": (this.clickable()), 
				"mol_textarea_sidebar_showed": (this.sidebar_showed())
			};
		}
		event(){
			return {"keydown": (next) => (this.press(next)), "pointermove": (next) => (this.hover(next))};
		}
		sub(){
			return [(this.Edit()), (this.View())];
		}
		symbols_alt(){
			return {
				"comma": "<", 
				"period": ">", 
				"dash": "−", 
				"equals": "≈", 
				"graveAccent": "́", 
				"forwardSlash": "÷", 
				"E": "€", 
				"V": "✔", 
				"X": "×", 
				"C": "©", 
				"P": "§", 
				"H": "₽", 
				"key0": "°", 
				"key8": "•", 
				"key2": "@", 
				"key3": "#", 
				"key4": "$", 
				"key6": "^", 
				"key7": "&", 
				"bracketOpen": "[", 
				"bracketClose": "]", 
				"slashBack": "|"
			};
		}
		symbols_alt_ctrl(){
			return {"space": " "};
		}
		symbols_alt_shift(){
			return {
				"V": "✅", 
				"X": "❌", 
				"O": "⭕", 
				"key1": "❗", 
				"key4": "💲", 
				"key7": "❓", 
				"comma": "«", 
				"period": "»", 
				"semicolon": "“", 
				"quoteSingle": "”", 
				"dash": "—", 
				"equals": "≠", 
				"graveAccent": "̱", 
				"bracketOpen": "{", 
				"bracketClose": "}"
			};
		}
	};
	($mol_mem(($.$mol_textarea.prototype), "clickable"));
	($mol_mem(($.$mol_textarea.prototype), "press"));
	($mol_mem(($.$mol_textarea.prototype), "hover"));
	($mol_mem(($.$mol_textarea.prototype), "value"));
	($mol_mem(($.$mol_textarea.prototype), "selection"));
	($mol_mem(($.$mol_textarea.prototype), "submit"));
	($mol_mem(($.$mol_textarea.prototype), "Edit"));
	($mol_mem(($.$mol_textarea.prototype), "syntax"));
	($mol_mem(($.$mol_textarea.prototype), "View"));
	($.$mol_textarea_edit) = class $mol_textarea_edit extends ($.$mol_string) {
		dom_name(){
			return "textarea";
		}
		enter(){
			return "enter";
		}
		field(){
			return {...(super.field()), "scrollTop": 0};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_textarea extends $.$mol_textarea {
            indent_inc() {
                let text = this.value();
                let [from, to] = this.selection();
                const rows = text.split('\n');
                let start = 0;
                for (let i = 0; i < rows.length; ++i) {
                    let end = start + rows[i].length;
                    if (end >= from && start <= to) {
                        if (to === from || start !== to) {
                            rows[i] = '\t' + rows[i];
                            to += 1;
                            end += 1;
                        }
                    }
                    start = end + 1;
                }
                this.value(rows.join('\n'));
                this.selection([from + 1, to]);
            }
            indent_dec() {
                let text = this.value();
                let [from, to] = this.selection();
                const rows = text.split('\n');
                let start = 0;
                for (let i = 0; i < rows.length; ++i) {
                    const end = start + rows[i].length;
                    if (end >= from && start <= to && rows[i].startsWith('\t')) {
                        rows[i] = rows[i].slice(1);
                        to -= 1;
                        if (start < from)
                            from -= 1;
                    }
                    start = end + 1;
                }
                this.value(rows.join('\n'));
                this.selection([from, to]);
            }
            symbol_insert(event) {
                const symbol = event.shiftKey
                    ? this.symbols_alt_shift()[$mol_keyboard_code[event.keyCode]]
                    : event.ctrlKey
                        ? this.symbols_alt_ctrl()[$mol_keyboard_code[event.keyCode]]
                        : this.symbols_alt()[$mol_keyboard_code[event.keyCode]];
                if (!symbol)
                    return;
                event.preventDefault();
                document.execCommand('insertText', false, symbol);
            }
            clickable(next) {
                if (!this.enabled())
                    return true;
                return next ?? false;
            }
            hover(event) {
                this.clickable(event.ctrlKey);
            }
            press(event) {
                if (event.altKey) {
                    this.symbol_insert(event);
                }
                else {
                    switch (event.keyCode) {
                        case !event.shiftKey && $mol_keyboard_code.tab:
                            this.indent_inc();
                            break;
                        case event.shiftKey && $mol_keyboard_code.tab:
                            this.indent_dec();
                            break;
                        default: return;
                    }
                    event.preventDefault();
                }
            }
            row_numb(index) {
                return index;
            }
            syntax() {
                return this.$.$mol_syntax2_md_code;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_textarea.prototype, "clickable", null);
        $$.$mol_textarea = $mol_textarea;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/textarea/textarea.view.css", "[mol_textarea] {\n\tflex: 1 0 auto;\n\tflex-direction: column;\n\tvertical-align: top;\n\tmin-height: max-content;\n\twhite-space: pre-wrap;\n\tword-break: break-word;\n\tborder-radius: var(--mol_gap_round);\n\tfont-family: monospace;\n\tposition: relative;\n\ttab-size: 4;\n}\n\n[mol_textarea_view] {\n\tpointer-events: none;\n\twhite-space: inherit;\n\tfont-family: inherit;\n\ttab-size: inherit;\n\tuser-select: none;\n}\n\n[mol_textarea_view_copy] {\n\tpointer-events: all;\n}\n\n[mol_textarea_clickable] > [mol_textarea_view] {\n\tpointer-events: all;\n\tuser-select: auto;\n}\n\n[mol_textarea_clickable] > [mol_textarea_edit] {\n\tuser-select: none;\n}\n\n[mol_textarea_edit] {\n\tfont-family: inherit;\n\tpadding: var(--mol_gap_text);\n\tcolor: transparent !important;\n\tcaret-color: var(--mol_theme_text);\n\tresize: none;\n\ttext-align: inherit;\n\twhite-space: inherit;\n\tborder-radius: inherit;\n\toverflow-anchor: none;\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n\ttab-size: inherit;\n}\n\n[mol_textarea_sidebar_showed] [mol_textarea_edit] {\n\tleft: 1.75rem;\n\twidth: calc( 100% - 1.75rem );\n}\n\n[mol_textarea_edit]:hover + [mol_textarea_view] {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_textarea_edit]:focus + [mol_textarea_view] {\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));

;
	($.$hyoo_match_single_settings) = class $hyoo_match_single_settings extends ($.$mol_page) {
		ready(){
			return (this.single().ready());
		}
		photo_fresh(){
			return (this.single().photo_fresh());
		}
		name(next){
			return (this.single().title(next));
		}
		greet(next){
			return (this.single().greet(next));
		}
		contacts(next){
			return (this.single().contacts(next));
		}
		places(next){
			return (this.single().places(next));
		}
		univer(next){
			return (this.single().univer(next));
		}
		sex_self(next){
			return (this.single().sex_self(next));
		}
		age_self(next){
			return (this.single().age_self(next));
		}
		sex_pref(id, next){
			return (this.single().sex_pref(id, next));
		}
		sex_pref_all(){
			return (this.single().sex_pref_all());
		}
		age_pref(id, next){
			return (this.single().age_pref(id, next));
		}
		age_pref_all(){
			return (this.single().age_pref_all());
		}
		Invisible(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ("🙈 Не виден");
			return obj;
		}
		Visible(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ("👀 Виден всем");
			return obj;
		}
		Incoplete(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ("❌ Профиль недозаполнен");
			return obj;
		}
		Next(){
			const obj = new this.$.$mol_link();
			(obj.title) = () => ("✅ Смотреть других");
			(obj.arg) = () => ({"": "look"});
			return obj;
		}
		shot_bid(){
			return "Нужно свежее";
		}
		live(next){
			if(next !== undefined) return next;
			return true;
		}
		photo(){
			return "";
		}
		Photo(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.photo()));
			return obj;
		}
		video(){
			return (this.Camera().dom_node_actual());
		}
		Camera(){
			const obj = new this.$.$mol_video_camera();
			(obj.aspect) = () => (1);
			return obj;
		}
		Shot_hint(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ("Жми чтобы сфотаться");
			return obj;
		}
		shot_content(){
			return [
				(this.Photo()), 
				(this.Camera()), 
				(this.Shot_hint())
			];
		}
		Shot(){
			const obj = new this.$.$mol_check();
			(obj.checked) = (next) => ((this.live(next)));
			(obj.sub) = () => ((this.shot_content()));
			return obj;
		}
		Shot_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Сегодняшнее фото");
			(obj.bids) = () => ([(this.shot_bid())]);
			(obj.Content) = () => ((this.Shot()));
			return obj;
		}
		Name(){
			const obj = new this.$.$mol_string();
			(obj.value) = (next) => ((this.name(next)));
			return obj;
		}
		Name_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Имя");
			(obj.bids) = () => ([(this.bid_required("name"))]);
			(obj.Content) = () => ((this.Name()));
			return obj;
		}
		Age_self(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.age_self(next)));
			(obj.options) = () => ({
				"young": "Молодых", 
				"adult": "Взрослых", 
				"mature": "Зрелых"
			});
			return obj;
		}
		Sex_self(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.sex_self(next)));
			(obj.options) = () => ({"female": "Женщин", "male": "Мужчин"});
			return obj;
		}
		Self_controls(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Age_self()), (this.Sex_self())]);
			return obj;
		}
		Self(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Я из этих ...");
			(obj.bids) = () => ([(this.bid_required("age_self")), (this.bid_required("sex_self"))]);
			(obj.Content) = () => ((this.Self_controls()));
			return obj;
		}
		Age_pref(){
			const obj = new this.$.$mol_check_list();
			(obj.option_checked) = (id, next) => ((this.age_pref(id, next)));
			(obj.options) = () => ({
				"young": "Молодые", 
				"adult": "Взрослые", 
				"mature": "Зрелые"
			});
			return obj;
		}
		Sex_pref(){
			const obj = new this.$.$mol_check_list();
			(obj.option_checked) = (id, next) => ((this.sex_pref(id, next)));
			(obj.options) = () => ({"female": "Женщины", "male": "Мужчины"});
			return obj;
		}
		Pref_controls(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Age_pref()), (this.Sex_pref())]);
			return obj;
		}
		Pref(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$hyoo_match_single_settings_Pref_name")));
			(obj.bids) = () => ([(this.bid_one("age_pref_all")), (this.bid_one("sex_pref_all"))]);
			(obj.Content) = () => ((this.Pref_controls()));
			return obj;
		}
		Tags(){
			const obj = new this.$.$mol_form_group();
			(obj.sub) = () => ([(this.Self()), (this.Pref())]);
			return obj;
		}
		Univer(){
			const obj = new this.$.$hyoo_match_univer();
			(obj.value) = (next) => ((this.univer(next)));
			return obj;
		}
		Univer_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Универ");
			(obj.bids) = () => ([]);
			(obj.Content) = () => ((this.Univer()));
			return obj;
		}
		places_enabled(){
			return true;
		}
		Places(){
			const obj = new this.$.$hyoo_match_places();
			(obj.value) = (next) => ((this.places(next)));
			(obj.pick_enabled) = () => ((this.places_enabled()));
			return obj;
		}
		Places_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Регионы");
			(obj.bids) = () => ([(this.bid_one("places"))]);
			(obj.Content) = () => ((this.Places()));
			return obj;
		}
		Location(){
			const obj = new this.$.$mol_form_group();
			(obj.sub) = () => ([(this.Univer_field()), (this.Places_field())]);
			return obj;
		}
		Greet(){
			const obj = new this.$.$mol_textarea();
			(obj.hint) = () => ("заинтересуйте вашу пару");
			(obj.value) = (next) => ((this.greet(next)));
			return obj;
		}
		Greet_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Приветствие");
			(obj.bids) = () => ([(this.bid_required("greet"))]);
			(obj.Content) = () => ((this.Greet()));
			return obj;
		}
		Contacts_hint(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ("Для взаимных");
			return obj;
		}
		Contacts(){
			const obj = new this.$.$mol_textarea();
			(obj.hint) = () => ("как с вами связаться");
			(obj.value) = (next) => ((this.contacts(next)));
			return obj;
		}
		Contacts_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ("Контакты");
			(obj.bids) = () => ([(this.bid_required("contacts"))]);
			(obj.Content) = () => ((this.Contacts()));
			return obj;
		}
		title(){
			return "Профиль";
		}
		single(){
			const obj = new this.$.$hyoo_match_single();
			return obj;
		}
		bid_required(id){
			return "Обязательно";
		}
		bid_one(id){
			return "Хотябы один";
		}
		tools(){
			return [(this.Invisible()), (this.Visible())];
		}
		foot(){
			return [(this.Incoplete()), (this.Next())];
		}
		body(){
			return [
				(this.Shot_field()), 
				(this.Name_field()), 
				(this.Tags()), 
				(this.Location()), 
				(this.Greet_field()), 
				(this.Contacts_hint()), 
				(this.Contacts_field())
			];
		}
	};
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Invisible"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Visible"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Incoplete"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Next"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "live"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Photo"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Camera"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Shot_hint"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Shot"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Shot_field"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Name"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Name_field"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Age_self"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Sex_self"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Self_controls"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Self"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Age_pref"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Sex_pref"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Pref_controls"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Pref"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Tags"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Univer"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Univer_field"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Places"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Places_field"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Location"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Greet"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Greet_field"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Contacts_hint"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Contacts"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "Contacts_field"));
	($mol_mem(($.$hyoo_match_single_settings.prototype), "single"));


;
"use strict";
var $;
(function ($) {
    class $mol_picture extends $mol_object2 {
        canvas;
        constructor(canvas) {
            super();
            this.canvas = canvas;
        }
        get context() {
            return this.canvas.getContext('2d');
        }
        get bitmap() {
            return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        }
        static fit(image, width = Number.POSITIVE_INFINITY, height = width) {
            if (image instanceof Blob)
                image = $mol_wire_sync(URL).createObjectURL(image);
            if (typeof image === 'string')
                image = $mol_wire_sync(this).load(image);
            let [w, h] = this.sizes(image);
            if (w > width) {
                h *= width / w;
                w = width;
            }
            if (h > height) {
                w *= height / h;
                h = height;
            }
            return this.make(image, w, h);
        }
        static make(image, width, height = width) {
            const canvas = $mol_dom_context.document.createElement('canvas');
            Object.assign(canvas, { width, height });
            const context = canvas.getContext('2d');
            context.drawImage(image, 0, 0, width, height);
            return new this(canvas);
        }
        static sizes(image) {
            if (image instanceof HTMLVideoElement)
                return [
                    image.videoWidth,
                    image.videoHeight,
                ];
            if (image instanceof SVGImageElement)
                return [
                    image.width.baseVal.value,
                    image.height.baseVal.value,
                ];
            return [
                image.width,
                image.height,
            ];
        }
        static async load(uri) {
            const image = new Image;
            image.src = uri;
            await new Promise((onload, onerror) => Object.assign(image, { onload, onerror }));
            return image;
        }
        format(type, quality = .9) {
            return new Promise(done => this.canvas.toBlob(done, type, quality));
        }
    }
    __decorate([
        $mol_action
    ], $mol_picture.prototype, "format", null);
    __decorate([
        $mol_action
    ], $mol_picture, "fit", null);
    $.$mol_picture = $mol_picture;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_match_single_settings extends $.$hyoo_match_single_settings {
            photo() {
                return URL.createObjectURL(this.single().photo());
            }
            shot_bid() {
                if (this.photo_fresh())
                    return '';
                return super.shot_bid();
            }
            live(next) {
                if (next === undefined) {
                    const photo = this.single().photo();
                    return !(photo && photo.size);
                }
                if (next)
                    return true;
                const pic = $mol_picture.fit(this.video(), 720);
                const blob = pic.format('image/jpeg');
                this.single().photo(blob);
                return false;
            }
            shot_content() {
                return this.live()
                    ? [this.Camera(), this.Shot_hint()]
                    : [this.Photo(), this.Shot_hint()];
            }
            tools() {
                return [
                    ...this.ready() ? [this.Visible()] : [this.Invisible()],
                ];
            }
            Incoplete() {
                if (this.ready())
                    return null;
                return super.Incoplete();
            }
            Next() {
                if (!this.ready())
                    return null;
                return super.Next();
            }
            bid_required(name) {
                if (this[name]())
                    return '';
                return super.bid_required(name);
            }
            bid_one(name) {
                if (this[name]().length)
                    return '';
                return super.bid_one(name);
            }
            places_enabled() {
                return this.places().length < 4;
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_match_single_settings.prototype, "photo", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_single_settings.prototype, "live", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_single_settings.prototype, "shot_content", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_single_settings.prototype, "tools", null);
        $$.$hyoo_match_single_settings = $hyoo_match_single_settings;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($hyoo_match_single_settings, {
            Tools: {
                flex: {
                    grow: 0,
                },
            },
            Body_content: {
                gap: $mol_gap.block,
            },
            Invisible: {
                padding: $mol_gap.text,
            },
            Visible: {
                padding: $mol_gap.text,
            },
            Incoplete: {
                color: $mol_theme.focus,
                padding: $mol_gap.text,
            },
            Shot: {
                padding: $mol_gap.block,
                aspectRatio: 1,
            },
            Camera: {
                aspectRatio: 1,
                border: {
                    radius: $mol_gap.round,
                },
            },
            Shot_hint: {
                position: 'absolute',
                left: $mol_gap.block,
                top: $mol_gap.block,
                color: $mol_theme.text,
                padding: $mol_gap.text,
            },
            Contacts_hint: {
                padding: $mol_gap.text,
                color: $mol_theme.shade,
                margin: { bottom: `-3.25rem` },
                alignSelf: `flex-end`,
                zIndex: $mol_layer.speck,
            },
            Places: {
                flex: {
                    shrink: 0,
                    grow: 0,
                },
            },
            $mol_check_list: {
                flex: {
                    direction: 'column',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_eye) = class $mol_icon_eye extends ($.$mol_icon) {
		path(){
			return "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z";
		}
	};


;
"use strict";

;
	($.$mol_password) = class $mol_password extends ($.$mol_view) {
		hint(){
			return "";
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		submit(next){
			if(next !== undefined) return next;
			return null;
		}
		enabled(){
			return true;
		}
		Pass(){
			const obj = new this.$.$mol_string();
			(obj.type) = () => ((this.type()));
			(obj.hint) = () => ((this.hint()));
			(obj.value) = (next) => ((this.value(next)));
			(obj.submit) = (next) => ((this.submit(next)));
			(obj.enabled) = () => ((this.enabled()));
			return obj;
		}
		checked(next){
			if(next !== undefined) return next;
			return true;
		}
		Show_icon(){
			const obj = new this.$.$mol_icon_eye();
			return obj;
		}
		Show(){
			const obj = new this.$.$mol_check_icon();
			(obj.checked) = (next) => ((this.checked(next)));
			(obj.Icon) = () => ((this.Show_icon()));
			return obj;
		}
		content(){
			return [(this.Pass()), (this.Show())];
		}
		type(next){
			if(next !== undefined) return next;
			return "password";
		}
		sub(){
			return (this.content());
		}
	};
	($mol_mem(($.$mol_password.prototype), "value"));
	($mol_mem(($.$mol_password.prototype), "submit"));
	($mol_mem(($.$mol_password.prototype), "Pass"));
	($mol_mem(($.$mol_password.prototype), "checked"));
	($mol_mem(($.$mol_password.prototype), "Show_icon"));
	($mol_mem(($.$mol_password.prototype), "Show"));
	($mol_mem(($.$mol_password.prototype), "type"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_password extends $.$mol_password {
            checked(next) {
                this.type(next ? 'text' : 'password');
                return next ?? false;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_password.prototype, "checked", null);
        $$.$mol_password = $mol_password;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$hyoo_meta_safe) = class $hyoo_meta_safe extends ($.$mol_page) {
		Expot_bid(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.$.$mol_locale.text("$hyoo_meta_safe_Expot_bid_text")));
			return obj;
		}
		password_bid(){
			return "";
		}
		password(next){
			if(next !== undefined) return next;
			return "";
		}
		Password(){
			const obj = new this.$.$mol_password();
			(obj.value) = (next) => ((this.password(next)));
			return obj;
		}
		Password_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$hyoo_meta_safe_Password_field_name")));
			(obj.bids) = () => ([(this.password_bid())]);
			(obj.Content) = () => ((this.Password()));
			return obj;
		}
		recall_enabled(){
			return true;
		}
		recall(next){
			if(next !== undefined) return next;
			return "";
		}
		Recall(){
			const obj = new this.$.$mol_string();
			(obj.enabled) = () => ((this.recall_enabled()));
			(obj.value) = (next) => ((this.recall(next)));
			return obj;
		}
		Recall_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$hyoo_meta_safe_Recall_field_name")));
			(obj.Content) = () => ((this.Recall()));
			return obj;
		}
		Export_pass(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([(this.Password_field()), (this.Recall_field())]);
			return obj;
		}
		export_link(){
			return "";
		}
		Export_link(){
			const obj = new this.$.$mol_link();
			(obj.uri) = () => ((this.export_link()));
			(obj.title) = () => ((this.$.$mol_locale.text("$hyoo_meta_safe_Export_link_title")));
			return obj;
		}
		export_rows(){
			return [
				(this.Expot_bid()), 
				(this.Export_pass()), 
				(this.Export_link())
			];
		}
		Export_block(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.export_rows()));
			return obj;
		}
		Iport_descr(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.$.$mol_locale.text("$hyoo_meta_safe_Iport_descr_text")));
			return obj;
		}
		Import_pass(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([(this.Recall_field()), (this.Password_field())]);
			return obj;
		}
		import_switch(next){
			if(next !== undefined) return next;
			return null;
		}
		peer_new(){
			return "";
		}
		Peer_new(){
			const obj = new this.$.$mol_avatar();
			(obj.id) = () => ((this.peer_new()));
			return obj;
		}
		impot_switch_title(){
			return (this.$.$mol_locale.text("$hyoo_meta_safe_impot_switch_title"));
		}
		Import_switch(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.import_switch(next)));
			(obj.sub) = () => ([(this.Peer_new()), (this.impot_switch_title())]);
			return obj;
		}
		import_rows(){
			return [
				(this.Iport_descr()), 
				(this.Import_pass()), 
				(this.Import_switch())
			];
		}
		Import_block(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.import_rows()));
			return obj;
		}
		content(){
			return [(this.Export_block()), (this.Import_block())];
		}
		Content(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.content()));
			return obj;
		}
		title(){
			return (this.$.$mol_locale.text("$hyoo_meta_safe_title"));
		}
		yard(){
			const obj = new this.$.$hyoo_sync_yard();
			return obj;
		}
		bid_pass_long(){
			return (this.$.$mol_locale.text("$hyoo_meta_safe_bid_pass_long"));
		}
		key_size(){
			return 144;
		}
		attr(){
			return {...(super.attr()), "mol_theme": "$mol_theme_special"};
		}
		body(){
			return [(this.Content())];
		}
	};
	($mol_mem(($.$hyoo_meta_safe.prototype), "Expot_bid"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "password"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "Password"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "Password_field"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "recall"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "Recall"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "Recall_field"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "Export_pass"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "Export_link"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "Export_block"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "Iport_descr"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "Import_pass"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "import_switch"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "Peer_new"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "Import_switch"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "Import_block"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "Content"));
	($mol_mem(($.$hyoo_meta_safe.prototype), "yard"));


;
"use strict";
var $;
(function ($) {
    let sponge = new Uint32Array(80);
    function $mol_crypto_hash(input) {
        const data = input instanceof Uint8Array
            ? input
            : new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
        const bits = data.byteLength << 3;
        const kbits = bits >> 5;
        const kword = 0x80 << (24 - bits & 0b11111);
        const bytes = 16 + (bits + 64 >>> 9 << 4);
        const klens = bytes - 1;
        const words = new Int32Array(data.buffer, data.byteOffset, data.byteLength >> 2);
        let tail = 0;
        for (let i = words.length * 4; i < data.length; ++i) {
            tail |= data[i] << (i << 3 & 0b11000);
        }
        const hash = new Int32Array([1732584193, -271733879, -1732584194, 271733878, -1009589776]);
        for (let i = 0; i < bytes; i += 16) {
            let h0 = hash[0];
            let h1 = hash[1];
            let h2 = hash[2];
            let h3 = hash[3];
            let h4 = hash[4];
            for (let j = 0; j < 16; ++j) {
                const k = i + j;
                if (k === klens) {
                    sponge[j] = bits;
                }
                else {
                    let word = k === words.length ? tail :
                        k > words.length ? 0 :
                            words[k];
                    word = word << 24 | word << 8 & 0xFF0000 | word >>> 8 & 0xFF00 | word >>> 24 & 0xFF;
                    if (k === kbits)
                        word |= kword;
                    sponge[j] = word;
                }
                const next = ((h1 & h2 | ~h1 & h3) + 1518500249 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 16; j < 20; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 & h2 | ~h1 & h3) + 1518500249 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 20; j < 40; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 ^ h2 ^ h3) + 1859775393 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 40; j < 60; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 & h2 | h1 & h3 | h2 & h3) - 1894007588 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            for (let j = 60; j < 80; ++j) {
                const shuffle = sponge[j - 3] ^ sponge[j - 8] ^ sponge[j - 14] ^ sponge[j - 16];
                sponge[j] = shuffle << 1 | shuffle >>> 31;
                const next = ((h1 ^ h2 ^ h3) - 899497514 + h4 + (sponge[j] >>> 0) + ((h0 << 5) | (h0 >>> 27))) | 0;
                h4 = h3;
                h3 = h2;
                h2 = (h1 << 30) | (h1 >>> 2);
                h1 = h0;
                h0 = next;
            }
            hash[0] += h0;
            hash[1] += h1;
            hash[2] += h2;
            hash[3] += h3;
            hash[4] += h4;
        }
        for (let i = 0; i < 20; ++i) {
            const word = hash[i];
            hash[i] = word << 24 | word << 8 & 0xFF0000 | word >>> 8 & 0xFF00 | word >>> 24 & 0xFF;
        }
        return new Uint8Array(hash.buffer);
    }
    $.$mol_crypto_hash = $mol_crypto_hash;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_base64_ae_encode(buffer) {
        return $mol_base64_encode(buffer).replace(/\+/g, 'æ').replace(/\//g, 'Æ').replace(/=/g, '');
    }
    $.$mol_base64_ae_encode = $mol_base64_ae_encode;
    function $mol_base64_ae_decode(str) {
        return $mol_base64_decode(str.replace(/æ/g, '+').replace(/Æ/g, '/'));
    }
    $.$mol_base64_ae_decode = $mol_base64_ae_decode;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_buffer extends DataView {
        static from(array) {
            if (typeof array === 'number')
                array = new Uint8Array(array);
            if (typeof array === 'string')
                array = $mol_base64_ae_decode(array);
            return new this(array.buffer, array.byteOffset, array.byteLength);
        }
        static toString() {
            return $$.$mol_func_name(this);
        }
        getUint48(offset, LE = false) {
            if (offset % 4) {
                return this.getUint16(offset, LE) + this.getUint32(offset + 2, LE) * 2 ** 16;
            }
            else {
                return this.getUint32(offset, LE) + this.getUint16(offset + 4, LE) * 2 ** 32;
            }
        }
        setUint48(offset, value, LE = false) {
            if (offset % 4) {
                this.setUint16(offset, value & ((1 << 16) - 1), LE);
                this.setUint32(offset + 2, (value / 2 ** 16) | 0, LE);
            }
            else {
                this.setUint32(offset, value | 0, LE);
                this.setUint16(offset + 4, (value / 2 ** 32) | 0, LE);
            }
        }
        int8(offset, next) {
            if (next === undefined)
                return this.getInt8(offset);
            if (next >= -(2 ** 7) && next < 2 ** 7)
                return this.setInt8(offset, next), next;
            $mol_fail(new Error(`Wrong int8 value ${next}`));
        }
        uint8(offset, next) {
            if (next === undefined)
                return this.getUint8(offset);
            if (next >= 0 && next < 2 ** 8)
                return this.setUint8(offset, next), next;
            $mol_fail(new Error(`Wrong uint8 value ${next}`));
        }
        int16(offset, next) {
            if (next === undefined)
                return this.getInt16(offset, true);
            if (next >= -(2 ** 15) && next < 2 ** 15)
                return this.setInt16(offset, next, true), next;
            $mol_fail(new Error(`Wrong int16 value ${next}`));
        }
        uint16(offset, next) {
            if (next === undefined)
                return this.getUint16(offset, true);
            if (next >= 0 && next < 2 ** 16)
                return this.setUint16(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint16 value ${next}`));
        }
        int32(offset, next) {
            if (next === undefined)
                return this.getInt32(offset, true);
            if (next >= -(2 ** 31) && next < 2 ** 31)
                return this.setInt32(offset, next, true), next;
            $mol_fail(new Error(`Wrong int32 value ${next}`));
        }
        uint32(offset, next) {
            if (next === undefined)
                return this.getUint32(offset, true);
            if (next >= 0 && next < 2 ** 32)
                return this.setUint32(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint32 value ${next}`));
        }
        uint48(offset, next) {
            if (next === undefined)
                return this.getUint48(offset, true);
            if (next >= 0 && next < 2 ** 48)
                return this.setUint48(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint48 value ${next}`));
        }
        int64(offset, next) {
            if (next === undefined)
                return this.getBigInt64(offset, true);
            if (next >= -(2 ** 63) && next < 2 ** 63)
                return this.setBigInt64(offset, next, true), next;
            $mol_fail(new Error(`Wrong int64 value ${next}`));
        }
        uint64(offset, next) {
            if (next === undefined)
                return this.getBigUint64(offset, true);
            if (next >= 0 && next < 2 ** 64)
                return this.setBigUint64(offset, next, true), next;
            $mol_fail(new Error(`Wrong uint64 value ${next}`));
        }
        float32(offset, next) {
            if (next !== undefined)
                this.setFloat32(offset, next, true);
            return this.getFloat32(offset, true);
        }
        float64(offset, next) {
            if (next !== undefined)
                this.setFloat64(offset, next, true);
            return this.getFloat64(offset, true);
        }
        asArray() {
            return new Uint8Array(this.buffer, this.byteOffset, this.byteLength);
        }
        toString() {
            return $mol_base64_ae_encode(this.asArray());
        }
    }
    $.$mol_buffer = $mol_buffer;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_crypto_salt() {
        return $mol_crypto_native.getRandomValues(new Uint8Array(16));
    }
    $.$mol_crypto_salt = $mol_crypto_salt;
    $.$mol_crypto_salt_once = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function restack(error) {
        error = new Error(error instanceof Error ? error.message : String(error), { cause: error });
        $mol_fail_hidden(error);
    }
    class $mol_crypto_sacred extends $mol_buffer {
        static size = 16;
        static make() {
            return this.from($mol_crypto_salt());
        }
        static from(serial) {
            if (typeof serial === 'string') {
                serial = new Uint8Array([
                    ...$mol_base64_url_decode(serial),
                ]);
            }
            if (!(serial instanceof Uint8Array)) {
                serial = new Uint8Array(serial.buffer, serial.byteOffset, serial.byteLength);
            }
            ;
            serial[0] = 0;
            const sacred = super.from(serial);
            return sacred;
        }
        static async from_native(native) {
            const buf = await $mol_crypto_native.subtle.exportKey('raw', native).catch(restack);
            const sacred = this.from(new Uint8Array(buf));
            sacred._native = native;
            return sacred;
        }
        constructor(buffer, byteOffset, byteLength) {
            super(buffer, byteOffset, byteLength);
            if (this.getUint8(0) !== 0)
                $mol_fail(new Error('Buffer should starts with 0 byte'));
        }
        toString() {
            return $mol_base64_url_encode(this.asArray());
        }
        _native;
        async native() {
            return this._native ?? (this._native = await $mol_crypto_native.subtle.importKey('raw', this, {
                name: 'AES-CBC',
                length: 128,
            }, true, ['encrypt', 'decrypt']).catch(restack));
        }
        async encrypt(open, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.encrypt({
                name: 'AES-CBC',
                length: 128,
                tagLength: 32,
                iv: salt,
            }, await this.native(), open).catch(restack));
        }
        async decrypt(closed, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.decrypt({
                name: 'AES-CBC',
                length: 128,
                tagLength: 32,
                iv: salt,
            }, await this.native(), closed).catch(restack));
        }
        async close(sacred, salt) {
            const buf = new Uint8Array(sacred.buffer, sacred.byteOffset + 1, sacred.byteLength - 1);
            return this.encrypt(buf, salt);
        }
        async open(buf, salt) {
            const buf2 = new Uint8Array(16);
            buf2.set(await this.decrypt(buf, salt), 1);
            return new $mol_crypto_sacred(buf2.buffer);
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_crypto_sacred.prototype, "toString", null);
    $.$mol_crypto_sacred = $mol_crypto_sacred;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const algorithm = {
        name: 'AES-CBC',
        length: 128,
        tagLength: 32,
    };
    class $mol_crypto_secret extends Object {
        native;
        static size = 16;
        constructor(native) {
            super();
            this.native = native;
        }
        static async generate() {
            return new this(await $mol_crypto_native.subtle.generateKey(algorithm, true, ['encrypt', 'decrypt']));
        }
        static async from(serial) {
            return new this(await $mol_crypto_native.subtle.importKey('raw', serial, algorithm, true, ['encrypt', 'decrypt']));
        }
        static async pass(pass, salt) {
            return new this(await $mol_crypto_native.subtle.deriveKey({
                name: "PBKDF2",
                salt,
                iterations: 10_000,
                hash: "SHA-256",
            }, await $mol_crypto_native.subtle.importKey("raw", $mol_charset_encode(pass), "PBKDF2", false, ["deriveKey"]), algorithm, true, ['encrypt', 'decrypt']));
        }
        static async derive(private_serial, public_serial) {
            const ecdh = { name: "ECDH", namedCurve: "P-256" };
            const jwk = { crv: 'P-256', ext: true, kty: 'EC' };
            const private_key = await $mol_crypto_native.subtle.importKey('jwk', {
                ...jwk,
                key_ops: ['deriveKey'],
                x: private_serial.slice(0, 43),
                y: private_serial.slice(43, 86),
                d: private_serial.slice(86, 129),
            }, ecdh, true, ['deriveKey']);
            const public_key = await $mol_crypto_native.subtle.importKey('jwk', {
                ...jwk,
                key_ops: [],
                x: public_serial.slice(0, 43),
                y: public_serial.slice(43, 86),
            }, ecdh, true, []);
            const secret = await $mol_crypto_native.subtle.deriveKey({
                name: "ECDH",
                public: public_key,
            }, private_key, algorithm, true, ["encrypt", "decrypt"]);
            return new this(secret);
        }
        async serial() {
            return new Uint8Array(await $mol_crypto_native.subtle.exportKey('raw', this.native));
        }
        async encrypt(open, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.encrypt({
                ...algorithm,
                iv: salt,
            }, this.native, open));
        }
        async decrypt(closed, salt) {
            return new Uint8Array(await $mol_crypto_native.subtle.decrypt({
                ...algorithm,
                iv: salt,
            }, this.native, closed));
        }
    }
    $.$mol_crypto_secret = $mol_crypto_secret;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_after_work extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = requestIdleCallback(task, { timeout: delay });
        }
        destructor() {
            cancelIdleCallback(this.id);
        }
    }
    $.$mol_after_work = $mol_after_work;
    if (typeof requestIdleCallback !== 'function') {
        $.$mol_after_work = $mol_after_timeout;
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_wait_rest_async() {
        return new Promise(done => {
            new this.$mol_after_work(16, () => done(null));
        });
    }
    $.$mol_wait_rest_async = $mol_wait_rest_async;
    function $mol_wait_rest() {
        return this.$mol_wire_sync(this).$mol_wait_rest_async();
    }
    $.$mol_wait_rest = $mol_wait_rest;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_meta_safe extends $.$hyoo_meta_safe {
            password_bid() {
                const pass = this.password();
                if (pass.length <= 7)
                    return this.bid_pass_long();
                return '';
            }
            content() {
                return [
                    this.key_import()
                        ? this.Import_block()
                        : this.Export_block()
                ];
            }
            recall(next) {
                const serial = this.key_import();
                if (!serial)
                    return next ?? '';
                const pack = $mol_base64_decode(serial);
                return $mol_charset_decode(pack.slice(this.key_size()));
            }
            recall_enabled() {
                return !this.key_import();
            }
            peer_current() {
                return this.yard().peer().id;
            }
            peer_new() {
                return $mol_int62_hash_string(this.$.$mol_crypto_auditor_private_to_public(this.key_new()));
            }
            key_import(next) {
                return this.$.$mol_state_arg.value('hyoo_meta_key', next) ?? null;
            }
            key_new() {
                const serial = this.key_import();
                if (!serial)
                    return null;
                try {
                    const pack = $mol_base64_decode(serial);
                    const closed = pack.slice(0, this.key_size());
                    const salt = $mol_crypto_hash(pack.slice(this.key_size())).slice(0, 16);
                    const pass = this.password();
                    const secret = $mol_wire_sync(this.$.$mol_crypto_secret).pass(pass, salt);
                    const opened = $mol_wire_sync(secret).decrypt(closed, salt);
                    return $mol_charset_decode(opened);
                }
                catch (error) {
                    $mol_fail_log(error);
                    return null;
                }
            }
            import_switch() {
                this.yard().peer(this.key_new());
                this.password('');
                this.key_import(null);
                this.$.$mol_wait_rest();
                this.$.$mol_dom_context.location.reload();
            }
            key_export() {
                const pass = this.password();
                const recall = $mol_charset_encode(this.recall());
                const salt = $mol_crypto_hash(recall).slice(0, 16);
                const secret = $mol_wire_sync(this.$.$mol_crypto_secret).pass(pass, salt);
                const open = this.$.$mol_charset_encode(this.yard().peer().key_private_serial);
                const closed = new Uint8Array($mol_wire_sync(secret).encrypt(open, salt));
                const pack = new Uint8Array(this.key_size() + recall.byteLength);
                pack.set(closed, 0);
                pack.set(recall, this.key_size());
                return this.$.$mol_base64_encode(pack);
            }
            export_rows() {
                return [
                    this.Expot_bid(),
                    this.Export_pass(),
                    ...this.password_bid() ? [] : [this.Export_link()],
                ];
            }
            import_rows() {
                return [
                    this.Iport_descr(),
                    this.Import_pass(),
                    ...this.key_new() ? [this.Import_switch()] : [],
                ];
            }
            export_link() {
                return this.$.$mol_state_arg.link({
                    hyoo_meta_key: this.key_export(),
                });
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "password_bid", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "content", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "recall", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "peer_current", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "peer_new", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "key_new", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_safe.prototype, "import_switch", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "key_export", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_safe.prototype, "export_link", null);
        $$.$hyoo_meta_safe = $hyoo_meta_safe;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($hyoo_meta_safe, {
            flex: {
                basis: `20rem`,
            },
            Export_block: {
                gap: $mol_gap.block,
            },
            Import_block: {
                gap: $mol_gap.block,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_guard_defined(value) {
        return value !== null && value !== undefined;
    }
    $.$mol_guard_defined = $mol_guard_defined;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_array_shuffle(array) {
        const res = array.slice();
        for (let index = res.length - 1; index > 0; index--) {
            const index_swap = Math.floor(Math.random() * (index + 1));
            const temp = res[index];
            res[index] = res[index_swap];
            res[index_swap] = temp;
        }
        return res;
    }
    $.$mol_array_shuffle = $mol_array_shuffle;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_match_lobby extends $hyoo_meta_model {
        lookup(path) {
            const key = $mol_int62_hash_string(path.join('/'));
            return this.sub(key, $hyoo_crowd_list);
        }
        lookup_has(path, next) {
            return this.lookup(path).has(this.land.peer_id(), next);
        }
        lookup_list(path) {
            return this.lookup(path).list()
                .map(val => $mol_int62_string_ensure(val))
                .filter($mol_guard_defined);
        }
        collect_all([place, age_self, sex_self, age_pref, sex_pref]) {
            let ids = new Set();
            for (const p of place) {
                for (const as of age_self) {
                    for (const ss of sex_self) {
                        for (const ap of age_pref) {
                            for (const sp of sex_pref) {
                                for (const id of this.lookup_list([p, as, ss, ap, sp])) {
                                    ids.add(id);
                                }
                            }
                        }
                    }
                }
            }
            return ids;
        }
        find_pair(self) {
            if (!self.ready())
                return null;
            const age_self = self.age_self();
            const sex_self = self.sex_self();
            const age_pref = self.age_pref_all();
            const sex_pref = self.sex_pref_all();
            const skipped = self.skipped();
            const Single = this.world().Fund($hyoo_match_single);
            for (const id of self.likes().list()) {
                const single = Single.Item(id);
                if (!single.liked() && skipped.has(id))
                    continue;
                if (!single.ready())
                    continue;
                return single;
            }
            for (const place of self.places()) {
                let ids = [];
                for (const age of age_pref) {
                    for (const sex of sex_pref) {
                        const list = this.lookup_list([place, age, sex, age_self, sex_self]);
                        for (const id of list)
                            ids.push(id);
                    }
                }
                for (const id of $mol_array_shuffle(ids)) {
                    if (skipped.has(id))
                        continue;
                    const single = Single.Item(id);
                    if (!single.ready())
                        continue;
                    return single;
                }
            }
            return null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $hyoo_match_lobby.prototype, "lookup", null);
    __decorate([
        $mol_action
    ], $hyoo_match_lobby.prototype, "find_pair", null);
    $.$hyoo_match_lobby = $hyoo_match_lobby;
})($ || ($ = {}));

;
	($.$hyoo_match_single_card) = class $hyoo_match_single_card extends ($.$mol_view) {
		name(){
			return (this.single().title());
		}
		greet(){
			return (this.single().greet());
		}
		contacts(){
			return (this.single().contacts());
		}
		places(){
			return (this.single().places());
		}
		sex_self(){
			return (this.single().sex_self());
		}
		age_self(){
			return (this.single().age_self());
		}
		sex_pref(){
			return (this.single().sex_pref_all());
		}
		age_pref(){
			return (this.single().age_pref_all());
		}
		photo(){
			return "";
		}
		Photo(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.photo()));
			return obj;
		}
		Name(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.name()));
			return obj;
		}
		tags(){
			return "";
		}
		Tags(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.tags()));
			return obj;
		}
		Places(){
			const obj = new this.$.$hyoo_match_places();
			(obj.enabled) = () => (false);
			(obj.Pick) = () => (null);
			(obj.value) = (next) => ((this.places()));
			return obj;
		}
		Filters(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Name()), 
				(this.Tags()), 
				(this.Places())
			]);
			return obj;
		}
		Brief(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.greet()));
			return obj;
		}
		Contacts(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.contacts()));
			return obj;
		}
		Info(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([
				(this.Filters()), 
				(this.Brief()), 
				(this.Contacts())
			]);
			return obj;
		}
		single(){
			const obj = new this.$.$hyoo_match_single();
			return obj;
		}
		minimal_width(){
			return 120;
		}
		minimal_height(){
			return 120;
		}
		sub(){
			return [(this.Photo()), (this.Info())];
		}
	};
	($mol_mem(($.$hyoo_match_single_card.prototype), "Photo"));
	($mol_mem(($.$hyoo_match_single_card.prototype), "Name"));
	($mol_mem(($.$hyoo_match_single_card.prototype), "Tags"));
	($mol_mem(($.$hyoo_match_single_card.prototype), "Places"));
	($mol_mem(($.$hyoo_match_single_card.prototype), "Filters"));
	($mol_mem(($.$hyoo_match_single_card.prototype), "Brief"));
	($mol_mem(($.$hyoo_match_single_card.prototype), "Contacts"));
	($mol_mem(($.$hyoo_match_single_card.prototype), "Info"));
	($mol_mem(($.$hyoo_match_single_card.prototype), "single"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_match_single_card extends $.$hyoo_match_single_card {
            photo() {
                return URL.createObjectURL(this.single().photo());
            }
            tags() {
                return `${this.age_self()} ${this.sex_self()} ▶ ${this.age_pref().join(' ')} | ${this.sex_pref().join(' ')}`;
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_match_single_card.prototype, "photo", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_single_card.prototype, "tags", null);
        $$.$hyoo_match_single_card = $hyoo_match_single_card;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($hyoo_match_single_card, {
            background: {
                color: $mol_theme.card,
            },
            flex: {
                wrap: 'wrap',
            },
            Photo: {
                padding: $mol_gap.block,
                width: '7.5rem',
                aspectRatio: 1,
                flex: {
                    shrink: 0,
                },
            },
            Filters: {
                flex: {
                    wrap: 'wrap',
                },
            },
            Name: {
                padding: $mol_gap.text,
            },
            Tags: {
                padding: $mol_gap.text,
                gap: $mol_gap.space,
                color: $mol_theme.shade,
                flex: {
                    wrap: 'wrap',
                },
            },
            Places: {
                flex: {
                    grow: 0,
                },
            },
            Info: {
                flex: {
                    basis: '20rem',
                    grow: 1,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$hyoo_match_lobby_page) = class $hyoo_match_lobby_page extends ($.$mol_page) {
		single(id){
			const obj = new this.$.$hyoo_match_single();
			return obj;
		}
		Single(id){
			const obj = new this.$.$hyoo_match_single_card();
			(obj.single) = () => ((this.single(id)));
			return obj;
		}
		single_list(){
			return [(this.Single("0_0"))];
		}
		Single_list(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.single_list()));
			return obj;
		}
		title(){
			return "Народ";
		}
		lobby(){
			const obj = new this.$.$hyoo_match_lobby();
			return obj;
		}
		body(){
			return [(this.Single_list())];
		}
	};
	($mol_mem_key(($.$hyoo_match_lobby_page.prototype), "single"));
	($mol_mem_key(($.$hyoo_match_lobby_page.prototype), "Single"));
	($mol_mem(($.$hyoo_match_lobby_page.prototype), "Single_list"));
	($mol_mem(($.$hyoo_match_lobby_page.prototype), "lobby"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_match_lobby_page extends $.$hyoo_match_lobby_page {
            singles() {
                if (!this.lobby().editable())
                    return [];
                return this.lobby().land.residents().slice().reverse();
            }
            single_list() {
                return this.singles().map(id => this.Single(id));
            }
            single(id) {
                return this.lobby().world().Fund($hyoo_match_single).Item(id);
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_match_lobby_page.prototype, "singles", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_lobby_page.prototype, "single_list", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_match_lobby_page.prototype, "single", null);
        $$.$hyoo_match_lobby_page = $hyoo_match_lobby_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($hyoo_match_lobby_page, {
            flex: {
                basis: `40rem`,
                grow: 1,
            },
            Single_list: {
                gap: $mol_gap.block,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_share) = class $mol_icon_share extends ($.$mol_icon) {
		path(){
			return "M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_share_variant) = class $mol_icon_share_variant extends ($.$mol_icon) {
		path(){
			return "M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z";
		}
	};


;
"use strict";

;
	($.$mol_button_share) = class $mol_button_share extends ($.$mol_button_minor) {
		Icon(){
			const obj = new this.$.$mol_icon_share_variant();
			return obj;
		}
		title(){
			return "";
		}
		uri(){
			return "";
		}
		capture(){
			return null;
		}
		hint(){
			return (this.$.$mol_locale.text("$mol_button_share_hint"));
		}
		sub(){
			return [(this.Icon()), (this.title())];
		}
	};
	($mol_mem(($.$mol_button_share.prototype), "Icon"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[String(Elem)] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[String(Elem)] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                if (typeof node[key] === 'string')
                    node[key] = props[key];
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_serialize(node) {
        const serializer = new $mol_dom_context.XMLSerializer;
        return serializer.serializeToString(node);
    }
    $.$mol_dom_serialize = $mol_dom_serialize;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    async function $mol_dom_capture_svg(el) {
        function restyle(el, styles) {
            for (let i = 0; i < styles.length; ++i) {
                const prop = styles[i];
                el.style[prop] = styles[prop];
            }
        }
        function clone(el) {
            const re = el.cloneNode();
            if (el instanceof HTMLImageElement && !/^(data|blob):/.test(el.src)) {
                const canvas = $mol_jsx("canvas", { width: el.naturalWidth, height: el.naturalHeight });
                const context = canvas.getContext('2d');
                context.drawImage(el, 0, 0);
                try {
                    ;
                    re.src = canvas.toDataURL();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
            }
            if (re instanceof HTMLInputElement) {
                re.setAttribute('value', el.value);
                if (el.checked)
                    re.setAttribute('checked', '');
            }
            if (re instanceof HTMLTextAreaElement) {
                re.setAttribute('value', el.value);
            }
            const styles = $mol_dom_context.getComputedStyle(el);
            restyle(re, styles);
            const before = $mol_dom_context.getComputedStyle(el, ':before');
            if (before.content[0] === '"') {
                const kid = $mol_jsx("span", null, JSON.parse(before.content));
                restyle(kid, before);
                re.appendChild(kid);
            }
            for (const kid of el.childNodes) {
                const dup = (kid.nodeType === kid.ELEMENT_NODE)
                    ? clone(kid)
                    : kid.cloneNode();
                re.appendChild(dup);
            }
            const after = $mol_dom_context.getComputedStyle(el, ':after');
            if (after.content[0] === '"') {
                const kid = $mol_jsx("span", null, JSON.parse(after.content));
                restyle(kid, after);
                re.appendChild(kid);
            }
            return re;
        }
        const { width, height } = el.getBoundingClientRect();
        return $mol_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${width} ${height}`, width: String(width), height: String(height) },
            $mol_jsx("foreignObject", { xmlns: "http://www.w3.org/2000/svg", width: String(width), height: String(height) }, clone(el)));
    }
    $.$mol_dom_capture_svg = $mol_dom_capture_svg;
    async function $mol_dom_capture_image(el) {
        const xml = $mol_dom_serialize(await $mol_dom_capture_svg(el));
        const uri = 'data:image/svg+xml,' + encodeURIComponent(xml);
        const image = $mol_jsx("img", { src: uri });
        await wait_load(image);
        return image;
    }
    $.$mol_dom_capture_image = $mol_dom_capture_image;
    async function $mol_dom_capture_canvas(el) {
        const image = await $mol_dom_capture_image(el);
        const canvas = $mol_jsx("canvas", { width: image.width, height: image.height });
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);
        return canvas;
    }
    $.$mol_dom_capture_canvas = $mol_dom_capture_canvas;
    function wait_load(el) {
        return new Promise((done, fail) => {
            el.onload = () => done(el);
            el.onerror = fail;
        });
    }
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_share extends $.$mol_button_share {
            capture() {
                return this.$.$mol_dom_context.document.body;
            }
            uri() {
                return this.$.$mol_state_arg.href();
            }
            async click() {
                const title = this.title();
                const url = this.uri() ?? undefined;
                const files = [];
                let el = this.capture();
                if (el) {
                    if (el instanceof $mol_view)
                        el = el.dom_tree();
                    const canvas = await $mol_dom_capture_canvas(el);
                    const blob = await new Promise(done => canvas.toBlob(done));
                    const file = new File([blob], title + '.png', { type: blob.type });
                    files.push(file);
                }
                await this.$.$mol_dom_context.navigator.share({ title, files, url });
            }
        }
        $$.$mol_button_share = $mol_button_share;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$hyoo_match_final) = class $hyoo_match_final extends ($.$mol_page) {
		reset(next){
			if(next !== undefined) return next;
			return null;
		}
		Reset(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ("Заново 💦");
			(obj.click) = (next) => ((this.reset(next)));
			return obj;
		}
		Result(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("Никого пока нет под твои критерии 😭");
			return obj;
		}
		Share(){
			const obj = new this.$.$mol_button_share();
			(obj.capture) = () => ((this.Content()));
			(obj.uri) = () => ("/");
			(obj.title) = () => ("Расскажи остальным:");
			return obj;
		}
		Content(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ("\" 💞 Поздравляем всех, кто уже нашёл свою вторую половинку!\n\" 💔 А кто сейчас грустит один - заползай на match.hyoo.ru - сервис знакомств от студента ИТМО, у которого сердце за тебя болит.\n\" ✨ Никаких фейков, мёртвых душ, рекламы, премиумов и геймификаций. Ищи, знакомься, общайся. Пока не найдёшь, наконец, свою судьбу.\n\" 🤙 Поделись в своих каналах и закидывай в чаты, где обитаешь, и где наверняка есть такие же страждущие.\n\" 🙏 Проект не коммерческий, так что вся надежда на тебя: чем больше соберём одиночек, тем меньше станет одиночек.");
			return obj;
		}
		title(){
			return "Ждём персон";
		}
		self(){
			const obj = new this.$.$hyoo_match_single();
			return obj;
		}
		foot(){
			return [(this.Reset())];
		}
		body(){
			return [
				(this.Result()), 
				(this.Share()), 
				(this.Content())
			];
		}
	};
	($mol_mem(($.$hyoo_match_final.prototype), "reset"));
	($mol_mem(($.$hyoo_match_final.prototype), "Reset"));
	($mol_mem(($.$hyoo_match_final.prototype), "Result"));
	($mol_mem(($.$hyoo_match_final.prototype), "Share"));
	($mol_mem(($.$hyoo_match_final.prototype), "Content"));
	($mol_mem(($.$hyoo_match_final.prototype), "self"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_match_final extends $.$hyoo_match_final {
            reset() {
                this.self().skipped().list([]);
            }
        }
        $$.$hyoo_match_final = $hyoo_match_final;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($hyoo_match_final, {
            Content: {
                background: {
                    image: [
                        ['linear-gradient( hsla( 0deg, 0%, calc( 50% + var(--mol_theme_luma) * 50% ), .666 ), hsla( 0deg, 0%, calc( 50% + var(--mol_theme_luma) * 50% ), .666 ) )'],
                        ['linear-gradient( to right bottom, violet, purple )'],
                    ],
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_calendar) = class $mol_icon_calendar extends ($.$mol_icon) {
		path(){
			return "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_calendar_today) = class $mol_icon_calendar_today extends ($.$mol_icon) {
		path(){
			return "M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z";
		}
	};


;
"use strict";

;
	($.$mol_format) = class $mol_format extends ($.$mol_string) {
		mask(id){
			return "";
		}
		allow(){
			return "0123456789";
		}
		hint(){
			return (this.mask("0"));
		}
		keyboard(){
			return "numeric";
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_format extends $.$mol_format {
            selection([from, to] = [0, 0]) {
                const prev = $mol_wire_probe(() => this.selection());
                if (!prev)
                    return [0, 100];
                if (from !== to)
                    return [from, to];
                const allow = this.allow();
                const value = this.value_changed();
                const filtered = [...value].filter(letter => allow.includes(letter)).join('');
                const mask = this.mask(filtered);
                if ((prev?.[0] ?? 0) >= from)
                    return [from, to];
                const lastAllow = (value.length - [...value].reverse().findIndex(letter => allow.includes(letter))) % (value.length + 1);
                if (lastAllow < from) {
                    from = to = lastAllow;
                }
                while (mask[from] && mask[from] !== '_') {
                    ++from;
                    ++to;
                }
                return [from, to];
            }
            value_changed(next) {
                const allow = this.allow();
                const normalize = (val) => {
                    val = [...val].filter(letter => allow.includes(letter)).join('');
                    const letters = [...val].reverse();
                    return this.mask(val).replace(/_/gu, () => letters.pop() ?? '_') + letters.reverse().join('');
                };
                if (next !== undefined) {
                    next = normalize(next);
                    if ([...next].filter(letter => allow.includes(letter)).join('')) {
                        if (next.includes('_'))
                            return next;
                    }
                    else {
                        next = '';
                    }
                }
                return normalize(this.value(next));
            }
        }
        __decorate([
            $mol_mem
        ], $mol_format.prototype, "selection", null);
        __decorate([
            $mol_mem
        ], $mol_format.prototype, "value_changed", null);
        $$.$mol_format = $mol_format;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/format/format.view.css", "[mol_format] {\n\tfont-family: monospace;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_trash_can) = class $mol_icon_trash_can extends ($.$mol_icon) {
		path(){
			return "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_trash_can_outline) = class $mol_icon_trash_can_outline extends ($.$mol_icon) {
		path(){
			return "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_chevron_left) = class $mol_icon_chevron_left extends ($.$mol_icon) {
		path(){
			return "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_chevron_right) = class $mol_icon_chevron_right extends ($.$mol_icon) {
		path(){
			return "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z";
		}
	};


;
"use strict";

;
	($.$mol_hor) = class $mol_hor extends ($.$mol_view) {};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hor extends $.$mol_hor {
            minimal_width() {
                let min = 0;
                for (const view of this.sub()) {
                    if (!(view instanceof $mol_view))
                        continue;
                    min += view.minimal_width();
                }
                return min;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_hor.prototype, "minimal_width", null);
        $$.$mol_hor = $mol_hor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_define($mol_hor, {
        display: 'flex',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        flex: {
            grow: 1,
            shrink: 0,
            basis: 'auto',
        },
    });
})($ || ($ = {}));

;
	($.$mol_calendar) = class $mol_calendar extends ($.$mol_list) {
		title(){
			return "";
		}
		Title(){
			const obj = new this.$.$mol_view();
			(obj.minimal_height) = () => (24);
			(obj.sub) = () => ([(this.title())]);
			return obj;
		}
		head(){
			return [(this.Title())];
		}
		Head(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.head()));
			return obj;
		}
		weekdays(){
			return [];
		}
		Weekdays(){
			const obj = new this.$.$mol_hor();
			(obj.sub) = () => ((this.weekdays()));
			return obj;
		}
		weekend(id){
			return false;
		}
		weekday(id){
			return "";
		}
		week_days(id){
			return [];
		}
		day_ghost(id){
			return false;
		}
		day_holiday(id){
			return false;
		}
		day_selected(id){
			return false;
		}
		day_today(id){
			return false;
		}
		day_theme(id){
			return null;
		}
		day_text(id){
			return "";
		}
		day_content(id){
			return [(this.day_text(id))];
		}
		sub(){
			return [(this.Head()), (this.Weekdays())];
		}
		weeks(){
			return [];
		}
		weeks_count(){
			return 6;
		}
		Weekday(id){
			const obj = new this.$.$mol_calendar_day();
			(obj.holiday) = () => ((this.weekend(id)));
			(obj.sub) = () => ([(this.weekday(id))]);
			return obj;
		}
		Week(id){
			const obj = new this.$.$mol_hor();
			(obj.sub) = () => ((this.week_days(id)));
			return obj;
		}
		Day(id){
			const obj = new this.$.$mol_calendar_day();
			(obj.ghost) = () => ((this.day_ghost(id)));
			(obj.holiday) = () => ((this.day_holiday(id)));
			(obj.selected) = () => ((this.day_selected(id)));
			(obj.today) = () => ((this.day_today(id)));
			(obj.theme) = () => ((this.day_theme(id)));
			(obj.sub) = () => ((this.day_content(id)));
			return obj;
		}
		month_string(){
			return "";
		}
		month_moment(){
			const obj = new this.$.$mol_time_moment();
			return obj;
		}
	};
	($mol_mem(($.$mol_calendar.prototype), "Title"));
	($mol_mem(($.$mol_calendar.prototype), "Head"));
	($mol_mem(($.$mol_calendar.prototype), "Weekdays"));
	($mol_mem_key(($.$mol_calendar.prototype), "Weekday"));
	($mol_mem_key(($.$mol_calendar.prototype), "Week"));
	($mol_mem_key(($.$mol_calendar.prototype), "Day"));
	($mol_mem(($.$mol_calendar.prototype), "month_moment"));
	($.$mol_calendar_day) = class $mol_calendar_day extends ($.$mol_view) {
		holiday(){
			return false;
		}
		ghost(){
			return false;
		}
		selected(){
			return false;
		}
		today(){
			return false;
		}
		theme(){
			return null;
		}
		minimal_height(){
			return 24;
		}
		minimal_width(){
			return 36;
		}
		attr(){
			return {
				"mol_calendar_holiday": (this.holiday()), 
				"mol_calendar_ghost": (this.ghost()), 
				"mol_calendar_selected": (this.selected()), 
				"mol_calendar_today": (this.today()), 
				"mol_theme": (this.theme())
			};
		}
	};


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_calendar extends $.$mol_calendar {
            month_moment() {
                const moment = new $mol_time_moment(this.month_string() || undefined);
                return new $mol_time_moment({ year: moment.year, month: moment.month });
            }
            title() {
                return this.month_moment().toString('Month YYYY');
            }
            day_first() {
                return this.month_moment().merge({ day: 0 });
            }
            day_last() {
                return this.day_first().shift('P1M');
            }
            day_draw_from() {
                let weekday = this.day_first().weekday;
                return this.day_first().shift({ day: -weekday });
            }
            weekdays() {
                const next = [];
                for (let index = 0; index < 7; ++index) {
                    next.push(this.Weekday(index));
                }
                return next;
            }
            weekday(index) {
                return this.day_draw_from().shift({ day: index }).toString('WD');
            }
            weekend(index) {
                return [5, 6].indexOf(index) >= 0;
            }
            sub() {
                return [
                    ...super.sub(),
                    ...this.weeks(),
                ];
            }
            weeks() {
                const weeks = [];
                let count = this.weeks_count();
                for (let i = 0; i < count; ++i) {
                    weeks.push(this.Week(i));
                }
                return weeks;
            }
            week_days(index) {
                const days = [];
                let start = this.day_draw_from().shift({ day: index * 7 });
                for (let i = 0; i < 7; ++i) {
                    days.push(this.Day(start.shift({ day: i }).toString('YYYY-MM-DD')));
                }
                return days;
            }
            day_text(day) {
                return new $mol_time_moment(day).toString("D");
            }
            day_holiday(day) {
                return this.weekend(new $mol_time_moment(day).weekday);
            }
            today() {
                return new $mol_time_moment();
            }
            day_today(day) {
                return this.today().toString('YYYY-MM-DD') === day;
            }
            day_ghost(day) {
                return new $mol_time_moment(day).toString('YYYY-MM') !== this.day_first().toString('YYYY-MM');
            }
            day_theme(day) {
                return this.day_selected(day) ? '$mol_theme_current' : super.day_theme(day);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "month_moment", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_first", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_last", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "day_draw_from", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "weekdays", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "weekday", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "weeks", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "week_days", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_text", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_holiday", null);
        __decorate([
            $mol_mem
        ], $mol_calendar.prototype, "today", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_today", null);
        __decorate([
            $mol_mem_key
        ], $mol_calendar.prototype, "day_ghost", null);
        $$.$mol_calendar = $mol_calendar;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/calendar/calendar.view.css", "[mol_calendar] {\n\tdisplay: table;\n\tfont-family: monospace;\n}\n\n[mol_calendar_head] {\n\tdisplay: table-caption;\n\tbackground: inherit;\n}\n\n[mol_calendar_title] {\n\tjustify-content: center;\n}\n\n[mol_calendar_weekdays] ,\n[mol_calendar_week] {\n\tdisplay: table-row;\n\tpadding: 0;\n}\n\n[mol_calendar_day] {\n\tdisplay: table-cell;\n\tpadding: .25rem .5rem;\n\ttext-align: center;\n\tword-break: normal;\n\tbox-shadow: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_calendar_weekday] {\n\tcolor: var(--mol_theme_shade);\n\tborder-bottom: 1px solid var(--mol_theme_line);\n}\n\n[mol_calendar_holiday] {\n\tcolor: var(--mol_theme_special);\n}\n\n[mol_calendar_today] {\n\tfont-weight: bolder;\n}\n\n[mol_calendar_ghost] {\n\topacity: .2;\n}\n");
})($ || ($ = {}));

;
	($.$mol_date) = class $mol_date extends ($.$mol_pick) {
		enabled(){
			return true;
		}
		today_click(next){
			if(next !== undefined) return next;
			return null;
		}
		Today_icon(){
			const obj = new this.$.$mol_icon_calendar_today();
			return obj;
		}
		Today(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_date_Today_hint")));
			(obj.enabled) = () => ((this.enabled()));
			(obj.click) = (next) => ((this.today_click(next)));
			(obj.sub) = () => ([(this.Today_icon())]);
			return obj;
		}
		value(next){
			if(next !== undefined) return next;
			return "";
		}
		value_changed(next){
			return (this.Input().value_changed(next));
		}
		input_mask(id){
			return "";
		}
		Input(){
			const obj = new this.$.$mol_format();
			(obj.value) = (next) => ((this.value(next)));
			(obj.mask) = (id) => ((this.input_mask(id)));
			(obj.enabled) = () => ((this.enabled()));
			return obj;
		}
		clear(next){
			if(next !== undefined) return next;
			return null;
		}
		Clear_icon(){
			const obj = new this.$.$mol_icon_trash_can_outline();
			return obj;
		}
		Clear(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$mol_date_Clear_hint")));
			(obj.enabled) = () => ((this.enabled()));
			(obj.click) = (next) => ((this.clear(next)));
			(obj.sub) = () => ([(this.Clear_icon())]);
			return obj;
		}
		input_content(){
			return [
				(this.Today()), 
				(this.Input()), 
				(this.Clear())
			];
		}
		Input_row(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.input_content()));
			return obj;
		}
		month_moment(){
			return (this.value_moment());
		}
		day_selected(id){
			return false;
		}
		day_click(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Calendar_title(){
			return (this.Calendar().Title());
		}
		prev_hint(){
			return (this.$.$mol_locale.text("$mol_date_prev_hint"));
		}
		prev(next){
			if(next !== undefined) return next;
			return null;
		}
		Prev_icon(){
			const obj = new this.$.$mol_icon_chevron_left();
			return obj;
		}
		Prev(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.prev_hint()));
			(obj.click) = (next) => ((this.prev(next)));
			(obj.sub) = () => ([(this.Prev_icon())]);
			return obj;
		}
		next_hint(){
			return (this.$.$mol_locale.text("$mol_date_next_hint"));
		}
		next(next){
			if(next !== undefined) return next;
			return null;
		}
		Next_icon(){
			const obj = new this.$.$mol_icon_chevron_right();
			return obj;
		}
		Next(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.next_hint()));
			(obj.click) = (next) => ((this.next(next)));
			(obj.sub) = () => ([(this.Next_icon())]);
			return obj;
		}
		Calendar_tools(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Prev()), 
				(this.Calendar_title()), 
				(this.Next())
			]);
			return obj;
		}
		Calendar(){
			const obj = new this.$.$mol_date_calendar();
			(obj.enabled) = () => ((this.enabled()));
			(obj.month_moment) = () => ((this.month_moment()));
			(obj.day_selected) = (id) => ((this.day_selected(id)));
			(obj.day_click) = (id, next) => ((this.day_click(id, next)));
			(obj.head) = () => ([(this.Calendar_tools())]);
			return obj;
		}
		Icon(){
			const obj = new this.$.$mol_icon_calendar();
			return obj;
		}
		bubble_content(){
			return [(this.Input_row()), (this.Calendar())];
		}
		value_number(next){
			if(next !== undefined) return next;
			return +NaN;
		}
		value_moment(next){
			if(next !== undefined) return next;
			const obj = new this.$.$mol_time_moment();
			return obj;
		}
	};
	($mol_mem(($.$mol_date.prototype), "today_click"));
	($mol_mem(($.$mol_date.prototype), "Today_icon"));
	($mol_mem(($.$mol_date.prototype), "Today"));
	($mol_mem(($.$mol_date.prototype), "value"));
	($mol_mem(($.$mol_date.prototype), "Input"));
	($mol_mem(($.$mol_date.prototype), "clear"));
	($mol_mem(($.$mol_date.prototype), "Clear_icon"));
	($mol_mem(($.$mol_date.prototype), "Clear"));
	($mol_mem(($.$mol_date.prototype), "Input_row"));
	($mol_mem_key(($.$mol_date.prototype), "day_click"));
	($mol_mem(($.$mol_date.prototype), "prev"));
	($mol_mem(($.$mol_date.prototype), "Prev_icon"));
	($mol_mem(($.$mol_date.prototype), "Prev"));
	($mol_mem(($.$mol_date.prototype), "next"));
	($mol_mem(($.$mol_date.prototype), "Next_icon"));
	($mol_mem(($.$mol_date.prototype), "Next"));
	($mol_mem(($.$mol_date.prototype), "Calendar_tools"));
	($mol_mem(($.$mol_date.prototype), "Calendar"));
	($mol_mem(($.$mol_date.prototype), "Icon"));
	($mol_mem(($.$mol_date.prototype), "value_number"));
	($mol_mem(($.$mol_date.prototype), "value_moment"));
	($.$mol_date_calendar) = class $mol_date_calendar extends ($.$mol_calendar) {
		day_click(id, next){
			if(next !== undefined) return next;
			return null;
		}
		enabled(){
			return true;
		}
		Day_button(id){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.day_text(id)));
			(obj.event_click) = (next) => ((this.day_click(id, next)));
			(obj.minimal_height) = () => (24);
			(obj.enabled) = () => ((this.enabled()));
			return obj;
		}
		day_content(id){
			return [(this.Day_button(id))];
		}
	};
	($mol_mem_key(($.$mol_date_calendar.prototype), "day_click"));
	($mol_mem_key(($.$mol_date_calendar.prototype), "Day_button"));


;
"use strict";
var $;
(function ($) {
    function $mol_try(handler) {
        try {
            return handler();
        }
        catch (error) {
            return error;
        }
    }
    $.$mol_try = $mol_try;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_date extends $.$mol_date {
            trigger_content() {
                return [this.value() || this.Icon()];
            }
            input_mask(val) {
                return val.length > 8 ? '____-__-__ __:__' : '____-__-__ ';
            }
            input_content() {
                return [
                    this.Today(),
                    this.Input(),
                    ...this.value() ? [this.Clear()] : [],
                ];
            }
            value(val) {
                const moment = this.value_moment();
                if (val === undefined)
                    return moment?.toString('YYYY-MM-DD hh:mm') ?? '';
                const moment2 = $mol_try(() => val && new $mol_time_moment(val).merge({ offset: new $mol_time_moment().offset })) || null;
                if (moment2 instanceof Error)
                    return val;
                this.value_moment(moment2);
                return val;
            }
            value_moment(next) {
                const stamp = this.value_number();
                if (next === undefined) {
                    return isNaN(stamp) ? null : new $mol_time_moment(stamp);
                }
                this.value_number(next?.valueOf() ?? NaN);
                return next;
            }
            value_number(next) {
                const value = this.value();
                if (next === undefined) {
                    if (!value)
                        return NaN;
                    const moment = $mol_try(() => new $mol_time_moment(value));
                    if (moment instanceof Error)
                        return NaN;
                    return moment.valueOf() ?? NaN;
                }
                const moment = $mol_try(() => new $mol_time_moment(next));
                this.value(moment.toString(value.length > 12 ? 'YYYY-MM-DD hh:mm' : 'YYYY-MM-DD'));
                return next;
            }
            value_moment_today() {
                return this.value()
                    ? new $mol_time_moment().mask(this.value())
                    : new $mol_time_moment();
            }
            clear() {
                this.value('');
                this.Input().focused(true);
                this.Input().selection([0, 0]);
            }
            month_moment(next) {
                if (next)
                    return next;
                let moment = $mol_try(() => new $mol_time_moment(this.value_changed().replace(/\D+$/, '')).mask('0000-00'));
                if (moment instanceof Error || !moment.year)
                    return new $mol_time_moment().mask('0000-00');
                if (moment.month === undefined) {
                    moment = moment.merge({ month: 0 });
                }
                return moment;
            }
            day_selected(day) {
                return this.value_moment()?.toString('YYYY-MM-DD') === day;
            }
            day_click(day) {
                const moment = new $mol_time_moment(day);
                this.value_moment(this.value_moment()?.merge(moment) ?? moment);
                this.showed(false);
            }
            prev() {
                this.month_moment(this.month_moment().shift({ month: -1 }));
            }
            next() {
                this.month_moment(this.month_moment().shift({ month: +1 }));
            }
            today_click() {
                this.value_moment(this.value_moment_today());
            }
        }
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value_moment", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value_number", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "value_moment_today", null);
        __decorate([
            $mol_mem
        ], $mol_date.prototype, "month_moment", null);
        $$.$mol_date = $mol_date;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/date/date.view.css", "/* [mol_date_bubble] {\n\tpadding: .5rem;\n} */\n\n[mol_date_input] {\n\tflex-shrink: 0;\n}\n\n[mol_date_prev] ,\n[mol_date_next] {\n\tflex-grow: 1;\n}\n[mol_date_prev] {\n\tjustify-content: flex-end;\n}\n\n[mol_date_calendar_title] {\n\tpadding: var(--mol_gap_text);\n}\n\n[mol_date_calendar_day] {\n\tpadding: 0;\n}\n\n[mol_date_calendar_day_button] {\n\twidth: 100%;\n\t/* padding: .25rem .5rem; */\n\tjustify-content: center;\n\tcursor: pointer;\n\tcolor: inherit;\n}\n");
})($ || ($ = {}));

;
	($.$mol_icon_window_close) = class $mol_icon_window_close extends ($.$mol_icon) {
		path(){
			return "M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_heart) = class $mol_icon_heart extends ($.$mol_icon) {
		path(){
			return "M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_heart_flash) = class $mol_icon_heart_flash extends ($.$mol_icon) {
		path(){
			return "M16.5,2.83C14.76,2.83 13.09,3.64 12,4.9C10.91,3.64 9.24,2.83 7.5,2.83C4.42,2.83 2,5.24 2,8.33C2,12.1 5.4,15.19 10.55,19.86L12,21.17L13.45,19.86C18.6,15.19 22,12.1 22,8.33C22,5.24 19.58,2.83 16.5,2.83M12,17.83V13.83H9L12,6.83V10.83H15";
		}
	};


;
"use strict";

;
	($.$mol_icon_heart_outline) = class $mol_icon_heart_outline extends ($.$mol_icon) {
		path(){
			return "M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z";
		}
	};


;
"use strict";

;
	($.$hyoo_match_single_page) = class $hyoo_match_single_page extends ($.$mol_page) {
		name(){
			return (this.pair().title());
		}
		greet(){
			return (this.pair().greet());
		}
		contacts(){
			return (this.pair().contacts());
		}
		places(){
			return (this.pair().places());
		}
		photo_moment(){
			return (this.pair().photo_moment());
		}
		Moment(){
			const obj = new this.$.$mol_date();
			(obj.enabled) = () => (false);
			(obj.value_moment) = () => ((this.photo_moment()));
			return obj;
		}
		photo(){
			return "";
		}
		Photo(){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.photo()));
			return obj;
		}
		skip(next){
			if(next !== undefined) return next;
			return null;
		}
		Skip_icon(){
			const obj = new this.$.$mol_icon_window_close();
			return obj;
		}
		Skip(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ("Пропустить");
			(obj.click) = (next) => ((this.skip(next)));
			(obj.sub) = () => ([(this.Skip_icon())]);
			return obj;
		}
		Mutual_icon(){
			const obj = new this.$.$mol_icon_heart_flash();
			return obj;
		}
		Mutual(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Mutual_icon())]);
			return obj;
		}
		like(next){
			if(next !== undefined) return next;
			return null;
		}
		Like_icon(){
			const obj = new this.$.$mol_icon_heart_outline();
			return obj;
		}
		Like(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ("Нравится");
			(obj.click) = (next) => ((this.like(next)));
			(obj.sub) = () => ([(this.Like_icon())]);
			return obj;
		}
		gallery(){
			return [
				(this.Photo()), 
				(this.Skip()), 
				(this.Mutual()), 
				(this.Like())
			];
		}
		Gallery(){
			const obj = new this.$.$mol_stack();
			(obj.sub) = () => ((this.gallery()));
			return obj;
		}
		match_hint(){
			return "++Удача!++ --У вас есть {timeout} мин. для свидания.--";
		}
		Match_hint(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.match_hint()));
			return obj;
		}
		Contacts(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.contacts()));
			return obj;
		}
		Match(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([(this.Match_hint()), (this.Contacts())]);
			return obj;
		}
		Places(){
			const obj = new this.$.$hyoo_match_places();
			(obj.enabled) = () => (false);
			(obj.Pick) = () => (null);
			(obj.value) = (next) => ((this.places()));
			return obj;
		}
		Brief(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.greet()));
			return obj;
		}
		title(){
			return "Персоны";
		}
		self(){
			const obj = new this.$.$hyoo_match_single();
			return obj;
		}
		pair(){
			const obj = new this.$.$hyoo_match_single();
			return obj;
		}
		mutual(){
			return false;
		}
		title_content(){
			return [(this.name())];
		}
		tools(){
			return [(this.Moment())];
		}
		body(){
			return [
				(this.Gallery()), 
				(this.Match()), 
				(this.Places()), 
				(this.Brief())
			];
		}
	};
	($mol_mem(($.$hyoo_match_single_page.prototype), "Moment"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "Photo"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "skip"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "Skip_icon"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "Skip"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "Mutual_icon"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "Mutual"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "like"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "Like_icon"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "Like"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "Gallery"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "Match_hint"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "Contacts"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "Match"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "Places"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "Brief"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "self"));
	($mol_mem(($.$hyoo_match_single_page.prototype), "pair"));


;
"use strict";
var $;
(function ($) {
    class $mol_time_interval extends $mol_time_base {
        constructor(config) {
            super();
            if (typeof config === 'string') {
                var chunks = config.split('/');
                if (chunks[0]) {
                    if (chunks[0][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[0]);
                    }
                    else {
                        this._start = new $mol_time_moment(chunks[0]);
                    }
                }
                else {
                    this._start = new $mol_time_moment();
                }
                if (chunks[1]) {
                    if (chunks[1][0].toUpperCase() === 'P') {
                        this._duration = new $mol_time_duration(chunks[1]);
                    }
                    else {
                        this._end = new $mol_time_moment(chunks[1]);
                    }
                }
                else {
                    this._end = new $mol_time_moment();
                }
                return;
            }
            if (config.start !== undefined)
                this._start = new $mol_time_moment(config.start);
            if (config.end !== undefined)
                this._end = new $mol_time_moment(config.end);
            if (config.duration !== undefined)
                this._duration = new $mol_time_duration(config.duration);
        }
        _start;
        get start() {
            if (this._start)
                return this._start;
            return this._start = this._end.shift(this._duration.mult(-1));
        }
        _end;
        get end() {
            if (this._end)
                return this._end;
            return this._end = this._start.shift(this._duration);
        }
        _duration;
        get duration() {
            if (this._duration)
                return this._duration;
            return this._duration = new $mol_time_duration(this._end.valueOf() - this._start.valueOf());
        }
        toJSON() { return this.toString(); }
        toString() {
            return (this._start || this._duration || '').toString() + '/' + (this._end || this._duration || '').toString();
        }
        [Symbol.toPrimitive](mode) {
            return this.toString();
        }
    }
    $.$mol_time_interval = $mol_time_interval;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_match_single_page extends $.$hyoo_match_single_page {
            photo() {
                return URL.createObjectURL(this.pair().photo());
            }
            self() {
                return this.pair().world().home().chief.as($hyoo_match_single);
            }
            like() {
                const pair = this.pair();
                pair.liked(true);
                this.self().skipped().add(pair.id());
            }
            skip() {
                const pair = this.pair();
                pair.liked(false);
                this.self().skipped().add(pair.id());
            }
            mutual() {
                if (!this.pair().liked())
                    return false;
                if (!this.self().likes().list().includes(this.pair().id()))
                    return false;
                return true;
            }
            dating_range() {
                if (!this.mutual())
                    return null;
                return new $mol_time_interval({
                    start: new $mol_time_moment($mol_state_time.now(1000)),
                    end: new $mol_time_moment(this.self().skipped().land.last_stamp()).shift('PT60m'),
                });
            }
            match_hint() {
                const min = Math.max(0, this.dating_range()?.duration.count('PT1m') ?? 0).toFixed(0);
                return super.match_hint().replace('{timeout}', min);
            }
            Match() {
                return this.mutual() ? super.Match() : null;
            }
            gallery() {
                return [
                    this.Photo(),
                    this.mutual()
                        ? this.Mutual()
                        : this.Like(),
                    ...(this.dating_range()?.duration.valueOf() ?? 0) > 0 ? [] : [this.Skip()],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_match_single_page.prototype, "photo", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_single_page.prototype, "self", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_single_page.prototype, "mutual", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_single_page.prototype, "dating_range", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_single_page.prototype, "match_hint", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_single_page.prototype, "gallery", null);
        $$.$hyoo_match_single_page = $hyoo_match_single_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($hyoo_match_single_page, {
            Gallery: {
                padding: $mol_gap.block,
            },
            Photo: {
                maxHeight: '80vh',
                justifySelf: 'stretch',
                aspectRatio: 1,
            },
            Skip: {
                alignSelf: 'stretch',
                justifySelf: 'self-end',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                width: '50%',
                '--mol_theme_hover': 'transparent',
            },
            Skip_icon: {
                width: '50%',
                height: 'auto',
            },
            Mutual: {
                alignSelf: 'flex-end',
                justifySelf: 'self-start',
                padding: $mol_gap.block,
                width: '50%',
                color: $mol_theme.special,
                '--mol_theme_hover': 'transparent',
            },
            Mutual_icon: {
                width: '50%',
                height: 'auto',
            },
            Like: {
                alignSelf: 'stretch',
                justifySelf: 'self-start',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                width: '50%',
                color: $mol_theme.special,
                '--mol_theme_hover': 'transparent',
            },
            Like_icon: {
                width: '50%',
                height: 'auto',
            },
            Places: {
                flex: {
                    shrink: 0,
                    grow: 0,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$hyoo_match_app) = class $hyoo_match_app extends ($.$mol_book2_catalog) {
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		lobby_update(){
			return null;
		}
		redirects(){
			return null;
		}
		Lights(){
			const obj = new this.$.$mol_lights_toggle();
			return obj;
		}
		stats(){
			return "";
		}
		Stats(){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.stats()));
			return obj;
		}
		yard(){
			const obj = new this.$.$hyoo_sync_client();
			return obj;
		}
		Online(){
			const obj = new this.$.$hyoo_sync_online();
			(obj.yard) = () => ((this.yard()));
			return obj;
		}
		Source(){
			const obj = new this.$.$mol_link_source();
			(obj.uri) = () => ("https://github.com/hyoo-ru/match.hyoo.ru/");
			return obj;
		}
		Support_icon(){
			const obj = new this.$.$mol_icon_face_agent();
			return obj;
		}
		Support(){
			const obj = new this.$.$mol_link_iconed();
			(obj.hint) = () => ("Поддержка");
			(obj.uri) = () => ("https://t.me/nin_jin");
			(obj.sub) = () => ([(this.Support_icon())]);
			return obj;
		}
		Intro(){
			const obj = new this.$.$hyoo_match_intro();
			return obj;
		}
		Settings(){
			const obj = new this.$.$hyoo_match_single_settings();
			(obj.single) = () => ((this.self()));
			return obj;
		}
		look_pages(){
			return [];
		}
		Look(){
			const obj = new this.$.$mol_book2();
			(obj.pages) = () => ((this.look_pages()));
			return obj;
		}
		Safe(){
			const obj = new this.$.$hyoo_meta_safe();
			(obj.yard) = () => ((this.yard()));
			return obj;
		}
		Lobby(){
			const obj = new this.$.$hyoo_match_lobby_page();
			(obj.lobby) = () => ((this.lobby()));
			return obj;
		}
		lobby(){
			const obj = new this.$.$hyoo_match_lobby();
			return obj;
		}
		self(){
			const obj = new this.$.$hyoo_match_single();
			return obj;
		}
		pair(){
			const obj = new this.$.$hyoo_match_single();
			return obj;
		}
		plugins(){
			return [(this.Theme())];
		}
		auto(){
			return [(this.lobby_update()), (this.redirects())];
		}
		menu_title(){
			return "match.hyoo.ru";
		}
		menu_tools(){
			return [(this.Lights())];
		}
		menu_body(){
			return [(this.Menu_links()), (this.Stats())];
		}
		menu_foot(){
			return [
				(this.Online()), 
				(this.Source()), 
				(this.Support())
			];
		}
		Placeholder(){
			return null;
		}
		Final(){
			const obj = new this.$.$hyoo_match_final();
			(obj.self) = () => ((this.self()));
			return obj;
		}
		Pair(){
			const obj = new this.$.$hyoo_match_single_page();
			(obj.pair) = () => ((this.pair()));
			return obj;
		}
		spreads(){
			return {
				"": (this.Intro()), 
				"settings": (this.Settings()), 
				"look": (this.Look()), 
				"safe": (this.Safe()), 
				"lobby": (this.Lobby())
			};
		}
	};
	($mol_mem(($.$hyoo_match_app.prototype), "Theme"));
	($mol_mem(($.$hyoo_match_app.prototype), "Lights"));
	($mol_mem(($.$hyoo_match_app.prototype), "Stats"));
	($mol_mem(($.$hyoo_match_app.prototype), "yard"));
	($mol_mem(($.$hyoo_match_app.prototype), "Online"));
	($mol_mem(($.$hyoo_match_app.prototype), "Source"));
	($mol_mem(($.$hyoo_match_app.prototype), "Support_icon"));
	($mol_mem(($.$hyoo_match_app.prototype), "Support"));
	($mol_mem(($.$hyoo_match_app.prototype), "Intro"));
	($mol_mem(($.$hyoo_match_app.prototype), "Settings"));
	($mol_mem(($.$hyoo_match_app.prototype), "Look"));
	($mol_mem(($.$hyoo_match_app.prototype), "Safe"));
	($mol_mem(($.$hyoo_match_app.prototype), "Lobby"));
	($mol_mem(($.$hyoo_match_app.prototype), "lobby"));
	($mol_mem(($.$hyoo_match_app.prototype), "self"));
	($mol_mem(($.$hyoo_match_app.prototype), "pair"));
	($mol_mem(($.$hyoo_match_app.prototype), "Final"));
	($mol_mem(($.$hyoo_match_app.prototype), "Pair"));


;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        message() {
            return this.native.statusText || `HTTP Error ${this.code()}`;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        blob() {
            return $mol_wire_sync(this.native).blob();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            const controller = new AbortController();
            let done = false;
            const promise = fetch(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done && !controller.signal.aborted)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            return new $mol_fetch_response($mol_wire_sync(this).request(input, init));
        }
        static success(input, init) {
            const response = this.response(input, init);
            if (response.status() === 'success')
                return response;
            throw new Error(response.message(), { cause: response });
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static blob(input, init) {
            return this.success(input, init).blob();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "success", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "blob", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_crowd_dict extends $hyoo_crowd_node {
        keys(next) {
            const prev = this.units();
            if (!next)
                return prev.map(unit => String(unit.data));
            $mol_reconcile({
                prev,
                from: 0,
                to: prev.length,
                next,
                equal: (next, prev) => prev.data === next,
                drop: (prev, lead) => this.land.wipe(prev),
                insert: (next, lead) => this.land.put(this.head, $mol_int62_hash_string(next + '\n' + this.head), lead?.self ?? '0_0', next),
            });
            return next;
        }
        sub(key, Node) {
            this.add(key);
            return new Node(this.land, $mol_int62_hash_string(key + '\n' + this.head));
        }
        has(key) {
            for (const unit of this.units()) {
                if (unit.data === key)
                    return true;
            }
            return false;
        }
        add(key) {
            if (this.has(key))
                return;
            this.keys([...this.keys(), key]);
        }
        drop(key) {
            for (const unit of this.units()) {
                if (unit.data !== key)
                    continue;
                this.land.wipe(unit);
            }
        }
    }
    $.$hyoo_crowd_dict = $hyoo_crowd_dict;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_page_side extends $hyoo_meta_model {
        referrers_node() {
            return this.yoke('referrers', $hyoo_crowd_dict, [''], [], ['0_0']);
        }
        referrers_list() {
            return this.referrers_node()?.keys() ?? [];
        }
        referrers_stat(uri) {
            return this.referrers_node()?.sub(uri, $hyoo_crowd_list).list().length ?? 0;
        }
        referrers_track(uri) {
            return this.referrers_node()?.sub(uri, $hyoo_crowd_list).add(this.land.peer().id);
        }
        details_node() {
            const details = this.yoke('details', $hyoo_crowd_text);
            if (!details)
                return details;
            const land = details.land;
            const meta = this.world().Fund($hyoo_meta_model).Item(land.id());
            if (land.allowed_mod())
                meta.whole(this);
            meta.steal_rights(this);
            return details;
        }
        details(next) {
            return this.details_node()?.text(next) ?? '';
        }
        details_selection(next) {
            return this.details_node()?.selection(this.land.peer().id, next) ?? [0, 0];
        }
        release_node() {
            const release = this.yoke('release', $hyoo_crowd_blob);
            release?.land.steal_rights(this.land);
            return release;
        }
        release(next) {
            return this.release_node()?.str(next) ?? '';
        }
        released() {
            const book = this.book();
            if (book && !book.pages_node().has(this.id()))
                return false;
            return this.release_node() && (this.release() === this.details()) || false;
        }
        publish() {
            this.release(this.details());
            this.book()?.pages_node().add(this.id());
        }
        content() {
            return this.release() || this.details();
        }
        content_full() {
            let details = `= ${this.title()}\n\n${this.content()}\n`;
            const visit = (book) => {
                details += '--\n\n';
                details += '= ' + book.title() + '\n\n';
                details += book.details().replace(/^(=+) /gm, '=$1 ') + '\n';
                for (const page of book.pages().slice().reverse())
                    visit(page);
            };
            for (const page of this.pages().slice().reverse())
                visit(page);
            return details;
        }
        changed_moment() {
            return new $mol_time_moment((this.release_node() ?? this.details_node())?.land.last_stamp());
        }
        book(next) {
            const book_node = this.sub('book', $hyoo_crowd_reg);
            const id = $mol_int62_string_ensure(book_node.str(next?.id() ?? (next === null ? '' : undefined)));
            if (id === this.id())
                return null;
            return id ? this.world().Fund($hyoo_page_side).Item(id) : null;
        }
        books() {
            const books = [];
            let book = this.book();
            while (book) {
                books.push(book);
                book = book.book();
            }
            return books;
        }
        bookmarks_node(next) {
            const fresh = this.yoke('$hyoo_page_side:bookmarks', $hyoo_crowd_list);
            if (!fresh)
                return fresh;
            const old = this.sub('bookmarks', $hyoo_crowd_list);
            for (const mark of old.list()) {
                const id = $mol_int62_string_ensure(mark);
                if (id)
                    fresh.add(id);
                old.drop(id);
            }
            if (fresh.virgin())
                fresh.add('iy8wtn_tky6pc');
            return fresh;
        }
        bookmarks(next) {
            const node = this.bookmarks_node();
            if (!node)
                return [];
            const ids = node.list(next?.map(side => side.id()));
            const Fund = this.world().Fund($hyoo_page_side);
            return ids.map(id => Fund.Item(id));
        }
        pages_node() {
            const pages = this.sub('pages', $hyoo_crowd_list);
            return pages;
        }
        pages(next) {
            const node = this.pages_node();
            const ids = node.list(next?.map(side => side.id()));
            const Fund = this.world().Fund($hyoo_page_side);
            return ids.map(id => Fund.Item(id));
        }
        following() {
            return this.following_in() ?? this.following_out();
        }
        following_in() {
            return this.pages().at(-1) ?? null;
        }
        following_out() {
            const book = this.book();
            if (!book)
                return null;
            const pages = book.pages();
            return pages[pages.indexOf(this) - 1] ?? book.following_out();
        }
        bookmarked(id, next) {
            const node = this.bookmarks_node();
            if (!node)
                return false;
            if (next === undefined)
                return node.list().includes(id);
            if (next)
                node.add(id);
            else
                node.drop(id);
            return next;
        }
        authors() {
            return [...(this.release_node() ?? this.details_node())?.land.authors() ?? []];
        }
        aura(next) {
            return this.sub('aura', $hyoo_crowd_reg).str(next);
        }
        aura_effective() {
            return this.aura() || (this.book()?.aura_effective() ?? '');
        }
        history_node() {
            return this.yoke('$hyoo_page_side:history', $hyoo_crowd_list);
        }
        history() {
            return this.history_node().set();
        }
        history_add(id) {
            this.history_node().add(id);
        }
        news() {
            const history = this.history();
            const visited = new Set();
            const found = [];
            const pages = [];
            const users = [this];
            while (found.length < 10 && (pages.length || users.length)) {
                while (users.length) {
                    const user = users.shift();
                    if (visited.has(user))
                        continue;
                    visited.add(user);
                    for (const page of user.pages().slice().reverse()) {
                        if (visited.has(page))
                            continue;
                        pages.push(page);
                    }
                    for (const mark of user.bookmarks().slice().reverse()) {
                        if (visited.has(mark))
                            continue;
                        pages.push(mark);
                    }
                    break;
                }
                while (pages.length) {
                    const side = pages.shift();
                    if (visited.has(side))
                        continue;
                    if (!side.title())
                        continue;
                    if (!side.release())
                        continue;
                    if (history.has(side.id())) {
                        for (const page of side.pages().slice().reverse()) {
                            if (visited.has(page))
                                continue;
                            pages.push(page);
                        }
                    }
                    else {
                        visited.add(side);
                        found.push(side);
                        break;
                    }
                }
            }
            return found;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "referrers_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "referrers_list", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page_side.prototype, "referrers_stat", null);
    __decorate([
        $mol_action
    ], $hyoo_page_side.prototype, "referrers_track", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "details_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "details", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "details_selection", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "release_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "release", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "released", null);
    __decorate([
        $mol_action
    ], $hyoo_page_side.prototype, "publish", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "content", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "content_full", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "changed_moment", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "book", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "books", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "bookmarks_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "bookmarks", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "pages_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "pages", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "following_in", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "following_out", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_page_side.prototype, "bookmarked", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "authors", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "aura", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "aura_effective", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "history_node", null);
    __decorate([
        $mol_mem
    ], $hyoo_page_side.prototype, "news", null);
    $.$hyoo_page_side = $hyoo_page_side;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    let $mol_si_prefix;
    (function ($mol_si_prefix) {
        $mol_si_prefix[$mol_si_prefix["y"] = -8] = "y";
        $mol_si_prefix[$mol_si_prefix["z"] = -7] = "z";
        $mol_si_prefix[$mol_si_prefix["a"] = -6] = "a";
        $mol_si_prefix[$mol_si_prefix["f"] = -5] = "f";
        $mol_si_prefix[$mol_si_prefix["p"] = -4] = "p";
        $mol_si_prefix[$mol_si_prefix["n"] = -3] = "n";
        $mol_si_prefix[$mol_si_prefix["\u00B5"] = -2] = "\u00B5";
        $mol_si_prefix[$mol_si_prefix["m"] = -1] = "m";
        $mol_si_prefix[$mol_si_prefix[""] = 0] = "";
        $mol_si_prefix[$mol_si_prefix["k"] = 1] = "k";
        $mol_si_prefix[$mol_si_prefix["M"] = 2] = "M";
        $mol_si_prefix[$mol_si_prefix["G"] = 3] = "G";
        $mol_si_prefix[$mol_si_prefix["T"] = 4] = "T";
        $mol_si_prefix[$mol_si_prefix["P"] = 5] = "P";
        $mol_si_prefix[$mol_si_prefix["E"] = 6] = "E";
        $mol_si_prefix[$mol_si_prefix["Z"] = 7] = "Z";
        $mol_si_prefix[$mol_si_prefix["Y"] = 8] = "Y";
    })($mol_si_prefix = $.$mol_si_prefix || ($.$mol_si_prefix = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_si_short(numb, unit = '') {
        let magnitude = Math.floor(Math.log10(Math.abs(numb)) / 3);
        if (!Number.isFinite(magnitude)) {
            const prefix = isNaN(numb) ? `∅` : numb.toLocaleString();
            const suffix = unit ? ' ' + unit : '';
            return prefix + suffix;
        }
        let normal = numb / 10 ** (3 * magnitude);
        if (Math.round(Math.abs(normal)) === 1000) {
            normal /= 1000;
            ++magnitude;
        }
        const prefix = normal.toPrecision(3);
        if (unit) {
            return prefix + ' ' + $mol_si_prefix[magnitude] + unit;
        }
        else {
            return prefix + $mol_si_prefix[magnitude];
        }
    }
    $.$mol_si_short = $mol_si_short;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_offline() { }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    try {
        $mol_offline();
    }
    catch (error) {
        console.error(error);
    }
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $mol_vk extends $mol_object2 {
        static init() {
            this.send('VKWebAppInit');
        }
        static send(handler, params = {}) {
            const glob = $mol_dom_context;
            glob.AndroidBridge?.[handler](JSON.stringify(params));
            glob.webkit?.messageHandlers?.[handler].postMessage(params);
            glob.ReactNativeWebView?.postMessage({ handler, params });
            glob.parent?.postMessage({ handler, params, type: 'vk-connect' }, '*');
        }
    }
    $.$mol_vk = $mol_vk;
    setTimeout(() => $mol_vk.init());
})($ || ($ = {}));

;
	($.$hyoo_meta_link) = class $hyoo_meta_link extends ($.$mol_link) {
		id(){
			return (this.meta().id());
		}
		title(){
			return (this.meta().title());
		}
		Avatar(){
			const obj = new this.$.$mol_avatar();
			(obj.id) = () => ((this.id()));
			return obj;
		}
		highlight(){
			return "";
		}
		Title(){
			const obj = new this.$.$mol_dimmer();
			(obj.haystack) = () => ((this.title()));
			(obj.needle) = () => ((this.highlight()));
			return obj;
		}
		minimal_height(){
			return 40;
		}
		meta(){
			const obj = new this.$.$hyoo_meta_model();
			return obj;
		}
		param(){
			return "";
		}
		all_title(){
			return (this.$.$mol_locale.text("$hyoo_meta_link_all_title"));
		}
		sub(){
			return [(this.Avatar()), (this.Title())];
		}
	};
	($mol_mem(($.$hyoo_meta_link.prototype), "Avatar"));
	($mol_mem(($.$hyoo_meta_link.prototype), "Title"));
	($mol_mem(($.$hyoo_meta_link.prototype), "meta"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_meta_link extends $.$hyoo_meta_link {
            title() {
                return (this.id() === '0_0' ? this.all_title() : super.title()) || (this.Avatar() ? '' : '...');
            }
            uri() {
                return this.$.$mol_state_arg.link({
                    [this.param()]: this.id(),
                });
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_meta_link.prototype, "title", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_link.prototype, "uri", null);
        $$.$hyoo_meta_link = $hyoo_meta_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_define($hyoo_meta_link, {
        Title: {
            flex: {
                shrink: 1,
            },
        },
    });
})($ || ($ = {}));

;
	($.$hyoo_page_side_news) = class $hyoo_page_side_news extends ($.$mol_page) {
		news(){
			return (this.side().news());
		}
		item(id){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		item_title(id){
			return "";
		}
		Item(id){
			const obj = new this.$.$hyoo_meta_link();
			(obj.meta) = () => ((this.item(id)));
			(obj.title) = () => ((this.item_title(id)));
			(obj.Avatar) = () => (null);
			return obj;
		}
		items(){
			return [(this.Item("0"))];
		}
		Section_list(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.items()));
			return obj;
		}
		side(){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		title(){
			return (this.$.$mol_locale.text("$hyoo_page_side_news_title"));
		}
		attr(){
			return {...(super.attr()), "mol_theme": "$mol_theme_special"};
		}
		body(){
			return [(this.Section_list())];
		}
	};
	($mol_mem_key(($.$hyoo_page_side_news.prototype), "item"));
	($mol_mem_key(($.$hyoo_page_side_news.prototype), "Item"));
	($mol_mem(($.$hyoo_page_side_news.prototype), "Section_list"));
	($mol_mem(($.$hyoo_page_side_news.prototype), "side"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page_side_news extends $.$hyoo_page_side_news {
            items() {
                return this.news().map(item => this.Item(item));
            }
            item(side) {
                return side;
            }
            item_title(side) {
                return [side, ...side.books()].reverse().map(side => side.title()).join(' / ');
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_page_side_news.prototype, "items", null);
        $$.$hyoo_page_side_news = $hyoo_page_side_news;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($hyoo_page_side_news, {
        flex: {
            basis: rem(20),
            grow: 0,
        },
    });
})($ || ($ = {}));

;
	($.$mol_icon_magnify) = class $mol_icon_magnify extends ($.$mol_icon) {
		path(){
			return "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_pencil) = class $mol_icon_pencil extends ($.$mol_icon) {
		path(){
			return "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_pencil_outline) = class $mol_icon_pencil_outline extends ($.$mol_icon) {
		path(){
			return "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z";
		}
	};


;
"use strict";

;
	($.$mol_ghost) = class $mol_ghost extends ($.$mol_view) {
		Sub(){
			const obj = new this.$.$mol_view();
			return obj;
		}
	};
	($mol_mem(($.$mol_ghost.prototype), "Sub"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node_external(next) {
                return this.Sub().dom_node(next);
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $mol_dom_render_attributes(node, attr);
                $mol_dom_render_styles(node, style);
                $mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                try {
                    this.dom_node_actual();
                    this.auto();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_drag) = class $mol_drag extends ($.$mol_ghost) {
		start(next){
			if(next !== undefined) return next;
			return null;
		}
		drag_start(next){
			return (this.start(next));
		}
		move(next){
			if(next !== undefined) return next;
			return null;
		}
		drag_move(next){
			return (this.move(next));
		}
		end(next){
			if(next !== undefined) return next;
			return null;
		}
		drag_end(next){
			return (this.end(next));
		}
		status(next){
			if(next !== undefined) return next;
			return "ready";
		}
		event(){
			return {
				"dragstart": (next) => (this.drag_start(next)), 
				"drag": (next) => (this.drag_move(next)), 
				"dragend": (next) => (this.drag_end(next))
			};
		}
		attr(){
			return {"draggable": true, "mol_drag_status": (this.status())};
		}
		transfer(){
			return {
				"text/plain": "", 
				"text/html": "", 
				"text/uri-list": ""
			};
		}
		allow_copy(){
			return true;
		}
		allow_link(){
			return true;
		}
		allow_move(){
			return true;
		}
		image(){
			return (this.dom_node());
		}
	};
	($mol_mem(($.$mol_drag.prototype), "start"));
	($mol_mem(($.$mol_drag.prototype), "move"));
	($mol_mem(($.$mol_drag.prototype), "end"));
	($mol_mem(($.$mol_drag.prototype), "status"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_drag extends $.$mol_drag {
            status(next = 'ready') { return next; }
            drag_start(event) {
                setTimeout(() => this.status('drag'));
                const transfer = this.transfer();
                for (let type in transfer) {
                    event.dataTransfer.setData(type, transfer[type]);
                }
                event.dataTransfer.setDragImage(this.image(), 0, -32);
                const effects = [];
                if (this.allow_copy())
                    effects.push('Copy');
                if (this.allow_link())
                    effects.push('Link');
                if (this.allow_move())
                    effects.push('Move');
                let effectAllowed = effects[0].toLowerCase() + effects.slice(1).join('');
                if (effectAllowed === 'copyLinkMove')
                    effectAllowed = 'all';
                event.dataTransfer.effectAllowed = effectAllowed;
                this.start(event);
            }
            drag_end(event) {
                setTimeout(() => this.status('ready'));
                this.end(event);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_drag.prototype, "status", null);
        $$.$mol_drag = $mol_drag;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_drop) = class $mol_drop extends ($.$mol_ghost) {
		enter(next){
			if(next !== undefined) return next;
			return null;
		}
		move(next){
			if(next !== undefined) return next;
			return null;
		}
		leave(next){
			if(next !== undefined) return next;
			return null;
		}
		drop(next){
			if(next !== undefined) return next;
			return null;
		}
		status(next){
			if(next !== undefined) return next;
			return "ready";
		}
		enabled(next){
			if(next !== undefined) return next;
			return true;
		}
		event(){
			return {
				"dragenter": (next) => (this.enter(next)), 
				"dragover": (next) => (this.move(next)), 
				"dragleave": (next) => (this.leave(next)), 
				"drop": (next) => (this.drop(next))
			};
		}
		attr(){
			return {"mol_drop_status": (this.status())};
		}
		adopt(next){
			if(next !== undefined) return next;
			return {};
		}
		receive(next){
			if(next !== undefined) return next;
			return null;
		}
		allow(){
			return [
				"copy", 
				"move", 
				"link"
			];
		}
	};
	($mol_mem(($.$mol_drop.prototype), "enter"));
	($mol_mem(($.$mol_drop.prototype), "move"));
	($mol_mem(($.$mol_drop.prototype), "leave"));
	($mol_mem(($.$mol_drop.prototype), "drop"));
	($mol_mem(($.$mol_drop.prototype), "status"));
	($mol_mem(($.$mol_drop.prototype), "enabled"));
	($mol_mem(($.$mol_drop.prototype), "adopt"));
	($mol_mem(($.$mol_drop.prototype), "receive"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_drop extends $.$mol_drop {
            status(next = 'ready') { return next; }
            _target = null;
            enter(event) {
                if (event.defaultPrevented)
                    return;
                if (!this.enabled())
                    return;
                const action = this.decide_action(event);
                event.dataTransfer.dropEffect = action;
                if (action !== 'none')
                    this.status('drag');
                this._target = event.target;
                event.preventDefault();
            }
            move(event) {
                if (event.defaultPrevented)
                    return;
                if (!this.enabled())
                    return;
                event.dataTransfer.dropEffect = this.decide_action(event);
                event.preventDefault();
            }
            decide_action(event) {
                const allow = this.allow();
                if (allow.includes('move') && event.shiftKey)
                    return 'move';
                else if (allow.includes('copy') && event.ctrlKey)
                    return 'copy';
                else if (allow.includes('link') && event.altKey)
                    return 'link';
                else
                    return allow[0];
            }
            leave(event) {
                if (this._target === event.target) {
                    this.status('ready');
                }
            }
            receive(transfer) {
                return transfer;
            }
            drop(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                setTimeout(() => this.status('ready'));
                const obj = this.adopt(event.dataTransfer);
                if (!obj)
                    return;
                this.receive(obj);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_drop.prototype, "status", null);
        $$.$mol_drop = $mol_drop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_pin) = class $mol_icon_pin extends ($.$mol_icon) {
		path(){
			return "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_pin_outline) = class $mol_icon_pin_outline extends ($.$mol_icon) {
		path(){
			return "M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12M8.8,14L10,12.8V4H14V12.8L15.2,14H8.8Z";
		}
	};


;
"use strict";

;
	($.$hyoo_meta_menu_items) = class $hyoo_meta_menu_items extends ($.$mol_list) {
		ids(){
			return (this.list().list());
		}
		item_title(id){
			return (this.item(id).title());
		}
		item_expandable(id){
			return false;
		}
		item_expanded(id, next){
			if(next !== undefined) return next;
			return true;
		}
		Item_expand(id){
			const obj = new this.$.$mol_check_expand();
			(obj.expandable) = () => ((this.item_expandable(id)));
			(obj.expanded) = (next) => ((this.item_expanded(id, next)));
			return obj;
		}
		editable(){
			return false;
		}
		transfer_adopt(next){
			if(next !== undefined) return next;
			return null;
		}
		receive_after(id, next){
			if(next !== undefined) return next;
			return null;
		}
		item_drag_end(id, next){
			if(next !== undefined) return next;
			return null;
		}
		item_text(id){
			return "";
		}
		item_html(id){
			return "";
		}
		item_uri(id){
			return "";
		}
		param(){
			return "";
		}
		highlight(){
			return "";
		}
		Item_link(id){
			const obj = new this.$.$hyoo_meta_link();
			(obj.meta) = () => ((this.item(id)));
			(obj.param) = () => ((this.param()));
			(obj.highlight) = () => ((this.highlight()));
			(obj.Avatar) = () => (null);
			return obj;
		}
		Item_drag(id){
			const obj = new this.$.$mol_drag();
			(obj.end) = (next) => ((this.item_drag_end(id, next)));
			(obj.transfer) = () => ({
				"text/plain": (this.item_text(id)), 
				"text/html": (this.item_html(id)), 
				"text/uri-list": (this.item_uri(id))
			});
			(obj.Sub) = () => ((this.Item_link(id)));
			return obj;
		}
		Item_drop_after(id){
			const obj = new this.$.$mol_drop();
			(obj.enabled) = () => ((this.editable()));
			(obj.adopt) = (next) => ((this.transfer_adopt(next)));
			(obj.receive) = (next) => ((this.receive_after(id, next)));
			(obj.allow) = () => ((this.drop_allow()));
			(obj.Sub) = () => ((this.Item_drag(id)));
			return obj;
		}
		item_remove(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Item_remove_icon(id){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		Item_remove(id){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_meta_menu_items_Item_remove_hint")));
			(obj.click) = (next) => ((this.item_remove(id, next)));
			(obj.sub) = () => ([(this.Item_remove_icon(id))]);
			return obj;
		}
		item_pin(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Item_pin_icon(id){
			const obj = new this.$.$mol_icon_pin_outline();
			return obj;
		}
		Item_pin(id){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_meta_menu_items_Item_pin_hint")));
			(obj.click) = (next) => ((this.item_pin(id, next)));
			(obj.sub) = () => ([(this.Item_pin_icon(id))]);
			return obj;
		}
		receive_inside(id, next){
			if(next !== undefined) return next;
			return null;
		}
		item_add(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Item_add_icon(id){
			const obj = new this.$.$mol_icon_plus();
			return obj;
		}
		Item_add(id){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_meta_menu_items_Item_add_hint")));
			(obj.click) = (next) => ((this.item_add(id, next)));
			(obj.sub) = () => ([(this.Item_add_icon(id))]);
			return obj;
		}
		Item_drop_inside(id){
			const obj = new this.$.$mol_drop();
			(obj.enabled) = () => ((this.editable()));
			(obj.adopt) = (next) => ((this.transfer_adopt(next)));
			(obj.receive) = (next) => ((this.receive_inside(id, next)));
			(obj.allow) = () => ((this.drop_allow()));
			(obj.Sub) = () => ((this.Item_add(id)));
			return obj;
		}
		item_row(id){
			return [
				(this.Item_expand(id)), 
				(this.Item_drop_after(id)), 
				(this.Item_remove(id)), 
				(this.Item_pin(id)), 
				(this.Item_drop_inside(id))
			];
		}
		Item_row(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.item_row(id)));
			return obj;
		}
		Item_items(id){
			const obj = new this.$.$hyoo_meta_menu_items();
			(obj.editing) = () => ((this.editing()));
			(obj.list) = () => ((this.item_list(id)));
			(obj.item) = (id) => ((this.item(id)));
			(obj.item_moved) = (id, next) => ((this.item_moved(id, next)));
			(obj.item_expanded) = (id, next) => ((this.item_expanded(id, next)));
			(obj.item_list) = (id) => ((this.item_list(id)));
			(obj.item_uri) = (id) => ((this.item_uri(id)));
			(obj.highlight) = () => ((this.highlight()));
			(obj.item_add) = (id, next) => ((this.item_add(id, next)));
			return obj;
		}
		item_content(id){
			return [(this.Item_row(id)), (this.Item_items(id))];
		}
		Item(id){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.item_content(id)));
			return obj;
		}
		items(){
			return [(this.Item("0_0"))];
		}
		id(){
			return "";
		}
		editing(){
			return false;
		}
		drop_allow(){
			return ["move", "link"];
		}
		list(){
			const obj = new this.$.$hyoo_crowd_list();
			return obj;
		}
		item(id){
			const obj = new this.$.$hyoo_meta_model();
			return obj;
		}
		item_list(id){
			const obj = new this.$.$hyoo_crowd_list();
			return obj;
		}
		item_moved(id, next){
			if(next !== undefined) return next;
			return null;
		}
		rows(){
			return (this.items());
		}
	};
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "item_expanded"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item_expand"));
	($mol_mem(($.$hyoo_meta_menu_items.prototype), "transfer_adopt"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "receive_after"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "item_drag_end"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item_link"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item_drag"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item_drop_after"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "item_remove"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item_remove_icon"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item_remove"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "item_pin"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item_pin_icon"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item_pin"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "receive_inside"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "item_add"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item_add_icon"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item_add"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item_drop_inside"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item_row"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item_items"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "Item"));
	($mol_mem(($.$hyoo_meta_menu_items.prototype), "list"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "item"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "item_list"));
	($mol_mem_key(($.$hyoo_meta_menu_items.prototype), "item_moved"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_meta_menu_items extends $.$hyoo_meta_menu_items {
            id() {
                return this.list().land.id();
            }
            editable() {
                return this.list().land.allowed_mod();
            }
            item_editable(id) {
                return this.item(id).land.allowed_mod();
            }
            ids() {
                const self = this.id();
                return super.ids().filter(id => id !== self).reverse();
            }
            items() {
                return this.ids().map(id => this.Item(id));
            }
            item(id) {
                return this.list().world().Fund($hyoo_meta_model).Item(id);
            }
            item_expandable(id) {
                return this.item_list(id).list().length > 0;
            }
            item_content(id) {
                return [
                    this.Item_row(id),
                    ...this.item_expanded(id)
                        ? [this.Item_items(id)]
                        : []
                ];
            }
            item_row(id) {
                return [
                    this.Item_expand(id),
                    this.Item_drop_after(id),
                    ...this.editable()
                        ? this.list().has(id)
                            ? this.editing()
                                ? [this.Item_remove(id)]
                                : this.item_editable(id)
                                    ? [this.Item_drop_inside(id)]
                                    : []
                            : [this.Item_pin(id)]
                        : [],
                ];
            }
            item_remove(id) {
                this.list().drop(id);
            }
            item_pin(id) {
                this.list().add(id);
                this.item_moved(id, this.id());
            }
            add() {
                return this.item_add(this.id());
            }
            item_html(id) {
                return ($mol_jsx("a", { href: this.item_uri(id) }, this.item_title(id))).outerHTML;
            }
            item_text(id) {
                return `\\\\${this.item_title(id)}\\${this.item_uri(id)}\\\\`;
            }
            transfer_adopt(transfer) {
                const uri = transfer.getData("text/uri-list");
                if (!uri)
                    return;
                return $mol_int62_string_ensure(uri.match(/[0-9a-z]+_[0-9a-z]+/)?.[0] ?? '');
            }
            receive_after(anchor, dropped) {
                if (anchor === dropped)
                    return;
                const list = this.list();
                const exists = list.has(dropped);
                list.drop(dropped);
                const index = list.list().indexOf(anchor);
                list.insert([dropped], Math.min(list.list().length, index + 1));
                if (!exists)
                    this.item_moved(dropped, list.land.id());
            }
            receive_inside(anchor, dropped) {
                if (anchor === dropped)
                    return;
                const list = this.item_list(anchor);
                const exists = list.has(dropped);
                list.drop(dropped);
                list.insert([dropped], 0);
                if (!exists)
                    this.item_moved(dropped, list.land.id());
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_meta_menu_items.prototype, "items", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_meta_menu_items.prototype, "item", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_meta_menu_items.prototype, "item_content", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_meta_menu_items.prototype, "item_row", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu_items.prototype, "item_remove", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu_items.prototype, "item_pin", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu_items.prototype, "add", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu_items.prototype, "receive_after", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu_items.prototype, "receive_inside", null);
        $$.$hyoo_meta_menu_items = $hyoo_meta_menu_items;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const { rem, px } = $mol_style_unit;
    $mol_style_define($hyoo_meta_menu_items, {
        Item_expand: {
            position: 'absolute',
            zIndex: $mol_layer.float,
            margin: {
                left: rem(-.75),
            },
        },
        Item_drop_after: {
            '@': {
                'mol_drop_status': {
                    'drag': {
                        box: {
                            shadow: [{
                                    inset: false,
                                    x: 0,
                                    y: px(-1),
                                    blur: 0,
                                    spread: 0,
                                    color: $mol_theme.focus,
                                }]
                        },
                    },
                },
            },
        },
        Item_add: {
            opacity: 0.5,
            ':hover': {
                opacity: 1,
            },
        },
        Item_drop_inside: {
            '@': {
                'mol_drop_status': {
                    'drag': {
                        box: {
                            shadow: [{
                                    inset: false,
                                    x: px(1),
                                    y: px(1),
                                    blur: 0,
                                    spread: 0,
                                    color: $mol_theme.focus,
                                }]
                        },
                        opacity: 1,
                    },
                },
            },
        },
        Item_row: {
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        Item_link: {
            flex: {
                grow: 1,
                shrink: 1,
            },
        },
        Item_items: {
            margin: {
                left: rem(.75),
                bottom: rem(.75),
            },
            padding: {
                left: rem(.75),
            },
            box: {
                shadow: [{
                        inset: true,
                        x: px(1),
                        y: 0,
                        blur: 0,
                        spread: 0,
                        color: $mol_theme.line,
                    }],
            },
        },
    });
})($ || ($ = {}));

;
	($.$hyoo_meta_menu) = class $hyoo_meta_menu extends ($.$mol_page) {
		item_title(id){
			return (this.item(id).title());
		}
		ids(){
			return (this.list().list());
		}
		world(){
			return (this.list().world());
		}
		id(){
			return "";
		}
		search(next){
			if(next !== undefined) return next;
			return "";
		}
		Search(){
			const obj = new this.$.$mol_search();
			(obj.query) = (next) => ((this.search(next)));
			return obj;
		}
		search_show(next){
			if(next !== undefined) return next;
			return false;
		}
		Search_icon(){
			const obj = new this.$.$mol_icon_magnify();
			return obj;
		}
		Search_toggle(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_meta_menu_Search_toggle_hint")));
			(obj.checked) = (next) => ((this.search_show(next)));
			(obj.Icon) = () => ((this.Search_icon()));
			return obj;
		}
		editing(next){
			if(next !== undefined) return next;
			return false;
		}
		Editing_icon(){
			const obj = new this.$.$mol_icon_pencil_outline();
			return obj;
		}
		Editing(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_meta_menu_Editing_hint")));
			(obj.checked) = (next) => ((this.editing(next)));
			(obj.Icon) = () => ((this.Editing_icon()));
			return obj;
		}
		add(next){
			if(next !== undefined) return next;
			return null;
		}
		Add_icon(){
			const obj = new this.$.$mol_icon_plus();
			return obj;
		}
		Add(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_meta_menu_Add_hint")));
			(obj.click) = (next) => ((this.add(next)));
			(obj.sub) = () => ([(this.Add_icon())]);
			return obj;
		}
		found(){
			return [];
		}
		item_uri(id){
			return "";
		}
		item_add(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Found(){
			const obj = new this.$.$hyoo_meta_menu_items();
			(obj.editing) = () => ((this.editing()));
			(obj.drop_allow) = () => ([]);
			(obj.list) = () => ((this.list()));
			(obj.ids) = () => ((this.found()));
			(obj.highlight) = () => ((this.search()));
			(obj.item_uri) = (id) => ((this.item_uri(id)));
			(obj.item_moved) = (id, next) => ((this.item_moved(id, next)));
			(obj.item_add) = (id, next) => ((this.item_add(id, next)));
			return obj;
		}
		item_expanded(id, next){
			if(next !== undefined) return next;
			return false;
		}
		Content(){
			const obj = new this.$.$hyoo_meta_menu_items();
			(obj.editing) = () => ((this.editing()));
			(obj.drop_allow) = () => ((this.drop_allow()));
			(obj.list) = () => ((this.list()));
			(obj.item_uri) = (id) => ((this.item_uri(id)));
			(obj.item_expanded) = (id, next) => ((this.item_expanded(id, next)));
			(obj.item_moved) = (id, next) => ((this.item_moved(id, next)));
			(obj.item_list) = (id) => ((this.item_list(id)));
			(obj.item_add) = (id, next) => ((this.item_add(id, next)));
			return obj;
		}
		transfer_adopt(next){
			if(next !== undefined) return next;
			return null;
		}
		receive_end(next){
			if(next !== undefined) return next;
			return null;
		}
		Drop_zone(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Drop_end(){
			const obj = new this.$.$mol_drop();
			(obj.enabled) = () => ((this.editable()));
			(obj.adopt) = (next) => ((this.transfer_adopt(next)));
			(obj.receive) = (next) => ((this.receive_end(next)));
			(obj.Sub) = () => ((this.Drop_zone()));
			(obj.allow) = () => ((this.drop_allow()));
			return obj;
		}
		editable(){
			return true;
		}
		item_moved(id, next){
			if(next !== undefined) return next;
			return null;
		}
		yard(){
			const obj = new this.$.$hyoo_sync_yard();
			return obj;
		}
		item(id){
			const obj = new this.$.$hyoo_meta_model();
			return obj;
		}
		list(){
			const obj = new this.$.$hyoo_crowd_list();
			return obj;
		}
		item_list(id){
			const obj = new this.$.$hyoo_crowd_list();
			return obj;
		}
		drop_allow(){
			return ["move", "link"];
		}
		Logo(){
			const obj = new this.$.$mol_avatar();
			(obj.id) = () => ((this.id()));
			return obj;
		}
		tools_ext(){
			return [];
		}
		head(){
			return [
				(this.Title()), 
				(this.Tools()), 
				(this.Search())
			];
		}
		tools(){
			return [
				(this.Search_toggle()), 
				(this.Editing()), 
				(this.Add()), 
				...(this.tools_ext())
			];
		}
		body(){
			return [
				(this.Found()), 
				(this.Content()), 
				(this.Drop_end())
			];
		}
	};
	($mol_mem(($.$hyoo_meta_menu.prototype), "search"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "Search"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "search_show"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "Search_icon"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "Search_toggle"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "editing"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "Editing_icon"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "Editing"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "add"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "Add_icon"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "Add"));
	($mol_mem_key(($.$hyoo_meta_menu.prototype), "item_add"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "Found"));
	($mol_mem_key(($.$hyoo_meta_menu.prototype), "item_expanded"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "Content"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "transfer_adopt"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "receive_end"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "Drop_zone"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "Drop_end"));
	($mol_mem_key(($.$hyoo_meta_menu.prototype), "item_moved"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "yard"));
	($mol_mem_key(($.$hyoo_meta_menu.prototype), "item"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "list"));
	($mol_mem_key(($.$hyoo_meta_menu.prototype), "item_list"));
	($mol_mem(($.$hyoo_meta_menu.prototype), "Logo"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_meta_menu extends $.$hyoo_meta_menu {
            id() {
                return this.list().land.id();
            }
            head() {
                return [
                    this.Title(),
                    this.Tools(),
                    ...this.search_show() ? [this.Search()] : [],
                ];
            }
            editable() {
                return this.list().land.allowed_mod();
            }
            item_editable(id) {
                return this.item(id).land.allowed_mod();
            }
            tools() {
                return this.editable() ? super.tools() : [this.Search_toggle(), ...this.tools_ext()];
            }
            body() {
                return this.search().trim()
                    ? [this.Found()]
                    : [this.Content(), this.Drop_end()];
            }
            search_show(next = false) {
                if (next === true)
                    this.Search().bring();
                if (next === false)
                    this.search('');
                return next;
            }
            item(id) {
                return this.list().world().Fund($hyoo_meta_model).Item(id);
            }
            found() {
                if (!this.search().trim())
                    return [];
                return this.yard()
                    .land_search(this.search())
                    .map(id => this.item(id).whole())
                    .filter(meta => meta.title().trim())
                    .map(meta => meta.id());
            }
            add() {
                return this.item_add(this.id());
            }
            transfer_adopt(transfer) {
                const uri = transfer.getData("text/uri-list");
                if (!uri)
                    return;
                return $mol_int62_string_ensure(uri.match(/[0-9a-z]+_[0-9a-z]+/)?.[0] ?? '');
            }
            receive_end(dropped) {
                const list = this.list();
                const exists = list.has(dropped);
                list.drop(dropped);
                this.list().insert([dropped], 0);
                if (!exists)
                    this.item_moved(dropped, this.id());
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_meta_menu.prototype, "head", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_menu.prototype, "body", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_menu.prototype, "search_show", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_meta_menu.prototype, "item", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_menu.prototype, "found", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu.prototype, "add", null);
        __decorate([
            $mol_action
        ], $hyoo_meta_menu.prototype, "receive_end", null);
        $$.$hyoo_meta_menu = $hyoo_meta_menu;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    const { rem, px } = $mol_style_unit;
    $mol_style_define($hyoo_meta_menu, {
        flex: {
            basis: rem(20),
            grow: 0,
        },
        Drop_end: {
            flex: {
                grow: 1,
                basis: rem(1.5),
            },
            '@': {
                'mol_drop_status': {
                    'drag': {
                        box: {
                            shadow: [{
                                    inset: false,
                                    x: 0,
                                    y: px(-1),
                                    blur: 0,
                                    spread: 0,
                                    color: $mol_theme.focus,
                                }]
                        },
                    },
                },
            },
        },
    });
})($ || ($ = {}));

;
	($.$hyoo_page_side_menu) = class $hyoo_page_side_menu extends ($.$hyoo_meta_menu) {
		title(){
			return (this.side().title());
		}
		side(){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		side_current(){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		Title(){
			const obj = new this.$.$hyoo_meta_link();
			(obj.meta) = () => ((this.side()));
			return obj;
		}
	};
	($mol_mem(($.$hyoo_page_side_menu.prototype), "side"));
	($mol_mem(($.$hyoo_page_side_menu.prototype), "side_current"));
	($mol_mem(($.$hyoo_page_side_menu.prototype), "Title"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page_side_menu extends $.$hyoo_page_side_menu {
            item_expanded(id, next) {
                const cur = this.side_current();
                try {
                    if (id === cur.id())
                        return next ?? !!cur.pages().length;
                    const path = [...cur.books()];
                    if (cur.pages().length)
                        path.unshift(cur);
                    if (id === path.at(-1)?.id())
                        return false;
                    return next ?? ($mol_mem_cached(() => this.item_expanded(id)) || path.some(book => book.id() === id));
                }
                catch (error) {
                    if (!$mol_promise_like(error))
                        $mol_fail_hidden(error);
                    if (id === cur.id())
                        return true;
                    return $mol_mem_cached(() => this.item_expanded(id)) ?? false;
                }
            }
            item_moved(what, where) {
                const page = this.item(what).as($hyoo_page_side);
                const book_next = where ? this.item(where).as($hyoo_page_side) : null;
                const book_prev = page.book();
                if (book_prev !== book_next)
                    book_prev?.pages_node().drop(what);
                page.book(book_next);
            }
        }
        __decorate([
            $mol_mem_key
        ], $hyoo_page_side_menu.prototype, "item_expanded", null);
        __decorate([
            $mol_action
        ], $hyoo_page_side_menu.prototype, "item_moved", null);
        $$.$hyoo_page_side_menu = $hyoo_page_side_menu;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_bar) = class $mol_bar extends ($.$mol_view) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/bar/bar.view.css", "[mol_bar] {\n\tdisplay: flex;\n\t/* box-shadow: inset 0 0 0 1px var(--mol_theme_line); */\n\tborder-radius: var(--mol_gap_round);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_paginator) = class $mol_paginator extends ($.$mol_bar) {
		backward_hint(){
			return (this.$.$mol_locale.text("$mol_paginator_backward_hint"));
		}
		backward(next){
			if(next !== undefined) return next;
			return null;
		}
		Backward_icon(){
			const obj = new this.$.$mol_icon_chevron_left();
			return obj;
		}
		Backward(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.backward_hint()));
			(obj.click) = (next) => ((this.backward(next)));
			(obj.sub) = () => ([(this.Backward_icon())]);
			return obj;
		}
		value(next){
			if(next !== undefined) return next;
			return 0;
		}
		Value(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.value())]);
			return obj;
		}
		forward_hint(){
			return (this.$.$mol_locale.text("$mol_paginator_forward_hint"));
		}
		forward(next){
			if(next !== undefined) return next;
			return null;
		}
		Forward_icon(){
			const obj = new this.$.$mol_icon_chevron_right();
			return obj;
		}
		Forward(){
			const obj = new this.$.$mol_button_minor();
			(obj.hint) = () => ((this.forward_hint()));
			(obj.click) = (next) => ((this.forward(next)));
			(obj.sub) = () => ([(this.Forward_icon())]);
			return obj;
		}
		sub(){
			return [
				(this.Backward()), 
				(this.Value()), 
				(this.Forward())
			];
		}
	};
	($mol_mem(($.$mol_paginator.prototype), "backward"));
	($mol_mem(($.$mol_paginator.prototype), "Backward_icon"));
	($mol_mem(($.$mol_paginator.prototype), "Backward"));
	($mol_mem(($.$mol_paginator.prototype), "value"));
	($mol_mem(($.$mol_paginator.prototype), "Value"));
	($mol_mem(($.$mol_paginator.prototype), "forward"));
	($mol_mem(($.$mol_paginator.prototype), "Forward_icon"));
	($mol_mem(($.$mol_paginator.prototype), "Forward"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paginator extends $.$mol_paginator {
            backward(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                this.value(this.value() - 1);
            }
            forward(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                this.value(this.value() + 1);
            }
        }
        $$.$mol_paginator = $mol_paginator;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paginator/paginator.view.css", "[mol_paginator] {\n\talign-items: flex-start;\n}\n\n[mol_paginator_value] {\n\tpadding: .5rem 0;\n}\n");
})($ || ($ = {}));

;
	($.$mol_search_jumper) = class $mol_search_jumper extends ($.$mol_search) {
		index(next){
			if(next !== undefined) return next;
			return 0;
		}
		forward(next){
			return (this.Index().forward(next));
		}
		backward(next){
			return (this.Index().backward(next));
		}
		Backward(){
			const obj = new this.$.$mol_hotkey();
			(obj.mod_shift) = () => (true);
			(obj.key) = () => ({"enter": (next) => (this.backward(next))});
			return obj;
		}
		escape(next){
			if(next !== undefined) return next;
			return null;
		}
		Forward(){
			const obj = new this.$.$mol_hotkey();
			(obj.key) = () => ({"enter": (next) => (this.forward(next)), "escape": (next) => (this.escape(next))});
			return obj;
		}
		Root(){
			const obj = new this.$.$mol_view();
			return obj;
		}
		Index(){
			const obj = new this.$.$mol_paginator();
			(obj.value) = (next) => ((this.index(next)));
			return obj;
		}
		plugins(){
			return [
				...(super.plugins()), 
				(this.Backward()), 
				(this.Forward())
			];
		}
	};
	($mol_mem(($.$mol_search_jumper.prototype), "index"));
	($mol_mem(($.$mol_search_jumper.prototype), "Backward"));
	($mol_mem(($.$mol_search_jumper.prototype), "escape"));
	($mol_mem(($.$mol_search_jumper.prototype), "Forward"));
	($mol_mem(($.$mol_search_jumper.prototype), "Root"));
	($mol_mem(($.$mol_search_jumper.prototype), "Index"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_search_jumper extends $.$mol_search_jumper {
            results() {
                const needle = this.query();
                if (needle.length < 2)
                    return [];
                const root = this.Root();
                if (!root)
                    return [];
                const regexp = $mol_regexp.from({ needle }, { ignoreCase: true });
                try {
                    return [...root.view_find((_, text = '') => regexp.test(text))];
                }
                catch (error) {
                    if (!(error instanceof Promise))
                        $mol_fail_hidden(error);
                    return [];
                }
            }
            index(next) {
                this.query();
                const all = this.results();
                if (all.length == 0)
                    return 0;
                let index = next ?? super.index();
                if (index > all.length)
                    index = 1;
                if (index <= 0)
                    index = all.length;
                if (next !== undefined) {
                    const path = all[index - 1];
                    this.Root().ensure_visible(path[path.length - 1]);
                }
                return index;
            }
            anchor_content() {
                return [
                    this.Query(),
                    ...(this.query().length > 0) ? [
                        this.Clear(),
                        this.Index(),
                    ] : [],
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_search_jumper.prototype, "results", null);
        __decorate([
            $mol_mem
        ], $mol_search_jumper.prototype, "index", null);
        $$.$mol_search_jumper = $mol_search_jumper;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$mol_icon_information) = class $mol_icon_information extends ($.$mol_icon) {
		path(){
			return "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_information_outline) = class $mol_icon_information_outline extends ($.$mol_icon) {
		path(){
			return "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_bookmark) = class $mol_icon_bookmark extends ($.$mol_icon) {
		path(){
			return "M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_bookmark_outline) = class $mol_icon_bookmark_outline extends ($.$mol_icon) {
		path(){
			return "M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z";
		}
	};


;
"use strict";

;
	($.$hyoo_page_side_view) = class $hyoo_page_side_view extends ($.$mol_page) {
		id(){
			return (this.side().id());
		}
		editable(){
			return (this.side().editable());
		}
		title(next){
			return (this.side().title(next));
		}
		side_details(next){
			return (this.side().details(next));
		}
		released(){
			return (this.side().released());
		}
		side_release(){
			return (this.side().release());
		}
		changed_moment(){
			return (this.side().changed_moment());
		}
		authors(){
			return (this.side().authors());
		}
		following(){
			return (this.side().following());
		}
		search_start(next){
			if(next !== undefined) return next;
			return null;
		}
		Search_start(){
			const obj = new this.$.$mol_hotkey();
			(obj.key) = () => ({"F": (next) => (this.search_start(next))});
			(obj.mod_ctrl) = () => (true);
			return obj;
		}
		slides_send(){
			return null;
		}
		history_mark(){
			return null;
		}
		menu_showed(next){
			if(next !== undefined) return next;
			return false;
		}
		Avatar(){
			const obj = new this.$.$mol_avatar();
			(obj.id) = () => ((this.id()));
			return obj;
		}
		Menu_toggle(){
			const obj = new this.$.$mol_check();
			(obj.checked) = (next) => ((this.menu_showed(next)));
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_side_view_Menu_toggle_hint")));
			(obj.sub) = () => ([(this.Avatar())]);
			return obj;
		}
		search_query(next){
			if(next !== undefined) return next;
			return "";
		}
		search_stop(next){
			if(next !== undefined) return next;
			return null;
		}
		Search(){
			const obj = new this.$.$mol_search_jumper();
			(obj.query) = (next) => ((this.search_query(next)));
			(obj.Root) = () => ((this.Details()));
			(obj.clear) = (next) => ((this.search_stop(next)));
			return obj;
		}
		editing(next){
			if(next !== undefined) return next;
			return false;
		}
		Edit_icon(){
			const obj = new this.$.$mol_icon_pencil_outline();
			return obj;
		}
		Unreleased(){
			const obj = new this.$.$mol_speck();
			return obj;
		}
		edit_toggle_label(){
			return [(this.Unreleased())];
		}
		Edit_toggle(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_side_view_Edit_toggle_hint")));
			(obj.checked) = (next) => ((this.editing(next)));
			(obj.Icon) = () => ((this.Edit_icon()));
			(obj.label) = () => ((this.edit_toggle_label()));
			return obj;
		}
		search_show(next){
			if(next !== undefined) return next;
			return false;
		}
		Search_icon(){
			const obj = new this.$.$mol_icon_magnify();
			return obj;
		}
		Search_toggle(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_side_view_Search_toggle_hint")));
			(obj.checked) = (next) => ((this.search_show(next)));
			(obj.Icon) = () => ((this.Search_icon()));
			return obj;
		}
		info(next){
			if(next !== undefined) return next;
			return false;
		}
		Info_icon(){
			const obj = new this.$.$mol_icon_information_outline();
			return obj;
		}
		Info_toggle(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_side_view_Info_toggle_hint")));
			(obj.checked) = (next) => ((this.info(next)));
			(obj.Icon) = () => ((this.Info_icon()));
			return obj;
		}
		bookmark(next){
			if(next !== undefined) return next;
			return false;
		}
		Bookmark_icon(){
			const obj = new this.$.$mol_icon_bookmark_outline();
			return obj;
		}
		Bookmark_toggle(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_side_view_Bookmark_toggle_hint")));
			(obj.checked) = (next) => ((this.bookmark(next)));
			(obj.Icon) = () => ((this.Bookmark_icon()));
			return obj;
		}
		details(){
			return "";
		}
		Details(){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.details()));
			(obj.highlight) = () => ((this.search_query()));
			return obj;
		}
		Changed(){
			const obj = new this.$.$mol_date();
			(obj.value_moment) = () => ((this.changed_moment()));
			return obj;
		}
		author_link(id){
			return "https://page.hyoo.ru/#!={person}";
		}
		Author_link(id){
			const obj = new this.$.$hyoo_meta_link();
			(obj.meta) = () => ((this.peer(id)));
			(obj.uri) = () => ((this.author_link(id)));
			return obj;
		}
		author_list(){
			return [(this.Author_link("0_0"))];
		}
		Author_list(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ((this.author_list()));
			return obj;
		}
		Following(){
			const obj = new this.$.$hyoo_meta_link();
			(obj.meta) = () => ((this.following()));
			return obj;
		}
		Signature(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Changed()), 
				(this.Author_list()), 
				(this.Following())
			]);
			return obj;
		}
		profile(){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		peer(id){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		book(){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		highlight(){
			return "";
		}
		side(){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		plugins(){
			return [(this.Search_start())];
		}
		auto(){
			return [(this.slides_send()), (this.history_mark())];
		}
		Logo(){
			return (this.Menu_toggle());
		}
		head(){
			return [
				(this.Title()), 
				(this.Tools()), 
				(this.Search())
			];
		}
		tools(){
			return [
				(this.Edit_toggle()), 
				(this.Search_toggle()), 
				(this.Info_toggle()), 
				(this.Bookmark_toggle())
			];
		}
		body(){
			return [(this.Details()), (this.Signature())];
		}
	};
	($mol_mem(($.$hyoo_page_side_view.prototype), "search_start"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Search_start"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "menu_showed"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Avatar"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Menu_toggle"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "search_query"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "search_stop"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Search"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "editing"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Edit_icon"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Unreleased"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Edit_toggle"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "search_show"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Search_icon"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Search_toggle"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "info"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Info_icon"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Info_toggle"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "bookmark"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Bookmark_icon"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Bookmark_toggle"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Details"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Changed"));
	($mol_mem_key(($.$hyoo_page_side_view.prototype), "Author_link"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Author_list"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Following"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "Signature"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "profile"));
	($mol_mem_key(($.$hyoo_page_side_view.prototype), "peer"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "book"));
	($mol_mem(($.$hyoo_page_side_view.prototype), "side"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page_side_view extends $.$hyoo_page_side_view {
            head() {
                return [
                    this.Title(),
                    this.Tools(),
                    ...this.search_show() ? [this.Search()] : [],
                ];
            }
            bookmark(next) {
                if (next)
                    this.$.$mol_storage.persisted(true);
                return this.profile().bookmarked(this.side().id(), next);
            }
            public(next) {
                return this.side().book()?.bookmarked(this.side().id(), next);
            }
            Edit_toggle() {
                return this.editable() ? super.Edit_toggle() : null;
            }
            edit_toggle_label() {
                return this.released() ? [] : [this.Unreleased()];
            }
            search_show(next = false) {
                if (next === true) {
                    this.search_query(this.highlight());
                    this.Search().bring();
                }
                if (next === false)
                    this.search_query('');
                return next;
            }
            search_start(event) {
                this.search_show(true);
                event?.preventDefault();
            }
            search_stop(event) {
                this.search_show(false);
                this.Search_toggle().focused(true);
                event?.preventDefault();
            }
            details() {
                return this.editing() ? this.side_details() : this.side_release();
            }
            Following() {
                return this.following() ? super.Following() : null;
            }
            author_list() {
                return [...this.authors()].map(peer => this.Author_link(peer));
            }
            slides_send() {
                const parent = this.$.$mol_dom_context.parent;
                if (parent === this.$.$mol_dom_context.self)
                    return;
                parent.postMessage(['done', this.side().content_full().replaceAll(/\n--+\n/g, '\n')], { targetOrigin: 'https://slides.hyoo.ru' });
            }
            history_mark() {
                this.profile().history_add(this.side().id());
            }
            author_link(id) {
                return super.author_link(id).replace('{person}', id);
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_page_side_view.prototype, "head", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_view.prototype, "edit_toggle_label", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_view.prototype, "search_show", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_view.prototype, "author_list", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_view.prototype, "slides_send", null);
        __decorate([
            $mol_action
        ], $hyoo_page_side_view.prototype, "history_mark", null);
        $$.$hyoo_page_side_view = $hyoo_page_side_view;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem, per } = $mol_style_unit;
    $mol_style_define($hyoo_page_side_view, {
        flex: {
            basis: rem(50),
            grow: 0,
        },
        Menu_toggle: {
            margin: [rem(-.5), rem(-.75)],
        },
        Body_content: {
            justifyContent: 'space-between',
        },
        Search: {
            flex: {
                basis: per(100),
            },
        },
        Signature: {
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            flex: {
                direction: 'row-reverse',
                wrap: 'wrap',
            },
        },
        Following: {
            flex: {
                grow: 1,
                shrink: 1,
            },
            color: $mol_theme.special,
        },
    });
})($ || ($ = {}));

;
	($.$mol_icon_publish) = class $mol_icon_publish extends ($.$mol_icon) {
		path(){
			return "M5,4V6H19V4H5M5,14H9V20H15V14H19L12,7L5,14Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_export) = class $mol_icon_export extends ($.$mol_icon) {
		path(){
			return "M23,12L19,8V11H10V13H19V16M1,18V6C1,4.89 1.9,4 3,4H15A2,2 0 0,1 17,6V9H15V6H3V18H15V15H17V18A2,2 0 0,1 15,20H3A2,2 0 0,1 1,18Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_download) = class $mol_icon_download extends ($.$mol_icon) {
		path(){
			return "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z";
		}
	};


;
"use strict";

;
	($.$mol_button_download) = class $mol_button_download extends ($.$mol_button_minor) {
		Icon(){
			const obj = new this.$.$mol_icon_download();
			return obj;
		}
		title(){
			return "";
		}
		blob(){
			return null;
		}
		uri(){
			return "";
		}
		file_name(){
			return "blob.bin";
		}
		sub(){
			return [(this.Icon()), (this.title())];
		}
	};
	($mol_mem(($.$mol_button_download.prototype), "Icon"));


;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_download extends $.$mol_button_download {
            uri() {
                return URL.createObjectURL(this.blob());
            }
            click() {
                const a = $mol_jsx("a", { href: this.uri(), download: this.file_name() });
                a.click();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button_download.prototype, "uri", null);
        $$.$mol_button_download = $mol_button_download;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";

;
	($.$mol_icon_shield) = class $mol_icon_shield extends ($.$mol_icon) {
		path(){
			return "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_shield_account) = class $mol_icon_shield_account extends ($.$mol_icon) {
		path(){
			return "M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z";
		}
	};


;
"use strict";

;
	($.$mol_string_button) = class $mol_string_button extends ($.$mol_string) {};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/button/button.view.css", "[mol_string_button]:not(:placeholder-shown):not(:focus):not(:hover):not(:disabled) {\n\tcolor: var(--mol_theme_control);\n\tbackground: transparent;\n\tbox-shadow: none;\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$hyoo_page_side_edit) = class $hyoo_page_side_edit extends ($.$mol_page) {
		title(next){
			return (this.side().title(next));
		}
		details(next){
			return (this.side().details(next));
		}
		details_selection(next){
			return (this.side().details_selection(next));
		}
		content_full(){
			return (this.side().content_full());
		}
		aura(next){
			return (this.side().aura(next));
		}
		editable(){
			return (this.side().editable());
		}
		released(){
			return (this.side().released());
		}
		Syntax(){
			const obj = new this.$.$mol_link_iconed();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_side_edit_Syntax_hint")));
			(obj.uri) = () => ("https://marked.hyoo.ru/");
			(obj.icon) = () => ("https://marked.hyoo.ru/hyoo/marked/logo/logo.svg");
			(obj.title) = () => ("");
			return obj;
		}
		publish(next){
			if(next !== undefined) return next;
			return null;
		}
		Publish_icon(){
			const obj = new this.$.$mol_icon_publish();
			return obj;
		}
		Publish(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.publish(next)));
			(obj.disabled) = () => ((this.released()));
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_side_edit_Publish_hint")));
			(obj.sub) = () => ([(this.Publish_icon())]);
			return obj;
		}
		Export_icon(){
			const obj = new this.$.$mol_icon_export();
			return obj;
		}
		download_name(){
			return "{filename}.mt";
		}
		download_blob(){
			const obj = new this.$.$mol_blob();
			return obj;
		}
		Download(){
			const obj = new this.$.$mol_button_download();
			(obj.title) = () => ((this.$.$mol_locale.text("$hyoo_page_side_edit_Download_title")));
			(obj.file_name) = () => ((this.download_name()));
			(obj.blob) = () => ((this.download_blob()));
			return obj;
		}
		copy_text(){
			return "";
		}
		copy_html(){
			return "";
		}
		Copy_html(){
			const obj = new this.$.$mol_button_copy();
			(obj.title) = () => ((this.$.$mol_locale.text("$hyoo_page_side_edit_Copy_html_title")));
			(obj.text) = () => ((this.copy_text()));
			(obj.html) = () => ((this.copy_html()));
			return obj;
		}
		Export(){
			const obj = new this.$.$mol_pick();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_side_edit_Export_hint")));
			(obj.trigger_content) = () => ([(this.Export_icon())]);
			(obj.bubble_content) = () => ([(this.Download()), (this.Copy_html())]);
			return obj;
		}
		rights(next){
			if(next !== undefined) return next;
			return false;
		}
		Rights_icon(){
			const obj = new this.$.$mol_icon_shield_account();
			return obj;
		}
		Rights_toggle(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_side_edit_Rights_toggle_hint")));
			(obj.checked) = (next) => ((this.rights(next)));
			(obj.Icon) = () => ((this.Rights_icon()));
			return obj;
		}
		close(next){
			if(next !== undefined) return next;
			return null;
		}
		Close_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		Close(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.close(next)));
			(obj.sub) = () => ([(this.Close_icon())]);
			return obj;
		}
		Details_edit(){
			const obj = new this.$.$mol_textarea();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_side_edit_Details_edit_hint")));
			(obj.value) = (next) => ((this.details(next)));
			(obj.selection) = (next) => ((this.details_selection(next)));
			(obj.enabled) = () => ((this.editable()));
			return obj;
		}
		Aura(){
			const obj = new this.$.$mol_string_button();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_side_edit_Aura_hint")));
			(obj.value) = (next) => ((this.aura(next)));
			(obj.enabled) = () => ((this.editable()));
			return obj;
		}
		Aura_field(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$hyoo_page_side_edit_Aura_field_name")));
			(obj.Content) = () => ((this.Aura()));
			return obj;
		}
		side(){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		Title(){
			const obj = new this.$.$mol_string_button();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_side_edit_Title_hint")));
			(obj.value) = (next) => ((this.title(next)));
			(obj.enabled) = () => ((this.editable()));
			return obj;
		}
		export_sign(){
			return (this.$.$mol_locale.text("$hyoo_page_side_edit_export_sign"));
		}
		tools(){
			return [
				(this.Syntax()), 
				(this.Publish()), 
				(this.Export()), 
				(this.Rights_toggle()), 
				(this.Close())
			];
		}
		body(){
			return [(this.Details_edit()), (this.Aura_field())];
		}
	};
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Syntax"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "publish"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Publish_icon"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Publish"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Export_icon"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "download_blob"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Download"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Copy_html"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Export"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "rights"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Rights_icon"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Rights_toggle"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "close"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Close_icon"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Close"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Details_edit"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Aura"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Aura_field"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "side"));
	($mol_mem(($.$hyoo_page_side_edit.prototype), "Title"));


;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_cut = $mol_regexp.from([
        '--',
        $mol_regexp.line_end,
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { optional, slash_back, char_any, char_except, repeat } = $mol_regexp;
    $.$hyoo_marked_line_content = repeat(char_except('\r\n'), 1);
    const uri = repeat(char_except(slash_back));
    const content = { content: $.$hyoo_marked_line_content };
    const strong = $mol_regexp.from([{ marker: '**' }, content, '**']);
    const emphasis = $mol_regexp.from([{ marker: '//' }, content, '//']);
    const insertion = $mol_regexp.from([{ marker: '++' }, content, '++']);
    const deletion = $mol_regexp.from([{ marker: '--' }, content, '--']);
    const code = $mol_regexp.from([{ marker: ';;' }, content, ';;']);
    const with_uri = $mol_regexp.from([
        optional([
            { content: $.$hyoo_marked_line_content },
            slash_back
        ]),
        { uri },
    ]);
    const link = $mol_regexp.from([{ marker: '\\\\' }, with_uri, '\\\\']);
    const embed = $mol_regexp.from([{ marker: '""' }, with_uri, '""']);
    const inline = $mol_regexp.from({ strong, emphasis, insertion, deletion, code, link, embed });
    $.$hyoo_marked_line = $mol_regexp.from({ inline });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_header = $mol_regexp.from([
        { marker: $mol_regexp.repeat_greedy('=', 1, 6) },
        ' ',
        { content: $hyoo_marked_line_content },
        $mol_regexp.line_end,
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_list_line = $mol_regexp.from([
        { indent: $mol_regexp.repeat('  ') },
        { marker: ['-', $mol_regexp.or, '+'] },
        ' ',
        { content: $hyoo_marked_line_content },
        $mol_regexp.line_end,
    ]);
    $.$hyoo_marked_list_item = $mol_regexp.from([
        $.$hyoo_marked_list_line,
        { kids: $mol_regexp.repeat_greedy([
                '  ',
                $hyoo_marked_line_content,
                $mol_regexp.line_end,
            ]) },
    ]);
    $.$hyoo_marked_list = $mol_regexp.repeat_greedy($.$hyoo_marked_list_item, 1);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_quote_line = $mol_regexp.from([
        { marker: '"' },
        ' ',
        { content: $hyoo_marked_line_content },
        $mol_regexp.line_end,
    ]);
    $.$hyoo_marked_quote = $mol_regexp.repeat_greedy($.$hyoo_marked_quote_line, 1);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_table_line = $mol_regexp.from([
        { indent: $mol_regexp.repeat('  ') },
        { marker: '!' },
        ' ',
        { content: $hyoo_marked_line_content },
        $mol_regexp.line_end,
    ]);
    $.$hyoo_marked_table_row = $mol_regexp.from({ content: [
            $.$hyoo_marked_table_line,
            $mol_regexp.repeat_greedy([
                '  ',
                $hyoo_marked_line_content,
                $mol_regexp.line_end,
            ]),
        ] });
    $.$hyoo_marked_table = $mol_regexp.repeat_greedy($.$hyoo_marked_table_line, 1);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { or, tab, char_any, repeat, line_end, vary } = $mol_regexp;
    $.$hyoo_marked_script_line = $mol_regexp.from([
        vary([
            tab,
            [' ', { marker: ['  ', or, '++', or, '--', or, '**'] }, ' '],
        ]),
        { content: repeat(char_any) },
        line_end,
    ]);
    $.$hyoo_marked_script = $mol_regexp.repeat_greedy($.$hyoo_marked_script_line, 1);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_paragraph = $mol_regexp.from([
        { content: $mol_regexp.repeat($mol_regexp.char_any) },
        $mol_regexp.line_end,
    ]);
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$hyoo_marked_flow = $mol_regexp.from([
        $mol_regexp.begin,
        {
            cut: $hyoo_marked_cut,
            header: $hyoo_marked_header,
            list: $hyoo_marked_list,
            quote: $hyoo_marked_quote,
            table: $hyoo_marked_table,
            script: $hyoo_marked_script,
            paragraph: $hyoo_marked_paragraph,
        },
    ], { multiline: true });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const NL = '\n';
    function flow(marked) {
        return [...marked.matchAll($hyoo_marked_flow)].map(found => {
            const token = found.groups;
            if (!token)
                return found[0];
            if (token.cut) {
                return $mol_jsx("hr", null);
            }
            if (token.header) {
                const level = token.marker.length;
                const Tag = `h${level}`;
                return $mol_jsx(Tag, { style: "break-after: avoid" },
                    NL,
                    line(token.content),
                    NL);
            }
            if (token.list) {
                const Tag = token.list[0] === '+' ? 'ol' : 'ul';
                return $mol_jsx(Tag, { style: "break-before: avoid" },
                    NL,
                    list_items(token.list),
                    NL);
            }
            if (token.table) {
                return $mol_jsx("table", null,
                    NL,
                    table_rows(token.table),
                    NL);
            }
            if (token.script) {
                return $mol_jsx("pre", null,
                    NL,
                    script_lines(token.script),
                    NL);
            }
            if (token.quote) {
                return $mol_jsx("blockquote", { style: "break-before: avoid" },
                    NL,
                    flow(token.quote.replace(/^" /gm, '')),
                    NL);
            }
            if (token.paragraph) {
                if (!token.content)
                    return '';
                const content = line(token.content);
                if (content.length !== 1)
                    return $mol_jsx("p", null,
                        NL,
                        content,
                        NL);
                if (typeof content[0] === 'string')
                    return $mol_jsx("p", null,
                        NL,
                        content,
                        NL);
                switch (content[0].localName) {
                    case 'object': return content[0];
                    default: return $mol_jsx("p", null,
                        NL,
                        content,
                        NL);
                }
            }
            return $mol_fail(new SyntaxError(`Unknown token`));
        }).filter(Boolean);
    }
    function table_cells(marked) {
        const tokens = [...marked.matchAll($hyoo_marked_table_line)];
        const cols = [];
        for (const token of tokens) {
            const index = Math.ceil(token.groups.indent.length / 2);
            const col = cols[index] || (cols[index] = []);
            col.push(token);
        }
        return cols.map(col => {
            const lines = col.map(line => line.groups.content);
            return $mol_jsx("td", null,
                NL,
                flow(lines.join('\n') + '\n'),
                NL);
        });
    }
    function table_rows(marked) {
        return [...marked.matchAll($hyoo_marked_table_row)].map(token => {
            return $mol_jsx("tr", null,
                NL,
                table_cells(token.groups.content),
                NL);
        }).filter(Boolean);
    }
    function list_items(marked) {
        return [...marked.matchAll($hyoo_marked_list_item)].map(token => {
            const kids = token.groups.kids.replace(/^  /gm, '');
            return $mol_jsx("li", null,
                flow(token.groups.content.replace(/^  /gm, '') + '\n'),
                flow(kids));
        }).filter(Boolean);
    }
    function script_lines(marked) {
        return [...marked.matchAll($hyoo_marked_script_line)].map(token => {
            if (token.groups.marker === '++')
                return $mol_jsx("ins", null,
                    "$",
                    token.groups.content,
                    NL);
            if (token.groups.marker === '--')
                return $mol_jsx("del", null,
                    "$",
                    token.groups.content,
                    NL);
            if (token.groups.marker === '**')
                return $mol_jsx("strong", null,
                    "$",
                    token.groups.content,
                    NL);
            return $mol_jsx("span", null,
                token.groups.content,
                NL);
        }).filter(Boolean);
    }
    function line(marked) {
        return [...marked.matchAll($hyoo_marked_line)].map(found => {
            const token = found.groups;
            if (!token)
                return $mol_jsx("span", null, found[0]);
            if (token.strong) {
                return $mol_jsx("strong", null, line(token.content));
            }
            if (token.emphasis) {
                return $mol_jsx("em", null, line(token.content));
            }
            if (token.insertion) {
                return $mol_jsx("ins", null, line(token.content));
            }
            if (token.deletion) {
                return $mol_jsx("del", null, line(token.content));
            }
            if (token.code) {
                return $mol_jsx("code", null, token.content);
            }
            if (token.link) {
                return $mol_jsx("a", { href: token.uri }, line(token.content || token.uri));
            }
            if (token.embed) {
                if (/\b(png|gif|jpg|jpeg|jfif|webp|svg)\b/.test(token.uri)) {
                    return $mol_jsx("img", { src: token.uri, alt: token.content });
                }
                return ($mol_jsx("object", { data: token.uri },
                    NL,
                    $mol_jsx("iframe", { src: token.uri }, token.uri),
                    NL));
            }
            return token[0];
        }).filter(Boolean);
    }
    function $hyoo_marked_to_dom(marked) {
        return $mol_jsx("body", null, flow(marked + '\n'));
    }
    $.$hyoo_marked_to_dom = $hyoo_marked_to_dom;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $hyoo_marked_to_html(marked) {
        return this.$hyoo_marked_to_dom(marked).innerHTML;
    }
    $.$hyoo_marked_to_html = $hyoo_marked_to_html;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page_side_edit extends $.$hyoo_page_side_edit {
            publish() {
                this.side().publish();
            }
            permalink() {
                return this.$.$mol_state_arg.make_link({ '': this.side().id() });
            }
            export_sign() {
                return super.export_sign().replace('{link}', this.permalink());
            }
            download_name() {
                return super.download_name().replace('{filename}', this.title());
            }
            copy_text() {
                const view = this.Details_edit().View();
                let details = this.content_full()
                    .replaceAll(/\\\\(?:([^\\]+?)\\)?([^\\]+?)\\\\/gm, (whole, title, link) => title
                    ? `\\\\${title}\\${view.uri_resolve(link)}\\\\`
                    : `\\\\${view.uri_resolve(link)}\\\\`);
                return `${details}--\n\n${this.export_sign()}`;
            }
            download_blob() {
                return new $mol_dom_context.Blob([this.copy_text()], { type: 'text/x-marked' });
            }
            copy_html() {
                return this.$.$hyoo_marked_to_html(this.copy_text());
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_page_side_edit.prototype, "permalink", null);
        $$.$hyoo_page_side_edit = $hyoo_page_side_edit;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($hyoo_page_side_edit, {
        margin: [0, 'auto'],
        flex: {
            basis: rem(50),
            grow: 0,
        },
        Tools: {
            flex: {
                grow: 0,
            },
        },
    });
})($ || ($ = {}));

;
	($.$hyoo_page_side_info) = class $hyoo_page_side_info extends ($.$mol_page) {
		text_tokens(){
			return (this.Text().flow_tokens());
		}
		text_header_title(id){
			return (this.Text().block_text(id));
		}
		section_arg(id){
			return (this.Text().header_arg(id));
		}
		section_level(id){
			return (this.Text().header_level(id));
		}
		details(){
			return (this.side().details());
		}
		details_node(){
			return (this.side().details_node());
		}
		referrers_list(){
			return (this.side().referrers_list());
		}
		referrers_stat(id){
			return (this.side().referrers_stat(id));
		}
		slides_uri(){
			return "https://slides.hyoo.ru/#!slides={source}";
		}
		Slides(){
			const obj = new this.$.$mol_link_iconed();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_side_info_Slides_hint")));
			(obj.uri) = () => ((this.slides_uri()));
			(obj.title) = () => ("");
			return obj;
		}
		close(next){
			if(next !== undefined) return next;
			return null;
		}
		Close_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		Close(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.close(next)));
			(obj.sub) = () => ([(this.Close_icon())]);
			return obj;
		}
		size(){
			return "0";
		}
		Size(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$hyoo_page_side_info_Size_title")));
			(obj.content) = () => ([(this.size())]);
			return obj;
		}
		chars(){
			return "0";
		}
		Chars(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$hyoo_page_side_info_Chars_title")));
			(obj.content) = () => ([(this.chars())]);
			return obj;
		}
		words(){
			return "0";
		}
		Words(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$hyoo_page_side_info_Words_title")));
			(obj.content) = () => ([(this.words())]);
			return obj;
		}
		weight(){
			return "0B";
		}
		Weight(){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.$.$mol_locale.text("$hyoo_page_side_info_Weight_title")));
			(obj.content) = () => ([(this.weight())]);
			return obj;
		}
		Stat(){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([
				(this.Size()), 
				(this.Chars()), 
				(this.Words()), 
				(this.Weight())
			]);
			return obj;
		}
		section_expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		section_title(id){
			return "";
		}
		Section_link(id){
			const obj = new this.$.$mol_link();
			(obj.arg) = () => ((this.section_arg(id)));
			(obj.title) = () => ((this.section_title(id)));
			return obj;
		}
		section_list(){
			return [(this.Section_link("0"))];
		}
		Section_list(){
			const obj = new this.$.$mol_expander();
			(obj.title) = () => ((this.$.$mol_locale.text("$hyoo_page_side_info_Section_list_title")));
			(obj.expanded) = (next) => ((this.section_expanded(next)));
			(obj.content) = () => ((this.section_list()));
			return obj;
		}
		ref_expanded(next){
			if(next !== undefined) return next;
			return false;
		}
		ref_uri(id){
			return "";
		}
		Ref_item_link(id){
			const obj = new this.$.$mol_link_iconed();
			(obj.uri) = () => ((this.ref_uri(id)));
			return obj;
		}
		ref_stat(id){
			return 0;
		}
		Ref_item_stat(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.ref_stat(id))]);
			return obj;
		}
		Ref_item(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Ref_item_link(id)), (this.Ref_item_stat(id))]);
			return obj;
		}
		ref_list(){
			return [(this.Ref_item("0_0"))];
		}
		Ref_list(){
			const obj = new this.$.$mol_expander();
			(obj.title) = () => ((this.$.$mol_locale.text("$hyoo_page_side_info_Ref_list_title")));
			(obj.expanded) = (next) => ((this.ref_expanded(next)));
			(obj.content) = () => ((this.ref_list()));
			return obj;
		}
		word_item_text(id){
			return "";
		}
		Word_item_text(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.word_item_text(id))]);
			return obj;
		}
		word_item_stat(id){
			return 0;
		}
		Word_item_stat(id){
			const obj = new this.$.$mol_speck();
			(obj.value) = () => ((this.word_item_stat(id)));
			(obj.theme) = () => ("$mol_theme_special");
			return obj;
		}
		Word_item(id){
			const obj = new this.$.$mol_view();
			(obj.sub) = () => ([(this.Word_item_text(id)), (this.Word_item_stat(id))]);
			return obj;
		}
		word_list_items(){
			return [(this.Word_item("0_0"))];
		}
		Word_list_items(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ((this.word_list_items()));
			return obj;
		}
		Word_list(){
			const obj = new this.$.$mol_expander();
			(obj.title) = () => ((this.$.$mol_locale.text("$hyoo_page_side_info_Word_list_title")));
			(obj.content) = () => ([(this.Word_list_items())]);
			return obj;
		}
		Text(){
			const obj = new this.$.$mol_text();
			return obj;
		}
		side(){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		title(){
			return (this.$.$mol_locale.text("$hyoo_page_side_info_title"));
		}
		tools(){
			return [(this.Slides()), (this.Close())];
		}
		body(){
			return [
				(this.Stat()), 
				(this.Section_list()), 
				(this.Ref_list()), 
				(this.Word_list())
			];
		}
	};
	($mol_mem(($.$hyoo_page_side_info.prototype), "Slides"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "close"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "Close_icon"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "Close"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "Size"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "Chars"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "Words"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "Weight"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "Stat"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "section_expanded"));
	($mol_mem_key(($.$hyoo_page_side_info.prototype), "Section_link"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "Section_list"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "ref_expanded"));
	($mol_mem_key(($.$hyoo_page_side_info.prototype), "Ref_item_link"));
	($mol_mem_key(($.$hyoo_page_side_info.prototype), "Ref_item_stat"));
	($mol_mem_key(($.$hyoo_page_side_info.prototype), "Ref_item"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "Ref_list"));
	($mol_mem_key(($.$hyoo_page_side_info.prototype), "Word_item_text"));
	($mol_mem_key(($.$hyoo_page_side_info.prototype), "Word_item_stat"));
	($mol_mem_key(($.$hyoo_page_side_info.prototype), "Word_item"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "Word_list_items"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "Word_list"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "Text"));
	($mol_mem(($.$hyoo_page_side_info.prototype), "side"));


;
"use strict";
var $;
(function ($) {
    function $mol_text_profile(text) {
        text = '\n\n' + text + '\n\n';
        const key = new Map();
        for (let i = 0; i < text.length - 2; ++i) {
            const trigram = text.slice(i, i + 3);
            const count = key.get(trigram) ?? 0;
            key.set(trigram, count + 1);
        }
        return key;
    }
    $.$mol_text_profile = $mol_text_profile;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page_side_info extends $.$hyoo_page_side_info {
            slides_uri() {
                const source = this.$.$mol_state_arg.href() + '/';
                return super.slides_uri().replace('{source}', encodeURIComponent(source));
            }
            section_indexes() {
                return [...this.text_tokens().entries()]
                    .filter(([index, token]) => token.name === 'header')
                    .map(([index]) => index);
            }
            section_list() {
                return this.section_indexes().map(index => this.Section_link(index));
            }
            section_title(index) {
                const prefix = ''.padEnd(2 * this.section_level(index), '− ');
                return prefix + this.text_header_title(index);
            }
            ref_list() {
                return this.referrers_list().map(uri => this.Ref_item(uri));
            }
            ref_uri(uri) {
                return uri;
            }
            ref_stat(uri) {
                return this.referrers_stat(uri);
            }
            weight() {
                const units = this.details_node()?.land.delta();
                const weight = units?.reduce((sum, unit) => {
                    return sum + $hyoo_crowd_unit_bin.from_unit(unit).byteLength;
                }, 0) ?? 0;
                return $mol_si_short(weight, 'B');
            }
            word_stat() {
                const stat = new Map();
                const text = this.details().toLowerCase()
                    .replace(/\]\(.*?\)/g, '')
                    .replace(/""(?:(.*?)\\)?.*?""/g, '$1')
                    .replace(/\\\\(?:(.*?)\\)?.*?\\\\/g, '$1');
                for (const match of text.matchAll(/\p{Letter}{2,}(?=((?:\P{Letter}\p{Letter}{2,})*))/ug) ?? []) {
                    const parts = match.join('').match(/\P{Letter}?\p{Letter}{2,}/gu) ?? [];
                    for (let i = 1; i <= parts.length; ++i) {
                        const word = parts.slice(0, i).join('');
                        if (word.length < 3)
                            continue;
                        stat.set(word, (stat.get(word) ?? 0) + 1);
                    }
                }
                return stat;
            }
            word_list_items() {
                const raw = [...this.word_stat()];
                const max = raw.reduce((max, [word, stat]) => Math.max(max, stat), 1);
                const min = Math.max(3, max ** .5);
                const filtered = raw.filter(([word, stat]) => stat >= min);
                filtered.sort((left, right) => right[0].length ** 1.6 - left[0].length ** 1.6 + right[1] - left[1]);
                return filtered.map(([word]) => this.Word_item(word));
            }
            word_item_text(word) {
                return word;
            }
            word_item_stat(word) {
                return this.word_stat().get(word);
            }
            size() {
                return $mol_si_short($mol_text_profile(this.details()).size, '');
            }
            chars() {
                return $mol_si_short(this.details().length, '');
            }
            words() {
                return $mol_si_short(this.details().match(/\p{Letter}+/ug)?.length ?? 0, '');
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "slides_uri", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "section_indexes", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "section_list", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_page_side_info.prototype, "section_title", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "ref_list", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_page_side_info.prototype, "ref_stat", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "weight", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "word_stat", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "word_list_items", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "size", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "chars", null);
        __decorate([
            $mol_mem
        ], $hyoo_page_side_info.prototype, "words", null);
        $$.$hyoo_page_side_info = $hyoo_page_side_info;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($hyoo_page_side_info, {
        flex: {
            basis: rem(20),
            grow: 0,
        },
        Section_list: {
            Content: {
                padding: {
                    left: rem(1.25),
                },
            },
        },
        Stat: {
            justifyContent: 'space-between',
            flex: {
                wrap: 'wrap',
            },
        },
        Ref_item_link: {
            flex: {
                shrink: 1,
                grow: 1,
            },
            wordBreak: 'break-word',
        },
        Ref_item_stat: {
            padding: $mol_gap.text,
        },
        Word_item_text: {
            flex: {
                grow: 1,
                shrink: 1,
            },
        },
    });
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    class $hyoo_meta_person extends $hyoo_meta_model {
    }
    $.$hyoo_meta_person = $hyoo_meta_person;
})($ || ($ = {}));

;
	($.$mol_button_major) = class $mol_button_major extends ($.$mol_button_minor) {
		theme(){
			return "$mol_theme_base";
		}
	};


;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/major/major.view.css", "[mol_button_major] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));

;
"use strict";

;
	($.$hyoo_meta_rights) = class $hyoo_meta_rights extends ($.$mol_page) {
		editors(){
			return (this.meta().editors());
		}
		peer(id){
			const obj = new this.$.$hyoo_meta_person();
			return obj;
		}
		Editor_link(id){
			const obj = new this.$.$hyoo_meta_link();
			(obj.meta) = () => ((this.peer(id)));
			return obj;
		}
		editor_list(){
			return [(this.Editor_link("0_0"))];
		}
		Editor_list(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.editor_list()));
			return obj;
		}
		editor_add_bid(){
			return (this.$.$mol_locale.text("$hyoo_meta_rights_editor_add_bid"));
		}
		editor_add_id(next){
			if(next !== undefined) return next;
			return "";
		}
		editable(){
			return false;
		}
		Editor_add_id(){
			const obj = new this.$.$mol_string();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_meta_rights_Editor_add_id_hint")));
			(obj.value) = (next) => ((this.editor_add_id(next)));
			(obj.enabled) = () => ((this.editable()));
			return obj;
		}
		editor_add_allowed(){
			return false;
		}
		editor_add_submit(next){
			if(next !== undefined) return next;
			return null;
		}
		Editor_add_icon(){
			const obj = new this.$.$mol_icon_plus();
			return obj;
		}
		Editor_add_submit(){
			const obj = new this.$.$mol_button_major();
			(obj.enabled) = () => ((this.editor_add_allowed()));
			(obj.click) = (next) => ((this.editor_add_submit(next)));
			(obj.sub) = () => ([(this.Editor_add_icon())]);
			return obj;
		}
		Editor_add_bar(){
			const obj = new this.$.$mol_bar();
			(obj.sub) = () => ([(this.Editor_add_id()), (this.Editor_add_submit())]);
			return obj;
		}
		editor_add_preview(){
			const obj = new this.$.$hyoo_meta_model();
			return obj;
		}
		Editor_add_preview(){
			const obj = new this.$.$hyoo_meta_link();
			(obj.meta) = () => ((this.editor_add_preview()));
			return obj;
		}
		editor_fill_all(next){
			if(next !== undefined) return next;
			return null;
		}
		Editor_fill_all(){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.$.$mol_locale.text("$hyoo_meta_rights_Editor_fill_all_title")));
			(obj.click) = (next) => ((this.editor_fill_all(next)));
			return obj;
		}
		editor_add_rows(){
			return [
				(this.Editor_add_bar()), 
				(this.Editor_add_preview()), 
				(this.Editor_fill_all())
			];
		}
		Editor_add_form(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.editor_add_rows()));
			return obj;
		}
		Editor_add(){
			const obj = new this.$.$mol_form_field();
			(obj.name) = () => ((this.$.$mol_locale.text("$hyoo_meta_rights_Editor_add_name")));
			(obj.bid) = () => ((this.editor_add_bid()));
			(obj.Content) = () => ((this.Editor_add_form()));
			return obj;
		}
		blocks(){
			return [(this.Editor_list()), (this.Editor_add())];
		}
		Content(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.blocks()));
			return obj;
		}
		title(){
			return (this.$.$mol_locale.text("$hyoo_meta_rights_title"));
		}
		meta(){
			const obj = new this.$.$hyoo_meta_model();
			return obj;
		}
		body(){
			return [(this.Content())];
		}
	};
	($mol_mem_key(($.$hyoo_meta_rights.prototype), "peer"));
	($mol_mem_key(($.$hyoo_meta_rights.prototype), "Editor_link"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "Editor_list"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "editor_add_id"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "Editor_add_id"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "editor_add_submit"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "Editor_add_icon"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "Editor_add_submit"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "Editor_add_bar"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "editor_add_preview"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "Editor_add_preview"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "editor_fill_all"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "Editor_fill_all"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "Editor_add_form"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "Editor_add"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "Content"));
	($mol_mem(($.$hyoo_meta_rights.prototype), "meta"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_meta_rights extends $.$hyoo_meta_rights {
            editable() {
                return this.meta().land.allowed_law();
            }
            blocks() {
                return [
                    this.Editor_list(),
                    ...this.editable() ? [this.Editor_add()] : [],
                ];
            }
            editor_list() {
                const meta = this.meta().id();
                return this.editors()
                    .filter(peer => peer !== meta)
                    .map(peer => this.Editor_link(peer));
            }
            editor_add_rows() {
                return [
                    this.Editor_add_bar(),
                    this.editor_add_id() ? this.Editor_add_preview() : this.Editor_fill_all(),
                ];
            }
            editor_add_id(next = '') {
                return (next.trim().match(/^(?:.*=)?([0-9a-z]+_[0-9a-z]+)/)?.[1] ?? '');
            }
            editor_add_allowed() {
                if (!this.editable())
                    return false;
                return Boolean(this.editor_add_id());
            }
            editor_add_bid() {
                return Boolean(this.editor_add_id()) ? super.editor_add_bid() : '';
            }
            editor_fill_all() {
                this.editor_add_id('0_0');
            }
            editor_add_submit() {
                const peer = this.editor_add_id();
                this.meta().land.level(peer, $hyoo_crowd_peer_level.mod);
                this.editor_add_id('');
            }
            editor_add_preview() {
                return this.peer(this.editor_add_id());
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_meta_rights.prototype, "blocks", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_rights.prototype, "editor_list", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_rights.prototype, "editor_add_rows", null);
        __decorate([
            $mol_mem
        ], $hyoo_meta_rights.prototype, "editor_add_id", null);
        $$.$hyoo_meta_rights = $hyoo_meta_rights;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    $mol_style_define($hyoo_meta_rights, {
        flex: {
            basis: rem(20),
            grow: 0,
        },
        Editor_add: {
            Content: {
                flex: {
                    wrap: 'wrap',
                },
            },
        },
    });
})($ || ($ = {}));

;
	($.$mol_icon_key) = class $mol_icon_key extends ($.$mol_icon) {
		path(){
			return "M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 10C11.8 7.7 9.6 6 7 6C3.7 6 1 8.7 1 12S3.7 18 7 18C9.6 18 11.8 16.3 12.6 14H16V18H20V14H23V10H12.6Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_key_variant) = class $mol_icon_key_variant extends ($.$mol_icon) {
		path(){
			return "M22,18V22H18V19H15V16H12L9.74,13.74C9.19,13.91 8.61,14 8,14A6,6 0 0,1 2,8A6,6 0 0,1 8,2A6,6 0 0,1 14,8C14,8.61 13.91,9.19 13.74,9.74L22,18M7,5A2,2 0 0,0 5,7A2,2 0 0,0 7,9A2,2 0 0,0 9,7A2,2 0 0,0 7,5Z";
		}
	};


;
"use strict";

;
	($.$mol_icon_image) = class $mol_icon_image extends ($.$mol_icon) {
		path(){
			return "M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z";
		}
	};


;
"use strict";

;
	($.$hyoo_page_menu) = class $hyoo_page_menu extends ($.$hyoo_meta_menu) {
		side(){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		Profile(){
			const obj = new this.$.$hyoo_meta_link();
			(obj.meta) = () => ((this.side()));
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_menu_Profile_hint")));
			(obj.Title) = () => (null);
			(obj.relation) = () => ("nofollow");
			return obj;
		}
		Online(){
			const obj = new this.$.$hyoo_sync_online();
			(obj.yard) = () => ((this.yard()));
			return obj;
		}
		Safe_icon(){
			const obj = new this.$.$mol_icon_key_variant();
			return obj;
		}
		safe_showing(next){
			if(next !== undefined) return next;
			return false;
		}
		Safe_showing(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_menu_Safe_showing_hint")));
			(obj.Icon) = () => ((this.Safe_icon()));
			(obj.checked) = (next) => ((this.safe_showing(next)));
			return obj;
		}
		About(){
			const obj = new this.$.$mol_link_iconed();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_menu_About_hint")));
			(obj.title) = () => ("");
			(obj.uri) = () => ("http://page.hyoo.ru/");
			return obj;
		}
		Aura_icon(){
			const obj = new this.$.$mol_icon_image();
			return obj;
		}
		aura_showing(next){
			if(next !== undefined) return next;
			return true;
		}
		Aura_showing(){
			const obj = new this.$.$mol_check_icon();
			(obj.hint) = () => ((this.$.$mol_locale.text("$hyoo_page_menu_Aura_showing_hint")));
			(obj.Icon) = () => ((this.Aura_icon()));
			(obj.checked) = (next) => ((this.aura_showing(next)));
			return obj;
		}
		Lights(){
			const obj = new this.$.$mol_lights_toggle();
			return obj;
		}
		title(){
			return (this.$.$mol_locale.text("$hyoo_page_menu_title"));
		}
		attr(){
			return {...(super.attr()), "mol_theme": "$mol_theme_special"};
		}
		head(){
			return [
				(this.Profile()), 
				(this.Title()), 
				(this.Tools())
			];
		}
		Logo(){
			return null;
		}
		foot(){
			return [
				(this.Online()), 
				(this.Safe_showing()), 
				(this.About()), 
				(this.Aura_showing()), 
				(this.Lights())
			];
		}
	};
	($mol_mem(($.$hyoo_page_menu.prototype), "side"));
	($mol_mem(($.$hyoo_page_menu.prototype), "Profile"));
	($mol_mem(($.$hyoo_page_menu.prototype), "Online"));
	($mol_mem(($.$hyoo_page_menu.prototype), "Safe_icon"));
	($mol_mem(($.$hyoo_page_menu.prototype), "safe_showing"));
	($mol_mem(($.$hyoo_page_menu.prototype), "Safe_showing"));
	($mol_mem(($.$hyoo_page_menu.prototype), "About"));
	($mol_mem(($.$hyoo_page_menu.prototype), "Aura_icon"));
	($mol_mem(($.$hyoo_page_menu.prototype), "aura_showing"));
	($mol_mem(($.$hyoo_page_menu.prototype), "Aura_showing"));
	($mol_mem(($.$hyoo_page_menu.prototype), "Lights"));


;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page_menu extends $.$hyoo_page_menu {
        }
        $$.$hyoo_page_menu = $hyoo_page_menu;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
	($.$hyoo_page) = class $hyoo_page extends ($.$mol_book2) {
		side_title(id){
			return (this.side(id).title());
		}
		pages_node(id){
			return (this.side(id).pages_node());
		}
		bookmarks_node(){
			return (this.profile().bookmarks_node());
		}
		aura_image(){
			return "";
		}
		Theme(){
			const obj = new this.$.$mol_theme_auto();
			return obj;
		}
		ref_track(){
			return null;
		}
		News(){
			const obj = new this.$.$hyoo_page_side_news();
			(obj.side) = () => ((this.profile()));
			return obj;
		}
		book_side(){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		book_pages_node(){
			return null;
		}
		side_uri(id){
			return "";
		}
		side_add(id, next){
			if(next !== undefined) return next;
			return null;
		}
		tools_ext(){
			return [];
		}
		Side_menu(){
			const obj = new this.$.$hyoo_page_side_menu();
			(obj.yard) = () => ((this.yard()));
			(obj.side) = () => ((this.book_side()));
			(obj.side_current) = () => ((this.side_current()));
			(obj.list) = () => ((this.book_pages_node()));
			(obj.item_list) = (id) => ((this.pages_node(id)));
			(obj.item_uri) = (id) => ((this.side_uri(id)));
			(obj.item_add) = (id, next) => ((this.side_add(id, next)));
			(obj.tools_ext) = () => ((this.tools_ext()));
			return obj;
		}
		side_menu_showed(next){
			if(next !== undefined) return next;
			return false;
		}
		editing(next){
			if(next !== undefined) return next;
			return false;
		}
		info(next){
			if(next !== undefined) return next;
			return false;
		}
		View_details(id){
			return (this.View(id).Details());
		}
		View(id){
			const obj = new this.$.$hyoo_page_side_view();
			(obj.side) = () => ((this.side(id)));
			(obj.peer) = (id) => ((this.side(id)));
			(obj.profile) = () => ((this.profile()));
			(obj.menu_showed) = (next) => ((this.side_menu_showed(next)));
			(obj.editing) = (next) => ((this.editing(next)));
			(obj.info) = (next) => ((this.info(next)));
			(obj.highlight) = () => ((this.search()));
			return obj;
		}
		rights(next){
			if(next !== undefined) return next;
			return false;
		}
		edit_close(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Edit(id){
			const obj = new this.$.$hyoo_page_side_edit();
			(obj.side) = () => ((this.side(id)));
			(obj.rights) = (next) => ((this.rights(next)));
			(obj.close) = (next) => ((this.edit_close(id, next)));
			return obj;
		}
		info_close(id, next){
			if(next !== undefined) return next;
			return null;
		}
		Info(id){
			const obj = new this.$.$hyoo_page_side_info();
			(obj.side) = () => ((this.side(id)));
			(obj.close) = (next) => ((this.info_close(id, next)));
			(obj.Text) = () => ((this.View_details(id)));
			return obj;
		}
		rights_close(next){
			if(next !== undefined) return next;
			return null;
		}
		Close_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		Rights_close(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.rights_close(next)));
			(obj.sub) = () => ([(this.Close_icon())]);
			return obj;
		}
		Rights(id){
			const obj = new this.$.$hyoo_meta_rights();
			(obj.meta) = () => ((this.side(id)));
			(obj.peer) = (id) => ((this.side(id)));
			(obj.tools) = () => ([(this.Rights_close())]);
			return obj;
		}
		safe_close(next){
			if(next !== undefined) return next;
			return null;
		}
		Safe_icon(){
			const obj = new this.$.$mol_icon_close();
			return obj;
		}
		Safe_close(){
			const obj = new this.$.$mol_button_minor();
			(obj.click) = (next) => ((this.safe_close(next)));
			(obj.sub) = () => ([(this.Safe_icon())]);
			return obj;
		}
		Safe(){
			const obj = new this.$.$hyoo_meta_safe();
			(obj.yard) = () => ((this.yard()));
			(obj.tools) = () => ([(this.Safe_close())]);
			return obj;
		}
		page_add(next){
			if(next !== undefined) return next;
			return null;
		}
		aura_showing(next){
			if(next !== undefined) return next;
			return true;
		}
		safe(next){
			if(next !== undefined) return next;
			return false;
		}
		search(){
			return (this.Menu().search());
		}
		Menu(){
			const obj = new this.$.$hyoo_page_menu();
			(obj.yard) = () => ((this.yard()));
			(obj.side) = () => ((this.profile()));
			(obj.list) = () => ((this.bookmarks_node()));
			(obj.item_uri) = (id) => ((this.side_uri(id)));
			(obj.add) = (next) => ((this.page_add(next)));
			(obj.item_add) = (id, next) => ((this.side_add(id, next)));
			(obj.aura_showing) = (next) => ((this.aura_showing(next)));
			(obj.safe_showing) = (next) => ((this.safe(next)));
			return obj;
		}
		side_main_id(){
			return "iy8wtn_tky6pc";
		}
		yard(){
			const obj = new this.$.$hyoo_sync_client();
			return obj;
		}
		side(id){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		side_current(){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		profile(){
			const obj = new this.$.$hyoo_page_side();
			return obj;
		}
		style(){
			return {...(super.style()), "backgroundImage": (this.aura_image())};
		}
		plugins(){
			return [(this.Theme())];
		}
		auto(){
			return [(this.ref_track())];
		}
		pages(){
			return [
				(this.News()), 
				(this.Side_menu()), 
				(this.View("0_0")), 
				(this.Edit("0_0")), 
				(this.Info("0_0")), 
				(this.Rights("0_0")), 
				(this.Safe())
			];
		}
		Placeholder(){
			return (this.Menu());
		}
	};
	($mol_mem(($.$hyoo_page.prototype), "Theme"));
	($mol_mem(($.$hyoo_page.prototype), "News"));
	($mol_mem(($.$hyoo_page.prototype), "book_side"));
	($mol_mem_key(($.$hyoo_page.prototype), "side_add"));
	($mol_mem(($.$hyoo_page.prototype), "Side_menu"));
	($mol_mem(($.$hyoo_page.prototype), "side_menu_showed"));
	($mol_mem(($.$hyoo_page.prototype), "editing"));
	($mol_mem(($.$hyoo_page.prototype), "info"));
	($mol_mem_key(($.$hyoo_page.prototype), "View"));
	($mol_mem(($.$hyoo_page.prototype), "rights"));
	($mol_mem_key(($.$hyoo_page.prototype), "edit_close"));
	($mol_mem_key(($.$hyoo_page.prototype), "Edit"));
	($mol_mem_key(($.$hyoo_page.prototype), "info_close"));
	($mol_mem_key(($.$hyoo_page.prototype), "Info"));
	($mol_mem(($.$hyoo_page.prototype), "rights_close"));
	($mol_mem(($.$hyoo_page.prototype), "Close_icon"));
	($mol_mem(($.$hyoo_page.prototype), "Rights_close"));
	($mol_mem_key(($.$hyoo_page.prototype), "Rights"));
	($mol_mem(($.$hyoo_page.prototype), "safe_close"));
	($mol_mem(($.$hyoo_page.prototype), "Safe_icon"));
	($mol_mem(($.$hyoo_page.prototype), "Safe_close"));
	($mol_mem(($.$hyoo_page.prototype), "Safe"));
	($mol_mem(($.$hyoo_page.prototype), "page_add"));
	($mol_mem(($.$hyoo_page.prototype), "aura_showing"));
	($mol_mem(($.$hyoo_page.prototype), "safe"));
	($mol_mem(($.$hyoo_page.prototype), "Menu"));
	($mol_mem(($.$hyoo_page.prototype), "yard"));
	($mol_mem_key(($.$hyoo_page.prototype), "side"));
	($mol_mem(($.$hyoo_page.prototype), "side_current"));
	($mol_mem(($.$hyoo_page.prototype), "profile"));


;
"use strict";
var $;
(function ($) {
    function $mol_wire_stale(task) {
        try {
            return task();
        }
        catch (error) {
            if (!$mol_promise_like(error))
                return $mol_fail_hidden(error);
            const fiber = $mol_wire_auto();
            if (!(fiber instanceof $mol_wire_fiber))
                return;
            return $mol_wire_probe(() => fiber.result());
        }
    }
    $.$mol_wire_stale = $mol_wire_stale;
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_page extends $.$hyoo_page {
            profile() {
                return this.side(this.yard().home().id());
            }
            title() {
                const side = this.side_current();
                const book = this.side_current_book();
                return book === side ? side.title() : `${side.title()} | ${book.title()}`;
            }
            aura_showing(next) {
                const key = `aura_showing:${this.book_id()}`;
                return this.$.$mol_state_local.value(key, next?.toString()) !== 'false';
            }
            aura_image() {
                return $mol_wire_stale(() => {
                    if (!this.aura_showing())
                        return '';
                    const side = this.side_current();
                    const aura = side.aura_effective();
                    if (!aura)
                        return '';
                    const shade = 'hsla( 0deg, 0%, calc( 50% + var(--mol_theme_luma) * 50% ), .666 )';
                    return `linear-gradient( ${shade}, ${shade} ), url("${aura}")`;
                }) ?? '';
            }
            editing(next) {
                if (next)
                    this.$.$mol_storage.persisted(true);
                return this.$.$mol_state_session.value('edit', next) ?? false;
            }
            rights(next) {
                return this.$.$mol_state_session.value('rights', next) ?? false;
            }
            info(next) {
                return this.$.$mol_state_session.value('info', next) ?? false;
            }
            safe(next) {
                const arg = next == undefined ? undefined : next ? '' : null;
                return this.$.$mol_state_arg.value('hyoo_meta_key', arg) !== null;
            }
            edit_close() {
                this.editing(false);
            }
            rights_close() {
                this.rights(false);
            }
            info_close() {
                this.info(false);
            }
            safe_close() {
                this.safe(false);
            }
            side(id) {
                return this.yard().world().Fund($hyoo_page_side).Item(id);
            }
            side_uri(id) {
                return this.$.$mol_state_arg.make_link({ '': id });
            }
            side_current_id() {
                return (this.$.$mol_state_arg.value('') || this.side_main_id());
            }
            side_current() {
                return this.side(this.side_current_id());
            }
            side_current_book() {
                return this.side_current().book() ?? this.side_current();
            }
            book_id() {
                return $mol_wire_stale(() => {
                    if (!this.side_menu_showed())
                        return '';
                    const side = this.side_current();
                    const books = side.books().slice().reverse();
                    if (side.pages().length || this.side_menu_showed())
                        books.push(side);
                    return books[0]?.id() ?? '';
                }) ?? this.side_current_id();
            }
            book_side() {
                const id = this.book_id();
                return id ? this.side(id) : null;
            }
            book_pages_node() {
                return this.pages_node(this.book_id());
            }
            side_menu_showed(next) {
                return next ?? Boolean(this.side_current().book() || this.side_current().pages().length > 0);
            }
            pages() {
                const id = this.side_current_id();
                const book = this.book_id();
                return [
                    this.Gap('left'),
                    ...book ? [this.Side_menu()] : [],
                    this.View(id),
                    ...this.info() ? [this.Info(id)] : [],
                    ...this.editing() ? [this.Edit(id)] : [],
                    ...this.rights() ? [this.Rights(id)] : [],
                    this.Gap('right'),
                    ...this.safe() ? [this.Safe()] : [],
                ];
            }
            page_add() {
                const land = this.yard().land_grab();
                this.$.$mol_dom_context.location.href = this.$.$mol_state_arg.link({ '': land.id() });
                this.bookmarks_node().add(land.id());
                this.editing(true);
            }
            side_add(id) {
                const book = this.side(id);
                const page = book.world().Fund($hyoo_page_side).make();
                this.$.$mol_dom_context.location.href = this.$.$mol_state_arg.link({ '': page.id() });
                page.steal_rights(book);
                page.book(book);
                this.bookmarks_node().add(page.id());
                this.editing(true);
            }
            ref_track() {
                const ref = this.$.$mol_dom_context.document.referrer;
                if (!ref)
                    return;
                const key = `${this}.ref_track`;
                if (this.$.$mol_state_session.value(key))
                    return;
                this.side_current().referrers_track(ref);
                this.$.$mol_state_session.value(key, true);
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "profile", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "aura_showing", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "aura_image", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "editing", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "rights", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "info", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "safe", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "side_current_id", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "book_id", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "side_menu_showed", null);
        __decorate([
            $mol_mem
        ], $hyoo_page.prototype, "pages", null);
        __decorate([
            $mol_action
        ], $hyoo_page.prototype, "page_add", null);
        __decorate([
            $mol_action
        ], $hyoo_page.prototype, "side_add", null);
        __decorate([
            $mol_mem,
            $mol_action
        ], $hyoo_page.prototype, "ref_track", null);
        $$.$hyoo_page = $hyoo_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $mol_style_define($hyoo_page, {
        background: {
            size: ['cover'],
            position: 'center',
        },
        Menu: {
            '@media': {
                'print': {
                    display: 'none',
                },
            },
        },
        Edit: {
            '@media': {
                'print': {
                    display: 'none',
                },
            },
        },
    });
})($ || ($ = {}));

;
"use strict";

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_match_app extends $.$hyoo_match_app {
            self() {
                return this.yard().home().chief.as($hyoo_match_single);
            }
            pair() {
                this.self().skipped().list();
                const found = this.lobby().find_pair(this.self());
                if (!found)
                    this.lobby().land.clocks;
                else
                    found.liked();
                return found;
            }
            lobby() {
                const land_id = 'a0bbhe_21ksc6';
                const rights = new Uint8Array($mol_fetch.buffer(require(`/hyoo/match/app/${land_id}!${land_id}.bin`)));
                $mol_wire_sync(this.yard().world()).apply(rights);
                return this.yard().land(land_id).chief.as($hyoo_match_lobby);
            }
            intro() {
                return this.yard().land('sqw0i3_b8924n').chief.as($hyoo_page_side);
            }
            lobby_update() {
                const self = this.self();
                const lobby = this.lobby();
                const ready = self.ready();
                const places = new Set(self.places());
                const age = self.age_self();
                const sex = self.sex_self();
                const places_options = Object.values(this.Settings().Places().options());
                const age_self_options = Object.keys(this.Settings().Age_self().options());
                const sex_self_options = Object.keys(this.Settings().Sex_self().options());
                const age_pref_options = Object.keys(this.Settings().Age_pref().options());
                const sex_pref_options = Object.keys(this.Settings().Sex_pref().options());
                for (let place of places_options) {
                    for (let age_self of age_self_options) {
                        for (let sex_self of sex_self_options) {
                            for (let age_pref of age_pref_options) {
                                for (let sex_pref of sex_pref_options) {
                                    lobby.lookup_has([place, age_self, sex_self, age_pref, sex_pref], ready
                                        && places.has(place)
                                        && age_self === age
                                        && sex_self === sex
                                        && self.age_pref(age_pref)
                                        && self.sex_pref(sex_pref));
                                }
                            }
                        }
                    }
                }
            }
            stats() {
                const lobby = this.lobby();
                const place = Object.values(this.Settings().Places().options());
                const age_pref = Object.keys(this.Settings().Age_pref().options());
                const sex_pref = Object.keys(this.Settings().Sex_pref().options());
                const girls = $mol_si_short(lobby.collect_all([place, ['young'], ['female'], age_pref, sex_pref]).size);
                const boys = $mol_si_short(lobby.collect_all([place, ['young'], ['male'], age_pref, sex_pref]).size);
                const womans = $mol_si_short(lobby.collect_all([place, ['adult'], ['female'], age_pref, sex_pref]).size);
                const mans = $mol_si_short(lobby.collect_all([place, ['adult'], ['male'], age_pref, sex_pref]).size);
                const grannies = $mol_si_short(lobby.collect_all([place, ['mature'], ['female'], age_pref, sex_pref]).size);
                const gaffers = $mol_si_short(lobby.collect_all([place, ['mature'], ['male'], age_pref, sex_pref]).size);
                return `👧${girls}\t👦${boys}\n👩${womans}\t👨${mans}\n👵${grannies}\t👴${gaffers}`;
            }
            look_pages() {
                if (!this.pair())
                    return [this.Final()];
                return [this.Pair()];
            }
            redirects() {
                if (this.spread() === 'look') {
                    if (!this.self().ready())
                        this.spread('settings');
                }
            }
            menu_links() {
                if (this.lobby().editable())
                    return super.menu_links();
                return super.menu_links().filter(item => item !== this.Menu_link('lobby'));
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_match_app.prototype, "self", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_app.prototype, "pair", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_app.prototype, "lobby", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_app.prototype, "intro", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_app.prototype, "lobby_update", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_app.prototype, "stats", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_app.prototype, "look_pages", null);
        __decorate([
            $mol_mem
        ], $hyoo_match_app.prototype, "menu_links", null);
        $$.$hyoo_match_app = $hyoo_match_app;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($hyoo_match_app, {
            background: {
                image: [
                    ['linear-gradient( hsla( 0deg, 0%, calc( 50% + var(--mol_theme_luma) * 50% ), .666 ), hsla( 0deg, 0%, calc( 50% + var(--mol_theme_luma) * 50% ), .666 ) )'],
                    ['linear-gradient( to right bottom, purple, violet )'],
                ],
                size: ['cover'],
                position: 'center',
            },
            Intro: {
                margin: [0, 'auto'],
                flex: {
                    basis: '40rem',
                },
            },
            Final: {
                margin: [0, 'auto'],
                flex: {
                    basis: '40rem',
                },
            },
            Settings: {
                margin: [0, 'auto'],
                flex: {
                    basis: `40rem`,
                },
            },
            Pair: {
                margin: [0, 'auto'],
                flex: {
                    basis: `40rem`,
                },
            },
            Menu: {
                Body: {
                    justifyContent: 'space-between',
                },
            },
            Stats: {
                padding: $mol_gap.text,
                whiteSpace: 'pre-line',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));

;
var $node = $node || {} ; $node[ "/hyoo/match/app/a0bbhe_21ksc6!a0bbhe_21ksc6.bin" ] = "data:application/octet-stream;base64,4nYSJHa1XQfidhIkdrVdB+J2EiR2tV0H4nYSJHa1XQcAAAAAAAAAAAAAAAAAAAAABk2V7wAAWAAidkZuSnpKNDNadnl1VEExLXFNcGNaQUJMdzNva0NoZk9qbDN5bGhFR3o0d0lCQzRjV01hZjJ5QlRzMjhFQWNlUzJUTS1YZm5OSThCdGU2azd5WlpKVDQiwTa8aZnLjfnECd1Eg+TFiGdA3zuKG3e8ISr5gW/84nzgQsPiNNFgJv+RwiekFOiFQNaaQa4K5Y4Z0m5dcp/nWeJ2EiR2tV0H4nYSJHa1XQfidhIkdrVdB+PP4hHPDJHgAAAAAAAAAAAAAAAAAAAAAAdNle8AAAEAMwAAAAAAAACHZU00lLWe4X2wI1Pps9LcJbzbCyjjKWZb9MrU+R0q56gFMKHR6a9sRWAwQ0G1XJsVoJvmqQYT32vVLI5UfqJu4nYSJHa1XQfidhIkdrVdB+J2EiR2tV0HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACE2V7wAAAQAxAAAAAAAAABZCkNV+R/lNoc7gLAfXt3EJVrLF3IdHfXDg0Ox6lm3V1lPCVqSQywxbO/oediF+3ZzWddEwTe/XG21tXZ3/hO0="


export default $
//# sourceMappingURL=node.js.map
