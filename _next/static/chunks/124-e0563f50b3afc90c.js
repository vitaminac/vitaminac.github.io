(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [124],
  {
    657: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = [
          "Int8Array",
          "Uint8Array",
          "Uint8ClampedArray",
          "Int16Array",
          "Uint16Array",
          "Int32Array",
          "Uint32Array",
          "Float32Array",
          "Float64Array",
          "BigInt64Array",
          "BigUint64Array",
        ],
        r = [
          "Function",
          "Generator",
          "AsyncGenerator",
          "GeneratorFunction",
          "AsyncGeneratorFunction",
          "AsyncFunction",
          "Observable",
          "Array",
          "Buffer",
          "Blob",
          "Object",
          "RegExp",
          "Date",
          "Error",
          "Map",
          "Set",
          "WeakMap",
          "WeakSet",
          "ArrayBuffer",
          "SharedArrayBuffer",
          "DataView",
          "Promise",
          "URL",
          "FormData",
          "URLSearchParams",
          "HTMLElement",
          ...n,
        ],
        i = [
          "null",
          "undefined",
          "string",
          "number",
          "bigint",
          "boolean",
          "symbol",
        ];
      function a(e) {
        return (t) => typeof t === e;
      }
      let { toString: o } = Object.prototype,
        l = (e) => {
          let t = o.call(e).slice(8, -1);
          return /HTML\w+Element/.test(t) && c.domElement(e)
            ? "HTMLElement"
            : r.includes(t)
              ? t
              : void 0;
        },
        s = (e) => (t) => l(t) === e;
      function c(e) {
        if (null === e) return "null";
        switch (typeof e) {
          case "undefined":
            return "undefined";
          case "string":
            return "string";
          case "number":
            return "number";
          case "boolean":
            return "boolean";
          case "function":
            return "Function";
          case "bigint":
            return "bigint";
          case "symbol":
            return "symbol";
        }
        if (c.observable(e)) return "Observable";
        if (c.array(e)) return "Array";
        if (c.buffer(e)) return "Buffer";
        let t = l(e);
        if (t) return t;
        if (e instanceof String || e instanceof Boolean || e instanceof Number)
          throw TypeError(
            "Please don't use object wrappers for primitive types",
          );
        return "Object";
      }
      (c.undefined = a("undefined")), (c.string = a("string"));
      let u = a("number");
      (c.number = (e) => u(e) && !c.nan(e)),
        (c.bigint = a("bigint")),
        (c.function_ = a("function")),
        (c.null_ = (e) => null === e),
        (c.class_ = (e) => c.function_(e) && e.toString().startsWith("class ")),
        (c.boolean = (e) => !0 === e || !1 === e),
        (c.symbol = a("symbol")),
        (c.numericString = (e) =>
          c.string(e) &&
          !c.emptyStringOrWhitespace(e) &&
          !Number.isNaN(Number(e))),
        (c.array = (e, t) =>
          !!Array.isArray(e) && (!c.function_(t) || e.every(t))),
        (c.buffer = (e) => {
          var t, n, r;
          return (
            null !==
              (r =
                null ===
                  (n =
                    null === (t = null == e ? void 0 : e.constructor) ||
                    void 0 === t
                      ? void 0
                      : t.isBuffer) || void 0 === n
                  ? void 0
                  : n.call(t, e)) &&
            void 0 !== r &&
            r
          );
        }),
        (c.blob = (e) => s("Blob")(e)),
        (c.nullOrUndefined = (e) => c.null_(e) || c.undefined(e)),
        (c.object = (e) =>
          !c.null_(e) && ("object" == typeof e || c.function_(e))),
        (c.iterable = (e) =>
          c.function_(null == e ? void 0 : e[Symbol.iterator])),
        (c.asyncIterable = (e) =>
          c.function_(null == e ? void 0 : e[Symbol.asyncIterator])),
        (c.generator = (e) =>
          c.iterable(e) &&
          c.function_(null == e ? void 0 : e.next) &&
          c.function_(null == e ? void 0 : e.throw)),
        (c.asyncGenerator = (e) =>
          c.asyncIterable(e) && c.function_(e.next) && c.function_(e.throw)),
        (c.nativePromise = (e) => s("Promise")(e));
      let d = (e) =>
        c.function_(null == e ? void 0 : e.then) &&
        c.function_(null == e ? void 0 : e.catch);
      (c.promise = (e) => c.nativePromise(e) || d(e)),
        (c.generatorFunction = s("GeneratorFunction")),
        (c.asyncGeneratorFunction = (e) => "AsyncGeneratorFunction" === l(e)),
        (c.asyncFunction = (e) => "AsyncFunction" === l(e)),
        (c.boundFunction = (e) =>
          c.function_(e) && !e.hasOwnProperty("prototype")),
        (c.regExp = s("RegExp")),
        (c.date = s("Date")),
        (c.error = s("Error")),
        (c.map = (e) => s("Map")(e)),
        (c.set = (e) => s("Set")(e)),
        (c.weakMap = (e) => s("WeakMap")(e)),
        (c.weakSet = (e) => s("WeakSet")(e)),
        (c.int8Array = s("Int8Array")),
        (c.uint8Array = s("Uint8Array")),
        (c.uint8ClampedArray = s("Uint8ClampedArray")),
        (c.int16Array = s("Int16Array")),
        (c.uint16Array = s("Uint16Array")),
        (c.int32Array = s("Int32Array")),
        (c.uint32Array = s("Uint32Array")),
        (c.float32Array = s("Float32Array")),
        (c.float64Array = s("Float64Array")),
        (c.bigInt64Array = s("BigInt64Array")),
        (c.bigUint64Array = s("BigUint64Array")),
        (c.arrayBuffer = s("ArrayBuffer")),
        (c.sharedArrayBuffer = s("SharedArrayBuffer")),
        (c.dataView = s("DataView")),
        (c.enumCase = (e, t) => Object.values(t).includes(e)),
        (c.directInstanceOf = (e, t) =>
          Object.getPrototypeOf(e) === t.prototype),
        (c.urlInstance = (e) => s("URL")(e)),
        (c.urlString = (e) => {
          if (!c.string(e)) return !1;
          try {
            return new URL(e), !0;
          } catch (e) {
            return !1;
          }
        }),
        (c.truthy = (e) => !!e),
        (c.falsy = (e) => !e),
        (c.nan = (e) => Number.isNaN(e)),
        (c.primitive = (e) => c.null_(e) || i.includes(typeof e)),
        (c.integer = (e) => Number.isInteger(e)),
        (c.safeInteger = (e) => Number.isSafeInteger(e)),
        (c.plainObject = (e) => {
          if ("[object Object]" !== o.call(e)) return !1;
          let t = Object.getPrototypeOf(e);
          return null === t || t === Object.getPrototypeOf({});
        }),
        (c.typedArray = (e) => {
          var t;
          return (t = l(e)), n.includes(t);
        });
      let f = (e) => c.safeInteger(e) && e >= 0;
      (c.arrayLike = (e) =>
        !c.nullOrUndefined(e) && !c.function_(e) && f(e.length)),
        (c.inRange = (e, t) => {
          if (c.number(t)) return e >= Math.min(0, t) && e <= Math.max(t, 0);
          if (c.array(t) && 2 === t.length)
            return e >= Math.min(...t) && e <= Math.max(...t);
          throw TypeError(`Invalid range: ${JSON.stringify(t)}`);
        });
      let p = [
        "innerHTML",
        "ownerDocument",
        "style",
        "attributes",
        "nodeValue",
      ];
      (c.domElement = (e) =>
        c.object(e) &&
        1 === e.nodeType &&
        c.string(e.nodeName) &&
        !c.plainObject(e) &&
        p.every((t) => t in e)),
        (c.observable = (e) => {
          var t, n;
          return (
            !!e &&
            (e ===
              (null === (t = e[Symbol.observable]) || void 0 === t
                ? void 0
                : t.call(e)) ||
              e ===
                (null === (n = e["@@observable"]) || void 0 === n
                  ? void 0
                  : n.call(e)))
          );
        }),
        (c.nodeStream = (e) =>
          c.object(e) && c.function_(e.pipe) && !c.observable(e)),
        (c.infinite = (e) => e === 1 / 0 || e === -1 / 0);
      let m = (e) => (t) => c.integer(t) && Math.abs(t % 2) === e;
      (c.evenInteger = m(0)),
        (c.oddInteger = m(1)),
        (c.emptyArray = (e) => c.array(e) && 0 === e.length),
        (c.nonEmptyArray = (e) => c.array(e) && e.length > 0),
        (c.emptyString = (e) => c.string(e) && 0 === e.length);
      let g = (e) => c.string(e) && !/\S/.test(e);
      (c.emptyStringOrWhitespace = (e) => c.emptyString(e) || g(e)),
        (c.nonEmptyString = (e) => c.string(e) && e.length > 0),
        (c.nonEmptyStringAndNotWhitespace = (e) =>
          c.string(e) && !c.emptyStringOrWhitespace(e)),
        (c.emptyObject = (e) =>
          c.object(e) && !c.map(e) && !c.set(e) && 0 === Object.keys(e).length),
        (c.nonEmptyObject = (e) =>
          c.object(e) && !c.map(e) && !c.set(e) && Object.keys(e).length > 0),
        (c.emptySet = (e) => c.set(e) && 0 === e.size),
        (c.nonEmptySet = (e) => c.set(e) && e.size > 0),
        (c.emptyMap = (e) => c.map(e) && 0 === e.size),
        (c.nonEmptyMap = (e) => c.map(e) && e.size > 0),
        (c.propertyKey = (e) => c.any([c.string, c.number, c.symbol], e)),
        (c.formData = (e) => s("FormData")(e)),
        (c.urlSearchParams = (e) => s("URLSearchParams")(e));
      let h = (e, t, n) => {
        if (!c.function_(t))
          throw TypeError(`Invalid predicate: ${JSON.stringify(t)}`);
        if (0 === n.length) throw TypeError("Invalid number of values");
        return e.call(n, t);
      };
      (c.any = (e, ...t) =>
        (c.array(e) ? e : [e]).some((e) => h(Array.prototype.some, e, t))),
        (c.all = (e, ...t) => h(Array.prototype.every, e, t));
      let b = (e, t, n, r = {}) => {
        if (!e) {
          let { multipleValues: e } = r,
            i = e
              ? `received values of types ${[...new Set(n.map((e) => `\`${c(e)}\``))].join(", ")}`
              : `received value of type \`${c(n)}\``;
          throw TypeError(`Expected value which is \`${t}\`, ${i}.`);
        }
      };
      (t.assert = {
        undefined: (e) => b(c.undefined(e), "undefined", e),
        string: (e) => b(c.string(e), "string", e),
        number: (e) => b(c.number(e), "number", e),
        bigint: (e) => b(c.bigint(e), "bigint", e),
        function_: (e) => b(c.function_(e), "Function", e),
        null_: (e) => b(c.null_(e), "null", e),
        class_: (e) => b(c.class_(e), "Class", e),
        boolean: (e) => b(c.boolean(e), "boolean", e),
        symbol: (e) => b(c.symbol(e), "symbol", e),
        numericString: (e) => b(c.numericString(e), "string with a number", e),
        array: (e, t) => {
          b(c.array(e), "Array", e), t && e.forEach(t);
        },
        buffer: (e) => b(c.buffer(e), "Buffer", e),
        blob: (e) => b(c.blob(e), "Blob", e),
        nullOrUndefined: (e) => b(c.nullOrUndefined(e), "null or undefined", e),
        object: (e) => b(c.object(e), "Object", e),
        iterable: (e) => b(c.iterable(e), "Iterable", e),
        asyncIterable: (e) => b(c.asyncIterable(e), "AsyncIterable", e),
        generator: (e) => b(c.generator(e), "Generator", e),
        asyncGenerator: (e) => b(c.asyncGenerator(e), "AsyncGenerator", e),
        nativePromise: (e) => b(c.nativePromise(e), "native Promise", e),
        promise: (e) => b(c.promise(e), "Promise", e),
        generatorFunction: (e) =>
          b(c.generatorFunction(e), "GeneratorFunction", e),
        asyncGeneratorFunction: (e) =>
          b(c.asyncGeneratorFunction(e), "AsyncGeneratorFunction", e),
        asyncFunction: (e) => b(c.asyncFunction(e), "AsyncFunction", e),
        boundFunction: (e) => b(c.boundFunction(e), "Function", e),
        regExp: (e) => b(c.regExp(e), "RegExp", e),
        date: (e) => b(c.date(e), "Date", e),
        error: (e) => b(c.error(e), "Error", e),
        map: (e) => b(c.map(e), "Map", e),
        set: (e) => b(c.set(e), "Set", e),
        weakMap: (e) => b(c.weakMap(e), "WeakMap", e),
        weakSet: (e) => b(c.weakSet(e), "WeakSet", e),
        int8Array: (e) => b(c.int8Array(e), "Int8Array", e),
        uint8Array: (e) => b(c.uint8Array(e), "Uint8Array", e),
        uint8ClampedArray: (e) =>
          b(c.uint8ClampedArray(e), "Uint8ClampedArray", e),
        int16Array: (e) => b(c.int16Array(e), "Int16Array", e),
        uint16Array: (e) => b(c.uint16Array(e), "Uint16Array", e),
        int32Array: (e) => b(c.int32Array(e), "Int32Array", e),
        uint32Array: (e) => b(c.uint32Array(e), "Uint32Array", e),
        float32Array: (e) => b(c.float32Array(e), "Float32Array", e),
        float64Array: (e) => b(c.float64Array(e), "Float64Array", e),
        bigInt64Array: (e) => b(c.bigInt64Array(e), "BigInt64Array", e),
        bigUint64Array: (e) => b(c.bigUint64Array(e), "BigUint64Array", e),
        arrayBuffer: (e) => b(c.arrayBuffer(e), "ArrayBuffer", e),
        sharedArrayBuffer: (e) =>
          b(c.sharedArrayBuffer(e), "SharedArrayBuffer", e),
        dataView: (e) => b(c.dataView(e), "DataView", e),
        enumCase: (e, t) => b(c.enumCase(e, t), "EnumCase", e),
        urlInstance: (e) => b(c.urlInstance(e), "URL", e),
        urlString: (e) => b(c.urlString(e), "string with a URL", e),
        truthy: (e) => b(c.truthy(e), "truthy", e),
        falsy: (e) => b(c.falsy(e), "falsy", e),
        nan: (e) => b(c.nan(e), "NaN", e),
        primitive: (e) => b(c.primitive(e), "primitive", e),
        integer: (e) => b(c.integer(e), "integer", e),
        safeInteger: (e) => b(c.safeInteger(e), "integer", e),
        plainObject: (e) => b(c.plainObject(e), "plain object", e),
        typedArray: (e) => b(c.typedArray(e), "TypedArray", e),
        arrayLike: (e) => b(c.arrayLike(e), "array-like", e),
        domElement: (e) => b(c.domElement(e), "HTMLElement", e),
        observable: (e) => b(c.observable(e), "Observable", e),
        nodeStream: (e) => b(c.nodeStream(e), "Node.js Stream", e),
        infinite: (e) => b(c.infinite(e), "infinite number", e),
        emptyArray: (e) => b(c.emptyArray(e), "empty array", e),
        nonEmptyArray: (e) => b(c.nonEmptyArray(e), "non-empty array", e),
        emptyString: (e) => b(c.emptyString(e), "empty string", e),
        emptyStringOrWhitespace: (e) =>
          b(c.emptyStringOrWhitespace(e), "empty string or whitespace", e),
        nonEmptyString: (e) => b(c.nonEmptyString(e), "non-empty string", e),
        nonEmptyStringAndNotWhitespace: (e) =>
          b(
            c.nonEmptyStringAndNotWhitespace(e),
            "non-empty string and not whitespace",
            e,
          ),
        emptyObject: (e) => b(c.emptyObject(e), "empty object", e),
        nonEmptyObject: (e) => b(c.nonEmptyObject(e), "non-empty object", e),
        emptySet: (e) => b(c.emptySet(e), "empty set", e),
        nonEmptySet: (e) => b(c.nonEmptySet(e), "non-empty set", e),
        emptyMap: (e) => b(c.emptyMap(e), "empty map", e),
        nonEmptyMap: (e) => b(c.nonEmptyMap(e), "non-empty map", e),
        propertyKey: (e) => b(c.propertyKey(e), "PropertyKey", e),
        formData: (e) => b(c.formData(e), "FormData", e),
        urlSearchParams: (e) => b(c.urlSearchParams(e), "URLSearchParams", e),
        evenInteger: (e) => b(c.evenInteger(e), "even integer", e),
        oddInteger: (e) => b(c.oddInteger(e), "odd integer", e),
        directInstanceOf: (e, t) => b(c.directInstanceOf(e, t), "T", e),
        inRange: (e, t) => b(c.inRange(e, t), "in range", e),
        any: (e, ...t) =>
          b(c.any(e, ...t), "predicate returns truthy for any value", t, {
            multipleValues: !0,
          }),
        all: (e, ...t) =>
          b(c.all(e, ...t), "predicate returns truthy for all values", t, {
            multipleValues: !0,
          }),
      }),
        Object.defineProperties(c, {
          class: { value: c.class_ },
          function: { value: c.function_ },
          null: { value: c.null_ },
        }),
        Object.defineProperties(t.assert, {
          class: { value: t.assert.class_ },
          function: { value: t.assert.function_ },
          null: { value: t.assert.null_ },
        }),
        (t.default = c),
        (e.exports = c),
        (e.exports.default = c),
        (e.exports.assert = t.assert);
    },
    6880: function (e) {
      "use strict";
      e.exports = () => {
        let e = "\ud800-\udfff",
          t = `[${e}]`,
          n =
            "[\\\\u0300-\\\\u036f\\\\ufe20-\\\\ufe2f\\\\u20d0-\\\\u20ff\\\\u1ab0-\\\\u1aff\\\\u1dc0-\\\\u1dff]",
          r = "\ud83c[\udffb-\udfff]",
          i = `(?:${n}|${r})`,
          a = `[^${e}]`,
          o = "(?:\uD83C[\uDDE6-\uDDFF]){2}",
          l = "[\ud800-\udbff][\udc00-\udfff]",
          s = `${i}?`,
          c = "[\\\\ufe0e\\\\ufe0f]?",
          u = `(?:\\u200d(?:${[a, o, l].join("|")})${c + s})*`,
          d = `${a}${n}?`,
          f = `(?:${[d, n, o, l, t, "[\\\uD83D\\\uDC69\\\uD83C\\\uDFFB\\\\u200D\\\uD83C\\\uDF93]"].join("|")})`;
        return RegExp(
          `(?:\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40(?:\\udc65|\\udc73|\\udc77)\\udb40(?:\\udc6e|\\udc63|\\udc6c)\\udb40(?:\\udc67|\\udc74|\\udc73)\\udb40\\udc7f)|${r}(?=${r})|${f + (c + s + u)}`,
          "g",
        );
      };
    },
    6614: function (e, t, n) {
      e.exports = {
        lib: n(2304),
        ordered: n(611),
        fitzpatrick_scale_modifiers: [
          "\uD83C\uDFFB",
          "\uD83C\uDFFC",
          "\uD83C\uDFFD",
          "\uD83C\uDFFE",
          "\uD83C\uDFFF",
        ],
      };
    },
    4470: function (e) {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = Object.prototype.toString,
        r = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        a = function (e) {
          return "function" == typeof Array.isArray
            ? Array.isArray(e)
            : "[object Array]" === n.call(e);
        },
        o = function (e) {
          if (!e || "[object Object]" !== n.call(e)) return !1;
          var r,
            i = t.call(e, "constructor"),
            a =
              e.constructor &&
              e.constructor.prototype &&
              t.call(e.constructor.prototype, "isPrototypeOf");
          if (e.constructor && !i && !a) return !1;
          for (r in e);
          return void 0 === r || t.call(e, r);
        },
        l = function (e, t) {
          r && "__proto__" === t.name
            ? r(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0,
              })
            : (e[t.name] = t.newValue);
        },
        s = function (e, n) {
          if ("__proto__" === n) {
            if (!t.call(e, n)) return;
            if (i) return i(e, n).value;
          }
          return e[n];
        };
      e.exports = function e() {
        var t,
          n,
          r,
          i,
          c,
          u,
          d = arguments[0],
          f = 1,
          p = arguments.length,
          m = !1;
        for (
          "boolean" == typeof d && ((m = d), (d = arguments[1] || {}), (f = 2)),
            (null == d || ("object" != typeof d && "function" != typeof d)) &&
              (d = {});
          f < p;
          ++f
        )
          if (((t = arguments[f]), null != t))
            for (n in t)
              (r = s(d, n)),
                d !== (i = s(t, n)) &&
                  (m && i && (o(i) || (c = a(i)))
                    ? (c
                        ? ((c = !1), (u = r && a(r) ? r : []))
                        : (u = r && o(r) ? r : {}),
                      l(d, { name: n, newValue: e(m, u, i) }))
                    : void 0 !== i && l(d, { name: n, newValue: i }));
        return d;
      };
    },
    8139: function (e) {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        n = /\n/g,
        r = /^\s*/,
        i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        a = /^:\s*/,
        o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        l = /^[;\s]*/,
        s = /^\s+|\s+$/g;
      function c(e) {
        return e ? e.replace(s, "") : "";
      }
      e.exports = function (e, s) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e) return [];
        s = s || {};
        var u = 1,
          d = 1;
        function f(e) {
          var t = e.match(n);
          t && (u += t.length);
          var r = e.lastIndexOf("\n");
          d = ~r ? e.length - r : d + e.length;
        }
        function p() {
          var e = { line: u, column: d };
          return function (t) {
            return (t.position = new m(e)), b(r), t;
          };
        }
        function m(e) {
          (this.start = e),
            (this.end = { line: u, column: d }),
            (this.source = s.source);
        }
        m.prototype.content = e;
        var g = [];
        function h(t) {
          var n = Error(s.source + ":" + u + ":" + d + ": " + t);
          if (
            ((n.reason = t),
            (n.filename = s.source),
            (n.line = u),
            (n.column = d),
            (n.source = e),
            s.silent)
          )
            g.push(n);
          else throw n;
        }
        function b(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return f(r), (e = e.slice(r.length)), n;
          }
        }
        function y(e) {
          var t;
          for (e = e || []; (t = _()); ) !1 !== t && e.push(t);
          return e;
        }
        function _() {
          var t = p();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var n = 2;
              "" != e.charAt(n) &&
              ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), "" === e.charAt(n - 1)))
              return h("End of comment missing");
            var r = e.slice(2, n - 2);
            return (
              (d += 2),
              f(r),
              (e = e.slice(n)),
              (d += 2),
              t({ type: "comment", comment: r })
            );
          }
        }
        return (
          b(r),
          (function () {
            var e,
              n = [];
            for (
              y(n);
              (e = (function () {
                var e = p(),
                  n = b(i);
                if (n) {
                  if ((_(), !b(a))) return h("property missing ':'");
                  var r = b(o),
                    s = e({
                      type: "declaration",
                      property: c(n[0].replace(t, "")),
                      value: r ? c(r[0].replace(t, "")) : "",
                    });
                  return b(l), s;
                }
              })());

            )
              !1 !== e && (n.push(e), y(n));
            return n;
          })()
        );
      };
    },
    9008: function (e, t, n) {
      e.exports = n(6665);
    },
    4374: function (e, t, n) {
      "use strict";
      let r = n(3063),
        i = new Map([
          ["none", ""],
          ["white", "\uD83C\uDFFB"],
          ["creamWhite", "\uD83C\uDFFC"],
          ["lightBrown", "\uD83C\uDFFD"],
          ["brown", "\uD83C\uDFFE"],
          ["darkBrown", "\uD83C\uDFFF"],
        ]);
      e.exports = (e, t) => {
        if (!i.has(t)) throw TypeError(`Unexpected \`skinTone\` name: ${t}`);
        return (
          (e = e.replace(/[\u{1f3fb}-\u{1f3ff}]/u, "")),
          r.has(e.codePointAt(0)) && "none" !== t && (e += i.get(t)),
          e
        );
      };
    },
    5174: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(n(8139));
      t.default = function (e, t) {
        var n = null;
        if (!e || "string" != typeof e) return n;
        var r = (0, i.default)(e),
          a = "function" == typeof t;
        return (
          r.forEach(function (e) {
            if ("declaration" === e.type) {
              var r = e.property,
                i = e.value;
              a ? t(r, i, e) : i && ((n = n || {})[r] = i);
            }
          }),
          n
        );
      };
    },
    3063: function (e) {
      e.exports = new Set([
        9757, 9977, 9994, 9995, 9996, 9997, 127877, 127939, 127940, 127946,
        127947, 128066, 128067, 128070, 128071, 128072, 128073, 128074, 128075,
        128076, 128077, 128078, 128079, 128080, 128102, 128103, 128104, 128105,
        128110, 128112, 128113, 128114, 128115, 128116, 128117, 128118, 128119,
        128120, 128124, 128129, 128130, 128131, 128133, 128134, 128135, 128170,
        128373, 128378, 128400, 128405, 128406, 128581, 128582, 128583, 128587,
        128588, 128589, 128590, 128591, 128675, 128692, 128693, 128694, 128704,
        129304, 129305, 129306, 129307, 129308, 129309, 129310, 129318, 129328,
        129331, 129332, 129333, 129334, 129335, 129336, 129337, 129340, 129341,
        129342,
      ]);
    },
    3390: function (e) {
      class t {
        constructor(e) {
          void 0 === e.data && (e.data = {}),
            (this.data = e.data),
            (this.isMatchIgnored = !1);
        }
        ignoreMatch() {
          this.isMatchIgnored = !0;
        }
      }
      function n(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
      }
      function r(e, ...t) {
        let n = Object.create(null);
        for (let t in e) n[t] = e[t];
        return (
          t.forEach(function (e) {
            for (let t in e) n[t] = e[t];
          }),
          n
        );
      }
      let i = (e) => !!e.scope,
        a = (e, { prefix: t }) => {
          if (e.startsWith("language:"))
            return e.replace("language:", "language-");
          if (e.includes(".")) {
            let n = e.split(".");
            return [
              `${t}${n.shift()}`,
              ...n.map((e, t) => `${e}${"_".repeat(t + 1)}`),
            ].join(" ");
          }
          return `${t}${e}`;
        };
      class o {
        constructor(e, t) {
          (this.buffer = ""), (this.classPrefix = t.classPrefix), e.walk(this);
        }
        addText(e) {
          this.buffer += n(e);
        }
        openNode(e) {
          if (!i(e)) return;
          let t = a(e.scope, { prefix: this.classPrefix });
          this.span(t);
        }
        closeNode(e) {
          i(e) && (this.buffer += "</span>");
        }
        value() {
          return this.buffer;
        }
        span(e) {
          this.buffer += `<span class="${e}">`;
        }
      }
      let l = (e = {}) => {
        let t = { children: [] };
        return Object.assign(t, e), t;
      };
      class s {
        constructor() {
          (this.rootNode = l()), (this.stack = [this.rootNode]);
        }
        get top() {
          return this.stack[this.stack.length - 1];
        }
        get root() {
          return this.rootNode;
        }
        add(e) {
          this.top.children.push(e);
        }
        openNode(e) {
          let t = l({ scope: e });
          this.add(t), this.stack.push(t);
        }
        closeNode() {
          if (this.stack.length > 1) return this.stack.pop();
        }
        closeAllNodes() {
          for (; this.closeNode(); );
        }
        toJSON() {
          return JSON.stringify(this.rootNode, null, 4);
        }
        walk(e) {
          return this.constructor._walk(e, this.rootNode);
        }
        static _walk(e, t) {
          return (
            "string" == typeof t
              ? e.addText(t)
              : t.children &&
                (e.openNode(t),
                t.children.forEach((t) => this._walk(e, t)),
                e.closeNode(t)),
            e
          );
        }
        static _collapse(e) {
          "string" != typeof e &&
            e.children &&
            (e.children.every((e) => "string" == typeof e)
              ? (e.children = [e.children.join("")])
              : e.children.forEach((e) => {
                  s._collapse(e);
                }));
        }
      }
      class c extends s {
        constructor(e) {
          super(), (this.options = e);
        }
        addText(e) {
          "" !== e && this.add(e);
        }
        startScope(e) {
          this.openNode(e);
        }
        endScope() {
          this.closeNode();
        }
        __addSublanguage(e, t) {
          let n = e.root;
          t && (n.scope = `language:${t}`), this.add(n);
        }
        toHTML() {
          return new o(this, this.options).value();
        }
        finalize() {
          return this.closeAllNodes(), !0;
        }
      }
      function u(e) {
        return e ? ("string" == typeof e ? e : e.source) : null;
      }
      function d(e) {
        return m("(?=", e, ")");
      }
      function f(e) {
        return m("(?:", e, ")*");
      }
      function p(e) {
        return m("(?:", e, ")?");
      }
      function m(...e) {
        return e.map((e) => u(e)).join("");
      }
      function g(...e) {
        return (
          "(" +
          ((function (e) {
            let t = e[e.length - 1];
            return "object" == typeof t && t.constructor === Object
              ? (e.splice(e.length - 1, 1), t)
              : {};
          })(e).capture
            ? ""
            : "?:") +
          e.map((e) => u(e)).join("|") +
          ")"
        );
      }
      function h(e) {
        return RegExp(e.toString() + "|").exec("").length - 1;
      }
      let b = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
      function y(e, { joinWith: t }) {
        let n = 0;
        return e
          .map((e) => {
            let t = (n += 1),
              r = u(e),
              i = "";
            for (; r.length > 0; ) {
              let e = b.exec(r);
              if (!e) {
                i += r;
                break;
              }
              (i += r.substring(0, e.index)),
                (r = r.substring(e.index + e[0].length)),
                "\\" === e[0][0] && e[1]
                  ? (i += "\\" + String(Number(e[1]) + t))
                  : ((i += e[0]), "(" === e[0] && n++);
            }
            return i;
          })
          .map((e) => `(${e})`)
          .join(t);
      }
      let _ = "[a-zA-Z]\\w*",
        v = "[a-zA-Z_]\\w*",
        w = "\\b\\d+(\\.\\d+)?",
        k =
          "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        x = "\\b(0b[01]+)",
        E = { begin: "\\\\[\\s\\S]", relevance: 0 },
        D = function (e, t, n = {}) {
          let i = r({ scope: "comment", begin: e, end: t, contains: [] }, n);
          i.contains.push({
            scope: "doctag",
            begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
            end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
            excludeBegin: !0,
            relevance: 0,
          });
          let a = g(
            "I",
            "a",
            "is",
            "so",
            "us",
            "to",
            "at",
            "if",
            "in",
            "it",
            "on",
            /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
            /[A-Za-z]+[-][a-z]+/,
            /[A-Za-z][a-z]{2,}/,
          );
          return (
            i.contains.push({
              begin: m(/[ ]+/, "(", a, /[.]?[:]?([.][ ]|[ ])/, "){3}"),
            }),
            i
          );
        },
        C = D("//", "$"),
        A = D("/\\*", "\\*/"),
        F = D("#", "$");
      var S = Object.freeze({
        __proto__: null,
        APOS_STRING_MODE: {
          scope: "string",
          begin: "'",
          end: "'",
          illegal: "\\n",
          contains: [E],
        },
        BACKSLASH_ESCAPE: E,
        BINARY_NUMBER_MODE: { scope: "number", begin: x, relevance: 0 },
        BINARY_NUMBER_RE: x,
        COMMENT: D,
        C_BLOCK_COMMENT_MODE: A,
        C_LINE_COMMENT_MODE: C,
        C_NUMBER_MODE: { scope: "number", begin: k, relevance: 0 },
        C_NUMBER_RE: k,
        END_SAME_AS_BEGIN: function (e) {
          return Object.assign(e, {
            "on:begin": (e, t) => {
              t.data._beginMatch = e[1];
            },
            "on:end": (e, t) => {
              t.data._beginMatch !== e[1] && t.ignoreMatch();
            },
          });
        },
        HASH_COMMENT_MODE: F,
        IDENT_RE: _,
        MATCH_NOTHING_RE: /\b\B/,
        METHOD_GUARD: { begin: "\\.\\s*" + v, relevance: 0 },
        NUMBER_MODE: { scope: "number", begin: w, relevance: 0 },
        NUMBER_RE: w,
        PHRASAL_WORDS_MODE: {
          begin:
            /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
        },
        QUOTE_STRING_MODE: {
          scope: "string",
          begin: '"',
          end: '"',
          illegal: "\\n",
          contains: [E],
        },
        REGEXP_MODE: {
          scope: "regexp",
          begin: /\/(?=[^/\n]*\/)/,
          end: /\/[gimuy]*/,
          contains: [
            E,
            { begin: /\[/, end: /\]/, relevance: 0, contains: [E] },
          ],
        },
        RE_STARTERS_RE:
          "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        SHEBANG: (e = {}) => {
          let t = /^#![ ]*\//;
          return (
            e.binary && (e.begin = m(t, /.*\b/, e.binary, /\b.*/)),
            r(
              {
                scope: "meta",
                begin: t,
                end: /$/,
                relevance: 0,
                "on:begin": (e, t) => {
                  0 !== e.index && t.ignoreMatch();
                },
              },
              e,
            )
          );
        },
        TITLE_MODE: { scope: "title", begin: _, relevance: 0 },
        UNDERSCORE_IDENT_RE: v,
        UNDERSCORE_TITLE_MODE: { scope: "title", begin: v, relevance: 0 },
      });
      function N(e, t) {
        "." === e.input[e.index - 1] && t.ignoreMatch();
      }
      function O(e, t) {
        void 0 !== e.className && ((e.scope = e.className), delete e.className);
      }
      function M(e, t) {
        t &&
          e.beginKeywords &&
          ((e.begin =
            "\\b(" +
            e.beginKeywords.split(" ").join("|") +
            ")(?!\\.)(?=\\b|\\s)"),
          (e.__beforeBegin = N),
          (e.keywords = e.keywords || e.beginKeywords),
          delete e.beginKeywords,
          void 0 === e.relevance && (e.relevance = 0));
      }
      function T(e, t) {
        Array.isArray(e.illegal) && (e.illegal = g(...e.illegal));
      }
      function B(e, t) {
        if (e.match) {
          if (e.begin || e.end)
            throw Error("begin & end are not supported with match");
          (e.begin = e.match), delete e.match;
        }
      }
      function I(e, t) {
        void 0 === e.relevance && (e.relevance = 1);
      }
      let L = (e, t) => {
          if (!e.beforeMatch) return;
          if (e.starts) throw Error("beforeMatch cannot be used with starts");
          let n = Object.assign({}, e);
          Object.keys(e).forEach((t) => {
            delete e[t];
          }),
            (e.keywords = n.keywords),
            (e.begin = m(n.beforeMatch, d(n.begin))),
            (e.starts = {
              relevance: 0,
              contains: [Object.assign(n, { endsParent: !0 })],
            }),
            (e.relevance = 0),
            delete n.beforeMatch;
        },
        R = [
          "of",
          "and",
          "for",
          "in",
          "not",
          "or",
          "if",
          "then",
          "parent",
          "list",
          "value",
        ],
        z = {},
        P = (e) => {
          console.error(e);
        },
        j = (e, ...t) => {
          console.log(`WARN: ${e}`, ...t);
        },
        $ = (e, t) => {
          z[`${e}/${t}`] ||
            (console.log(`Deprecated as of ${e}. ${t}`), (z[`${e}/${t}`] = !0));
        },
        U = Error();
      function q(e, t, { key: n }) {
        let r = 0,
          i = e[n],
          a = {},
          o = {};
        for (let e = 1; e <= t.length; e++)
          (o[e + r] = i[e]), (a[e + r] = !0), (r += h(t[e - 1]));
        (e[n] = o), (e[n]._emit = a), (e[n]._multi = !0);
      }
      function H(e) {
        e.scope &&
          "object" == typeof e.scope &&
          null !== e.scope &&
          ((e.beginScope = e.scope), delete e.scope),
          "string" == typeof e.beginScope &&
            (e.beginScope = { _wrap: e.beginScope }),
          "string" == typeof e.endScope && (e.endScope = { _wrap: e.endScope }),
          (function (e) {
            if (Array.isArray(e.begin)) {
              if (e.skip || e.excludeBegin || e.returnBegin)
                throw (
                  (P(
                    "skip, excludeBegin, returnBegin not compatible with beginScope: {}",
                  ),
                  U)
                );
              if ("object" != typeof e.beginScope || null === e.beginScope)
                throw (P("beginScope must be object"), U);
              q(e, e.begin, { key: "beginScope" }),
                (e.begin = y(e.begin, { joinWith: "" }));
            }
          })(e),
          (function (e) {
            if (Array.isArray(e.end)) {
              if (e.skip || e.excludeEnd || e.returnEnd)
                throw (
                  (P(
                    "skip, excludeEnd, returnEnd not compatible with endScope: {}",
                  ),
                  U)
                );
              if ("object" != typeof e.endScope || null === e.endScope)
                throw (P("endScope must be object"), U);
              q(e, e.end, { key: "endScope" }),
                (e.end = y(e.end, { joinWith: "" }));
            }
          })(e);
      }
      class K extends Error {
        constructor(e, t) {
          super(e), (this.name = "HTMLInjectionError"), (this.html = t);
        }
      }
      let W = Symbol("nomatch"),
        G = function (e) {
          let i = Object.create(null),
            a = Object.create(null),
            o = [],
            l = !0,
            s =
              "Could not find the language '{}', did you forget to load/include a language module?",
            b = { disableAutodetect: !0, name: "Plain text", contains: [] },
            _ = {
              ignoreUnescapedHTML: !1,
              throwUnescapedHTML: !1,
              noHighlightRe: /^(no-?highlight)$/i,
              languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
              classPrefix: "hljs-",
              cssSelector: "pre code",
              languages: null,
              __emitter: c,
            };
          function v(e) {
            return _.noHighlightRe.test(e);
          }
          function w(e, t, n) {
            let r = "",
              i = "";
            "object" == typeof t
              ? ((r = e), (n = t.ignoreIllegals), (i = t.language))
              : ($(
                  "10.7.0",
                  "highlight(lang, code, ...args) has been deprecated.",
                ),
                $(
                  "10.7.0",
                  "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277",
                ),
                (i = e),
                (r = t)),
              void 0 === n && (n = !0);
            let a = { code: r, language: i };
            z("before:highlight", a);
            let o = a.result ? a.result : k(a.language, a.code, n);
            return (o.code = a.code), z("after:highlight", o), o;
          }
          function k(e, a, o, c) {
            let d = Object.create(null);
            function f() {
              if (!F.keywords) {
                N.addText(z);
                return;
              }
              let e = 0;
              F.keywordPatternRe.lastIndex = 0;
              let t = F.keywordPatternRe.exec(z),
                n = "";
              for (; t; ) {
                n += z.substring(e, t.index);
                let r = E.case_insensitive ? t[0].toLowerCase() : t[0],
                  i = F.keywords[r];
                if (i) {
                  let [e, a] = i;
                  if (
                    (N.addText(n),
                    (n = ""),
                    (d[r] = (d[r] || 0) + 1),
                    d[r] <= 7 && (j += a),
                    e.startsWith("_"))
                  )
                    n += t[0];
                  else {
                    let n = E.classNameAliases[e] || e;
                    m(t[0], n);
                  }
                } else n += t[0];
                (e = F.keywordPatternRe.lastIndex),
                  (t = F.keywordPatternRe.exec(z));
              }
              (n += z.substring(e)), N.addText(n);
            }
            function p() {
              null != F.subLanguage
                ? (function () {
                    if ("" === z) return;
                    let e = null;
                    if ("string" == typeof F.subLanguage) {
                      if (!i[F.subLanguage]) {
                        N.addText(z);
                        return;
                      }
                      (e = k(F.subLanguage, z, !0, S[F.subLanguage])),
                        (S[F.subLanguage] = e._top);
                    } else
                      e = x(z, F.subLanguage.length ? F.subLanguage : null);
                    F.relevance > 0 && (j += e.relevance),
                      N.__addSublanguage(e._emitter, e.language);
                  })()
                : f(),
                (z = "");
            }
            function m(e, t) {
              "" !== e && (N.startScope(t), N.addText(e), N.endScope());
            }
            function g(e, t) {
              let n = 1,
                r = t.length - 1;
              for (; n <= r; ) {
                if (!e._emit[n]) {
                  n++;
                  continue;
                }
                let r = E.classNameAliases[e[n]] || e[n],
                  i = t[n];
                r ? m(i, r) : ((z = i), f(), (z = "")), n++;
              }
            }
            function b(e, t) {
              return (
                e.scope &&
                  "string" == typeof e.scope &&
                  N.openNode(E.classNameAliases[e.scope] || e.scope),
                e.beginScope &&
                  (e.beginScope._wrap
                    ? (m(
                        z,
                        E.classNameAliases[e.beginScope._wrap] ||
                          e.beginScope._wrap,
                      ),
                      (z = ""))
                    : e.beginScope._multi && (g(e.beginScope, t), (z = ""))),
                (F = Object.create(e, { parent: { value: F } }))
              );
            }
            let v = {};
            function w(n, r) {
              let i = r && r[0];
              if (((z += n), null == i)) return p(), 0;
              if (
                "begin" === v.type &&
                "end" === r.type &&
                v.index === r.index &&
                "" === i
              ) {
                if (((z += a.slice(r.index, r.index + 1)), !l)) {
                  let t = Error(`0 width match regex (${e})`);
                  throw ((t.languageName = e), (t.badRule = v.rule), t);
                }
                return 1;
              }
              if (((v = r), "begin" === r.type))
                return (function (e) {
                  let n = e[0],
                    r = e.rule,
                    i = new t(r);
                  for (let t of [r.__beforeBegin, r["on:begin"]])
                    if (t && (t(e, i), i.isMatchIgnored))
                      return 0 === F.matcher.regexIndex
                        ? ((z += n[0]), 1)
                        : ((q = !0), 0);
                  return (
                    r.skip
                      ? (z += n)
                      : (r.excludeBegin && (z += n),
                        p(),
                        r.returnBegin || r.excludeBegin || (z = n)),
                    b(r, e),
                    r.returnBegin ? 0 : n.length
                  );
                })(r);
              if ("illegal" !== r.type || o) {
                if ("end" === r.type) {
                  let e = (function (e) {
                    let n = e[0],
                      r = a.substring(e.index),
                      i = (function e(n, r, i) {
                        let a = (function (e, t) {
                          let n = e && e.exec(t);
                          return n && 0 === n.index;
                        })(n.endRe, i);
                        if (a) {
                          if (n["on:end"]) {
                            let e = new t(n);
                            n["on:end"](r, e), e.isMatchIgnored && (a = !1);
                          }
                          if (a) {
                            for (; n.endsParent && n.parent; ) n = n.parent;
                            return n;
                          }
                        }
                        if (n.endsWithParent) return e(n.parent, r, i);
                      })(F, e, r);
                    if (!i) return W;
                    let o = F;
                    F.endScope && F.endScope._wrap
                      ? (p(), m(n, F.endScope._wrap))
                      : F.endScope && F.endScope._multi
                        ? (p(), g(F.endScope, e))
                        : o.skip
                          ? (z += n)
                          : (o.returnEnd || o.excludeEnd || (z += n),
                            p(),
                            o.excludeEnd && (z = n));
                    do
                      F.scope && N.closeNode(),
                        F.skip || F.subLanguage || (j += F.relevance),
                        (F = F.parent);
                    while (F !== i.parent);
                    return (
                      i.starts && b(i.starts, e), o.returnEnd ? 0 : n.length
                    );
                  })(r);
                  if (e !== W) return e;
                }
              } else {
                let e = Error(
                  'Illegal lexeme "' +
                    i +
                    '" for mode "' +
                    (F.scope || "<unnamed>") +
                    '"',
                );
                throw ((e.mode = F), e);
              }
              if ("illegal" === r.type && "" === i) return 1;
              if (U > 1e5 && U > 3 * r.index)
                throw Error(
                  "potential infinite loop, way more iterations than matches",
                );
              return (z += i), i.length;
            }
            let E = A(e);
            if (!E)
              throw (
                (P(s.replace("{}", e)), Error('Unknown language: "' + e + '"'))
              );
            let D = (function (e) {
                function t(t, n) {
                  return RegExp(
                    u(t),
                    "m" +
                      (e.case_insensitive ? "i" : "") +
                      (e.unicodeRegex ? "u" : "") +
                      (n ? "g" : ""),
                  );
                }
                class n {
                  constructor() {
                    (this.matchIndexes = {}),
                      (this.regexes = []),
                      (this.matchAt = 1),
                      (this.position = 0);
                  }
                  addRule(e, t) {
                    (t.position = this.position++),
                      (this.matchIndexes[this.matchAt] = t),
                      this.regexes.push([t, e]),
                      (this.matchAt += h(e) + 1);
                  }
                  compile() {
                    0 === this.regexes.length && (this.exec = () => null);
                    let e = this.regexes.map((e) => e[1]);
                    (this.matcherRe = t(y(e, { joinWith: "|" }), !0)),
                      (this.lastIndex = 0);
                  }
                  exec(e) {
                    this.matcherRe.lastIndex = this.lastIndex;
                    let t = this.matcherRe.exec(e);
                    if (!t) return null;
                    let n = t.findIndex((e, t) => t > 0 && void 0 !== e),
                      r = this.matchIndexes[n];
                    return t.splice(0, n), Object.assign(t, r);
                  }
                }
                class i {
                  constructor() {
                    (this.rules = []),
                      (this.multiRegexes = []),
                      (this.count = 0),
                      (this.lastIndex = 0),
                      (this.regexIndex = 0);
                  }
                  getMatcher(e) {
                    if (this.multiRegexes[e]) return this.multiRegexes[e];
                    let t = new n();
                    return (
                      this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)),
                      t.compile(),
                      (this.multiRegexes[e] = t),
                      t
                    );
                  }
                  resumingScanAtSamePosition() {
                    return 0 !== this.regexIndex;
                  }
                  considerAll() {
                    this.regexIndex = 0;
                  }
                  addRule(e, t) {
                    this.rules.push([e, t]), "begin" === t.type && this.count++;
                  }
                  exec(e) {
                    let t = this.getMatcher(this.regexIndex);
                    t.lastIndex = this.lastIndex;
                    let n = t.exec(e);
                    if (this.resumingScanAtSamePosition()) {
                      if (n && n.index === this.lastIndex);
                      else {
                        let t = this.getMatcher(0);
                        (t.lastIndex = this.lastIndex + 1), (n = t.exec(e));
                      }
                    }
                    return (
                      n &&
                        ((this.regexIndex += n.position + 1),
                        this.regexIndex === this.count && this.considerAll()),
                      n
                    );
                  }
                }
                if (
                  (e.compilerExtensions || (e.compilerExtensions = []),
                  e.contains && e.contains.includes("self"))
                )
                  throw Error(
                    "ERR: contains `self` is not supported at the top-level of a language.  See documentation.",
                  );
                return (
                  (e.classNameAliases = r(e.classNameAliases || {})),
                  (function n(a, o) {
                    if (a.isCompiled) return a;
                    [O, B, H, L].forEach((e) => e(a, o)),
                      e.compilerExtensions.forEach((e) => e(a, o)),
                      (a.__beforeBegin = null),
                      [M, T, I].forEach((e) => e(a, o)),
                      (a.isCompiled = !0);
                    let l = null;
                    return (
                      "object" == typeof a.keywords &&
                        a.keywords.$pattern &&
                        ((a.keywords = Object.assign({}, a.keywords)),
                        (l = a.keywords.$pattern),
                        delete a.keywords.$pattern),
                      (l = l || /\w+/),
                      a.keywords &&
                        (a.keywords = (function e(t, n, r = "keyword") {
                          let i = Object.create(null);
                          return (
                            "string" == typeof t
                              ? a(r, t.split(" "))
                              : Array.isArray(t)
                                ? a(r, t)
                                : Object.keys(t).forEach(function (r) {
                                    Object.assign(i, e(t[r], n, r));
                                  }),
                            i
                          );
                          function a(e, t) {
                            n && (t = t.map((e) => e.toLowerCase())),
                              t.forEach(function (t) {
                                var n, r;
                                let a = t.split("|");
                                i[a[0]] = [
                                  e,
                                  ((n = a[0]),
                                  (r = a[1])
                                    ? Number(r)
                                    : R.includes(n.toLowerCase())
                                      ? 0
                                      : 1),
                                ];
                              });
                          }
                        })(a.keywords, e.case_insensitive)),
                      (a.keywordPatternRe = t(l, !0)),
                      o &&
                        (a.begin || (a.begin = /\B|\b/),
                        (a.beginRe = t(a.begin)),
                        a.end || a.endsWithParent || (a.end = /\B|\b/),
                        a.end && (a.endRe = t(a.end)),
                        (a.terminatorEnd = u(a.end) || ""),
                        a.endsWithParent &&
                          o.terminatorEnd &&
                          (a.terminatorEnd +=
                            (a.end ? "|" : "") + o.terminatorEnd)),
                      a.illegal && (a.illegalRe = t(a.illegal)),
                      a.contains || (a.contains = []),
                      (a.contains = [].concat(
                        ...a.contains.map(function (e) {
                          var t;
                          return ((t = "self" === e ? a : e).variants &&
                            !t.cachedVariants &&
                            (t.cachedVariants = t.variants.map(function (e) {
                              return r(t, { variants: null }, e);
                            })),
                          t.cachedVariants)
                            ? t.cachedVariants
                            : !(function e(t) {
                                  return (
                                    !!t && (t.endsWithParent || e(t.starts))
                                  );
                                })(t)
                              ? Object.isFrozen(t)
                                ? r(t)
                                : t
                              : r(t, { starts: t.starts ? r(t.starts) : null });
                        }),
                      )),
                      a.contains.forEach(function (e) {
                        n(e, a);
                      }),
                      a.starts && n(a.starts, o),
                      (a.matcher = (function (e) {
                        let t = new i();
                        return (
                          e.contains.forEach((e) =>
                            t.addRule(e.begin, { rule: e, type: "begin" }),
                          ),
                          e.terminatorEnd &&
                            t.addRule(e.terminatorEnd, { type: "end" }),
                          e.illegal &&
                            t.addRule(e.illegal, { type: "illegal" }),
                          t
                        );
                      })(a)),
                      a
                    );
                  })(e)
                );
              })(E),
              C = "",
              F = c || D,
              S = {},
              N = new _.__emitter(_);
            !(function () {
              let e = [];
              for (let t = F; t !== E; t = t.parent)
                t.scope && e.unshift(t.scope);
              e.forEach((e) => N.openNode(e));
            })();
            let z = "",
              j = 0,
              $ = 0,
              U = 0,
              q = !1;
            try {
              if (E.__emitTokens) E.__emitTokens(a, N);
              else {
                for (F.matcher.considerAll(); ; ) {
                  U++,
                    q ? (q = !1) : F.matcher.considerAll(),
                    (F.matcher.lastIndex = $);
                  let e = F.matcher.exec(a);
                  if (!e) break;
                  let t = a.substring($, e.index),
                    n = w(t, e);
                  $ = e.index + n;
                }
                w(a.substring($));
              }
              return (
                N.finalize(),
                (C = N.toHTML()),
                {
                  language: e,
                  value: C,
                  relevance: j,
                  illegal: !1,
                  _emitter: N,
                  _top: F,
                }
              );
            } catch (t) {
              if (t.message && t.message.includes("Illegal"))
                return {
                  language: e,
                  value: n(a),
                  illegal: !0,
                  relevance: 0,
                  _illegalBy: {
                    message: t.message,
                    index: $,
                    context: a.slice($ - 100, $ + 100),
                    mode: t.mode,
                    resultSoFar: C,
                  },
                  _emitter: N,
                };
              if (l)
                return {
                  language: e,
                  value: n(a),
                  illegal: !1,
                  relevance: 0,
                  errorRaised: t,
                  _emitter: N,
                  _top: F,
                };
              throw t;
            }
          }
          function x(e, t) {
            t = t || _.languages || Object.keys(i);
            let r = (function (e) {
                let t = {
                  value: n(e),
                  illegal: !1,
                  relevance: 0,
                  _top: b,
                  _emitter: new _.__emitter(_),
                };
                return t._emitter.addText(e), t;
              })(e),
              a = t
                .filter(A)
                .filter(N)
                .map((t) => k(t, e, !1));
            a.unshift(r);
            let [o, l] = a.sort((e, t) => {
              if (e.relevance !== t.relevance) return t.relevance - e.relevance;
              if (e.language && t.language) {
                if (A(e.language).supersetOf === t.language) return 1;
                if (A(t.language).supersetOf === e.language) return -1;
              }
              return 0;
            });
            return (o.secondBest = l), o;
          }
          function E(e) {
            let t = (function (e) {
              let t = e.className + " ";
              t += e.parentNode ? e.parentNode.className : "";
              let n = _.languageDetectRe.exec(t);
              if (n) {
                let t = A(n[1]);
                return (
                  t ||
                    (j(s.replace("{}", n[1])),
                    j("Falling back to no-highlight mode for this block.", e)),
                  t ? n[1] : "no-highlight"
                );
              }
              return t.split(/\s+/).find((e) => v(e) || A(e));
            })(e);
            if (v(t)) return;
            if (
              (z("before:highlightElement", { el: e, language: t }),
              e.dataset.highlighted)
            ) {
              console.log(
                "Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",
                e,
              );
              return;
            }
            if (
              e.children.length > 0 &&
              (_.ignoreUnescapedHTML ||
                (console.warn(
                  "One of your code blocks includes unescaped HTML. This is a potentially serious security risk.",
                ),
                console.warn(
                  "https://github.com/highlightjs/highlight.js/wiki/security",
                ),
                console.warn("The element with unescaped HTML:"),
                console.warn(e)),
              _.throwUnescapedHTML)
            )
              throw new K(
                "One of your code blocks includes unescaped HTML.",
                e.innerHTML,
              );
            let n = e.textContent,
              r = t ? w(n, { language: t, ignoreIllegals: !0 }) : x(n);
            (e.innerHTML = r.value),
              (e.dataset.highlighted = "yes"),
              (function (e, t, n) {
                let r = (t && a[t]) || n;
                e.classList.add("hljs"), e.classList.add(`language-${r}`);
              })(e, t, r.language),
              (e.result = {
                language: r.language,
                re: r.relevance,
                relevance: r.relevance,
              }),
              r.secondBest &&
                (e.secondBest = {
                  language: r.secondBest.language,
                  relevance: r.secondBest.relevance,
                }),
              z("after:highlightElement", { el: e, result: r, text: n });
          }
          let D = !1;
          function C() {
            if ("loading" === document.readyState) {
              D = !0;
              return;
            }
            document.querySelectorAll(_.cssSelector).forEach(E);
          }
          function A(e) {
            return i[(e = (e || "").toLowerCase())] || i[a[e]];
          }
          function F(e, { languageName: t }) {
            "string" == typeof e && (e = [e]),
              e.forEach((e) => {
                a[e.toLowerCase()] = t;
              });
          }
          function N(e) {
            let t = A(e);
            return t && !t.disableAutodetect;
          }
          function z(e, t) {
            o.forEach(function (n) {
              n[e] && n[e](t);
            });
          }
          for (let t in ("undefined" != typeof window &&
            window.addEventListener &&
            window.addEventListener(
              "DOMContentLoaded",
              function () {
                D && C();
              },
              !1,
            ),
          Object.assign(e, {
            highlight: w,
            highlightAuto: x,
            highlightAll: C,
            highlightElement: E,
            highlightBlock: function (e) {
              return (
                $("10.7.0", "highlightBlock will be removed entirely in v12.0"),
                $("10.7.0", "Please use highlightElement now."),
                E(e)
              );
            },
            configure: function (e) {
              _ = r(_, e);
            },
            initHighlighting: () => {
              C(),
                $(
                  "10.6.0",
                  "initHighlighting() deprecated.  Use highlightAll() now.",
                );
            },
            initHighlightingOnLoad: function () {
              C(),
                $(
                  "10.6.0",
                  "initHighlightingOnLoad() deprecated.  Use highlightAll() now.",
                );
            },
            registerLanguage: function (t, n) {
              let r = null;
              try {
                r = n(e);
              } catch (e) {
                if (
                  (P(
                    "Language definition for '{}' could not be registered.".replace(
                      "{}",
                      t,
                    ),
                  ),
                  l)
                )
                  P(e);
                else throw e;
                r = b;
              }
              r.name || (r.name = t),
                (i[t] = r),
                (r.rawDefinition = n.bind(null, e)),
                r.aliases && F(r.aliases, { languageName: t });
            },
            unregisterLanguage: function (e) {
              for (let t of (delete i[e], Object.keys(a)))
                a[t] === e && delete a[t];
            },
            listLanguages: function () {
              return Object.keys(i);
            },
            getLanguage: A,
            registerAliases: F,
            autoDetection: N,
            inherit: r,
            addPlugin: function (e) {
              var t;
              (t = e)["before:highlightBlock"] &&
                !t["before:highlightElement"] &&
                (t["before:highlightElement"] = (e) => {
                  t["before:highlightBlock"](Object.assign({ block: e.el }, e));
                }),
                t["after:highlightBlock"] &&
                  !t["after:highlightElement"] &&
                  (t["after:highlightElement"] = (e) => {
                    t["after:highlightBlock"](
                      Object.assign({ block: e.el }, e),
                    );
                  }),
                o.push(e);
            },
            removePlugin: function (e) {
              let t = o.indexOf(e);
              -1 !== t && o.splice(t, 1);
            },
          }),
          (e.debugMode = function () {
            l = !1;
          }),
          (e.safeMode = function () {
            l = !0;
          }),
          (e.versionString = "11.9.0"),
          (e.regex = {
            concat: m,
            lookahead: d,
            either: g,
            optional: p,
            anyNumberOfTimes: f,
          }),
          S))
            "object" == typeof S[t] &&
              (function e(t) {
                return (
                  t instanceof Map
                    ? (t.clear =
                        t.delete =
                        t.set =
                          function () {
                            throw Error("map is read-only");
                          })
                    : t instanceof Set &&
                      (t.add =
                        t.clear =
                        t.delete =
                          function () {
                            throw Error("set is read-only");
                          }),
                  Object.freeze(t),
                  Object.getOwnPropertyNames(t).forEach((n) => {
                    let r = t[n],
                      i = typeof r;
                    ("object" !== i && "function" !== i) ||
                      Object.isFrozen(r) ||
                      e(r);
                  }),
                  t
                );
              })(S[t]);
          return Object.assign(e, S), e;
        },
        V = G({});
      (V.newInstance = () => G({})),
        (e.exports = V),
        (V.HighlightJS = V),
        (V.default = V);
    },
    2835: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return f;
        },
      });
      let r = "object" == typeof self ? self : globalThis,
        i = (e, t) => {
          let n = (t, n) => (e.set(n, t), t),
            i = (a) => {
              if (e.has(a)) return e.get(a);
              let [o, l] = t[a];
              switch (o) {
                case 0:
                case -1:
                  return n(l, a);
                case 1: {
                  let e = n([], a);
                  for (let t of l) e.push(i(t));
                  return e;
                }
                case 2: {
                  let e = n({}, a);
                  for (let [t, n] of l) e[i(t)] = i(n);
                  return e;
                }
                case 3:
                  return n(new Date(l), a);
                case 4: {
                  let { source: e, flags: t } = l;
                  return n(new RegExp(e, t), a);
                }
                case 5: {
                  let e = n(new Map(), a);
                  for (let [t, n] of l) e.set(i(t), i(n));
                  return e;
                }
                case 6: {
                  let e = n(new Set(), a);
                  for (let t of l) e.add(i(t));
                  return e;
                }
                case 7: {
                  let { name: e, message: t } = l;
                  return n(new r[e](t), a);
                }
                case 8:
                  return n(BigInt(l), a);
                case "BigInt":
                  return n(Object(BigInt(l)), a);
              }
              return n(new r[o](l), a);
            };
          return i;
        },
        a = (e) => i(new Map(), e)(0),
        { toString: o } = {},
        { keys: l } = Object,
        s = (e) => {
          let t = typeof e;
          if ("object" !== t || !e) return [0, t];
          let n = o.call(e).slice(8, -1);
          switch (n) {
            case "Array":
              return [1, ""];
            case "Object":
              return [2, ""];
            case "Date":
              return [3, ""];
            case "RegExp":
              return [4, ""];
            case "Map":
              return [5, ""];
            case "Set":
              return [6, ""];
          }
          return n.includes("Array")
            ? [1, n]
            : n.includes("Error")
              ? [7, n]
              : [2, n];
        },
        c = ([e, t]) => 0 === e && ("function" === t || "symbol" === t),
        u = (e, t, n, r) => {
          let i = (e, t) => {
              let i = r.push(e) - 1;
              return n.set(t, i), i;
            },
            a = (r) => {
              if (n.has(r)) return n.get(r);
              let [o, u] = s(r);
              switch (o) {
                case 0: {
                  let t = r;
                  switch (u) {
                    case "bigint":
                      (o = 8), (t = r.toString());
                      break;
                    case "function":
                    case "symbol":
                      if (e) throw TypeError("unable to serialize " + u);
                      t = null;
                      break;
                    case "undefined":
                      return i([-1], r);
                  }
                  return i([o, t], r);
                }
                case 1: {
                  if (u) return i([u, [...r]], r);
                  let e = [],
                    t = i([o, e], r);
                  for (let t of r) e.push(a(t));
                  return t;
                }
                case 2: {
                  if (u)
                    switch (u) {
                      case "BigInt":
                        return i([u, r.toString()], r);
                      case "Boolean":
                      case "Number":
                      case "String":
                        return i([u, r.valueOf()], r);
                    }
                  if (t && "toJSON" in r) return a(r.toJSON());
                  let n = [],
                    d = i([o, n], r);
                  for (let t of l(r))
                    (e || !c(s(r[t]))) && n.push([a(t), a(r[t])]);
                  return d;
                }
                case 3:
                  return i([o, r.toISOString()], r);
                case 4: {
                  let { source: e, flags: t } = r;
                  return i([o, { source: e, flags: t }], r);
                }
                case 5: {
                  let t = [],
                    n = i([o, t], r);
                  for (let [n, i] of r)
                    (e || !(c(s(n)) || c(s(i)))) && t.push([a(n), a(i)]);
                  return n;
                }
                case 6: {
                  let t = [],
                    n = i([o, t], r);
                  for (let n of r) (e || !c(s(n))) && t.push(a(n));
                  return n;
                }
              }
              let { message: d } = r;
              return i([o, { name: u, message: d }], r);
            };
          return a;
        },
        d = (e, { json: t, lossy: n } = {}) => {
          let r = [];
          return u(!(t || n), !!t, new Map(), r)(e), r;
        };
      var f =
        "function" == typeof structuredClone
          ? (e, t) =>
              t && ("json" in t || "lossy" in t)
                ? a(d(e, t))
                : structuredClone(e)
          : (e, t) => a(d(e, t));
    },
    5668: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = [],
          n = String(e || ""),
          r = n.indexOf(","),
          i = 0,
          a = !1;
        for (; !a; ) {
          -1 === r && ((r = n.length), (a = !0));
          let e = n.slice(i, r).trim();
          (e || !a) && t.push(e), (i = r + 1), (r = n.indexOf(",", i));
        }
        return t;
      }
      function i(e, t) {
        let n = t || {};
        return ("" === e[e.length - 1] ? [...e, ""] : e)
          .join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " "))
          .trim();
      }
      n.d(t, {
        P: function () {
          return i;
        },
        Q: function () {
          return r;
        },
      });
    },
    1853: function (e, t, n) {
      "use strict";
      n.d(t, {
        dP: function () {
          return i;
        },
        jE: function () {
          return r;
        },
        vh: function () {
          return o;
        },
        yJ: function () {
          return a;
        },
      });
      let r = 6048e5,
        i = 864e5,
        a = 6e4,
        o = 36e5;
    },
    3717: function (e, t, n) {
      "use strict";
      n.d(t, {
        WU: function () {
          return P;
        },
      });
      let r = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function i(e) {
        return (t = {}) => {
          let n = t.width ? String(t.width) : e.defaultWidth;
          return e.formats[n] || e.formats[e.defaultWidth];
        };
      }
      let a = {
          date: i({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy",
            },
            defaultWidth: "full",
          }),
          time: i({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a",
            },
            defaultWidth: "full",
          }),
          dateTime: i({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        o = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
      function l(e) {
        return (t, n) => {
          let r;
          if (
            "formatting" === (n?.context ? String(n.context) : "standalone") &&
            e.formattingValues
          ) {
            let t = e.defaultFormattingWidth || e.defaultWidth,
              i = n?.width ? String(n.width) : t;
            r = e.formattingValues[i] || e.formattingValues[t];
          } else {
            let t = e.defaultWidth,
              i = n?.width ? String(n.width) : e.defaultWidth;
            r = e.values[i] || e.values[t];
          }
          return r[e.argumentCallback ? e.argumentCallback(t) : t];
        };
      }
      function s(e) {
        return (t, n = {}) => {
          let r;
          let i = n.width,
            a =
              (i && e.matchPatterns[i]) || e.matchPatterns[e.defaultMatchWidth],
            o = t.match(a);
          if (!o) return null;
          let l = o[0],
            s =
              (i && e.parsePatterns[i]) || e.parsePatterns[e.defaultParseWidth],
            c = Array.isArray(s)
              ? (function (e, t) {
                  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
                })(s, (e) => e.test(l))
              : (function (e, t) {
                  for (let n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
                      return n;
                })(s, (e) => e.test(l));
          return (
            (r = e.valueCallback ? e.valueCallback(c) : c),
            {
              value: (r = n.valueCallback ? n.valueCallback(r) : r),
              rest: t.slice(l.length),
            }
          );
        };
      }
      let c = {
          code: "en-US",
          formatDistance: (e, t, n) => {
            let i;
            let a = r[e];
            return ((i =
              "string" == typeof a
                ? a
                : 1 === t
                  ? a.one
                  : a.other.replace("{{count}}", t.toString())),
            n?.addSuffix)
              ? n.comparison && n.comparison > 0
                ? "in " + i
                : i + " ago"
              : i;
          },
          formatLong: a,
          formatRelative: (e, t, n, r) => o[e],
          localize: {
            ordinalNumber: (e, t) => {
              let n = Number(e),
                r = n % 100;
              if (r > 20 || r < 10)
                switch (r % 10) {
                  case 1:
                    return n + "st";
                  case 2:
                    return n + "nd";
                  case 3:
                    return n + "rd";
                }
              return n + "th";
            },
            era: l({
              values: {
                narrow: ["B", "A"],
                abbreviated: ["BC", "AD"],
                wide: ["Before Christ", "Anno Domini"],
              },
              defaultWidth: "wide",
            }),
            quarter: l({
              values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                wide: [
                  "1st quarter",
                  "2nd quarter",
                  "3rd quarter",
                  "4th quarter",
                ],
              },
              defaultWidth: "wide",
              argumentCallback: (e) => e - 1,
            }),
            month: l({
              values: {
                narrow: [
                  "J",
                  "F",
                  "M",
                  "A",
                  "M",
                  "J",
                  "J",
                  "A",
                  "S",
                  "O",
                  "N",
                  "D",
                ],
                abbreviated: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                wide: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
              },
              defaultWidth: "wide",
            }),
            day: l({
              values: {
                narrow: ["S", "M", "T", "W", "T", "F", "S"],
                short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                wide: [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
              },
              defaultWidth: "wide",
            }),
            dayPeriod: l({
              values: {
                narrow: {
                  am: "a",
                  pm: "p",
                  midnight: "mi",
                  noon: "n",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
                abbreviated: {
                  am: "AM",
                  pm: "PM",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
                wide: {
                  am: "a.m.",
                  pm: "p.m.",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "morning",
                  afternoon: "afternoon",
                  evening: "evening",
                  night: "night",
                },
              },
              defaultWidth: "wide",
              formattingValues: {
                narrow: {
                  am: "a",
                  pm: "p",
                  midnight: "mi",
                  noon: "n",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
                abbreviated: {
                  am: "AM",
                  pm: "PM",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
                wide: {
                  am: "a.m.",
                  pm: "p.m.",
                  midnight: "midnight",
                  noon: "noon",
                  morning: "in the morning",
                  afternoon: "in the afternoon",
                  evening: "in the evening",
                  night: "at night",
                },
              },
              defaultFormattingWidth: "wide",
            }),
          },
          match: {
            ordinalNumber:
              ((d = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: (e) => parseInt(e, 10),
              }),
              (e, t = {}) => {
                let n = e.match(d.matchPattern);
                if (!n) return null;
                let r = n[0],
                  i = e.match(d.parsePattern);
                if (!i) return null;
                let a = d.valueCallback ? d.valueCallback(i[0]) : i[0];
                return {
                  value: (a = t.valueCallback ? t.valueCallback(a) : a),
                  rest: e.slice(r.length),
                };
              }),
            era: s({
              matchPatterns: {
                narrow: /^(b|a)/i,
                abbreviated:
                  /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: { any: [/^b/i, /^(a|c)/i] },
              defaultParseWidth: "any",
            }),
            quarter: s({
              matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^[1234](th|st|nd|rd)? quarter/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
              defaultParseWidth: "any",
              valueCallback: (e) => e + 1,
            }),
            month: s({
              matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated:
                  /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: {
                narrow: [
                  /^j/i,
                  /^f/i,
                  /^m/i,
                  /^a/i,
                  /^m/i,
                  /^j/i,
                  /^j/i,
                  /^a/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
                any: [
                  /^ja/i,
                  /^f/i,
                  /^mar/i,
                  /^ap/i,
                  /^may/i,
                  /^jun/i,
                  /^jul/i,
                  /^au/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
              },
              defaultParseWidth: "any",
            }),
            day: s({
              matchPatterns: {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
              },
              defaultMatchWidth: "wide",
              parsePatterns: {
                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
              },
              defaultParseWidth: "any",
            }),
            dayPeriod: s({
              matchPatterns: {
                narrow:
                  /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
              },
              defaultMatchWidth: "any",
              parsePatterns: {
                any: {
                  am: /^a/i,
                  pm: /^p/i,
                  midnight: /^mi/i,
                  noon: /^no/i,
                  morning: /morning/i,
                  afternoon: /afternoon/i,
                  evening: /evening/i,
                  night: /night/i,
                },
              },
              defaultParseWidth: "any",
            }),
          },
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        },
        u = {};
      var d,
        f = n(1853);
      function p(e) {
        let t = Object.prototype.toString.call(e);
        return e instanceof Date ||
          ("object" == typeof e && "[object Date]" === t)
          ? new e.constructor(+e)
          : new Date(
              "number" == typeof e ||
              "[object Number]" === t ||
              "string" == typeof e ||
              "[object String]" === t
                ? e
                : NaN,
            );
      }
      function m(e) {
        let t = p(e);
        return t.setHours(0, 0, 0, 0), t;
      }
      function g(e) {
        let t = p(e),
          n = new Date(
            Date.UTC(
              t.getFullYear(),
              t.getMonth(),
              t.getDate(),
              t.getHours(),
              t.getMinutes(),
              t.getSeconds(),
              t.getMilliseconds(),
            ),
          );
        return n.setUTCFullYear(t.getFullYear()), +e - +n;
      }
      function h(e, t) {
        return e instanceof Date ? new e.constructor(t) : new Date(t);
      }
      function b(e, t) {
        let n =
            t?.weekStartsOn ??
            t?.locale?.options?.weekStartsOn ??
            u.weekStartsOn ??
            u.locale?.options?.weekStartsOn ??
            0,
          r = p(e),
          i = r.getDay();
        return (
          r.setDate(r.getDate() - ((i < n ? 7 : 0) + i - n)),
          r.setHours(0, 0, 0, 0),
          r
        );
      }
      function y(e) {
        return b(e, { weekStartsOn: 1 });
      }
      function _(e) {
        let t = p(e),
          n = t.getFullYear(),
          r = h(e, 0);
        r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
        let i = y(r),
          a = h(e, 0);
        a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
        let o = y(a);
        return t.getTime() >= i.getTime()
          ? n + 1
          : t.getTime() >= o.getTime()
            ? n
            : n - 1;
      }
      function v(e, t) {
        let n = p(e),
          r = n.getFullYear(),
          i =
            t?.firstWeekContainsDate ??
            t?.locale?.options?.firstWeekContainsDate ??
            u.firstWeekContainsDate ??
            u.locale?.options?.firstWeekContainsDate ??
            1,
          a = h(e, 0);
        a.setFullYear(r + 1, 0, i), a.setHours(0, 0, 0, 0);
        let o = b(a, t),
          l = h(e, 0);
        l.setFullYear(r, 0, i), l.setHours(0, 0, 0, 0);
        let s = b(l, t);
        return n.getTime() >= o.getTime()
          ? r + 1
          : n.getTime() >= s.getTime()
            ? r
            : r - 1;
      }
      function w(e, t) {
        let n = Math.abs(e).toString().padStart(t, "0");
        return (e < 0 ? "-" : "") + n;
      }
      let k = {
          y(e, t) {
            let n = e.getFullYear(),
              r = n > 0 ? n : 1 - n;
            return w("yy" === t ? r % 100 : r, t.length);
          },
          M(e, t) {
            let n = e.getMonth();
            return "M" === t ? String(n + 1) : w(n + 1, 2);
          },
          d: (e, t) => w(e.getDate(), t.length),
          a(e, t) {
            let n = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
              case "a":
              case "aa":
                return n.toUpperCase();
              case "aaa":
                return n;
              case "aaaaa":
                return n[0];
              default:
                return "am" === n ? "a.m." : "p.m.";
            }
          },
          h: (e, t) => w(e.getHours() % 12 || 12, t.length),
          H: (e, t) => w(e.getHours(), t.length),
          m: (e, t) => w(e.getMinutes(), t.length),
          s: (e, t) => w(e.getSeconds(), t.length),
          S(e, t) {
            let n = t.length;
            return w(
              Math.trunc(e.getMilliseconds() * Math.pow(10, n - 3)),
              t.length,
            );
          },
        },
        x = {
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        E = {
          G: function (e, t, n) {
            let r = e.getFullYear() > 0 ? 1 : 0;
            switch (t) {
              case "G":
              case "GG":
              case "GGG":
                return n.era(r, { width: "abbreviated" });
              case "GGGGG":
                return n.era(r, { width: "narrow" });
              default:
                return n.era(r, { width: "wide" });
            }
          },
          y: function (e, t, n) {
            if ("yo" === t) {
              let t = e.getFullYear();
              return n.ordinalNumber(t > 0 ? t : 1 - t, { unit: "year" });
            }
            return k.y(e, t);
          },
          Y: function (e, t, n, r) {
            let i = v(e, r),
              a = i > 0 ? i : 1 - i;
            return "YY" === t
              ? w(a % 100, 2)
              : "Yo" === t
                ? n.ordinalNumber(a, { unit: "year" })
                : w(a, t.length);
          },
          R: function (e, t) {
            return w(_(e), t.length);
          },
          u: function (e, t) {
            return w(e.getFullYear(), t.length);
          },
          Q: function (e, t, n) {
            let r = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
              case "Q":
                return String(r);
              case "QQ":
                return w(r, 2);
              case "Qo":
                return n.ordinalNumber(r, { unit: "quarter" });
              case "QQQ":
                return n.quarter(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "QQQQQ":
                return n.quarter(r, { width: "narrow", context: "formatting" });
              default:
                return n.quarter(r, { width: "wide", context: "formatting" });
            }
          },
          q: function (e, t, n) {
            let r = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
              case "q":
                return String(r);
              case "qq":
                return w(r, 2);
              case "qo":
                return n.ordinalNumber(r, { unit: "quarter" });
              case "qqq":
                return n.quarter(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "qqqqq":
                return n.quarter(r, { width: "narrow", context: "standalone" });
              default:
                return n.quarter(r, { width: "wide", context: "standalone" });
            }
          },
          M: function (e, t, n) {
            let r = e.getMonth();
            switch (t) {
              case "M":
              case "MM":
                return k.M(e, t);
              case "Mo":
                return n.ordinalNumber(r + 1, { unit: "month" });
              case "MMM":
                return n.month(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "MMMMM":
                return n.month(r, { width: "narrow", context: "formatting" });
              default:
                return n.month(r, { width: "wide", context: "formatting" });
            }
          },
          L: function (e, t, n) {
            let r = e.getMonth();
            switch (t) {
              case "L":
                return String(r + 1);
              case "LL":
                return w(r + 1, 2);
              case "Lo":
                return n.ordinalNumber(r + 1, { unit: "month" });
              case "LLL":
                return n.month(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "LLLLL":
                return n.month(r, { width: "narrow", context: "standalone" });
              default:
                return n.month(r, { width: "wide", context: "standalone" });
            }
          },
          w: function (e, t, n, r) {
            let i = (function (e, t) {
              let n = p(e);
              return (
                Math.round(
                  (+b(n, t) -
                    +(function (e, t) {
                      let n =
                          t?.firstWeekContainsDate ??
                          t?.locale?.options?.firstWeekContainsDate ??
                          u.firstWeekContainsDate ??
                          u.locale?.options?.firstWeekContainsDate ??
                          1,
                        r = v(e, t),
                        i = h(e, 0);
                      return (
                        i.setFullYear(r, 0, n), i.setHours(0, 0, 0, 0), b(i, t)
                      );
                    })(n, t)) /
                    f.jE,
                ) + 1
              );
            })(e, r);
            return "wo" === t
              ? n.ordinalNumber(i, { unit: "week" })
              : w(i, t.length);
          },
          I: function (e, t, n) {
            let r = (function (e) {
              let t = p(e);
              return (
                Math.round(
                  (+y(t) -
                    +(function (e) {
                      let t = _(e),
                        n = h(e, 0);
                      return (
                        n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), y(n)
                      );
                    })(t)) /
                    f.jE,
                ) + 1
              );
            })(e);
            return "Io" === t
              ? n.ordinalNumber(r, { unit: "week" })
              : w(r, t.length);
          },
          d: function (e, t, n) {
            return "do" === t
              ? n.ordinalNumber(e.getDate(), { unit: "date" })
              : k.d(e, t);
          },
          D: function (e, t, n) {
            let r = (function (e) {
              let t = p(e);
              return (
                (function (e, t) {
                  let n = m(e),
                    r = m(t);
                  return Math.round((+n - g(n) - (+r - g(r))) / f.dP);
                })(
                  t,
                  (function (e) {
                    let t = p(e),
                      n = h(e, 0);
                    return (
                      n.setFullYear(t.getFullYear(), 0, 1),
                      n.setHours(0, 0, 0, 0),
                      n
                    );
                  })(t),
                ) + 1
              );
            })(e);
            return "Do" === t
              ? n.ordinalNumber(r, { unit: "dayOfYear" })
              : w(r, t.length);
          },
          E: function (e, t, n) {
            let r = e.getDay();
            switch (t) {
              case "E":
              case "EE":
              case "EEE":
                return n.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "EEEEE":
                return n.day(r, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return n.day(r, { width: "short", context: "formatting" });
              default:
                return n.day(r, { width: "wide", context: "formatting" });
            }
          },
          e: function (e, t, n, r) {
            let i = e.getDay(),
              a = (i - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case "e":
                return String(a);
              case "ee":
                return w(a, 2);
              case "eo":
                return n.ordinalNumber(a, { unit: "day" });
              case "eee":
                return n.day(i, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "eeeee":
                return n.day(i, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return n.day(i, { width: "short", context: "formatting" });
              default:
                return n.day(i, { width: "wide", context: "formatting" });
            }
          },
          c: function (e, t, n, r) {
            let i = e.getDay(),
              a = (i - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case "c":
                return String(a);
              case "cc":
                return w(a, t.length);
              case "co":
                return n.ordinalNumber(a, { unit: "day" });
              case "ccc":
                return n.day(i, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "ccccc":
                return n.day(i, { width: "narrow", context: "standalone" });
              case "cccccc":
                return n.day(i, { width: "short", context: "standalone" });
              default:
                return n.day(i, { width: "wide", context: "standalone" });
            }
          },
          i: function (e, t, n) {
            let r = e.getDay(),
              i = 0 === r ? 7 : r;
            switch (t) {
              case "i":
                return String(i);
              case "ii":
                return w(i, t.length);
              case "io":
                return n.ordinalNumber(i, { unit: "day" });
              case "iii":
                return n.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "iiiii":
                return n.day(r, { width: "narrow", context: "formatting" });
              case "iiiiii":
                return n.day(r, { width: "short", context: "formatting" });
              default:
                return n.day(r, { width: "wide", context: "formatting" });
            }
          },
          a: function (e, t, n) {
            let r = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
              case "a":
              case "aa":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaa":
                return n
                  .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "aaaaa":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          b: function (e, t, n) {
            let r;
            let i = e.getHours();
            switch (
              ((r =
                12 === i
                  ? x.noon
                  : 0 === i
                    ? x.midnight
                    : i / 12 >= 1
                      ? "pm"
                      : "am"),
              t)
            ) {
              case "b":
              case "bb":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbb":
                return n
                  .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "bbbbb":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          B: function (e, t, n) {
            let r;
            let i = e.getHours();
            switch (
              ((r =
                i >= 17
                  ? x.evening
                  : i >= 12
                    ? x.afternoon
                    : i >= 4
                      ? x.morning
                      : x.night),
              t)
            ) {
              case "B":
              case "BB":
              case "BBB":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          h: function (e, t, n) {
            if ("ho" === t) {
              let t = e.getHours() % 12;
              return 0 === t && (t = 12), n.ordinalNumber(t, { unit: "hour" });
            }
            return k.h(e, t);
          },
          H: function (e, t, n) {
            return "Ho" === t
              ? n.ordinalNumber(e.getHours(), { unit: "hour" })
              : k.H(e, t);
          },
          K: function (e, t, n) {
            let r = e.getHours() % 12;
            return "Ko" === t
              ? n.ordinalNumber(r, { unit: "hour" })
              : w(r, t.length);
          },
          k: function (e, t, n) {
            let r = e.getHours();
            return (0 === r && (r = 24), "ko" === t)
              ? n.ordinalNumber(r, { unit: "hour" })
              : w(r, t.length);
          },
          m: function (e, t, n) {
            return "mo" === t
              ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
              : k.m(e, t);
          },
          s: function (e, t, n) {
            return "so" === t
              ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
              : k.s(e, t);
          },
          S: function (e, t) {
            return k.S(e, t);
          },
          X: function (e, t, n) {
            let r = e.getTimezoneOffset();
            if (0 === r) return "Z";
            switch (t) {
              case "X":
                return C(r);
              case "XXXX":
              case "XX":
                return A(r);
              default:
                return A(r, ":");
            }
          },
          x: function (e, t, n) {
            let r = e.getTimezoneOffset();
            switch (t) {
              case "x":
                return C(r);
              case "xxxx":
              case "xx":
                return A(r);
              default:
                return A(r, ":");
            }
          },
          O: function (e, t, n) {
            let r = e.getTimezoneOffset();
            switch (t) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + D(r, ":");
              default:
                return "GMT" + A(r, ":");
            }
          },
          z: function (e, t, n) {
            let r = e.getTimezoneOffset();
            switch (t) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + D(r, ":");
              default:
                return "GMT" + A(r, ":");
            }
          },
          t: function (e, t, n) {
            return w(Math.trunc(e.getTime() / 1e3), t.length);
          },
          T: function (e, t, n) {
            return w(e.getTime(), t.length);
          },
        };
      function D(e, t = "") {
        let n = e > 0 ? "-" : "+",
          r = Math.abs(e),
          i = Math.trunc(r / 60),
          a = r % 60;
        return 0 === a ? n + String(i) : n + String(i) + t + w(a, 2);
      }
      function C(e, t) {
        return e % 60 == 0
          ? (e > 0 ? "-" : "+") + w(Math.abs(e) / 60, 2)
          : A(e, t);
      }
      function A(e, t = "") {
        let n = Math.abs(e);
        return (
          (e > 0 ? "-" : "+") + w(Math.trunc(n / 60), 2) + t + w(n % 60, 2)
        );
      }
      let F = (e, t) => {
          switch (e) {
            case "P":
              return t.date({ width: "short" });
            case "PP":
              return t.date({ width: "medium" });
            case "PPP":
              return t.date({ width: "long" });
            default:
              return t.date({ width: "full" });
          }
        },
        S = (e, t) => {
          switch (e) {
            case "p":
              return t.time({ width: "short" });
            case "pp":
              return t.time({ width: "medium" });
            case "ppp":
              return t.time({ width: "long" });
            default:
              return t.time({ width: "full" });
          }
        },
        N = {
          p: S,
          P: (e, t) => {
            let n;
            let r = e.match(/(P+)(p+)?/) || [],
              i = r[1],
              a = r[2];
            if (!a) return F(e, t);
            switch (i) {
              case "P":
                n = t.dateTime({ width: "short" });
                break;
              case "PP":
                n = t.dateTime({ width: "medium" });
                break;
              case "PPP":
                n = t.dateTime({ width: "long" });
                break;
              default:
                n = t.dateTime({ width: "full" });
            }
            return n.replace("{{date}}", F(i, t)).replace("{{time}}", S(a, t));
          },
        },
        O = /^D+$/,
        M = /^Y+$/,
        T = ["D", "DD", "YY", "YYYY"],
        B = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        I = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        L = /^'([^]*?)'?$/,
        R = /''/g,
        z = /[a-zA-Z]/;
      function P(e, t, n) {
        let r = n?.locale ?? u.locale ?? c,
          i =
            n?.firstWeekContainsDate ??
            n?.locale?.options?.firstWeekContainsDate ??
            u.firstWeekContainsDate ??
            u.locale?.options?.firstWeekContainsDate ??
            1,
          a =
            n?.weekStartsOn ??
            n?.locale?.options?.weekStartsOn ??
            u.weekStartsOn ??
            u.locale?.options?.weekStartsOn ??
            0,
          o = p(e);
        if (
          !(
            (o instanceof Date ||
              ("object" == typeof o &&
                "[object Date]" === Object.prototype.toString.call(o)) ||
              "number" == typeof o) &&
            !isNaN(Number(p(o)))
          )
        )
          throw RangeError("Invalid time value");
        let l = t
          .match(I)
          .map((e) => {
            let t = e[0];
            return "p" === t || "P" === t ? (0, N[t])(e, r.formatLong) : e;
          })
          .join("")
          .match(B)
          .map((e) => {
            if ("''" === e) return { isToken: !1, value: "'" };
            let t = e[0];
            if ("'" === t)
              return {
                isToken: !1,
                value: (function (e) {
                  let t = e.match(L);
                  return t ? t[1].replace(R, "'") : e;
                })(e),
              };
            if (E[t]) return { isToken: !0, value: e };
            if (t.match(z))
              throw RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  t +
                  "`",
              );
            return { isToken: !1, value: e };
          });
        r.localize.preprocessor && (l = r.localize.preprocessor(o, l));
        let s = { firstWeekContainsDate: i, weekStartsOn: a, locale: r };
        return l
          .map((i) => {
            if (!i.isToken) return i.value;
            let a = i.value;
            return (
              ((!n?.useAdditionalWeekYearTokens && M.test(a)) ||
                (!n?.useAdditionalDayOfYearTokens && O.test(a))) &&
                (function (e, t, n) {
                  let r = (function (e, t, n) {
                    let r = "Y" === e[0] ? "years" : "days of the month";
                    return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
                  })(e, t, n);
                  if ((console.warn(r), T.includes(e))) throw RangeError(r);
                })(a, t, String(e)),
              (0, E[a[0]])(o, a, r.localize, s)
            );
          })
          .join("");
      }
    },
    3595: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return i;
        },
      });
      var r = n(1853);
      function i(e, t) {
        let n, i;
        let p = t?.additionalDigits ?? 2,
          m = (function (e) {
            let t;
            let n = {},
              r = e.split(a.dateTimeDelimiter);
            if (r.length > 2) return n;
            if (
              (/:/.test(r[0])
                ? (t = r[0])
                : ((n.date = r[0]),
                  (t = r[1]),
                  a.timeZoneDelimiter.test(n.date) &&
                    ((n.date = e.split(a.timeZoneDelimiter)[0]),
                    (t = e.substr(n.date.length, e.length)))),
              t)
            ) {
              let e = a.timezone.exec(t);
              e
                ? ((n.time = t.replace(e[1], "")), (n.timezone = e[1]))
                : (n.time = t);
            }
            return n;
          })(e);
        if (m.date) {
          let e = (function (e, t) {
            let n = RegExp(
                "^(?:(\\d{4}|[+-]\\d{" +
                  (4 + t) +
                  "})|(\\d{2}|[+-]\\d{" +
                  (2 + t) +
                  "})$)",
              ),
              r = e.match(n);
            if (!r) return { year: NaN, restDateString: "" };
            let i = r[1] ? parseInt(r[1]) : null,
              a = r[2] ? parseInt(r[2]) : null;
            return {
              year: null === a ? i : 100 * a,
              restDateString: e.slice((r[1] || r[2]).length),
            };
          })(m.date, p);
          n = (function (e, t) {
            if (null === t) return new Date(NaN);
            let n = e.match(o);
            if (!n) return new Date(NaN);
            let r = !!n[4],
              i = c(n[1]),
              a = c(n[2]) - 1,
              l = c(n[3]),
              s = c(n[4]),
              u = c(n[5]) - 1;
            if (r)
              return s >= 1 && s <= 53 && u >= 0 && u <= 6
                ? (function (e, t, n) {
                    let r = new Date(0);
                    r.setUTCFullYear(e, 0, 4);
                    let i = r.getUTCDay() || 7;
                    return (
                      r.setUTCDate(r.getUTCDate() + ((t - 1) * 7 + n + 1 - i)),
                      r
                    );
                  })(t, s, u)
                : new Date(NaN);
            {
              let e = new Date(0);
              return a >= 0 &&
                a <= 11 &&
                l >= 1 &&
                l <= (d[a] || (f(t) ? 29 : 28)) &&
                i >= 1 &&
                i <= (f(t) ? 366 : 365)
                ? (e.setUTCFullYear(t, a, Math.max(i, l)), e)
                : new Date(NaN);
            }
          })(e.restDateString, e.year);
        }
        if (!n || isNaN(n.getTime())) return new Date(NaN);
        let g = n.getTime(),
          h = 0;
        if (
          m.time &&
          isNaN(
            (h = (function (e) {
              let t = e.match(l);
              if (!t) return NaN;
              let n = u(t[1]),
                i = u(t[2]),
                a = u(t[3]);
              return (
                24 === n
                  ? 0 === i && 0 === a
                  : a >= 0 && a < 60 && i >= 0 && i < 60 && n >= 0 && n < 25
              )
                ? n * r.vh + i * r.yJ + 1e3 * a
                : NaN;
            })(m.time)),
          )
        )
          return new Date(NaN);
        if (m.timezone) {
          if (
            isNaN(
              (i = (function (e) {
                if ("Z" === e) return 0;
                let t = e.match(s);
                if (!t) return 0;
                let n = "+" === t[1] ? -1 : 1,
                  i = parseInt(t[2]),
                  a = (t[3] && parseInt(t[3])) || 0;
                return a >= 0 && a <= 59 ? n * (i * r.vh + a * r.yJ) : NaN;
              })(m.timezone)),
            )
          )
            return new Date(NaN);
        } else {
          let e = new Date(g + h),
            t = new Date(0);
          return (
            t.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
            t.setHours(
              e.getUTCHours(),
              e.getUTCMinutes(),
              e.getUTCSeconds(),
              e.getUTCMilliseconds(),
            ),
            t
          );
        }
        return new Date(g + h + i);
      }
      let a = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/,
        },
        o = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        l =
          /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        s = /^([+-])(\d{2})(?::?(\d{2}))?$/;
      function c(e) {
        return e ? parseInt(e) : 1;
      }
      function u(e) {
        return (e && parseFloat(e.replace(",", "."))) || 0;
      }
      let d = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function f(e) {
        return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
      }
    },
    4301: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return i;
        },
      });
      let r = document.createElement("i");
      function i(e) {
        let t = "&" + e + ";";
        r.innerHTML = t;
        let n = r.textContent;
        return (
          (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
        );
      }
    },
    4345: function (e, t, n) {
      "use strict";
      function r() {}
      n.d(t, {
        ok: function () {
          return r;
        },
      });
    },
    639: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = "element" === e.type ? e.tagName.toLowerCase() : "",
          n = 2 === t.length && 104 === t.charCodeAt(0) ? t.charCodeAt(1) : 0;
        return n > 48 && n < 55 ? n - 48 : void 0;
      }
      n.d(t, {
        B: function () {
          return r;
        },
      });
    },
    6297: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return r;
        },
      });
      let r = function (e) {
        if (null == e) return a;
        if ("string" == typeof e)
          return i(function (t) {
            return t.tagName === e;
          });
        if ("object" == typeof e)
          return (function (e) {
            let t = [],
              n = -1;
            for (; ++n < e.length; ) t[n] = r(e[n]);
            return i(function (...e) {
              let n = -1;
              for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
              return !1;
            });
          })(e);
        if ("function" == typeof e) return i(e);
        throw Error("Expected function, string, or array as `test`");
      };
      function i(e) {
        return function (t, n, r) {
          return !!(
            null !== t &&
            "object" == typeof t &&
            "type" in t &&
            "tagName" in t &&
            e.call(this, t, "number" == typeof n ? n : void 0, r || void 0)
          );
        };
      }
      function a(e) {
        return !!(
          e &&
          "object" == typeof e &&
          "type" in e &&
          "element" === e.type &&
          "tagName" in e &&
          "string" == typeof e.tagName
        );
      }
    },
    8535: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return m;
        },
      });
      var r = n(6093);
      let i = function (e, t, n) {
        let i = (0, r.O)(n);
        if (!e || !e.type || !e.children) throw Error("Expected parent node");
        if ("number" == typeof t) {
          if (t < 0 || t === Number.POSITIVE_INFINITY)
            throw Error("Expected positive finite number as index");
        } else if ((t = e.children.indexOf(t)) < 0)
          throw Error("Expected child node or index");
        for (; ++t < e.children.length; )
          if (i(e.children[t], t, e)) return e.children[t];
      };
      var a = n(6297);
      let o = /\n/g,
        l = /[\t ]+/g,
        s = (0, a.Y)("br"),
        c = (0, a.Y)(function (e) {
          return "td" === e.tagName || "th" === e.tagName;
        }),
        u = (0, a.Y)("p"),
        d = (0, a.Y)("tr"),
        f = (0, a.Y)([
          "datalist",
          "head",
          "noembed",
          "noframes",
          "noscript",
          "rp",
          "script",
          "style",
          "template",
          "title",
          function (e) {
            return !!(e.properties || {}).hidden;
          },
          function (e) {
            return "dialog" === e.tagName && !(e.properties || {}).open;
          },
        ]),
        p = (0, a.Y)([
          "address",
          "article",
          "aside",
          "blockquote",
          "body",
          "caption",
          "center",
          "dd",
          "dialog",
          "dir",
          "dl",
          "dt",
          "div",
          "figure",
          "figcaption",
          "footer",
          "form,",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "hr",
          "html",
          "legend",
          "listing",
          "main",
          "menu",
          "nav",
          "ol",
          "p",
          "plaintext",
          "pre",
          "section",
          "ul",
          "xmp",
        ]);
      function m(e, t = {}) {
        let n;
        let r = "children" in e ? e.children : [],
          a = p(e),
          o = h(e, {
            whitespace: t.whitespace || "normal",
            breakBefore: !1,
            breakAfter: !1,
          }),
          l = [];
        ("text" === e.type || "comment" === e.type) &&
          l.push(...g(e, { whitespace: o, breakBefore: !0, breakAfter: !0 }));
        let m = -1;
        for (; ++m < r.length; )
          l.push(
            ...(function e(t, n, r) {
              return "element" === t.type
                ? (function (t, n, r) {
                    let a, o;
                    let l = h(t, r),
                      m = t.children || [],
                      g = -1,
                      b = [];
                    if (f(t)) return b;
                    for (
                      s(t)
                        ? (o = "\n")
                        : d(t) && i(n, t, d)
                          ? (o = "\n")
                          : u(t)
                            ? ((a = 2), (o = 2))
                            : p(t) && ((a = 1), (o = 1));
                      ++g < m.length;

                    )
                      b = b.concat(
                        e(m[g], t, {
                          whitespace: l,
                          breakBefore: g ? void 0 : a,
                          breakAfter: g < m.length - 1 ? s(m[g + 1]) : o,
                        }),
                      );
                    return (
                      c(t) && i(n, t, c) && b.push("	"),
                      a && b.unshift(a),
                      o && b.push(o),
                      b
                    );
                  })(t, n, r)
                : "text" === t.type
                  ? "normal" === r.whitespace
                    ? g(t, r)
                    : [String(t.value)]
                  : [];
            })(r[m], e, {
              whitespace: o,
              breakBefore: m ? void 0 : a,
              breakAfter: m < r.length - 1 ? s(r[m + 1]) : a,
            }),
          );
        let b = [];
        for (m = -1; ++m < l.length; ) {
          let e = l[m];
          "number" == typeof e
            ? void 0 !== n && e > n && (n = e)
            : e &&
              (void 0 !== n && n > -1 && b.push("\n".repeat(n) || " "),
              (n = -1),
              b.push(e));
        }
        return b.join("");
      }
      function g(e, t) {
        let n;
        let r = String(e.value),
          i = [],
          a = [],
          s = 0;
        for (; s <= r.length; ) {
          o.lastIndex = s;
          let e = o.exec(r),
            n = e && "index" in e ? e.index : r.length;
          i.push(
            (function (e, t, n) {
              let r;
              let i = [],
                a = 0;
              for (; a < e.length; ) {
                l.lastIndex = a;
                let n = l.exec(e);
                (r = n ? n.index : e.length),
                  a || r || !n || t || i.push(""),
                  a !== r && i.push(e.slice(a, r)),
                  (a = n ? r + n[0].length : r);
              }
              return a === r || n || i.push(""), i.join(" ");
            })(
              r
                .slice(s, n)
                .replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
              0 !== s || t.breakBefore,
              n !== r.length || t.breakAfter,
            ),
          ),
            (s = n + 1);
        }
        let c = -1;
        for (; ++c < i.length; )
          8203 === i[c].charCodeAt(i[c].length - 1) ||
          (c < i.length - 1 && 8203 === i[c + 1].charCodeAt(0))
            ? (a.push(i[c]), (n = void 0))
            : i[c]
              ? ("number" == typeof n && a.push(n), a.push(i[c]), (n = 0))
              : (0 === c || c === i.length - 1) && a.push(0);
        return a;
      }
      function h(e, t) {
        if ("element" === e.type) {
          let n = e.properties || {};
          switch (e.tagName) {
            case "listing":
            case "plaintext":
            case "xmp":
              return "pre";
            case "nobr":
              return "nowrap";
            case "pre":
              return n.wrap ? "pre-wrap" : "pre";
            case "td":
            case "th":
              return n.noWrap ? "nowrap" : t.whitespace;
            case "textarea":
              return "pre-wrap";
          }
        }
        return t.whitespace;
      }
    },
    5996: function (e, t, n) {
      "use strict";
      function r(e, t) {
        let n = String(e),
          r = n.indexOf(t),
          i = r,
          a = 0,
          o = 0;
        if ("string" != typeof t) throw TypeError("Expected substring");
        for (; -1 !== r; )
          r === i ? ++a > o && (o = a) : (a = 1),
            (i = r + t.length),
            (r = n.indexOf(t, i));
        return o;
      }
      n.d(t, {
        J: function () {
          return r;
        },
      });
    },
    7204: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return a;
        },
      });
      var r = n(8718),
        i = n(6093);
      function a(e, t, n) {
        let a = (0, i.O)((n || {}).ignore || []),
          o = (function (e) {
            let t = [];
            if (!Array.isArray(e))
              throw TypeError(
                "Expected find and replace tuple or list of tuples",
              );
            let n = !e[0] || Array.isArray(e[0]) ? e : [e],
              r = -1;
            for (; ++r < n.length; ) {
              var i;
              let e = n[r];
              t.push([
                "string" == typeof (i = e[0])
                  ? RegExp(
                      (function (e) {
                        if ("string" != typeof e)
                          throw TypeError("Expected a string");
                        return e
                          .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                          .replace(/-/g, "\\x2d");
                      })(i),
                      "g",
                    )
                  : i,
                (function (e) {
                  return "function" == typeof e
                    ? e
                    : function () {
                        return e;
                      };
                })(e[1]),
              ]);
            }
            return t;
          })(t),
          l = -1;
        for (; ++l < o.length; ) (0, r.S4)(e, "text", s);
        function s(e, t) {
          let n,
            r = -1;
          for (; ++r < t.length; ) {
            let e = t[r],
              i = n ? n.children : void 0;
            if (a(e, i ? i.indexOf(e) : void 0, n)) return;
            n = e;
          }
          if (n)
            return (function (e, t) {
              let n = t[t.length - 1],
                r = o[l][0],
                i = o[l][1],
                a = 0,
                s = n.children.indexOf(e),
                c = !1,
                u = [];
              r.lastIndex = 0;
              let d = r.exec(e.value);
              for (; d; ) {
                let n = d.index,
                  o = { index: d.index, input: d.input, stack: [...t, e] },
                  l = i(...d, o);
                if (
                  ("string" == typeof l &&
                    (l = l.length > 0 ? { type: "text", value: l } : void 0),
                  !1 === l
                    ? (r.lastIndex = n + 1)
                    : (a !== n &&
                        u.push({ type: "text", value: e.value.slice(a, n) }),
                      Array.isArray(l) ? u.push(...l) : l && u.push(l),
                      (a = n + d[0].length),
                      (c = !0)),
                  !r.global)
                )
                  break;
                d = r.exec(e.value);
              }
              return (
                c
                  ? (a < e.value.length &&
                      u.push({ type: "text", value: e.value.slice(a) }),
                    n.children.splice(s, 1, ...u))
                  : (u = [e]),
                s + u.length
              );
            })(e, t);
        }
      }
    },
    7962: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return i;
        },
      });
      let r = {};
      function i(e, t) {
        let n = t || r;
        return a(
          e,
          "boolean" != typeof n.includeImageAlt || n.includeImageAlt,
          "boolean" != typeof n.includeHtml || n.includeHtml,
        );
      }
      function a(e, t, n) {
        if (e && "object" == typeof e) {
          if ("value" in e) return "html" !== e.type || n ? e.value : "";
          if (t && "alt" in e && e.alt) return e.alt;
          if ("children" in e) return o(e.children, t, n);
        }
        return Array.isArray(e) ? o(e, t, n) : "";
      }
      function o(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) r[i] = a(e[i], t, n);
        return r.join("");
      }
    },
    3402: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return a;
        },
      });
      var r = n(2761),
        i = n(5459);
      let a = {
        tokenize: function (e, t, n) {
          return function (t) {
            return (0, i.xz)(t) ? (0, r.f)(e, a, "linePrefix")(t) : a(t);
          };
          function a(e) {
            return null === e || (0, i.Ch)(e) ? t(e) : n(e);
          }
        },
        partial: !0,
      };
    },
    2761: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return i;
        },
      });
      var r = n(5459);
      function i(e, t, n, i) {
        let a = i ? i - 1 : Number.POSITIVE_INFINITY,
          o = 0;
        return function (i) {
          return (0, r.xz)(i)
            ? (e.enter(n),
              (function i(l) {
                return (0, r.xz)(l) && o++ < a
                  ? (e.consume(l), i)
                  : (e.exit(n), t(l));
              })(i))
            : t(i);
        };
      }
    },
    6226: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return a;
        },
      });
      var r = n(2761),
        i = n(5459);
      function a(e, t) {
        let n;
        return function a(o) {
          return (0, i.Ch)(o)
            ? (e.enter("lineEnding"),
              e.consume(o),
              e.exit("lineEnding"),
              (n = !0),
              a)
            : (0, i.xz)(o)
              ? (0, r.f)(e, a, n ? "linePrefix" : "lineSuffix")(o)
              : t(o);
        };
      }
    },
    5459: function (e, t, n) {
      "use strict";
      n.d(t, {
        AF: function () {
          return s;
        },
        Av: function () {
          return o;
        },
        B8: function () {
          return m;
        },
        Ch: function () {
          return u;
        },
        H$: function () {
          return i;
        },
        Xh: function () {
          return p;
        },
        jv: function () {
          return r;
        },
        n9: function () {
          return a;
        },
        pY: function () {
          return l;
        },
        sR: function () {
          return c;
        },
        xz: function () {
          return f;
        },
        z3: function () {
          return d;
        },
      });
      let r = g(/[A-Za-z]/),
        i = g(/[\dA-Za-z]/),
        a = g(/[#-'*+\--9=?A-Z^-~]/);
      function o(e) {
        return null !== e && (e < 32 || 127 === e);
      }
      let l = g(/\d/),
        s = g(/[\dA-Fa-f]/),
        c = g(/[!-/:-@[-`{-~]/);
      function u(e) {
        return null !== e && e < -2;
      }
      function d(e) {
        return null !== e && (e < 0 || 32 === e);
      }
      function f(e) {
        return -2 === e || -1 === e || 32 === e;
      }
      let p = g(/\p{P}|\p{S}/u),
        m = g(/\s/);
      function g(e) {
        return function (t) {
          return null !== t && t > -1 && e.test(String.fromCharCode(t));
        };
      }
    },
    1905: function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        let i;
        let a = e.length,
          o = 0;
        if (
          ((t = t < 0 ? (-t > a ? 0 : a + t) : t > a ? a : t),
          (n = n > 0 ? n : 0),
          r.length < 1e4)
        )
          (i = Array.from(r)).unshift(t, n), e.splice(...i);
        else
          for (n && e.splice(t, n); o < r.length; )
            (i = r.slice(o, o + 1e4)).unshift(t, 0),
              e.splice(...i),
              (o += 1e4),
              (t += 1e4);
      }
      function i(e, t) {
        return e.length > 0 ? (r(e, e.length, 0, t), e) : t;
      }
      n.d(t, {
        V: function () {
          return i;
        },
        d: function () {
          return r;
        },
      });
    },
    2987: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return i;
        },
      });
      var r = n(5459);
      function i(e) {
        return null === e || (0, r.z3)(e) || (0, r.B8)(e)
          ? 1
          : (0, r.Xh)(e)
            ? 2
            : void 0;
      }
    },
    4663: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return a;
        },
      });
      var r = n(1905);
      let i = {}.hasOwnProperty;
      function a(e) {
        let t = {},
          n = -1;
        for (; ++n < e.length; )
          !(function (e, t) {
            let n;
            for (n in t) {
              let a;
              let o = (i.call(e, n) ? e[n] : void 0) || (e[n] = {}),
                l = t[n];
              if (l)
                for (a in l) {
                  i.call(o, a) || (o[a] = []);
                  let e = l[a];
                  !(function (e, t) {
                    let n = -1,
                      i = [];
                    for (; ++n < t.length; )
                      ("after" === t[n].add ? e : i).push(t[n]);
                    (0, r.d)(e, 0, 0, i);
                  })(o[a], Array.isArray(e) ? e : e ? [e] : []);
                }
            }
          })(t, e[n]);
        return t;
      }
    },
    1098: function (e, t, n) {
      "use strict";
      function r(e) {
        return e
          .replace(/[\t\n\r ]+/g, " ")
          .replace(/^ | $/g, "")
          .toLowerCase()
          .toUpperCase();
      }
      n.d(t, {
        d: function () {
          return r;
        },
      });
    },
    3233: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        let r = [],
          i = -1;
        for (; ++i < e.length; ) {
          let a = e[i].resolveAll;
          a && !r.includes(a) && ((t = a(t, n)), r.push(a));
        }
        return t;
      }
      n.d(t, {
        C: function () {
          return r;
        },
      });
    },
    1634: function (e, t, n) {
      "use strict";
      n.d(t, {
        dy: function () {
          return y;
        },
        YP: function () {
          return _;
        },
      });
      class r {
        constructor(e, t, n) {
          (this.property = e), (this.normal = t), n && (this.space = n);
        }
      }
      function i(e, t) {
        let n = {},
          i = {},
          a = -1;
        for (; ++a < e.length; )
          Object.assign(n, e[a].property), Object.assign(i, e[a].normal);
        return new r(n, i, t);
      }
      (r.prototype.property = {}),
        (r.prototype.normal = {}),
        (r.prototype.space = null);
      var a = n(3859),
        o = n(5729);
      let l = {}.hasOwnProperty;
      function s(e) {
        let t;
        let n = {},
          i = {};
        for (t in e.properties)
          if (l.call(e.properties, t)) {
            let r = e.properties[t],
              l = new o.I(t, e.transform(e.attributes || {}, t), r, e.space);
            e.mustUseProperty &&
              e.mustUseProperty.includes(t) &&
              (l.mustUseProperty = !0),
              (n[t] = l),
              (i[(0, a.F)(t)] = t),
              (i[(0, a.F)(l.attribute)] = t);
          }
        return new r(n, i, e.space);
      }
      let c = s({
          space: "xlink",
          transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
          properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null,
          },
        }),
        u = s({
          space: "xml",
          transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
          properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
        });
      function d(e, t) {
        return t in e ? e[t] : t;
      }
      function f(e, t) {
        return d(e, t.toLowerCase());
      }
      let p = s({
        space: "xmlns",
        attributes: { xmlnsxlink: "xmlns:xlink" },
        transform: f,
        properties: { xmlns: null, xmlnsXLink: null },
      });
      var m = n(7312);
      let g = s({
          transform: (e, t) =>
            "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
          properties: {
            ariaActiveDescendant: null,
            ariaAtomic: m.booleanish,
            ariaAutoComplete: null,
            ariaBusy: m.booleanish,
            ariaChecked: m.booleanish,
            ariaColCount: m.number,
            ariaColIndex: m.number,
            ariaColSpan: m.number,
            ariaControls: m.spaceSeparated,
            ariaCurrent: null,
            ariaDescribedBy: m.spaceSeparated,
            ariaDetails: null,
            ariaDisabled: m.booleanish,
            ariaDropEffect: m.spaceSeparated,
            ariaErrorMessage: null,
            ariaExpanded: m.booleanish,
            ariaFlowTo: m.spaceSeparated,
            ariaGrabbed: m.booleanish,
            ariaHasPopup: null,
            ariaHidden: m.booleanish,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: m.spaceSeparated,
            ariaLevel: m.number,
            ariaLive: null,
            ariaModal: m.booleanish,
            ariaMultiLine: m.booleanish,
            ariaMultiSelectable: m.booleanish,
            ariaOrientation: null,
            ariaOwns: m.spaceSeparated,
            ariaPlaceholder: null,
            ariaPosInSet: m.number,
            ariaPressed: m.booleanish,
            ariaReadOnly: m.booleanish,
            ariaRelevant: null,
            ariaRequired: m.booleanish,
            ariaRoleDescription: m.spaceSeparated,
            ariaRowCount: m.number,
            ariaRowIndex: m.number,
            ariaRowSpan: m.number,
            ariaSelected: m.booleanish,
            ariaSetSize: m.number,
            ariaSort: null,
            ariaValueMax: m.number,
            ariaValueMin: m.number,
            ariaValueNow: m.number,
            ariaValueText: null,
            role: null,
          },
        }),
        h = s({
          space: "html",
          attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv",
          },
          transform: f,
          mustUseProperty: ["checked", "multiple", "muted", "selected"],
          properties: {
            abbr: null,
            accept: m.commaSeparated,
            acceptCharset: m.spaceSeparated,
            accessKey: m.spaceSeparated,
            action: null,
            allow: null,
            allowFullScreen: m.boolean,
            allowPaymentRequest: m.boolean,
            allowUserMedia: m.boolean,
            alt: null,
            as: null,
            async: m.boolean,
            autoCapitalize: null,
            autoComplete: m.spaceSeparated,
            autoFocus: m.boolean,
            autoPlay: m.boolean,
            blocking: m.spaceSeparated,
            capture: null,
            charSet: null,
            checked: m.boolean,
            cite: null,
            className: m.spaceSeparated,
            cols: m.number,
            colSpan: null,
            content: null,
            contentEditable: m.booleanish,
            controls: m.boolean,
            controlsList: m.spaceSeparated,
            coords: m.number | m.commaSeparated,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: m.boolean,
            defer: m.boolean,
            dir: null,
            dirName: null,
            disabled: m.boolean,
            download: m.overloadedBoolean,
            draggable: m.booleanish,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: m.boolean,
            formTarget: null,
            headers: m.spaceSeparated,
            height: m.number,
            hidden: m.boolean,
            high: m.number,
            href: null,
            hrefLang: null,
            htmlFor: m.spaceSeparated,
            httpEquiv: m.spaceSeparated,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: m.boolean,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: m.boolean,
            itemId: null,
            itemProp: m.spaceSeparated,
            itemRef: m.spaceSeparated,
            itemScope: m.boolean,
            itemType: m.spaceSeparated,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: m.boolean,
            low: m.number,
            manifest: null,
            max: null,
            maxLength: m.number,
            media: null,
            method: null,
            min: null,
            minLength: m.number,
            multiple: m.boolean,
            muted: m.boolean,
            name: null,
            nonce: null,
            noModule: m.boolean,
            noValidate: m.boolean,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: m.boolean,
            optimum: m.number,
            pattern: null,
            ping: m.spaceSeparated,
            placeholder: null,
            playsInline: m.boolean,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: m.boolean,
            referrerPolicy: null,
            rel: m.spaceSeparated,
            required: m.boolean,
            reversed: m.boolean,
            rows: m.number,
            rowSpan: m.number,
            sandbox: m.spaceSeparated,
            scope: null,
            scoped: m.boolean,
            seamless: m.boolean,
            selected: m.boolean,
            shadowRootDelegatesFocus: m.boolean,
            shadowRootMode: null,
            shape: null,
            size: m.number,
            sizes: null,
            slot: null,
            span: m.number,
            spellCheck: m.booleanish,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: m.number,
            step: null,
            style: null,
            tabIndex: m.number,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: m.boolean,
            useMap: null,
            value: m.booleanish,
            width: m.number,
            wrap: null,
            align: null,
            aLink: null,
            archive: m.spaceSeparated,
            axis: null,
            background: null,
            bgColor: null,
            border: m.number,
            borderColor: null,
            bottomMargin: m.number,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: m.boolean,
            declare: m.boolean,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: m.number,
            leftMargin: m.number,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: m.number,
            marginWidth: m.number,
            noResize: m.boolean,
            noHref: m.boolean,
            noShade: m.boolean,
            noWrap: m.boolean,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: m.number,
            rules: null,
            scheme: null,
            scrolling: m.booleanish,
            standby: null,
            summary: null,
            text: null,
            topMargin: m.number,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: m.number,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: m.boolean,
            disableRemotePlayback: m.boolean,
            prefix: null,
            property: null,
            results: m.number,
            security: null,
            unselectable: null,
          },
        }),
        b = s({
          space: "svg",
          attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin",
          },
          transform: d,
          properties: {
            about: m.commaOrSpaceSeparated,
            accentHeight: m.number,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: m.number,
            amplitude: m.number,
            arabicForm: null,
            ascent: m.number,
            attributeName: null,
            attributeType: null,
            azimuth: m.number,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: m.number,
            by: null,
            calcMode: null,
            capHeight: m.number,
            className: m.spaceSeparated,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: m.number,
            diffuseConstant: m.number,
            direction: null,
            display: null,
            dur: null,
            divisor: m.number,
            dominantBaseline: null,
            download: m.boolean,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: m.number,
            enableBackground: null,
            end: null,
            event: null,
            exponent: m.number,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: m.number,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: m.commaSeparated,
            g2: m.commaSeparated,
            glyphName: m.commaSeparated,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: m.number,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: m.number,
            horizOriginX: m.number,
            horizOriginY: m.number,
            id: null,
            ideographic: m.number,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: m.number,
            k: m.number,
            k1: m.number,
            k2: m.number,
            k3: m.number,
            k4: m.number,
            kernelMatrix: m.commaOrSpaceSeparated,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: m.number,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: m.number,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: m.number,
            overlineThickness: m.number,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: m.number,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: m.spaceSeparated,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: m.number,
            pointsAtY: m.number,
            pointsAtZ: m.number,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: m.commaOrSpaceSeparated,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: m.commaOrSpaceSeparated,
            rev: m.commaOrSpaceSeparated,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: m.commaOrSpaceSeparated,
            requiredFeatures: m.commaOrSpaceSeparated,
            requiredFonts: m.commaOrSpaceSeparated,
            requiredFormats: m.commaOrSpaceSeparated,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: m.number,
            specularExponent: m.number,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: m.number,
            strikethroughThickness: m.number,
            string: null,
            stroke: null,
            strokeDashArray: m.commaOrSpaceSeparated,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: m.number,
            strokeOpacity: m.number,
            strokeWidth: null,
            style: null,
            surfaceScale: m.number,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: m.commaOrSpaceSeparated,
            tabIndex: m.number,
            tableValues: null,
            target: null,
            targetX: m.number,
            targetY: m.number,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: m.commaOrSpaceSeparated,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: m.number,
            underlineThickness: m.number,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: m.number,
            values: null,
            vAlphabetic: m.number,
            vMathematical: m.number,
            vectorEffect: null,
            vHanging: m.number,
            vIdeographic: m.number,
            version: null,
            vertAdvY: m.number,
            vertOriginX: m.number,
            vertOriginY: m.number,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: m.number,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null,
          },
        }),
        y = i([u, c, p, g, h], "html"),
        _ = i([u, c, p, g, b], "svg");
    },
    6103: function (e, t, n) {
      "use strict";
      n.d(t, {
        s: function () {
          return c;
        },
      });
      var r = n(3859),
        i = n(5729),
        a = n(9255);
      let o = /^data[-\w.:]+$/i,
        l = /-[a-z]/g,
        s = /[A-Z]/g;
      function c(e, t) {
        let n = (0, r.F)(t),
          c = t,
          f = a.k;
        if (n in e.normal) return e.property[e.normal[n]];
        if (n.length > 4 && "data" === n.slice(0, 4) && o.test(t)) {
          if ("-" === t.charAt(4)) {
            let e = t.slice(5).replace(l, d);
            c = "data" + e.charAt(0).toUpperCase() + e.slice(1);
          } else {
            let e = t.slice(4);
            if (!l.test(e)) {
              let n = e.replace(s, u);
              "-" !== n.charAt(0) && (n = "-" + n), (t = "data" + n);
            }
          }
          f = i.I;
        }
        return new f(c, t);
      }
      function u(e) {
        return "-" + e.toLowerCase();
      }
      function d(e) {
        return e.charAt(1).toUpperCase();
      }
    },
    3859: function (e, t, n) {
      "use strict";
      function r(e) {
        return e.toLowerCase();
      }
      n.d(t, {
        F: function () {
          return r;
        },
      });
    },
    5729: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return o;
        },
      });
      var r = n(9255),
        i = n(7312);
      let a = Object.keys(i);
      class o extends r.k {
        constructor(e, t, n, r) {
          var o, l;
          let s = -1;
          if ((super(e, t), r && (this.space = r), "number" == typeof n))
            for (; ++s < a.length; ) {
              let e = a[s];
              (o = a[s]), (l = (n & i[e]) === i[e]) && (this[o] = l);
            }
        }
      }
      o.prototype.defined = !0;
    },
    9255: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return r;
        },
      });
      class r {
        constructor(e, t) {
          (this.property = e), (this.attribute = t);
        }
      }
      (r.prototype.space = null),
        (r.prototype.boolean = !1),
        (r.prototype.booleanish = !1),
        (r.prototype.overloadedBoolean = !1),
        (r.prototype.number = !1),
        (r.prototype.commaSeparated = !1),
        (r.prototype.spaceSeparated = !1),
        (r.prototype.commaOrSpaceSeparated = !1),
        (r.prototype.mustUseProperty = !1),
        (r.prototype.defined = !1);
    },
    7312: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          boolean: function () {
            return i;
          },
          booleanish: function () {
            return a;
          },
          commaOrSpaceSeparated: function () {
            return u;
          },
          commaSeparated: function () {
            return c;
          },
          number: function () {
            return l;
          },
          overloadedBoolean: function () {
            return o;
          },
          spaceSeparated: function () {
            return s;
          },
        });
      let r = 0,
        i = d(),
        a = d(),
        o = d(),
        l = d(),
        s = d(),
        c = d(),
        u = d();
      function d() {
        return 2 ** ++r;
      }
    },
    2935: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(2835),
        i = n(639),
        a = n(6297),
        o = n(1623),
        l = n(8718);
      let s = {
          type: "element",
          tagName: "span",
          properties: { className: ["icon", "icon-link"] },
          children: [],
        },
        c = {};
      function u(e) {
        let t;
        let n = e || c,
          r = n.properties,
          u = n.headingProperties,
          h = n.behavior || "prepend",
          b = n.content,
          y = n.group,
          _ = (0, a.Y)(n.test);
        return (
          "after" === h || "before" === h
            ? (t = function (e, t, n) {
                if ("number" != typeof t || !n) return;
                let i = p(b || s, e),
                  a = f(e, g(r, e), i),
                  o = "before" === h ? [a, e] : [e, a];
                if (y) {
                  let t = m(y, e);
                  t &&
                    !Array.isArray(t) &&
                    "element" === t.type &&
                    ((t.children = o), (o = [t]));
                }
                return n.children.splice(t, 1, ...o), [l.AM, t + o.length];
              })
            : "wrap" === h
              ? (t = function (e) {
                  let t = e.children,
                    n = [];
                  return (
                    "function" == typeof b
                      ? ((t = []), (n = b(e)))
                      : b && (n = d(b)),
                    (e.children = [
                      f(
                        e,
                        g(r, e),
                        Array.isArray(n) ? [...t, ...n] : [...t, n],
                      ),
                    ]),
                    [l.AM]
                  );
                })
              : ((t = function (e) {
                  let t = p(b || s, e);
                  return (
                    e.children["prepend" === h ? "unshift" : "push"](
                      f(e, g(r, e), t),
                    ),
                    [l.AM]
                  );
                }),
                r || (r = { ariaHidden: "true", tabIndex: -1 })),
          function (e) {
            (0, o.Vn)(e, "element", function (e, n, r) {
              if ((0, i.B)(e) && e.properties.id && _(e, n, r))
                return Object.assign(e.properties, g(u, e)), t(e, n, r);
            });
          }
        );
      }
      function d(e) {
        return (0, r.ZP)(e);
      }
      function f(e, t, n) {
        return {
          type: "element",
          tagName: "a",
          properties: { ...t, href: "#" + e.properties.id },
          children: n,
        };
      }
      function p(e, t) {
        let n = m(e, t);
        return Array.isArray(n) ? n : [n];
      }
      function m(e, t) {
        return "function" == typeof e ? e(t) : d(e);
      }
      function g(e, t) {
        return "function" == typeof e ? e(t) : e ? d(e) : {};
      }
    },
    9360: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return ek;
        },
      });
      var r = n(8535);
      let i = (e) => ({
          IMPORTANT: { scope: "meta", begin: "!important" },
          BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
          HEXCOLOR: {
            scope: "number",
            begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
          },
          FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
          ATTRIBUTE_SELECTOR_MODE: {
            scope: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
          },
          CSS_NUMBER_MODE: {
            scope: "number",
            begin:
              e.NUMBER_RE +
              "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0,
          },
          CSS_VARIABLE: {
            className: "attr",
            begin: /--[A-Za-z_][A-Za-z0-9_-]*/,
          },
        }),
        a = [
          "a",
          "abbr",
          "address",
          "article",
          "aside",
          "audio",
          "b",
          "blockquote",
          "body",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "dd",
          "del",
          "details",
          "dfn",
          "div",
          "dl",
          "dt",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "mark",
          "menu",
          "nav",
          "object",
          "ol",
          "p",
          "q",
          "quote",
          "samp",
          "section",
          "span",
          "strong",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "ul",
          "var",
          "video",
        ],
        o = [
          "any-hover",
          "any-pointer",
          "aspect-ratio",
          "color",
          "color-gamut",
          "color-index",
          "device-aspect-ratio",
          "device-height",
          "device-width",
          "display-mode",
          "forced-colors",
          "grid",
          "height",
          "hover",
          "inverted-colors",
          "monochrome",
          "orientation",
          "overflow-block",
          "overflow-inline",
          "pointer",
          "prefers-color-scheme",
          "prefers-contrast",
          "prefers-reduced-motion",
          "prefers-reduced-transparency",
          "resolution",
          "scan",
          "scripting",
          "update",
          "width",
          "min-width",
          "max-width",
          "min-height",
          "max-height",
        ],
        l = [
          "active",
          "any-link",
          "blank",
          "checked",
          "current",
          "default",
          "defined",
          "dir",
          "disabled",
          "drop",
          "empty",
          "enabled",
          "first",
          "first-child",
          "first-of-type",
          "fullscreen",
          "future",
          "focus",
          "focus-visible",
          "focus-within",
          "has",
          "host",
          "host-context",
          "hover",
          "indeterminate",
          "in-range",
          "invalid",
          "is",
          "lang",
          "last-child",
          "last-of-type",
          "left",
          "link",
          "local-link",
          "not",
          "nth-child",
          "nth-col",
          "nth-last-child",
          "nth-last-col",
          "nth-last-of-type",
          "nth-of-type",
          "only-child",
          "only-of-type",
          "optional",
          "out-of-range",
          "past",
          "placeholder-shown",
          "read-only",
          "read-write",
          "required",
          "right",
          "root",
          "scope",
          "target",
          "target-within",
          "user-invalid",
          "valid",
          "visited",
          "where",
        ],
        s = [
          "after",
          "backdrop",
          "before",
          "cue",
          "cue-region",
          "first-letter",
          "first-line",
          "grammar-error",
          "marker",
          "part",
          "placeholder",
          "selection",
          "slotted",
          "spelling-error",
        ],
        c = [
          "align-content",
          "align-items",
          "align-self",
          "all",
          "animation",
          "animation-delay",
          "animation-direction",
          "animation-duration",
          "animation-fill-mode",
          "animation-iteration-count",
          "animation-name",
          "animation-play-state",
          "animation-timing-function",
          "backface-visibility",
          "background",
          "background-attachment",
          "background-blend-mode",
          "background-clip",
          "background-color",
          "background-image",
          "background-origin",
          "background-position",
          "background-repeat",
          "background-size",
          "block-size",
          "border",
          "border-block",
          "border-block-color",
          "border-block-end",
          "border-block-end-color",
          "border-block-end-style",
          "border-block-end-width",
          "border-block-start",
          "border-block-start-color",
          "border-block-start-style",
          "border-block-start-width",
          "border-block-style",
          "border-block-width",
          "border-bottom",
          "border-bottom-color",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "border-bottom-style",
          "border-bottom-width",
          "border-collapse",
          "border-color",
          "border-image",
          "border-image-outset",
          "border-image-repeat",
          "border-image-slice",
          "border-image-source",
          "border-image-width",
          "border-inline",
          "border-inline-color",
          "border-inline-end",
          "border-inline-end-color",
          "border-inline-end-style",
          "border-inline-end-width",
          "border-inline-start",
          "border-inline-start-color",
          "border-inline-start-style",
          "border-inline-start-width",
          "border-inline-style",
          "border-inline-width",
          "border-left",
          "border-left-color",
          "border-left-style",
          "border-left-width",
          "border-radius",
          "border-right",
          "border-right-color",
          "border-right-style",
          "border-right-width",
          "border-spacing",
          "border-style",
          "border-top",
          "border-top-color",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-top-style",
          "border-top-width",
          "border-width",
          "bottom",
          "box-decoration-break",
          "box-shadow",
          "box-sizing",
          "break-after",
          "break-before",
          "break-inside",
          "caption-side",
          "caret-color",
          "clear",
          "clip",
          "clip-path",
          "clip-rule",
          "color",
          "column-count",
          "column-fill",
          "column-gap",
          "column-rule",
          "column-rule-color",
          "column-rule-style",
          "column-rule-width",
          "column-span",
          "column-width",
          "columns",
          "contain",
          "content",
          "content-visibility",
          "counter-increment",
          "counter-reset",
          "cue",
          "cue-after",
          "cue-before",
          "cursor",
          "direction",
          "display",
          "empty-cells",
          "filter",
          "flex",
          "flex-basis",
          "flex-direction",
          "flex-flow",
          "flex-grow",
          "flex-shrink",
          "flex-wrap",
          "float",
          "flow",
          "font",
          "font-display",
          "font-family",
          "font-feature-settings",
          "font-kerning",
          "font-language-override",
          "font-size",
          "font-size-adjust",
          "font-smoothing",
          "font-stretch",
          "font-style",
          "font-synthesis",
          "font-variant",
          "font-variant-caps",
          "font-variant-east-asian",
          "font-variant-ligatures",
          "font-variant-numeric",
          "font-variant-position",
          "font-variation-settings",
          "font-weight",
          "gap",
          "glyph-orientation-vertical",
          "grid",
          "grid-area",
          "grid-auto-columns",
          "grid-auto-flow",
          "grid-auto-rows",
          "grid-column",
          "grid-column-end",
          "grid-column-start",
          "grid-gap",
          "grid-row",
          "grid-row-end",
          "grid-row-start",
          "grid-template",
          "grid-template-areas",
          "grid-template-columns",
          "grid-template-rows",
          "hanging-punctuation",
          "height",
          "hyphens",
          "icon",
          "image-orientation",
          "image-rendering",
          "image-resolution",
          "ime-mode",
          "inline-size",
          "isolation",
          "justify-content",
          "left",
          "letter-spacing",
          "line-break",
          "line-height",
          "list-style",
          "list-style-image",
          "list-style-position",
          "list-style-type",
          "margin",
          "margin-block",
          "margin-block-end",
          "margin-block-start",
          "margin-bottom",
          "margin-inline",
          "margin-inline-end",
          "margin-inline-start",
          "margin-left",
          "margin-right",
          "margin-top",
          "marks",
          "mask",
          "mask-border",
          "mask-border-mode",
          "mask-border-outset",
          "mask-border-repeat",
          "mask-border-slice",
          "mask-border-source",
          "mask-border-width",
          "mask-clip",
          "mask-composite",
          "mask-image",
          "mask-mode",
          "mask-origin",
          "mask-position",
          "mask-repeat",
          "mask-size",
          "mask-type",
          "max-block-size",
          "max-height",
          "max-inline-size",
          "max-width",
          "min-block-size",
          "min-height",
          "min-inline-size",
          "min-width",
          "mix-blend-mode",
          "nav-down",
          "nav-index",
          "nav-left",
          "nav-right",
          "nav-up",
          "none",
          "normal",
          "object-fit",
          "object-position",
          "opacity",
          "order",
          "orphans",
          "outline",
          "outline-color",
          "outline-offset",
          "outline-style",
          "outline-width",
          "overflow",
          "overflow-wrap",
          "overflow-x",
          "overflow-y",
          "padding",
          "padding-block",
          "padding-block-end",
          "padding-block-start",
          "padding-bottom",
          "padding-inline",
          "padding-inline-end",
          "padding-inline-start",
          "padding-left",
          "padding-right",
          "padding-top",
          "page-break-after",
          "page-break-before",
          "page-break-inside",
          "pause",
          "pause-after",
          "pause-before",
          "perspective",
          "perspective-origin",
          "pointer-events",
          "position",
          "quotes",
          "resize",
          "rest",
          "rest-after",
          "rest-before",
          "right",
          "row-gap",
          "scroll-margin",
          "scroll-margin-block",
          "scroll-margin-block-end",
          "scroll-margin-block-start",
          "scroll-margin-bottom",
          "scroll-margin-inline",
          "scroll-margin-inline-end",
          "scroll-margin-inline-start",
          "scroll-margin-left",
          "scroll-margin-right",
          "scroll-margin-top",
          "scroll-padding",
          "scroll-padding-block",
          "scroll-padding-block-end",
          "scroll-padding-block-start",
          "scroll-padding-bottom",
          "scroll-padding-inline",
          "scroll-padding-inline-end",
          "scroll-padding-inline-start",
          "scroll-padding-left",
          "scroll-padding-right",
          "scroll-padding-top",
          "scroll-snap-align",
          "scroll-snap-stop",
          "scroll-snap-type",
          "scrollbar-color",
          "scrollbar-gutter",
          "scrollbar-width",
          "shape-image-threshold",
          "shape-margin",
          "shape-outside",
          "speak",
          "speak-as",
          "src",
          "tab-size",
          "table-layout",
          "text-align",
          "text-align-all",
          "text-align-last",
          "text-combine-upright",
          "text-decoration",
          "text-decoration-color",
          "text-decoration-line",
          "text-decoration-style",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-position",
          "text-emphasis-style",
          "text-indent",
          "text-justify",
          "text-orientation",
          "text-overflow",
          "text-rendering",
          "text-shadow",
          "text-transform",
          "text-underline-position",
          "top",
          "transform",
          "transform-box",
          "transform-origin",
          "transform-style",
          "transition",
          "transition-delay",
          "transition-duration",
          "transition-property",
          "transition-timing-function",
          "unicode-bidi",
          "vertical-align",
          "visibility",
          "voice-balance",
          "voice-duration",
          "voice-family",
          "voice-pitch",
          "voice-range",
          "voice-rate",
          "voice-stress",
          "voice-volume",
          "white-space",
          "widows",
          "width",
          "will-change",
          "word-break",
          "word-spacing",
          "word-wrap",
          "writing-mode",
          "z-index",
        ].reverse();
      var u = "[0-9](_*[0-9])*",
        d = `\\.(${u})`,
        f = "[0-9a-fA-F](_*[0-9a-fA-F])*",
        p = {
          className: "number",
          variants: [
            {
              begin: `(\\b(${u})((${d})|\\.)?|(${d}))[eE][+-]?(${u})[fFdD]?\\b`,
            },
            { begin: `\\b(${u})((${d})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
            { begin: `(${d})[fFdD]?\\b` },
            { begin: `\\b(${u})[fFdD]\\b` },
            {
              begin: `\\b0[xX]((${f})\\.?|(${f})?\\.(${f}))[pP][+-]?(${u})[fFdD]?\\b`,
            },
            { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
            { begin: `\\b0[xX](${f})[lL]?\\b` },
            { begin: "\\b0(_*[0-7])*[lL]?\\b" },
            { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
          ],
          relevance: 0,
        };
      let m = "[A-Za-z$_][0-9A-Za-z$_]*",
        g = [
          "as",
          "in",
          "of",
          "if",
          "for",
          "while",
          "finally",
          "var",
          "new",
          "function",
          "do",
          "return",
          "void",
          "else",
          "break",
          "catch",
          "instanceof",
          "with",
          "throw",
          "case",
          "default",
          "try",
          "switch",
          "continue",
          "typeof",
          "delete",
          "let",
          "yield",
          "const",
          "class",
          "debugger",
          "async",
          "await",
          "static",
          "import",
          "from",
          "export",
          "extends",
        ],
        h = ["true", "false", "null", "undefined", "NaN", "Infinity"],
        b = [
          "Object",
          "Function",
          "Boolean",
          "Symbol",
          "Math",
          "Date",
          "Number",
          "BigInt",
          "String",
          "RegExp",
          "Array",
          "Float32Array",
          "Float64Array",
          "Int8Array",
          "Uint8Array",
          "Uint8ClampedArray",
          "Int16Array",
          "Int32Array",
          "Uint16Array",
          "Uint32Array",
          "BigInt64Array",
          "BigUint64Array",
          "Set",
          "Map",
          "WeakSet",
          "WeakMap",
          "ArrayBuffer",
          "SharedArrayBuffer",
          "Atomics",
          "DataView",
          "JSON",
          "Promise",
          "Generator",
          "GeneratorFunction",
          "AsyncFunction",
          "Reflect",
          "Proxy",
          "Intl",
          "WebAssembly",
        ],
        y = [
          "Error",
          "EvalError",
          "InternalError",
          "RangeError",
          "ReferenceError",
          "SyntaxError",
          "TypeError",
          "URIError",
        ],
        _ = [
          "setInterval",
          "setTimeout",
          "clearInterval",
          "clearTimeout",
          "require",
          "exports",
          "eval",
          "isFinite",
          "isNaN",
          "parseFloat",
          "parseInt",
          "decodeURI",
          "decodeURIComponent",
          "encodeURI",
          "encodeURIComponent",
          "escape",
          "unescape",
        ],
        v = [
          "arguments",
          "this",
          "super",
          "console",
          "window",
          "document",
          "localStorage",
          "sessionStorage",
          "module",
          "global",
        ],
        w = [].concat(_, b, y);
      var k = "[0-9](_*[0-9])*",
        x = `\\.(${k})`,
        E = "[0-9a-fA-F](_*[0-9a-fA-F])*",
        D = {
          className: "number",
          variants: [
            {
              begin: `(\\b(${k})((${x})|\\.)?|(${x}))[eE][+-]?(${k})[fFdD]?\\b`,
            },
            { begin: `\\b(${k})((${x})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
            { begin: `(${x})[fFdD]?\\b` },
            { begin: `\\b(${k})[fFdD]\\b` },
            {
              begin: `\\b0[xX]((${E})\\.?|(${E})?\\.(${E}))[pP][+-]?(${k})[fFdD]?\\b`,
            },
            { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
            { begin: `\\b0[xX](${E})[lL]?\\b` },
            { begin: "\\b0(_*[0-7])*[lL]?\\b" },
            { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
          ],
          relevance: 0,
        };
      let C = (e) => ({
          IMPORTANT: { scope: "meta", begin: "!important" },
          BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
          HEXCOLOR: {
            scope: "number",
            begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
          },
          FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
          ATTRIBUTE_SELECTOR_MODE: {
            scope: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
          },
          CSS_NUMBER_MODE: {
            scope: "number",
            begin:
              e.NUMBER_RE +
              "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0,
          },
          CSS_VARIABLE: {
            className: "attr",
            begin: /--[A-Za-z_][A-Za-z0-9_-]*/,
          },
        }),
        A = [
          "a",
          "abbr",
          "address",
          "article",
          "aside",
          "audio",
          "b",
          "blockquote",
          "body",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "dd",
          "del",
          "details",
          "dfn",
          "div",
          "dl",
          "dt",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "mark",
          "menu",
          "nav",
          "object",
          "ol",
          "p",
          "q",
          "quote",
          "samp",
          "section",
          "span",
          "strong",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "ul",
          "var",
          "video",
        ],
        F = [
          "any-hover",
          "any-pointer",
          "aspect-ratio",
          "color",
          "color-gamut",
          "color-index",
          "device-aspect-ratio",
          "device-height",
          "device-width",
          "display-mode",
          "forced-colors",
          "grid",
          "height",
          "hover",
          "inverted-colors",
          "monochrome",
          "orientation",
          "overflow-block",
          "overflow-inline",
          "pointer",
          "prefers-color-scheme",
          "prefers-contrast",
          "prefers-reduced-motion",
          "prefers-reduced-transparency",
          "resolution",
          "scan",
          "scripting",
          "update",
          "width",
          "min-width",
          "max-width",
          "min-height",
          "max-height",
        ],
        S = [
          "active",
          "any-link",
          "blank",
          "checked",
          "current",
          "default",
          "defined",
          "dir",
          "disabled",
          "drop",
          "empty",
          "enabled",
          "first",
          "first-child",
          "first-of-type",
          "fullscreen",
          "future",
          "focus",
          "focus-visible",
          "focus-within",
          "has",
          "host",
          "host-context",
          "hover",
          "indeterminate",
          "in-range",
          "invalid",
          "is",
          "lang",
          "last-child",
          "last-of-type",
          "left",
          "link",
          "local-link",
          "not",
          "nth-child",
          "nth-col",
          "nth-last-child",
          "nth-last-col",
          "nth-last-of-type",
          "nth-of-type",
          "only-child",
          "only-of-type",
          "optional",
          "out-of-range",
          "past",
          "placeholder-shown",
          "read-only",
          "read-write",
          "required",
          "right",
          "root",
          "scope",
          "target",
          "target-within",
          "user-invalid",
          "valid",
          "visited",
          "where",
        ],
        N = [
          "after",
          "backdrop",
          "before",
          "cue",
          "cue-region",
          "first-letter",
          "first-line",
          "grammar-error",
          "marker",
          "part",
          "placeholder",
          "selection",
          "slotted",
          "spelling-error",
        ],
        O = [
          "align-content",
          "align-items",
          "align-self",
          "all",
          "animation",
          "animation-delay",
          "animation-direction",
          "animation-duration",
          "animation-fill-mode",
          "animation-iteration-count",
          "animation-name",
          "animation-play-state",
          "animation-timing-function",
          "backface-visibility",
          "background",
          "background-attachment",
          "background-blend-mode",
          "background-clip",
          "background-color",
          "background-image",
          "background-origin",
          "background-position",
          "background-repeat",
          "background-size",
          "block-size",
          "border",
          "border-block",
          "border-block-color",
          "border-block-end",
          "border-block-end-color",
          "border-block-end-style",
          "border-block-end-width",
          "border-block-start",
          "border-block-start-color",
          "border-block-start-style",
          "border-block-start-width",
          "border-block-style",
          "border-block-width",
          "border-bottom",
          "border-bottom-color",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "border-bottom-style",
          "border-bottom-width",
          "border-collapse",
          "border-color",
          "border-image",
          "border-image-outset",
          "border-image-repeat",
          "border-image-slice",
          "border-image-source",
          "border-image-width",
          "border-inline",
          "border-inline-color",
          "border-inline-end",
          "border-inline-end-color",
          "border-inline-end-style",
          "border-inline-end-width",
          "border-inline-start",
          "border-inline-start-color",
          "border-inline-start-style",
          "border-inline-start-width",
          "border-inline-style",
          "border-inline-width",
          "border-left",
          "border-left-color",
          "border-left-style",
          "border-left-width",
          "border-radius",
          "border-right",
          "border-right-color",
          "border-right-style",
          "border-right-width",
          "border-spacing",
          "border-style",
          "border-top",
          "border-top-color",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-top-style",
          "border-top-width",
          "border-width",
          "bottom",
          "box-decoration-break",
          "box-shadow",
          "box-sizing",
          "break-after",
          "break-before",
          "break-inside",
          "caption-side",
          "caret-color",
          "clear",
          "clip",
          "clip-path",
          "clip-rule",
          "color",
          "column-count",
          "column-fill",
          "column-gap",
          "column-rule",
          "column-rule-color",
          "column-rule-style",
          "column-rule-width",
          "column-span",
          "column-width",
          "columns",
          "contain",
          "content",
          "content-visibility",
          "counter-increment",
          "counter-reset",
          "cue",
          "cue-after",
          "cue-before",
          "cursor",
          "direction",
          "display",
          "empty-cells",
          "filter",
          "flex",
          "flex-basis",
          "flex-direction",
          "flex-flow",
          "flex-grow",
          "flex-shrink",
          "flex-wrap",
          "float",
          "flow",
          "font",
          "font-display",
          "font-family",
          "font-feature-settings",
          "font-kerning",
          "font-language-override",
          "font-size",
          "font-size-adjust",
          "font-smoothing",
          "font-stretch",
          "font-style",
          "font-synthesis",
          "font-variant",
          "font-variant-caps",
          "font-variant-east-asian",
          "font-variant-ligatures",
          "font-variant-numeric",
          "font-variant-position",
          "font-variation-settings",
          "font-weight",
          "gap",
          "glyph-orientation-vertical",
          "grid",
          "grid-area",
          "grid-auto-columns",
          "grid-auto-flow",
          "grid-auto-rows",
          "grid-column",
          "grid-column-end",
          "grid-column-start",
          "grid-gap",
          "grid-row",
          "grid-row-end",
          "grid-row-start",
          "grid-template",
          "grid-template-areas",
          "grid-template-columns",
          "grid-template-rows",
          "hanging-punctuation",
          "height",
          "hyphens",
          "icon",
          "image-orientation",
          "image-rendering",
          "image-resolution",
          "ime-mode",
          "inline-size",
          "isolation",
          "justify-content",
          "left",
          "letter-spacing",
          "line-break",
          "line-height",
          "list-style",
          "list-style-image",
          "list-style-position",
          "list-style-type",
          "margin",
          "margin-block",
          "margin-block-end",
          "margin-block-start",
          "margin-bottom",
          "margin-inline",
          "margin-inline-end",
          "margin-inline-start",
          "margin-left",
          "margin-right",
          "margin-top",
          "marks",
          "mask",
          "mask-border",
          "mask-border-mode",
          "mask-border-outset",
          "mask-border-repeat",
          "mask-border-slice",
          "mask-border-source",
          "mask-border-width",
          "mask-clip",
          "mask-composite",
          "mask-image",
          "mask-mode",
          "mask-origin",
          "mask-position",
          "mask-repeat",
          "mask-size",
          "mask-type",
          "max-block-size",
          "max-height",
          "max-inline-size",
          "max-width",
          "min-block-size",
          "min-height",
          "min-inline-size",
          "min-width",
          "mix-blend-mode",
          "nav-down",
          "nav-index",
          "nav-left",
          "nav-right",
          "nav-up",
          "none",
          "normal",
          "object-fit",
          "object-position",
          "opacity",
          "order",
          "orphans",
          "outline",
          "outline-color",
          "outline-offset",
          "outline-style",
          "outline-width",
          "overflow",
          "overflow-wrap",
          "overflow-x",
          "overflow-y",
          "padding",
          "padding-block",
          "padding-block-end",
          "padding-block-start",
          "padding-bottom",
          "padding-inline",
          "padding-inline-end",
          "padding-inline-start",
          "padding-left",
          "padding-right",
          "padding-top",
          "page-break-after",
          "page-break-before",
          "page-break-inside",
          "pause",
          "pause-after",
          "pause-before",
          "perspective",
          "perspective-origin",
          "pointer-events",
          "position",
          "quotes",
          "resize",
          "rest",
          "rest-after",
          "rest-before",
          "right",
          "row-gap",
          "scroll-margin",
          "scroll-margin-block",
          "scroll-margin-block-end",
          "scroll-margin-block-start",
          "scroll-margin-bottom",
          "scroll-margin-inline",
          "scroll-margin-inline-end",
          "scroll-margin-inline-start",
          "scroll-margin-left",
          "scroll-margin-right",
          "scroll-margin-top",
          "scroll-padding",
          "scroll-padding-block",
          "scroll-padding-block-end",
          "scroll-padding-block-start",
          "scroll-padding-bottom",
          "scroll-padding-inline",
          "scroll-padding-inline-end",
          "scroll-padding-inline-start",
          "scroll-padding-left",
          "scroll-padding-right",
          "scroll-padding-top",
          "scroll-snap-align",
          "scroll-snap-stop",
          "scroll-snap-type",
          "scrollbar-color",
          "scrollbar-gutter",
          "scrollbar-width",
          "shape-image-threshold",
          "shape-margin",
          "shape-outside",
          "speak",
          "speak-as",
          "src",
          "tab-size",
          "table-layout",
          "text-align",
          "text-align-all",
          "text-align-last",
          "text-combine-upright",
          "text-decoration",
          "text-decoration-color",
          "text-decoration-line",
          "text-decoration-style",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-position",
          "text-emphasis-style",
          "text-indent",
          "text-justify",
          "text-orientation",
          "text-overflow",
          "text-rendering",
          "text-shadow",
          "text-transform",
          "text-underline-position",
          "top",
          "transform",
          "transform-box",
          "transform-origin",
          "transform-style",
          "transition",
          "transition-delay",
          "transition-duration",
          "transition-property",
          "transition-timing-function",
          "unicode-bidi",
          "vertical-align",
          "visibility",
          "voice-balance",
          "voice-duration",
          "voice-family",
          "voice-pitch",
          "voice-range",
          "voice-rate",
          "voice-stress",
          "voice-volume",
          "white-space",
          "widows",
          "width",
          "will-change",
          "word-break",
          "word-spacing",
          "word-wrap",
          "writing-mode",
          "z-index",
        ].reverse(),
        M = S.concat(N),
        T = (e) => ({
          IMPORTANT: { scope: "meta", begin: "!important" },
          BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
          HEXCOLOR: {
            scope: "number",
            begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
          },
          FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
          ATTRIBUTE_SELECTOR_MODE: {
            scope: "selector-attr",
            begin: /\[/,
            end: /\]/,
            illegal: "$",
            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
          },
          CSS_NUMBER_MODE: {
            scope: "number",
            begin:
              e.NUMBER_RE +
              "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0,
          },
          CSS_VARIABLE: {
            className: "attr",
            begin: /--[A-Za-z_][A-Za-z0-9_-]*/,
          },
        }),
        B = [
          "a",
          "abbr",
          "address",
          "article",
          "aside",
          "audio",
          "b",
          "blockquote",
          "body",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "dd",
          "del",
          "details",
          "dfn",
          "div",
          "dl",
          "dt",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "mark",
          "menu",
          "nav",
          "object",
          "ol",
          "p",
          "q",
          "quote",
          "samp",
          "section",
          "span",
          "strong",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "ul",
          "var",
          "video",
        ],
        I = [
          "any-hover",
          "any-pointer",
          "aspect-ratio",
          "color",
          "color-gamut",
          "color-index",
          "device-aspect-ratio",
          "device-height",
          "device-width",
          "display-mode",
          "forced-colors",
          "grid",
          "height",
          "hover",
          "inverted-colors",
          "monochrome",
          "orientation",
          "overflow-block",
          "overflow-inline",
          "pointer",
          "prefers-color-scheme",
          "prefers-contrast",
          "prefers-reduced-motion",
          "prefers-reduced-transparency",
          "resolution",
          "scan",
          "scripting",
          "update",
          "width",
          "min-width",
          "max-width",
          "min-height",
          "max-height",
        ],
        L = [
          "active",
          "any-link",
          "blank",
          "checked",
          "current",
          "default",
          "defined",
          "dir",
          "disabled",
          "drop",
          "empty",
          "enabled",
          "first",
          "first-child",
          "first-of-type",
          "fullscreen",
          "future",
          "focus",
          "focus-visible",
          "focus-within",
          "has",
          "host",
          "host-context",
          "hover",
          "indeterminate",
          "in-range",
          "invalid",
          "is",
          "lang",
          "last-child",
          "last-of-type",
          "left",
          "link",
          "local-link",
          "not",
          "nth-child",
          "nth-col",
          "nth-last-child",
          "nth-last-col",
          "nth-last-of-type",
          "nth-of-type",
          "only-child",
          "only-of-type",
          "optional",
          "out-of-range",
          "past",
          "placeholder-shown",
          "read-only",
          "read-write",
          "required",
          "right",
          "root",
          "scope",
          "target",
          "target-within",
          "user-invalid",
          "valid",
          "visited",
          "where",
        ],
        R = [
          "after",
          "backdrop",
          "before",
          "cue",
          "cue-region",
          "first-letter",
          "first-line",
          "grammar-error",
          "marker",
          "part",
          "placeholder",
          "selection",
          "slotted",
          "spelling-error",
        ],
        z = [
          "align-content",
          "align-items",
          "align-self",
          "all",
          "animation",
          "animation-delay",
          "animation-direction",
          "animation-duration",
          "animation-fill-mode",
          "animation-iteration-count",
          "animation-name",
          "animation-play-state",
          "animation-timing-function",
          "backface-visibility",
          "background",
          "background-attachment",
          "background-blend-mode",
          "background-clip",
          "background-color",
          "background-image",
          "background-origin",
          "background-position",
          "background-repeat",
          "background-size",
          "block-size",
          "border",
          "border-block",
          "border-block-color",
          "border-block-end",
          "border-block-end-color",
          "border-block-end-style",
          "border-block-end-width",
          "border-block-start",
          "border-block-start-color",
          "border-block-start-style",
          "border-block-start-width",
          "border-block-style",
          "border-block-width",
          "border-bottom",
          "border-bottom-color",
          "border-bottom-left-radius",
          "border-bottom-right-radius",
          "border-bottom-style",
          "border-bottom-width",
          "border-collapse",
          "border-color",
          "border-image",
          "border-image-outset",
          "border-image-repeat",
          "border-image-slice",
          "border-image-source",
          "border-image-width",
          "border-inline",
          "border-inline-color",
          "border-inline-end",
          "border-inline-end-color",
          "border-inline-end-style",
          "border-inline-end-width",
          "border-inline-start",
          "border-inline-start-color",
          "border-inline-start-style",
          "border-inline-start-width",
          "border-inline-style",
          "border-inline-width",
          "border-left",
          "border-left-color",
          "border-left-style",
          "border-left-width",
          "border-radius",
          "border-right",
          "border-right-color",
          "border-right-style",
          "border-right-width",
          "border-spacing",
          "border-style",
          "border-top",
          "border-top-color",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-top-style",
          "border-top-width",
          "border-width",
          "bottom",
          "box-decoration-break",
          "box-shadow",
          "box-sizing",
          "break-after",
          "break-before",
          "break-inside",
          "caption-side",
          "caret-color",
          "clear",
          "clip",
          "clip-path",
          "clip-rule",
          "color",
          "column-count",
          "column-fill",
          "column-gap",
          "column-rule",
          "column-rule-color",
          "column-rule-style",
          "column-rule-width",
          "column-span",
          "column-width",
          "columns",
          "contain",
          "content",
          "content-visibility",
          "counter-increment",
          "counter-reset",
          "cue",
          "cue-after",
          "cue-before",
          "cursor",
          "direction",
          "display",
          "empty-cells",
          "filter",
          "flex",
          "flex-basis",
          "flex-direction",
          "flex-flow",
          "flex-grow",
          "flex-shrink",
          "flex-wrap",
          "float",
          "flow",
          "font",
          "font-display",
          "font-family",
          "font-feature-settings",
          "font-kerning",
          "font-language-override",
          "font-size",
          "font-size-adjust",
          "font-smoothing",
          "font-stretch",
          "font-style",
          "font-synthesis",
          "font-variant",
          "font-variant-caps",
          "font-variant-east-asian",
          "font-variant-ligatures",
          "font-variant-numeric",
          "font-variant-position",
          "font-variation-settings",
          "font-weight",
          "gap",
          "glyph-orientation-vertical",
          "grid",
          "grid-area",
          "grid-auto-columns",
          "grid-auto-flow",
          "grid-auto-rows",
          "grid-column",
          "grid-column-end",
          "grid-column-start",
          "grid-gap",
          "grid-row",
          "grid-row-end",
          "grid-row-start",
          "grid-template",
          "grid-template-areas",
          "grid-template-columns",
          "grid-template-rows",
          "hanging-punctuation",
          "height",
          "hyphens",
          "icon",
          "image-orientation",
          "image-rendering",
          "image-resolution",
          "ime-mode",
          "inline-size",
          "isolation",
          "justify-content",
          "left",
          "letter-spacing",
          "line-break",
          "line-height",
          "list-style",
          "list-style-image",
          "list-style-position",
          "list-style-type",
          "margin",
          "margin-block",
          "margin-block-end",
          "margin-block-start",
          "margin-bottom",
          "margin-inline",
          "margin-inline-end",
          "margin-inline-start",
          "margin-left",
          "margin-right",
          "margin-top",
          "marks",
          "mask",
          "mask-border",
          "mask-border-mode",
          "mask-border-outset",
          "mask-border-repeat",
          "mask-border-slice",
          "mask-border-source",
          "mask-border-width",
          "mask-clip",
          "mask-composite",
          "mask-image",
          "mask-mode",
          "mask-origin",
          "mask-position",
          "mask-repeat",
          "mask-size",
          "mask-type",
          "max-block-size",
          "max-height",
          "max-inline-size",
          "max-width",
          "min-block-size",
          "min-height",
          "min-inline-size",
          "min-width",
          "mix-blend-mode",
          "nav-down",
          "nav-index",
          "nav-left",
          "nav-right",
          "nav-up",
          "none",
          "normal",
          "object-fit",
          "object-position",
          "opacity",
          "order",
          "orphans",
          "outline",
          "outline-color",
          "outline-offset",
          "outline-style",
          "outline-width",
          "overflow",
          "overflow-wrap",
          "overflow-x",
          "overflow-y",
          "padding",
          "padding-block",
          "padding-block-end",
          "padding-block-start",
          "padding-bottom",
          "padding-inline",
          "padding-inline-end",
          "padding-inline-start",
          "padding-left",
          "padding-right",
          "padding-top",
          "page-break-after",
          "page-break-before",
          "page-break-inside",
          "pause",
          "pause-after",
          "pause-before",
          "perspective",
          "perspective-origin",
          "pointer-events",
          "position",
          "quotes",
          "resize",
          "rest",
          "rest-after",
          "rest-before",
          "right",
          "row-gap",
          "scroll-margin",
          "scroll-margin-block",
          "scroll-margin-block-end",
          "scroll-margin-block-start",
          "scroll-margin-bottom",
          "scroll-margin-inline",
          "scroll-margin-inline-end",
          "scroll-margin-inline-start",
          "scroll-margin-left",
          "scroll-margin-right",
          "scroll-margin-top",
          "scroll-padding",
          "scroll-padding-block",
          "scroll-padding-block-end",
          "scroll-padding-block-start",
          "scroll-padding-bottom",
          "scroll-padding-inline",
          "scroll-padding-inline-end",
          "scroll-padding-inline-start",
          "scroll-padding-left",
          "scroll-padding-right",
          "scroll-padding-top",
          "scroll-snap-align",
          "scroll-snap-stop",
          "scroll-snap-type",
          "scrollbar-color",
          "scrollbar-gutter",
          "scrollbar-width",
          "shape-image-threshold",
          "shape-margin",
          "shape-outside",
          "speak",
          "speak-as",
          "src",
          "tab-size",
          "table-layout",
          "text-align",
          "text-align-all",
          "text-align-last",
          "text-combine-upright",
          "text-decoration",
          "text-decoration-color",
          "text-decoration-line",
          "text-decoration-style",
          "text-emphasis",
          "text-emphasis-color",
          "text-emphasis-position",
          "text-emphasis-style",
          "text-indent",
          "text-justify",
          "text-orientation",
          "text-overflow",
          "text-rendering",
          "text-shadow",
          "text-transform",
          "text-underline-position",
          "top",
          "transform",
          "transform-box",
          "transform-origin",
          "transform-style",
          "transition",
          "transition-delay",
          "transition-duration",
          "transition-property",
          "transition-timing-function",
          "unicode-bidi",
          "vertical-align",
          "visibility",
          "voice-balance",
          "voice-duration",
          "voice-family",
          "voice-pitch",
          "voice-range",
          "voice-rate",
          "voice-stress",
          "voice-volume",
          "white-space",
          "widows",
          "width",
          "will-change",
          "word-break",
          "word-spacing",
          "word-wrap",
          "writing-mode",
          "z-index",
        ].reverse();
      function P(e) {
        return e ? ("string" == typeof e ? e : e.source) : null;
      }
      function j(e) {
        return $("(?=", e, ")");
      }
      function $(...e) {
        return e.map((e) => P(e)).join("");
      }
      function U(...e) {
        return (
          "(" +
          ((function (e) {
            let t = e[e.length - 1];
            return "object" == typeof t && t.constructor === Object
              ? (e.splice(e.length - 1, 1), t)
              : {};
          })(e).capture
            ? ""
            : "?:") +
          e.map((e) => P(e)).join("|") +
          ")"
        );
      }
      let q = (e) => $(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
        H = ["Protocol", "Type"].map(q),
        K = ["init", "self"].map(q),
        W = ["Any", "Self"],
        G = [
          "actor",
          "any",
          "associatedtype",
          "async",
          "await",
          /as\?/,
          /as!/,
          "as",
          "borrowing",
          "break",
          "case",
          "catch",
          "class",
          "consume",
          "consuming",
          "continue",
          "convenience",
          "copy",
          "default",
          "defer",
          "deinit",
          "didSet",
          "distributed",
          "do",
          "dynamic",
          "each",
          "else",
          "enum",
          "extension",
          "fallthrough",
          /fileprivate\(set\)/,
          "fileprivate",
          "final",
          "for",
          "func",
          "get",
          "guard",
          "if",
          "import",
          "indirect",
          "infix",
          /init\?/,
          /init!/,
          "inout",
          /internal\(set\)/,
          "internal",
          "in",
          "is",
          "isolated",
          "nonisolated",
          "lazy",
          "let",
          "macro",
          "mutating",
          "nonmutating",
          /open\(set\)/,
          "open",
          "operator",
          "optional",
          "override",
          "postfix",
          "precedencegroup",
          "prefix",
          /private\(set\)/,
          "private",
          "protocol",
          /public\(set\)/,
          "public",
          "repeat",
          "required",
          "rethrows",
          "return",
          "set",
          "some",
          "static",
          "struct",
          "subscript",
          "super",
          "switch",
          "throws",
          "throw",
          /try\?/,
          /try!/,
          "try",
          "typealias",
          /unowned\(safe\)/,
          /unowned\(unsafe\)/,
          "unowned",
          "var",
          "weak",
          "where",
          "while",
          "willSet",
        ],
        V = ["false", "nil", "true"],
        Z = [
          "assignment",
          "associativity",
          "higherThan",
          "left",
          "lowerThan",
          "none",
          "right",
        ],
        X = [
          "#colorLiteral",
          "#column",
          "#dsohandle",
          "#else",
          "#elseif",
          "#endif",
          "#error",
          "#file",
          "#fileID",
          "#fileLiteral",
          "#filePath",
          "#function",
          "#if",
          "#imageLiteral",
          "#keyPath",
          "#line",
          "#selector",
          "#sourceLocation",
          "#warning",
        ],
        Q = [
          "abs",
          "all",
          "any",
          "assert",
          "assertionFailure",
          "debugPrint",
          "dump",
          "fatalError",
          "getVaList",
          "isKnownUniquelyReferenced",
          "max",
          "min",
          "numericCast",
          "pointwiseMax",
          "pointwiseMin",
          "precondition",
          "preconditionFailure",
          "print",
          "readLine",
          "repeatElement",
          "sequence",
          "stride",
          "swap",
          "swift_unboxFromSwiftValueWithType",
          "transcode",
          "type",
          "unsafeBitCast",
          "unsafeDowncast",
          "withExtendedLifetime",
          "withUnsafeMutablePointer",
          "withUnsafePointer",
          "withVaList",
          "withoutActuallyEscaping",
          "zip",
        ],
        Y = U(
          /[/=\-+!*%<>&|^~?]/,
          /[\u00A1-\u00A7]/,
          /[\u00A9\u00AB]/,
          /[\u00AC\u00AE]/,
          /[\u00B0\u00B1]/,
          /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
          /[\u2016-\u2017]/,
          /[\u2020-\u2027]/,
          /[\u2030-\u203E]/,
          /[\u2041-\u2053]/,
          /[\u2055-\u205E]/,
          /[\u2190-\u23FF]/,
          /[\u2500-\u2775]/,
          /[\u2794-\u2BFF]/,
          /[\u2E00-\u2E7F]/,
          /[\u3001-\u3003]/,
          /[\u3008-\u3020]/,
          /[\u3030]/,
        ),
        J = U(
          Y,
          /[\u0300-\u036F]/,
          /[\u1DC0-\u1DFF]/,
          /[\u20D0-\u20FF]/,
          /[\uFE00-\uFE0F]/,
          /[\uFE20-\uFE2F]/,
        ),
        ee = $(Y, J, "*"),
        et = U(
          /[a-zA-Z_]/,
          /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
          /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
          /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
          /[\u1E00-\u1FFF]/,
          /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
          /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
          /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
          /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
          /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
          /[\uFE47-\uFEFE\uFF00-\uFFFD]/,
        ),
        en = U(
          et,
          /\d/,
          /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/,
        ),
        er = $(et, en, "*"),
        ei = $(/[A-Z]/, en, "*"),
        ea = [
          "attached",
          "autoclosure",
          $(/convention\(/, U("swift", "block", "c"), /\)/),
          "discardableResult",
          "dynamicCallable",
          "dynamicMemberLookup",
          "escaping",
          "freestanding",
          "frozen",
          "GKInspectable",
          "IBAction",
          "IBDesignable",
          "IBInspectable",
          "IBOutlet",
          "IBSegueAction",
          "inlinable",
          "main",
          "nonobjc",
          "NSApplicationMain",
          "NSCopying",
          "NSManaged",
          $(/objc\(/, er, /\)/),
          "objc",
          "objcMembers",
          "propertyWrapper",
          "requires_stored_property_inits",
          "resultBuilder",
          "Sendable",
          "testable",
          "UIApplicationMain",
          "unchecked",
          "unknown",
          "usableFromInline",
          "warn_unqualified_access",
        ],
        eo = [
          "iOS",
          "iOSApplicationExtension",
          "macOS",
          "macOSApplicationExtension",
          "macCatalyst",
          "macCatalystApplicationExtension",
          "watchOS",
          "watchOSApplicationExtension",
          "tvOS",
          "tvOSApplicationExtension",
          "swift",
        ],
        el = "[A-Za-z$_][0-9A-Za-z$_]*",
        es = [
          "as",
          "in",
          "of",
          "if",
          "for",
          "while",
          "finally",
          "var",
          "new",
          "function",
          "do",
          "return",
          "void",
          "else",
          "break",
          "catch",
          "instanceof",
          "with",
          "throw",
          "case",
          "default",
          "try",
          "switch",
          "continue",
          "typeof",
          "delete",
          "let",
          "yield",
          "const",
          "class",
          "debugger",
          "async",
          "await",
          "static",
          "import",
          "from",
          "export",
          "extends",
        ],
        ec = ["true", "false", "null", "undefined", "NaN", "Infinity"],
        eu = [
          "Object",
          "Function",
          "Boolean",
          "Symbol",
          "Math",
          "Date",
          "Number",
          "BigInt",
          "String",
          "RegExp",
          "Array",
          "Float32Array",
          "Float64Array",
          "Int8Array",
          "Uint8Array",
          "Uint8ClampedArray",
          "Int16Array",
          "Int32Array",
          "Uint16Array",
          "Uint32Array",
          "BigInt64Array",
          "BigUint64Array",
          "Set",
          "Map",
          "WeakSet",
          "WeakMap",
          "ArrayBuffer",
          "SharedArrayBuffer",
          "Atomics",
          "DataView",
          "JSON",
          "Promise",
          "Generator",
          "GeneratorFunction",
          "AsyncFunction",
          "Reflect",
          "Proxy",
          "Intl",
          "WebAssembly",
        ],
        ed = [
          "Error",
          "EvalError",
          "InternalError",
          "RangeError",
          "ReferenceError",
          "SyntaxError",
          "TypeError",
          "URIError",
        ],
        ef = [
          "setInterval",
          "setTimeout",
          "clearInterval",
          "clearTimeout",
          "require",
          "exports",
          "eval",
          "isFinite",
          "isNaN",
          "parseFloat",
          "parseInt",
          "decodeURI",
          "decodeURIComponent",
          "encodeURI",
          "encodeURIComponent",
          "escape",
          "unescape",
        ],
        ep = [
          "arguments",
          "this",
          "super",
          "console",
          "window",
          "document",
          "localStorage",
          "sessionStorage",
          "module",
          "global",
        ],
        em = [].concat(ef, eu, ed),
        eg = {
          arduino: function (e) {
            let t = {
                type: ["boolean", "byte", "word", "String"],
                built_in: [
                  "KeyboardController",
                  "MouseController",
                  "SoftwareSerial",
                  "EthernetServer",
                  "EthernetClient",
                  "LiquidCrystal",
                  "RobotControl",
                  "GSMVoiceCall",
                  "EthernetUDP",
                  "EsploraTFT",
                  "HttpClient",
                  "RobotMotor",
                  "WiFiClient",
                  "GSMScanner",
                  "FileSystem",
                  "Scheduler",
                  "GSMServer",
                  "YunClient",
                  "YunServer",
                  "IPAddress",
                  "GSMClient",
                  "GSMModem",
                  "Keyboard",
                  "Ethernet",
                  "Console",
                  "GSMBand",
                  "Esplora",
                  "Stepper",
                  "Process",
                  "WiFiUDP",
                  "GSM_SMS",
                  "Mailbox",
                  "USBHost",
                  "Firmata",
                  "PImage",
                  "Client",
                  "Server",
                  "GSMPIN",
                  "FileIO",
                  "Bridge",
                  "Serial",
                  "EEPROM",
                  "Stream",
                  "Mouse",
                  "Audio",
                  "Servo",
                  "File",
                  "Task",
                  "GPRS",
                  "WiFi",
                  "Wire",
                  "TFT",
                  "GSM",
                  "SPI",
                  "SD",
                ],
                _hints: [
                  "setup",
                  "loop",
                  "runShellCommandAsynchronously",
                  "analogWriteResolution",
                  "retrieveCallingNumber",
                  "printFirmwareVersion",
                  "analogReadResolution",
                  "sendDigitalPortPair",
                  "noListenOnLocalhost",
                  "readJoystickButton",
                  "setFirmwareVersion",
                  "readJoystickSwitch",
                  "scrollDisplayRight",
                  "getVoiceCallStatus",
                  "scrollDisplayLeft",
                  "writeMicroseconds",
                  "delayMicroseconds",
                  "beginTransmission",
                  "getSignalStrength",
                  "runAsynchronously",
                  "getAsynchronously",
                  "listenOnLocalhost",
                  "getCurrentCarrier",
                  "readAccelerometer",
                  "messageAvailable",
                  "sendDigitalPorts",
                  "lineFollowConfig",
                  "countryNameWrite",
                  "runShellCommand",
                  "readStringUntil",
                  "rewindDirectory",
                  "readTemperature",
                  "setClockDivider",
                  "readLightSensor",
                  "endTransmission",
                  "analogReference",
                  "detachInterrupt",
                  "countryNameRead",
                  "attachInterrupt",
                  "encryptionType",
                  "readBytesUntil",
                  "robotNameWrite",
                  "readMicrophone",
                  "robotNameRead",
                  "cityNameWrite",
                  "userNameWrite",
                  "readJoystickY",
                  "readJoystickX",
                  "mouseReleased",
                  "openNextFile",
                  "scanNetworks",
                  "noInterrupts",
                  "digitalWrite",
                  "beginSpeaker",
                  "mousePressed",
                  "isActionDone",
                  "mouseDragged",
                  "displayLogos",
                  "noAutoscroll",
                  "addParameter",
                  "remoteNumber",
                  "getModifiers",
                  "keyboardRead",
                  "userNameRead",
                  "waitContinue",
                  "processInput",
                  "parseCommand",
                  "printVersion",
                  "readNetworks",
                  "writeMessage",
                  "blinkVersion",
                  "cityNameRead",
                  "readMessage",
                  "setDataMode",
                  "parsePacket",
                  "isListening",
                  "setBitOrder",
                  "beginPacket",
                  "isDirectory",
                  "motorsWrite",
                  "drawCompass",
                  "digitalRead",
                  "clearScreen",
                  "serialEvent",
                  "rightToLeft",
                  "setTextSize",
                  "leftToRight",
                  "requestFrom",
                  "keyReleased",
                  "compassRead",
                  "analogWrite",
                  "interrupts",
                  "WiFiServer",
                  "disconnect",
                  "playMelody",
                  "parseFloat",
                  "autoscroll",
                  "getPINUsed",
                  "setPINUsed",
                  "setTimeout",
                  "sendAnalog",
                  "readSlider",
                  "analogRead",
                  "beginWrite",
                  "createChar",
                  "motorsStop",
                  "keyPressed",
                  "tempoWrite",
                  "readButton",
                  "subnetMask",
                  "debugPrint",
                  "macAddress",
                  "writeGreen",
                  "randomSeed",
                  "attachGPRS",
                  "readString",
                  "sendString",
                  "remotePort",
                  "releaseAll",
                  "mouseMoved",
                  "background",
                  "getXChange",
                  "getYChange",
                  "answerCall",
                  "getResult",
                  "voiceCall",
                  "endPacket",
                  "constrain",
                  "getSocket",
                  "writeJSON",
                  "getButton",
                  "available",
                  "connected",
                  "findUntil",
                  "readBytes",
                  "exitValue",
                  "readGreen",
                  "writeBlue",
                  "startLoop",
                  "IPAddress",
                  "isPressed",
                  "sendSysex",
                  "pauseMode",
                  "gatewayIP",
                  "setCursor",
                  "getOemKey",
                  "tuneWrite",
                  "noDisplay",
                  "loadImage",
                  "switchPIN",
                  "onRequest",
                  "onReceive",
                  "changePIN",
                  "playFile",
                  "noBuffer",
                  "parseInt",
                  "overflow",
                  "checkPIN",
                  "knobRead",
                  "beginTFT",
                  "bitClear",
                  "updateIR",
                  "bitWrite",
                  "position",
                  "writeRGB",
                  "highByte",
                  "writeRed",
                  "setSpeed",
                  "readBlue",
                  "noStroke",
                  "remoteIP",
                  "transfer",
                  "shutdown",
                  "hangCall",
                  "beginSMS",
                  "endWrite",
                  "attached",
                  "maintain",
                  "noCursor",
                  "checkReg",
                  "checkPUK",
                  "shiftOut",
                  "isValid",
                  "shiftIn",
                  "pulseIn",
                  "connect",
                  "println",
                  "localIP",
                  "pinMode",
                  "getIMEI",
                  "display",
                  "noBlink",
                  "process",
                  "getBand",
                  "running",
                  "beginSD",
                  "drawBMP",
                  "lowByte",
                  "setBand",
                  "release",
                  "bitRead",
                  "prepare",
                  "pointTo",
                  "readRed",
                  "setMode",
                  "noFill",
                  "remove",
                  "listen",
                  "stroke",
                  "detach",
                  "attach",
                  "noTone",
                  "exists",
                  "buffer",
                  "height",
                  "bitSet",
                  "circle",
                  "config",
                  "cursor",
                  "random",
                  "IRread",
                  "setDNS",
                  "endSMS",
                  "getKey",
                  "micros",
                  "millis",
                  "begin",
                  "print",
                  "write",
                  "ready",
                  "flush",
                  "width",
                  "isPIN",
                  "blink",
                  "clear",
                  "press",
                  "mkdir",
                  "rmdir",
                  "close",
                  "point",
                  "yield",
                  "image",
                  "BSSID",
                  "click",
                  "delay",
                  "read",
                  "text",
                  "move",
                  "peek",
                  "beep",
                  "rect",
                  "line",
                  "open",
                  "seek",
                  "fill",
                  "size",
                  "turn",
                  "stop",
                  "home",
                  "find",
                  "step",
                  "tone",
                  "sqrt",
                  "RSSI",
                  "SSID",
                  "end",
                  "bit",
                  "tan",
                  "cos",
                  "sin",
                  "pow",
                  "map",
                  "abs",
                  "max",
                  "min",
                  "get",
                  "run",
                  "put",
                ],
                literal: [
                  "DIGITAL_MESSAGE",
                  "FIRMATA_STRING",
                  "ANALOG_MESSAGE",
                  "REPORT_DIGITAL",
                  "REPORT_ANALOG",
                  "INPUT_PULLUP",
                  "SET_PIN_MODE",
                  "INTERNAL2V56",
                  "SYSTEM_RESET",
                  "LED_BUILTIN",
                  "INTERNAL1V1",
                  "SYSEX_START",
                  "INTERNAL",
                  "EXTERNAL",
                  "DEFAULT",
                  "OUTPUT",
                  "INPUT",
                  "HIGH",
                  "LOW",
                ],
              },
              n = (function (e) {
                let t = e.regex,
                  n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
                  r = "decltype\\(auto\\)",
                  i = "[a-zA-Z_]\\w*::",
                  a =
                    "(?!struct)(" +
                    r +
                    "|" +
                    t.optional(i) +
                    "[a-zA-Z_]\\w*" +
                    t.optional("<[^<>]+>") +
                    ")",
                  o = { className: "type", begin: "\\b[a-z\\d_]*_t\\b" },
                  l = {
                    className: "string",
                    variants: [
                      {
                        begin: '(u8?|U|L)?"',
                        end: '"',
                        illegal: "\\n",
                        contains: [e.BACKSLASH_ESCAPE],
                      },
                      {
                        begin:
                          "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                        end: "'",
                        illegal: ".",
                      },
                      e.END_SAME_AS_BEGIN({
                        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                        end: /\)([^()\\ ]{0,16})"/,
                      }),
                    ],
                  },
                  s = {
                    className: "number",
                    variants: [
                      { begin: "\\b(0b[01']+)" },
                      {
                        begin:
                          "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
                      },
                      {
                        begin:
                          "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
                      },
                    ],
                    relevance: 0,
                  },
                  c = {
                    className: "meta",
                    begin: /#\s*[a-z]+\b/,
                    end: /$/,
                    keywords: {
                      keyword:
                        "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
                    },
                    contains: [
                      { begin: /\\\n/, relevance: 0 },
                      e.inherit(l, { className: "string" }),
                      { className: "string", begin: /<.*?>/ },
                      n,
                      e.C_BLOCK_COMMENT_MODE,
                    ],
                  },
                  u = {
                    className: "title",
                    begin: t.optional(i) + e.IDENT_RE,
                    relevance: 0,
                  },
                  d = t.optional(i) + e.IDENT_RE + "\\s*\\(",
                  f = {
                    type: [
                      "bool",
                      "char",
                      "char16_t",
                      "char32_t",
                      "char8_t",
                      "double",
                      "float",
                      "int",
                      "long",
                      "short",
                      "void",
                      "wchar_t",
                      "unsigned",
                      "signed",
                      "const",
                      "static",
                    ],
                    keyword: [
                      "alignas",
                      "alignof",
                      "and",
                      "and_eq",
                      "asm",
                      "atomic_cancel",
                      "atomic_commit",
                      "atomic_noexcept",
                      "auto",
                      "bitand",
                      "bitor",
                      "break",
                      "case",
                      "catch",
                      "class",
                      "co_await",
                      "co_return",
                      "co_yield",
                      "compl",
                      "concept",
                      "const_cast|10",
                      "consteval",
                      "constexpr",
                      "constinit",
                      "continue",
                      "decltype",
                      "default",
                      "delete",
                      "do",
                      "dynamic_cast|10",
                      "else",
                      "enum",
                      "explicit",
                      "export",
                      "extern",
                      "false",
                      "final",
                      "for",
                      "friend",
                      "goto",
                      "if",
                      "import",
                      "inline",
                      "module",
                      "mutable",
                      "namespace",
                      "new",
                      "noexcept",
                      "not",
                      "not_eq",
                      "nullptr",
                      "operator",
                      "or",
                      "or_eq",
                      "override",
                      "private",
                      "protected",
                      "public",
                      "reflexpr",
                      "register",
                      "reinterpret_cast|10",
                      "requires",
                      "return",
                      "sizeof",
                      "static_assert",
                      "static_cast|10",
                      "struct",
                      "switch",
                      "synchronized",
                      "template",
                      "this",
                      "thread_local",
                      "throw",
                      "transaction_safe",
                      "transaction_safe_dynamic",
                      "true",
                      "try",
                      "typedef",
                      "typeid",
                      "typename",
                      "union",
                      "using",
                      "virtual",
                      "volatile",
                      "while",
                      "xor",
                      "xor_eq",
                    ],
                    literal: ["NULL", "false", "nullopt", "nullptr", "true"],
                    built_in: ["_Pragma"],
                    _type_hints: [
                      "any",
                      "auto_ptr",
                      "barrier",
                      "binary_semaphore",
                      "bitset",
                      "complex",
                      "condition_variable",
                      "condition_variable_any",
                      "counting_semaphore",
                      "deque",
                      "false_type",
                      "future",
                      "imaginary",
                      "initializer_list",
                      "istringstream",
                      "jthread",
                      "latch",
                      "lock_guard",
                      "multimap",
                      "multiset",
                      "mutex",
                      "optional",
                      "ostringstream",
                      "packaged_task",
                      "pair",
                      "promise",
                      "priority_queue",
                      "queue",
                      "recursive_mutex",
                      "recursive_timed_mutex",
                      "scoped_lock",
                      "set",
                      "shared_future",
                      "shared_lock",
                      "shared_mutex",
                      "shared_timed_mutex",
                      "shared_ptr",
                      "stack",
                      "string_view",
                      "stringstream",
                      "timed_mutex",
                      "thread",
                      "true_type",
                      "tuple",
                      "unique_lock",
                      "unique_ptr",
                      "unordered_map",
                      "unordered_multimap",
                      "unordered_multiset",
                      "unordered_set",
                      "variant",
                      "vector",
                      "weak_ptr",
                      "wstring",
                      "wstring_view",
                    ],
                  },
                  p = {
                    className: "function.dispatch",
                    relevance: 0,
                    keywords: {
                      _hint: [
                        "abort",
                        "abs",
                        "acos",
                        "apply",
                        "as_const",
                        "asin",
                        "atan",
                        "atan2",
                        "calloc",
                        "ceil",
                        "cerr",
                        "cin",
                        "clog",
                        "cos",
                        "cosh",
                        "cout",
                        "declval",
                        "endl",
                        "exchange",
                        "exit",
                        "exp",
                        "fabs",
                        "floor",
                        "fmod",
                        "forward",
                        "fprintf",
                        "fputs",
                        "free",
                        "frexp",
                        "fscanf",
                        "future",
                        "invoke",
                        "isalnum",
                        "isalpha",
                        "iscntrl",
                        "isdigit",
                        "isgraph",
                        "islower",
                        "isprint",
                        "ispunct",
                        "isspace",
                        "isupper",
                        "isxdigit",
                        "labs",
                        "launder",
                        "ldexp",
                        "log",
                        "log10",
                        "make_pair",
                        "make_shared",
                        "make_shared_for_overwrite",
                        "make_tuple",
                        "make_unique",
                        "malloc",
                        "memchr",
                        "memcmp",
                        "memcpy",
                        "memset",
                        "modf",
                        "move",
                        "pow",
                        "printf",
                        "putchar",
                        "puts",
                        "realloc",
                        "scanf",
                        "sin",
                        "sinh",
                        "snprintf",
                        "sprintf",
                        "sqrt",
                        "sscanf",
                        "std",
                        "stderr",
                        "stdin",
                        "stdout",
                        "strcat",
                        "strchr",
                        "strcmp",
                        "strcpy",
                        "strcspn",
                        "strlen",
                        "strncat",
                        "strncmp",
                        "strncpy",
                        "strpbrk",
                        "strrchr",
                        "strspn",
                        "strstr",
                        "swap",
                        "tan",
                        "tanh",
                        "terminate",
                        "to_underlying",
                        "tolower",
                        "toupper",
                        "vfprintf",
                        "visit",
                        "vprintf",
                        "vsprintf",
                      ],
                    },
                    begin: t.concat(
                      /\b/,
                      /(?!decltype)/,
                      /(?!if)/,
                      /(?!for)/,
                      /(?!switch)/,
                      /(?!while)/,
                      e.IDENT_RE,
                      t.lookahead(/(<[^<>]+>|)\s*\(/),
                    ),
                  },
                  m = [p, c, o, n, e.C_BLOCK_COMMENT_MODE, s, l],
                  g = {
                    variants: [
                      { begin: /=/, end: /;/ },
                      { begin: /\(/, end: /\)/ },
                      { beginKeywords: "new throw return else", end: /;/ },
                    ],
                    keywords: f,
                    contains: m.concat([
                      {
                        begin: /\(/,
                        end: /\)/,
                        keywords: f,
                        contains: m.concat(["self"]),
                        relevance: 0,
                      },
                    ]),
                    relevance: 0,
                  },
                  h = {
                    className: "function",
                    begin: "(" + a + "[\\*&\\s]+)+" + d,
                    returnBegin: !0,
                    end: /[{;=]/,
                    excludeEnd: !0,
                    keywords: f,
                    illegal: /[^\w\s\*&:<>.]/,
                    contains: [
                      { begin: r, keywords: f, relevance: 0 },
                      {
                        begin: d,
                        returnBegin: !0,
                        contains: [u],
                        relevance: 0,
                      },
                      { begin: /::/, relevance: 0 },
                      { begin: /:/, endsWithParent: !0, contains: [l, s] },
                      { relevance: 0, match: /,/ },
                      {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        keywords: f,
                        relevance: 0,
                        contains: [
                          n,
                          e.C_BLOCK_COMMENT_MODE,
                          l,
                          s,
                          o,
                          {
                            begin: /\(/,
                            end: /\)/,
                            keywords: f,
                            relevance: 0,
                            contains: [
                              "self",
                              n,
                              e.C_BLOCK_COMMENT_MODE,
                              l,
                              s,
                              o,
                            ],
                          },
                        ],
                      },
                      o,
                      n,
                      e.C_BLOCK_COMMENT_MODE,
                      c,
                    ],
                  };
                return {
                  name: "C++",
                  aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
                  keywords: f,
                  illegal: "</",
                  classNameAliases: { "function.dispatch": "built_in" },
                  contains: [].concat(g, h, p, m, [
                    c,
                    {
                      begin:
                        "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
                      end: ">",
                      keywords: f,
                      contains: ["self", o],
                    },
                    { begin: e.IDENT_RE + "::", keywords: f },
                    {
                      match: [
                        /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
                        /\s+/,
                        /\w+/,
                      ],
                      className: { 1: "keyword", 3: "title.class" },
                    },
                  ]),
                };
              })(e),
              r = n.keywords;
            return (
              (r.type = [...r.type, ...t.type]),
              (r.literal = [...r.literal, ...t.literal]),
              (r.built_in = [...r.built_in, ...t.built_in]),
              (r._hints = t._hints),
              (n.name = "Arduino"),
              (n.aliases = ["ino"]),
              (n.supersetOf = "cpp"),
              n
            );
          },
          bash: function (e) {
            let t = e.regex,
              n = {};
            Object.assign(n, {
              className: "variable",
              variants: [
                {
                  begin: t.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])"),
                },
                {
                  begin: /\$\{/,
                  end: /\}/,
                  contains: ["self", { begin: /:-/, contains: [n] }],
                },
              ],
            });
            let r = {
                className: "subst",
                begin: /\$\(/,
                end: /\)/,
                contains: [e.BACKSLASH_ESCAPE],
              },
              i = {
                begin: /<<-?\s*(?=\w+)/,
                starts: {
                  contains: [
                    e.END_SAME_AS_BEGIN({
                      begin: /(\w+)/,
                      end: /(\w+)/,
                      className: "string",
                    }),
                  ],
                },
              },
              a = {
                className: "string",
                begin: /"/,
                end: /"/,
                contains: [e.BACKSLASH_ESCAPE, n, r],
              };
            r.contains.push(a);
            let o = {
                begin: /\$?\(\(/,
                end: /\)\)/,
                contains: [
                  { begin: /\d+#[0-9a-f]+/, className: "number" },
                  e.NUMBER_MODE,
                  n,
                ],
              },
              l = e.SHEBANG({
                binary: "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",
                relevance: 10,
              }),
              s = {
                className: "function",
                begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                returnBegin: !0,
                contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
                relevance: 0,
              };
            return {
              name: "Bash",
              aliases: ["sh"],
              keywords: {
                $pattern: /\b[a-z][a-z0-9._-]+\b/,
                keyword: [
                  "if",
                  "then",
                  "else",
                  "elif",
                  "fi",
                  "for",
                  "while",
                  "until",
                  "in",
                  "do",
                  "done",
                  "case",
                  "esac",
                  "function",
                  "select",
                ],
                literal: ["true", "false"],
                built_in: [
                  "break",
                  "cd",
                  "continue",
                  "eval",
                  "exec",
                  "exit",
                  "export",
                  "getopts",
                  "hash",
                  "pwd",
                  "readonly",
                  "return",
                  "shift",
                  "test",
                  "times",
                  "trap",
                  "umask",
                  "unset",
                  "alias",
                  "bind",
                  "builtin",
                  "caller",
                  "command",
                  "declare",
                  "echo",
                  "enable",
                  "help",
                  "let",
                  "local",
                  "logout",
                  "mapfile",
                  "printf",
                  "read",
                  "readarray",
                  "source",
                  "type",
                  "typeset",
                  "ulimit",
                  "unalias",
                  "set",
                  "shopt",
                  "autoload",
                  "bg",
                  "bindkey",
                  "bye",
                  "cap",
                  "chdir",
                  "clone",
                  "comparguments",
                  "compcall",
                  "compctl",
                  "compdescribe",
                  "compfiles",
                  "compgroups",
                  "compquote",
                  "comptags",
                  "comptry",
                  "compvalues",
                  "dirs",
                  "disable",
                  "disown",
                  "echotc",
                  "echoti",
                  "emulate",
                  "fc",
                  "fg",
                  "float",
                  "functions",
                  "getcap",
                  "getln",
                  "history",
                  "integer",
                  "jobs",
                  "kill",
                  "limit",
                  "log",
                  "noglob",
                  "popd",
                  "print",
                  "pushd",
                  "pushln",
                  "rehash",
                  "sched",
                  "setcap",
                  "setopt",
                  "stat",
                  "suspend",
                  "ttyctl",
                  "unfunction",
                  "unhash",
                  "unlimit",
                  "unsetopt",
                  "vared",
                  "wait",
                  "whence",
                  "where",
                  "which",
                  "zcompile",
                  "zformat",
                  "zftp",
                  "zle",
                  "zmodload",
                  "zparseopts",
                  "zprof",
                  "zpty",
                  "zregexparse",
                  "zsocket",
                  "zstyle",
                  "ztcp",
                  "chcon",
                  "chgrp",
                  "chown",
                  "chmod",
                  "cp",
                  "dd",
                  "df",
                  "dir",
                  "dircolors",
                  "ln",
                  "ls",
                  "mkdir",
                  "mkfifo",
                  "mknod",
                  "mktemp",
                  "mv",
                  "realpath",
                  "rm",
                  "rmdir",
                  "shred",
                  "sync",
                  "touch",
                  "truncate",
                  "vdir",
                  "b2sum",
                  "base32",
                  "base64",
                  "cat",
                  "cksum",
                  "comm",
                  "csplit",
                  "cut",
                  "expand",
                  "fmt",
                  "fold",
                  "head",
                  "join",
                  "md5sum",
                  "nl",
                  "numfmt",
                  "od",
                  "paste",
                  "ptx",
                  "pr",
                  "sha1sum",
                  "sha224sum",
                  "sha256sum",
                  "sha384sum",
                  "sha512sum",
                  "shuf",
                  "sort",
                  "split",
                  "sum",
                  "tac",
                  "tail",
                  "tr",
                  "tsort",
                  "unexpand",
                  "uniq",
                  "wc",
                  "arch",
                  "basename",
                  "chroot",
                  "date",
                  "dirname",
                  "du",
                  "echo",
                  "env",
                  "expr",
                  "factor",
                  "groups",
                  "hostid",
                  "id",
                  "link",
                  "logname",
                  "nice",
                  "nohup",
                  "nproc",
                  "pathchk",
                  "pinky",
                  "printenv",
                  "printf",
                  "pwd",
                  "readlink",
                  "runcon",
                  "seq",
                  "sleep",
                  "stat",
                  "stdbuf",
                  "stty",
                  "tee",
                  "test",
                  "timeout",
                  "tty",
                  "uname",
                  "unlink",
                  "uptime",
                  "users",
                  "who",
                  "whoami",
                  "yes",
                ],
              },
              contains: [
                l,
                e.SHEBANG(),
                s,
                o,
                e.HASH_COMMENT_MODE,
                i,
                { match: /(\/[a-z._-]+)+/ },
                a,
                { match: /\\"/ },
                { className: "string", begin: /'/, end: /'/ },
                { match: /\\'/ },
                n,
              ],
            };
          },
          c: function (e) {
            let t = e.regex,
              n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
              r = "decltype\\(auto\\)",
              i = "[a-zA-Z_]\\w*::",
              a =
                "(" +
                r +
                "|" +
                t.optional(i) +
                "[a-zA-Z_]\\w*" +
                t.optional("<[^<>]+>") +
                ")",
              o = {
                className: "type",
                variants: [
                  { begin: "\\b[a-z\\d_]*_t\\b" },
                  { match: /\batomic_[a-z]{3,6}\b/ },
                ],
              },
              l = {
                className: "string",
                variants: [
                  {
                    begin: '(u8?|U|L)?"',
                    end: '"',
                    illegal: "\\n",
                    contains: [e.BACKSLASH_ESCAPE],
                  },
                  {
                    begin:
                      "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                    end: "'",
                    illegal: ".",
                  },
                  e.END_SAME_AS_BEGIN({
                    begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                    end: /\)([^()\\ ]{0,16})"/,
                  }),
                ],
              },
              s = {
                className: "number",
                variants: [
                  { begin: "\\b(0b[01']+)" },
                  {
                    begin:
                      "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
                  },
                  {
                    begin:
                      "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
                  },
                ],
                relevance: 0,
              },
              c = {
                className: "meta",
                begin: /#\s*[a-z]+\b/,
                end: /$/,
                keywords: {
                  keyword:
                    "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
                },
                contains: [
                  { begin: /\\\n/, relevance: 0 },
                  e.inherit(l, { className: "string" }),
                  { className: "string", begin: /<.*?>/ },
                  n,
                  e.C_BLOCK_COMMENT_MODE,
                ],
              },
              u = {
                className: "title",
                begin: t.optional(i) + e.IDENT_RE,
                relevance: 0,
              },
              d = t.optional(i) + e.IDENT_RE + "\\s*\\(",
              f = {
                keyword: [
                  "asm",
                  "auto",
                  "break",
                  "case",
                  "continue",
                  "default",
                  "do",
                  "else",
                  "enum",
                  "extern",
                  "for",
                  "fortran",
                  "goto",
                  "if",
                  "inline",
                  "register",
                  "restrict",
                  "return",
                  "sizeof",
                  "struct",
                  "switch",
                  "typedef",
                  "union",
                  "volatile",
                  "while",
                  "_Alignas",
                  "_Alignof",
                  "_Atomic",
                  "_Generic",
                  "_Noreturn",
                  "_Static_assert",
                  "_Thread_local",
                  "alignas",
                  "alignof",
                  "noreturn",
                  "static_assert",
                  "thread_local",
                  "_Pragma",
                ],
                type: [
                  "float",
                  "double",
                  "signed",
                  "unsigned",
                  "int",
                  "short",
                  "long",
                  "char",
                  "void",
                  "_Bool",
                  "_Complex",
                  "_Imaginary",
                  "_Decimal32",
                  "_Decimal64",
                  "_Decimal128",
                  "const",
                  "static",
                  "complex",
                  "bool",
                  "imaginary",
                ],
                literal: "true false NULL",
                built_in:
                  "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
              },
              p = [c, o, n, e.C_BLOCK_COMMENT_MODE, s, l],
              m = {
                variants: [
                  { begin: /=/, end: /;/ },
                  { begin: /\(/, end: /\)/ },
                  { beginKeywords: "new throw return else", end: /;/ },
                ],
                keywords: f,
                contains: p.concat([
                  {
                    begin: /\(/,
                    end: /\)/,
                    keywords: f,
                    contains: p.concat(["self"]),
                    relevance: 0,
                  },
                ]),
                relevance: 0,
              },
              g = {
                begin: "(" + a + "[\\*&\\s]+)+" + d,
                returnBegin: !0,
                end: /[{;=]/,
                excludeEnd: !0,
                keywords: f,
                illegal: /[^\w\s\*&:<>.]/,
                contains: [
                  { begin: r, keywords: f, relevance: 0 },
                  {
                    begin: d,
                    returnBegin: !0,
                    contains: [e.inherit(u, { className: "title.function" })],
                    relevance: 0,
                  },
                  { relevance: 0, match: /,/ },
                  {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: f,
                    relevance: 0,
                    contains: [
                      n,
                      e.C_BLOCK_COMMENT_MODE,
                      l,
                      s,
                      o,
                      {
                        begin: /\(/,
                        end: /\)/,
                        keywords: f,
                        relevance: 0,
                        contains: ["self", n, e.C_BLOCK_COMMENT_MODE, l, s, o],
                      },
                    ],
                  },
                  o,
                  n,
                  e.C_BLOCK_COMMENT_MODE,
                  c,
                ],
              };
            return {
              name: "C",
              aliases: ["h"],
              keywords: f,
              disableAutodetect: !0,
              illegal: "</",
              contains: [].concat(m, g, p, [
                c,
                { begin: e.IDENT_RE + "::", keywords: f },
                {
                  className: "class",
                  beginKeywords: "enum class struct union",
                  end: /[{;:<>=]/,
                  contains: [
                    { beginKeywords: "final class struct" },
                    e.TITLE_MODE,
                  ],
                },
              ]),
              exports: { preprocessor: c, strings: l, keywords: f },
            };
          },
          cpp: function (e) {
            let t = e.regex,
              n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
              r = "decltype\\(auto\\)",
              i = "[a-zA-Z_]\\w*::",
              a =
                "(?!struct)(" +
                r +
                "|" +
                t.optional(i) +
                "[a-zA-Z_]\\w*" +
                t.optional("<[^<>]+>") +
                ")",
              o = { className: "type", begin: "\\b[a-z\\d_]*_t\\b" },
              l = {
                className: "string",
                variants: [
                  {
                    begin: '(u8?|U|L)?"',
                    end: '"',
                    illegal: "\\n",
                    contains: [e.BACKSLASH_ESCAPE],
                  },
                  {
                    begin:
                      "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                    end: "'",
                    illegal: ".",
                  },
                  e.END_SAME_AS_BEGIN({
                    begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                    end: /\)([^()\\ ]{0,16})"/,
                  }),
                ],
              },
              s = {
                className: "number",
                variants: [
                  { begin: "\\b(0b[01']+)" },
                  {
                    begin:
                      "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
                  },
                  {
                    begin:
                      "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
                  },
                ],
                relevance: 0,
              },
              c = {
                className: "meta",
                begin: /#\s*[a-z]+\b/,
                end: /$/,
                keywords: {
                  keyword:
                    "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
                },
                contains: [
                  { begin: /\\\n/, relevance: 0 },
                  e.inherit(l, { className: "string" }),
                  { className: "string", begin: /<.*?>/ },
                  n,
                  e.C_BLOCK_COMMENT_MODE,
                ],
              },
              u = {
                className: "title",
                begin: t.optional(i) + e.IDENT_RE,
                relevance: 0,
              },
              d = t.optional(i) + e.IDENT_RE + "\\s*\\(",
              f = {
                type: [
                  "bool",
                  "char",
                  "char16_t",
                  "char32_t",
                  "char8_t",
                  "double",
                  "float",
                  "int",
                  "long",
                  "short",
                  "void",
                  "wchar_t",
                  "unsigned",
                  "signed",
                  "const",
                  "static",
                ],
                keyword: [
                  "alignas",
                  "alignof",
                  "and",
                  "and_eq",
                  "asm",
                  "atomic_cancel",
                  "atomic_commit",
                  "atomic_noexcept",
                  "auto",
                  "bitand",
                  "bitor",
                  "break",
                  "case",
                  "catch",
                  "class",
                  "co_await",
                  "co_return",
                  "co_yield",
                  "compl",
                  "concept",
                  "const_cast|10",
                  "consteval",
                  "constexpr",
                  "constinit",
                  "continue",
                  "decltype",
                  "default",
                  "delete",
                  "do",
                  "dynamic_cast|10",
                  "else",
                  "enum",
                  "explicit",
                  "export",
                  "extern",
                  "false",
                  "final",
                  "for",
                  "friend",
                  "goto",
                  "if",
                  "import",
                  "inline",
                  "module",
                  "mutable",
                  "namespace",
                  "new",
                  "noexcept",
                  "not",
                  "not_eq",
                  "nullptr",
                  "operator",
                  "or",
                  "or_eq",
                  "override",
                  "private",
                  "protected",
                  "public",
                  "reflexpr",
                  "register",
                  "reinterpret_cast|10",
                  "requires",
                  "return",
                  "sizeof",
                  "static_assert",
                  "static_cast|10",
                  "struct",
                  "switch",
                  "synchronized",
                  "template",
                  "this",
                  "thread_local",
                  "throw",
                  "transaction_safe",
                  "transaction_safe_dynamic",
                  "true",
                  "try",
                  "typedef",
                  "typeid",
                  "typename",
                  "union",
                  "using",
                  "virtual",
                  "volatile",
                  "while",
                  "xor",
                  "xor_eq",
                ],
                literal: ["NULL", "false", "nullopt", "nullptr", "true"],
                built_in: ["_Pragma"],
                _type_hints: [
                  "any",
                  "auto_ptr",
                  "barrier",
                  "binary_semaphore",
                  "bitset",
                  "complex",
                  "condition_variable",
                  "condition_variable_any",
                  "counting_semaphore",
                  "deque",
                  "false_type",
                  "future",
                  "imaginary",
                  "initializer_list",
                  "istringstream",
                  "jthread",
                  "latch",
                  "lock_guard",
                  "multimap",
                  "multiset",
                  "mutex",
                  "optional",
                  "ostringstream",
                  "packaged_task",
                  "pair",
                  "promise",
                  "priority_queue",
                  "queue",
                  "recursive_mutex",
                  "recursive_timed_mutex",
                  "scoped_lock",
                  "set",
                  "shared_future",
                  "shared_lock",
                  "shared_mutex",
                  "shared_timed_mutex",
                  "shared_ptr",
                  "stack",
                  "string_view",
                  "stringstream",
                  "timed_mutex",
                  "thread",
                  "true_type",
                  "tuple",
                  "unique_lock",
                  "unique_ptr",
                  "unordered_map",
                  "unordered_multimap",
                  "unordered_multiset",
                  "unordered_set",
                  "variant",
                  "vector",
                  "weak_ptr",
                  "wstring",
                  "wstring_view",
                ],
              },
              p = {
                className: "function.dispatch",
                relevance: 0,
                keywords: {
                  _hint: [
                    "abort",
                    "abs",
                    "acos",
                    "apply",
                    "as_const",
                    "asin",
                    "atan",
                    "atan2",
                    "calloc",
                    "ceil",
                    "cerr",
                    "cin",
                    "clog",
                    "cos",
                    "cosh",
                    "cout",
                    "declval",
                    "endl",
                    "exchange",
                    "exit",
                    "exp",
                    "fabs",
                    "floor",
                    "fmod",
                    "forward",
                    "fprintf",
                    "fputs",
                    "free",
                    "frexp",
                    "fscanf",
                    "future",
                    "invoke",
                    "isalnum",
                    "isalpha",
                    "iscntrl",
                    "isdigit",
                    "isgraph",
                    "islower",
                    "isprint",
                    "ispunct",
                    "isspace",
                    "isupper",
                    "isxdigit",
                    "labs",
                    "launder",
                    "ldexp",
                    "log",
                    "log10",
                    "make_pair",
                    "make_shared",
                    "make_shared_for_overwrite",
                    "make_tuple",
                    "make_unique",
                    "malloc",
                    "memchr",
                    "memcmp",
                    "memcpy",
                    "memset",
                    "modf",
                    "move",
                    "pow",
                    "printf",
                    "putchar",
                    "puts",
                    "realloc",
                    "scanf",
                    "sin",
                    "sinh",
                    "snprintf",
                    "sprintf",
                    "sqrt",
                    "sscanf",
                    "std",
                    "stderr",
                    "stdin",
                    "stdout",
                    "strcat",
                    "strchr",
                    "strcmp",
                    "strcpy",
                    "strcspn",
                    "strlen",
                    "strncat",
                    "strncmp",
                    "strncpy",
                    "strpbrk",
                    "strrchr",
                    "strspn",
                    "strstr",
                    "swap",
                    "tan",
                    "tanh",
                    "terminate",
                    "to_underlying",
                    "tolower",
                    "toupper",
                    "vfprintf",
                    "visit",
                    "vprintf",
                    "vsprintf",
                  ],
                },
                begin: t.concat(
                  /\b/,
                  /(?!decltype)/,
                  /(?!if)/,
                  /(?!for)/,
                  /(?!switch)/,
                  /(?!while)/,
                  e.IDENT_RE,
                  t.lookahead(/(<[^<>]+>|)\s*\(/),
                ),
              },
              m = [p, c, o, n, e.C_BLOCK_COMMENT_MODE, s, l],
              g = {
                variants: [
                  { begin: /=/, end: /;/ },
                  { begin: /\(/, end: /\)/ },
                  { beginKeywords: "new throw return else", end: /;/ },
                ],
                keywords: f,
                contains: m.concat([
                  {
                    begin: /\(/,
                    end: /\)/,
                    keywords: f,
                    contains: m.concat(["self"]),
                    relevance: 0,
                  },
                ]),
                relevance: 0,
              },
              h = {
                className: "function",
                begin: "(" + a + "[\\*&\\s]+)+" + d,
                returnBegin: !0,
                end: /[{;=]/,
                excludeEnd: !0,
                keywords: f,
                illegal: /[^\w\s\*&:<>.]/,
                contains: [
                  { begin: r, keywords: f, relevance: 0 },
                  { begin: d, returnBegin: !0, contains: [u], relevance: 0 },
                  { begin: /::/, relevance: 0 },
                  { begin: /:/, endsWithParent: !0, contains: [l, s] },
                  { relevance: 0, match: /,/ },
                  {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: f,
                    relevance: 0,
                    contains: [
                      n,
                      e.C_BLOCK_COMMENT_MODE,
                      l,
                      s,
                      o,
                      {
                        begin: /\(/,
                        end: /\)/,
                        keywords: f,
                        relevance: 0,
                        contains: ["self", n, e.C_BLOCK_COMMENT_MODE, l, s, o],
                      },
                    ],
                  },
                  o,
                  n,
                  e.C_BLOCK_COMMENT_MODE,
                  c,
                ],
              };
            return {
              name: "C++",
              aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
              keywords: f,
              illegal: "</",
              classNameAliases: { "function.dispatch": "built_in" },
              contains: [].concat(g, h, p, m, [
                c,
                {
                  begin:
                    "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
                  end: ">",
                  keywords: f,
                  contains: ["self", o],
                },
                { begin: e.IDENT_RE + "::", keywords: f },
                {
                  match: [
                    /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
                    /\s+/,
                    /\w+/,
                  ],
                  className: { 1: "keyword", 3: "title.class" },
                },
              ]),
            };
          },
          csharp: function (e) {
            let t = {
                keyword: [
                  "abstract",
                  "as",
                  "base",
                  "break",
                  "case",
                  "catch",
                  "class",
                  "const",
                  "continue",
                  "do",
                  "else",
                  "event",
                  "explicit",
                  "extern",
                  "finally",
                  "fixed",
                  "for",
                  "foreach",
                  "goto",
                  "if",
                  "implicit",
                  "in",
                  "interface",
                  "internal",
                  "is",
                  "lock",
                  "namespace",
                  "new",
                  "operator",
                  "out",
                  "override",
                  "params",
                  "private",
                  "protected",
                  "public",
                  "readonly",
                  "record",
                  "ref",
                  "return",
                  "scoped",
                  "sealed",
                  "sizeof",
                  "stackalloc",
                  "static",
                  "struct",
                  "switch",
                  "this",
                  "throw",
                  "try",
                  "typeof",
                  "unchecked",
                  "unsafe",
                  "using",
                  "virtual",
                  "void",
                  "volatile",
                  "while",
                ].concat([
                  "add",
                  "alias",
                  "and",
                  "ascending",
                  "async",
                  "await",
                  "by",
                  "descending",
                  "equals",
                  "from",
                  "get",
                  "global",
                  "group",
                  "init",
                  "into",
                  "join",
                  "let",
                  "nameof",
                  "not",
                  "notnull",
                  "on",
                  "or",
                  "orderby",
                  "partial",
                  "remove",
                  "select",
                  "set",
                  "unmanaged",
                  "value|0",
                  "var",
                  "when",
                  "where",
                  "with",
                  "yield",
                ]),
                built_in: [
                  "bool",
                  "byte",
                  "char",
                  "decimal",
                  "delegate",
                  "double",
                  "dynamic",
                  "enum",
                  "float",
                  "int",
                  "long",
                  "nint",
                  "nuint",
                  "object",
                  "sbyte",
                  "short",
                  "string",
                  "ulong",
                  "uint",
                  "ushort",
                ],
                literal: ["default", "false", "null", "true"],
              },
              n = e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }),
              r = {
                className: "number",
                variants: [
                  { begin: "\\b(0b[01']+)" },
                  {
                    begin:
                      "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)",
                  },
                  {
                    begin:
                      "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
                  },
                ],
                relevance: 0,
              },
              i = {
                className: "string",
                begin: '@"',
                end: '"',
                contains: [{ begin: '""' }],
              },
              a = e.inherit(i, { illegal: /\n/ }),
              o = { className: "subst", begin: /\{/, end: /\}/, keywords: t },
              l = e.inherit(o, { illegal: /\n/ }),
              s = {
                className: "string",
                begin: /\$"/,
                end: '"',
                illegal: /\n/,
                contains: [
                  { begin: /\{\{/ },
                  { begin: /\}\}/ },
                  e.BACKSLASH_ESCAPE,
                  l,
                ],
              },
              c = {
                className: "string",
                begin: /\$@"/,
                end: '"',
                contains: [
                  { begin: /\{\{/ },
                  { begin: /\}\}/ },
                  { begin: '""' },
                  o,
                ],
              },
              u = e.inherit(c, {
                illegal: /\n/,
                contains: [
                  { begin: /\{\{/ },
                  { begin: /\}\}/ },
                  { begin: '""' },
                  l,
                ],
              });
            (o.contains = [
              c,
              s,
              i,
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              r,
              e.C_BLOCK_COMMENT_MODE,
            ]),
              (l.contains = [
                u,
                s,
                a,
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                r,
                e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ }),
              ]);
            let d = {
                variants: [c, s, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
              },
              f = {
                begin: "<",
                end: ">",
                contains: [{ beginKeywords: "in out" }, n],
              },
              p =
                e.IDENT_RE +
                "(<" +
                e.IDENT_RE +
                "(\\s*,\\s*" +
                e.IDENT_RE +
                ")*>)?(\\[\\])?",
              m = { begin: "@" + e.IDENT_RE, relevance: 0 };
            return {
              name: "C#",
              aliases: ["cs", "c#"],
              keywords: t,
              illegal: /::/,
              contains: [
                e.COMMENT("///", "$", {
                  returnBegin: !0,
                  contains: [
                    {
                      className: "doctag",
                      variants: [
                        { begin: "///", relevance: 0 },
                        { begin: "<!--|-->" },
                        { begin: "</?", end: ">" },
                      ],
                    },
                  ],
                }),
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
                {
                  className: "meta",
                  begin: "#",
                  end: "$",
                  keywords: {
                    keyword:
                      "if else elif endif define undef warning error line region endregion pragma checksum",
                  },
                },
                d,
                r,
                {
                  beginKeywords: "class interface",
                  relevance: 0,
                  end: /[{;=]/,
                  illegal: /[^\s:,]/,
                  contains: [
                    { beginKeywords: "where class" },
                    n,
                    f,
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE,
                  ],
                },
                {
                  beginKeywords: "namespace",
                  relevance: 0,
                  end: /[{;=]/,
                  illegal: /[^\s:]/,
                  contains: [n, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                },
                {
                  beginKeywords: "record",
                  relevance: 0,
                  end: /[{;=]/,
                  illegal: /[^\s:]/,
                  contains: [
                    n,
                    f,
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE,
                  ],
                },
                {
                  className: "meta",
                  begin: "^\\s*\\[(?=[\\w])",
                  excludeBegin: !0,
                  end: "\\]",
                  excludeEnd: !0,
                  contains: [{ className: "string", begin: /"/, end: /"/ }],
                },
                { beginKeywords: "new return throw await else", relevance: 0 },
                {
                  className: "function",
                  begin:
                    "(" + p + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
                  returnBegin: !0,
                  end: /\s*[{;=]/,
                  excludeEnd: !0,
                  keywords: t,
                  contains: [
                    {
                      beginKeywords:
                        "public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
                      relevance: 0,
                    },
                    {
                      begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
                      returnBegin: !0,
                      contains: [e.TITLE_MODE, f],
                      relevance: 0,
                    },
                    { match: /\(\)/ },
                    {
                      className: "params",
                      begin: /\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: t,
                      relevance: 0,
                      contains: [d, r, e.C_BLOCK_COMMENT_MODE],
                    },
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE,
                  ],
                },
                m,
              ],
            };
          },
          css: function (e) {
            let t = e.regex,
              n = i(e),
              r = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
            return {
              name: "CSS",
              case_insensitive: !0,
              illegal: /[=|'\$]/,
              keywords: { keyframePosition: "from to" },
              classNameAliases: { keyframePosition: "selector-tag" },
              contains: [
                n.BLOCK_COMMENT,
                { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
                n.CSS_NUMBER_MODE,
                {
                  className: "selector-id",
                  begin: /#[A-Za-z0-9_-]+/,
                  relevance: 0,
                },
                {
                  className: "selector-class",
                  begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
                  relevance: 0,
                },
                n.ATTRIBUTE_SELECTOR_MODE,
                {
                  className: "selector-pseudo",
                  variants: [
                    { begin: ":(" + l.join("|") + ")" },
                    { begin: ":(:)?(" + s.join("|") + ")" },
                  ],
                },
                n.CSS_VARIABLE,
                {
                  className: "attribute",
                  begin: "\\b(" + c.join("|") + ")\\b",
                },
                {
                  begin: /:/,
                  end: /[;}{]/,
                  contains: [
                    n.BLOCK_COMMENT,
                    n.HEXCOLOR,
                    n.IMPORTANT,
                    n.CSS_NUMBER_MODE,
                    ...r,
                    {
                      begin: /(url|data-uri)\(/,
                      end: /\)/,
                      relevance: 0,
                      keywords: { built_in: "url data-uri" },
                      contains: [
                        ...r,
                        {
                          className: "string",
                          begin: /[^)]/,
                          endsWithParent: !0,
                          excludeEnd: !0,
                        },
                      ],
                    },
                    n.FUNCTION_DISPATCH,
                  ],
                },
                {
                  begin: t.lookahead(/@/),
                  end: "[{;]",
                  relevance: 0,
                  illegal: /:/,
                  contains: [
                    { className: "keyword", begin: /@-?\w[\w]*(-\w+)*/ },
                    {
                      begin: /\s/,
                      endsWithParent: !0,
                      excludeEnd: !0,
                      relevance: 0,
                      keywords: {
                        $pattern: /[a-z-]+/,
                        keyword: "and or not only",
                        attribute: o.join(" "),
                      },
                      contains: [
                        { begin: /[a-z-]+(?=:)/, className: "attribute" },
                        ...r,
                        n.CSS_NUMBER_MODE,
                      ],
                    },
                  ],
                },
                {
                  className: "selector-tag",
                  begin: "\\b(" + a.join("|") + ")\\b",
                },
              ],
            };
          },
          diff: function (e) {
            let t = e.regex;
            return {
              name: "Diff",
              aliases: ["patch"],
              contains: [
                {
                  className: "meta",
                  relevance: 10,
                  match: t.either(
                    /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
                    /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
                    /^--- +\d+,\d+ +----$/,
                  ),
                },
                {
                  className: "comment",
                  variants: [
                    {
                      begin: t.either(
                        /Index: /,
                        /^index/,
                        /={3,}/,
                        /^-{3}/,
                        /^\*{3} /,
                        /^\+{3}/,
                        /^diff --git/,
                      ),
                      end: /$/,
                    },
                    { match: /^\*{15}$/ },
                  ],
                },
                { className: "addition", begin: /^\+/, end: /$/ },
                { className: "deletion", begin: /^-/, end: /$/ },
                { className: "addition", begin: /^!/, end: /$/ },
              ],
            };
          },
          go: function (e) {
            let t = {
              keyword: [
                "break",
                "case",
                "chan",
                "const",
                "continue",
                "default",
                "defer",
                "else",
                "fallthrough",
                "for",
                "func",
                "go",
                "goto",
                "if",
                "import",
                "interface",
                "map",
                "package",
                "range",
                "return",
                "select",
                "struct",
                "switch",
                "type",
                "var",
              ],
              type: [
                "bool",
                "byte",
                "complex64",
                "complex128",
                "error",
                "float32",
                "float64",
                "int8",
                "int16",
                "int32",
                "int64",
                "string",
                "uint8",
                "uint16",
                "uint32",
                "uint64",
                "int",
                "uint",
                "uintptr",
                "rune",
              ],
              literal: ["true", "false", "iota", "nil"],
              built_in: [
                "append",
                "cap",
                "close",
                "complex",
                "copy",
                "imag",
                "len",
                "make",
                "new",
                "panic",
                "print",
                "println",
                "real",
                "recover",
                "delete",
              ],
            };
            return {
              name: "Go",
              aliases: ["golang"],
              keywords: t,
              illegal: "</",
              contains: [
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
                {
                  className: "string",
                  variants: [
                    e.QUOTE_STRING_MODE,
                    e.APOS_STRING_MODE,
                    { begin: "`", end: "`" },
                  ],
                },
                {
                  className: "number",
                  variants: [
                    { begin: e.C_NUMBER_RE + "[i]", relevance: 1 },
                    e.C_NUMBER_MODE,
                  ],
                },
                { begin: /:=/ },
                {
                  className: "function",
                  beginKeywords: "func",
                  end: "\\s*(\\{|$)",
                  excludeEnd: !0,
                  contains: [
                    e.TITLE_MODE,
                    {
                      className: "params",
                      begin: /\(/,
                      end: /\)/,
                      endsParent: !0,
                      keywords: t,
                      illegal: /["']/,
                    },
                  ],
                },
              ],
            };
          },
          graphql: function (e) {
            let t = e.regex;
            return {
              name: "GraphQL",
              aliases: ["gql"],
              case_insensitive: !0,
              disableAutodetect: !1,
              keywords: {
                keyword: [
                  "query",
                  "mutation",
                  "subscription",
                  "type",
                  "input",
                  "schema",
                  "directive",
                  "interface",
                  "union",
                  "scalar",
                  "fragment",
                  "enum",
                  "on",
                ],
                literal: ["true", "false", "null"],
              },
              contains: [
                e.HASH_COMMENT_MODE,
                e.QUOTE_STRING_MODE,
                e.NUMBER_MODE,
                { scope: "punctuation", match: /[.]{3}/, relevance: 0 },
                {
                  scope: "punctuation",
                  begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
                  relevance: 0,
                },
                {
                  scope: "variable",
                  begin: /\$/,
                  end: /\W/,
                  excludeEnd: !0,
                  relevance: 0,
                },
                { scope: "meta", match: /@\w+/, excludeEnd: !0 },
                {
                  scope: "symbol",
                  begin: t.concat(
                    /[_A-Za-z][_0-9A-Za-z]*/,
                    t.lookahead(/\s*:/),
                  ),
                  relevance: 0,
                },
              ],
              illegal: [/[;<']/, /BEGIN/],
            };
          },
          ini: function (e) {
            let t = e.regex,
              n = {
                className: "number",
                relevance: 0,
                variants: [
                  { begin: /([+-]+)?[\d]+_[\d_]+/ },
                  { begin: e.NUMBER_RE },
                ],
              },
              r = e.COMMENT();
            r.variants = [
              { begin: /;/, end: /$/ },
              { begin: /#/, end: /$/ },
            ];
            let i = {
                className: "variable",
                variants: [
                  { begin: /\$[\w\d"][\w\d_]*/ },
                  { begin: /\$\{(.*?)\}/ },
                ],
              },
              a = {
                className: "literal",
                begin: /\bon|off|true|false|yes|no\b/,
              },
              o = {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE],
                variants: [
                  { begin: "'''", end: "'''", relevance: 10 },
                  { begin: '"""', end: '"""', relevance: 10 },
                  { begin: '"', end: '"' },
                  { begin: "'", end: "'" },
                ],
              },
              l = t.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/);
            return {
              name: "TOML, also INI",
              aliases: ["toml"],
              case_insensitive: !0,
              illegal: /\S/,
              contains: [
                r,
                { className: "section", begin: /\[+/, end: /\]+/ },
                {
                  begin: t.concat(
                    l,
                    "(\\s*\\.\\s*",
                    l,
                    ")*",
                    t.lookahead(/\s*=\s*[^#\s]/),
                  ),
                  className: "attr",
                  starts: {
                    end: /$/,
                    contains: [
                      r,
                      {
                        begin: /\[/,
                        end: /\]/,
                        contains: [r, a, i, o, n, "self"],
                        relevance: 0,
                      },
                      a,
                      i,
                      o,
                      n,
                    ],
                  },
                },
              ],
            };
          },
          java: function (e) {
            let t = e.regex,
              n = "[\xc0-ʸa-zA-Z_$][\xc0-ʸa-zA-Z_$0-9]*",
              r =
                n +
                (function e(t, n, r) {
                  return -1 === r ? "" : t.replace(n, (i) => e(t, n, r - 1));
                })("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2),
              i = {
                keyword: [
                  "synchronized",
                  "abstract",
                  "private",
                  "var",
                  "static",
                  "if",
                  "const ",
                  "for",
                  "while",
                  "strictfp",
                  "finally",
                  "protected",
                  "import",
                  "native",
                  "final",
                  "void",
                  "enum",
                  "else",
                  "break",
                  "transient",
                  "catch",
                  "instanceof",
                  "volatile",
                  "case",
                  "assert",
                  "package",
                  "default",
                  "public",
                  "try",
                  "switch",
                  "continue",
                  "throws",
                  "protected",
                  "public",
                  "private",
                  "module",
                  "requires",
                  "exports",
                  "do",
                  "sealed",
                  "yield",
                  "permits",
                ],
                literal: ["false", "true", "null"],
                type: [
                  "char",
                  "boolean",
                  "long",
                  "float",
                  "int",
                  "byte",
                  "short",
                  "double",
                ],
                built_in: ["super", "this"],
              },
              a = {
                className: "meta",
                begin: "@" + n,
                contains: [{ begin: /\(/, end: /\)/, contains: ["self"] }],
              },
              o = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: i,
                relevance: 0,
                contains: [e.C_BLOCK_COMMENT_MODE],
                endsParent: !0,
              };
            return {
              name: "Java",
              aliases: ["jsp"],
              keywords: i,
              illegal: /<\/|#/,
              contains: [
                e.COMMENT("/\\*\\*", "\\*/", {
                  relevance: 0,
                  contains: [
                    { begin: /\w+@/, relevance: 0 },
                    { className: "doctag", begin: "@[A-Za-z]+" },
                  ],
                }),
                {
                  begin: /import java\.[a-z]+\./,
                  keywords: "import",
                  relevance: 2,
                },
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
                {
                  begin: /"""/,
                  end: /"""/,
                  className: "string",
                  contains: [e.BACKSLASH_ESCAPE],
                },
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                {
                  match: [
                    /\b(?:class|interface|enum|extends|implements|new)/,
                    /\s+/,
                    n,
                  ],
                  className: { 1: "keyword", 3: "title.class" },
                },
                { match: /non-sealed/, scope: "keyword" },
                {
                  begin: [t.concat(/(?!else)/, n), /\s+/, n, /\s+/, /=(?!=)/],
                  className: { 1: "type", 3: "variable", 5: "operator" },
                },
                {
                  begin: [/record/, /\s+/, n],
                  className: { 1: "keyword", 3: "title.class" },
                  contains: [o, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                },
                { beginKeywords: "new throw return else", relevance: 0 },
                {
                  begin: [
                    "(?:" + r + "\\s+)",
                    e.UNDERSCORE_IDENT_RE,
                    /\s*(?=\()/,
                  ],
                  className: { 2: "title.function" },
                  keywords: i,
                  contains: [
                    {
                      className: "params",
                      begin: /\(/,
                      end: /\)/,
                      keywords: i,
                      relevance: 0,
                      contains: [
                        a,
                        e.APOS_STRING_MODE,
                        e.QUOTE_STRING_MODE,
                        p,
                        e.C_BLOCK_COMMENT_MODE,
                      ],
                    },
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE,
                  ],
                },
                p,
                a,
              ],
            };
          },
          javascript: function (e) {
            var t;
            let n = e.regex,
              r = (e, { after: t }) => {
                let n = "</" + e[0].slice(1);
                return -1 !== e.input.indexOf(n, t);
              },
              i = { begin: "<>", end: "</>" },
              a = {
                begin: /<[A-Za-z0-9\\._:-]+/,
                end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                isTrulyOpeningTag: (e, t) => {
                  let n;
                  let i = e[0].length + e.index,
                    a = e.input[i];
                  if ("<" === a || "," === a) {
                    t.ignoreMatch();
                    return;
                  }
                  ">" !== a || r(e, { after: i }) || t.ignoreMatch();
                  let o = e.input.substring(i);
                  if (
                    (n = o.match(/^\s*=/)) ||
                    ((n = o.match(/^\s+extends\s+/)) && 0 === n.index)
                  ) {
                    t.ignoreMatch();
                    return;
                  }
                },
              },
              o = {
                $pattern: m,
                keyword: g,
                literal: h,
                built_in: w,
                "variable.language": v,
              },
              l = "[0-9](_?[0-9])*",
              s = `\\.(${l})`,
              c = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
              u = {
                className: "number",
                variants: [
                  {
                    begin: `(\\b(${c})((${s})|\\.)?|(${s}))[eE][+-]?(${l})\\b`,
                  },
                  { begin: `\\b(${c})\\b((${s})\\b|\\.)?|(${s})\\b` },
                  { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
                  { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
                  { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
                  { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
                  { begin: "\\b0[0-7]+n?\\b" },
                ],
                relevance: 0,
              },
              d = {
                className: "subst",
                begin: "\\$\\{",
                end: "\\}",
                keywords: o,
                contains: [],
              },
              f = {
                begin: "html`",
                end: "",
                starts: {
                  end: "`",
                  returnEnd: !1,
                  contains: [e.BACKSLASH_ESCAPE, d],
                  subLanguage: "xml",
                },
              },
              p = {
                begin: "css`",
                end: "",
                starts: {
                  end: "`",
                  returnEnd: !1,
                  contains: [e.BACKSLASH_ESCAPE, d],
                  subLanguage: "css",
                },
              },
              k = {
                begin: "gql`",
                end: "",
                starts: {
                  end: "`",
                  returnEnd: !1,
                  contains: [e.BACKSLASH_ESCAPE, d],
                  subLanguage: "graphql",
                },
              },
              x = {
                className: "string",
                begin: "`",
                end: "`",
                contains: [e.BACKSLASH_ESCAPE, d],
              },
              E = {
                className: "comment",
                variants: [
                  e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                    relevance: 0,
                    contains: [
                      {
                        begin: "(?=@[A-Za-z]+)",
                        relevance: 0,
                        contains: [
                          { className: "doctag", begin: "@[A-Za-z]+" },
                          {
                            className: "type",
                            begin: "\\{",
                            end: "\\}",
                            excludeEnd: !0,
                            excludeBegin: !0,
                            relevance: 0,
                          },
                          {
                            className: "variable",
                            begin: m + "(?=\\s*(-)|$)",
                            endsParent: !0,
                            relevance: 0,
                          },
                          { begin: /(?=[^\n])\s/, relevance: 0 },
                        ],
                      },
                    ],
                  }),
                  e.C_BLOCK_COMMENT_MODE,
                  e.C_LINE_COMMENT_MODE,
                ],
              },
              D = [
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                f,
                p,
                k,
                x,
                { match: /\$\d+/ },
                u,
              ];
            d.contains = D.concat({
              begin: /\{/,
              end: /\}/,
              keywords: o,
              contains: ["self"].concat(D),
            });
            let C = [].concat(E, d.contains),
              A = C.concat([
                {
                  begin: /\(/,
                  end: /\)/,
                  keywords: o,
                  contains: ["self"].concat(C),
                },
              ]),
              F = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: o,
                contains: A,
              },
              S = {
                variants: [
                  {
                    match: [
                      /class/,
                      /\s+/,
                      m,
                      /\s+/,
                      /extends/,
                      /\s+/,
                      n.concat(m, "(", n.concat(/\./, m), ")*"),
                    ],
                    scope: {
                      1: "keyword",
                      3: "title.class",
                      5: "keyword",
                      7: "title.class.inherited",
                    },
                  },
                  {
                    match: [/class/, /\s+/, m],
                    scope: { 1: "keyword", 3: "title.class" },
                  },
                ],
              },
              N = {
                relevance: 0,
                match: n.either(
                  /\bJSON/,
                  /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
                  /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
                  /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
                ),
                className: "title.class",
                keywords: { _: [...b, ...y] },
              },
              O = {
                match: n.concat(
                  /\b/,
                  ((t = [..._, "super", "import"]),
                  n.concat("(?!", t.join("|"), ")")),
                  m,
                  n.lookahead(/\(/),
                ),
                className: "title.function",
                relevance: 0,
              },
              M = {
                begin: n.concat(
                  /\./,
                  n.lookahead(n.concat(m, /(?![0-9A-Za-z$_(])/)),
                ),
                end: m,
                excludeBegin: !0,
                keywords: "prototype",
                className: "property",
                relevance: 0,
              },
              T =
                "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
                e.UNDERSCORE_IDENT_RE +
                ")\\s*=>",
              B = {
                match: [
                  /const|var|let/,
                  /\s+/,
                  m,
                  /\s*/,
                  /=\s*/,
                  /(async\s*)?/,
                  n.lookahead(T),
                ],
                keywords: "async",
                className: { 1: "keyword", 3: "title.function" },
                contains: [F],
              };
            return {
              name: "JavaScript",
              aliases: ["js", "jsx", "mjs", "cjs"],
              keywords: o,
              exports: { PARAMS_CONTAINS: A, CLASS_REFERENCE: N },
              illegal: /#(?![$_A-z])/,
              contains: [
                e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
                {
                  label: "use_strict",
                  className: "meta",
                  relevance: 10,
                  begin: /^\s*['"]use (strict|asm)['"]/,
                },
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                f,
                p,
                k,
                x,
                E,
                { match: /\$\d+/ },
                u,
                N,
                {
                  className: "attr",
                  begin: m + n.lookahead(":"),
                  relevance: 0,
                },
                B,
                {
                  begin:
                    "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                  keywords: "return throw case",
                  relevance: 0,
                  contains: [
                    E,
                    e.REGEXP_MODE,
                    {
                      className: "function",
                      begin: T,
                      returnBegin: !0,
                      end: "\\s*=>",
                      contains: [
                        {
                          className: "params",
                          variants: [
                            { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                            { className: null, begin: /\(\s*\)/, skip: !0 },
                            {
                              begin: /\(/,
                              end: /\)/,
                              excludeBegin: !0,
                              excludeEnd: !0,
                              keywords: o,
                              contains: A,
                            },
                          ],
                        },
                      ],
                    },
                    { begin: /,/, relevance: 0 },
                    { match: /\s+/, relevance: 0 },
                    {
                      variants: [
                        { begin: i.begin, end: i.end },
                        { match: /<[A-Za-z0-9\\._:-]+\s*\/>/ },
                        {
                          begin: a.begin,
                          "on:begin": a.isTrulyOpeningTag,
                          end: a.end,
                        },
                      ],
                      subLanguage: "xml",
                      contains: [
                        {
                          begin: a.begin,
                          end: a.end,
                          skip: !0,
                          contains: ["self"],
                        },
                      ],
                    },
                  ],
                },
                {
                  variants: [
                    { match: [/function/, /\s+/, m, /(?=\s*\()/] },
                    { match: [/function/, /\s*(?=\()/] },
                  ],
                  className: { 1: "keyword", 3: "title.function" },
                  label: "func.def",
                  contains: [F],
                  illegal: /%/,
                },
                { beginKeywords: "while if switch catch for" },
                {
                  begin:
                    "\\b(?!function)" +
                    e.UNDERSCORE_IDENT_RE +
                    "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                  returnBegin: !0,
                  label: "func.def",
                  contains: [
                    F,
                    e.inherit(e.TITLE_MODE, {
                      begin: m,
                      className: "title.function",
                    }),
                  ],
                },
                { match: /\.\.\./, relevance: 0 },
                M,
                { match: "\\$" + m, relevance: 0 },
                {
                  match: [/\bconstructor(?=\s*\()/],
                  className: { 1: "title.function" },
                  contains: [F],
                },
                O,
                {
                  relevance: 0,
                  match: /\b[A-Z][A-Z_0-9]+\b/,
                  className: "variable.constant",
                },
                S,
                {
                  match: [/get|set/, /\s+/, m, /(?=\()/],
                  className: { 1: "keyword", 3: "title.function" },
                  contains: [{ begin: /\(\)/ }, F],
                },
                { match: /\$[(.]/ },
              ],
            };
          },
          json: function (e) {
            let t = ["true", "false", "null"],
              n = { scope: "literal", beginKeywords: t.join(" ") };
            return {
              name: "JSON",
              keywords: { literal: t },
              contains: [
                {
                  className: "attr",
                  begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
                  relevance: 1.01,
                },
                { match: /[{}[\],:]/, className: "punctuation", relevance: 0 },
                e.QUOTE_STRING_MODE,
                n,
                e.C_NUMBER_MODE,
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
              ],
              illegal: "\\S",
            };
          },
          kotlin: function (e) {
            let t = {
                keyword:
                  "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
                built_in:
                  "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
                literal: "true false null",
              },
              n = { className: "symbol", begin: e.UNDERSCORE_IDENT_RE + "@" },
              r = {
                className: "subst",
                begin: /\$\{/,
                end: /\}/,
                contains: [e.C_NUMBER_MODE],
              },
              i = {
                className: "variable",
                begin: "\\$" + e.UNDERSCORE_IDENT_RE,
              },
              a = {
                className: "string",
                variants: [
                  { begin: '"""', end: '"""(?=[^"])', contains: [i, r] },
                  {
                    begin: "'",
                    end: "'",
                    illegal: /\n/,
                    contains: [e.BACKSLASH_ESCAPE],
                  },
                  {
                    begin: '"',
                    end: '"',
                    illegal: /\n/,
                    contains: [e.BACKSLASH_ESCAPE, i, r],
                  },
                ],
              };
            r.contains.push(a);
            let o = {
                className: "meta",
                begin:
                  "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" +
                  e.UNDERSCORE_IDENT_RE +
                  ")?",
              },
              l = {
                className: "meta",
                begin: "@" + e.UNDERSCORE_IDENT_RE,
                contains: [
                  {
                    begin: /\(/,
                    end: /\)/,
                    contains: [e.inherit(a, { className: "string" }), "self"],
                  },
                ],
              },
              s = e.COMMENT("/\\*", "\\*/", {
                contains: [e.C_BLOCK_COMMENT_MODE],
              }),
              c = {
                variants: [
                  { className: "type", begin: e.UNDERSCORE_IDENT_RE },
                  { begin: /\(/, end: /\)/, contains: [] },
                ],
              };
            return (
              (c.variants[1].contains = [c]),
              (c.variants[1].contains = [c]),
              {
                name: "Kotlin",
                aliases: ["kt", "kts"],
                keywords: t,
                contains: [
                  e.COMMENT("/\\*\\*", "\\*/", {
                    relevance: 0,
                    contains: [{ className: "doctag", begin: "@[A-Za-z]+" }],
                  }),
                  e.C_LINE_COMMENT_MODE,
                  s,
                  {
                    className: "keyword",
                    begin: /\b(break|continue|return|this)\b/,
                    starts: {
                      contains: [{ className: "symbol", begin: /@\w+/ }],
                    },
                  },
                  n,
                  o,
                  l,
                  {
                    className: "function",
                    beginKeywords: "fun",
                    end: "[(]|$",
                    returnBegin: !0,
                    excludeEnd: !0,
                    keywords: t,
                    relevance: 5,
                    contains: [
                      {
                        begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                        returnBegin: !0,
                        relevance: 0,
                        contains: [e.UNDERSCORE_TITLE_MODE],
                      },
                      {
                        className: "type",
                        begin: /</,
                        end: />/,
                        keywords: "reified",
                        relevance: 0,
                      },
                      {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        endsParent: !0,
                        keywords: t,
                        relevance: 0,
                        contains: [
                          {
                            begin: /:/,
                            end: /[=,\/]/,
                            endsWithParent: !0,
                            contains: [c, e.C_LINE_COMMENT_MODE, s],
                            relevance: 0,
                          },
                          e.C_LINE_COMMENT_MODE,
                          s,
                          o,
                          l,
                          a,
                          e.C_NUMBER_MODE,
                        ],
                      },
                      s,
                    ],
                  },
                  {
                    begin: [
                      /class|interface|trait/,
                      /\s+/,
                      e.UNDERSCORE_IDENT_RE,
                    ],
                    beginScope: { 3: "title.class" },
                    keywords: "class interface trait",
                    end: /[:\{(]|$/,
                    excludeEnd: !0,
                    illegal: "extends implements",
                    contains: [
                      {
                        beginKeywords:
                          "public protected internal private constructor",
                      },
                      e.UNDERSCORE_TITLE_MODE,
                      {
                        className: "type",
                        begin: /</,
                        end: />/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        relevance: 0,
                      },
                      {
                        className: "type",
                        begin: /[,:]\s*/,
                        end: /[<\(,){\s]|$/,
                        excludeBegin: !0,
                        returnEnd: !0,
                      },
                      o,
                      l,
                    ],
                  },
                  a,
                  {
                    className: "meta",
                    begin: "^#!/usr/bin/env",
                    end: "$",
                    illegal: "\n",
                  },
                  D,
                ],
              }
            );
          },
          less: function (e) {
            let t = C(e),
              n = "[\\w-]+",
              r = "(" + n + "|@\\{" + n + "\\})",
              i = [],
              a = [],
              o = function (e) {
                return { className: "string", begin: "~?" + e + ".*?" + e };
              },
              l = function (e, t, n) {
                return { className: e, begin: t, relevance: n };
              },
              s = {
                $pattern: /[a-z-]+/,
                keyword: "and or not only",
                attribute: F.join(" "),
              };
            a.push(
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              o("'"),
              o('"'),
              t.CSS_NUMBER_MODE,
              {
                begin: "(url|data-uri)\\(",
                starts: {
                  className: "string",
                  end: "[\\)\\n]",
                  excludeEnd: !0,
                },
              },
              t.HEXCOLOR,
              {
                begin: "\\(",
                end: "\\)",
                contains: a,
                keywords: s,
                relevance: 0,
              },
              l("variable", "@@?" + n, 10),
              l("variable", "@\\{" + n + "\\}"),
              l("built_in", "~?`[^`]*?`"),
              {
                className: "attribute",
                begin: n + "\\s*:",
                end: ":",
                returnBegin: !0,
                excludeEnd: !0,
              },
              t.IMPORTANT,
              { beginKeywords: "and not" },
              t.FUNCTION_DISPATCH,
            );
            let c = a.concat({ begin: /\{/, end: /\}/, contains: i }),
              u = {
                beginKeywords: "when",
                endsWithParent: !0,
                contains: [{ beginKeywords: "and not" }].concat(a),
              },
              d = {
                begin: r + "\\s*:",
                returnBegin: !0,
                end: /[;}]/,
                relevance: 0,
                contains: [
                  { begin: /-(webkit|moz|ms|o)-/ },
                  t.CSS_VARIABLE,
                  {
                    className: "attribute",
                    begin: "\\b(" + O.join("|") + ")\\b",
                    end: /(?=:)/,
                    starts: {
                      endsWithParent: !0,
                      illegal: "[<=$]",
                      relevance: 0,
                      contains: a,
                    },
                  },
                ],
              },
              f = {
                variants: [
                  { begin: "[\\.#:&\\[>]", end: "[;{}]" },
                  { begin: r, end: /\{/ },
                ],
                returnBegin: !0,
                returnEnd: !0,
                illegal: "[<='$\"]",
                relevance: 0,
                contains: [
                  e.C_LINE_COMMENT_MODE,
                  e.C_BLOCK_COMMENT_MODE,
                  u,
                  l("keyword", "all\\b"),
                  l("variable", "@\\{" + n + "\\}"),
                  {
                    begin: "\\b(" + A.join("|") + ")\\b",
                    className: "selector-tag",
                  },
                  t.CSS_NUMBER_MODE,
                  l("selector-tag", r, 0),
                  l("selector-id", "#" + r),
                  l("selector-class", "\\." + r, 0),
                  l("selector-tag", "&", 0),
                  t.ATTRIBUTE_SELECTOR_MODE,
                  {
                    className: "selector-pseudo",
                    begin: ":(" + S.join("|") + ")",
                  },
                  {
                    className: "selector-pseudo",
                    begin: ":(:)?(" + N.join("|") + ")",
                  },
                  { begin: /\(/, end: /\)/, relevance: 0, contains: c },
                  { begin: "!important" },
                  t.FUNCTION_DISPATCH,
                ],
              },
              p = {
                begin: n + ":(:)?" + `(${M.join("|")})`,
                returnBegin: !0,
                contains: [f],
              };
            return (
              i.push(
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
                {
                  className: "keyword",
                  begin:
                    "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
                  starts: {
                    end: "[;{}]",
                    keywords: s,
                    returnEnd: !0,
                    contains: a,
                    relevance: 0,
                  },
                },
                {
                  className: "variable",
                  variants: [
                    { begin: "@" + n + "\\s*:", relevance: 15 },
                    { begin: "@" + n },
                  ],
                  starts: { end: "[;}]", returnEnd: !0, contains: c },
                },
                p,
                d,
                f,
                u,
                t.FUNCTION_DISPATCH,
              ),
              {
                name: "Less",
                case_insensitive: !0,
                illegal: "[=>'/<($\"]",
                contains: i,
              }
            );
          },
          lua: function (e) {
            let t = "\\[=*\\[",
              n = "\\]=*\\]",
              r = { begin: t, end: n, contains: ["self"] },
              i = [
                e.COMMENT("--(?!" + t + ")", "$"),
                e.COMMENT("--" + t, n, { contains: [r], relevance: 10 }),
              ];
            return {
              name: "Lua",
              keywords: {
                $pattern: e.UNDERSCORE_IDENT_RE,
                literal: "true false nil",
                keyword:
                  "and break do else elseif end for goto if in local not or repeat return then until while",
                built_in:
                  "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove",
              },
              contains: i.concat([
                {
                  className: "function",
                  beginKeywords: "function",
                  end: "\\)",
                  contains: [
                    e.inherit(e.TITLE_MODE, {
                      begin:
                        "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*",
                    }),
                    {
                      className: "params",
                      begin: "\\(",
                      endsWithParent: !0,
                      contains: i,
                    },
                  ].concat(i),
                },
                e.C_NUMBER_MODE,
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                {
                  className: "string",
                  begin: t,
                  end: n,
                  contains: [r],
                  relevance: 5,
                },
              ]),
            };
          },
          makefile: function (e) {
            let t = {
                className: "variable",
                variants: [
                  {
                    begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
                    contains: [e.BACKSLASH_ESCAPE],
                  },
                  { begin: /\$[@%<?\^\+\*]/ },
                ],
              },
              n = {
                className: "string",
                begin: /"/,
                end: /"/,
                contains: [e.BACKSLASH_ESCAPE, t],
              },
              r = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" };
            return {
              name: "Makefile",
              aliases: ["mk", "mak", "make"],
              keywords: {
                $pattern: /[\w-]+/,
                keyword:
                  "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
              },
              contains: [
                e.HASH_COMMENT_MODE,
                t,
                n,
                {
                  className: "variable",
                  begin: /\$\([\w-]+\s/,
                  end: /\)/,
                  keywords: {
                    built_in:
                      "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value",
                  },
                  contains: [t],
                },
                r,
                {
                  className: "meta",
                  begin: /^\.PHONY:/,
                  end: /$/,
                  keywords: { $pattern: /[\.\w]+/, keyword: ".PHONY" },
                },
                {
                  className: "section",
                  begin: /^[^\s]+:/,
                  end: /$/,
                  contains: [t],
                },
              ],
            };
          },
          markdown: function (e) {
            let t = e.regex,
              n = {
                begin: /<\/?[A-Za-z_]/,
                end: ">",
                subLanguage: "xml",
                relevance: 0,
              },
              r = {
                variants: [
                  { begin: /\[.+?\]\[.*?\]/, relevance: 0 },
                  {
                    begin:
                      /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                    relevance: 2,
                  },
                  {
                    begin: t.concat(
                      /\[.+?\]\(/,
                      /[A-Za-z][A-Za-z0-9+.-]*/,
                      /:\/\/.*?\)/,
                    ),
                    relevance: 2,
                  },
                  { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
                  { begin: /\[.*?\]\(.*?\)/, relevance: 0 },
                ],
                returnBegin: !0,
                contains: [
                  { match: /\[(?=\])/ },
                  {
                    className: "string",
                    relevance: 0,
                    begin: "\\[",
                    end: "\\]",
                    excludeBegin: !0,
                    returnEnd: !0,
                  },
                  {
                    className: "link",
                    relevance: 0,
                    begin: "\\]\\(",
                    end: "\\)",
                    excludeBegin: !0,
                    excludeEnd: !0,
                  },
                  {
                    className: "symbol",
                    relevance: 0,
                    begin: "\\]\\[",
                    end: "\\]",
                    excludeBegin: !0,
                    excludeEnd: !0,
                  },
                ],
              },
              i = {
                className: "strong",
                contains: [],
                variants: [
                  { begin: /_{2}(?!\s)/, end: /_{2}/ },
                  { begin: /\*{2}(?!\s)/, end: /\*{2}/ },
                ],
              },
              a = {
                className: "emphasis",
                contains: [],
                variants: [
                  { begin: /\*(?![*\s])/, end: /\*/ },
                  { begin: /_(?![_\s])/, end: /_/, relevance: 0 },
                ],
              },
              o = e.inherit(i, { contains: [] }),
              l = e.inherit(a, { contains: [] });
            i.contains.push(l), a.contains.push(o);
            let s = [n, r];
            return (
              [i, a, o, l].forEach((e) => {
                e.contains = e.contains.concat(s);
              }),
              {
                name: "Markdown",
                aliases: ["md", "mkdown", "mkd"],
                contains: [
                  {
                    className: "section",
                    variants: [
                      {
                        begin: "^#{1,6}",
                        end: "$",
                        contains: (s = s.concat(i, a)),
                      },
                      {
                        begin: "(?=^.+?\\n[=-]{2,}$)",
                        contains: [
                          { begin: "^[=-]*$" },
                          { begin: "^", end: "\\n", contains: s },
                        ],
                      },
                    ],
                  },
                  n,
                  {
                    className: "bullet",
                    begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
                    end: "\\s+",
                    excludeEnd: !0,
                  },
                  i,
                  a,
                  {
                    className: "quote",
                    begin: "^>\\s+",
                    contains: s,
                    end: "$",
                  },
                  {
                    className: "code",
                    variants: [
                      { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
                      { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
                      { begin: "```", end: "```+[ ]*$" },
                      { begin: "~~~", end: "~~~+[ ]*$" },
                      { begin: "`.+?`" },
                      {
                        begin: "(?=^( {4}|\\t))",
                        contains: [{ begin: "^( {4}|\\t)", end: "(\\n)$" }],
                        relevance: 0,
                      },
                    ],
                  },
                  { begin: "^[-\\*]{3,}", end: "$" },
                  r,
                  {
                    begin: /^\[[^\n]+\]:/,
                    returnBegin: !0,
                    contains: [
                      {
                        className: "symbol",
                        begin: /\[/,
                        end: /\]/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                      },
                      {
                        className: "link",
                        begin: /:\s*/,
                        end: /$/,
                        excludeBegin: !0,
                      },
                    ],
                  },
                ],
              }
            );
          },
          objectivec: function (e) {
            let t = /[a-zA-Z@][a-zA-Z0-9_]*/,
              n = {
                $pattern: t,
                keyword: [
                  "@interface",
                  "@class",
                  "@protocol",
                  "@implementation",
                ],
              };
            return {
              name: "Objective-C",
              aliases: ["mm", "objc", "obj-c", "obj-c++", "objective-c++"],
              keywords: {
                "variable.language": ["this", "super"],
                $pattern: t,
                keyword: [
                  "while",
                  "export",
                  "sizeof",
                  "typedef",
                  "const",
                  "struct",
                  "for",
                  "union",
                  "volatile",
                  "static",
                  "mutable",
                  "if",
                  "do",
                  "return",
                  "goto",
                  "enum",
                  "else",
                  "break",
                  "extern",
                  "asm",
                  "case",
                  "default",
                  "register",
                  "explicit",
                  "typename",
                  "switch",
                  "continue",
                  "inline",
                  "readonly",
                  "assign",
                  "readwrite",
                  "self",
                  "@synchronized",
                  "id",
                  "typeof",
                  "nonatomic",
                  "IBOutlet",
                  "IBAction",
                  "strong",
                  "weak",
                  "copy",
                  "in",
                  "out",
                  "inout",
                  "bycopy",
                  "byref",
                  "oneway",
                  "__strong",
                  "__weak",
                  "__block",
                  "__autoreleasing",
                  "@private",
                  "@protected",
                  "@public",
                  "@try",
                  "@property",
                  "@end",
                  "@throw",
                  "@catch",
                  "@finally",
                  "@autoreleasepool",
                  "@synthesize",
                  "@dynamic",
                  "@selector",
                  "@optional",
                  "@required",
                  "@encode",
                  "@package",
                  "@import",
                  "@defs",
                  "@compatibility_alias",
                  "__bridge",
                  "__bridge_transfer",
                  "__bridge_retained",
                  "__bridge_retain",
                  "__covariant",
                  "__contravariant",
                  "__kindof",
                  "_Nonnull",
                  "_Nullable",
                  "_Null_unspecified",
                  "__FUNCTION__",
                  "__PRETTY_FUNCTION__",
                  "__attribute__",
                  "getter",
                  "setter",
                  "retain",
                  "unsafe_unretained",
                  "nonnull",
                  "nullable",
                  "null_unspecified",
                  "null_resettable",
                  "class",
                  "instancetype",
                  "NS_DESIGNATED_INITIALIZER",
                  "NS_UNAVAILABLE",
                  "NS_REQUIRES_SUPER",
                  "NS_RETURNS_INNER_POINTER",
                  "NS_INLINE",
                  "NS_AVAILABLE",
                  "NS_DEPRECATED",
                  "NS_ENUM",
                  "NS_OPTIONS",
                  "NS_SWIFT_UNAVAILABLE",
                  "NS_ASSUME_NONNULL_BEGIN",
                  "NS_ASSUME_NONNULL_END",
                  "NS_REFINED_FOR_SWIFT",
                  "NS_SWIFT_NAME",
                  "NS_SWIFT_NOTHROW",
                  "NS_DURING",
                  "NS_HANDLER",
                  "NS_ENDHANDLER",
                  "NS_VALUERETURN",
                  "NS_VOIDRETURN",
                ],
                literal: [
                  "false",
                  "true",
                  "FALSE",
                  "TRUE",
                  "nil",
                  "YES",
                  "NO",
                  "NULL",
                ],
                built_in: [
                  "dispatch_once_t",
                  "dispatch_queue_t",
                  "dispatch_sync",
                  "dispatch_async",
                  "dispatch_once",
                ],
                type: [
                  "int",
                  "float",
                  "char",
                  "unsigned",
                  "signed",
                  "short",
                  "long",
                  "double",
                  "wchar_t",
                  "unichar",
                  "void",
                  "bool",
                  "BOOL",
                  "id|0",
                  "_Bool",
                ],
              },
              illegal: "</",
              contains: [
                {
                  className: "built_in",
                  begin:
                    "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+",
                },
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
                e.C_NUMBER_MODE,
                e.QUOTE_STRING_MODE,
                e.APOS_STRING_MODE,
                {
                  className: "string",
                  variants: [
                    {
                      begin: '@"',
                      end: '"',
                      illegal: "\\n",
                      contains: [e.BACKSLASH_ESCAPE],
                    },
                  ],
                },
                {
                  className: "meta",
                  begin: /#\s*[a-z]+\b/,
                  end: /$/,
                  keywords: {
                    keyword:
                      "if else elif endif define undef warning error line pragma ifdef ifndef include",
                  },
                  contains: [
                    { begin: /\\\n/, relevance: 0 },
                    e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
                    {
                      className: "string",
                      begin: /<.*?>/,
                      end: /$/,
                      illegal: "\\n",
                    },
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE,
                  ],
                },
                {
                  className: "class",
                  begin: "(" + n.keyword.join("|") + ")\\b",
                  end: /(\{|$)/,
                  excludeEnd: !0,
                  keywords: n,
                  contains: [e.UNDERSCORE_TITLE_MODE],
                },
                { begin: "\\." + e.UNDERSCORE_IDENT_RE, relevance: 0 },
              ],
            };
          },
          perl: function (e) {
            let t = e.regex,
              n = /[dualxmsipngr]{0,12}/,
              r = {
                $pattern: /[\w.]+/,
                keyword:
                  "abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0",
              },
              i = {
                className: "subst",
                begin: "[$@]\\{",
                end: "\\}",
                keywords: r,
              },
              a = { begin: /->\{/, end: /\}/ },
              o = {
                variants: [
                  { begin: /\$\d/ },
                  {
                    begin: t.concat(
                      /[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
                      "(?![A-Za-z])(?![@$%])",
                    ),
                  },
                  { begin: /[$%@][^\s\w{]/, relevance: 0 },
                ],
              },
              l = [e.BACKSLASH_ESCAPE, i, o],
              s = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
              c = (e, r, i = "\\1") => {
                let a = "\\1" === i ? i : t.concat(i, r);
                return t.concat(
                  t.concat("(?:", e, ")"),
                  r,
                  /(?:\\.|[^\\\/])*?/,
                  a,
                  /(?:\\.|[^\\\/])*?/,
                  i,
                  n,
                );
              },
              u = (e, r, i) =>
                t.concat(t.concat("(?:", e, ")"), r, /(?:\\.|[^\\\/])*?/, i, n),
              d = [
                o,
                e.HASH_COMMENT_MODE,
                e.COMMENT(/^=\w/, /=cut/, { endsWithParent: !0 }),
                a,
                {
                  className: "string",
                  contains: l,
                  variants: [
                    { begin: "q[qwxr]?\\s*\\(", end: "\\)", relevance: 5 },
                    { begin: "q[qwxr]?\\s*\\[", end: "\\]", relevance: 5 },
                    { begin: "q[qwxr]?\\s*\\{", end: "\\}", relevance: 5 },
                    { begin: "q[qwxr]?\\s*\\|", end: "\\|", relevance: 5 },
                    { begin: "q[qwxr]?\\s*<", end: ">", relevance: 5 },
                    { begin: "qw\\s+q", end: "q", relevance: 5 },
                    { begin: "'", end: "'", contains: [e.BACKSLASH_ESCAPE] },
                    { begin: '"', end: '"' },
                    { begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE] },
                    { begin: /\{\w+\}/, relevance: 0 },
                    { begin: "-?\\w+\\s*=>", relevance: 0 },
                  ],
                },
                {
                  className: "number",
                  begin:
                    "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                  relevance: 0,
                },
                {
                  begin:
                    "(\\/\\/|" +
                    e.RE_STARTERS_RE +
                    "|\\b(split|return|print|reverse|grep)\\b)\\s*",
                  keywords: "split return print reverse grep",
                  relevance: 0,
                  contains: [
                    e.HASH_COMMENT_MODE,
                    {
                      className: "regexp",
                      variants: [
                        { begin: c("s|tr|y", t.either(...s, { capture: !0 })) },
                        { begin: c("s|tr|y", "\\(", "\\)") },
                        { begin: c("s|tr|y", "\\[", "\\]") },
                        { begin: c("s|tr|y", "\\{", "\\}") },
                      ],
                      relevance: 2,
                    },
                    {
                      className: "regexp",
                      variants: [
                        { begin: /(m|qr)\/\//, relevance: 0 },
                        { begin: u("(?:m|qr)?", /\//, /\//) },
                        {
                          begin: u(
                            "m|qr",
                            t.either(...s, { capture: !0 }),
                            /\1/,
                          ),
                        },
                        { begin: u("m|qr", /\(/, /\)/) },
                        { begin: u("m|qr", /\[/, /\]/) },
                        { begin: u("m|qr", /\{/, /\}/) },
                      ],
                    },
                  ],
                },
                {
                  className: "function",
                  beginKeywords: "sub",
                  end: "(\\s*\\(.*?\\))?[;{]",
                  excludeEnd: !0,
                  relevance: 5,
                  contains: [e.TITLE_MODE],
                },
                { begin: "-\\w\\b", relevance: 0 },
                {
                  begin: "^__DATA__$",
                  end: "^__END__$",
                  subLanguage: "mojolicious",
                  contains: [
                    { begin: "^@@.*", end: "$", className: "comment" },
                  ],
                },
              ];
            return (
              (i.contains = d),
              (a.contains = d),
              { name: "Perl", aliases: ["pl", "pm"], keywords: r, contains: d }
            );
          },
          php: function (e) {
            let t = e.regex,
              n = /(?![A-Za-z0-9])(?![$])/,
              r = t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, n),
              i = t.concat(
                /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
                n,
              ),
              a = { scope: "variable", match: "\\$+" + r },
              o = {
                scope: "subst",
                variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }],
              },
              l = e.inherit(e.APOS_STRING_MODE, { illegal: null }),
              s = e.inherit(e.QUOTE_STRING_MODE, {
                illegal: null,
                contains: e.QUOTE_STRING_MODE.contains.concat(o),
              }),
              c = {
                begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
                end: /[ \t]*(\w+)\b/,
                contains: e.QUOTE_STRING_MODE.contains.concat(o),
                "on:begin": (e, t) => {
                  t.data._beginMatch = e[1] || e[2];
                },
                "on:end": (e, t) => {
                  t.data._beginMatch !== e[1] && t.ignoreMatch();
                },
              },
              u = e.END_SAME_AS_BEGIN({
                begin: /<<<[ \t]*'(\w+)'\n/,
                end: /[ \t]*(\w+)\b/,
              }),
              d = "[ 	\n]",
              f = { scope: "string", variants: [s, l, c, u] },
              p = {
                scope: "number",
                variants: [
                  { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
                  { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
                  { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
                  {
                    begin:
                      "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?",
                  },
                ],
                relevance: 0,
              },
              m = ["false", "null", "true"],
              g = [
                "__CLASS__",
                "__DIR__",
                "__FILE__",
                "__FUNCTION__",
                "__COMPILER_HALT_OFFSET__",
                "__LINE__",
                "__METHOD__",
                "__NAMESPACE__",
                "__TRAIT__",
                "die",
                "echo",
                "exit",
                "include",
                "include_once",
                "print",
                "require",
                "require_once",
                "array",
                "abstract",
                "and",
                "as",
                "binary",
                "bool",
                "boolean",
                "break",
                "callable",
                "case",
                "catch",
                "class",
                "clone",
                "const",
                "continue",
                "declare",
                "default",
                "do",
                "double",
                "else",
                "elseif",
                "empty",
                "enddeclare",
                "endfor",
                "endforeach",
                "endif",
                "endswitch",
                "endwhile",
                "enum",
                "eval",
                "extends",
                "final",
                "finally",
                "float",
                "for",
                "foreach",
                "from",
                "global",
                "goto",
                "if",
                "implements",
                "instanceof",
                "insteadof",
                "int",
                "integer",
                "interface",
                "isset",
                "iterable",
                "list",
                "match|0",
                "mixed",
                "new",
                "never",
                "object",
                "or",
                "private",
                "protected",
                "public",
                "readonly",
                "real",
                "return",
                "string",
                "switch",
                "throw",
                "trait",
                "try",
                "unset",
                "use",
                "var",
                "void",
                "while",
                "xor",
                "yield",
              ],
              h = [
                "Error|0",
                "AppendIterator",
                "ArgumentCountError",
                "ArithmeticError",
                "ArrayIterator",
                "ArrayObject",
                "AssertionError",
                "BadFunctionCallException",
                "BadMethodCallException",
                "CachingIterator",
                "CallbackFilterIterator",
                "CompileError",
                "Countable",
                "DirectoryIterator",
                "DivisionByZeroError",
                "DomainException",
                "EmptyIterator",
                "ErrorException",
                "Exception",
                "FilesystemIterator",
                "FilterIterator",
                "GlobIterator",
                "InfiniteIterator",
                "InvalidArgumentException",
                "IteratorIterator",
                "LengthException",
                "LimitIterator",
                "LogicException",
                "MultipleIterator",
                "NoRewindIterator",
                "OutOfBoundsException",
                "OutOfRangeException",
                "OuterIterator",
                "OverflowException",
                "ParentIterator",
                "ParseError",
                "RangeException",
                "RecursiveArrayIterator",
                "RecursiveCachingIterator",
                "RecursiveCallbackFilterIterator",
                "RecursiveDirectoryIterator",
                "RecursiveFilterIterator",
                "RecursiveIterator",
                "RecursiveIteratorIterator",
                "RecursiveRegexIterator",
                "RecursiveTreeIterator",
                "RegexIterator",
                "RuntimeException",
                "SeekableIterator",
                "SplDoublyLinkedList",
                "SplFileInfo",
                "SplFileObject",
                "SplFixedArray",
                "SplHeap",
                "SplMaxHeap",
                "SplMinHeap",
                "SplObjectStorage",
                "SplObserver",
                "SplPriorityQueue",
                "SplQueue",
                "SplStack",
                "SplSubject",
                "SplTempFileObject",
                "TypeError",
                "UnderflowException",
                "UnexpectedValueException",
                "UnhandledMatchError",
                "ArrayAccess",
                "BackedEnum",
                "Closure",
                "Fiber",
                "Generator",
                "Iterator",
                "IteratorAggregate",
                "Serializable",
                "Stringable",
                "Throwable",
                "Traversable",
                "UnitEnum",
                "WeakReference",
                "WeakMap",
                "Directory",
                "__PHP_Incomplete_Class",
                "parent",
                "php_user_filter",
                "self",
                "static",
                "stdClass",
              ],
              b = {
                keyword: g,
                literal: ((e) => {
                  let t = [];
                  return (
                    e.forEach((e) => {
                      t.push(e),
                        e.toLowerCase() === e
                          ? t.push(e.toUpperCase())
                          : t.push(e.toLowerCase());
                    }),
                    t
                  );
                })(m),
                built_in: h,
              },
              y = (e) => e.map((e) => e.replace(/\|\d+$/, "")),
              _ = {
                variants: [
                  {
                    match: [
                      /new/,
                      t.concat(d, "+"),
                      t.concat("(?!", y(h).join("\\b|"), "\\b)"),
                      i,
                    ],
                    scope: { 1: "keyword", 4: "title.class" },
                  },
                ],
              },
              v = t.concat(r, "\\b(?!\\()"),
              w = {
                variants: [
                  {
                    match: [t.concat(/::/, t.lookahead(/(?!class\b)/)), v],
                    scope: { 2: "variable.constant" },
                  },
                  { match: [/::/, /class/], scope: { 2: "variable.language" } },
                  {
                    match: [i, t.concat(/::/, t.lookahead(/(?!class\b)/)), v],
                    scope: { 1: "title.class", 3: "variable.constant" },
                  },
                  {
                    match: [i, t.concat("::", t.lookahead(/(?!class\b)/))],
                    scope: { 1: "title.class" },
                  },
                  {
                    match: [i, /::/, /class/],
                    scope: { 1: "title.class", 3: "variable.language" },
                  },
                ],
              },
              k = {
                scope: "attr",
                match: t.concat(r, t.lookahead(":"), t.lookahead(/(?!::)/)),
              },
              x = {
                relevance: 0,
                begin: /\(/,
                end: /\)/,
                keywords: b,
                contains: [k, a, w, e.C_BLOCK_COMMENT_MODE, f, p, _],
              },
              E = {
                relevance: 0,
                match: [
                  /\b/,
                  t.concat(
                    "(?!fn\\b|function\\b|",
                    y(g).join("\\b|"),
                    "|",
                    y(h).join("\\b|"),
                    "\\b)",
                  ),
                  r,
                  t.concat(d, "*"),
                  t.lookahead(/(?=\()/),
                ],
                scope: { 3: "title.function.invoke" },
                contains: [x],
              };
            x.contains.push(E);
            let D = [k, w, e.C_BLOCK_COMMENT_MODE, f, p, _];
            return {
              case_insensitive: !1,
              keywords: b,
              contains: [
                {
                  begin: t.concat(/#\[\s*/, i),
                  beginScope: "meta",
                  end: /]/,
                  endScope: "meta",
                  keywords: { literal: m, keyword: ["new", "array"] },
                  contains: [
                    {
                      begin: /\[/,
                      end: /]/,
                      keywords: { literal: m, keyword: ["new", "array"] },
                      contains: ["self", ...D],
                    },
                    ...D,
                    { scope: "meta", match: i },
                  ],
                },
                e.HASH_COMMENT_MODE,
                e.COMMENT("//", "$"),
                e.COMMENT("/\\*", "\\*/", {
                  contains: [{ scope: "doctag", match: "@[A-Za-z]+" }],
                }),
                {
                  match: /__halt_compiler\(\);/,
                  keywords: "__halt_compiler",
                  starts: {
                    scope: "comment",
                    end: e.MATCH_NOTHING_RE,
                    contains: [{ match: /\?>/, scope: "meta", endsParent: !0 }],
                  },
                },
                {
                  scope: "meta",
                  variants: [
                    { begin: /<\?php/, relevance: 10 },
                    { begin: /<\?=/ },
                    { begin: /<\?/, relevance: 0.1 },
                    { begin: /\?>/ },
                  ],
                },
                { scope: "variable.language", match: /\$this\b/ },
                a,
                E,
                w,
                {
                  match: [/const/, /\s/, r],
                  scope: { 1: "keyword", 3: "variable.constant" },
                },
                _,
                {
                  scope: "function",
                  relevance: 0,
                  beginKeywords: "fn function",
                  end: /[;{]/,
                  excludeEnd: !0,
                  illegal: "[$%\\[]",
                  contains: [
                    { beginKeywords: "use" },
                    e.UNDERSCORE_TITLE_MODE,
                    { begin: "=>", endsParent: !0 },
                    {
                      scope: "params",
                      begin: "\\(",
                      end: "\\)",
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: b,
                      contains: ["self", a, w, e.C_BLOCK_COMMENT_MODE, f, p],
                    },
                  ],
                },
                {
                  scope: "class",
                  variants: [
                    { beginKeywords: "enum", illegal: /[($"]/ },
                    {
                      beginKeywords: "class interface trait",
                      illegal: /[:($"]/,
                    },
                  ],
                  relevance: 0,
                  end: /\{/,
                  excludeEnd: !0,
                  contains: [
                    { beginKeywords: "extends implements" },
                    e.UNDERSCORE_TITLE_MODE,
                  ],
                },
                {
                  beginKeywords: "namespace",
                  relevance: 0,
                  end: ";",
                  illegal: /[.']/,
                  contains: [
                    e.inherit(e.UNDERSCORE_TITLE_MODE, {
                      scope: "title.class",
                    }),
                  ],
                },
                {
                  beginKeywords: "use",
                  relevance: 0,
                  end: ";",
                  contains: [
                    { match: /\b(as|const|function)\b/, scope: "keyword" },
                    e.UNDERSCORE_TITLE_MODE,
                  ],
                },
                f,
                p,
              ],
            };
          },
          "php-template": function (e) {
            return {
              name: "PHP template",
              subLanguage: "xml",
              contains: [
                {
                  begin: /<\?(php|=)?/,
                  end: /\?>/,
                  subLanguage: "php",
                  contains: [
                    { begin: "/\\*", end: "\\*/", skip: !0 },
                    { begin: 'b"', end: '"', skip: !0 },
                    { begin: "b'", end: "'", skip: !0 },
                    e.inherit(e.APOS_STRING_MODE, {
                      illegal: null,
                      className: null,
                      contains: null,
                      skip: !0,
                    }),
                    e.inherit(e.QUOTE_STRING_MODE, {
                      illegal: null,
                      className: null,
                      contains: null,
                      skip: !0,
                    }),
                  ],
                },
              ],
            };
          },
          plaintext: function (e) {
            return {
              name: "Plain text",
              aliases: ["text", "txt"],
              disableAutodetect: !0,
            };
          },
          python: function (e) {
            let t = e.regex,
              n = /[\p{XID_Start}_]\p{XID_Continue}*/u,
              r = [
                "and",
                "as",
                "assert",
                "async",
                "await",
                "break",
                "case",
                "class",
                "continue",
                "def",
                "del",
                "elif",
                "else",
                "except",
                "finally",
                "for",
                "from",
                "global",
                "if",
                "import",
                "in",
                "is",
                "lambda",
                "match",
                "nonlocal|10",
                "not",
                "or",
                "pass",
                "raise",
                "return",
                "try",
                "while",
                "with",
                "yield",
              ],
              i = {
                $pattern: /[A-Za-z]\w+|__\w+__/,
                keyword: r,
                built_in: [
                  "__import__",
                  "abs",
                  "all",
                  "any",
                  "ascii",
                  "bin",
                  "bool",
                  "breakpoint",
                  "bytearray",
                  "bytes",
                  "callable",
                  "chr",
                  "classmethod",
                  "compile",
                  "complex",
                  "delattr",
                  "dict",
                  "dir",
                  "divmod",
                  "enumerate",
                  "eval",
                  "exec",
                  "filter",
                  "float",
                  "format",
                  "frozenset",
                  "getattr",
                  "globals",
                  "hasattr",
                  "hash",
                  "help",
                  "hex",
                  "id",
                  "input",
                  "int",
                  "isinstance",
                  "issubclass",
                  "iter",
                  "len",
                  "list",
                  "locals",
                  "map",
                  "max",
                  "memoryview",
                  "min",
                  "next",
                  "object",
                  "oct",
                  "open",
                  "ord",
                  "pow",
                  "print",
                  "property",
                  "range",
                  "repr",
                  "reversed",
                  "round",
                  "set",
                  "setattr",
                  "slice",
                  "sorted",
                  "staticmethod",
                  "str",
                  "sum",
                  "super",
                  "tuple",
                  "type",
                  "vars",
                  "zip",
                ],
                literal: [
                  "__debug__",
                  "Ellipsis",
                  "False",
                  "None",
                  "NotImplemented",
                  "True",
                ],
                type: [
                  "Any",
                  "Callable",
                  "Coroutine",
                  "Dict",
                  "List",
                  "Literal",
                  "Generic",
                  "Optional",
                  "Sequence",
                  "Set",
                  "Tuple",
                  "Type",
                  "Union",
                ],
              },
              a = { className: "meta", begin: /^(>>>|\.\.\.) / },
              o = {
                className: "subst",
                begin: /\{/,
                end: /\}/,
                keywords: i,
                illegal: /#/,
              },
              l = { begin: /\{\{/, relevance: 0 },
              s = {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE],
                variants: [
                  {
                    begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                    end: /'''/,
                    contains: [e.BACKSLASH_ESCAPE, a],
                    relevance: 10,
                  },
                  {
                    begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                    end: /"""/,
                    contains: [e.BACKSLASH_ESCAPE, a],
                    relevance: 10,
                  },
                  {
                    begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                    end: /'''/,
                    contains: [e.BACKSLASH_ESCAPE, a, l, o],
                  },
                  {
                    begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                    end: /"""/,
                    contains: [e.BACKSLASH_ESCAPE, a, l, o],
                  },
                  { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
                  { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
                  { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
                  { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
                  {
                    begin: /([fF][rR]|[rR][fF]|[fF])'/,
                    end: /'/,
                    contains: [e.BACKSLASH_ESCAPE, l, o],
                  },
                  {
                    begin: /([fF][rR]|[rR][fF]|[fF])"/,
                    end: /"/,
                    contains: [e.BACKSLASH_ESCAPE, l, o],
                  },
                  e.APOS_STRING_MODE,
                  e.QUOTE_STRING_MODE,
                ],
              },
              c = "[0-9](_?[0-9])*",
              u = `(\\b(${c}))?\\.(${c})|\\b(${c})\\.`,
              d = `\\b|${r.join("|")}`,
              f = {
                className: "number",
                relevance: 0,
                variants: [
                  { begin: `(\\b(${c})|(${u}))[eE][+-]?(${c})[jJ]?(?=${d})` },
                  { begin: `(${u})[jJ]?` },
                  { begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})` },
                  { begin: `\\b0[bB](_?[01])+[lL]?(?=${d})` },
                  { begin: `\\b0[oO](_?[0-7])+[lL]?(?=${d})` },
                  { begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})` },
                  { begin: `\\b(${c})[jJ](?=${d})` },
                ],
              },
              p = {
                className: "comment",
                begin: t.lookahead(/# type:/),
                end: /$/,
                keywords: i,
                contains: [
                  { begin: /# type:/ },
                  { begin: /#/, end: /\b\B/, endsWithParent: !0 },
                ],
              },
              m = {
                className: "params",
                variants: [
                  { className: "", begin: /\(\s*\)/, skip: !0 },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: i,
                    contains: ["self", a, f, s, e.HASH_COMMENT_MODE],
                  },
                ],
              };
            return (
              (o.contains = [s, f, a]),
              {
                name: "Python",
                aliases: ["py", "gyp", "ipython"],
                unicodeRegex: !0,
                keywords: i,
                illegal: /(<\/|\?)|=>/,
                contains: [
                  a,
                  f,
                  { begin: /\bself\b/ },
                  { beginKeywords: "if", relevance: 0 },
                  s,
                  p,
                  e.HASH_COMMENT_MODE,
                  {
                    match: [/\bdef/, /\s+/, n],
                    scope: { 1: "keyword", 3: "title.function" },
                    contains: [m],
                  },
                  {
                    variants: [
                      {
                        match: [
                          /\bclass/,
                          /\s+/,
                          n,
                          /\s*/,
                          /\(\s*/,
                          n,
                          /\s*\)/,
                        ],
                      },
                      { match: [/\bclass/, /\s+/, n] },
                    ],
                    scope: {
                      1: "keyword",
                      3: "title.class",
                      6: "title.class.inherited",
                    },
                  },
                  {
                    className: "meta",
                    begin: /^[\t ]*@/,
                    end: /(?=#)|$/,
                    contains: [f, m, s],
                  },
                ],
              }
            );
          },
          "python-repl": function (e) {
            return {
              aliases: ["pycon"],
              contains: [
                {
                  className: "meta.prompt",
                  starts: {
                    end: / |$/,
                    starts: { end: "$", subLanguage: "python" },
                  },
                  variants: [
                    { begin: /^>>>(?=[ ]|$)/ },
                    { begin: /^\.\.\.(?=[ ]|$)/ },
                  ],
                },
              ],
            };
          },
          r: function (e) {
            let t = e.regex,
              n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
              r = t.either(
                /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
                /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
                /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/,
              ),
              i =
                /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,
              a = t.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
            return {
              name: "R",
              keywords: {
                $pattern: n,
                keyword: "function if in break next repeat else for while",
                literal:
                  "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
                built_in:
                  "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm",
              },
              contains: [
                e.COMMENT(/#'/, /$/, {
                  contains: [
                    {
                      scope: "doctag",
                      match: /@examples/,
                      starts: {
                        end: t.lookahead(
                          t.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/),
                        ),
                        endsParent: !0,
                      },
                    },
                    {
                      scope: "doctag",
                      begin: "@param",
                      end: /$/,
                      contains: [
                        {
                          scope: "variable",
                          variants: [
                            { match: n },
                            { match: /`(?:\\.|[^`\\])+`/ },
                          ],
                          endsParent: !0,
                        },
                      ],
                    },
                    { scope: "doctag", match: /@[a-zA-Z]+/ },
                    { scope: "keyword", match: /\\[a-zA-Z]+/ },
                  ],
                }),
                e.HASH_COMMENT_MODE,
                {
                  scope: "string",
                  contains: [e.BACKSLASH_ESCAPE],
                  variants: [
                    e.END_SAME_AS_BEGIN({
                      begin: /[rR]"(-*)\(/,
                      end: /\)(-*)"/,
                    }),
                    e.END_SAME_AS_BEGIN({
                      begin: /[rR]"(-*)\{/,
                      end: /\}(-*)"/,
                    }),
                    e.END_SAME_AS_BEGIN({
                      begin: /[rR]"(-*)\[/,
                      end: /\](-*)"/,
                    }),
                    e.END_SAME_AS_BEGIN({
                      begin: /[rR]'(-*)\(/,
                      end: /\)(-*)'/,
                    }),
                    e.END_SAME_AS_BEGIN({
                      begin: /[rR]'(-*)\{/,
                      end: /\}(-*)'/,
                    }),
                    e.END_SAME_AS_BEGIN({
                      begin: /[rR]'(-*)\[/,
                      end: /\](-*)'/,
                    }),
                    { begin: '"', end: '"', relevance: 0 },
                    { begin: "'", end: "'", relevance: 0 },
                  ],
                },
                {
                  relevance: 0,
                  variants: [
                    { scope: { 1: "operator", 2: "number" }, match: [i, r] },
                    {
                      scope: { 1: "operator", 2: "number" },
                      match: [/%[^%]*%/, r],
                    },
                    { scope: { 1: "punctuation", 2: "number" }, match: [a, r] },
                    { scope: { 2: "number" }, match: [/[^a-zA-Z0-9._]|^/, r] },
                  ],
                },
                { scope: { 3: "operator" }, match: [n, /\s+/, /<-/, /\s+/] },
                {
                  scope: "operator",
                  relevance: 0,
                  variants: [{ match: i }, { match: /%[^%]*%/ }],
                },
                { scope: "punctuation", relevance: 0, match: a },
                { begin: "`", end: "`", contains: [{ begin: /\\./ }] },
              ],
            };
          },
          ruby: function (e) {
            let t = e.regex,
              n =
                "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
              r = t.either(
                /\b([A-Z]+[a-z0-9]+)+/,
                /\b([A-Z]+[a-z0-9]+)+[A-Z]+/,
              ),
              i = t.concat(r, /(::\w+)*/),
              a = {
                "variable.constant": ["__FILE__", "__LINE__", "__ENCODING__"],
                "variable.language": ["self", "super"],
                keyword: [
                  "alias",
                  "and",
                  "begin",
                  "BEGIN",
                  "break",
                  "case",
                  "class",
                  "defined",
                  "do",
                  "else",
                  "elsif",
                  "end",
                  "END",
                  "ensure",
                  "for",
                  "if",
                  "in",
                  "module",
                  "next",
                  "not",
                  "or",
                  "redo",
                  "require",
                  "rescue",
                  "retry",
                  "return",
                  "then",
                  "undef",
                  "unless",
                  "until",
                  "when",
                  "while",
                  "yield",
                  "include",
                  "extend",
                  "prepend",
                  "public",
                  "private",
                  "protected",
                  "raise",
                  "throw",
                ],
                built_in: [
                  "proc",
                  "lambda",
                  "attr_accessor",
                  "attr_reader",
                  "attr_writer",
                  "define_method",
                  "private_constant",
                  "module_function",
                ],
                literal: ["true", "false", "nil"],
              },
              o = { className: "doctag", begin: "@[A-Za-z]+" },
              l = { begin: "#<", end: ">" },
              s = [
                e.COMMENT("#", "$", { contains: [o] }),
                e.COMMENT("^=begin", "^=end", { contains: [o], relevance: 10 }),
                e.COMMENT("^__END__", e.MATCH_NOTHING_RE),
              ],
              c = { className: "subst", begin: /#\{/, end: /\}/, keywords: a },
              u = {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE, c],
                variants: [
                  { begin: /'/, end: /'/ },
                  { begin: /"/, end: /"/ },
                  { begin: /`/, end: /`/ },
                  { begin: /%[qQwWx]?\(/, end: /\)/ },
                  { begin: /%[qQwWx]?\[/, end: /\]/ },
                  { begin: /%[qQwWx]?\{/, end: /\}/ },
                  { begin: /%[qQwWx]?</, end: />/ },
                  { begin: /%[qQwWx]?\//, end: /\// },
                  { begin: /%[qQwWx]?%/, end: /%/ },
                  { begin: /%[qQwWx]?-/, end: /-/ },
                  { begin: /%[qQwWx]?\|/, end: /\|/ },
                  { begin: /\B\?(\\\d{1,3})/ },
                  { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
                  { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
                  {
                    begin:
                      /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/,
                  },
                  { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
                  { begin: /\B\?\\?\S/ },
                  {
                    begin: t.concat(
                      /<<[-~]?'?/,
                      t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/),
                    ),
                    contains: [
                      e.END_SAME_AS_BEGIN({
                        begin: /(\w+)/,
                        end: /(\w+)/,
                        contains: [e.BACKSLASH_ESCAPE, c],
                      }),
                    ],
                  },
                ],
              },
              d = "[0-9](_?[0-9])*",
              f = {
                className: "number",
                relevance: 0,
                variants: [
                  {
                    begin: `\\b([1-9](_?[0-9])*|0)(\\.(${d}))?([eE][+-]?(${d})|r)?i?\\b`,
                  },
                  { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
                  { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
                  { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
                  { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
                  { begin: "\\b0(_?[0-7])+r?i?\\b" },
                ],
              },
              p = {
                variants: [
                  { match: /\(\)/ },
                  {
                    className: "params",
                    begin: /\(/,
                    end: /(?=\))/,
                    excludeBegin: !0,
                    endsParent: !0,
                    keywords: a,
                  },
                ],
              },
              m = [
                u,
                {
                  variants: [
                    { match: [/class\s+/, i, /\s+<\s+/, i] },
                    { match: [/\b(class|module)\s+/, i] },
                  ],
                  scope: { 2: "title.class", 4: "title.class.inherited" },
                  keywords: a,
                },
                {
                  match: [/(include|extend)\s+/, i],
                  scope: { 2: "title.class" },
                  keywords: a,
                },
                {
                  relevance: 0,
                  match: [i, /\.new[. (]/],
                  scope: { 1: "title.class" },
                },
                {
                  relevance: 0,
                  match: /\b[A-Z][A-Z_0-9]+\b/,
                  className: "variable.constant",
                },
                { relevance: 0, match: r, scope: "title.class" },
                {
                  match: [/def/, /\s+/, n],
                  scope: { 1: "keyword", 3: "title.function" },
                  contains: [p],
                },
                { begin: e.IDENT_RE + "::" },
                {
                  className: "symbol",
                  begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
                  relevance: 0,
                },
                {
                  className: "symbol",
                  begin: ":(?!\\s)",
                  contains: [u, { begin: n }],
                  relevance: 0,
                },
                f,
                {
                  className: "variable",
                  begin:
                    "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])",
                },
                {
                  className: "params",
                  begin: /\|/,
                  end: /\|/,
                  excludeBegin: !0,
                  excludeEnd: !0,
                  relevance: 0,
                  keywords: a,
                },
                {
                  begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
                  keywords: "unless",
                  contains: [
                    {
                      className: "regexp",
                      contains: [e.BACKSLASH_ESCAPE, c],
                      illegal: /\n/,
                      variants: [
                        { begin: "/", end: "/[a-z]*" },
                        { begin: /%r\{/, end: /\}[a-z]*/ },
                        { begin: "%r\\(", end: "\\)[a-z]*" },
                        { begin: "%r!", end: "![a-z]*" },
                        { begin: "%r\\[", end: "\\][a-z]*" },
                      ],
                    },
                  ].concat(l, s),
                  relevance: 0,
                },
              ].concat(l, s);
            (c.contains = m), (p.contains = m);
            let g = [
              { begin: /^\s*=>/, starts: { end: "$", contains: m } },
              {
                className: "meta.prompt",
                begin:
                  "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
                starts: { end: "$", keywords: a, contains: m },
              },
            ];
            return (
              s.unshift(l),
              {
                name: "Ruby",
                aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
                keywords: a,
                illegal: /\/\*/,
                contains: [e.SHEBANG({ binary: "ruby" })]
                  .concat(g)
                  .concat(s)
                  .concat(m),
              }
            );
          },
          rust: function (e) {
            let t = e.regex,
              n = {
                className: "title.function.invoke",
                relevance: 0,
                begin: t.concat(
                  /\b/,
                  /(?!let|for|while|if|else|match\b)/,
                  e.IDENT_RE,
                  t.lookahead(/\s*\(/),
                ),
              },
              r = "([ui](8|16|32|64|128|size)|f(32|64))?",
              i = [
                "drop ",
                "Copy",
                "Send",
                "Sized",
                "Sync",
                "Drop",
                "Fn",
                "FnMut",
                "FnOnce",
                "ToOwned",
                "Clone",
                "Debug",
                "PartialEq",
                "PartialOrd",
                "Eq",
                "Ord",
                "AsRef",
                "AsMut",
                "Into",
                "From",
                "Default",
                "Iterator",
                "Extend",
                "IntoIterator",
                "DoubleEndedIterator",
                "ExactSizeIterator",
                "SliceConcatExt",
                "ToString",
                "assert!",
                "assert_eq!",
                "bitflags!",
                "bytes!",
                "cfg!",
                "col!",
                "concat!",
                "concat_idents!",
                "debug_assert!",
                "debug_assert_eq!",
                "env!",
                "eprintln!",
                "panic!",
                "file!",
                "format!",
                "format_args!",
                "include_bytes!",
                "include_str!",
                "line!",
                "local_data_key!",
                "module_path!",
                "option_env!",
                "print!",
                "println!",
                "select!",
                "stringify!",
                "try!",
                "unimplemented!",
                "unreachable!",
                "vec!",
                "write!",
                "writeln!",
                "macro_rules!",
                "assert_ne!",
                "debug_assert_ne!",
              ],
              a = [
                "i8",
                "i16",
                "i32",
                "i64",
                "i128",
                "isize",
                "u8",
                "u16",
                "u32",
                "u64",
                "u128",
                "usize",
                "f32",
                "f64",
                "str",
                "char",
                "bool",
                "Box",
                "Option",
                "Result",
                "String",
                "Vec",
              ];
            return {
              name: "Rust",
              aliases: ["rs"],
              keywords: {
                $pattern: e.IDENT_RE + "!?",
                type: a,
                keyword: [
                  "abstract",
                  "as",
                  "async",
                  "await",
                  "become",
                  "box",
                  "break",
                  "const",
                  "continue",
                  "crate",
                  "do",
                  "dyn",
                  "else",
                  "enum",
                  "extern",
                  "false",
                  "final",
                  "fn",
                  "for",
                  "if",
                  "impl",
                  "in",
                  "let",
                  "loop",
                  "macro",
                  "match",
                  "mod",
                  "move",
                  "mut",
                  "override",
                  "priv",
                  "pub",
                  "ref",
                  "return",
                  "self",
                  "Self",
                  "static",
                  "struct",
                  "super",
                  "trait",
                  "true",
                  "try",
                  "type",
                  "typeof",
                  "unsafe",
                  "unsized",
                  "use",
                  "virtual",
                  "where",
                  "while",
                  "yield",
                ],
                literal: ["true", "false", "Some", "None", "Ok", "Err"],
                built_in: i,
              },
              illegal: "</",
              contains: [
                e.C_LINE_COMMENT_MODE,
                e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
                e.inherit(e.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }),
                {
                  className: "string",
                  variants: [
                    { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
                    { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ },
                  ],
                },
                { className: "symbol", begin: /'[a-zA-Z_][a-zA-Z0-9_]*/ },
                {
                  className: "number",
                  variants: [
                    { begin: "\\b0b([01_]+)" + r },
                    { begin: "\\b0o([0-7_]+)" + r },
                    { begin: "\\b0x([A-Fa-f0-9_]+)" + r },
                    {
                      begin:
                        "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + r,
                    },
                  ],
                  relevance: 0,
                },
                {
                  begin: [/fn/, /\s+/, e.UNDERSCORE_IDENT_RE],
                  className: { 1: "keyword", 3: "title.function" },
                },
                {
                  className: "meta",
                  begin: "#!?\\[",
                  end: "\\]",
                  contains: [{ className: "string", begin: /"/, end: /"/ }],
                },
                {
                  begin: [/let/, /\s+/, /(?:mut\s+)?/, e.UNDERSCORE_IDENT_RE],
                  className: { 1: "keyword", 3: "keyword", 4: "variable" },
                },
                {
                  begin: [/for/, /\s+/, e.UNDERSCORE_IDENT_RE, /\s+/, /in/],
                  className: { 1: "keyword", 3: "variable", 5: "keyword" },
                },
                {
                  begin: [/type/, /\s+/, e.UNDERSCORE_IDENT_RE],
                  className: { 1: "keyword", 3: "title.class" },
                },
                {
                  begin: [
                    /(?:trait|enum|struct|union|impl|for)/,
                    /\s+/,
                    e.UNDERSCORE_IDENT_RE,
                  ],
                  className: { 1: "keyword", 3: "title.class" },
                },
                {
                  begin: e.IDENT_RE + "::",
                  keywords: { keyword: "Self", built_in: i, type: a },
                },
                { className: "punctuation", begin: "->" },
                n,
              ],
            };
          },
          scss: function (e) {
            let t = T(e),
              n = "@[a-z-]+",
              r = {
                className: "variable",
                begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b",
                relevance: 0,
              };
            return {
              name: "SCSS",
              case_insensitive: !0,
              illegal: "[=/|']",
              contains: [
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
                t.CSS_NUMBER_MODE,
                {
                  className: "selector-id",
                  begin: "#[A-Za-z0-9_-]+",
                  relevance: 0,
                },
                {
                  className: "selector-class",
                  begin: "\\.[A-Za-z0-9_-]+",
                  relevance: 0,
                },
                t.ATTRIBUTE_SELECTOR_MODE,
                {
                  className: "selector-tag",
                  begin: "\\b(" + B.join("|") + ")\\b",
                  relevance: 0,
                },
                {
                  className: "selector-pseudo",
                  begin: ":(" + L.join("|") + ")",
                },
                {
                  className: "selector-pseudo",
                  begin: ":(:)?(" + R.join("|") + ")",
                },
                r,
                { begin: /\(/, end: /\)/, contains: [t.CSS_NUMBER_MODE] },
                t.CSS_VARIABLE,
                {
                  className: "attribute",
                  begin: "\\b(" + z.join("|") + ")\\b",
                },
                {
                  begin:
                    "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b",
                },
                {
                  begin: /:/,
                  end: /[;}{]/,
                  relevance: 0,
                  contains: [
                    t.BLOCK_COMMENT,
                    r,
                    t.HEXCOLOR,
                    t.CSS_NUMBER_MODE,
                    e.QUOTE_STRING_MODE,
                    e.APOS_STRING_MODE,
                    t.IMPORTANT,
                    t.FUNCTION_DISPATCH,
                  ],
                },
                {
                  begin: "@(page|font-face)",
                  keywords: { $pattern: n, keyword: "@page @font-face" },
                },
                {
                  begin: "@",
                  end: "[{;]",
                  returnBegin: !0,
                  keywords: {
                    $pattern: /[a-z-]+/,
                    keyword: "and or not only",
                    attribute: I.join(" "),
                  },
                  contains: [
                    { begin: n, className: "keyword" },
                    { begin: /[a-z-]+(?=:)/, className: "attribute" },
                    r,
                    e.QUOTE_STRING_MODE,
                    e.APOS_STRING_MODE,
                    t.HEXCOLOR,
                    t.CSS_NUMBER_MODE,
                  ],
                },
                t.FUNCTION_DISPATCH,
              ],
            };
          },
          shell: function (e) {
            return {
              name: "Shell Session",
              aliases: ["console", "shellsession"],
              contains: [
                {
                  className: "meta.prompt",
                  begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
                  starts: { end: /[^\\](?=\s*$)/, subLanguage: "bash" },
                },
              ],
            };
          },
          sql: function (e) {
            let t = e.regex,
              n = e.COMMENT("--", "$"),
              r = ["true", "false", "unknown"],
              i = [
                "bigint",
                "binary",
                "blob",
                "boolean",
                "char",
                "character",
                "clob",
                "date",
                "dec",
                "decfloat",
                "decimal",
                "float",
                "int",
                "integer",
                "interval",
                "nchar",
                "nclob",
                "national",
                "numeric",
                "real",
                "row",
                "smallint",
                "time",
                "timestamp",
                "varchar",
                "varying",
                "varbinary",
              ],
              a = [
                "abs",
                "acos",
                "array_agg",
                "asin",
                "atan",
                "avg",
                "cast",
                "ceil",
                "ceiling",
                "coalesce",
                "corr",
                "cos",
                "cosh",
                "count",
                "covar_pop",
                "covar_samp",
                "cume_dist",
                "dense_rank",
                "deref",
                "element",
                "exp",
                "extract",
                "first_value",
                "floor",
                "json_array",
                "json_arrayagg",
                "json_exists",
                "json_object",
                "json_objectagg",
                "json_query",
                "json_table",
                "json_table_primitive",
                "json_value",
                "lag",
                "last_value",
                "lead",
                "listagg",
                "ln",
                "log",
                "log10",
                "lower",
                "max",
                "min",
                "mod",
                "nth_value",
                "ntile",
                "nullif",
                "percent_rank",
                "percentile_cont",
                "percentile_disc",
                "position",
                "position_regex",
                "power",
                "rank",
                "regr_avgx",
                "regr_avgy",
                "regr_count",
                "regr_intercept",
                "regr_r2",
                "regr_slope",
                "regr_sxx",
                "regr_sxy",
                "regr_syy",
                "row_number",
                "sin",
                "sinh",
                "sqrt",
                "stddev_pop",
                "stddev_samp",
                "substring",
                "substring_regex",
                "sum",
                "tan",
                "tanh",
                "translate",
                "translate_regex",
                "treat",
                "trim",
                "trim_array",
                "unnest",
                "upper",
                "value_of",
                "var_pop",
                "var_samp",
                "width_bucket",
              ],
              o = [
                "create table",
                "insert into",
                "primary key",
                "foreign key",
                "not null",
                "alter table",
                "add constraint",
                "grouping sets",
                "on overflow",
                "character set",
                "respect nulls",
                "ignore nulls",
                "nulls first",
                "nulls last",
                "depth first",
                "breadth first",
              ],
              l = [
                "abs",
                "acos",
                "all",
                "allocate",
                "alter",
                "and",
                "any",
                "are",
                "array",
                "array_agg",
                "array_max_cardinality",
                "as",
                "asensitive",
                "asin",
                "asymmetric",
                "at",
                "atan",
                "atomic",
                "authorization",
                "avg",
                "begin",
                "begin_frame",
                "begin_partition",
                "between",
                "bigint",
                "binary",
                "blob",
                "boolean",
                "both",
                "by",
                "call",
                "called",
                "cardinality",
                "cascaded",
                "case",
                "cast",
                "ceil",
                "ceiling",
                "char",
                "char_length",
                "character",
                "character_length",
                "check",
                "classifier",
                "clob",
                "close",
                "coalesce",
                "collate",
                "collect",
                "column",
                "commit",
                "condition",
                "connect",
                "constraint",
                "contains",
                "convert",
                "copy",
                "corr",
                "corresponding",
                "cos",
                "cosh",
                "count",
                "covar_pop",
                "covar_samp",
                "create",
                "cross",
                "cube",
                "cume_dist",
                "current",
                "current_catalog",
                "current_date",
                "current_default_transform_group",
                "current_path",
                "current_role",
                "current_row",
                "current_schema",
                "current_time",
                "current_timestamp",
                "current_path",
                "current_role",
                "current_transform_group_for_type",
                "current_user",
                "cursor",
                "cycle",
                "date",
                "day",
                "deallocate",
                "dec",
                "decimal",
                "decfloat",
                "declare",
                "default",
                "define",
                "delete",
                "dense_rank",
                "deref",
                "describe",
                "deterministic",
                "disconnect",
                "distinct",
                "double",
                "drop",
                "dynamic",
                "each",
                "element",
                "else",
                "empty",
                "end",
                "end_frame",
                "end_partition",
                "end-exec",
                "equals",
                "escape",
                "every",
                "except",
                "exec",
                "execute",
                "exists",
                "exp",
                "external",
                "extract",
                "false",
                "fetch",
                "filter",
                "first_value",
                "float",
                "floor",
                "for",
                "foreign",
                "frame_row",
                "free",
                "from",
                "full",
                "function",
                "fusion",
                "get",
                "global",
                "grant",
                "group",
                "grouping",
                "groups",
                "having",
                "hold",
                "hour",
                "identity",
                "in",
                "indicator",
                "initial",
                "inner",
                "inout",
                "insensitive",
                "insert",
                "int",
                "integer",
                "intersect",
                "intersection",
                "interval",
                "into",
                "is",
                "join",
                "json_array",
                "json_arrayagg",
                "json_exists",
                "json_object",
                "json_objectagg",
                "json_query",
                "json_table",
                "json_table_primitive",
                "json_value",
                "lag",
                "language",
                "large",
                "last_value",
                "lateral",
                "lead",
                "leading",
                "left",
                "like",
                "like_regex",
                "listagg",
                "ln",
                "local",
                "localtime",
                "localtimestamp",
                "log",
                "log10",
                "lower",
                "match",
                "match_number",
                "match_recognize",
                "matches",
                "max",
                "member",
                "merge",
                "method",
                "min",
                "minute",
                "mod",
                "modifies",
                "module",
                "month",
                "multiset",
                "national",
                "natural",
                "nchar",
                "nclob",
                "new",
                "no",
                "none",
                "normalize",
                "not",
                "nth_value",
                "ntile",
                "null",
                "nullif",
                "numeric",
                "octet_length",
                "occurrences_regex",
                "of",
                "offset",
                "old",
                "omit",
                "on",
                "one",
                "only",
                "open",
                "or",
                "order",
                "out",
                "outer",
                "over",
                "overlaps",
                "overlay",
                "parameter",
                "partition",
                "pattern",
                "per",
                "percent",
                "percent_rank",
                "percentile_cont",
                "percentile_disc",
                "period",
                "portion",
                "position",
                "position_regex",
                "power",
                "precedes",
                "precision",
                "prepare",
                "primary",
                "procedure",
                "ptf",
                "range",
                "rank",
                "reads",
                "real",
                "recursive",
                "ref",
                "references",
                "referencing",
                "regr_avgx",
                "regr_avgy",
                "regr_count",
                "regr_intercept",
                "regr_r2",
                "regr_slope",
                "regr_sxx",
                "regr_sxy",
                "regr_syy",
                "release",
                "result",
                "return",
                "returns",
                "revoke",
                "right",
                "rollback",
                "rollup",
                "row",
                "row_number",
                "rows",
                "running",
                "savepoint",
                "scope",
                "scroll",
                "search",
                "second",
                "seek",
                "select",
                "sensitive",
                "session_user",
                "set",
                "show",
                "similar",
                "sin",
                "sinh",
                "skip",
                "smallint",
                "some",
                "specific",
                "specifictype",
                "sql",
                "sqlexception",
                "sqlstate",
                "sqlwarning",
                "sqrt",
                "start",
                "static",
                "stddev_pop",
                "stddev_samp",
                "submultiset",
                "subset",
                "substring",
                "substring_regex",
                "succeeds",
                "sum",
                "symmetric",
                "system",
                "system_time",
                "system_user",
                "table",
                "tablesample",
                "tan",
                "tanh",
                "then",
                "time",
                "timestamp",
                "timezone_hour",
                "timezone_minute",
                "to",
                "trailing",
                "translate",
                "translate_regex",
                "translation",
                "treat",
                "trigger",
                "trim",
                "trim_array",
                "true",
                "truncate",
                "uescape",
                "union",
                "unique",
                "unknown",
                "unnest",
                "update",
                "upper",
                "user",
                "using",
                "value",
                "values",
                "value_of",
                "var_pop",
                "var_samp",
                "varbinary",
                "varchar",
                "varying",
                "versioning",
                "when",
                "whenever",
                "where",
                "width_bucket",
                "window",
                "with",
                "within",
                "without",
                "year",
                "add",
                "asc",
                "collation",
                "desc",
                "final",
                "first",
                "last",
                "view",
              ].filter((e) => !a.includes(e)),
              s = {
                begin: t.concat(/\b/, t.either(...a), /\s*\(/),
                relevance: 0,
                keywords: { built_in: a },
              };
            return {
              name: "SQL",
              case_insensitive: !0,
              illegal: /[{}]|<\//,
              keywords: {
                $pattern: /\b[\w\.]+/,
                keyword: (function (e, { exceptions: t, when: n } = {}) {
                  return (
                    (t = t || []),
                    e.map((e) =>
                      e.match(/\|\d+$/) || t.includes(e)
                        ? e
                        : n(e)
                          ? `${e}|0`
                          : e,
                    )
                  );
                })(l, { when: (e) => e.length < 3 }),
                literal: r,
                type: i,
                built_in: [
                  "current_catalog",
                  "current_date",
                  "current_default_transform_group",
                  "current_path",
                  "current_role",
                  "current_schema",
                  "current_transform_group_for_type",
                  "current_user",
                  "session_user",
                  "system_time",
                  "system_user",
                  "current_time",
                  "localtime",
                  "current_timestamp",
                  "localtimestamp",
                ],
              },
              contains: [
                {
                  begin: t.either(...o),
                  relevance: 0,
                  keywords: {
                    $pattern: /[\w\.]+/,
                    keyword: l.concat(o),
                    literal: r,
                    type: i,
                  },
                },
                {
                  className: "type",
                  begin: t.either(
                    ...[
                      "double precision",
                      "large object",
                      "with timezone",
                      "without timezone",
                    ],
                  ),
                },
                s,
                { className: "variable", begin: /@[a-z0-9][a-z0-9_]*/ },
                {
                  className: "string",
                  variants: [
                    { begin: /'/, end: /'/, contains: [{ begin: /''/ }] },
                  ],
                },
                { begin: /"/, end: /"/, contains: [{ begin: /""/ }] },
                e.C_NUMBER_MODE,
                e.C_BLOCK_COMMENT_MODE,
                n,
                {
                  className: "operator",
                  begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
                  relevance: 0,
                },
              ],
            };
          },
          swift: function (e) {
            let t = { match: /\s+/, relevance: 0 },
              n = e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
              r = [e.C_LINE_COMMENT_MODE, n],
              i = { match: [/\./, U(...H, ...K)], className: { 2: "keyword" } },
              a = { match: $(/\./, U(...G)), relevance: 0 },
              o = G.filter((e) => "string" == typeof e).concat(["_|0"]),
              l = {
                variants: [
                  {
                    className: "keyword",
                    match: U(
                      ...G.filter((e) => "string" != typeof e)
                        .concat(W)
                        .map(q),
                      ...K,
                    ),
                  },
                ],
              },
              s = {
                $pattern: U(/\b\w+/, /#\w+/),
                keyword: o.concat(X),
                literal: V,
              },
              c = [i, a, l],
              u = [
                { match: $(/\./, U(...Q)), relevance: 0 },
                { className: "built_in", match: $(/\b/, U(...Q), /(?=\()/) },
              ],
              d = { match: /->/, relevance: 0 },
              f = [
                d,
                {
                  className: "operator",
                  relevance: 0,
                  variants: [{ match: ee }, { match: `\\.(\\.|${J})+` }],
                },
              ],
              p = "([0-9]_*)+",
              m = "([0-9a-fA-F]_*)+",
              g = {
                className: "number",
                relevance: 0,
                variants: [
                  { match: `\\b(${p})(\\.(${p}))?([eE][+-]?(${p}))?\\b` },
                  { match: `\\b0x(${m})(\\.(${m}))?([pP][+-]?(${p}))?\\b` },
                  { match: /\b0o([0-7]_*)+\b/ },
                  { match: /\b0b([01]_*)+\b/ },
                ],
              },
              h = (e = "") => ({
                className: "subst",
                variants: [
                  { match: $(/\\/, e, /[0\\tnr"']/) },
                  { match: $(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/) },
                ],
              }),
              b = (e = "") => ({
                className: "subst",
                match: $(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/),
              }),
              y = (e = "") => ({
                className: "subst",
                label: "interpol",
                begin: $(/\\/, e, /\(/),
                end: /\)/,
              }),
              _ = (e = "") => ({
                begin: $(e, /"""/),
                end: $(/"""/, e),
                contains: [h(e), b(e), y(e)],
              }),
              v = (e = "") => ({
                begin: $(e, /"/),
                end: $(/"/, e),
                contains: [h(e), y(e)],
              }),
              w = {
                className: "string",
                variants: [
                  _(),
                  _("#"),
                  _("##"),
                  _("###"),
                  v(),
                  v("#"),
                  v("##"),
                  v("###"),
                ],
              },
              k = [
                e.BACKSLASH_ESCAPE,
                {
                  begin: /\[/,
                  end: /\]/,
                  relevance: 0,
                  contains: [e.BACKSLASH_ESCAPE],
                },
              ],
              x = (e) => {
                let t = $(e, /\//),
                  n = $(/\//, e);
                return {
                  begin: t,
                  end: n,
                  contains: [
                    ...k,
                    { scope: "comment", begin: `#(?!.*${n})`, end: /$/ },
                  ],
                };
              },
              E = {
                scope: "regexp",
                variants: [
                  x("###"),
                  x("##"),
                  x("#"),
                  { begin: /\/[^\s](?=[^/\n]*\/)/, end: /\//, contains: k },
                ],
              },
              D = { match: $(/`/, er, /`/) },
              C = [
                D,
                { className: "variable", match: /\$\d+/ },
                { className: "variable", match: `\\$${en}+` },
              ],
              A = [
                {
                  match: /(@|#(un)?)available/,
                  scope: "keyword",
                  starts: {
                    contains: [
                      {
                        begin: /\(/,
                        end: /\)/,
                        keywords: eo,
                        contains: [...f, g, w],
                      },
                    ],
                  },
                },
                { scope: "keyword", match: $(/@/, U(...ea)) },
                { scope: "meta", match: $(/@/, er) },
              ],
              F = {
                match: j(/\b[A-Z]/),
                relevance: 0,
                contains: [
                  {
                    className: "type",
                    match: $(
                      /(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,
                      en,
                      "+",
                    ),
                  },
                  { className: "type", match: ei, relevance: 0 },
                  { match: /[?!]+/, relevance: 0 },
                  { match: /\.\.\./, relevance: 0 },
                  { match: $(/\s+&\s+/, j(ei)), relevance: 0 },
                ],
              },
              S = {
                begin: /</,
                end: />/,
                keywords: s,
                contains: [...r, ...c, ...A, d, F],
              };
            F.contains.push(S);
            let N = {
                begin: /\(/,
                end: /\)/,
                relevance: 0,
                keywords: s,
                contains: [
                  "self",
                  { match: $(er, /\s*:/), keywords: "_|0", relevance: 0 },
                  ...r,
                  E,
                  ...c,
                  ...u,
                  ...f,
                  g,
                  w,
                  ...C,
                  ...A,
                  F,
                ],
              },
              O = {
                begin: /</,
                end: />/,
                keywords: "repeat each",
                contains: [...r, F],
              },
              M = {
                begin: /\(/,
                end: /\)/,
                keywords: s,
                contains: [
                  {
                    begin: U(j($(er, /\s*:/)), j($(er, /\s+/, er, /\s*:/))),
                    end: /:/,
                    relevance: 0,
                    contains: [
                      { className: "keyword", match: /\b_\b/ },
                      { className: "params", match: er },
                    ],
                  },
                  ...r,
                  ...c,
                  ...f,
                  g,
                  w,
                  ...A,
                  F,
                  N,
                ],
                endsParent: !0,
                illegal: /["']/,
              },
              T = {
                match: [/(func|macro)/, /\s+/, U(D.match, er, ee)],
                className: { 1: "keyword", 3: "title.function" },
                contains: [O, M, t],
                illegal: [/\[/, /%/],
              },
              B = {
                begin: [/precedencegroup/, /\s+/, ei],
                className: { 1: "keyword", 3: "title" },
                contains: [F],
                keywords: [...Z, ...V],
                end: /}/,
              };
            for (let e of w.variants) {
              let t = e.contains.find((e) => "interpol" === e.label);
              t.keywords = s;
              let n = [...c, ...u, ...f, g, w, ...C];
              t.contains = [
                ...n,
                { begin: /\(/, end: /\)/, contains: ["self", ...n] },
              ];
            }
            return {
              name: "Swift",
              keywords: s,
              contains: [
                ...r,
                T,
                {
                  match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
                  className: { 1: "keyword" },
                  contains: [O, M, t],
                  illegal: /\[|%/,
                },
                {
                  beginKeywords: "struct protocol class extension enum actor",
                  end: "\\{",
                  excludeEnd: !0,
                  keywords: s,
                  contains: [
                    e.inherit(e.TITLE_MODE, {
                      className: "title.class",
                      begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/,
                    }),
                    ...c,
                  ],
                },
                {
                  match: [/operator/, /\s+/, ee],
                  className: { 1: "keyword", 3: "title" },
                },
                B,
                {
                  beginKeywords: "import",
                  end: /$/,
                  contains: [...r],
                  relevance: 0,
                },
                E,
                ...c,
                ...u,
                ...f,
                g,
                w,
                ...C,
                ...A,
                F,
                N,
              ],
            };
          },
          typescript: function (e) {
            let t = (function (e) {
                var t;
                let n = e.regex,
                  r = (e, { after: t }) => {
                    let n = "</" + e[0].slice(1);
                    return -1 !== e.input.indexOf(n, t);
                  },
                  i = { begin: "<>", end: "</>" },
                  a = {
                    begin: /<[A-Za-z0-9\\._:-]+/,
                    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                    isTrulyOpeningTag: (e, t) => {
                      let n;
                      let i = e[0].length + e.index,
                        a = e.input[i];
                      if ("<" === a || "," === a) {
                        t.ignoreMatch();
                        return;
                      }
                      ">" !== a || r(e, { after: i }) || t.ignoreMatch();
                      let o = e.input.substring(i);
                      if (
                        (n = o.match(/^\s*=/)) ||
                        ((n = o.match(/^\s+extends\s+/)) && 0 === n.index)
                      ) {
                        t.ignoreMatch();
                        return;
                      }
                    },
                  },
                  o = {
                    $pattern: el,
                    keyword: es,
                    literal: ec,
                    built_in: em,
                    "variable.language": ep,
                  },
                  l = "[0-9](_?[0-9])*",
                  s = `\\.(${l})`,
                  c = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
                  u = {
                    className: "number",
                    variants: [
                      {
                        begin: `(\\b(${c})((${s})|\\.)?|(${s}))[eE][+-]?(${l})\\b`,
                      },
                      { begin: `\\b(${c})\\b((${s})\\b|\\.)?|(${s})\\b` },
                      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
                      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
                      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
                      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
                      { begin: "\\b0[0-7]+n?\\b" },
                    ],
                    relevance: 0,
                  },
                  d = {
                    className: "subst",
                    begin: "\\$\\{",
                    end: "\\}",
                    keywords: o,
                    contains: [],
                  },
                  f = {
                    begin: "html`",
                    end: "",
                    starts: {
                      end: "`",
                      returnEnd: !1,
                      contains: [e.BACKSLASH_ESCAPE, d],
                      subLanguage: "xml",
                    },
                  },
                  p = {
                    begin: "css`",
                    end: "",
                    starts: {
                      end: "`",
                      returnEnd: !1,
                      contains: [e.BACKSLASH_ESCAPE, d],
                      subLanguage: "css",
                    },
                  },
                  m = {
                    begin: "gql`",
                    end: "",
                    starts: {
                      end: "`",
                      returnEnd: !1,
                      contains: [e.BACKSLASH_ESCAPE, d],
                      subLanguage: "graphql",
                    },
                  },
                  g = {
                    className: "string",
                    begin: "`",
                    end: "`",
                    contains: [e.BACKSLASH_ESCAPE, d],
                  },
                  h = {
                    className: "comment",
                    variants: [
                      e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                        relevance: 0,
                        contains: [
                          {
                            begin: "(?=@[A-Za-z]+)",
                            relevance: 0,
                            contains: [
                              { className: "doctag", begin: "@[A-Za-z]+" },
                              {
                                className: "type",
                                begin: "\\{",
                                end: "\\}",
                                excludeEnd: !0,
                                excludeBegin: !0,
                                relevance: 0,
                              },
                              {
                                className: "variable",
                                begin: el + "(?=\\s*(-)|$)",
                                endsParent: !0,
                                relevance: 0,
                              },
                              { begin: /(?=[^\n])\s/, relevance: 0 },
                            ],
                          },
                        ],
                      }),
                      e.C_BLOCK_COMMENT_MODE,
                      e.C_LINE_COMMENT_MODE,
                    ],
                  },
                  b = [
                    e.APOS_STRING_MODE,
                    e.QUOTE_STRING_MODE,
                    f,
                    p,
                    m,
                    g,
                    { match: /\$\d+/ },
                    u,
                  ];
                d.contains = b.concat({
                  begin: /\{/,
                  end: /\}/,
                  keywords: o,
                  contains: ["self"].concat(b),
                });
                let y = [].concat(h, d.contains),
                  _ = y.concat([
                    {
                      begin: /\(/,
                      end: /\)/,
                      keywords: o,
                      contains: ["self"].concat(y),
                    },
                  ]),
                  v = {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: o,
                    contains: _,
                  },
                  w = {
                    variants: [
                      {
                        match: [
                          /class/,
                          /\s+/,
                          el,
                          /\s+/,
                          /extends/,
                          /\s+/,
                          n.concat(el, "(", n.concat(/\./, el), ")*"),
                        ],
                        scope: {
                          1: "keyword",
                          3: "title.class",
                          5: "keyword",
                          7: "title.class.inherited",
                        },
                      },
                      {
                        match: [/class/, /\s+/, el],
                        scope: { 1: "keyword", 3: "title.class" },
                      },
                    ],
                  },
                  k = {
                    relevance: 0,
                    match: n.either(
                      /\bJSON/,
                      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
                      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
                      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
                    ),
                    className: "title.class",
                    keywords: { _: [...eu, ...ed] },
                  },
                  x = {
                    match: n.concat(
                      /\b/,
                      ((t = [...ef, "super", "import"]),
                      n.concat("(?!", t.join("|"), ")")),
                      el,
                      n.lookahead(/\(/),
                    ),
                    className: "title.function",
                    relevance: 0,
                  },
                  E = {
                    begin: n.concat(
                      /\./,
                      n.lookahead(n.concat(el, /(?![0-9A-Za-z$_(])/)),
                    ),
                    end: el,
                    excludeBegin: !0,
                    keywords: "prototype",
                    className: "property",
                    relevance: 0,
                  },
                  D =
                    "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
                    e.UNDERSCORE_IDENT_RE +
                    ")\\s*=>",
                  C = {
                    match: [
                      /const|var|let/,
                      /\s+/,
                      el,
                      /\s*/,
                      /=\s*/,
                      /(async\s*)?/,
                      n.lookahead(D),
                    ],
                    keywords: "async",
                    className: { 1: "keyword", 3: "title.function" },
                    contains: [v],
                  };
                return {
                  name: "JavaScript",
                  aliases: ["js", "jsx", "mjs", "cjs"],
                  keywords: o,
                  exports: { PARAMS_CONTAINS: _, CLASS_REFERENCE: k },
                  illegal: /#(?![$_A-z])/,
                  contains: [
                    e.SHEBANG({
                      label: "shebang",
                      binary: "node",
                      relevance: 5,
                    }),
                    {
                      label: "use_strict",
                      className: "meta",
                      relevance: 10,
                      begin: /^\s*['"]use (strict|asm)['"]/,
                    },
                    e.APOS_STRING_MODE,
                    e.QUOTE_STRING_MODE,
                    f,
                    p,
                    m,
                    g,
                    h,
                    { match: /\$\d+/ },
                    u,
                    k,
                    {
                      className: "attr",
                      begin: el + n.lookahead(":"),
                      relevance: 0,
                    },
                    C,
                    {
                      begin:
                        "(" +
                        e.RE_STARTERS_RE +
                        "|\\b(case|return|throw)\\b)\\s*",
                      keywords: "return throw case",
                      relevance: 0,
                      contains: [
                        h,
                        e.REGEXP_MODE,
                        {
                          className: "function",
                          begin: D,
                          returnBegin: !0,
                          end: "\\s*=>",
                          contains: [
                            {
                              className: "params",
                              variants: [
                                { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                                { className: null, begin: /\(\s*\)/, skip: !0 },
                                {
                                  begin: /\(/,
                                  end: /\)/,
                                  excludeBegin: !0,
                                  excludeEnd: !0,
                                  keywords: o,
                                  contains: _,
                                },
                              ],
                            },
                          ],
                        },
                        { begin: /,/, relevance: 0 },
                        { match: /\s+/, relevance: 0 },
                        {
                          variants: [
                            { begin: i.begin, end: i.end },
                            { match: /<[A-Za-z0-9\\._:-]+\s*\/>/ },
                            {
                              begin: a.begin,
                              "on:begin": a.isTrulyOpeningTag,
                              end: a.end,
                            },
                          ],
                          subLanguage: "xml",
                          contains: [
                            {
                              begin: a.begin,
                              end: a.end,
                              skip: !0,
                              contains: ["self"],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      variants: [
                        { match: [/function/, /\s+/, el, /(?=\s*\()/] },
                        { match: [/function/, /\s*(?=\()/] },
                      ],
                      className: { 1: "keyword", 3: "title.function" },
                      label: "func.def",
                      contains: [v],
                      illegal: /%/,
                    },
                    { beginKeywords: "while if switch catch for" },
                    {
                      begin:
                        "\\b(?!function)" +
                        e.UNDERSCORE_IDENT_RE +
                        "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                      returnBegin: !0,
                      label: "func.def",
                      contains: [
                        v,
                        e.inherit(e.TITLE_MODE, {
                          begin: el,
                          className: "title.function",
                        }),
                      ],
                    },
                    { match: /\.\.\./, relevance: 0 },
                    E,
                    { match: "\\$" + el, relevance: 0 },
                    {
                      match: [/\bconstructor(?=\s*\()/],
                      className: { 1: "title.function" },
                      contains: [v],
                    },
                    x,
                    {
                      relevance: 0,
                      match: /\b[A-Z][A-Z_0-9]+\b/,
                      className: "variable.constant",
                    },
                    w,
                    {
                      match: [/get|set/, /\s+/, el, /(?=\()/],
                      className: { 1: "keyword", 3: "title.function" },
                      contains: [{ begin: /\(\)/ }, v],
                    },
                    { match: /\$[(.]/ },
                  ],
                };
              })(e),
              n = [
                "any",
                "void",
                "number",
                "boolean",
                "string",
                "object",
                "never",
                "symbol",
                "bigint",
                "unknown",
              ],
              r = {
                beginKeywords: "namespace",
                end: /\{/,
                excludeEnd: !0,
                contains: [t.exports.CLASS_REFERENCE],
              },
              i = {
                beginKeywords: "interface",
                end: /\{/,
                excludeEnd: !0,
                keywords: { keyword: "interface extends", built_in: n },
                contains: [t.exports.CLASS_REFERENCE],
              },
              a = {
                $pattern: el,
                keyword: es.concat([
                  "type",
                  "namespace",
                  "interface",
                  "public",
                  "private",
                  "protected",
                  "implements",
                  "declare",
                  "abstract",
                  "readonly",
                  "enum",
                  "override",
                ]),
                literal: ec,
                built_in: em.concat(n),
                "variable.language": ep,
              },
              o = { className: "meta", begin: "@" + el },
              l = (e, t, n) => {
                let r = e.contains.findIndex((e) => e.label === t);
                if (-1 === r) throw Error("can not find mode to replace");
                e.contains.splice(r, 1, n);
              };
            return (
              Object.assign(t.keywords, a),
              t.exports.PARAMS_CONTAINS.push(o),
              (t.contains = t.contains.concat([o, r, i])),
              l(t, "shebang", e.SHEBANG()),
              l(t, "use_strict", {
                className: "meta",
                relevance: 10,
                begin: /^\s*['"]use strict['"]/,
              }),
              (t.contains.find((e) => "func.def" === e.label).relevance = 0),
              Object.assign(t, {
                name: "TypeScript",
                aliases: ["ts", "tsx", "mts", "cts"],
              }),
              t
            );
          },
          vbnet: function (e) {
            let t = e.regex,
              n = /\d{1,2}\/\d{1,2}\/\d{4}/,
              r = /\d{4}-\d{1,2}-\d{1,2}/,
              i = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
              a = /\d{1,2}(:\d{1,2}){1,2}/,
              o = {
                className: "literal",
                variants: [
                  { begin: t.concat(/# */, t.either(r, n), / *#/) },
                  { begin: t.concat(/# */, a, / *#/) },
                  { begin: t.concat(/# */, i, / *#/) },
                  {
                    begin: t.concat(
                      /# */,
                      t.either(r, n),
                      / +/,
                      t.either(i, a),
                      / *#/,
                    ),
                  },
                ],
              },
              l = e.COMMENT(/'''/, /$/, {
                contains: [{ className: "doctag", begin: /<\/?/, end: />/ }],
              }),
              s = e.COMMENT(null, /$/, {
                variants: [{ begin: /'/ }, { begin: /([\t ]|^)REM(?=\s)/ }],
              });
            return {
              name: "Visual Basic .NET",
              aliases: ["vb"],
              case_insensitive: !0,
              classNameAliases: { label: "symbol" },
              keywords: {
                keyword:
                  "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
                built_in:
                  "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
                type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
                literal: "true false nothing",
              },
              illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
              contains: [
                { className: "string", begin: /"(""|[^/n])"C\b/ },
                {
                  className: "string",
                  begin: /"/,
                  end: /"/,
                  illegal: /\n/,
                  contains: [{ begin: /""/ }],
                },
                o,
                {
                  className: "number",
                  relevance: 0,
                  variants: [
                    {
                      begin:
                        /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/,
                    },
                    { begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ },
                    { begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ },
                    { begin: /&O[0-7_]+((U?[SIL])|[%&])?/ },
                    { begin: /&B[01_]+((U?[SIL])|[%&])?/ },
                  ],
                },
                { className: "label", begin: /^\w+:/ },
                l,
                s,
                {
                  className: "meta",
                  begin:
                    /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
                  end: /$/,
                  keywords: {
                    keyword:
                      "const disable else elseif enable end externalsource if region then",
                  },
                  contains: [s],
                },
              ],
            };
          },
          wasm: function (e) {
            e.regex;
            let t = e.COMMENT(/\(;/, /;\)/);
            return (
              t.contains.push("self"),
              {
                name: "WebAssembly",
                keywords: {
                  $pattern: /[\w.]+/,
                  keyword: [
                    "anyfunc",
                    "block",
                    "br",
                    "br_if",
                    "br_table",
                    "call",
                    "call_indirect",
                    "data",
                    "drop",
                    "elem",
                    "else",
                    "end",
                    "export",
                    "func",
                    "global.get",
                    "global.set",
                    "local.get",
                    "local.set",
                    "local.tee",
                    "get_global",
                    "get_local",
                    "global",
                    "if",
                    "import",
                    "local",
                    "loop",
                    "memory",
                    "memory.grow",
                    "memory.size",
                    "module",
                    "mut",
                    "nop",
                    "offset",
                    "param",
                    "result",
                    "return",
                    "select",
                    "set_global",
                    "set_local",
                    "start",
                    "table",
                    "tee_local",
                    "then",
                    "type",
                    "unreachable",
                  ],
                },
                contains: [
                  e.COMMENT(/;;/, /$/),
                  t,
                  {
                    match: [/(?:offset|align)/, /\s*/, /=/],
                    className: { 1: "keyword", 3: "operator" },
                  },
                  { className: "variable", begin: /\$[\w_]+/ },
                  {
                    match: /(\((?!;)|\))+/,
                    className: "punctuation",
                    relevance: 0,
                  },
                  {
                    begin: [/(?:func|call|call_indirect)/, /\s+/, /\$[^\s)]+/],
                    className: { 1: "keyword", 3: "title.function" },
                  },
                  e.QUOTE_STRING_MODE,
                  { match: /(i32|i64|f32|f64)(?!\.)/, className: "type" },
                  {
                    className: "keyword",
                    match:
                      /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/,
                  },
                  {
                    className: "number",
                    relevance: 0,
                    match:
                      /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
                  },
                ],
              }
            );
          },
          xml: function (e) {
            let t = e.regex,
              n = t.concat(
                /[\p{L}_]/u,
                t.optional(/[\p{L}0-9_.-]*:/u),
                /[\p{L}0-9_.-]*/u,
              ),
              r = {
                className: "symbol",
                begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/,
              },
              i = {
                begin: /\s/,
                contains: [
                  {
                    className: "keyword",
                    begin: /#?[a-z_][a-z1-9_-]+/,
                    illegal: /\n/,
                  },
                ],
              },
              a = e.inherit(i, { begin: /\(/, end: /\)/ }),
              o = e.inherit(e.APOS_STRING_MODE, { className: "string" }),
              l = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
              s = {
                endsWithParent: !0,
                illegal: /</,
                relevance: 0,
                contains: [
                  {
                    className: "attr",
                    begin: /[\p{L}0-9._:-]+/u,
                    relevance: 0,
                  },
                  {
                    begin: /=\s*/,
                    relevance: 0,
                    contains: [
                      {
                        className: "string",
                        endsParent: !0,
                        variants: [
                          { begin: /"/, end: /"/, contains: [r] },
                          { begin: /'/, end: /'/, contains: [r] },
                          { begin: /[^\s"'=<>`]+/ },
                        ],
                      },
                    ],
                  },
                ],
              };
            return {
              name: "HTML, XML",
              aliases: [
                "html",
                "xhtml",
                "rss",
                "atom",
                "xjb",
                "xsd",
                "xsl",
                "plist",
                "wsf",
                "svg",
              ],
              case_insensitive: !0,
              unicodeRegex: !0,
              contains: [
                {
                  className: "meta",
                  begin: /<![a-z]/,
                  end: />/,
                  relevance: 10,
                  contains: [
                    i,
                    l,
                    o,
                    a,
                    {
                      begin: /\[/,
                      end: /\]/,
                      contains: [
                        {
                          className: "meta",
                          begin: /<![a-z]/,
                          end: />/,
                          contains: [i, a, l, o],
                        },
                      ],
                    },
                  ],
                },
                e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
                { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
                r,
                {
                  className: "meta",
                  end: /\?>/,
                  variants: [
                    { begin: /<\?xml/, relevance: 10, contains: [l] },
                    { begin: /<\?[a-z][a-z0-9]+/ },
                  ],
                },
                {
                  className: "tag",
                  begin: /<style(?=\s|>)/,
                  end: />/,
                  keywords: { name: "style" },
                  contains: [s],
                  starts: {
                    end: /<\/style>/,
                    returnEnd: !0,
                    subLanguage: ["css", "xml"],
                  },
                },
                {
                  className: "tag",
                  begin: /<script(?=\s|>)/,
                  end: />/,
                  keywords: { name: "script" },
                  contains: [s],
                  starts: {
                    end: /<\/script>/,
                    returnEnd: !0,
                    subLanguage: ["javascript", "handlebars", "xml"],
                  },
                },
                { className: "tag", begin: /<>|<\/>/ },
                {
                  className: "tag",
                  begin: t.concat(
                    /</,
                    t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/))),
                  ),
                  end: /\/?>/,
                  contains: [
                    { className: "name", begin: n, relevance: 0, starts: s },
                  ],
                },
                {
                  className: "tag",
                  begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
                  contains: [
                    { className: "name", begin: n, relevance: 0 },
                    { begin: />/, relevance: 0, endsParent: !0 },
                  ],
                },
              ],
            };
          },
          yaml: function (e) {
            let t = "true false yes no null",
              n = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
              r = {
                className: "string",
                relevance: 0,
                variants: [
                  { begin: /'/, end: /'/ },
                  { begin: /"/, end: /"/ },
                  { begin: /\S+/ },
                ],
                contains: [
                  e.BACKSLASH_ESCAPE,
                  {
                    className: "template-variable",
                    variants: [
                      { begin: /\{\{/, end: /\}\}/ },
                      { begin: /%\{/, end: /\}/ },
                    ],
                  },
                ],
              },
              i = e.inherit(r, {
                variants: [
                  { begin: /'/, end: /'/ },
                  { begin: /"/, end: /"/ },
                  { begin: /[^\s,{}[\]]+/ },
                ],
              }),
              a = {
                end: ",",
                endsWithParent: !0,
                excludeEnd: !0,
                keywords: t,
                relevance: 0,
              },
              o = [
                {
                  className: "attr",
                  variants: [
                    { begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)" },
                    { begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)' },
                    { begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)" },
                  ],
                },
                { className: "meta", begin: "^---\\s*$", relevance: 10 },
                {
                  className: "string",
                  begin:
                    "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*",
                },
                {
                  begin: "<%[%=-]?",
                  end: "[%-]?%>",
                  subLanguage: "ruby",
                  excludeBegin: !0,
                  excludeEnd: !0,
                  relevance: 0,
                },
                { className: "type", begin: "!\\w+!" + n },
                { className: "type", begin: "!<" + n + ">" },
                { className: "type", begin: "!" + n },
                { className: "type", begin: "!!" + n },
                { className: "meta", begin: "&" + e.UNDERSCORE_IDENT_RE + "$" },
                {
                  className: "meta",
                  begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$",
                },
                { className: "bullet", begin: "-(?=[ ]|$)", relevance: 0 },
                e.HASH_COMMENT_MODE,
                { beginKeywords: t, keywords: { literal: t } },
                {
                  className: "number",
                  begin:
                    "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b",
                },
                {
                  className: "number",
                  begin: e.C_NUMBER_RE + "\\b",
                  relevance: 0,
                },
                {
                  begin: /\{/,
                  end: /\}/,
                  contains: [a],
                  illegal: "\\n",
                  relevance: 0,
                },
                {
                  begin: "\\[",
                  end: "\\]",
                  contains: [a],
                  illegal: "\\n",
                  relevance: 0,
                },
                r,
              ],
              l = [...o];
            return (
              l.pop(),
              l.push(i),
              (a.contains = l),
              {
                name: "YAML",
                case_insensitive: !0,
                aliases: ["yml"],
                contains: o,
              }
            );
          },
        };
      var eh = n(4345),
        eb = n(3390);
      let ey = {};
      class e_ {
        constructor(e) {
          (this.options = e),
            (this.root = {
              type: "root",
              children: [],
              data: { language: void 0, relevance: 0 },
            }),
            (this.stack = [this.root]);
        }
        addText(e) {
          if ("" === e) return;
          let t = this.stack[this.stack.length - 1],
            n = t.children[t.children.length - 1];
          n && "text" === n.type
            ? (n.value += e)
            : t.children.push({ type: "text", value: e });
        }
        startScope(e) {
          this.openNode(String(e));
        }
        endScope() {
          this.closeNode();
        }
        __addSublanguage(e, t) {
          let n = this.stack[this.stack.length - 1],
            r = e.root.children;
          t
            ? n.children.push({
                type: "element",
                tagName: "span",
                properties: { className: [t] },
                children: r,
              })
            : n.children.push(...r);
        }
        openNode(e) {
          let t = this,
            n = e.split(".").map(function (e, n) {
              return n ? e + "_".repeat(n) : t.options.classPrefix + e;
            }),
            r = this.stack[this.stack.length - 1],
            i = {
              type: "element",
              tagName: "span",
              properties: { className: n },
              children: [],
            };
          r.children.push(i), this.stack.push(i);
        }
        closeNode() {
          this.stack.pop();
        }
        finalize() {}
        toHTML() {
          return "";
        }
      }
      var ev = n(1623);
      let ew = {};
      function ek(e) {
        let t = e || ew,
          n = t.aliases,
          i = t.detect || !1,
          a = t.languages || eg,
          o = t.plainText,
          l = t.prefix,
          s = t.subset,
          c = "hljs",
          u = (function (e) {
            let t = eb.newInstance();
            return (
              e && i(e),
              {
                highlight: n,
                highlightAuto: function (e, i) {
                  let a;
                  (0, eh.ok)(
                    "string" == typeof e,
                    "expected `string` as `value`",
                  );
                  let o = (i || ey).subset || r(),
                    l = -1,
                    s = 0;
                  for (; ++l < o.length; ) {
                    let r = o[l];
                    if (!t.getLanguage(r)) continue;
                    let c = n(r, e, i);
                    c.data &&
                      void 0 !== c.data.relevance &&
                      c.data.relevance > s &&
                      ((s = c.data.relevance), (a = c));
                  }
                  return (
                    a || {
                      type: "root",
                      children: [],
                      data: { language: void 0, relevance: s },
                    }
                  );
                },
                listLanguages: r,
                register: i,
                registerAlias: function (e, n) {
                  if ("string" == typeof e)
                    (0, eh.ok)(void 0 !== n),
                      t.registerAliases("string" == typeof n ? n : [...n], {
                        languageName: e,
                      });
                  else {
                    let n;
                    for (n in e)
                      if (Object.hasOwn(e, n)) {
                        let r = e[n];
                        t.registerAliases("string" == typeof r ? r : [...r], {
                          languageName: n,
                        });
                      }
                  }
                },
                registered: function (e) {
                  return !!t.getLanguage(e);
                },
              }
            );
            function n(e, n, r) {
              (0, eh.ok)("string" == typeof e, "expected `string` as `name`"),
                (0, eh.ok)(
                  "string" == typeof n,
                  "expected `string` as `value`",
                );
              let i = r || ey,
                a = "string" == typeof i.prefix ? i.prefix : "hljs-";
              if (!t.getLanguage(e))
                throw Error("Unknown language: `" + e + "` is not registered");
              t.configure({ __emitter: e_, classPrefix: a });
              let o = t.highlight(n, { ignoreIllegals: !0, language: e });
              if (o.errorRaised)
                throw Error("Could not highlight with `Highlight.js`", {
                  cause: o.errorRaised,
                });
              let l = o._emitter.root,
                s = l.data;
              return (s.language = o.language), (s.relevance = o.relevance), l;
            }
            function r() {
              return t.listLanguages();
            }
            function i(e, n) {
              if ("string" == typeof e)
                (0, eh.ok)(void 0 !== n, "expected `grammar`"),
                  t.registerLanguage(e, n);
              else {
                let n;
                for (n in e) Object.hasOwn(e, n) && t.registerLanguage(n, e[n]);
              }
            }
          })(a);
        if ((n && u.registerAlias(n), l)) {
          let e = l.indexOf("-");
          c = e > -1 ? l.slice(0, e) : l;
        }
        return function (e, t) {
          (0, ev.Vn)(e, "element", function (e, n, a) {
            let d;
            if (
              "code" !== e.tagName ||
              !a ||
              "element" !== a.type ||
              "pre" !== a.tagName
            )
              return;
            let f = (function (e) {
              let t = e.properties.className,
                n = -1;
              if (Array.isArray(t))
                for (; ++n < t.length; ) {
                  let e = String(t[n]);
                  if ("no-highlight" === e || "nohighlight" === e) return !1;
                  if ("lang-" === e.slice(0, 5)) return e.slice(5);
                  if ("language-" === e.slice(0, 9)) return e.slice(9);
                }
            })(e);
            if (!(!1 === f || (!f && !i) || (f && o && o.includes(f)))) {
              Array.isArray(e.properties.className) ||
                (e.properties.className = []),
                e.properties.className.includes(c) ||
                  e.properties.className.unshift(c);
              try {
                d = f
                  ? u.highlight(f, (0, r.l)(a), { prefix: l })
                  : u.highlightAuto((0, r.l)(a), { prefix: l, subset: s });
              } catch (n) {
                if (f && /Unknown language/.test(n.message)) {
                  t.message(
                    "Cannot highlight as `" + f + "`, it’s not registered",
                    {
                      ancestors: [a, e],
                      cause: n,
                      place: e.position,
                      ruleId: "missing-language",
                      source: "rehype-highlight",
                    },
                  );
                  return;
                }
                throw n;
              }
              !f &&
                d.data &&
                d.data.language &&
                e.properties.className.push("language-" + d.data.language),
                d.children.length > 0 && (e.children = d.children);
            }
          });
        };
      }
    },
    5280: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return E;
        },
      });
      var r = n(1634),
        i = n(5668);
      let a = /[#.]/g;
      var o = n(6103),
        l = n(3859),
        s = n(342);
      let c = new Set(["button", "menu", "reset", "submit"]),
        u = {}.hasOwnProperty;
      function d(e, t, n) {
        let r =
          n &&
          (function (e) {
            let t = {},
              n = -1;
            for (; ++n < e.length; ) t[e[n].toLowerCase()] = e[n];
            return t;
          })(n);
        return function (n, l, ...d) {
          let p,
            m = -1;
          if (null == n) (p = { type: "root", children: [] }), d.unshift(l);
          else {
            var g;
            if (
              (((p = (function (e, t) {
                let n, r;
                let i = e || "",
                  o = {},
                  l = 0;
                for (; l < i.length; ) {
                  a.lastIndex = l;
                  let e = a.exec(i),
                    t = i.slice(l, e ? e.index : i.length);
                  t &&
                    (n
                      ? "#" === n
                        ? (o.id = t)
                        : Array.isArray(o.className)
                          ? o.className.push(t)
                          : (o.className = [t])
                      : (r = t),
                    (l += t.length)),
                    e && ((n = e[0]), l++);
                }
                return {
                  type: "element",
                  tagName: r || t || "div",
                  properties: o,
                  children: [],
                };
              })(n, t)).tagName = p.tagName.toLowerCase()),
              r && u.call(r, p.tagName) && (p.tagName = r[p.tagName]),
              (g = p.tagName),
              !(null == l || "object" != typeof l || Array.isArray(l)) &&
                ("input" === g ||
                  !l.type ||
                  "string" != typeof l.type ||
                  (!("children" in l && Array.isArray(l.children)) &&
                    ("button" === g
                      ? c.has(l.type.toLowerCase())
                      : !("value" in l)))))
            ) {
              let t;
              for (t in l)
                u.call(l, t) &&
                  (function (e, t, n, r) {
                    let a;
                    let l = (0, o.s)(e, n),
                      c = -1;
                    if (null != r) {
                      if ("number" == typeof r) {
                        if (Number.isNaN(r)) return;
                        a = r;
                      } else
                        a =
                          "boolean" == typeof r
                            ? r
                            : "string" == typeof r
                              ? l.spaceSeparated
                                ? (0, s.Q)(r)
                                : l.commaSeparated
                                  ? (0, i.Q)(r)
                                  : l.commaOrSpaceSeparated
                                    ? (0, s.Q)((0, i.Q)(r).join(" "))
                                    : f(l, l.property, r)
                              : Array.isArray(r)
                                ? r.concat()
                                : "style" === l.property
                                  ? (function (e) {
                                      let t;
                                      let n = [];
                                      for (t in e)
                                        u.call(e, t) &&
                                          n.push([t, e[t]].join(": "));
                                      return n.join("; ");
                                    })(r)
                                  : String(r);
                      if (Array.isArray(a)) {
                        let e = [];
                        for (; ++c < a.length; ) {
                          let t = f(l, l.property, a[c]);
                          e[c] = t;
                        }
                        a = e;
                      }
                      if (
                        "className" === l.property &&
                        Array.isArray(t.className)
                      ) {
                        let e = a;
                        a = t.className.concat(e);
                      }
                      t[l.property] = a;
                    }
                  })(e, p.properties, t, l[t]);
            } else d.unshift(l);
          }
          for (; ++m < d.length; )
            !(function e(t, n) {
              let r = -1;
              if (null == n);
              else if ("string" == typeof n || "number" == typeof n)
                t.push({ type: "text", value: String(n) });
              else if (Array.isArray(n)) for (; ++r < n.length; ) e(t, n[r]);
              else if ("object" == typeof n && "type" in n)
                "root" === n.type ? e(t, n.children) : t.push(n);
              else
                throw Error("Expected node, nodes, or string, got `" + n + "`");
            })(p.children, d[m]);
          return (
            "element" === p.type &&
              "template" === p.tagName &&
              ((p.content = { type: "root", children: p.children }),
              (p.children = [])),
            p
          );
        };
      }
      function f(e, t, n) {
        if ("string" == typeof n) {
          if (e.number && n && !Number.isNaN(Number(n))) return Number(n);
          if (
            (e.boolean || e.overloadedBoolean) &&
            ("" === n || (0, l.F)(n) === (0, l.F)(t))
          )
            return !0;
        }
        return n;
      }
      let p = d(r.dy, "div"),
        m = d(r.YP, "g", [
          "altGlyph",
          "altGlyphDef",
          "altGlyphItem",
          "animateColor",
          "animateMotion",
          "animateTransform",
          "clipPath",
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "foreignObject",
          "glyphRef",
          "linearGradient",
          "radialGradient",
          "solidColor",
          "textArea",
          "textPath",
        ]),
        g = {
          html: "http://www.w3.org/1999/xhtml",
          svg: "http://www.w3.org/2000/svg",
        };
      function h(e, t) {
        let n = (function (e, t) {
          switch (e.nodeType) {
            case 1:
              return (function (e, t) {
                let n = e.namespaceURI,
                  r = n === g.svg ? m : p,
                  i = n === g.html ? e.tagName.toLowerCase() : e.tagName,
                  a = n === g.html && "template" === i ? e.content : e,
                  o = e.getAttributeNames(),
                  l = {},
                  s = -1;
                for (; ++s < o.length; ) l[o[s]] = e.getAttribute(o[s]) || "";
                return r(i, l, b(a, t));
              })(e, t);
            case 3:
              return { type: "text", value: e.nodeValue || "" };
            case 8:
              return { type: "comment", value: e.nodeValue || "" };
            case 9:
            case 11:
              return { type: "root", children: b(e, t) };
            case 10:
              return { type: "doctype" };
            default:
              return;
          }
        })(e, t);
        return n && t.afterTransform && t.afterTransform(e, n), n;
      }
      function b(e, t) {
        let n = e.childNodes,
          r = [],
          i = -1;
        for (; ++i < n.length; ) {
          let e = h(n[i], t);
          void 0 !== e && r.push(e);
        }
        return r;
      }
      let y = new DOMParser();
      var _ = n(8535),
        v = n(1008),
        w = n(8718);
      let k = {},
        x = [];
      function E(e) {
        let t = e || k;
        return function (e, n) {
          (0, w.S4)(e, "element", function (e, r) {
            let i;
            let a = Array.isArray(e.properties.className)
                ? e.properties.className
                : x,
              o = a.includes("language-math"),
              l = a.includes("math-display"),
              s = a.includes("math-inline"),
              c = l;
            if (!o && !l && !s) return;
            let u = r[r.length - 1],
              d = e;
            if (
              ("code" === e.tagName &&
                o &&
                u &&
                "element" === u.type &&
                "pre" === u.tagName &&
                ((d = u), (u = r[r.length - 2]), (c = !0)),
              !u)
            )
              return;
            let f = (0, _.l)(d, { whitespace: "pre" });
            try {
              i = v.Z.renderToString(f, {
                ...t,
                displayMode: c,
                throwOnError: !0,
              });
            } catch (o) {
              let a = o.name.toLowerCase();
              n.message("Could not render math with KaTeX", {
                ancestors: [...r, e],
                cause: o,
                place: e.position,
                ruleId: a,
                source: "rehype-katex",
              }),
                (i =
                  "parseerror" === a
                    ? v.Z.renderToString(f, {
                        ...t,
                        displayMode: c,
                        strict: "ignore",
                        throwOnError: !1,
                      })
                    : [
                        {
                          type: "element",
                          tagName: "span",
                          properties: {
                            className: ["katex-error"],
                            style: "color:" + (t.errorColor || "#cc0000"),
                            title: String(o),
                          },
                          children: [{ type: "text", value: f }],
                        },
                      ]);
            }
            if ("string" == typeof i) {
              var p;
              i = ((p = i),
              h(
                (function (e) {
                  let t = document.createElement("template");
                  return (t.innerHTML = e), t.content;
                })(p),
                {},
              ) || { type: "root", children: [] }).children;
            }
            let m = u.children.indexOf(d);
            return u.children.splice(m, 1, ...i), w.AM;
          });
        };
      }
    },
    3687: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return B;
        },
      });
      var r = n(5668),
        i = n(4345);
      let a = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        o = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
        l = {};
      function s(e, t) {
        return ((t || l).jsx ? o : a).test(e);
      }
      let c = /[ \t\n\f\r]/g;
      function u(e) {
        return "" === e.replace(c, "");
      }
      var d = n(1634),
        f = n(6103);
      let p = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink",
      };
      var m = n(342),
        g = n(5174),
        h = g.default || g,
        b = n(3980),
        y = n(2013);
      let _ = {}.hasOwnProperty,
        v = new Map(),
        w = /[A-Z]/g,
        k = /-([a-z])/g,
        x = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
        E = new Set(["td", "th"]),
        D = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
      function C(e, t, n) {
        return "element" === t.type
          ? (function (e, t, n) {
              let i = e.schema,
                a = i;
              "svg" === t.tagName.toLowerCase() &&
                "html" === i.space &&
                ((a = d.YP), (e.schema = a)),
                e.ancestors.push(t);
              let o = N(e, t.tagName, !1),
                l = (function (e, t) {
                  let n, i;
                  let a = {};
                  for (i in t.properties)
                    if ("children" !== i && _.call(t.properties, i)) {
                      let o = (function (e, t, n) {
                        let i = (0, f.s)(e.schema, t);
                        if (
                          !(
                            null == n ||
                            ("number" == typeof n && Number.isNaN(n))
                          )
                        ) {
                          if (
                            (Array.isArray(n) &&
                              (n = i.commaSeparated
                                ? (0, r.P)(n)
                                : (0, m.P)(n)),
                            "style" === i.property)
                          ) {
                            let t =
                              "object" == typeof n
                                ? n
                                : (function (e, t) {
                                    let n = {};
                                    try {
                                      h(t, function (e, t) {
                                        let r = e;
                                        "--" !== r.slice(0, 2) &&
                                          ("-ms-" === r.slice(0, 4) &&
                                            (r = "ms-" + r.slice(4)),
                                          (r = r.replace(k, M))),
                                          (n[r] = t);
                                      });
                                    } catch (t) {
                                      if (!e.ignoreInvalidStyle) {
                                        let n = new y.$(
                                          "Cannot parse `style` attribute",
                                          {
                                            ancestors: e.ancestors,
                                            cause: t,
                                            ruleId: "style",
                                            source: "hast-util-to-jsx-runtime",
                                          },
                                        );
                                        throw (
                                          ((n.file = e.filePath || void 0),
                                          (n.url =
                                            D +
                                            "#cannot-parse-style-attribute"),
                                          n)
                                        );
                                      }
                                    }
                                    return n;
                                  })(e, String(n));
                            return (
                              "css" === e.stylePropertyNameCase &&
                                (t = (function (e) {
                                  let t;
                                  let n = {};
                                  for (t in e)
                                    _.call(e, t) &&
                                      (n[
                                        (function (e) {
                                          let t = e.replace(w, T);
                                          return (
                                            "ms-" === t.slice(0, 3) &&
                                              (t = "-" + t),
                                            t
                                          );
                                        })(t)
                                      ] = e[t]);
                                  return n;
                                })(t)),
                              ["style", t]
                            );
                          }
                          return [
                            "react" === e.elementAttributeNameCase && i.space
                              ? p[i.property] || i.property
                              : i.attribute,
                            n,
                          ];
                        }
                      })(e, i, t.properties[i]);
                      if (o) {
                        let [r, i] = o;
                        e.tableCellAlignToStyle &&
                        "align" === r &&
                        "string" == typeof i &&
                        E.has(t.tagName)
                          ? (n = i)
                          : (a[r] = i);
                      }
                    }
                  return (
                    n &&
                      ((a.style || (a.style = {}))[
                        "css" === e.stylePropertyNameCase
                          ? "text-align"
                          : "textAlign"
                      ] = n),
                    a
                  );
                })(e, t),
                s = S(e, t);
              return (
                x.has(t.tagName) &&
                  (s = s.filter(function (e) {
                    return (
                      "string" != typeof e ||
                      !("object" == typeof e
                        ? "text" === e.type && u(e.value)
                        : u(e))
                    );
                  })),
                A(e, l, o, t),
                F(l, s),
                e.ancestors.pop(),
                (e.schema = i),
                e.create(t, o, l, n)
              );
            })(e, t, n)
          : "mdxFlowExpression" === t.type || "mdxTextExpression" === t.type
            ? (function (e, t) {
                if (t.data && t.data.estree && e.evaluater) {
                  let n = t.data.estree.body[0];
                  return (
                    (0, i.ok)("ExpressionStatement" === n.type),
                    e.evaluater.evaluateExpression(n.expression)
                  );
                }
                O(e, t.position);
              })(e, t)
            : "mdxJsxFlowElement" === t.type || "mdxJsxTextElement" === t.type
              ? (function (e, t, n) {
                  let r = e.schema,
                    a = r;
                  "svg" === t.name &&
                    "html" === r.space &&
                    ((a = d.YP), (e.schema = a)),
                    e.ancestors.push(t);
                  let o = null === t.name ? e.Fragment : N(e, t.name, !0),
                    l = (function (e, t) {
                      let n = {};
                      for (let r of t.attributes)
                        if ("mdxJsxExpressionAttribute" === r.type) {
                          if (r.data && r.data.estree && e.evaluater) {
                            let t = r.data.estree.body[0];
                            (0, i.ok)("ExpressionStatement" === t.type);
                            let a = t.expression;
                            (0, i.ok)("ObjectExpression" === a.type);
                            let o = a.properties[0];
                            (0, i.ok)("SpreadElement" === o.type),
                              Object.assign(
                                n,
                                e.evaluater.evaluateExpression(o.argument),
                              );
                          } else O(e, t.position);
                        } else {
                          let a;
                          let o = r.name;
                          if (r.value && "object" == typeof r.value) {
                            if (
                              r.value.data &&
                              r.value.data.estree &&
                              e.evaluater
                            ) {
                              let t = r.value.data.estree.body[0];
                              (0, i.ok)("ExpressionStatement" === t.type),
                                (a = e.evaluater.evaluateExpression(
                                  t.expression,
                                ));
                            } else O(e, t.position);
                          } else a = null === r.value || r.value;
                          n[o] = a;
                        }
                      return n;
                    })(e, t),
                    s = S(e, t);
                  return (
                    A(e, l, o, t),
                    F(l, s),
                    e.ancestors.pop(),
                    (e.schema = r),
                    e.create(t, o, l, n)
                  );
                })(e, t, n)
              : "mdxjsEsm" === t.type
                ? (function (e, t) {
                    if (t.data && t.data.estree && e.evaluater)
                      return e.evaluater.evaluateProgram(t.data.estree);
                    O(e, t.position);
                  })(e, t)
                : "root" === t.type
                  ? (function (e, t, n) {
                      let r = {};
                      return F(r, S(e, t)), e.create(t, e.Fragment, r, n);
                    })(e, t, n)
                  : "text" === t.type
                    ? t.value
                    : void 0;
      }
      function A(e, t, n, r) {
        "string" != typeof n && n !== e.Fragment && e.passNode && (t.node = r);
      }
      function F(e, t) {
        if (t.length > 0) {
          let n = t.length > 1 ? t : t[0];
          n && (e.children = n);
        }
      }
      function S(e, t) {
        let n = [],
          r = -1,
          i = e.passKeys ? new Map() : v;
        for (; ++r < t.children.length; ) {
          let a;
          let o = t.children[r];
          if (e.passKeys) {
            let e =
              "element" === o.type
                ? o.tagName
                : "mdxJsxFlowElement" === o.type ||
                    "mdxJsxTextElement" === o.type
                  ? o.name
                  : void 0;
            if (e) {
              let t = i.get(e) || 0;
              (a = e + "-" + t), i.set(e, t + 1);
            }
          }
          let l = C(e, o, a);
          void 0 !== l && n.push(l);
        }
        return n;
      }
      function N(e, t, n) {
        let r;
        if (n) {
          if (t.includes(".")) {
            let e;
            let n = t.split("."),
              a = -1;
            for (; ++a < n.length; ) {
              let t = s(n[a])
                ? { type: "Identifier", name: n[a] }
                : { type: "Literal", value: n[a] };
              e = e
                ? {
                    type: "MemberExpression",
                    object: e,
                    property: t,
                    computed: !!(a && "Literal" === t.type),
                    optional: !1,
                  }
                : t;
            }
            (0, i.ok)(e, "always a result"), (r = e);
          } else
            r =
              s(t) && !/^[a-z]/.test(t)
                ? { type: "Identifier", name: t }
                : { type: "Literal", value: t };
        } else r = { type: "Literal", value: t };
        if ("Literal" === r.type) {
          let t = r.value;
          return _.call(e.components, t) ? e.components[t] : t;
        }
        if (e.evaluater) return e.evaluater.evaluateExpression(r);
        O(e);
      }
      function O(e, t) {
        let n = new y.$("Cannot handle MDX estrees without `createEvaluater`", {
          ancestors: e.ancestors,
          place: t,
          ruleId: "mdx-estree",
          source: "hast-util-to-jsx-runtime",
        });
        throw (
          ((n.file = e.filePath || void 0),
          (n.url = D + "#cannot-handle-mdx-estrees-without-createevaluater"),
          n)
        );
      }
      function M(e, t) {
        return t.toUpperCase();
      }
      function T(e) {
        return "-" + e.toLowerCase();
      }
      function B(e) {
        this.compiler = function (t, n) {
          return (function (e, t) {
            var n, r, i;
            let a;
            if (!t || void 0 === t.Fragment)
              throw TypeError("Expected `Fragment` in options");
            let o = t.filePath || void 0;
            if (t.development) {
              if ("function" != typeof t.jsxDEV)
                throw TypeError(
                  "Expected `jsxDEV` in options when `development: true`",
                );
              (n = t.jsxDEV),
                (a = function (e, t, r, i) {
                  let a = Array.isArray(r.children),
                    l = (0, b.Pk)(e);
                  return n(
                    t,
                    r,
                    i,
                    a,
                    {
                      columnNumber: l ? l.column - 1 : void 0,
                      fileName: o,
                      lineNumber: l ? l.line : void 0,
                    },
                    void 0,
                  );
                });
            } else {
              if ("function" != typeof t.jsx)
                throw TypeError("Expected `jsx` in production options");
              if ("function" != typeof t.jsxs)
                throw TypeError("Expected `jsxs` in production options");
              (r = t.jsx),
                (i = t.jsxs),
                (a = function (e, t, n, a) {
                  let o = Array.isArray(n.children) ? i : r;
                  return a ? o(t, n, a) : o(t, n);
                });
            }
            let l = {
                Fragment: t.Fragment,
                ancestors: [],
                components: t.components || {},
                create: a,
                elementAttributeNameCase: t.elementAttributeNameCase || "react",
                evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
                filePath: o,
                ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
                passKeys: !1 !== t.passKeys,
                passNode: t.passNode || !1,
                schema: "svg" === t.space ? d.YP : d.dy,
                stylePropertyNameCase: t.stylePropertyNameCase || "dom",
                tableCellAlignToStyle: !1 !== t.tableCellAlignToStyle,
              },
              s = C(l, e, void 0);
            return s && "string" != typeof s
              ? s
              : l.create(e, l.Fragment, { children: s || void 0 }, void 0);
          })(t, { filePath: n.path, ...e });
        };
      }
    },
    1924: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      let r =
          /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,
        i = Object.hasOwnProperty;
      class a {
        constructor() {
          this.occurrences, this.reset();
        }
        slug(e, t) {
          var n, a;
          let o =
              ((n = e),
              (a = !0 === t),
              "string" != typeof n
                ? ""
                : (a || (n = n.toLowerCase()),
                  n.replace(r, "").replace(/ /g, "-"))),
            l = o;
          for (; i.call(this.occurrences, o); )
            this.occurrences[l]++, (o = l + "-" + this.occurrences[l]);
          return (this.occurrences[o] = 0), o;
        }
        reset() {
          this.occurrences = Object.create(null);
        }
      }
      var o = n(639),
        l = n(1623);
      let s = {},
        c = new a();
      function u(e) {
        let t = (e || s).prefix || "";
        return function (e) {
          c.reset(),
            (0, l.Vn)(e, "element", function (e) {
              (0, o.B)(e) &&
                !e.properties.id &&
                (e.properties.id =
                  t +
                  c.slug(
                    "children" in e
                      ? (function e(t) {
                          let n = -1,
                            r = [];
                          for (; ++n < t.children.length; ) {
                            var i;
                            r[n] =
                              "text" === (i = t.children[n]).type
                                ? i.value
                                : "children" in i
                                  ? e(i)
                                  : "";
                          }
                          return r.join("");
                        })(e)
                      : "value" in e
                        ? e.value
                        : "",
                  ));
            });
        };
      }
    },
    3846: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Z;
        },
      });
      var r = n(4345);
      let i = [
          "AElig",
          "AMP",
          "Aacute",
          "Acirc",
          "Agrave",
          "Aring",
          "Atilde",
          "Auml",
          "COPY",
          "Ccedil",
          "ETH",
          "Eacute",
          "Ecirc",
          "Egrave",
          "Euml",
          "GT",
          "Iacute",
          "Icirc",
          "Igrave",
          "Iuml",
          "LT",
          "Ntilde",
          "Oacute",
          "Ocirc",
          "Ograve",
          "Oslash",
          "Otilde",
          "Ouml",
          "QUOT",
          "REG",
          "THORN",
          "Uacute",
          "Ucirc",
          "Ugrave",
          "Uuml",
          "Yacute",
          "aacute",
          "acirc",
          "acute",
          "aelig",
          "agrave",
          "amp",
          "aring",
          "atilde",
          "auml",
          "brvbar",
          "ccedil",
          "cedil",
          "cent",
          "copy",
          "curren",
          "deg",
          "divide",
          "eacute",
          "ecirc",
          "egrave",
          "eth",
          "euml",
          "frac12",
          "frac14",
          "frac34",
          "gt",
          "iacute",
          "icirc",
          "iexcl",
          "igrave",
          "iquest",
          "iuml",
          "laquo",
          "lt",
          "macr",
          "micro",
          "middot",
          "nbsp",
          "not",
          "ntilde",
          "oacute",
          "ocirc",
          "ograve",
          "ordf",
          "ordm",
          "oslash",
          "otilde",
          "ouml",
          "para",
          "plusmn",
          "pound",
          "quot",
          "raquo",
          "reg",
          "sect",
          "shy",
          "sup1",
          "sup2",
          "sup3",
          "szlig",
          "thorn",
          "times",
          "uacute",
          "ucirc",
          "ugrave",
          "uml",
          "uuml",
          "yacute",
          "yen",
          "yuml",
        ],
        a = {
          0: "�",
          128: "€",
          130: "‚",
          131: "ƒ",
          132: "„",
          133: "…",
          134: "†",
          135: "‡",
          136: "ˆ",
          137: "‰",
          138: "Š",
          139: "‹",
          140: "Œ",
          142: "Ž",
          145: "‘",
          146: "’",
          147: "“",
          148: "”",
          149: "•",
          150: "–",
          151: "—",
          152: "˜",
          153: "™",
          154: "š",
          155: "›",
          156: "œ",
          158: "ž",
          159: "Ÿ",
        };
      function o(e) {
        let t = "string" == typeof e ? e.charCodeAt(0) : e;
        return t >= 48 && t <= 57;
      }
      function l(e) {
        let t = "string" == typeof e ? e.charCodeAt(0) : e;
        return (
          (t >= 97 && t <= 102) || (t >= 65 && t <= 70) || (t >= 48 && t <= 57)
        );
      }
      function s(e) {
        return (
          (function (e) {
            let t = "string" == typeof e ? e.charCodeAt(0) : e;
            return (t >= 97 && t <= 122) || (t >= 65 && t <= 90);
          })(e) || o(e)
        );
      }
      var c = n(4301);
      let u = String.fromCharCode,
        d = [
          "",
          "Named character references must be terminated by a semicolon",
          "Numeric character references must be terminated by a semicolon",
          "Named character references cannot be empty",
          "Numeric character references cannot be empty",
          "Named character references must be known",
          "Numeric character references cannot be disallowed",
          "Numeric character references cannot be outside the permissible Unicode range",
        ];
      function f(e, t = {}) {
        let n, r, f;
        let p =
            "string" == typeof t.additional
              ? t.additional.charCodeAt(0)
              : t.additional,
          m = [],
          g = 0,
          h = -1,
          b = "";
        t.position &&
          ("start" in t.position || "indent" in t.position
            ? ((r = t.position.indent), (n = t.position.start))
            : (n = t.position));
        let y = (n ? n.line : 0) || 1,
          _ = (n ? n.column : 0) || 1,
          v = x();
        for (g--; ++g <= e.length; )
          if (
            (10 === f && (_ = (r ? r[h] : 0) || 1),
            38 === (f = e.charCodeAt(g)))
          ) {
            let n;
            let r = e.charCodeAt(g + 1);
            if (
              9 === r ||
              10 === r ||
              12 === r ||
              32 === r ||
              38 === r ||
              60 === r ||
              Number.isNaN(r) ||
              (p && r === p)
            ) {
              (b += u(f)), _++;
              continue;
            }
            let d = g + 1,
              h = d,
              y = d;
            if (35 === r) {
              y = ++h;
              let t = e.charCodeAt(y);
              88 === t || 120 === t
                ? ((n = "hexadecimal"), (y = ++h))
                : (n = "decimal");
            } else n = "named";
            let C = "",
              A = "",
              F = "",
              S = "named" === n ? s : "decimal" === n ? o : l;
            for (y--; ++y <= e.length; ) {
              let t = e.charCodeAt(y);
              if (!S(t)) break;
              (F += u(t)),
                "named" === n && i.includes(F) && ((C = F), (A = (0, c.T)(F)));
            }
            let N = 59 === e.charCodeAt(y);
            if (N) {
              y++;
              let e = "named" === n && (0, c.T)(F);
              e && ((C = F), (A = e));
            }
            let O = 1 + y - d,
              M = "";
            if (N || !1 !== t.nonTerminated) {
              if (F) {
                if ("named" === n) {
                  if (N && !A) E(5, 1);
                  else if (
                    (C !== F && ((O = 1 + (y = h + C.length) - h), (N = !1)),
                    !N)
                  ) {
                    let n = C ? 1 : 3;
                    if (t.attribute) {
                      let t = e.charCodeAt(y);
                      61 === t
                        ? (E(n, O), (A = ""))
                        : s(t)
                          ? (A = "")
                          : E(n, O);
                    } else E(n, O);
                  }
                  M = A;
                } else {
                  var w, k;
                  N || E(2, O);
                  let e = Number.parseInt(F, "hexadecimal" === n ? 16 : 10);
                  if (((w = e) >= 55296 && w <= 57343) || w > 1114111)
                    E(7, O), (M = u(65533));
                  else if (e in a) E(6, O), (M = a[e]);
                  else {
                    let t = "";
                    (((k = e) >= 1 && k <= 8) ||
                      11 === k ||
                      (k >= 13 && k <= 31) ||
                      (k >= 127 && k <= 159) ||
                      (k >= 64976 && k <= 65007) ||
                      (65535 & k) == 65535 ||
                      (65535 & k) == 65534) &&
                      E(6, O),
                      e > 65535 &&
                        ((e -= 65536),
                        (t += u((e >>> 10) | 55296)),
                        (e = 56320 | (1023 & e))),
                      (M = t + u(e));
                  }
                }
              } else "named" !== n && E(4, O);
            }
            if (M) {
              D(), (v = x()), (g = y - 1), (_ += y - d + 1), m.push(M);
              let n = x();
              n.offset++,
                t.reference &&
                  t.reference.call(
                    t.referenceContext,
                    M,
                    { start: v, end: n },
                    e.slice(d - 1, y),
                  ),
                (v = n);
            } else
              (F = e.slice(d - 1, y)), (b += F), (_ += F.length), (g = y - 1);
          } else
            10 === f && (y++, h++, (_ = 0)),
              Number.isNaN(f) ? D() : ((b += u(f)), _++);
        return m.join("");
        function x() {
          return { line: y, column: _, offset: g + ((n ? n.offset : 0) || 0) };
        }
        function E(e, n) {
          let r;
          t.warning &&
            ((r = x()),
            (r.column += n),
            (r.offset += n),
            t.warning.call(t.warningContext, d[e], r, e));
        }
        function D() {
          b &&
            (m.push(b),
            t.text && t.text.call(t.textContext, b, { start: v, end: x() }),
            (b = ""));
        }
      }
      function p(e) {
        return "&#x" + e.toString(16).toUpperCase() + ";";
      }
      var m = n(8718);
      let g = {}.hasOwnProperty,
        h = /^[^\t\n\r "#'.<=>`}]+$/;
      function b(e) {
        v.call(this, "containerDirective", e);
      }
      function y(e) {
        v.call(this, "leafDirective", e);
      }
      function _(e) {
        v.call(this, "textDirective", e);
      }
      function v(e, t) {
        this.enter({ type: e, name: "", attributes: {}, children: [] }, t);
      }
      function w(e) {
        let t = this.stack[this.stack.length - 1];
        (0, r.ok)(
          "containerDirective" === t.type ||
            "leafDirective" === t.type ||
            "textDirective" === t.type,
        ),
          (t.name = this.sliceSerialize(e));
      }
      function k(e) {
        this.enter(
          { type: "paragraph", data: { directiveLabel: !0 }, children: [] },
          e,
        );
      }
      function x(e) {
        this.exit(e);
      }
      function E() {
        (this.data.directiveAttributes = []), this.buffer();
      }
      function D(e) {
        let t = this.data.directiveAttributes;
        (0, r.ok)(t, "expected `directiveAttributes`"),
          t.push(["id", f(this.sliceSerialize(e), { attribute: !0 })]);
      }
      function C(e) {
        let t = this.data.directiveAttributes;
        (0, r.ok)(t, "expected `directiveAttributes`"),
          t.push(["class", f(this.sliceSerialize(e), { attribute: !0 })]);
      }
      function A(e) {
        let t = this.data.directiveAttributes;
        (0, r.ok)(t, "expected `directiveAttributes`"),
          (t[t.length - 1][1] = f(this.sliceSerialize(e), { attribute: !0 }));
      }
      function F(e) {
        let t = this.data.directiveAttributes;
        (0, r.ok)(t, "expected `directiveAttributes`"),
          t.push([this.sliceSerialize(e), ""]);
      }
      function S() {
        let e = this.data.directiveAttributes;
        (0, r.ok)(e, "expected `directiveAttributes`");
        let t = {},
          n = -1;
        for (; ++n < e.length; ) {
          let r = e[n];
          "class" === r[0] && t.class
            ? (t.class += " " + r[1])
            : (t[r[0]] = r[1]);
        }
        (this.data.directiveAttributes = void 0), this.resume();
        let i = this.stack[this.stack.length - 1];
        (0, r.ok)(
          "containerDirective" === i.type ||
            "leafDirective" === i.type ||
            "textDirective" === i.type,
        ),
          (i.attributes = t);
      }
      function N(e) {
        this.exit(e);
      }
      function O(e, t, n, r) {
        let i, a;
        let o = n.createTracker(r),
          l =
            ((a = 0),
            "containerDirective" === e.type
              ? ((0, m.S4)(e, function (e, t) {
                  if ("containerDirective" === e.type) {
                    let e = t.length,
                      n = 0;
                    for (; e--; ) "containerDirective" === t[e].type && n++;
                    n > a && (a = n);
                  }
                }),
                (a += 3))
              : (a = "leafDirective" === e.type ? 2 : 1),
            ":".repeat(a)),
          s = n.enter(e.type),
          c = o.move(l + (e.name || ""));
        if ("containerDirective" === e.type) {
          let t = (e.children || [])[0];
          i = M(t) ? t : void 0;
        } else i = e;
        if (i && i.children && i.children.length > 0) {
          let t = n.enter("label"),
            r = `${e.type}Label`,
            a = n.enter(r);
          (c += o.move("[")),
            (c +=
              o.move(
                n.containerPhrasing(i, {
                  ...o.current(),
                  before: c,
                  after: "]",
                }),
              ) + o.move("]")),
            a(),
            t();
        }
        if (
          ((c += o.move(
            (function (e, t) {
              let n, r, i, a;
              let o = t.options.quote || '"',
                l = "textDirective" === e.type ? [o] : [o, "\n", "\r"],
                s = e.attributes || {},
                c = [];
              for (a in s)
                if (g.call(s, a) && void 0 !== s[a] && null !== s[a]) {
                  let e = String(s[a]);
                  if ("id" === a) i = h.test(e) ? "#" + e : u("id", e);
                  else if ("class" === a) {
                    let t = e.split(/[\t\n\r ]+/g),
                      i = [],
                      a = [],
                      o = -1;
                    for (; ++o < t.length; ) (h.test(t[o]) ? a : i).push(t[o]);
                    (n = i.length > 0 ? u("class", i.join(" ")) : ""),
                      (r = a.length > 0 ? "." + a.join(".") : "");
                  } else c.push(u(a, e));
                }
              return (
                n && c.unshift(n),
                r && c.unshift(r),
                i && c.unshift(i),
                c.length > 0 ? "{" + c.join(" ") + "}" : ""
              );
              function u(e, t) {
                return (
                  e +
                  (t
                    ? "=" +
                      o +
                      (function (e, t) {
                        if (
                          ((e = e.replace(
                            t.subset
                              ? (function (e) {
                                  let t = [],
                                    n = -1;
                                  for (; ++n < e.length; )
                                    t.push(
                                      e[n].replace(
                                        /[|\\{}()[\]^$+*?.]/g,
                                        "\\$&",
                                      ),
                                    );
                                  return RegExp("(?:" + t.join("|") + ")", "g");
                                })(t.subset)
                              : /["&'<>`]/g,
                            n,
                          )),
                          t.subset || t.escapeOnly)
                        )
                          return e;
                        return e
                          .replace(
                            /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                            function (e, n, r) {
                              return t.format(
                                (e.charCodeAt(0) - 55296) * 1024 +
                                  e.charCodeAt(1) -
                                  56320 +
                                  65536,
                                r.charCodeAt(n + 2),
                                t,
                              );
                            },
                          )
                          .replace(
                            /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
                            n,
                          );
                        function n(e, n, r) {
                          return t.format(
                            e.charCodeAt(0),
                            r.charCodeAt(n + 1),
                            t,
                          );
                        }
                      })(t, Object.assign({ format: p }, { subset: l })) +
                      o
                    : "")
                );
              }
            })(e, n),
          )),
          "containerDirective" === e.type)
        ) {
          let t = (e.children || [])[0],
            r = e;
          M(t) && (r = Object.assign({}, e, { children: e.children.slice(1) })),
            r &&
              r.children &&
              r.children.length > 0 &&
              (c += o.move("\n") + o.move(n.containerFlow(r, o.current()))),
            (c += o.move("\n" + l));
        }
        return s(), c;
      }
      function M(e) {
        return !!(
          e &&
          "paragraph" === e.type &&
          e.data &&
          e.data.directiveLabel
        );
      }
      O.peek = function () {
        return ":";
      };
      var T = n(2761),
        B = n(5459),
        I = n(6226);
      function L(e, t, n, r, i, a, o, l, s, c, u, d, f, p, m) {
        let g, h;
        return function (t) {
          return e.enter(r), e.enter(i), e.consume(t), e.exit(i), b;
        };
        function b(t) {
          return 35 === t
            ? ((g = o), y(t))
            : 46 === t
              ? ((g = l), y(t))
              : 58 === t || 95 === t || (0, B.jv)(t)
                ? (e.enter(a), e.enter(s), e.consume(t), w)
                : m && (0, B.xz)(t)
                  ? (0, T.f)(e, b, "whitespace")(t)
                  : !m && (0, B.z3)(t)
                    ? (0, I.S)(e, b)(t)
                    : S(t);
        }
        function y(t) {
          let n = g + "Marker";
          return e.enter(a), e.enter(g), e.enter(n), e.consume(t), e.exit(n), _;
        }
        function _(t) {
          if (
            null === t ||
            34 === t ||
            35 === t ||
            39 === t ||
            46 === t ||
            60 === t ||
            61 === t ||
            62 === t ||
            96 === t ||
            125 === t ||
            (0, B.z3)(t)
          )
            return n(t);
          let r = g + "Value";
          return e.enter(r), e.consume(t), v;
        }
        function v(t) {
          if (
            null === t ||
            34 === t ||
            39 === t ||
            60 === t ||
            61 === t ||
            62 === t ||
            96 === t
          )
            return n(t);
          if (35 === t || 46 === t || 125 === t || (0, B.z3)(t)) {
            let n = g + "Value";
            return e.exit(n), e.exit(g), e.exit(a), b(t);
          }
          return e.consume(t), v;
        }
        function w(t) {
          return 45 === t || 46 === t || 58 === t || 95 === t || (0, B.H$)(t)
            ? (e.consume(t), w)
            : (e.exit(s), m && (0, B.xz)(t))
              ? (0, T.f)(e, k, "whitespace")(t)
              : !m && (0, B.z3)(t)
                ? (0, I.S)(e, k)(t)
                : k(t);
        }
        function k(t) {
          return 61 === t
            ? (e.enter(c), e.consume(t), e.exit(c), x)
            : (e.exit(a), b(t));
        }
        function x(t) {
          return null === t ||
            60 === t ||
            61 === t ||
            62 === t ||
            96 === t ||
            125 === t ||
            (m && (0, B.Ch)(t))
            ? n(t)
            : 34 === t || 39 === t
              ? (e.enter(u), e.enter(f), e.consume(t), e.exit(f), (h = t), D)
              : m && (0, B.xz)(t)
                ? (0, T.f)(e, x, "whitespace")(t)
                : !m && (0, B.z3)(t)
                  ? (0, I.S)(e, x)(t)
                  : (e.enter(d), e.enter(p), e.consume(t), (h = void 0), E);
        }
        function E(t) {
          return null === t ||
            34 === t ||
            39 === t ||
            60 === t ||
            61 === t ||
            62 === t ||
            96 === t
            ? n(t)
            : 125 === t || (0, B.z3)(t)
              ? (e.exit(p), e.exit(d), e.exit(a), b(t))
              : (e.consume(t), E);
        }
        function D(t) {
          return t === h
            ? (e.enter(f), e.consume(t), e.exit(f), e.exit(u), e.exit(a), F)
            : (e.enter(d), C(t));
        }
        function C(t) {
          return t === h
            ? (e.exit(d), D(t))
            : null === t
              ? n(t)
              : (0, B.Ch)(t)
                ? m
                  ? n(t)
                  : (0, I.S)(e, C)(t)
                : (e.enter(p), e.consume(t), A);
        }
        function A(t) {
          return t === h || null === t || (0, B.Ch)(t)
            ? (e.exit(p), C(t))
            : (e.consume(t), A);
        }
        function F(e) {
          return 125 === e || (0, B.z3)(e) ? b(e) : S(e);
        }
        function S(a) {
          return 125 === a
            ? (e.enter(i), e.consume(a), e.exit(i), e.exit(r), t)
            : n(a);
        }
      }
      function R(e, t, n, r, i, a, o) {
        let l,
          s = 0,
          c = 0;
        return function (t) {
          return e.enter(r), e.enter(i), e.consume(t), e.exit(i), u;
        };
        function u(n) {
          return 93 === n
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
            : (e.enter(a), d(n));
        }
        function d(t) {
          if (93 === t && !c) return m(t);
          let n = e.enter("chunkText", { contentType: "text", previous: l });
          return l && (l.next = n), (l = n), f(t);
        }
        function f(t) {
          return null === t || s > 999 || (91 === t && ++c > 32)
            ? n(t)
            : 93 !== t || c--
              ? (0, B.Ch)(t)
                ? o
                  ? n(t)
                  : (e.consume(t), e.exit("chunkText"), d)
                : (e.consume(t), 92 === t ? p : f)
              : (e.exit("chunkText"), m(t));
        }
        function p(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), s++, f)
            : f(t);
        }
        function m(n) {
          return e.exit(a), e.enter(i), e.consume(n), e.exit(i), e.exit(r), t;
        }
      }
      function z(e, t, n, r) {
        let i = this;
        return function (t) {
          return (0, B.jv)(t) ? (e.enter(r), e.consume(t), a) : n(t);
        };
        function a(o) {
          return 45 === o || 95 === o || (0, B.H$)(o)
            ? (e.consume(o), a)
            : (e.exit(r), 45 === i.previous || 95 === i.previous ? n(o) : t(o));
        }
      }
      let P = {
          tokenize: function (e, t, n) {
            let r;
            let i = this,
              a = i.events[i.events.length - 1],
              o =
                a && "linePrefix" === a[1].type
                  ? a[2].sliceSerialize(a[1], !0).length
                  : 0,
              l = 0;
            return function (t) {
              return (
                e.enter("directiveContainer"),
                e.enter("directiveContainerFence"),
                e.enter("directiveContainerSequence"),
                (function t(r) {
                  return 58 === r
                    ? (e.consume(r), l++, t)
                    : l < 3
                      ? n(r)
                      : (e.exit("directiveContainerSequence"),
                        z.call(i, e, s, n, "directiveContainerName")(r));
                })(t)
              );
            };
            function s(t) {
              return 91 === t ? e.attempt(j, c, c)(t) : c(t);
            }
            function c(t) {
              return 123 === t ? e.attempt($, u, u)(t) : u(t);
            }
            function u(t) {
              return (0, T.f)(e, d, "whitespace")(t);
            }
            function d(r) {
              return (e.exit("directiveContainerFence"), null === r)
                ? f(r)
                : (0, B.Ch)(r)
                  ? i.interrupt
                    ? t(r)
                    : e.attempt(U, p, f)(r)
                  : n(r);
            }
            function f(n) {
              return e.exit("directiveContainer"), t(n);
            }
            function p(n) {
              return null === n
                ? (e.exit("directiveContainer"), t(n))
                : (e.enter("directiveContainerContent"), m(n));
            }
            function m(t) {
              return null === t
                ? y(t)
                : e.attempt(
                    { tokenize: _, partial: !0 },
                    y,
                    o ? (0, T.f)(e, g, "linePrefix", o + 1) : g,
                  )(t);
            }
            function g(t) {
              if (null === t) return y(t);
              let n = e.enter("chunkDocument", {
                contentType: "document",
                previous: r,
              });
              return (
                r && (r.next = n),
                (r = n),
                (function t(n) {
                  if (null === n) {
                    let t = e.exit("chunkDocument");
                    return (i.parser.lazy[t.start.line] = !1), y(n);
                  }
                  return (0, B.Ch)(n) ? e.check(U, h, b)(n) : (e.consume(n), t);
                })(t)
              );
            }
            function h(t) {
              e.consume(t);
              let n = e.exit("chunkDocument");
              return (i.parser.lazy[n.start.line] = !1), m;
            }
            function b(t) {
              let n = e.exit("chunkDocument");
              return (i.parser.lazy[n.start.line] = !1), y(t);
            }
            function y(n) {
              return (
                e.exit("directiveContainerContent"),
                e.exit("directiveContainer"),
                t(n)
              );
            }
            function _(e, t, n) {
              let r = 0;
              return (0, T.f)(
                e,
                function (t) {
                  return (
                    e.enter("directiveContainerFence"),
                    e.enter("directiveContainerSequence"),
                    (function t(a) {
                      return 58 === a
                        ? (e.consume(a), r++, t)
                        : r < l
                          ? n(a)
                          : (e.exit("directiveContainerSequence"),
                            (0, T.f)(e, i, "whitespace")(a));
                    })(t)
                  );
                },
                "linePrefix",
                4,
              );
              function i(r) {
                return null === r || (0, B.Ch)(r)
                  ? (e.exit("directiveContainerFence"), t(r))
                  : n(r);
              }
            }
          },
          concrete: !0,
        },
        j = {
          tokenize: function (e, t, n) {
            return R(
              e,
              t,
              n,
              "directiveContainerLabel",
              "directiveContainerLabelMarker",
              "directiveContainerLabelString",
              !0,
            );
          },
          partial: !0,
        },
        $ = {
          tokenize: function (e, t, n) {
            return L(
              e,
              t,
              n,
              "directiveContainerAttributes",
              "directiveContainerAttributesMarker",
              "directiveContainerAttribute",
              "directiveContainerAttributeId",
              "directiveContainerAttributeClass",
              "directiveContainerAttributeName",
              "directiveContainerAttributeInitializerMarker",
              "directiveContainerAttributeValueLiteral",
              "directiveContainerAttributeValue",
              "directiveContainerAttributeValueMarker",
              "directiveContainerAttributeValueData",
              !0,
            );
          },
          partial: !0,
        },
        U = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i
              );
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        q = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("directiveLeaf"),
                e.enter("directiveLeafSequence"),
                e.consume(t),
                i
              );
            };
            function i(t) {
              return 58 === t
                ? (e.consume(t),
                  e.exit("directiveLeafSequence"),
                  z.call(r, e, a, n, "directiveLeafName"))
                : n(t);
            }
            function a(t) {
              return 91 === t ? e.attempt(H, o, o)(t) : o(t);
            }
            function o(t) {
              return 123 === t ? e.attempt(K, l, l)(t) : l(t);
            }
            function l(t) {
              return (0, T.f)(e, s, "whitespace")(t);
            }
            function s(r) {
              return null === r || (0, B.Ch)(r)
                ? (e.exit("directiveLeaf"), t(r))
                : n(r);
            }
          },
        },
        H = {
          tokenize: function (e, t, n) {
            return R(
              e,
              t,
              n,
              "directiveLeafLabel",
              "directiveLeafLabelMarker",
              "directiveLeafLabelString",
              !0,
            );
          },
          partial: !0,
        },
        K = {
          tokenize: function (e, t, n) {
            return L(
              e,
              t,
              n,
              "directiveLeafAttributes",
              "directiveLeafAttributesMarker",
              "directiveLeafAttribute",
              "directiveLeafAttributeId",
              "directiveLeafAttributeClass",
              "directiveLeafAttributeName",
              "directiveLeafAttributeInitializerMarker",
              "directiveLeafAttributeValueLiteral",
              "directiveLeafAttributeValue",
              "directiveLeafAttributeValueMarker",
              "directiveLeafAttributeValueData",
              !0,
            );
          },
          partial: !0,
        },
        W = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("directiveText"),
                e.enter("directiveTextMarker"),
                e.consume(t),
                e.exit("directiveTextMarker"),
                z.call(r, e, i, n, "directiveTextName")
              );
            };
            function i(t) {
              return 58 === t ? n(t) : 91 === t ? e.attempt(G, a, a)(t) : a(t);
            }
            function a(t) {
              return 123 === t ? e.attempt(V, o, o)(t) : o(t);
            }
            function o(n) {
              return e.exit("directiveText"), t(n);
            }
          },
          previous: function (e) {
            return (
              58 !== e ||
              "characterEscape" === this.events[this.events.length - 1][1].type
            );
          },
        },
        G = {
          tokenize: function (e, t, n) {
            return R(
              e,
              t,
              n,
              "directiveTextLabel",
              "directiveTextLabelMarker",
              "directiveTextLabelString",
            );
          },
          partial: !0,
        },
        V = {
          tokenize: function (e, t, n) {
            return L(
              e,
              t,
              n,
              "directiveTextAttributes",
              "directiveTextAttributesMarker",
              "directiveTextAttribute",
              "directiveTextAttributeId",
              "directiveTextAttributeClass",
              "directiveTextAttributeName",
              "directiveTextAttributeInitializerMarker",
              "directiveTextAttributeValueLiteral",
              "directiveTextAttributeValue",
              "directiveTextAttributeValueMarker",
              "directiveTextAttributeValueData",
            );
          },
          partial: !0,
        };
      function Z() {
        let e = this.data(),
          t = e.micromarkExtensions || (e.micromarkExtensions = []),
          n = e.fromMarkdownExtensions || (e.fromMarkdownExtensions = []),
          r = e.toMarkdownExtensions || (e.toMarkdownExtensions = []);
        t.push({ text: { 58: W }, flow: { 58: [P, q] } }),
          n.push({
            canContainEols: ["textDirective"],
            enter: {
              directiveContainer: b,
              directiveContainerAttributes: E,
              directiveContainerLabel: k,
              directiveLeaf: y,
              directiveLeafAttributes: E,
              directiveText: _,
              directiveTextAttributes: E,
            },
            exit: {
              directiveContainer: N,
              directiveContainerAttributeClassValue: C,
              directiveContainerAttributeIdValue: D,
              directiveContainerAttributeName: F,
              directiveContainerAttributeValue: A,
              directiveContainerAttributes: S,
              directiveContainerLabel: x,
              directiveContainerName: w,
              directiveLeaf: N,
              directiveLeafAttributeClassValue: C,
              directiveLeafAttributeIdValue: D,
              directiveLeafAttributeName: F,
              directiveLeafAttributeValue: A,
              directiveLeafAttributes: S,
              directiveLeafName: w,
              directiveText: N,
              directiveTextAttributeClassValue: C,
              directiveTextAttributeIdValue: D,
              directiveTextAttributeName: F,
              directiveTextAttributeValue: A,
              directiveTextAttributes: S,
              directiveTextName: w,
            },
          }),
          r.push({
            unsafe: [
              {
                character: "\r",
                inConstruct: ["leafDirectiveLabel", "containerDirectiveLabel"],
              },
              {
                character: "\n",
                inConstruct: ["leafDirectiveLabel", "containerDirectiveLabel"],
              },
              {
                before: "[^:]",
                character: ":",
                after: "[A-Za-z]",
                inConstruct: ["phrasing"],
              },
              { atBreak: !0, character: ":", after: ":" },
            ],
            handlers: {
              containerDirective: O,
              leafDirective: O,
              textDirective: O,
            },
          });
      }
    },
    5343: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(6614),
        i = n(6880),
        a = n(657);
      n(4374), i();
      var o = RegExp(String.fromCharCode(65039), "g"),
        l = Object.entries(r.lib).map(([e, { char: t }]) => [e, t]),
        s = new Map(l);
      l.map(([e, t]) => [t.replace(o, ""), e]);
      var c = (e) => (
        a.assert.string(e), s.get(/:.+:/.test(e) ? e.slice(1, -1) : e)
      );
      let u = [
        {
          name: "angry",
          emoji: "\uD83D\uDE20",
          tags: ["mad", "annoyed"],
          description: "angry face",
          emoticons: [
            ">:(",
            ">:[",
            ">:-(",
            ">:-[",
            ">=(",
            ">=[",
            ">=-(",
            ">=-[",
          ],
        },
        {
          name: "blush",
          emoji: "\uD83D\uDE0A",
          tags: ["proud"],
          description: "smiling face with smiling eyes",
          emoticons: [
            ':")',
            ':"]',
            ':"D',
            ':-")',
            ':-"]',
            ':-"D',
            '=")',
            '="]',
            '="D',
            '=-")',
            '=-"]',
            '=-"D',
          ],
        },
        {
          name: "broken_heart",
          emoji: "\uD83D\uDC94",
          tags: [],
          description: "broken heart",
          emoticons: ["<\\3", "</3"],
        },
        {
          name: "confused",
          emoji: "\uD83D\uDE15",
          tags: [],
          description: "confused face",
          emoticons: [":/", ":\\", ":-/", ":-\\", "=/", "=\\", "=-/", "=-\\"],
        },
        {
          name: "cry",
          emoji: "\uD83D\uDE22",
          tags: ["sad", "tear"],
          description: "crying face",
          emoticons: [
            ":,(",
            ":,[",
            ":,|",
            ":,-(",
            ":,-[",
            ":,-|",
            ":'(",
            ":'[",
            ":'|",
            ":'-(",
            ":'-[",
            ":'-|",
            "=,(",
            "=,[",
            "=,|",
            "=,-(",
            "=,-[",
            "=,-|",
            "='(",
            "='[",
            "='|",
            "='-(",
            "='-[",
            "='-|",
          ],
        },
        {
          name: "frowning",
          emoji: "\uD83D\uDE26",
          tags: [],
          description: "frowning face with open mouth",
          emoticons: [":(", ":[", ":-(", ":-[", "=(", "=[", "=-(", "=-["],
        },
        {
          name: "heart",
          emoji: "❤️",
          tags: ["love"],
          description: "red heart",
          emoticons: ["<3"],
        },
        {
          name: "imp",
          emoji: "\uD83D\uDC7F",
          tags: ["angry", "devil", "evil", "horns"],
          description: "angry face with horns",
          emoticons: [
            "]:(",
            "]:[",
            "]:-(",
            "]:-[",
            "]=(",
            "]=[",
            "]=-(",
            "]=-[",
          ],
        },
        {
          name: "innocent",
          emoji: "\uD83D\uDE07",
          tags: ["angel"],
          description: "smiling face with halo",
          emoticons: [
            "o:)",
            "o:]",
            "o:D",
            "o:-)",
            "o:-]",
            "o:-D",
            "o=)",
            "o=]",
            "o=D",
            "o=-)",
            "o=-]",
            "o=-D",
            "O:)",
            "O:]",
            "O:D",
            "O:-)",
            "O:-]",
            "O:-D",
            "O=)",
            "O=]",
            "O=D",
            "O=-)",
            "O=-]",
            "O=-D",
            "0:)",
            "0:]",
            "0:D",
            "0:-)",
            "0:-]",
            "0:-D",
            "0=)",
            "0=]",
            "0=D",
            "0=-)",
            "0=-]",
            "0=-D",
          ],
        },
        {
          name: "joy",
          emoji: "\uD83D\uDE02",
          tags: ["tears"],
          description: "face with tears of joy",
          emoticons: [
            ":,)",
            ":,]",
            ":,D",
            ":,-)",
            ":,-]",
            ":,-D",
            ":')",
            ":']",
            ":'D",
            ":'-)",
            ":'-]",
            ":'-D",
            "=,)",
            "=,]",
            "=,D",
            "=,-)",
            "=,-]",
            "=,-D",
            "=')",
            "=']",
            "='D",
            "='-)",
            "='-]",
            "='-D",
          ],
        },
        {
          name: "kissing",
          emoji: "\uD83D\uDE17",
          tags: [],
          description: "kissing face",
          emoticons: [":*", ":-*", "=*", "=-*"],
        },
        {
          name: "laughing",
          emoji: "\uD83D\uDE06",
          tags: ["happy", "haha"],
          description: "grinning squinting face",
          emoticons: [
            "x)",
            "x]",
            "xD",
            "x-)",
            "x-]",
            "x-D",
            "X)",
            "X]",
            "X-)",
            "X-]",
            "X-D",
          ],
        },
        {
          name: "man",
          emoji: "\uD83D\uDC68",
          tags: ["mustache", "father", "dad"],
          description: "man",
          emoticons: [
            ":3",
            ":-3",
            "=3",
            "=-3",
            ";3",
            ";-3",
            "x3",
            "x-3",
            "X3",
            "X-3",
          ],
        },
        {
          name: "neutral_face",
          emoji: "\uD83D\uDE10",
          tags: ["meh"],
          description: "neutral face",
          emoticons: [":|", ":-|", "=|", "=-|"],
        },
        {
          name: "no_mouth",
          emoji: "\uD83D\uDE36",
          tags: ["mute", "silence"],
          description: "face without mouth",
          emoticons: [":-"],
        },
        {
          name: "open_mouth",
          emoji: "\uD83D\uDE2E",
          tags: ["surprise", "impressed", "wow"],
          description: "face with open mouth",
          emoticons: [
            ":o",
            ":O",
            ":0",
            ":-o",
            ":-O",
            ":-0",
            "=o",
            "=O",
            "=0",
            "=-o",
            "=-O",
            "=-0",
          ],
        },
        {
          name: "rage",
          emoji: "\uD83D\uDE21",
          tags: ["angry"],
          description: "pouting face",
          emoticons: [":@", ":-@", "=@", "=-@"],
        },
        {
          name: "smile",
          emoji: "\uD83D\uDE04",
          tags: ["happy", "joy", "laugh", "pleased"],
          description: "grinning face with smiling eyes",
          emoticons: [":D", ":-D", "=D", "=-D"],
        },
        {
          name: "smiley",
          emoji: "\uD83D\uDE03",
          tags: ["happy", "joy", "haha"],
          description: "grinning face with big eyes",
          emoticons: [":)", ":]", ":-)", ":-]", "=)", "=]", "=-)", "=-]"],
        },
        {
          name: "smiling_imp",
          emoji: "\uD83D\uDE08",
          tags: ["devil", "evil", "horns"],
          description: "smiling face with horns",
          emoticons: [
            "]:)",
            "]:]",
            "]:D",
            "]:-)",
            "]:-]",
            "]:-D",
            "]=)",
            "]=]",
            "]=D",
            "]=-)",
            "]=-]",
            "]=-D",
          ],
        },
        {
          name: "sob",
          emoji: "\uD83D\uDE2D",
          tags: ["sad", "cry", "bawling"],
          description: "loudly crying face",
          emoticons: [
            ":,'(",
            ":,'[",
            ":,'-(",
            ":,'-[",
            ":',(",
            ":',[",
            ":',-(",
            ":',-[",
            "=,'(",
            "=,'[",
            "=,'-(",
            "=,'-[",
            "=',(",
            "=',[",
            "=',-(",
            "=',-[",
          ],
        },
        {
          name: "stuck_out_tongue",
          emoji: "\uD83D\uDE1B",
          tags: [],
          description: "face with tongue",
          emoticons: [
            ":p",
            ":P",
            ":d",
            ":-p",
            ":-P",
            ":-d",
            "=p",
            "=P",
            "=d",
            "=-p",
            "=-P",
            "=-d",
          ],
        },
        {
          name: "stuck_out_tongue_closed_eyes",
          emoji: "\uD83D\uDE1D",
          tags: ["prank"],
          description: "squinting face with tongue",
          emoticons: [
            "xP",
            "x-p",
            "x-P",
            "x-d",
            "Xp",
            "Xd",
            "X-p",
            "X-P",
            "X-d",
          ],
        },
        {
          name: "stuck_out_tongue_winking_eye",
          emoji: "\uD83D\uDE1C",
          tags: ["prank", "silly"],
          description: "winking face with tongue",
          emoticons: [";p", ";P", ";d", ";-p", ";-P", ";-d"],
        },
        {
          name: "sunglasses",
          emoji: "\uD83D\uDE0E",
          tags: ["cool"],
          description: "smiling face with sunglasses",
          emoticons: [
            "8)",
            "8]",
            "8D",
            "8-)",
            "8-]",
            "8-D",
            "B)",
            "B]",
            "B-)",
            "B-]",
            "B-D",
          ],
        },
        {
          name: "sweat",
          emoji: "\uD83D\uDE13",
          tags: [],
          description: "downcast face with sweat",
          emoticons: [
            ",:(",
            ",:[",
            ",:-(",
            ",:-[",
            ",=(",
            ",=[",
            ",=-(",
            ",=-[",
            "':(",
            "':[",
            "':-(",
            "':-[",
            "'=(",
            "'=[",
            "'=-(",
            "'=-[",
          ],
        },
        {
          name: "sweat_smile",
          emoji: "\uD83D\uDE05",
          tags: ["hot"],
          description: "grinning face with sweat",
          emoticons: [
            ",:)",
            ",:]",
            ",:D",
            ",:-)",
            ",:-]",
            ",:-D",
            ",=)",
            ",=]",
            ",=D",
            ",=-)",
            ",=-]",
            ",=-D",
            "':)",
            "':]",
            "':D",
            "':-)",
            "':-]",
            "':-D",
            "'=)",
            "'=]",
            "'=D",
            "'=-)",
            "'=-]",
            "'=-D",
          ],
        },
        {
          name: "unamused",
          emoji: "\uD83D\uDE12",
          tags: ["meh"],
          description: "unamused face",
          emoticons: [
            ":$",
            ":s",
            ":z",
            ":S",
            ":Z",
            ":-$",
            ":-s",
            ":-z",
            ":-S",
            ":-Z",
            "=$",
            "=s",
            "=z",
            "=S",
            "=Z",
            "=-$",
            "=-s",
            "=-z",
            "=-S",
            "=-Z",
          ],
        },
        {
          name: "wink",
          emoji: "\uD83D\uDE09",
          tags: ["flirt"],
          description: "winking face",
          emoticons: [";)", ";]", ";D", ";-)", ";-]", ";-D"],
        },
      ];
      var d = n(7204);
      let f = /:\+1:|:-1:|:[\w-]+:/g,
        p = /[$@|*'",;.=:\-)([\]\\/<>038BOopPsSdDxXzZ]{2,5}/g,
        m = /(?:_|-(?!1))/g,
        g = { padSpaceAfter: !1, emoticon: !1, accessible: !1 };
      function h(e) {
        let t = Object.assign({}, g, e),
          n = !!t.padSpaceAfter,
          r = !!t.emoticon,
          i = !!t.accessible;
        function a(e, t) {
          return {
            type: "text",
            meta: null,
            value: e,
            data: {
              hName: "span",
              hProperties: { role: "img", ariaLabel: t },
              hChildren: [{ type: "text", value: e }],
            },
          };
        }
        let o = [
          [
            f,
            function (e) {
              let t = c(e);
              return (
                void 0 !== t &&
                ((n && (t += " "), i)
                  ? a(t, e.slice(1, -1).replace(m, " ") + " emoji")
                  : t)
              );
            },
          ],
        ];
        return (
          r &&
            o.push([
              p,
              function (e) {
                let t = u.find((t) => t.emoticons.includes(e)),
                  r = u.find((t) => t.emoticons.includes(e.slice(0, -1))),
                  o = t || r;
                if (!o) return !1;
                let l = !t && r ? e.slice(-1) : "",
                  s = o.emoji + (n ? " " : "") + l;
                return i ? a(s, o.name + " emoticon") : s;
              },
            ]),
          function (e) {
            (0, d.n)(e, o);
          }
        );
      }
    },
    65: function (e, t, n) {
      "use strict";
      function r(e, t) {
        let n = String(e);
        if ("string" != typeof t) throw TypeError("Expected character");
        let r = 0,
          i = n.indexOf(t);
        for (; -1 !== i; ) r++, (i = n.indexOf(t, i + t.length));
        return r;
      }
      n.d(t, {
        Z: function () {
          return eY;
        },
      });
      var i = n(4345),
        a = n(5459),
        o = n(7204);
      let l = "phrasing",
        s = ["autolink", "link", "image", "label"];
      function c(e) {
        this.enter({ type: "link", title: null, url: "", children: [] }, e);
      }
      function u(e) {
        this.config.enter.autolinkProtocol.call(this, e);
      }
      function d(e) {
        this.config.exit.autolinkProtocol.call(this, e);
      }
      function f(e) {
        this.config.exit.data.call(this, e);
        let t = this.stack[this.stack.length - 1];
        (0, i.ok)("link" === t.type),
          (t.url = "http://" + this.sliceSerialize(e));
      }
      function p(e) {
        this.config.exit.autolinkEmail.call(this, e);
      }
      function m(e) {
        this.exit(e);
      }
      function g(e) {
        (0, o.n)(
          e,
          [
            [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, h],
            [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, b],
          ],
          { ignore: ["link", "linkReference"] },
        );
      }
      function h(e, t, n, i, a) {
        let o = "";
        if (
          !y(a) ||
          (/^w/i.test(t) && ((n = t + n), (t = ""), (o = "http://")),
          !(function (e) {
            let t = e.split(".");
            return !(
              t.length < 2 ||
              (t[t.length - 1] &&
                (/_/.test(t[t.length - 1]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 1]))) ||
              (t[t.length - 2] &&
                (/_/.test(t[t.length - 2]) ||
                  !/[a-zA-Z\d]/.test(t[t.length - 2])))
            );
          })(n))
        )
          return !1;
        let l = (function (e) {
          let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
          if (!t) return [e, void 0];
          e = e.slice(0, t.index);
          let n = t[0],
            i = n.indexOf(")"),
            a = r(e, "("),
            o = r(e, ")");
          for (; -1 !== i && a > o; )
            (e += n.slice(0, i + 1)),
              (i = (n = n.slice(i + 1)).indexOf(")")),
              o++;
          return [e, n];
        })(n + i);
        if (!l[0]) return !1;
        let s = {
          type: "link",
          title: null,
          url: o + t + l[0],
          children: [{ type: "text", value: t + l[0] }],
        };
        return l[1] ? [s, { type: "text", value: l[1] }] : s;
      }
      function b(e, t, n, r) {
        return (
          !(!y(r, !0) || /[-\d_]$/.test(n)) && {
            type: "link",
            title: null,
            url: "mailto:" + t + "@" + n,
            children: [{ type: "text", value: t + "@" + n }],
          }
        );
      }
      function y(e, t) {
        let n = e.input.charCodeAt(e.index - 1);
        return (
          (0 === e.index || (0, a.B8)(n) || (0, a.Xh)(n)) && (!t || 47 !== n)
        );
      }
      var _ = n(1098);
      function v(e) {
        this.enter(
          {
            type: "footnoteDefinition",
            identifier: "",
            label: "",
            children: [],
          },
          e,
        );
      }
      function w() {
        this.buffer();
      }
      function k(e) {
        let t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (0, i.ok)("footnoteDefinition" === n.type),
          (n.label = t),
          (n.identifier = (0, _.d)(this.sliceSerialize(e)).toLowerCase());
      }
      function x(e) {
        this.exit(e);
      }
      function E(e) {
        this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
      }
      function D() {
        this.buffer();
      }
      function C(e) {
        let t = this.resume(),
          n = this.stack[this.stack.length - 1];
        (0, i.ok)("footnoteReference" === n.type),
          (n.label = t),
          (n.identifier = (0, _.d)(this.sliceSerialize(e)).toLowerCase());
      }
      function A(e) {
        this.exit(e);
      }
      function F(e, t, n, r) {
        let i = n.createTracker(r),
          a = i.move("[^"),
          o = n.enter("footnoteReference"),
          l = n.enter("reference");
        return (
          (a += i.move(
            n.safe(n.associationId(e), {
              ...i.current(),
              before: a,
              after: "]",
            }),
          )),
          l(),
          o(),
          (a += i.move("]"))
        );
      }
      function S(e, t, n, r) {
        let i = n.createTracker(r),
          a = i.move("[^"),
          o = n.enter("footnoteDefinition"),
          l = n.enter("label");
        return (
          (a += i.move(
            n.safe(n.associationId(e), {
              ...i.current(),
              before: a,
              after: "]",
            }),
          )),
          l(),
          (a += i.move(
            "]:" + (e.children && e.children.length > 0 ? " " : ""),
          )),
          i.shift(4),
          (a += i.move(n.indentLines(n.containerFlow(e, i.current()), N))),
          o(),
          a
        );
      }
      function N(e, t, n) {
        return 0 === t ? e : (n ? "" : "    ") + e;
      }
      F.peek = function () {
        return "[";
      };
      let O = [
        "autolink",
        "destinationLiteral",
        "destinationRaw",
        "reference",
        "titleQuote",
        "titleApostrophe",
      ];
      function M(e) {
        this.enter({ type: "delete", children: [] }, e);
      }
      function T(e) {
        this.exit(e);
      }
      function B(e, t, n, r) {
        let i = n.createTracker(r),
          a = n.enter("strikethrough"),
          o = i.move("~~");
        return (
          (o +=
            n.containerPhrasing(e, { ...i.current(), before: o, after: "~" }) +
            i.move("~~")),
          a(),
          o
        );
      }
      function I(e) {
        return e.length;
      }
      function L(e) {
        let t = "string" == typeof e ? e.codePointAt(0) : 0;
        return 67 === t || 99 === t
          ? 99
          : 76 === t || 108 === t
            ? 108
            : 82 === t || 114 === t
              ? 114
              : 0;
      }
      function R(e, t, n) {
        return ">" + (n ? "" : " ") + e;
      }
      function z(e, t, n) {
        if (("string" == typeof t && (t = [t]), !t || 0 === t.length)) return n;
        let r = -1;
        for (; ++r < t.length; ) if (e.includes(t[r])) return !0;
        return !1;
      }
      function P(e, t, n, r) {
        let i = -1;
        for (; ++i < n.unsafe.length; ) {
          var a, o;
          if (
            "\n" === n.unsafe[i].character &&
            z((a = n.stack), (o = n.unsafe[i]).inConstruct, !0) &&
            !z(a, o.notInConstruct, !1)
          )
            return /[ \t]/.test(r.before) ? "" : " ";
        }
        return "\\\n";
      }
      B.peek = function () {
        return "~";
      };
      var j = n(5996);
      function $(e, t, n) {
        return (n ? "" : "    ") + e;
      }
      function U(e) {
        let t = e.options.quote || '"';
        if ('"' !== t && "'" !== t)
          throw Error(
            "Cannot serialize title with `" +
              t +
              "` for `options.quote`, expected `\"`, or `'`",
          );
        return t;
      }
      function q(e, t, n, r) {
        let i = (function (e) {
            let t = e.options.emphasis || "*";
            if ("*" !== t && "_" !== t)
              throw Error(
                "Cannot serialize emphasis with `" +
                  t +
                  "` for `options.emphasis`, expected `*`, or `_`",
              );
            return t;
          })(n),
          a = n.enter("emphasis"),
          o = n.createTracker(r),
          l = o.move(i);
        return (
          (l +=
            o.move(
              n.containerPhrasing(e, { before: l, after: i, ...o.current() }),
            ) + o.move(i)),
          a(),
          l
        );
      }
      q.peek = function (e, t, n) {
        return n.options.emphasis || "*";
      };
      var H = n(1623),
        K = n(8718),
        W = n(7962);
      function G(e) {
        return e.value || "";
      }
      function V(e, t, n, r) {
        let i = U(n),
          a = '"' === i ? "Quote" : "Apostrophe",
          o = n.enter("image"),
          l = n.enter("label"),
          s = n.createTracker(r),
          c = s.move("![");
        return (
          (c +=
            s.move(n.safe(e.alt, { before: c, after: "]", ...s.current() })) +
            s.move("](")),
          l(),
          (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
            ? ((l = n.enter("destinationLiteral")),
              (c += s.move("<")),
              (c +=
                s.move(
                  n.safe(e.url, { before: c, after: ">", ...s.current() }),
                ) + s.move(">")))
            : ((l = n.enter("destinationRaw")),
              (c += s.move(
                n.safe(e.url, {
                  before: c,
                  after: e.title ? " " : ")",
                  ...s.current(),
                }),
              ))),
          l(),
          e.title &&
            ((l = n.enter(`title${a}`)),
            (c += s.move(" " + i)),
            (c +=
              s.move(n.safe(e.title, { before: c, after: i, ...s.current() })) +
              s.move(i)),
            l()),
          (c += s.move(")")),
          o(),
          c
        );
      }
      function Z(e, t, n, r) {
        let i = e.referenceType,
          a = n.enter("imageReference"),
          o = n.enter("label"),
          l = n.createTracker(r),
          s = l.move("!["),
          c = n.safe(e.alt, { before: s, after: "]", ...l.current() });
        (s += l.move(c + "][")), o();
        let u = n.stack;
        (n.stack = []), (o = n.enter("reference"));
        let d = n.safe(n.associationId(e), {
          before: s,
          after: "]",
          ...l.current(),
        });
        return (
          o(),
          (n.stack = u),
          a(),
          "full" !== i && c && c === d
            ? "shortcut" === i
              ? (s = s.slice(0, -1))
              : (s += l.move("]"))
            : (s += l.move(d + "]")),
          s
        );
      }
      function X(e, t, n) {
        let r = e.value || "",
          i = "`",
          a = -1;
        for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
        for (
          /[^ \r\n]/.test(r) &&
          ((/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r)) || /^`|`$/.test(r)) &&
          (r = " " + r + " ");
          ++a < n.unsafe.length;

        ) {
          let e;
          let t = n.unsafe[a],
            i = n.compilePattern(t);
          if (t.atBreak)
            for (; (e = i.exec(r)); ) {
              let t = e.index;
              10 === r.charCodeAt(t) && 13 === r.charCodeAt(t - 1) && t--,
                (r = r.slice(0, t) + " " + r.slice(e.index + 1));
            }
        }
        return i + r + i;
      }
      function Q(e, t) {
        let n = (0, W.B)(e);
        return !!(
          !t.options.resourceLink &&
          e.url &&
          !e.title &&
          e.children &&
          1 === e.children.length &&
          "text" === e.children[0].type &&
          (n === e.url || "mailto:" + n === e.url) &&
          /^[a-z][a-z+.-]+:/i.test(e.url) &&
          !/[\0- <>\u007F]/.test(e.url)
        );
      }
      function Y(e, t, n, r) {
        let i, a;
        let o = U(n),
          l = '"' === o ? "Quote" : "Apostrophe",
          s = n.createTracker(r);
        if (Q(e, n)) {
          let t = n.stack;
          (n.stack = []), (i = n.enter("autolink"));
          let r = s.move("<");
          return (
            (r +=
              s.move(
                n.containerPhrasing(e, {
                  before: r,
                  after: ">",
                  ...s.current(),
                }),
              ) + s.move(">")),
            i(),
            (n.stack = t),
            r
          );
        }
        (i = n.enter("link")), (a = n.enter("label"));
        let c = s.move("[");
        return (
          (c +=
            s.move(
              n.containerPhrasing(e, {
                before: c,
                after: "](",
                ...s.current(),
              }),
            ) + s.move("](")),
          a(),
          (!e.url && e.title) || /[\0- \u007F]/.test(e.url)
            ? ((a = n.enter("destinationLiteral")),
              (c += s.move("<")),
              (c +=
                s.move(
                  n.safe(e.url, { before: c, after: ">", ...s.current() }),
                ) + s.move(">")))
            : ((a = n.enter("destinationRaw")),
              (c += s.move(
                n.safe(e.url, {
                  before: c,
                  after: e.title ? " " : ")",
                  ...s.current(),
                }),
              ))),
          a(),
          e.title &&
            ((a = n.enter(`title${l}`)),
            (c += s.move(" " + o)),
            (c +=
              s.move(n.safe(e.title, { before: c, after: o, ...s.current() })) +
              s.move(o)),
            a()),
          (c += s.move(")")),
          i(),
          c
        );
      }
      function J(e, t, n, r) {
        let i = e.referenceType,
          a = n.enter("linkReference"),
          o = n.enter("label"),
          l = n.createTracker(r),
          s = l.move("["),
          c = n.containerPhrasing(e, { before: s, after: "]", ...l.current() });
        (s += l.move(c + "][")), o();
        let u = n.stack;
        (n.stack = []), (o = n.enter("reference"));
        let d = n.safe(n.associationId(e), {
          before: s,
          after: "]",
          ...l.current(),
        });
        return (
          o(),
          (n.stack = u),
          a(),
          "full" !== i && c && c === d
            ? "shortcut" === i
              ? (s = s.slice(0, -1))
              : (s += l.move("]"))
            : (s += l.move(d + "]")),
          s
        );
      }
      function ee(e) {
        let t = e.options.bullet || "*";
        if ("*" !== t && "+" !== t && "-" !== t)
          throw Error(
            "Cannot serialize items with `" +
              t +
              "` for `options.bullet`, expected `*`, `+`, or `-`",
          );
        return t;
      }
      function et(e) {
        let t = e.options.rule || "*";
        if ("*" !== t && "-" !== t && "_" !== t)
          throw Error(
            "Cannot serialize rules with `" +
              t +
              "` for `options.rule`, expected `*`, `-`, or `_`",
          );
        return t;
      }
      (G.peek = function () {
        return "<";
      }),
        (V.peek = function () {
          return "!";
        }),
        (Z.peek = function () {
          return "!";
        }),
        (X.peek = function () {
          return "`";
        }),
        (Y.peek = function (e, t, n) {
          return Q(e, n) ? "<" : "[";
        }),
        (J.peek = function () {
          return "[";
        });
      let en = (0, n(6093).O)([
        "break",
        "delete",
        "emphasis",
        "footnote",
        "footnoteReference",
        "image",
        "imageReference",
        "inlineCode",
        "inlineMath",
        "link",
        "linkReference",
        "mdxJsxTextElement",
        "mdxTextExpression",
        "strong",
        "text",
        "textDirective",
      ]);
      function er(e, t, n, r) {
        let i = (function (e) {
            let t = e.options.strong || "*";
            if ("*" !== t && "_" !== t)
              throw Error(
                "Cannot serialize strong with `" +
                  t +
                  "` for `options.strong`, expected `*`, or `_`",
              );
            return t;
          })(n),
          a = n.enter("strong"),
          o = n.createTracker(r),
          l = o.move(i + i);
        return (
          (l +=
            o.move(
              n.containerPhrasing(e, { before: l, after: i, ...o.current() }),
            ) + o.move(i + i)),
          a(),
          l
        );
      }
      er.peek = function (e, t, n) {
        return n.options.strong || "*";
      };
      let ei = {
        blockquote: function (e, t, n, r) {
          let i = n.enter("blockquote"),
            a = n.createTracker(r);
          a.move("> "), a.shift(2);
          let o = n.indentLines(n.containerFlow(e, a.current()), R);
          return i(), o;
        },
        break: P,
        code: function (e, t, n, r) {
          let i = (function (e) {
              let t = e.options.fence || "`";
              if ("`" !== t && "~" !== t)
                throw Error(
                  "Cannot serialize code with `" +
                    t +
                    "` for `options.fence`, expected `` ` `` or `~`",
                );
              return t;
            })(n),
            a = e.value || "",
            o = "`" === i ? "GraveAccent" : "Tilde";
          if (
            !1 === n.options.fences &&
            e.value &&
            !e.lang &&
            /[^ \r\n]/.test(e.value) &&
            !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value)
          ) {
            let e = n.enter("codeIndented"),
              t = n.indentLines(a, $);
            return e(), t;
          }
          let l = n.createTracker(r),
            s = i.repeat(Math.max((0, j.J)(a, i) + 1, 3)),
            c = n.enter("codeFenced"),
            u = l.move(s);
          if (e.lang) {
            let t = n.enter(`codeFencedLang${o}`);
            (u += l.move(
              n.safe(e.lang, {
                before: u,
                after: " ",
                encode: ["`"],
                ...l.current(),
              }),
            )),
              t();
          }
          if (e.lang && e.meta) {
            let t = n.enter(`codeFencedMeta${o}`);
            (u += l.move(" ")),
              (u += l.move(
                n.safe(e.meta, {
                  before: u,
                  after: "\n",
                  encode: ["`"],
                  ...l.current(),
                }),
              )),
              t();
          }
          return (
            (u += l.move("\n")),
            a && (u += l.move(a + "\n")),
            (u += l.move(s)),
            c(),
            u
          );
        },
        definition: function (e, t, n, r) {
          let i = U(n),
            a = '"' === i ? "Quote" : "Apostrophe",
            o = n.enter("definition"),
            l = n.enter("label"),
            s = n.createTracker(r),
            c = s.move("[");
          return (
            (c +=
              s.move(
                n.safe(n.associationId(e), {
                  before: c,
                  after: "]",
                  ...s.current(),
                }),
              ) + s.move("]: ")),
            l(),
            !e.url || /[\0- \u007F]/.test(e.url)
              ? ((l = n.enter("destinationLiteral")),
                (c += s.move("<")),
                (c +=
                  s.move(
                    n.safe(e.url, { before: c, after: ">", ...s.current() }),
                  ) + s.move(">")))
              : ((l = n.enter("destinationRaw")),
                (c += s.move(
                  n.safe(e.url, {
                    before: c,
                    after: e.title ? " " : "\n",
                    ...s.current(),
                  }),
                ))),
            l(),
            e.title &&
              ((l = n.enter(`title${a}`)),
              (c += s.move(" " + i)),
              (c +=
                s.move(
                  n.safe(e.title, { before: c, after: i, ...s.current() }),
                ) + s.move(i)),
              l()),
            o(),
            c
          );
        },
        emphasis: q,
        hardBreak: P,
        heading: function (e, t, n, r) {
          let i;
          let a = Math.max(Math.min(6, e.depth || 1), 1),
            o = n.createTracker(r);
          if (
            ((i = !1),
            (0, H.Vn)(e, function (e) {
              if (
                ("value" in e && /\r?\n|\r/.test(e.value)) ||
                "break" === e.type
              )
                return (i = !0), K.BK;
            }),
            (!e.depth || e.depth < 3) && (0, W.B)(e) && (n.options.setext || i))
          ) {
            let t = n.enter("headingSetext"),
              r = n.enter("phrasing"),
              i = n.containerPhrasing(e, {
                ...o.current(),
                before: "\n",
                after: "\n",
              });
            return (
              r(),
              t(),
              i +
                "\n" +
                (1 === a ? "=" : "-").repeat(
                  i.length -
                    (Math.max(i.lastIndexOf("\r"), i.lastIndexOf("\n")) + 1),
                )
            );
          }
          let l = "#".repeat(a),
            s = n.enter("headingAtx"),
            c = n.enter("phrasing");
          o.move(l + " ");
          let u = n.containerPhrasing(e, {
            before: "# ",
            after: "\n",
            ...o.current(),
          });
          return (
            /^[\t ]/.test(u) &&
              (u =
                "&#x" +
                u.charCodeAt(0).toString(16).toUpperCase() +
                ";" +
                u.slice(1)),
            (u = u ? l + " " + u : l),
            n.options.closeAtx && (u += " " + l),
            c(),
            s(),
            u
          );
        },
        html: G,
        image: V,
        imageReference: Z,
        inlineCode: X,
        link: Y,
        linkReference: J,
        list: function (e, t, n, r) {
          let i = n.enter("list"),
            a = n.bulletCurrent,
            o = e.ordered
              ? (function (e) {
                  let t = e.options.bulletOrdered || ".";
                  if ("." !== t && ")" !== t)
                    throw Error(
                      "Cannot serialize items with `" +
                        t +
                        "` for `options.bulletOrdered`, expected `.` or `)`",
                    );
                  return t;
                })(n)
              : ee(n),
            l = e.ordered
              ? "." === o
                ? ")"
                : "."
              : (function (e) {
                  let t = ee(e),
                    n = e.options.bulletOther;
                  if (!n) return "*" === t ? "-" : "*";
                  if ("*" !== n && "+" !== n && "-" !== n)
                    throw Error(
                      "Cannot serialize items with `" +
                        n +
                        "` for `options.bulletOther`, expected `*`, `+`, or `-`",
                    );
                  if (n === t)
                    throw Error(
                      "Expected `bullet` (`" +
                        t +
                        "`) and `bulletOther` (`" +
                        n +
                        "`) to be different",
                    );
                  return n;
                })(n),
            s = !!t && !!n.bulletLastUsed && o === n.bulletLastUsed;
          if (!e.ordered) {
            let t = e.children ? e.children[0] : void 0;
            if (
              (("*" !== o && "-" !== o) ||
                !t ||
                (t.children && t.children[0]) ||
                "list" !== n.stack[n.stack.length - 1] ||
                "listItem" !== n.stack[n.stack.length - 2] ||
                "list" !== n.stack[n.stack.length - 3] ||
                "listItem" !== n.stack[n.stack.length - 4] ||
                0 !== n.indexStack[n.indexStack.length - 1] ||
                0 !== n.indexStack[n.indexStack.length - 2] ||
                0 !== n.indexStack[n.indexStack.length - 3] ||
                (s = !0),
              et(n) === o && t)
            ) {
              let t = -1;
              for (; ++t < e.children.length; ) {
                let n = e.children[t];
                if (
                  n &&
                  "listItem" === n.type &&
                  n.children &&
                  n.children[0] &&
                  "thematicBreak" === n.children[0].type
                ) {
                  s = !0;
                  break;
                }
              }
            }
          }
          s && (o = l), (n.bulletCurrent = o);
          let c = n.containerFlow(e, r);
          return (n.bulletLastUsed = o), (n.bulletCurrent = a), i(), c;
        },
        listItem: function (e, t, n, r) {
          let i = (function (e) {
              let t = e.options.listItemIndent || "one";
              if ("tab" !== t && "one" !== t && "mixed" !== t)
                throw Error(
                  "Cannot serialize items with `" +
                    t +
                    "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`",
                );
              return t;
            })(n),
            a = n.bulletCurrent || ee(n);
          t &&
            "list" === t.type &&
            t.ordered &&
            (a =
              ("number" == typeof t.start && t.start > -1 ? t.start : 1) +
              (!1 === n.options.incrementListMarker
                ? 0
                : t.children.indexOf(e)) +
              a);
          let o = a.length + 1;
          ("tab" === i ||
            ("mixed" === i &&
              ((t && "list" === t.type && t.spread) || e.spread))) &&
            (o = 4 * Math.ceil(o / 4));
          let l = n.createTracker(r);
          l.move(a + " ".repeat(o - a.length)), l.shift(o);
          let s = n.enter("listItem"),
            c = n.indentLines(
              n.containerFlow(e, l.current()),
              function (e, t, n) {
                return t
                  ? (n ? "" : " ".repeat(o)) + e
                  : (n ? a : a + " ".repeat(o - a.length)) + e;
              },
            );
          return s(), c;
        },
        paragraph: function (e, t, n, r) {
          let i = n.enter("paragraph"),
            a = n.enter("phrasing"),
            o = n.containerPhrasing(e, r);
          return a(), i(), o;
        },
        root: function (e, t, n, r) {
          return (
            e.children.some(function (e) {
              return en(e);
            })
              ? n.containerPhrasing
              : n.containerFlow
          ).call(n, e, r);
        },
        strong: er,
        text: function (e, t, n, r) {
          return n.safe(e.value, r);
        },
        thematicBreak: function (e, t, n) {
          let r = (et(n) + (n.options.ruleSpaces ? " " : "")).repeat(
            (function (e) {
              let t = e.options.ruleRepetition || 3;
              if (t < 3)
                throw Error(
                  "Cannot serialize rules with repetition `" +
                    t +
                    "` for `options.ruleRepetition`, expected `3` or more",
                );
              return t;
            })(n),
          );
          return n.options.ruleSpaces ? r.slice(0, -1) : r;
        },
      };
      function ea(e) {
        let t = e._align;
        (0, i.ok)(t, "expected `_align` on table"),
          this.enter(
            {
              type: "table",
              align: t.map(function (e) {
                return "none" === e ? null : e;
              }),
              children: [],
            },
            e,
          ),
          (this.data.inTable = !0);
      }
      function eo(e) {
        this.exit(e), (this.data.inTable = void 0);
      }
      function el(e) {
        this.enter({ type: "tableRow", children: [] }, e);
      }
      function es(e) {
        this.exit(e);
      }
      function ec(e) {
        this.enter({ type: "tableCell", children: [] }, e);
      }
      function eu(e) {
        let t = this.resume();
        this.data.inTable && (t = t.replace(/\\([\\|])/g, ed));
        let n = this.stack[this.stack.length - 1];
        (0, i.ok)("inlineCode" === n.type), (n.value = t), this.exit(e);
      }
      function ed(e, t) {
        return "|" === t ? t : e;
      }
      function ef(e) {
        let t = this.stack[this.stack.length - 2];
        (0, i.ok)("listItem" === t.type),
          (t.checked = "taskListCheckValueChecked" === e.type);
      }
      function ep(e) {
        let t = this.stack[this.stack.length - 2];
        if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
          let e = this.stack[this.stack.length - 1];
          (0, i.ok)("paragraph" === e.type);
          let n = e.children[0];
          if (n && "text" === n.type) {
            let r;
            let i = t.children,
              a = -1;
            for (; ++a < i.length; ) {
              let e = i[a];
              if ("paragraph" === e.type) {
                r = e;
                break;
              }
            }
            r === e &&
              ((n.value = n.value.slice(1)),
              0 === n.value.length
                ? e.children.shift()
                : e.position &&
                  n.position &&
                  "number" == typeof n.position.start.offset &&
                  (n.position.start.column++,
                  n.position.start.offset++,
                  (e.position.start = Object.assign({}, n.position.start))));
          }
        }
        this.exit(e);
      }
      function em(e, t, n, r) {
        let i = e.children[0],
          a = "boolean" == typeof e.checked && i && "paragraph" === i.type,
          o = "[" + (e.checked ? "x" : " ") + "] ",
          l = n.createTracker(r);
        a && l.move(o);
        let s = ei.listItem(e, t, n, { ...r, ...l.current() });
        return (
          a &&
            (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function (e) {
              return e + o;
            })),
          s
        );
      }
      var eg = n(4663);
      let eh = {
          tokenize: function (e, t, n) {
            let r = 0;
            return function t(a) {
              return (87 === a || 119 === a) && r < 3
                ? (r++, e.consume(a), t)
                : 46 === a && 3 === r
                  ? (e.consume(a), i)
                  : n(a);
            };
            function i(e) {
              return null === e ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        eb = {
          tokenize: function (e, t, n) {
            let r, i, o;
            return l;
            function l(t) {
              return 46 === t || 95 === t
                ? e.check(e_, c, s)(t)
                : null === t ||
                    (0, a.z3)(t) ||
                    (0, a.B8)(t) ||
                    (45 !== t && (0, a.Xh)(t))
                  ? c(t)
                  : ((o = !0), e.consume(t), l);
            }
            function s(t) {
              return (
                95 === t ? (r = !0) : ((i = r), (r = void 0)), e.consume(t), l
              );
            }
            function c(e) {
              return i || r || !o ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        ey = {
          tokenize: function (e, t) {
            let n = 0,
              r = 0;
            return i;
            function i(l) {
              return 40 === l
                ? (n++, e.consume(l), i)
                : 41 === l && r < n
                  ? o(l)
                  : 33 === l ||
                      34 === l ||
                      38 === l ||
                      39 === l ||
                      41 === l ||
                      42 === l ||
                      44 === l ||
                      46 === l ||
                      58 === l ||
                      59 === l ||
                      60 === l ||
                      63 === l ||
                      93 === l ||
                      95 === l ||
                      126 === l
                    ? e.check(e_, t, o)(l)
                    : null === l || (0, a.z3)(l) || (0, a.B8)(l)
                      ? t(l)
                      : (e.consume(l), i);
            }
            function o(t) {
              return 41 === t && r++, e.consume(t), i;
            }
          },
          partial: !0,
        },
        e_ = {
          tokenize: function (e, t, n) {
            return r;
            function r(l) {
              return 33 === l ||
                34 === l ||
                39 === l ||
                41 === l ||
                42 === l ||
                44 === l ||
                46 === l ||
                58 === l ||
                59 === l ||
                63 === l ||
                95 === l ||
                126 === l
                ? (e.consume(l), r)
                : 38 === l
                  ? (e.consume(l), o)
                  : 93 === l
                    ? (e.consume(l), i)
                    : 60 === l || null === l || (0, a.z3)(l) || (0, a.B8)(l)
                      ? t(l)
                      : n(l);
            }
            function i(e) {
              return null === e ||
                40 === e ||
                91 === e ||
                (0, a.z3)(e) ||
                (0, a.B8)(e)
                ? t(e)
                : r(e);
            }
            function o(t) {
              return (0, a.jv)(t)
                ? (function t(i) {
                    return 59 === i
                      ? (e.consume(i), r)
                      : (0, a.jv)(i)
                        ? (e.consume(i), t)
                        : n(i);
                  })(t)
                : n(t);
            }
          },
          partial: !0,
        },
        ev = {
          tokenize: function (e, t, n) {
            return function (t) {
              return e.consume(t), r;
            };
            function r(e) {
              return (0, a.H$)(e) ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        ew = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (87 !== t && 119 !== t) ||
                !eC.call(r, r.previous) ||
                eN(r.events)
                ? n(t)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkWww"),
                  e.check(eh, e.attempt(eb, e.attempt(ey, i), n), n)(t));
            };
            function i(n) {
              return (
                e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: eC,
        },
        ek = {
          tokenize: function (e, t, n) {
            let r = this,
              i = "",
              o = !1;
            return function (t) {
              return (72 === t || 104 === t) &&
                eA.call(r, r.previous) &&
                !eN(r.events)
                ? (e.enter("literalAutolink"),
                  e.enter("literalAutolinkHttp"),
                  (i += String.fromCodePoint(t)),
                  e.consume(t),
                  l)
                : n(t);
            };
            function l(t) {
              if ((0, a.jv)(t) && i.length < 5)
                return (i += String.fromCodePoint(t)), e.consume(t), l;
              if (58 === t) {
                let n = i.toLowerCase();
                if ("http" === n || "https" === n) return e.consume(t), s;
              }
              return n(t);
            }
            function s(t) {
              return 47 === t ? ((e.consume(t), o) ? c : ((o = !0), s)) : n(t);
            }
            function c(t) {
              return null === t ||
                (0, a.Av)(t) ||
                (0, a.z3)(t) ||
                (0, a.B8)(t) ||
                (0, a.Xh)(t)
                ? n(t)
                : e.attempt(eb, e.attempt(ey, u), n)(t);
            }
            function u(n) {
              return (
                e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
              );
            }
          },
          previous: eA,
        },
        ex = {
          tokenize: function (e, t, n) {
            let r, i;
            let o = this;
            return function (t) {
              return !eS(t) || !eF.call(o, o.previous) || eN(o.events)
                ? n(t)
                : (e.enter("literalAutolink"),
                  e.enter("literalAutolinkEmail"),
                  (function t(r) {
                    return eS(r)
                      ? (e.consume(r), t)
                      : 64 === r
                        ? (e.consume(r), l)
                        : n(r);
                  })(t));
            };
            function l(t) {
              return 46 === t
                ? e.check(ev, c, s)(t)
                : 45 === t || 95 === t || (0, a.H$)(t)
                  ? ((i = !0), e.consume(t), l)
                  : c(t);
            }
            function s(t) {
              return e.consume(t), (r = !0), l;
            }
            function c(l) {
              return i && r && (0, a.jv)(o.previous)
                ? (e.exit("literalAutolinkEmail"),
                  e.exit("literalAutolink"),
                  t(l))
                : n(l);
            }
          },
          previous: eF,
        },
        eE = {},
        eD = 48;
      for (; eD < 123; )
        (eE[eD] = ex), 58 == ++eD ? (eD = 65) : 91 === eD && (eD = 97);
      function eC(e) {
        return (
          null === e ||
          40 === e ||
          42 === e ||
          95 === e ||
          91 === e ||
          93 === e ||
          126 === e ||
          (0, a.z3)(e)
        );
      }
      function eA(e) {
        return !(0, a.jv)(e);
      }
      function eF(e) {
        return !(47 === e || eS(e));
      }
      function eS(e) {
        return 43 === e || 45 === e || 46 === e || 95 === e || (0, a.H$)(e);
      }
      function eN(e) {
        let t = e.length,
          n = !1;
        for (; t--; ) {
          let r = e[t][1];
          if (
            ("labelLink" === r.type || "labelImage" === r.type) &&
            !r._balanced
          ) {
            n = !0;
            break;
          }
          if (r._gfmAutolinkLiteralWalkedInto) {
            n = !1;
            break;
          }
        }
        return (
          e.length > 0 &&
            !n &&
            (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0),
          n
        );
      }
      (eE[43] = ex),
        (eE[45] = ex),
        (eE[46] = ex),
        (eE[95] = ex),
        (eE[72] = [ex, ek]),
        (eE[104] = [ex, ek]),
        (eE[87] = [ex, ew]),
        (eE[119] = [ex, ew]);
      var eO = n(3402),
        eM = n(2761);
      let eT = {
        tokenize: function (e, t, n) {
          let r = this;
          return (0, eM.f)(
            e,
            function (e) {
              let i = r.events[r.events.length - 1];
              return i &&
                "gfmFootnoteDefinitionIndent" === i[1].type &&
                4 === i[2].sliceSerialize(i[1], !0).length
                ? t(e)
                : n(e);
            },
            "gfmFootnoteDefinitionIndent",
            5,
          );
        },
        partial: !0,
      };
      function eB(e, t, n) {
        let r;
        let i = this,
          a = i.events.length,
          o = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
        for (; a--; ) {
          let e = i.events[a][1];
          if ("labelImage" === e.type) {
            r = e;
            break;
          }
          if (
            "gfmFootnoteCall" === e.type ||
            "labelLink" === e.type ||
            "label" === e.type ||
            "image" === e.type ||
            "link" === e.type
          )
            break;
        }
        return function (a) {
          if (!r || !r._balanced) return n(a);
          let l = (0, _.d)(i.sliceSerialize({ start: r.end, end: i.now() }));
          return 94 === l.codePointAt(0) && o.includes(l.slice(1))
            ? (e.enter("gfmFootnoteCallLabelMarker"),
              e.consume(a),
              e.exit("gfmFootnoteCallLabelMarker"),
              t(a))
            : n(a);
        };
      }
      function eI(e, t) {
        let n = e.length;
        for (; n--; )
          if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
            e[n][1];
            break;
          }
        (e[n + 1][1].type = "data"),
          (e[n + 3][1].type = "gfmFootnoteCallLabelMarker");
        let r = {
            type: "gfmFootnoteCall",
            start: Object.assign({}, e[n + 3][1].start),
            end: Object.assign({}, e[e.length - 1][1].end),
          },
          i = {
            type: "gfmFootnoteCallMarker",
            start: Object.assign({}, e[n + 3][1].end),
            end: Object.assign({}, e[n + 3][1].end),
          };
        i.end.column++, i.end.offset++, i.end._bufferIndex++;
        let a = {
            type: "gfmFootnoteCallString",
            start: Object.assign({}, i.end),
            end: Object.assign({}, e[e.length - 1][1].start),
          },
          o = {
            type: "chunkString",
            contentType: "string",
            start: Object.assign({}, a.start),
            end: Object.assign({}, a.end),
          },
          l = [
            e[n + 1],
            e[n + 2],
            ["enter", r, t],
            e[n + 3],
            e[n + 4],
            ["enter", i, t],
            ["exit", i, t],
            ["enter", a, t],
            ["enter", o, t],
            ["exit", o, t],
            ["exit", a, t],
            e[e.length - 2],
            e[e.length - 1],
            ["exit", r, t],
          ];
        return e.splice(n, e.length - n + 1, ...l), e;
      }
      function eL(e, t, n) {
        let r;
        let i = this,
          o = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []),
          l = 0;
        return function (t) {
          return (
            e.enter("gfmFootnoteCall"),
            e.enter("gfmFootnoteCallLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteCallLabelMarker"),
            s
          );
        };
        function s(t) {
          return 94 !== t
            ? n(t)
            : (e.enter("gfmFootnoteCallMarker"),
              e.consume(t),
              e.exit("gfmFootnoteCallMarker"),
              e.enter("gfmFootnoteCallString"),
              (e.enter("chunkString").contentType = "string"),
              c);
        }
        function c(s) {
          if (
            l > 999 ||
            (93 === s && !r) ||
            null === s ||
            91 === s ||
            (0, a.z3)(s)
          )
            return n(s);
          if (93 === s) {
            e.exit("chunkString");
            let r = e.exit("gfmFootnoteCallString");
            return o.includes((0, _.d)(i.sliceSerialize(r)))
              ? (e.enter("gfmFootnoteCallLabelMarker"),
                e.consume(s),
                e.exit("gfmFootnoteCallLabelMarker"),
                e.exit("gfmFootnoteCall"),
                t)
              : n(s);
          }
          return (0, a.z3)(s) || (r = !0), l++, e.consume(s), 92 === s ? u : c;
        }
        function u(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), l++, c)
            : c(t);
        }
      }
      function eR(e, t, n) {
        let r, i;
        let o = this,
          l = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []),
          s = 0;
        return function (t) {
          return (
            (e.enter("gfmFootnoteDefinition")._container = !0),
            e.enter("gfmFootnoteDefinitionLabel"),
            e.enter("gfmFootnoteDefinitionLabelMarker"),
            e.consume(t),
            e.exit("gfmFootnoteDefinitionLabelMarker"),
            c
          );
        };
        function c(t) {
          return 94 === t
            ? (e.enter("gfmFootnoteDefinitionMarker"),
              e.consume(t),
              e.exit("gfmFootnoteDefinitionMarker"),
              e.enter("gfmFootnoteDefinitionLabelString"),
              (e.enter("chunkString").contentType = "string"),
              u)
            : n(t);
        }
        function u(t) {
          if (
            s > 999 ||
            (93 === t && !i) ||
            null === t ||
            91 === t ||
            (0, a.z3)(t)
          )
            return n(t);
          if (93 === t) {
            e.exit("chunkString");
            let n = e.exit("gfmFootnoteDefinitionLabelString");
            return (
              (r = (0, _.d)(o.sliceSerialize(n))),
              e.enter("gfmFootnoteDefinitionLabelMarker"),
              e.consume(t),
              e.exit("gfmFootnoteDefinitionLabelMarker"),
              e.exit("gfmFootnoteDefinitionLabel"),
              f
            );
          }
          return (0, a.z3)(t) || (i = !0), s++, e.consume(t), 92 === t ? d : u;
        }
        function d(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), s++, u)
            : u(t);
        }
        function f(t) {
          return 58 === t
            ? (e.enter("definitionMarker"),
              e.consume(t),
              e.exit("definitionMarker"),
              l.includes(r) || l.push(r),
              (0, eM.f)(e, p, "gfmFootnoteDefinitionWhitespace"))
            : n(t);
        }
        function p(e) {
          return t(e);
        }
      }
      function ez(e, t, n) {
        return e.check(eO.w, t, e.attempt(eT, t, n));
      }
      function eP(e) {
        e.exit("gfmFootnoteDefinition");
      }
      var ej = n(1905),
        e$ = n(2987),
        eU = n(3233);
      class eq {
        constructor() {
          this.map = [];
        }
        add(e, t, n) {
          !(function (e, t, n, r) {
            let i = 0;
            if (0 !== n || 0 !== r.length) {
              for (; i < e.map.length; ) {
                if (e.map[i][0] === t) {
                  (e.map[i][1] += n), e.map[i][2].push(...r);
                  return;
                }
                i += 1;
              }
              e.map.push([t, n, r]);
            }
          })(this, e, t, n);
        }
        consume(e) {
          if (
            (this.map.sort(function (e, t) {
              return e[0] - t[0];
            }),
            0 === this.map.length)
          )
            return;
          let t = this.map.length,
            n = [];
          for (; t > 0; )
            (t -= 1),
              n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]),
              (e.length = this.map[t][0]);
          n.push([...e]), (e.length = 0);
          let r = n.pop();
          for (; r; ) e.push(...r), (r = n.pop());
          this.map.length = 0;
        }
      }
      function eH(e, t, n) {
        let r;
        let i = this,
          o = 0,
          l = 0;
        return function (e) {
          let t = i.events.length - 1;
          for (; t > -1; ) {
            let e = i.events[t][1].type;
            if ("lineEnding" === e || "linePrefix" === e) t--;
            else break;
          }
          let r = t > -1 ? i.events[t][1].type : null,
            a = "tableHead" === r || "tableRow" === r ? _ : s;
          return a === _ && i.parser.lazy[i.now().line] ? n(e) : a(e);
        };
        function s(t) {
          return (
            e.enter("tableHead"),
            e.enter("tableRow"),
            124 === t || ((r = !0), (l += 1)),
            c(t)
          );
        }
        function c(t) {
          return null === t
            ? n(t)
            : (0, a.Ch)(t)
              ? l > 1
                ? ((l = 0),
                  (i.interrupt = !0),
                  e.exit("tableRow"),
                  e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  f)
                : n(t)
              : (0, a.xz)(t)
                ? (0, eM.f)(e, c, "whitespace")(t)
                : ((l += 1), r && ((r = !1), (o += 1)), 124 === t)
                  ? (e.enter("tableCellDivider"),
                    e.consume(t),
                    e.exit("tableCellDivider"),
                    (r = !0),
                    c)
                  : (e.enter("data"), u(t));
        }
        function u(t) {
          return null === t || 124 === t || (0, a.z3)(t)
            ? (e.exit("data"), c(t))
            : (e.consume(t), 92 === t ? d : u);
        }
        function d(t) {
          return 92 === t || 124 === t ? (e.consume(t), u) : u(t);
        }
        function f(t) {
          return ((i.interrupt = !1), i.parser.lazy[i.now().line])
            ? n(t)
            : (e.enter("tableDelimiterRow"), (r = !1), (0, a.xz)(t))
              ? (0, eM.f)(
                  e,
                  p,
                  "linePrefix",
                  i.parser.constructs.disable.null.includes("codeIndented")
                    ? void 0
                    : 4,
                )(t)
              : p(t);
        }
        function p(t) {
          return 45 === t || 58 === t
            ? g(t)
            : 124 === t
              ? ((r = !0),
                e.enter("tableCellDivider"),
                e.consume(t),
                e.exit("tableCellDivider"),
                m)
              : n(t);
        }
        function m(t) {
          return (0, a.xz)(t) ? (0, eM.f)(e, g, "whitespace")(t) : g(t);
        }
        function g(t) {
          return 58 === t
            ? ((l += 1),
              (r = !0),
              e.enter("tableDelimiterMarker"),
              e.consume(t),
              e.exit("tableDelimiterMarker"),
              h)
            : 45 === t
              ? ((l += 1), h(t))
              : null === t || (0, a.Ch)(t)
                ? y(t)
                : n(t);
        }
        function h(t) {
          return 45 === t
            ? (e.enter("tableDelimiterFiller"),
              (function t(n) {
                return 45 === n
                  ? (e.consume(n), t)
                  : 58 === n
                    ? ((r = !0),
                      e.exit("tableDelimiterFiller"),
                      e.enter("tableDelimiterMarker"),
                      e.consume(n),
                      e.exit("tableDelimiterMarker"),
                      b)
                    : (e.exit("tableDelimiterFiller"), b(n));
              })(t))
            : n(t);
        }
        function b(t) {
          return (0, a.xz)(t) ? (0, eM.f)(e, y, "whitespace")(t) : y(t);
        }
        function y(i) {
          return 124 === i
            ? p(i)
            : null === i || (0, a.Ch)(i)
              ? r && o === l
                ? (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(i))
                : n(i)
              : n(i);
        }
        function _(t) {
          return e.enter("tableRow"), v(t);
        }
        function v(n) {
          return 124 === n
            ? (e.enter("tableCellDivider"),
              e.consume(n),
              e.exit("tableCellDivider"),
              v)
            : null === n || (0, a.Ch)(n)
              ? (e.exit("tableRow"), t(n))
              : (0, a.xz)(n)
                ? (0, eM.f)(e, v, "whitespace")(n)
                : (e.enter("data"), w(n));
        }
        function w(t) {
          return null === t || 124 === t || (0, a.z3)(t)
            ? (e.exit("data"), v(t))
            : (e.consume(t), 92 === t ? k : w);
        }
        function k(t) {
          return 92 === t || 124 === t ? (e.consume(t), w) : w(t);
        }
      }
      function eK(e, t) {
        let n,
          r,
          i,
          a = -1,
          o = !0,
          l = 0,
          s = [0, 0, 0, 0],
          c = [0, 0, 0, 0],
          u = !1,
          d = 0,
          f = new eq();
        for (; ++a < e.length; ) {
          let p = e[a],
            m = p[1];
          "enter" === p[0]
            ? "tableHead" === m.type
              ? ((u = !1),
                0 !== d && (eG(f, t, d, n, r), (r = void 0), (d = 0)),
                (n = {
                  type: "table",
                  start: Object.assign({}, m.start),
                  end: Object.assign({}, m.end),
                }),
                f.add(a, 0, [["enter", n, t]]))
              : "tableRow" === m.type || "tableDelimiterRow" === m.type
                ? ((o = !0),
                  (i = void 0),
                  (s = [0, 0, 0, 0]),
                  (c = [0, a + 1, 0, 0]),
                  u &&
                    ((u = !1),
                    (r = {
                      type: "tableBody",
                      start: Object.assign({}, m.start),
                      end: Object.assign({}, m.end),
                    }),
                    f.add(a, 0, [["enter", r, t]])),
                  (l = "tableDelimiterRow" === m.type ? 2 : r ? 3 : 1))
                : l &&
                    ("data" === m.type ||
                      "tableDelimiterMarker" === m.type ||
                      "tableDelimiterFiller" === m.type)
                  ? ((o = !1),
                    0 === c[2] &&
                      (0 !== s[1] &&
                        ((c[0] = c[1]),
                        (i = eW(f, t, s, l, void 0, i)),
                        (s = [0, 0, 0, 0])),
                      (c[2] = a)))
                  : "tableCellDivider" === m.type &&
                    (o
                      ? (o = !1)
                      : (0 !== s[1] &&
                          ((c[0] = c[1]), (i = eW(f, t, s, l, void 0, i))),
                        (c = [(s = c)[1], a, 0, 0])))
            : "tableHead" === m.type
              ? ((u = !0), (d = a))
              : "tableRow" === m.type || "tableDelimiterRow" === m.type
                ? ((d = a),
                  0 !== s[1]
                    ? ((c[0] = c[1]), (i = eW(f, t, s, l, a, i)))
                    : 0 !== c[1] && (i = eW(f, t, c, l, a, i)),
                  (l = 0))
                : l &&
                  ("data" === m.type ||
                    "tableDelimiterMarker" === m.type ||
                    "tableDelimiterFiller" === m.type) &&
                  (c[3] = a);
        }
        for (
          0 !== d && eG(f, t, d, n, r), f.consume(t.events), a = -1;
          ++a < t.events.length;

        ) {
          let e = t.events[a];
          "enter" === e[0] &&
            "table" === e[1].type &&
            (e[1]._align = (function (e, t) {
              let n = !1,
                r = [];
              for (; t < e.length; ) {
                let i = e[t];
                if (n) {
                  if ("enter" === i[0])
                    "tableContent" === i[1].type &&
                      r.push(
                        "tableDelimiterMarker" === e[t + 1][1].type
                          ? "left"
                          : "none",
                      );
                  else if ("tableContent" === i[1].type) {
                    if ("tableDelimiterMarker" === e[t - 1][1].type) {
                      let e = r.length - 1;
                      r[e] = "left" === r[e] ? "center" : "right";
                    }
                  } else if ("tableDelimiterRow" === i[1].type) break;
                } else
                  "enter" === i[0] &&
                    "tableDelimiterRow" === i[1].type &&
                    (n = !0);
                t += 1;
              }
              return r;
            })(t.events, a));
        }
        return e;
      }
      function eW(e, t, n, r, i, a) {
        0 !== n[0] &&
          ((a.end = Object.assign({}, eV(t.events, n[0]))),
          e.add(n[0], 0, [["exit", a, t]]));
        let o = eV(t.events, n[1]);
        if (
          ((a = {
            type:
              1 === r
                ? "tableHeader"
                : 2 === r
                  ? "tableDelimiter"
                  : "tableData",
            start: Object.assign({}, o),
            end: Object.assign({}, o),
          }),
          e.add(n[1], 0, [["enter", a, t]]),
          0 !== n[2])
        ) {
          let i = eV(t.events, n[2]),
            a = eV(t.events, n[3]),
            o = {
              type: "tableContent",
              start: Object.assign({}, i),
              end: Object.assign({}, a),
            };
          if ((e.add(n[2], 0, [["enter", o, t]]), 2 !== r)) {
            let r = t.events[n[2]],
              i = t.events[n[3]];
            if (
              ((r[1].end = Object.assign({}, i[1].end)),
              (r[1].type = "chunkText"),
              (r[1].contentType = "text"),
              n[3] > n[2] + 1)
            ) {
              let t = n[2] + 1,
                r = n[3] - n[2] - 1;
              e.add(t, r, []);
            }
          }
          e.add(n[3] + 1, 0, [["exit", o, t]]);
        }
        return (
          void 0 !== i &&
            ((a.end = Object.assign({}, eV(t.events, i))),
            e.add(i, 0, [["exit", a, t]]),
            (a = void 0)),
          a
        );
      }
      function eG(e, t, n, r, i) {
        let a = [],
          o = eV(t.events, n);
        i && ((i.end = Object.assign({}, o)), a.push(["exit", i, t])),
          (r.end = Object.assign({}, o)),
          a.push(["exit", r, t]),
          e.add(n + 1, 0, a);
      }
      function eV(e, t) {
        let n = e[t],
          r = "enter" === n[0] ? "start" : "end";
        return n[1][r];
      }
      let eZ = {
        tokenize: function (e, t, n) {
          let r = this;
          return function (t) {
            return null === r.previous && r._gfmTasklistFirstContentOfListItem
              ? (e.enter("taskListCheck"),
                e.enter("taskListCheckMarker"),
                e.consume(t),
                e.exit("taskListCheckMarker"),
                i)
              : n(t);
          };
          function i(t) {
            return (0, a.z3)(t)
              ? (e.enter("taskListCheckValueUnchecked"),
                e.consume(t),
                e.exit("taskListCheckValueUnchecked"),
                o)
              : 88 === t || 120 === t
                ? (e.enter("taskListCheckValueChecked"),
                  e.consume(t),
                  e.exit("taskListCheckValueChecked"),
                  o)
                : n(t);
          }
          function o(t) {
            return 93 === t
              ? (e.enter("taskListCheckMarker"),
                e.consume(t),
                e.exit("taskListCheckMarker"),
                e.exit("taskListCheck"),
                l)
              : n(t);
          }
          function l(r) {
            return (0, a.Ch)(r)
              ? t(r)
              : (0, a.xz)(r)
                ? e.check({ tokenize: eX }, t, n)(r)
                : n(r);
          }
        },
      };
      function eX(e, t, n) {
        return (0, eM.f)(
          e,
          function (e) {
            return null === e ? n(e) : t(e);
          },
          "whitespace",
        );
      }
      let eQ = {};
      function eY(e) {
        let t = e || eQ,
          n = this.data(),
          r = n.micromarkExtensions || (n.micromarkExtensions = []),
          i = n.fromMarkdownExtensions || (n.fromMarkdownExtensions = []),
          a = n.toMarkdownExtensions || (n.toMarkdownExtensions = []);
        r.push(
          (0, eg.W)([
            { text: eE },
            {
              document: {
                91: { tokenize: eR, continuation: { tokenize: ez }, exit: eP },
              },
              text: {
                91: { tokenize: eL },
                93: { add: "after", tokenize: eB, resolveTo: eI },
              },
            },
            (function (e) {
              let t = (e || {}).singleTilde,
                n = {
                  tokenize: function (e, n, r) {
                    let i = this.previous,
                      a = this.events,
                      o = 0;
                    return function (l) {
                      return 126 === i &&
                        "characterEscape" !== a[a.length - 1][1].type
                        ? r(l)
                        : (e.enter("strikethroughSequenceTemporary"),
                          (function a(l) {
                            let s = (0, e$.r)(i);
                            if (126 === l)
                              return o > 1 ? r(l) : (e.consume(l), o++, a);
                            if (o < 2 && !t) return r(l);
                            let c = e.exit("strikethroughSequenceTemporary"),
                              u = (0, e$.r)(l);
                            return (
                              (c._open = !u || (2 === u && !!s)),
                              (c._close = !s || (2 === s && !!u)),
                              n(l)
                            );
                          })(l));
                    };
                  },
                  resolveAll: function (e, t) {
                    let n = -1;
                    for (; ++n < e.length; )
                      if (
                        "enter" === e[n][0] &&
                        "strikethroughSequenceTemporary" === e[n][1].type &&
                        e[n][1]._close
                      ) {
                        let r = n;
                        for (; r--; )
                          if (
                            "exit" === e[r][0] &&
                            "strikethroughSequenceTemporary" === e[r][1].type &&
                            e[r][1]._open &&
                            e[n][1].end.offset - e[n][1].start.offset ==
                              e[r][1].end.offset - e[r][1].start.offset
                          ) {
                            (e[n][1].type = "strikethroughSequence"),
                              (e[r][1].type = "strikethroughSequence");
                            let i = {
                                type: "strikethrough",
                                start: Object.assign({}, e[r][1].start),
                                end: Object.assign({}, e[n][1].end),
                              },
                              a = {
                                type: "strikethroughText",
                                start: Object.assign({}, e[r][1].end),
                                end: Object.assign({}, e[n][1].start),
                              },
                              o = [
                                ["enter", i, t],
                                ["enter", e[r][1], t],
                                ["exit", e[r][1], t],
                                ["enter", a, t],
                              ],
                              l = t.parser.constructs.insideSpan.null;
                            l &&
                              (0, ej.d)(
                                o,
                                o.length,
                                0,
                                (0, eU.C)(l, e.slice(r + 1, n), t),
                              ),
                              (0, ej.d)(o, o.length, 0, [
                                ["exit", a, t],
                                ["enter", e[n][1], t],
                                ["exit", e[n][1], t],
                                ["exit", i, t],
                              ]),
                              (0, ej.d)(e, r - 1, n - r + 3, o),
                              (n = r + o.length - 2);
                            break;
                          }
                      }
                    for (n = -1; ++n < e.length; )
                      "strikethroughSequenceTemporary" === e[n][1].type &&
                        (e[n][1].type = "data");
                    return e;
                  },
                };
              return (
                null == t && (t = !0),
                {
                  text: { 126: n },
                  insideSpan: { null: [n] },
                  attentionMarkers: { null: [126] },
                }
              );
            })(t),
            { flow: { null: { tokenize: eH, resolveAll: eK } } },
            { text: { 91: eZ } },
          ]),
        ),
          i.push([
            {
              transforms: [g],
              enter: {
                literalAutolink: c,
                literalAutolinkEmail: u,
                literalAutolinkHttp: u,
                literalAutolinkWww: u,
              },
              exit: {
                literalAutolink: m,
                literalAutolinkEmail: p,
                literalAutolinkHttp: d,
                literalAutolinkWww: f,
              },
            },
            {
              enter: {
                gfmFootnoteDefinition: v,
                gfmFootnoteDefinitionLabelString: w,
                gfmFootnoteCall: E,
                gfmFootnoteCallString: D,
              },
              exit: {
                gfmFootnoteDefinition: x,
                gfmFootnoteDefinitionLabelString: k,
                gfmFootnoteCall: A,
                gfmFootnoteCallString: C,
              },
            },
            {
              canContainEols: ["delete"],
              enter: { strikethrough: M },
              exit: { strikethrough: T },
            },
            {
              enter: {
                table: ea,
                tableData: ec,
                tableHeader: ec,
                tableRow: el,
              },
              exit: {
                codeText: eu,
                table: eo,
                tableData: es,
                tableHeader: es,
                tableRow: es,
              },
            },
            {
              exit: {
                taskListCheckValueChecked: ef,
                taskListCheckValueUnchecked: ef,
                paragraph: ep,
              },
            },
          ]),
          a.push({
            extensions: [
              {
                unsafe: [
                  {
                    character: "@",
                    before: "[+\\-.\\w]",
                    after: "[\\-.\\w]",
                    inConstruct: l,
                    notInConstruct: s,
                  },
                  {
                    character: ".",
                    before: "[Ww]",
                    after: "[\\-.\\w]",
                    inConstruct: l,
                    notInConstruct: s,
                  },
                  {
                    character: ":",
                    before: "[ps]",
                    after: "\\/",
                    inConstruct: l,
                    notInConstruct: s,
                  },
                ],
              },
              {
                unsafe: [
                  {
                    character: "[",
                    inConstruct: ["phrasing", "label", "reference"],
                  },
                ],
                handlers: { footnoteDefinition: S, footnoteReference: F },
              },
              {
                unsafe: [
                  {
                    character: "~",
                    inConstruct: "phrasing",
                    notInConstruct: O,
                  },
                ],
                handlers: { delete: B },
              },
              (function (e) {
                let t = e || {},
                  n = t.tableCellPadding,
                  r = t.tablePipeAlign,
                  i = t.stringLength,
                  a = n ? " " : "|";
                return {
                  unsafe: [
                    { character: "\r", inConstruct: "tableCell" },
                    { character: "\n", inConstruct: "tableCell" },
                    { atBreak: !0, character: "|", after: "[	 :-]" },
                    { character: "|", inConstruct: "tableCell" },
                    { atBreak: !0, character: ":", after: "-" },
                    { atBreak: !0, character: "-", after: "[:|-]" },
                  ],
                  handlers: {
                    inlineCode: function (e, t, n) {
                      let r = ei.inlineCode(e, t, n);
                      return (
                        n.stack.includes("tableCell") &&
                          (r = r.replace(/\|/g, "\\$&")),
                        r
                      );
                    },
                    table: function (e, t, n, r) {
                      return l(
                        (function (e, t, n) {
                          let r = e.children,
                            i = -1,
                            a = [],
                            o = t.enter("table");
                          for (; ++i < r.length; ) a[i] = s(r[i], t, n);
                          return o(), a;
                        })(e, n, r),
                        e.align,
                      );
                    },
                    tableCell: o,
                    tableRow: function (e, t, n, r) {
                      let i = l([s(e, n, r)]);
                      return i.slice(0, i.indexOf("\n"));
                    },
                  },
                };
                function o(e, t, n, r) {
                  let i = n.enter("tableCell"),
                    o = n.enter("phrasing"),
                    l = n.containerPhrasing(e, { ...r, before: a, after: a });
                  return o(), i(), l;
                }
                function l(e, t) {
                  return (function (e, t = {}) {
                    let n = (t.align || []).concat(),
                      r = t.stringLength || I,
                      i = [],
                      a = [],
                      o = [],
                      l = [],
                      s = 0,
                      c = -1;
                    for (; ++c < e.length; ) {
                      let n = [],
                        i = [],
                        d = -1;
                      for (
                        e[c].length > s && (s = e[c].length);
                        ++d < e[c].length;

                      ) {
                        var u;
                        let a = null == (u = e[c][d]) ? "" : String(u);
                        if (!1 !== t.alignDelimiters) {
                          let e = r(a);
                          (i[d] = e),
                            (void 0 === l[d] || e > l[d]) && (l[d] = e);
                        }
                        n.push(a);
                      }
                      (a[c] = n), (o[c] = i);
                    }
                    let d = -1;
                    if ("object" == typeof n && "length" in n)
                      for (; ++d < s; ) i[d] = L(n[d]);
                    else {
                      let e = L(n);
                      for (; ++d < s; ) i[d] = e;
                    }
                    d = -1;
                    let f = [],
                      p = [];
                    for (; ++d < s; ) {
                      let e = i[d],
                        n = "",
                        r = "";
                      99 === e
                        ? ((n = ":"), (r = ":"))
                        : 108 === e
                          ? (n = ":")
                          : 114 === e && (r = ":");
                      let a =
                          !1 === t.alignDelimiters
                            ? 1
                            : Math.max(1, l[d] - n.length - r.length),
                        o = n + "-".repeat(a) + r;
                      !1 !== t.alignDelimiters &&
                        ((a = n.length + a + r.length) > l[d] && (l[d] = a),
                        (p[d] = a)),
                        (f[d] = o);
                    }
                    a.splice(1, 0, f), o.splice(1, 0, p), (c = -1);
                    let m = [];
                    for (; ++c < a.length; ) {
                      let e = a[c],
                        n = o[c];
                      d = -1;
                      let r = [];
                      for (; ++d < s; ) {
                        let a = e[d] || "",
                          o = "",
                          c = "";
                        if (!1 !== t.alignDelimiters) {
                          let e = l[d] - (n[d] || 0),
                            t = i[d];
                          114 === t
                            ? (o = " ".repeat(e))
                            : 99 === t
                              ? e % 2
                                ? ((o = " ".repeat(e / 2 + 0.5)),
                                  (c = " ".repeat(e / 2 - 0.5)))
                                : (c = o = " ".repeat(e / 2))
                              : (c = " ".repeat(e));
                        }
                        !1 === t.delimiterStart || d || r.push("|"),
                          !1 !== t.padding &&
                            !(!1 === t.alignDelimiters && "" === a) &&
                            (!1 !== t.delimiterStart || d) &&
                            r.push(" "),
                          !1 !== t.alignDelimiters && r.push(o),
                          r.push(a),
                          !1 !== t.alignDelimiters && r.push(c),
                          !1 !== t.padding && r.push(" "),
                          (!1 !== t.delimiterEnd || d !== s - 1) && r.push("|");
                      }
                      m.push(
                        !1 === t.delimiterEnd
                          ? r.join("").replace(/ +$/, "")
                          : r.join(""),
                      );
                    }
                    return m.join("\n");
                  })(e, {
                    align: t,
                    alignDelimiters: r,
                    padding: n,
                    stringLength: i,
                  });
                }
                function s(e, t, n) {
                  let r = e.children,
                    i = -1,
                    a = [],
                    l = t.enter("tableRow");
                  for (; ++i < r.length; ) a[i] = o(r[i], e, t, n);
                  return l(), a;
                }
              })(t),
              {
                unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
                handlers: { listItem: em },
              },
            ],
          });
      }
    },
    7437: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = n(4345),
        i = n(5996),
        a = n(2761),
        o = n(5459);
      let l = {
          tokenize: function (e, t, n) {
            let r = this,
              i = r.events[r.events.length - 1],
              l =
                i && "linePrefix" === i[1].type
                  ? i[2].sliceSerialize(i[1], !0).length
                  : 0,
              c = 0;
            return function (t) {
              return (
                e.enter("mathFlow"),
                e.enter("mathFlowFence"),
                e.enter("mathFlowFenceSequence"),
                (function t(r) {
                  return 36 === r
                    ? (e.consume(r), c++, t)
                    : c < 2
                      ? n(r)
                      : (e.exit("mathFlowFenceSequence"),
                        (0, a.f)(e, u, "whitespace")(r));
                })(t)
              );
            };
            function u(t) {
              return null === t || (0, o.Ch)(t)
                ? d(t)
                : (e.enter("mathFlowFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(r) {
                    return null === r || (0, o.Ch)(r)
                      ? (e.exit("chunkString"),
                        e.exit("mathFlowFenceMeta"),
                        d(r))
                      : 36 === r
                        ? n(r)
                        : (e.consume(r), t);
                  })(t));
            }
            function d(n) {
              return (e.exit("mathFlowFence"), r.interrupt)
                ? t(n)
                : e.attempt(s, f, g)(n);
            }
            function f(t) {
              return e.attempt({ tokenize: h, partial: !0 }, g, p)(t);
            }
            function p(t) {
              return (l ? (0, a.f)(e, m, "linePrefix", l + 1) : m)(t);
            }
            function m(t) {
              return null === t
                ? g(t)
                : (0, o.Ch)(t)
                  ? e.attempt(s, f, g)(t)
                  : (e.enter("mathFlowValue"),
                    (function t(n) {
                      return null === n || (0, o.Ch)(n)
                        ? (e.exit("mathFlowValue"), m(n))
                        : (e.consume(n), t);
                    })(t));
            }
            function g(n) {
              return e.exit("mathFlow"), t(n);
            }
            function h(e, t, n) {
              let i = 0;
              return (0, a.f)(
                e,
                function (t) {
                  return (
                    e.enter("mathFlowFence"),
                    e.enter("mathFlowFenceSequence"),
                    (function t(r) {
                      return 36 === r
                        ? (i++, e.consume(r), t)
                        : i < c
                          ? n(r)
                          : (e.exit("mathFlowFenceSequence"),
                            (0, a.f)(e, l, "whitespace")(r));
                    })(t)
                  );
                },
                "linePrefix",
                r.parser.constructs.disable.null.includes("codeIndented")
                  ? void 0
                  : 4,
              );
              function l(r) {
                return null === r || (0, o.Ch)(r)
                  ? (e.exit("mathFlowFence"), t(r))
                  : n(r);
              }
            }
          },
          concrete: !0,
        },
        s = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (n) {
              return null === n
                ? t(n)
                : (e.enter("lineEnding"),
                  e.consume(n),
                  e.exit("lineEnding"),
                  i);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        };
      function c(e) {
        let t,
          n,
          r = e.length - 4,
          i = 3;
        if (
          ("lineEnding" === e[3][1].type || "space" === e[i][1].type) &&
          ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
        ) {
          for (t = i; ++t < r; )
            if ("mathTextData" === e[t][1].type) {
              (e[r][1].type = "mathTextPadding"),
                (e[i][1].type = "mathTextPadding"),
                (i += 2),
                (r -= 2);
              break;
            }
        }
        for (t = i - 1, r++; ++t <= r; )
          void 0 === n
            ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
            : (t === r || "lineEnding" === e[t][1].type) &&
              ((e[n][1].type = "mathTextData"),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0));
        return e;
      }
      function u(e) {
        return (
          36 !== e ||
          "characterEscape" === this.events[this.events.length - 1][1].type
        );
      }
      let d = {};
      function f(e) {
        let t;
        let n = e || d,
          a = this.data(),
          s = a.micromarkExtensions || (a.micromarkExtensions = []),
          f = a.fromMarkdownExtensions || (a.fromMarkdownExtensions = []),
          p = a.toMarkdownExtensions || (a.toMarkdownExtensions = []);
        s.push({
          flow: { 36: l },
          text: {
            36:
              (null == (t = (n || {}).singleDollarTextMath) && (t = !0),
              {
                tokenize: function (e, n, r) {
                  let i,
                    a,
                    l = 0;
                  return function (n) {
                    return (
                      e.enter("mathText"),
                      e.enter("mathTextSequence"),
                      (function n(i) {
                        return 36 === i
                          ? (e.consume(i), l++, n)
                          : l < 2 && !t
                            ? r(i)
                            : (e.exit("mathTextSequence"), s(i));
                      })(n)
                    );
                  };
                  function s(t) {
                    return null === t
                      ? r(t)
                      : 36 === t
                        ? ((a = e.enter("mathTextSequence")),
                          (i = 0),
                          (function t(r) {
                            return 36 === r
                              ? (e.consume(r), i++, t)
                              : i === l
                                ? (e.exit("mathTextSequence"),
                                  e.exit("mathText"),
                                  n(r))
                                : ((a.type = "mathTextData"), c(r));
                          })(t))
                        : 32 === t
                          ? (e.enter("space"), e.consume(t), e.exit("space"), s)
                          : (0, o.Ch)(t)
                            ? (e.enter("lineEnding"),
                              e.consume(t),
                              e.exit("lineEnding"),
                              s)
                            : (e.enter("mathTextData"), c(t));
                  }
                  function c(t) {
                    return null === t || 32 === t || 36 === t || (0, o.Ch)(t)
                      ? (e.exit("mathTextData"), s(t))
                      : (e.consume(t), c);
                  }
                },
                resolve: c,
                previous: u,
              }),
          },
        }),
          f.push(
            (function () {
              return {
                enter: {
                  mathFlow: function (e) {
                    this.enter(
                      {
                        type: "math",
                        meta: null,
                        value: "",
                        data: {
                          hName: "pre",
                          hChildren: [
                            {
                              type: "element",
                              tagName: "code",
                              properties: {
                                className: ["language-math", "math-display"],
                              },
                              children: [],
                            },
                          ],
                        },
                      },
                      e,
                    );
                  },
                  mathFlowFenceMeta: function () {
                    this.buffer();
                  },
                  mathText: function (e) {
                    this.enter(
                      {
                        type: "inlineMath",
                        value: "",
                        data: {
                          hName: "code",
                          hProperties: {
                            className: ["language-math", "math-inline"],
                          },
                          hChildren: [],
                        },
                      },
                      e,
                    ),
                      this.buffer();
                  },
                },
                exit: {
                  mathFlow: function (e) {
                    let t = this.resume().replace(
                        /^(\r?\n|\r)|(\r?\n|\r)$/g,
                        "",
                      ),
                      n = this.stack[this.stack.length - 1];
                    (0, r.ok)("math" === n.type), this.exit(e), (n.value = t);
                    let i = n.data.hChildren[0];
                    (0, r.ok)("element" === i.type),
                      (0, r.ok)("code" === i.tagName),
                      i.children.push({ type: "text", value: t }),
                      (this.data.mathFlowInside = void 0);
                  },
                  mathFlowFence: function () {
                    this.data.mathFlowInside ||
                      (this.buffer(), (this.data.mathFlowInside = !0));
                  },
                  mathFlowFenceMeta: function () {
                    let e = this.resume(),
                      t = this.stack[this.stack.length - 1];
                    (0, r.ok)("math" === t.type), (t.meta = e);
                  },
                  mathFlowValue: e,
                  mathText: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (0, r.ok)("inlineMath" === n.type),
                      this.exit(e),
                      (n.value = t),
                      n.data.hChildren.push({ type: "text", value: t });
                  },
                  mathTextData: e,
                },
              };
              function e(e) {
                this.config.enter.data.call(this, e),
                  this.config.exit.data.call(this, e);
              }
            })(),
          ),
          p.push(
            (function (e) {
              let t = (e || {}).singleDollarTextMath;
              return (
                null == t && (t = !0),
                (n.peek = function () {
                  return "$";
                }),
                {
                  unsafe: [
                    { character: "\r", inConstruct: "mathFlowMeta" },
                    { character: "\n", inConstruct: "mathFlowMeta" },
                    {
                      character: "$",
                      after: t ? void 0 : "\\$",
                      inConstruct: "phrasing",
                    },
                    { character: "$", inConstruct: "mathFlowMeta" },
                    { atBreak: !0, character: "$", after: "\\$" },
                  ],
                  handlers: {
                    math: function (e, t, n, r) {
                      let a = e.value || "",
                        o = n.createTracker(r),
                        l = "$".repeat(Math.max((0, i.J)(a, "$") + 1, 2)),
                        s = n.enter("mathFlow"),
                        c = o.move(l);
                      if (e.meta) {
                        let t = n.enter("mathFlowMeta");
                        (c += o.move(
                          n.safe(e.meta, {
                            after: "\n",
                            before: c,
                            encode: ["$"],
                            ...o.current(),
                          }),
                        )),
                          t();
                      }
                      return (
                        (c += o.move("\n")),
                        a && (c += o.move(a + "\n")),
                        (c += o.move(l)),
                        s(),
                        c
                      );
                    },
                    inlineMath: n,
                  },
                }
              );
              function n(e, n, r) {
                let i = e.value || "",
                  a = 1;
                for (
                  !t && a++;
                  RegExp("(^|[^$])" + "\\$".repeat(a) + "([^$]|$)").test(i);

                )
                  a++;
                let o = "$".repeat(a);
                /[^ \r\n]/.test(i) &&
                  ((/^[ \r\n]/.test(i) && /[ \r\n]$/.test(i)) ||
                    /^\$|\$$/.test(i)) &&
                  (i = " " + i + " ");
                let l = -1;
                for (; ++l < r.unsafe.length; ) {
                  let e;
                  let t = r.unsafe[l];
                  if (!t.atBreak) continue;
                  let n = r.compilePattern(t);
                  for (; (e = n.exec(i)); ) {
                    let t = e.index;
                    10 === i.codePointAt(t) &&
                      13 === i.codePointAt(t - 1) &&
                      t--,
                      (i = i.slice(0, t) + " " + i.slice(e.index + 1));
                  }
                }
                return o + i + o;
              }
            })(n),
          );
      }
    },
    3698: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return ev;
        },
      });
      var r = {};
      n.r(r),
        n.d(r, {
          attentionMarkers: function () {
            return eu;
          },
          contentInitial: function () {
            return ei;
          },
          disable: function () {
            return ed;
          },
          document: function () {
            return er;
          },
          flow: function () {
            return eo;
          },
          flowInitial: function () {
            return ea;
          },
          insideSpan: function () {
            return ec;
          },
          string: function () {
            return el;
          },
          text: function () {
            return es;
          },
        });
      var i = n(7962),
        a = n(1905);
      function o(e) {
        let t, n, r, i, o, l, s;
        let c = {},
          u = -1;
        for (; ++u < e.length; ) {
          for (; u in c; ) u = c[u];
          if (
            ((t = e[u]),
            u &&
              "chunkFlow" === t[1].type &&
              "listItemPrefix" === e[u - 1][1].type &&
              ((r = 0) < (l = t[1]._tokenizer.events).length &&
                "lineEndingBlank" === l[r][1].type &&
                (r += 2),
              r < l.length && "content" === l[r][1].type))
          )
            for (; ++r < l.length && "content" !== l[r][1].type; )
              "chunkText" === l[r][1].type &&
                ((l[r][1]._isInFirstContentOfListItem = !0), r++);
          if ("enter" === t[0])
            t[1].contentType &&
              (Object.assign(
                c,
                (function (e, t) {
                  let n, r;
                  let i = e[t][1],
                    o = e[t][2],
                    l = t - 1,
                    s = [],
                    c = i._tokenizer || o.parser[i.contentType](i.start),
                    u = c.events,
                    d = [],
                    f = {},
                    p = -1,
                    m = i,
                    g = 0,
                    h = 0,
                    b = [0];
                  for (; m; ) {
                    for (; e[++l][1] !== m; );
                    s.push(l),
                      !m._tokenizer &&
                        ((n = o.sliceStream(m)),
                        m.next || n.push(null),
                        r && c.defineSkip(m.start),
                        m._isInFirstContentOfListItem &&
                          (c._gfmTasklistFirstContentOfListItem = !0),
                        c.write(n),
                        m._isInFirstContentOfListItem &&
                          (c._gfmTasklistFirstContentOfListItem = void 0)),
                      (r = m),
                      (m = m.next);
                  }
                  for (m = i; ++p < u.length; )
                    "exit" === u[p][0] &&
                      "enter" === u[p - 1][0] &&
                      u[p][1].type === u[p - 1][1].type &&
                      u[p][1].start.line !== u[p][1].end.line &&
                      ((h = p + 1),
                      b.push(h),
                      (m._tokenizer = void 0),
                      (m.previous = void 0),
                      (m = m.next));
                  for (
                    c.events = [],
                      m
                        ? ((m._tokenizer = void 0), (m.previous = void 0))
                        : b.pop(),
                      p = b.length;
                    p--;

                  ) {
                    let t = u.slice(b[p], b[p + 1]),
                      n = s.pop();
                    d.unshift([n, n + t.length - 1]), (0, a.d)(e, n, 2, t);
                  }
                  for (p = -1; ++p < d.length; )
                    (f[g + d[p][0]] = g + d[p][1]),
                      (g += d[p][1] - d[p][0] - 1);
                  return f;
                })(e, u),
              ),
              (u = c[u]),
              (s = !0));
          else if (t[1]._container) {
            for (r = u, n = void 0; r--; )
              if (
                "lineEnding" === (i = e[r])[1].type ||
                "lineEndingBlank" === i[1].type
              )
                "enter" === i[0] &&
                  (n && (e[n][1].type = "lineEndingBlank"),
                  (i[1].type = "lineEnding"),
                  (n = r));
              else break;
            n &&
              ((t[1].end = Object.assign({}, e[n][1].start)),
              (o = e.slice(n, u)).unshift(t),
              (0, a.d)(e, n, u - n + 1, o));
          }
        }
        return !s;
      }
      var l = n(4663),
        s = n(2761),
        c = n(5459);
      let u = {
          tokenize: function (e) {
            let t;
            let n = e.attempt(
              this.parser.constructs.contentInitial,
              function (t) {
                if (null === t) {
                  e.consume(t);
                  return;
                }
                return (
                  e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  (0, s.f)(e, n, "linePrefix")
                );
              },
              function (n) {
                return (
                  e.enter("paragraph"),
                  (function n(r) {
                    let i = e.enter("chunkText", {
                      contentType: "text",
                      previous: t,
                    });
                    return (
                      t && (t.next = i),
                      (t = i),
                      (function t(r) {
                        if (null === r) {
                          e.exit("chunkText"),
                            e.exit("paragraph"),
                            e.consume(r);
                          return;
                        }
                        return (0, c.Ch)(r)
                          ? (e.consume(r), e.exit("chunkText"), n)
                          : (e.consume(r), t);
                      })(r)
                    );
                  })(n)
                );
              },
            );
            return n;
          },
        },
        d = {
          tokenize: function (e) {
            let t, n, r;
            let i = this,
              o = [],
              l = 0;
            return s;
            function s(t) {
              if (l < o.length) {
                let n = o[l];
                return (
                  (i.containerState = n[1]),
                  e.attempt(n[0].continuation, u, d)(t)
                );
              }
              return d(t);
            }
            function u(e) {
              if ((l++, i.containerState._closeFlow)) {
                let n;
                (i.containerState._closeFlow = void 0), t && v();
                let r = i.events.length,
                  o = r;
                for (; o--; )
                  if (
                    "exit" === i.events[o][0] &&
                    "chunkFlow" === i.events[o][1].type
                  ) {
                    n = i.events[o][1].end;
                    break;
                  }
                _(l);
                let s = r;
                for (; s < i.events.length; )
                  (i.events[s][1].end = Object.assign({}, n)), s++;
                return (
                  (0, a.d)(i.events, o + 1, 0, i.events.slice(r)),
                  (i.events.length = s),
                  d(e)
                );
              }
              return s(e);
            }
            function d(n) {
              if (l === o.length) {
                if (!t) return g(n);
                if (t.currentConstruct && t.currentConstruct.concrete)
                  return b(n);
                i.interrupt = !!(
                  t.currentConstruct && !t._gfmTableDynamicInterruptHack
                );
              }
              return (i.containerState = {}), e.check(f, p, m)(n);
            }
            function p(e) {
              return t && v(), _(l), g(e);
            }
            function m(e) {
              return (
                (i.parser.lazy[i.now().line] = l !== o.length),
                (r = i.now().offset),
                b(e)
              );
            }
            function g(t) {
              return (i.containerState = {}), e.attempt(f, h, b)(t);
            }
            function h(e) {
              return l++, o.push([i.currentConstruct, i.containerState]), g(e);
            }
            function b(r) {
              if (null === r) {
                t && v(), _(0), e.consume(r);
                return;
              }
              return (
                (t = t || i.parser.flow(i.now())),
                e.enter("chunkFlow", {
                  contentType: "flow",
                  previous: n,
                  _tokenizer: t,
                }),
                (function t(n) {
                  if (null === n) {
                    y(e.exit("chunkFlow"), !0), _(0), e.consume(n);
                    return;
                  }
                  return (0, c.Ch)(n)
                    ? (e.consume(n),
                      y(e.exit("chunkFlow")),
                      (l = 0),
                      (i.interrupt = void 0),
                      s)
                    : (e.consume(n), t);
                })(r)
              );
            }
            function y(e, o) {
              let s = i.sliceStream(e);
              if (
                (o && s.push(null),
                (e.previous = n),
                n && (n.next = e),
                (n = e),
                t.defineSkip(e.start),
                t.write(s),
                i.parser.lazy[e.start.line])
              ) {
                let e,
                  n,
                  o = t.events.length;
                for (; o--; )
                  if (
                    t.events[o][1].start.offset < r &&
                    (!t.events[o][1].end || t.events[o][1].end.offset > r)
                  )
                    return;
                let s = i.events.length,
                  c = s;
                for (; c--; )
                  if (
                    "exit" === i.events[c][0] &&
                    "chunkFlow" === i.events[c][1].type
                  ) {
                    if (e) {
                      n = i.events[c][1].end;
                      break;
                    }
                    e = !0;
                  }
                for (_(l), o = s; o < i.events.length; )
                  (i.events[o][1].end = Object.assign({}, n)), o++;
                (0, a.d)(i.events, c + 1, 0, i.events.slice(s)),
                  (i.events.length = o);
              }
            }
            function _(t) {
              let n = o.length;
              for (; n-- > t; ) {
                let t = o[n];
                (i.containerState = t[1]), t[0].exit.call(i, e);
              }
              o.length = t;
            }
            function v() {
              t.write([null]),
                (n = void 0),
                (t = void 0),
                (i.containerState._closeFlow = void 0);
            }
          },
        },
        f = {
          tokenize: function (e, t, n) {
            return (0, s.f)(
              e,
              e.attempt(this.parser.constructs.document, t, n),
              "linePrefix",
              this.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 4,
            );
          },
        };
      var p = n(3402);
      let m = {
          tokenize: function (e, t) {
            let n;
            return function (t) {
              return (
                e.enter("content"),
                (n = e.enter("chunkContent", { contentType: "content" })),
                r(t)
              );
            };
            function r(t) {
              return null === t
                ? i(t)
                : (0, c.Ch)(t)
                  ? e.check(g, a, i)(t)
                  : (e.consume(t), r);
            }
            function i(n) {
              return e.exit("chunkContent"), e.exit("content"), t(n);
            }
            function a(t) {
              return (
                e.consume(t),
                e.exit("chunkContent"),
                (n.next = e.enter("chunkContent", {
                  contentType: "content",
                  previous: n,
                })),
                (n = n.next),
                r
              );
            }
          },
          resolve: function (e) {
            return o(e), e;
          },
        },
        g = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.exit("chunkContent"),
                e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                (0, s.f)(e, i, "linePrefix")
              );
            };
            function i(i) {
              if (null === i || (0, c.Ch)(i)) return n(i);
              let a = r.events[r.events.length - 1];
              return !r.parser.constructs.disable.null.includes(
                "codeIndented",
              ) &&
                a &&
                "linePrefix" === a[1].type &&
                a[2].sliceSerialize(a[1], !0).length >= 4
                ? t(i)
                : e.interrupt(r.parser.constructs.flow, n, t)(i);
            }
          },
          partial: !0,
        },
        h = {
          tokenize: function (e) {
            let t = this,
              n = e.attempt(
                p.w,
                function (r) {
                  if (null === r) {
                    e.consume(r);
                    return;
                  }
                  return (
                    e.enter("lineEndingBlank"),
                    e.consume(r),
                    e.exit("lineEndingBlank"),
                    (t.currentConstruct = void 0),
                    n
                  );
                },
                e.attempt(
                  this.parser.constructs.flowInitial,
                  r,
                  (0, s.f)(
                    e,
                    e.attempt(this.parser.constructs.flow, r, e.attempt(m, r)),
                    "linePrefix",
                  ),
                ),
              );
            return n;
            function r(r) {
              if (null === r) {
                e.consume(r);
                return;
              }
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                (t.currentConstruct = void 0),
                n
              );
            }
          },
        },
        b = { resolveAll: w() },
        y = v("string"),
        _ = v("text");
      function v(e) {
        return {
          tokenize: function (t) {
            let n = this,
              r = this.parser.constructs[e],
              i = t.attempt(r, a, o);
            return a;
            function a(e) {
              return s(e) ? i(e) : o(e);
            }
            function o(e) {
              if (null === e) {
                t.consume(e);
                return;
              }
              return t.enter("data"), t.consume(e), l;
            }
            function l(e) {
              return s(e) ? (t.exit("data"), i(e)) : (t.consume(e), l);
            }
            function s(e) {
              if (null === e) return !0;
              let t = r[e],
                i = -1;
              if (t)
                for (; ++i < t.length; ) {
                  let e = t[i];
                  if (!e.previous || e.previous.call(n, n.previous)) return !0;
                }
              return !1;
            }
          },
          resolveAll: w("text" === e ? k : void 0),
        };
      }
      function w(e) {
        return function (t, n) {
          let r,
            i = -1;
          for (; ++i <= t.length; )
            void 0 === r
              ? t[i] && "data" === t[i][1].type && ((r = i), i++)
              : (t[i] && "data" === t[i][1].type) ||
                (i !== r + 2 &&
                  ((t[r][1].end = t[i - 1][1].end),
                  t.splice(r + 2, i - r - 2),
                  (i = r + 2)),
                (r = void 0));
          return e ? e(t, n) : t;
        };
      }
      function k(e, t) {
        let n = 0;
        for (; ++n <= e.length; )
          if (
            (n === e.length || "lineEnding" === e[n][1].type) &&
            "data" === e[n - 1][1].type
          ) {
            let r;
            let i = e[n - 1][1],
              a = t.sliceStream(i),
              o = a.length,
              l = -1,
              s = 0;
            for (; o--; ) {
              let e = a[o];
              if ("string" == typeof e) {
                for (l = e.length; 32 === e.charCodeAt(l - 1); ) s++, l--;
                if (l) break;
                l = -1;
              } else if (-2 === e) (r = !0), s++;
              else if (-1 === e);
              else {
                o++;
                break;
              }
            }
            if (s) {
              let a = {
                type:
                  n === e.length || r || s < 2
                    ? "lineSuffix"
                    : "hardBreakTrailing",
                start: {
                  line: i.end.line,
                  column: i.end.column - s,
                  offset: i.end.offset - s,
                  _index: i.start._index + o,
                  _bufferIndex: o ? l : i.start._bufferIndex + l,
                },
                end: Object.assign({}, i.end),
              };
              (i.end = Object.assign({}, a.start)),
                i.start.offset === i.end.offset
                  ? Object.assign(i, a)
                  : (e.splice(n, 0, ["enter", a, t], ["exit", a, t]), (n += 2));
            }
            n++;
          }
        return e;
      }
      var x = n(3233);
      let E = {
          name: "thematicBreak",
          tokenize: function (e, t, n) {
            let r,
              i = 0;
            return function (a) {
              return (
                e.enter("thematicBreak"),
                (r = a),
                (function a(o) {
                  return o === r
                    ? (e.enter("thematicBreakSequence"),
                      (function t(n) {
                        return n === r
                          ? (e.consume(n), i++, t)
                          : (e.exit("thematicBreakSequence"),
                            (0, c.xz)(n)
                              ? (0, s.f)(e, a, "whitespace")(n)
                              : a(n));
                      })(o))
                    : i >= 3 && (null === o || (0, c.Ch)(o))
                      ? (e.exit("thematicBreak"), t(o))
                      : n(o);
                })(a)
              );
            };
          },
        },
        D = {
          name: "list",
          tokenize: function (e, t, n) {
            let r = this,
              i = r.events[r.events.length - 1],
              a =
                i && "linePrefix" === i[1].type
                  ? i[2].sliceSerialize(i[1], !0).length
                  : 0,
              o = 0;
            return function (t) {
              let i =
                r.containerState.type ||
                (42 === t || 43 === t || 45 === t
                  ? "listUnordered"
                  : "listOrdered");
              if (
                "listUnordered" === i
                  ? !r.containerState.marker || t === r.containerState.marker
                  : (0, c.pY)(t)
              ) {
                if (
                  (r.containerState.type ||
                    ((r.containerState.type = i),
                    e.enter(i, { _container: !0 })),
                  "listUnordered" === i)
                )
                  return (
                    e.enter("listItemPrefix"),
                    42 === t || 45 === t ? e.check(E, n, l)(t) : l(t)
                  );
                if (!r.interrupt || 49 === t)
                  return (
                    e.enter("listItemPrefix"),
                    e.enter("listItemValue"),
                    (function t(i) {
                      return (0, c.pY)(i) && ++o < 10
                        ? (e.consume(i), t)
                        : (!r.interrupt || o < 2) &&
                            (r.containerState.marker
                              ? i === r.containerState.marker
                              : 41 === i || 46 === i)
                          ? (e.exit("listItemValue"), l(i))
                          : n(i);
                    })(t)
                  );
              }
              return n(t);
            };
            function l(t) {
              return (
                e.enter("listItemMarker"),
                e.consume(t),
                e.exit("listItemMarker"),
                (r.containerState.marker = r.containerState.marker || t),
                e.check(p.w, r.interrupt ? n : s, e.attempt(C, d, u))
              );
            }
            function s(e) {
              return (r.containerState.initialBlankLine = !0), a++, d(e);
            }
            function u(t) {
              return (0, c.xz)(t)
                ? (e.enter("listItemPrefixWhitespace"),
                  e.consume(t),
                  e.exit("listItemPrefixWhitespace"),
                  d)
                : n(t);
            }
            function d(n) {
              return (
                (r.containerState.size =
                  a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
                t(n)
              );
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return (
                (r.containerState._closeFlow = void 0),
                e.check(
                  p.w,
                  function (n) {
                    return (
                      (r.containerState.furtherBlankLines =
                        r.containerState.furtherBlankLines ||
                        r.containerState.initialBlankLine),
                      (0, s.f)(
                        e,
                        t,
                        "listItemIndent",
                        r.containerState.size + 1,
                      )(n)
                    );
                  },
                  function (n) {
                    return r.containerState.furtherBlankLines || !(0, c.xz)(n)
                      ? ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        i(n))
                      : ((r.containerState.furtherBlankLines = void 0),
                        (r.containerState.initialBlankLine = void 0),
                        e.attempt(A, t, i)(n));
                  },
                )
              );
              function i(i) {
                return (
                  (r.containerState._closeFlow = !0),
                  (r.interrupt = void 0),
                  (0, s.f)(
                    e,
                    e.attempt(D, t, n),
                    "linePrefix",
                    r.parser.constructs.disable.null.includes("codeIndented")
                      ? void 0
                      : 4,
                  )(i)
                );
              }
            },
          },
          exit: function (e) {
            e.exit(this.containerState.type);
          },
        },
        C = {
          tokenize: function (e, t, n) {
            let r = this;
            return (0, s.f)(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return !(0, c.xz)(e) &&
                  i &&
                  "listItemPrefixWhitespace" === i[1].type
                  ? t(e)
                  : n(e);
              },
              "listItemPrefixWhitespace",
              r.parser.constructs.disable.null.includes("codeIndented")
                ? void 0
                : 5,
            );
          },
          partial: !0,
        },
        A = {
          tokenize: function (e, t, n) {
            let r = this;
            return (0, s.f)(
              e,
              function (e) {
                let i = r.events[r.events.length - 1];
                return i &&
                  "listItemIndent" === i[1].type &&
                  i[2].sliceSerialize(i[1], !0).length === r.containerState.size
                  ? t(e)
                  : n(e);
              },
              "listItemIndent",
              r.containerState.size + 1,
            );
          },
          partial: !0,
        },
        F = {
          name: "blockQuote",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              if (62 === t) {
                let n = r.containerState;
                return (
                  n.open ||
                    (e.enter("blockQuote", { _container: !0 }), (n.open = !0)),
                  e.enter("blockQuotePrefix"),
                  e.enter("blockQuoteMarker"),
                  e.consume(t),
                  e.exit("blockQuoteMarker"),
                  i
                );
              }
              return n(t);
            };
            function i(n) {
              return (0, c.xz)(n)
                ? (e.enter("blockQuotePrefixWhitespace"),
                  e.consume(n),
                  e.exit("blockQuotePrefixWhitespace"),
                  e.exit("blockQuotePrefix"),
                  t)
                : (e.exit("blockQuotePrefix"), t(n));
            }
          },
          continuation: {
            tokenize: function (e, t, n) {
              let r = this;
              return function (t) {
                return (0, c.xz)(t)
                  ? (0, s.f)(
                      e,
                      i,
                      "linePrefix",
                      r.parser.constructs.disable.null.includes("codeIndented")
                        ? void 0
                        : 4,
                    )(t)
                  : i(t);
              };
              function i(r) {
                return e.attempt(F, t, n)(r);
              }
            },
          },
          exit: function (e) {
            e.exit("blockQuote");
          },
        };
      function S(e, t, n, r, i, a, o, l, s) {
        let u = s || Number.POSITIVE_INFINITY,
          d = 0;
        return function (t) {
          return 60 === t
            ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f)
            : null === t || 32 === t || 41 === t || (0, c.Av)(t)
              ? n(t)
              : (e.enter(r),
                e.enter(o),
                e.enter(l),
                e.enter("chunkString", { contentType: "string" }),
                g(t));
        };
        function f(n) {
          return 62 === n
            ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t)
            : (e.enter(l),
              e.enter("chunkString", { contentType: "string" }),
              p(n));
        }
        function p(t) {
          return 62 === t
            ? (e.exit("chunkString"), e.exit(l), f(t))
            : null === t || 60 === t || (0, c.Ch)(t)
              ? n(t)
              : (e.consume(t), 92 === t ? m : p);
        }
        function m(t) {
          return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t);
        }
        function g(i) {
          return !d && (null === i || 41 === i || (0, c.z3)(i))
            ? (e.exit("chunkString"), e.exit(l), e.exit(o), e.exit(r), t(i))
            : d < u && 40 === i
              ? (e.consume(i), d++, g)
              : 41 === i
                ? (e.consume(i), d--, g)
                : null === i || 32 === i || 40 === i || (0, c.Av)(i)
                  ? n(i)
                  : (e.consume(i), 92 === i ? h : g);
        }
        function h(t) {
          return 40 === t || 41 === t || 92 === t ? (e.consume(t), g) : g(t);
        }
      }
      function N(e, t, n, r, i, a) {
        let o;
        let l = this,
          s = 0;
        return function (t) {
          return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
        };
        function u(f) {
          return s > 999 ||
            null === f ||
            91 === f ||
            (93 === f && !o) ||
            (94 === f && !s && "_hiddenFootnoteSupport" in l.parser.constructs)
            ? n(f)
            : 93 === f
              ? (e.exit(a), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t)
              : (0, c.Ch)(f)
                ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), u)
                : (e.enter("chunkString", { contentType: "string" }), d(f));
        }
        function d(t) {
          return null === t || 91 === t || 93 === t || (0, c.Ch)(t) || s++ > 999
            ? (e.exit("chunkString"), u(t))
            : (e.consume(t), o || (o = !(0, c.xz)(t)), 92 === t ? f : d);
        }
        function f(t) {
          return 91 === t || 92 === t || 93 === t
            ? (e.consume(t), s++, d)
            : d(t);
        }
      }
      function O(e, t, n, r, i, a) {
        let o;
        return function (t) {
          return 34 === t || 39 === t || 40 === t
            ? (e.enter(r),
              e.enter(i),
              e.consume(t),
              e.exit(i),
              (o = 40 === t ? 41 : t),
              l)
            : n(t);
        };
        function l(n) {
          return n === o
            ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
            : (e.enter(a), u(n));
        }
        function u(t) {
          return t === o
            ? (e.exit(a), l(o))
            : null === t
              ? n(t)
              : (0, c.Ch)(t)
                ? (e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  (0, s.f)(e, u, "linePrefix"))
                : (e.enter("chunkString", { contentType: "string" }), d(t));
        }
        function d(t) {
          return t === o || null === t || (0, c.Ch)(t)
            ? (e.exit("chunkString"), u(t))
            : (e.consume(t), 92 === t ? f : d);
        }
        function f(t) {
          return t === o || 92 === t ? (e.consume(t), d) : d(t);
        }
      }
      var M = n(6226),
        T = n(1098);
      let B = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (0, c.z3)(t) ? (0, M.S)(e, r)(t) : n(t);
            };
            function r(t) {
              return O(
                e,
                i,
                n,
                "definitionTitle",
                "definitionTitleMarker",
                "definitionTitleString",
              )(t);
            }
            function i(t) {
              return (0, c.xz)(t) ? (0, s.f)(e, a, "whitespace")(t) : a(t);
            }
            function a(e) {
              return null === e || (0, c.Ch)(e) ? t(e) : n(e);
            }
          },
          partial: !0,
        },
        I = {
          name: "codeIndented",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("codeIndented"), (0, s.f)(e, i, "linePrefix", 5)(t)
              );
            };
            function i(t) {
              let i = r.events[r.events.length - 1];
              return i &&
                "linePrefix" === i[1].type &&
                i[2].sliceSerialize(i[1], !0).length >= 4
                ? (function t(n) {
                    return null === n
                      ? a(n)
                      : (0, c.Ch)(n)
                        ? e.attempt(L, t, a)(n)
                        : (e.enter("codeFlowValue"),
                          (function n(r) {
                            return null === r || (0, c.Ch)(r)
                              ? (e.exit("codeFlowValue"), t(r))
                              : (e.consume(r), n);
                          })(n));
                  })(t)
                : n(t);
            }
            function a(n) {
              return e.exit("codeIndented"), t(n);
            }
          },
        },
        L = {
          tokenize: function (e, t, n) {
            let r = this;
            return i;
            function i(t) {
              return r.parser.lazy[r.now().line]
                ? n(t)
                : (0, c.Ch)(t)
                  ? (e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    i)
                  : (0, s.f)(e, a, "linePrefix", 5)(t);
            }
            function a(e) {
              let a = r.events[r.events.length - 1];
              return a &&
                "linePrefix" === a[1].type &&
                a[2].sliceSerialize(a[1], !0).length >= 4
                ? t(e)
                : (0, c.Ch)(e)
                  ? i(e)
                  : n(e);
            }
          },
          partial: !0,
        },
        R = {
          name: "setextUnderline",
          tokenize: function (e, t, n) {
            let r;
            let i = this;
            return function (t) {
              let o,
                l = i.events.length;
              for (; l--; )
                if (
                  "lineEnding" !== i.events[l][1].type &&
                  "linePrefix" !== i.events[l][1].type &&
                  "content" !== i.events[l][1].type
                ) {
                  o = "paragraph" === i.events[l][1].type;
                  break;
                }
              return !i.parser.lazy[i.now().line] && (i.interrupt || o)
                ? (e.enter("setextHeadingLine"),
                  (r = t),
                  e.enter("setextHeadingLineSequence"),
                  (function t(n) {
                    return n === r
                      ? (e.consume(n), t)
                      : (e.exit("setextHeadingLineSequence"),
                        (0, c.xz)(n) ? (0, s.f)(e, a, "lineSuffix")(n) : a(n));
                  })(t))
                : n(t);
            };
            function a(r) {
              return null === r || (0, c.Ch)(r)
                ? (e.exit("setextHeadingLine"), t(r))
                : n(r);
            }
          },
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              a = e.length;
            for (; a--; )
              if ("enter" === e[a][0]) {
                if ("content" === e[a][1].type) {
                  n = a;
                  break;
                }
                "paragraph" === e[a][1].type && (r = a);
              } else
                "content" === e[a][1].type && e.splice(a, 1),
                  i || "definition" !== e[a][1].type || (i = a);
            let o = {
              type: "setextHeading",
              start: Object.assign({}, e[r][1].start),
              end: Object.assign({}, e[e.length - 1][1].end),
            };
            return (
              (e[r][1].type = "setextHeadingText"),
              i
                ? (e.splice(r, 0, ["enter", o, t]),
                  e.splice(i + 1, 0, ["exit", e[n][1], t]),
                  (e[n][1].end = Object.assign({}, e[i][1].end)))
                : (e[n][1] = o),
              e.push(["exit", o, t]),
              e
            );
          },
        },
        z = [
          "address",
          "article",
          "aside",
          "base",
          "basefont",
          "blockquote",
          "body",
          "caption",
          "center",
          "col",
          "colgroup",
          "dd",
          "details",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hr",
          "html",
          "iframe",
          "legend",
          "li",
          "link",
          "main",
          "menu",
          "menuitem",
          "nav",
          "noframes",
          "ol",
          "optgroup",
          "option",
          "p",
          "param",
          "search",
          "section",
          "summary",
          "table",
          "tbody",
          "td",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "track",
          "ul",
        ],
        P = ["pre", "script", "style", "textarea"],
        j = {
          tokenize: function (e, t, n) {
            return function (r) {
              return (
                e.enter("lineEnding"),
                e.consume(r),
                e.exit("lineEnding"),
                e.attempt(p.w, t, n)
              );
            };
          },
          partial: !0,
        },
        $ = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (0, c.Ch)(t)
                ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i)
                : n(t);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        U = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return null === t
                ? n(t)
                : (e.enter("lineEnding"),
                  e.consume(t),
                  e.exit("lineEnding"),
                  i);
            };
            function i(e) {
              return r.parser.lazy[r.now().line] ? n(e) : t(e);
            }
          },
          partial: !0,
        },
        q = {
          name: "codeFenced",
          tokenize: function (e, t, n) {
            let r;
            let i = this,
              a = {
                tokenize: function (e, t, n) {
                  let a = 0;
                  return function (t) {
                    return (
                      e.enter("lineEnding"),
                      e.consume(t),
                      e.exit("lineEnding"),
                      o
                    );
                  };
                  function o(t) {
                    return (
                      e.enter("codeFencedFence"),
                      (0, c.xz)(t)
                        ? (0, s.f)(
                            e,
                            u,
                            "linePrefix",
                            i.parser.constructs.disable.null.includes(
                              "codeIndented",
                            )
                              ? void 0
                              : 4,
                          )(t)
                        : u(t)
                    );
                  }
                  function u(t) {
                    return t === r
                      ? (e.enter("codeFencedFenceSequence"),
                        (function t(i) {
                          return i === r
                            ? (a++, e.consume(i), t)
                            : a >= l
                              ? (e.exit("codeFencedFenceSequence"),
                                (0, c.xz)(i)
                                  ? (0, s.f)(e, d, "whitespace")(i)
                                  : d(i))
                              : n(i);
                        })(t))
                      : n(t);
                  }
                  function d(r) {
                    return null === r || (0, c.Ch)(r)
                      ? (e.exit("codeFencedFence"), t(r))
                      : n(r);
                  }
                },
                partial: !0,
              },
              o = 0,
              l = 0;
            return function (t) {
              return (function (t) {
                let a = i.events[i.events.length - 1];
                return (
                  (o =
                    a && "linePrefix" === a[1].type
                      ? a[2].sliceSerialize(a[1], !0).length
                      : 0),
                  (r = t),
                  e.enter("codeFenced"),
                  e.enter("codeFencedFence"),
                  e.enter("codeFencedFenceSequence"),
                  (function t(i) {
                    return i === r
                      ? (l++, e.consume(i), t)
                      : l < 3
                        ? n(i)
                        : (e.exit("codeFencedFenceSequence"),
                          (0, c.xz)(i)
                            ? (0, s.f)(e, u, "whitespace")(i)
                            : u(i));
                  })(t)
                );
              })(t);
            };
            function u(a) {
              return null === a || (0, c.Ch)(a)
                ? (e.exit("codeFencedFence"),
                  i.interrupt ? t(a) : e.check(U, f, h)(a))
                : (e.enter("codeFencedFenceInfo"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(i) {
                    return null === i || (0, c.Ch)(i)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        u(i))
                      : (0, c.xz)(i)
                        ? (e.exit("chunkString"),
                          e.exit("codeFencedFenceInfo"),
                          (0, s.f)(e, d, "whitespace")(i))
                        : 96 === i && i === r
                          ? n(i)
                          : (e.consume(i), t);
                  })(a));
            }
            function d(t) {
              return null === t || (0, c.Ch)(t)
                ? u(t)
                : (e.enter("codeFencedFenceMeta"),
                  e.enter("chunkString", { contentType: "string" }),
                  (function t(i) {
                    return null === i || (0, c.Ch)(i)
                      ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceMeta"),
                        u(i))
                      : 96 === i && i === r
                        ? n(i)
                        : (e.consume(i), t);
                  })(t));
            }
            function f(t) {
              return e.attempt(a, h, p)(t);
            }
            function p(t) {
              return (
                e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), m
              );
            }
            function m(t) {
              return o > 0 && (0, c.xz)(t)
                ? (0, s.f)(e, g, "linePrefix", o + 1)(t)
                : g(t);
            }
            function g(t) {
              return null === t || (0, c.Ch)(t)
                ? e.check(U, f, h)(t)
                : (e.enter("codeFlowValue"),
                  (function t(n) {
                    return null === n || (0, c.Ch)(n)
                      ? (e.exit("codeFlowValue"), g(n))
                      : (e.consume(n), t);
                  })(t));
            }
            function h(n) {
              return e.exit("codeFenced"), t(n);
            }
          },
          concrete: !0,
        };
      var H = n(4301);
      let K = {
          name: "characterReference",
          tokenize: function (e, t, n) {
            let r, i;
            let a = this,
              o = 0;
            return function (t) {
              return (
                e.enter("characterReference"),
                e.enter("characterReferenceMarker"),
                e.consume(t),
                e.exit("characterReferenceMarker"),
                l
              );
            };
            function l(t) {
              return 35 === t
                ? (e.enter("characterReferenceMarkerNumeric"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerNumeric"),
                  s)
                : (e.enter("characterReferenceValue"),
                  (r = 31),
                  (i = c.H$),
                  u(t));
            }
            function s(t) {
              return 88 === t || 120 === t
                ? (e.enter("characterReferenceMarkerHexadecimal"),
                  e.consume(t),
                  e.exit("characterReferenceMarkerHexadecimal"),
                  e.enter("characterReferenceValue"),
                  (r = 6),
                  (i = c.AF),
                  u)
                : (e.enter("characterReferenceValue"),
                  (r = 7),
                  (i = c.pY),
                  u(t));
            }
            function u(l) {
              if (59 === l && o) {
                let r = e.exit("characterReferenceValue");
                return i !== c.H$ || (0, H.T)(a.sliceSerialize(r))
                  ? (e.enter("characterReferenceMarker"),
                    e.consume(l),
                    e.exit("characterReferenceMarker"),
                    e.exit("characterReference"),
                    t)
                  : n(l);
              }
              return i(l) && o++ < r ? (e.consume(l), u) : n(l);
            }
          },
        },
        W = {
          name: "characterEscape",
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("characterEscape"),
                e.enter("escapeMarker"),
                e.consume(t),
                e.exit("escapeMarker"),
                r
              );
            };
            function r(r) {
              return (0, c.sR)(r)
                ? (e.enter("characterEscapeValue"),
                  e.consume(r),
                  e.exit("characterEscapeValue"),
                  e.exit("characterEscape"),
                  t)
                : n(r);
            }
          },
        },
        G = {
          name: "lineEnding",
          tokenize: function (e, t) {
            return function (n) {
              return (
                e.enter("lineEnding"),
                e.consume(n),
                e.exit("lineEnding"),
                (0, s.f)(e, t, "linePrefix")
              );
            };
          },
        },
        V = {
          name: "labelEnd",
          tokenize: function (e, t, n) {
            let r, i;
            let a = this,
              o = a.events.length;
            for (; o--; )
              if (
                ("labelImage" === a.events[o][1].type ||
                  "labelLink" === a.events[o][1].type) &&
                !a.events[o][1]._balanced
              ) {
                r = a.events[o][1];
                break;
              }
            return function (t) {
              return r
                ? r._inactive
                  ? u(t)
                  : ((i = a.parser.defined.includes(
                      (0, T.d)(
                        a.sliceSerialize({ start: r.end, end: a.now() }),
                      ),
                    )),
                    e.enter("labelEnd"),
                    e.enter("labelMarker"),
                    e.consume(t),
                    e.exit("labelMarker"),
                    e.exit("labelEnd"),
                    l)
                : n(t);
            };
            function l(t) {
              return 40 === t
                ? e.attempt(Z, c, i ? c : u)(t)
                : 91 === t
                  ? e.attempt(X, c, i ? s : u)(t)
                  : i
                    ? c(t)
                    : u(t);
            }
            function s(t) {
              return e.attempt(Q, c, u)(t);
            }
            function c(e) {
              return t(e);
            }
            function u(e) {
              return (r._balanced = !0), n(e);
            }
          },
          resolveTo: function (e, t) {
            let n,
              r,
              i,
              o,
              l = e.length,
              s = 0;
            for (; l--; )
              if (((n = e[l][1]), r)) {
                if (
                  "link" === n.type ||
                  ("labelLink" === n.type && n._inactive)
                )
                  break;
                "enter" === e[l][0] &&
                  "labelLink" === n.type &&
                  (n._inactive = !0);
              } else if (i) {
                if (
                  "enter" === e[l][0] &&
                  ("labelImage" === n.type || "labelLink" === n.type) &&
                  !n._balanced &&
                  ((r = l), "labelLink" !== n.type)
                ) {
                  s = 2;
                  break;
                }
              } else "labelEnd" === n.type && (i = l);
            let c = {
                type: "labelLink" === e[r][1].type ? "link" : "image",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[e.length - 1][1].end),
              },
              u = {
                type: "label",
                start: Object.assign({}, e[r][1].start),
                end: Object.assign({}, e[i][1].end),
              },
              d = {
                type: "labelText",
                start: Object.assign({}, e[r + s + 2][1].end),
                end: Object.assign({}, e[i - 2][1].start),
              };
            return (
              (o = [
                ["enter", c, t],
                ["enter", u, t],
              ]),
              (o = (0, a.V)(o, e.slice(r + 1, r + s + 3))),
              (o = (0, a.V)(o, [["enter", d, t]])),
              (o = (0, a.V)(
                o,
                (0, x.C)(
                  t.parser.constructs.insideSpan.null,
                  e.slice(r + s + 4, i - 3),
                  t,
                ),
              )),
              (o = (0, a.V)(o, [
                ["exit", d, t],
                e[i - 2],
                e[i - 1],
                ["exit", u, t],
              ])),
              (o = (0, a.V)(o, e.slice(i + 1))),
              (o = (0, a.V)(o, [["exit", c, t]])),
              (0, a.d)(e, r, e.length, o),
              e
            );
          },
          resolveAll: function (e) {
            let t = -1;
            for (; ++t < e.length; ) {
              let n = e[t][1];
              ("labelImage" === n.type ||
                "labelLink" === n.type ||
                "labelEnd" === n.type) &&
                (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
                (n.type = "data"),
                t++);
            }
            return e;
          },
        },
        Z = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("resource"),
                e.enter("resourceMarker"),
                e.consume(t),
                e.exit("resourceMarker"),
                r
              );
            };
            function r(t) {
              return (0, c.z3)(t) ? (0, M.S)(e, i)(t) : i(t);
            }
            function i(t) {
              return 41 === t
                ? u(t)
                : S(
                    e,
                    a,
                    o,
                    "resourceDestination",
                    "resourceDestinationLiteral",
                    "resourceDestinationLiteralMarker",
                    "resourceDestinationRaw",
                    "resourceDestinationString",
                    32,
                  )(t);
            }
            function a(t) {
              return (0, c.z3)(t) ? (0, M.S)(e, l)(t) : u(t);
            }
            function o(e) {
              return n(e);
            }
            function l(t) {
              return 34 === t || 39 === t || 40 === t
                ? O(
                    e,
                    s,
                    n,
                    "resourceTitle",
                    "resourceTitleMarker",
                    "resourceTitleString",
                  )(t)
                : u(t);
            }
            function s(t) {
              return (0, c.z3)(t) ? (0, M.S)(e, u)(t) : u(t);
            }
            function u(r) {
              return 41 === r
                ? (e.enter("resourceMarker"),
                  e.consume(r),
                  e.exit("resourceMarker"),
                  e.exit("resource"),
                  t)
                : n(r);
            }
          },
        },
        X = {
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return N.call(
                r,
                e,
                i,
                a,
                "reference",
                "referenceMarker",
                "referenceString",
              )(t);
            };
            function i(e) {
              return r.parser.defined.includes(
                (0, T.d)(
                  r
                    .sliceSerialize(r.events[r.events.length - 1][1])
                    .slice(1, -1),
                ),
              )
                ? t(e)
                : n(e);
            }
            function a(e) {
              return n(e);
            }
          },
        },
        Q = {
          tokenize: function (e, t, n) {
            return function (t) {
              return (
                e.enter("reference"),
                e.enter("referenceMarker"),
                e.consume(t),
                e.exit("referenceMarker"),
                r
              );
            };
            function r(r) {
              return 93 === r
                ? (e.enter("referenceMarker"),
                  e.consume(r),
                  e.exit("referenceMarker"),
                  e.exit("reference"),
                  t)
                : n(r);
            }
          },
        },
        Y = {
          name: "labelStartImage",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelImage"),
                e.enter("labelImageMarker"),
                e.consume(t),
                e.exit("labelImageMarker"),
                i
              );
            };
            function i(t) {
              return 91 === t
                ? (e.enter("labelMarker"),
                  e.consume(t),
                  e.exit("labelMarker"),
                  e.exit("labelImage"),
                  a)
                : n(t);
            }
            function a(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
          resolveAll: V.resolveAll,
        };
      var J = n(2987);
      let ee = {
        name: "attention",
        tokenize: function (e, t) {
          let n;
          let r = this.parser.constructs.attentionMarkers.null,
            i = this.previous,
            a = (0, J.r)(i);
          return function (o) {
            return (
              (n = o),
              e.enter("attentionSequence"),
              (function o(l) {
                if (l === n) return e.consume(l), o;
                let s = e.exit("attentionSequence"),
                  c = (0, J.r)(l),
                  u = !c || (2 === c && a) || r.includes(l),
                  d = !a || (2 === a && c) || r.includes(i);
                return (
                  (s._open = !!(42 === n ? u : u && (a || !d))),
                  (s._close = !!(42 === n ? d : d && (c || !u))),
                  t(l)
                );
              })(o)
            );
          };
        },
        resolveAll: function (e, t) {
          let n,
            r,
            i,
            o,
            l,
            s,
            c,
            u,
            d = -1;
          for (; ++d < e.length; )
            if (
              "enter" === e[d][0] &&
              "attentionSequence" === e[d][1].type &&
              e[d][1]._close
            ) {
              for (n = d; n--; )
                if (
                  "exit" === e[n][0] &&
                  "attentionSequence" === e[n][1].type &&
                  e[n][1]._open &&
                  t.sliceSerialize(e[n][1]).charCodeAt(0) ===
                    t.sliceSerialize(e[d][1]).charCodeAt(0)
                ) {
                  if (
                    (e[n][1]._close || e[d][1]._open) &&
                    (e[d][1].end.offset - e[d][1].start.offset) % 3 &&
                    !(
                      (e[n][1].end.offset -
                        e[n][1].start.offset +
                        e[d][1].end.offset -
                        e[d][1].start.offset) %
                      3
                    )
                  )
                    continue;
                  s =
                    e[n][1].end.offset - e[n][1].start.offset > 1 &&
                    e[d][1].end.offset - e[d][1].start.offset > 1
                      ? 2
                      : 1;
                  let f = Object.assign({}, e[n][1].end),
                    p = Object.assign({}, e[d][1].start);
                  et(f, -s),
                    et(p, s),
                    (o = {
                      type: s > 1 ? "strongSequence" : "emphasisSequence",
                      start: f,
                      end: Object.assign({}, e[n][1].end),
                    }),
                    (l = {
                      type: s > 1 ? "strongSequence" : "emphasisSequence",
                      start: Object.assign({}, e[d][1].start),
                      end: p,
                    }),
                    (i = {
                      type: s > 1 ? "strongText" : "emphasisText",
                      start: Object.assign({}, e[n][1].end),
                      end: Object.assign({}, e[d][1].start),
                    }),
                    (r = {
                      type: s > 1 ? "strong" : "emphasis",
                      start: Object.assign({}, o.start),
                      end: Object.assign({}, l.end),
                    }),
                    (e[n][1].end = Object.assign({}, o.start)),
                    (e[d][1].start = Object.assign({}, l.end)),
                    (c = []),
                    e[n][1].end.offset - e[n][1].start.offset &&
                      (c = (0, a.V)(c, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t],
                      ])),
                    (c = (0, a.V)(c, [
                      ["enter", r, t],
                      ["enter", o, t],
                      ["exit", o, t],
                      ["enter", i, t],
                    ])),
                    (c = (0, a.V)(
                      c,
                      (0, x.C)(
                        t.parser.constructs.insideSpan.null,
                        e.slice(n + 1, d),
                        t,
                      ),
                    )),
                    (c = (0, a.V)(c, [
                      ["exit", i, t],
                      ["enter", l, t],
                      ["exit", l, t],
                      ["exit", r, t],
                    ])),
                    e[d][1].end.offset - e[d][1].start.offset
                      ? ((u = 2),
                        (c = (0, a.V)(c, [
                          ["enter", e[d][1], t],
                          ["exit", e[d][1], t],
                        ])))
                      : (u = 0),
                    (0, a.d)(e, n - 1, d - n + 3, c),
                    (d = n + c.length - u - 2);
                  break;
                }
            }
          for (d = -1; ++d < e.length; )
            "attentionSequence" === e[d][1].type && (e[d][1].type = "data");
          return e;
        },
      };
      function et(e, t) {
        (e.column += t), (e.offset += t), (e._bufferIndex += t);
      }
      let en = {
          name: "labelStartLink",
          tokenize: function (e, t, n) {
            let r = this;
            return function (t) {
              return (
                e.enter("labelLink"),
                e.enter("labelMarker"),
                e.consume(t),
                e.exit("labelMarker"),
                e.exit("labelLink"),
                i
              );
            };
            function i(e) {
              return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs
                ? n(e)
                : t(e);
            }
          },
          resolveAll: V.resolveAll,
        },
        er = {
          42: D,
          43: D,
          45: D,
          48: D,
          49: D,
          50: D,
          51: D,
          52: D,
          53: D,
          54: D,
          55: D,
          56: D,
          57: D,
          62: F,
        },
        ei = {
          91: {
            name: "definition",
            tokenize: function (e, t, n) {
              let r;
              let i = this;
              return function (t) {
                return (
                  e.enter("definition"),
                  N.call(
                    i,
                    e,
                    a,
                    n,
                    "definitionLabel",
                    "definitionLabelMarker",
                    "definitionLabelString",
                  )(t)
                );
              };
              function a(t) {
                return ((r = (0, T.d)(
                  i
                    .sliceSerialize(i.events[i.events.length - 1][1])
                    .slice(1, -1),
                )),
                58 === t)
                  ? (e.enter("definitionMarker"),
                    e.consume(t),
                    e.exit("definitionMarker"),
                    o)
                  : n(t);
              }
              function o(t) {
                return (0, c.z3)(t) ? (0, M.S)(e, l)(t) : l(t);
              }
              function l(t) {
                return S(
                  e,
                  u,
                  n,
                  "definitionDestination",
                  "definitionDestinationLiteral",
                  "definitionDestinationLiteralMarker",
                  "definitionDestinationRaw",
                  "definitionDestinationString",
                )(t);
              }
              function u(t) {
                return e.attempt(B, d, d)(t);
              }
              function d(t) {
                return (0, c.xz)(t) ? (0, s.f)(e, f, "whitespace")(t) : f(t);
              }
              function f(a) {
                return null === a || (0, c.Ch)(a)
                  ? (e.exit("definition"), i.parser.defined.push(r), t(a))
                  : n(a);
              }
            },
          },
        },
        ea = { [-2]: I, [-1]: I, 32: I },
        eo = {
          35: {
            name: "headingAtx",
            tokenize: function (e, t, n) {
              let r = 0;
              return function (i) {
                return (
                  e.enter("atxHeading"),
                  e.enter("atxHeadingSequence"),
                  (function i(a) {
                    return 35 === a && r++ < 6
                      ? (e.consume(a), i)
                      : null === a || (0, c.z3)(a)
                        ? (e.exit("atxHeadingSequence"),
                          (function n(r) {
                            return 35 === r
                              ? (e.enter("atxHeadingSequence"),
                                (function t(r) {
                                  return 35 === r
                                    ? (e.consume(r), t)
                                    : (e.exit("atxHeadingSequence"), n(r));
                                })(r))
                              : null === r || (0, c.Ch)(r)
                                ? (e.exit("atxHeading"), t(r))
                                : (0, c.xz)(r)
                                  ? (0, s.f)(e, n, "whitespace")(r)
                                  : (e.enter("atxHeadingText"),
                                    (function t(r) {
                                      return null === r ||
                                        35 === r ||
                                        (0, c.z3)(r)
                                        ? (e.exit("atxHeadingText"), n(r))
                                        : (e.consume(r), t);
                                    })(r));
                          })(a))
                        : n(a);
                  })(i)
                );
              };
            },
            resolve: function (e, t) {
              let n,
                r,
                i = e.length - 2,
                o = 3;
              return (
                "whitespace" === e[3][1].type && (o += 2),
                i - 2 > o && "whitespace" === e[i][1].type && (i -= 2),
                "atxHeadingSequence" === e[i][1].type &&
                  (o === i - 1 ||
                    (i - 4 > o && "whitespace" === e[i - 2][1].type)) &&
                  (i -= o + 1 === i ? 2 : 4),
                i > o &&
                  ((n = {
                    type: "atxHeadingText",
                    start: e[o][1].start,
                    end: e[i][1].end,
                  }),
                  (r = {
                    type: "chunkText",
                    start: e[o][1].start,
                    end: e[i][1].end,
                    contentType: "text",
                  }),
                  (0, a.d)(e, o, i - o + 1, [
                    ["enter", n, t],
                    ["enter", r, t],
                    ["exit", r, t],
                    ["exit", n, t],
                  ])),
                e
              );
            },
          },
          42: E,
          45: [R, E],
          60: {
            name: "htmlFlow",
            tokenize: function (e, t, n) {
              let r, i, a, o, l;
              let s = this;
              return function (t) {
                return (
                  e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), u
                );
              };
              function u(o) {
                return 33 === o
                  ? (e.consume(o), d)
                  : 47 === o
                    ? (e.consume(o), (i = !0), m)
                    : 63 === o
                      ? (e.consume(o), (r = 3), s.interrupt ? t : T)
                      : (0, c.jv)(o)
                        ? (e.consume(o), (a = String.fromCharCode(o)), g)
                        : n(o);
              }
              function d(i) {
                return 45 === i
                  ? (e.consume(i), (r = 2), f)
                  : 91 === i
                    ? (e.consume(i), (r = 5), (o = 0), p)
                    : (0, c.jv)(i)
                      ? (e.consume(i), (r = 4), s.interrupt ? t : T)
                      : n(i);
              }
              function f(r) {
                return 45 === r ? (e.consume(r), s.interrupt ? t : T) : n(r);
              }
              function p(r) {
                let i = "CDATA[";
                return r === i.charCodeAt(o++)
                  ? (e.consume(r), o === i.length)
                    ? s.interrupt
                      ? t
                      : D
                    : p
                  : n(r);
              }
              function m(t) {
                return (0, c.jv)(t)
                  ? (e.consume(t), (a = String.fromCharCode(t)), g)
                  : n(t);
              }
              function g(o) {
                if (null === o || 47 === o || 62 === o || (0, c.z3)(o)) {
                  let l = 47 === o,
                    u = a.toLowerCase();
                  return !l && !i && P.includes(u)
                    ? ((r = 1), s.interrupt ? t(o) : D(o))
                    : z.includes(a.toLowerCase())
                      ? ((r = 6), l)
                        ? (e.consume(o), h)
                        : s.interrupt
                          ? t(o)
                          : D(o)
                      : ((r = 7),
                        s.interrupt && !s.parser.lazy[s.now().line]
                          ? n(o)
                          : i
                            ? (function t(n) {
                                return (0, c.xz)(n) ? (e.consume(n), t) : x(n);
                              })(o)
                            : b(o));
                }
                return 45 === o || (0, c.H$)(o)
                  ? (e.consume(o), (a += String.fromCharCode(o)), g)
                  : n(o);
              }
              function h(r) {
                return 62 === r ? (e.consume(r), s.interrupt ? t : D) : n(r);
              }
              function b(t) {
                return 47 === t
                  ? (e.consume(t), x)
                  : 58 === t || 95 === t || (0, c.jv)(t)
                    ? (e.consume(t), y)
                    : (0, c.xz)(t)
                      ? (e.consume(t), b)
                      : x(t);
              }
              function y(t) {
                return 45 === t ||
                  46 === t ||
                  58 === t ||
                  95 === t ||
                  (0, c.H$)(t)
                  ? (e.consume(t), y)
                  : _(t);
              }
              function _(t) {
                return 61 === t
                  ? (e.consume(t), v)
                  : (0, c.xz)(t)
                    ? (e.consume(t), _)
                    : b(t);
              }
              function v(t) {
                return null === t ||
                  60 === t ||
                  61 === t ||
                  62 === t ||
                  96 === t
                  ? n(t)
                  : 34 === t || 39 === t
                    ? (e.consume(t), (l = t), w)
                    : (0, c.xz)(t)
                      ? (e.consume(t), v)
                      : (function t(n) {
                          return null === n ||
                            34 === n ||
                            39 === n ||
                            47 === n ||
                            60 === n ||
                            61 === n ||
                            62 === n ||
                            96 === n ||
                            (0, c.z3)(n)
                            ? _(n)
                            : (e.consume(n), t);
                        })(t);
              }
              function w(t) {
                return t === l
                  ? (e.consume(t), (l = null), k)
                  : null === t || (0, c.Ch)(t)
                    ? n(t)
                    : (e.consume(t), w);
              }
              function k(e) {
                return 47 === e || 62 === e || (0, c.xz)(e) ? b(e) : n(e);
              }
              function x(t) {
                return 62 === t ? (e.consume(t), E) : n(t);
              }
              function E(t) {
                return null === t || (0, c.Ch)(t)
                  ? D(t)
                  : (0, c.xz)(t)
                    ? (e.consume(t), E)
                    : n(t);
              }
              function D(t) {
                return 45 === t && 2 === r
                  ? (e.consume(t), S)
                  : 60 === t && 1 === r
                    ? (e.consume(t), N)
                    : 62 === t && 4 === r
                      ? (e.consume(t), B)
                      : 63 === t && 3 === r
                        ? (e.consume(t), T)
                        : 93 === t && 5 === r
                          ? (e.consume(t), M)
                          : (0, c.Ch)(t) && (6 === r || 7 === r)
                            ? (e.exit("htmlFlowData"), e.check(j, I, C)(t))
                            : null === t || (0, c.Ch)(t)
                              ? (e.exit("htmlFlowData"), C(t))
                              : (e.consume(t), D);
              }
              function C(t) {
                return e.check($, A, I)(t);
              }
              function A(t) {
                return (
                  e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), F
                );
              }
              function F(t) {
                return null === t || (0, c.Ch)(t)
                  ? C(t)
                  : (e.enter("htmlFlowData"), D(t));
              }
              function S(t) {
                return 45 === t ? (e.consume(t), T) : D(t);
              }
              function N(t) {
                return 47 === t ? (e.consume(t), (a = ""), O) : D(t);
              }
              function O(t) {
                if (62 === t) {
                  let n = a.toLowerCase();
                  return P.includes(n) ? (e.consume(t), B) : D(t);
                }
                return (0, c.jv)(t) && a.length < 8
                  ? (e.consume(t), (a += String.fromCharCode(t)), O)
                  : D(t);
              }
              function M(t) {
                return 93 === t ? (e.consume(t), T) : D(t);
              }
              function T(t) {
                return 62 === t
                  ? (e.consume(t), B)
                  : 45 === t && 2 === r
                    ? (e.consume(t), T)
                    : D(t);
              }
              function B(t) {
                return null === t || (0, c.Ch)(t)
                  ? (e.exit("htmlFlowData"), I(t))
                  : (e.consume(t), B);
              }
              function I(n) {
                return e.exit("htmlFlow"), t(n);
              }
            },
            resolveTo: function (e) {
              let t = e.length;
              for (
                ;
                t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);

              );
              return (
                t > 1 &&
                  "linePrefix" === e[t - 2][1].type &&
                  ((e[t][1].start = e[t - 2][1].start),
                  (e[t + 1][1].start = e[t - 2][1].start),
                  e.splice(t - 2, 2)),
                e
              );
            },
            concrete: !0,
          },
          61: R,
          95: E,
          96: q,
          126: q,
        },
        el = { 38: K, 92: W },
        es = {
          [-5]: G,
          [-4]: G,
          [-3]: G,
          33: Y,
          38: K,
          42: ee,
          60: [
            {
              name: "autolink",
              tokenize: function (e, t, n) {
                let r = 0;
                return function (t) {
                  return (
                    e.enter("autolink"),
                    e.enter("autolinkMarker"),
                    e.consume(t),
                    e.exit("autolinkMarker"),
                    e.enter("autolinkProtocol"),
                    i
                  );
                };
                function i(t) {
                  return (0, c.jv)(t) ? (e.consume(t), a) : l(t);
                }
                function a(t) {
                  return 43 === t || 45 === t || 46 === t || (0, c.H$)(t)
                    ? ((r = 1),
                      (function t(n) {
                        return 58 === n
                          ? (e.consume(n), (r = 0), o)
                          : (43 === n ||
                                45 === n ||
                                46 === n ||
                                (0, c.H$)(n)) &&
                              r++ < 32
                            ? (e.consume(n), t)
                            : ((r = 0), l(n));
                      })(t))
                    : l(t);
                }
                function o(r) {
                  return 62 === r
                    ? (e.exit("autolinkProtocol"),
                      e.enter("autolinkMarker"),
                      e.consume(r),
                      e.exit("autolinkMarker"),
                      e.exit("autolink"),
                      t)
                    : null === r || 32 === r || 60 === r || (0, c.Av)(r)
                      ? n(r)
                      : (e.consume(r), o);
                }
                function l(t) {
                  return 64 === t
                    ? (e.consume(t), s)
                    : (0, c.n9)(t)
                      ? (e.consume(t), l)
                      : n(t);
                }
                function s(i) {
                  return (0, c.H$)(i)
                    ? (function i(a) {
                        return 46 === a
                          ? (e.consume(a), (r = 0), s)
                          : 62 === a
                            ? ((e.exit("autolinkProtocol").type =
                                "autolinkEmail"),
                              e.enter("autolinkMarker"),
                              e.consume(a),
                              e.exit("autolinkMarker"),
                              e.exit("autolink"),
                              t)
                            : (function t(a) {
                                if ((45 === a || (0, c.H$)(a)) && r++ < 63) {
                                  let n = 45 === a ? t : i;
                                  return e.consume(a), n;
                                }
                                return n(a);
                              })(a);
                      })(i)
                    : n(i);
                }
              },
            },
            {
              name: "htmlText",
              tokenize: function (e, t, n) {
                let r, i, a;
                let o = this;
                return function (t) {
                  return (
                    e.enter("htmlText"),
                    e.enter("htmlTextData"),
                    e.consume(t),
                    l
                  );
                };
                function l(t) {
                  return 33 === t
                    ? (e.consume(t), u)
                    : 47 === t
                      ? (e.consume(t), k)
                      : 63 === t
                        ? (e.consume(t), v)
                        : (0, c.jv)(t)
                          ? (e.consume(t), E)
                          : n(t);
                }
                function u(t) {
                  return 45 === t
                    ? (e.consume(t), d)
                    : 91 === t
                      ? (e.consume(t), (i = 0), g)
                      : (0, c.jv)(t)
                        ? (e.consume(t), _)
                        : n(t);
                }
                function d(t) {
                  return 45 === t ? (e.consume(t), m) : n(t);
                }
                function f(t) {
                  return null === t
                    ? n(t)
                    : 45 === t
                      ? (e.consume(t), p)
                      : (0, c.Ch)(t)
                        ? ((a = f), M(t))
                        : (e.consume(t), f);
                }
                function p(t) {
                  return 45 === t ? (e.consume(t), m) : f(t);
                }
                function m(e) {
                  return 62 === e ? O(e) : 45 === e ? p(e) : f(e);
                }
                function g(t) {
                  let r = "CDATA[";
                  return t === r.charCodeAt(i++)
                    ? (e.consume(t), i === r.length ? h : g)
                    : n(t);
                }
                function h(t) {
                  return null === t
                    ? n(t)
                    : 93 === t
                      ? (e.consume(t), b)
                      : (0, c.Ch)(t)
                        ? ((a = h), M(t))
                        : (e.consume(t), h);
                }
                function b(t) {
                  return 93 === t ? (e.consume(t), y) : h(t);
                }
                function y(t) {
                  return 62 === t ? O(t) : 93 === t ? (e.consume(t), y) : h(t);
                }
                function _(t) {
                  return null === t || 62 === t
                    ? O(t)
                    : (0, c.Ch)(t)
                      ? ((a = _), M(t))
                      : (e.consume(t), _);
                }
                function v(t) {
                  return null === t
                    ? n(t)
                    : 63 === t
                      ? (e.consume(t), w)
                      : (0, c.Ch)(t)
                        ? ((a = v), M(t))
                        : (e.consume(t), v);
                }
                function w(e) {
                  return 62 === e ? O(e) : v(e);
                }
                function k(t) {
                  return (0, c.jv)(t) ? (e.consume(t), x) : n(t);
                }
                function x(t) {
                  return 45 === t || (0, c.H$)(t)
                    ? (e.consume(t), x)
                    : (function t(n) {
                        return (0, c.Ch)(n)
                          ? ((a = t), M(n))
                          : (0, c.xz)(n)
                            ? (e.consume(n), t)
                            : O(n);
                      })(t);
                }
                function E(t) {
                  return 45 === t || (0, c.H$)(t)
                    ? (e.consume(t), E)
                    : 47 === t || 62 === t || (0, c.z3)(t)
                      ? D(t)
                      : n(t);
                }
                function D(t) {
                  return 47 === t
                    ? (e.consume(t), O)
                    : 58 === t || 95 === t || (0, c.jv)(t)
                      ? (e.consume(t), C)
                      : (0, c.Ch)(t)
                        ? ((a = D), M(t))
                        : (0, c.xz)(t)
                          ? (e.consume(t), D)
                          : O(t);
                }
                function C(t) {
                  return 45 === t ||
                    46 === t ||
                    58 === t ||
                    95 === t ||
                    (0, c.H$)(t)
                    ? (e.consume(t), C)
                    : (function t(n) {
                        return 61 === n
                          ? (e.consume(n), A)
                          : (0, c.Ch)(n)
                            ? ((a = t), M(n))
                            : (0, c.xz)(n)
                              ? (e.consume(n), t)
                              : D(n);
                      })(t);
                }
                function A(t) {
                  return null === t ||
                    60 === t ||
                    61 === t ||
                    62 === t ||
                    96 === t
                    ? n(t)
                    : 34 === t || 39 === t
                      ? (e.consume(t), (r = t), F)
                      : (0, c.Ch)(t)
                        ? ((a = A), M(t))
                        : (0, c.xz)(t)
                          ? (e.consume(t), A)
                          : (e.consume(t), S);
                }
                function F(t) {
                  return t === r
                    ? (e.consume(t), (r = void 0), N)
                    : null === t
                      ? n(t)
                      : (0, c.Ch)(t)
                        ? ((a = F), M(t))
                        : (e.consume(t), F);
                }
                function S(t) {
                  return null === t ||
                    34 === t ||
                    39 === t ||
                    60 === t ||
                    61 === t ||
                    96 === t
                    ? n(t)
                    : 47 === t || 62 === t || (0, c.z3)(t)
                      ? D(t)
                      : (e.consume(t), S);
                }
                function N(e) {
                  return 47 === e || 62 === e || (0, c.z3)(e) ? D(e) : n(e);
                }
                function O(r) {
                  return 62 === r
                    ? (e.consume(r),
                      e.exit("htmlTextData"),
                      e.exit("htmlText"),
                      t)
                    : n(r);
                }
                function M(t) {
                  return (
                    e.exit("htmlTextData"),
                    e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    T
                  );
                }
                function T(t) {
                  return (0, c.xz)(t)
                    ? (0, s.f)(
                        e,
                        B,
                        "linePrefix",
                        o.parser.constructs.disable.null.includes(
                          "codeIndented",
                        )
                          ? void 0
                          : 4,
                      )(t)
                    : B(t);
                }
                function B(t) {
                  return e.enter("htmlTextData"), a(t);
                }
              },
            },
          ],
          91: en,
          92: [
            {
              name: "hardBreakEscape",
              tokenize: function (e, t, n) {
                return function (t) {
                  return e.enter("hardBreakEscape"), e.consume(t), r;
                };
                function r(r) {
                  return (0, c.Ch)(r)
                    ? (e.exit("hardBreakEscape"), t(r))
                    : n(r);
                }
              },
            },
            W,
          ],
          93: V,
          95: ee,
          96: {
            name: "codeText",
            tokenize: function (e, t, n) {
              let r,
                i,
                a = 0;
              return function (t) {
                return (
                  e.enter("codeText"),
                  e.enter("codeTextSequence"),
                  (function t(n) {
                    return 96 === n
                      ? (e.consume(n), a++, t)
                      : (e.exit("codeTextSequence"), o(n));
                  })(t)
                );
              };
              function o(s) {
                return null === s
                  ? n(s)
                  : 32 === s
                    ? (e.enter("space"), e.consume(s), e.exit("space"), o)
                    : 96 === s
                      ? ((i = e.enter("codeTextSequence")),
                        (r = 0),
                        (function n(o) {
                          return 96 === o
                            ? (e.consume(o), r++, n)
                            : r === a
                              ? (e.exit("codeTextSequence"),
                                e.exit("codeText"),
                                t(o))
                              : ((i.type = "codeTextData"), l(o));
                        })(s))
                      : (0, c.Ch)(s)
                        ? (e.enter("lineEnding"),
                          e.consume(s),
                          e.exit("lineEnding"),
                          o)
                        : (e.enter("codeTextData"), l(s));
              }
              function l(t) {
                return null === t || 32 === t || 96 === t || (0, c.Ch)(t)
                  ? (e.exit("codeTextData"), o(t))
                  : (e.consume(t), l);
              }
            },
            resolve: function (e) {
              let t,
                n,
                r = e.length - 4,
                i = 3;
              if (
                ("lineEnding" === e[3][1].type || "space" === e[i][1].type) &&
                ("lineEnding" === e[r][1].type || "space" === e[r][1].type)
              ) {
                for (t = i; ++t < r; )
                  if ("codeTextData" === e[t][1].type) {
                    (e[i][1].type = "codeTextPadding"),
                      (e[r][1].type = "codeTextPadding"),
                      (i += 2),
                      (r -= 2);
                    break;
                  }
              }
              for (t = i - 1, r++; ++t <= r; )
                void 0 === n
                  ? t !== r && "lineEnding" !== e[t][1].type && (n = t)
                  : (t === r || "lineEnding" === e[t][1].type) &&
                    ((e[n][1].type = "codeTextData"),
                    t !== n + 2 &&
                      ((e[n][1].end = e[t - 1][1].end),
                      e.splice(n + 2, t - n - 2),
                      (r -= t - n - 2),
                      (t = n + 2)),
                    (n = void 0));
              return e;
            },
            previous: function (e) {
              return (
                96 !== e ||
                "characterEscape" ===
                  this.events[this.events.length - 1][1].type
              );
            },
          },
        },
        ec = { null: [ee, b] },
        eu = { null: [42, 95] },
        ed = { null: [] },
        ef = /[\0\t\n\r]/g;
      function ep(e, t) {
        let n = Number.parseInt(e, t);
        return n < 9 ||
          11 === n ||
          (n > 13 && n < 32) ||
          (n > 126 && n < 160) ||
          (n > 55295 && n < 57344) ||
          (n > 64975 && n < 65008) ||
          (65535 & n) == 65535 ||
          (65535 & n) == 65534 ||
          n > 1114111
          ? "�"
          : String.fromCodePoint(n);
      }
      let em =
        /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
      function eg(e, t, n) {
        if (t) return t;
        if (35 === n.charCodeAt(0)) {
          let e = n.charCodeAt(1),
            t = 120 === e || 88 === e;
          return ep(n.slice(t ? 2 : 1), t ? 16 : 10);
        }
        return (0, H.T)(n) || e;
      }
      var eh = n(6092);
      let eb = {}.hasOwnProperty;
      function ey(e) {
        return { line: e.line, column: e.column, offset: e.offset };
      }
      function e_(e, t) {
        if (e)
          throw Error(
            "Cannot close `" +
              e.type +
              "` (" +
              (0, eh.y)({ start: e.start, end: e.end }) +
              "): a different token (`" +
              t.type +
              "`, " +
              (0, eh.y)({ start: t.start, end: t.end }) +
              ") is open",
          );
        throw Error(
          "Cannot close document, a token (`" +
            t.type +
            "`, " +
            (0, eh.y)({ start: t.start, end: t.end }) +
            ") is still open",
        );
      }
      function ev(e) {
        let t = this;
        t.parser = function (n) {
          var s, f;
          let p, m, g, b;
          return (
            "string" !=
              typeof (s = {
                ...t.data("settings"),
                ...e,
                extensions: t.data("micromarkExtensions") || [],
                mdastExtensions: t.data("fromMarkdownExtensions") || [],
              }) && ((f = s), (s = void 0)),
            (function (e) {
              let t = {
                transforms: [],
                canContainEols: [
                  "emphasis",
                  "fragment",
                  "heading",
                  "paragraph",
                  "strong",
                ],
                enter: {
                  autolink: r(y),
                  autolinkProtocol: u,
                  autolinkEmail: u,
                  atxHeading: r(g),
                  blockQuote: r(function () {
                    return { type: "blockquote", children: [] };
                  }),
                  characterEscape: u,
                  characterReference: u,
                  codeFenced: r(m),
                  codeFencedFenceInfo: a,
                  codeFencedFenceMeta: a,
                  codeIndented: r(m, a),
                  codeText: r(function () {
                    return { type: "inlineCode", value: "" };
                  }, a),
                  codeTextData: u,
                  data: u,
                  codeFlowValue: u,
                  definition: r(function () {
                    return {
                      type: "definition",
                      identifier: "",
                      label: null,
                      title: null,
                      url: "",
                    };
                  }),
                  definitionDestinationString: a,
                  definitionLabelString: a,
                  definitionTitleString: a,
                  emphasis: r(function () {
                    return { type: "emphasis", children: [] };
                  }),
                  hardBreakEscape: r(h),
                  hardBreakTrailing: r(h),
                  htmlFlow: r(b, a),
                  htmlFlowData: u,
                  htmlText: r(b, a),
                  htmlTextData: u,
                  image: r(function () {
                    return { type: "image", title: null, url: "", alt: null };
                  }),
                  label: a,
                  link: r(y),
                  listItem: r(function (e) {
                    return {
                      type: "listItem",
                      spread: e._spread,
                      checked: null,
                      children: [],
                    };
                  }),
                  listItemValue: function (e) {
                    this.data.expectingFirstListItemValue &&
                      ((this.stack[this.stack.length - 2].start =
                        Number.parseInt(this.sliceSerialize(e), 10)),
                      (this.data.expectingFirstListItemValue = void 0));
                  },
                  listOrdered: r(_, function () {
                    this.data.expectingFirstListItemValue = !0;
                  }),
                  listUnordered: r(_),
                  paragraph: r(function () {
                    return { type: "paragraph", children: [] };
                  }),
                  reference: function () {
                    this.data.referenceType = "collapsed";
                  },
                  referenceString: a,
                  resourceDestinationString: a,
                  resourceTitleString: a,
                  setextHeading: r(g),
                  strong: r(function () {
                    return { type: "strong", children: [] };
                  }),
                  thematicBreak: r(function () {
                    return { type: "thematicBreak" };
                  }),
                },
                exit: {
                  atxHeading: l(),
                  atxHeadingSequence: function (e) {
                    let t = this.stack[this.stack.length - 1];
                    if (!t.depth) {
                      let n = this.sliceSerialize(e).length;
                      t.depth = n;
                    }
                  },
                  autolink: l(),
                  autolinkEmail: function (e) {
                    d.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        "mailto:" + this.sliceSerialize(e));
                  },
                  autolinkProtocol: function (e) {
                    d.call(this, e),
                      (this.stack[this.stack.length - 1].url =
                        this.sliceSerialize(e));
                  },
                  blockQuote: l(),
                  characterEscapeValue: d,
                  characterReferenceMarkerHexadecimal: p,
                  characterReferenceMarkerNumeric: p,
                  characterReferenceValue: function (e) {
                    let t;
                    let n = this.sliceSerialize(e),
                      r = this.data.characterReferenceType;
                    r
                      ? ((t = ep(
                          n,
                          "characterReferenceMarkerNumeric" === r ? 10 : 16,
                        )),
                        (this.data.characterReferenceType = void 0))
                      : (t = (0, H.T)(n));
                    let i = this.stack.pop();
                    (i.value += t), (i.position.end = ey(e.end));
                  },
                  codeFenced: l(function () {
                    let e = this.resume();
                    (this.stack[this.stack.length - 1].value = e.replace(
                      /^(\r?\n|\r)|(\r?\n|\r)$/g,
                      "",
                    )),
                      (this.data.flowCodeInside = void 0);
                  }),
                  codeFencedFence: function () {
                    this.data.flowCodeInside ||
                      (this.buffer(), (this.data.flowCodeInside = !0));
                  },
                  codeFencedFenceInfo: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].lang = e;
                  },
                  codeFencedFenceMeta: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].meta = e;
                  },
                  codeFlowValue: d,
                  codeIndented: l(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e.replace(
                      /(\r?\n|\r)$/g,
                      "",
                    );
                  }),
                  codeText: l(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  codeTextData: d,
                  data: d,
                  definition: l(),
                  definitionDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  definitionLabelString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = (0, T.d)(
                        this.sliceSerialize(e),
                      ).toLowerCase());
                  },
                  definitionTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  emphasis: l(),
                  hardBreakEscape: l(f),
                  hardBreakTrailing: l(f),
                  htmlFlow: l(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlFlowData: d,
                  htmlText: l(function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].value = e;
                  }),
                  htmlTextData: d,
                  image: l(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  label: function () {
                    let e = this.stack[this.stack.length - 1],
                      t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    if (((this.data.inReference = !0), "link" === n.type)) {
                      let t = e.children;
                      n.children = t;
                    } else n.alt = t;
                  },
                  labelText: function (e) {
                    let t = this.sliceSerialize(e),
                      n = this.stack[this.stack.length - 2];
                    (n.label = t.replace(em, eg)),
                      (n.identifier = (0, T.d)(t).toLowerCase());
                  },
                  lineEnding: function (e) {
                    let n = this.stack[this.stack.length - 1];
                    if (this.data.atHardBreak) {
                      (n.children[n.children.length - 1].position.end = ey(
                        e.end,
                      )),
                        (this.data.atHardBreak = void 0);
                      return;
                    }
                    !this.data.setextHeadingSlurpLineEnding &&
                      t.canContainEols.includes(n.type) &&
                      (u.call(this, e), d.call(this, e));
                  },
                  link: l(function () {
                    let e = this.stack[this.stack.length - 1];
                    if (this.data.inReference) {
                      let t = this.data.referenceType || "shortcut";
                      (e.type += "Reference"),
                        (e.referenceType = t),
                        delete e.url,
                        delete e.title;
                    } else delete e.identifier, delete e.label;
                    this.data.referenceType = void 0;
                  }),
                  listItem: l(),
                  listOrdered: l(),
                  listUnordered: l(),
                  paragraph: l(),
                  referenceString: function (e) {
                    let t = this.resume(),
                      n = this.stack[this.stack.length - 1];
                    (n.label = t),
                      (n.identifier = (0, T.d)(
                        this.sliceSerialize(e),
                      ).toLowerCase()),
                      (this.data.referenceType = "full");
                  },
                  resourceDestinationString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].url = e;
                  },
                  resourceTitleString: function () {
                    let e = this.resume();
                    this.stack[this.stack.length - 1].title = e;
                  },
                  resource: function () {
                    this.data.inReference = void 0;
                  },
                  setextHeading: l(function () {
                    this.data.setextHeadingSlurpLineEnding = void 0;
                  }),
                  setextHeadingLineSequence: function (e) {
                    this.stack[this.stack.length - 1].depth =
                      61 === this.sliceSerialize(e).codePointAt(0) ? 1 : 2;
                  },
                  setextHeadingText: function () {
                    this.data.setextHeadingSlurpLineEnding = !0;
                  },
                  strong: l(),
                  thematicBreak: l(),
                },
              };
              (function e(t, n) {
                let r = -1;
                for (; ++r < n.length; ) {
                  let i = n[r];
                  Array.isArray(i)
                    ? e(t, i)
                    : (function (e, t) {
                        let n;
                        for (n in t)
                          if (eb.call(t, n))
                            switch (n) {
                              case "canContainEols": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "transforms": {
                                let r = t[n];
                                r && e[n].push(...r);
                                break;
                              }
                              case "enter":
                              case "exit": {
                                let r = t[n];
                                r && Object.assign(e[n], r);
                              }
                            }
                      })(t, i);
                }
              })(t, (e || {}).mdastExtensions || []);
              let n = {};
              return function (e) {
                let r = { type: "root", children: [] },
                  i = {
                    stack: [r],
                    tokenStack: [],
                    config: t,
                    enter: o,
                    exit: s,
                    buffer: a,
                    resume: c,
                    data: n,
                  },
                  l = [],
                  u = -1;
                for (; ++u < e.length; )
                  ("listOrdered" === e[u][1].type ||
                    "listUnordered" === e[u][1].type) &&
                    ("enter" === e[u][0]
                      ? l.push(u)
                      : (u = (function (e, t, n) {
                          let r,
                            i,
                            a,
                            o,
                            l = t - 1,
                            s = -1,
                            c = !1;
                          for (; ++l <= n; ) {
                            let t = e[l];
                            switch (t[1].type) {
                              case "listUnordered":
                              case "listOrdered":
                              case "blockQuote":
                                "enter" === t[0] ? s++ : s--, (o = void 0);
                                break;
                              case "lineEndingBlank":
                                "enter" === t[0] &&
                                  (!r || o || s || a || (a = l), (o = void 0));
                                break;
                              case "linePrefix":
                              case "listItemValue":
                              case "listItemMarker":
                              case "listItemPrefix":
                              case "listItemPrefixWhitespace":
                                break;
                              default:
                                o = void 0;
                            }
                            if (
                              (!s &&
                                "enter" === t[0] &&
                                "listItemPrefix" === t[1].type) ||
                              (-1 === s &&
                                "exit" === t[0] &&
                                ("listUnordered" === t[1].type ||
                                  "listOrdered" === t[1].type))
                            ) {
                              if (r) {
                                let o = l;
                                for (i = void 0; o--; ) {
                                  let t = e[o];
                                  if (
                                    "lineEnding" === t[1].type ||
                                    "lineEndingBlank" === t[1].type
                                  ) {
                                    if ("exit" === t[0]) continue;
                                    i &&
                                      ((e[i][1].type = "lineEndingBlank"),
                                      (c = !0)),
                                      (t[1].type = "lineEnding"),
                                      (i = o);
                                  } else if (
                                    "linePrefix" === t[1].type ||
                                    "blockQuotePrefix" === t[1].type ||
                                    "blockQuotePrefixWhitespace" ===
                                      t[1].type ||
                                    "blockQuoteMarker" === t[1].type ||
                                    "listItemIndent" === t[1].type
                                  );
                                  else break;
                                }
                                a && (!i || a < i) && (r._spread = !0),
                                  (r.end = Object.assign(
                                    {},
                                    i ? e[i][1].start : t[1].end,
                                  )),
                                  e.splice(i || l, 0, ["exit", r, t[2]]),
                                  l++,
                                  n++;
                              }
                              if ("listItemPrefix" === t[1].type) {
                                let i = {
                                  type: "listItem",
                                  _spread: !1,
                                  start: Object.assign({}, t[1].start),
                                  end: void 0,
                                };
                                (r = i),
                                  e.splice(l, 0, ["enter", i, t[2]]),
                                  l++,
                                  n++,
                                  (a = void 0),
                                  (o = !0);
                              }
                            }
                          }
                          return (e[t][1]._spread = c), n;
                        })(e, l.pop(), u)));
                for (u = -1; ++u < e.length; ) {
                  let n = t[e[u][0]];
                  eb.call(n, e[u][1].type) &&
                    n[e[u][1].type].call(
                      Object.assign(
                        { sliceSerialize: e[u][2].sliceSerialize },
                        i,
                      ),
                      e[u][1],
                    );
                }
                if (i.tokenStack.length > 0) {
                  let e = i.tokenStack[i.tokenStack.length - 1];
                  (e[1] || e_).call(i, void 0, e[0]);
                }
                for (
                  r.position = {
                    start: ey(
                      e.length > 0
                        ? e[0][1].start
                        : { line: 1, column: 1, offset: 0 },
                    ),
                    end: ey(
                      e.length > 0
                        ? e[e.length - 2][1].end
                        : { line: 1, column: 1, offset: 0 },
                    ),
                  },
                    u = -1;
                  ++u < t.transforms.length;

                )
                  r = t.transforms[u](r) || r;
                return r;
              };
              function r(e, t) {
                return function (n) {
                  o.call(this, e(n), n), t && t.call(this, n);
                };
              }
              function a() {
                this.stack.push({ type: "fragment", children: [] });
              }
              function o(e, t, n) {
                this.stack[this.stack.length - 1].children.push(e),
                  this.stack.push(e),
                  this.tokenStack.push([t, n]),
                  (e.position = { start: ey(t.start), end: void 0 });
              }
              function l(e) {
                return function (t) {
                  e && e.call(this, t), s.call(this, t);
                };
              }
              function s(e, t) {
                let n = this.stack.pop(),
                  r = this.tokenStack.pop();
                if (r)
                  r[0].type !== e.type &&
                    (t
                      ? t.call(this, e, r[0])
                      : (r[1] || e_).call(this, e, r[0]));
                else
                  throw Error(
                    "Cannot close `" +
                      e.type +
                      "` (" +
                      (0, eh.y)({ start: e.start, end: e.end }) +
                      "): it’s not open",
                  );
                n.position.end = ey(e.end);
              }
              function c() {
                return (0, i.B)(this.stack.pop());
              }
              function u(e) {
                let t = this.stack[this.stack.length - 1].children,
                  n = t[t.length - 1];
                (n && "text" === n.type) ||
                  (((n = { type: "text", value: "" }).position = {
                    start: ey(e.start),
                    end: void 0,
                  }),
                  t.push(n)),
                  this.stack.push(n);
              }
              function d(e) {
                let t = this.stack.pop();
                (t.value += this.sliceSerialize(e)),
                  (t.position.end = ey(e.end));
              }
              function f() {
                this.data.atHardBreak = !0;
              }
              function p(e) {
                this.data.characterReferenceType = e.type;
              }
              function m() {
                return { type: "code", lang: null, meta: null, value: "" };
              }
              function g() {
                return { type: "heading", depth: 0, children: [] };
              }
              function h() {
                return { type: "break" };
              }
              function b() {
                return { type: "html", value: "" };
              }
              function y() {
                return { type: "link", title: null, url: "", children: [] };
              }
              function _(e) {
                return {
                  type: "list",
                  ordered: "listOrdered" === e.type,
                  start: null,
                  spread: e._spread,
                  children: [],
                };
              }
            })(f)(
              (function (e) {
                for (; !o(e); );
                return e;
              })(
                (function (e) {
                  let t = {
                    defined: [],
                    lazy: {},
                    constructs: (0, l.W)([r, ...((e || {}).extensions || [])]),
                    content: n(u),
                    document: n(d),
                    flow: n(h),
                    string: n(y),
                    text: n(_),
                  };
                  return t;
                  function n(e) {
                    return function (n) {
                      return (function (e, t, n) {
                        let r = Object.assign(
                            n
                              ? Object.assign({}, n)
                              : { line: 1, column: 1, offset: 0 },
                            { _index: 0, _bufferIndex: -1 },
                          ),
                          i = {},
                          o = [],
                          l = [],
                          s = [],
                          u = {
                            consume: function (e) {
                              (0, c.Ch)(e)
                                ? (r.line++,
                                  (r.column = 1),
                                  (r.offset += -3 === e ? 2 : 1),
                                  y())
                                : -1 !== e && (r.column++, r.offset++),
                                r._bufferIndex < 0
                                  ? r._index++
                                  : (r._bufferIndex++,
                                    r._bufferIndex === l[r._index].length &&
                                      ((r._bufferIndex = -1), r._index++)),
                                (d.previous = e);
                            },
                            enter: function (e, t) {
                              let n = t || {};
                              return (
                                (n.type = e),
                                (n.start = m()),
                                d.events.push(["enter", n, d]),
                                s.push(n),
                                n
                              );
                            },
                            exit: function (e) {
                              let t = s.pop();
                              return (
                                (t.end = m()), d.events.push(["exit", t, d]), t
                              );
                            },
                            attempt: h(function (e, t) {
                              b(e, t.from);
                            }),
                            check: h(g),
                            interrupt: h(g, { interrupt: !0 }),
                          },
                          d = {
                            previous: null,
                            code: null,
                            containerState: {},
                            events: [],
                            parser: e,
                            sliceStream: p,
                            sliceSerialize: function (e, t) {
                              return (function (e, t) {
                                let n,
                                  r = -1,
                                  i = [];
                                for (; ++r < e.length; ) {
                                  let a;
                                  let o = e[r];
                                  if ("string" == typeof o) a = o;
                                  else
                                    switch (o) {
                                      case -5:
                                        a = "\r";
                                        break;
                                      case -4:
                                        a = "\n";
                                        break;
                                      case -3:
                                        a = "\r\n";
                                        break;
                                      case -2:
                                        a = t ? " " : "	";
                                        break;
                                      case -1:
                                        if (!t && n) continue;
                                        a = " ";
                                        break;
                                      default:
                                        a = String.fromCharCode(o);
                                    }
                                  (n = -2 === o), i.push(a);
                                }
                                return i.join("");
                              })(p(e), t);
                            },
                            now: m,
                            defineSkip: function (e) {
                              (i[e.line] = e.column), y();
                            },
                            write: function (e) {
                              return ((l = (0, a.V)(l, e)),
                              (function () {
                                let e;
                                for (; r._index < l.length; ) {
                                  let n = l[r._index];
                                  if ("string" == typeof n)
                                    for (
                                      e = r._index,
                                        r._bufferIndex < 0 &&
                                          (r._bufferIndex = 0);
                                      r._index === e &&
                                      r._bufferIndex < n.length;

                                    ) {
                                      var t;
                                      (t = n.charCodeAt(r._bufferIndex)),
                                        (f = f(t));
                                    }
                                  else f = f(n);
                                }
                              })(),
                              null !== l[l.length - 1])
                                ? []
                                : (b(t, 0),
                                  (d.events = (0, x.C)(o, d.events, d)),
                                  d.events);
                            },
                          },
                          f = t.tokenize.call(d, u);
                        return t.resolveAll && o.push(t), d;
                        function p(e) {
                          return (function (e, t) {
                            let n;
                            let r = t.start._index,
                              i = t.start._bufferIndex,
                              a = t.end._index,
                              o = t.end._bufferIndex;
                            if (r === a) n = [e[r].slice(i, o)];
                            else {
                              if (((n = e.slice(r, a)), i > -1)) {
                                let e = n[0];
                                "string" == typeof e
                                  ? (n[0] = e.slice(i))
                                  : n.shift();
                              }
                              o > 0 && n.push(e[a].slice(0, o));
                            }
                            return n;
                          })(l, e);
                        }
                        function m() {
                          let {
                            line: e,
                            column: t,
                            offset: n,
                            _index: i,
                            _bufferIndex: a,
                          } = r;
                          return {
                            line: e,
                            column: t,
                            offset: n,
                            _index: i,
                            _bufferIndex: a,
                          };
                        }
                        function g(e, t) {
                          t.restore();
                        }
                        function h(e, t) {
                          return function (n, i, a) {
                            let o, l, c, f;
                            return Array.isArray(n)
                              ? p(n)
                              : "tokenize" in n
                                ? p([n])
                                : function (e) {
                                    let t = null !== e && n[e],
                                      r = null !== e && n.null;
                                    return p([
                                      ...(Array.isArray(t) ? t : t ? [t] : []),
                                      ...(Array.isArray(r) ? r : r ? [r] : []),
                                    ])(e);
                                  };
                            function p(e) {
                              return ((o = e), (l = 0), 0 === e.length)
                                ? a
                                : g(e[l]);
                            }
                            function g(e) {
                              return function (n) {
                                return ((f = (function () {
                                  let e = m(),
                                    t = d.previous,
                                    n = d.currentConstruct,
                                    i = d.events.length,
                                    a = Array.from(s);
                                  return {
                                    restore: function () {
                                      (r = e),
                                        (d.previous = t),
                                        (d.currentConstruct = n),
                                        (d.events.length = i),
                                        (s = a),
                                        y();
                                    },
                                    from: i,
                                  };
                                })()),
                                (c = e),
                                e.partial || (d.currentConstruct = e),
                                e.name &&
                                  d.parser.constructs.disable.null.includes(
                                    e.name,
                                  ))
                                  ? b(n)
                                  : e.tokenize.call(
                                      t
                                        ? Object.assign(Object.create(d), t)
                                        : d,
                                      u,
                                      h,
                                      b,
                                    )(n);
                              };
                            }
                            function h(t) {
                              return e(c, f), i;
                            }
                            function b(e) {
                              return (f.restore(), ++l < o.length)
                                ? g(o[l])
                                : a;
                            }
                          };
                        }
                        function b(e, t) {
                          e.resolveAll && !o.includes(e) && o.push(e),
                            e.resolve &&
                              (0, a.d)(
                                d.events,
                                t,
                                d.events.length - t,
                                e.resolve(d.events.slice(t), d),
                              ),
                            e.resolveTo &&
                              (d.events = e.resolveTo(d.events, d));
                        }
                        function y() {
                          r.line in i &&
                            r.column < 2 &&
                            ((r.column = i[r.line]),
                            (r.offset += i[r.line] - 1));
                        }
                      })(t, e, n);
                    };
                  }
                })(f)
                  .document()
                  .write(
                    ((m = 1),
                    (g = ""),
                    (b = !0),
                    function (e, t, n) {
                      let r, i, a, o, l;
                      let s = [];
                      for (
                        e =
                          g +
                          ("string" == typeof e
                            ? e.toString()
                            : new TextDecoder(t || void 0).decode(e)),
                          a = 0,
                          g = "",
                          b && (65279 === e.charCodeAt(0) && a++, (b = void 0));
                        a < e.length;

                      ) {
                        if (
                          ((ef.lastIndex = a),
                          (o =
                            (r = ef.exec(e)) && void 0 !== r.index
                              ? r.index
                              : e.length),
                          (l = e.charCodeAt(o)),
                          !r)
                        ) {
                          g = e.slice(a);
                          break;
                        }
                        if (10 === l && a === o && p) s.push(-3), (p = void 0);
                        else
                          switch (
                            (p && (s.push(-5), (p = void 0)),
                            a < o && (s.push(e.slice(a, o)), (m += o - a)),
                            l)
                          ) {
                            case 0:
                              s.push(65533), m++;
                              break;
                            case 9:
                              for (
                                i = 4 * Math.ceil(m / 4), s.push(-2);
                                m++ < i;

                              )
                                s.push(-1);
                              break;
                            case 10:
                              s.push(-4), (m = 1);
                              break;
                            default:
                              (p = !0), (m = 1);
                          }
                        a = o + 1;
                      }
                      return (
                        n && (p && s.push(-5), g && s.push(g), s.push(null)), s
                      );
                    })(n, s, !0),
                  ),
              ),
            )
          );
        };
      }
    },
    7797: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var r = n(4345),
        i = n(2835),
        a = n(5459);
      function o(e) {
        let t = [],
          n = -1,
          r = 0,
          i = 0;
        for (; ++n < e.length; ) {
          let o = e.charCodeAt(n),
            l = "";
          if (
            37 === o &&
            (0, a.H$)(e.charCodeAt(n + 1)) &&
            (0, a.H$)(e.charCodeAt(n + 2))
          )
            i = 2;
          else if (o < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) ||
              (l = String.fromCharCode(o));
          else if (o > 55295 && o < 57344) {
            let t = e.charCodeAt(n + 1);
            o < 56320 && t > 56319 && t < 57344
              ? ((l = String.fromCharCode(o, t)), (i = 1))
              : (l = "�");
          } else l = String.fromCharCode(o);
          l &&
            (t.push(e.slice(r, n), encodeURIComponent(l)),
            (r = n + i + 1),
            (l = "")),
            i && ((n += i), (i = 0));
        }
        return t.join("") + e.slice(r);
      }
      function l(e, t) {
        let n = [{ type: "text", value: "↩" }];
        return (
          t > 1 &&
            n.push({
              type: "element",
              tagName: "sup",
              properties: {},
              children: [{ type: "text", value: String(t) }],
            }),
          n
        );
      }
      function s(e, t) {
        return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
      }
      var c = n(1623),
        u = n(3980);
      function d(e, t) {
        let n = t.referenceType,
          r = "]";
        if (
          ("collapsed" === n
            ? (r += "[]")
            : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
          "imageReference" === t.type)
        )
          return [{ type: "text", value: "![" + t.alt + r }];
        let i = e.all(t),
          a = i[0];
        a && "text" === a.type
          ? (a.value = "[" + a.value)
          : i.unshift({ type: "text", value: "[" });
        let o = i[i.length - 1];
        return (
          o && "text" === o.type
            ? (o.value += r)
            : i.push({ type: "text", value: r }),
          i
        );
      }
      function f(e) {
        let t = e.spread;
        return null == t ? e.children.length > 1 : t;
      }
      function p(e, t, n) {
        let r = 0,
          i = e.length;
        if (t) {
          let t = e.codePointAt(r);
          for (; 9 === t || 32 === t; ) r++, (t = e.codePointAt(r));
        }
        if (n) {
          let t = e.codePointAt(i - 1);
          for (; 9 === t || 32 === t; ) i--, (t = e.codePointAt(i - 1));
        }
        return i > r ? e.slice(r, i) : "";
      }
      let m = {
        blockquote: function (e, t) {
          let n = {
            type: "element",
            tagName: "blockquote",
            properties: {},
            children: e.wrap(e.all(t), !0),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        break: function (e, t) {
          let n = {
            type: "element",
            tagName: "br",
            properties: {},
            children: [],
          };
          return (
            e.patch(t, n), [e.applyData(t, n), { type: "text", value: "\n" }]
          );
        },
        code: function (e, t) {
          let n = t.value ? t.value + "\n" : "",
            r = {};
          t.lang && (r.className = ["language-" + t.lang]);
          let i = {
            type: "element",
            tagName: "code",
            properties: r,
            children: [{ type: "text", value: n }],
          };
          return (
            t.meta && (i.data = { meta: t.meta }),
            e.patch(t, i),
            (i = {
              type: "element",
              tagName: "pre",
              properties: {},
              children: [(i = e.applyData(t, i))],
            }),
            e.patch(t, i),
            i
          );
        },
        delete: function (e, t) {
          let n = {
            type: "element",
            tagName: "del",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        emphasis: function (e, t) {
          let n = {
            type: "element",
            tagName: "em",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        footnoteReference: function (e, t) {
          let n;
          let r =
              "string" == typeof e.options.clobberPrefix
                ? e.options.clobberPrefix
                : "user-content-",
            i = String(t.identifier).toUpperCase(),
            a = o(i.toLowerCase()),
            l = e.footnoteOrder.indexOf(i),
            s = e.footnoteCounts.get(i);
          void 0 === s
            ? ((s = 0), e.footnoteOrder.push(i), (n = e.footnoteOrder.length))
            : (n = l + 1),
            (s += 1),
            e.footnoteCounts.set(i, s);
          let c = {
            type: "element",
            tagName: "a",
            properties: {
              href: "#" + r + "fn-" + a,
              id: r + "fnref-" + a + (s > 1 ? "-" + s : ""),
              dataFootnoteRef: !0,
              ariaDescribedBy: ["footnote-label"],
            },
            children: [{ type: "text", value: String(n) }],
          };
          e.patch(t, c);
          let u = {
            type: "element",
            tagName: "sup",
            properties: {},
            children: [c],
          };
          return e.patch(t, u), e.applyData(t, u);
        },
        heading: function (e, t) {
          let n = {
            type: "element",
            tagName: "h" + t.depth,
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        html: function (e, t) {
          if (e.options.allowDangerousHtml) {
            let n = { type: "raw", value: t.value };
            return e.patch(t, n), e.applyData(t, n);
          }
        },
        imageReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return d(e, t);
          let i = { src: o(r.url || ""), alt: t.alt };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let a = {
            type: "element",
            tagName: "img",
            properties: i,
            children: [],
          };
          return e.patch(t, a), e.applyData(t, a);
        },
        image: function (e, t) {
          let n = { src: o(t.url) };
          null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
            null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type: "element",
            tagName: "img",
            properties: n,
            children: [],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        inlineCode: function (e, t) {
          let n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
          e.patch(t, n);
          let r = {
            type: "element",
            tagName: "code",
            properties: {},
            children: [n],
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        linkReference: function (e, t) {
          let n = String(t.identifier).toUpperCase(),
            r = e.definitionById.get(n);
          if (!r) return d(e, t);
          let i = { href: o(r.url || "") };
          null !== r.title && void 0 !== r.title && (i.title = r.title);
          let a = {
            type: "element",
            tagName: "a",
            properties: i,
            children: e.all(t),
          };
          return e.patch(t, a), e.applyData(t, a);
        },
        link: function (e, t) {
          let n = { href: o(t.url) };
          null !== t.title && void 0 !== t.title && (n.title = t.title);
          let r = {
            type: "element",
            tagName: "a",
            properties: n,
            children: e.all(t),
          };
          return e.patch(t, r), e.applyData(t, r);
        },
        listItem: function (e, t, n) {
          let r = e.all(t),
            i = n
              ? (function (e) {
                  let t = !1;
                  if ("list" === e.type) {
                    t = e.spread || !1;
                    let n = e.children,
                      r = -1;
                    for (; !t && ++r < n.length; ) t = f(n[r]);
                  }
                  return t;
                })(n)
              : f(t),
            a = {},
            o = [];
          if ("boolean" == typeof t.checked) {
            let e;
            let n = r[0];
            n && "element" === n.type && "p" === n.tagName
              ? (e = n)
              : ((e = {
                  type: "element",
                  tagName: "p",
                  properties: {},
                  children: [],
                }),
                r.unshift(e)),
              e.children.length > 0 &&
                e.children.unshift({ type: "text", value: " " }),
              e.children.unshift({
                type: "element",
                tagName: "input",
                properties: {
                  type: "checkbox",
                  checked: t.checked,
                  disabled: !0,
                },
                children: [],
              }),
              (a.className = ["task-list-item"]);
          }
          let l = -1;
          for (; ++l < r.length; ) {
            let e = r[l];
            (i || 0 !== l || "element" !== e.type || "p" !== e.tagName) &&
              o.push({ type: "text", value: "\n" }),
              "element" !== e.type || "p" !== e.tagName || i
                ? o.push(e)
                : o.push(...e.children);
          }
          let s = r[r.length - 1];
          s &&
            (i || "element" !== s.type || "p" !== s.tagName) &&
            o.push({ type: "text", value: "\n" });
          let c = {
            type: "element",
            tagName: "li",
            properties: a,
            children: o,
          };
          return e.patch(t, c), e.applyData(t, c);
        },
        list: function (e, t) {
          let n = {},
            r = e.all(t),
            i = -1;
          for (
            "number" == typeof t.start && 1 !== t.start && (n.start = t.start);
            ++i < r.length;

          ) {
            let e = r[i];
            if (
              "element" === e.type &&
              "li" === e.tagName &&
              e.properties &&
              Array.isArray(e.properties.className) &&
              e.properties.className.includes("task-list-item")
            ) {
              n.className = ["contains-task-list"];
              break;
            }
          }
          let a = {
            type: "element",
            tagName: t.ordered ? "ol" : "ul",
            properties: n,
            children: e.wrap(r, !0),
          };
          return e.patch(t, a), e.applyData(t, a);
        },
        paragraph: function (e, t) {
          let n = {
            type: "element",
            tagName: "p",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        root: function (e, t) {
          let n = { type: "root", children: e.wrap(e.all(t)) };
          return e.patch(t, n), e.applyData(t, n);
        },
        strong: function (e, t) {
          let n = {
            type: "element",
            tagName: "strong",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        table: function (e, t) {
          let n = e.all(t),
            r = n.shift(),
            i = [];
          if (r) {
            let n = {
              type: "element",
              tagName: "thead",
              properties: {},
              children: e.wrap([r], !0),
            };
            e.patch(t.children[0], n), i.push(n);
          }
          if (n.length > 0) {
            let r = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(n, !0),
              },
              a = (0, u.Pk)(t.children[1]),
              o = (0, u.rb)(t.children[t.children.length - 1]);
            a && o && (r.position = { start: a, end: o }), i.push(r);
          }
          let a = {
            type: "element",
            tagName: "table",
            properties: {},
            children: e.wrap(i, !0),
          };
          return e.patch(t, a), e.applyData(t, a);
        },
        tableCell: function (e, t) {
          let n = {
            type: "element",
            tagName: "td",
            properties: {},
            children: e.all(t),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        tableRow: function (e, t, n) {
          let r = n ? n.children : void 0,
            i = 0 === (r ? r.indexOf(t) : 1) ? "th" : "td",
            a = n && "table" === n.type ? n.align : void 0,
            o = a ? a.length : t.children.length,
            l = -1,
            s = [];
          for (; ++l < o; ) {
            let n = t.children[l],
              r = {},
              o = a ? a[l] : void 0;
            o && (r.align = o);
            let c = {
              type: "element",
              tagName: i,
              properties: r,
              children: [],
            };
            n &&
              ((c.children = e.all(n)), e.patch(n, c), (c = e.applyData(n, c))),
              s.push(c);
          }
          let c = {
            type: "element",
            tagName: "tr",
            properties: {},
            children: e.wrap(s, !0),
          };
          return e.patch(t, c), e.applyData(t, c);
        },
        text: function (e, t) {
          let n = {
            type: "text",
            value: (function (e) {
              let t = String(e),
                n = /\r?\n|\r/g,
                r = n.exec(t),
                i = 0,
                a = [];
              for (; r; )
                a.push(p(t.slice(i, r.index), i > 0, !0), r[0]),
                  (i = r.index + r[0].length),
                  (r = n.exec(t));
              return a.push(p(t.slice(i), i > 0, !1)), a.join("");
            })(String(t.value)),
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        thematicBreak: function (e, t) {
          let n = {
            type: "element",
            tagName: "hr",
            properties: {},
            children: [],
          };
          return e.patch(t, n), e.applyData(t, n);
        },
        toml: g,
        yaml: g,
        definition: g,
        footnoteDefinition: g,
      };
      function g() {}
      let h = {}.hasOwnProperty,
        b = {};
      function y(e, t) {
        e.position && (t.position = (0, u.FK)(e));
      }
      function _(e, t) {
        let n = t;
        if (e && e.data) {
          let t = e.data.hName,
            r = e.data.hChildren,
            a = e.data.hProperties;
          "string" == typeof t &&
            ("element" === n.type
              ? (n.tagName = t)
              : (n = {
                  type: "element",
                  tagName: t,
                  properties: {},
                  children: "children" in n ? n.children : [n],
                })),
            "element" === n.type &&
              a &&
              Object.assign(n.properties, (0, i.ZP)(a)),
            "children" in n && n.children && null != r && (n.children = r);
        }
        return n;
      }
      function v(e, t) {
        let n = [],
          r = -1;
        for (t && n.push({ type: "text", value: "\n" }); ++r < e.length; )
          r && n.push({ type: "text", value: "\n" }), n.push(e[r]);
        return t && e.length > 0 && n.push({ type: "text", value: "\n" }), n;
      }
      function w(e) {
        let t = 0,
          n = e.charCodeAt(t);
        for (; 9 === n || 32 === n; ) t++, (n = e.charCodeAt(t));
        return e.slice(t);
      }
      function k(e, t) {
        let n = (function (e, t) {
            let n = t || b,
              r = new Map(),
              a = new Map(),
              o = {
                all: function (e) {
                  let t = [];
                  if ("children" in e) {
                    let n = e.children,
                      r = -1;
                    for (; ++r < n.length; ) {
                      let i = o.one(n[r], e);
                      if (i) {
                        if (
                          r &&
                          "break" === n[r - 1].type &&
                          (Array.isArray(i) ||
                            "text" !== i.type ||
                            (i.value = w(i.value)),
                          !Array.isArray(i) && "element" === i.type)
                        ) {
                          let e = i.children[0];
                          e && "text" === e.type && (e.value = w(e.value));
                        }
                        Array.isArray(i) ? t.push(...i) : t.push(i);
                      }
                    }
                  }
                  return t;
                },
                applyData: _,
                definitionById: r,
                footnoteById: a,
                footnoteCounts: new Map(),
                footnoteOrder: [],
                handlers: { ...m, ...n.handlers },
                one: function (e, t) {
                  let n = e.type,
                    r = o.handlers[n];
                  if (h.call(o.handlers, n) && r) return r(o, e, t);
                  if (
                    o.options.passThrough &&
                    o.options.passThrough.includes(n)
                  ) {
                    if ("children" in e) {
                      let { children: t, ...n } = e,
                        r = (0, i.ZP)(n);
                      return (r.children = o.all(e)), r;
                    }
                    return (0, i.ZP)(e);
                  }
                  return (
                    o.options.unknownHandler ||
                    function (e, t) {
                      let n = t.data || {},
                        r =
                          "value" in t &&
                          !(h.call(n, "hProperties") || h.call(n, "hChildren"))
                            ? { type: "text", value: t.value }
                            : {
                                type: "element",
                                tagName: "div",
                                properties: {},
                                children: e.all(t),
                              };
                      return e.patch(t, r), e.applyData(t, r);
                    }
                  )(o, e, t);
                },
                options: n,
                patch: y,
                wrap: v,
              };
            return (
              (0, c.Vn)(e, function (e) {
                if (
                  "definition" === e.type ||
                  "footnoteDefinition" === e.type
                ) {
                  let t = "definition" === e.type ? r : a,
                    n = String(e.identifier).toUpperCase();
                  t.has(n) || t.set(n, e);
                }
              }),
              o
            );
          })(e, t),
          a = n.one(e, void 0),
          u = (function (e) {
            let t =
                "string" == typeof e.options.clobberPrefix
                  ? e.options.clobberPrefix
                  : "user-content-",
              n = e.options.footnoteBackContent || l,
              r = e.options.footnoteBackLabel || s,
              a = e.options.footnoteLabel || "Footnotes",
              c = e.options.footnoteLabelTagName || "h2",
              u = e.options.footnoteLabelProperties || {
                className: ["sr-only"],
              },
              d = [],
              f = -1;
            for (; ++f < e.footnoteOrder.length; ) {
              let i = e.footnoteById.get(e.footnoteOrder[f]);
              if (!i) continue;
              let a = e.all(i),
                l = String(i.identifier).toUpperCase(),
                s = o(l.toLowerCase()),
                c = 0,
                u = [],
                p = e.footnoteCounts.get(l);
              for (; void 0 !== p && ++c <= p; ) {
                u.length > 0 && u.push({ type: "text", value: " " });
                let e = "string" == typeof n ? n : n(f, c);
                "string" == typeof e && (e = { type: "text", value: e }),
                  u.push({
                    type: "element",
                    tagName: "a",
                    properties: {
                      href: "#" + t + "fnref-" + s + (c > 1 ? "-" + c : ""),
                      dataFootnoteBackref: "",
                      ariaLabel: "string" == typeof r ? r : r(f, c),
                      className: ["data-footnote-backref"],
                    },
                    children: Array.isArray(e) ? e : [e],
                  });
              }
              let m = a[a.length - 1];
              if (m && "element" === m.type && "p" === m.tagName) {
                let e = m.children[m.children.length - 1];
                e && "text" === e.type
                  ? (e.value += " ")
                  : m.children.push({ type: "text", value: " " }),
                  m.children.push(...u);
              } else a.push(...u);
              let g = {
                type: "element",
                tagName: "li",
                properties: { id: t + "fn-" + s },
                children: e.wrap(a, !0),
              };
              e.patch(i, g), d.push(g);
            }
            if (0 !== d.length)
              return {
                type: "element",
                tagName: "section",
                properties: { dataFootnotes: !0, className: ["footnotes"] },
                children: [
                  {
                    type: "element",
                    tagName: c,
                    properties: { ...(0, i.ZP)(u), id: "footnote-label" },
                    children: [{ type: "text", value: a }],
                  },
                  { type: "text", value: "\n" },
                  {
                    type: "element",
                    tagName: "ol",
                    properties: {},
                    children: e.wrap(d, !0),
                  },
                  { type: "text", value: "\n" },
                ],
              };
          })(n),
          d = Array.isArray(a)
            ? { type: "root", children: a }
            : a || { type: "root", children: [] };
        return (
          u &&
            ((0, r.ok)("children" in d),
            d.children.push({ type: "text", value: "\n" }, u)),
          d
        );
      }
      function x(e, t) {
        return e && "run" in e
          ? async function (n, r) {
              let i = k(n, { file: r, ...t });
              await e.run(i, r);
            }
          : function (n, r) {
              return k(n, { file: r, ...(t || e) });
            };
      }
    },
    342: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = String(e || "").trim();
        return t ? t.split(/[ \t\n\r\f]+/g) : [];
      }
      function i(e) {
        return e.join(" ").trim();
      }
      n.d(t, {
        P: function () {
          return i;
        },
        Q: function () {
          return r;
        },
      });
    },
    9875: function (e, t, n) {
      "use strict";
      function r(e) {
        if (e) throw e;
      }
      n.d(t, {
        l: function () {
          return _;
        },
      });
      var i = n(4470),
        a = n(4345);
      function o(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          !(Symbol.toStringTag in e) &&
          !(Symbol.iterator in e)
        );
      }
      var l = n(2013);
      let s = {
        basename: function (e, t) {
          let n;
          if (void 0 !== t && "string" != typeof t)
            throw TypeError('"ext" argument must be a string');
          c(e);
          let r = 0,
            i = -1,
            a = e.length;
          if (void 0 === t || 0 === t.length || t.length > e.length) {
            for (; a--; )
              if (47 === e.codePointAt(a)) {
                if (n) {
                  r = a + 1;
                  break;
                }
              } else i < 0 && ((n = !0), (i = a + 1));
            return i < 0 ? "" : e.slice(r, i);
          }
          if (t === e) return "";
          let o = -1,
            l = t.length - 1;
          for (; a--; )
            if (47 === e.codePointAt(a)) {
              if (n) {
                r = a + 1;
                break;
              }
            } else
              o < 0 && ((n = !0), (o = a + 1)),
                l > -1 &&
                  (e.codePointAt(a) === t.codePointAt(l--)
                    ? l < 0 && (i = a)
                    : ((l = -1), (i = o)));
          return r === i ? (i = o) : i < 0 && (i = e.length), e.slice(r, i);
        },
        dirname: function (e) {
          let t;
          if ((c(e), 0 === e.length)) return ".";
          let n = -1,
            r = e.length;
          for (; --r; )
            if (47 === e.codePointAt(r)) {
              if (t) {
                n = r;
                break;
              }
            } else t || (t = !0);
          return n < 0
            ? 47 === e.codePointAt(0)
              ? "/"
              : "."
            : 1 === n && 47 === e.codePointAt(0)
              ? "//"
              : e.slice(0, n);
        },
        extname: function (e) {
          let t;
          c(e);
          let n = e.length,
            r = -1,
            i = 0,
            a = -1,
            o = 0;
          for (; n--; ) {
            let l = e.codePointAt(n);
            if (47 === l) {
              if (t) {
                i = n + 1;
                break;
              }
              continue;
            }
            r < 0 && ((t = !0), (r = n + 1)),
              46 === l
                ? a < 0
                  ? (a = n)
                  : 1 !== o && (o = 1)
                : a > -1 && (o = -1);
          }
          return a < 0 ||
            r < 0 ||
            0 === o ||
            (1 === o && a === r - 1 && a === i + 1)
            ? ""
            : e.slice(a, r);
        },
        join: function (...e) {
          let t,
            n = -1;
          for (; ++n < e.length; )
            c(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
          return void 0 === t
            ? "."
            : (function (e) {
                c(e);
                let t = 47 === e.codePointAt(0),
                  n = (function (e, t) {
                    let n,
                      r,
                      i = "",
                      a = 0,
                      o = -1,
                      l = 0,
                      s = -1;
                    for (; ++s <= e.length; ) {
                      if (s < e.length) n = e.codePointAt(s);
                      else if (47 === n) break;
                      else n = 47;
                      if (47 === n) {
                        if (o === s - 1 || 1 === l);
                        else if (o !== s - 1 && 2 === l) {
                          if (
                            i.length < 2 ||
                            2 !== a ||
                            46 !== i.codePointAt(i.length - 1) ||
                            46 !== i.codePointAt(i.length - 2)
                          ) {
                            if (i.length > 2) {
                              if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                r < 0
                                  ? ((i = ""), (a = 0))
                                  : (a =
                                      (i = i.slice(0, r)).length -
                                      1 -
                                      i.lastIndexOf("/")),
                                  (o = s),
                                  (l = 0);
                                continue;
                              }
                            } else if (i.length > 0) {
                              (i = ""), (a = 0), (o = s), (l = 0);
                              continue;
                            }
                          }
                          t && ((i = i.length > 0 ? i + "/.." : ".."), (a = 2));
                        } else
                          i.length > 0
                            ? (i += "/" + e.slice(o + 1, s))
                            : (i = e.slice(o + 1, s)),
                            (a = s - o - 1);
                        (o = s), (l = 0);
                      } else 46 === n && l > -1 ? l++ : (l = -1);
                    }
                    return i;
                  })(e, !t);
                return (
                  0 !== n.length || t || (n = "."),
                  n.length > 0 &&
                    47 === e.codePointAt(e.length - 1) &&
                    (n += "/"),
                  t ? "/" + n : n
                );
              })(t);
        },
        sep: "/",
      };
      function c(e) {
        if ("string" != typeof e)
          throw TypeError(
            "Path must be a string. Received " + JSON.stringify(e),
          );
      }
      function u(e) {
        return !!(
          null !== e &&
          "object" == typeof e &&
          "href" in e &&
          e.href &&
          "protocol" in e &&
          e.protocol &&
          void 0 === e.auth
        );
      }
      let d = ["history", "path", "basename", "stem", "extname", "dirname"];
      class f {
        constructor(e) {
          let t, n;
          (t = e
            ? u(e)
              ? { path: e }
              : "string" == typeof e ||
                  (e &&
                    "object" == typeof e &&
                    "byteLength" in e &&
                    "byteOffset" in e)
                ? { value: e }
                : e
            : {}),
            (this.cwd = "/"),
            (this.data = {}),
            (this.history = []),
            (this.messages = []),
            this.value,
            this.map,
            this.result,
            this.stored;
          let r = -1;
          for (; ++r < d.length; ) {
            let e = d[r];
            e in t &&
              void 0 !== t[e] &&
              null !== t[e] &&
              (this[e] = "history" === e ? [...t[e]] : t[e]);
          }
          for (n in t) d.includes(n) || (this[n] = t[n]);
        }
        get basename() {
          return "string" == typeof this.path ? s.basename(this.path) : void 0;
        }
        set basename(e) {
          m(e, "basename"),
            p(e, "basename"),
            (this.path = s.join(this.dirname || "", e));
        }
        get dirname() {
          return "string" == typeof this.path ? s.dirname(this.path) : void 0;
        }
        set dirname(e) {
          g(this.basename, "dirname"),
            (this.path = s.join(e || "", this.basename));
        }
        get extname() {
          return "string" == typeof this.path ? s.extname(this.path) : void 0;
        }
        set extname(e) {
          if ((p(e, "extname"), g(this.dirname, "extname"), e)) {
            if (46 !== e.codePointAt(0))
              throw Error("`extname` must start with `.`");
            if (e.includes(".", 1))
              throw Error("`extname` cannot contain multiple dots");
          }
          this.path = s.join(this.dirname, this.stem + (e || ""));
        }
        get path() {
          return this.history[this.history.length - 1];
        }
        set path(e) {
          u(e) &&
            (e = (function (e) {
              if ("string" == typeof e) e = new URL(e);
              else if (!u(e)) {
                let t = TypeError(
                  'The "path" argument must be of type string or an instance of URL. Received `' +
                    e +
                    "`",
                );
                throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
              }
              if ("file:" !== e.protocol) {
                let e = TypeError("The URL must be of scheme file");
                throw ((e.code = "ERR_INVALID_URL_SCHEME"), e);
              }
              return (function (e) {
                if ("" !== e.hostname) {
                  let e = TypeError(
                    'File URL host must be "localhost" or empty on darwin',
                  );
                  throw ((e.code = "ERR_INVALID_FILE_URL_HOST"), e);
                }
                let t = e.pathname,
                  n = -1;
                for (; ++n < t.length; )
                  if (37 === t.codePointAt(n) && 50 === t.codePointAt(n + 1)) {
                    let e = t.codePointAt(n + 2);
                    if (70 === e || 102 === e) {
                      let e = TypeError(
                        "File URL path must not include encoded / characters",
                      );
                      throw ((e.code = "ERR_INVALID_FILE_URL_PATH"), e);
                    }
                  }
                return decodeURIComponent(t);
              })(e);
            })(e)),
            m(e, "path"),
            this.path !== e && this.history.push(e);
        }
        get stem() {
          return "string" == typeof this.path
            ? s.basename(this.path, this.extname)
            : void 0;
        }
        set stem(e) {
          m(e, "stem"),
            p(e, "stem"),
            (this.path = s.join(this.dirname || "", e + (this.extname || "")));
        }
        fail(e, t, n) {
          let r = this.message(e, t, n);
          throw ((r.fatal = !0), r);
        }
        info(e, t, n) {
          let r = this.message(e, t, n);
          return (r.fatal = void 0), r;
        }
        message(e, t, n) {
          let r = new l.$(e, t, n);
          return (
            this.path &&
              ((r.name = this.path + ":" + r.name), (r.file = this.path)),
            (r.fatal = !1),
            this.messages.push(r),
            r
          );
        }
        toString(e) {
          return void 0 === this.value
            ? ""
            : "string" == typeof this.value
              ? this.value
              : new TextDecoder(e || void 0).decode(this.value);
        }
      }
      function p(e, t) {
        if (e && e.includes(s.sep))
          throw Error(
            "`" + t + "` cannot be a path: did not expect `" + s.sep + "`",
          );
      }
      function m(e, t) {
        if (!e) throw Error("`" + t + "` cannot be empty");
      }
      function g(e, t) {
        if (!e)
          throw Error("Setting `" + t + "` requires `path` to be set too");
      }
      let h = function (e) {
          let t = this.constructor.prototype,
            n = t[e],
            r = function () {
              return n.apply(r, arguments);
            };
          for (let e of (Object.setPrototypeOf(r, t),
          Object.getOwnPropertyNames(n))) {
            let t = Object.getOwnPropertyDescriptor(n, e);
            t && Object.defineProperty(r, e, t);
          }
          return r;
        },
        b = {}.hasOwnProperty;
      class y extends h {
        constructor() {
          super("copy"),
            (this.Compiler = void 0),
            (this.Parser = void 0),
            (this.attachers = []),
            (this.compiler = void 0),
            (this.freezeIndex = -1),
            (this.frozen = void 0),
            (this.namespace = {}),
            (this.parser = void 0),
            (this.transformers = (function () {
              let e = [],
                t = {
                  run: function (...t) {
                    let n = -1,
                      r = t.pop();
                    if ("function" != typeof r)
                      throw TypeError(
                        "Expected function as last argument, not " + r,
                      );
                    (function i(a, ...o) {
                      let l = e[++n],
                        s = -1;
                      if (a) {
                        r(a);
                        return;
                      }
                      for (; ++s < t.length; )
                        (null === o[s] || void 0 === o[s]) && (o[s] = t[s]);
                      (t = o),
                        l
                          ? (function (e, t) {
                              let n;
                              return function (...t) {
                                let a;
                                let o = e.length > t.length;
                                o && t.push(r);
                                try {
                                  a = e.apply(this, t);
                                } catch (e) {
                                  if (o && n) throw e;
                                  return r(e);
                                }
                                o ||
                                  (a && a.then && "function" == typeof a.then
                                    ? a.then(i, r)
                                    : a instanceof Error
                                      ? r(a)
                                      : i(a));
                              };
                              function r(e, ...i) {
                                n || ((n = !0), t(e, ...i));
                              }
                              function i(e) {
                                r(null, e);
                              }
                            })(
                              l,
                              i,
                            )(...o)
                          : r(null, ...o);
                    })(null, ...t);
                  },
                  use: function (n) {
                    if ("function" != typeof n)
                      throw TypeError(
                        "Expected `middelware` to be a function, not " + n,
                      );
                    return e.push(n), t;
                  },
                };
              return t;
            })());
        }
        copy() {
          let e = new y(),
            t = -1;
          for (; ++t < this.attachers.length; ) {
            let n = this.attachers[t];
            e.use(...n);
          }
          return e.data(i(!0, {}, this.namespace)), e;
        }
        data(e, t) {
          return "string" == typeof e
            ? 2 == arguments.length
              ? (k("data", this.frozen), (this.namespace[e] = t), this)
              : (b.call(this.namespace, e) && this.namespace[e]) || void 0
            : e
              ? (k("data", this.frozen), (this.namespace = e), this)
              : this.namespace;
        }
        freeze() {
          if (this.frozen) return this;
          for (; ++this.freezeIndex < this.attachers.length; ) {
            let [e, ...t] = this.attachers[this.freezeIndex];
            if (!1 === t[0]) continue;
            !0 === t[0] && (t[0] = void 0);
            let n = e.call(this, ...t);
            "function" == typeof n && this.transformers.use(n);
          }
          return (
            (this.frozen = !0),
            (this.freezeIndex = Number.POSITIVE_INFINITY),
            this
          );
        }
        parse(e) {
          this.freeze();
          let t = D(e),
            n = this.parser || this.Parser;
          return v("parse", n), n(String(t), t);
        }
        process(e, t) {
          let n = this;
          return (
            this.freeze(),
            v("process", this.parser || this.Parser),
            w("process", this.compiler || this.Compiler),
            t ? r(void 0, t) : new Promise(r)
          );
          function r(r, i) {
            let o = D(e),
              l = n.parse(o);
            function s(e, n) {
              e || !n
                ? i(e)
                : r
                  ? r(n)
                  : ((0, a.ok)(t, "`done` is defined if `resolve` is not"),
                    t(void 0, n));
            }
            n.run(l, o, function (e, t, r) {
              if (e || !t || !r) return s(e);
              let i = n.stringify(t, r);
              "string" == typeof i ||
              (i &&
                "object" == typeof i &&
                "byteLength" in i &&
                "byteOffset" in i)
                ? (r.value = i)
                : (r.result = i),
                s(e, r);
            });
          }
        }
        processSync(e) {
          let t,
            n = !1;
          return (
            this.freeze(),
            v("processSync", this.parser || this.Parser),
            w("processSync", this.compiler || this.Compiler),
            this.process(e, function (e, i) {
              (n = !0), r(e), (t = i);
            }),
            E("processSync", "process", n),
            (0, a.ok)(t, "we either bailed on an error or have a tree"),
            t
          );
        }
        run(e, t, n) {
          x(e), this.freeze();
          let r = this.transformers;
          return (
            n || "function" != typeof t || ((n = t), (t = void 0)),
            n ? i(void 0, n) : new Promise(i)
          );
          function i(i, o) {
            (0, a.ok)(
              "function" != typeof t,
              "`file` can’t be a `done` anymore, we checked",
            );
            let l = D(t);
            r.run(e, l, function (t, r, l) {
              let s = r || e;
              t
                ? o(t)
                : i
                  ? i(s)
                  : ((0, a.ok)(n, "`done` is defined if `resolve` is not"),
                    n(void 0, s, l));
            });
          }
        }
        runSync(e, t) {
          let n,
            i = !1;
          return (
            this.run(e, t, function (e, t) {
              r(e), (n = t), (i = !0);
            }),
            E("runSync", "run", i),
            (0, a.ok)(n, "we either bailed on an error or have a tree"),
            n
          );
        }
        stringify(e, t) {
          this.freeze();
          let n = D(t),
            r = this.compiler || this.Compiler;
          return w("stringify", r), x(e), r(e, n);
        }
        use(e, ...t) {
          let n = this.attachers,
            r = this.namespace;
          if ((k("use", this.frozen), null == e));
          else if ("function" == typeof e) s(e, t);
          else if ("object" == typeof e) Array.isArray(e) ? l(e) : a(e);
          else throw TypeError("Expected usable value, not `" + e + "`");
          return this;
          function a(e) {
            if (!("plugins" in e) && !("settings" in e))
              throw Error(
                "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither",
              );
            l(e.plugins),
              e.settings && (r.settings = i(!0, r.settings, e.settings));
          }
          function l(e) {
            let t = -1;
            if (null == e);
            else if (Array.isArray(e))
              for (; ++t < e.length; )
                !(function (e) {
                  if ("function" == typeof e) s(e, []);
                  else if ("object" == typeof e) {
                    if (Array.isArray(e)) {
                      let [t, ...n] = e;
                      s(t, n);
                    } else a(e);
                  } else
                    throw TypeError("Expected usable value, not `" + e + "`");
                })(e[t]);
            else throw TypeError("Expected a list of plugins, not `" + e + "`");
          }
          function s(e, t) {
            let r = -1,
              a = -1;
            for (; ++r < n.length; )
              if (n[r][0] === e) {
                a = r;
                break;
              }
            if (-1 === a) n.push([e, ...t]);
            else if (t.length > 0) {
              let [r, ...l] = t,
                s = n[a][1];
              o(s) && o(r) && (r = i(!0, s, r)), (n[a] = [e, r, ...l]);
            }
          }
        }
      }
      let _ = new y().freeze();
      function v(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `parser`");
      }
      function w(e, t) {
        if ("function" != typeof t)
          throw TypeError("Cannot `" + e + "` without `compiler`");
      }
      function k(e, t) {
        if (t)
          throw Error(
            "Cannot call `" +
              e +
              "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.",
          );
      }
      function x(e) {
        if (!o(e) || "string" != typeof e.type)
          throw TypeError("Expected node, got `" + e + "`");
      }
      function E(e, t, n) {
        if (!n)
          throw Error("`" + e + "` finished async. Use `" + t + "` instead");
      }
      function D(e) {
        return e && "object" == typeof e && "message" in e && "messages" in e
          ? e
          : new f(e);
      }
    },
    6093: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return r;
        },
      });
      let r = function (e) {
        if (null == e) return a;
        if ("function" == typeof e) return i(e);
        if ("object" == typeof e)
          return Array.isArray(e)
            ? (function (e) {
                let t = [],
                  n = -1;
                for (; ++n < e.length; ) t[n] = r(e[n]);
                return i(function (...e) {
                  let n = -1;
                  for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0;
                  return !1;
                });
              })(e)
            : i(function (t) {
                let n;
                for (n in e) if (t[n] !== e[n]) return !1;
                return !0;
              });
        if ("string" == typeof e)
          return i(function (t) {
            return t && t.type === e;
          });
        throw Error("Expected function, string, or object as test");
      };
      function i(e) {
        return function (t, n, r) {
          var i;
          return !!(
            null !== (i = t) &&
            "object" == typeof i &&
            "type" in i &&
            e.call(this, t, "number" == typeof n ? n : void 0, r || void 0)
          );
        };
      }
      function a() {
        return !0;
      }
    },
    3980: function (e, t, n) {
      "use strict";
      n.d(t, {
        FK: function () {
          return o;
        },
        Pk: function () {
          return i;
        },
        rb: function () {
          return r;
        },
      });
      let r = a("end"),
        i = a("start");
      function a(e) {
        return function (t) {
          let n = (t && t.position && t.position[e]) || {};
          if (
            "number" == typeof n.line &&
            n.line > 0 &&
            "number" == typeof n.column &&
            n.column > 0
          )
            return {
              line: n.line,
              column: n.column,
              offset:
                "number" == typeof n.offset && n.offset > -1
                  ? n.offset
                  : void 0,
            };
        };
      }
      function o(e) {
        let t = i(e),
          n = r(e);
        if (t && n) return { start: t, end: n };
      }
    },
    6092: function (e, t, n) {
      "use strict";
      function r(e) {
        return e && "object" == typeof e
          ? "position" in e || "type" in e
            ? a(e.position)
            : "start" in e || "end" in e
              ? a(e)
              : "line" in e || "column" in e
                ? i(e)
                : ""
          : "";
      }
      function i(e) {
        return o(e && e.line) + ":" + o(e && e.column);
      }
      function a(e) {
        return i(e && e.start) + "-" + i(e && e.end);
      }
      function o(e) {
        return e && "number" == typeof e ? e : 1;
      }
      n.d(t, {
        y: function () {
          return r;
        },
      });
    },
    8718: function (e, t, n) {
      "use strict";
      n.d(t, {
        BK: function () {
          return a;
        },
        AM: function () {
          return o;
        },
        S4: function () {
          return l;
        },
      });
      var r = n(6093);
      let i = [],
        a = !1,
        o = "skip";
      function l(e, t, n, l) {
        let s;
        "function" == typeof t && "function" != typeof n
          ? ((l = n), (n = t))
          : (s = t);
        let c = (0, r.O)(s),
          u = l ? -1 : 1;
        (function e(r, s, d) {
          let f = r && "object" == typeof r ? r : {};
          if ("string" == typeof f.type) {
            let e =
              "string" == typeof f.tagName
                ? f.tagName
                : "string" == typeof f.name
                  ? f.name
                  : void 0;
            Object.defineProperty(p, "name", {
              value: "node (" + r.type + (e ? "<" + e + ">" : "") + ")",
            });
          }
          return p;
          function p() {
            var f;
            let p,
              m,
              g,
              h = i;
            if (
              (!t || c(r, s, d[d.length - 1] || void 0)) &&
              (h = Array.isArray((f = n(r, d)))
                ? f
                : "number" == typeof f
                  ? [!0, f]
                  : null == f
                    ? i
                    : [f])[0] === a
            )
              return h;
            if ("children" in r && r.children && r.children && h[0] !== o)
              for (
                m = (l ? r.children.length : -1) + u, g = d.concat(r);
                m > -1 && m < r.children.length;

              ) {
                if ((p = e(r.children[m], m, g)())[0] === a) return p;
                m = "number" == typeof p[1] ? p[1] : m + u;
              }
            return h;
          }
        })(e, void 0, [])();
      }
    },
    1623: function (e, t, n) {
      "use strict";
      n.d(t, {
        Vn: function () {
          return i;
        },
      });
      var r = n(8718);
      function i(e, t, n, i) {
        let a, o, l;
        "function" == typeof t && "function" != typeof n
          ? ((o = void 0), (l = t), (a = n))
          : ((o = t), (l = n), (a = i)),
          (0, r.S4)(
            e,
            o,
            function (e, t) {
              let n = t[t.length - 1],
                r = n ? n.children.indexOf(e) : void 0;
              return l(e, r, n);
            },
            a,
          );
      }
    },
    2013: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return i;
        },
      });
      var r = n(6092);
      class i extends Error {
        constructor(e, t, n) {
          super(), "string" == typeof t && ((n = t), (t = void 0));
          let i = "",
            a = {},
            o = !1;
          if (
            (t &&
              (a =
                "line" in t && "column" in t
                  ? { place: t }
                  : "start" in t && "end" in t
                    ? { place: t }
                    : "type" in t
                      ? { ancestors: [t], place: t.position }
                      : { ...t }),
            "string" == typeof e
              ? (i = e)
              : !a.cause && e && ((o = !0), (i = e.message), (a.cause = e)),
            !a.ruleId && !a.source && "string" == typeof n)
          ) {
            let e = n.indexOf(":");
            -1 === e
              ? (a.ruleId = n)
              : ((a.source = n.slice(0, e)), (a.ruleId = n.slice(e + 1)));
          }
          if (!a.place && a.ancestors && a.ancestors) {
            let e = a.ancestors[a.ancestors.length - 1];
            e && (a.place = e.position);
          }
          let l = a.place && "start" in a.place ? a.place.start : a.place;
          (this.ancestors = a.ancestors || void 0),
            (this.cause = a.cause || void 0),
            (this.column = l ? l.column : void 0),
            (this.fatal = void 0),
            this.file,
            (this.message = i),
            (this.line = l ? l.line : void 0),
            (this.name = (0, r.y)(a.place) || "1:1"),
            (this.place = a.place || void 0),
            (this.reason = this.message),
            (this.ruleId = a.ruleId || void 0),
            (this.source = a.source || void 0),
            (this.stack =
              o && a.cause && "string" == typeof a.cause.stack
                ? a.cause.stack
                : ""),
            this.actual,
            this.expected,
            this.note,
            this.url;
        }
      }
      (i.prototype.file = ""),
        (i.prototype.name = ""),
        (i.prototype.reason = ""),
        (i.prototype.message = ""),
        (i.prototype.stack = ""),
        (i.prototype.column = void 0),
        (i.prototype.line = void 0),
        (i.prototype.ancestors = void 0),
        (i.prototype.cause = void 0),
        (i.prototype.fatal = void 0),
        (i.prototype.place = void 0),
        (i.prototype.ruleId = void 0),
        (i.prototype.source = void 0);
    },
    611: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '["grinning","smiley","smile","grin","laughing","sweat_smile","joy","rofl","relaxed","blush","innocent","slightly_smiling_face","upside_down_face","wink","relieved","heart_eyes","smiling_face_with_three_hearts","kissing_heart","kissing","kissing_smiling_eyes","kissing_closed_eyes","yum","stuck_out_tongue","stuck_out_tongue_closed_eyes","stuck_out_tongue_winking_eye","zany","raised_eyebrow","monocle","nerd_face","sunglasses","star_struck","partying","smirk","unamused","disappointed","pensive","worried","confused","slightly_frowning_face","frowning_face","persevere","confounded","tired_face","weary","pleading","cry","sob","triumph","angry","rage","symbols_over_mouth","exploding_head","flushed","hot","cold","scream","fearful","cold_sweat","disappointed_relieved","sweat","hugs","thinking","hand_over_mouth","shushing","lying_face","no_mouth","neutral_face","expressionless","grimacing","roll_eyes","hushed","frowning","anguished","open_mouth","astonished","sleeping","drooling_face","sleepy","dizzy_face","zipper_mouth_face","woozy","nauseated_face","vomiting","sneezing_face","mask","face_with_thermometer","face_with_head_bandage","money_mouth_face","cowboy_hat_face","smiling_imp","imp","japanese_ogre","japanese_goblin","clown_face","poop","ghost","skull","skull_and_crossbones","alien","space_invader","robot","jack_o_lantern","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","palms_up","open_hands","raised_hands","clap","handshake","+1","-1","facepunch","fist","fist_left","fist_right","crossed_fingers","v","love_you","metal","ok_hand","point_left","point_right","point_up","point_down","point_up_2","raised_hand","raised_back_of_hand","raised_hand_with_fingers_splayed","vulcan_salute","wave","call_me_hand","muscle","fu","writing_hand","pray","foot","leg","ring","lipstick","kiss","lips","tooth","tongue","ear","nose","footprints","eye","eyes","brain","speaking_head","bust_in_silhouette","busts_in_silhouette","baby","girl","child","boy","woman","adult","man","blonde_woman","blonde_man","bearded_person","older_woman","older_adult","older_man","man_with_gua_pi_mao","woman_with_headscarf","woman_with_turban","man_with_turban","policewoman","policeman","construction_worker_woman","construction_worker_man","guardswoman","guardsman","female_detective","male_detective","woman_health_worker","man_health_worker","woman_farmer","man_farmer","woman_cook","man_cook","woman_student","man_student","woman_singer","man_singer","woman_teacher","man_teacher","woman_factory_worker","man_factory_worker","woman_technologist","man_technologist","woman_office_worker","man_office_worker","woman_mechanic","man_mechanic","woman_scientist","man_scientist","woman_artist","man_artist","woman_firefighter","man_firefighter","woman_pilot","man_pilot","woman_astronaut","man_astronaut","woman_judge","man_judge","bride_with_veil","man_in_tuxedo","princess","prince","woman_superhero","man_superhero","woman_supervillain","man_supervillain","mrs_claus","santa","sorceress","wizard","woman_elf","man_elf","woman_vampire","man_vampire","woman_zombie","man_zombie","woman_genie","man_genie","mermaid","merman","woman_fairy","man_fairy","angel","pregnant_woman","breastfeeding","bowing_woman","bowing_man","tipping_hand_woman","tipping_hand_man","no_good_woman","no_good_man","ok_woman","ok_man","raising_hand_woman","raising_hand_man","woman_facepalming","man_facepalming","woman_shrugging","man_shrugging","pouting_woman","pouting_man","frowning_woman","frowning_man","haircut_woman","haircut_man","massage_woman","massage_man","woman_in_steamy_room","man_in_steamy_room","nail_care","selfie","dancer","man_dancing","dancing_women","dancing_men","business_suit_levitating","walking_woman","walking_man","running_woman","running_man","couple","two_women_holding_hands","two_men_holding_hands","couple_with_heart_woman_man","couple_with_heart_woman_woman","couple_with_heart_man_man","couplekiss_man_woman","couplekiss_woman_woman","couplekiss_man_man","family_man_woman_boy","family_man_woman_girl","family_man_woman_girl_boy","family_man_woman_boy_boy","family_man_woman_girl_girl","family_woman_woman_boy","family_woman_woman_girl","family_woman_woman_girl_boy","family_woman_woman_boy_boy","family_woman_woman_girl_girl","family_man_man_boy","family_man_man_girl","family_man_man_girl_boy","family_man_man_boy_boy","family_man_man_girl_girl","family_woman_boy","family_woman_girl","family_woman_girl_boy","family_woman_boy_boy","family_woman_girl_girl","family_man_boy","family_man_girl","family_man_girl_boy","family_man_boy_boy","family_man_girl_girl","yarn","thread","coat","labcoat","womans_clothes","tshirt","jeans","necktie","dress","bikini","kimono","flat_shoe","high_heel","sandal","boot","mans_shoe","athletic_shoe","hiking_boot","socks","gloves","scarf","tophat","billed_hat","womans_hat","mortar_board","rescue_worker_helmet","crown","pouch","purse","handbag","briefcase","school_satchel","luggage","eyeglasses","dark_sunglasses","goggles","closed_umbrella","dog","cat","mouse","hamster","rabbit","fox_face","bear","panda_face","koala","tiger","lion","cow","pig","pig_nose","frog","monkey_face","see_no_evil","hear_no_evil","speak_no_evil","monkey","chicken","penguin","bird","baby_chick","hatching_chick","hatched_chick","duck","eagle","owl","bat","wolf","boar","horse","unicorn","honeybee","bug","butterfly","snail","shell","beetle","ant","mosquito","grasshopper","spider","spider_web","scorpion","turtle","snake","lizard","t-rex","sauropod","octopus","squid","shrimp","lobster","crab","blowfish","tropical_fish","fish","dolphin","whale","whale2","shark","crocodile","tiger2","leopard","zebra","gorilla","elephant","hippopotamus","rhinoceros","dromedary_camel","giraffe","kangaroo","camel","water_buffalo","ox","cow2","racehorse","pig2","ram","sheep","llama","goat","deer","dog2","poodle","cat2","rooster","turkey","peacock","parrot","swan","dove","rabbit2","raccoon","badger","rat","mouse2","chipmunk","hedgehog","paw_prints","dragon","dragon_face","cactus","christmas_tree","evergreen_tree","deciduous_tree","palm_tree","seedling","herb","shamrock","four_leaf_clover","bamboo","tanabata_tree","leaves","fallen_leaf","maple_leaf","ear_of_rice","hibiscus","sunflower","rose","wilted_flower","tulip","blossom","cherry_blossom","bouquet","mushroom","earth_americas","earth_africa","earth_asia","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","new_moon","waxing_crescent_moon","first_quarter_moon","waxing_gibbous_moon","new_moon_with_face","full_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","sun_with_face","crescent_moon","star","star2","dizzy","sparkles","comet","sunny","sun_behind_small_cloud","partly_sunny","sun_behind_large_cloud","sun_behind_rain_cloud","cloud","cloud_with_rain","cloud_with_lightning_and_rain","cloud_with_lightning","zap","fire","boom","snowflake","cloud_with_snow","snowman","snowman_with_snow","wind_face","dash","tornado","fog","open_umbrella","umbrella","droplet","sweat_drops","ocean","green_apple","apple","pear","tangerine","lemon","banana","watermelon","grapes","strawberry","melon","cherries","peach","mango","pineapple","coconut","kiwi_fruit","tomato","eggplant","avocado","broccoli","leafy_greens","cucumber","hot_pepper","corn","carrot","potato","sweet_potato","croissant","bagel","bread","baguette_bread","pretzel","cheese","egg","fried_egg","pancakes","bacon","steak","poultry_leg","meat_on_bone","bone","hotdog","hamburger","fries","pizza","sandwich","stuffed_flatbread","taco","burrito","green_salad","shallow_pan_of_food","canned_food","spaghetti","ramen","stew","curry","sushi","bento","fried_shrimp","rice_ball","rice","rice_cracker","fish_cake","fortune_cookie","moon_cake","oden","dango","shaved_ice","ice_cream","icecream","pie","cupcake","cake","birthday","custard","lollipop","candy","chocolate_bar","popcorn","doughnut","dumpling","cookie","chestnut","peanuts","honey_pot","milk_glass","baby_bottle","coffee","tea","cup_with_straw","sake","beer","beers","clinking_glasses","wine_glass","tumbler_glass","cocktail","tropical_drink","champagne","spoon","fork_and_knife","plate_with_cutlery","bowl_with_spoon","takeout_box","chopsticks","salt","soccer","basketball","football","baseball","softball","tennis","volleyball","rugby_football","flying_disc","8ball","golf","golfing_woman","golfing_man","ping_pong","badminton","goal_net","ice_hockey","field_hockey","lacrosse","cricket","ski","skier","snowboarder","person_fencing","women_wrestling","men_wrestling","woman_cartwheeling","man_cartwheeling","woman_playing_handball","man_playing_handball","ice_skate","curling_stone","skateboard","sled","bow_and_arrow","fishing_pole_and_fish","boxing_glove","martial_arts_uniform","rowing_woman","rowing_man","climbing_woman","climbing_man","swimming_woman","swimming_man","woman_playing_water_polo","man_playing_water_polo","woman_in_lotus_position","man_in_lotus_position","surfing_woman","surfing_man","basketball_woman","basketball_man","weight_lifting_woman","weight_lifting_man","biking_woman","biking_man","mountain_biking_woman","mountain_biking_man","horse_racing","trophy","running_shirt_with_sash","medal_sports","medal_military","1st_place_medal","2nd_place_medal","3rd_place_medal","reminder_ribbon","rosette","ticket","tickets","performing_arts","art","circus_tent","woman_juggling","man_juggling","microphone","headphones","musical_score","musical_keyboard","drum","saxophone","trumpet","guitar","violin","clapper","video_game","dart","game_die","chess_pawn","slot_machine","jigsaw","bowling","red_car","taxi","blue_car","bus","trolleybus","racing_car","police_car","ambulance","fire_engine","minibus","truck","articulated_lorry","tractor","kick_scooter","motorcycle","bike","motor_scooter","rotating_light","oncoming_police_car","oncoming_bus","oncoming_automobile","oncoming_taxi","aerial_tramway","mountain_cableway","suspension_railway","railway_car","train","monorail","bullettrain_side","bullettrain_front","light_rail","mountain_railway","steam_locomotive","train2","metro","tram","station","flying_saucer","helicopter","small_airplane","airplane","flight_departure","flight_arrival","sailboat","motor_boat","speedboat","ferry","passenger_ship","rocket","artificial_satellite","seat","canoe","anchor","construction","fuelpump","busstop","vertical_traffic_light","traffic_light","ship","ferris_wheel","roller_coaster","carousel_horse","building_construction","foggy","tokyo_tower","factory","fountain","rice_scene","mountain","mountain_snow","mount_fuji","volcano","japan","camping","tent","national_park","motorway","railway_track","sunrise","sunrise_over_mountains","desert","beach_umbrella","desert_island","city_sunrise","city_sunset","cityscape","night_with_stars","bridge_at_night","milky_way","stars","sparkler","fireworks","rainbow","houses","european_castle","japanese_castle","stadium","statue_of_liberty","house","house_with_garden","derelict_house","office","department_store","post_office","european_post_office","hospital","bank","hotel","convenience_store","school","love_hotel","wedding","classical_building","church","mosque","synagogue","kaaba","shinto_shrine","watch","iphone","calling","computer","keyboard","desktop_computer","printer","computer_mouse","trackball","joystick","clamp","minidisc","floppy_disk","cd","dvd","vhs","camera","camera_flash","video_camera","movie_camera","film_projector","film_strip","telephone_receiver","phone","pager","fax","tv","radio","studio_microphone","level_slider","control_knobs","compass","stopwatch","timer_clock","alarm_clock","mantelpiece_clock","hourglass_flowing_sand","hourglass","satellite","battery","electric_plug","bulb","flashlight","candle","fire_extinguisher","wastebasket","oil_drum","money_with_wings","dollar","yen","euro","pound","moneybag","credit_card","gem","balance_scale","toolbox","wrench","hammer","hammer_and_pick","hammer_and_wrench","pick","nut_and_bolt","gear","brick","chains","magnet","gun","bomb","firecracker","hocho","dagger","crossed_swords","shield","smoking","coffin","funeral_urn","amphora","crystal_ball","prayer_beads","nazar_amulet","barber","alembic","telescope","microscope","hole","pill","syringe","dna","microbe","petri_dish","test_tube","thermometer","broom","basket","toilet_paper","label","bookmark","toilet","shower","bathtub","bath","soap","sponge","lotion_bottle","key","old_key","couch_and_lamp","sleeping_bed","bed","door","bellhop_bell","teddy_bear","framed_picture","world_map","parasol_on_ground","moyai","shopping","shopping_cart","balloon","flags","ribbon","gift","confetti_ball","tada","dolls","wind_chime","crossed_flags","izakaya_lantern","red_envelope","email","envelope_with_arrow","incoming_envelope","e-mail","love_letter","postbox","mailbox_closed","mailbox","mailbox_with_mail","mailbox_with_no_mail","package","postal_horn","inbox_tray","outbox_tray","scroll","page_with_curl","bookmark_tabs","receipt","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","page_facing_up","date","calendar","spiral_calendar","card_index","card_file_box","ballot_box","file_cabinet","clipboard","spiral_notepad","file_folder","open_file_folder","card_index_dividers","newspaper_roll","newspaper","notebook","closed_book","green_book","blue_book","orange_book","notebook_with_decorative_cover","ledger","books","open_book","safety_pin","link","paperclip","paperclips","scissors","triangular_ruler","straight_ruler","abacus","pushpin","round_pushpin","closed_lock_with_key","lock","unlock","lock_with_ink_pen","pen","fountain_pen","black_nib","memo","pencil2","crayon","paintbrush","mag","mag_right","heart","orange_heart","yellow_heart","green_heart","blue_heart","purple_heart","black_heart","broken_heart","heavy_heart_exclamation","two_hearts","revolving_hearts","heartbeat","heartpulse","sparkling_heart","cupid","gift_heart","heart_decoration","peace_symbol","latin_cross","star_and_crescent","om","wheel_of_dharma","star_of_david","six_pointed_star","menorah","yin_yang","orthodox_cross","place_of_worship","ophiuchus","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","id","atom_symbol","u7a7a","u5272","radioactive","biohazard","mobile_phone_off","vibration_mode","u6709","u7121","u7533","u55b6","u6708","eight_pointed_black_star","vs","accept","white_flower","ideograph_advantage","secret","congratulations","u5408","u6e80","u7981","a","b","ab","cl","o2","sos","no_entry","name_badge","no_entry_sign","x","o","stop_sign","anger","hotsprings","no_pedestrians","do_not_litter","no_bicycles","non-potable_water","underage","no_mobile_phones","exclamation","grey_exclamation","question","grey_question","bangbang","interrobang","100","low_brightness","high_brightness","trident","fleur_de_lis","part_alternation_mark","warning","children_crossing","beginner","recycle","u6307","chart","sparkle","eight_spoked_asterisk","negative_squared_cross_mark","white_check_mark","diamond_shape_with_a_dot_inside","cyclone","loop","globe_with_meridians","m","atm","zzz","sa","passport_control","customs","baggage_claim","left_luggage","wheelchair","no_smoking","wc","parking","potable_water","mens","womens","baby_symbol","restroom","put_litter_in_its_place","cinema","signal_strength","koko","ng","ok","up","cool","new","free","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","asterisk","1234","eject_button","arrow_forward","pause_button","next_track_button","stop_button","record_button","play_or_pause_button","previous_track_button","fast_forward","rewind","twisted_rightwards_arrows","repeat","repeat_one","arrow_backward","arrow_up_small","arrow_down_small","arrow_double_up","arrow_double_down","arrow_right","arrow_left","arrow_up","arrow_down","arrow_upper_right","arrow_lower_right","arrow_lower_left","arrow_upper_left","arrow_up_down","left_right_arrow","arrows_counterclockwise","arrow_right_hook","leftwards_arrow_with_hook","arrow_heading_up","arrow_heading_down","hash","information_source","abc","abcd","capital_abcd","symbols","musical_note","notes","wavy_dash","curly_loop","heavy_check_mark","arrows_clockwise","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","heavy_multiplication_x","infinity","heavy_dollar_sign","currency_exchange","copyright","registered","tm","end","back","on","top","soon","ballot_box_with_check","radio_button","white_circle","black_circle","red_circle","large_blue_circle","small_orange_diamond","small_blue_diamond","large_orange_diamond","large_blue_diamond","small_red_triangle","black_small_square","white_small_square","black_large_square","white_large_square","small_red_triangle_down","black_medium_square","white_medium_square","black_medium_small_square","white_medium_small_square","black_square_button","white_square_button","speaker","sound","loud_sound","mute","mega","loudspeaker","bell","no_bell","black_joker","mahjong","spades","clubs","hearts","diamonds","flower_playing_cards","thought_balloon","right_anger_bubble","speech_balloon","left_speech_bubble","clock1","clock2","clock3","clock4","clock5","clock6","clock7","clock8","clock9","clock10","clock11","clock12","clock130","clock230","clock330","clock430","clock530","clock630","clock730","clock830","clock930","clock1030","clock1130","clock1230","white_flag","black_flag","pirate_flag","checkered_flag","triangular_flag_on_post","rainbow_flag","united_nations","afghanistan","aland_islands","albania","algeria","american_samoa","andorra","angola","anguilla","antarctica","antigua_barbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","caribbean_netherlands","bosnia_herzegovina","botswana","brazil","british_indian_ocean_territory","british_virgin_islands","brunei","bulgaria","burkina_faso","burundi","cape_verde","cambodia","cameroon","canada","canary_islands","cayman_islands","central_african_republic","chad","chile","cn","christmas_island","cocos_islands","colombia","comoros","congo_brazzaville","congo_kinshasa","cook_islands","costa_rica","croatia","cuba","curacao","cyprus","czech_republic","denmark","djibouti","dominica","dominican_republic","ecuador","egypt","el_salvador","equatorial_guinea","eritrea","estonia","ethiopia","eu","falkland_islands","faroe_islands","fiji","finland","fr","french_guiana","french_polynesia","french_southern_territories","gabon","gambia","georgia","de","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guinea_bissau","guyana","haiti","honduras","hong_kong","hungary","iceland","india","indonesia","iran","iraq","ireland","isle_of_man","israel","it","cote_divoire","jamaica","jp","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macau","macedonia","madagascar","malawi","malaysia","maldives","mali","malta","marshall_islands","martinique","mauritania","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","new_caledonia","new_zealand","nicaragua","niger","nigeria","niue","norfolk_island","northern_mariana_islands","north_korea","norway","oman","pakistan","palau","palestinian_territories","panama","papua_new_guinea","paraguay","peru","philippines","pitcairn_islands","poland","portugal","puerto_rico","qatar","reunion","romania","ru","rwanda","st_barthelemy","st_helena","st_kitts_nevis","st_lucia","st_pierre_miquelon","st_vincent_grenadines","samoa","san_marino","sao_tome_principe","saudi_arabia","senegal","serbia","seychelles","sierra_leone","singapore","sint_maarten","slovakia","slovenia","solomon_islands","somalia","south_africa","south_georgia_south_sandwich_islands","kr","south_sudan","es","sri_lanka","sudan","suriname","swaziland","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","timor_leste","togo","tokelau","tonga","trinidad_tobago","tunisia","tr","turkmenistan","turks_caicos_islands","tuvalu","uganda","ukraine","united_arab_emirates","uk","england","scotland","wales","us","us_virgin_islands","uruguay","uzbekistan","vanuatu","vatican_city","venezuela","vietnam","wallis_futuna","western_sahara","yemen","zambia","zimbabwe"]',
      );
    },
  },
]);
