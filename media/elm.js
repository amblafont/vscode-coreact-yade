(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $author$project$Modes$DefaultMode = {$: 'DefaultMode'};
var $author$project$Msg$Standard = {$: 'Standard'};
var $author$project$GraphDefs$coqProofTexCommand = 'coqproof';
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $author$project$Polygraph$Graph = function (a) {
	return {$: 'Graph', a: a};
};
var $elm_community$intdict$IntDict$Empty = {$: 'Empty'};
var $elm_community$intdict$IntDict$empty = $elm_community$intdict$IntDict$Empty;
var $author$project$Polygraph$empty = $author$project$Polygraph$Graph($elm_community$intdict$IntDict$empty);
var $author$project$Model$createModel = function (sizeGrid) {
	var g = $author$project$Polygraph$empty;
	return {
		autoSave: false,
		defaultGridSize: sizeGrid,
		fileName: 'graph.json',
		hideGrid: false,
		history: _List_Nil,
		latexPreamble: '\\newcommand{\\' + ($author$project$GraphDefs$coqProofTexCommand + '}[1]{\\checkmark}'),
		mode: $author$project$Modes$DefaultMode,
		mouseOnCanvas: false,
		mousePos: _Utils_Tuple2(0, 0),
		quickInput: '',
		scenario: $author$project$Msg$Standard,
		showOverlayHelp: false,
		specialKeys: {alt: false, ctrl: false, shift: false},
		squareModeProof: false,
		statusMsg: '',
		tabs: _List_fromArray(
			[
				{active: true, graph: g, sizeGrid: sizeGrid, title: '1'}
			])
	};
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Browser$element = _Browser_element;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Msg$AppliedProof = function (a) {
	return {$: 'AppliedProof', a: a};
};
var $author$project$Msg$Clear = function (a) {
	return {$: 'Clear', a: a};
};
var $author$project$Msg$CopyGraph = {$: 'CopyGraph'};
var $author$project$Msg$Do = function (a) {
	return {$: 'Do', a: a};
};
var $author$project$Msg$FileName = function (a) {
	return {$: 'FileName', a: a};
};
var $author$project$Msg$FindReplace = function (a) {
	return {$: 'FindReplace', a: a};
};
var $author$project$Msg$KeyChanged = F3(
	function (a, b, c) {
		return {$: 'KeyChanged', a: a, b: b, c: c};
	});
var $author$project$Msg$MinuteTick = {$: 'MinuteTick'};
var $author$project$Msg$MouseClick = {$: 'MouseClick'};
var $author$project$Msg$MouseMove = function (a) {
	return {$: 'MouseMove', a: a};
};
var $author$project$Msg$QuickInput = F2(
	function (a, b) {
		return {$: 'QuickInput', a: a, b: b};
	});
var $author$project$Msg$RenameTab = function (a) {
	return {$: 'RenameTab', a: a};
};
var $author$project$Msg$SetFirstTabEquation = function (a) {
	return {$: 'SetFirstTabEquation', a: a};
};
var $author$project$Msg$SimpleMsg = function (a) {
	return {$: 'SimpleMsg', a: a};
};
var $author$project$Msg$Watch = {$: 'Watch'};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Main$appliedProof = _Platform_incomingPort(
	'appliedProof',
	A2(
		$elm$json$Json$Decode$andThen,
		function (statement) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (script) {
					return $elm$json$Json$Decode$succeed(
						{script: script, statement: statement});
				},
				A2($elm$json$Json$Decode$field, 'script', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'statement', $elm$json$Json$Decode$string)));
var $author$project$Main$autosaveTickMs = 60000;
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $author$project$Main$clear = _Platform_incomingPort(
	'clear',
	A2(
		$elm$json$Json$Decode$andThen,
		function (scenario) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (preamble) {
					return $elm$json$Json$Decode$succeed(
						{preamble: preamble, scenario: scenario});
				},
				A2($elm$json$Json$Decode$field, 'preamble', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'scenario', $elm$json$Json$Decode$string)));
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 'Every', a: a, b: b};
	});
var $elm$time$Time$State = F2(
	function (taggers, processes) {
		return {processes: processes, taggers: taggers};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$time$Time$init = $elm$core$Task$succeed(
	A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty));
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$time$Time$addMySub = F2(
	function (_v0, state) {
		var interval = _v0.a;
		var tagger = _v0.b;
		var _v1 = A2($elm$core$Dict$get, interval, state);
		if (_v1.$ === 'Nothing') {
			return A3(
				$elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _v1.a;
			return A3(
				$elm$core$Dict$insert,
				interval,
				A2($elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$setInterval = _Time_setInterval;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return $elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = $elm$core$Process$spawn(
				A2(
					$elm$time$Time$setInterval,
					interval,
					A2($elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					$elm$time$Time$spawnHelp,
					router,
					rest,
					A3($elm$core$Dict$insert, interval, id, processes));
			};
			return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var $elm$time$Time$onEffects = F3(
	function (router, subs, _v0) {
		var processes = _v0.processes;
		var rightStep = F3(
			function (_v6, id, _v7) {
				var spawns = _v7.a;
				var existing = _v7.b;
				var kills = _v7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						$elm$core$Task$andThen,
						function (_v5) {
							return kills;
						},
						$elm$core$Process$kill(id)));
			});
		var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _v4) {
				var spawns = _v4.a;
				var existing = _v4.b;
				var kills = _v4.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _v3) {
				var spawns = _v3.a;
				var existing = _v3.b;
				var kills = _v3.c;
				return _Utils_Tuple3(
					spawns,
					A3($elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _v1 = A6(
			$elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				$elm$core$Dict$empty,
				$elm$core$Task$succeed(_Utils_Tuple0)));
		var spawnList = _v1.a;
		var existingDict = _v1.b;
		var killTask = _v1.c;
		return A2(
			$elm$core$Task$andThen,
			function (newProcesses) {
				return $elm$core$Task$succeed(
					A2($elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var $elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var $elm$time$Time$millisToPosix = $elm$time$Time$Posix;
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _v0 = A2($elm$core$Dict$get, interval, state.taggers);
		if (_v0.$ === 'Nothing') {
			return $elm$core$Task$succeed(state);
		} else {
			var taggers = _v0.a;
			var tellTaggers = function (time) {
				return $elm$core$Task$sequence(
					A2(
						$elm$core$List$map,
						function (tagger) {
							return A2(
								$elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$succeed(state);
				},
				A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now));
		}
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$time$Time$subMap = F2(
	function (f, _v0) {
		var interval = _v0.a;
		var tagger = _v0.b;
		return A2(
			$elm$time$Time$Every,
			interval,
			A2($elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
var $elm$time$Time$subscription = _Platform_leaf('Time');
var $elm$time$Time$every = F2(
	function (interval, tagger) {
		return $elm$time$Time$subscription(
			A2($elm$time$Time$Every, interval, tagger));
	});
var $author$project$Main$findReplace = _Platform_incomingPort(
	'findReplace',
	A2(
		$elm$json$Json$Decode$andThen,
		function (search) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (replace) {
					return $elm$json$Json$Decode$succeed(
						{replace: replace, search: search});
				},
				A2($elm$json$Json$Decode$field, 'replace', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'search', $elm$json$Json$Decode$string)));
var $author$project$Polygraph$EdgeObj = F3(
	function (a, b, c) {
		return {$: 'EdgeObj', a: a, b: b, c: c};
	});
var $author$project$Polygraph$NodeObj = function (a) {
	return {$: 'NodeObj', a: a};
};
var $elm_community$intdict$IntDict$Inner = function (a) {
	return {$: 'Inner', a: a};
};
var $elm_community$intdict$IntDict$size = function (dict) {
	switch (dict.$) {
		case 'Empty':
			return 0;
		case 'Leaf':
			return 1;
		default:
			var i = dict.a;
			return i.size;
	}
};
var $elm_community$intdict$IntDict$inner = F3(
	function (p, l, r) {
		var _v0 = _Utils_Tuple2(l, r);
		if (_v0.a.$ === 'Empty') {
			var _v1 = _v0.a;
			return r;
		} else {
			if (_v0.b.$ === 'Empty') {
				var _v2 = _v0.b;
				return l;
			} else {
				return $elm_community$intdict$IntDict$Inner(
					{
						left: l,
						prefix: p,
						right: r,
						size: $elm_community$intdict$IntDict$size(l) + $elm_community$intdict$IntDict$size(r)
					});
			}
		}
	});
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$core$Bitwise$complement = _Bitwise_complement;
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm_community$intdict$IntDict$highestBitSet = function (n) {
	var shiftOr = F2(
		function (i, shift) {
			return i | (i >>> shift);
		});
	var n1 = A2(shiftOr, n, 1);
	var n2 = A2(shiftOr, n1, 2);
	var n3 = A2(shiftOr, n2, 4);
	var n4 = A2(shiftOr, n3, 8);
	var n5 = A2(shiftOr, n4, 16);
	return n5 & (~(n5 >>> 1));
};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm_community$intdict$IntDict$signBit = $elm_community$intdict$IntDict$highestBitSet(-1);
var $elm$core$Bitwise$xor = _Bitwise_xor;
var $elm_community$intdict$IntDict$isBranchingBitSet = function (p) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Bitwise$xor($elm_community$intdict$IntDict$signBit),
		A2(
			$elm$core$Basics$composeR,
			$elm$core$Bitwise$and(p.branchingBit),
			$elm$core$Basics$neq(0)));
};
var $elm_community$intdict$IntDict$higherBitMask = function (branchingBit) {
	return branchingBit ^ (~(branchingBit - 1));
};
var $elm_community$intdict$IntDict$lcp = F2(
	function (x, y) {
		var branchingBit = $elm_community$intdict$IntDict$highestBitSet(x ^ y);
		var mask = $elm_community$intdict$IntDict$higherBitMask(branchingBit);
		var prefixBits = x & mask;
		return {branchingBit: branchingBit, prefixBits: prefixBits};
	});
var $elm_community$intdict$IntDict$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm_community$intdict$IntDict$leaf = F2(
	function (k, v) {
		return $elm_community$intdict$IntDict$Leaf(
			{key: k, value: v});
	});
var $elm_community$intdict$IntDict$prefixMatches = F2(
	function (p, n) {
		return _Utils_eq(
			n & $elm_community$intdict$IntDict$higherBitMask(p.branchingBit),
			p.prefixBits);
	});
var $elm_community$intdict$IntDict$update = F3(
	function (key, alter, dict) {
		var join = F2(
			function (_v2, _v3) {
				var k1 = _v2.a;
				var l = _v2.b;
				var k2 = _v3.a;
				var r = _v3.b;
				var prefix = A2($elm_community$intdict$IntDict$lcp, k1, k2);
				return A2($elm_community$intdict$IntDict$isBranchingBitSet, prefix, k2) ? A3($elm_community$intdict$IntDict$inner, prefix, l, r) : A3($elm_community$intdict$IntDict$inner, prefix, r, l);
			});
		var alteredNode = function (mv) {
			var _v1 = alter(mv);
			if (_v1.$ === 'Just') {
				var v = _v1.a;
				return A2($elm_community$intdict$IntDict$leaf, key, v);
			} else {
				return $elm_community$intdict$IntDict$empty;
			}
		};
		switch (dict.$) {
			case 'Empty':
				return alteredNode($elm$core$Maybe$Nothing);
			case 'Leaf':
				var l = dict.a;
				return _Utils_eq(l.key, key) ? alteredNode(
					$elm$core$Maybe$Just(l.value)) : A2(
					join,
					_Utils_Tuple2(
						key,
						alteredNode($elm$core$Maybe$Nothing)),
					_Utils_Tuple2(l.key, dict));
			default:
				var i = dict.a;
				return A2($elm_community$intdict$IntDict$prefixMatches, i.prefix, key) ? (A2($elm_community$intdict$IntDict$isBranchingBitSet, i.prefix, key) ? A3(
					$elm_community$intdict$IntDict$inner,
					i.prefix,
					i.left,
					A3($elm_community$intdict$IntDict$update, key, alter, i.right)) : A3(
					$elm_community$intdict$IntDict$inner,
					i.prefix,
					A3($elm_community$intdict$IntDict$update, key, alter, i.left),
					i.right)) : A2(
					join,
					_Utils_Tuple2(
						key,
						alteredNode($elm$core$Maybe$Nothing)),
					_Utils_Tuple2(i.prefix.prefixBits, dict));
		}
	});
var $elm_community$intdict$IntDict$insert = F3(
	function (key, value, dict) {
		return A3(
			$elm_community$intdict$IntDict$update,
			key,
			$elm$core$Basics$always(
				$elm$core$Maybe$Just(value)),
			dict);
	});
var $elm_community$intdict$IntDict$fromList = function (pairs) {
	return A3(
		$elm$core$List$foldl,
		function (_v0) {
			var a = _v0.a;
			var b = _v0.b;
			return A2($elm_community$intdict$IntDict$insert, a, b);
		},
		$elm_community$intdict$IntDict$empty,
		pairs);
};
var $elm_community$intdict$IntDict$Disjunct = F2(
	function (a, b) {
		return {$: 'Disjunct', a: a, b: b};
	});
var $elm_community$intdict$IntDict$Left = {$: 'Left'};
var $elm_community$intdict$IntDict$Parent = F2(
	function (a, b) {
		return {$: 'Parent', a: a, b: b};
	});
var $elm_community$intdict$IntDict$Right = {$: 'Right'};
var $elm_community$intdict$IntDict$SamePrefix = {$: 'SamePrefix'};
var $elm_community$intdict$IntDict$combineBits = F3(
	function (a, b, mask) {
		return (a & (~mask)) | (b & mask);
	});
var $elm_community$intdict$IntDict$mostSignificantBranchingBit = F2(
	function (a, b) {
		return (_Utils_eq(a, $elm_community$intdict$IntDict$signBit) || _Utils_eq(b, $elm_community$intdict$IntDict$signBit)) ? $elm_community$intdict$IntDict$signBit : A2($elm$core$Basics$max, a, b);
	});
var $elm_community$intdict$IntDict$determineBranchRelation = F2(
	function (l, r) {
		var rp = r.prefix;
		var lp = l.prefix;
		var mask = $elm_community$intdict$IntDict$highestBitSet(
			A2($elm_community$intdict$IntDict$mostSignificantBranchingBit, lp.branchingBit, rp.branchingBit));
		var modifiedRightPrefix = A3($elm_community$intdict$IntDict$combineBits, rp.prefixBits, ~lp.prefixBits, mask);
		var prefix = A2($elm_community$intdict$IntDict$lcp, lp.prefixBits, modifiedRightPrefix);
		var childEdge = F2(
			function (branchPrefix, c) {
				return A2($elm_community$intdict$IntDict$isBranchingBitSet, branchPrefix, c.prefix.prefixBits) ? $elm_community$intdict$IntDict$Right : $elm_community$intdict$IntDict$Left;
			});
		return _Utils_eq(lp, rp) ? $elm_community$intdict$IntDict$SamePrefix : (_Utils_eq(prefix, lp) ? A2(
			$elm_community$intdict$IntDict$Parent,
			$elm_community$intdict$IntDict$Left,
			A2(childEdge, l.prefix, r)) : (_Utils_eq(prefix, rp) ? A2(
			$elm_community$intdict$IntDict$Parent,
			$elm_community$intdict$IntDict$Right,
			A2(childEdge, r.prefix, l)) : A2(
			$elm_community$intdict$IntDict$Disjunct,
			prefix,
			A2(childEdge, prefix, l))));
	});
var $elm_community$intdict$IntDict$uniteWith = F3(
	function (merger, l, r) {
		var mergeWith = F3(
			function (key, left, right) {
				var _v14 = _Utils_Tuple2(left, right);
				if (_v14.a.$ === 'Just') {
					if (_v14.b.$ === 'Just') {
						var l2 = _v14.a.a;
						var r2 = _v14.b.a;
						return $elm$core$Maybe$Just(
							A3(merger, key, l2, r2));
					} else {
						return left;
					}
				} else {
					if (_v14.b.$ === 'Just') {
						return right;
					} else {
						var _v15 = _v14.a;
						var _v16 = _v14.b;
						return $elm$core$Maybe$Nothing;
					}
				}
			});
		var _v0 = _Utils_Tuple2(l, r);
		_v0$1:
		while (true) {
			_v0$2:
			while (true) {
				switch (_v0.a.$) {
					case 'Empty':
						var _v1 = _v0.a;
						return r;
					case 'Leaf':
						switch (_v0.b.$) {
							case 'Empty':
								break _v0$1;
							case 'Leaf':
								break _v0$2;
							default:
								break _v0$2;
						}
					default:
						switch (_v0.b.$) {
							case 'Empty':
								break _v0$1;
							case 'Leaf':
								var r2 = _v0.b.a;
								return A3(
									$elm_community$intdict$IntDict$update,
									r2.key,
									function (l_) {
										return A3(
											mergeWith,
											r2.key,
											l_,
											$elm$core$Maybe$Just(r2.value));
									},
									l);
							default:
								var il = _v0.a.a;
								var ir = _v0.b.a;
								var _v3 = A2($elm_community$intdict$IntDict$determineBranchRelation, il, ir);
								switch (_v3.$) {
									case 'SamePrefix':
										return A3(
											$elm_community$intdict$IntDict$inner,
											il.prefix,
											A3($elm_community$intdict$IntDict$uniteWith, merger, il.left, ir.left),
											A3($elm_community$intdict$IntDict$uniteWith, merger, il.right, ir.right));
									case 'Parent':
										if (_v3.a.$ === 'Left') {
											if (_v3.b.$ === 'Right') {
												var _v4 = _v3.a;
												var _v5 = _v3.b;
												return A3(
													$elm_community$intdict$IntDict$inner,
													il.prefix,
													il.left,
													A3($elm_community$intdict$IntDict$uniteWith, merger, il.right, r));
											} else {
												var _v8 = _v3.a;
												var _v9 = _v3.b;
												return A3(
													$elm_community$intdict$IntDict$inner,
													il.prefix,
													A3($elm_community$intdict$IntDict$uniteWith, merger, il.left, r),
													il.right);
											}
										} else {
											if (_v3.b.$ === 'Right') {
												var _v6 = _v3.a;
												var _v7 = _v3.b;
												return A3(
													$elm_community$intdict$IntDict$inner,
													ir.prefix,
													ir.left,
													A3($elm_community$intdict$IntDict$uniteWith, merger, l, ir.right));
											} else {
												var _v10 = _v3.a;
												var _v11 = _v3.b;
												return A3(
													$elm_community$intdict$IntDict$inner,
													ir.prefix,
													A3($elm_community$intdict$IntDict$uniteWith, merger, l, ir.left),
													ir.right);
											}
										}
									default:
										if (_v3.b.$ === 'Left') {
											var parentPrefix = _v3.a;
											var _v12 = _v3.b;
											return A3($elm_community$intdict$IntDict$inner, parentPrefix, l, r);
										} else {
											var parentPrefix = _v3.a;
											var _v13 = _v3.b;
											return A3($elm_community$intdict$IntDict$inner, parentPrefix, r, l);
										}
								}
						}
				}
			}
			var l2 = _v0.a.a;
			return A3(
				$elm_community$intdict$IntDict$update,
				l2.key,
				function (r_) {
					return A3(
						mergeWith,
						l2.key,
						$elm$core$Maybe$Just(l2.value),
						r_);
				},
				r);
		}
		var _v2 = _v0.b;
		return l;
	});
var $elm_community$intdict$IntDict$union = $elm_community$intdict$IntDict$uniteWith(
	F3(
		function (key, old, _new) {
			return old;
		}));
var $author$project$Polygraph$fromNodesAndEdges = F2(
	function (ln, le) {
		var dn = $elm_community$intdict$IntDict$fromList(
			A2(
				$elm$core$List$map,
				function (_v1) {
					var id = _v1.id;
					var label = _v1.label;
					return _Utils_Tuple2(
						id,
						$author$project$Polygraph$NodeObj(label));
				},
				ln));
		var de = $elm_community$intdict$IntDict$fromList(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var id = _v0.id;
					var from = _v0.from;
					var to = _v0.to;
					var label = _v0.label;
					return _Utils_Tuple2(
						id,
						A3($author$project$Polygraph$EdgeObj, from, to, label));
				},
				le));
		return $author$project$Polygraph$Graph(
			A2($elm_community$intdict$IntDict$union, dn, de));
	});
var $elm_community$intdict$IntDict$map = F2(
	function (f, dict) {
		switch (dict.$) {
			case 'Empty':
				return $elm_community$intdict$IntDict$empty;
			case 'Leaf':
				var l = dict.a;
				return A2(
					$elm_community$intdict$IntDict$leaf,
					l.key,
					A2(f, l.key, l.value));
			default:
				var i = dict.a;
				return A3(
					$elm_community$intdict$IntDict$inner,
					i.prefix,
					A2($elm_community$intdict$IntDict$map, f, i.left),
					A2($elm_community$intdict$IntDict$map, f, i.right));
		}
	});
var $author$project$Polygraph$mapObj = F3(
	function (fn, fe, o) {
		if (o.$ === 'NodeObj') {
			var n = o.a;
			return $author$project$Polygraph$NodeObj(
				fn(n));
		} else {
			var i1 = o.a;
			var i2 = o.b;
			var e = o.c;
			return A3(
				$author$project$Polygraph$EdgeObj,
				i1,
				i2,
				fe(e));
		}
	});
var $author$project$Polygraph$mapRep = F2(
	function (f, _v0) {
		var g = _v0.a;
		return $author$project$Polygraph$Graph(
			f(g));
	});
var $author$project$Polygraph$map = F2(
	function (fn, fe) {
		return $author$project$Polygraph$mapRep(
			$elm_community$intdict$IntDict$map(
				function (i) {
					return A2(
						$author$project$Polygraph$mapObj,
						fn(i),
						fe(i));
				}));
	});
var $author$project$GraphDefs$NormalEdge = function (a) {
	return {$: 'NormalEdge', a: a};
};
var $author$project$GraphDefs$PullshoutEdge = {$: 'PullshoutEdge'};
var $author$project$Geometry$Centre = {$: 'Centre'};
var $author$project$Geometry$Left = {$: 'Left'};
var $author$project$Geometry$Over = {$: 'Over'};
var $author$project$Geometry$Right = {$: 'Right'};
var $author$project$ArrowStyle$alignmentFromString = function (tail) {
	switch (tail) {
		case 'centre':
			return $author$project$Geometry$Centre;
		case 'right':
			return $author$project$Geometry$Right;
		case 'over':
			return $author$project$Geometry$Over;
		default:
			return $author$project$Geometry$Left;
	}
};
var $author$project$Drawing$Color$Black = {$: 'Black'};
var $author$project$Drawing$Color$Blue = {$: 'Blue'};
var $author$project$Drawing$Color$Green = {$: 'Green'};
var $author$project$Drawing$Color$Orange = {$: 'Orange'};
var $author$project$Drawing$Color$Purple = {$: 'Purple'};
var $author$project$Drawing$Color$Red = {$: 'Red'};
var $author$project$Drawing$Color$Yellow = {$: 'Yellow'};
var $author$project$Drawing$Color$fromString = function (s) {
	switch (s) {
		case 'red':
			return $author$project$Drawing$Color$Red;
		case 'blue':
			return $author$project$Drawing$Color$Blue;
		case 'purple':
			return $author$project$Drawing$Color$Purple;
		case 'green':
			return $author$project$Drawing$Color$Green;
		case 'yellow':
			return $author$project$Drawing$Color$Yellow;
		case 'orange':
			return $author$project$Drawing$Color$Orange;
		default:
			return $author$project$Drawing$Color$Black;
	}
};
var $author$project$ArrowStyle$DefaultHead = {$: 'DefaultHead'};
var $author$project$ArrowStyle$NoHead = {$: 'NoHead'};
var $author$project$ArrowStyle$TwoHeads = {$: 'TwoHeads'};
var $author$project$ArrowStyle$headFromString = function (head) {
	switch (head) {
		case 'twoheads':
			return $author$project$ArrowStyle$TwoHeads;
		case 'none':
			return $author$project$ArrowStyle$NoHead;
		default:
			return $author$project$ArrowStyle$DefaultHead;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $author$project$ArrowStyle$DefaultTail = {$: 'DefaultTail'};
var $author$project$ArrowStyle$Hook = {$: 'Hook'};
var $author$project$ArrowStyle$HookAlt = {$: 'HookAlt'};
var $author$project$ArrowStyle$Mapsto = {$: 'Mapsto'};
var $author$project$ArrowStyle$tailFromString = function (tail) {
	switch (tail) {
		case 'hook':
			return $author$project$ArrowStyle$Hook;
		case 'hookalt':
			return $author$project$ArrowStyle$HookAlt;
		case 'mapsto':
			return $author$project$ArrowStyle$Mapsto;
		default:
			return $author$project$ArrowStyle$DefaultTail;
	}
};
var $author$project$Format$Version11$toEdgeLabel = function (_v0) {
	var label = _v0.label;
	var style = _v0.style;
	var isPullshout = _v0.isPullshout;
	var zindex = _v0.zindex;
	return {
		details: isPullshout ? $author$project$GraphDefs$PullshoutEdge : $author$project$GraphDefs$NormalEdge(
			{
				dims: $elm$core$Maybe$Nothing,
				label: label,
				style: {
					bend: style.bend,
					color: $author$project$Drawing$Color$fromString(style.color),
					dashed: style.dashed,
					_double: style._double,
					head: $author$project$ArrowStyle$headFromString(style.head),
					labelAlignment: $author$project$ArrowStyle$alignmentFromString(style.alignment),
					labelPosition: A2(
						$elm$core$Basics$max,
						0.1,
						A2($elm$core$Basics$min, 0.9, style.position)),
					tail: $author$project$ArrowStyle$tailFromString(style.tail)
				}
			}),
		selected: false,
		weaklySelected: false,
		zindex: zindex
	};
};
var $author$project$Format$Version11$toNodeLabel = function (_v0) {
	var pos = _v0.pos;
	var label = _v0.label;
	var isMath = _v0.isMath;
	var zindex = _v0.zindex;
	return {dims: $elm$core$Maybe$Nothing, isCoqValidated: false, isMath: isMath, label: label, pos: pos, selected: false, weaklySelected: false, zindex: zindex};
};
var $author$project$Format$Version11$fromJSTab = function (tab) {
	return {
		active: tab.active,
		graph: A3(
			$author$project$Polygraph$map,
			function (_v0) {
				return $author$project$Format$Version11$toNodeLabel;
			},
			function (_v1) {
				return $author$project$Format$Version11$toEdgeLabel;
			},
			A2($author$project$Polygraph$fromNodesAndEdges, tab.nodes, tab.edges)),
		sizeGrid: tab.sizeGrid,
		title: tab.title
	};
};
var $author$project$Format$Version11$fromJSGraph = function (_v0) {
	var tabs = _v0.tabs;
	var latexPreamble = _v0.latexPreamble;
	return {
		latexPreamble: latexPreamble,
		tabs: A2($elm$core$List$map, $author$project$Format$Version11$fromJSTab, tabs)
	};
};
var $author$project$Zindex$defaultZ = 0;
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Format$Version10$biggestZindex = function (el) {
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$Zindex$defaultZ,
		$elm$core$List$maximum(
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.label;
					},
					function ($) {
						return $.zindex;
					}),
				el)));
};
var $author$project$Polygraph$nodeMap = F2(
	function (f, _v0) {
		var id = _v0.id;
		var label = _v0.label;
		return {
			id: id,
			label: f(label)
		};
	});
var $author$project$Format$Version10$toNextNode = F2(
	function (zindex, _v0) {
		var pos = _v0.pos;
		var label = _v0.label;
		var isMath = _v0.isMath;
		return {isMath: isMath, label: label, pos: pos, zindex: zindex};
	});
var $author$project$Format$Version10$toNextTab = function (_v0) {
	var title = _v0.title;
	var sizeGrid = _v0.sizeGrid;
	var active = _v0.active;
	var nodes = _v0.nodes;
	var edges = _v0.edges;
	var bigZ = $author$project$Format$Version10$biggestZindex(edges) + 1;
	return {
		active: active,
		edges: edges,
		nodes: A2(
			$elm$core$List$map,
			$author$project$Polygraph$nodeMap(
				$author$project$Format$Version10$toNextNode(bigZ)),
			nodes),
		sizeGrid: sizeGrid,
		title: title
	};
};
var $author$project$Format$Version10$toNextVersion = function (_v0) {
	var tabs = _v0.tabs;
	var latexPreamble = _v0.latexPreamble;
	return {
		latexPreamble: latexPreamble,
		tabs: A2($elm$core$List$map, $author$project$Format$Version10$toNextTab, tabs)
	};
};
var $author$project$Format$Version10$fromJSGraph = function (g) {
	return $author$project$Format$Version11$fromJSGraph(
		$author$project$Format$Version10$toNextVersion(g));
};
var $author$project$Format$Version9$toNextVersion = function (_v0) {
	var nodes = _v0.nodes;
	var edges = _v0.edges;
	var sizeGrid = _v0.sizeGrid;
	var latexPreamble = _v0.latexPreamble;
	return {
		latexPreamble: latexPreamble,
		tabs: _List_fromArray(
			[
				{active: true, edges: edges, nodes: nodes, sizeGrid: sizeGrid, title: '1'}
			])
	};
};
var $author$project$Format$Version9$fromJSGraph = function (g) {
	return $author$project$Format$Version10$fromJSGraph(
		$author$project$Format$Version9$toNextVersion(g));
};
var $author$project$Polygraph$edgeMap = F2(
	function (f, _v0) {
		var id = _v0.id;
		var from = _v0.from;
		var to = _v0.to;
		var label = _v0.label;
		return {
			from: from,
			id: id,
			label: f(label),
			to: to
		};
	});
var $author$project$Format$Version8$toNextStyle = function (style) {
	return {alignment: style.alignment, bend: style.bend, color: 'black', dashed: style.dashed, _double: style._double, head: style.head, position: style.position, tail: style.tail};
};
var $author$project$Format$Version8$toNextEdge = function (_v0) {
	var label = _v0.label;
	var style = _v0.style;
	var isPullshout = _v0.isPullshout;
	var zindex = _v0.zindex;
	return {
		isPullshout: isPullshout,
		label: label,
		style: $author$project$Format$Version8$toNextStyle(style),
		zindex: zindex
	};
};
var $author$project$Format$Version8$toNextVersion = function (_v0) {
	var nodes = _v0.nodes;
	var edges = _v0.edges;
	var sizeGrid = _v0.sizeGrid;
	var latexPreamble = _v0.latexPreamble;
	return {
		edges: A2(
			$elm$core$List$map,
			$author$project$Polygraph$edgeMap($author$project$Format$Version8$toNextEdge),
			edges),
		latexPreamble: latexPreamble,
		nodes: nodes,
		sizeGrid: sizeGrid
	};
};
var $author$project$Format$Version8$fromJSGraph = function (g) {
	return $author$project$Format$Version9$fromJSGraph(
		$author$project$Format$Version8$toNextVersion(g));
};
var $author$project$Format$Version7$toNextEdge = function (_v0) {
	var label = _v0.label;
	var style = _v0.style;
	var isPullback = _v0.isPullback;
	return {isPullshout: isPullback, label: label, style: style, zindex: 0};
};
var $author$project$Format$Version7$toNextVersion = function (_v0) {
	var nodes = _v0.nodes;
	var edges = _v0.edges;
	var sizeGrid = _v0.sizeGrid;
	var latexPreamble = _v0.latexPreamble;
	return {
		edges: A2(
			$elm$core$List$map,
			$author$project$Polygraph$edgeMap($author$project$Format$Version7$toNextEdge),
			edges),
		latexPreamble: latexPreamble,
		nodes: nodes,
		sizeGrid: sizeGrid
	};
};
var $author$project$Format$Version7$fromJSGraph = function (g) {
	return $author$project$Format$Version8$fromJSGraph(
		$author$project$Format$Version7$toNextVersion(g));
};
var $author$project$Format$Version6$toNextEdge = function (_v0) {
	var label = _v0.label;
	var style = _v0.style;
	var isPullback = _v0.isPullback;
	return {isPullback: isPullback, label: label, style: style, zindex: 0};
};
var $author$project$Format$Version6$toNextVersion = function (_v0) {
	var nodes = _v0.nodes;
	var edges = _v0.edges;
	var sizeGrid = _v0.sizeGrid;
	var latexPreamble = _v0.latexPreamble;
	return {
		edges: A2(
			$elm$core$List$map,
			$author$project$Polygraph$edgeMap($author$project$Format$Version6$toNextEdge),
			edges),
		latexPreamble: latexPreamble,
		nodes: nodes,
		sizeGrid: sizeGrid
	};
};
var $author$project$Format$Version6$fromJSGraph = function (g) {
	return $author$project$Format$Version7$fromJSGraph(
		$author$project$Format$Version6$toNextVersion(g));
};
var $author$project$Format$Version5$toNextEdge = function (_v0) {
	var label = _v0.label;
	var style = _v0.style;
	return {isPullback: false, label: label, style: style};
};
var $author$project$Format$Version5$toNextVersion = function (_v0) {
	var nodes = _v0.nodes;
	var edges = _v0.edges;
	var sizeGrid = _v0.sizeGrid;
	var latexPreamble = _v0.latexPreamble;
	return {
		edges: A2(
			$elm$core$List$map,
			$author$project$Polygraph$edgeMap($author$project$Format$Version5$toNextEdge),
			edges),
		latexPreamble: latexPreamble,
		nodes: nodes,
		sizeGrid: sizeGrid
	};
};
var $author$project$Format$Version5$fromJSGraph = function (g) {
	return $author$project$Format$Version6$fromJSGraph(
		$author$project$Format$Version5$toNextVersion(g));
};
var $author$project$Format$Version4$toNextVersion = function (_v0) {
	var nodes = _v0.nodes;
	var edges = _v0.edges;
	var sizeGrid = _v0.sizeGrid;
	return {edges: edges, latexPreamble: '', nodes: nodes, sizeGrid: sizeGrid};
};
var $author$project$Format$Version4$fromJSGraph = function (g) {
	return $author$project$Format$Version5$fromJSGraph(
		$author$project$Format$Version4$toNextVersion(g));
};
var $author$project$Format$Version3$toNextNode = function (_v0) {
	var label = _v0.label;
	var pos = _v0.pos;
	return {isMath: true, label: label, pos: pos};
};
var $author$project$Format$Version3$toNextVersion = function (_v0) {
	var nodes = _v0.nodes;
	var edges = _v0.edges;
	var sizeGrid = _v0.sizeGrid;
	return {
		edges: edges,
		nodes: A2(
			$elm$core$List$map,
			$author$project$Polygraph$nodeMap($author$project$Format$Version3$toNextNode),
			nodes),
		sizeGrid: sizeGrid
	};
};
var $author$project$Format$Version3$fromJSGraph = function (g) {
	return $author$project$Format$Version4$fromJSGraph(
		$author$project$Format$Version3$toNextVersion(g));
};
var $author$project$Format$Version2$toNextVersion = function (_v0) {
	var nodes = _v0.nodes;
	var edges = _v0.edges;
	return {edges: edges, nodes: nodes, sizeGrid: 200};
};
var $author$project$Format$Version2$fromJSGraph = function (g) {
	return $author$project$Format$Version3$fromJSGraph(
		$author$project$Format$Version2$toNextVersion(g));
};
var $author$project$Format$Version1$toNextEdge = function (_v0) {
	var label = _v0.label;
	var style = _v0.style;
	return {
		label: label,
		style: {alignment: 'left', bend: style.bend, dashed: style.dashed, _double: style._double, head: style.head, position: 0.5, tail: style.tail}
	};
};
var $author$project$Format$Version1$toNextVersion = function (_v0) {
	var nodes = _v0.nodes;
	var edges = _v0.edges;
	return {
		edges: A2(
			$elm$core$List$map,
			$author$project$Polygraph$edgeMap($author$project$Format$Version1$toNextEdge),
			edges),
		nodes: nodes
	};
};
var $author$project$Format$Version1$fromJSGraph = function (g) {
	return $author$project$Format$Version2$fromJSGraph(
		$author$project$Format$Version1$toNextVersion(g));
};
var $author$project$Format$Version0$toNextEdge = function (_v0) {
	var label = _v0.label;
	var style = _v0.style;
	var bend = _v0.bend;
	return {
		label: label,
		style: {bend: bend, dashed: style.dashed, _double: style._double, head: style.head, tail: style.tail}
	};
};
var $author$project$Format$Version0$toNextVersion = function (_v0) {
	var nodes = _v0.a;
	var edges = _v0.b;
	return {
		edges: A2(
			$elm$core$List$map,
			$author$project$Polygraph$edgeMap($author$project$Format$Version0$toNextEdge),
			edges),
		nodes: nodes
	};
};
var $author$project$Format$Version0$fromJSGraph = function (g) {
	return $author$project$Format$Version1$fromJSGraph(
		$author$project$Format$Version0$toNextVersion(g));
};
var $author$project$Msg$SimpleScenario = {$: 'SimpleScenario'};
var $author$project$Msg$isSimpleScenario = function (s) {
	return _Utils_eq(s, $author$project$Msg$SimpleScenario);
};
var $author$project$HtmlDefs$Character = function (a) {
	return {$: 'Character', a: a};
};
var $author$project$HtmlDefs$Control = function (a) {
	return {$: 'Control', a: a};
};
var $author$project$HtmlDefs$toKey = function (string) {
	var _v0 = $elm$core$String$uncons(string);
	if ((_v0.$ === 'Just') && (_v0.a.b === '')) {
		var _v1 = _v0.a;
		var _char = _v1.a;
		return $author$project$HtmlDefs$Character(_char);
	} else {
		return $author$project$HtmlDefs$Control(string);
	}
};
var $author$project$HtmlDefs$keyDecoder = A2(
	$elm$json$Json$Decode$map,
	$author$project$HtmlDefs$toKey,
	A2($elm$json$Json$Decode$field, 'key', $elm$json$Json$Decode$string));
var $elm$json$Json$Decode$bool = _Json_decodeBool;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $author$project$HtmlDefs$keysDecoder = A4(
	$elm$json$Json$Decode$map3,
	F3(
		function (alt, ctrl, shift) {
			return {alt: alt, ctrl: ctrl, shift: shift};
		}),
	A2($elm$json$Json$Decode$field, 'altKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'ctrlKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'shiftKey', $elm$json$Json$Decode$bool));
var $author$project$Msg$Loaded = function (a) {
	return {$: 'Loaded', a: a};
};
var $author$project$Msg$PasteGraph = function (a) {
	return {$: 'PasteGraph', a: a};
};
var $author$project$Msg$SetFirstTab = function (a) {
	return {$: 'SetFirstTab', a: a};
};
var $author$project$Msg$loadGraphInfoToMsg = function (g) {
	return g.setFirstTab ? $author$project$Msg$SetFirstTab(g.graph) : (g.clipboard ? $author$project$Msg$PasteGraph(g.graph) : $author$project$Msg$Loaded(g));
};
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$json$Json$Decode$index = _Json_decodeIndex;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $author$project$Main$loadedGraph0 = _Platform_incomingPort(
	'loadedGraph0',
	A2(
		$elm$json$Json$Decode$andThen,
		function (setFirstTab) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (scenario) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (graph) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (clipboard) {
									return $elm$json$Json$Decode$succeed(
										{clipboard: clipboard, graph: graph, scenario: scenario, setFirstTab: setFirstTab});
								},
								A2($elm$json$Json$Decode$field, 'clipboard', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'graph',
							A2(
								$elm$json$Json$Decode$andThen,
								function (_v0) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (_v1) {
											return $elm$json$Json$Decode$succeed(
												_Utils_Tuple2(_v0, _v1));
										},
										A2(
											$elm$json$Json$Decode$index,
											1,
											$elm$json$Json$Decode$list(
												A2(
													$elm$json$Json$Decode$andThen,
													function (to) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (label) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (id) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (from) {
																				return $elm$json$Json$Decode$succeed(
																					{from: from, id: id, label: label, to: to});
																			},
																			A2($elm$json$Json$Decode$field, 'from', $elm$json$Json$Decode$int));
																	},
																	A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
															},
															A2(
																$elm$json$Json$Decode$field,
																'label',
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (style) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (label) {
																				return A2(
																					$elm$json$Json$Decode$andThen,
																					function (bend) {
																						return $elm$json$Json$Decode$succeed(
																							{bend: bend, label: label, style: style});
																					},
																					A2($elm$json$Json$Decode$field, 'bend', $elm$json$Json$Decode$float));
																			},
																			A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																	},
																	A2(
																		$elm$json$Json$Decode$field,
																		'style',
																		A2(
																			$elm$json$Json$Decode$andThen,
																			function (tail) {
																				return A2(
																					$elm$json$Json$Decode$andThen,
																					function (head) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (_double) {
																								return A2(
																									$elm$json$Json$Decode$andThen,
																									function (dashed) {
																										return $elm$json$Json$Decode$succeed(
																											{dashed: dashed, _double: _double, head: head, tail: tail});
																									},
																									A2($elm$json$Json$Decode$field, 'dashed', $elm$json$Json$Decode$bool));
																							},
																							A2($elm$json$Json$Decode$field, 'double', $elm$json$Json$Decode$bool));
																					},
																					A2($elm$json$Json$Decode$field, 'head', $elm$json$Json$Decode$string));
																			},
																			A2($elm$json$Json$Decode$field, 'tail', $elm$json$Json$Decode$string))))));
													},
													A2($elm$json$Json$Decode$field, 'to', $elm$json$Json$Decode$int)))));
								},
								A2(
									$elm$json$Json$Decode$index,
									0,
									$elm$json$Json$Decode$list(
										A2(
											$elm$json$Json$Decode$andThen,
											function (label) {
												return A2(
													$elm$json$Json$Decode$andThen,
													function (id) {
														return $elm$json$Json$Decode$succeed(
															{id: id, label: label});
													},
													A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
											},
											A2(
												$elm$json$Json$Decode$field,
												'label',
												A2(
													$elm$json$Json$Decode$andThen,
													function (pos) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (label) {
																return $elm$json$Json$Decode$succeed(
																	{label: label, pos: pos});
															},
															A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
													},
													A2(
														$elm$json$Json$Decode$field,
														'pos',
														A2(
															$elm$json$Json$Decode$andThen,
															function (_v0) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (_v1) {
																		return $elm$json$Json$Decode$succeed(
																			_Utils_Tuple2(_v0, _v1));
																	},
																	A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float));
															},
															A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float)))))))))));
				},
				A2($elm$json$Json$Decode$field, 'scenario', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'setFirstTab', $elm$json$Json$Decode$bool)));
var $author$project$Main$loadedGraph1 = _Platform_incomingPort(
	'loadedGraph1',
	A2(
		$elm$json$Json$Decode$andThen,
		function (setFirstTab) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (scenario) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (graph) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (clipboard) {
									return $elm$json$Json$Decode$succeed(
										{clipboard: clipboard, graph: graph, scenario: scenario, setFirstTab: setFirstTab});
								},
								A2($elm$json$Json$Decode$field, 'clipboard', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'graph',
							A2(
								$elm$json$Json$Decode$andThen,
								function (nodes) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (edges) {
											return $elm$json$Json$Decode$succeed(
												{edges: edges, nodes: nodes});
										},
										A2(
											$elm$json$Json$Decode$field,
											'edges',
											$elm$json$Json$Decode$list(
												A2(
													$elm$json$Json$Decode$andThen,
													function (to) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (label) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (id) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (from) {
																				return $elm$json$Json$Decode$succeed(
																					{from: from, id: id, label: label, to: to});
																			},
																			A2($elm$json$Json$Decode$field, 'from', $elm$json$Json$Decode$int));
																	},
																	A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
															},
															A2(
																$elm$json$Json$Decode$field,
																'label',
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (style) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (label) {
																				return $elm$json$Json$Decode$succeed(
																					{label: label, style: style});
																			},
																			A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																	},
																	A2(
																		$elm$json$Json$Decode$field,
																		'style',
																		A2(
																			$elm$json$Json$Decode$andThen,
																			function (tail) {
																				return A2(
																					$elm$json$Json$Decode$andThen,
																					function (head) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (_double) {
																								return A2(
																									$elm$json$Json$Decode$andThen,
																									function (dashed) {
																										return A2(
																											$elm$json$Json$Decode$andThen,
																											function (bend) {
																												return $elm$json$Json$Decode$succeed(
																													{bend: bend, dashed: dashed, _double: _double, head: head, tail: tail});
																											},
																											A2($elm$json$Json$Decode$field, 'bend', $elm$json$Json$Decode$float));
																									},
																									A2($elm$json$Json$Decode$field, 'dashed', $elm$json$Json$Decode$bool));
																							},
																							A2($elm$json$Json$Decode$field, 'double', $elm$json$Json$Decode$bool));
																					},
																					A2($elm$json$Json$Decode$field, 'head', $elm$json$Json$Decode$string));
																			},
																			A2($elm$json$Json$Decode$field, 'tail', $elm$json$Json$Decode$string))))));
													},
													A2($elm$json$Json$Decode$field, 'to', $elm$json$Json$Decode$int)))));
								},
								A2(
									$elm$json$Json$Decode$field,
									'nodes',
									$elm$json$Json$Decode$list(
										A2(
											$elm$json$Json$Decode$andThen,
											function (label) {
												return A2(
													$elm$json$Json$Decode$andThen,
													function (id) {
														return $elm$json$Json$Decode$succeed(
															{id: id, label: label});
													},
													A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
											},
											A2(
												$elm$json$Json$Decode$field,
												'label',
												A2(
													$elm$json$Json$Decode$andThen,
													function (pos) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (label) {
																return $elm$json$Json$Decode$succeed(
																	{label: label, pos: pos});
															},
															A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
													},
													A2(
														$elm$json$Json$Decode$field,
														'pos',
														A2(
															$elm$json$Json$Decode$andThen,
															function (_v0) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (_v1) {
																		return $elm$json$Json$Decode$succeed(
																			_Utils_Tuple2(_v0, _v1));
																	},
																	A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float));
															},
															A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float)))))))))));
				},
				A2($elm$json$Json$Decode$field, 'scenario', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'setFirstTab', $elm$json$Json$Decode$bool)));
var $author$project$Main$loadedGraph10 = _Platform_incomingPort(
	'loadedGraph10',
	A2(
		$elm$json$Json$Decode$andThen,
		function (setFirstTab) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (scenario) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (graph) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (clipboard) {
									return $elm$json$Json$Decode$succeed(
										{clipboard: clipboard, graph: graph, scenario: scenario, setFirstTab: setFirstTab});
								},
								A2($elm$json$Json$Decode$field, 'clipboard', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'graph',
							A2(
								$elm$json$Json$Decode$andThen,
								function (tabs) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (latexPreamble) {
											return $elm$json$Json$Decode$succeed(
												{latexPreamble: latexPreamble, tabs: tabs});
										},
										A2($elm$json$Json$Decode$field, 'latexPreamble', $elm$json$Json$Decode$string));
								},
								A2(
									$elm$json$Json$Decode$field,
									'tabs',
									$elm$json$Json$Decode$list(
										A2(
											$elm$json$Json$Decode$andThen,
											function (title) {
												return A2(
													$elm$json$Json$Decode$andThen,
													function (sizeGrid) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (nodes) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (edges) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (active) {
																				return $elm$json$Json$Decode$succeed(
																					{active: active, edges: edges, nodes: nodes, sizeGrid: sizeGrid, title: title});
																			},
																			A2($elm$json$Json$Decode$field, 'active', $elm$json$Json$Decode$bool));
																	},
																	A2(
																		$elm$json$Json$Decode$field,
																		'edges',
																		$elm$json$Json$Decode$list(
																			A2(
																				$elm$json$Json$Decode$andThen,
																				function (to) {
																					return A2(
																						$elm$json$Json$Decode$andThen,
																						function (label) {
																							return A2(
																								$elm$json$Json$Decode$andThen,
																								function (id) {
																									return A2(
																										$elm$json$Json$Decode$andThen,
																										function (from) {
																											return $elm$json$Json$Decode$succeed(
																												{from: from, id: id, label: label, to: to});
																										},
																										A2($elm$json$Json$Decode$field, 'from', $elm$json$Json$Decode$int));
																								},
																								A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
																						},
																						A2(
																							$elm$json$Json$Decode$field,
																							'label',
																							A2(
																								$elm$json$Json$Decode$andThen,
																								function (zindex) {
																									return A2(
																										$elm$json$Json$Decode$andThen,
																										function (style) {
																											return A2(
																												$elm$json$Json$Decode$andThen,
																												function (label) {
																													return A2(
																														$elm$json$Json$Decode$andThen,
																														function (isPullshout) {
																															return $elm$json$Json$Decode$succeed(
																																{isPullshout: isPullshout, label: label, style: style, zindex: zindex});
																														},
																														A2($elm$json$Json$Decode$field, 'isPullshout', $elm$json$Json$Decode$bool));
																												},
																												A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																										},
																										A2(
																											$elm$json$Json$Decode$field,
																											'style',
																											A2(
																												$elm$json$Json$Decode$andThen,
																												function (tail) {
																													return A2(
																														$elm$json$Json$Decode$andThen,
																														function (position) {
																															return A2(
																																$elm$json$Json$Decode$andThen,
																																function (head) {
																																	return A2(
																																		$elm$json$Json$Decode$andThen,
																																		function (_double) {
																																			return A2(
																																				$elm$json$Json$Decode$andThen,
																																				function (dashed) {
																																					return A2(
																																						$elm$json$Json$Decode$andThen,
																																						function (color) {
																																							return A2(
																																								$elm$json$Json$Decode$andThen,
																																								function (bend) {
																																									return A2(
																																										$elm$json$Json$Decode$andThen,
																																										function (alignment) {
																																											return $elm$json$Json$Decode$succeed(
																																												{alignment: alignment, bend: bend, color: color, dashed: dashed, _double: _double, head: head, position: position, tail: tail});
																																										},
																																										A2($elm$json$Json$Decode$field, 'alignment', $elm$json$Json$Decode$string));
																																								},
																																								A2($elm$json$Json$Decode$field, 'bend', $elm$json$Json$Decode$float));
																																						},
																																						A2($elm$json$Json$Decode$field, 'color', $elm$json$Json$Decode$string));
																																				},
																																				A2($elm$json$Json$Decode$field, 'dashed', $elm$json$Json$Decode$bool));
																																		},
																																		A2($elm$json$Json$Decode$field, 'double', $elm$json$Json$Decode$bool));
																																},
																																A2($elm$json$Json$Decode$field, 'head', $elm$json$Json$Decode$string));
																														},
																														A2($elm$json$Json$Decode$field, 'position', $elm$json$Json$Decode$float));
																												},
																												A2($elm$json$Json$Decode$field, 'tail', $elm$json$Json$Decode$string))));
																								},
																								A2($elm$json$Json$Decode$field, 'zindex', $elm$json$Json$Decode$int))));
																				},
																				A2($elm$json$Json$Decode$field, 'to', $elm$json$Json$Decode$int)))));
															},
															A2(
																$elm$json$Json$Decode$field,
																'nodes',
																$elm$json$Json$Decode$list(
																	A2(
																		$elm$json$Json$Decode$andThen,
																		function (label) {
																			return A2(
																				$elm$json$Json$Decode$andThen,
																				function (id) {
																					return $elm$json$Json$Decode$succeed(
																						{id: id, label: label});
																				},
																				A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
																		},
																		A2(
																			$elm$json$Json$Decode$field,
																			'label',
																			A2(
																				$elm$json$Json$Decode$andThen,
																				function (pos) {
																					return A2(
																						$elm$json$Json$Decode$andThen,
																						function (label) {
																							return A2(
																								$elm$json$Json$Decode$andThen,
																								function (isMath) {
																									return $elm$json$Json$Decode$succeed(
																										{isMath: isMath, label: label, pos: pos});
																								},
																								A2($elm$json$Json$Decode$field, 'isMath', $elm$json$Json$Decode$bool));
																						},
																						A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																				},
																				A2(
																					$elm$json$Json$Decode$field,
																					'pos',
																					A2(
																						$elm$json$Json$Decode$andThen,
																						function (_v0) {
																							return A2(
																								$elm$json$Json$Decode$andThen,
																								function (_v1) {
																									return $elm$json$Json$Decode$succeed(
																										_Utils_Tuple2(_v0, _v1));
																								},
																								A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float));
																						},
																						A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float)))))))));
													},
													A2($elm$json$Json$Decode$field, 'sizeGrid', $elm$json$Json$Decode$int));
											},
											A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string)))))));
				},
				A2($elm$json$Json$Decode$field, 'scenario', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'setFirstTab', $elm$json$Json$Decode$bool)));
var $author$project$Main$loadedGraph11 = _Platform_incomingPort(
	'loadedGraph11',
	A2(
		$elm$json$Json$Decode$andThen,
		function (setFirstTab) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (scenario) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (graph) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (clipboard) {
									return $elm$json$Json$Decode$succeed(
										{clipboard: clipboard, graph: graph, scenario: scenario, setFirstTab: setFirstTab});
								},
								A2($elm$json$Json$Decode$field, 'clipboard', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'graph',
							A2(
								$elm$json$Json$Decode$andThen,
								function (tabs) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (latexPreamble) {
											return $elm$json$Json$Decode$succeed(
												{latexPreamble: latexPreamble, tabs: tabs});
										},
										A2($elm$json$Json$Decode$field, 'latexPreamble', $elm$json$Json$Decode$string));
								},
								A2(
									$elm$json$Json$Decode$field,
									'tabs',
									$elm$json$Json$Decode$list(
										A2(
											$elm$json$Json$Decode$andThen,
											function (title) {
												return A2(
													$elm$json$Json$Decode$andThen,
													function (sizeGrid) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (nodes) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (edges) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (active) {
																				return $elm$json$Json$Decode$succeed(
																					{active: active, edges: edges, nodes: nodes, sizeGrid: sizeGrid, title: title});
																			},
																			A2($elm$json$Json$Decode$field, 'active', $elm$json$Json$Decode$bool));
																	},
																	A2(
																		$elm$json$Json$Decode$field,
																		'edges',
																		$elm$json$Json$Decode$list(
																			A2(
																				$elm$json$Json$Decode$andThen,
																				function (to) {
																					return A2(
																						$elm$json$Json$Decode$andThen,
																						function (label) {
																							return A2(
																								$elm$json$Json$Decode$andThen,
																								function (id) {
																									return A2(
																										$elm$json$Json$Decode$andThen,
																										function (from) {
																											return $elm$json$Json$Decode$succeed(
																												{from: from, id: id, label: label, to: to});
																										},
																										A2($elm$json$Json$Decode$field, 'from', $elm$json$Json$Decode$int));
																								},
																								A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
																						},
																						A2(
																							$elm$json$Json$Decode$field,
																							'label',
																							A2(
																								$elm$json$Json$Decode$andThen,
																								function (zindex) {
																									return A2(
																										$elm$json$Json$Decode$andThen,
																										function (style) {
																											return A2(
																												$elm$json$Json$Decode$andThen,
																												function (label) {
																													return A2(
																														$elm$json$Json$Decode$andThen,
																														function (isPullshout) {
																															return $elm$json$Json$Decode$succeed(
																																{isPullshout: isPullshout, label: label, style: style, zindex: zindex});
																														},
																														A2($elm$json$Json$Decode$field, 'isPullshout', $elm$json$Json$Decode$bool));
																												},
																												A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																										},
																										A2(
																											$elm$json$Json$Decode$field,
																											'style',
																											A2(
																												$elm$json$Json$Decode$andThen,
																												function (tail) {
																													return A2(
																														$elm$json$Json$Decode$andThen,
																														function (position) {
																															return A2(
																																$elm$json$Json$Decode$andThen,
																																function (head) {
																																	return A2(
																																		$elm$json$Json$Decode$andThen,
																																		function (_double) {
																																			return A2(
																																				$elm$json$Json$Decode$andThen,
																																				function (dashed) {
																																					return A2(
																																						$elm$json$Json$Decode$andThen,
																																						function (color) {
																																							return A2(
																																								$elm$json$Json$Decode$andThen,
																																								function (bend) {
																																									return A2(
																																										$elm$json$Json$Decode$andThen,
																																										function (alignment) {
																																											return $elm$json$Json$Decode$succeed(
																																												{alignment: alignment, bend: bend, color: color, dashed: dashed, _double: _double, head: head, position: position, tail: tail});
																																										},
																																										A2($elm$json$Json$Decode$field, 'alignment', $elm$json$Json$Decode$string));
																																								},
																																								A2($elm$json$Json$Decode$field, 'bend', $elm$json$Json$Decode$float));
																																						},
																																						A2($elm$json$Json$Decode$field, 'color', $elm$json$Json$Decode$string));
																																				},
																																				A2($elm$json$Json$Decode$field, 'dashed', $elm$json$Json$Decode$bool));
																																		},
																																		A2($elm$json$Json$Decode$field, 'double', $elm$json$Json$Decode$bool));
																																},
																																A2($elm$json$Json$Decode$field, 'head', $elm$json$Json$Decode$string));
																														},
																														A2($elm$json$Json$Decode$field, 'position', $elm$json$Json$Decode$float));
																												},
																												A2($elm$json$Json$Decode$field, 'tail', $elm$json$Json$Decode$string))));
																								},
																								A2($elm$json$Json$Decode$field, 'zindex', $elm$json$Json$Decode$int))));
																				},
																				A2($elm$json$Json$Decode$field, 'to', $elm$json$Json$Decode$int)))));
															},
															A2(
																$elm$json$Json$Decode$field,
																'nodes',
																$elm$json$Json$Decode$list(
																	A2(
																		$elm$json$Json$Decode$andThen,
																		function (label) {
																			return A2(
																				$elm$json$Json$Decode$andThen,
																				function (id) {
																					return $elm$json$Json$Decode$succeed(
																						{id: id, label: label});
																				},
																				A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
																		},
																		A2(
																			$elm$json$Json$Decode$field,
																			'label',
																			A2(
																				$elm$json$Json$Decode$andThen,
																				function (zindex) {
																					return A2(
																						$elm$json$Json$Decode$andThen,
																						function (pos) {
																							return A2(
																								$elm$json$Json$Decode$andThen,
																								function (label) {
																									return A2(
																										$elm$json$Json$Decode$andThen,
																										function (isMath) {
																											return $elm$json$Json$Decode$succeed(
																												{isMath: isMath, label: label, pos: pos, zindex: zindex});
																										},
																										A2($elm$json$Json$Decode$field, 'isMath', $elm$json$Json$Decode$bool));
																								},
																								A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																						},
																						A2(
																							$elm$json$Json$Decode$field,
																							'pos',
																							A2(
																								$elm$json$Json$Decode$andThen,
																								function (_v0) {
																									return A2(
																										$elm$json$Json$Decode$andThen,
																										function (_v1) {
																											return $elm$json$Json$Decode$succeed(
																												_Utils_Tuple2(_v0, _v1));
																										},
																										A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float));
																								},
																								A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float))));
																				},
																				A2($elm$json$Json$Decode$field, 'zindex', $elm$json$Json$Decode$int)))))));
													},
													A2($elm$json$Json$Decode$field, 'sizeGrid', $elm$json$Json$Decode$int));
											},
											A2($elm$json$Json$Decode$field, 'title', $elm$json$Json$Decode$string)))))));
				},
				A2($elm$json$Json$Decode$field, 'scenario', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'setFirstTab', $elm$json$Json$Decode$bool)));
var $author$project$Main$loadedGraph2 = _Platform_incomingPort(
	'loadedGraph2',
	A2(
		$elm$json$Json$Decode$andThen,
		function (setFirstTab) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (scenario) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (graph) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (clipboard) {
									return $elm$json$Json$Decode$succeed(
										{clipboard: clipboard, graph: graph, scenario: scenario, setFirstTab: setFirstTab});
								},
								A2($elm$json$Json$Decode$field, 'clipboard', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'graph',
							A2(
								$elm$json$Json$Decode$andThen,
								function (nodes) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (edges) {
											return $elm$json$Json$Decode$succeed(
												{edges: edges, nodes: nodes});
										},
										A2(
											$elm$json$Json$Decode$field,
											'edges',
											$elm$json$Json$Decode$list(
												A2(
													$elm$json$Json$Decode$andThen,
													function (to) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (label) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (id) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (from) {
																				return $elm$json$Json$Decode$succeed(
																					{from: from, id: id, label: label, to: to});
																			},
																			A2($elm$json$Json$Decode$field, 'from', $elm$json$Json$Decode$int));
																	},
																	A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
															},
															A2(
																$elm$json$Json$Decode$field,
																'label',
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (style) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (label) {
																				return $elm$json$Json$Decode$succeed(
																					{label: label, style: style});
																			},
																			A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																	},
																	A2(
																		$elm$json$Json$Decode$field,
																		'style',
																		A2(
																			$elm$json$Json$Decode$andThen,
																			function (tail) {
																				return A2(
																					$elm$json$Json$Decode$andThen,
																					function (position) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (head) {
																								return A2(
																									$elm$json$Json$Decode$andThen,
																									function (_double) {
																										return A2(
																											$elm$json$Json$Decode$andThen,
																											function (dashed) {
																												return A2(
																													$elm$json$Json$Decode$andThen,
																													function (bend) {
																														return A2(
																															$elm$json$Json$Decode$andThen,
																															function (alignment) {
																																return $elm$json$Json$Decode$succeed(
																																	{alignment: alignment, bend: bend, dashed: dashed, _double: _double, head: head, position: position, tail: tail});
																															},
																															A2($elm$json$Json$Decode$field, 'alignment', $elm$json$Json$Decode$string));
																													},
																													A2($elm$json$Json$Decode$field, 'bend', $elm$json$Json$Decode$float));
																											},
																											A2($elm$json$Json$Decode$field, 'dashed', $elm$json$Json$Decode$bool));
																									},
																									A2($elm$json$Json$Decode$field, 'double', $elm$json$Json$Decode$bool));
																							},
																							A2($elm$json$Json$Decode$field, 'head', $elm$json$Json$Decode$string));
																					},
																					A2($elm$json$Json$Decode$field, 'position', $elm$json$Json$Decode$float));
																			},
																			A2($elm$json$Json$Decode$field, 'tail', $elm$json$Json$Decode$string))))));
													},
													A2($elm$json$Json$Decode$field, 'to', $elm$json$Json$Decode$int)))));
								},
								A2(
									$elm$json$Json$Decode$field,
									'nodes',
									$elm$json$Json$Decode$list(
										A2(
											$elm$json$Json$Decode$andThen,
											function (label) {
												return A2(
													$elm$json$Json$Decode$andThen,
													function (id) {
														return $elm$json$Json$Decode$succeed(
															{id: id, label: label});
													},
													A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
											},
											A2(
												$elm$json$Json$Decode$field,
												'label',
												A2(
													$elm$json$Json$Decode$andThen,
													function (pos) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (label) {
																return $elm$json$Json$Decode$succeed(
																	{label: label, pos: pos});
															},
															A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
													},
													A2(
														$elm$json$Json$Decode$field,
														'pos',
														A2(
															$elm$json$Json$Decode$andThen,
															function (_v0) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (_v1) {
																		return $elm$json$Json$Decode$succeed(
																			_Utils_Tuple2(_v0, _v1));
																	},
																	A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float));
															},
															A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float)))))))))));
				},
				A2($elm$json$Json$Decode$field, 'scenario', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'setFirstTab', $elm$json$Json$Decode$bool)));
var $author$project$Main$loadedGraph3 = _Platform_incomingPort(
	'loadedGraph3',
	A2(
		$elm$json$Json$Decode$andThen,
		function (setFirstTab) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (scenario) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (graph) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (clipboard) {
									return $elm$json$Json$Decode$succeed(
										{clipboard: clipboard, graph: graph, scenario: scenario, setFirstTab: setFirstTab});
								},
								A2($elm$json$Json$Decode$field, 'clipboard', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'graph',
							A2(
								$elm$json$Json$Decode$andThen,
								function (sizeGrid) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (nodes) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (edges) {
													return $elm$json$Json$Decode$succeed(
														{edges: edges, nodes: nodes, sizeGrid: sizeGrid});
												},
												A2(
													$elm$json$Json$Decode$field,
													'edges',
													$elm$json$Json$Decode$list(
														A2(
															$elm$json$Json$Decode$andThen,
															function (to) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (label) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (id) {
																				return A2(
																					$elm$json$Json$Decode$andThen,
																					function (from) {
																						return $elm$json$Json$Decode$succeed(
																							{from: from, id: id, label: label, to: to});
																					},
																					A2($elm$json$Json$Decode$field, 'from', $elm$json$Json$Decode$int));
																			},
																			A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
																	},
																	A2(
																		$elm$json$Json$Decode$field,
																		'label',
																		A2(
																			$elm$json$Json$Decode$andThen,
																			function (style) {
																				return A2(
																					$elm$json$Json$Decode$andThen,
																					function (label) {
																						return $elm$json$Json$Decode$succeed(
																							{label: label, style: style});
																					},
																					A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																			},
																			A2(
																				$elm$json$Json$Decode$field,
																				'style',
																				A2(
																					$elm$json$Json$Decode$andThen,
																					function (tail) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (position) {
																								return A2(
																									$elm$json$Json$Decode$andThen,
																									function (head) {
																										return A2(
																											$elm$json$Json$Decode$andThen,
																											function (_double) {
																												return A2(
																													$elm$json$Json$Decode$andThen,
																													function (dashed) {
																														return A2(
																															$elm$json$Json$Decode$andThen,
																															function (bend) {
																																return A2(
																																	$elm$json$Json$Decode$andThen,
																																	function (alignment) {
																																		return $elm$json$Json$Decode$succeed(
																																			{alignment: alignment, bend: bend, dashed: dashed, _double: _double, head: head, position: position, tail: tail});
																																	},
																																	A2($elm$json$Json$Decode$field, 'alignment', $elm$json$Json$Decode$string));
																															},
																															A2($elm$json$Json$Decode$field, 'bend', $elm$json$Json$Decode$float));
																													},
																													A2($elm$json$Json$Decode$field, 'dashed', $elm$json$Json$Decode$bool));
																											},
																											A2($elm$json$Json$Decode$field, 'double', $elm$json$Json$Decode$bool));
																									},
																									A2($elm$json$Json$Decode$field, 'head', $elm$json$Json$Decode$string));
																							},
																							A2($elm$json$Json$Decode$field, 'position', $elm$json$Json$Decode$float));
																					},
																					A2($elm$json$Json$Decode$field, 'tail', $elm$json$Json$Decode$string))))));
															},
															A2($elm$json$Json$Decode$field, 'to', $elm$json$Json$Decode$int)))));
										},
										A2(
											$elm$json$Json$Decode$field,
											'nodes',
											$elm$json$Json$Decode$list(
												A2(
													$elm$json$Json$Decode$andThen,
													function (label) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (id) {
																return $elm$json$Json$Decode$succeed(
																	{id: id, label: label});
															},
															A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
													},
													A2(
														$elm$json$Json$Decode$field,
														'label',
														A2(
															$elm$json$Json$Decode$andThen,
															function (pos) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (label) {
																		return $elm$json$Json$Decode$succeed(
																			{label: label, pos: pos});
																	},
																	A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
															},
															A2(
																$elm$json$Json$Decode$field,
																'pos',
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (_v0) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (_v1) {
																				return $elm$json$Json$Decode$succeed(
																					_Utils_Tuple2(_v0, _v1));
																			},
																			A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float));
																	},
																	A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float)))))))));
								},
								A2($elm$json$Json$Decode$field, 'sizeGrid', $elm$json$Json$Decode$int))));
				},
				A2($elm$json$Json$Decode$field, 'scenario', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'setFirstTab', $elm$json$Json$Decode$bool)));
var $author$project$Main$loadedGraph4 = _Platform_incomingPort(
	'loadedGraph4',
	A2(
		$elm$json$Json$Decode$andThen,
		function (setFirstTab) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (scenario) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (graph) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (clipboard) {
									return $elm$json$Json$Decode$succeed(
										{clipboard: clipboard, graph: graph, scenario: scenario, setFirstTab: setFirstTab});
								},
								A2($elm$json$Json$Decode$field, 'clipboard', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'graph',
							A2(
								$elm$json$Json$Decode$andThen,
								function (sizeGrid) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (nodes) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (edges) {
													return $elm$json$Json$Decode$succeed(
														{edges: edges, nodes: nodes, sizeGrid: sizeGrid});
												},
												A2(
													$elm$json$Json$Decode$field,
													'edges',
													$elm$json$Json$Decode$list(
														A2(
															$elm$json$Json$Decode$andThen,
															function (to) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (label) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (id) {
																				return A2(
																					$elm$json$Json$Decode$andThen,
																					function (from) {
																						return $elm$json$Json$Decode$succeed(
																							{from: from, id: id, label: label, to: to});
																					},
																					A2($elm$json$Json$Decode$field, 'from', $elm$json$Json$Decode$int));
																			},
																			A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
																	},
																	A2(
																		$elm$json$Json$Decode$field,
																		'label',
																		A2(
																			$elm$json$Json$Decode$andThen,
																			function (style) {
																				return A2(
																					$elm$json$Json$Decode$andThen,
																					function (label) {
																						return $elm$json$Json$Decode$succeed(
																							{label: label, style: style});
																					},
																					A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																			},
																			A2(
																				$elm$json$Json$Decode$field,
																				'style',
																				A2(
																					$elm$json$Json$Decode$andThen,
																					function (tail) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (position) {
																								return A2(
																									$elm$json$Json$Decode$andThen,
																									function (head) {
																										return A2(
																											$elm$json$Json$Decode$andThen,
																											function (_double) {
																												return A2(
																													$elm$json$Json$Decode$andThen,
																													function (dashed) {
																														return A2(
																															$elm$json$Json$Decode$andThen,
																															function (bend) {
																																return A2(
																																	$elm$json$Json$Decode$andThen,
																																	function (alignment) {
																																		return $elm$json$Json$Decode$succeed(
																																			{alignment: alignment, bend: bend, dashed: dashed, _double: _double, head: head, position: position, tail: tail});
																																	},
																																	A2($elm$json$Json$Decode$field, 'alignment', $elm$json$Json$Decode$string));
																															},
																															A2($elm$json$Json$Decode$field, 'bend', $elm$json$Json$Decode$float));
																													},
																													A2($elm$json$Json$Decode$field, 'dashed', $elm$json$Json$Decode$bool));
																											},
																											A2($elm$json$Json$Decode$field, 'double', $elm$json$Json$Decode$bool));
																									},
																									A2($elm$json$Json$Decode$field, 'head', $elm$json$Json$Decode$string));
																							},
																							A2($elm$json$Json$Decode$field, 'position', $elm$json$Json$Decode$float));
																					},
																					A2($elm$json$Json$Decode$field, 'tail', $elm$json$Json$Decode$string))))));
															},
															A2($elm$json$Json$Decode$field, 'to', $elm$json$Json$Decode$int)))));
										},
										A2(
											$elm$json$Json$Decode$field,
											'nodes',
											$elm$json$Json$Decode$list(
												A2(
													$elm$json$Json$Decode$andThen,
													function (label) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (id) {
																return $elm$json$Json$Decode$succeed(
																	{id: id, label: label});
															},
															A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
													},
													A2(
														$elm$json$Json$Decode$field,
														'label',
														A2(
															$elm$json$Json$Decode$andThen,
															function (pos) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (label) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (isMath) {
																				return $elm$json$Json$Decode$succeed(
																					{isMath: isMath, label: label, pos: pos});
																			},
																			A2($elm$json$Json$Decode$field, 'isMath', $elm$json$Json$Decode$bool));
																	},
																	A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
															},
															A2(
																$elm$json$Json$Decode$field,
																'pos',
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (_v0) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (_v1) {
																				return $elm$json$Json$Decode$succeed(
																					_Utils_Tuple2(_v0, _v1));
																			},
																			A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float));
																	},
																	A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float)))))))));
								},
								A2($elm$json$Json$Decode$field, 'sizeGrid', $elm$json$Json$Decode$int))));
				},
				A2($elm$json$Json$Decode$field, 'scenario', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'setFirstTab', $elm$json$Json$Decode$bool)));
var $author$project$Main$loadedGraph5 = _Platform_incomingPort(
	'loadedGraph5',
	A2(
		$elm$json$Json$Decode$andThen,
		function (setFirstTab) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (scenario) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (graph) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (clipboard) {
									return $elm$json$Json$Decode$succeed(
										{clipboard: clipboard, graph: graph, scenario: scenario, setFirstTab: setFirstTab});
								},
								A2($elm$json$Json$Decode$field, 'clipboard', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'graph',
							A2(
								$elm$json$Json$Decode$andThen,
								function (sizeGrid) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (nodes) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (latexPreamble) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (edges) {
															return $elm$json$Json$Decode$succeed(
																{edges: edges, latexPreamble: latexPreamble, nodes: nodes, sizeGrid: sizeGrid});
														},
														A2(
															$elm$json$Json$Decode$field,
															'edges',
															$elm$json$Json$Decode$list(
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (to) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (label) {
																				return A2(
																					$elm$json$Json$Decode$andThen,
																					function (id) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (from) {
																								return $elm$json$Json$Decode$succeed(
																									{from: from, id: id, label: label, to: to});
																							},
																							A2($elm$json$Json$Decode$field, 'from', $elm$json$Json$Decode$int));
																					},
																					A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
																			},
																			A2(
																				$elm$json$Json$Decode$field,
																				'label',
																				A2(
																					$elm$json$Json$Decode$andThen,
																					function (style) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (label) {
																								return $elm$json$Json$Decode$succeed(
																									{label: label, style: style});
																							},
																							A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																					},
																					A2(
																						$elm$json$Json$Decode$field,
																						'style',
																						A2(
																							$elm$json$Json$Decode$andThen,
																							function (tail) {
																								return A2(
																									$elm$json$Json$Decode$andThen,
																									function (position) {
																										return A2(
																											$elm$json$Json$Decode$andThen,
																											function (head) {
																												return A2(
																													$elm$json$Json$Decode$andThen,
																													function (_double) {
																														return A2(
																															$elm$json$Json$Decode$andThen,
																															function (dashed) {
																																return A2(
																																	$elm$json$Json$Decode$andThen,
																																	function (bend) {
																																		return A2(
																																			$elm$json$Json$Decode$andThen,
																																			function (alignment) {
																																				return $elm$json$Json$Decode$succeed(
																																					{alignment: alignment, bend: bend, dashed: dashed, _double: _double, head: head, position: position, tail: tail});
																																			},
																																			A2($elm$json$Json$Decode$field, 'alignment', $elm$json$Json$Decode$string));
																																	},
																																	A2($elm$json$Json$Decode$field, 'bend', $elm$json$Json$Decode$float));
																															},
																															A2($elm$json$Json$Decode$field, 'dashed', $elm$json$Json$Decode$bool));
																													},
																													A2($elm$json$Json$Decode$field, 'double', $elm$json$Json$Decode$bool));
																											},
																											A2($elm$json$Json$Decode$field, 'head', $elm$json$Json$Decode$string));
																									},
																									A2($elm$json$Json$Decode$field, 'position', $elm$json$Json$Decode$float));
																							},
																							A2($elm$json$Json$Decode$field, 'tail', $elm$json$Json$Decode$string))))));
																	},
																	A2($elm$json$Json$Decode$field, 'to', $elm$json$Json$Decode$int)))));
												},
												A2($elm$json$Json$Decode$field, 'latexPreamble', $elm$json$Json$Decode$string));
										},
										A2(
											$elm$json$Json$Decode$field,
											'nodes',
											$elm$json$Json$Decode$list(
												A2(
													$elm$json$Json$Decode$andThen,
													function (label) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (id) {
																return $elm$json$Json$Decode$succeed(
																	{id: id, label: label});
															},
															A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
													},
													A2(
														$elm$json$Json$Decode$field,
														'label',
														A2(
															$elm$json$Json$Decode$andThen,
															function (pos) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (label) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (isMath) {
																				return $elm$json$Json$Decode$succeed(
																					{isMath: isMath, label: label, pos: pos});
																			},
																			A2($elm$json$Json$Decode$field, 'isMath', $elm$json$Json$Decode$bool));
																	},
																	A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
															},
															A2(
																$elm$json$Json$Decode$field,
																'pos',
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (_v0) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (_v1) {
																				return $elm$json$Json$Decode$succeed(
																					_Utils_Tuple2(_v0, _v1));
																			},
																			A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float));
																	},
																	A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float)))))))));
								},
								A2($elm$json$Json$Decode$field, 'sizeGrid', $elm$json$Json$Decode$int))));
				},
				A2($elm$json$Json$Decode$field, 'scenario', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'setFirstTab', $elm$json$Json$Decode$bool)));
var $author$project$Main$loadedGraph6 = _Platform_incomingPort(
	'loadedGraph6',
	A2(
		$elm$json$Json$Decode$andThen,
		function (setFirstTab) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (scenario) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (graph) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (clipboard) {
									return $elm$json$Json$Decode$succeed(
										{clipboard: clipboard, graph: graph, scenario: scenario, setFirstTab: setFirstTab});
								},
								A2($elm$json$Json$Decode$field, 'clipboard', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'graph',
							A2(
								$elm$json$Json$Decode$andThen,
								function (sizeGrid) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (nodes) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (latexPreamble) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (edges) {
															return $elm$json$Json$Decode$succeed(
																{edges: edges, latexPreamble: latexPreamble, nodes: nodes, sizeGrid: sizeGrid});
														},
														A2(
															$elm$json$Json$Decode$field,
															'edges',
															$elm$json$Json$Decode$list(
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (to) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (label) {
																				return A2(
																					$elm$json$Json$Decode$andThen,
																					function (id) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (from) {
																								return $elm$json$Json$Decode$succeed(
																									{from: from, id: id, label: label, to: to});
																							},
																							A2($elm$json$Json$Decode$field, 'from', $elm$json$Json$Decode$int));
																					},
																					A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
																			},
																			A2(
																				$elm$json$Json$Decode$field,
																				'label',
																				A2(
																					$elm$json$Json$Decode$andThen,
																					function (style) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (label) {
																								return A2(
																									$elm$json$Json$Decode$andThen,
																									function (isPullback) {
																										return $elm$json$Json$Decode$succeed(
																											{isPullback: isPullback, label: label, style: style});
																									},
																									A2($elm$json$Json$Decode$field, 'isPullback', $elm$json$Json$Decode$bool));
																							},
																							A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																					},
																					A2(
																						$elm$json$Json$Decode$field,
																						'style',
																						A2(
																							$elm$json$Json$Decode$andThen,
																							function (tail) {
																								return A2(
																									$elm$json$Json$Decode$andThen,
																									function (position) {
																										return A2(
																											$elm$json$Json$Decode$andThen,
																											function (head) {
																												return A2(
																													$elm$json$Json$Decode$andThen,
																													function (_double) {
																														return A2(
																															$elm$json$Json$Decode$andThen,
																															function (dashed) {
																																return A2(
																																	$elm$json$Json$Decode$andThen,
																																	function (bend) {
																																		return A2(
																																			$elm$json$Json$Decode$andThen,
																																			function (alignment) {
																																				return $elm$json$Json$Decode$succeed(
																																					{alignment: alignment, bend: bend, dashed: dashed, _double: _double, head: head, position: position, tail: tail});
																																			},
																																			A2($elm$json$Json$Decode$field, 'alignment', $elm$json$Json$Decode$string));
																																	},
																																	A2($elm$json$Json$Decode$field, 'bend', $elm$json$Json$Decode$float));
																															},
																															A2($elm$json$Json$Decode$field, 'dashed', $elm$json$Json$Decode$bool));
																													},
																													A2($elm$json$Json$Decode$field, 'double', $elm$json$Json$Decode$bool));
																											},
																											A2($elm$json$Json$Decode$field, 'head', $elm$json$Json$Decode$string));
																									},
																									A2($elm$json$Json$Decode$field, 'position', $elm$json$Json$Decode$float));
																							},
																							A2($elm$json$Json$Decode$field, 'tail', $elm$json$Json$Decode$string))))));
																	},
																	A2($elm$json$Json$Decode$field, 'to', $elm$json$Json$Decode$int)))));
												},
												A2($elm$json$Json$Decode$field, 'latexPreamble', $elm$json$Json$Decode$string));
										},
										A2(
											$elm$json$Json$Decode$field,
											'nodes',
											$elm$json$Json$Decode$list(
												A2(
													$elm$json$Json$Decode$andThen,
													function (label) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (id) {
																return $elm$json$Json$Decode$succeed(
																	{id: id, label: label});
															},
															A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
													},
													A2(
														$elm$json$Json$Decode$field,
														'label',
														A2(
															$elm$json$Json$Decode$andThen,
															function (pos) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (label) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (isMath) {
																				return $elm$json$Json$Decode$succeed(
																					{isMath: isMath, label: label, pos: pos});
																			},
																			A2($elm$json$Json$Decode$field, 'isMath', $elm$json$Json$Decode$bool));
																	},
																	A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
															},
															A2(
																$elm$json$Json$Decode$field,
																'pos',
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (_v0) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (_v1) {
																				return $elm$json$Json$Decode$succeed(
																					_Utils_Tuple2(_v0, _v1));
																			},
																			A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float));
																	},
																	A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float)))))))));
								},
								A2($elm$json$Json$Decode$field, 'sizeGrid', $elm$json$Json$Decode$int))));
				},
				A2($elm$json$Json$Decode$field, 'scenario', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'setFirstTab', $elm$json$Json$Decode$bool)));
var $author$project$Main$loadedGraph7 = _Platform_incomingPort(
	'loadedGraph7',
	A2(
		$elm$json$Json$Decode$andThen,
		function (setFirstTab) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (scenario) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (graph) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (clipboard) {
									return $elm$json$Json$Decode$succeed(
										{clipboard: clipboard, graph: graph, scenario: scenario, setFirstTab: setFirstTab});
								},
								A2($elm$json$Json$Decode$field, 'clipboard', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'graph',
							A2(
								$elm$json$Json$Decode$andThen,
								function (sizeGrid) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (nodes) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (latexPreamble) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (edges) {
															return $elm$json$Json$Decode$succeed(
																{edges: edges, latexPreamble: latexPreamble, nodes: nodes, sizeGrid: sizeGrid});
														},
														A2(
															$elm$json$Json$Decode$field,
															'edges',
															$elm$json$Json$Decode$list(
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (to) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (label) {
																				return A2(
																					$elm$json$Json$Decode$andThen,
																					function (id) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (from) {
																								return $elm$json$Json$Decode$succeed(
																									{from: from, id: id, label: label, to: to});
																							},
																							A2($elm$json$Json$Decode$field, 'from', $elm$json$Json$Decode$int));
																					},
																					A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
																			},
																			A2(
																				$elm$json$Json$Decode$field,
																				'label',
																				A2(
																					$elm$json$Json$Decode$andThen,
																					function (zindex) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (style) {
																								return A2(
																									$elm$json$Json$Decode$andThen,
																									function (label) {
																										return A2(
																											$elm$json$Json$Decode$andThen,
																											function (isPullback) {
																												return $elm$json$Json$Decode$succeed(
																													{isPullback: isPullback, label: label, style: style, zindex: zindex});
																											},
																											A2($elm$json$Json$Decode$field, 'isPullback', $elm$json$Json$Decode$bool));
																									},
																									A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																							},
																							A2(
																								$elm$json$Json$Decode$field,
																								'style',
																								A2(
																									$elm$json$Json$Decode$andThen,
																									function (tail) {
																										return A2(
																											$elm$json$Json$Decode$andThen,
																											function (position) {
																												return A2(
																													$elm$json$Json$Decode$andThen,
																													function (head) {
																														return A2(
																															$elm$json$Json$Decode$andThen,
																															function (_double) {
																																return A2(
																																	$elm$json$Json$Decode$andThen,
																																	function (dashed) {
																																		return A2(
																																			$elm$json$Json$Decode$andThen,
																																			function (bend) {
																																				return A2(
																																					$elm$json$Json$Decode$andThen,
																																					function (alignment) {
																																						return $elm$json$Json$Decode$succeed(
																																							{alignment: alignment, bend: bend, dashed: dashed, _double: _double, head: head, position: position, tail: tail});
																																					},
																																					A2($elm$json$Json$Decode$field, 'alignment', $elm$json$Json$Decode$string));
																																			},
																																			A2($elm$json$Json$Decode$field, 'bend', $elm$json$Json$Decode$float));
																																	},
																																	A2($elm$json$Json$Decode$field, 'dashed', $elm$json$Json$Decode$bool));
																															},
																															A2($elm$json$Json$Decode$field, 'double', $elm$json$Json$Decode$bool));
																													},
																													A2($elm$json$Json$Decode$field, 'head', $elm$json$Json$Decode$string));
																											},
																											A2($elm$json$Json$Decode$field, 'position', $elm$json$Json$Decode$float));
																									},
																									A2($elm$json$Json$Decode$field, 'tail', $elm$json$Json$Decode$string))));
																					},
																					A2($elm$json$Json$Decode$field, 'zindex', $elm$json$Json$Decode$int))));
																	},
																	A2($elm$json$Json$Decode$field, 'to', $elm$json$Json$Decode$int)))));
												},
												A2($elm$json$Json$Decode$field, 'latexPreamble', $elm$json$Json$Decode$string));
										},
										A2(
											$elm$json$Json$Decode$field,
											'nodes',
											$elm$json$Json$Decode$list(
												A2(
													$elm$json$Json$Decode$andThen,
													function (label) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (id) {
																return $elm$json$Json$Decode$succeed(
																	{id: id, label: label});
															},
															A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
													},
													A2(
														$elm$json$Json$Decode$field,
														'label',
														A2(
															$elm$json$Json$Decode$andThen,
															function (pos) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (label) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (isMath) {
																				return $elm$json$Json$Decode$succeed(
																					{isMath: isMath, label: label, pos: pos});
																			},
																			A2($elm$json$Json$Decode$field, 'isMath', $elm$json$Json$Decode$bool));
																	},
																	A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
															},
															A2(
																$elm$json$Json$Decode$field,
																'pos',
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (_v0) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (_v1) {
																				return $elm$json$Json$Decode$succeed(
																					_Utils_Tuple2(_v0, _v1));
																			},
																			A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float));
																	},
																	A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float)))))))));
								},
								A2($elm$json$Json$Decode$field, 'sizeGrid', $elm$json$Json$Decode$int))));
				},
				A2($elm$json$Json$Decode$field, 'scenario', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'setFirstTab', $elm$json$Json$Decode$bool)));
var $author$project$Main$loadedGraph8 = _Platform_incomingPort(
	'loadedGraph8',
	A2(
		$elm$json$Json$Decode$andThen,
		function (setFirstTab) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (scenario) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (graph) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (clipboard) {
									return $elm$json$Json$Decode$succeed(
										{clipboard: clipboard, graph: graph, scenario: scenario, setFirstTab: setFirstTab});
								},
								A2($elm$json$Json$Decode$field, 'clipboard', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'graph',
							A2(
								$elm$json$Json$Decode$andThen,
								function (sizeGrid) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (nodes) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (latexPreamble) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (edges) {
															return $elm$json$Json$Decode$succeed(
																{edges: edges, latexPreamble: latexPreamble, nodes: nodes, sizeGrid: sizeGrid});
														},
														A2(
															$elm$json$Json$Decode$field,
															'edges',
															$elm$json$Json$Decode$list(
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (to) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (label) {
																				return A2(
																					$elm$json$Json$Decode$andThen,
																					function (id) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (from) {
																								return $elm$json$Json$Decode$succeed(
																									{from: from, id: id, label: label, to: to});
																							},
																							A2($elm$json$Json$Decode$field, 'from', $elm$json$Json$Decode$int));
																					},
																					A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
																			},
																			A2(
																				$elm$json$Json$Decode$field,
																				'label',
																				A2(
																					$elm$json$Json$Decode$andThen,
																					function (zindex) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (style) {
																								return A2(
																									$elm$json$Json$Decode$andThen,
																									function (label) {
																										return A2(
																											$elm$json$Json$Decode$andThen,
																											function (isPullshout) {
																												return $elm$json$Json$Decode$succeed(
																													{isPullshout: isPullshout, label: label, style: style, zindex: zindex});
																											},
																											A2($elm$json$Json$Decode$field, 'isPullshout', $elm$json$Json$Decode$bool));
																									},
																									A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																							},
																							A2(
																								$elm$json$Json$Decode$field,
																								'style',
																								A2(
																									$elm$json$Json$Decode$andThen,
																									function (tail) {
																										return A2(
																											$elm$json$Json$Decode$andThen,
																											function (position) {
																												return A2(
																													$elm$json$Json$Decode$andThen,
																													function (head) {
																														return A2(
																															$elm$json$Json$Decode$andThen,
																															function (_double) {
																																return A2(
																																	$elm$json$Json$Decode$andThen,
																																	function (dashed) {
																																		return A2(
																																			$elm$json$Json$Decode$andThen,
																																			function (bend) {
																																				return A2(
																																					$elm$json$Json$Decode$andThen,
																																					function (alignment) {
																																						return $elm$json$Json$Decode$succeed(
																																							{alignment: alignment, bend: bend, dashed: dashed, _double: _double, head: head, position: position, tail: tail});
																																					},
																																					A2($elm$json$Json$Decode$field, 'alignment', $elm$json$Json$Decode$string));
																																			},
																																			A2($elm$json$Json$Decode$field, 'bend', $elm$json$Json$Decode$float));
																																	},
																																	A2($elm$json$Json$Decode$field, 'dashed', $elm$json$Json$Decode$bool));
																															},
																															A2($elm$json$Json$Decode$field, 'double', $elm$json$Json$Decode$bool));
																													},
																													A2($elm$json$Json$Decode$field, 'head', $elm$json$Json$Decode$string));
																											},
																											A2($elm$json$Json$Decode$field, 'position', $elm$json$Json$Decode$float));
																									},
																									A2($elm$json$Json$Decode$field, 'tail', $elm$json$Json$Decode$string))));
																					},
																					A2($elm$json$Json$Decode$field, 'zindex', $elm$json$Json$Decode$int))));
																	},
																	A2($elm$json$Json$Decode$field, 'to', $elm$json$Json$Decode$int)))));
												},
												A2($elm$json$Json$Decode$field, 'latexPreamble', $elm$json$Json$Decode$string));
										},
										A2(
											$elm$json$Json$Decode$field,
											'nodes',
											$elm$json$Json$Decode$list(
												A2(
													$elm$json$Json$Decode$andThen,
													function (label) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (id) {
																return $elm$json$Json$Decode$succeed(
																	{id: id, label: label});
															},
															A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
													},
													A2(
														$elm$json$Json$Decode$field,
														'label',
														A2(
															$elm$json$Json$Decode$andThen,
															function (pos) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (label) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (isMath) {
																				return $elm$json$Json$Decode$succeed(
																					{isMath: isMath, label: label, pos: pos});
																			},
																			A2($elm$json$Json$Decode$field, 'isMath', $elm$json$Json$Decode$bool));
																	},
																	A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
															},
															A2(
																$elm$json$Json$Decode$field,
																'pos',
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (_v0) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (_v1) {
																				return $elm$json$Json$Decode$succeed(
																					_Utils_Tuple2(_v0, _v1));
																			},
																			A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float));
																	},
																	A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float)))))))));
								},
								A2($elm$json$Json$Decode$field, 'sizeGrid', $elm$json$Json$Decode$int))));
				},
				A2($elm$json$Json$Decode$field, 'scenario', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'setFirstTab', $elm$json$Json$Decode$bool)));
var $author$project$Main$loadedGraph9 = _Platform_incomingPort(
	'loadedGraph9',
	A2(
		$elm$json$Json$Decode$andThen,
		function (setFirstTab) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (scenario) {
					return A2(
						$elm$json$Json$Decode$andThen,
						function (graph) {
							return A2(
								$elm$json$Json$Decode$andThen,
								function (clipboard) {
									return $elm$json$Json$Decode$succeed(
										{clipboard: clipboard, graph: graph, scenario: scenario, setFirstTab: setFirstTab});
								},
								A2($elm$json$Json$Decode$field, 'clipboard', $elm$json$Json$Decode$bool));
						},
						A2(
							$elm$json$Json$Decode$field,
							'graph',
							A2(
								$elm$json$Json$Decode$andThen,
								function (sizeGrid) {
									return A2(
										$elm$json$Json$Decode$andThen,
										function (nodes) {
											return A2(
												$elm$json$Json$Decode$andThen,
												function (latexPreamble) {
													return A2(
														$elm$json$Json$Decode$andThen,
														function (edges) {
															return $elm$json$Json$Decode$succeed(
																{edges: edges, latexPreamble: latexPreamble, nodes: nodes, sizeGrid: sizeGrid});
														},
														A2(
															$elm$json$Json$Decode$field,
															'edges',
															$elm$json$Json$Decode$list(
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (to) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (label) {
																				return A2(
																					$elm$json$Json$Decode$andThen,
																					function (id) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (from) {
																								return $elm$json$Json$Decode$succeed(
																									{from: from, id: id, label: label, to: to});
																							},
																							A2($elm$json$Json$Decode$field, 'from', $elm$json$Json$Decode$int));
																					},
																					A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
																			},
																			A2(
																				$elm$json$Json$Decode$field,
																				'label',
																				A2(
																					$elm$json$Json$Decode$andThen,
																					function (zindex) {
																						return A2(
																							$elm$json$Json$Decode$andThen,
																							function (style) {
																								return A2(
																									$elm$json$Json$Decode$andThen,
																									function (label) {
																										return A2(
																											$elm$json$Json$Decode$andThen,
																											function (isPullshout) {
																												return $elm$json$Json$Decode$succeed(
																													{isPullshout: isPullshout, label: label, style: style, zindex: zindex});
																											},
																											A2($elm$json$Json$Decode$field, 'isPullshout', $elm$json$Json$Decode$bool));
																									},
																									A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
																							},
																							A2(
																								$elm$json$Json$Decode$field,
																								'style',
																								A2(
																									$elm$json$Json$Decode$andThen,
																									function (tail) {
																										return A2(
																											$elm$json$Json$Decode$andThen,
																											function (position) {
																												return A2(
																													$elm$json$Json$Decode$andThen,
																													function (head) {
																														return A2(
																															$elm$json$Json$Decode$andThen,
																															function (_double) {
																																return A2(
																																	$elm$json$Json$Decode$andThen,
																																	function (dashed) {
																																		return A2(
																																			$elm$json$Json$Decode$andThen,
																																			function (color) {
																																				return A2(
																																					$elm$json$Json$Decode$andThen,
																																					function (bend) {
																																						return A2(
																																							$elm$json$Json$Decode$andThen,
																																							function (alignment) {
																																								return $elm$json$Json$Decode$succeed(
																																									{alignment: alignment, bend: bend, color: color, dashed: dashed, _double: _double, head: head, position: position, tail: tail});
																																							},
																																							A2($elm$json$Json$Decode$field, 'alignment', $elm$json$Json$Decode$string));
																																					},
																																					A2($elm$json$Json$Decode$field, 'bend', $elm$json$Json$Decode$float));
																																			},
																																			A2($elm$json$Json$Decode$field, 'color', $elm$json$Json$Decode$string));
																																	},
																																	A2($elm$json$Json$Decode$field, 'dashed', $elm$json$Json$Decode$bool));
																															},
																															A2($elm$json$Json$Decode$field, 'double', $elm$json$Json$Decode$bool));
																													},
																													A2($elm$json$Json$Decode$field, 'head', $elm$json$Json$Decode$string));
																											},
																											A2($elm$json$Json$Decode$field, 'position', $elm$json$Json$Decode$float));
																									},
																									A2($elm$json$Json$Decode$field, 'tail', $elm$json$Json$Decode$string))));
																					},
																					A2($elm$json$Json$Decode$field, 'zindex', $elm$json$Json$Decode$int))));
																	},
																	A2($elm$json$Json$Decode$field, 'to', $elm$json$Json$Decode$int)))));
												},
												A2($elm$json$Json$Decode$field, 'latexPreamble', $elm$json$Json$Decode$string));
										},
										A2(
											$elm$json$Json$Decode$field,
											'nodes',
											$elm$json$Json$Decode$list(
												A2(
													$elm$json$Json$Decode$andThen,
													function (label) {
														return A2(
															$elm$json$Json$Decode$andThen,
															function (id) {
																return $elm$json$Json$Decode$succeed(
																	{id: id, label: label});
															},
															A2($elm$json$Json$Decode$field, 'id', $elm$json$Json$Decode$int));
													},
													A2(
														$elm$json$Json$Decode$field,
														'label',
														A2(
															$elm$json$Json$Decode$andThen,
															function (pos) {
																return A2(
																	$elm$json$Json$Decode$andThen,
																	function (label) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (isMath) {
																				return $elm$json$Json$Decode$succeed(
																					{isMath: isMath, label: label, pos: pos});
																			},
																			A2($elm$json$Json$Decode$field, 'isMath', $elm$json$Json$Decode$bool));
																	},
																	A2($elm$json$Json$Decode$field, 'label', $elm$json$Json$Decode$string));
															},
															A2(
																$elm$json$Json$Decode$field,
																'pos',
																A2(
																	$elm$json$Json$Decode$andThen,
																	function (_v0) {
																		return A2(
																			$elm$json$Json$Decode$andThen,
																			function (_v1) {
																				return $elm$json$Json$Decode$succeed(
																					_Utils_Tuple2(_v0, _v1));
																			},
																			A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float));
																	},
																	A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float)))))))));
								},
								A2($elm$json$Json$Decode$field, 'sizeGrid', $elm$json$Json$Decode$int))));
				},
				A2($elm$json$Json$Decode$field, 'scenario', $elm$json$Json$Decode$string));
		},
		A2($elm$json$Json$Decode$field, 'setFirstTab', $elm$json$Json$Decode$bool)));
var $author$project$Msg$mapLoadGraphInfo = F2(
	function (f, _v0) {
		var graph = _v0.graph;
		var scenario = _v0.scenario;
		var clipboard = _v0.clipboard;
		var setFirstTab = _v0.setFirstTab;
		return {
			clipboard: clipboard,
			graph: f(graph),
			scenario: scenario,
			setFirstTab: setFirstTab
		};
	});
var $author$project$Msg$noOp = $author$project$Msg$Do($elm$core$Platform$Cmd$none);
var $elm$core$Basics$not = _Basics_not;
var $elm$browser$Browser$Events$Document = {$: 'Document'};
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.key;
		var event = _v0.event;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onClick = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'click');
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $author$project$Main$onCopy = _Platform_incomingPort(
	'onCopy',
	$elm$json$Json$Decode$null(_Utils_Tuple0));
var $elm$browser$Browser$Events$onKeyDown = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keydown');
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $author$project$Main$onKeyDownActive = _Platform_incomingPort('onKeyDownActive', $elm$json$Json$Decode$value);
var $elm$browser$Browser$Events$onKeyUp = A2($elm$browser$Browser$Events$on, $elm$browser$Browser$Events$Document, 'keyup');
var $author$project$Main$onMouseMoveFromJS = _Platform_incomingPort(
	'onMouseMoveFromJS',
	A2(
		$elm$json$Json$Decode$andThen,
		function (_v0) {
			return A2(
				$elm$json$Json$Decode$andThen,
				function (_v1) {
					return $elm$json$Json$Decode$succeed(
						_Utils_Tuple2(_v0, _v1));
				},
				A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$float));
		},
		A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$float)));
var $author$project$Main$preventDefault = _Platform_outgoingPort('preventDefault', $elm$core$Basics$identity);
var $author$project$Main$promptedEquation = _Platform_incomingPort('promptedEquation', $elm$json$Json$Decode$string);
var $author$project$Main$promptedTabTitle = _Platform_incomingPort('promptedTabTitle', $elm$json$Json$Decode$string);
var $author$project$Main$renameFile = _Platform_incomingPort('renameFile', $elm$json$Json$Decode$string);
var $author$project$Msg$CoqLsp = {$: 'CoqLsp'};
var $author$project$Msg$Exercise1 = {$: 'Exercise1'};
var $author$project$Msg$scenarioOfString = function (s) {
	switch (s) {
		case 'exercise1':
			return $author$project$Msg$Exercise1;
		case 'watch':
			return $author$project$Msg$Watch;
		case 'coqlsp':
			return $author$project$Msg$CoqLsp;
		default:
			return $author$project$Msg$Standard;
	}
};
var $author$project$Main$setFirstTabEquation = _Platform_incomingPort('setFirstTabEquation', $elm$json$Json$Decode$string);
var $author$project$Main$simpleMsg = _Platform_incomingPort('simpleMsg', $elm$json$Json$Decode$string);
var $elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var $author$project$Main$subscriptions = function (m) {
	return $elm$core$Platform$Sub$batch(
		_Utils_ap(
			_List_fromArray(
				[
					$author$project$Main$findReplace($author$project$Msg$FindReplace),
					$author$project$Main$simpleMsg($author$project$Msg$SimpleMsg),
					$author$project$Main$renameFile($author$project$Msg$FileName),
					$author$project$Main$promptedTabTitle($author$project$Msg$RenameTab),
					$author$project$Main$clear(
					function (_v0) {
						var scenario = _v0.scenario;
						var preamble = _v0.preamble;
						return $author$project$Msg$Clear(
							{
								preamble: preamble,
								scenario: $author$project$Msg$scenarioOfString(scenario)
							});
					}),
					$author$project$Main$loadedGraph0(
					A2(
						$elm$core$Basics$composeR,
						$author$project$Msg$mapLoadGraphInfo($author$project$Format$Version0$fromJSGraph),
						$author$project$Msg$loadGraphInfoToMsg)),
					$author$project$Main$loadedGraph1(
					A2(
						$elm$core$Basics$composeR,
						$author$project$Msg$mapLoadGraphInfo($author$project$Format$Version1$fromJSGraph),
						$author$project$Msg$loadGraphInfoToMsg)),
					$author$project$Main$loadedGraph2(
					A2(
						$elm$core$Basics$composeR,
						$author$project$Msg$mapLoadGraphInfo($author$project$Format$Version2$fromJSGraph),
						$author$project$Msg$loadGraphInfoToMsg)),
					$author$project$Main$loadedGraph3(
					A2(
						$elm$core$Basics$composeR,
						$author$project$Msg$mapLoadGraphInfo($author$project$Format$Version3$fromJSGraph),
						$author$project$Msg$loadGraphInfoToMsg)),
					$author$project$Main$loadedGraph4(
					A2(
						$elm$core$Basics$composeR,
						$author$project$Msg$mapLoadGraphInfo($author$project$Format$Version4$fromJSGraph),
						$author$project$Msg$loadGraphInfoToMsg)),
					$author$project$Main$loadedGraph5(
					A2(
						$elm$core$Basics$composeR,
						$author$project$Msg$mapLoadGraphInfo($author$project$Format$Version5$fromJSGraph),
						$author$project$Msg$loadGraphInfoToMsg)),
					$author$project$Main$loadedGraph6(
					A2(
						$elm$core$Basics$composeR,
						$author$project$Msg$mapLoadGraphInfo($author$project$Format$Version6$fromJSGraph),
						$author$project$Msg$loadGraphInfoToMsg)),
					$author$project$Main$loadedGraph7(
					A2(
						$elm$core$Basics$composeR,
						$author$project$Msg$mapLoadGraphInfo($author$project$Format$Version7$fromJSGraph),
						$author$project$Msg$loadGraphInfoToMsg)),
					$author$project$Main$loadedGraph8(
					A2(
						$elm$core$Basics$composeR,
						$author$project$Msg$mapLoadGraphInfo($author$project$Format$Version8$fromJSGraph),
						$author$project$Msg$loadGraphInfoToMsg)),
					$author$project$Main$loadedGraph9(
					A2(
						$elm$core$Basics$composeR,
						$author$project$Msg$mapLoadGraphInfo($author$project$Format$Version9$fromJSGraph),
						$author$project$Msg$loadGraphInfoToMsg)),
					$author$project$Main$loadedGraph10(
					A2(
						$elm$core$Basics$composeR,
						$author$project$Msg$mapLoadGraphInfo($author$project$Format$Version10$fromJSGraph),
						$author$project$Msg$loadGraphInfoToMsg)),
					$author$project$Main$loadedGraph11(
					A2(
						$elm$core$Basics$composeR,
						$author$project$Msg$mapLoadGraphInfo($author$project$Format$Version11$fromJSGraph),
						$author$project$Msg$loadGraphInfoToMsg)),
					$author$project$Main$setFirstTabEquation($author$project$Msg$SetFirstTabEquation),
					$elm$browser$Browser$Events$onClick(
					$elm$json$Json$Decode$succeed($author$project$Msg$MouseClick)),
					$author$project$Main$appliedProof($author$project$Msg$AppliedProof)
				]),
			$author$project$Msg$isSimpleScenario(m.scenario) ? _List_Nil : _Utils_ap(
				m.autoSave ? _List_fromArray(
					[
						A2(
						$elm$time$Time$every,
						$author$project$Main$autosaveTickMs,
						$elm$core$Basics$always($author$project$Msg$MinuteTick))
					]) : _List_Nil,
				_Utils_ap(
					_Utils_eq(m.scenario, $author$project$Msg$Watch) ? _List_fromArray(
						[
							$author$project$Main$promptedEquation(
							$author$project$Msg$QuickInput(true))
						]) : _List_Nil,
					function () {
						var _v1 = m.mode;
						switch (_v1.$) {
							case 'ResizeMode':
								return false;
							case 'QuickInputMode':
								return false;
							default:
								return !m.mouseOnCanvas;
						}
					}() ? _List_Nil : _Utils_ap(
						_Utils_eq(m.scenario, $author$project$Msg$Watch) ? _List_Nil : _List_fromArray(
							[
								$author$project$Main$promptedEquation(
								$author$project$Msg$QuickInput(true))
							]),
						_List_fromArray(
							[
								$elm$browser$Browser$Events$onKeyUp(
								A3(
									$elm$json$Json$Decode$map2,
									$author$project$Msg$KeyChanged(false),
									$author$project$HtmlDefs$keysDecoder,
									$author$project$HtmlDefs$keyDecoder)),
								$elm$browser$Browser$Events$onKeyDown(
								A3(
									$elm$json$Json$Decode$map2,
									$author$project$Msg$KeyChanged(true),
									$author$project$HtmlDefs$keysDecoder,
									$author$project$HtmlDefs$keyDecoder)),
								$author$project$Main$onCopy(
								$elm$core$Basics$always($author$project$Msg$CopyGraph)),
								$author$project$Main$onMouseMoveFromJS($author$project$Msg$MouseMove),
								$author$project$Main$onKeyDownActive(
								function (e) {
									return A2(
										$elm$core$Result$withDefault,
										$author$project$Msg$noOp,
										A2(
											$elm$json$Json$Decode$decodeValue,
											A3(
												$elm$json$Json$Decode$map2,
												F2(
													function (ks, k) {
														var checkCtrl = (ks.ctrl && _Utils_eq(m.mode, $author$project$Modes$DefaultMode)) ? $author$project$Msg$Do(
															$author$project$Main$preventDefault(e)) : $author$project$Msg$noOp;
														_v2$2:
														while (true) {
															if (k.$ === 'Character') {
																switch (k.a.valueOf()) {
																	case '/':
																		var _v3 = m.mode;
																		switch (_v3.$) {
																			case 'DefaultMode':
																				return $author$project$Msg$Do(
																					$author$project$Main$preventDefault(e));
																			case 'SplitArrow':
																				return $author$project$Msg$Do(
																					$author$project$Main$preventDefault(e));
																			default:
																				return $author$project$Msg$noOp;
																		}
																	case 'a':
																		return checkCtrl;
																	default:
																		break _v2$2;
																}
															} else {
																break _v2$2;
															}
														}
														return $author$project$Msg$noOp;
													}),
												$author$project$HtmlDefs$keysDecoder,
												$author$project$HtmlDefs$keyDecoder),
											e));
								})
							]))))));
};
var $author$project$Model$noCmd = function (m) {
	return _Utils_Tuple2(m, $elm$core$Platform$Cmd$none);
};
var $author$project$Modes$QuickInputMode = function (a) {
	return {$: 'QuickInputMode', a: a};
};
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $author$project$Model$clearActiveTabs = function (tabs) {
	return A2(
		$elm$core$List$map,
		function (t) {
			return _Utils_update(
				t,
				{active: false});
		},
		tabs);
};
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $elm_community$list_extra$List$Extra$updateAt = F3(
	function (index, fn, list) {
		if (index < 0) {
			return list;
		} else {
			var tail = A2($elm$core$List$drop, index, list);
			if (tail.b) {
				var x = tail.a;
				var xs = tail.b;
				return _Utils_ap(
					A2($elm$core$List$take, index, list),
					A2(
						$elm$core$List$cons,
						fn(x),
						xs));
			} else {
				return list;
			}
		}
	});
var $author$project$Model$activateNthTab = F2(
	function (m, i) {
		var tabs = A3(
			$elm_community$list_extra$List$Extra$updateAt,
			i,
			function (t) {
				return _Utils_update(
					t,
					{active: true});
			},
			$author$project$Model$clearActiveTabs(m.tabs));
		return _Utils_update(
			m,
			{tabs: tabs});
	});
var $author$project$Model$clearHistory = function (m) {
	return _Utils_update(
		m,
		{history: _List_Nil});
};
var $elm$json$Json$Encode$null = _Json_encodeNull;
var $author$project$HtmlDefs$computeLayout = _Platform_outgoingPort(
	'computeLayout',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $author$project$Model$emptyTab = {active: true, graph: $author$project$Polygraph$empty, sizeGrid: 200, title: '1'};
var $elm_community$list_extra$List$Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $author$project$Model$getActiveTabInTabs = function (tabs) {
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$Model$emptyTab,
		A2(
			$elm_community$list_extra$List$Extra$find,
			function ($) {
				return $.active;
			},
			tabs));
};
var $author$project$Model$getActiveTab = function (m) {
	return $author$project$Model$getActiveTabInTabs(m.tabs);
};
var $author$project$Model$getActiveSizeGrid = function (m) {
	return $author$project$Model$getActiveTab(m).sizeGrid;
};
var $author$project$Model$createNewTab = F2(
	function (m, title) {
		var sizeGrid = $author$project$Model$getActiveSizeGrid(m);
		return _Utils_update(
			m,
			{
				tabs: _Utils_ap(
					$author$project$Model$clearActiveTabs(m.tabs),
					_List_fromArray(
						[
							{active: true, graph: $author$project$Polygraph$empty, sizeGrid: sizeGrid, title: title}
						]))
			});
	});
var $author$project$Model$duplicateTab = F2(
	function (m, title) {
		var tab = $author$project$Model$getActiveTab(m);
		return _Utils_update(
			m,
			{
				tabs: _Utils_ap(
					$author$project$Model$clearActiveTabs(m.tabs),
					_List_fromArray(
						[
							_Utils_update(
							tab,
							{active: true, title: title})
						]))
			});
	});
var $author$project$Polygraph$Edge = F4(
	function (id, from, to, label) {
		return {from: from, id: id, label: label, to: to};
	});
var $author$project$Polygraph$objEdge = F2(
	function (id, o) {
		if (o.$ === 'EdgeObj') {
			var i1 = o.a;
			var i2 = o.b;
			var e = o.c;
			return $elm$core$Maybe$Just(
				{from: i1, id: id, label: e, to: i2});
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm_community$intdict$IntDict$foldr = F3(
	function (f, acc, dict) {
		foldr:
		while (true) {
			switch (dict.$) {
				case 'Empty':
					return acc;
				case 'Leaf':
					var l = dict.a;
					return A3(f, l.key, l.value, acc);
				default:
					var i = dict.a;
					var $temp$f = f,
						$temp$acc = A3($elm_community$intdict$IntDict$foldr, f, acc, i.right),
						$temp$dict = i.left;
					f = $temp$f;
					acc = $temp$acc;
					dict = $temp$dict;
					continue foldr;
			}
		}
	});
var $elm_community$intdict$IntDict$toList = function (dict) {
	return A3(
		$elm_community$intdict$IntDict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $author$project$Polygraph$edges = function (_v0) {
	var g = _v0.a;
	var mkEdge = F2(
		function (id, _v2) {
			var i1 = _v2.a;
			var i2 = _v2.b;
			var e = _v2.c;
			return A4($author$project$Polygraph$Edge, id, i1, i2, e);
		});
	return A2(
		$elm$core$List$filterMap,
		function (_v1) {
			var id = _v1.a;
			var e = _v1.b;
			return A2($author$project$Polygraph$objEdge, id, e);
		},
		$elm_community$intdict$IntDict$toList(g));
};
var $elm$json$Json$Encode$int = _Json_wrap;
var $author$project$GraphDefs$filterNormalEdges = function (d) {
	if (d.$ === 'PullshoutEdge') {
		return $elm$core$Maybe$Nothing;
	} else {
		var l = d.a;
		return $elm$core$Maybe$Just(l);
	}
};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$GraphDefs$mapDetails = F2(
	function (f, e) {
		return {
			details: f(e.details),
			selected: e.selected,
			weaklySelected: e.weaklySelected,
			zindex: e.zindex
		};
	});
var $author$project$GraphDefs$flattenDetails = function (e) {
	return A2(
		$elm$core$Maybe$map,
		function (d) {
			return A2(
				$author$project$GraphDefs$mapDetails,
				$elm$core$Basics$always(d),
				e);
		},
		e.details);
};
var $author$project$GraphDefs$filterLabelNormal = A2(
	$elm$core$Basics$composeR,
	$author$project$GraphDefs$mapDetails($author$project$GraphDefs$filterNormalEdges),
	$author$project$GraphDefs$flattenDetails);
var $author$project$IntDictExtra$filterMap = F2(
	function (f, d) {
		return $elm_community$intdict$IntDict$fromList(
			A2(
				$elm$core$List$filterMap,
				function (_v0) {
					var i = _v0.a;
					var o = _v0.b;
					return A2(
						$elm$core$Maybe$map,
						function (b) {
							return _Utils_Tuple2(i, b);
						},
						A2(f, i, o));
				},
				$elm_community$intdict$IntDict$toList(d)));
	});
var $author$project$Polygraph$rawFilterMapIds = F2(
	function (fn, fe) {
		return $author$project$IntDictExtra$filterMap(
			F2(
				function (_v0, o) {
					if (o.$ === 'EdgeObj') {
						var id1 = o.a;
						var id2 = o.b;
						var e = o.c;
						return A2(
							$elm$core$Maybe$map,
							A2($author$project$Polygraph$EdgeObj, id1, id2),
							A3(fe, id1, id2, e));
					} else {
						var n = o.a;
						return A2(
							$elm$core$Maybe$map,
							$author$project$Polygraph$NodeObj,
							fn(n));
					}
				}));
	});
var $author$project$Polygraph$rawFilterMap = F2(
	function (fn, fe) {
		return A2(
			$author$project$Polygraph$rawFilterMapIds,
			fn,
			F2(
				function (_v0, _v1) {
					return fe;
				}));
	});
var $author$project$Polygraph$Input = function (a) {
	return {$: 'Input', a: a};
};
var $elm_community$intdict$IntDict$keys = function (dict) {
	return A3(
		$elm_community$intdict$IntDict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $author$project$Polygraph$Output = function (a) {
	return {$: 'Output', a: a};
};
var $author$project$Polygraph$Waiting = F3(
	function (a, b, c) {
		return {$: 'Waiting', a: a, b: b, c: c};
	});
var $elm_community$intdict$IntDict$get = F2(
	function (key, dict) {
		get:
		while (true) {
			switch (dict.$) {
				case 'Empty':
					return $elm$core$Maybe$Nothing;
				case 'Leaf':
					var l = dict.a;
					return _Utils_eq(l.key, key) ? $elm$core$Maybe$Just(l.value) : $elm$core$Maybe$Nothing;
				default:
					var i = dict.a;
					if (!A2($elm_community$intdict$IntDict$prefixMatches, i.prefix, key)) {
						return $elm$core$Maybe$Nothing;
					} else {
						if (A2($elm_community$intdict$IntDict$isBranchingBitSet, i.prefix, key)) {
							var $temp$key = key,
								$temp$dict = i.right;
							key = $temp$key;
							dict = $temp$dict;
							continue get;
						} else {
							var $temp$key = key,
								$temp$dict = i.left;
							key = $temp$key;
							dict = $temp$dict;
							continue get;
						}
					}
			}
		}
	});
var $author$project$Polygraph$mapRecAux = F6(
	function (cn, ce, fn, fe, dict, ids) {
		var getA = function (o) {
			if (o.$ === 'NodeObj') {
				var n = o.a;
				return cn(n);
			} else {
				var e = o.c;
				return ce(e);
			}
		};
		var rec = A4($author$project$Polygraph$mapRecAux, cn, ce, fn, fe);
		var ins = F2(
			function (id, o) {
				return A3($elm_community$intdict$IntDict$insert, id, o, dict);
			});
		if (!ids.b) {
			return dict;
		} else {
			var id = ids.a;
			var tailIds = ids.b;
			var _v1 = A2($elm_community$intdict$IntDict$get, id, dict);
			_v1$3:
			while (true) {
				if (_v1.$ === 'Just') {
					switch (_v1.a.$) {
						case 'Input':
							if (_v1.a.a.$ === 'NodeObj') {
								var n = _v1.a.a.a;
								return A2(
									rec,
									A2(
										ins,
										id,
										$author$project$Polygraph$Output(
											$author$project$Polygraph$NodeObj(
												A2(fn, id, n)))),
									tailIds);
							} else {
								var _v2 = _v1.a.a;
								var i1 = _v2.a;
								var i2 = _v2.b;
								var e = _v2.c;
								return A2(
									rec,
									A2(
										ins,
										id,
										A3($author$project$Polygraph$Waiting, i1, i2, e)),
									A2(
										$elm$core$List$cons,
										i1,
										A2(
											$elm$core$List$cons,
											i2,
											A2($elm$core$List$cons, id, tailIds))));
							}
						case 'Waiting':
							var _v3 = _v1.a;
							var i1 = _v3.a;
							var i2 = _v3.b;
							var e = _v3.c;
							var _v4 = _Utils_Tuple2(
								A2($elm_community$intdict$IntDict$get, i1, dict),
								A2($elm_community$intdict$IntDict$get, i2, dict));
							if ((((_v4.a.$ === 'Just') && (_v4.a.a.$ === 'Output')) && (_v4.b.$ === 'Just')) && (_v4.b.a.$ === 'Output')) {
								var o1 = _v4.a.a.a;
								var o2 = _v4.b.a.a;
								var a2 = getA(o2);
								var a1 = getA(o1);
								return A2(
									rec,
									A2(
										ins,
										id,
										$author$project$Polygraph$Output(
											A3(
												$author$project$Polygraph$EdgeObj,
												i1,
												i2,
												A4(fe, id, a1, a2, e)))),
									tailIds);
							} else {
								return A2(rec, dict, tailIds);
							}
						default:
							break _v1$3;
					}
				} else {
					break _v1$3;
				}
			}
			return A2(rec, dict, tailIds);
		}
	});
var $author$project$Polygraph$invalidEdges = function (_v0) {
	var g = _v0.a;
	var dict = A6(
		$author$project$Polygraph$mapRecAux,
		$elm$core$Basics$always(_Utils_Tuple0),
		$elm$core$Basics$always(_Utils_Tuple0),
		$elm$core$Basics$always($elm$core$Basics$identity),
		F3(
			function (_v3, _v4, _v5) {
				return $elm$core$Basics$identity;
			}),
		A2(
			$elm_community$intdict$IntDict$map,
			function (_v6) {
				return $author$project$Polygraph$Input;
			},
			g),
		$elm_community$intdict$IntDict$keys(g));
	var l = $elm_community$intdict$IntDict$toList(dict);
	var missings = A2(
		$elm$core$List$filterMap,
		function (_v1) {
			var id = _v1.a;
			var o = _v1.b;
			if (o.$ === 'Waiting') {
				var i1 = o.a;
				var i2 = o.b;
				var e = o.c;
				return $elm$core$Maybe$Just(
					{from: i1, id: id, label: e, to: i2});
			} else {
				return $elm$core$Maybe$Nothing;
			}
		},
		l);
	return missings;
};
var $elm_community$intdict$IntDict$remove = F2(
	function (key, dict) {
		return A3(
			$elm_community$intdict$IntDict$update,
			key,
			$elm$core$Basics$always($elm$core$Maybe$Nothing),
			dict);
	});
var $author$project$IntDictExtra$removeList = F2(
	function (l, d) {
		return A3($elm$core$List$foldl, $elm_community$intdict$IntDict$remove, d, l);
	});
var $author$project$Polygraph$sanitise = function (g) {
	var d = g.a;
	var ids = A2(
		$elm$core$List$map,
		function ($) {
			return $.id;
		},
		$author$project$Polygraph$invalidEdges(g));
	return $author$project$Polygraph$Graph(
		A2($author$project$IntDictExtra$removeList, ids, d));
};
var $author$project$Polygraph$filterMap = F3(
	function (fn, fe, _v0) {
		var g = _v0.a;
		var g2 = A3($author$project$Polygraph$rawFilterMap, fn, fe, g);
		return $author$project$Polygraph$sanitise(
			$author$project$Polygraph$Graph(g2));
	});
var $author$project$GraphDefs$keepNormalEdges = A2($author$project$Polygraph$filterMap, $elm$core$Maybe$Just, $author$project$GraphDefs$filterLabelNormal);
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $author$project$Polygraph$Node = F2(
	function (id, label) {
		return {id: id, label: label};
	});
var $author$project$Polygraph$objNode = function (o) {
	if (o.$ === 'NodeObj') {
		var n = o.a;
		return $elm$core$Maybe$Just(n);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Polygraph$nodes = function (_v0) {
	var g = _v0.a;
	return A2(
		$elm$core$List$filterMap,
		function (_v1) {
			var id = _v1.a;
			var n = _v1.b;
			return A2(
				$elm$core$Maybe$map,
				$author$project$Polygraph$Node(id),
				$author$project$Polygraph$objNode(n));
		},
		$elm_community$intdict$IntDict$toList(g));
};
var $author$project$Polygraph$mapRec = F6(
	function (cn, ce, fn, fe, ids, _v0) {
		var g = _v0.a;
		var dict = A6(
			$author$project$Polygraph$mapRecAux,
			cn,
			ce,
			fn,
			fe,
			A2(
				$elm_community$intdict$IntDict$map,
				function (_v2) {
					return $author$project$Polygraph$Input;
				},
				g),
			ids);
		var gf = A2(
			$author$project$IntDictExtra$filterMap,
			F2(
				function (id, o) {
					if (o.$ === 'Output') {
						var o2 = o.a;
						return $elm$core$Maybe$Just(o2);
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}),
			dict);
		return $author$project$Polygraph$Graph(gf);
	});
var $author$project$Polygraph$mapRecAll = F5(
	function (cn, ce, fn, fe, _v0) {
		var g = _v0.a;
		return A6(
			$author$project$Polygraph$mapRec,
			cn,
			ce,
			fn,
			fe,
			$elm_community$intdict$IntDict$keys(g),
			$author$project$Polygraph$Graph(g));
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Polygraph$computeDimensions = A4(
	$author$project$Polygraph$mapRecAll,
	$elm$core$Basics$always(0),
	$elm$core$Tuple$second,
	$elm$core$Basics$always($elm$core$Basics$identity),
	F4(
		function (_v0, n1, n2, e) {
			return _Utils_Tuple2(
				e,
				1 + A2($elm$core$Basics$max, n1, n2));
		}));
var $author$project$Polygraph$graphRep = function (_v0) {
	var g = _v0.a;
	return g;
};
var $elm$core$List$sortBy = _List_sortBy;
var $author$project$Polygraph$normalise = function (g) {
	var getDim = function (_v7) {
		var o = _v7.b;
		if (o.$ === 'NodeObj') {
			return 0;
		} else {
			var _v6 = o.c;
			var dim = _v6.b;
			return dim;
		}
	};
	var gWithDims = A2(
		$elm$core$List$sortBy,
		getDim,
		$elm_community$intdict$IntDict$toList(
			$author$project$Polygraph$graphRep(
				$author$project$Polygraph$computeDimensions(g))));
	var idDict = A3(
		$elm$core$List$foldl,
		F2(
			function (_v4, d) {
				var id = _v4.a;
				return A3(
					$elm_community$intdict$IntDict$insert,
					id,
					$elm_community$intdict$IntDict$size(d),
					d);
			}),
		$elm_community$intdict$IntDict$empty,
		gWithDims);
	var getId = function (id) {
		var _v3 = A2($elm_community$intdict$IntDict$get, id, idDict);
		if (_v3.$ === 'Nothing') {
			return id;
		} else {
			var i = _v3.a;
			return i;
		}
	};
	var updateId = function (o) {
		if (o.$ === 'NodeObj') {
			var l = o.a;
			return $author$project$Polygraph$NodeObj(l);
		} else {
			var i1 = o.a;
			var i2 = o.b;
			var _v2 = o.c;
			var e = _v2.a;
			var dim = _v2.b;
			return A3(
				$author$project$Polygraph$EdgeObj,
				getId(i1),
				getId(i2),
				e);
		}
	};
	return $author$project$Polygraph$Graph(
		$elm_community$intdict$IntDict$fromList(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var id = _v0.a;
					var o = _v0.b;
					return _Utils_Tuple2(
						getId(id),
						updateId(o));
				},
				gWithDims)));
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$ArrowStyle$quiverStyle = function (st) {
	var _v0 = st;
	var tail = _v0.tail;
	var head = _v0.head;
	var _double = _v0._double;
	var dashed = _v0.dashed;
	var makeIf = F2(
		function (b, x) {
			return b ? _List_fromArray(
				[x]) : _List_Nil;
		});
	var headStyle = function () {
		switch (head.$) {
			case 'DefaultHead':
				return _List_Nil;
			case 'TwoHeads':
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'head',
						_List_fromArray(
							[
								_Utils_Tuple2('name', 'epi')
							]))
					]);
			default:
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'head',
						_List_fromArray(
							[
								_Utils_Tuple2('name', 'none')
							]))
					]);
		}
	}();
	var tailStyle = function () {
		switch (tail.$) {
			case 'DefaultTail':
				return _List_Nil;
			case 'Mapsto':
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'tail',
						_List_fromArray(
							[
								_Utils_Tuple2('name', 'maps to')
							]))
					]);
			case 'Hook':
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'tail',
						_List_fromArray(
							[
								_Utils_Tuple2('name', 'hook'),
								_Utils_Tuple2('side', 'top')
							]))
					]);
			default:
				return _List_fromArray(
					[
						_Utils_Tuple2(
						'tail',
						_List_fromArray(
							[
								_Utils_Tuple2('name', 'hook'),
								_Utils_Tuple2('side', 'bottom')
							]))
					]);
		}
	}();
	var style = A2(
		$elm$core$List$map,
		function (_v1) {
			var x = _v1.a;
			var y = _v1.b;
			return _Utils_Tuple2(
				x,
				$elm$json$Json$Encode$object(
					A2(
						$elm$core$List$map,
						function (_v2) {
							var s = _v2.a;
							var l = _v2.b;
							return _Utils_Tuple2(
								s,
								$elm$json$Json$Encode$string(l));
						},
						y)));
		},
		_Utils_ap(
			headStyle,
			_Utils_ap(
				tailStyle,
				A2(
					makeIf,
					dashed,
					_Utils_Tuple2(
						'body',
						_List_fromArray(
							[
								_Utils_Tuple2('name', 'dashed')
							]))))));
	return _Utils_ap(
		A2(
			makeIf,
			_double,
			_Utils_Tuple2(
				'level',
				$elm$json$Json$Encode$int(2))),
		_Utils_ap(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'style',
					$elm$json$Json$Encode$object(style))
				]),
			_Utils_ap(
				A2(
					makeIf,
					!(!st.bend),
					_Utils_Tuple2(
						'curve',
						$elm$json$Json$Encode$int(
							$elm$core$Basics$floor(st.bend * 10)))),
				A2(
					makeIf,
					st.labelPosition !== 0.5,
					_Utils_Tuple2(
						'label_position',
						$elm$json$Json$Encode$int(
							$elm$core$Basics$floor(st.labelPosition * 100)))))));
};
var $author$project$GraphDefs$exportQuiver = F2(
	function (sizeGrid, g) {
		var gnorm = $author$project$Polygraph$normalise(
			$author$project$GraphDefs$keepNormalEdges(g));
		var nodes = $author$project$Polygraph$nodes(gnorm);
		var edges = $author$project$Polygraph$edges(gnorm);
		var coordInt = function (x) {
			return $elm$json$Json$Encode$int(
				$elm$core$Basics$floor(x / sizeGrid));
		};
		var encodePos = function (_v0) {
			var x = _v0.a;
			var y = _v0.b;
			return _List_fromArray(
				[
					coordInt(x),
					coordInt(y)
				]);
		};
		var encodeNode = function (n) {
			return A2(
				$elm$json$Json$Encode$list,
				$elm$core$Basics$identity,
				_Utils_ap(
					encodePos(n.label.pos),
					_List_fromArray(
						[
							$elm$json$Json$Encode$string(
							(n.label.label === '') ? '\\bullet' : n.label.label)
						])));
		};
		var encodeEdge = function (e) {
			return A2(
				$elm$json$Json$Encode$list,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						$elm$json$Json$Encode$int(e.from),
						$elm$json$Json$Encode$int(e.to),
						$elm$json$Json$Encode$string(e.label.details.label),
						$elm$json$Json$Encode$int(
						_Utils_eq(e.label.details.style.labelAlignment, $author$project$Geometry$Right) ? 2 : 0),
						$elm$json$Json$Encode$object(
						$author$project$ArrowStyle$quiverStyle(e.label.details.style))
					]));
		};
		var jnodes = A2($elm$core$List$map, encodeNode, nodes);
		var jedges = A2($elm$core$List$map, encodeEdge, edges);
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$json$Json$Encode$int(0),
						$elm$json$Json$Encode$int(
						$elm$core$List$length(nodes))
					]),
				_Utils_ap(jnodes, jedges)));
	});
var $author$project$Main$exportQuiver = _Platform_outgoingPort('exportQuiver', $elm$core$Basics$identity);
var $elm_community$intdict$IntDict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			switch (dict.$) {
				case 'Empty':
					return acc;
				case 'Leaf':
					var l = dict.a;
					return A3(f, l.key, l.value, acc);
				default:
					var i = dict.a;
					var $temp$f = f,
						$temp$acc = A3($elm_community$intdict$IntDict$foldl, f, acc, i.left),
						$temp$dict = i.right;
					f = $temp$f;
					acc = $temp$acc;
					dict = $temp$dict;
					continue foldl;
			}
		}
	});
var $elm_community$intdict$IntDict$filter = F2(
	function (predicate, dict) {
		var add = F3(
			function (k, v, d) {
				return A2(predicate, k, v) ? A3($elm_community$intdict$IntDict$insert, k, v, d) : d;
			});
		return A3($elm_community$intdict$IntDict$foldl, add, $elm_community$intdict$IntDict$empty, dict);
	});
var $elm_community$intdict$IntDict$isEmpty = function (dict) {
	if (dict.$ === 'Empty') {
		return true;
	} else {
		return false;
	}
};
var $author$project$IntDictExtra$any = F2(
	function (f, d) {
		return !$elm_community$intdict$IntDict$isEmpty(
			A2(
				$elm_community$intdict$IntDict$filter,
				$elm$core$Basics$always(f),
				d));
	});
var $author$project$Polygraph$any = F3(
	function (fn, fe, _v0) {
		var g = _v0.a;
		return A2(
			$author$project$IntDictExtra$any,
			function (o) {
				if (o.$ === 'NodeObj') {
					var n = o.a;
					return fn(n);
				} else {
					var e = o.c;
					return fe(e);
				}
			},
			g);
	});
var $author$project$GraphDefs$isTrueSelection = function (g) {
	return A3(
		$author$project$Polygraph$any,
		function ($) {
			return $.selected;
		},
		function ($) {
			return $.selected;
		},
		g);
};
var $author$project$GraphDefs$fieldSelect = function (g) {
	return $author$project$GraphDefs$isTrueSelection(g) ? function ($) {
		return $.selected;
	} : function ($) {
		return $.weaklySelected;
	};
};
var $author$project$GraphDefs$mapEdgeType = F2(
	function (f, e) {
		if (e.$ === 'PullshoutEdge') {
			return $author$project$GraphDefs$PullshoutEdge;
		} else {
			var l = e.a;
			return $author$project$GraphDefs$NormalEdge(
				f(l));
		}
	});
var $author$project$GraphDefs$mapNormalEdge = A2($elm$core$Basics$composeR, $author$project$GraphDefs$mapEdgeType, $author$project$GraphDefs$mapDetails);
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $author$project$GraphDefs$findReplaceInSelected = F2(
	function (g, r) {
		var repl = F2(
			function (sel, s) {
				return sel ? A3($elm$core$String$replace, r.search, r.replace, s) : s;
			});
		var f = $author$project$GraphDefs$fieldSelect(g);
		return A3(
			$author$project$Polygraph$map,
			F2(
				function (_v0, n) {
					return _Utils_update(
						n,
						{
							label: A2(
								repl,
								f(n),
								n.label)
						});
				}),
			F2(
				function (_v1, e) {
					return A2(
						$author$project$GraphDefs$mapNormalEdge,
						function (l) {
							return _Utils_update(
								l,
								{
									label: A2(
										repl,
										f(e),
										l.label)
								});
						},
						e);
				}),
			g);
	});
var $author$project$Model$getActiveGraph = function (m) {
	return $author$project$Model$getActiveTab(m).graph;
};
var $author$project$GraphProof$prefixProofStep = F2(
	function (id, r) {
		return _Utils_update(
			r,
			{
				endChain: A2($elm$core$List$cons, id, r.endChain),
				startOffset: r.startOffset + 1
			});
	});
var $elm_community$list_extra$List$Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				if (m.$ === 'Nothing') {
					return $elm$core$Maybe$Nothing;
				} else {
					if (!m.a.b) {
						return $elm$core$Maybe$Nothing;
					} else {
						var _v1 = m.a;
						var x = _v1.a;
						var xs_ = _v1.b;
						return _Utils_eq(e, x) ? $elm$core$Maybe$Just(xs_) : $elm$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			$elm$core$List$foldl,
			step,
			$elm$core$Maybe$Just(xs),
			prefix);
	});
var $author$project$GraphProof$applyDiag = F2(
	function (d, l) {
		var _v0 = A2(
			$elm_community$list_extra$List$Extra$stripPrefix,
			A2(
				$elm$core$List$map,
				function ($) {
					return $.id;
				},
				d.lhs),
			l);
		if (_v0.$ === 'Nothing') {
			if (!l.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var t = l.a;
				var q = l.b;
				return A2(
					$elm$core$Maybe$map,
					$author$project$GraphProof$prefixProofStep(t),
					A2($author$project$GraphProof$applyDiag, d, q));
			}
		} else {
			var tail = _v0.a;
			return $elm$core$Maybe$Just(
				{
					backOffset: $elm$core$List$length(tail),
					diag: d,
					endChain: _Utils_ap(
						A2(
							$elm$core$List$map,
							function ($) {
								return $.id;
							},
							d.rhs),
						tail),
					startOffset: 0
				});
		}
	});
var $elm_community$list_extra$List$Extra$findMap = F2(
	function (f, list) {
		findMap:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var a = list.a;
				var tail = list.b;
				var _v1 = f(a);
				if (_v1.$ === 'Just') {
					var b = _v1.a;
					return $elm$core$Maybe$Just(b);
				} else {
					var $temp$f = f,
						$temp$list = tail;
					f = $temp$f;
					list = $temp$list;
					continue findMap;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$reverseAppend = F2(
	function (list1, list2) {
		return A3($elm$core$List$foldl, $elm$core$List$cons, list2, list1);
	});
var $elm_community$list_extra$List$Extra$removeHelp = F4(
	function (list, x, xs, previousElements) {
		removeHelp:
		while (true) {
			if (!xs.b) {
				return list;
			} else {
				var y = xs.a;
				var ys = xs.b;
				if (_Utils_eq(x, y)) {
					return A2($elm_community$list_extra$List$Extra$reverseAppend, previousElements, ys);
				} else {
					var $temp$list = list,
						$temp$x = x,
						$temp$xs = ys,
						$temp$previousElements = A2($elm$core$List$cons, y, previousElements);
					list = $temp$list;
					x = $temp$x;
					xs = $temp$xs;
					previousElements = $temp$previousElements;
					continue removeHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$remove = F2(
	function (x, xs) {
		return A4($elm_community$list_extra$List$Extra$removeHelp, xs, x, xs, _List_Nil);
	});
var $author$project$GraphProof$commuteProof = F2(
	function (diags, l) {
		var _v0 = A2(
			$elm_community$list_extra$List$Extra$findMap,
			function (d) {
				return A2($author$project$GraphProof$applyDiag, d, l);
			},
			diags);
		if (_v0.$ === 'Nothing') {
			return _List_Nil;
		} else {
			var step = _v0.a;
			return A2(
				$elm$core$List$cons,
				step,
				A2(
					$author$project$GraphProof$commuteProof,
					A2($elm_community$list_extra$List$Extra$remove, step.diag, diags),
					step.endChain));
		}
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Basics$pi = _Basics_pi;
var $elm$core$Basics$round = _Basics_round;
var $author$project$Geometry$Point$countRoundsAngle = function (a) {
	return $elm$core$Basics$round(a / (2 * $elm$core$Basics$pi));
};
var $author$project$Geometry$Point$closeRemainder = F2(
	function (q, a) {
		return a - ($elm$core$Basics$round(a / q) * q);
	});
var $author$project$Geometry$Point$normaliseAngle = function (alpha) {
	return A2($author$project$Geometry$Point$closeRemainder, 2 * $elm$core$Basics$pi, alpha);
};
var $author$project$Geometry$Point$distanceAngleSigned = F2(
	function (alpha, beta) {
		return $author$project$Geometry$Point$normaliseAngle(beta - alpha);
	});
var $elm$core$Basics$atan = _Basics_atan;
var $elm$core$Basics$sqrt = _Basics_sqrt;
var $author$project$Geometry$Point$radius = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	return $elm$core$Basics$sqrt((x * x) + (y * y));
};
var $author$project$Geometry$Point$pointToAngle = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	return ((!y) && (x <= 0)) ? $elm$core$Basics$pi : (2 * $elm$core$Basics$atan(
		y / (x + $author$project$Geometry$Point$radius(
			_Utils_Tuple2(x, y)))));
};
var $author$project$Geometry$Point$subtract = F2(
	function (_v0, _v1) {
		var x1 = _v0.a;
		var y1 = _v0.b;
		var x2 = _v1.a;
		var y2 = _v1.b;
		return _Utils_Tuple2(x1 - x2, y1 - y2);
	});
var $author$project$ListExtraExtra$permute = function (l) {
	if (!l.b) {
		return _List_Nil;
	} else {
		var t = l.a;
		var q = l.b;
		return _Utils_ap(
			q,
			_List_fromArray(
				[t]));
	}
};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $elm_community$list_extra$List$Extra$zip = $elm$core$List$map2($elm$core$Tuple$pair);
var $author$project$ListExtraExtra$succCyclePairs = function (l) {
	var _v0 = A2(
		$elm_community$list_extra$List$Extra$zip,
		l,
		$author$project$ListExtraExtra$permute(l));
	if (_v0.b && (!_v0.b.b)) {
		return _List_Nil;
	} else {
		var r = _v0;
		return r;
	}
};
var $elm$core$List$sum = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$add, 0, numbers);
};
var $author$project$Geometry$Point$isInPoly = F2(
	function (pos, l) {
		var angles = A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				$author$project$Geometry$Point$subtract(pos),
				$author$project$Geometry$Point$pointToAngle),
			l);
		var anglesLoop = $elm$core$List$sum(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var a = _v0.a;
					var b = _v0.b;
					return A2($author$project$Geometry$Point$distanceAngleSigned, a, b);
				},
				$author$project$ListExtraExtra$succCyclePairs(angles)));
		return $author$project$Geometry$Point$countRoundsAngle(anglesLoop) === 1;
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $author$project$GraphProof$positionsInDiagram = function (_v0) {
	var lhs = _v0.lhs;
	var rhs = _v0.rhs;
	var getPositions = function (_v1) {
		var label = _v1.label;
		return _List_fromArray(
			[label.from, label.pos, label.to]);
	};
	return _Utils_ap(
		A2($elm$core$List$concatMap, getPositions, lhs),
		$elm$core$List$reverse(
			A2($elm$core$List$concatMap, getPositions, rhs)));
};
var $author$project$GraphProof$isInDiag = F3(
	function (g, pos, d) {
		return A2(
			$author$project$Geometry$Point$isInPoly,
			pos,
			$author$project$GraphProof$positionsInDiagram(d));
	});
var $author$project$GraphProof$findProofOfDiagram = F3(
	function (g, l, d) {
		return A2(
			$elm$core$Maybe$andThen,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.label;
				},
				function ($) {
					return $.proof;
				}),
			A2(
				$elm_community$list_extra$List$Extra$find,
				function (n) {
					return A3($author$project$GraphProof$isInDiag, g, n.label.pos, d);
				},
				l));
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$GraphProof$finishedProof = function (_v0) {
	var statement = _v0.statement;
	var proof = _v0.proof;
	return A2(
		$elm$core$Maybe$withDefault,
		false,
		A2(
			$elm$core$Maybe$map,
			function (h) {
				return _Utils_eq(
					h.endChain,
					A2(
						$elm$core$List$map,
						function ($) {
							return $.id;
						},
						statement.rhs));
			},
			$elm$core$List$head(
				$elm$core$List$reverse(proof))));
};
var $author$project$Polygraph$incidence = function (_v0) {
	var g = _v0.a;
	var es = $author$project$Polygraph$edges(
		$author$project$Polygraph$Graph(g));
	var emptyInfo = {incomings: _List_Nil, outgoings: _List_Nil};
	var insertIn = F2(
		function (e, i) {
			return _Utils_update(
				i,
				{
					incomings: A2($elm$core$List$cons, e, i.incomings)
				});
		});
	var insertOut = F2(
		function (e, i) {
			return _Utils_update(
				i,
				{
					outgoings: A2($elm$core$List$cons, e, i.outgoings)
				});
		});
	var aux = F2(
		function (l, d) {
			if (!l.b) {
				return d;
			} else {
				var e = l.a;
				var q = l.b;
				return A2(
					aux,
					q,
					A3(
						$elm_community$intdict$IntDict$update,
						e.from,
						A2(
							$elm$core$Basics$composeR,
							$elm$core$Maybe$withDefault(emptyInfo),
							A2(
								$elm$core$Basics$composeR,
								insertOut(e),
								$elm$core$Maybe$Just)),
						A3(
							$elm_community$intdict$IntDict$update,
							e.to,
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Maybe$withDefault(emptyInfo),
								A2(
									$elm$core$Basics$composeR,
									insertIn(e),
									$elm$core$Maybe$Just)),
							d)));
			}
		});
	var di = A2(
		$elm_community$intdict$IntDict$map,
		F2(
			function (_v2, _v3) {
				return {incomings: _List_Nil, outgoings: _List_Nil};
			}),
		g);
	return A2(aux, es, di);
};
var $elm$core$Debug$log = _Debug_log;
var $elm_community$intdict$IntDict$values = function (dict) {
	return A3(
		$elm_community$intdict$IntDict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $author$project$GraphProof$adjacentEdges = function (g) {
	var inc = $author$project$Polygraph$incidence(g);
	var dumpEdge = function (_v4) {
		var label = _v4.label;
		var angleIn = _v4.angleIn;
		var angleOut = _v4.angleOut;
		return {angleIn: angleIn, angleOut: angleOut, label: label};
	};
	var dump = function (_v3) {
		var id = _v3.a;
		var stuff = _v3.b;
		var _v1 = A2($elm$core$Debug$log, 'incomings', id);
		var f = A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.label;
				},
				A2(
					$elm$core$Basics$composeR,
					dumpEdge,
					$elm$core$Debug$log('d'))),
			stuff.incomings);
		var _v2 = A2($elm$core$Debug$log, 'outgoings', id);
		return A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.label;
				},
				A2(
					$elm$core$Basics$composeR,
					dumpEdge,
					$elm$core$Debug$log('d'))),
			stuff.outgoings);
	};
	return A2(
		$elm$core$List$concatMap,
		function (i) {
			return $author$project$ListExtraExtra$succCyclePairs(
				A2(
					$elm$core$List$map,
					function (e) {
						return e;
					},
					A2(
						$elm$core$List$sortBy,
						function (_v0) {
							var edge = _v0.edge;
							var incoming = _v0.incoming;
							return incoming ? edge.label.angleOut : edge.label.angleIn;
						},
						_Utils_ap(
							A2(
								$elm$core$List$map,
								function (e) {
									return {edge: e, incoming: true};
								},
								i.incomings),
							A2(
								$elm$core$List$map,
								function (e) {
									return {edge: e, incoming: false};
								},
								i.outgoings)))));
		},
		$elm_community$intdict$IntDict$values(inc));
};
var $author$project$GraphProof$adjacentListToDict = function (l) {
	return $elm_community$intdict$IntDict$fromList(
		A2(
			$elm$core$List$map,
			function (_v0) {
				var e1 = _v0.a;
				var e2 = _v0.b;
				return _Utils_Tuple2(e1.edge.id, e2.edge);
			},
			l));
};
var $elm_community$list_extra$List$Extra$last = function (items) {
	last:
	while (true) {
		if (!items.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			if (!items.b.b) {
				var x = items.a;
				return $elm$core$Maybe$Just(x);
			} else {
				var rest = items.b;
				var $temp$items = rest;
				items = $temp$items;
				continue last;
			}
		}
	}
};
var $author$project$GraphProof$checkEndPoints = function (_v0) {
	var lhs = _v0.lhs;
	var rhs = _v0.rhs;
	var _v1 = _Utils_Tuple2(
		$elm_community$list_extra$List$Extra$last(lhs),
		$elm_community$list_extra$List$Extra$last(rhs));
	if ((_v1.a.$ === 'Just') && (_v1.b.$ === 'Just')) {
		var e1 = _v1.a.a;
		var e2 = _v1.b.a;
		return _Utils_eq(e1.to, e2.to);
	} else {
		return false;
	}
};
var $author$project$GraphProof$getAllValidDiagrams = function (g) {
	var inc = $author$project$GraphProof$adjacentEdges(g);
	var starts = A2(
		$elm$core$List$map,
		function (_v6) {
			var e1 = _v6.a;
			var e2 = _v6.b;
			return _Utils_Tuple2(e2, e1);
		},
		A2(
			$elm$core$List$filter,
			function (_v5) {
				var e1 = _v5.a;
				var e2 = _v5.b;
				return (!e1.incoming) && (!e2.incoming);
			},
			inc));
	var nextRights = A2(
		$elm$core$List$map,
		function (_v4) {
			var e1 = _v4.a;
			var e2 = _v4.b;
			return _Utils_Tuple2(e2, e1);
		},
		A2(
			$elm$core$List$filter,
			function (_v3) {
				var e1 = _v3.a;
				var e2 = _v3.b;
				return (!e1.incoming) && e2.incoming;
			},
			inc));
	var nextLefts = A2(
		$elm$core$List$filter,
		function (_v2) {
			var e1 = _v2.a;
			var e2 = _v2.b;
			return e1.incoming && (!e2.incoming);
		},
		inc);
	var buildBranch = F2(
		function (next, startEdge) {
			var _v0 = A2($elm_community$intdict$IntDict$get, startEdge.id, next);
			if (_v0.$ === 'Nothing') {
				return _List_fromArray(
					[startEdge]);
			} else {
				var e = _v0.a;
				return A2(
					$elm$core$List$cons,
					startEdge,
					A2(buildBranch, next, e));
			}
		});
	var diags = A2(
		$elm$core$List$map,
		function (_v1) {
			var rhs = _v1.a;
			var lhs = _v1.b;
			return {
				lhs: A2(
					buildBranch,
					$author$project$GraphProof$adjacentListToDict(nextRights),
					lhs.edge),
				proof: $elm$core$Maybe$Nothing,
				rhs: A2(
					buildBranch,
					$author$project$GraphProof$adjacentListToDict(nextLefts),
					rhs.edge)
			};
		},
		starts);
	var validDiags = A2($elm$core$List$filter, $author$project$GraphProof$checkEndPoints, diags);
	return validDiags;
};
var $author$project$GraphProof$invertDiagram = function (_v0) {
	var lhs = _v0.lhs;
	var rhs = _v0.rhs;
	var proof = _v0.proof;
	return {lhs: rhs, proof: proof, rhs: lhs};
};
var $author$project$Geometry$Point$sumAngles = function (l) {
	if (!l.b) {
		return 0;
	} else {
		if (!l.b.b) {
			return 0;
		} else {
			var a = l.a;
			var _v1 = l.b;
			var b = _v1.a;
			var tl = _v1.b;
			var sr = A2($author$project$Geometry$Point$distanceAngleSigned, a, b);
			return sr + $author$project$Geometry$Point$sumAngles(
				A2($elm$core$List$cons, b, tl));
		}
	}
};
var $author$project$Geometry$Point$countRounds = function (l) {
	return $author$project$Geometry$Point$countRoundsAngle(
		$author$project$Geometry$Point$sumAngles(l));
};
var $author$project$GraphProof$isOuterDiagram = function (_v0) {
	var lhs = _v0.lhs;
	var rhs = _v0.rhs;
	var makeAngles = function (angleField) {
		return $elm$core$List$map(
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.label;
				},
				angleField));
	};
	var anglesRhs = A2(
		makeAngles,
		function ($) {
			return $.angleOut;
		},
		rhs);
	var anglesLhs = A2(
		makeAngles,
		function ($) {
			return $.angleIn;
		},
		lhs);
	var angles = A2(
		$elm$core$List$cons,
		A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$List$head(anglesRhs)),
		_Utils_ap(
			anglesLhs,
			$elm$core$List$reverse(anglesRhs)));
	var _v1 = A2(
		$elm$core$List$map,
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.label;
			},
			function ($) {
				return $.label;
			}),
		lhs);
	var _v2 = anglesLhs;
	return _Utils_eq(
		$author$project$Geometry$Point$countRounds(angles),
		-1);
};
var $author$project$GraphProof$nameIdentities = A4(
	$author$project$Polygraph$mapRecAll,
	function (n) {
		return n.label;
	},
	function (n) {
		return n.label;
	},
	F2(
		function (_v0, n) {
			return n;
		}),
	F4(
		function (_v1, fromLabel, _v2, l) {
			return _Utils_update(
				l,
				{
					label: ((l.label === '') && l.identity) ? ('|' + (fromLabel + '|')) : l.label
				});
		}));
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $elm_community$maybe_extra$Maybe$Extra$isJust = function (m) {
	if (m.$ === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var $author$project$GraphProof$proofNodes = function (g) {
	return A2(
		$elm$core$List$filter,
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.label;
			},
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.proof;
				},
				$elm_community$maybe_extra$Maybe$Extra$isJust)),
		$author$project$Polygraph$nodes(g));
};
var $author$project$GraphProof$fullProofs = function (g0) {
	var g = $author$project$GraphProof$nameIdentities(g0);
	var diags = $author$project$GraphProof$getAllValidDiagrams(g);
	var _v0 = A2($elm$core$List$partition, $author$project$GraphProof$isOuterDiagram, diags);
	var bigDiags = _v0.a;
	var smallDiags_without_proofs = _v0.b;
	var smallProofs = $author$project$GraphProof$proofNodes(g);
	var updateDiag = function (d) {
		return _Utils_update(
			d,
			{
				proof: A3($author$project$GraphProof$findProofOfDiagram, g, smallProofs, d)
			});
	};
	var smallDiags = A2($elm$core$List$map, updateDiag, smallDiags_without_proofs);
	return A2(
		$elm$core$List$filter,
		$author$project$GraphProof$finishedProof,
		A2(
			$elm$core$List$map,
			function (d) {
				return {
					proof: A2(
						$author$project$GraphProof$commuteProof,
						smallDiags,
						A2(
							$elm$core$List$map,
							function ($) {
								return $.id;
							},
							d.lhs)),
					statement: d
				};
			},
			A2($elm$core$List$map, $author$project$GraphProof$invertDiagram, bigDiags)));
};
var $author$project$GraphProof$debugEdgeName = function (id) {
	return 'e' + $elm$core$String$fromInt(id);
};
var $author$project$GraphProof$edgesOfDiag = function (d) {
	var setOf = function (e) {
		return _Utils_Tuple2(
			e.id,
			{from: e.from, to: e.to});
	};
	return $elm_community$intdict$IntDict$fromList(
		_Utils_ap(
			A2($elm$core$List$map, setOf, d.lhs),
			A2($elm$core$List$map, setOf, d.rhs)));
};
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $elm_community$list_extra$List$Extra$reverseMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $author$project$GraphProof$nodesOfDiag = function (d) {
	return _Utils_ap(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.from;
			},
			d.lhs),
		A2(
			$elm_community$list_extra$List$Extra$reverseMap,
			function ($) {
				return $.to;
			},
			d.rhs));
};
var $author$project$GraphProof$repeat = F2(
	function (n, s) {
		switch (n) {
			case 0:
				return _List_Nil;
			case 1:
				return _List_fromArray(
					['  ' + s]);
			default:
				return _List_fromArray(
					[
						'  do ' + ($elm$core$String$fromInt(n) + (' ' + s))
					]);
		}
	});
var $author$project$GraphProof$write0 = F2(
	function (n, s) {
		return (!n) ? _List_Nil : s;
	});
var $author$project$GraphProof$getToThePoint = F2(
	function (startOffset, backOffset) {
		return A2(
			$elm$core$String$join,
			'\n',
			_Utils_ap(
				A2($author$project$GraphProof$repeat, backOffset, 'apply cancel_postcomposition.'),
				A2(
					$author$project$GraphProof$write0,
					startOffset,
					_Utils_ap(
						_List_fromArray(
							['  repeat rewrite assoc\'.']),
						_Utils_ap(
							A2($author$project$GraphProof$repeat, startOffset, 'apply cancel_precomposition.'),
							_List_fromArray(
								['  repeat rewrite assoc.']))))));
	});
var $author$project$GraphProof$statementToString = function (d) {
	var expand = function (s) {
		return (s === '') ? '{_}' : s;
	};
	var edgeToString = A2(
		$elm$core$Basics$composeR,
		$elm$core$List$map(
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.label;
				},
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.label;
					},
					expand))),
		$elm$core$String$join(' · '));
	return '{ ' + (edgeToString(d.lhs) + (' = ' + (edgeToString(d.rhs) + ' }')));
};
var $author$project$GraphProof$proofStepToString = function (_v0) {
	var startOffset = _v0.startOffset;
	var backOffset = _v0.backOffset;
	var diag = _v0.diag;
	return A2(
		$elm$core$String$join,
		'\n',
		_Utils_ap(
			_List_fromArray(
				[
					'assert(eq : ' + ($author$project$GraphProof$statementToString(diag) + ').'),
					'{',
					'  ' + A2($elm$core$Maybe$withDefault, 'admit.', diag.proof),
					'}',
					'etrans.',
					'{',
					A2($author$project$GraphProof$getToThePoint, startOffset, backOffset),
					'  apply eq.',
					'}'
				]),
			_Utils_ap(
				A2(
					$author$project$GraphProof$write0,
					startOffset,
					_List_fromArray(
						['repeat rewrite assoc.'])),
				_List_fromArray(
					['clear eq.']))));
};
var $author$project$GraphProof$renameDebugDiag = function (diag) {
	var renameEdge = function (e) {
		var label = e.label;
		return _Utils_update(
			e,
			{
				label: _Utils_update(
					label,
					{
						label: $author$project$GraphProof$debugEdgeName(e.id)
					})
			});
	};
	return {
		lhs: A2($elm$core$List$map, renameEdge, diag.lhs),
		proof: $elm$core$Maybe$Nothing,
		rhs: A2($elm$core$List$map, renameEdge, diag.rhs)
	};
};
var $author$project$GraphProof$renameDebugProofStep = function (step) {
	return _Utils_update(
		step,
		{
			diag: $author$project$GraphProof$renameDebugDiag(step.diag)
		});
};
var $elm$core$Set$union = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$union, dict1, dict2));
	});
var $author$project$GraphProof$proofStatementToDebugString = function (st) {
	var nodes = A3(
		$elm$core$List$foldl,
		$elm$core$Set$union,
		$elm$core$Set$empty,
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.diag;
				},
				A2($elm$core$Basics$composeR, $author$project$GraphProof$nodesOfDiag, $elm$core$Set$fromList)),
			st.proof));
	var edges = A3(
		$elm$core$List$foldl,
		$elm_community$intdict$IntDict$union,
		$elm_community$intdict$IntDict$empty,
		A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.diag;
				},
				$author$project$GraphProof$edgesOfDiag),
			st.proof));
	var nidS = function (id) {
		return 'o' + $elm$core$String$fromInt(id);
	};
	return 'Goal ' + ('∏ (C : category)\n  ' + (A2(
		$elm$core$String$join,
		'',
		A2(
			$elm$core$List$map,
			function (id) {
				return '(' + (nidS(id) + ' : C)');
			},
			$elm$core$Set$toList(nodes))) + ('\n  ' + (A2(
		$elm$core$String$join,
		'',
		A2(
			$elm$core$List$map,
			function (_v0) {
				var id = _v0.a;
				var from = _v0.b.from;
				var to = _v0.b.to;
				return '(' + ($author$project$GraphProof$debugEdgeName(id) + (' : ' + (nidS(from) + (' --> ' + (nidS(to) + ')')))));
			},
			$elm_community$intdict$IntDict$toList(edges))) + (',\n  ' + ($author$project$GraphProof$statementToString(
		$author$project$GraphProof$renameDebugDiag(st.statement)) + ('.\n\nintros.\n' + (A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeR, $author$project$GraphProof$renameDebugProofStep, $author$project$GraphProof$proofStepToString),
			st.proof)) + '\n apply idpath.'))))))));
};
var $author$project$GraphProof$proofStatementToString = function (st) {
	return '(* Goal ' + ($author$project$GraphProof$statementToString(st.statement) + ('. *)\n\n' + (A2(
		$elm$core$String$join,
		'\n',
		A2($elm$core$List$map, $author$project$GraphProof$proofStepToString, st.proof)) + ('\n apply idpath.' + '\nQed.'))));
};
var $elm$core$String$trim = _String_trim;
var $author$project$GraphDefs$getProofFromLabel = function (s) {
	var s2 = $elm$core$String$trim(s);
	var prefix = '\\' + ($author$project$GraphDefs$coqProofTexCommand + '{');
	return A2($elm$core$String$startsWith, prefix, s2) ? $elm$core$Maybe$Just(
		A3(
			$elm$core$String$slice,
			$elm$core$String$length(prefix),
			-1,
			s2)) : $elm$core$Maybe$Nothing;
};
var $author$project$Geometry$Point$middle = F2(
	function (_v0, _v1) {
		var x1 = _v0.a;
		var y1 = _v0.b;
		var x2 = _v1.a;
		var y2 = _v1.b;
		return _Utils_Tuple2((x1 + x2) / 2, (y1 + y2) / 2);
	});
var $author$project$Geometry$QuadraticBezier$middle = function (_v0) {
	var from = _v0.from;
	var to = _v0.to;
	var controlPoint = _v0.controlPoint;
	return A2(
		$author$project$Geometry$Point$middle,
		controlPoint,
		A2($author$project$Geometry$Point$middle, from, to));
};
var $author$project$EdgeShape$Bezier = function (a) {
	return {$: 'Bezier', a: a};
};
var $author$project$EdgeShape$HatShape = function (a) {
	return {$: 'HatShape', a: a};
};
var $author$project$GraphDefs$defaultDims = function (s) {
	var height = 16;
	var size = 1;
	return _Utils_Tuple2((height / 2) * size, height);
};
var $author$project$GraphDefs$getNodeDims = function (n) {
	var _v0 = n.dims;
	if (_v0.$ === 'Nothing') {
		return $author$project$GraphDefs$defaultDims(n.label);
	} else {
		var p = _v0.a;
		return p;
	}
};
var $author$project$Geometry$Point$add = F2(
	function (_v0, _v1) {
		var x1 = _v0.a;
		var y1 = _v0.b;
		var x2 = _v1.a;
		var y2 = _v1.b;
		return _Utils_Tuple2(x1 + x2, y1 + y2);
	});
var $author$project$Geometry$pad = F2(
	function (n, _v0) {
		var pos = _v0.pos;
		var dims = _v0.dims;
		var n2 = n * 2;
		return {
			dims: A2(
				$author$project$Geometry$Point$add,
				dims,
				_Utils_Tuple2(n2, n2)),
			pos: pos
		};
	});
var $author$project$Geometry$Point$diamondPave = F3(
	function (p1, p2, p3) {
		return A2(
			$author$project$Geometry$Point$add,
			p1,
			A2($author$project$Geometry$Point$subtract, p3, p2));
	});
var $author$project$Geometry$Point$normalise = F2(
	function (len, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		var r = $author$project$Geometry$Point$radius(
			_Utils_Tuple2(x, y));
		return _Utils_Tuple2((len * x) / r, (len * y) / r);
	});
var $author$project$Geometry$Point$towards = F3(
	function (source, to, shift) {
		return A2(
			$author$project$Geometry$Point$add,
			source,
			A2(
				$author$project$Geometry$Point$normalise,
				shift,
				A2($author$project$Geometry$Point$subtract, to, source)));
	});
var $author$project$EdgeShape$pullshoutHat = F2(
	function (e1, e2) {
		var vertex = _Utils_eq(e1.fromId, e2.fromId) ? e1.fromPos : e1.toPos;
		var shift = 30;
		var smallshift = 5;
		var r2 = A3($author$project$Geometry$Point$towards, vertex, e2.controlPoint, shift);
		var r1 = A3($author$project$Geometry$Point$towards, vertex, e1.controlPoint, shift);
		var extrem = A3($author$project$Geometry$Point$diamondPave, r1, vertex, r2);
		var s2 = A3($author$project$Geometry$Point$towards, r2, extrem, smallshift);
		var s1 = A3($author$project$Geometry$Point$towards, r1, extrem, smallshift);
		return {p1: s1, p2: s2, summit: extrem};
	});
var $author$project$Geometry$Point$resize = F2(
	function (s, _v0) {
		var x1 = _v0.a;
		var y1 = _v0.b;
		return _Utils_Tuple2(x1 * s, y1 * s);
	});
var $author$project$Geometry$Point$orthogonal = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	return _Utils_Tuple2(0 - y, x);
};
var $author$project$Geometry$Point$orthoVectPx = F3(
	function (from, to, px) {
		return A2(
			$author$project$Geometry$Point$normalise,
			px,
			$author$project$Geometry$Point$orthogonal(
				A2($author$project$Geometry$Point$subtract, to, from)));
	});
var $author$project$Geometry$Point$diamondPx = F3(
	function (p1, p2, d) {
		var mid = A2($author$project$Geometry$Point$middle, p1, p2);
		return A2(
			$author$project$Geometry$Point$add,
			mid,
			A3($author$project$Geometry$Point$orthoVectPx, p1, p2, d));
	});
var $author$project$Geometry$Point$distance = F2(
	function (x, y) {
		return $author$project$Geometry$Point$radius(
			A2($author$project$Geometry$Point$subtract, y, x));
	});
var $author$project$Geometry$pxFromRatio = F3(
	function (p1, p2, r) {
		return r * A2($author$project$Geometry$Point$distance, p2, p1);
	});
var $elm$core$List$map3 = _List_map3;
var $elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$min, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Geometry$distance = F3(
	function (ro, rd, _v0) {
		var aa = _v0.a;
		var bb = _v0.b;
		var f = F3(
			function (x, roi, rdi) {
				return (x - roi) / rdi;
			});
		var dimLo = A4($elm$core$List$map3, f, aa, ro, rd);
		var dimHi = A4($elm$core$List$map3, f, bb, ro, rd);
		var dimLo2 = A3($elm$core$List$map2, $elm$core$Basics$min, dimLo, dimHi);
		var dimHi2 = A3($elm$core$List$map2, $elm$core$Basics$max, dimLo, dimHi);
		var _v1 = _Utils_Tuple2(
			$elm$core$List$maximum(dimLo2),
			$elm$core$List$minimum(dimHi2));
		if ((_v1.a.$ === 'Just') && (_v1.b.$ === 'Just')) {
			var maxLo = _v1.a.a;
			var minHi = _v1.b.a;
			return (_Utils_cmp(minHi, maxLo) < 0) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(maxLo);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Geometry$intersection = F3(
	function (ro, rd, aabb) {
		return A2(
			$elm$core$Maybe$andThen,
			function (d) {
				return $elm$core$Maybe$Just(
					A3(
						$elm$core$List$map2,
						F2(
							function (roi, rdi) {
								return roi + (rdi * d);
							}),
						ro,
						rd));
			},
			A3($author$project$Geometry$distance, ro, rd, aabb));
	});
var $author$project$Geometry$Point$toList = function (_v0) {
	var px = _v0.a;
	var py = _v0.b;
	return _List_fromArray(
		[px, py]);
};
var $author$project$Geometry$raytraceRect = F3(
	function (p1, p2, _v0) {
		var topLeft = _v0.topLeft;
		var bottomRight = _v0.bottomRight;
		var v = A2(
			$author$project$Geometry$Point$normalise,
			1,
			A2($author$project$Geometry$Point$subtract, p2, p1));
		var l = $author$project$Geometry$Point$toList;
		var _v1 = A3(
			$author$project$Geometry$intersection,
			l(p1),
			l(v),
			_Utils_Tuple2(
				l(topLeft),
				l(bottomRight)));
		if ((((_v1.$ === 'Just') && _v1.a.b) && _v1.a.b.b) && (!_v1.a.b.b.b)) {
			var _v2 = _v1.a;
			var ix = _v2.a;
			var _v3 = _v2.b;
			var iy = _v3.a;
			return $elm$core$Maybe$Just(
				_Utils_Tuple2(ix, iy));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Geometry$Rect = F2(
	function (topLeft, bottomRight) {
		return {bottomRight: bottomRight, topLeft: topLeft};
	});
var $author$project$Geometry$rectFromPosDims = function (_v0) {
	var pos = _v0.pos;
	var dims = _v0.dims;
	var dims2 = A2($author$project$Geometry$Point$resize, 0.5, dims);
	return A2(
		$author$project$Geometry$Rect,
		A2($author$project$Geometry$Point$subtract, pos, dims2),
		A2($author$project$Geometry$Point$add, pos, dims2));
};
var $author$project$Geometry$segmentRectBent_aux = F3(
	function (r1, r2, bent) {
		var controlPoint = A3(
			$author$project$Geometry$Point$diamondPx,
			r1.pos,
			r2.pos,
			A3($author$project$Geometry$pxFromRatio, r1.pos, r2.pos, bent));
		var p2 = A2(
			$elm$core$Maybe$withDefault,
			r2.pos,
			A3(
				$author$project$Geometry$raytraceRect,
				controlPoint,
				r2.pos,
				$author$project$Geometry$rectFromPosDims(r2)));
		var p1 = A2(
			$elm$core$Maybe$withDefault,
			r1.pos,
			A3(
				$author$project$Geometry$raytraceRect,
				controlPoint,
				r1.pos,
				$author$project$Geometry$rectFromPosDims(r1)));
		var betterControlPoint = A3(
			$author$project$Geometry$Point$diamondPx,
			p1,
			p2,
			A3($author$project$Geometry$pxFromRatio, p1, p2, bent));
		return {controlPoint: betterControlPoint, from: p1, to: p2};
	});
var $author$project$Geometry$segmentRectBent = F3(
	function (r1, r2, bent) {
		var _v0 = function () {
			if (!_Utils_eq(r1.pos, r2.pos)) {
				return _Utils_Tuple3(r1, r2, bent);
			} else {
				var _v1 = r2.dims;
				var w2 = _v1.a;
				var h2 = _v1.b;
				var _v2 = r1.dims;
				var w1 = _v2.a;
				var h1 = _v2.b;
				var offset = 7;
				var new_w = function (w) {
					return 2;
				};
				var newBent = (-40) / offset;
				return _Utils_Tuple3(
					{
						dims: _Utils_Tuple2(
							new_w(w1),
							h1),
						pos: A2(
							$author$project$Geometry$Point$add,
							r1.pos,
							_Utils_Tuple2(-offset, 0))
					},
					{
						dims: _Utils_Tuple2(
							new_w(w2),
							h2),
						pos: A2(
							$author$project$Geometry$Point$add,
							r2.pos,
							_Utils_Tuple2(offset, 0))
					},
					newBent);
			}
		}();
		var r1_bis = _v0.a;
		var r2_bis = _v0.b;
		var bent_bis = _v0.c;
		return A3($author$project$Geometry$segmentRectBent_aux, r1_bis, r2_bis, bent_bis);
	});
var $author$project$GraphDefs$posGraph = function (g) {
	var padding = 5;
	var dummyExtrem = {
		controlPoint: _Utils_Tuple2(1, 1),
		fromId: 0,
		fromPos: _Utils_Tuple2(0, 0),
		toPos: _Utils_Tuple2(2, 2)
	};
	var dummyAcc = F2(
		function (id, pos) {
			return {
				extrems: dummyExtrem,
				id: id,
				posDims: {
					dims: _Utils_Tuple2(0, 0),
					pos: pos
				}
			};
		});
	var computeEdge = F4(
		function (id, n1, n2, e) {
			var _v4 = e.details;
			if (_v4.$ === 'PullshoutEdge') {
				var h = A2($author$project$EdgeShape$pullshoutHat, n1.extrems, n2.extrems);
				return {
					acc: A2(dummyAcc, id, h.summit),
					label: e,
					shape: $author$project$EdgeShape$HatShape(h)
				};
			} else {
				var l = _v4.a;
				var q = A3($author$project$Geometry$segmentRectBent, n1.posDims, n2.posDims, l.style.bend);
				return {
					acc: {
						extrems: {controlPoint: q.controlPoint, fromId: n1.id, fromPos: n1.posDims.pos, toPos: n2.posDims.pos},
						id: id,
						posDims: {
							dims: A2(
								$author$project$Geometry$Point$resize,
								4,
								_Utils_Tuple2(padding, padding)),
							pos: $author$project$Geometry$QuadraticBezier$middle(q)
						}
					},
					label: e,
					shape: $author$project$EdgeShape$Bezier(q)
				};
			}
		});
	return A3(
		$author$project$Polygraph$map,
		F2(
			function (_v0, _v1) {
				var label = _v1.label;
				return label;
			}),
		F2(
			function (_v2, _v3) {
				var label = _v3.label;
				var shape = _v3.shape;
				var acc = _v3.acc;
				return {label: label, pos: acc.posDims.pos, shape: shape};
			}),
		A5(
			$author$project$Polygraph$mapRecAll,
			function ($) {
				return $.acc;
			},
			function ($) {
				return $.acc;
			},
			F2(
				function (id, n) {
					return {
						acc: {
							extrems: dummyExtrem,
							id: id,
							posDims: A2(
								$author$project$Geometry$pad,
								padding,
								{
									dims: $author$project$GraphDefs$getNodeDims(n),
									pos: n.pos
								})
						},
						label: n
					};
				}),
			computeEdge,
			g));
};
var $elm_community$maybe_extra$Maybe$Extra$filter = F2(
	function (f, m) {
		if (m.$ === 'Just') {
			var a = m.a;
			return f(a) ? m : $elm$core$Maybe$Nothing;
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Polygraph$rawFilterIds = F2(
	function (fn, fe) {
		return A2(
			$author$project$Polygraph$rawFilterMapIds,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Maybe$Just,
				$elm_community$maybe_extra$Maybe$Extra$filter(fn)),
			F2(
				function (id1, id2) {
					return A2(
						$elm$core$Basics$composeR,
						$elm$core$Maybe$Just,
						$elm_community$maybe_extra$Maybe$Extra$filter(
							A2(fe, id1, id2)));
				}));
	});
var $author$project$Polygraph$removeLoops = A2(
	$elm$core$Basics$composeR,
	$author$project$Polygraph$sanitise,
	$author$project$Polygraph$mapRep(
		A2(
			$author$project$Polygraph$rawFilterIds,
			$elm$core$Basics$always(true),
			F3(
				function (id1, id2, _v0) {
					return !_Utils_eq(id1, id2);
				}))));
var $author$project$GraphDefs$toProofGraph = A2(
	$elm$core$Basics$composeR,
	$author$project$Polygraph$removeLoops,
	A2(
		$elm$core$Basics$composeR,
		$author$project$GraphDefs$posGraph,
		A2(
			$elm$core$Basics$composeR,
			A2(
				$author$project$Polygraph$filterMap,
				$elm$core$Maybe$Just,
				function (e) {
					var _v0 = _Utils_Tuple2(
						$author$project$GraphDefs$filterLabelNormal(e.label),
						e.shape);
					if ((_v0.a.$ === 'Just') && (_v0.b.$ === 'Bezier')) {
						var l = _v0.a.a;
						var b = _v0.b.a;
						return $elm$core$Maybe$Just(
							{bezier: b, details: l.details});
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}),
			A2(
				$author$project$Polygraph$map,
				F2(
					function (_v1, n) {
						return {
							label: n.label,
							pos: n.pos,
							proof: $author$project$GraphDefs$getProofFromLabel(n.label)
						};
					}),
				F2(
					function (_v2, _v3) {
						var details = _v3.details;
						var bezier = _v3.bezier;
						return {
							angleIn: $author$project$Geometry$Point$pointToAngle(
								A2($author$project$Geometry$Point$subtract, bezier.controlPoint, bezier.from)),
							angleOut: $author$project$Geometry$Point$pointToAngle(
								A2($author$project$Geometry$Point$subtract, bezier.controlPoint, bezier.to)),
							from: bezier.from,
							identity: details.style._double,
							label: details.label,
							pos: $author$project$Geometry$QuadraticBezier$middle(bezier),
							to: bezier.to
						};
					})))));
var $author$project$Main$generateProofString = F2(
	function (debug, g) {
		var stToString = debug ? $author$project$GraphProof$proofStatementToDebugString : $author$project$GraphProof$proofStatementToString;
		var s = A2(
			$elm$core$String$join,
			'\n\n',
			A2(
				$elm$core$List$map,
				stToString,
				$author$project$GraphProof$fullProofs(
					$author$project$GraphDefs$toProofGraph(g))));
		return s;
	});
var $author$project$Main$coqExport = F2(
	function (model, graph) {
		var s = A2($author$project$Main$generateProofString, false, graph);
		return (s === '') ? '(* No diagram found *)' : s;
	});
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $author$project$ArrowStyle$headTikzStyle = function (hd) {
	switch (hd.$) {
		case 'DefaultHead':
			return '->, ';
		case 'TwoHeads':
			return 'onto, ';
		default:
			return '-,';
	}
};
var $author$project$Drawing$Color$toString = function (c) {
	switch (c.$) {
		case 'Black':
			return 'black';
		case 'Red':
			return 'red';
		case 'Blue':
			return 'blue';
		case 'White':
			return 'white';
		case 'Purple':
			return 'purple';
		case 'Green':
			return 'green';
		case 'Yellow':
			return 'yellow';
		default:
			return 'orange';
	}
};
var $author$project$ArrowStyle$tikzStyle = function (stl) {
	return 'fore, ' + ($author$project$Drawing$Color$toString(stl.color) + (',' + (function () {
		var _v0 = _Utils_Tuple2(stl.head, stl._double);
		if (_v0.b) {
			if (_v0.a.$ === 'NoHead') {
				var _v1 = _v0.a;
				return 'identity';
			} else {
				var hd = _v0.a;
				return $author$project$ArrowStyle$headTikzStyle(hd) + 'cell=0.2, ';
			}
		} else {
			var hd = _v0.a;
			return $author$project$ArrowStyle$headTikzStyle(hd);
		}
	}() + ((stl.dashed ? 'dashed, ' : '') + (((!(!stl.bend)) ? ('curve={ratio=' + ($elm$core$String$fromFloat(stl.bend) + '}, ')) : '') + function () {
		var _v2 = stl.tail;
		switch (_v2.$) {
			case 'DefaultTail':
				return '';
			case 'Mapsto':
				return 'mapsto,';
			case 'Hook':
				return 'into, ';
			default:
				return 'linto, ';
		}
	}())))));
};
var $author$project$Tikz$encodeLabel = function (e) {
	var _v0 = e.label.details;
	if (_v0.$ === 'PullshoutEdge') {
		return '';
	} else {
		var l = _v0.a;
		var lbl = '${\\scriptstyle ' + (l.label + '}$');
		return function () {
			var _v1 = l.style.labelAlignment;
			switch (_v1.$) {
				case 'Over':
					return 'labelonat={' + (lbl + ('}{' + ($elm$core$String$fromFloat(l.style.labelPosition) + '}, ')));
				case 'Centre':
					return 'labelonat={' + (lbl + ('}{' + ($elm$core$String$fromFloat(l.style.labelPosition) + '}, ')));
				case 'Left':
					return '\"' + (lbl + '\", ');
				default:
					return '\"' + (lbl + '\"\', ');
			}
		}() + ('pos=' + ($elm$core$String$fromFloat(l.style.labelPosition) + (', ' + $author$project$ArrowStyle$tikzStyle(l.style))));
	}
};
var $author$project$Tikz$encodeEdgeTikZ = function (e) {
	return '(' + ($elm$core$String$fromInt(e.from) + (') edge[' + ($author$project$Tikz$encodeLabel(e) + ('] (' + ($elm$core$String$fromInt(e.to) + ') \n')))));
};
var $author$project$Tikz$encodeFakeLabel = function (e) {
	var _v0 = e.label.details;
	if (_v0.$ === 'PullshoutEdge') {
		return '';
	} else {
		var l = _v0.a;
		return $author$project$ArrowStyle$tikzStyle(l.style);
	}
};
var $author$project$Tikz$encodeFakeEdgeTikZ = function (e) {
	return '(' + ($elm$core$String$fromInt(e.from) + (') to[' + ($author$project$Tikz$encodeFakeLabel(e) + ('] node[coordinate](' + ($elm$core$String$fromInt(e.id) + ('){} (' + ($elm$core$String$fromInt(e.to) + ') \n')))))));
};
var $author$project$GraphDefs$getNodePos = function (n) {
	return n.isMath ? n.pos : A2(
		$author$project$Geometry$Point$add,
		n.pos,
		A2(
			$author$project$Geometry$Point$resize,
			0.5,
			$author$project$GraphDefs$getNodeDims(n)));
};
var $author$project$Tikz$encodeNodeTikZ = F2(
	function (sizeGrid, n) {
		var _v0 = $author$project$GraphDefs$getNodePos(n.label);
		var x = _v0.a;
		var y = _v0.b;
		var coord = function (u) {
			return u / 21;
		};
		var label = (n.label.label === '') ? '\\bullet' : n.label.label;
		return '\\node (' + ($elm$core$String$fromInt(n.id) + (') at (' + ($elm$core$String$fromFloat(
			coord(x)) + ('em, ' + ($elm$core$String$fromFloat(
			0 - coord(y)) + ('em) {' + ((n.label.isMath ? ('$' + (label + '$')) : label) + '} ; \n')))))));
	});
var $author$project$Polygraph$getEdge = F2(
	function (id, _v0) {
		var g = _v0.a;
		return A2(
			$elm$core$Maybe$andThen,
			$author$project$Polygraph$objEdge(id),
			A2($elm_community$intdict$IntDict$get, id, g));
	});
var $author$project$Tikz$encodePullshoutTikZ = F2(
	function (g, e) {
		var _v0 = _Utils_Tuple2(
			A2($author$project$Polygraph$getEdge, e.from, g),
			A2($author$project$Polygraph$getEdge, e.to, g));
		if ((_v0.a.$ === 'Just') && (_v0.b.$ === 'Just')) {
			var s = _v0.a.a;
			var t = _v0.b.a;
			var _v1 = _Utils_eq(s.to, t.to) ? _Utils_Tuple3(
				$elm$core$String$fromInt(s.from),
				$elm$core$String$fromInt(s.to),
				$elm$core$String$fromInt(t.from)) : _Utils_Tuple3(
				$elm$core$String$fromInt(s.to),
				$elm$core$String$fromInt(s.from),
				$elm$core$String$fromInt(t.to));
			var a = _v1.a;
			var b = _v1.b;
			var c = _v1.c;
			return '\\pullbackk{' + (a + ('}{' + (b + ('}{' + (c + '}{draw} % \n')))));
		} else {
			return 'raté!';
		}
	});
var $author$project$GraphDefs$filterEdgeNormal = function (e) {
	return A2(
		$elm$core$Maybe$map,
		function (l) {
			return A2(
				$author$project$Polygraph$edgeMap,
				$elm$core$Basics$always(l),
				e);
		},
		$author$project$GraphDefs$filterLabelNormal(e.label));
};
var $author$project$Tikz$graphToTikz = F2(
	function (sizeGrid, g) {
		var gnorm = $author$project$Polygraph$normalise(g);
		var nodes = $author$project$Polygraph$nodes(gnorm);
		var all_edges = $author$project$Polygraph$edges(gnorm);
		var _v0 = A2(
			$elm$core$List$partition,
			A2($elm$core$Basics$composeR, $author$project$GraphDefs$filterEdgeNormal, $elm_community$maybe_extra$Maybe$Extra$isJust),
			all_edges);
		var edges = _v0.a;
		var pullshouts = _v0.b;
		var tikzNodes = $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				$author$project$Tikz$encodeNodeTikZ(sizeGrid),
				nodes));
		var tikzFakeEdges = '\\path \n' + ($elm$core$String$concat(
			A2($elm$core$List$map, $author$project$Tikz$encodeFakeEdgeTikZ, edges)) + '; \n');
		var tikzEdges = '\\path[->] \n' + ($elm$core$String$concat(
			A2(
				$elm$core$List$map,
				$author$project$Tikz$encodeEdgeTikZ,
				A2(
					$elm$core$List$sortBy,
					A2(
						$elm$core$Basics$composeR,
						function ($) {
							return $.label;
						},
						function ($) {
							return $.zindex;
						}),
					edges))) + '; \n');
		var tikzPullshouts = $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				$author$project$Tikz$encodePullshoutTikZ(gnorm),
				pullshouts));
		return '\\begin{tikzpicture}[every node/.style={inner sep=2pt,outer sep=0pt,anchor=base,text height=1.2ex, text depth=0.25ex}] \n' + (tikzNodes + (tikzFakeEdges + (tikzEdges + (tikzPullshouts + '\\end{tikzpicture}'))));
	});
var $author$project$GraphDefs$clearSelection = function (g) {
	return A3(
		$author$project$Polygraph$map,
		F2(
			function (_v0, n) {
				return _Utils_update(
					n,
					{selected: false});
			}),
		F2(
			function (_v1, e) {
				return _Utils_update(
					e,
					{selected: false});
			}),
		g);
};
var $author$project$GraphDefs$clearWeakSelection = function (g) {
	return A3(
		$author$project$Polygraph$map,
		F2(
			function (_v0, n) {
				return _Utils_update(
					n,
					{weaklySelected: false});
			}),
		F2(
			function (_v1, e) {
				return _Utils_update(
					e,
					{weaklySelected: false});
			}),
		g);
};
var $author$project$Geometry$PosDims = F2(
	function (pos, dims) {
		return {dims: dims, pos: pos};
	});
var $author$project$Geometry$posDimsFromRect = function (_v0) {
	var topLeft = _v0.topLeft;
	var bottomRight = _v0.bottomRight;
	var center = A2(
		$author$project$Geometry$Point$resize,
		0.5,
		A2($author$project$Geometry$Point$add, topLeft, bottomRight));
	return A2(
		$author$project$Geometry$PosDims,
		center,
		A2($author$project$Geometry$Point$subtract, bottomRight, topLeft));
};
var $elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_v0, _v1) {
			var x = _v0.a;
			var y = _v0.b;
			var xs = _v1.a;
			var ys = _v1.b;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, x, xs),
				A2($elm$core$List$cons, y, ys));
		});
	return A3(
		$elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var $author$project$Geometry$rectEnveloppe = function (l) {
	var _v0 = $elm$core$List$unzip(l);
	var xs = _v0.a;
	var ys = _v0.b;
	var lmin = A2(
		$elm$core$Basics$composeR,
		$elm$core$List$minimum,
		$elm$core$Maybe$withDefault(0));
	var lmax = A2(
		$elm$core$Basics$composeR,
		$elm$core$List$maximum,
		$elm$core$Maybe$withDefault(0));
	return {
		bottomRight: _Utils_Tuple2(
			lmax(xs),
			lmax(ys)),
		topLeft: _Utils_Tuple2(
			lmin(xs),
			lmin(ys))
	};
};
var $author$project$GraphDefs$rectEnveloppe = function (g) {
	var points = A2(
		$elm$core$List$map,
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.label;
			},
			function ($) {
				return $.pos;
			}),
		$author$project$Polygraph$nodes(g));
	return $author$project$Geometry$rectEnveloppe(points);
};
var $author$project$Msg$EdgeClick = F2(
	function (a, b) {
		return {$: 'EdgeClick', a: a, b: b};
	});
var $author$project$GraphDrawing$activityToEdgeClasses = function (a) {
	switch (a.$) {
		case 'MainActive':
			return _List_fromArray(
				['active-edge']);
		case 'WeakActive':
			return _List_fromArray(
				['weak-active-edge']);
		default:
			return _List_Nil;
	}
};
var $author$project$Drawing$Color$black = $author$project$Drawing$Color$Black;
var $author$project$Drawing$Class = function (a) {
	return {$: 'Class', a: a};
};
var $author$project$Drawing$class = $author$project$Drawing$Class;
var $author$project$Drawing$Color = function (a) {
	return {$: 'Color', a: a};
};
var $author$project$Drawing$color = $author$project$Drawing$Color;
var $author$project$Drawing$Drawing = function (a) {
	return {$: 'Drawing', a: a};
};
var $author$project$Drawing$drawingToZSvgs = function (_v0) {
	var c = _v0.a;
	return c;
};
var $author$project$Drawing$group = function (l) {
	return $author$project$Drawing$Drawing(
		$elm$core$List$concat(
			A2($elm$core$List$map, $author$project$Drawing$drawingToZSvgs, l)));
};
var $author$project$Drawing$attributeToZIndex = function (a) {
	if (a.$ === 'ZIndex') {
		var n = a.a;
		return $elm$core$Maybe$Just(n);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Drawing$attributesToZIndex = A2(
	$elm$core$Basics$composeR,
	$elm_community$list_extra$List$Extra$findMap($author$project$Drawing$attributeToZIndex),
	$elm$core$Maybe$withDefault($author$project$Zindex$defaultZ));
var $author$project$String$Html$AttributeNS = F3(
	function (a, b, c) {
		return {$: 'AttributeNS', a: a, b: b, c: c};
	});
var $author$project$String$Html$attribute = $author$project$String$Html$AttributeNS('');
var $author$project$String$Svg$class = $author$project$String$Html$attribute('class');
var $author$project$String$Html$GhostAttribute = function (a) {
	return {$: 'GhostAttribute', a: a};
};
var $author$project$String$Html$ghostAttribute = $author$project$String$Html$GhostAttribute;
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$svg$Svg$Events$on = $elm$html$Html$Events$on;
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$defaultOptions = {preventDefault: true, stopPropagation: false};
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$Event = F6(
	function (keys, button, clientPos, offsetPos, pagePos, screenPos) {
		return {button: button, clientPos: clientPos, keys: keys, offsetPos: offsetPos, pagePos: pagePos, screenPos: screenPos};
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$BackButton = {$: 'BackButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ErrorButton = {$: 'ErrorButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ForwardButton = {$: 'ForwardButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MainButton = {$: 'MainButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MiddleButton = {$: 'MiddleButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$SecondButton = {$: 'SecondButton'};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$buttonFromId = function (id) {
	switch (id) {
		case 0:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MainButton;
		case 1:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$MiddleButton;
		case 2:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$SecondButton;
		case 3:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$BackButton;
		case 4:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ForwardButton;
		default:
			return $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$ErrorButton;
	}
};
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$buttonDecoder = A2(
	$elm$json$Json$Decode$map,
	$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$buttonFromId,
	A2($elm$json$Json$Decode$field, 'button', $elm$json$Json$Decode$int));
var $mpizenberg$elm_pointer_events$Internal$Decode$clientPos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'clientX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'clientY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Internal$Decode$Keys = F3(
	function (alt, ctrl, shift) {
		return {alt: alt, ctrl: ctrl, shift: shift};
	});
var $mpizenberg$elm_pointer_events$Internal$Decode$keys = A4(
	$elm$json$Json$Decode$map3,
	$mpizenberg$elm_pointer_events$Internal$Decode$Keys,
	A2($elm$json$Json$Decode$field, 'altKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'ctrlKey', $elm$json$Json$Decode$bool),
	A2($elm$json$Json$Decode$field, 'shiftKey', $elm$json$Json$Decode$bool));
var $elm$json$Json$Decode$map6 = _Json_map6;
var $mpizenberg$elm_pointer_events$Internal$Decode$offsetPos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'offsetX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'offsetY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Internal$Decode$pagePos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Internal$Decode$screenPos = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (a, b) {
			return _Utils_Tuple2(a, b);
		}),
	A2($elm$json$Json$Decode$field, 'screenX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'screenY', $elm$json$Json$Decode$float));
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$eventDecoder = A7($elm$json$Json$Decode$map6, $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$Event, $mpizenberg$elm_pointer_events$Internal$Decode$keys, $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$buttonDecoder, $mpizenberg$elm_pointer_events$Internal$Decode$clientPos, $mpizenberg$elm_pointer_events$Internal$Decode$offsetPos, $mpizenberg$elm_pointer_events$Internal$Decode$pagePos, $mpizenberg$elm_pointer_events$Internal$Decode$screenPos);
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onWithOptions = F3(
	function (event, options, tag) {
		return A2(
			$elm$html$Html$Events$custom,
			event,
			A2(
				$elm$json$Json$Decode$map,
				function (ev) {
					return {
						message: tag(ev),
						preventDefault: options.preventDefault,
						stopPropagation: options.stopPropagation
					};
				},
				$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$eventDecoder));
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onClick = A2($mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onWithOptions, 'click', $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$defaultOptions);
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onDoubleClick = A2($mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onWithOptions, 'dblclick', $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$defaultOptions);
var $author$project$String$Svg$strokeWidth = $author$project$String$Html$attribute('stroke-width');
var $author$project$String$Svg$style = $author$project$String$Html$attribute('style');
var $author$project$Drawing$attrToSvgAttr = F2(
	function (col, a) {
		switch (a.$) {
			case 'Color':
				var c = a.a;
				return $elm$core$Maybe$Just(
					col(
						$author$project$Drawing$Color$toString(c)));
			case 'Class':
				var s = a.a;
				return $elm$core$Maybe$Just(
					$author$project$String$Svg$class(s));
			case 'Style':
				var s = a.a;
				return $elm$core$Maybe$Just(
					$author$project$String$Svg$style(s));
			case 'StrokeWidth':
				var s = a.a;
				return $elm$core$Maybe$Just(
					$author$project$String$Svg$strokeWidth(s));
			case 'On':
				var e = a.a;
				var d = a.b;
				return $elm$core$Maybe$Just(
					$author$project$String$Html$ghostAttribute(
						A2($elm$svg$Svg$Events$on, e, d)));
			case 'OnClick':
				var f = a.a;
				return $elm$core$Maybe$Just(
					$author$project$String$Html$ghostAttribute(
						$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onClick(f)));
			case 'OnDoubleClick':
				var f = a.a;
				return $elm$core$Maybe$Just(
					$author$project$String$Html$ghostAttribute(
						$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onDoubleClick(f)));
			default:
				return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Drawing$attrsToSvgAttrs = function (f) {
	return $elm$core$List$filterMap(
		$author$project$Drawing$attrToSvgAttr(f));
};
var $author$project$String$Html$NodeNS = F4(
	function (a, b, c, d) {
		return {$: 'NodeNS', a: a, b: b, c: c, d: d};
	});
var $author$project$String$Html$nodeNS = $author$project$String$Html$NodeNS;
var $author$project$String$Svg$node = $author$project$String$Html$nodeNS('http://www.w3.org/2000/svg');
var $author$project$String$Svg$line = $author$project$String$Svg$node('line');
var $author$project$Drawing$ofSvgs = F2(
	function (z, l) {
		return $author$project$Drawing$Drawing(
			A2(
				$elm$core$List$map,
				function (s) {
					return {svg: s, zindex: z};
				},
				l));
	});
var $author$project$Drawing$ofSvg = F2(
	function (z, s) {
		return A2(
			$author$project$Drawing$ofSvgs,
			z,
			_List_fromArray(
				[s]));
	});
var $author$project$String$Svg$stroke = $author$project$String$Html$attribute('stroke');
var $author$project$String$Svg$x1 = $author$project$String$Html$attribute('x1');
var $author$project$String$Svg$x2 = $author$project$String$Html$attribute('x2');
var $author$project$String$Svg$y1 = $author$project$String$Html$attribute('y1');
var $author$project$String$Svg$y2 = $author$project$String$Html$attribute('y2');
var $author$project$Drawing$line = F3(
	function (l, _v0, _v1) {
		var fromx = _v0.a;
		var fromy = _v0.b;
		var tox = _v1.a;
		var toy = _v1.b;
		var z = $author$project$Drawing$attributesToZIndex(l);
		var f = $elm$core$String$fromFloat;
		return A2(
			$author$project$Drawing$ofSvg,
			z,
			A2(
				$author$project$String$Svg$line,
				_Utils_ap(
					_List_fromArray(
						[
							$author$project$String$Svg$x1(
							f(fromx)),
							$author$project$String$Svg$y1(
							f(fromy)),
							$author$project$String$Svg$x2(
							f(tox)),
							$author$project$String$Svg$y2(
							f(toy))
						]),
					A2($author$project$Drawing$attrsToSvgAttrs, $author$project$String$Svg$stroke, l)),
				_List_Nil));
	});
var $author$project$Drawing$OnClick = function (a) {
	return {$: 'OnClick', a: a};
};
var $author$project$Drawing$onClick = $author$project$Drawing$OnClick;
var $author$project$Drawing$shadowClass = 'shadow-line';
var $author$project$Drawing$ZIndex = function (a) {
	return {$: 'ZIndex', a: a};
};
var $author$project$Drawing$zindexAttr = $author$project$Drawing$ZIndex;
var $author$project$GraphDrawing$drawHat = F4(
	function (edgeId, a, z, hat) {
		var blackline = function (classes) {
			return $author$project$Drawing$line(
				_Utils_ap(
					classes,
					_List_fromArray(
						[
							$author$project$Drawing$zindexAttr(z),
							$author$project$Drawing$onClick(
							$author$project$Msg$EdgeClick(edgeId)),
							$author$project$Drawing$color($author$project$Drawing$Color$black)
						])));
		};
		var mk_pbk = function (classes) {
			return $author$project$Drawing$group(
				_List_fromArray(
					[
						A3(blackline, classes, hat.p1, hat.summit),
						A3(blackline, classes, hat.summit, hat.p2)
					]));
		};
		var classes = A2(
			$elm$core$List$map,
			$author$project$Drawing$class,
			$author$project$GraphDrawing$activityToEdgeClasses(a));
		return $author$project$Drawing$group(
			_List_fromArray(
				[
					mk_pbk(
					A2(
						$elm$core$List$cons,
						$author$project$Drawing$class($author$project$Drawing$shadowClass),
						classes)),
					mk_pbk(classes)
				]));
	});
var $author$project$Drawing$empty = $author$project$Drawing$Drawing(_List_Nil);
var $author$project$Msg$NodeClick = F2(
	function (a, b) {
		return {$: 'NodeClick', a: a, b: b};
	});
var $author$project$Msg$EltDoubleClick = F2(
	function (a, b) {
		return {$: 'EltDoubleClick', a: a, b: b};
	});
var $author$project$Msg$NodeLabelEdit = F2(
	function (a, b) {
		return {$: 'NodeLabelEdit', a: a, b: b};
	});
var $author$project$Msg$NodeRendered = F2(
	function (a, b) {
		return {$: 'NodeRendered', a: a, b: b};
	});
var $author$project$GraphDrawing$activityToClasses = function (a) {
	switch (a.$) {
		case 'MainActive':
			return _List_fromArray(
				['active-label']);
		case 'WeakActive':
			return _List_fromArray(
				['weak-active-label']);
		default:
			return _List_Nil;
	}
};
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $author$project$String$Html$Custom = F2(
	function (a, b) {
		return {$: 'Custom', a: a, b: b};
	});
var $author$project$String$Html$customNode = $author$project$String$Html$Custom;
var $author$project$String$Svg$foreignObject = $author$project$String$Svg$node('foreignObject');
var $author$project$String$Svg$height = $author$project$String$Html$attribute('height');
var $author$project$String$Svg$width = $author$project$String$Html$attribute('width');
var $author$project$String$Svg$x = $author$project$String$Html$attribute('x');
var $author$project$String$Svg$y = $author$project$String$Html$attribute('y');
var $author$project$Drawing$htmlAnchor = F6(
	function (z, _v0, _v1, center, str, h) {
		var x1 = _v0.a;
		var y1 = _v0.b;
		var width = _v1.a;
		var height = _v1.b;
		var f = $elm$core$String$fromFloat;
		var _v2 = center ? _Utils_Tuple2(x1 - (width / 2), y1 - (height / 2)) : _Utils_Tuple2(x1, y1);
		var x = _v2.a;
		var y = _v2.b;
		return A2(
			$author$project$Drawing$ofSvg,
			z,
			A2(
				$author$project$String$Svg$foreignObject,
				_List_fromArray(
					[
						$author$project$String$Svg$x(
						f(x)),
						$author$project$String$Svg$y(
						f(y)),
						$author$project$String$Svg$width('100%'),
						$author$project$String$Svg$height(
						f(height))
					]),
				_List_fromArray(
					[
						A2($author$project$String$Html$customNode, str, h)
					])));
	});
var $author$project$HtmlDefs$latexElement = 'math-latex';
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $author$project$HtmlDefs$makeLatex = F2(
	function (attrs, s) {
		return A3(
			$elm$html$Html$node,
			$author$project$HtmlDefs$latexElement,
			attrs,
			_List_fromArray(
				[
					$elm$html$Html$text(s)
				]));
	});
var $author$project$GraphDrawing$makeLatexString = function (s) {
	return '\\(' + (s + '\\)');
};
var $author$project$GraphDrawing$withPreamble = F2(
	function (cfg, s) {
		return cfg.latexPreamble + ('\n' + s);
	});
var $author$project$GraphDrawing$makeLatex = F6(
	function (cfg, pos, dims, label, z, attrs) {
		return A6(
			$author$project$Drawing$htmlAnchor,
			z,
			pos,
			dims,
			true,
			$author$project$GraphDrawing$makeLatexString(label),
			A2(
				$author$project$HtmlDefs$makeLatex,
				attrs,
				A2($author$project$GraphDrawing$withPreamble, cfg, label)));
	});
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$autofocus = $elm$html$Html$Attributes$boolProperty('autofocus');
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2(
					$elm$core$Task$onError,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Err),
					A2(
						$elm$core$Task$andThen,
						A2(
							$elm$core$Basics$composeL,
							A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
							$elm$core$Result$Ok),
						task))));
	});
var $elm$browser$Browser$Dom$focus = _Browser_call('focus');
var $author$project$Msg$focusId = function (s) {
	return A2(
		$elm$core$Task$attempt,
		function (_v0) {
			return $author$project$Msg$noOp;
		},
		$elm$browser$Browser$Dom$focus(s));
};
var $author$project$Zindex$foregroundZ = 10000;
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $author$project$HtmlDefs$idInput = 'edited_label';
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $author$project$HtmlDefs$renderedClass = 'rendered-callback';
var $author$project$HtmlDefs$renderedDecoder = A2(
	$elm$json$Json$Decode$field,
	'detail',
	A3(
		$elm$json$Json$Decode$map2,
		$elm$core$Tuple$pair,
		A2($elm$json$Json$Decode$field, 'width', $elm$json$Json$Decode$float),
		A2($elm$json$Json$Decode$field, 'height', $elm$json$Json$Decode$float)));
var $author$project$HtmlDefs$renderedEvent = 'rendered';
var $author$project$HtmlDefs$onRendered = function (onRender) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$Events$on,
			$author$project$HtmlDefs$renderedEvent,
			A2($elm$json$Json$Decode$map, onRender, $author$project$HtmlDefs$renderedDecoder)),
			$elm$html$Html$Attributes$class($author$project$HtmlDefs$renderedClass)
		]);
};
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 'MayPreventDefault', a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $author$project$HtmlDefs$preventsDefaultOnKeyDown = F2(
	function (noOp, filter) {
		return A2(
			$elm$html$Html$Events$preventDefaultOn,
			'keydown',
			A3(
				$elm$json$Json$Decode$map2,
				F2(
					function (ks, k) {
						return A2(filter, ks, k) ? _Utils_Tuple2(noOp, true) : _Utils_Tuple2(noOp, false);
					}),
				$author$project$HtmlDefs$keysDecoder,
				$author$project$HtmlDefs$keyDecoder));
	});
var $author$project$Msg$onTabPreventDefault = A2(
	$author$project$HtmlDefs$preventsDefaultOnKeyDown,
	$author$project$Msg$noOp,
	F2(
		function (_v0, k) {
			return _Utils_eq(
				k,
				$author$project$HtmlDefs$Control('Tab'));
		}));
var $author$project$HtmlDefs$select = _Platform_outgoingPort('select', $elm$json$Json$Encode$string);
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $author$project$GraphDrawing$make_input = F3(
	function (pos, label, onChange) {
		return A6(
			$author$project$Drawing$htmlAnchor,
			$author$project$Zindex$foregroundZ,
			pos,
			_Utils_Tuple2(100, 16),
			true,
			'',
			A2(
				$elm$html$Html$input,
				_Utils_ap(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$value(label),
							$elm$html$Html$Events$onInput(onChange),
							$author$project$Msg$onTabPreventDefault,
							$elm$html$Html$Attributes$id($author$project$HtmlDefs$idInput),
							$elm$html$Html$Attributes$autofocus(true),
							A2(
							$elm$html$Html$Attributes$style,
							'width',
							$elm$core$String$fromInt(
								$elm$core$String$length(label) + 1) + 'ch')
						]),
					_Utils_ap(
						$author$project$HtmlDefs$onRendered(
							$elm$core$Basics$always(
								$author$project$Msg$Do(
									$author$project$Msg$focusId($author$project$HtmlDefs$idInput)))),
						$author$project$HtmlDefs$onRendered(
							$elm$core$Basics$always(
								$author$project$Msg$Do(
									$author$project$HtmlDefs$select($author$project$HtmlDefs$idInput)))))),
				_List_Nil));
	});
var $author$project$GraphDrawing$nodeLabelDrawing = F3(
	function (cfg, attrs, node) {
		var n = node.label;
		var id = node.id;
		if (n.editable) {
			return A3(
				$author$project$GraphDrawing$make_input,
				n.inputPos,
				n.label,
				$author$project$Msg$NodeLabelEdit(id));
		} else {
			var label = _Utils_ap(
				n.isValidated ? '\\color{green}' : '',
				(n.label === '') ? '\\bullet' : (n.isMath ? n.label : ('\\text{' + (n.label + '}'))));
			return A6(
				$author$project$GraphDrawing$makeLatex,
				cfg,
				n.pos,
				n.dims,
				label,
				n.zindex,
				_Utils_ap(
					_List_fromArray(
						[
							$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onClick(
							$author$project$Msg$NodeClick(id)),
							$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onDoubleClick(
							$author$project$Msg$EltDoubleClick(id))
						]),
					_Utils_ap(
						A2(
							$elm$core$List$map,
							$elm$html$Html$Attributes$class,
							$author$project$GraphDrawing$activityToClasses(n.isActive)),
						$author$project$HtmlDefs$onRendered(
							$author$project$Msg$NodeRendered(id)))));
		}
	});
var $author$project$GraphDrawing$nodeDrawing = F2(
	function (cfg, n) {
		return A3(
			$author$project$GraphDrawing$nodeLabelDrawing,
			cfg,
			_List_fromArray(
				[
					$author$project$Drawing$onClick(
					$author$project$Msg$NodeClick(n.id))
				]),
			n);
	});
var $author$project$Msg$MouseOn = function (a) {
	return {$: 'MouseOn', a: a};
};
var $author$project$ArrowStyle$doubleSize = 2.5;
var $author$project$ArrowStyle$isDouble = function (_v0) {
	var _double = _v0._double;
	return _double;
};
var $author$project$Drawing$ArrowStyle$imgHeadWidth = 9.764;
var $author$project$Drawing$ArrowStyle$imgTailWidth = 3.089 * 2;
var $author$project$String$Svg$d = $author$project$String$Html$attribute('d');
var $author$project$String$Svg$fill = $author$project$String$Html$attribute('fill');
var $author$project$String$Svg$g = $author$project$String$Svg$node('g');
var $author$project$String$Svg$path = $author$project$String$Svg$node('path');
var $author$project$String$Svg$strokeLinecap = $author$project$String$Html$attribute('stroke-linecap');
var $author$project$String$Svg$strokeLinejoin = $author$project$String$Html$attribute('stroke-linejoin');
var $author$project$String$Svg$strokeMiterlimit = $author$project$String$Html$attribute('stroke-miterlimit');
var $author$project$String$Svg$transform = $author$project$String$Html$attribute('transform');
var $author$project$ArrowStyle$makeHeadShape = function (style) {
	var _v0 = _Utils_Tuple2(style._double, style.head);
	_v0$4:
	while (true) {
		if (!_v0.a) {
			switch (_v0.b.$) {
				case 'DefaultHead':
					var _v1 = _v0.b;
					return A2(
						$author$project$String$Svg$g,
						_List_fromArray(
							[
								$author$project$String$Svg$fill('none'),
								$author$project$String$Svg$stroke('#000'),
								$author$project$String$Svg$strokeWidth('.498'),
								$author$project$String$Svg$strokeMiterlimit('10')
							]),
						_List_fromArray(
							[
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M2.043.253c.473 1.794 1.528 2.64 2.59 2.99-1.062.348-2.117 1.194-2.59 2.988'),
										$author$project$String$Svg$strokeLinecap('round'),
										$author$project$String$Svg$strokeLinejoin('round'),
										$author$project$String$Svg$transform('translate(-1.8 0)')
									]),
								_List_Nil),
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M0 3.243H2')
									]),
								_List_Nil)
							]));
				case 'TwoHeads':
					var _v3 = _v0.b;
					return A2(
						$author$project$String$Svg$g,
						_List_fromArray(
							[
								$author$project$String$Svg$fill('none'),
								$author$project$String$Svg$stroke('#000'),
								$author$project$String$Svg$strokeWidth('.498'),
								$author$project$String$Svg$strokeMiterlimit('10'),
								$author$project$String$Svg$strokeLinecap('round'),
								$author$project$String$Svg$strokeLinejoin('round')
							]),
						_List_fromArray(
							[
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M.25.252c.473 1.794 1.528 2.64 2.59 2.99C1.778 3.59.723 4.436.25 6.23')
									]),
								_List_Nil),
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M2.043.252c.473 1.794 1.528 2.64 2.59 2.99-1.062.348-2.117 1.194-2.59 2.988')
									]),
								_List_Nil),
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M0 3.243H4.882')
									]),
								_List_Nil)
							]));
				default:
					break _v0$4;
			}
		} else {
			switch (_v0.b.$) {
				case 'DefaultHead':
					var _v2 = _v0.b;
					return A2(
						$author$project$String$Svg$g,
						_List_fromArray(
							[
								$author$project$String$Svg$fill('none'),
								$author$project$String$Svg$stroke('#000'),
								$author$project$String$Svg$strokeWidth('.498'),
								$author$project$String$Svg$strokeMiterlimit('10')
							]),
						_List_fromArray(
							[
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M2.043.253c.473 1.794 1.528 2.64 2.59 2.99-1.062.348-2.117 1.194-2.59 2.988'),
										$author$project$String$Svg$strokeLinecap('round'),
										$author$project$String$Svg$strokeLinejoin('round')
									]),
								_List_Nil),
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M0 3.243H2.441'),
										$author$project$String$Svg$transform('translate(0 -1.25)')
									]),
								_List_Nil),
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M0 3.243H2.441'),
										$author$project$String$Svg$transform('translate(0 1.25)')
									]),
								_List_Nil)
							]));
				case 'TwoHeads':
					var _v4 = _v0.b;
					return A2(
						$author$project$String$Svg$g,
						_List_fromArray(
							[
								$author$project$String$Svg$fill('none'),
								$author$project$String$Svg$stroke('#000'),
								$author$project$String$Svg$strokeWidth('.498'),
								$author$project$String$Svg$strokeMiterlimit('10')
							]),
						_List_fromArray(
							[
								A2(
								$author$project$String$Svg$g,
								_List_fromArray(
									[
										$author$project$String$Svg$strokeLinecap('round'),
										$author$project$String$Svg$strokeLinejoin('round')
									]),
								_List_fromArray(
									[
										A2(
										$author$project$String$Svg$path,
										_List_fromArray(
											[
												$author$project$String$Svg$d('M.25.252c.473 1.794 1.528 2.64 2.59 2.99C1.778 3.59.723 4.436.25 6.23')
											]),
										_List_Nil),
										A2(
										$author$project$String$Svg$path,
										_List_fromArray(
											[
												$author$project$String$Svg$d('M2.043.252c.473 1.794 1.528 2.64 2.59 2.99-1.062.348-2.117 1.194-2.59 2.988')
											]),
										_List_Nil)
									])),
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M0 3.243H1'),
										$author$project$String$Svg$transform('translate(0 1.25)')
									]),
								_List_Nil),
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M0 3.243H1'),
										$author$project$String$Svg$transform('translate(0 -1.25)')
									]),
								_List_Nil)
							]));
				default:
					break _v0$4;
			}
		}
	}
	return A2($author$project$String$Svg$g, _List_Nil, _List_Nil);
};
var $author$project$ArrowStyle$makeTailShape = function (style) {
	var _v0 = _Utils_Tuple2(style._double, style.tail);
	_v0$6:
	while (true) {
		if (!_v0.a) {
			switch (_v0.b.$) {
				case 'Hook':
					var _v1 = _v0.b;
					return A2(
						$author$project$String$Svg$g,
						_List_fromArray(
							[
								$author$project$String$Svg$fill('none'),
								$author$project$String$Svg$stroke('#000'),
								$author$project$String$Svg$strokeWidth('.498'),
								$author$project$String$Svg$strokeMiterlimit('10')
							]),
						_List_fromArray(
							[
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M2.335 3.243h.753')
									]),
								_List_Nil),
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M2.335.803C1.48.803.79 1.348.79 2.023c0 .674.69 1.22 1.544 1.22'),
										$author$project$String$Svg$strokeLinecap('round')
									]),
								_List_Nil)
							]));
				case 'HookAlt':
					var _v3 = _v0.b;
					return A2(
						$author$project$String$Svg$g,
						_List_fromArray(
							[
								$author$project$String$Svg$fill('none'),
								$author$project$String$Svg$stroke('#000'),
								$author$project$String$Svg$strokeWidth('.498'),
								$author$project$String$Svg$strokeMiterlimit('10'),
								$author$project$String$Svg$transform('translate(0 6.483) scale(1 -1)')
							]),
						_List_fromArray(
							[
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M2.335 3.243h.753')
									]),
								_List_Nil),
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M2.335.803C1.48.803.79 1.348.79 2.023c0 .674.69 1.22 1.544 1.22'),
										$author$project$String$Svg$strokeLinecap('round')
									]),
								_List_Nil)
							]));
				case 'Mapsto':
					var _v5 = _v0.b;
					return A2(
						$author$project$String$Svg$g,
						_List_fromArray(
							[
								$author$project$String$Svg$fill('none'),
								$author$project$String$Svg$stroke('#000'),
								$author$project$String$Svg$strokeWidth('.498'),
								$author$project$String$Svg$strokeMiterlimit('10')
							]),
						_List_fromArray(
							[
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M1.71 3.243h1.38')
									]),
								_List_Nil),
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M1.544 5.283V1.2'),
										$author$project$String$Svg$strokeLinecap('round')
									]),
								_List_Nil)
							]));
				default:
					break _v0$6;
			}
		} else {
			switch (_v0.b.$) {
				case 'Hook':
					var _v2 = _v0.b;
					return A2(
						$author$project$String$Svg$g,
						_List_fromArray(
							[
								$author$project$String$Svg$fill('none'),
								$author$project$String$Svg$stroke('#000'),
								$author$project$String$Svg$strokeWidth('.498'),
								$author$project$String$Svg$strokeMiterlimit('10')
							]),
						_List_fromArray(
							[
								A2(
								$author$project$String$Svg$g,
								_List_fromArray(
									[
										$author$project$String$Svg$transform('translate(0 -1.25)')
									]),
								_List_fromArray(
									[
										A2(
										$author$project$String$Svg$path,
										_List_fromArray(
											[
												$author$project$String$Svg$d('M2.335 3.243h.753')
											]),
										_List_Nil),
										A2(
										$author$project$String$Svg$path,
										_List_fromArray(
											[
												$author$project$String$Svg$d('M2.335.803C1.48.803.79 1.348.79 2.023c0 .674.69 1.22 1.544 1.22'),
												$author$project$String$Svg$strokeLinecap('round')
											]),
										_List_Nil)
									])),
								A2(
								$author$project$String$Svg$g,
								_List_fromArray(
									[
										$author$project$String$Svg$transform('translate(0 1.25)')
									]),
								_List_fromArray(
									[
										A2(
										$author$project$String$Svg$path,
										_List_fromArray(
											[
												$author$project$String$Svg$d('M2.335 3.243h.753')
											]),
										_List_Nil),
										A2(
										$author$project$String$Svg$path,
										_List_fromArray(
											[
												$author$project$String$Svg$d('M2.335.803C1.48.803.79 1.348.79 2.023c0 .674.69 1.22 1.544 1.22'),
												$author$project$String$Svg$strokeLinecap('round')
											]),
										_List_Nil)
									]))
							]));
				case 'HookAlt':
					var _v4 = _v0.b;
					return A2(
						$author$project$String$Svg$g,
						_List_fromArray(
							[
								$author$project$String$Svg$fill('none'),
								$author$project$String$Svg$stroke('#000'),
								$author$project$String$Svg$strokeWidth('.498'),
								$author$project$String$Svg$strokeMiterlimit('10'),
								$author$project$String$Svg$transform('translate(0 6.483) scale(1 -1)')
							]),
						_List_fromArray(
							[
								A2(
								$author$project$String$Svg$g,
								_List_fromArray(
									[
										$author$project$String$Svg$transform('translate(0 -1.25)')
									]),
								_List_fromArray(
									[
										A2(
										$author$project$String$Svg$path,
										_List_fromArray(
											[
												$author$project$String$Svg$d('M2.335 3.243h.753')
											]),
										_List_Nil),
										A2(
										$author$project$String$Svg$path,
										_List_fromArray(
											[
												$author$project$String$Svg$d('M2.335.803C1.48.803.79 1.348.79 2.023c0 .674.69 1.22 1.544 1.22'),
												$author$project$String$Svg$strokeLinecap('round')
											]),
										_List_Nil)
									])),
								A2(
								$author$project$String$Svg$g,
								_List_fromArray(
									[
										$author$project$String$Svg$transform('translate(0 1.25)')
									]),
								_List_fromArray(
									[
										A2(
										$author$project$String$Svg$path,
										_List_fromArray(
											[
												$author$project$String$Svg$d('M2.335 3.243h.753')
											]),
										_List_Nil),
										A2(
										$author$project$String$Svg$path,
										_List_fromArray(
											[
												$author$project$String$Svg$d('M2.335.803C1.48.803.79 1.348.79 2.023c0 .674.69 1.22 1.544 1.22'),
												$author$project$String$Svg$strokeLinecap('round')
											]),
										_List_Nil)
									]))
							]));
				case 'Mapsto':
					var _v6 = _v0.b;
					return A2(
						$author$project$String$Svg$g,
						_List_fromArray(
							[
								$author$project$String$Svg$fill('none'),
								$author$project$String$Svg$stroke('#000'),
								$author$project$String$Svg$strokeWidth('.498'),
								$author$project$String$Svg$strokeMiterlimit('10')
							]),
						_List_fromArray(
							[
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M1.71 3.243h1.38'),
										$author$project$String$Svg$transform('translate(0 -1.25)')
									]),
								_List_Nil),
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M1.71 3.243h1.38'),
										$author$project$String$Svg$transform('translate(0 1.25)')
									]),
								_List_Nil),
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M1.544 5.783 V 0.7'),
										$author$project$String$Svg$strokeLinecap('round')
									]),
								_List_Nil)
							]));
				default:
					break _v0$6;
			}
		}
	}
	return A2($author$project$String$Svg$g, _List_Nil, _List_Nil);
};
var $author$project$Drawing$ArrowStyle$imgHeight = 13;
var $author$project$Drawing$ArrowStyle$makeTheImg = F4(
	function (_v0, angle, imgWidth, content) {
		var x = _v0.a;
		var y = _v0.b;
		var _v1 = _Utils_Tuple2(x - (imgWidth / 2), y - ($author$project$Drawing$ArrowStyle$imgHeight / 2));
		var xh = _v1.a;
		var yh = _v1.b;
		var f = $elm$core$String$fromFloat;
		return A2(
			$author$project$String$Svg$g,
			_List_fromArray(
				[
					$author$project$String$Svg$transform(
					' rotate(' + ($elm$core$String$fromFloat(angle) + (' ' + ($elm$core$String$fromFloat(x) + (' ' + ($elm$core$String$fromFloat(y) + (')' + ('translate(' + (f(xh) + (', ' + (f(yh) + (')' + ' scale(2)'))))))))))))
				]),
			_List_fromArray(
				[content]));
	});
var $author$project$Drawing$ArrowStyle$makeHeadTailImgs = F2(
	function (_v0, style) {
		var from = _v0.from;
		var to = _v0.to;
		var controlPoint = _v0.controlPoint;
		var angle = function (delta) {
			return ($author$project$Geometry$Point$pointToAngle(delta) * 180) / $elm$core$Basics$pi;
		};
		return _List_fromArray(
			[
				A4(
				$author$project$Drawing$ArrowStyle$makeTheImg,
				to,
				angle(
					A2($author$project$Geometry$Point$subtract, to, controlPoint)),
				$author$project$Drawing$ArrowStyle$imgHeadWidth,
				$author$project$ArrowStyle$makeHeadShape(style)),
				A4(
				$author$project$Drawing$ArrowStyle$makeTheImg,
				from,
				angle(
					A2($author$project$Geometry$Point$subtract, controlPoint, from)),
				$author$project$Drawing$ArrowStyle$imgTailWidth,
				$author$project$ArrowStyle$makeTailShape(style))
			]);
	});
var $author$project$ArrowStyle$dashedStr = '7, 3';
var $author$project$String$Svg$strokeDasharray = $author$project$String$Html$attribute('stroke-dasharray');
var $author$project$Drawing$dashedToAttrs = function (dashed) {
	return dashed ? _List_fromArray(
		[
			$author$project$String$Svg$strokeDasharray($author$project$ArrowStyle$dashedStr)
		]) : _List_Nil;
};
var $author$project$Drawing$quadraticBezierToAttr = function (_v0) {
	var from = _v0.from;
	var to = _v0.to;
	var controlPoint = _v0.controlPoint;
	var f = $elm$core$String$fromFloat;
	var p = function (_v1) {
		var x1 = _v1.a;
		var x2 = _v1.b;
		return f(x1) + (' ' + f(x2));
	};
	return $author$project$String$Svg$d(
		'M' + (p(from) + (' Q ' + (p(controlPoint) + (', ' + p(to))))));
};
var $author$project$Drawing$mkPath = F3(
	function (dashed, attrs, q) {
		return A2(
			$author$project$String$Svg$path,
			A2(
				$elm$core$List$cons,
				$author$project$Drawing$quadraticBezierToAttr(q),
				A2(
					$elm$core$List$cons,
					$author$project$String$Svg$fill('none'),
					_Utils_ap(
						A2($author$project$Drawing$attrsToSvgAttrs, $author$project$String$Svg$stroke, attrs),
						$author$project$Drawing$dashedToAttrs(dashed)))),
			_List_Nil);
	});
var $author$project$Geometry$QuadraticBezier$orthoVectPx = F2(
	function (px, _v0) {
		var from = _v0.from;
		var to = _v0.to;
		var controlPoint = _v0.controlPoint;
		var deltaFrom = A3($author$project$Geometry$Point$orthoVectPx, from, controlPoint, px);
		var deltaTo = A3($author$project$Geometry$Point$orthoVectPx, controlPoint, to, px);
		var deltaCp = A2(
			$author$project$Geometry$Point$normalise,
			$elm$core$Basics$abs(px),
			A2($author$project$Geometry$Point$add, deltaFrom, deltaTo));
		return {
			controlPoint: A2($author$project$Geometry$Point$add, controlPoint, deltaCp),
			from: A2($author$project$Geometry$Point$add, deltaFrom, from),
			to: A2($author$project$Geometry$Point$add, deltaTo, to)
		};
	});
var $author$project$Drawing$arrow = F3(
	function (attrs0, arrowStyle, q) {
		var attrs = A2(
			$elm$core$List$cons,
			$author$project$Drawing$Color(arrowStyle.color),
			attrs0);
		var zindex = $author$project$Drawing$attributesToZIndex(attrs);
		var imgs = A2($author$project$Drawing$ArrowStyle$makeHeadTailImgs, q, arrowStyle);
		var mkgen = F2(
			function (d, l) {
				return A2(
					$author$project$Drawing$mkPath,
					d,
					_Utils_ap(l, attrs));
			});
		var mkl = A2(mkgen, arrowStyle.dashed, _List_Nil);
		var mkshadow = A2(
			mkgen,
			false,
			_List_fromArray(
				[
					$author$project$Drawing$class($author$project$Drawing$shadowClass)
				]));
		var mkall = function (l) {
			return _Utils_ap(
				A2($elm$core$List$map, mkshadow, l),
				A2($elm$core$List$map, mkl, l));
		};
		var lines = $author$project$ArrowStyle$isDouble(arrowStyle) ? mkall(
			_List_fromArray(
				[
					A2($author$project$Geometry$QuadraticBezier$orthoVectPx, 0 - $author$project$ArrowStyle$doubleSize, q),
					A2($author$project$Geometry$QuadraticBezier$orthoVectPx, $author$project$ArrowStyle$doubleSize, q)
				])) : mkall(
			_List_fromArray(
				[q]));
		return A2(
			$author$project$Drawing$ofSvgs,
			zindex,
			_Utils_ap(lines, imgs));
	});
var $author$project$Drawing$OnDoubleClick = function (a) {
	return {$: 'OnDoubleClick', a: a};
};
var $author$project$Drawing$onDoubleClick = $author$project$Drawing$OnDoubleClick;
var $author$project$Msg$EdgeLabelEdit = F2(
	function (a, b) {
		return {$: 'EdgeLabelEdit', a: a, b: b};
	});
var $author$project$Msg$EdgeRendered = F2(
	function (a, b) {
		return {$: 'EdgeRendered', a: a, b: b};
	});
var $author$project$Geometry$RoundedRectangle$RoundedRectangle = F3(
	function (centre, size, radius) {
		return {centre: centre, radius: radius, size: size};
	});
var $author$project$Geometry$Point$NamedPoint = F2(
	function (x, y) {
		return {x: x, y: y};
	});
var $elm$core$Basics$pow = _Basics_pow;
var $author$project$Geometry$Epsilon$epsilon = A2($elm$core$Basics$pow, 10, -10);
var $elm$core$Basics$ge = _Utils_ge;
var $author$project$Geometry$Epsilon$inv_epsilon = 1 / $author$project$Geometry$Epsilon$epsilon;
var $author$project$Geometry$Point$inv_scale = F3(
	function (sx, sy, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(x / sx, y / sy);
	});
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Set$isEmpty = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$isEmpty(dict);
};
var $author$project$Geometry$Point$name = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	return {x: x, y: y};
};
var $elm$core$Basics$cos = _Basics_cos;
var $elm$core$Basics$sin = _Basics_sin;
var $author$project$Geometry$Point$lendir = F2(
	function (length, direction) {
		return _Utils_Tuple2(
			length * $elm$core$Basics$cos(direction),
			length * $elm$core$Basics$sin(direction));
	});
var $author$project$Geometry$Point$scale = F3(
	function (sx, sy, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(x * sx, y * sy);
	});
var $author$project$Geometry$RoundedRectangle$points = F2(
	function (_this, max_segment_length) {
		var n = (!_this.radius) ? 0 : ($elm$core$Basics$pi / $elm$core$Basics$atan(max_segment_length / (2 * _this.radius)));
		var sides = $elm$core$Basics$ceiling(n);
		var r = _this.radius / $elm$core$Basics$cos($elm$core$Basics$pi / sides);
		var add_corner_points = F3(
			function (sx, sy, _v5) {
				var angle_offset = _v5.a;
				var pts = _v5.b;
				var pts2 = A2(
					$elm$core$List$cons,
					A2(
						$author$project$Geometry$Point$add,
						_this.centre,
						A2(
							$author$project$Geometry$Point$add,
							A2($author$project$Geometry$Point$lendir, _this.radius, angle_offset),
							A3(
								$author$project$Geometry$Point$scale,
								sx,
								sy,
								A2(
									$author$project$Geometry$Point$subtract,
									A2($author$project$Geometry$Point$resize, 0.5, _this.size),
									_Utils_Tuple2(_this.radius, _this.radius))))),
					pts);
				var _for = F2(
					function (i, pts_for) {
						if (_Utils_cmp(i, sides / 4) > -1) {
							return pts_for;
						} else {
							var angle = ((((i + 0.5) / sides) * 2) * $elm$core$Basics$pi) + angle_offset;
							var pt = A2(
								$author$project$Geometry$Point$add,
								_this.centre,
								A2(
									$author$project$Geometry$Point$add,
									A2($author$project$Geometry$Point$lendir, r, angle),
									A3(
										$author$project$Geometry$Point$scale,
										sx,
										sy,
										A2(
											$author$project$Geometry$Point$subtract,
											A2($author$project$Geometry$Point$resize, 0.5, _this.size),
											_Utils_Tuple2(_this.radius, _this.radius)))));
							return A2(
								_for,
								i + 1,
								A2($elm$core$List$cons, pt, pts_for));
						}
					});
				var pts3 = A2(_for, 0, pts2);
				var angle_offset2 = angle_offset + ($elm$core$Basics$pi / 2);
				var pt = A2(
					$author$project$Geometry$Point$add,
					_this.centre,
					A2(
						$author$project$Geometry$Point$add,
						A2($author$project$Geometry$Point$lendir, _this.radius, angle_offset2),
						A3(
							$author$project$Geometry$Point$scale,
							sx,
							sy,
							A2(
								$author$project$Geometry$Point$subtract,
								A2($author$project$Geometry$Point$resize, 0.5, _this.size),
								_Utils_Tuple2(_this.radius, _this.radius)))));
				return _Utils_Tuple2(
					angle_offset2,
					A2($elm$core$List$cons, pt, pts3));
			});
		var _v0 = A3(
			add_corner_points,
			1,
			-1,
			A3(
				add_corner_points,
				-1,
				-1,
				A3(
					add_corner_points,
					-1,
					1,
					A3(
						add_corner_points,
						1,
						1,
						_Utils_Tuple2(0, _List_Nil)))));
		var pts = _v0.b;
		var elim0 = F2(
			function (l, acc) {
				if (l.b && l.b.b) {
					var _v2 = l.a;
					var x1 = _v2.a;
					var y1 = _v2.b;
					var _v3 = l.b;
					var _v4 = _v3.a;
					var x2 = _v4.a;
					var y2 = _v4.b;
					var t = _v3.b;
					return A2(
						elim0,
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(x2, y2),
							t),
						((_Utils_cmp(
							$elm$core$Basics$abs(x2 - x1),
							$author$project$Geometry$Epsilon$epsilon) < 1) && (_Utils_cmp(
							$elm$core$Basics$abs(y2 - y1),
							$author$project$Geometry$Epsilon$epsilon) < 1)) ? acc : A2(
							$elm$core$List$cons,
							_Utils_Tuple2(x1, y1),
							acc));
				} else {
					return $elm$core$List$reverse(acc);
				}
			});
		return A2(elim0, pts, _List_Nil);
	});
var $author$project$Geometry$RoundedRectangle$points5 = function (_this) {
	return A2($author$project$Geometry$RoundedRectangle$points, _this, 5);
};
var $author$project$Geometry$Point$rotate = F2(
	function (theta, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			(x * $elm$core$Basics$cos(theta)) - (y * $elm$core$Basics$sin(theta)),
			(y * $elm$core$Basics$cos(theta)) + (x * $elm$core$Basics$sin(theta)));
	});
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $elm$core$Set$singleton = function (key) {
	return $elm$core$Set$Set_elm_builtin(
		A2($elm$core$Dict$singleton, key, _Utils_Tuple0));
};
var $author$project$Geometry$Bezier$x_intersections_with_nonvertical_line = F2(
	function (m, c) {
		var determinant = (((m * m) - (4 * m)) + 4) - (8 * c);
		return (determinant > 0) ? _List_fromArray(
			[
				((2 - m) + $elm$core$Basics$sqrt(determinant)) / 4,
				((2 - m) - $elm$core$Basics$sqrt(determinant)) / 4
			]) : ((!determinant) ? _List_fromArray(
			[
				((2 - m) + $elm$core$Basics$sqrt(determinant)) / 4
			]) : _List_Nil);
	});
var $author$project$Geometry$Bezier$y_intersection_with_vertical_line = function (a) {
	return (2 * a) * (1 - a);
};
var $author$project$Geometry$Bezier$intersections_with_rounded_rectangle = F3(
	function (_this, rect, permit_containment) {
		var h = (!_this.h) ? 1 : _this.h;
		var points = A2(
			$elm$core$List$map,
			function (p) {
				return $author$project$Geometry$Point$name(
					A3(
						$author$project$Geometry$Point$inv_scale,
						_this.w,
						h,
						A2(
							$author$project$Geometry$Point$rotate,
							-_this.angle,
							A2($author$project$Geometry$Point$subtract, p, _this.origin))));
			},
			$author$project$Geometry$RoundedRectangle$points5(rect));
		var add_intersection = F2(
			function (p, intersections) {
				return A2(
					$elm$core$Set$insert,
					_Utils_Tuple2(
						$elm$core$Basics$round(p.x * $author$project$Geometry$Epsilon$inv_epsilon) / $author$project$Geometry$Epsilon$inv_epsilon,
						$elm$core$Basics$round(p.y * $author$project$Geometry$Epsilon$inv_epsilon) / $author$project$Geometry$Epsilon$inv_epsilon),
					intersections);
			});
		var m_c = function (_v4) {
			var endpoint0 = _v4.a;
			var endpoint1 = _v4.b;
			var m = (endpoint1.y - endpoint0.y) / (endpoint1.x - endpoint0.x);
			return _Utils_Tuple2(m, endpoint0.y - (m * endpoint0.x));
		};
		var intersections2 = function () {
			if (!_this.h) {
				var _for = F3(
					function (pt0, pts, intersections) {
						if (!pts.b) {
							return intersections;
						} else {
							var endpoint0 = pts.a;
							var q = pts.b;
							var endpoint1 = A2(
								$elm$core$Maybe$withDefault,
								pt0,
								$elm$core$List$head(q));
							var endpoints = _Utils_Tuple2(endpoint0, endpoint1);
							return A3(
								_for,
								pt0,
								q,
								function () {
									if (_Utils_cmp(
										$elm$core$Basics$abs(endpoint0.x - endpoint1.x),
										$author$project$Geometry$Epsilon$epsilon) < 1) {
										return ((endpoint0.x >= 0) && ((endpoint0.x <= 1) && ((A2($elm$core$Basics$min, endpoint0.y, endpoint1.y) <= 0) && (A2($elm$core$Basics$max, endpoint0.y, endpoint1.y) >= 0)))) ? A2(
											add_intersection,
											A2($author$project$Geometry$Point$NamedPoint, endpoint0.x, 0),
											intersections) : intersections;
									} else {
										var _v1 = m_c(endpoints);
										var m = _v1.a;
										var c = _v1.b;
										if (_Utils_cmp(
											$elm$core$Basics$abs(m),
											$author$project$Geometry$Epsilon$epsilon) > 0) {
											var x = (-c) / m;
											return ((x >= 0) && ((x <= 1) && ((_Utils_cmp(
												x,
												A2($elm$core$Basics$min, endpoint0.x, endpoint1.x)) > -1) && (_Utils_cmp(
												x,
												A2($elm$core$Basics$max, endpoint0.x, endpoint1.x)) < 1)))) ? A2(
												add_intersection,
												A2($author$project$Geometry$Point$NamedPoint, x, 0),
												intersections) : intersections;
										} else {
											if (_Utils_cmp(
												$elm$core$Basics$abs(endpoint0.y),
												$author$project$Geometry$Epsilon$epsilon) < 1) {
												var minx = A2($elm$core$Basics$min, endpoint0.x, endpoint1.x);
												var maxx = A2($elm$core$Basics$min, endpoint0.x, endpoint1.x);
												return ((minx <= 1) && (maxx >= 0)) ? A2(
													add_intersection,
													A2(
														$author$project$Geometry$Point$NamedPoint,
														A2($elm$core$Basics$max, maxx, 1),
														0),
													A2(
														add_intersection,
														A2(
															$author$project$Geometry$Point$NamedPoint,
															A2($elm$core$Basics$max, minx, 0),
															0),
														intersections)) : intersections;
											} else {
												return intersections;
											}
										}
									}
								}());
						}
					});
				return A3(
					_for,
					A2(
						$elm$core$Maybe$withDefault,
						A2($author$project$Geometry$Point$NamedPoint, 0, 0),
						$elm$core$List$head(points)),
					points,
					$elm$core$Set$empty);
			} else {
				var _for = F3(
					function (pt0, pts, intersections) {
						if (!pts.b) {
							return intersections;
						} else {
							var endpoint0 = pts.a;
							var q = pts.b;
							var endpoint1 = A2(
								$elm$core$Maybe$withDefault,
								pt0,
								$elm$core$List$head(q));
							var endpoints = _Utils_Tuple2(endpoint0, endpoint1);
							return A3(
								_for,
								pt0,
								q,
								function () {
									if (_Utils_cmp(
										$elm$core$Basics$abs(endpoint0.x - endpoint1.x),
										$author$project$Geometry$Epsilon$epsilon) < 1) {
										var y = $author$project$Geometry$Bezier$y_intersection_with_vertical_line(endpoint0.x);
										return ((y >= 0) && ((_Utils_cmp(
											y,
											A2($elm$core$Basics$min, endpoint0.y, endpoint1.y)) > -1) && (_Utils_cmp(
											y,
											A2($elm$core$Basics$max, endpoint0.y, endpoint1.y)) < 1))) ? A2(
											add_intersection,
											A2($author$project$Geometry$Point$NamedPoint, endpoint0.x, y),
											intersections) : intersections;
									} else {
										var _v3 = m_c(endpoints);
										var m = _v3.a;
										var c = _v3.b;
										var inters = A2(
											$elm$core$List$map,
											function (x) {
												return A2($author$project$Geometry$Point$NamedPoint, x, (m * x) + c);
											},
											A2(
												$elm$core$List$filter,
												function (x) {
													return (x >= 0) && ((x <= 1) && ((_Utils_cmp(
														x,
														A2($elm$core$Basics$min, endpoint0.x, endpoint1.x)) > -1) && (_Utils_cmp(
														x,
														A2($elm$core$Basics$max, endpoint0.x, endpoint1.x)) < 1)));
												},
												A2($author$project$Geometry$Bezier$x_intersections_with_nonvertical_line, m, c)));
										return A3($elm$core$List$foldl, add_intersection, intersections, inters);
									}
								}());
						}
					});
				return A3(
					_for,
					A2(
						$elm$core$Maybe$withDefault,
						A2($author$project$Geometry$Point$NamedPoint, 0, 0),
						$elm$core$List$head(points)),
					points,
					$elm$core$Set$empty);
			}
		}();
		var intersections3 = function () {
			if ($elm$core$Set$isEmpty(intersections2)) {
				var sharp_rect = A3($author$project$Geometry$RoundedRectangle$RoundedRectangle, rect.centre, rect.size, 0);
				return A2(
					$author$project$Geometry$Point$isInPoly,
					_this.origin,
					$author$project$Geometry$RoundedRectangle$points5(sharp_rect)) ? (permit_containment ? $elm$core$Set$singleton(
					_Utils_Tuple2(0, 0)) : intersections2) : intersections2;
			} else {
				return intersections2;
			}
		}();
		return A2(
			$elm$core$List$map,
			A2($author$project$Geometry$Point$scale, _this.w, h),
			$elm$core$Set$toList(intersections3));
	});
var $author$project$Geometry$Bezier$new = F4(
	function (origin, w, h, angle) {
		return {
			angle: angle,
			control: A2(
				$author$project$Geometry$Point$add,
				origin,
				_Utils_Tuple2(w / 2, h)),
			end: A2(
				$author$project$Geometry$Point$add,
				origin,
				_Utils_Tuple2(w, 0)),
			h: h,
			origin: origin,
			w: w
		};
	});
var $author$project$Geometry$Point$lerp = F3(
	function (_this, other, t) {
		return A2(
			$author$project$Geometry$Point$add,
			_this,
			A2(
				$author$project$Geometry$Point$resize,
				t,
				A2($author$project$Geometry$Point$subtract, other, _this)));
	});
var $author$project$Geometry$Bezier$point = F2(
	function (_this, t) {
		return A3(
			$author$project$Geometry$Point$lerp,
			A3($author$project$Geometry$Point$lerp, _this.origin, _this.control, t),
			A3($author$project$Geometry$Point$lerp, _this.control, _this.end, t),
			t);
	});
var $author$project$Geometry$determine_label_position = F9(
	function (length, angle, edge_width, start, end, curve, label_position, label_alignement, label_size) {
		var bezier = A4(
			$author$project$Geometry$Bezier$new,
			_Utils_Tuple2(0, 0),
			length,
			curve,
			angle);
		var centre = A2($author$project$Geometry$Bezier$point, bezier, start + ((end - start) * label_position));
		var offset_angle = function () {
			switch (label_alignement.$) {
				case 'Centre':
					return 0;
				case 'Over':
					return 0;
				case 'Left':
					return 0 - ($elm$core$Basics$pi / 2);
				default:
					return $elm$core$Basics$pi / 2;
			}
		}();
		var offset_allowance = 4;
		var bail_out = 1024;
		var _while = F3(
			function (i, offset_min, offset_max) {
				_while:
				while (true) {
					var label_offset = (offset_min + offset_max) / 2;
					if (!i) {
						return label_offset;
					} else {
						var nexti = i - 1;
						var rect_centre = A2(
							$author$project$Geometry$Point$add,
							A2($author$project$Geometry$Point$lendir, label_offset, angle + offset_angle),
							A2($author$project$Geometry$Point$rotate, angle, centre));
						var intersections = A3(
							$author$project$Geometry$Bezier$intersections_with_rounded_rectangle,
							bezier,
							A3(
								$author$project$Geometry$RoundedRectangle$RoundedRectangle,
								rect_centre,
								A2(
									$author$project$Geometry$Point$add,
									_Utils_Tuple2(edge_width, edge_width),
									label_size),
								edge_width / 2),
							true);
						if (_Utils_eq(intersections, _List_Nil)) {
							if ((offset_max - offset_min) < 1) {
								return label_offset;
							} else {
								var $temp$i = nexti,
									$temp$offset_min = offset_min,
									$temp$offset_max = label_offset;
								i = $temp$i;
								offset_min = $temp$offset_min;
								offset_max = $temp$offset_max;
								continue _while;
							}
						} else {
							var $temp$i = nexti,
								$temp$offset_min = label_offset,
								$temp$offset_max = offset_max;
							i = $temp$i;
							offset_min = $temp$offset_min;
							offset_max = $temp$offset_max;
							continue _while;
						}
					}
				}
			});
		var offset_min = 0;
		var offset_max = (offset_allowance + ($elm$core$Basics$abs(curve) / 2)) + $author$project$Geometry$Point$radius(
			A2(
				$author$project$Geometry$Point$resize,
				0.5,
				A2(
					$author$project$Geometry$Point$add,
					label_size,
					_Utils_Tuple2(edge_width, edge_width))));
		var label_offset = A3(_while, bail_out, offset_min, offset_max);
		return A2(
			$author$project$Geometry$Point$add,
			centre,
			A2($author$project$Geometry$Point$lendir, label_offset, offset_angle));
	});
var $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onMove = A2($mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onWithOptions, 'mousemove', $mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$defaultOptions);
var $author$project$GraphDrawing$segmentLabel = F6(
	function (cfg, q, edgeId, activity, label, curve) {
		var offset = 10 + ($author$project$ArrowStyle$isDouble(label.style) ? $author$project$ArrowStyle$doubleSize : 0);
		var labelpos = function () {
			var diffP = A2($author$project$Geometry$Point$subtract, q.to, q.from);
			var angle = $author$project$Geometry$Point$pointToAngle(diffP);
			var length = $author$project$Geometry$Point$radius(diffP);
			return A2(
				$author$project$Geometry$Point$add,
				q.from,
				A2(
					$author$project$Geometry$Point$rotate,
					angle,
					A9(
						$author$project$Geometry$determine_label_position,
						length,
						angle,
						2,
						0,
						1,
						curve * length,
						label.style.labelPosition,
						label.style.labelAlignment,
						label.editable ? _Utils_Tuple2(2, 2) : label.dims)));
		}();
		if (label.editable) {
			return A3(
				$author$project$GraphDrawing$make_input,
				labelpos,
				label.label,
				$author$project$Msg$EdgeLabelEdit(edgeId));
		} else {
			if (label.label === '') {
				return $author$project$Drawing$empty;
			} else {
				var finalLabel = ' \\scriptstyle ' + label.label;
				return A6(
					$author$project$GraphDrawing$makeLatex,
					cfg,
					labelpos,
					label.dims,
					finalLabel,
					$author$project$Zindex$foregroundZ,
					_Utils_ap(
						_List_fromArray(
							[
								$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onClick(
								$author$project$Msg$EdgeClick(edgeId)),
								$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onDoubleClick(
								$author$project$Msg$EltDoubleClick(edgeId)),
								$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onMove(
								$elm$core$Basics$always(
									$author$project$Msg$MouseOn(edgeId)))
							]),
						_Utils_ap(
							A2(
								$elm$core$List$map,
								$elm$html$Html$Attributes$class,
								$author$project$GraphDrawing$activityToClasses(activity)),
							$author$project$HtmlDefs$onRendered(
								$author$project$Msg$EdgeRendered(edgeId)))));
			}
		}
	});
var $author$project$Drawing$On = F2(
	function (a, b) {
		return {$: 'On', a: a, b: b};
	});
var $author$project$Drawing$on = $author$project$Drawing$On;
var $author$project$Drawing$simpleOn = F2(
	function (s, m) {
		return A2(
			$author$project$Drawing$on,
			s,
			$elm$json$Json$Decode$succeed(m));
	});
var $author$project$GraphDrawing$normalEdgeDrawing = F7(
	function (cfg, edgeId, activity, z, label, q, curve) {
		var c = label.style.color;
		var oldstyle = label.style;
		var style = _Utils_update(
			oldstyle,
			{color: c});
		var classes = A2(
			$elm$core$List$map,
			$author$project$Drawing$class,
			$author$project$GraphDrawing$activityToEdgeClasses(activity));
		return $author$project$Drawing$group(
			_List_fromArray(
				[
					A3(
					$author$project$Drawing$arrow,
					_Utils_ap(
						classes,
						_List_fromArray(
							[
								$author$project$Drawing$zindexAttr(z),
								$author$project$Drawing$onClick(
								$author$project$Msg$EdgeClick(edgeId)),
								$author$project$Drawing$onDoubleClick(
								$author$project$Msg$EltDoubleClick(edgeId)),
								A2(
								$author$project$Drawing$simpleOn,
								'mousemove',
								$author$project$Msg$MouseOn(edgeId))
							])),
					style,
					q),
					A6($author$project$GraphDrawing$segmentLabel, cfg, q, edgeId, activity, label, curve)
				]));
	});
var $author$project$GraphDrawing$graphDrawing = F2(
	function (cfg, g0) {
		var drawEdge = F2(
			function (id, e) {
				var _v0 = _Utils_Tuple2(e.details, e.shape);
				_v0$2:
				while (true) {
					if (_v0.a.$ === 'PullshoutEdge') {
						if (_v0.b.$ === 'HatShape') {
							var _v1 = _v0.a;
							var hat = _v0.b.a;
							return A4($author$project$GraphDrawing$drawHat, id, e.isActive, e.zindex, hat);
						} else {
							break _v0$2;
						}
					} else {
						if (_v0.b.$ === 'Bezier') {
							var l = _v0.a.a;
							var q = _v0.b.a;
							return A7($author$project$GraphDrawing$normalEdgeDrawing, cfg, id, e.isActive, e.zindex, l, q, l.style.bend);
						} else {
							break _v0$2;
						}
					}
				}
				return $author$project$Drawing$empty;
			});
		var g = A3(
			$author$project$Polygraph$map,
			F2(
				function (id, n) {
					return A2(
						$author$project$GraphDrawing$nodeDrawing,
						cfg,
						A2($author$project$Polygraph$Node, id, n));
				}),
			drawEdge,
			g0);
		var nodes = A2(
			$elm$core$List$map,
			function ($) {
				return $.label;
			},
			$author$project$Polygraph$nodes(g));
		var edges = A2(
			$elm$core$List$map,
			function ($) {
				return $.label;
			},
			$author$project$Polygraph$edges(g));
		var drawings = _Utils_ap(nodes, edges);
		return $author$project$Drawing$group(drawings);
	});
var $author$project$Main$toDrawing = F2(
	function (model, graph) {
		var cfg = {
			latexPreamble: function () {
				var _v0 = model.scenario;
				if (_v0.$ === 'Exercise1') {
					return '\\newcommand{\\depthHistory}{' + ($elm$core$String$fromInt(
						$elm$core$List$length(model.history)) + '}');
				} else {
					return model.latexPreamble;
				}
			}()
		};
		return A2($author$project$GraphDrawing$graphDrawing, cfg, graph);
	});
var $author$project$GraphDrawing$MainActive = {$: 'MainActive'};
var $author$project$GraphDrawing$NoActive = {$: 'NoActive'};
var $author$project$GraphDrawing$WeakActive = {$: 'WeakActive'};
var $author$project$GraphDrawing$NormalEdge = function (a) {
	return {$: 'NormalEdge', a: a};
};
var $author$project$GraphDrawing$PullshoutEdge = {$: 'PullshoutEdge'};
var $author$project$GraphDefs$getEdgeDims = function (n) {
	var _v0 = n.dims;
	if (_v0.$ === 'Nothing') {
		return $author$project$GraphDefs$defaultDims(n.label);
	} else {
		var p = _v0.a;
		return p;
	}
};
var $author$project$GraphDrawing$make_edgeDrawingLabel = F2(
	function (_v0, e) {
		var editable = _v0.editable;
		var isActive = _v0.isActive;
		var shape = _v0.shape;
		return {
			details: function () {
				var _v1 = e.details;
				if (_v1.$ === 'PullshoutEdge') {
					return $author$project$GraphDrawing$PullshoutEdge;
				} else {
					var l = _v1.a;
					var label = l.label;
					var style = l.style;
					return $author$project$GraphDrawing$NormalEdge(
						{
							dims: $author$project$GraphDefs$getEdgeDims(l),
							editable: editable,
							label: label,
							style: style
						});
				}
			}(),
			isActive: isActive,
			shape: shape,
			zindex: e.zindex
		};
	});
var $author$project$GraphDrawing$make_nodeDrawingLabel = F2(
	function (_v0, l) {
		var editable = _v0.editable;
		var isActive = _v0.isActive;
		var label = l.label;
		var pos = l.pos;
		var isMath = l.isMath;
		var nodePos = $author$project$GraphDefs$getNodePos(l);
		return {
			dims: editable ? _Utils_Tuple2(0, 0) : $author$project$GraphDefs$getNodeDims(l),
			editable: editable,
			inputPos: pos,
			isActive: isActive,
			isMath: isMath,
			isValidated: l.isCoqValidated,
			label: label,
			pos: nodePos,
			zindex: l.zindex
		};
	});
var $author$project$GraphDrawing$toDrawingGraph = function (g) {
	var makeActivity = function (r) {
		return r.selected ? $author$project$GraphDrawing$MainActive : (r.weaklySelected ? $author$project$GraphDrawing$WeakActive : $author$project$GraphDrawing$NoActive);
	};
	var graphWithPos = $author$project$GraphDefs$posGraph(g);
	return A3(
		$author$project$Polygraph$map,
		F2(
			function (_v0, n) {
				return A2(
					$author$project$GraphDrawing$make_nodeDrawingLabel,
					{
						editable: false,
						isActive: makeActivity(n)
					},
					n);
			}),
		F2(
			function (_v1, e) {
				return A2(
					$author$project$GraphDrawing$make_edgeDrawingLabel,
					{
						editable: false,
						isActive: makeActivity(e.label),
						shape: e.shape
					},
					e.label);
			}),
		graphWithPos);
};
var $author$project$String$Svg$svg = $author$project$String$Svg$node('svg');
var $author$project$Drawing$svgHelper = F2(
	function (l, d) {
		return A2(
			$author$project$String$Svg$svg,
			l,
			A2(
				$elm$core$List$map,
				function ($) {
					return $.svg;
				},
				A2(
					$elm$core$List$sortBy,
					function ($) {
						return $.zindex;
					},
					$author$project$Drawing$drawingToZSvgs(d))));
	});
var $zwilias$elm_html_string$Html$Types$Node = F3(
	function (a, b, c) {
		return {$: 'Node', a: a, b: b, c: c};
	});
var $zwilias$elm_html_string$Html$Types$Regular = function (a) {
	return {$: 'Regular', a: a};
};
var $zwilias$elm_html_string$Html$String$node = F3(
	function (tag, attributes, children) {
		return A3(
			$zwilias$elm_html_string$Html$Types$Node,
			tag,
			attributes,
			$zwilias$elm_html_string$Html$Types$Regular(children));
	});
var $zwilias$elm_html_string$Html$Types$TextNode = function (a) {
	return {$: 'TextNode', a: a};
};
var $zwilias$elm_html_string$Html$String$text = $zwilias$elm_html_string$Html$Types$TextNode;
var $zwilias$elm_html_string$Html$Types$Attribute = F2(
	function (a, b) {
		return {$: 'Attribute', a: a, b: b};
	});
var $zwilias$elm_html_string$Html$String$Attributes$attribute = $zwilias$elm_html_string$Html$Types$Attribute;
var $author$project$String$Html$toHtmlStringAttribute = function (attr) {
	if (attr.$ === 'AttributeNS') {
		var name = attr.b;
		var value = attr.c;
		return $elm$core$Maybe$Just(
			A2($zwilias$elm_html_string$Html$String$Attributes$attribute, name, value));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$String$Html$toHtmlString = function (root) {
	switch (root.$) {
		case 'NodeNS':
			var name = root.b;
			var attrs = root.c;
			var children = root.d;
			return A3(
				$zwilias$elm_html_string$Html$String$node,
				name,
				A2($elm$core$List$filterMap, $author$project$String$Html$toHtmlStringAttribute, attrs),
				A2($elm$core$List$map, $author$project$String$Html$toHtmlString, children));
		case 'TextNode':
			var s = root.a;
			return $zwilias$elm_html_string$Html$String$text(s);
		default:
			var s = root.a;
			return $zwilias$elm_html_string$Html$String$text(s);
	}
};
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $zwilias$elm_html_string$Html$Types$indent = F3(
	function (perLevel, level, x) {
		return _Utils_ap(
			A2($elm$core$String$repeat, perLevel * level, ' '),
			x);
	});
var $zwilias$elm_html_string$Html$Types$join = F2(
	function (between, list) {
		if (!list.b) {
			return '';
		} else {
			if (!list.b.b) {
				var x = list.a;
				return x;
			} else {
				var x = list.a;
				var xs = list.b;
				return A3(
					$elm$core$List$foldl,
					F2(
						function (y, acc) {
							return _Utils_ap(
								y,
								_Utils_ap(between, acc));
						}),
					x,
					xs);
			}
		}
	});
var $zwilias$elm_html_string$Html$Types$closingTag = function (tagName) {
	return '</' + (tagName + '>');
};
var $zwilias$elm_html_string$Html$Types$escapeHtmlText = A2(
	$elm$core$Basics$composeR,
	A2($elm$core$String$replace, '&', '&amp;'),
	A2(
		$elm$core$Basics$composeR,
		A2($elm$core$String$replace, '<', '&lt;'),
		A2($elm$core$String$replace, '>', '&gt;')));
var $elm$core$String$foldl = _String_foldl;
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $zwilias$elm_html_string$Html$Types$escape = A2(
	$elm$core$String$foldl,
	F2(
		function (_char, acc) {
			return _Utils_eq(
				_char,
				_Utils_chr('\"')) ? (acc + '\\\"') : _Utils_ap(
				acc,
				$elm$core$String$fromChar(_char));
		}),
	'');
var $elm$core$Char$toLower = _Char_toLower;
var $zwilias$elm_html_string$Html$Types$hyphenate = A2(
	$elm$core$String$foldl,
	F2(
		function (_char, acc) {
			return $elm$core$Char$isUpper(_char) ? (acc + ('-' + $elm$core$String$fromChar(
				$elm$core$Char$toLower(_char)))) : _Utils_ap(
				acc,
				$elm$core$String$fromChar(_char));
		}),
	'');
var $zwilias$elm_html_string$Html$Types$buildProp = F2(
	function (key, value) {
		return $zwilias$elm_html_string$Html$Types$hyphenate(key) + ('=\"' + ($zwilias$elm_html_string$Html$Types$escape(value) + '\"'));
	});
var $NoRedInk$elm_string_conversions$String$Conversions$fromValue = function (value) {
	return A2($elm$json$Json$Encode$encode, 0, value);
};
var $zwilias$elm_html_string$Html$Types$propName = function (prop) {
	switch (prop) {
		case 'className':
			return 'class';
		case 'defaultValue':
			return 'value';
		case 'htmlFor':
			return 'for';
		default:
			return prop;
	}
};
var $zwilias$elm_html_string$Html$Types$addAttribute = F2(
	function (attribute, acc) {
		var classes = acc.a;
		var styles = acc.b;
		var attrs = acc.c;
		switch (attribute.$) {
			case 'Attribute':
				var key = attribute.a;
				var value = attribute.b;
				return _Utils_Tuple3(
					classes,
					styles,
					A2(
						$elm$core$List$cons,
						A2($zwilias$elm_html_string$Html$Types$buildProp, key, value),
						attrs));
			case 'StringProperty':
				if (attribute.a === 'className') {
					var value = attribute.b;
					return _Utils_Tuple3(
						A2($elm$core$List$cons, value, classes),
						styles,
						attrs);
				} else {
					var string = attribute.a;
					var value = attribute.b;
					return _Utils_Tuple3(
						classes,
						styles,
						A2(
							$elm$core$List$cons,
							A2(
								$zwilias$elm_html_string$Html$Types$buildProp,
								$zwilias$elm_html_string$Html$Types$propName(string),
								value),
							attrs));
				}
			case 'BoolProperty':
				var string = attribute.a;
				var enabled = attribute.b;
				return enabled ? _Utils_Tuple3(
					classes,
					styles,
					A2(
						$elm$core$List$cons,
						$zwilias$elm_html_string$Html$Types$hyphenate(
							$zwilias$elm_html_string$Html$Types$propName(string)),
						attrs)) : acc;
			case 'ValueProperty':
				var string = attribute.a;
				var value = attribute.b;
				return _Utils_Tuple3(
					classes,
					styles,
					A2(
						$elm$core$List$cons,
						A2(
							$zwilias$elm_html_string$Html$Types$buildProp,
							$zwilias$elm_html_string$Html$Types$propName(string),
							$NoRedInk$elm_string_conversions$String$Conversions$fromValue(value)),
						attrs));
			case 'Style':
				var key = attribute.a;
				var value = attribute.b;
				return _Utils_Tuple3(
					classes,
					A2(
						$elm$core$List$cons,
						$zwilias$elm_html_string$Html$Types$escape(key) + (': ' + $zwilias$elm_html_string$Html$Types$escape(value)),
						styles),
					attrs);
			default:
				return acc;
		}
	});
var $zwilias$elm_html_string$Html$Types$withClasses = F2(
	function (classes, attrs) {
		if (!classes.b) {
			return attrs;
		} else {
			return A2(
				$elm$core$List$cons,
				A2(
					$zwilias$elm_html_string$Html$Types$buildProp,
					'class',
					A2($zwilias$elm_html_string$Html$Types$join, ' ', classes)),
				attrs);
		}
	});
var $zwilias$elm_html_string$Html$Types$withStyles = F2(
	function (styles, attrs) {
		if (!styles.b) {
			return attrs;
		} else {
			return A2(
				$elm$core$List$cons,
				A2(
					$zwilias$elm_html_string$Html$Types$buildProp,
					'style',
					A2($zwilias$elm_html_string$Html$Types$join, '; ', styles)),
				attrs);
		}
	});
var $zwilias$elm_html_string$Html$Types$attributesToString = function (attrs) {
	var _v0 = A3(
		$elm$core$List$foldl,
		$zwilias$elm_html_string$Html$Types$addAttribute,
		_Utils_Tuple3(_List_Nil, _List_Nil, _List_Nil),
		attrs);
	var classes = _v0.a;
	var styles = _v0.b;
	var regular = _v0.c;
	return A2(
		$zwilias$elm_html_string$Html$Types$withStyles,
		styles,
		A2($zwilias$elm_html_string$Html$Types$withClasses, classes, regular));
};
var $zwilias$elm_html_string$Html$Types$tag = F2(
	function (tagName, attributes) {
		return '<' + (A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$cons,
				tagName,
				$zwilias$elm_html_string$Html$Types$attributesToString(attributes))) + '>');
	});
var $zwilias$elm_html_string$Html$Types$toStringHelper = F3(
	function (indenter, tags, acc) {
		toStringHelper:
		while (true) {
			if (!tags.b) {
				var _v1 = acc.stack;
				if (!_v1.b) {
					return acc;
				} else {
					var _v2 = _v1.a;
					var tagName = _v2.a;
					var cont = _v2.b;
					var rest = _v1.b;
					var $temp$indenter = indenter,
						$temp$tags = cont,
						$temp$acc = _Utils_update(
						acc,
						{
							depth: acc.depth - 1,
							result: A2(
								$elm$core$List$cons,
								A2(
									indenter,
									acc.depth - 1,
									$zwilias$elm_html_string$Html$Types$closingTag(tagName)),
								acc.result),
							stack: rest
						});
					indenter = $temp$indenter;
					tags = $temp$tags;
					acc = $temp$acc;
					continue toStringHelper;
				}
			} else {
				if (tags.a.$ === 'Node') {
					var _v3 = tags.a;
					var tagName = _v3.a;
					var attributes = _v3.b;
					var children = _v3.c;
					var rest = tags.b;
					switch (children.$) {
						case 'NoChildren':
							var $temp$indenter = indenter,
								$temp$tags = rest,
								$temp$acc = _Utils_update(
								acc,
								{
									result: A2(
										$elm$core$List$cons,
										A2(
											indenter,
											acc.depth,
											A2($zwilias$elm_html_string$Html$Types$tag, tagName, attributes)),
										acc.result)
								});
							indenter = $temp$indenter;
							tags = $temp$tags;
							acc = $temp$acc;
							continue toStringHelper;
						case 'Regular':
							var childNodes = children.a;
							var $temp$indenter = indenter,
								$temp$tags = childNodes,
								$temp$acc = _Utils_update(
								acc,
								{
									depth: acc.depth + 1,
									result: A2(
										$elm$core$List$cons,
										A2(
											indenter,
											acc.depth,
											A2($zwilias$elm_html_string$Html$Types$tag, tagName, attributes)),
										acc.result),
									stack: A2(
										$elm$core$List$cons,
										_Utils_Tuple2(tagName, rest),
										acc.stack)
								});
							indenter = $temp$indenter;
							tags = $temp$tags;
							acc = $temp$acc;
							continue toStringHelper;
						default:
							var childNodes = children.a;
							var $temp$indenter = indenter,
								$temp$tags = A2($elm$core$List$map, $elm$core$Tuple$second, childNodes),
								$temp$acc = _Utils_update(
								acc,
								{
									depth: acc.depth + 1,
									result: A2(
										$elm$core$List$cons,
										A2(
											indenter,
											acc.depth,
											A2($zwilias$elm_html_string$Html$Types$tag, tagName, attributes)),
										acc.result),
									stack: A2(
										$elm$core$List$cons,
										_Utils_Tuple2(tagName, rest),
										acc.stack)
								});
							indenter = $temp$indenter;
							tags = $temp$tags;
							acc = $temp$acc;
							continue toStringHelper;
					}
				} else {
					var string = tags.a.a;
					var rest = tags.b;
					var $temp$indenter = indenter,
						$temp$tags = rest,
						$temp$acc = _Utils_update(
						acc,
						{
							result: A2(
								$elm$core$List$cons,
								A2(
									indenter,
									acc.depth,
									$zwilias$elm_html_string$Html$Types$escapeHtmlText(string)),
								acc.result)
						});
					indenter = $temp$indenter;
					tags = $temp$tags;
					acc = $temp$acc;
					continue toStringHelper;
				}
			}
		}
	});
var $zwilias$elm_html_string$Html$Types$toString = F2(
	function (depth, html) {
		var joinString = function () {
			if (!depth) {
				return '';
			} else {
				return '\n';
			}
		}();
		var initialAcc = {depth: 0, result: _List_Nil, stack: _List_Nil};
		var indenter = function () {
			if (!depth) {
				return $elm$core$Basics$always($elm$core$Basics$identity);
			} else {
				return $zwilias$elm_html_string$Html$Types$indent(depth);
			}
		}();
		return A2(
			$zwilias$elm_html_string$Html$Types$join,
			joinString,
			A3(
				$zwilias$elm_html_string$Html$Types$toStringHelper,
				indenter,
				_List_fromArray(
					[html]),
				initialAcc).result);
	});
var $zwilias$elm_html_string$Html$String$toString = function (indent) {
	return $zwilias$elm_html_string$Html$Types$toString(indent);
};
var $author$project$String$Html$toString = A2(
	$elm$core$Basics$composeR,
	$author$project$String$Html$toHtmlString,
	$zwilias$elm_html_string$Html$String$toString(0));
var $author$project$Drawing$toString = F2(
	function (l, d) {
		return $author$project$String$Html$toString(
			A2($author$project$Drawing$svgHelper, l, d));
	});
var $author$project$String$Svg$viewBox = function (_v0) {
	var topLeft = _v0.topLeft;
	var bottomRight = _v0.bottomRight;
	var _v1 = bottomRight;
	var a2 = _v1.a;
	var b2 = _v1.b;
	var _v2 = topLeft;
	var a1 = _v2.a;
	var b1 = _v2.b;
	var f = A2($elm$core$Basics$composeR, $elm$core$Basics$round, $elm$core$String$fromInt);
	return A2(
		$author$project$String$Html$attribute,
		'viewbox',
		f(a1) + (' ' + (f(b1) + (' ' + (f(a2 - a1) + (' ' + f(b2 - b1)))))));
};
var $author$project$Main$svgExport = F2(
	function (model, graph) {
		var g = $author$project$GraphDefs$clearWeakSelection(
			$author$project$GraphDefs$clearSelection(graph));
		var box = $author$project$Geometry$rectFromPosDims(
			A2(
				$author$project$Geometry$pad,
				$author$project$Model$getActiveSizeGrid(model) / 2,
				$author$project$Geometry$posDimsFromRect(
					$author$project$GraphDefs$rectEnveloppe(g))));
		return A2(
			$author$project$Drawing$toString,
			_List_fromArray(
				[
					$author$project$String$Svg$viewBox(box)
				]),
			A2(
				$author$project$Main$toDrawing,
				model,
				$author$project$GraphDrawing$toDrawingGraph(g)));
	});
var $author$project$Main$makeExports = function (model) {
	var modelGraph = $author$project$Model$getActiveGraph(model);
	var sizeGrid = $author$project$Model$getActiveSizeGrid(model);
	return {
		coq: A2($author$project$Main$coqExport, model, modelGraph),
		svg: A2($author$project$Main$svgExport, model, modelGraph),
		tex: A2($author$project$Tikz$graphToTikz, sizeGrid, modelGraph)
	};
};
var $author$project$Model$swapActiveTab = F2(
	function (l, forward) {
		if (l.b && l.b.b) {
			var t1 = l.a;
			var _v1 = l.b;
			var t2 = _v1.a;
			var q = _v1.b;
			return ((forward && t1.active) || ((!forward) && t2.active)) ? A2(
				$elm$core$List$cons,
				t2,
				A2($elm$core$List$cons, t1, q)) : A2(
				$elm$core$List$cons,
				t1,
				A2(
					$author$project$Model$swapActiveTab,
					A2($elm$core$List$cons, t2, q),
					forward));
		} else {
			return l;
		}
	});
var $author$project$Model$moveTabLeft = function (m) {
	return _Utils_update(
		m,
		{
			tabs: A2($author$project$Model$swapActiveTab, m.tabs, false)
		});
};
var $author$project$Model$moveTabRight = function (m) {
	return _Utils_update(
		m,
		{
			tabs: A2($author$project$Model$swapActiveTab, m.tabs, true)
		});
};
var $author$project$Model$nextTabName = function (m) {
	var n = A2(
		$elm$core$Maybe$withDefault,
		0,
		$elm$core$List$maximum(
			A2(
				$elm$core$List$filterMap,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.title;
					},
					$elm$core$String$toInt),
				m.tabs)));
	return $elm$core$String$fromInt(1 + n);
};
var $author$project$Main$onMouseMove = _Platform_outgoingPort('onMouseMove', $elm$core$Basics$identity);
var $author$project$Model$depthHistory = 20;
var $author$project$Model$toGraphInfo = function (m) {
	return {latexPreamble: m.latexPreamble, tabs: m.tabs};
};
var $author$project$Model$pushHistory = function (m) {
	return _Utils_update(
		m,
		{
			history: A2(
				$elm$core$List$take,
				$author$project$Model$depthHistory,
				A2(
					$elm$core$List$cons,
					$author$project$Model$toGraphInfo(m),
					m.history))
		});
};
var $elm$json$Json$Encode$float = _Json_wrap;
var $author$project$Main$quicksaveGraph = _Platform_outgoingPort(
	'quicksaveGraph',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'export',
					function ($) {
						return $elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'coq',
									$elm$json$Json$Encode$string($.coq)),
									_Utils_Tuple2(
									'svg',
									$elm$json$Json$Encode$string($.svg)),
									_Utils_Tuple2(
									'tex',
									$elm$json$Json$Encode$string($.tex))
								]));
					}($._export)),
					_Utils_Tuple2(
					'feedback',
					$elm$json$Json$Encode$bool($.feedback)),
					_Utils_Tuple2(
					'info',
					function ($) {
						return $elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'graph',
									function ($) {
										return $elm$json$Json$Encode$object(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'latexPreamble',
													$elm$json$Json$Encode$string($.latexPreamble)),
													_Utils_Tuple2(
													'tabs',
													$elm$json$Json$Encode$list(
														function ($) {
															return $elm$json$Json$Encode$object(
																_List_fromArray(
																	[
																		_Utils_Tuple2(
																		'active',
																		$elm$json$Json$Encode$bool($.active)),
																		_Utils_Tuple2(
																		'edges',
																		$elm$json$Json$Encode$list(
																			function ($) {
																				return $elm$json$Json$Encode$object(
																					_List_fromArray(
																						[
																							_Utils_Tuple2(
																							'from',
																							$elm$json$Json$Encode$int($.from)),
																							_Utils_Tuple2(
																							'id',
																							$elm$json$Json$Encode$int($.id)),
																							_Utils_Tuple2(
																							'label',
																							function ($) {
																								return $elm$json$Json$Encode$object(
																									_List_fromArray(
																										[
																											_Utils_Tuple2(
																											'isPullshout',
																											$elm$json$Json$Encode$bool($.isPullshout)),
																											_Utils_Tuple2(
																											'label',
																											$elm$json$Json$Encode$string($.label)),
																											_Utils_Tuple2(
																											'style',
																											function ($) {
																												return $elm$json$Json$Encode$object(
																													_List_fromArray(
																														[
																															_Utils_Tuple2(
																															'alignment',
																															$elm$json$Json$Encode$string($.alignment)),
																															_Utils_Tuple2(
																															'bend',
																															$elm$json$Json$Encode$float($.bend)),
																															_Utils_Tuple2(
																															'color',
																															$elm$json$Json$Encode$string($.color)),
																															_Utils_Tuple2(
																															'dashed',
																															$elm$json$Json$Encode$bool($.dashed)),
																															_Utils_Tuple2(
																															'double',
																															$elm$json$Json$Encode$bool($._double)),
																															_Utils_Tuple2(
																															'head',
																															$elm$json$Json$Encode$string($.head)),
																															_Utils_Tuple2(
																															'position',
																															$elm$json$Json$Encode$float($.position)),
																															_Utils_Tuple2(
																															'tail',
																															$elm$json$Json$Encode$string($.tail))
																														]));
																											}($.style)),
																											_Utils_Tuple2(
																											'zindex',
																											$elm$json$Json$Encode$int($.zindex))
																										]));
																							}($.label)),
																							_Utils_Tuple2(
																							'to',
																							$elm$json$Json$Encode$int($.to))
																						]));
																			})($.edges)),
																		_Utils_Tuple2(
																		'nodes',
																		$elm$json$Json$Encode$list(
																			function ($) {
																				return $elm$json$Json$Encode$object(
																					_List_fromArray(
																						[
																							_Utils_Tuple2(
																							'id',
																							$elm$json$Json$Encode$int($.id)),
																							_Utils_Tuple2(
																							'label',
																							function ($) {
																								return $elm$json$Json$Encode$object(
																									_List_fromArray(
																										[
																											_Utils_Tuple2(
																											'isMath',
																											$elm$json$Json$Encode$bool($.isMath)),
																											_Utils_Tuple2(
																											'label',
																											$elm$json$Json$Encode$string($.label)),
																											_Utils_Tuple2(
																											'pos',
																											function ($) {
																												var a = $.a;
																												var b = $.b;
																												return A2(
																													$elm$json$Json$Encode$list,
																													$elm$core$Basics$identity,
																													_List_fromArray(
																														[
																															$elm$json$Json$Encode$float(a),
																															$elm$json$Json$Encode$float(b)
																														]));
																											}($.pos)),
																											_Utils_Tuple2(
																											'zindex',
																											$elm$json$Json$Encode$int($.zindex))
																										]));
																							}($.label))
																						]));
																			})($.nodes)),
																		_Utils_Tuple2(
																		'sizeGrid',
																		$elm$json$Json$Encode$int($.sizeGrid)),
																		_Utils_Tuple2(
																		'title',
																		$elm$json$Json$Encode$string($.title))
																	]));
														})($.tabs))
												]));
									}($.graph)),
									_Utils_Tuple2(
									'version',
									$elm$json$Json$Encode$int($.version))
								]));
					}($.info))
				]));
	});
var $author$project$Model$activateFirstTab = function (m) {
	return A2($author$project$Model$activateNthTab, m, 0);
};
var $author$project$Model$removeActiveTabs = function (m) {
	var tabs = A2(
		$elm$core$List$filter,
		A2(
			$elm$core$Basics$composeL,
			$elm$core$Basics$not,
			function ($) {
				return $.active;
			}),
		m.tabs);
	if (!tabs.b) {
		return m;
	} else {
		var m2 = $author$project$Model$pushHistory(m);
		return $author$project$Model$activateFirstTab(
			_Utils_update(
				m2,
				{tabs: tabs}));
	}
};
var $elm_community$list_extra$List$Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			$elm$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var $author$project$Model$updateActiveTab = F2(
	function (m, f) {
		return _Utils_update(
			m,
			{
				tabs: A3(
					$elm_community$list_extra$List$Extra$updateIf,
					function ($) {
						return $.active;
					},
					f,
					m.tabs)
			});
	});
var $author$project$Model$renameActiveTab = F2(
	function (m, s) {
		return A2(
			$author$project$Model$updateActiveTab,
			m,
			function (t) {
				return _Utils_update(
					t,
					{title: s});
			});
	});
var $author$project$Main$saveGraph = _Platform_outgoingPort(
	'saveGraph',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'export',
					function ($) {
						return $elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'coq',
									$elm$json$Json$Encode$string($.coq)),
									_Utils_Tuple2(
									'svg',
									$elm$json$Json$Encode$string($.svg)),
									_Utils_Tuple2(
									'tex',
									$elm$json$Json$Encode$string($.tex))
								]));
					}($._export)),
					_Utils_Tuple2(
					'graph',
					function ($) {
						return $elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'graph',
									function ($) {
										return $elm$json$Json$Encode$object(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'latexPreamble',
													$elm$json$Json$Encode$string($.latexPreamble)),
													_Utils_Tuple2(
													'tabs',
													$elm$json$Json$Encode$list(
														function ($) {
															return $elm$json$Json$Encode$object(
																_List_fromArray(
																	[
																		_Utils_Tuple2(
																		'active',
																		$elm$json$Json$Encode$bool($.active)),
																		_Utils_Tuple2(
																		'edges',
																		$elm$json$Json$Encode$list(
																			function ($) {
																				return $elm$json$Json$Encode$object(
																					_List_fromArray(
																						[
																							_Utils_Tuple2(
																							'from',
																							$elm$json$Json$Encode$int($.from)),
																							_Utils_Tuple2(
																							'id',
																							$elm$json$Json$Encode$int($.id)),
																							_Utils_Tuple2(
																							'label',
																							function ($) {
																								return $elm$json$Json$Encode$object(
																									_List_fromArray(
																										[
																											_Utils_Tuple2(
																											'isPullshout',
																											$elm$json$Json$Encode$bool($.isPullshout)),
																											_Utils_Tuple2(
																											'label',
																											$elm$json$Json$Encode$string($.label)),
																											_Utils_Tuple2(
																											'style',
																											function ($) {
																												return $elm$json$Json$Encode$object(
																													_List_fromArray(
																														[
																															_Utils_Tuple2(
																															'alignment',
																															$elm$json$Json$Encode$string($.alignment)),
																															_Utils_Tuple2(
																															'bend',
																															$elm$json$Json$Encode$float($.bend)),
																															_Utils_Tuple2(
																															'color',
																															$elm$json$Json$Encode$string($.color)),
																															_Utils_Tuple2(
																															'dashed',
																															$elm$json$Json$Encode$bool($.dashed)),
																															_Utils_Tuple2(
																															'double',
																															$elm$json$Json$Encode$bool($._double)),
																															_Utils_Tuple2(
																															'head',
																															$elm$json$Json$Encode$string($.head)),
																															_Utils_Tuple2(
																															'position',
																															$elm$json$Json$Encode$float($.position)),
																															_Utils_Tuple2(
																															'tail',
																															$elm$json$Json$Encode$string($.tail))
																														]));
																											}($.style)),
																											_Utils_Tuple2(
																											'zindex',
																											$elm$json$Json$Encode$int($.zindex))
																										]));
																							}($.label)),
																							_Utils_Tuple2(
																							'to',
																							$elm$json$Json$Encode$int($.to))
																						]));
																			})($.edges)),
																		_Utils_Tuple2(
																		'nodes',
																		$elm$json$Json$Encode$list(
																			function ($) {
																				return $elm$json$Json$Encode$object(
																					_List_fromArray(
																						[
																							_Utils_Tuple2(
																							'id',
																							$elm$json$Json$Encode$int($.id)),
																							_Utils_Tuple2(
																							'label',
																							function ($) {
																								return $elm$json$Json$Encode$object(
																									_List_fromArray(
																										[
																											_Utils_Tuple2(
																											'isMath',
																											$elm$json$Json$Encode$bool($.isMath)),
																											_Utils_Tuple2(
																											'label',
																											$elm$json$Json$Encode$string($.label)),
																											_Utils_Tuple2(
																											'pos',
																											function ($) {
																												var a = $.a;
																												var b = $.b;
																												return A2(
																													$elm$json$Json$Encode$list,
																													$elm$core$Basics$identity,
																													_List_fromArray(
																														[
																															$elm$json$Json$Encode$float(a),
																															$elm$json$Json$Encode$float(b)
																														]));
																											}($.pos)),
																											_Utils_Tuple2(
																											'zindex',
																											$elm$json$Json$Encode$int($.zindex))
																										]));
																							}($.label))
																						]));
																			})($.nodes)),
																		_Utils_Tuple2(
																		'sizeGrid',
																		$elm$json$Json$Encode$int($.sizeGrid)),
																		_Utils_Tuple2(
																		'title',
																		$elm$json$Json$Encode$string($.title))
																	]));
														})($.tabs))
												]));
									}($.graph)),
									_Utils_Tuple2(
									'version',
									$elm$json$Json$Encode$int($.version))
								]));
					}($.graph))
				]));
	});
var $author$project$Main$saveGridSize = _Platform_outgoingPort('saveGridSize', $elm$json$Json$Encode$int);
var $author$project$Polygraph$rawFilter = F2(
	function (fn, fe) {
		return A2(
			$author$project$Polygraph$rawFilterIds,
			fn,
			F2(
				function (_v0, _v1) {
					return fe;
				}));
	});
var $author$project$Polygraph$keepBelow = F3(
	function (fn, fe, _v0) {
		var g = _v0.a;
		var g2 = A3($author$project$Polygraph$rawFilter, fn, fe, g);
		var dict = A6(
			$author$project$Polygraph$mapRec,
			$elm$core$Basics$always(_Utils_Tuple0),
			$elm$core$Basics$always(_Utils_Tuple0),
			function (_v1) {
				return $elm$core$Basics$identity;
			},
			F3(
				function (_v2, _v3, _v4) {
					return $elm$core$Basics$identity;
				}),
			$elm_community$intdict$IntDict$keys(g2),
			$author$project$Polygraph$Graph(g));
		return dict;
	});
var $author$project$GraphDefs$selectedGraph = function (g) {
	var f = $author$project$GraphDefs$fieldSelect(g);
	return A3($author$project$Polygraph$keepBelow, f, f, g);
};
var $author$project$Model$setActiveSizeGrid = F2(
	function (m, s) {
		return A2(
			$author$project$Model$updateActiveTab,
			m,
			function (t) {
				return _Utils_update(
					t,
					{sizeGrid: s});
			});
	});
var $author$project$QuickInput$handSideFromShort = function (_v0) {
	var start = _v0.start;
	var edges = _v0.edges;
	if (!edges.b) {
		return _List_Nil;
	} else {
		var t = edges.a;
		var q = edges.b;
		return A2(
			$elm$core$List$cons,
			{edge: t.edge, from: start, to: t.to},
			$author$project$QuickInput$handSideFromShort(
				{edges: q, start: t.to}));
	}
};
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
var $author$project$QuickInput$ShortHandSide = F2(
	function (start, edges) {
		return {edges: edges, start: start};
	});
var $author$project$QuickInput$ShortEdge = F2(
	function (edge, to) {
		return {edge: edge, to: to};
	});
var $author$project$QuickInput$endSymbol = '->';
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$parser$Parser$Advanced$spaces = $elm$parser$Parser$Advanced$chompWhile(
	function (c) {
		return _Utils_eq(
			c,
			_Utils_chr(' ')) || (_Utils_eq(
			c,
			_Utils_chr('\n')) || _Utils_eq(
			c,
			_Utils_chr('\r')));
	});
var $elm$parser$Parser$spaces = $elm$parser$Parser$Advanced$spaces;
var $author$project$QuickInput$startSymbol = '--';
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
var $elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $elm$parser$Parser$symbol = function (str) {
	return $elm$parser$Parser$Advanced$symbol(
		A2(
			$elm$parser$Parser$Advanced$Token,
			str,
			$elm$parser$Parser$ExpectingSymbol(str)));
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $author$project$QuickInput$correctLabelChar = F2(
	function (fb, c) {
		return !A2($elm$core$List$member, c, fb);
	});
var $elm$parser$Parser$ExpectingVariable = {$: 'ExpectingVariable'};
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {col: col, context: context, indent: indent, offset: offset, row: row, src: src};
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$variable = function (i) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);
			if (_Utils_eq(firstOffset, -1)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting));
			} else {
				var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7($elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
				var name = A3($elm$core$String$slice, s.offset, s1.offset, s.src);
				return A2($elm$core$Set$member, name, i.reserved) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
			}
		});
};
var $elm$parser$Parser$variable = function (i) {
	return $elm$parser$Parser$Advanced$variable(
		{expecting: $elm$parser$Parser$ExpectingVariable, inner: i.inner, reserved: i.reserved, start: i.start});
};
var $author$project$QuickInput$labelParser = function (fb) {
	return A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$String$trim),
		$elm$parser$Parser$variable(
			{
				inner: $author$project$QuickInput$correctLabelChar(fb),
				reserved: $elm$core$Set$empty,
				start: $author$project$QuickInput$correctLabelChar(fb)
			}));
};
var $author$project$QuickInput$vertexParser = $author$project$QuickInput$labelParser(
	_List_fromArray(
		[
			_Utils_chr('-'),
			_Utils_chr('=')
		]));
var $author$project$QuickInput$edgeParser = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					A2(
						$elm$parser$Parser$ignorer,
						$elm$parser$Parser$succeed($author$project$QuickInput$ShortEdge),
						$elm$parser$Parser$symbol($author$project$QuickInput$startSymbol)),
					$elm$parser$Parser$spaces),
				A2(
					$elm$parser$Parser$ignorer,
					A2($elm$parser$Parser$ignorer, $author$project$QuickInput$vertexParser, $elm$parser$Parser$spaces),
					$elm$parser$Parser$symbol($author$project$QuickInput$endSymbol))),
			$author$project$QuickInput$vertexParser)
		]));
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = thunk(_Utils_Tuple0);
			var parse = _v0.a;
			return parse(s);
		});
};
var $elm$parser$Parser$lazy = $elm$parser$Parser$Advanced$lazy;
var $author$project$ParserExtra$repeat = function (p) {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$keeper,
					$elm$parser$Parser$succeed($elm$core$List$cons),
					p),
				$elm$parser$Parser$lazy(
					function (_v0) {
						return $author$project$ParserExtra$repeat(p);
					})),
				$elm$parser$Parser$succeed(_List_Nil)
			]));
};
var $author$project$QuickInput$shortHandSideParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($author$project$QuickInput$ShortHandSide),
		$author$project$QuickInput$vertexParser),
	$author$project$ParserExtra$repeat($author$project$QuickInput$edgeParser));
var $author$project$QuickInput$handSideParser = A2(
	$elm$parser$Parser$keeper,
	$elm$parser$Parser$succeed($author$project$QuickInput$handSideFromShort),
	$author$project$QuickInput$shortHandSideParser);
var $author$project$QuickInput$equalityParser = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($elm$core$Tuple$pair),
			$elm$parser$Parser$spaces),
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2($elm$parser$Parser$ignorer, $author$project$QuickInput$handSideParser, $elm$parser$Parser$spaces),
				$elm$parser$Parser$symbol('=')),
			$elm$parser$Parser$spaces)),
	$author$project$QuickInput$handSideParser);
var $elm_community$intdict$IntDict$findMax = function (dict) {
	findMax:
	while (true) {
		switch (dict.$) {
			case 'Empty':
				return $elm$core$Maybe$Nothing;
			case 'Leaf':
				var l = dict.a;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(l.key, l.value));
			default:
				var i = dict.a;
				var $temp$dict = i.right;
				dict = $temp$dict;
				continue findMax;
		}
	}
};
var $author$project$Polygraph$supId = function (g) {
	var _v0 = $elm_community$intdict$IntDict$findMax(g);
	if (_v0.$ === 'Just') {
		var _v1 = _v0.a;
		var id = _v1.a;
		return id + 1;
	} else {
		return 0;
	}
};
var $author$project$Polygraph$nextId = function (_v0) {
	var g = _v0.a;
	return $author$project$Polygraph$supId(g);
};
var $author$project$Polygraph$newObject = F2(
	function (g, o) {
		var id = $author$project$Polygraph$nextId(g);
		return _Utils_Tuple2(
			A2(
				$author$project$Polygraph$mapRep,
				A2($elm_community$intdict$IntDict$insert, id, o),
				g),
			id);
	});
var $author$project$Polygraph$newNode = F2(
	function (g, n) {
		return A2(
			$author$project$Polygraph$newObject,
			g,
			$author$project$Polygraph$NodeObj(n));
	});
var $author$project$GraphDefs$newNodeLabel = F4(
	function (p, s, isMath, zindex) {
		return {dims: $elm$core$Maybe$Nothing, isCoqValidated: false, isMath: isMath, label: s, pos: p, selected: false, weaklySelected: false, zindex: zindex};
	});
var $author$project$GraphDefs$createNodeLabel = F3(
	function (g, s, p) {
		var label = A4($author$project$GraphDefs$newNodeLabel, p, s, true, $author$project$Zindex$defaultZ);
		var _v0 = A2($author$project$Polygraph$newNode, g, label);
		var g2 = _v0.a;
		var id = _v0.b;
		return _Utils_Tuple3(g2, id, p);
	});
var $author$project$ArrowStyle$empty = {bend: 0, color: $author$project$Drawing$Color$black, dashed: false, _double: false, head: $author$project$ArrowStyle$DefaultHead, labelAlignment: $author$project$Geometry$Left, labelPosition: 0.5, tail: $author$project$ArrowStyle$DefaultTail};
var $author$project$Polygraph$newEdge = F4(
	function (g, i1, i2, e) {
		return A2(
			$author$project$Polygraph$newObject,
			g,
			A3($author$project$Polygraph$EdgeObj, i1, i2, e));
	});
var $author$project$GraphDefs$newGenericLabel = function (d) {
	return {details: d, selected: false, weaklySelected: false, zindex: $author$project$Zindex$defaultZ};
};
var $author$project$GraphDefs$newEdgeLabel = F2(
	function (s, style) {
		return $author$project$GraphDefs$newGenericLabel(
			$author$project$GraphDefs$NormalEdge(
				{dims: $elm$core$Maybe$Nothing, label: s, style: style}));
	});
var $author$project$QuickInput$buildGraphEdges = F7(
	function (g, offset, alignment, pos, from, to, ch) {
		buildGraphEdges:
		while (true) {
			var style = function () {
				var st = $author$project$ArrowStyle$empty;
				return _Utils_update(
					st,
					{labelAlignment: alignment});
			}();
			if (!ch.b) {
				return g;
			} else {
				if (!ch.b.b) {
					var e = ch.a;
					return A4(
						$author$project$Polygraph$newEdge,
						g,
						from,
						to,
						A2($author$project$GraphDefs$newEdgeLabel, e.edge, style)).a;
				} else {
					var e = ch.a;
					var tail = ch.b;
					var posf = A2($author$project$Geometry$Point$add, offset, pos);
					var _v1 = A3($author$project$GraphDefs$createNodeLabel, g, e.to, posf);
					var g2 = _v1.a;
					var idto = _v1.b;
					var _v2 = A4(
						$author$project$Polygraph$newEdge,
						g2,
						from,
						idto,
						A2($author$project$GraphDefs$newEdgeLabel, e.edge, style));
					var g3 = _v2.a;
					var $temp$g = g3,
						$temp$offset = offset,
						$temp$alignment = alignment,
						$temp$pos = posf,
						$temp$from = idto,
						$temp$to = to,
						$temp$ch = tail;
					g = $temp$g;
					offset = $temp$offset;
					alignment = $temp$alignment;
					pos = $temp$pos;
					from = $temp$from;
					to = $temp$to;
					ch = $temp$ch;
					continue buildGraphEdges;
				}
			}
		}
	});
var $author$project$QuickInput$buildGraphSegment = F2(
	function (s, g) {
		var offset = A2(
			$author$project$Geometry$Point$resize,
			1 / $elm$core$List$length(s.edges),
			A2($author$project$Geometry$Point$subtract, s.to, s.from));
		return A7(
			$author$project$QuickInput$buildGraphEdges,
			g,
			offset,
			s.alignLeft ? $author$project$Geometry$Left : $author$project$Geometry$Right,
			s.from,
			s.fromId,
			s.toId,
			s.edges);
	});
var $elm_community$list_extra$List$Extra$splitAt = F2(
	function (n, xs) {
		return _Utils_Tuple2(
			A2($elm$core$List$take, n, xs),
			A2($elm$core$List$drop, n, xs));
	});
var $author$project$QuickInput$orientEquation = F4(
	function (iniP, _v0, offset, g) {
		var source = _v0.a;
		var but = _v0.b;
		var nsource = $elm$core$List$length(source);
		var nbut = $elm$core$List$length(but);
		var ni1 = ((nsource + 1) / 2) | 0;
		var nf1 = ((nbut + 1) / 2) | 0;
		var _v1 = A2($elm_community$list_extra$List$Extra$splitAt, ni1, source);
		var source1 = _v1.a;
		var source2 = _v1.b;
		var _v2 = A2($elm_community$list_extra$List$Extra$splitAt, nf1, but);
		var but1 = _v2.a;
		var but2 = _v2.b;
		var ni2 = nsource - ni1;
		var nf2 = nbut - nf1;
		var maxud = A2($elm$core$Basics$max, ni1, nf2);
		var maxlr = A2($elm$core$Basics$max, ni2, nf1);
		var _v3 = iniP;
		var leftX = _v3.a;
		var topY = _v3.b;
		var rightX = leftX + (maxud * offset);
		var bottomY = topY + (maxlr * offset);
		var topRightPos = _Utils_Tuple2(rightX, topY);
		var topLeftPos = _Utils_Tuple2(leftX, topY);
		var bottomRightPos = _Utils_Tuple2(rightX, bottomY);
		var bottomLeftPos = _Utils_Tuple2(leftX, bottomY);
		var startLabel = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.from;
				},
				$elm$core$List$head(source)));
		var lastLabel = A2(
			$elm$core$Basics$composeR,
			$elm_community$list_extra$List$Extra$last,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Maybe$map(
					function ($) {
						return $.to;
					}),
				$elm$core$Maybe$withDefault('')));
		var topRightLabel = lastLabel(source1);
		var endLabel = lastLabel(source);
		var bottomLeftLabel = lastLabel(but1);
		var _v4 = A3($author$project$GraphDefs$createNodeLabel, g, startLabel, topLeftPos);
		var g2 = _v4.a;
		var topLeftId = _v4.b;
		var _v5 = A3($author$project$GraphDefs$createNodeLabel, g2, endLabel, bottomRightPos);
		var g3 = _v5.a;
		var bottomRightId = _v5.b;
		var _v6 = _Utils_eq(source2, _List_Nil) ? _Utils_Tuple3(g3, bottomRightId, iniP) : A3($author$project$GraphDefs$createNodeLabel, g3, topRightLabel, topRightPos);
		var g4 = _v6.a;
		var topRightId = _v6.b;
		var _v7 = _Utils_eq(but2, _List_Nil) ? _Utils_Tuple3(g4, bottomRightId, iniP) : A3($author$project$GraphDefs$createNodeLabel, g4, bottomLeftLabel, bottomLeftPos);
		var g5 = _v7.a;
		var bottomLeftId = _v7.b;
		return _Utils_Tuple2(
			g5,
			_List_fromArray(
				[
					{alignLeft: true, edges: source1, from: topLeftPos, fromId: topLeftId, to: topRightPos, toId: topRightId},
					{alignLeft: false, edges: but1, from: topLeftPos, fromId: topLeftId, to: bottomLeftPos, toId: bottomLeftId},
					{alignLeft: true, edges: source2, from: topRightPos, fromId: topRightId, to: bottomRightPos, toId: bottomRightId},
					{alignLeft: false, edges: but2, from: bottomLeftPos, fromId: bottomLeftId, to: bottomRightPos, toId: bottomRightId}
				]));
	});
var $author$project$QuickInput$graphEquation = F4(
	function (pos, offset, eq, gi) {
		var _v0 = A4($author$project$QuickInput$orientEquation, pos, eq, offset, gi);
		var gf = _v0.a;
		var l = _v0.b;
		return A3($elm$core$List$foldl, $author$project$QuickInput$buildGraphSegment, gf, l);
	});
var $author$project$Main$graphDrawingChain = F3(
	function (offset, g, eq) {
		var mid = offset / 2;
		var iniP = _Utils_Tuple2(mid, mid);
		return A4($author$project$QuickInput$graphEquation, iniP, offset, eq, g);
	});
var $elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var $elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3($elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $elm$parser$Parser$run = F2(
	function (parser, source) {
		var _v0 = A2($elm$parser$Parser$Advanced$run, parser, source);
		if (_v0.$ === 'Ok') {
			var a = _v0.a;
			return $elm$core$Result$Ok(a);
		} else {
			var problems = _v0.a;
			return $elm$core$Result$Err(
				A2($elm$core$List$map, $elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var $author$project$Model$updateFirstTab = F2(
	function (m, f) {
		var _v0 = m.tabs;
		if (!_v0.b) {
			return m;
		} else {
			var t = _v0.a;
			var q = _v0.b;
			return _Utils_update(
				m,
				{
					tabs: A2(
						$elm$core$List$cons,
						f(t),
						q)
				});
		}
	});
var $author$project$Main$setFirstTabEquationPerform = F2(
	function (m, s) {
		var _v0 = A2($elm$parser$Parser$run, $author$project$QuickInput$equalityParser, s);
		if (_v0.$ === 'Err') {
			return $author$project$Model$noCmd(m);
		} else {
			var chain = _v0.a;
			var mUpdated = A2(
				$author$project$Model$updateFirstTab,
				m,
				function (t) {
					return _Utils_update(
						t,
						{
							graph: A3($author$project$Main$graphDrawingChain, t.sizeGrid, $author$project$Polygraph$empty, chain)
						});
				});
			return _Utils_Tuple2(
				_Utils_update(
					mUpdated,
					{mode: $author$project$Modes$DefaultMode}),
				$author$project$HtmlDefs$computeLayout(_Utils_Tuple0));
		}
	});
var $author$project$Model$updateActiveGraph = F2(
	function (m, f) {
		return A2(
			$author$project$Model$updateActiveTab,
			m,
			function (t) {
				return _Utils_update(
					t,
					{
						graph: f(t.graph)
					});
			});
	});
var $author$project$Model$setActiveGraph = F2(
	function (m, g) {
		return A2(
			$author$project$Model$updateActiveGraph,
			m,
			$elm$core$Basics$always(g));
	});
var $author$project$Model$setSaveGraph = F2(
	function (m, g) {
		var m2 = $author$project$Model$pushHistory(m);
		return A2($author$project$Model$setActiveGraph, m2, g);
	});
var $author$project$ArrowStyle$alignmentToString = function (tail) {
	switch (tail.$) {
		case 'Centre':
			return 'centre';
		case 'Over':
			return 'over';
		case 'Left':
			return 'left';
		default:
			return 'right';
	}
};
var $author$project$ArrowStyle$headToString = function (head) {
	switch (head.$) {
		case 'DefaultHead':
			return 'default';
		case 'TwoHeads':
			return 'twoheads';
		default:
			return 'none';
	}
};
var $author$project$Format$Version11$Edge = F4(
	function (label, style, isPullshout, zindex) {
		return {isPullshout: isPullshout, label: label, style: style, zindex: zindex};
	});
var $author$project$Format$Version11$ArrowStyle = F8(
	function (tail, head, _double, dashed, bend, alignment, position, color) {
		return {alignment: alignment, bend: bend, color: color, dashed: dashed, _double: _double, head: head, position: position, tail: tail};
	});
var $author$project$Format$Version11$emptyArrowStyle = A8($author$project$Format$Version11$ArrowStyle, '', '', false, false, 0, '', 0, 'black');
var $author$project$Format$Version11$pullshoutEdge = function (z) {
	return A4($author$project$Format$Version11$Edge, '', $author$project$Format$Version11$emptyArrowStyle, true, z);
};
var $author$project$ArrowStyle$tailToString = function (tail) {
	switch (tail.$) {
		case 'DefaultTail':
			return 'none';
		case 'Hook':
			return 'hook';
		case 'HookAlt':
			return 'hookalt';
		default:
			return 'mapsto';
	}
};
var $author$project$Format$Version11$fromEdgeLabel = function (e) {
	var _v0 = e.details;
	if (_v0.$ === 'PullshoutEdge') {
		return $author$project$Format$Version11$pullshoutEdge(e.zindex);
	} else {
		var label = _v0.a.label;
		var style = _v0.a.style;
		return {
			isPullshout: false,
			label: label,
			style: {
				alignment: $author$project$ArrowStyle$alignmentToString(style.labelAlignment),
				bend: style.bend,
				color: $author$project$Drawing$Color$toString(style.color),
				dashed: style.dashed,
				_double: style._double,
				head: $author$project$ArrowStyle$headToString(style.head),
				position: style.labelPosition,
				tail: $author$project$ArrowStyle$tailToString(style.tail)
			},
			zindex: e.zindex
		};
	}
};
var $author$project$Format$Version11$fromNodeLabel = function (_v0) {
	var pos = _v0.pos;
	var label = _v0.label;
	var isMath = _v0.isMath;
	var zindex = _v0.zindex;
	return {isMath: isMath, label: label, pos: pos, zindex: zindex};
};
var $author$project$Format$Version11$toJSTab = function (tab) {
	var g = tab.graph;
	var gjs = $author$project$Polygraph$normalise(
		A3(
			$author$project$Polygraph$map,
			function (_v0) {
				return $author$project$Format$Version11$fromNodeLabel;
			},
			function (_v1) {
				return $author$project$Format$Version11$fromEdgeLabel;
			},
			g));
	var nodes = $author$project$Polygraph$nodes(gjs);
	var edges = $author$project$Polygraph$edges(gjs);
	return {active: tab.active, edges: edges, nodes: nodes, sizeGrid: tab.sizeGrid, title: tab.title};
};
var $author$project$Format$Version11$toJSGraph = function (m) {
	return {
		latexPreamble: m.latexPreamble,
		tabs: A2($elm$core$List$map, $author$project$Format$Version11$toJSTab, m.tabs)
	};
};
var $author$project$Format$LastVersion$toJSGraph = $author$project$Format$Version11$toJSGraph;
var $author$project$Format$Version11$version = 11;
var $author$project$Format$LastVersion$version = $author$project$Format$Version11$version;
var $author$project$Main$toJsGraphInfo = function (model) {
	return {
		graph: $author$project$Format$LastVersion$toJSGraph(
			$author$project$Model$toGraphInfo(model)),
		version: $author$project$Format$LastVersion$version
	};
};
var $author$project$Modes$CutHead = function (a) {
	return {$: 'CutHead', a: a};
};
var $author$project$Modes$Free = {$: 'Free'};
var $author$project$InputPosition$InputPosMouse = {$: 'InputPosMouse'};
var $author$project$GraphDefs$edgeToNodeLabel = F2(
	function (pos, l) {
		var nodeLabel = {dims: $elm$core$Maybe$Nothing, isCoqValidated: false, isMath: true, label: '', pos: pos, selected: l.selected, weaklySelected: l.weaklySelected, zindex: l.zindex};
		var _v0 = l.details;
		if (_v0.$ === 'PullshoutEdge') {
			return nodeLabel;
		} else {
			var label = _v0.a.label;
			var dims = _v0.a.dims;
			return _Utils_update(
				nodeLabel,
				{dims: dims, label: label});
		}
	});
var $author$project$Polygraph$get = F4(
	function (id, fn, fe, _v0) {
		var g = _v0.a;
		var _v1 = A2($elm_community$intdict$IntDict$get, id, g);
		if (_v1.$ === 'Just') {
			if (_v1.a.$ === 'NodeObj') {
				var n = _v1.a.a;
				return $elm$core$Maybe$Just(
					fn(n));
			} else {
				var _v2 = _v1.a;
				var i1 = _v2.a;
				var i2 = _v2.b;
				var e = _v2.c;
				return $elm$core$Maybe$Just(
					fe(e));
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Polygraph$addId = F2(
	function (n, g) {
		return $elm_community$intdict$IntDict$fromList(
			A2(
				$elm$core$List$map,
				function (_v0) {
					var id = _v0.a;
					var o = _v0.b;
					return _Utils_Tuple2(
						id + n,
						function () {
							if (o.$ === 'NodeObj') {
								return o;
							} else {
								var i1 = o.a;
								var i2 = o.b;
								var e = o.c;
								return A3($author$project$Polygraph$EdgeObj, i1 + n, i2 + n, e);
							}
						}());
				},
				$elm_community$intdict$IntDict$toList(g)));
	});
var $author$project$Polygraph$makeDisjoint = F2(
	function (_v0, _v1) {
		var base = _v0.a;
		var ext = _v1.a;
		var baseId = $author$project$Polygraph$supId(base);
		var extUp = A2($author$project$Polygraph$addId, baseId, ext);
		return $author$project$Polygraph$Graph(extUp);
	});
var $author$project$Polygraph$union = F2(
	function (_v0, _v1) {
		var base = _v0.a;
		var ext = _v1.a;
		return $author$project$Polygraph$Graph(
			A2($elm_community$intdict$IntDict$union, base, ext));
	});
var $author$project$Polygraph$disjointUnion = F2(
	function (base, ext) {
		var subGraph = A2($author$project$Polygraph$makeDisjoint, base, ext);
		return {
			extendedGraph: A2($author$project$Polygraph$union, base, subGraph),
			subGraph: subGraph
		};
	});
var $author$project$Polygraph$newEdges = F3(
	function (g, idPairs, labelEdge) {
		var _v0 = A3(
			$elm$core$List$foldl,
			F2(
				function (_v1, _v2) {
					var id1 = _v1.a;
					var id2 = _v1.b;
					var graph = _v2.a;
					var l = _v2.b;
					var _v3 = A4($author$project$Polygraph$newEdge, graph, id1, id2, labelEdge);
					var newGraph = _v3.a;
					var idEdge = _v3.b;
					return _Utils_Tuple2(
						newGraph,
						A2($elm$core$List$cons, idEdge, l));
				}),
			_Utils_Tuple2(g, _List_Nil),
			idPairs);
		var extendedGraph = _v0.a;
		var idEdges = _v0.b;
		return _Utils_Tuple2(extendedGraph, idEdges);
	});
var $author$project$Polygraph$nodeIds = function (g) {
	return A2(
		$elm$core$List$map,
		function ($) {
			return $.id;
		},
		$author$project$Polygraph$nodes(g));
};
var $author$project$Polygraph$makeCone = F5(
	function (g, ids, labelNode, labelEdge, inverted) {
		var extGraph = A2(
			$author$project$Polygraph$disjointUnion,
			g,
			A2($author$project$Polygraph$newNode, $author$project$Polygraph$empty, labelNode).a);
		var newId = A2(
			$elm$core$Maybe$withDefault,
			0,
			$elm$core$List$head(
				$author$project$Polygraph$nodeIds(extGraph.subGraph)));
		var idPairs = A2(
			$elm$core$List$map,
			function (id) {
				return inverted ? _Utils_Tuple2(newId, id) : _Utils_Tuple2(id, newId);
			},
			ids);
		var _v0 = A3($author$project$Polygraph$newEdges, extGraph.extendedGraph, idPairs, labelEdge);
		var extendedGraph2 = _v0.a;
		var idEdges = _v0.b;
		return {edgeIds: idEdges, extendedGraph: extendedGraph2, newSubGraph: extGraph.subGraph};
	});
var $author$project$Polygraph$rawMerge = F3(
	function (i1, i2, _v0) {
		var g = _v0.a;
		var repl = function (k) {
			return _Utils_eq(k, i2) ? i1 : k;
		};
		return $author$project$Polygraph$Graph(
			A2(
				$elm_community$intdict$IntDict$remove,
				i2,
				A2(
					$elm_community$intdict$IntDict$map,
					F2(
						function (_v1, o) {
							if (o.$ === 'EdgeObj') {
								var j1 = o.a;
								var j2 = o.b;
								var e = o.c;
								return A3(
									$author$project$Polygraph$EdgeObj,
									repl(j1),
									repl(j2),
									e);
							} else {
								return o;
							}
						}),
					g)));
	});
var $author$project$Polygraph$merge = F3(
	function (i1, i2, g) {
		return _Utils_eq(i1, i2) ? g : $author$project$Polygraph$sanitise(
			A3($author$project$Polygraph$rawMerge, i1, i2, g));
	});
var $author$project$Geometry$centerRect = function (_v0) {
	var bottomRight = _v0.bottomRight;
	var topLeft = _v0.topLeft;
	return A2($author$project$Geometry$Point$middle, bottomRight, topLeft);
};
var $author$project$GraphDefs$centerOfNodes = function (nodes) {
	return $author$project$Geometry$centerRect(
		$author$project$Geometry$rectEnveloppe(
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeL,
					function ($) {
						return $.pos;
					},
					function ($) {
						return $.label;
					}),
				nodes)));
};
var $author$project$Geometry$distanceToRect = F2(
	function (_v0, r) {
		var px = _v0.a;
		var py = _v0.b;
		var _v1 = r.topLeft;
		var minx = _v1.a;
		var miny = _v1.b;
		var _v2 = r.bottomRight;
		var maxx = _v2.a;
		var maxy = _v2.b;
		var dy = A2(
			$elm$core$Basics$max,
			miny - py,
			A2($elm$core$Basics$max, 0, py - maxy));
		var dx = A2(
			$elm$core$Basics$max,
			minx - px,
			A2($elm$core$Basics$max, 0, px - maxx));
		return $elm$core$Basics$sqrt((dx * dx) + (dy * dy));
	});
var $author$project$GraphDefs$distanceToNode = F2(
	function (p, n) {
		var posDims = {
			dims: $author$project$GraphDefs$getNodeDims(n),
			pos: n.pos
		};
		var rect = $author$project$Geometry$rectFromPosDims(posDims);
		return A2($author$project$Geometry$distanceToRect, p, rect);
	});
var $author$project$Polygraph$filterNodes = F2(
	function (g, f) {
		return A2(
			$elm$core$List$filter,
			A2(
				$elm$core$Basics$composeL,
				f,
				function ($) {
					return $.label;
				}),
			$author$project$Polygraph$nodes(g));
	});
var $author$project$Geometry$isInRect = F2(
	function (_v0, _v1) {
		var topLeft = _v0.topLeft;
		var bottomRight = _v0.bottomRight;
		var x = _v1.a;
		var y = _v1.b;
		var _v2 = bottomRight;
		var x2 = _v2.a;
		var y2 = _v2.b;
		var _v3 = topLeft;
		var x1 = _v3.a;
		var y1 = _v3.b;
		return (_Utils_cmp(x1, x) < 0) && ((_Utils_cmp(x, x2) < 0) && ((_Utils_cmp(y1, y) < 0) && (_Utils_cmp(y, y2) < 0)));
	});
var $author$project$Geometry$isInPosDims = F2(
	function (dims, p) {
		return A2(
			$author$project$Geometry$isInRect,
			$author$project$Geometry$rectFromPosDims(dims),
			p);
	});
var $author$project$GraphDefs$getNodesAt = F2(
	function (g, p) {
		return A2(
			$elm$core$List$map,
			function ($) {
				return $.id;
			},
			A2(
				$author$project$Polygraph$filterNodes,
				g,
				function (n) {
					return A2(
						$author$project$Geometry$isInPosDims,
						{
							dims: $author$project$GraphDefs$getNodeDims(n),
							pos: $author$project$GraphDefs$getNodePos(n)
						},
						p);
				}));
	});
var $elm_community$list_extra$List$Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _v1) {
				var y = _v1.a;
				var fy = _v1.b;
				var fx = f(x);
				return (_Utils_cmp(fx, fy) < 0) ? _Utils_Tuple2(x, fx) : _Utils_Tuple2(y, fy);
			});
		if (ls.b) {
			if (!ls.b.b) {
				var l_ = ls.a;
				return $elm$core$Maybe$Just(l_);
			} else {
				var l_ = ls.a;
				var ls_ = ls.b;
				return $elm$core$Maybe$Just(
					A3(
						$elm$core$List$foldl,
						minBy,
						_Utils_Tuple2(
							l_,
							f(l_)),
						ls_).a);
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$GraphDefs$closest = F2(
	function (pos, ug) {
		var _v0 = A2($author$project$GraphDefs$getNodesAt, ug, pos);
		if (_v0.b) {
			var t = _v0.a;
			return t;
		} else {
			var edgeDistance = function (e) {
				return A2($author$project$Geometry$Point$distance, pos, e.pos);
			};
			var ug2 = A3(
				$author$project$Polygraph$map,
				$elm$core$Basics$always(
					$author$project$GraphDefs$distanceToNode(pos)),
				$elm$core$Basics$always(edgeDistance),
				$author$project$GraphDefs$posGraph(ug));
			var unnamedNodes = $author$project$Polygraph$nodes(ug2);
			var unnamedEdges = A2(
				$elm$core$List$map,
				function (_v1) {
					var id = _v1.id;
					var label = _v1.label;
					return {id: id, label: label};
				},
				$author$project$Polygraph$edges(ug2));
			var unnamedAll = A2(
				$elm$core$Maybe$withDefault,
				0,
				A2(
					$elm$core$Maybe$map,
					function ($) {
						return $.id;
					},
					A2(
						$elm_community$list_extra$List$Extra$minimumBy,
						function ($) {
							return $.label;
						},
						_Utils_ap(unnamedEdges, unnamedNodes))));
			return unnamedAll;
		}
	});
var $author$project$Polygraph$drop = F2(
	function (fn, fe) {
		return A2(
			$author$project$Polygraph$filterMap,
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Maybe$Just,
				$elm_community$maybe_extra$Maybe$Extra$filter(
					A2($elm$core$Basics$composeL, $elm$core$Basics$not, fn))),
			A2(
				$elm$core$Basics$composeR,
				$elm$core$Maybe$Just,
				$elm_community$maybe_extra$Maybe$Extra$filter(
					A2($elm$core$Basics$composeL, $elm$core$Basics$not, fe))));
	});
var $author$project$Polygraph$update = F3(
	function (i, fn, fe) {
		return $author$project$Polygraph$mapRep(
			A2(
				$elm_community$intdict$IntDict$update,
				i,
				$elm$core$Maybe$map(
					A2($author$project$Polygraph$mapObj, fn, fe))));
	});
var $author$project$Polygraph$updateList = F4(
	function (l, fn, fe, g) {
		return A3(
			$elm$core$List$foldl,
			function (i) {
				return A3($author$project$Polygraph$update, i, fn, fe);
			},
			g,
			l);
	});
var $author$project$Polygraph$complement = F2(
	function (graph, subGraph) {
		var markedGraph = A3(
			$author$project$Polygraph$map,
			F2(
				function (_v2, n) {
					return _Utils_Tuple2(false, n);
				}),
			F2(
				function (_v3, n) {
					return _Utils_Tuple2(false, n);
				}),
			graph);
		var ids = $author$project$Polygraph$nodeIds(subGraph);
		return A3(
			$author$project$Polygraph$map,
			$elm$core$Basics$always($elm$core$Tuple$second),
			$elm$core$Basics$always($elm$core$Tuple$second),
			A3(
				$author$project$Polygraph$drop,
				$elm$core$Tuple$first,
				$elm$core$Tuple$first,
				A4(
					$author$project$Polygraph$updateList,
					ids,
					function (_v0) {
						var n = _v0.b;
						return _Utils_Tuple2(true, n);
					},
					function (_v1) {
						var n = _v1.b;
						return _Utils_Tuple2(true, n);
					},
					markedGraph)));
	});
var $author$project$InputPosition$deltaKeyboardPos = F2(
	function (offsetKeyboardPos, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(x * offsetKeyboardPos, y * offsetKeyboardPos);
	});
var $author$project$Polygraph$recursiveMerge = F3(
	function (i1, i2, g) {
		return _Utils_eq(i1, i2) ? g : $author$project$Polygraph$removeLoops(
			$author$project$Polygraph$sanitise(
				A3($author$project$Polygraph$recursiveMergeAux, i1, i2, g)));
	});
var $author$project$Polygraph$recursiveMergeAux = F3(
	function (i1, i2, _v0) {
		var g = _v0.a;
		var _v1 = _Utils_Tuple2(
			A2($elm_community$intdict$IntDict$get, i1, g),
			A2($elm_community$intdict$IntDict$get, i2, g));
		_v1$2:
		while (true) {
			if (_v1.a.$ === 'Just') {
				if (_v1.a.a.$ === 'EdgeObj') {
					if ((_v1.b.$ === 'Just') && (_v1.b.a.$ === 'EdgeObj')) {
						var _v2 = _v1.a.a;
						var a1 = _v2.a;
						var a2 = _v2.b;
						var _v3 = _v1.b.a;
						var b1 = _v3.a;
						var b2 = _v3.b;
						return A3(
							$author$project$Polygraph$rawMerge,
							i1,
							i2,
							A3(
								$author$project$Polygraph$recursiveMerge,
								a2,
								b2,
								A3(
									$author$project$Polygraph$recursiveMerge,
									a1,
									b1,
									$author$project$Polygraph$Graph(g))));
					} else {
						break _v1$2;
					}
				} else {
					if ((_v1.b.$ === 'Just') && (_v1.b.a.$ === 'EdgeObj')) {
						var _v4 = _v1.b.a;
						var a1 = _v4.a;
						var a2 = _v4.b;
						return A3(
							$author$project$Polygraph$rawMerge,
							i1,
							i2,
							A3(
								$author$project$Polygraph$recursiveMerge,
								i1,
								a2,
								A3(
									$author$project$Polygraph$recursiveMerge,
									i1,
									a1,
									$author$project$Polygraph$Graph(g))));
					} else {
						break _v1$2;
					}
				}
			} else {
				break _v1$2;
			}
		}
		return A3(
			$author$project$Polygraph$rawMerge,
			i1,
			i2,
			$author$project$Polygraph$Graph(g));
	});
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $author$project$Polygraph$allIds = function (_v0) {
	var g = _v0.a;
	return $elm_community$intdict$IntDict$keys(g);
};
var $author$project$Polygraph$topmostObjects = function (g) {
	var gedges = $author$project$Polygraph$edges(g);
	return A2(
		$elm$core$List$filter,
		function (id) {
			return A2(
				$elm$core$List$all,
				function (e) {
					return (!_Utils_eq(e.to, id)) && (!_Utils_eq(e.from, id));
				},
				gedges);
		},
		$author$project$Polygraph$allIds(g));
};
var $author$project$Polygraph$topmostObject = function (g) {
	var _v0 = $author$project$Polygraph$topmostObjects(g);
	if (_v0.b && (!_v0.b.b)) {
		var id = _v0.a;
		return $elm$core$Maybe$Just(id);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Polygraph$updateNode = F3(
	function (i, fn, g) {
		return A4($author$project$Polygraph$update, i, fn, $elm$core$Basics$identity, g);
	});
var $author$project$Polygraph$updateNodes = F2(
	function (l, g) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, g2) {
					var id = _v0.id;
					var label = _v0.label;
					return A3(
						$author$project$Polygraph$updateNode,
						id,
						$elm$core$Basics$always(label),
						g2);
				}),
			g,
			l);
	});
var $author$project$GraphDefs$weaklySelectMany = F2(
	function (ids, g) {
		return A4(
			$author$project$Polygraph$updateList,
			ids,
			function (n) {
				return _Utils_update(
					n,
					{weaklySelected: true});
			},
			function (e) {
				return _Utils_update(
					e,
					{weaklySelected: true});
			},
			$author$project$GraphDefs$clearWeakSelection(g));
	});
var $author$project$GraphDefs$weaklySelect = function (id) {
	return $author$project$GraphDefs$weaklySelectMany(
		_List_fromArray(
			[id]));
};
var $author$project$Modes$Move$mkGraph = F6(
	function (model, pos, direction, shouldMerge, modelGraph, selectedGraph) {
		var mergeId = $author$project$Polygraph$topmostObject(selectedGraph);
		var complementGraph = A2($author$project$Polygraph$complement, modelGraph, selectedGraph);
		var nodes = $author$project$Polygraph$nodes(selectedGraph);
		var updNode = F2(
			function (delta, _v4) {
				var id = _v4.id;
				var label = _v4.label;
				return {
					id: id,
					label: _Utils_update(
						label,
						{
							pos: A2($author$project$Geometry$Point$add, label.pos, delta)
						})
				};
			});
		var moveNodes = function (delta) {
			return A2(
				$elm$core$List$map,
				updNode(delta),
				nodes);
		};
		var retDelta = F2(
			function (allowOverlap, delta) {
				var movedNodes = moveNodes(delta);
				var newPos = $author$project$GraphDefs$centerOfNodes(movedNodes);
				var overlapId = allowOverlap ? $elm$core$List$head(
					A2($author$project$GraphDefs$getNodesAt, complementGraph, newPos)) : $elm$core$Maybe$Nothing;
				var closestId = A2($author$project$GraphDefs$closest, newPos, complementGraph);
				var retMerge = F2(
					function (id1, id2) {
						return {
							graph: A3($author$project$Polygraph$recursiveMerge, id1, id2, modelGraph),
							merged: true
						};
					});
				var _v3 = _Utils_Tuple3(overlapId, mergeId, shouldMerge);
				_v3$2:
				while (true) {
					if (_v3.b.$ === 'Just') {
						if (_v3.a.$ === 'Just') {
							var targetId = _v3.a.a;
							var sourceId = _v3.b.a;
							return A2(retMerge, targetId, sourceId);
						} else {
							if (_v3.c) {
								var sourceId = _v3.b.a;
								return A2(retMerge, closestId, sourceId);
							} else {
								break _v3$2;
							}
						}
					} else {
						break _v3$2;
					}
				}
				var g = A2(
					$author$project$GraphDefs$weaklySelect,
					closestId,
					A2($author$project$Polygraph$updateNodes, movedNodes, modelGraph));
				return {graph: g, merged: false};
			});
		var mouseDelta = function () {
			var _v1 = A2(
				$author$project$Geometry$Point$subtract,
				model.mousePos,
				$author$project$GraphDefs$centerOfNodes(nodes));
			var dx = _v1.a;
			var dy = _v1.b;
			switch (direction.$) {
				case 'Free':
					return _Utils_Tuple2(dx, dy);
				case 'Vertical':
					return _Utils_Tuple2(0, dy);
				default:
					return _Utils_Tuple2(dx, 0);
			}
		}();
		var sizeGrid = $author$project$Model$getActiveSizeGrid(model);
		switch (pos.$) {
			case 'InputPosKeyboard':
				var p = pos.a;
				return A2(
					retDelta,
					true,
					A2($author$project$InputPosition$deltaKeyboardPos, sizeGrid, p));
			case 'InputPosGraph':
				return A2(retDelta, false, mouseDelta);
			default:
				return A2(retDelta, false, mouseDelta);
		}
	});
var $author$project$GraphDefs$unselect = function (id) {
	return A3(
		$author$project$Polygraph$update,
		id,
		function (n) {
			return _Utils_update(
				n,
				{selected: false});
		},
		function (e) {
			return _Utils_update(
				e,
				{selected: false});
		});
};
var $author$project$Modes$CutHead$makeGraph = F3(
	function (merge, _v0, model) {
		var edge = _v0.edge;
		var head = _v0.head;
		var duplicate = _v0.duplicate;
		var modelGraph = $author$project$Model$getActiveGraph(model);
		var pos = model.mousePos;
		var _v1 = head ? _Utils_Tuple2(edge.from, edge.to) : _Utils_Tuple2(edge.to, edge.from);
		var id1 = _v1.a;
		var id2 = _v1.b;
		var nodeLabel = A2(
			$elm$core$Maybe$withDefault,
			A4($author$project$GraphDefs$newNodeLabel, pos, '', true, $author$project$Zindex$defaultZ),
			A4(
				$author$project$Polygraph$get,
				id2,
				function (label) {
					return _Utils_update(
						label,
						{pos: pos});
				},
				$author$project$GraphDefs$edgeToNodeLabel(pos),
				modelGraph));
		var extGraph = A5(
			$author$project$Polygraph$makeCone,
			modelGraph,
			_List_fromArray(
				[id1]),
			nodeLabel,
			edge.label,
			!head);
		var g4 = duplicate ? A2($author$project$GraphDefs$unselect, edge.id, extGraph.extendedGraph) : A3(
			$elm$core$List$foldl,
			function (id) {
				return A2($author$project$Polygraph$merge, id, edge.id);
			},
			extGraph.extendedGraph,
			extGraph.edgeIds);
		var moveInfo = A6($author$project$Modes$Move$mkGraph, model, $author$project$InputPosition$InputPosMouse, $author$project$Modes$Free, merge, g4, extGraph.newSubGraph);
		return moveInfo.graph;
	});
var $author$project$Model$toggleHelpOverlay = function (model) {
	return _Utils_update(
		model,
		{showOverlayHelp: !model.showOverlayHelp});
};
var $author$project$Modes$CutHead$update = F3(
	function (state, msg, m) {
		var finalise = function (merge) {
			return _Utils_Tuple2(
				A2(
					$author$project$Model$setActiveGraph,
					_Utils_update(
						m,
						{mode: $author$project$Modes$DefaultMode}),
					A3($author$project$Modes$CutHead$makeGraph, merge, state, m)),
				$elm$core$Platform$Cmd$none);
		};
		var changeState = function (s) {
			return _Utils_update(
				m,
				{
					mode: $author$project$Modes$CutHead(s)
				});
		};
		_v0$7:
		while (true) {
			switch (msg.$) {
				case 'MouseClick':
					return finalise(false);
				case 'KeyChanged':
					if (msg.a) {
						if ((msg.c.$ === 'Control') && (msg.c.a === 'Control')) {
							return finalise(true);
						} else {
							break _v0$7;
						}
					} else {
						if (msg.c.$ === 'Control') {
							switch (msg.c.a) {
								case 'Escape':
									return _Utils_Tuple2(
										_Utils_update(
											m,
											{mode: $author$project$Modes$DefaultMode}),
										$elm$core$Platform$Cmd$none);
								case 'Enter':
									return finalise(false);
								default:
									break _v0$7;
							}
						} else {
							switch (msg.c.a.valueOf()) {
								case '?':
									return $author$project$Model$noCmd(
										$author$project$Model$toggleHelpOverlay(m));
								case 'c':
									return _Utils_Tuple2(
										changeState(
											_Utils_update(
												state,
												{head: !state.head})),
										$elm$core$Platform$Cmd$none);
								case 'd':
									return _Utils_Tuple2(
										changeState(
											_Utils_update(
												state,
												{duplicate: !state.duplicate})),
										$elm$core$Platform$Cmd$none);
								default:
									break _v0$7;
							}
						}
					}
				default:
					break _v0$7;
			}
		}
		return $author$project$Model$noCmd(m);
	});
var $author$project$Modes$FreeMove = {$: 'FreeMove'};
var $author$project$Modes$Horizontal = {$: 'Horizontal'};
var $author$project$Modes$Move = function (a) {
	return {$: 'Move', a: a};
};
var $author$project$Modes$PressMove = {$: 'PressMove'};
var $author$project$Modes$UndefinedMove = {$: 'UndefinedMove'};
var $author$project$Modes$Vertical = {$: 'Vertical'};
var $author$project$Modes$Move$mkInfo = F3(
	function (model, merge, _v0) {
		var pos = _v0.pos;
		var direction = _v0.direction;
		var modelGraph = $author$project$Model$getActiveGraph(model);
		var selectedGraph = $author$project$GraphDefs$selectedGraph(modelGraph);
		var _v1 = A6($author$project$Modes$Move$mkGraph, model, pos, direction, merge, modelGraph, selectedGraph);
		var merged = _v1.merged;
		var graph = _v1.graph;
		return {graph: graph, valid: true};
	});
var $author$project$Model$switch_Default = function (m) {
	return $author$project$Model$noCmd(
		_Utils_update(
			m,
			{mode: $author$project$Modes$DefaultMode}));
};
var $author$project$InputPosition$InputPosKeyboard = function (a) {
	return {$: 'InputPosKeyboard', a: a};
};
var $author$project$InputPosition$getKeyboardPos = function (pos) {
	if (pos.$ === 'InputPosKeyboard') {
		var p = pos.a;
		return p;
	} else {
		return _Utils_Tuple2(0, 0);
	}
};
var $author$project$InputPosition$InputPosGraph = function (a) {
	return {$: 'InputPosGraph', a: a};
};
var $author$project$InputPosition$updateNoKeyboard = F2(
	function (pos, msg) {
		switch (msg.$) {
			case 'MouseMove':
				return $author$project$InputPosition$InputPosMouse;
			case 'MouseOn':
				var id = msg.a;
				return $author$project$InputPosition$InputPosGraph(id);
			default:
				return pos;
		}
	});
var $author$project$InputPosition$update = F2(
	function (pos, msg) {
		var offsetPos = F2(
			function (x, y) {
				var _v1 = $author$project$InputPosition$getKeyboardPos(pos);
				var curx = _v1.a;
				var cury = _v1.b;
				return $author$project$InputPosition$InputPosKeyboard(
					_Utils_Tuple2(x + curx, y + cury));
			});
		_v0$4:
		while (true) {
			if (((msg.$ === 'KeyChanged') && (!msg.a)) && (msg.c.$ === 'Character')) {
				switch (msg.c.a.valueOf()) {
					case 'h':
						return A2(offsetPos, -1, 0);
					case 'j':
						return A2(offsetPos, 0, 1);
					case 'k':
						return A2(offsetPos, 0, -1);
					case 'l':
						return A2(offsetPos, 1, 0);
					default:
						break _v0$4;
				}
			} else {
				break _v0$4;
			}
		}
		return A2($author$project$InputPosition$updateNoKeyboard, pos, msg);
	});
var $author$project$Modes$Move$update = F3(
	function (msg, state, model) {
		var movedRet = function (merge) {
			var info = A3($author$project$Modes$Move$mkInfo, model, merge, state);
			return info.valid ? $author$project$Model$switch_Default(
				state.save ? A2($author$project$Model$setSaveGraph, model, info.graph) : A2($author$project$Model$setActiveGraph, model, info.graph)) : $author$project$Model$noCmd(model);
		};
		var terminable = !_Utils_eq(state.mode, $author$project$Modes$PressMove);
		var terminedRet = function (merge) {
			return terminable ? movedRet(merge) : $author$project$Model$noCmd(model);
		};
		var updateState = function (st) {
			return _Utils_update(
				model,
				{
					mode: $author$project$Modes$Move(st)
				});
		};
		var updateDirection = function (direction) {
			return $author$project$Model$noCmd(
				updateState(
					_Utils_update(
						state,
						{direction: direction})));
		};
		_v0$10:
		while (true) {
			switch (msg.$) {
				case 'PressTimeout':
					return $author$project$Model$noCmd(
						_Utils_eq(state.mode, $author$project$Modes$UndefinedMove) ? updateState(
							_Utils_update(
								state,
								{mode: $author$project$Modes$PressMove})) : model);
				case 'MouseClick':
					return terminedRet(false);
				case 'KeyChanged':
					if (msg.a) {
						if ((msg.c.$ === 'Control') && (msg.c.a === 'Control')) {
							return terminedRet(true);
						} else {
							break _v0$10;
						}
					} else {
						if (msg.c.$ === 'Character') {
							switch (msg.c.a.valueOf()) {
								case '?':
									return $author$project$Model$noCmd(
										$author$project$Model$toggleHelpOverlay(model));
								case 'g':
									var _v1 = state.mode;
									switch (_v1.$) {
										case 'UndefinedMove':
											return $author$project$Model$noCmd(
												updateState(
													_Utils_update(
														state,
														{mode: $author$project$Modes$FreeMove})));
										case 'PressMove':
											return movedRet(false);
										default:
											return $author$project$Model$noCmd(model);
									}
								case 'f':
									return updateDirection($author$project$Modes$Free);
								case 'x':
									return updateDirection($author$project$Modes$Horizontal);
								case 'y':
									return updateDirection($author$project$Modes$Vertical);
								default:
									break _v0$10;
							}
						} else {
							switch (msg.c.a) {
								case 'Escape':
									return $author$project$Model$switch_Default(model);
								case 'Enter':
									return terminedRet(false);
								default:
									break _v0$10;
							}
						}
					}
				default:
					break _v0$10;
			}
		}
		return $author$project$Model$noCmd(
			updateState(
				_Utils_update(
					state,
					{
						pos: A2($author$project$InputPosition$update, state.pos, msg)
					})));
	});
var $author$project$Modes$NewArrow = function (a) {
	return {$: 'NewArrow', a: a};
};
var $author$project$Modes$Pullback = {$: 'Pullback'};
var $author$project$Modes$PullshoutMode = function (a) {
	return {$: 'PullshoutMode', a: a};
};
var $author$project$Modes$Pushout = {$: 'Pushout'};
var $author$project$Polygraph$incomings = F2(
	function (id, g) {
		return A2(
			$elm$core$List$filter,
			function (_v0) {
				var to = _v0.to;
				return _Utils_eq(to, id);
			},
			$author$project$Polygraph$edges(g));
	});
var $author$project$GraphDefs$isPullshout = function (e) {
	return _Utils_eq(e.details, $author$project$GraphDefs$PullshoutEdge);
};
var $elm_community$list_extra$List$Extra$notMember = function (x) {
	return A2(
		$elm$core$Basics$composeL,
		$elm$core$Basics$not,
		$elm$core$List$member(x));
};
var $author$project$Polygraph$outgoings = F2(
	function (id, g) {
		return A2(
			$elm$core$List$filter,
			function (_v0) {
				var from = _v0.from;
				return _Utils_eq(from, id);
			},
			$author$project$Polygraph$edges(g));
	});
var $author$project$Modes$Pullshout$possibleDests = F3(
	function (g, id, k) {
		var l = A2(
			$elm_community$list_extra$List$Extra$remove,
			id,
			A2(
				$elm$core$List$map,
				function ($) {
					return $.id;
				},
				A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					A2(
						$elm$core$Maybe$map,
						function (n) {
							return A2(
								_Utils_eq(k, $author$project$Modes$Pullback) ? $author$project$Polygraph$outgoings : $author$project$Polygraph$incomings,
								n,
								g);
						},
						A2(
							$elm$core$Maybe$map,
							_Utils_eq(k, $author$project$Modes$Pullback) ? function ($) {
								return $.from;
							} : function ($) {
								return $.to;
							},
							A2($author$project$Polygraph$getEdge, id, g))))));
		var pbks = A2(
			$elm$core$List$map,
			function ($) {
				return $.to;
			},
			A2(
				$elm$core$List$filter,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.label;
					},
					$author$project$GraphDefs$isPullshout),
				A2($author$project$Polygraph$outgoings, id, g)));
		return A2(
			$elm$core$List$filter,
			function (i) {
				return A2($elm_community$list_extra$List$Extra$notMember, i, pbks);
			},
			l);
	});
var $author$project$Modes$Pullshout$initialise = F3(
	function (g, id, k) {
		var _v0 = A3($author$project$Modes$Pullshout$possibleDests, g, id, k);
		if (_v0.b) {
			var t = _v0.a;
			var q = _v0.b;
			return $elm$core$Maybe$Just(
				{chosenEdge: id, currentDest: t, kind: k, possibilities: q, source: 0, target: 0});
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Drawing$Color$fromChar = function (s) {
	switch (s.valueOf()) {
		case 'r':
			return $elm$core$Maybe$Just($author$project$Drawing$Color$Red);
		case 'u':
			return $elm$core$Maybe$Just($author$project$Drawing$Color$Blue);
		case 'v':
			return $elm$core$Maybe$Just($author$project$Drawing$Color$Purple);
		case 'g':
			return $elm$core$Maybe$Just($author$project$Drawing$Color$Green);
		case 'y':
			return $elm$core$Maybe$Just($author$project$Drawing$Color$Yellow);
		case 'o':
			return $elm$core$Maybe$Just($author$project$Drawing$Color$Orange);
		case 'c':
			return $elm$core$Maybe$Just($author$project$Drawing$Color$Black);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$ArrowStyle$keyMaybeUpdateColor = F2(
	function (k, style) {
		if (k.$ === 'Character') {
			var c = k.a;
			return A2(
				$elm$core$Maybe$andThen,
				function (color) {
					return _Utils_eq(color, style.color) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
						_Utils_update(
							style,
							{color: color}));
				},
				$author$project$Drawing$Color$fromChar(c));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$ArrowStyle$maxLabelPosition = 0.9;
var $author$project$ArrowStyle$minLabelPosition = 0.1;
var $author$project$Geometry$Epsilon$norm0 = function (x) {
	return (_Utils_cmp(
		$elm$core$Basics$abs(x),
		$author$project$Geometry$Epsilon$epsilon) < 1) ? 0 : x;
};
var $author$project$ArrowStyle$toggleDashed = function (s) {
	return _Utils_update(
		s,
		{dashed: !s.dashed});
};
var $author$project$ArrowStyle$toggleDouble = function (s) {
	return _Utils_update(
		s,
		{_double: !s._double});
};
var $author$project$ListExtraExtra$prevInList = F2(
	function (l, a) {
		prevInList:
		while (true) {
			if (!l.b) {
				return a;
			} else {
				if (!l.b.b) {
					var c = l.a;
					return c;
				} else {
					var b = l.a;
					var _v1 = l.b;
					var c = _v1.a;
					var t = _v1.b;
					if (_Utils_eq(a, c)) {
						return b;
					} else {
						var $temp$l = A2($elm$core$List$cons, c, t),
							$temp$a = a;
						l = $temp$l;
						a = $temp$a;
						continue prevInList;
					}
				}
			}
		}
	});
var $author$project$ListExtraExtra$nextInList = F2(
	function (l, a) {
		return A2(
			$author$project$ListExtraExtra$prevInList,
			$elm$core$List$reverse(l),
			a);
	});
var $author$project$ArrowStyle$toggleHead = function (s) {
	return _Utils_update(
		s,
		{
			head: A2(
				$author$project$ListExtraExtra$nextInList,
				_List_fromArray(
					[$author$project$ArrowStyle$DefaultHead, $author$project$ArrowStyle$NoHead, $author$project$ArrowStyle$TwoHeads]),
				s.head)
		});
};
var $author$project$ArrowStyle$toggleHook = function (s) {
	return _Utils_update(
		s,
		{
			tail: A2(
				$author$project$ListExtraExtra$nextInList,
				_List_fromArray(
					[$author$project$ArrowStyle$Hook, $author$project$ArrowStyle$HookAlt, $author$project$ArrowStyle$DefaultTail]),
				s.tail)
		});
};
var $author$project$ArrowStyle$toggleLabelAlignement = function (s) {
	return _Utils_update(
		s,
		{
			labelAlignment: A2(
				$author$project$ListExtraExtra$nextInList,
				_List_fromArray(
					[$author$project$Geometry$Left, $author$project$Geometry$Right]),
				s.labelAlignment)
		});
};
var $author$project$ArrowStyle$toggleMapsto = function (s) {
	return _Utils_update(
		s,
		{
			tail: A2(
				$author$project$ListExtraExtra$nextInList,
				_List_fromArray(
					[$author$project$ArrowStyle$Mapsto, $author$project$ArrowStyle$DefaultTail]),
				s.tail)
		});
};
var $author$project$ArrowStyle$keyMaybeUpdateStyle = F2(
	function (k, style) {
		_v0$10:
		while (true) {
			if (k.$ === 'Character') {
				switch (k.a.valueOf()) {
					case '|':
						return $elm$core$Maybe$Just(
							$author$project$ArrowStyle$toggleMapsto(style));
					case '>':
						return $elm$core$Maybe$Just(
							$author$project$ArrowStyle$toggleHead(style));
					case '(':
						return $elm$core$Maybe$Just(
							$author$project$ArrowStyle$toggleHook(style));
					case '=':
						return $elm$core$Maybe$Just(
							$author$project$ArrowStyle$toggleDouble(style));
					case '-':
						return $elm$core$Maybe$Just(
							$author$project$ArrowStyle$toggleDashed(style));
					case 'b':
						return $elm$core$Maybe$Just(
							_Utils_update(
								style,
								{
									bend: $author$project$Geometry$Epsilon$norm0(style.bend + 0.1)
								}));
					case 'B':
						return $elm$core$Maybe$Just(
							_Utils_update(
								style,
								{
									bend: $author$project$Geometry$Epsilon$norm0(style.bend - 0.1)
								}));
					case 'A':
						return $elm$core$Maybe$Just(
							$author$project$ArrowStyle$toggleLabelAlignement(style));
					case ']':
						return (_Utils_cmp(style.labelPosition + $author$project$Geometry$Epsilon$epsilon, $author$project$ArrowStyle$maxLabelPosition) > -1) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
							_Utils_update(
								style,
								{
									labelPosition: A2($elm$core$Basics$min, $author$project$ArrowStyle$maxLabelPosition, style.labelPosition + 0.1)
								}));
					case '[':
						return (_Utils_cmp(style.labelPosition, $author$project$ArrowStyle$minLabelPosition + $author$project$Geometry$Epsilon$epsilon) < 1) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
							_Utils_update(
								style,
								{
									labelPosition: A2($elm$core$Basics$max, $author$project$ArrowStyle$minLabelPosition, style.labelPosition - 0.1)
								}));
					default:
						break _v0$10;
				}
			} else {
				break _v0$10;
			}
		}
		return $elm$core$Maybe$Nothing;
	});
var $author$project$Modes$CreateCone = {$: 'CreateCone'};
var $author$project$Modes$CreateCylinder = {$: 'CreateCylinder'};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $author$project$Modes$NewArrow$nextPossibleMode = function (s) {
	var _v0 = s.mode;
	switch (_v0.$) {
		case 'CreateCone':
			return $elm$core$Maybe$Nothing;
		case 'CreateCylinder':
			return $elm$core$Maybe$Just($author$project$Modes$CreateCone);
		default:
			return $elm$core$List$isEmpty(
				$author$project$Polygraph$edges(s.chosen)) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just($author$project$Modes$CreateCylinder);
	}
};
var $elm_community$maybe_extra$Maybe$Extra$join = function (mx) {
	if (mx.$ === 'Just') {
		var x = mx.a;
		return x;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$GraphDefs$getLabelLabel = F2(
	function (id, g) {
		return $elm_community$maybe_extra$Maybe$Extra$join(
			A4(
				$author$project$Polygraph$get,
				id,
				A2(
					$elm$core$Basics$composeL,
					$elm$core$Maybe$Just,
					function ($) {
						return $.label;
					}),
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.details;
					},
					A2(
						$elm$core$Basics$composeR,
						$author$project$GraphDefs$filterNormalEdges,
						$elm$core$Maybe$map(
							function ($) {
								return $.label;
							}))),
				g));
	});
var $author$project$Modes$RenameMode = F2(
	function (a, b) {
		return {$: 'RenameMode', a: a, b: b};
	});
var $author$project$Model$initialise_RenameModeWithDefault = F3(
	function (save, l, m) {
		if (!l.b) {
			return _Utils_update(
				m,
				{mode: $author$project$Modes$DefaultMode});
		} else {
			return _Utils_update(
				m,
				{
					mode: A2($author$project$Modes$RenameMode, save, l)
				});
		}
	});
var $author$project$Polygraph$makeCylinder = F4(
	function (g, subGraph, label, inverted) {
		var extGraph = A2($author$project$Polygraph$disjointUnion, g, subGraph);
		var idPairs = A2(
			$elm$core$List$map,
			function (_v1) {
				var id1 = _v1.a;
				var id2 = _v1.b;
				return inverted ? _Utils_Tuple2(id2, id1) : _Utils_Tuple2(id1, id2);
			},
			A2(
				$elm_community$list_extra$List$Extra$zip,
				$author$project$Polygraph$nodeIds(subGraph),
				$author$project$Polygraph$nodeIds(extGraph.subGraph)));
		var _v0 = A3($author$project$Polygraph$newEdges, extGraph.extendedGraph, idPairs, label);
		var extendedGraph = _v0.a;
		var idEdges = _v0.b;
		return {edgeIds: idEdges, extendedGraph: extendedGraph, newSubGraph: extGraph.subGraph};
	});
var $author$project$Modes$NewArrow$moveNodeInfo = F3(
	function (merge, model, state) {
		var modelGraph = $author$project$Model$getActiveGraph(model);
		var edgeLabel = A2($author$project$GraphDefs$newEdgeLabel, '', state.style);
		var nodePos = $author$project$GraphDefs$centerOfNodes(
			$author$project$Polygraph$nodes(state.chosen));
		var nodeLabel = A4($author$project$GraphDefs$newNodeLabel, nodePos, '', true, $author$project$Zindex$defaultZ);
		var extendedGraph = function () {
			var _v0 = state.mode;
			switch (_v0.$) {
				case 'CreateCylinder':
					return A4($author$project$Polygraph$makeCylinder, modelGraph, state.chosen, edgeLabel, state.inverted);
				case 'CreateCone':
					return A5(
						$author$project$Polygraph$makeCone,
						modelGraph,
						$author$project$Polygraph$nodeIds(state.chosen),
						nodeLabel,
						edgeLabel,
						state.inverted);
				default:
					var id = _v0.a;
					return A5(
						$author$project$Polygraph$makeCone,
						modelGraph,
						_List_fromArray(
							[id]),
						nodeLabel,
						edgeLabel,
						state.inverted);
			}
		}();
		var moveInfo = A6($author$project$Modes$Move$mkGraph, model, state.pos, $author$project$Modes$Free, merge, extendedGraph.extendedGraph, extendedGraph.newSubGraph);
		var selectable = $author$project$Polygraph$allIds(extendedGraph.newSubGraph);
		return {
			graph: moveInfo.graph,
			renamable: _Utils_ap(
				moveInfo.merged ? _List_Nil : selectable,
				extendedGraph.edgeIds),
			selectable: selectable
		};
	});
var $author$project$Modes$NewArrow$nextStep = F3(
	function (model, _v0, state) {
		var finish = _v0.finish;
		var merge = _v0.merge;
		var info = A3($author$project$Modes$NewArrow$moveNodeInfo, merge, model, state);
		var m2 = A2(
			$author$project$Model$setSaveGraph,
			model,
			A2(
				$author$project$GraphDefs$weaklySelectMany,
				info.selectable,
				$author$project$GraphDefs$clearSelection(info.graph)));
		if (finish) {
			return $author$project$Model$switch_Default(m2);
		} else {
			var ids = info.renamable;
			var label = A2(
				$elm$core$Maybe$withDefault,
				'',
				A2(
					$elm$core$Maybe$andThen,
					function (id) {
						return A2($author$project$GraphDefs$getLabelLabel, id, info.graph);
					},
					$author$project$Polygraph$topmostObject(state.chosen)));
			var ids_labels = A2(
				$elm$core$List$map,
				function (id) {
					return _Utils_Tuple2(id, label);
				},
				ids);
			return $author$project$Model$noCmd(
				A3($author$project$Model$initialise_RenameModeWithDefault, false, ids_labels, m2));
		}
	});
var $author$project$Modes$NewArrow$updateState = F2(
	function (m, state) {
		return _Utils_update(
			m,
			{
				mode: $author$project$Modes$NewArrow(state)
			});
	});
var $author$project$Modes$NewArrow$update = F3(
	function (state, msg, model) {
		var modelGraph = $author$project$Model$getActiveGraph(model);
		var next = function (finishMerge) {
			return A3($author$project$Modes$NewArrow$nextStep, model, finishMerge, state);
		};
		var pullshoutMode = function (k) {
			return $author$project$Model$noCmd(
				function () {
					var _v2 = state.mode;
					if (_v2.$ === 'CreateArrow') {
						var id = _v2.a;
						return _Utils_update(
							model,
							{
								mode: A2(
									$elm$core$Maybe$withDefault,
									$author$project$Modes$NewArrow(state),
									A2(
										$elm$core$Maybe$map,
										$author$project$Modes$PullshoutMode,
										A3($author$project$Modes$Pullshout$initialise, modelGraph, id, k)))
							});
					} else {
						return model;
					}
				}());
		};
		_v0$10:
		while (true) {
			switch (msg.$) {
				case 'MouseClick':
					return next(
						{finish: false, merge: false});
				case 'KeyChanged':
					if (msg.a) {
						if ((msg.c.$ === 'Control') && (msg.c.a === 'Control')) {
							return next(
								{finish: false, merge: true});
						} else {
							break _v0$10;
						}
					} else {
						if (msg.c.$ === 'Control') {
							switch (msg.c.a) {
								case 'Escape':
									return $author$project$Model$switch_Default(model);
								case 'Enter':
									return next(
										{finish: true, merge: false});
								case 'Tab':
									return next(
										{finish: false, merge: false});
								default:
									break _v0$10;
							}
						} else {
							switch (msg.c.a.valueOf()) {
								case '?':
									return $author$project$Model$noCmd(
										$author$project$Model$toggleHelpOverlay(model));
								case 'i':
									return $author$project$Model$noCmd(
										A2(
											$author$project$Modes$NewArrow$updateState,
											model,
											_Utils_update(
												state,
												{inverted: !state.inverted})));
								case 'p':
									return pullshoutMode($author$project$Modes$Pullback);
								case 'P':
									return pullshoutMode($author$project$Modes$Pushout);
								case 'C':
									var mode = A2(
										$elm$core$Maybe$withDefault,
										state.mode,
										$author$project$Modes$NewArrow$nextPossibleMode(state));
									return $author$project$Model$noCmd(
										A2(
											$author$project$Modes$NewArrow$updateState,
											model,
											_Utils_update(
												state,
												{mode: mode})));
								default:
									break _v0$10;
							}
						}
					}
				default:
					break _v0$10;
			}
		}
		var newStyle = function () {
			if ((msg.$ === 'KeyChanged') && (!msg.a)) {
				var k = msg.c;
				return A2(
					$elm$core$Maybe$withDefault,
					A2(
						$elm$core$Maybe$withDefault,
						state.style,
						A2($author$project$ArrowStyle$keyMaybeUpdateColor, k, state.style)),
					A2($author$project$ArrowStyle$keyMaybeUpdateStyle, k, state.style));
			} else {
				return state.style;
			}
		}();
		var st2 = _Utils_update(
			state,
			{style: newStyle});
		var st3 = _Utils_update(
			st2,
			{
				pos: A2($author$project$InputPosition$update, st2.pos, msg)
			});
		return $author$project$Model$noCmd(
			A2($author$project$Modes$NewArrow$updateState, model, st3));
	});
var $author$project$GraphDefs$newPullshout = $author$project$GraphDefs$newGenericLabel($author$project$GraphDefs$PullshoutEdge);
var $author$project$Modes$Pullshout$graph = F2(
	function (m, s) {
		return A4(
			$author$project$Polygraph$newEdge,
			$author$project$Model$getActiveGraph(m),
			s.chosenEdge,
			s.currentDest,
			$author$project$GraphDefs$newPullshout).a;
	});
var $author$project$Modes$Pullshout$nextPullshout = F3(
	function (m, k, st) {
		var recompute = function (_v2) {
			var _v1 = A3(
				$author$project$Modes$Pullshout$possibleDests,
				$author$project$Model$getActiveGraph(m),
				st.chosenEdge,
				k);
			if (!_v1.b) {
				return st;
			} else {
				var t = _v1.a;
				var q = _v1.b;
				return _Utils_update(
					st,
					{currentDest: t, kind: k, possibilities: q});
			}
		};
		if (!_Utils_eq(k, st.kind)) {
			return recompute(_Utils_Tuple0);
		} else {
			var _v0 = st.possibilities;
			if (_v0.b) {
				var t = _v0.a;
				var q = _v0.b;
				return _Utils_update(
					st,
					{currentDest: t, possibilities: q});
			} else {
				return recompute(_Utils_Tuple0);
			}
		}
	});
var $author$project$Modes$Pullshout$update = F3(
	function (state, msg, model) {
		var updateState = function (st) {
			return _Utils_update(
				model,
				{
					mode: $author$project$Modes$PullshoutMode(st)
				});
		};
		_v0$5:
		while (true) {
			if ((msg.$ === 'KeyChanged') && (!msg.a)) {
				if (msg.c.$ === 'Character') {
					switch (msg.c.a.valueOf()) {
						case '?':
							return $author$project$Model$noCmd(
								$author$project$Model$toggleHelpOverlay(model));
						case 'p':
							return $author$project$Model$noCmd(
								updateState(
									A3($author$project$Modes$Pullshout$nextPullshout, model, $author$project$Modes$Pullback, state)));
						case 'P':
							return $author$project$Model$noCmd(
								updateState(
									A3($author$project$Modes$Pullshout$nextPullshout, model, $author$project$Modes$Pushout, state)));
						default:
							break _v0$5;
					}
				} else {
					switch (msg.c.a) {
						case 'Escape':
							return $author$project$Model$switch_Default(model);
						case 'Enter':
							return $author$project$Model$switch_Default(
								A2(
									$author$project$Model$setSaveGraph,
									model,
									A2($author$project$Modes$Pullshout$graph, model, state)));
						default:
							break _v0$5;
					}
				}
			} else {
				break _v0$5;
			}
		}
		return $author$project$Model$noCmd(model);
	});
var $author$project$Modes$SplitArrow = function (a) {
	return {$: 'SplitArrow', a: a};
};
var $author$project$GraphDefs$addOrSetSel = F3(
	function (keep, o, gi) {
		var g = keep ? gi : $author$project$GraphDefs$clearSelection(gi);
		var g2 = A4(
			$author$project$Polygraph$update,
			o,
			function (n) {
				return _Utils_update(
					n,
					{selected: true});
			},
			function (n) {
				return _Utils_update(
					n,
					{selected: true});
			},
			g);
		return g2;
	});
var $author$project$Model$addOrSetSel = F3(
	function (keep, o, m) {
		return A2(
			$author$project$Model$updateActiveGraph,
			m,
			A2($author$project$GraphDefs$addOrSetSel, keep, o));
	});
var $author$project$GraphDefs$emptyEdge = A2($author$project$GraphDefs$newEdgeLabel, '', $author$project$ArrowStyle$empty);
var $author$project$IntDictExtra$getList = F2(
	function (l, d) {
		var d2 = A2($elm_community$intdict$IntDict$map, $elm$core$Tuple$pair, d);
		return A2(
			$elm$core$List$filterMap,
			function (i) {
				return A2($elm_community$intdict$IntDict$get, i, d2);
			},
			l);
	});
var $author$project$Polygraph$getNodes = F2(
	function (l, _v0) {
		var g = _v0.a;
		return A2(
			$elm$core$List$filterMap,
			function (_v1) {
				var id = _v1.a;
				var e = _v1.b;
				return A2(
					$elm$core$Maybe$map,
					$author$project$Polygraph$Node(id),
					$author$project$Polygraph$objNode(e));
			},
			A2($author$project$IntDictExtra$getList, l, g));
	});
var $author$project$Modes$SplitArrow$guessPosition = F2(
	function (m, s) {
		var _v0 = A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.label;
				},
				function ($) {
					return $.pos;
				}),
			A2(
				$author$project$Polygraph$getNodes,
				_List_fromArray(
					[s.source, s.target]),
				$author$project$Model$getActiveGraph(m)));
		if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
			var p1 = _v0.a;
			var _v1 = _v0.b;
			var p2 = _v1.a;
			return A2($author$project$Geometry$Point$middle, p1, p2);
		} else {
			return m.mousePos;
		}
	});
var $author$project$Zindex$backgroundZ = -10000;
var $author$project$Model$mayCreateTargetNodeAt = F4(
	function (m, pos, s, isDefaultZ) {
		var g = $author$project$Model$getActiveGraph(m);
		var _v0 = A2($author$project$GraphDefs$getNodesAt, g, pos);
		if (_v0.b && (!_v0.b.b)) {
			var n = _v0.a;
			return _Utils_Tuple2(
				_Utils_Tuple2(g, n),
				false);
		} else {
			return _Utils_Tuple2(
				A2(
					$author$project$Polygraph$newNode,
					g,
					A4(
						$author$project$GraphDefs$newNodeLabel,
						pos,
						s,
						true,
						isDefaultZ ? $author$project$Zindex$defaultZ : $author$project$Zindex$backgroundZ)),
				true);
		}
	});
var $author$project$Modes$SplitArrow$stateInfo = F3(
	function (finish, m, state) {
		var modelGraph = $author$project$Model$getActiveGraph(m);
		var otherLabel = A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$author$project$GraphDefs$getLabelLabel,
				state.labelOnSource ? state.target : state.source,
				$author$project$Model$getActiveGraph(m)));
		var _v0 = function () {
			var makeInfo = function (pos) {
				return A4($author$project$Model$mayCreateTargetNodeAt, m, pos, otherLabel, finish);
			};
			if (state.guessPos) {
				return makeInfo(
					A2($author$project$Modes$SplitArrow$guessPosition, m, state));
			} else {
				var _v2 = state.pos;
				if (_v2.$ === 'InputPosGraph') {
					var id = _v2.a;
					return _Utils_Tuple2(
						_Utils_Tuple2(modelGraph, id),
						false);
				} else {
					return makeInfo(m.mousePos);
				}
			}
		}();
		var _v1 = _v0.a;
		var g = _v1.a;
		var n = _v1.b;
		var created = _v0.b;
		var _v3 = function () {
			var existingLabels = _Utils_Tuple2(
				A2($author$project$GraphDefs$mapDetails, $author$project$GraphDefs$NormalEdge, state.label),
				state.label.details.label);
			var newLabel = _Utils_Tuple2($author$project$GraphDefs$emptyEdge, otherLabel);
			return state.labelOnSource ? _Utils_Tuple2(existingLabels, newLabel) : _Utils_Tuple2(newLabel, existingLabels);
		}();
		var _v4 = _v3.a;
		var l1 = _v4.a;
		var d1 = _v4.b;
		var _v5 = _v3.b;
		var l2 = _v5.a;
		var d2 = _v5.b;
		var _v6 = A4($author$project$Polygraph$newEdge, g, state.source, n, l1);
		var g1 = _v6.a;
		var ne1 = _v6.b;
		var _v7 = A4($author$project$Polygraph$newEdge, g1, n, state.target, l2);
		var g2 = _v7.a;
		var ne2 = _v7.b;
		return {
			created: created,
			graph: A3(
				$author$project$Polygraph$merge,
				state.labelOnSource ? ne1 : ne2,
				state.chosenEdge,
				g2),
			le1: d1,
			le2: d2,
			movedNode: n,
			ne1: ne1,
			ne2: ne2
		};
	});
var $author$project$Modes$SplitArrow$nextStep = F3(
	function (model, finish, state) {
		var info = A3($author$project$Modes$SplitArrow$stateInfo, finish, model, state);
		var m2 = A3(
			$author$project$Model$addOrSetSel,
			false,
			info.movedNode,
			A2($author$project$Model$setSaveGraph, model, info.graph));
		if (finish) {
			return _Utils_Tuple2(
				_Utils_update(
					m2,
					{mode: $author$project$Modes$DefaultMode}),
				$author$project$HtmlDefs$computeLayout(_Utils_Tuple0));
		} else {
			var ne2 = _Utils_Tuple2(info.ne2, info.le2);
			var ne1 = _Utils_Tuple2(info.ne1, info.le1);
			var ids = info.created ? _List_fromArray(
				[
					_Utils_Tuple2(
					info.movedNode,
					A2(
						$elm$core$Maybe$withDefault,
						'',
						A2($author$project$GraphDefs$getLabelLabel, info.movedNode, info.graph))),
					ne1,
					ne2
				]) : _List_fromArray(
				[ne1, ne2]);
			return _Utils_Tuple2(
				A3($author$project$Model$initialise_RenameModeWithDefault, false, ids, m2),
				$author$project$HtmlDefs$computeLayout(_Utils_Tuple0));
		}
	});
var $author$project$Modes$SplitArrow$update = F3(
	function (state, msg, model) {
		var next = function (finish) {
			return A3($author$project$Modes$SplitArrow$nextStep, model, finish, state);
		};
		var updateState = function (st) {
			return _Utils_update(
				model,
				{
					mode: $author$project$Modes$SplitArrow(st)
				});
		};
		var updatePos = function (st) {
			return A2($author$project$InputPosition$updateNoKeyboard, st.pos, msg);
		};
		_v0$6:
		while (true) {
			switch (msg.$) {
				case 'MouseClick':
					return next(false);
				case 'KeyChanged':
					if (!msg.a) {
						if (msg.c.$ === 'Character') {
							switch (msg.c.a.valueOf()) {
								case '?':
									return $author$project$Model$noCmd(
										$author$project$Model$toggleHelpOverlay(model));
								case '/':
									return $author$project$Model$noCmd(
										updateState(
											_Utils_update(
												state,
												{labelOnSource: !state.labelOnSource})));
								default:
									break _v0$6;
							}
						} else {
							switch (msg.c.a) {
								case 'Escape':
									return $author$project$Model$switch_Default(model);
								case 'Enter':
									return next(true);
								case 'Tab':
									return next(false);
								default:
									break _v0$6;
							}
						}
					} else {
						break _v0$6;
					}
				default:
					break _v0$6;
			}
		}
		var newPos = A2($author$project$InputPosition$updateNoKeyboard, state.pos, msg);
		var guessPos = function () {
			var _v1 = _Utils_Tuple2(msg, newPos);
			if (_v1.a.$ === 'MouseMove') {
				return false;
			} else {
				if (_v1.b.$ === 'InputPosMouse') {
					var _v2 = _v1.b;
					return state.guessPos;
				} else {
					return false;
				}
			}
		}();
		return $author$project$Model$noCmd(
			updateState(
				_Utils_update(
					state,
					{guessPos: guessPos, pos: newPos})));
	});
var $author$project$Modes$SquareMode = function (a) {
	return {$: 'SquareMode', a: a};
};
var $author$project$Model$initialise_RenameMode = F3(
	function (save, l, m) {
		var ls = A2(
			$elm$core$List$filterMap,
			function (id) {
				return A2(
					$elm$core$Maybe$map,
					function (s) {
						return _Utils_Tuple2(id, s);
					},
					A2(
						$author$project$GraphDefs$getLabelLabel,
						id,
						$author$project$Model$getActiveGraph(m)));
			},
			l);
		return A3($author$project$Model$initialise_RenameModeWithDefault, save, ls, m);
	});
var $elm$core$Basics$modBy = _Basics_modBy;
var $author$project$Modes$Square$chooseAmong = F2(
	function (l, n) {
		if (l.b) {
			var t = l.a;
			var q = l.b;
			return A2(
				$elm$core$List$cons,
				A2($elm$core$Basics$modBy, t, n),
				A2($author$project$Modes$Square$chooseAmong, q, (n / t) | 0));
		} else {
			return _List_Nil;
		}
	});
var $author$project$GraphDefs$makeProofString = function (s) {
	return '\\' + ($author$project$GraphDefs$coqProofTexCommand + ('{' + (s + '}')));
};
var $author$project$GraphDefs$newProofLabel = F2(
	function (p, s) {
		return A4(
			$author$project$GraphDefs$newNodeLabel,
			p,
			$author$project$GraphDefs$makeProofString(s),
			true,
			$author$project$Zindex$defaultZ);
	});
var $author$project$GraphDefs$createProofNode = F4(
	function (g, s, coqValidated, p) {
		var label = A2($author$project$GraphDefs$newProofLabel, p, s);
		var _v0 = A2(
			$author$project$Polygraph$newNode,
			g,
			_Utils_update(
				label,
				{isCoqValidated: coqValidated}));
		var g2 = _v0.a;
		var id = _v0.b;
		return g2;
	});
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $author$project$Modes$Square$guessPosition = F2(
	function (m, s) {
		var modelGraph = $author$project$Model$getActiveGraph(m);
		var _v0 = A2(
			$elm$core$List$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.label;
				},
				function ($) {
					return $.pos;
				}),
			A2(
				$author$project$Polygraph$getNodes,
				_List_fromArray(
					[s.n1, s.chosenNode, s.n2]),
				modelGraph));
		if (((_v0.b && _v0.b.b) && _v0.b.b.b) && (!_v0.b.b.b.b)) {
			var p1 = _v0.a;
			var _v1 = _v0.b;
			var p2 = _v1.a;
			var _v2 = _v1.b;
			var p3 = _v2.a;
			return A3($author$project$Geometry$Point$diamondPave, p1, p2, p3);
		} else {
			return m.mousePos;
		}
	});
var $author$project$Polygraph$getNode = F2(
	function (id, _v0) {
		var g = _v0.a;
		return A2(
			$elm$core$Maybe$andThen,
			$author$project$Polygraph$objNode,
			A2($elm_community$intdict$IntDict$get, id, g));
	});
var $author$project$Modes$Square$guessProofPosition = F3(
	function (m, s, newPos) {
		var modelGraph = $author$project$Model$getActiveGraph(m);
		var _v0 = A2(
			$elm$core$Maybe$map,
			function ($) {
				return $.pos;
			},
			A2($author$project$Polygraph$getNode, s.chosenNode, modelGraph));
		if (_v0.$ === 'Just') {
			var oldPos = _v0.a;
			return A2($author$project$Geometry$Point$middle, oldPos, newPos);
		} else {
			return newPos;
		}
	});
var $author$project$Modes$Square$makeEdges = F3(
	function (data, ne1, ne2) {
		return {e1: data.e1.id, e2: data.e2.id, ne1: ne1, ne2: ne2};
	});
var $author$project$Modes$Square$nToMoved = F2(
	function (nToChosen, otherNToChosen) {
		return _Utils_eq(nToChosen, otherNToChosen) ? (!nToChosen) : nToChosen;
	});
var $elm$core$List$product = function (numbers) {
	return A3($elm$core$List$foldl, $elm$core$Basics$mul, 1, numbers);
};
var $elm$core$String$fromList = _String_fromList;
var $author$project$MyDiff$apply = F2(
	function (c, l) {
		var _v0 = A2($elm_community$list_extra$List$Extra$splitAt, c.index, l);
		var l1 = _v0.a;
		var l2 = _v0.b;
		return _Utils_ap(
			l1,
			_Utils_ap(
				$elm$core$List$reverse(c.rep),
				A2($elm$core$List$drop, c.length, l2)));
	});
var $author$project$MyDiff$applyAll = $elm$core$List$foldl($author$project$MyDiff$apply);
var $elm_community$list_extra$List$Extra$andThen = $elm$core$List$concatMap;
var $author$project$MyDiff$changeIndices = F4(
	function (c1, c2, p, q) {
		return _Utils_Tuple2(
			_Utils_update(
				c2,
				{index: q}),
			_Utils_update(
				c1,
				{index: p}));
	});
var $author$project$MyDiff$offset = function (c) {
	return $elm$core$List$length(c.rep) - c.length;
};
var $author$project$MyDiff$commuteLR = F2(
	function (c1, c2) {
		return _Utils_ap(
			(_Utils_cmp(c1.index + c1.length, c2.index) < 1) ? _List_fromArray(
				[
					A4(
					$author$project$MyDiff$changeIndices,
					c1,
					c2,
					c1.index,
					c2.index + $author$project$MyDiff$offset(c1))
				]) : _List_Nil,
			(_Utils_cmp(c2.index + c2.length, c1.index) < 1) ? _List_fromArray(
				[
					A4(
					$author$project$MyDiff$changeIndices,
					c1,
					c2,
					c1.index + $author$project$MyDiff$offset(c2),
					c2.index)
				]) : _List_Nil);
	});
var $author$project$MyDiff$commuteRL = F2(
	function (c1, c2) {
		return _Utils_ap(
			(_Utils_cmp(
				c1.index + $elm$core$List$length(c1.rep),
				c2.index) < 1) ? _List_fromArray(
				[
					A4(
					$author$project$MyDiff$changeIndices,
					c1,
					c2,
					c1.index,
					c2.index - $author$project$MyDiff$offset(c1))
				]) : _List_Nil,
			(_Utils_cmp(c2.index + c2.length, c1.index) < 1) ? _List_fromArray(
				[
					A4(
					$author$project$MyDiff$changeIndices,
					c1,
					c2,
					c1.index + $author$project$MyDiff$offset(c2),
					c2.index)
				]) : _List_Nil);
	});
var $author$project$MyDiff$commute = function (lr) {
	return lr ? $author$project$MyDiff$commuteLR : $author$project$MyDiff$commuteRL;
};
var $author$project$MyDiff$commuteList = F3(
	function (lr, c, l) {
		if (!l.b) {
			return _List_fromArray(
				[_List_Nil]);
		} else {
			var t = l.a;
			var q = l.b;
			return A2(
				$elm_community$list_extra$List$Extra$andThen,
				function (_v1) {
					var t2 = _v1.a;
					var c2 = _v1.b;
					return A2(
						$elm$core$List$map,
						$elm$core$List$cons(t2),
						A3($author$project$MyDiff$commuteList, lr, c2, q));
				},
				A3($author$project$MyDiff$commute, lr, c, t));
		}
	});
var $author$project$MyDiff$commuteAll = F3(
	function (lr, l, cl) {
		return A3(
			$elm$core$List$foldl,
			A2(
				$elm$core$Basics$composeL,
				$elm_community$list_extra$List$Extra$andThen,
				$author$project$MyDiff$commuteList(lr)),
			_List_fromArray(
				[l]),
			$elm$core$List$reverse(cl));
	});
var $author$project$MyDiff$compile = F2(
	function (i, l) {
		compile:
		while (true) {
			if (!l.b) {
				return _List_Nil;
			} else {
				if (l.a.$ === 'NoChange') {
					var q = l.b;
					var $temp$i = i + 1,
						$temp$l = q;
					i = $temp$i;
					l = $temp$l;
					continue compile;
				} else {
					return A3(
						$author$project$MyDiff$compileChange,
						i,
						l,
						{index: i, length: 0, rep: _List_Nil});
				}
			}
		}
	});
var $author$project$MyDiff$compileChange = F3(
	function (i, l, c) {
		compileChange:
		while (true) {
			if (!l.b) {
				return _List_fromArray(
					[c]);
			} else {
				switch (l.a.$) {
					case 'Added':
						var x = l.a.a;
						var q = l.b;
						var $temp$i = i + 1,
							$temp$l = q,
							$temp$c = _Utils_update(
							c,
							{
								rep: A2($elm$core$List$cons, x, c.rep)
							});
						i = $temp$i;
						l = $temp$l;
						c = $temp$c;
						continue compileChange;
					case 'Removed':
						var q = l.b;
						var $temp$i = i,
							$temp$l = q,
							$temp$c = _Utils_update(
							c,
							{length: c.length + 1});
						i = $temp$i;
						l = $temp$l;
						c = $temp$c;
						continue compileChange;
					default:
						var q = l.b;
						return A2(
							$elm$core$List$cons,
							c,
							A2($author$project$MyDiff$compile, i + 1, q));
				}
			}
		}
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $jinjor$elm_diff$Diff$Added = function (a) {
	return {$: 'Added', a: a};
};
var $jinjor$elm_diff$Diff$CannotGetA = function (a) {
	return {$: 'CannotGetA', a: a};
};
var $jinjor$elm_diff$Diff$CannotGetB = function (a) {
	return {$: 'CannotGetB', a: a};
};
var $jinjor$elm_diff$Diff$NoChange = function (a) {
	return {$: 'NoChange', a: a};
};
var $jinjor$elm_diff$Diff$Removed = function (a) {
	return {$: 'Removed', a: a};
};
var $jinjor$elm_diff$Diff$UnexpectedPath = F2(
	function (a, b) {
		return {$: 'UnexpectedPath', a: a, b: b};
	});
var $jinjor$elm_diff$Diff$makeChangesHelp = F5(
	function (changes, getA, getB, _v0, path) {
		makeChangesHelp:
		while (true) {
			var x = _v0.a;
			var y = _v0.b;
			if (!path.b) {
				return $elm$core$Result$Ok(changes);
			} else {
				var _v2 = path.a;
				var prevX = _v2.a;
				var prevY = _v2.b;
				var tail = path.b;
				var change = function () {
					if (_Utils_eq(x - 1, prevX) && _Utils_eq(y - 1, prevY)) {
						var _v4 = getA(x);
						if (_v4.$ === 'Just') {
							var a = _v4.a;
							return $elm$core$Result$Ok(
								$jinjor$elm_diff$Diff$NoChange(a));
						} else {
							return $elm$core$Result$Err(
								$jinjor$elm_diff$Diff$CannotGetA(x));
						}
					} else {
						if (_Utils_eq(x, prevX)) {
							var _v5 = getB(y);
							if (_v5.$ === 'Just') {
								var b = _v5.a;
								return $elm$core$Result$Ok(
									$jinjor$elm_diff$Diff$Added(b));
							} else {
								return $elm$core$Result$Err(
									$jinjor$elm_diff$Diff$CannotGetB(y));
							}
						} else {
							if (_Utils_eq(y, prevY)) {
								var _v6 = getA(x);
								if (_v6.$ === 'Just') {
									var a = _v6.a;
									return $elm$core$Result$Ok(
										$jinjor$elm_diff$Diff$Removed(a));
								} else {
									return $elm$core$Result$Err(
										$jinjor$elm_diff$Diff$CannotGetA(x));
								}
							} else {
								return $elm$core$Result$Err(
									A2(
										$jinjor$elm_diff$Diff$UnexpectedPath,
										_Utils_Tuple2(x, y),
										path));
							}
						}
					}
				}();
				if (change.$ === 'Ok') {
					var c = change.a;
					var $temp$changes = A2($elm$core$List$cons, c, changes),
						$temp$getA = getA,
						$temp$getB = getB,
						$temp$_v0 = _Utils_Tuple2(prevX, prevY),
						$temp$path = tail;
					changes = $temp$changes;
					getA = $temp$getA;
					getB = $temp$getB;
					_v0 = $temp$_v0;
					path = $temp$path;
					continue makeChangesHelp;
				} else {
					var e = change.a;
					return $elm$core$Result$Err(e);
				}
			}
		}
	});
var $jinjor$elm_diff$Diff$makeChanges = F3(
	function (getA, getB, path) {
		if (!path.b) {
			return $elm$core$Result$Ok(_List_Nil);
		} else {
			var latest = path.a;
			var tail = path.b;
			return A5($jinjor$elm_diff$Diff$makeChangesHelp, _List_Nil, getA, getB, latest, tail);
		}
	});
var $jinjor$elm_diff$Diff$Continue = function (a) {
	return {$: 'Continue', a: a};
};
var $jinjor$elm_diff$Diff$Found = function (a) {
	return {$: 'Found', a: a};
};
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_v0.$ === 'SubTree') {
			var subTree = _v0.a;
			var newSub = A4($elm$core$Array$setHelp, shift - $elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _v0.a;
			var newLeaf = A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, values);
			return A3(
				$elm$core$Elm$JsArray$unsafeSet,
				pos,
				$elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var $elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3($elm$core$Elm$JsArray$unsafeSet, $elm$core$Array$bitMask & index, value, tail)) : A4(
			$elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4($elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var $jinjor$elm_diff$Diff$step = F4(
	function (snake_, offset, k, v) {
		var fromTop = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Array$get, (k + 1) + offset, v));
		var fromLeft = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2($elm$core$Array$get, (k - 1) + offset, v));
		var _v0 = function () {
			var _v2 = _Utils_Tuple2(fromLeft, fromTop);
			if (!_v2.a.b) {
				if (!_v2.b.b) {
					return _Utils_Tuple2(
						_List_Nil,
						_Utils_Tuple2(0, 0));
				} else {
					var _v3 = _v2.b;
					var _v4 = _v3.a;
					var topX = _v4.a;
					var topY = _v4.b;
					return _Utils_Tuple2(
						fromTop,
						_Utils_Tuple2(topX + 1, topY));
				}
			} else {
				if (!_v2.b.b) {
					var _v5 = _v2.a;
					var _v6 = _v5.a;
					var leftX = _v6.a;
					var leftY = _v6.b;
					return _Utils_Tuple2(
						fromLeft,
						_Utils_Tuple2(leftX, leftY + 1));
				} else {
					var _v7 = _v2.a;
					var _v8 = _v7.a;
					var leftX = _v8.a;
					var leftY = _v8.b;
					var _v9 = _v2.b;
					var _v10 = _v9.a;
					var topX = _v10.a;
					var topY = _v10.b;
					return (_Utils_cmp(leftY + 1, topY) > -1) ? _Utils_Tuple2(
						fromLeft,
						_Utils_Tuple2(leftX, leftY + 1)) : _Utils_Tuple2(
						fromTop,
						_Utils_Tuple2(topX + 1, topY));
				}
			}
		}();
		var path = _v0.a;
		var _v1 = _v0.b;
		var x = _v1.a;
		var y = _v1.b;
		var _v11 = A3(
			snake_,
			x + 1,
			y + 1,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(x, y),
				path));
		var newPath = _v11.a;
		var goal = _v11.b;
		return goal ? $jinjor$elm_diff$Diff$Found(newPath) : $jinjor$elm_diff$Diff$Continue(
			A3($elm$core$Array$set, k + offset, newPath, v));
	});
var $jinjor$elm_diff$Diff$onpLoopK = F4(
	function (snake_, offset, ks, v) {
		onpLoopK:
		while (true) {
			if (!ks.b) {
				return $jinjor$elm_diff$Diff$Continue(v);
			} else {
				var k = ks.a;
				var ks_ = ks.b;
				var _v1 = A4($jinjor$elm_diff$Diff$step, snake_, offset, k, v);
				if (_v1.$ === 'Found') {
					var path = _v1.a;
					return $jinjor$elm_diff$Diff$Found(path);
				} else {
					var v_ = _v1.a;
					var $temp$snake_ = snake_,
						$temp$offset = offset,
						$temp$ks = ks_,
						$temp$v = v_;
					snake_ = $temp$snake_;
					offset = $temp$offset;
					ks = $temp$ks;
					v = $temp$v;
					continue onpLoopK;
				}
			}
		}
	});
var $jinjor$elm_diff$Diff$onpLoopP = F5(
	function (snake_, delta, offset, p, v) {
		onpLoopP:
		while (true) {
			var ks = (delta > 0) ? _Utils_ap(
				$elm$core$List$reverse(
					A2($elm$core$List$range, delta + 1, delta + p)),
				A2($elm$core$List$range, -p, delta)) : _Utils_ap(
				$elm$core$List$reverse(
					A2($elm$core$List$range, delta + 1, p)),
				A2($elm$core$List$range, (-p) + delta, delta));
			var _v0 = A4($jinjor$elm_diff$Diff$onpLoopK, snake_, offset, ks, v);
			if (_v0.$ === 'Found') {
				var path = _v0.a;
				return path;
			} else {
				var v_ = _v0.a;
				var $temp$snake_ = snake_,
					$temp$delta = delta,
					$temp$offset = offset,
					$temp$p = p + 1,
					$temp$v = v_;
				snake_ = $temp$snake_;
				delta = $temp$delta;
				offset = $temp$offset;
				p = $temp$p;
				v = $temp$v;
				continue onpLoopP;
			}
		}
	});
var $jinjor$elm_diff$Diff$snake = F5(
	function (getA, getB, nextX, nextY, path) {
		snake:
		while (true) {
			var _v0 = _Utils_Tuple2(
				getA(nextX),
				getB(nextY));
			_v0$2:
			while (true) {
				if (_v0.a.$ === 'Just') {
					if (_v0.b.$ === 'Just') {
						var a = _v0.a.a;
						var b = _v0.b.a;
						if (_Utils_eq(a, b)) {
							var $temp$getA = getA,
								$temp$getB = getB,
								$temp$nextX = nextX + 1,
								$temp$nextY = nextY + 1,
								$temp$path = A2(
								$elm$core$List$cons,
								_Utils_Tuple2(nextX, nextY),
								path);
							getA = $temp$getA;
							getB = $temp$getB;
							nextX = $temp$nextX;
							nextY = $temp$nextY;
							path = $temp$path;
							continue snake;
						} else {
							return _Utils_Tuple2(path, false);
						}
					} else {
						break _v0$2;
					}
				} else {
					if (_v0.b.$ === 'Nothing') {
						var _v1 = _v0.a;
						var _v2 = _v0.b;
						return _Utils_Tuple2(path, true);
					} else {
						break _v0$2;
					}
				}
			}
			return _Utils_Tuple2(path, false);
		}
	});
var $jinjor$elm_diff$Diff$onp = F4(
	function (getA, getB, m, n) {
		var v = A2(
			$elm$core$Array$initialize,
			(m + n) + 1,
			$elm$core$Basics$always(_List_Nil));
		var delta = n - m;
		return A5(
			$jinjor$elm_diff$Diff$onpLoopP,
			A2($jinjor$elm_diff$Diff$snake, getA, getB),
			delta,
			m,
			0,
			v);
	});
var $jinjor$elm_diff$Diff$testDiff = F2(
	function (a, b) {
		var arrB = $elm$core$Array$fromList(b);
		var getB = function (y) {
			return A2($elm$core$Array$get, y - 1, arrB);
		};
		var n = $elm$core$Array$length(arrB);
		var arrA = $elm$core$Array$fromList(a);
		var getA = function (x) {
			return A2($elm$core$Array$get, x - 1, arrA);
		};
		var m = $elm$core$Array$length(arrA);
		var path = A4($jinjor$elm_diff$Diff$onp, getA, getB, m, n);
		return A3($jinjor$elm_diff$Diff$makeChanges, getA, getB, path);
	});
var $jinjor$elm_diff$Diff$diff = F2(
	function (a, b) {
		var _v0 = A2($jinjor$elm_diff$Diff$testDiff, a, b);
		if (_v0.$ === 'Ok') {
			var changes = _v0.a;
			return changes;
		} else {
			return _List_Nil;
		}
	});
var $author$project$MyDiff$swapDiff = F4(
	function (lr, l1, l2, l3) {
		var d2 = A2($jinjor$elm_diff$Diff$diff, l2, l3);
		var d1 = lr ? A2($jinjor$elm_diff$Diff$diff, l2, l1) : A2($jinjor$elm_diff$Diff$diff, l1, l2);
		var cl2 = A2($author$project$MyDiff$compile, 0, d2);
		var cl1 = A2($author$project$MyDiff$compile, 0, d1);
		return A2(
			$elm$core$List$map,
			$author$project$MyDiff$applyAll(l1),
			A3($author$project$MyDiff$commuteAll, lr, cl2, cl1));
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $author$project$MyDiff$swapDiffStr = F4(
	function (lr, s1, s2, s3) {
		return A2(
			$elm$core$List$map,
			$elm$core$String$fromList,
			A4(
				$author$project$MyDiff$swapDiff,
				lr,
				$elm$core$String$toList(s1),
				$elm$core$String$toList(s2),
				$elm$core$String$toList(s3)));
	});
var $author$project$Modes$Square$moveNodeViewInfo = F3(
	function (finish, m, data) {
		var atLeast1 = function (l) {
			return $elm$core$List$isEmpty(l) ? _List_fromArray(
				['']) : l;
		};
		var commute = F2(
			function (str1, str2) {
				return ((str1 === '') || (str2 === '')) ? _List_fromArray(
					['']) : atLeast1(
					A4(
						$author$project$MyDiff$swapDiffStr,
						_Utils_eq(data.n1ToChosen, data.n2ToChosen),
						str1,
						data.chosenLabel,
						str2));
			});
		var labelsNode = A2(commute, data.n1Label, data.n2Label);
		var labelsEdge2 = A2(commute, data.e1.label.details.label, data.n2Label);
		var labelsEdge1 = A2(commute, data.n1Label, data.e2.label.details.label);
		var possibleLabels = _List_fromArray(
			[labelsNode, labelsEdge1, labelsEdge2]);
		var lens = A2($elm$core$List$map, $elm$core$List$length, possibleLabels);
		var labels = function () {
			if (A2(
				$elm$core$Basics$modBy,
				$elm$core$List$product(lens) + 1,
				data.labelConfiguration) === 1) {
				return _List_fromArray(
					['', '', '']);
			} else {
				var lconf = (!data.labelConfiguration) ? 0 : (data.labelConfiguration - 1);
				var ids = A2($author$project$Modes$Square$chooseAmong, lens, lconf);
				return A2(
					$elm$core$List$map,
					$elm$core$Maybe$withDefault('!!'),
					A3($elm$core$List$map2, $elm_community$list_extra$List$Extra$getAt, ids, possibleLabels));
			}
		}();
		var _v0 = function () {
			if (((labels.b && labels.b.b) && labels.b.b.b) && (!labels.b.b.b.b)) {
				var a = labels.a;
				var _v2 = labels.b;
				var b = _v2.a;
				var _v3 = _v2.b;
				var c = _v3.a;
				return _Utils_Tuple3(a, b, c);
			} else {
				return _Utils_Tuple3('!', '!', '!');
			}
		}();
		var labelNode = _v0.a;
		var labelEdge1 = _v0.b;
		var labelEdge2 = _v0.c;
		var newPos = data.guessPos ? A2($author$project$Modes$Square$guessPosition, m, data) : m.mousePos;
		var _v4 = A4($author$project$Model$mayCreateTargetNodeAt, m, newPos, labelNode, finish);
		var _v5 = _v4.a;
		var g = _v5.a;
		var n = _v5.b;
		var created = _v4.b;
		var make_EdgeId = F3(
			function (n1, n2, isTo) {
				return isTo ? _Utils_Tuple2(n1, n2) : _Utils_Tuple2(n2, n1);
			});
		var _v6 = A3(
			make_EdgeId,
			data.n1,
			n,
			A2($author$project$Modes$Square$nToMoved, data.n1ToChosen, data.n2ToChosen));
		var e1n1 = _v6.a;
		var e1n2 = _v6.b;
		var _v7 = A3(
			make_EdgeId,
			data.n2,
			n,
			A2($author$project$Modes$Square$nToMoved, data.n2ToChosen, data.n1ToChosen));
		var e2n1 = _v7.a;
		var e2n2 = _v7.b;
		var _v8 = A4(
			$author$project$Polygraph$newEdge,
			g,
			e1n1,
			e1n2,
			A2($author$project$GraphDefs$newEdgeLabel, labelEdge1, $author$project$ArrowStyle$empty));
		var g1 = _v8.a;
		var ne1 = _v8.b;
		var _v9 = A4(
			$author$project$Polygraph$newEdge,
			g1,
			e2n1,
			e2n2,
			A2($author$project$GraphDefs$newEdgeLabel, labelEdge2, $author$project$ArrowStyle$empty));
		var g2 = _v9.a;
		var ne2 = _v9.b;
		var g3 = function () {
			if (!m.squareModeProof) {
				return g2;
			} else {
				var proofPos = A3($author$project$Modes$Square$guessProofPosition, m, data, newPos);
				return A4($author$project$GraphDefs$createProofNode, g2, 'naturality.', false, proofPos);
			}
		}();
		var edges = A3($author$project$Modes$Square$makeEdges, data, ne1, ne2);
		return _Utils_Tuple3(
			{edges: edges, graph: g3},
			n,
			created);
	});
var $author$project$Modes$Square$nextStep = F3(
	function (model, finish, state) {
		var _v0 = A3($author$project$Modes$Square$moveNodeViewInfo, finish, model, state);
		var info = _v0.a;
		var movedNode = _v0.b;
		var created = _v0.c;
		var m2 = A3(
			$author$project$Model$addOrSetSel,
			false,
			movedNode,
			A2($author$project$Model$setSaveGraph, model, info.graph));
		if (finish) {
			return _Utils_Tuple2(
				_Utils_update(
					m2,
					{mode: $author$project$Modes$DefaultMode}),
				$author$project$HtmlDefs$computeLayout(_Utils_Tuple0));
		} else {
			var ids = created ? _List_fromArray(
				[movedNode, info.edges.ne1, info.edges.ne2]) : _List_fromArray(
				[info.edges.ne1, info.edges.ne2]);
			return _Utils_Tuple2(
				A3($author$project$Model$initialise_RenameMode, false, ids, m2),
				$author$project$HtmlDefs$computeLayout(_Utils_Tuple0));
		}
	});
var $elm_community$list_extra$List$Extra$uniquePairs = function (xs) {
	if (!xs.b) {
		return _List_Nil;
	} else {
		var x = xs.a;
		var xs_ = xs.b;
		return _Utils_ap(
			A2(
				$elm$core$List$map,
				function (y) {
					return _Utils_Tuple2(x, y);
				},
				xs_),
			$elm_community$list_extra$List$Extra$uniquePairs(xs_));
	}
};
var $author$project$Modes$Square$possibleSquareStates = F2(
	function (g, id) {
		var _v0 = A2($author$project$GraphDefs$getLabelLabel, id, g);
		if (_v0.$ === 'Nothing') {
			return _List_Nil;
		} else {
			var chosenLabel = _v0.a;
			var outs = A2(
				$elm$core$List$filterMap,
				function (x) {
					return A2(
						$elm$core$Maybe$map,
						function (labelNode) {
							return _Utils_Tuple3(
								x,
								_Utils_Tuple2(labelNode, x.to),
								false);
						},
						A2($author$project$GraphDefs$getLabelLabel, x.to, g));
				},
				A2(
					$elm$core$List$filterMap,
					$author$project$GraphDefs$filterEdgeNormal,
					A2($author$project$Polygraph$outgoings, id, g)));
			var ins = A2(
				$elm$core$List$filterMap,
				function (x) {
					return A2(
						$elm$core$Maybe$map,
						function (labelNode) {
							return _Utils_Tuple3(
								x,
								_Utils_Tuple2(labelNode, x.from),
								true);
						},
						A2($author$project$GraphDefs$getLabelLabel, x.from, g));
				},
				A2(
					$elm$core$List$filterMap,
					$author$project$GraphDefs$filterEdgeNormal,
					A2($author$project$Polygraph$incomings, id, g)));
			return A2(
				$elm$core$List$map,
				function (_v1) {
					var _v2 = _v1.a;
					var e1 = _v2.a;
					var _v3 = _v2.b;
					var l1 = _v3.a;
					var n1 = _v3.b;
					var i1 = _v2.c;
					var _v4 = _v1.b;
					var e2 = _v4.a;
					var _v5 = _v4.b;
					var l2 = _v5.a;
					var n2 = _v5.b;
					var i2 = _v4.c;
					return {chosenLabel: chosenLabel, chosenNode: id, configuration: 0, e1: e1, e2: e2, guessPos: true, labelConfiguration: 0, n1: n1, n1Label: l1, n1ToChosen: i1, n2: n2, n2Label: l2, n2ToChosen: i2};
				},
				$elm_community$list_extra$List$Extra$uniquePairs(
					_Utils_ap(ins, outs)));
		}
	});
var $author$project$Modes$Square$square_setPossibility = F3(
	function (idx, g, chosenNode) {
		var possibilities = A2($author$project$Modes$Square$possibleSquareStates, g, chosenNode);
		return A2(
			$elm$core$Maybe$map,
			function (s) {
				return _Utils_update(
					s,
					{
						configuration: A2(
							$elm$core$Basics$modBy,
							$elm$core$List$length(possibilities),
							idx + 1)
					});
			},
			A2($elm_community$list_extra$List$Extra$getAt, idx, possibilities));
	});
var $author$project$Modes$Square$square_updatePossibility = F3(
	function (m, idx, node) {
		var modelGraph = $author$project$Model$getActiveGraph(m);
		return $author$project$Model$noCmd(
			A2(
				$elm$core$Maybe$withDefault,
				m,
				A2(
					$elm$core$Maybe$map,
					function (state) {
						return _Utils_update(
							m,
							{
								mode: $author$project$Modes$SquareMode(state)
							});
					},
					A3($author$project$Modes$Square$square_setPossibility, idx, modelGraph, node))));
	});
var $author$project$Modes$Square$update = F3(
	function (state, msg, model) {
		var next = function (finish) {
			return A3($author$project$Modes$Square$nextStep, model, finish, state);
		};
		_v0$9:
		while (true) {
			switch (msg.$) {
				case 'MouseClick':
					return next(false);
				case 'MouseMove':
					return $author$project$Model$noCmd(
						_Utils_update(
							model,
							{
								mode: $author$project$Modes$SquareMode(
									_Utils_update(
										state,
										{guessPos: false}))
							}));
				case 'KeyChanged':
					if (!msg.a) {
						if (msg.c.$ === 'Character') {
							switch (msg.c.a.valueOf()) {
								case '?':
									return $author$project$Model$noCmd(
										$author$project$Model$toggleHelpOverlay(model));
								case 'p':
									return $author$project$Model$noCmd(
										_Utils_update(
											model,
											{squareModeProof: !model.squareModeProof}));
								case 's':
									return A3($author$project$Modes$Square$square_updatePossibility, model, state.configuration, state.chosenNode);
								case 'a':
									return $author$project$Model$noCmd(
										_Utils_update(
											model,
											{
												mode: $author$project$Modes$SquareMode(
													_Utils_update(
														state,
														{labelConfiguration: state.labelConfiguration + 1}))
											}));
								default:
									break _v0$9;
							}
						} else {
							switch (msg.c.a) {
								case 'Escape':
									return $author$project$Model$switch_Default(model);
								case 'Enter':
									return next(true);
								case 'Tab':
									return next(false);
								default:
									break _v0$9;
							}
						}
					} else {
						break _v0$9;
					}
				default:
					break _v0$9;
			}
		}
		return $author$project$Model$noCmd(model);
	});
var $author$project$Polygraph$updateEdge = F3(
	function (i, fe, g) {
		return A4($author$project$Polygraph$update, i, $elm$core$Basics$identity, fe, g);
	});
var $author$project$GraphDefs$updateNormalEdge = F2(
	function (id, f) {
		return A2(
			$author$project$Polygraph$updateEdge,
			id,
			$author$project$GraphDefs$mapNormalEdge(f));
	});
var $author$project$Model$updateWithGraphInfo = F2(
	function (m, _v0) {
		var tabs = _v0.tabs;
		var latexPreamble = _v0.latexPreamble;
		return _Utils_update(
			m,
			{latexPreamble: latexPreamble, tabs: tabs});
	});
var $author$project$Polygraph$getEdges = F2(
	function (l, _v0) {
		var g = _v0.a;
		return A2(
			$elm$core$List$filterMap,
			function (_v1) {
				var id = _v1.a;
				var e = _v1.b;
				return A2($author$project$Polygraph$objEdge, id, e);
			},
			A2($author$project$IntDictExtra$getList, l, g));
	});
var $author$project$GraphDefs$updateStyleEdges = F3(
	function (update, edges, g) {
		var updateStyle = function (e) {
			return A2(
				$elm$core$Maybe$map,
				function (newStyle) {
					return {id: e.id, style: newStyle};
				},
				update(e.label.details.style));
		};
		var newEdges = A2(
			$elm$core$List$filterMap,
			updateStyle,
			A2($elm$core$List$filterMap, $author$project$GraphDefs$filterEdgeNormal, edges));
		var updateEdge = F2(
			function (edge, graph) {
				return A3(
					$author$project$GraphDefs$updateNormalEdge,
					edge.id,
					function (e) {
						return _Utils_update(
							e,
							{style: edge.style});
					},
					graph);
			});
		if (_Utils_eq(newEdges, _List_Nil)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var newGraph = A3($elm$core$List$foldl, updateEdge, g, newEdges);
			return $elm$core$Maybe$Just(newGraph);
		}
	});
var $author$project$Main$update_Color = F3(
	function (ids, msg, model) {
		_v0$2:
		while (true) {
			if ((msg.$ === 'KeyChanged') && (!msg.a)) {
				if (msg.c.$ === 'Character') {
					if ('?' === msg.c.a.valueOf()) {
						return $author$project$Model$noCmd(
							$author$project$Model$toggleHelpOverlay(model));
					} else {
						break _v0$2;
					}
				} else {
					if (msg.c.a === 'Escape') {
						return $author$project$Model$switch_Default(model);
					} else {
						break _v0$2;
					}
				}
			} else {
				return $author$project$Model$noCmd(model);
			}
		}
		var k = msg.c;
		var modelGraph = $author$project$Model$getActiveGraph(model);
		var _v1 = A3(
			$author$project$GraphDefs$updateStyleEdges,
			$author$project$ArrowStyle$keyMaybeUpdateColor(k),
			A2($author$project$Polygraph$getEdges, ids, modelGraph),
			modelGraph);
		if (_v1.$ === 'Nothing') {
			return $author$project$Model$noCmd(model);
		} else {
			var g = _v1.a;
			return $author$project$Model$switch_Default(
				A2($author$project$Model$setSaveGraph, model, g));
		}
	});
var $author$project$Main$update_DebugMode = F2(
	function (msg, model) {
		if ((((msg.$ === 'KeyChanged') && (!msg.a)) && (msg.c.$ === 'Control')) && (msg.c.a === 'Escape')) {
			return $author$project$Model$switch_Default(model);
		} else {
			return $author$project$Model$noCmd(model);
		}
	});
var $author$project$Modes$ColorMode = function (a) {
	return {$: 'ColorMode', a: a};
};
var $author$project$Modes$DebugMode = {$: 'DebugMode'};
var $author$project$Msg$PressTimeout = {$: 'PressTimeout'};
var $author$project$Modes$RectSelect = function (a) {
	return {$: 'RectSelect', a: a};
};
var $author$project$Main$alert = _Platform_outgoingPort('alert', $elm$json$Json$Encode$string);
var $author$project$Geometry$Point$distanceAngle = F2(
	function (alpha, beta) {
		return $elm$core$Basics$abs(
			A2($author$project$Geometry$Point$distanceAngleSigned, alpha, beta));
	});
var $author$project$Geometry$Point$angleWithInRange = F3(
	function (delta, alpha, beta) {
		return _Utils_cmp(
			A2($author$project$Geometry$Point$distanceAngle, alpha, beta),
			$elm$core$Basics$abs(delta)) < 1;
	});
var $author$project$Main$applyProof = _Platform_outgoingPort(
	'applyProof',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'script',
					$elm$json$Json$Encode$string($.script)),
					_Utils_Tuple2(
					'statement',
					$elm$json$Json$Encode$string($.statement))
				]));
	});
var $author$project$Main$clipboardWriteGraph = _Platform_outgoingPort(
	'clipboardWriteGraph',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'graph',
					function ($) {
						return $elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'latexPreamble',
									$elm$json$Json$Encode$string($.latexPreamble)),
									_Utils_Tuple2(
									'tabs',
									$elm$json$Json$Encode$list(
										function ($) {
											return $elm$json$Json$Encode$object(
												_List_fromArray(
													[
														_Utils_Tuple2(
														'active',
														$elm$json$Json$Encode$bool($.active)),
														_Utils_Tuple2(
														'edges',
														$elm$json$Json$Encode$list(
															function ($) {
																return $elm$json$Json$Encode$object(
																	_List_fromArray(
																		[
																			_Utils_Tuple2(
																			'from',
																			$elm$json$Json$Encode$int($.from)),
																			_Utils_Tuple2(
																			'id',
																			$elm$json$Json$Encode$int($.id)),
																			_Utils_Tuple2(
																			'label',
																			function ($) {
																				return $elm$json$Json$Encode$object(
																					_List_fromArray(
																						[
																							_Utils_Tuple2(
																							'isPullshout',
																							$elm$json$Json$Encode$bool($.isPullshout)),
																							_Utils_Tuple2(
																							'label',
																							$elm$json$Json$Encode$string($.label)),
																							_Utils_Tuple2(
																							'style',
																							function ($) {
																								return $elm$json$Json$Encode$object(
																									_List_fromArray(
																										[
																											_Utils_Tuple2(
																											'alignment',
																											$elm$json$Json$Encode$string($.alignment)),
																											_Utils_Tuple2(
																											'bend',
																											$elm$json$Json$Encode$float($.bend)),
																											_Utils_Tuple2(
																											'color',
																											$elm$json$Json$Encode$string($.color)),
																											_Utils_Tuple2(
																											'dashed',
																											$elm$json$Json$Encode$bool($.dashed)),
																											_Utils_Tuple2(
																											'double',
																											$elm$json$Json$Encode$bool($._double)),
																											_Utils_Tuple2(
																											'head',
																											$elm$json$Json$Encode$string($.head)),
																											_Utils_Tuple2(
																											'position',
																											$elm$json$Json$Encode$float($.position)),
																											_Utils_Tuple2(
																											'tail',
																											$elm$json$Json$Encode$string($.tail))
																										]));
																							}($.style)),
																							_Utils_Tuple2(
																							'zindex',
																							$elm$json$Json$Encode$int($.zindex))
																						]));
																			}($.label)),
																			_Utils_Tuple2(
																			'to',
																			$elm$json$Json$Encode$int($.to))
																		]));
															})($.edges)),
														_Utils_Tuple2(
														'nodes',
														$elm$json$Json$Encode$list(
															function ($) {
																return $elm$json$Json$Encode$object(
																	_List_fromArray(
																		[
																			_Utils_Tuple2(
																			'id',
																			$elm$json$Json$Encode$int($.id)),
																			_Utils_Tuple2(
																			'label',
																			function ($) {
																				return $elm$json$Json$Encode$object(
																					_List_fromArray(
																						[
																							_Utils_Tuple2(
																							'isMath',
																							$elm$json$Json$Encode$bool($.isMath)),
																							_Utils_Tuple2(
																							'label',
																							$elm$json$Json$Encode$string($.label)),
																							_Utils_Tuple2(
																							'pos',
																							function ($) {
																								var a = $.a;
																								var b = $.b;
																								return A2(
																									$elm$json$Json$Encode$list,
																									$elm$core$Basics$identity,
																									_List_fromArray(
																										[
																											$elm$json$Json$Encode$float(a),
																											$elm$json$Json$Encode$float(b)
																										]));
																							}($.pos)),
																							_Utils_Tuple2(
																							'zindex',
																							$elm$json$Json$Encode$int($.zindex))
																						]));
																			}($.label))
																		]));
															})($.nodes)),
														_Utils_Tuple2(
														'sizeGrid',
														$elm$json$Json$Encode$int($.sizeGrid)),
														_Utils_Tuple2(
														'title',
														$elm$json$Json$Encode$string($.title))
													]));
										})($.tabs))
								]));
					}($.graph)),
					_Utils_Tuple2(
					'version',
					$elm$json$Json$Encode$int($.version))
				]));
	});
var $author$project$Polygraph$connectedClosure = F3(
	function (fn, fe, _v0) {
		var g = _v0.a;
		var li = $elm_community$intdict$IntDict$keys(
			A3($author$project$Polygraph$rawFilter, fn, fe, g));
		var inc = $author$project$Polygraph$incidence(
			$author$project$Polygraph$Graph(g));
		var aux = F2(
			function (d, l) {
				aux:
				while (true) {
					if (!l.b) {
						return d;
					} else {
						var t = l.a;
						var q = l.b;
						var _v2 = A2($elm_community$intdict$IntDict$get, t, d);
						if (_v2.$ === 'Nothing') {
							var $temp$d = d,
								$temp$l = q;
							d = $temp$d;
							l = $temp$l;
							continue aux;
						} else {
							var i = _v2.a;
							var lsuite = _Utils_ap(
								function () {
									var _v3 = A2(
										$author$project$Polygraph$getEdge,
										t,
										$author$project$Polygraph$Graph(g));
									if (_v3.$ === 'Nothing') {
										return _List_Nil;
									} else {
										var from = _v3.a.from;
										var to = _v3.a.to;
										return _List_fromArray(
											[from, to]);
									}
								}(),
								_Utils_ap(
									A2(
										$elm$core$List$map,
										function ($) {
											return $.id;
										},
										i.incomings),
									_Utils_ap(
										A2(
											$elm$core$List$map,
											function ($) {
												return $.id;
											},
											i.outgoings),
										q)));
							var $temp$d = A2($elm_community$intdict$IntDict$remove, t, d),
								$temp$l = lsuite;
							d = $temp$d;
							l = $temp$l;
							continue aux;
						}
					}
				}
			});
		var ids = $elm_community$intdict$IntDict$keys(
			A2(aux, inc, li));
		return A4(
			$author$project$Polygraph$updateList,
			ids,
			function (_v4) {
				var n = _v4.n;
				return {isIn: false, n: n};
			},
			function (_v5) {
				var e = _v5.e;
				return {e: e, isIn: false};
			},
			A3(
				$author$project$Polygraph$map,
				F2(
					function (id, n) {
						return {isIn: true, n: n};
					}),
				F2(
					function (id, e) {
						return {e: e, isIn: true};
					}),
				$author$project$Polygraph$Graph(g)));
	});
var $author$project$Geometry$Point$barycenter = function (pts) {
	var _v0 = $elm$core$List$unzip(pts);
	var xs = _v0.a;
	var ys = _v0.b;
	var length0 = $elm$core$List$length(pts);
	var length = (!length0) ? 1 : length0;
	return _Utils_Tuple2(
		$elm$core$List$sum(xs) / length,
		$elm$core$List$sum(ys) / length);
};
var $author$project$GraphDefs$createValidProofAtBarycenter = F3(
	function (g, nodes, proof) {
		var nodePositions = A2(
			$elm$core$Debug$log,
			'Node positions',
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.label;
					},
					function ($) {
						return $.pos;
					}),
				nodes));
		return A4(
			$author$project$GraphDefs$createProofNode,
			g,
			proof,
			true,
			$author$project$Geometry$Point$barycenter(nodePositions));
	});
var $author$project$Main$generateProofJs = _Platform_outgoingPort(
	'generateProofJs',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'graph',
					function ($) {
						return $elm$json$Json$Encode$object(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'graph',
									function ($) {
										return $elm$json$Json$Encode$object(
											_List_fromArray(
												[
													_Utils_Tuple2(
													'latexPreamble',
													$elm$json$Json$Encode$string($.latexPreamble)),
													_Utils_Tuple2(
													'tabs',
													$elm$json$Json$Encode$list(
														function ($) {
															return $elm$json$Json$Encode$object(
																_List_fromArray(
																	[
																		_Utils_Tuple2(
																		'active',
																		$elm$json$Json$Encode$bool($.active)),
																		_Utils_Tuple2(
																		'edges',
																		$elm$json$Json$Encode$list(
																			function ($) {
																				return $elm$json$Json$Encode$object(
																					_List_fromArray(
																						[
																							_Utils_Tuple2(
																							'from',
																							$elm$json$Json$Encode$int($.from)),
																							_Utils_Tuple2(
																							'id',
																							$elm$json$Json$Encode$int($.id)),
																							_Utils_Tuple2(
																							'label',
																							function ($) {
																								return $elm$json$Json$Encode$object(
																									_List_fromArray(
																										[
																											_Utils_Tuple2(
																											'isPullshout',
																											$elm$json$Json$Encode$bool($.isPullshout)),
																											_Utils_Tuple2(
																											'label',
																											$elm$json$Json$Encode$string($.label)),
																											_Utils_Tuple2(
																											'style',
																											function ($) {
																												return $elm$json$Json$Encode$object(
																													_List_fromArray(
																														[
																															_Utils_Tuple2(
																															'alignment',
																															$elm$json$Json$Encode$string($.alignment)),
																															_Utils_Tuple2(
																															'bend',
																															$elm$json$Json$Encode$float($.bend)),
																															_Utils_Tuple2(
																															'color',
																															$elm$json$Json$Encode$string($.color)),
																															_Utils_Tuple2(
																															'dashed',
																															$elm$json$Json$Encode$bool($.dashed)),
																															_Utils_Tuple2(
																															'double',
																															$elm$json$Json$Encode$bool($._double)),
																															_Utils_Tuple2(
																															'head',
																															$elm$json$Json$Encode$string($.head)),
																															_Utils_Tuple2(
																															'position',
																															$elm$json$Json$Encode$float($.position)),
																															_Utils_Tuple2(
																															'tail',
																															$elm$json$Json$Encode$string($.tail))
																														]));
																											}($.style)),
																											_Utils_Tuple2(
																											'zindex',
																											$elm$json$Json$Encode$int($.zindex))
																										]));
																							}($.label)),
																							_Utils_Tuple2(
																							'to',
																							$elm$json$Json$Encode$int($.to))
																						]));
																			})($.edges)),
																		_Utils_Tuple2(
																		'nodes',
																		$elm$json$Json$Encode$list(
																			function ($) {
																				return $elm$json$Json$Encode$object(
																					_List_fromArray(
																						[
																							_Utils_Tuple2(
																							'id',
																							$elm$json$Json$Encode$int($.id)),
																							_Utils_Tuple2(
																							'label',
																							function ($) {
																								return $elm$json$Json$Encode$object(
																									_List_fromArray(
																										[
																											_Utils_Tuple2(
																											'isMath',
																											$elm$json$Json$Encode$bool($.isMath)),
																											_Utils_Tuple2(
																											'label',
																											$elm$json$Json$Encode$string($.label)),
																											_Utils_Tuple2(
																											'pos',
																											function ($) {
																												var a = $.a;
																												var b = $.b;
																												return A2(
																													$elm$json$Json$Encode$list,
																													$elm$core$Basics$identity,
																													_List_fromArray(
																														[
																															$elm$json$Json$Encode$float(a),
																															$elm$json$Json$Encode$float(b)
																														]));
																											}($.pos)),
																											_Utils_Tuple2(
																											'zindex',
																											$elm$json$Json$Encode$int($.zindex))
																										]));
																							}($.label))
																						]));
																			})($.nodes)),
																		_Utils_Tuple2(
																		'sizeGrid',
																		$elm$json$Json$Encode$int($.sizeGrid)),
																		_Utils_Tuple2(
																		'title',
																		$elm$json$Json$Encode$string($.title))
																	]));
														})($.tabs))
												]));
									}($.graph)),
									_Utils_Tuple2(
									'version',
									$elm$json$Json$Encode$int($.version))
								]));
					}($.graph)),
					_Utils_Tuple2(
					'proof',
					$elm$json$Json$Encode$string($.proof))
				]));
	});
var $author$project$Main$generateSvg = _Platform_outgoingPort('generateSvg', $elm$json$Json$Encode$string);
var $author$project$GraphDefs$isProofLabel = function (l) {
	return !_Utils_eq(
		$author$project$GraphDefs$getProofFromLabel(l.label),
		$elm$core$Maybe$Nothing);
};
var $author$project$GraphDefs$getProofNodes = function (g) {
	return A2(
		$elm$core$List$filter,
		function (n) {
			return $author$project$GraphDefs$isProofLabel(n.label);
		},
		$author$project$Polygraph$nodes(g));
};
var $author$project$GraphDefs$JustDiagram = function (a) {
	return {$: 'JustDiagram', a: a};
};
var $author$project$GraphDefs$NoDiagram = {$: 'NoDiagram'};
var $author$project$GraphDefs$NoProofNode = {$: 'NoProofNode'};
var $author$project$GraphDefs$getSurroundingDiagrams = F2(
	function (pos, gi) {
		var gp = $author$project$GraphDefs$toProofGraph(gi);
		return A2(
			$elm$core$List$filter,
			A2($author$project$GraphProof$isInDiag, gp, pos),
			$author$project$GraphProof$getAllValidDiagrams(gp));
	});
var $author$project$GraphDefs$selectedNodes = function (g) {
	return A2(
		$elm$core$List$filter,
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.label;
			},
			$author$project$GraphDefs$fieldSelect(g)),
		$author$project$Polygraph$nodes(g));
};
var $author$project$GraphDefs$selectedNode = function (g) {
	var _v0 = $author$project$GraphDefs$selectedNodes(g);
	if (_v0.b && (!_v0.b.b)) {
		var x = _v0.a;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$GraphDefs$selectedProofNode = function (g) {
	var _v0 = A2(
		$elm$core$Maybe$map,
		function (n) {
			return _Utils_Tuple2(
				n,
				$author$project$GraphDefs$getProofFromLabel(n.label.label));
		},
		$author$project$GraphDefs$selectedNode(g));
	if (_v0.$ === 'Nothing') {
		return $elm$core$Maybe$Nothing;
	} else {
		if (_v0.a.b.$ === 'Nothing') {
			var _v1 = _v0.a;
			var _v2 = _v1.b;
			return $elm$core$Maybe$Nothing;
		} else {
			var _v3 = _v0.a;
			var n = _v3.a;
			var s = _v3.b.a;
			return $elm$core$Maybe$Just(
				_Utils_Tuple2(n, s));
		}
	}
};
var $author$project$GraphDefs$getSelectedProofDiagram = function (g) {
	var _v0 = $author$project$GraphDefs$selectedProofNode(g);
	if (_v0.$ === 'Nothing') {
		return $author$project$GraphDefs$NoProofNode;
	} else {
		var _v1 = _v0.a;
		var n = _v1.a;
		var s = _v1.b;
		var _v2 = A2($author$project$GraphDefs$getSurroundingDiagrams, n.label.pos, g);
		if (!_v2.b) {
			return $author$project$GraphDefs$NoDiagram;
		} else {
			var d = _v2.a;
			return $author$project$GraphDefs$JustDiagram(
				{diagram: d, proof: s});
		}
	}
};
var $author$project$GraphDefs$selectedEdges = function (g) {
	return A2(
		$elm$core$List$filter,
		A2(
			$elm$core$Basics$composeR,
			function ($) {
				return $.label;
			},
			$author$project$GraphDefs$fieldSelect(g)),
		$author$project$Polygraph$edges(g));
};
var $author$project$GraphDefs$selectedEdge = function (g) {
	var _v0 = $author$project$GraphDefs$selectedEdges(g);
	if (_v0.b && (!_v0.b.b)) {
		var x = _v0.a;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Modes$CutHead$initialise = function (model) {
	var modelGraph = $author$project$Model$getActiveGraph(model);
	var _v0 = $author$project$GraphDefs$selectedEdge(modelGraph);
	if (_v0.$ === 'Nothing') {
		return model;
	} else {
		var e = _v0.a;
		return $author$project$GraphDefs$isPullshout(e.label) ? model : _Utils_update(
			model,
			{
				mode: $author$project$Modes$CutHead(
					{duplicate: false, edge: e, head: true})
			});
	}
};
var $author$project$GraphDefs$isEmptySelection = function (go) {
	return (!A3(
		$author$project$Polygraph$any,
		function ($) {
			return $.selected;
		},
		function ($) {
			return $.selected;
		},
		go)) && (!A3(
		$author$project$Polygraph$any,
		function ($) {
			return $.weaklySelected;
		},
		function ($) {
			return $.weaklySelected;
		},
		go));
};
var $author$project$Modes$Move$initialise = F3(
	function (save, mode, model) {
		var modelGraph = $author$project$Model$getActiveGraph(model);
		return _Utils_update(
			model,
			{
				mode: $author$project$GraphDefs$isEmptySelection(modelGraph) ? $author$project$Modes$DefaultMode : $author$project$Modes$Move(
					{direction: $author$project$Modes$Free, mode: mode, pos: $author$project$InputPosition$InputPosMouse, save: save})
			});
	});
var $author$project$Modes$CreateArrow = function (a) {
	return {$: 'CreateArrow', a: a};
};
var $author$project$GraphDefs$isNormal = A2($elm$core$Basics$composeL, $elm$core$Basics$not, $author$project$GraphDefs$isPullshout);
var $author$project$GraphDefs$isNormalId = F2(
	function (g, id) {
		return A2(
			$elm$core$Maybe$withDefault,
			false,
			A4(
				$author$project$Polygraph$get,
				id,
				$elm$core$Basics$always(true),
				$author$project$GraphDefs$isNormal,
				g));
	});
var $author$project$GraphDefs$selectedId = function (g) {
	var _v0 = _Utils_ap(
		A2(
			$elm$core$List$map,
			function ($) {
				return $.id;
			},
			$author$project$GraphDefs$selectedNodes(g)),
		A2(
			$elm$core$List$map,
			function ($) {
				return $.id;
			},
			$author$project$GraphDefs$selectedEdges(g)));
	if (_v0.b && (!_v0.b.b)) {
		var x = _v0.a;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Modes$NewArrow$initialise = function (m) {
	var modelGraph = $author$project$Model$getActiveGraph(m);
	return $author$project$Model$noCmd(
		function () {
			if ($author$project$GraphDefs$isEmptySelection(modelGraph)) {
				return m;
			} else {
				var mode = function () {
					var _v0 = A2(
						$elm_community$maybe_extra$Maybe$Extra$filter,
						$author$project$GraphDefs$isNormalId(modelGraph),
						$author$project$GraphDefs$selectedId(modelGraph));
					if (_v0.$ === 'Just') {
						var id = _v0.a;
						return $author$project$Modes$CreateArrow(id);
					} else {
						return $author$project$Modes$CreateCylinder;
					}
				}();
				return _Utils_update(
					m,
					{
						mode: $author$project$Modes$NewArrow(
							{
								chosen: $author$project$GraphDefs$selectedGraph(modelGraph),
								inverted: false,
								mode: mode,
								pos: $author$project$InputPosition$InputPosMouse,
								style: $author$project$ArrowStyle$empty
							})
					});
			}
		}());
};
var $author$project$GraphDefs$selectedEdgeId = A2(
	$elm$core$Basics$composeR,
	$author$project$GraphDefs$selectedEdge,
	$elm$core$Maybe$map(
		function ($) {
			return $.id;
		}));
var $author$project$Modes$SplitArrow$initialise = function (m) {
	var modelGraph = $author$project$Model$getActiveGraph(m);
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$Model$switch_Default(m),
		A2(
			$elm$core$Maybe$andThen,
			function (id) {
				return A2(
					$elm$core$Maybe$andThen,
					function (e) {
						return A2(
							$elm$core$Maybe$map,
							function (l) {
								return $author$project$Model$noCmd(
									_Utils_update(
										m,
										{
											mode: $author$project$Modes$SplitArrow(
												{
													chosenEdge: id,
													guessPos: true,
													label: A2(
														$author$project$GraphDefs$mapDetails,
														$elm$core$Basics$always(l),
														e.label),
													labelOnSource: true,
													pos: $author$project$InputPosition$InputPosMouse,
													source: e.from,
													target: e.to
												})
										}));
							},
							$author$project$GraphDefs$filterNormalEdges(e.label.details));
					},
					A2($author$project$Polygraph$getEdge, id, modelGraph));
			},
			$author$project$GraphDefs$selectedEdgeId(modelGraph)));
};
var $author$project$Modes$Square$initialise = function (m) {
	var modelGraph = $author$project$Model$getActiveGraph(m);
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$Model$noCmd(m),
		A2(
			$elm$core$Maybe$map,
			A2(
				$elm$core$Basics$composeR,
				function ($) {
					return $.id;
				},
				A2($author$project$Modes$Square$square_updatePossibility, m, 0)),
			$author$project$GraphDefs$selectedNode(modelGraph)));
};
var $author$project$Modes$EnlargeMode = function (a) {
	return {$: 'EnlargeMode', a: a};
};
var $author$project$Main$initialiseEnlarge = function (model) {
	return _Utils_update(
		model,
		{
			mode: $author$project$Modes$EnlargeMode(
				{orig: model.mousePos, pos: $author$project$InputPosition$InputPosMouse})
		});
};
var $author$project$Modes$ResizeMode = function (a) {
	return {$: 'ResizeMode', a: a};
};
var $author$project$Main$initialise_Resize = function (model) {
	return _Utils_update(
		model,
		{
			mode: $author$project$Modes$ResizeMode(
				{
					onlyGrid: false,
					sizeGrid: $author$project$Model$getActiveSizeGrid(model)
				})
		});
};
var $author$project$Polygraph$invertEdge = F2(
	function (id, _v0) {
		var g = _v0.a;
		return $author$project$Polygraph$Graph(
			A3(
				$elm_community$intdict$IntDict$update,
				id,
				function (e) {
					if ((e.$ === 'Just') && (e.a.$ === 'EdgeObj')) {
						var _v2 = e.a;
						var i1 = _v2.a;
						var i2 = _v2.b;
						var l = _v2.c;
						return $elm$core$Maybe$Just(
							A3($author$project$Polygraph$EdgeObj, i2, i1, l));
					} else {
						return e;
					}
				},
				g));
	});
var $author$project$Main$toClipboard = _Platform_outgoingPort(
	'toClipboard',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'content',
					$elm$json$Json$Encode$string($.content)),
					_Utils_Tuple2(
					'failure',
					$elm$json$Json$Encode$string($.failure)),
					_Utils_Tuple2(
					'success',
					$elm$json$Json$Encode$string($.success))
				]));
	});
var $author$project$Main$latexToClipboard = function (tex) {
	return $author$project$Main$toClipboard(
		{content: tex, failure: 'unable to copy latex', success: 'latex successfully copied.'});
};
var $author$project$Main$promptEquation = _Platform_outgoingPort(
	'promptEquation',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $author$project$Main$promptFindReplace = _Platform_outgoingPort(
	'promptFindReplace',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $author$project$GraphDefs$removeSelected = function (g) {
	var f = $author$project$GraphDefs$fieldSelect(g);
	return A3($author$project$Polygraph$drop, f, f, g);
};
var $elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var $author$project$Main$rename = function (model) {
	var modelGraph = $author$project$Model$getActiveGraph(model);
	var ids = A2(
		$elm$core$Maybe$withDefault,
		_List_Nil,
		A2(
			$elm$core$Maybe$map,
			$elm$core$List$singleton,
			$author$project$GraphDefs$selectedId(modelGraph)));
	return $author$project$Model$noCmd(
		A3($author$project$Model$initialise_RenameMode, true, ids, model));
};
var $author$project$Main$requestProof = _Platform_outgoingPort(
	'requestProof',
	function ($) {
		return $elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'script',
					$elm$json$Json$Encode$string($.script)),
					_Utils_Tuple2(
					'statement',
					$elm$json$Json$Encode$string($.statement))
				]));
	});
var $author$project$Model$getActiveTitle = function (m) {
	return $author$project$Model$getActiveTab(m).title;
};
var $author$project$Model$restrictSelection = function (model) {
	var modelGraph = $author$project$Model$getActiveGraph(model);
	var sizeGrid = $author$project$Model$getActiveSizeGrid(model);
	return _Utils_update(
		model,
		{
			tabs: _List_fromArray(
				[
					{
					active: true,
					graph: $author$project$GraphDefs$selectedGraph(modelGraph),
					sizeGrid: sizeGrid,
					title: $author$project$Model$getActiveTitle(model)
				}
				])
		});
};
var $author$project$GraphDefs$addNodesSelection = F2(
	function (g, f) {
		return A5(
			$author$project$Polygraph$mapRecAll,
			function ($) {
				return $.selected;
			},
			function ($) {
				return $.selected;
			},
			F2(
				function (_v0, n) {
					return _Utils_update(
						n,
						{
							selected: f(n) || n.selected
						});
				}),
			F4(
				function (_v1, s1, s2, e) {
					return _Utils_update(
						e,
						{selected: (s1 && s2) || e.selected});
				}),
			g);
	});
var $author$project$GraphDefs$selectAll = function (g) {
	return A2(
		$author$project$GraphDefs$addNodesSelection,
		g,
		$elm$core$Basics$always(true));
};
var $author$project$GraphDefs$addWeaklySelected = A2(
	$author$project$Polygraph$map,
	F2(
		function (_v0, n) {
			return _Utils_update(
				n,
				{selected: n.weaklySelected || n.selected});
		}),
	F2(
		function (_v1, n) {
			return _Utils_update(
				n,
				{selected: n.weaklySelected || n.selected});
		}));
var $author$project$Main$selectByClick = function (model) {
	return model.mouseOnCanvas ? A2(
		$author$project$Model$updateActiveGraph,
		model,
		function (modelGraph) {
			return $author$project$GraphDefs$addWeaklySelected(
				model.specialKeys.shift ? modelGraph : $author$project$GraphDefs$clearSelection(modelGraph));
		}) : model;
};
var $author$project$GraphProof$angleDir = F2(
	function (dir, edge) {
		return dir ? edge.angleIn : edge.angleOut;
	});
var $elm_community$list_extra$List$Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _v1) {
				var y = _v1.a;
				var fy = _v1.b;
				var fx = f(x);
				return (_Utils_cmp(fx, fy) > 0) ? _Utils_Tuple2(x, fx) : _Utils_Tuple2(y, fy);
			});
		if (ls.b) {
			if (!ls.b.b) {
				var l_ = ls.a;
				return $elm$core$Maybe$Just(l_);
			} else {
				var l_ = ls.a;
				var ls_ = ls.b;
				return $elm$core$Maybe$Just(
					A3(
						$elm$core$List$foldl,
						maxBy,
						_Utils_Tuple2(
							l_,
							f(l_)),
						ls_).a);
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Polygraph$removeList = F2(
	function (l, _v0) {
		var d = _v0.a;
		return $author$project$Polygraph$sanitise(
			$author$project$Polygraph$Graph(
				A2($author$project$IntDictExtra$removeList, l, d)));
	});
var $author$project$Polygraph$remove = function (id) {
	return $author$project$Polygraph$removeList(
		_List_fromArray(
			[id]));
};
var $author$project$Polygraph$removeEdge = $author$project$Polygraph$remove;
var $author$project$GraphProof$extremePath = F4(
	function (direction, target, gi, e) {
		var g = A2($author$project$Polygraph$removeEdge, e.id, gi);
		var ret = _Utils_Tuple2(e, direction);
		var end = function (dir) {
			return dir ? function ($) {
				return $.to;
			} : function ($) {
				return $.from;
			};
		};
		var nfId = A2(end, direction, e);
		if (_Utils_eq(nfId, target)) {
			return _List_fromArray(
				[ret]);
		} else {
			var angle = A2($author$project$GraphProof$angleDir, direction, e.label);
			var makeStuff = F2(
				function (dir, l) {
					return A2(
						$elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(x, dir);
						},
						l);
				});
			var outs = A2(
				makeStuff,
				true,
				A2($author$project$Polygraph$outgoings, nfId, g));
			var ins = A2(
				makeStuff,
				false,
				A2($author$project$Polygraph$incomings, nfId, g));
			var finalAngle = function (_v2) {
				var edge = _v2.a;
				var dir = _v2.b;
				return A2(
					$author$project$Geometry$Point$distanceAngleSigned,
					angle,
					A2($author$project$GraphProof$angleDir, dir, edge.label));
			};
			var l = _Utils_ap(ins, outs);
			var f = A2($elm_community$list_extra$List$Extra$maximumBy, finalAngle, l);
			if (f.$ === 'Nothing') {
				return _List_fromArray(
					[ret]);
			} else {
				var _v1 = f.a;
				var eNext = _v1.a;
				var dir = _v1.b;
				return A2(
					$elm$core$List$cons,
					ret,
					A4($author$project$GraphProof$extremePath, dir, target, g, eNext));
			}
		}
	});
var $author$project$GraphProof$loopFrom = F3(
	function (direction, g, e) {
		return A4(
			$author$project$GraphProof$extremePath,
			direction,
			direction ? e.from : e.to,
			g,
			e);
	});
var $author$project$GraphProof$loopToDiagram = function (edges) {
	var findInitial = function (l) {
		if (!l.b) {
			return 0;
		} else {
			if (((!l.a.b) && l.b.b) && l.b.a.b) {
				var _v1 = l.a;
				var _v2 = l.b;
				var _v3 = _v2.a;
				return 1;
			} else {
				var q = l.b;
				return findInitial(q) + 1;
			}
		}
	};
	var _v4 = A2(
		$elm_community$list_extra$List$Extra$splitAt,
		findInitial(edges),
		edges);
	var l1 = _v4.a;
	var l2 = _v4.b;
	var lordered = _Utils_ap(l2, l1);
	var _v5 = A2($elm$core$List$partition, $elm$core$Tuple$second, lordered);
	var lhs0 = _v5.a;
	var rhs0 = _v5.b;
	var rhs = A2(
		$elm$core$List$map,
		$elm$core$Tuple$first,
		$elm$core$List$reverse(rhs0));
	var lhs = A2($elm$core$List$map, $elm$core$Tuple$first, lhs0);
	return {lhs: lhs, proof: $elm$core$Maybe$Nothing, rhs: rhs};
};
var $author$project$Main$selectLoop = F2(
	function (direction, model) {
		var modelGraph = $author$project$Model$getActiveGraph(model);
		var g = $author$project$GraphDefs$toProofGraph(modelGraph);
		var edges = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				A2($author$project$GraphProof$loopFrom, direction, g),
				A2(
					$elm$core$Maybe$andThen,
					function (id) {
						return A2($author$project$Polygraph$getEdge, id, g);
					},
					$author$project$GraphDefs$selectedEdgeId(modelGraph))));
		var diag = $author$project$GraphProof$loopToDiagram(edges);
		return A2(
			$author$project$Model$setActiveGraph,
			model,
			A3(
				$elm$core$List$foldl,
				function (e) {
					return A2(
						$author$project$Polygraph$updateEdge,
						e,
						function (n) {
							return _Utils_update(
								n,
								{selected: true});
						});
				},
				$author$project$GraphDefs$clearSelection(modelGraph),
				A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeR,
						$elm$core$Tuple$first,
						function ($) {
							return $.id;
						}),
					edges)));
	});
var $author$project$GraphDefs$selectEdges = $elm$core$List$foldl(
	function (e) {
		return A2(
			$author$project$Polygraph$updateEdge,
			e,
			function (n) {
				return _Utils_update(
					n,
					{selected: true});
			});
	});
var $author$project$GraphDefs$selectSurroundingDiagram = F2(
	function (pos, gi) {
		var _v0 = A2($author$project$GraphDefs$getSurroundingDiagrams, pos, gi);
		if (!_v0.b) {
			return gi;
		} else {
			var d = _v0.a;
			var edges = $elm_community$intdict$IntDict$keys(
				$author$project$GraphProof$edgesOfDiag(d));
			return A2(
				$author$project$GraphDefs$selectEdges,
				$author$project$GraphDefs$clearSelection(gi),
				edges);
		}
	});
var $author$project$GraphDefs$JustChain = function (a) {
	return {$: 'JustChain', a: a};
};
var $author$project$GraphDefs$NoChain = {$: 'NoChain'};
var $author$project$GraphDefs$NoClearOrientation = {$: 'NoClearOrientation'};
var $author$project$Polygraph$maximal = function (g) {
	var gedges = $author$project$Polygraph$edges(g);
	return A2(
		$elm$core$List$filter,
		function (id) {
			return A2(
				$elm$core$List$all,
				function (e) {
					return !_Utils_eq(e.from, id);
				},
				gedges);
		},
		A2(
			$elm$core$List$map,
			function ($) {
				return $.id;
			},
			$author$project$Polygraph$nodes(g)));
};
var $author$project$Polygraph$minimal = function (g) {
	var gedges = $author$project$Polygraph$edges(g);
	return A2(
		$elm$core$List$filter,
		function (id) {
			return A2(
				$elm$core$List$all,
				function (e) {
					return !_Utils_eq(e.to, id);
				},
				gedges);
		},
		A2(
			$elm$core$List$map,
			function ($) {
				return $.id;
			},
			$author$project$Polygraph$nodes(g)));
};
var $author$project$GraphProof$diagramFrom = F3(
	function (dir, g, e) {
		var loopEdges = A3($author$project$GraphProof$loopFrom, dir, g, e);
		return $author$project$GraphProof$loopToDiagram(loopEdges);
	});
var $elm_community$maybe_extra$Maybe$Extra$or = F2(
	function (ma, mb) {
		if (ma.$ === 'Nothing') {
			return mb;
		} else {
			return ma;
		}
	});
var $elm$core$List$sort = function (xs) {
	return A2($elm$core$List$sortBy, $elm$core$Basics$identity, xs);
};
var $author$project$GraphProof$getIncompleteDiagram = F2(
	function (g, l) {
		if (!l.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var e = l.a;
			var makeDiag = function (dir) {
				var d = A3($author$project$GraphProof$diagramFrom, dir, g, e);
				return _Utils_eq(
					$elm$core$List$sort(
						A2(
							$elm$core$List$map,
							function ($) {
								return $.id;
							},
							l)),
					$elm$core$List$sort(
						A2(
							$elm$core$List$map,
							function ($) {
								return $.id;
							},
							_Utils_ap(d.lhs, d.rhs)))) ? $elm$core$Maybe$Just(d) : $elm$core$Maybe$Nothing;
			};
			return A2(
				$elm_community$maybe_extra$Maybe$Extra$or,
				makeDiag(true),
				makeDiag(false));
		}
	});
var $author$project$GraphDefs$selectedIncompleteDiagram = function (g) {
	var gc = $author$project$GraphDefs$toProofGraph(g);
	return A2(
		$author$project$GraphProof$getIncompleteDiagram,
		gc,
		A2(
			$author$project$Polygraph$getEdges,
			A2(
				$elm$core$List$map,
				function ($) {
					return $.id;
				},
				$author$project$GraphDefs$selectedEdges(g)),
			gc));
};
var $author$project$GraphDefs$selectedChain = function (g) {
	var gs = $author$project$GraphDefs$selectedGraph(g);
	var _v0 = _Utils_Tuple2(
		$author$project$Polygraph$minimal(gs),
		$author$project$Polygraph$maximal(gs));
	if (((_v0.a.b && (!_v0.a.b.b)) && _v0.b.b) && (!_v0.b.b.b)) {
		var _v1 = _v0.a;
		var minId = _v1.a;
		var _v2 = _v0.b;
		var maxId = _v2.a;
		if (_Utils_eq(minId, maxId)) {
			return $author$project$GraphDefs$NoChain;
		} else {
			var _v3 = $author$project$GraphDefs$isTrueSelection(gs) ? _Utils_Tuple2(false, true) : _Utils_Tuple2(true, false);
			var weakSel = _v3.a;
			var trueSel = _v3.b;
			var label = _Utils_update(
				$author$project$GraphDefs$emptyEdge,
				{selected: trueSel, weaklySelected: weakSel});
			var _v4 = A4($author$project$Polygraph$newEdge, g, minId, maxId, label);
			var newGraph = _v4.a;
			var _v5 = $author$project$GraphDefs$selectedIncompleteDiagram(newGraph);
			if (_v5.$ === 'Nothing') {
				return $author$project$GraphDefs$NoClearOrientation;
			} else {
				var d = _v5.a;
				return $author$project$GraphDefs$JustChain(
					_Utils_Tuple2(newGraph, d));
			}
		}
	} else {
		return $author$project$GraphDefs$NoChain;
	}
};
var $elm$core$Process$sleep = _Process_sleep;
var $author$project$Geometry$Point$snapToGrid = F2(
	function (sizeGrid, _v0) {
		var px = _v0.a;
		var py = _v0.b;
		var approx = function (c) {
			return ($elm$core$Basics$floor(c / sizeGrid) * sizeGrid) + (sizeGrid / 2);
		};
		return _Utils_Tuple2(
			approx(px),
			approx(py));
	});
var $author$project$GraphDefs$snapNodeToGrid = F2(
	function (sizeGrid, n) {
		return _Utils_update(
			n,
			{
				pos: A2($author$project$Geometry$Point$snapToGrid, sizeGrid, n.pos)
			});
	});
var $author$project$Model$peekHistory = function (m) {
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$Model$toGraphInfo(m),
		$elm$core$List$head(m.history));
};
var $elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(xs);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Model$popHistory = function (m) {
	return _Utils_update(
		m,
		{
			history: A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				$elm$core$List$tail(m.history))
		});
};
var $author$project$Model$undo = function (m) {
	return $author$project$Model$popHistory(
		A2(
			$author$project$Model$updateWithGraphInfo,
			m,
			$author$project$Model$peekHistory(m)));
};
var $author$project$QuickInput$splitWithChain = F3(
	function (g, ch, id) {
		return A2(
			$elm$core$Maybe$withDefault,
			g,
			A2(
				$elm$core$Maybe$map,
				function (edge) {
					var on2 = A2($author$project$Polygraph$getNode, edge.to, g);
					var on1 = A2($author$project$Polygraph$getNode, edge.from, g);
					var _v0 = _Utils_Tuple2(on1, on2);
					if ((_v0.a.$ === 'Just') && (_v0.b.$ === 'Just')) {
						var n1 = _v0.a.a;
						var n2 = _v0.b.a;
						return A2(
							$author$project$QuickInput$buildGraphSegment,
							{alignLeft: true, edges: ch, from: n1.pos, fromId: edge.from, to: n2.pos, toId: edge.to},
							A2($author$project$Polygraph$removeEdge, id, g));
					} else {
						return g;
					}
				},
				A2($author$project$Polygraph$getEdge, id, g)));
	});
var $elm_community$list_extra$List$Extra$count = function (predicate) {
	return A2(
		$elm$core$List$foldl,
		F2(
			function (x, acc) {
				return predicate(x) ? (acc + 1) : acc;
			}),
		0);
};
var $author$project$Unification$unifyAux = F4(
	function (cfg, length, l1, l2) {
		unifyAux:
		while (true) {
			if (!l1.b) {
				return $elm$core$Result$Ok(_List_Nil);
			} else {
				var t1 = l1.a;
				var q1 = l1.b;
				if (cfg.isMetavariable(t1)) {
					var t2 = A2($elm$core$List$take, length, l2);
					return $elm$core$Result$Ok(
						_List_fromArray(
							[
								_Utils_Tuple2(t1, t2)
							]));
				} else {
					var $temp$cfg = cfg,
						$temp$length = length,
						$temp$l1 = q1,
						$temp$l2 = A2($elm$core$List$drop, 1, l2);
					cfg = $temp$cfg;
					length = $temp$length;
					l1 = $temp$l1;
					l2 = $temp$l2;
					continue unifyAux;
				}
			}
		}
	});
var $author$project$Unification$unify = F3(
	function (cfg, l1, l2) {
		if (A2($elm_community$list_extra$List$Extra$count, cfg.isMetavariable, l1) > 1) {
			return $elm$core$Result$Err('Only one hole at most is supported');
		} else {
			var length1 = $elm$core$List$length(l1);
			var length2 = $elm$core$List$length(l2);
			return (_Utils_cmp(length2, length1) < 0) ? $elm$core$Result$Err('The solved handside cannot be smaller') : A4($author$project$Unification$unifyAux, cfg, (1 + length2) - length1, l1, l2);
		}
	});
var $author$project$Unification$unifyDiagram = F3(
	function (_v0, d, graph) {
		var eq1 = _v0.a;
		var eq2 = _v0.b;
		var mayUnify = F2(
			function (l, e) {
				return A3(
					$author$project$Unification$unify,
					{
						isMetavariable: A2(
							$elm$core$Basics$composeR,
							function ($) {
								return $.label;
							},
							A2(
								$elm$core$Basics$composeR,
								function ($) {
									return $.label;
								},
								$elm$core$String$isEmpty))
					},
					l,
					e);
			});
		var _v1 = _Utils_Tuple2(
			A2(mayUnify, d.lhs, eq1),
			A2(mayUnify, d.rhs, eq2));
		if (_v1.a.$ === 'Err') {
			var s1 = _v1.a.a;
			return $elm$core$Result$Err(s1);
		} else {
			if (_v1.b.$ === 'Err') {
				var s2 = _v1.b.a;
				return $elm$core$Result$Err(s2);
			} else {
				var l1 = _v1.a.a;
				var l2 = _v1.b.a;
				var f = F2(
					function (_v2, g) {
						var a = _v2.a;
						var edges = _v2.b;
						return A3($author$project$QuickInput$splitWithChain, g, edges, a.id);
					});
				var ltot = A2(
					$elm$core$Debug$log,
					'total unified',
					_Utils_ap(l1, l2));
				var finalg = A3($elm$core$List$foldl, f, graph, ltot);
				return $elm$core$Result$Ok(finalg);
			}
		}
	});
var $author$project$Main$update_DefaultMode = F2(
	function (msg, model) {
		var delta_angle = $elm$core$Basics$pi / 5;
		var modelGraph = $author$project$Model$getActiveGraph(model);
		var sizeGrid = $author$project$Model$getActiveSizeGrid(model);
		var move = function (angle) {
			return $author$project$Model$noCmd(
				A2(
					$elm$core$Maybe$withDefault,
					model,
					A2(
						$elm$core$Maybe$map,
						function (n) {
							return A3($author$project$Model$addOrSetSel, false, n.id, model);
						},
						A2(
							$elm$core$Maybe$andThen,
							function (p) {
								return A2(
									$elm_community$list_extra$List$Extra$minimumBy,
									A2(
										$elm$core$Basics$composeR,
										function ($) {
											return $.label;
										},
										A2(
											$elm$core$Basics$composeR,
											function ($) {
												return $.pos;
											},
											$author$project$Geometry$Point$distance(p))),
									A2(
										$author$project$Polygraph$filterNodes,
										modelGraph,
										function (n) {
											return (!_Utils_eq(n.pos, p)) && A3(
												$author$project$Geometry$Point$angleWithInRange,
												delta_angle,
												angle,
												$author$project$Geometry$Point$pointToAngle(
													A2($author$project$Geometry$Point$subtract, n.pos, p)));
										}));
							},
							A2(
								$elm$core$Maybe$map,
								A2(
									$elm$core$Basics$composeR,
									function ($) {
										return $.label;
									},
									function ($) {
										return $.pos;
									}),
								$author$project$GraphDefs$selectedNode(modelGraph))))));
		};
		var generateProof = function (debug) {
			var proof = A2(
				$author$project$Main$generateProofString,
				debug,
				$author$project$GraphDefs$selectedGraph(modelGraph));
			var json = $author$project$Main$toJsGraphInfo(
				$author$project$Model$restrictSelection(model));
			return _Utils_Tuple2(
				model,
				$author$project$Main$generateProofJs(
					{graph: json, proof: proof}));
		};
		var weaklySelect = function (id) {
			return $author$project$Model$noCmd(
				model.specialKeys.shift ? A2(
					$author$project$Model$setActiveGraph,
					model,
					A3($author$project$GraphDefs$addOrSetSel, true, id, modelGraph)) : A2(
					$author$project$Model$setActiveGraph,
					model,
					A2($author$project$GraphDefs$weaklySelect, id, modelGraph)));
		};
		var clearSel = $author$project$Model$noCmd(
			A2(
				$author$project$Model$setActiveGraph,
				model,
				$author$project$GraphDefs$clearSelection(modelGraph)));
		var createPoint = F2(
			function (isMath, label) {
				var _v24 = A2(
					$author$project$Polygraph$newNode,
					modelGraph,
					A4($author$project$GraphDefs$newNodeLabel, model.mousePos, label, isMath, $author$project$Zindex$defaultZ));
				var newGraph = _v24.a;
				var newId = _v24.b;
				var newModel = A3(
					$author$project$Model$addOrSetSel,
					false,
					newId,
					A2($author$project$Model$setSaveGraph, model, newGraph));
				return $author$project$Model$noCmd(
					A3(
						$author$project$Model$initialise_RenameMode,
						false,
						_List_fromArray(
							[newId]),
						newModel));
			});
		var increaseZBy = function (offset) {
			var _v23 = $author$project$GraphDefs$selectedId(modelGraph);
			if (_v23.$ === 'Nothing') {
				return $author$project$Model$noCmd(model);
			} else {
				var id = _v23.a;
				return $author$project$Model$noCmd(
					A2(
						$author$project$Model$setSaveGraph,
						model,
						A4(
							$author$project$Polygraph$update,
							id,
							function (e) {
								return _Utils_update(
									e,
									{zindex: e.zindex + offset});
							},
							function (e) {
								return _Utils_update(
									e,
									{zindex: e.zindex + offset});
							},
							modelGraph)));
			}
		};
		_v0$46:
		while (true) {
			_v0$47:
			while (true) {
				switch (msg.$) {
					case 'MouseOn':
						var id = msg.a;
						return weaklySelect(id);
					case 'MouseClick':
						return $author$project$Model$noCmd(
							$author$project$Main$selectByClick(model));
					case 'MouseMove':
						return weaklySelect(
							A2($author$project$GraphDefs$closest, model.mousePos, modelGraph));
					case 'MouseDown':
						return $author$project$Model$noCmd(
							_Utils_update(
								model,
								{
									mode: $author$project$Modes$RectSelect(model.mousePos)
								}));
					case 'CopyGraph':
						return _Utils_Tuple2(
							model,
							$author$project$Main$clipboardWriteGraph(
								$author$project$Main$toJsGraphInfo(
									$author$project$Model$restrictSelection(model))));
					case 'AppliedProof':
						var statement = msg.a.statement;
						var script = msg.a.script;
						var failWith = function (s) {
							return _Utils_Tuple2(
								model,
								$author$project$Main$alert(s));
						};
						var registerProof = F2(
							function (graph, diagram) {
								var _v11 = A2($elm$parser$Parser$run, $author$project$QuickInput$equalityParser, statement);
								if (_v11.$ === 'Err') {
									return failWith('fail to parse ' + statement);
								} else {
									var eqs = _v11.a;
									var _v12 = A3($author$project$Unification$unifyDiagram, eqs, diagram, graph);
									if (_v12.$ === 'Err') {
										var s = _v12.a;
										return failWith(s);
									} else {
										var finalg = _v12.a;
										return $author$project$Model$noCmd(
											A2($author$project$Model$setSaveGraph, model, finalg));
									}
								}
							});
						var registerAndCreateProof = F2(
							function (newGraph, diagram) {
								var nodes = $author$project$Polygraph$nodes(
									$author$project$GraphDefs$selectedGraph(modelGraph));
								var g_with_proof = A3($author$project$GraphDefs$createValidProofAtBarycenter, newGraph, nodes, script);
								return A2(registerProof, g_with_proof, diagram);
							});
						var _v6 = $author$project$GraphDefs$selectedIncompleteDiagram(modelGraph);
						if (_v6.$ === 'Nothing') {
							var _v7 = $author$project$GraphDefs$selectedChain(modelGraph);
							switch (_v7.$) {
								case 'JustChain':
									var _v8 = _v7.a;
									var newGraph = _v8.a;
									var diagram = _v8.b;
									return A2(registerAndCreateProof, newGraph, diagram);
								case 'NoClearOrientation':
									return failWith('No clear orientation of the proof.');
								default:
									var _v9 = $author$project$GraphDefs$getSelectedProofDiagram(modelGraph);
									switch (_v9.$) {
										case 'NoProofNode':
											return failWith('No proof node selected.');
										case 'NoDiagram':
											return failWith('no diagram around selected proof node.');
										default:
											var diagram = _v9.a.diagram;
											var validGraph = function () {
												var _v10 = $author$project$GraphDefs$selectedNode(modelGraph);
												if (_v10.$ === 'Nothing') {
													return modelGraph;
												} else {
													var n = _v10.a;
													return $author$project$GraphDefs$isProofLabel(n.label) ? A3(
														$author$project$Polygraph$updateNode,
														n.id,
														function (l) {
															return _Utils_update(
																l,
																{
																	isCoqValidated: true,
																	label: $author$project$GraphDefs$makeProofString(script)
																});
														},
														modelGraph) : modelGraph;
												}
											}();
											return A2(registerProof, validGraph, diagram);
									}
							}
						} else {
							var d = _v6.a;
							return A2(registerAndCreateProof, modelGraph, d);
						}
					case 'EltDoubleClick':
						var n = msg.a;
						var e = msg.b;
						return $author$project$Model$noCmd(
							A3(
								$author$project$Model$initialise_RenameMode,
								true,
								_List_fromArray(
									[n]),
								model));
					case 'PasteGraph':
						var gi = msg.a;
						if (!model.mouseOnCanvas) {
							return $author$project$Model$noCmd(model);
						} else {
							var _v15 = A2(
								$elm_community$list_extra$List$Extra$find,
								function ($) {
									return $.active;
								},
								gi.tabs);
							if (_v15.$ === 'Nothing') {
								return $author$project$Model$noCmd(model);
							} else {
								var tab = _v15.a;
								return $author$project$Model$noCmd(
									A3(
										$author$project$Modes$Move$initialise,
										false,
										$author$project$Modes$FreeMove,
										A2(
											$author$project$Model$setSaveGraph,
											model,
											A2(
												$author$project$Polygraph$disjointUnion,
												$author$project$GraphDefs$clearSelection(modelGraph),
												$author$project$GraphDefs$selectAll(tab.graph)).extendedGraph)));
							}
						}
					case 'KeyChanged':
						if (msg.a) {
							if ((msg.c.$ === 'Character') && ('g' === msg.c.a.valueOf())) {
								var pressTimeoutMs = 100;
								return _Utils_Tuple2(
									A3($author$project$Modes$Move$initialise, true, $author$project$Modes$UndefinedMove, model),
									A2(
										$elm$core$Task$attempt,
										$elm$core$Basics$always($author$project$Msg$PressTimeout),
										$elm$core$Process$sleep(pressTimeoutMs)));
							} else {
								break _v0$47;
							}
						} else {
							if (msg.c.$ === 'Control') {
								switch (msg.c.a) {
									case 'Escape':
										return clearSel;
									case 'Delete':
										return $author$project$Model$noCmd(
											A2(
												$author$project$Model$setSaveGraph,
												model,
												$author$project$GraphDefs$removeSelected(modelGraph)));
									default:
										break _v0$46;
								}
							} else {
								switch (msg.c.a.valueOf()) {
									case '?':
										return $author$project$Model$noCmd(
											$author$project$Model$toggleHelpOverlay(model));
									case 'w':
										return clearSel;
									case 'e':
										return $author$project$Model$noCmd(
											$author$project$Main$initialiseEnlarge(model));
									case 'E':
										return _Utils_Tuple2(
											model,
											$author$project$Main$promptEquation(_Utils_Tuple0));
									case 'a':
										var k = msg.b;
										return (!k.ctrl) ? $author$project$Modes$NewArrow$initialise(model) : $author$project$Model$noCmd(
											A2(
												$author$project$Model$setActiveGraph,
												model,
												$author$project$GraphDefs$selectAll(modelGraph)));
									case 'd':
										return $author$project$Model$noCmd(
											_Utils_update(
												model,
												{mode: $author$project$Modes$DebugMode}));
									case 'i':
										return $author$project$Model$noCmd(
											function () {
												var _v1 = $author$project$GraphDefs$selectedEdgeId(modelGraph);
												if (_v1.$ === 'Just') {
													var id = _v1.a;
													return A2(
														$author$project$Model$setSaveGraph,
														model,
														A2($author$project$Polygraph$invertEdge, id, modelGraph));
												} else {
													return model;
												}
											}());
									case 'L':
										return $author$project$Model$noCmd(
											A2($author$project$Main$selectLoop, true, model));
									case 'H':
										return $author$project$Model$noCmd(
											A2($author$project$Main$selectLoop, false, model));
									case 'G':
										return generateProof(false);
									case 'T':
										return generateProof(true);
									case 'S':
										return $author$project$Model$noCmd(
											A2(
												$author$project$Model$setActiveGraph,
												model,
												A2($author$project$GraphDefs$selectSurroundingDiagram, model.mousePos, modelGraph)));
									case 'C':
										var k = msg.b;
										return $author$project$Model$noCmd(
											$author$project$Modes$CutHead$initialise(model));
									case 'c':
										var k = msg.b;
										if (k.ctrl) {
											return $author$project$Model$noCmd(model);
										} else {
											var ids = A2(
												$elm$core$List$map,
												function ($) {
													return $.id;
												},
												A2(
													$elm$core$List$filter,
													A2(
														$elm$core$Basics$composeR,
														function ($) {
															return $.label;
														},
														$author$project$GraphDefs$isNormal),
													$author$project$GraphDefs$selectedEdges(modelGraph)));
											return $author$project$Model$noCmd(
												_Utils_eq(ids, _List_Nil) ? model : _Utils_update(
													model,
													{
														mode: $author$project$Modes$ColorMode(ids)
													}));
										}
									case 'v':
										var cmd = function () {
											var _v2 = $author$project$GraphDefs$selectedIncompleteDiagram(modelGraph);
											if (_v2.$ === 'Nothing') {
												var _v3 = $author$project$GraphDefs$selectedChain(modelGraph);
												switch (_v3.$) {
													case 'NoClearOrientation':
														return $author$project$Main$alert('Not clear how to orient the equation (closing the chain should not overlap with other arrows)');
													case 'NoChain':
														var _v4 = $author$project$GraphDefs$getSelectedProofDiagram(modelGraph);
														switch (_v4.$) {
															case 'NoProofNode':
																return $author$project$Main$alert('Selected subdiagram or proof node not found.');
															case 'NoDiagram':
																return $author$project$Main$alert('No diagram found around node.');
															default:
																var proof = _v4.a.proof;
																var diagram = _v4.a.diagram;
																return $author$project$Main$applyProof(
																	{
																		script: proof,
																		statement: $author$project$GraphProof$statementToString(diagram)
																	});
														}
													default:
														var _v5 = _v3.a;
														var d = _v5.b;
														return $author$project$Main$requestProof(
															{
																script: 'reflexivity.',
																statement: $author$project$GraphProof$statementToString(d)
															});
												}
											} else {
												var d = _v2.a;
												var gp = $author$project$GraphDefs$toProofGraph(modelGraph);
												var proof = A2(
													$elm$core$Maybe$withDefault,
													'',
													A3(
														$author$project$GraphProof$findProofOfDiagram,
														gp,
														$author$project$Polygraph$nodes(gp),
														d));
												return $author$project$Main$requestProof(
													{
														script: proof,
														statement: $author$project$GraphProof$statementToString(d)
													});
											}
										}();
										return _Utils_Tuple2(model, cmd);
									case 'q':
										return _Utils_Tuple2(
											model,
											$author$project$Main$promptFindReplace(_Utils_Tuple0));
									case 'Q':
										return _Utils_Tuple2(
											model,
											$author$project$Main$quicksaveGraph(
												{
													_export: $author$project$Main$makeExports(model),
													feedback: true,
													info: $author$project$Main$toJsGraphInfo(model)
												}));
									case 'R':
										return $author$project$Model$noCmd(
											$author$project$Main$initialise_Resize(model));
									case 'r':
										return $author$project$Main$rename(model);
									case 's':
										return $author$project$Modes$Square$initialise(model);
									case 't':
										return A2(createPoint, false, '');
									case 'p':
										return A2(createPoint, true, '');
									case '/':
										return $author$project$Modes$SplitArrow$initialise(model);
									case 'x':
										return $author$project$Model$noCmd(
											A2(
												$author$project$Model$setSaveGraph,
												model,
												$author$project$GraphDefs$removeSelected(modelGraph)));
									case 'X':
										var latex = A2(
											$author$project$Tikz$graphToTikz,
											$author$project$Model$getActiveSizeGrid(model),
											$author$project$GraphDefs$selectedGraph(modelGraph));
										var cmd = (latex === '') ? $author$project$Main$alert('No diagram found!') : $author$project$Main$latexToClipboard(latex);
										return _Utils_Tuple2(model, cmd);
									case 'V':
										var s = A2(
											$author$project$Main$svgExport,
											model,
											$author$project$GraphDefs$selectedGraph(modelGraph));
										return _Utils_Tuple2(
											model,
											$author$project$Main$generateSvg(s));
									case 'f':
										return $author$project$Model$noCmd(
											function () {
												var isSel = $author$project$GraphDefs$fieldSelect(modelGraph);
												var _v13 = $author$project$GraphDefs$selectedNodes(modelGraph);
												if (!_v13.b) {
													return model;
												} else {
													return A2(
														$author$project$Model$setSaveGraph,
														model,
														A3(
															$author$project$Polygraph$map,
															F2(
																function (_v14, n) {
																	return isSel(n) ? A2($author$project$GraphDefs$snapNodeToGrid, sizeGrid, n) : n;
																}),
															$elm$core$Basics$always($elm$core$Basics$identity),
															modelGraph));
												}
											}());
									case 'h':
										return move($elm$core$Basics$pi);
									case 'j':
										return move($elm$core$Basics$pi / 2);
									case 'k':
										return move((3 * $elm$core$Basics$pi) / 2);
									case 'l':
										return move(0);
									case 'u':
										var f = $author$project$GraphDefs$fieldSelect(modelGraph);
										var connectedGraph = A3($author$project$Polygraph$connectedClosure, f, f, modelGraph);
										var isIncomplete = A3(
											$author$project$Polygraph$any,
											function (_v20) {
												var n = _v20.n;
												var isIn = _v20.isIn;
												return !_Utils_eq(
													f(n),
													isIn);
											},
											function (_v21) {
												var e = _v21.e;
												var isIn = _v21.isIn;
												return !_Utils_eq(
													f(e),
													isIn);
											},
											connectedGraph);
										var newGraph = function () {
											if (isIncomplete) {
												return A3(
													$author$project$Polygraph$map,
													F2(
														function (_v16, _v17) {
															var n = _v17.n;
															var isIn = _v17.isIn;
															return _Utils_update(
																n,
																{selected: isIn});
														}),
													F2(
														function (_v18, _v19) {
															var e = _v19.e;
															var isIn = _v19.isIn;
															return _Utils_update(
																e,
																{selected: isIn});
														}),
													connectedGraph);
											} else {
												var selectedGraph = $author$project$GraphDefs$selectedGraph(modelGraph);
												var isIn = function (p) {
													return !_Utils_eq(
														A2($author$project$GraphDefs$getSurroundingDiagrams, p, selectedGraph),
														_List_Nil);
												};
												var proofNodes = A2(
													$elm$core$List$map,
													$author$project$Polygraph$nodeMap(
														function (n) {
															return _Utils_update(
																n,
																{selected: true});
														}),
													A2(
														$elm$core$List$filter,
														A2(
															$elm$core$Basics$composeR,
															function ($) {
																return $.label;
															},
															A2(
																$elm$core$Basics$composeR,
																function ($) {
																	return $.pos;
																},
																isIn)),
														$author$project$GraphDefs$getProofNodes(modelGraph)));
												return A2($author$project$Polygraph$updateNodes, proofNodes, modelGraph);
											}
										}();
										return $author$project$Model$noCmd(
											A2($author$project$Model$setActiveGraph, model, newGraph));
									case 'z':
										var k = msg.b;
										return k.ctrl ? $author$project$Model$noCmd(
											$author$project$Model$undo(model)) : $author$project$Model$noCmd(model);
									case '+':
										var k = msg.b;
										return increaseZBy(1);
									case '<':
										var k = msg.b;
										return increaseZBy(-1);
									default:
										break _v0$46;
								}
							}
						}
					default:
						break _v0$47;
				}
			}
			return $author$project$Model$noCmd(model);
		}
		var k = msg.c;
		return $author$project$Model$noCmd(
			function () {
				var _v22 = A3(
					$author$project$GraphDefs$updateStyleEdges,
					$author$project$ArrowStyle$keyMaybeUpdateStyle(k),
					$author$project$GraphDefs$selectedEdges(modelGraph),
					modelGraph);
				if (_v22.$ === 'Nothing') {
					return model;
				} else {
					var g = _v22.a;
					return A2($author$project$Model$setSaveGraph, model, g);
				}
			}());
	});
var $author$project$Main$enlargeGraph = F2(
	function (m, state) {
		var modelGraph = $author$project$Model$getActiveGraph(m);
		var sizeGrid = $author$project$Model$getActiveSizeGrid(m);
		var _v0 = function () {
			var _v1 = state.pos;
			if (_v1.$ === 'InputPosKeyboard') {
				var p = _v1.a;
				return A2($author$project$InputPosition$deltaKeyboardPos, sizeGrid, p);
			} else {
				return A2($author$project$Geometry$Point$subtract, m.mousePos, state.orig);
			}
		}();
		var ox = _v0.a;
		var oy = _v0.b;
		var diags = A2($author$project$GraphDefs$getSurroundingDiagrams, state.orig, modelGraph);
		var edgesId = A2(
			$elm$core$List$concatMap,
			A2($elm$core$Basics$composeR, $author$project$GraphProof$edgesOfDiag, $elm_community$intdict$IntDict$keys),
			diags);
		var gcon = A3(
			$author$project$Polygraph$connectedClosure,
			$elm$core$Basics$identity,
			$elm$core$Basics$identity,
			A4(
				$author$project$Polygraph$updateList,
				edgesId,
				$elm$core$Basics$always(true),
				$elm$core$Basics$always(true),
				A3(
					$author$project$Polygraph$map,
					F2(
						function (_v4, _v5) {
							return false;
						}),
					F2(
						function (_v6, _v7) {
							return false;
						}),
					modelGraph)));
		var noSurround = !A3(
			$author$project$Polygraph$any,
			function ($) {
				return $.isIn;
			},
			function ($) {
				return $.isIn;
			},
			gcon);
		var _v2 = state.orig;
		var xi = _v2.a;
		var yi = _v2.b;
		var mkp = F4(
			function (id, n, i, o) {
				return ((_Utils_cmp(n, i) > -1) && (noSurround || A2(
					$elm$core$Maybe$withDefault,
					false,
					A4(
						$author$project$Polygraph$get,
						id,
						function ($) {
							return $.isIn;
						},
						function ($) {
							return $.isIn;
						},
						gcon)))) ? (n + o) : n;
			});
		var mapNode = F2(
			function (id, n) {
				var _v3 = n.pos;
				var nx = _v3.a;
				var ny = _v3.b;
				return _Utils_update(
					n,
					{
						pos: _Utils_Tuple2(
							A4(mkp, id, nx, xi, ox),
							A4(mkp, id, ny, yi, oy))
					});
			});
		var g = A3(
			$author$project$Polygraph$map,
			mapNode,
			$elm$core$Basics$always($elm$core$Basics$identity),
			modelGraph);
		return g;
	});
var $author$project$Main$update_Enlarge = F3(
	function (msg, state, model) {
		var fin = $author$project$Model$switch_Default(
			A2(
				$author$project$Model$setSaveGraph,
				model,
				A2($author$project$Main$enlargeGraph, model, state)));
		_v0$4:
		while (true) {
			switch (msg.$) {
				case 'MouseUp':
					return fin;
				case 'KeyChanged':
					if (!msg.a) {
						if (msg.c.$ === 'Character') {
							if ('?' === msg.c.a.valueOf()) {
								return $author$project$Model$noCmd(
									$author$project$Model$toggleHelpOverlay(model));
							} else {
								break _v0$4;
							}
						} else {
							switch (msg.c.a) {
								case 'Escape':
									return $author$project$Model$switch_Default(model);
								case 'Enter':
									return fin;
								default:
									break _v0$4;
							}
						}
					} else {
						break _v0$4;
					}
				default:
					break _v0$4;
			}
		}
		return $author$project$Model$noCmd(
			_Utils_update(
				model,
				{
					mode: $author$project$Modes$EnlargeMode(
						_Utils_update(
							state,
							{
								pos: A2($author$project$InputPosition$update, state.pos, msg)
							}))
				}));
	});
var $elm$browser$Browser$Dom$blur = _Browser_call('blur');
var $elm$parser$Parser$deadEndsToString = function (deadEnds) {
	return 'TODO deadEndsToString';
};
var $author$project$GraphProof$isEmptyBranch = function (l) {
	if (l.b && (!l.b.b)) {
		var e = l.a;
		return (e.label.label === '') ? $elm$core$Maybe$Just(e.id) : $elm$core$Maybe$Nothing;
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Main$graphQuickInput = F2(
	function (model, ch) {
		var modelGraph = $author$project$Model$getActiveGraph(model);
		var sizeGrid = $author$project$Model$getActiveSizeGrid(model);
		if (ch.$ === 'Nothing') {
			return modelGraph;
		} else {
			var _v1 = ch.a;
			var eq1 = _v1.a;
			var eq2 = _v1.b;
			var od = $author$project$GraphDefs$selectedIncompleteDiagram(modelGraph);
			var _default = A3(
				$author$project$Main$graphDrawingChain,
				sizeGrid,
				modelGraph,
				_Utils_Tuple2(eq1, eq2));
			var split = F2(
				function (l, edges) {
					return A2(
						$elm$core$Maybe$map,
						A2($author$project$QuickInput$splitWithChain, modelGraph, edges),
						$author$project$GraphProof$isEmptyBranch(l));
				});
			if (od.$ === 'Nothing') {
				return _default;
			} else {
				var d = od.a;
				return A2(
					$elm$core$Maybe$withDefault,
					_default,
					A2(
						$elm_community$maybe_extra$Maybe$Extra$or,
						A2(split, d.lhs, eq2),
						A2(split, d.rhs, eq2)));
			}
		}
	});
var $author$project$HtmlDefs$quickInputId = 'quickinput';
var $author$project$Msg$unfocusId = function (s) {
	return A2(
		$elm$core$Task$attempt,
		function (_v0) {
			return $author$project$Msg$noOp;
		},
		$elm$browser$Browser$Dom$blur(s));
};
var $author$project$Main$update_QuickInput = F3(
	function (ch, msg, model) {
		var finalRet = function (chain) {
			return _Utils_Tuple2(
				A2(
					$author$project$Model$setSaveGraph,
					_Utils_update(
						model,
						{mode: $author$project$Modes$DefaultMode, quickInput: ''}),
					A2($author$project$Main$graphQuickInput, model, chain)),
				$elm$core$Platform$Cmd$batch(
					_List_fromArray(
						[
							$author$project$HtmlDefs$computeLayout(_Utils_Tuple0),
							$author$project$Msg$unfocusId($author$project$HtmlDefs$quickInputId)
						])));
		};
		_v0$3:
		while (true) {
			switch (msg.$) {
				case 'KeyChanged':
					if ((!msg.a) && (msg.c.$ === 'Control')) {
						switch (msg.c.a) {
							case 'Escape':
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{mode: $author$project$Modes$DefaultMode}),
									A2(
										$elm$core$Task$attempt,
										function (_v1) {
											return $author$project$Msg$noOp;
										},
										$elm$browser$Browser$Dom$blur($author$project$HtmlDefs$quickInputId)));
							case 'Enter':
								return finalRet(ch);
							default:
								break _v0$3;
						}
					} else {
						break _v0$3;
					}
				case 'QuickInput':
					var _final = msg.a;
					var s = msg.b;
					var _v2 = function () {
						var _v3 = A2($elm$parser$Parser$run, $author$project$QuickInput$equalityParser, s);
						if (_v3.$ === 'Ok') {
							var l = _v3.a;
							return _Utils_Tuple2(
								'ok',
								$elm$core$Maybe$Just(l));
						} else {
							var e = _v3.a;
							return _Utils_Tuple2(
								$elm$parser$Parser$deadEndsToString(e),
								$elm$core$Maybe$Nothing);
						}
					}();
					var statusMsg = _v2.a;
					var chain = _v2.b;
					return _final ? finalRet(chain) : $author$project$Model$noCmd(
						_Utils_update(
							model,
							{
								mode: $author$project$Modes$QuickInputMode(chain),
								statusMsg: statusMsg
							}));
				default:
					break _v0$3;
			}
		}
		return $author$project$Model$noCmd(model);
	});
var $author$project$Geometry$makeRect = F2(
	function (p1, p2) {
		return $author$project$Geometry$rectEnveloppe(
			_List_fromArray(
				[p1, p2]));
	});
var $author$project$Main$selectGraph = F3(
	function (m, orig, keep) {
		var modelGraph = $author$project$Model$getActiveGraph(m);
		var selRect = A2($author$project$Geometry$makeRect, orig, m.mousePos);
		var g = keep ? modelGraph : $author$project$GraphDefs$clearSelection(modelGraph);
		var isSel = function (n) {
			return A2($author$project$Geometry$isInRect, selRect, n.pos);
		};
		return A2($author$project$GraphDefs$addNodesSelection, g, isSel);
	});
var $author$project$Main$update_RectSelect = F4(
	function (msg, orig, keep, model) {
		_v0$2:
		while (true) {
			switch (msg.$) {
				case 'KeyChanged':
					if (((!msg.a) && (msg.c.$ === 'Control')) && (msg.c.a === 'Escape')) {
						return $author$project$Model$switch_Default(model);
					} else {
						break _v0$2;
					}
				case 'MouseClick':
					return _Utils_eq(model.mousePos, orig) ? $author$project$Model$switch_Default(
						$author$project$Main$selectByClick(model)) : $author$project$Model$switch_Default(
						A2(
							$author$project$Model$setActiveGraph,
							model,
							A3($author$project$Main$selectGraph, model, orig, keep)));
				default:
					break _v0$2;
			}
		}
		return $author$project$Model$noCmd(model);
	});
var $author$project$Main$graph_RenameMode = F2(
	function (l, m) {
		var g = $author$project$Model$getActiveGraph(m);
		if (!l.b) {
			return g;
		} else {
			var _v1 = l.a;
			var id = _v1.a;
			var s = _v1.b;
			return A4(
				$author$project$Polygraph$update,
				id,
				function (n) {
					return _Utils_update(
						n,
						{isCoqValidated: false, label: s});
				},
				$author$project$GraphDefs$mapNormalEdge(
					function (e) {
						return _Utils_update(
							e,
							{label: s});
					}),
				g);
		}
	});
var $author$project$Main$next_RenameMode = F4(
	function (finish, save, labels, model) {
		var g = A2($author$project$Main$graph_RenameMode, labels, model);
		var m2 = save ? A2($author$project$Model$setSaveGraph, model, g) : A2($author$project$Model$setActiveGraph, model, g);
		if (finish) {
			return _Utils_update(
				m2,
				{mode: $author$project$Modes$DefaultMode});
		} else {
			if (!labels.b) {
				return _Utils_update(
					m2,
					{mode: $author$project$Modes$DefaultMode});
			} else {
				if (!labels.b.b) {
					return _Utils_update(
						m2,
						{mode: $author$project$Modes$DefaultMode});
				} else {
					var q = labels.b;
					return _Utils_update(
						m2,
						{
							mode: A2($author$project$Modes$RenameMode, save, q)
						});
				}
			}
		}
	});
var $author$project$Main$update_RenameMode = F4(
	function (save, labels, msg, model) {
		var edit_label = function (s) {
			return $author$project$Model$noCmd(
				_Utils_update(
					model,
					{
						mode: A2(
							$author$project$Modes$RenameMode,
							save,
							function () {
								if (labels.b) {
									var _v2 = labels.a;
									var id = _v2.a;
									var q = labels.b;
									return A2(
										$elm$core$List$cons,
										_Utils_Tuple2(id, s),
										q);
								} else {
									return labels;
								}
							}())
					}));
		};
		_v0$5:
		while (true) {
			switch (msg.$) {
				case 'KeyChanged':
					if ((!msg.a) && (msg.c.$ === 'Control')) {
						switch (msg.c.a) {
							case 'Escape':
								return $author$project$Model$switch_Default(model);
							case 'Enter':
								return $author$project$Model$noCmd(
									A4($author$project$Main$next_RenameMode, true, save, labels, model));
							case 'Tab':
								return $author$project$Model$noCmd(
									A4($author$project$Main$next_RenameMode, false, save, labels, model));
							default:
								break _v0$5;
						}
					} else {
						break _v0$5;
					}
				case 'NodeLabelEdit':
					var s = msg.b;
					return edit_label(s);
				case 'EdgeLabelEdit':
					var s = msg.b;
					return edit_label(s);
				default:
					break _v0$5;
			}
		}
		return $author$project$Model$noCmd(model);
	});
var $author$project$Main$graphResize = F2(
	function (st, m) {
		var modelGraph = $author$project$Model$getActiveGraph(m);
		var sizeGrid = $author$project$Model$getActiveSizeGrid(m);
		if (st.onlyGrid) {
			return modelGraph;
		} else {
			var ratio = st.sizeGrid / sizeGrid;
			return A3(
				$author$project$Polygraph$map,
				F2(
					function (_v0, n) {
						return _Utils_update(
							n,
							{
								pos: A2($author$project$Geometry$Point$resize, ratio, n.pos)
							});
					}),
				function (_v1) {
					return $elm$core$Basics$identity;
				},
				modelGraph);
		}
	});
var $author$project$Model$maxSizeGrid = 500;
var $author$project$Model$minSizeGrid = 2;
var $author$project$Main$update_Resize = F3(
	function (st, msg, m) {
		var finalise = function (_v1) {
			var m2 = $author$project$Model$pushHistory(m);
			return $author$project$Model$noCmd(
				A2(
					$author$project$Model$setActiveGraph,
					A2(
						$author$project$Model$setActiveSizeGrid,
						_Utils_update(
							m2,
							{mode: $author$project$Modes$DefaultMode}),
						st.sizeGrid),
					A2($author$project$Main$graphResize, st, m)));
		};
		var increment = 10;
		var newState = function (st2) {
			return $author$project$Model$noCmd(
				_Utils_update(
					m,
					{
						mode: $author$project$Modes$ResizeMode(st2)
					}));
		};
		var newSize = function (si) {
			var s = A2(
				$elm$core$Basics$max,
				$author$project$Model$minSizeGrid,
				A2($elm$core$Basics$min, $author$project$Model$maxSizeGrid, si));
			return newState(
				_Utils_update(
					st,
					{sizeGrid: s}));
		};
		_v0$7:
		while (true) {
			switch (msg.$) {
				case 'KeyChanged':
					if (!msg.a) {
						if (msg.c.$ === 'Control') {
							switch (msg.c.a) {
								case 'Escape':
									return _Utils_Tuple2(
										_Utils_update(
											m,
											{mode: $author$project$Modes$DefaultMode}),
										$elm$core$Platform$Cmd$none);
								case 'Enter':
									return finalise(_Utils_Tuple0);
								default:
									break _v0$7;
							}
						} else {
							switch (msg.c.a.valueOf()) {
								case '?':
									return $author$project$Model$noCmd(
										$author$project$Model$toggleHelpOverlay(m));
								case 'k':
									return newSize(st.sizeGrid + increment);
								case 'j':
									return newSize(st.sizeGrid - increment);
								case 'g':
									return newState(
										_Utils_update(
											st,
											{onlyGrid: !st.onlyGrid}));
								default:
									break _v0$7;
							}
						}
					} else {
						break _v0$7;
					}
				case 'SizeGrid':
					var s = msg.a;
					return newSize(s);
				default:
					break _v0$7;
			}
		}
		return $author$project$Model$noCmd(m);
	});
var $author$project$Main$update = F2(
	function (msg, modeli) {
		var model = function () {
			switch (msg.$) {
				case 'SwitchTab':
					var i = msg.a;
					return A2(
						$author$project$Model$activateNthTab,
						_Utils_update(
							modeli,
							{mode: $author$project$Modes$DefaultMode}),
						i);
				case 'RenameTab':
					var s = msg.a;
					return A2(
						$author$project$Model$renameActiveTab,
						_Utils_update(
							modeli,
							{mode: $author$project$Modes$DefaultMode}),
						s);
				case 'RemoveTab':
					return $author$project$Model$removeActiveTabs(
						_Utils_update(
							modeli,
							{mode: $author$project$Modes$DefaultMode}));
				case 'NewTab':
					return A2(
						$author$project$Model$createNewTab,
						_Utils_update(
							modeli,
							{mode: $author$project$Modes$DefaultMode}),
						$author$project$Model$nextTabName(modeli));
				case 'DuplicateTab':
					return A2(
						$author$project$Model$duplicateTab,
						_Utils_update(
							modeli,
							{mode: $author$project$Modes$DefaultMode}),
						$author$project$Model$nextTabName(modeli));
				case 'TabMoveLeft':
					return $author$project$Model$moveTabLeft(
						_Utils_update(
							modeli,
							{mode: $author$project$Modes$DefaultMode}));
				case 'TabMoveRight':
					return $author$project$Model$moveTabRight(
						_Utils_update(
							modeli,
							{mode: $author$project$Modes$DefaultMode}));
				case 'FileName':
					var s = msg.a;
					return _Utils_update(
						modeli,
						{fileName: s});
				case 'KeyChanged':
					var r = msg.b;
					return _Utils_update(
						modeli,
						{specialKeys: r});
				case 'MouseMoveRaw':
					var keys = msg.b;
					return _Utils_update(
						modeli,
						{mouseOnCanvas: true, specialKeys: keys});
				case 'MouseMove':
					var p = msg.a;
					return _Utils_update(
						modeli,
						{mousePos: p});
				case 'MouseDown':
					var e = msg.a;
					return _Utils_update(
						modeli,
						{specialKeys: e.keys});
				case 'MouseLeaveCanvas':
					return _Utils_update(
						modeli,
						{mouseOnCanvas: false});
				case 'QuickInput':
					var _final = msg.a;
					var s = msg.b;
					return _Utils_update(
						modeli,
						{
							mode: $author$project$Modes$QuickInputMode($elm$core$Maybe$Nothing),
							quickInput: s
						});
				case 'LatexPreambleEdit':
					var s = msg.a;
					return _Utils_update(
						modeli,
						{latexPreamble: s});
				default:
					return modeli;
			}
		}();
		var modelGraph = $author$project$Model$getActiveGraph(model);
		var sizeGrid = $author$project$Model$getActiveSizeGrid(model);
		switch (msg.$) {
			case 'SetFirstTabEquation':
				var s = msg.a;
				return A2($author$project$Main$setFirstTabEquationPerform, modeli, s);
			case 'Save':
				return _Utils_Tuple2(
					model,
					$author$project$Main$saveGraph(
						{
							_export: $author$project$Main$makeExports(model),
							graph: $author$project$Main$toJsGraphInfo(model)
						}));
			case 'SaveGridSize':
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{defaultGridSize: sizeGrid}),
					$author$project$Main$saveGridSize(sizeGrid));
			case 'OptimalGridSize':
				var selGraph = $author$project$GraphDefs$selectedGraph(modelGraph);
				var _v1 = $author$project$Polygraph$nodes(selGraph);
				if ((_v1.b && _v1.b.b) && (!_v1.b.b.b)) {
					var n1 = _v1.a;
					var _v2 = _v1.b;
					var n2 = _v2.a;
					var _v3 = A2($author$project$Geometry$Point$subtract, n1.label.pos, n2.label.pos);
					var x = _v3.a;
					var y = _v3.b;
					var newGridSize = $elm$core$Basics$round(
						A2(
							$elm$core$Basics$max,
							$elm$core$Basics$abs(x),
							$elm$core$Basics$abs(y)));
					var m2 = $author$project$Model$pushHistory(model);
					return $author$project$Model$noCmd(
						A2($author$project$Model$setActiveSizeGrid, m2, newGridSize));
				} else {
					return $author$project$Model$noCmd(model);
				}
			case 'MinuteTick':
				return model.autoSave ? _Utils_Tuple2(
					model,
					$author$project$Main$quicksaveGraph(
						{
							_export: $author$project$Main$makeExports(model),
							feedback: false,
							info: $author$project$Main$toJsGraphInfo(model)
						})) : $author$project$Model$noCmd(model);
			case 'Clear':
				var scenario = msg.a.scenario;
				var preamble = msg.a.preamble;
				var modelf = $author$project$Model$createModel(model.defaultGridSize);
				var or = F2(
					function (s1, s2) {
						return (s1 === '') ? s2 : s1;
					});
				return $author$project$Model$noCmd(
					_Utils_update(
						modelf,
						{
							latexPreamble: A2(or, preamble, modelf.latexPreamble),
							scenario: scenario
						}));
			case 'ToggleHideGrid':
				return $author$project$Model$noCmd(
					_Utils_update(
						model,
						{hideGrid: !model.hideGrid}));
			case 'ToggleAutosave':
				return $author$project$Model$noCmd(
					_Utils_update(
						model,
						{autoSave: !model.autoSave}));
			case 'ExportQuiver':
				return _Utils_Tuple2(
					model,
					$author$project$Main$exportQuiver(
						A2(
							$author$project$GraphDefs$exportQuiver,
							sizeGrid,
							$author$project$GraphDefs$selectedGraph(modelGraph))));
			case 'MouseMoveRaw':
				var v = msg.a;
				return _Utils_Tuple2(
					model,
					$author$project$Main$onMouseMove(v));
			case 'NodeRendered':
				var n = msg.a;
				var _v4 = msg.b;
				var x = _v4.a;
				var y = _v4.b;
				var dims = _Utils_Tuple2(
					x,
					(!y) ? 12 : y);
				return $author$project$Model$noCmd(
					A2(
						$author$project$Model$updateActiveGraph,
						model,
						A2(
							$author$project$Polygraph$updateNode,
							n,
							function (l) {
								return _Utils_update(
									l,
									{
										dims: $elm$core$Maybe$Just(dims)
									});
							})));
			case 'EdgeRendered':
				var e = msg.a;
				var _v5 = msg.b;
				var x = _v5.a;
				var y = _v5.b;
				var dims = _Utils_Tuple2(
					x,
					(!y) ? 12 : y);
				return $author$project$Model$noCmd(
					A2(
						$author$project$Model$updateActiveGraph,
						model,
						A2(
							$author$project$GraphDefs$updateNormalEdge,
							e,
							function (l) {
								return _Utils_update(
									l,
									{
										dims: $elm$core$Maybe$Just(dims)
									});
							})));
			case 'Do':
				var cmd = msg.a;
				return _Utils_Tuple2(model, cmd);
			case 'SimpleMsg':
				var s = msg.a;
				var modelf = $author$project$Model$createModel(model.defaultGridSize);
				return $author$project$Model$noCmd(
					_Utils_update(
						modelf,
						{scenario: $author$project$Msg$SimpleScenario, statusMsg: s}));
			case 'SetFirstTab':
				var g = msg.a;
				var tab = $author$project$Model$getActiveTabInTabs(g.tabs);
				return _Utils_Tuple2(
					A2(
						$author$project$Model$updateFirstTab,
						model,
						function (t) {
							return _Utils_update(
								tab,
								{active: t.active, title: t.title});
						}),
					$author$project$HtmlDefs$computeLayout(_Utils_Tuple0));
			case 'Loaded':
				var g = msg.a;
				var scenario = $author$project$Msg$scenarioOfString(g.scenario);
				var m = $author$project$Model$clearHistory(
					A2(
						$author$project$Model$updateWithGraphInfo,
						_Utils_update(
							model,
							{mode: $author$project$Modes$DefaultMode, scenario: scenario}),
						g.graph));
				var m2 = (!_Utils_eq(scenario, $author$project$Msg$Exercise1)) ? m : _Utils_update(
					m,
					{
						tabs: A2(
							$elm$core$List$map,
							function (t) {
								return _Utils_update(
									t,
									{
										graph: A3(
											$author$project$Polygraph$map,
											F2(
												function (_v6, n) {
													return _Utils_update(
														n,
														{
															selected: A2($elm$core$String$contains, '\\bullet', n.label)
														});
												}),
											$elm$core$Basics$always($elm$core$Basics$identity),
											t.graph)
									});
							},
							m.tabs)
					});
				return _Utils_Tuple2(
					m2,
					$author$project$HtmlDefs$computeLayout(_Utils_Tuple0));
			case 'FindReplace':
				var req = msg.a;
				return $author$project$Model$noCmd(
					A2(
						$author$project$Model$setSaveGraph,
						model,
						A2($author$project$GraphDefs$findReplaceInSelected, modelGraph, req)));
			default:
				var _v7 = model.mode;
				switch (_v7.$) {
					case 'QuickInputMode':
						var c = _v7.a;
						return A3($author$project$Main$update_QuickInput, c, msg, model);
					case 'DefaultMode':
						return A2($author$project$Main$update_DefaultMode, msg, model);
					case 'RectSelect':
						var orig = _v7.a;
						return A4($author$project$Main$update_RectSelect, msg, orig, model.specialKeys.shift, model);
					case 'EnlargeMode':
						var state = _v7.a;
						return A3($author$project$Main$update_Enlarge, msg, state, model);
					case 'NewArrow':
						var astate = _v7.a;
						return A3($author$project$Modes$NewArrow$update, astate, msg, model);
					case 'PullshoutMode':
						var astate = _v7.a;
						return A3($author$project$Modes$Pullshout$update, astate, msg, model);
					case 'RenameMode':
						var b = _v7.a;
						var l = _v7.b;
						return A4($author$project$Main$update_RenameMode, b, l, msg, model);
					case 'Move':
						var s = _v7.a;
						return A3($author$project$Modes$Move$update, msg, s, model);
					case 'DebugMode':
						return A2($author$project$Main$update_DebugMode, msg, model);
					case 'SquareMode':
						var state = _v7.a;
						return A3($author$project$Modes$Square$update, state, msg, model);
					case 'SplitArrow':
						var state = _v7.a;
						return A3($author$project$Modes$SplitArrow$update, state, msg, model);
					case 'CutHead':
						var state = _v7.a;
						return A3($author$project$Modes$CutHead$update, state, msg, model);
					case 'ResizeMode':
						var s = _v7.a;
						return A3($author$project$Main$update_Resize, s, msg, model);
					default:
						var ids = _v7.a;
						return A3($author$project$Main$update_Color, ids, msg, model);
				}
		}
	});
var $author$project$Main$updateIntercept = F2(
	function (msg, modeli) {
		var _v0 = modeli.scenario;
		if (_v0.$ === 'Exercise1') {
			var nothing = $author$project$Model$noCmd(modeli);
			switch (msg.$) {
				case 'MouseMove':
					return nothing;
				case 'MouseDown':
					return nothing;
				case 'NodeClick':
					return nothing;
				case 'EdgeClick':
					return nothing;
				case 'EltDoubleClick':
					return nothing;
				case 'MouseOn':
					return nothing;
				case 'MouseClick':
					return nothing;
				default:
					return A2($author$project$Main$update, msg, modeli);
			}
		} else {
			return A2($author$project$Main$update, msg, modeli);
		}
	});
var $elm$html$Html$div = _VirtualDom_node('div');
var $author$project$Msg$ExportQuiver = {$: 'ExportQuiver'};
var $author$project$Msg$LatexPreambleEdit = function (a) {
	return {$: 'LatexPreambleEdit', a: a};
};
var $author$project$Msg$MouseDown = function (a) {
	return {$: 'MouseDown', a: a};
};
var $author$project$Msg$MouseLeaveCanvas = {$: 'MouseLeaveCanvas'};
var $author$project$Msg$MouseMoveRaw = F2(
	function (a, b) {
		return {$: 'MouseMoveRaw', a: a, b: b};
	});
var $author$project$Msg$MouseUp = {$: 'MouseUp'};
var $author$project$Msg$OptimalGridSize = {$: 'OptimalGridSize'};
var $author$project$Msg$Save = {$: 'Save'};
var $author$project$Msg$SaveGridSize = {$: 'SaveGridSize'};
var $author$project$Msg$SizeGrid = function (a) {
	return {$: 'SizeGrid', a: a};
};
var $author$project$Msg$ToggleAutosave = {$: 'ToggleAutosave'};
var $author$project$Msg$ToggleHideGrid = {$: 'ToggleHideGrid'};
var $elm$html$Html$a = _VirtualDom_node('a');
var $author$project$String$Svg$rect = $author$project$String$Svg$node('rect');
var $author$project$Drawing$rect = F2(
	function (z, _v0) {
		var topLeft = _v0.topLeft;
		var bottomRight = _v0.bottomRight;
		var f = $elm$core$String$fromFloat;
		var _v1 = bottomRight;
		var tox = _v1.a;
		var toy = _v1.b;
		var _v2 = topLeft;
		var fromx = _v2.a;
		var fromy = _v2.b;
		return A2(
			$author$project$Drawing$ofSvg,
			z,
			A2(
				$author$project$String$Svg$rect,
				_List_fromArray(
					[
						$author$project$String$Svg$x(
						f(fromx)),
						$author$project$String$Svg$y(
						f(fromy)),
						$author$project$String$Svg$width(
						f(tox - fromx)),
						$author$project$String$Svg$height(
						f(toy - fromy)),
						$author$project$String$Svg$class('rect-select')
					]),
				_List_Nil));
	});
var $author$project$Main$additionnalDrawing = function (m) {
	var drawSel = F2(
		function (pos, orig) {
			return A2(
				$author$project$Drawing$rect,
				$author$project$Zindex$foregroundZ,
				A2(
					$author$project$Geometry$makeRect,
					orig,
					A2(
						$author$project$Geometry$Point$add,
						_Utils_Tuple2(1, 1),
						function () {
							if (pos.$ === 'InputPosKeyboard') {
								var p = pos.a;
								return A2(
									$author$project$Geometry$Point$add,
									orig,
									A2(
										$author$project$InputPosition$deltaKeyboardPos,
										$author$project$Model$getActiveSizeGrid(m),
										p));
							} else {
								return m.mousePos;
							}
						}())));
		});
	var _v0 = m.mode;
	switch (_v0.$) {
		case 'RectSelect':
			var orig = _v0.a;
			return A2(drawSel, $author$project$InputPosition$InputPosMouse, orig);
		case 'EnlargeMode':
			var state = _v0.a;
			return A2(drawSel, state.pos, state.orig);
		default:
			return $author$project$Drawing$empty;
	}
};
var $elm$html$Html$button = _VirtualDom_node('button');
var $author$project$HtmlDefs$canvasId = 'canvas';
var $elm$html$Html$Attributes$checked = $elm$html$Html$Attributes$boolProperty('checked');
var $elm$html$Html$label = _VirtualDom_node('label');
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $author$project$HtmlDefs$checkbox = F4(
	function (msg, name, tooltip, checked) {
		return A2(
			$elm$html$Html$label,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$title(tooltip)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('checkbox'),
							$elm$html$Html$Events$onClick(msg),
							$elm$html$Html$Attributes$checked(checked),
							$elm$html$Html$Attributes$title(tooltip)
						]),
					_List_Nil),
					$elm$html$Html$text(name)
				]));
	});
var $elm$html$Html$Attributes$cols = function (n) {
	return A2(
		_VirtualDom_attribute,
		'cols',
		$elm$core$String$fromInt(n));
};
var $author$project$Drawing$emptyForeign = A2(
	$author$project$Drawing$ofSvg,
	2 * $author$project$Zindex$backgroundZ,
	A2(
		$author$project$String$Svg$foreignObject,
		_List_fromArray(
			[
				$author$project$String$Svg$x('1'),
				$author$project$String$Svg$y('1'),
				$author$project$String$Svg$width('100%'),
				$author$project$String$Svg$height('100%')
			]),
		_List_Nil));
var $author$project$Model$getCurrentSizeGrid = function (m) {
	var _v0 = m.mode;
	if (_v0.$ === 'ResizeMode') {
		var s = _v0.a;
		return s.sizeGrid;
	} else {
		return $author$project$Model$getActiveSizeGrid(m);
	}
};
var $author$project$GraphDefs$makeSelection = function (g) {
	return A3(
		$author$project$Polygraph$any,
		function ($) {
			return $.selected;
		},
		function ($) {
			return $.selected;
		},
		g) ? g : $author$project$GraphDefs$addWeaklySelected(g);
};
var $author$project$Model$collageGraphFromGraph = F2(
	function (_v0, g) {
		return $author$project$GraphDrawing$toDrawingGraph(
			$author$project$GraphDefs$makeSelection(g));
	});
var $author$project$Modes$CutHead$graphDrawing = F2(
	function (m, state) {
		return $author$project$GraphDrawing$toDrawingGraph(
			A3($author$project$Modes$CutHead$makeGraph, false, state, m));
	});
var $author$project$Modes$Move$graphDrawing = F2(
	function (m, s) {
		return A2(
			$author$project$Model$collageGraphFromGraph,
			m,
			A3($author$project$Modes$Move$mkInfo, m, false, s).graph);
	});
var $author$project$Modes$NewArrow$graphDrawing = F2(
	function (m, s) {
		return A2(
			$author$project$Model$collageGraphFromGraph,
			m,
			function () {
				var info = A3($author$project$Modes$NewArrow$moveNodeInfo, false, m, s);
				return info.graph;
			}());
	});
var $author$project$Modes$Pullshout$graphDrawing = F2(
	function (m, s) {
		return A2(
			$author$project$Model$collageGraphFromGraph,
			m,
			A2($author$project$Modes$Pullshout$graph, m, s));
	});
var $author$project$Modes$SplitArrow$graphDrawing = F2(
	function (m, state) {
		var info = A3($author$project$Modes$SplitArrow$stateInfo, false, m, state);
		return A2($author$project$Model$collageGraphFromGraph, m, info.graph);
	});
var $author$project$GraphDrawing$makeActive = function (l) {
	return A3(
		$author$project$Polygraph$updateList,
		l,
		function (n) {
			return _Utils_update(
				n,
				{isActive: $author$project$GraphDrawing$MainActive});
		},
		function (e) {
			return _Utils_update(
				e,
				{isActive: $author$project$GraphDrawing$MainActive});
		});
};
var $author$project$Modes$Square$squareMode_activeObj = function (info) {
	return _List_fromArray(
		[info.e1, info.e2, info.ne1, info.ne2]);
};
var $author$project$Modes$Square$graphDrawingFromInfo = function (info) {
	return $author$project$GraphDrawing$makeActive(
		$author$project$Modes$Square$squareMode_activeObj(info));
};
var $author$project$Modes$Square$stateInfo = F3(
	function (finish, m, s) {
		var _v0 = A3($author$project$Modes$Square$moveNodeViewInfo, finish, m, s);
		var info = _v0.a;
		return info;
	});
var $author$project$Modes$Square$graphDrawing = F2(
	function (m, state) {
		var info = A3($author$project$Modes$Square$stateInfo, false, m, state);
		return A2(
			$author$project$Modes$Square$graphDrawingFromInfo,
			info.edges,
			A2($author$project$Model$collageGraphFromGraph, m, info.graph));
	});
var $author$project$GraphDrawing$mapNormalEdge = F2(
	function (f, e) {
		return {
			details: function () {
				var _v0 = e.details;
				if (_v0.$ === 'PullshoutEdge') {
					return $author$project$GraphDrawing$PullshoutEdge;
				} else {
					var l = _v0.a;
					return $author$project$GraphDrawing$NormalEdge(
						f(l));
				}
			}(),
			isActive: e.isActive,
			shape: e.shape,
			zindex: e.zindex
		};
	});
var $author$project$Main$graphDrawingFromModel = function (m) {
	var modelGraph = $author$project$Model$getActiveGraph(m);
	var _v0 = m.mode;
	switch (_v0.$) {
		case 'ColorMode':
			return A2($author$project$Model$collageGraphFromGraph, m, modelGraph);
		case 'DefaultMode':
			return A2($author$project$Model$collageGraphFromGraph, m, modelGraph);
		case 'RectSelect':
			var p = _v0.a;
			return $author$project$GraphDrawing$toDrawingGraph(
				A3($author$project$Main$selectGraph, m, p, m.specialKeys.shift));
		case 'EnlargeMode':
			var p = _v0.a;
			return A2(
				$author$project$Model$collageGraphFromGraph,
				m,
				A2($author$project$Main$enlargeGraph, m, p));
		case 'QuickInputMode':
			var ch = _v0.a;
			return A2(
				$author$project$Model$collageGraphFromGraph,
				m,
				A2($author$project$Main$graphQuickInput, m, ch));
		case 'Move':
			var s = _v0.a;
			return A2($author$project$Modes$Move$graphDrawing, m, s);
		case 'RenameMode':
			var l = _v0.b;
			var g = A2($author$project$Main$graph_RenameMode, l, m);
			var g2 = A2($author$project$Model$collageGraphFromGraph, m, g);
			if (l.b) {
				var _v2 = l.a;
				var id = _v2.a;
				return A4(
					$author$project$Polygraph$update,
					id,
					function (n) {
						return _Utils_update(
							n,
							{editable: true});
					},
					$author$project$GraphDrawing$mapNormalEdge(
						function (e) {
							return _Utils_update(
								e,
								{editable: true});
						}),
					g2);
			} else {
				return g2;
			}
		case 'DebugMode':
			return A3(
				$author$project$Polygraph$map,
				F2(
					function (id, n) {
						return _Utils_update(
							n,
							{
								label: $elm$core$String$fromInt(id)
							});
					}),
				function (_v3) {
					return $elm$core$Basics$identity;
				},
				A2($author$project$Model$collageGraphFromGraph, m, modelGraph));
		case 'NewArrow':
			var astate = _v0.a;
			return A2($author$project$Modes$NewArrow$graphDrawing, m, astate);
		case 'SquareMode':
			var state = _v0.a;
			return A2($author$project$Modes$Square$graphDrawing, m, state);
		case 'SplitArrow':
			var state = _v0.a;
			return A2($author$project$Modes$SplitArrow$graphDrawing, m, state);
		case 'PullshoutMode':
			var state = _v0.a;
			return A2($author$project$Modes$Pullshout$graphDrawing, m, state);
		case 'CutHead':
			var state = _v0.a;
			return A2($author$project$Modes$CutHead$graphDrawing, m, state);
		default:
			var sizeGrid = _v0.a;
			return $author$project$GraphDrawing$toDrawingGraph(
				A2($author$project$Main$graphResize, sizeGrid, m));
	}
};
var $author$project$String$Svg$defs = $author$project$String$Svg$node('defs');
var $author$project$String$Svg$id = $author$project$String$Html$attribute('id');
var $author$project$String$Svg$pattern = $author$project$String$Svg$node('pattern');
var $author$project$String$Svg$patternUnits = $author$project$String$Html$attribute('patternUnits');
var $author$project$Drawing$grid = function (n) {
	var sn = $elm$core$String$fromInt(n);
	return A2(
		$author$project$Drawing$ofSvgs,
		$author$project$Zindex$defaultZ,
		_List_fromArray(
			[
				A2(
				$author$project$String$Svg$defs,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$author$project$String$Svg$pattern,
						_List_fromArray(
							[
								$author$project$String$Svg$id('grid'),
								$author$project$String$Svg$width(sn),
								$author$project$String$Svg$height(sn),
								$author$project$String$Svg$patternUnits('userSpaceOnUse')
							]),
						_List_fromArray(
							[
								A2(
								$author$project$String$Svg$path,
								_List_fromArray(
									[
										$author$project$String$Svg$d('M ' + (sn + (' 0 L 0 0 0 ' + sn))),
										$author$project$String$Svg$fill('none'),
										$author$project$String$Svg$stroke('gray'),
										$author$project$String$Svg$strokeWidth('1px')
									]),
								_List_Nil)
							]))
					])),
				A2(
				$author$project$String$Svg$rect,
				_List_fromArray(
					[
						$author$project$String$Svg$width('100%'),
						$author$project$String$Svg$height('100%'),
						$author$project$String$Svg$fill('url(#grid)')
					]),
				_List_Nil)
			]));
};
var $author$project$Main$Plain = {$: 'Plain'};
var $author$project$ArrowStyle$controlChars = '|>(=-bBA][';
var $author$project$HtmlDefs$overlayHelpMsg = '[?] to toggle help overlay';
var $author$project$Modes$CutHead$help = $author$project$HtmlDefs$overlayHelpMsg + (', [RET] or [click] to confirm, [ctrl] to merge. [ESC] to cancel. ' + ('[c] to switch between head/tail' + ', [d] to duplicate (or not) the arrow.'));
var $author$project$Modes$Move$help = function (s) {
	return 'Mode Move. ' + ($author$project$HtmlDefs$overlayHelpMsg + ('. Use mouse or h,j,k,l.' + (' [ctrl] to merge,' + (' Press [x] or [y] to restrict to horizontal / vertical directions, or let it [f]ree ' + ('(currently, ' + (function () {
		var _v0 = s.direction;
		switch (_v0.$) {
			case 'Vertical':
				return 'vertical';
			case 'Horizontal':
				return 'horizontal';
			default:
				return 'free';
		}
	}() + (').' + function () {
		var _v1 = s.mode;
		switch (_v1.$) {
			case 'FreeMove':
				return ' [RET] or [click] to confirm.';
			case 'PressMove':
				return ' Release [g] to confirm.';
			default:
				return '';
		}
	}())))))));
};
var $author$project$Drawing$Color$helpMsg = 'bla[c]k, bl[u]e, [g]reen, [o]range, [r]ed, [v]iolet, [y]ellow';
var $author$project$Modes$NewArrow$help = $author$project$HtmlDefs$overlayHelpMsg + (', [ESC] cancel, [click, TAB] name the point (if new) and arrow, ' + ('[hjkl] position the new point with the keyboard, ' + ('[ctrl] merge, ' + ('[RET] terminate the arrow creation, ' + ('[\"' + ($author$project$ArrowStyle$controlChars + ('\"] alternate between different arrow styles, ' + ('[i]nvert arrow, ' + ('[p]ullback/[P]ushout mode, ' + ('[C] switch to cone/cylinder creation (if relevant).\n' + ('[p]ullback/[P]ushout mode.\n' + ('Colors: ' + $author$project$Drawing$Color$helpMsg))))))))))));
var $author$project$Modes$Pullshout$help = '[ESC] cancel, ' + ($author$project$HtmlDefs$overlayHelpMsg + (', cycle between [p]ullback/[P]ushout possibilities, ' + '[RET] confirm'));
var $author$project$Modes$SplitArrow$help = '[ESC] cancel, ' + ($author$project$HtmlDefs$overlayHelpMsg + (', [click] name the point (if new), ' + ('[/] to move the existing label on the other edge, ' + '[RET] terminate the square creation')));
var $author$project$Modes$Square$help = $author$project$HtmlDefs$overlayHelpMsg + (', [ESC] cancel' + ('[click] name the point (if new), ' + ('[RET] terminate the square creation, ' + (' alternative possible [s]quares, ' + (' [a]lternative possible labels, ' + 'toggle [p]roof node creation.')))));
var $elm$parser$Parser$ExpectingEnd = {$: 'ExpectingEnd'};
var $elm$parser$Parser$Advanced$end = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return _Utils_eq(
				$elm$core$String$length(s.src),
				s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
var $author$project$Main$Bold = {$: 'Bold'};
var $elm$parser$Parser$Expecting = function (a) {
	return {$: 'Expecting', a: a};
};
var $elm$parser$Parser$toToken = function (str) {
	return A2(
		$elm$parser$Parser$Advanced$Token,
		str,
		$elm$parser$Parser$Expecting(str));
};
var $elm$parser$Parser$token = function (str) {
	return $elm$parser$Parser$Advanced$token(
		$elm$parser$Parser$toToken(str));
};
var $author$project$Main$helpMsgParser_aux = function () {
	var varParser = function (cend) {
		var correctChar = function (c) {
			return !_Utils_eq(c, cend);
		};
		return $elm$parser$Parser$variable(
			{inner: correctChar, reserved: $elm$core$Set$empty, start: correctChar});
	};
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						function (s) {
							return _Utils_Tuple2(s, $author$project$Main$Bold);
						}),
					$elm$parser$Parser$token('[')),
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$parser$Parser$keeper,
								A2(
									$elm$parser$Parser$ignorer,
									$elm$parser$Parser$succeed($elm$core$Basics$identity),
									$elm$parser$Parser$token('\"')),
								A2(
									$elm$parser$Parser$ignorer,
									varParser(
										_Utils_chr('\"')),
									$elm$parser$Parser$token('\"'))),
								varParser(
								_Utils_chr(']'))
							])),
					$elm$parser$Parser$symbol(']'))),
				A2(
				$elm$parser$Parser$keeper,
				$elm$parser$Parser$succeed(
					function (s) {
						return _Utils_Tuple2(s, $author$project$Main$Plain);
					}),
				varParser(
					_Utils_chr('[')))
			]));
}();
function $author$project$Main$cyclic$helpMsgParser() {
	return A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Basics$identity),
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(_List_Nil),
					$elm$parser$Parser$end),
					A2(
					$elm$parser$Parser$keeper,
					A2(
						$elm$parser$Parser$keeper,
						$elm$parser$Parser$succeed($elm$core$List$cons),
						$author$project$Main$helpMsgParser_aux),
					$elm$parser$Parser$lazy(
						function (_v0) {
							return $author$project$Main$cyclic$helpMsgParser();
						}))
				])));
}
try {
	var $author$project$Main$helpMsgParser = $author$project$Main$cyclic$helpMsgParser();
	$author$project$Main$cyclic$helpMsgParser = function () {
		return $author$project$Main$helpMsgParser;
	};
} catch ($) {
	throw 'Some top-level definitions from `Main` are causing infinite recursion:\n\n  ┌─────┐\n  │    helpMsgParser\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $elm$html$Html$b = _VirtualDom_node('b');
var $elm$html$Html$br = _VirtualDom_node('br');
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$core$String$lines = _String_lines;
var $elm$html$Html$span = _VirtualDom_node('span');
var $author$project$Main$helpStr_collage = function (_v0) {
	var s = _v0.a;
	var h = _v0.b;
	if (h.$ === 'Bold') {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('['),
					A2(
					$elm$html$Html$b,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(s)
						])),
					$elm$html$Html$text(']')
				]));
	} else {
		return A2(
			$elm$html$Html$span,
			_List_Nil,
			A2(
				$elm$core$List$intersperse,
				A2($elm$html$Html$br, _List_Nil, _List_Nil),
				A2(
					$elm$core$List$map,
					$elm$html$Html$text,
					$elm$core$String$lines(s))));
	}
};
var $author$project$Main$overlayHelpMsgNewLine = $author$project$HtmlDefs$overlayHelpMsg + '.\n';
var $author$project$Modes$toString = function (m) {
	switch (m.$) {
		case 'DefaultMode':
			return 'Default';
		case 'NewArrow':
			return 'New arrow';
		case 'Move':
			return 'Move';
		case 'RenameMode':
			return 'Rename';
		case 'DebugMode':
			return 'Debug';
		case 'QuickInputMode':
			return 'QuickInput';
		case 'SquareMode':
			return 'Square';
		case 'RectSelect':
			return 'Rect select';
		case 'SplitArrow':
			return 'Split arrow';
		case 'EnlargeMode':
			return 'Enlarge';
		case 'CutHead':
			return 'Cut head';
		case 'ResizeMode':
			return 'Resize';
		case 'PullshoutMode':
			return 'Pullshout';
		default:
			return 'Color';
	}
};
var $author$project$Main$helpMsg = function (model) {
	var classes = _List_fromArray(
		['help-div']);
	var cl = A2($elm$core$List$map, $elm$html$Html$Attributes$class, classes);
	var makeHelpDiv = function (l) {
		return A2(
			$elm$html$Html$div,
			cl,
			_List_fromArray(
				[
					A2($elm$html$Html$div, _List_Nil, l)
				]));
	};
	var msg = function (s) {
		return makeHelpDiv(
			A2(
				$elm$core$List$map,
				$author$project$Main$helpStr_collage,
				A2(
					$elm$core$Result$withDefault,
					_List_fromArray(
						[
							_Utils_Tuple2('Parsing help msg error', $author$project$Main$Plain)
						]),
					A2($elm$parser$Parser$run, $author$project$Main$helpMsgParser, s))));
	};
	var _v0 = model.mode;
	switch (_v0.$) {
		case 'DefaultMode':
			return msg('Default mode.\n ' + ('Sumary of commands:\n' + ($author$project$Main$overlayHelpMsgNewLine + ('Selection:' + ('  [click] for point/edge selection (hold for selection rectangle)' + (', [shift] to keep previous selection' + (', [C-a] select all' + (', [S]elect pointer surrounding subdiagram' + (', [u] expand selection to connected components' + (' ([u] again to select embedded proof nodes)' + (', [ESC] or [w] clear selection' + (', [H] and [L]: select subdiagram adjacent to selected edge' + (', [hjkl] move the selection from a point to another' + ('\nHistory: ' + ('[C-z] undo' + (', [Q]uicksave' + ('\nCopy/Paste: ' + ('[C-c] copy selection' + (', [C-v] paste' + ('\n Basic editing: ' + ('new [p]oint' + (', new [t]ext' + (', [del]ete selected object (also [x])' + (', [q] find and replace in selection' + (', [r]ename selected object (or double click)' + (', new (commutative) [s]quare on selected point (with two already connected edges)' + ('\nArrows: ' + ('new [a]rrow/cylinder/cone from selected objects' + (', [/] split arrow' + (', [C]ut head of selected arrow' + (', [c]olor arrow' + (', if an arrow is selected: [\"' + ($author$project$ArrowStyle$controlChars + ('\"] alternate between different arrow styles, [i]nvert arrow, ' + ('[+<] move to the foreground/background (also for vertices).' + ('\nMoving objects:' + ('[g] move selected objects with possible merge (hold g for ' + ('stopping the move on releasing the key)' + (', [f]ix (snap) selected objects on the grid' + (', [e]nlarge diagram (create row/column spaces)' + ('\n\nMiscelleanous: ' + ('[R]esize canvas and grid size' + (', [d]ebug mode' + (', [G]enerate Coq script ([T]: generate test Coq script)' + (', [v] if a proof node is selected, check the proof, if a chain of arrows is selected, ask for a proof, if a subdiagram is selected, generate a proof goal in vscode.' + (' (only works with the coreact-yade vscode extension)' + (', [E] enter an equation (prompt)' + ', export selection to LaTe[X]/s[V]g')))))))))))))))))))))))))))))))))))))))))))))));
		case 'DebugMode':
			return $elm$html$Html$text('Debug Mode. [ESC] to cancel and come back to the default mode. ' + '');
		case 'NewArrow':
			return msg('Mode NewArrow. ' + $author$project$Modes$NewArrow$help);
		case 'PullshoutMode':
			return msg('Mode Pullback/Pullshout. ' + $author$project$Modes$Pullshout$help);
		case 'ColorMode':
			return msg('Mode color. ' + ($author$project$Main$overlayHelpMsgNewLine + ('[ESC] or colorise selected edges: ' + $author$project$Drawing$Color$helpMsg)));
		case 'SquareMode':
			return msg('Mode Commutative square. ' + $author$project$Modes$Square$help);
		case 'SplitArrow':
			return msg('Mode Split Arrow. ' + $author$project$Modes$SplitArrow$help);
		case 'Move':
			var s = _v0.a;
			return msg(
				$author$project$Modes$Move$help(s));
		case 'CutHead':
			return msg('Mode cut arrow. ' + $author$project$Modes$CutHead$help);
		case 'RenameMode':
			return msg('Rename mode: [RET] to confirm, [TAB] to next label, [ESC] to cancel');
		case 'EnlargeMode':
			var s = _v0.a;
			return msg('Enlarge mode. ' + ($author$project$Main$overlayHelpMsgNewLine + ('Draw a rectangle to create space. ' + 'Use mouse or h,j,k,l. [RET] or click to confirm.')));
		case 'QuickInputMode':
			return msg('Equation mode: enter equation in the textfield ' + ('(e.g., a -- f -> b -- g -> c =  a -- h -> d -- k -> c)' + (',  [RET] to confirm, [ESC] to cancel.' + (' If an incomplete subdiagram (i.e. a subdiagram ' + ('where one branch is a single arrow with empty label)' + (' is selected, it will replace the empty branch with' + ' the lhs or the rhs (depending on the orientation).'))))));
		case 'ResizeMode':
			var onlyGrid = _v0.a.onlyGrid;
			return msg(
				'Resize mode. ' + ($author$project$Main$overlayHelpMsgNewLine + ('[k]/[j] to increase/decrease, ' + ('or use the slider above. ' + (onlyGrid ? '[g] to resize the objects as well as the grid. ' : ('[g] to resize the grid only. ' + ('[ESC] to cancel, ' + '[RET] to confirm')))))));
		default:
			var txt = 'Mode: ' + ($author$project$Modes$toString(model.mode) + ('. [ESC] to cancel and come back to the default' + ' mode.'));
			return makeHelpDiv(
				_List_fromArray(
					[
						$elm$html$Html$text(txt)
					]));
	}
};
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $hecrj$html_parser$Html$Parser$Element = F3(
	function (a, b, c) {
		return {$: 'Element', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parseA(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					var _v2 = callback(a);
					var parseB = _v2.a;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0.a;
	return $elm$parser$Parser$Advanced$Parser(
		function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 'Bad') {
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, false, x);
			} else {
				var a = _v1.b;
				var s1 = _v1.c;
				return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
			}
		});
};
var $elm$parser$Parser$backtrackable = $elm$parser$Parser$Advanced$backtrackable;
var $elm$parser$Parser$UnexpectedChar = {$: 'UnexpectedChar'};
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var $elm$parser$Parser$chompIf = function (isGood) {
	return A2($elm$parser$Parser$Advanced$chompIf, isGood, $elm$parser$Parser$UnexpectedChar);
};
var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
var $hecrj$html_parser$Html$Parser$chompOneOrMore = function (fn) {
	return A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$chompIf(fn),
		$elm$parser$Parser$chompWhile(fn));
};
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3($elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
var $hecrj$html_parser$Html$Parser$isSpaceCharacter = function (c) {
	return _Utils_eq(
		c,
		_Utils_chr(' ')) || (_Utils_eq(
		c,
		_Utils_chr('\t')) || (_Utils_eq(
		c,
		_Utils_chr('\n')) || (_Utils_eq(
		c,
		_Utils_chr('\u000D')) || (_Utils_eq(
		c,
		_Utils_chr('\u000C')) || _Utils_eq(
		c,
		_Utils_chr('\u00A0'))))));
};
var $elm$parser$Parser$Problem = function (a) {
	return {$: 'Problem', a: a};
};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$parser$Parser$problem = function (msg) {
	return $elm$parser$Parser$Advanced$problem(
		$elm$parser$Parser$Problem(msg));
};
var $elm$core$String$toLower = _String_toLower;
var $hecrj$html_parser$Html$Parser$closingTag = function (name) {
	var chompName = A2(
		$elm$parser$Parser$andThen,
		function (closingName) {
			return _Utils_eq(
				$elm$core$String$toLower(closingName),
				name) ? $elm$parser$Parser$succeed(_Utils_Tuple0) : $elm$parser$Parser$problem('closing tag does not match opening tag: ' + name);
		},
		$elm$parser$Parser$getChompedString(
			$hecrj$html_parser$Html$Parser$chompOneOrMore(
				function (c) {
					return (!$hecrj$html_parser$Html$Parser$isSpaceCharacter(c)) && (!_Utils_eq(
						c,
						_Utils_chr('>')));
				})));
	return A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$chompIf(
						$elm$core$Basics$eq(
							_Utils_chr('<'))),
					$elm$parser$Parser$chompIf(
						$elm$core$Basics$eq(
							_Utils_chr('/')))),
				chompName),
			$elm$parser$Parser$chompWhile($hecrj$html_parser$Html$Parser$isSpaceCharacter)),
		$elm$parser$Parser$chompIf(
			$elm$core$Basics$eq(
				_Utils_chr('>'))));
};
var $hecrj$html_parser$Html$Parser$Comment = function (a) {
	return {$: 'Comment', a: a};
};
var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var $elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$findSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A4($elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.context)) : A3(
				$elm$parser$Parser$Advanced$Good,
				_Utils_cmp(s.offset, newOffset) < 0,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$chompUntil = function (str) {
	return $elm$parser$Parser$Advanced$chompUntil(
		$elm$parser$Parser$toToken(str));
};
var $hecrj$html_parser$Html$Parser$commentString = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$ignorer,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$token('<!')),
		$elm$parser$Parser$token('--')),
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$getChompedString(
			$elm$parser$Parser$chompUntil('-->')),
		$elm$parser$Parser$token('-->')));
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var p = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					return A3(
						$elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
var $hecrj$html_parser$Html$Parser$comment = A2($elm$parser$Parser$map, $hecrj$html_parser$Html$Parser$Comment, $hecrj$html_parser$Html$Parser$commentString);
var $hecrj$html_parser$Html$Parser$voidElements = _List_fromArray(
	['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
var $hecrj$html_parser$Html$Parser$isVoidElement = function (name) {
	return A2($elm$core$List$member, name, $hecrj$html_parser$Html$Parser$voidElements);
};
var $elm$parser$Parser$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $elm$parser$Parser$toAdvancedStep = function (step) {
	if (step.$ === 'Loop') {
		var s = step.a;
		return $elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return $elm$parser$Parser$Advanced$Done(a);
	}
};
var $elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			$elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					$elm$parser$Parser$map,
					$elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var $hecrj$html_parser$Html$Parser$many = function (parser_) {
	return A2(
		$elm$parser$Parser$loop,
		_List_Nil,
		function (list) {
			return $elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$map,
						function (_new) {
							return $elm$parser$Parser$Loop(
								A2($elm$core$List$cons, _new, list));
						},
						parser_),
						$elm$parser$Parser$succeed(
						$elm$parser$Parser$Done(
							$elm$core$List$reverse(list)))
					]));
		});
};
var $hecrj$html_parser$Html$Parser$isTagAttributeCharacter = function (c) {
	return (!$hecrj$html_parser$Html$Parser$isSpaceCharacter(c)) && ((!_Utils_eq(
		c,
		_Utils_chr('\"'))) && ((!_Utils_eq(
		c,
		_Utils_chr('\''))) && ((!_Utils_eq(
		c,
		_Utils_chr('>'))) && ((!_Utils_eq(
		c,
		_Utils_chr('/'))) && (!_Utils_eq(
		c,
		_Utils_chr('=')))))));
};
var $hecrj$html_parser$Html$Parser$tagAttributeName = A2(
	$elm$parser$Parser$map,
	$elm$core$String$toLower,
	$elm$parser$Parser$getChompedString(
		$hecrj$html_parser$Html$Parser$chompOneOrMore($hecrj$html_parser$Html$Parser$isTagAttributeCharacter)));
var $hecrj$html_parser$Html$Parser$chompSemicolon = $elm$parser$Parser$chompIf(
	$elm$core$Basics$eq(
		_Utils_chr(';')));
var $hecrj$html_parser$Html$Parser$NamedCharacterReferences$dict = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('Aacute', 'Á'),
			_Utils_Tuple2('aacute', 'á'),
			_Utils_Tuple2('Abreve', 'Ă'),
			_Utils_Tuple2('abreve', 'ă'),
			_Utils_Tuple2('ac', '∾'),
			_Utils_Tuple2('acd', '∿'),
			_Utils_Tuple2('acE', '∾̳'),
			_Utils_Tuple2('Acirc', 'Â'),
			_Utils_Tuple2('acirc', 'â'),
			_Utils_Tuple2('acute', '´'),
			_Utils_Tuple2('Acy', 'А'),
			_Utils_Tuple2('acy', 'а'),
			_Utils_Tuple2('AElig', 'Æ'),
			_Utils_Tuple2('aelig', 'æ'),
			_Utils_Tuple2('af', '\u2061'),
			_Utils_Tuple2('Afr', '\uD835\uDD04'),
			_Utils_Tuple2('afr', '\uD835\uDD1E'),
			_Utils_Tuple2('Agrave', 'À'),
			_Utils_Tuple2('agrave', 'à'),
			_Utils_Tuple2('alefsym', 'ℵ'),
			_Utils_Tuple2('aleph', 'ℵ'),
			_Utils_Tuple2('Alpha', 'Α'),
			_Utils_Tuple2('alpha', 'α'),
			_Utils_Tuple2('Amacr', 'Ā'),
			_Utils_Tuple2('amacr', 'ā'),
			_Utils_Tuple2('amalg', '⨿'),
			_Utils_Tuple2('amp', '&'),
			_Utils_Tuple2('AMP', '&'),
			_Utils_Tuple2('andand', '⩕'),
			_Utils_Tuple2('And', '⩓'),
			_Utils_Tuple2('and', '∧'),
			_Utils_Tuple2('andd', '⩜'),
			_Utils_Tuple2('andslope', '⩘'),
			_Utils_Tuple2('andv', '⩚'),
			_Utils_Tuple2('ang', '∠'),
			_Utils_Tuple2('ange', '⦤'),
			_Utils_Tuple2('angle', '∠'),
			_Utils_Tuple2('angmsdaa', '⦨'),
			_Utils_Tuple2('angmsdab', '⦩'),
			_Utils_Tuple2('angmsdac', '⦪'),
			_Utils_Tuple2('angmsdad', '⦫'),
			_Utils_Tuple2('angmsdae', '⦬'),
			_Utils_Tuple2('angmsdaf', '⦭'),
			_Utils_Tuple2('angmsdag', '⦮'),
			_Utils_Tuple2('angmsdah', '⦯'),
			_Utils_Tuple2('angmsd', '∡'),
			_Utils_Tuple2('angrt', '∟'),
			_Utils_Tuple2('angrtvb', '⊾'),
			_Utils_Tuple2('angrtvbd', '⦝'),
			_Utils_Tuple2('angsph', '∢'),
			_Utils_Tuple2('angst', 'Å'),
			_Utils_Tuple2('angzarr', '⍼'),
			_Utils_Tuple2('Aogon', 'Ą'),
			_Utils_Tuple2('aogon', 'ą'),
			_Utils_Tuple2('Aopf', '\uD835\uDD38'),
			_Utils_Tuple2('aopf', '\uD835\uDD52'),
			_Utils_Tuple2('apacir', '⩯'),
			_Utils_Tuple2('ap', '≈'),
			_Utils_Tuple2('apE', '⩰'),
			_Utils_Tuple2('ape', '≊'),
			_Utils_Tuple2('apid', '≋'),
			_Utils_Tuple2('apos', '\''),
			_Utils_Tuple2('ApplyFunction', '\u2061'),
			_Utils_Tuple2('approx', '≈'),
			_Utils_Tuple2('approxeq', '≊'),
			_Utils_Tuple2('Aring', 'Å'),
			_Utils_Tuple2('aring', 'å'),
			_Utils_Tuple2('Ascr', '\uD835\uDC9C'),
			_Utils_Tuple2('ascr', '\uD835\uDCB6'),
			_Utils_Tuple2('Assign', '≔'),
			_Utils_Tuple2('ast', '*'),
			_Utils_Tuple2('asymp', '≈'),
			_Utils_Tuple2('asympeq', '≍'),
			_Utils_Tuple2('Atilde', 'Ã'),
			_Utils_Tuple2('atilde', 'ã'),
			_Utils_Tuple2('Auml', 'Ä'),
			_Utils_Tuple2('auml', 'ä'),
			_Utils_Tuple2('awconint', '∳'),
			_Utils_Tuple2('awint', '⨑'),
			_Utils_Tuple2('backcong', '≌'),
			_Utils_Tuple2('backepsilon', '϶'),
			_Utils_Tuple2('backprime', '‵'),
			_Utils_Tuple2('backsim', '∽'),
			_Utils_Tuple2('backsimeq', '⋍'),
			_Utils_Tuple2('Backslash', '∖'),
			_Utils_Tuple2('Barv', '⫧'),
			_Utils_Tuple2('barvee', '⊽'),
			_Utils_Tuple2('barwed', '⌅'),
			_Utils_Tuple2('Barwed', '⌆'),
			_Utils_Tuple2('barwedge', '⌅'),
			_Utils_Tuple2('bbrk', '⎵'),
			_Utils_Tuple2('bbrktbrk', '⎶'),
			_Utils_Tuple2('bcong', '≌'),
			_Utils_Tuple2('Bcy', 'Б'),
			_Utils_Tuple2('bcy', 'б'),
			_Utils_Tuple2('bdquo', '„'),
			_Utils_Tuple2('becaus', '∵'),
			_Utils_Tuple2('because', '∵'),
			_Utils_Tuple2('Because', '∵'),
			_Utils_Tuple2('bemptyv', '⦰'),
			_Utils_Tuple2('bepsi', '϶'),
			_Utils_Tuple2('bernou', 'ℬ'),
			_Utils_Tuple2('Bernoullis', 'ℬ'),
			_Utils_Tuple2('Beta', 'Β'),
			_Utils_Tuple2('beta', 'β'),
			_Utils_Tuple2('beth', 'ℶ'),
			_Utils_Tuple2('between', '≬'),
			_Utils_Tuple2('Bfr', '\uD835\uDD05'),
			_Utils_Tuple2('bfr', '\uD835\uDD1F'),
			_Utils_Tuple2('bigcap', '⋂'),
			_Utils_Tuple2('bigcirc', '◯'),
			_Utils_Tuple2('bigcup', '⋃'),
			_Utils_Tuple2('bigodot', '⨀'),
			_Utils_Tuple2('bigoplus', '⨁'),
			_Utils_Tuple2('bigotimes', '⨂'),
			_Utils_Tuple2('bigsqcup', '⨆'),
			_Utils_Tuple2('bigstar', '★'),
			_Utils_Tuple2('bigtriangledown', '▽'),
			_Utils_Tuple2('bigtriangleup', '△'),
			_Utils_Tuple2('biguplus', '⨄'),
			_Utils_Tuple2('bigvee', '⋁'),
			_Utils_Tuple2('bigwedge', '⋀'),
			_Utils_Tuple2('bkarow', '⤍'),
			_Utils_Tuple2('blacklozenge', '⧫'),
			_Utils_Tuple2('blacksquare', '▪'),
			_Utils_Tuple2('blacktriangle', '▴'),
			_Utils_Tuple2('blacktriangledown', '▾'),
			_Utils_Tuple2('blacktriangleleft', '◂'),
			_Utils_Tuple2('blacktriangleright', '▸'),
			_Utils_Tuple2('blank', '␣'),
			_Utils_Tuple2('blk12', '▒'),
			_Utils_Tuple2('blk14', '░'),
			_Utils_Tuple2('blk34', '▓'),
			_Utils_Tuple2('block', '█'),
			_Utils_Tuple2('bne', '=⃥'),
			_Utils_Tuple2('bnequiv', '≡⃥'),
			_Utils_Tuple2('bNot', '⫭'),
			_Utils_Tuple2('bnot', '⌐'),
			_Utils_Tuple2('Bopf', '\uD835\uDD39'),
			_Utils_Tuple2('bopf', '\uD835\uDD53'),
			_Utils_Tuple2('bot', '⊥'),
			_Utils_Tuple2('bottom', '⊥'),
			_Utils_Tuple2('bowtie', '⋈'),
			_Utils_Tuple2('boxbox', '⧉'),
			_Utils_Tuple2('boxdl', '┐'),
			_Utils_Tuple2('boxdL', '╕'),
			_Utils_Tuple2('boxDl', '╖'),
			_Utils_Tuple2('boxDL', '╗'),
			_Utils_Tuple2('boxdr', '┌'),
			_Utils_Tuple2('boxdR', '╒'),
			_Utils_Tuple2('boxDr', '╓'),
			_Utils_Tuple2('boxDR', '╔'),
			_Utils_Tuple2('boxh', '─'),
			_Utils_Tuple2('boxH', '═'),
			_Utils_Tuple2('boxhd', '┬'),
			_Utils_Tuple2('boxHd', '╤'),
			_Utils_Tuple2('boxhD', '╥'),
			_Utils_Tuple2('boxHD', '╦'),
			_Utils_Tuple2('boxhu', '┴'),
			_Utils_Tuple2('boxHu', '╧'),
			_Utils_Tuple2('boxhU', '╨'),
			_Utils_Tuple2('boxHU', '╩'),
			_Utils_Tuple2('boxminus', '⊟'),
			_Utils_Tuple2('boxplus', '⊞'),
			_Utils_Tuple2('boxtimes', '⊠'),
			_Utils_Tuple2('boxul', '┘'),
			_Utils_Tuple2('boxuL', '╛'),
			_Utils_Tuple2('boxUl', '╜'),
			_Utils_Tuple2('boxUL', '╝'),
			_Utils_Tuple2('boxur', '└'),
			_Utils_Tuple2('boxuR', '╘'),
			_Utils_Tuple2('boxUr', '╙'),
			_Utils_Tuple2('boxUR', '╚'),
			_Utils_Tuple2('boxv', '│'),
			_Utils_Tuple2('boxV', '║'),
			_Utils_Tuple2('boxvh', '┼'),
			_Utils_Tuple2('boxvH', '╪'),
			_Utils_Tuple2('boxVh', '╫'),
			_Utils_Tuple2('boxVH', '╬'),
			_Utils_Tuple2('boxvl', '┤'),
			_Utils_Tuple2('boxvL', '╡'),
			_Utils_Tuple2('boxVl', '╢'),
			_Utils_Tuple2('boxVL', '╣'),
			_Utils_Tuple2('boxvr', '├'),
			_Utils_Tuple2('boxvR', '╞'),
			_Utils_Tuple2('boxVr', '╟'),
			_Utils_Tuple2('boxVR', '╠'),
			_Utils_Tuple2('bprime', '‵'),
			_Utils_Tuple2('breve', '˘'),
			_Utils_Tuple2('Breve', '˘'),
			_Utils_Tuple2('brvbar', '¦'),
			_Utils_Tuple2('bscr', '\uD835\uDCB7'),
			_Utils_Tuple2('Bscr', 'ℬ'),
			_Utils_Tuple2('bsemi', '⁏'),
			_Utils_Tuple2('bsim', '∽'),
			_Utils_Tuple2('bsime', '⋍'),
			_Utils_Tuple2('bsolb', '⧅'),
			_Utils_Tuple2('bsol', '\\'),
			_Utils_Tuple2('bsolhsub', '⟈'),
			_Utils_Tuple2('bull', '•'),
			_Utils_Tuple2('bullet', '•'),
			_Utils_Tuple2('bump', '≎'),
			_Utils_Tuple2('bumpE', '⪮'),
			_Utils_Tuple2('bumpe', '≏'),
			_Utils_Tuple2('Bumpeq', '≎'),
			_Utils_Tuple2('bumpeq', '≏'),
			_Utils_Tuple2('Cacute', 'Ć'),
			_Utils_Tuple2('cacute', 'ć'),
			_Utils_Tuple2('capand', '⩄'),
			_Utils_Tuple2('capbrcup', '⩉'),
			_Utils_Tuple2('capcap', '⩋'),
			_Utils_Tuple2('cap', '∩'),
			_Utils_Tuple2('Cap', '⋒'),
			_Utils_Tuple2('capcup', '⩇'),
			_Utils_Tuple2('capdot', '⩀'),
			_Utils_Tuple2('CapitalDifferentialD', 'ⅅ'),
			_Utils_Tuple2('caps', '∩︀'),
			_Utils_Tuple2('caret', '⁁'),
			_Utils_Tuple2('caron', 'ˇ'),
			_Utils_Tuple2('Cayleys', 'ℭ'),
			_Utils_Tuple2('ccaps', '⩍'),
			_Utils_Tuple2('Ccaron', 'Č'),
			_Utils_Tuple2('ccaron', 'č'),
			_Utils_Tuple2('Ccedil', 'Ç'),
			_Utils_Tuple2('ccedil', 'ç'),
			_Utils_Tuple2('Ccirc', 'Ĉ'),
			_Utils_Tuple2('ccirc', 'ĉ'),
			_Utils_Tuple2('Cconint', '∰'),
			_Utils_Tuple2('ccups', '⩌'),
			_Utils_Tuple2('ccupssm', '⩐'),
			_Utils_Tuple2('Cdot', 'Ċ'),
			_Utils_Tuple2('cdot', 'ċ'),
			_Utils_Tuple2('cedil', '¸'),
			_Utils_Tuple2('Cedilla', '¸'),
			_Utils_Tuple2('cemptyv', '⦲'),
			_Utils_Tuple2('cent', '¢'),
			_Utils_Tuple2('centerdot', '·'),
			_Utils_Tuple2('CenterDot', '·'),
			_Utils_Tuple2('cfr', '\uD835\uDD20'),
			_Utils_Tuple2('Cfr', 'ℭ'),
			_Utils_Tuple2('CHcy', 'Ч'),
			_Utils_Tuple2('chcy', 'ч'),
			_Utils_Tuple2('check', '✓'),
			_Utils_Tuple2('checkmark', '✓'),
			_Utils_Tuple2('Chi', 'Χ'),
			_Utils_Tuple2('chi', 'χ'),
			_Utils_Tuple2('circ', 'ˆ'),
			_Utils_Tuple2('circeq', '≗'),
			_Utils_Tuple2('circlearrowleft', '↺'),
			_Utils_Tuple2('circlearrowright', '↻'),
			_Utils_Tuple2('circledast', '⊛'),
			_Utils_Tuple2('circledcirc', '⊚'),
			_Utils_Tuple2('circleddash', '⊝'),
			_Utils_Tuple2('CircleDot', '⊙'),
			_Utils_Tuple2('circledR', '®'),
			_Utils_Tuple2('circledS', 'Ⓢ'),
			_Utils_Tuple2('CircleMinus', '⊖'),
			_Utils_Tuple2('CirclePlus', '⊕'),
			_Utils_Tuple2('CircleTimes', '⊗'),
			_Utils_Tuple2('cir', '○'),
			_Utils_Tuple2('cirE', '⧃'),
			_Utils_Tuple2('cire', '≗'),
			_Utils_Tuple2('cirfnint', '⨐'),
			_Utils_Tuple2('cirmid', '⫯'),
			_Utils_Tuple2('cirscir', '⧂'),
			_Utils_Tuple2('ClockwiseContourIntegral', '∲'),
			_Utils_Tuple2('CloseCurlyDoubleQuote', '”'),
			_Utils_Tuple2('CloseCurlyQuote', '’'),
			_Utils_Tuple2('clubs', '♣'),
			_Utils_Tuple2('clubsuit', '♣'),
			_Utils_Tuple2('colon', ':'),
			_Utils_Tuple2('Colon', '∷'),
			_Utils_Tuple2('Colone', '⩴'),
			_Utils_Tuple2('colone', '≔'),
			_Utils_Tuple2('coloneq', '≔'),
			_Utils_Tuple2('comma', ','),
			_Utils_Tuple2('commat', '@'),
			_Utils_Tuple2('comp', '∁'),
			_Utils_Tuple2('compfn', '∘'),
			_Utils_Tuple2('complement', '∁'),
			_Utils_Tuple2('complexes', 'ℂ'),
			_Utils_Tuple2('cong', '≅'),
			_Utils_Tuple2('congdot', '⩭'),
			_Utils_Tuple2('Congruent', '≡'),
			_Utils_Tuple2('conint', '∮'),
			_Utils_Tuple2('Conint', '∯'),
			_Utils_Tuple2('ContourIntegral', '∮'),
			_Utils_Tuple2('copf', '\uD835\uDD54'),
			_Utils_Tuple2('Copf', 'ℂ'),
			_Utils_Tuple2('coprod', '∐'),
			_Utils_Tuple2('Coproduct', '∐'),
			_Utils_Tuple2('copy', '©'),
			_Utils_Tuple2('COPY', '©'),
			_Utils_Tuple2('copysr', '℗'),
			_Utils_Tuple2('CounterClockwiseContourIntegral', '∳'),
			_Utils_Tuple2('crarr', '↵'),
			_Utils_Tuple2('cross', '✗'),
			_Utils_Tuple2('Cross', '⨯'),
			_Utils_Tuple2('Cscr', '\uD835\uDC9E'),
			_Utils_Tuple2('cscr', '\uD835\uDCB8'),
			_Utils_Tuple2('csub', '⫏'),
			_Utils_Tuple2('csube', '⫑'),
			_Utils_Tuple2('csup', '⫐'),
			_Utils_Tuple2('csupe', '⫒'),
			_Utils_Tuple2('ctdot', '⋯'),
			_Utils_Tuple2('cudarrl', '⤸'),
			_Utils_Tuple2('cudarrr', '⤵'),
			_Utils_Tuple2('cuepr', '⋞'),
			_Utils_Tuple2('cuesc', '⋟'),
			_Utils_Tuple2('cularr', '↶'),
			_Utils_Tuple2('cularrp', '⤽'),
			_Utils_Tuple2('cupbrcap', '⩈'),
			_Utils_Tuple2('cupcap', '⩆'),
			_Utils_Tuple2('CupCap', '≍'),
			_Utils_Tuple2('cup', '∪'),
			_Utils_Tuple2('Cup', '⋓'),
			_Utils_Tuple2('cupcup', '⩊'),
			_Utils_Tuple2('cupdot', '⊍'),
			_Utils_Tuple2('cupor', '⩅'),
			_Utils_Tuple2('cups', '∪︀'),
			_Utils_Tuple2('curarr', '↷'),
			_Utils_Tuple2('curarrm', '⤼'),
			_Utils_Tuple2('curlyeqprec', '⋞'),
			_Utils_Tuple2('curlyeqsucc', '⋟'),
			_Utils_Tuple2('curlyvee', '⋎'),
			_Utils_Tuple2('curlywedge', '⋏'),
			_Utils_Tuple2('curren', '¤'),
			_Utils_Tuple2('curvearrowleft', '↶'),
			_Utils_Tuple2('curvearrowright', '↷'),
			_Utils_Tuple2('cuvee', '⋎'),
			_Utils_Tuple2('cuwed', '⋏'),
			_Utils_Tuple2('cwconint', '∲'),
			_Utils_Tuple2('cwint', '∱'),
			_Utils_Tuple2('cylcty', '⌭'),
			_Utils_Tuple2('dagger', '†'),
			_Utils_Tuple2('Dagger', '‡'),
			_Utils_Tuple2('daleth', 'ℸ'),
			_Utils_Tuple2('darr', '↓'),
			_Utils_Tuple2('Darr', '↡'),
			_Utils_Tuple2('dArr', '⇓'),
			_Utils_Tuple2('dash', '‐'),
			_Utils_Tuple2('Dashv', '⫤'),
			_Utils_Tuple2('dashv', '⊣'),
			_Utils_Tuple2('dbkarow', '⤏'),
			_Utils_Tuple2('dblac', '˝'),
			_Utils_Tuple2('Dcaron', 'Ď'),
			_Utils_Tuple2('dcaron', 'ď'),
			_Utils_Tuple2('Dcy', 'Д'),
			_Utils_Tuple2('dcy', 'д'),
			_Utils_Tuple2('ddagger', '‡'),
			_Utils_Tuple2('ddarr', '⇊'),
			_Utils_Tuple2('DD', 'ⅅ'),
			_Utils_Tuple2('dd', 'ⅆ'),
			_Utils_Tuple2('DDotrahd', '⤑'),
			_Utils_Tuple2('ddotseq', '⩷'),
			_Utils_Tuple2('deg', '°'),
			_Utils_Tuple2('Del', '∇'),
			_Utils_Tuple2('Delta', 'Δ'),
			_Utils_Tuple2('delta', 'δ'),
			_Utils_Tuple2('demptyv', '⦱'),
			_Utils_Tuple2('dfisht', '⥿'),
			_Utils_Tuple2('Dfr', '\uD835\uDD07'),
			_Utils_Tuple2('dfr', '\uD835\uDD21'),
			_Utils_Tuple2('dHar', '⥥'),
			_Utils_Tuple2('dharl', '⇃'),
			_Utils_Tuple2('dharr', '⇂'),
			_Utils_Tuple2('DiacriticalAcute', '´'),
			_Utils_Tuple2('DiacriticalDot', '˙'),
			_Utils_Tuple2('DiacriticalDoubleAcute', '˝'),
			_Utils_Tuple2('DiacriticalGrave', '`'),
			_Utils_Tuple2('DiacriticalTilde', '˜'),
			_Utils_Tuple2('diam', '⋄'),
			_Utils_Tuple2('diamond', '⋄'),
			_Utils_Tuple2('Diamond', '⋄'),
			_Utils_Tuple2('diamondsuit', '♦'),
			_Utils_Tuple2('diams', '♦'),
			_Utils_Tuple2('die', '¨'),
			_Utils_Tuple2('DifferentialD', 'ⅆ'),
			_Utils_Tuple2('digamma', 'ϝ'),
			_Utils_Tuple2('disin', '⋲'),
			_Utils_Tuple2('div', '÷'),
			_Utils_Tuple2('divide', '÷'),
			_Utils_Tuple2('divideontimes', '⋇'),
			_Utils_Tuple2('divonx', '⋇'),
			_Utils_Tuple2('DJcy', 'Ђ'),
			_Utils_Tuple2('djcy', 'ђ'),
			_Utils_Tuple2('dlcorn', '⌞'),
			_Utils_Tuple2('dlcrop', '⌍'),
			_Utils_Tuple2('dollar', '$'),
			_Utils_Tuple2('Dopf', '\uD835\uDD3B'),
			_Utils_Tuple2('dopf', '\uD835\uDD55'),
			_Utils_Tuple2('Dot', '¨'),
			_Utils_Tuple2('dot', '˙'),
			_Utils_Tuple2('DotDot', '⃜'),
			_Utils_Tuple2('doteq', '≐'),
			_Utils_Tuple2('doteqdot', '≑'),
			_Utils_Tuple2('DotEqual', '≐'),
			_Utils_Tuple2('dotminus', '∸'),
			_Utils_Tuple2('dotplus', '∔'),
			_Utils_Tuple2('dotsquare', '⊡'),
			_Utils_Tuple2('doublebarwedge', '⌆'),
			_Utils_Tuple2('DoubleContourIntegral', '∯'),
			_Utils_Tuple2('DoubleDot', '¨'),
			_Utils_Tuple2('DoubleDownArrow', '⇓'),
			_Utils_Tuple2('DoubleLeftArrow', '⇐'),
			_Utils_Tuple2('DoubleLeftRightArrow', '⇔'),
			_Utils_Tuple2('DoubleLeftTee', '⫤'),
			_Utils_Tuple2('DoubleLongLeftArrow', '⟸'),
			_Utils_Tuple2('DoubleLongLeftRightArrow', '⟺'),
			_Utils_Tuple2('DoubleLongRightArrow', '⟹'),
			_Utils_Tuple2('DoubleRightArrow', '⇒'),
			_Utils_Tuple2('DoubleRightTee', '⊨'),
			_Utils_Tuple2('DoubleUpArrow', '⇑'),
			_Utils_Tuple2('DoubleUpDownArrow', '⇕'),
			_Utils_Tuple2('DoubleVerticalBar', '∥'),
			_Utils_Tuple2('DownArrowBar', '⤓'),
			_Utils_Tuple2('downarrow', '↓'),
			_Utils_Tuple2('DownArrow', '↓'),
			_Utils_Tuple2('Downarrow', '⇓'),
			_Utils_Tuple2('DownArrowUpArrow', '⇵'),
			_Utils_Tuple2('DownBreve', '̑'),
			_Utils_Tuple2('downdownarrows', '⇊'),
			_Utils_Tuple2('downharpoonleft', '⇃'),
			_Utils_Tuple2('downharpoonright', '⇂'),
			_Utils_Tuple2('DownLeftRightVector', '⥐'),
			_Utils_Tuple2('DownLeftTeeVector', '⥞'),
			_Utils_Tuple2('DownLeftVectorBar', '⥖'),
			_Utils_Tuple2('DownLeftVector', '↽'),
			_Utils_Tuple2('DownRightTeeVector', '⥟'),
			_Utils_Tuple2('DownRightVectorBar', '⥗'),
			_Utils_Tuple2('DownRightVector', '⇁'),
			_Utils_Tuple2('DownTeeArrow', '↧'),
			_Utils_Tuple2('DownTee', '⊤'),
			_Utils_Tuple2('drbkarow', '⤐'),
			_Utils_Tuple2('drcorn', '⌟'),
			_Utils_Tuple2('drcrop', '⌌'),
			_Utils_Tuple2('Dscr', '\uD835\uDC9F'),
			_Utils_Tuple2('dscr', '\uD835\uDCB9'),
			_Utils_Tuple2('DScy', 'Ѕ'),
			_Utils_Tuple2('dscy', 'ѕ'),
			_Utils_Tuple2('dsol', '⧶'),
			_Utils_Tuple2('Dstrok', 'Đ'),
			_Utils_Tuple2('dstrok', 'đ'),
			_Utils_Tuple2('dtdot', '⋱'),
			_Utils_Tuple2('dtri', '▿'),
			_Utils_Tuple2('dtrif', '▾'),
			_Utils_Tuple2('duarr', '⇵'),
			_Utils_Tuple2('duhar', '⥯'),
			_Utils_Tuple2('dwangle', '⦦'),
			_Utils_Tuple2('DZcy', 'Џ'),
			_Utils_Tuple2('dzcy', 'џ'),
			_Utils_Tuple2('dzigrarr', '⟿'),
			_Utils_Tuple2('Eacute', 'É'),
			_Utils_Tuple2('eacute', 'é'),
			_Utils_Tuple2('easter', '⩮'),
			_Utils_Tuple2('Ecaron', 'Ě'),
			_Utils_Tuple2('ecaron', 'ě'),
			_Utils_Tuple2('Ecirc', 'Ê'),
			_Utils_Tuple2('ecirc', 'ê'),
			_Utils_Tuple2('ecir', '≖'),
			_Utils_Tuple2('ecolon', '≕'),
			_Utils_Tuple2('Ecy', 'Э'),
			_Utils_Tuple2('ecy', 'э'),
			_Utils_Tuple2('eDDot', '⩷'),
			_Utils_Tuple2('Edot', 'Ė'),
			_Utils_Tuple2('edot', 'ė'),
			_Utils_Tuple2('eDot', '≑'),
			_Utils_Tuple2('ee', 'ⅇ'),
			_Utils_Tuple2('efDot', '≒'),
			_Utils_Tuple2('Efr', '\uD835\uDD08'),
			_Utils_Tuple2('efr', '\uD835\uDD22'),
			_Utils_Tuple2('eg', '⪚'),
			_Utils_Tuple2('Egrave', 'È'),
			_Utils_Tuple2('egrave', 'è'),
			_Utils_Tuple2('egs', '⪖'),
			_Utils_Tuple2('egsdot', '⪘'),
			_Utils_Tuple2('el', '⪙'),
			_Utils_Tuple2('Element', '∈'),
			_Utils_Tuple2('elinters', '⏧'),
			_Utils_Tuple2('ell', 'ℓ'),
			_Utils_Tuple2('els', '⪕'),
			_Utils_Tuple2('elsdot', '⪗'),
			_Utils_Tuple2('Emacr', 'Ē'),
			_Utils_Tuple2('emacr', 'ē'),
			_Utils_Tuple2('empty', '∅'),
			_Utils_Tuple2('emptyset', '∅'),
			_Utils_Tuple2('EmptySmallSquare', '◻'),
			_Utils_Tuple2('emptyv', '∅'),
			_Utils_Tuple2('EmptyVerySmallSquare', '▫'),
			_Utils_Tuple2('emsp13', '\u2004'),
			_Utils_Tuple2('emsp14', '\u2005'),
			_Utils_Tuple2('emsp', '\u2003'),
			_Utils_Tuple2('ENG', 'Ŋ'),
			_Utils_Tuple2('eng', 'ŋ'),
			_Utils_Tuple2('ensp', '\u2002'),
			_Utils_Tuple2('Eogon', 'Ę'),
			_Utils_Tuple2('eogon', 'ę'),
			_Utils_Tuple2('Eopf', '\uD835\uDD3C'),
			_Utils_Tuple2('eopf', '\uD835\uDD56'),
			_Utils_Tuple2('epar', '⋕'),
			_Utils_Tuple2('eparsl', '⧣'),
			_Utils_Tuple2('eplus', '⩱'),
			_Utils_Tuple2('epsi', 'ε'),
			_Utils_Tuple2('Epsilon', 'Ε'),
			_Utils_Tuple2('epsilon', 'ε'),
			_Utils_Tuple2('epsiv', 'ϵ'),
			_Utils_Tuple2('eqcirc', '≖'),
			_Utils_Tuple2('eqcolon', '≕'),
			_Utils_Tuple2('eqsim', '≂'),
			_Utils_Tuple2('eqslantgtr', '⪖'),
			_Utils_Tuple2('eqslantless', '⪕'),
			_Utils_Tuple2('Equal', '⩵'),
			_Utils_Tuple2('equals', '='),
			_Utils_Tuple2('EqualTilde', '≂'),
			_Utils_Tuple2('equest', '≟'),
			_Utils_Tuple2('Equilibrium', '⇌'),
			_Utils_Tuple2('equiv', '≡'),
			_Utils_Tuple2('equivDD', '⩸'),
			_Utils_Tuple2('eqvparsl', '⧥'),
			_Utils_Tuple2('erarr', '⥱'),
			_Utils_Tuple2('erDot', '≓'),
			_Utils_Tuple2('escr', 'ℯ'),
			_Utils_Tuple2('Escr', 'ℰ'),
			_Utils_Tuple2('esdot', '≐'),
			_Utils_Tuple2('Esim', '⩳'),
			_Utils_Tuple2('esim', '≂'),
			_Utils_Tuple2('Eta', 'Η'),
			_Utils_Tuple2('eta', 'η'),
			_Utils_Tuple2('ETH', 'Ð'),
			_Utils_Tuple2('eth', 'ð'),
			_Utils_Tuple2('Euml', 'Ë'),
			_Utils_Tuple2('euml', 'ë'),
			_Utils_Tuple2('euro', '€'),
			_Utils_Tuple2('excl', '!'),
			_Utils_Tuple2('exist', '∃'),
			_Utils_Tuple2('Exists', '∃'),
			_Utils_Tuple2('expectation', 'ℰ'),
			_Utils_Tuple2('exponentiale', 'ⅇ'),
			_Utils_Tuple2('ExponentialE', 'ⅇ'),
			_Utils_Tuple2('fallingdotseq', '≒'),
			_Utils_Tuple2('Fcy', 'Ф'),
			_Utils_Tuple2('fcy', 'ф'),
			_Utils_Tuple2('female', '♀'),
			_Utils_Tuple2('ffilig', 'ﬃ'),
			_Utils_Tuple2('fflig', 'ﬀ'),
			_Utils_Tuple2('ffllig', 'ﬄ'),
			_Utils_Tuple2('Ffr', '\uD835\uDD09'),
			_Utils_Tuple2('ffr', '\uD835\uDD23'),
			_Utils_Tuple2('filig', 'ﬁ'),
			_Utils_Tuple2('FilledSmallSquare', '◼'),
			_Utils_Tuple2('FilledVerySmallSquare', '▪'),
			_Utils_Tuple2('fjlig', 'fj'),
			_Utils_Tuple2('flat', '♭'),
			_Utils_Tuple2('fllig', 'ﬂ'),
			_Utils_Tuple2('fltns', '▱'),
			_Utils_Tuple2('fnof', 'ƒ'),
			_Utils_Tuple2('Fopf', '\uD835\uDD3D'),
			_Utils_Tuple2('fopf', '\uD835\uDD57'),
			_Utils_Tuple2('forall', '∀'),
			_Utils_Tuple2('ForAll', '∀'),
			_Utils_Tuple2('fork', '⋔'),
			_Utils_Tuple2('forkv', '⫙'),
			_Utils_Tuple2('Fouriertrf', 'ℱ'),
			_Utils_Tuple2('fpartint', '⨍'),
			_Utils_Tuple2('frac12', '½'),
			_Utils_Tuple2('frac13', '⅓'),
			_Utils_Tuple2('frac14', '¼'),
			_Utils_Tuple2('frac15', '⅕'),
			_Utils_Tuple2('frac16', '⅙'),
			_Utils_Tuple2('frac18', '⅛'),
			_Utils_Tuple2('frac23', '⅔'),
			_Utils_Tuple2('frac25', '⅖'),
			_Utils_Tuple2('frac34', '¾'),
			_Utils_Tuple2('frac35', '⅗'),
			_Utils_Tuple2('frac38', '⅜'),
			_Utils_Tuple2('frac45', '⅘'),
			_Utils_Tuple2('frac56', '⅚'),
			_Utils_Tuple2('frac58', '⅝'),
			_Utils_Tuple2('frac78', '⅞'),
			_Utils_Tuple2('frasl', '⁄'),
			_Utils_Tuple2('frown', '⌢'),
			_Utils_Tuple2('fscr', '\uD835\uDCBB'),
			_Utils_Tuple2('Fscr', 'ℱ'),
			_Utils_Tuple2('gacute', 'ǵ'),
			_Utils_Tuple2('Gamma', 'Γ'),
			_Utils_Tuple2('gamma', 'γ'),
			_Utils_Tuple2('Gammad', 'Ϝ'),
			_Utils_Tuple2('gammad', 'ϝ'),
			_Utils_Tuple2('gap', '⪆'),
			_Utils_Tuple2('Gbreve', 'Ğ'),
			_Utils_Tuple2('gbreve', 'ğ'),
			_Utils_Tuple2('Gcedil', 'Ģ'),
			_Utils_Tuple2('Gcirc', 'Ĝ'),
			_Utils_Tuple2('gcirc', 'ĝ'),
			_Utils_Tuple2('Gcy', 'Г'),
			_Utils_Tuple2('gcy', 'г'),
			_Utils_Tuple2('Gdot', 'Ġ'),
			_Utils_Tuple2('gdot', 'ġ'),
			_Utils_Tuple2('ge', '≥'),
			_Utils_Tuple2('gE', '≧'),
			_Utils_Tuple2('gEl', '⪌'),
			_Utils_Tuple2('gel', '⋛'),
			_Utils_Tuple2('geq', '≥'),
			_Utils_Tuple2('geqq', '≧'),
			_Utils_Tuple2('geqslant', '⩾'),
			_Utils_Tuple2('gescc', '⪩'),
			_Utils_Tuple2('ges', '⩾'),
			_Utils_Tuple2('gesdot', '⪀'),
			_Utils_Tuple2('gesdoto', '⪂'),
			_Utils_Tuple2('gesdotol', '⪄'),
			_Utils_Tuple2('gesl', '⋛︀'),
			_Utils_Tuple2('gesles', '⪔'),
			_Utils_Tuple2('Gfr', '\uD835\uDD0A'),
			_Utils_Tuple2('gfr', '\uD835\uDD24'),
			_Utils_Tuple2('gg', '≫'),
			_Utils_Tuple2('Gg', '⋙'),
			_Utils_Tuple2('ggg', '⋙'),
			_Utils_Tuple2('gimel', 'ℷ'),
			_Utils_Tuple2('GJcy', 'Ѓ'),
			_Utils_Tuple2('gjcy', 'ѓ'),
			_Utils_Tuple2('gla', '⪥'),
			_Utils_Tuple2('gl', '≷'),
			_Utils_Tuple2('glE', '⪒'),
			_Utils_Tuple2('glj', '⪤'),
			_Utils_Tuple2('gnap', '⪊'),
			_Utils_Tuple2('gnapprox', '⪊'),
			_Utils_Tuple2('gne', '⪈'),
			_Utils_Tuple2('gnE', '≩'),
			_Utils_Tuple2('gneq', '⪈'),
			_Utils_Tuple2('gneqq', '≩'),
			_Utils_Tuple2('gnsim', '⋧'),
			_Utils_Tuple2('Gopf', '\uD835\uDD3E'),
			_Utils_Tuple2('gopf', '\uD835\uDD58'),
			_Utils_Tuple2('grave', '`'),
			_Utils_Tuple2('GreaterEqual', '≥'),
			_Utils_Tuple2('GreaterEqualLess', '⋛'),
			_Utils_Tuple2('GreaterFullEqual', '≧'),
			_Utils_Tuple2('GreaterGreater', '⪢'),
			_Utils_Tuple2('GreaterLess', '≷'),
			_Utils_Tuple2('GreaterSlantEqual', '⩾'),
			_Utils_Tuple2('GreaterTilde', '≳'),
			_Utils_Tuple2('Gscr', '\uD835\uDCA2'),
			_Utils_Tuple2('gscr', 'ℊ'),
			_Utils_Tuple2('gsim', '≳'),
			_Utils_Tuple2('gsime', '⪎'),
			_Utils_Tuple2('gsiml', '⪐'),
			_Utils_Tuple2('gtcc', '⪧'),
			_Utils_Tuple2('gtcir', '⩺'),
			_Utils_Tuple2('gt', '>'),
			_Utils_Tuple2('GT', '>'),
			_Utils_Tuple2('Gt', '≫'),
			_Utils_Tuple2('gtdot', '⋗'),
			_Utils_Tuple2('gtlPar', '⦕'),
			_Utils_Tuple2('gtquest', '⩼'),
			_Utils_Tuple2('gtrapprox', '⪆'),
			_Utils_Tuple2('gtrarr', '⥸'),
			_Utils_Tuple2('gtrdot', '⋗'),
			_Utils_Tuple2('gtreqless', '⋛'),
			_Utils_Tuple2('gtreqqless', '⪌'),
			_Utils_Tuple2('gtrless', '≷'),
			_Utils_Tuple2('gtrsim', '≳'),
			_Utils_Tuple2('gvertneqq', '≩︀'),
			_Utils_Tuple2('gvnE', '≩︀'),
			_Utils_Tuple2('Hacek', 'ˇ'),
			_Utils_Tuple2('hairsp', '\u200A'),
			_Utils_Tuple2('half', '½'),
			_Utils_Tuple2('hamilt', 'ℋ'),
			_Utils_Tuple2('HARDcy', 'Ъ'),
			_Utils_Tuple2('hardcy', 'ъ'),
			_Utils_Tuple2('harrcir', '⥈'),
			_Utils_Tuple2('harr', '↔'),
			_Utils_Tuple2('hArr', '⇔'),
			_Utils_Tuple2('harrw', '↭'),
			_Utils_Tuple2('Hat', '^'),
			_Utils_Tuple2('hbar', 'ℏ'),
			_Utils_Tuple2('Hcirc', 'Ĥ'),
			_Utils_Tuple2('hcirc', 'ĥ'),
			_Utils_Tuple2('hearts', '♥'),
			_Utils_Tuple2('heartsuit', '♥'),
			_Utils_Tuple2('hellip', '…'),
			_Utils_Tuple2('hercon', '⊹'),
			_Utils_Tuple2('hfr', '\uD835\uDD25'),
			_Utils_Tuple2('Hfr', 'ℌ'),
			_Utils_Tuple2('HilbertSpace', 'ℋ'),
			_Utils_Tuple2('hksearow', '⤥'),
			_Utils_Tuple2('hkswarow', '⤦'),
			_Utils_Tuple2('hoarr', '⇿'),
			_Utils_Tuple2('homtht', '∻'),
			_Utils_Tuple2('hookleftarrow', '↩'),
			_Utils_Tuple2('hookrightarrow', '↪'),
			_Utils_Tuple2('hopf', '\uD835\uDD59'),
			_Utils_Tuple2('Hopf', 'ℍ'),
			_Utils_Tuple2('horbar', '―'),
			_Utils_Tuple2('HorizontalLine', '─'),
			_Utils_Tuple2('hscr', '\uD835\uDCBD'),
			_Utils_Tuple2('Hscr', 'ℋ'),
			_Utils_Tuple2('hslash', 'ℏ'),
			_Utils_Tuple2('Hstrok', 'Ħ'),
			_Utils_Tuple2('hstrok', 'ħ'),
			_Utils_Tuple2('HumpDownHump', '≎'),
			_Utils_Tuple2('HumpEqual', '≏'),
			_Utils_Tuple2('hybull', '⁃'),
			_Utils_Tuple2('hyphen', '‐'),
			_Utils_Tuple2('Iacute', 'Í'),
			_Utils_Tuple2('iacute', 'í'),
			_Utils_Tuple2('ic', '\u2063'),
			_Utils_Tuple2('Icirc', 'Î'),
			_Utils_Tuple2('icirc', 'î'),
			_Utils_Tuple2('Icy', 'И'),
			_Utils_Tuple2('icy', 'и'),
			_Utils_Tuple2('Idot', 'İ'),
			_Utils_Tuple2('IEcy', 'Е'),
			_Utils_Tuple2('iecy', 'е'),
			_Utils_Tuple2('iexcl', '¡'),
			_Utils_Tuple2('iff', '⇔'),
			_Utils_Tuple2('ifr', '\uD835\uDD26'),
			_Utils_Tuple2('Ifr', 'ℑ'),
			_Utils_Tuple2('Igrave', 'Ì'),
			_Utils_Tuple2('igrave', 'ì'),
			_Utils_Tuple2('ii', 'ⅈ'),
			_Utils_Tuple2('iiiint', '⨌'),
			_Utils_Tuple2('iiint', '∭'),
			_Utils_Tuple2('iinfin', '⧜'),
			_Utils_Tuple2('iiota', '℩'),
			_Utils_Tuple2('IJlig', 'Ĳ'),
			_Utils_Tuple2('ijlig', 'ĳ'),
			_Utils_Tuple2('Imacr', 'Ī'),
			_Utils_Tuple2('imacr', 'ī'),
			_Utils_Tuple2('image', 'ℑ'),
			_Utils_Tuple2('ImaginaryI', 'ⅈ'),
			_Utils_Tuple2('imagline', 'ℐ'),
			_Utils_Tuple2('imagpart', 'ℑ'),
			_Utils_Tuple2('imath', 'ı'),
			_Utils_Tuple2('Im', 'ℑ'),
			_Utils_Tuple2('imof', '⊷'),
			_Utils_Tuple2('imped', 'Ƶ'),
			_Utils_Tuple2('Implies', '⇒'),
			_Utils_Tuple2('incare', '℅'),
			_Utils_Tuple2('in', '∈'),
			_Utils_Tuple2('infin', '∞'),
			_Utils_Tuple2('infintie', '⧝'),
			_Utils_Tuple2('inodot', 'ı'),
			_Utils_Tuple2('intcal', '⊺'),
			_Utils_Tuple2('int', '∫'),
			_Utils_Tuple2('Int', '∬'),
			_Utils_Tuple2('integers', 'ℤ'),
			_Utils_Tuple2('Integral', '∫'),
			_Utils_Tuple2('intercal', '⊺'),
			_Utils_Tuple2('Intersection', '⋂'),
			_Utils_Tuple2('intlarhk', '⨗'),
			_Utils_Tuple2('intprod', '⨼'),
			_Utils_Tuple2('InvisibleComma', '\u2063'),
			_Utils_Tuple2('InvisibleTimes', '\u2062'),
			_Utils_Tuple2('IOcy', 'Ё'),
			_Utils_Tuple2('iocy', 'ё'),
			_Utils_Tuple2('Iogon', 'Į'),
			_Utils_Tuple2('iogon', 'į'),
			_Utils_Tuple2('Iopf', '\uD835\uDD40'),
			_Utils_Tuple2('iopf', '\uD835\uDD5A'),
			_Utils_Tuple2('Iota', 'Ι'),
			_Utils_Tuple2('iota', 'ι'),
			_Utils_Tuple2('iprod', '⨼'),
			_Utils_Tuple2('iquest', '¿'),
			_Utils_Tuple2('iscr', '\uD835\uDCBE'),
			_Utils_Tuple2('Iscr', 'ℐ'),
			_Utils_Tuple2('isin', '∈'),
			_Utils_Tuple2('isindot', '⋵'),
			_Utils_Tuple2('isinE', '⋹'),
			_Utils_Tuple2('isins', '⋴'),
			_Utils_Tuple2('isinsv', '⋳'),
			_Utils_Tuple2('isinv', '∈'),
			_Utils_Tuple2('it', '\u2062'),
			_Utils_Tuple2('Itilde', 'Ĩ'),
			_Utils_Tuple2('itilde', 'ĩ'),
			_Utils_Tuple2('Iukcy', 'І'),
			_Utils_Tuple2('iukcy', 'і'),
			_Utils_Tuple2('Iuml', 'Ï'),
			_Utils_Tuple2('iuml', 'ï'),
			_Utils_Tuple2('Jcirc', 'Ĵ'),
			_Utils_Tuple2('jcirc', 'ĵ'),
			_Utils_Tuple2('Jcy', 'Й'),
			_Utils_Tuple2('jcy', 'й'),
			_Utils_Tuple2('Jfr', '\uD835\uDD0D'),
			_Utils_Tuple2('jfr', '\uD835\uDD27'),
			_Utils_Tuple2('jmath', 'ȷ'),
			_Utils_Tuple2('Jopf', '\uD835\uDD41'),
			_Utils_Tuple2('jopf', '\uD835\uDD5B'),
			_Utils_Tuple2('Jscr', '\uD835\uDCA5'),
			_Utils_Tuple2('jscr', '\uD835\uDCBF'),
			_Utils_Tuple2('Jsercy', 'Ј'),
			_Utils_Tuple2('jsercy', 'ј'),
			_Utils_Tuple2('Jukcy', 'Є'),
			_Utils_Tuple2('jukcy', 'є'),
			_Utils_Tuple2('Kappa', 'Κ'),
			_Utils_Tuple2('kappa', 'κ'),
			_Utils_Tuple2('kappav', 'ϰ'),
			_Utils_Tuple2('Kcedil', 'Ķ'),
			_Utils_Tuple2('kcedil', 'ķ'),
			_Utils_Tuple2('Kcy', 'К'),
			_Utils_Tuple2('kcy', 'к'),
			_Utils_Tuple2('Kfr', '\uD835\uDD0E'),
			_Utils_Tuple2('kfr', '\uD835\uDD28'),
			_Utils_Tuple2('kgreen', 'ĸ'),
			_Utils_Tuple2('KHcy', 'Х'),
			_Utils_Tuple2('khcy', 'х'),
			_Utils_Tuple2('KJcy', 'Ќ'),
			_Utils_Tuple2('kjcy', 'ќ'),
			_Utils_Tuple2('Kopf', '\uD835\uDD42'),
			_Utils_Tuple2('kopf', '\uD835\uDD5C'),
			_Utils_Tuple2('Kscr', '\uD835\uDCA6'),
			_Utils_Tuple2('kscr', '\uD835\uDCC0'),
			_Utils_Tuple2('lAarr', '⇚'),
			_Utils_Tuple2('Lacute', 'Ĺ'),
			_Utils_Tuple2('lacute', 'ĺ'),
			_Utils_Tuple2('laemptyv', '⦴'),
			_Utils_Tuple2('lagran', 'ℒ'),
			_Utils_Tuple2('Lambda', 'Λ'),
			_Utils_Tuple2('lambda', 'λ'),
			_Utils_Tuple2('lang', '⟨'),
			_Utils_Tuple2('Lang', '⟪'),
			_Utils_Tuple2('langd', '⦑'),
			_Utils_Tuple2('langle', '⟨'),
			_Utils_Tuple2('lap', '⪅'),
			_Utils_Tuple2('Laplacetrf', 'ℒ'),
			_Utils_Tuple2('laquo', '«'),
			_Utils_Tuple2('larrb', '⇤'),
			_Utils_Tuple2('larrbfs', '⤟'),
			_Utils_Tuple2('larr', '←'),
			_Utils_Tuple2('Larr', '↞'),
			_Utils_Tuple2('lArr', '⇐'),
			_Utils_Tuple2('larrfs', '⤝'),
			_Utils_Tuple2('larrhk', '↩'),
			_Utils_Tuple2('larrlp', '↫'),
			_Utils_Tuple2('larrpl', '⤹'),
			_Utils_Tuple2('larrsim', '⥳'),
			_Utils_Tuple2('larrtl', '↢'),
			_Utils_Tuple2('latail', '⤙'),
			_Utils_Tuple2('lAtail', '⤛'),
			_Utils_Tuple2('lat', '⪫'),
			_Utils_Tuple2('late', '⪭'),
			_Utils_Tuple2('lates', '⪭︀'),
			_Utils_Tuple2('lbarr', '⤌'),
			_Utils_Tuple2('lBarr', '⤎'),
			_Utils_Tuple2('lbbrk', '❲'),
			_Utils_Tuple2('lbrace', '{'),
			_Utils_Tuple2('lbrack', '['),
			_Utils_Tuple2('lbrke', '⦋'),
			_Utils_Tuple2('lbrksld', '⦏'),
			_Utils_Tuple2('lbrkslu', '⦍'),
			_Utils_Tuple2('Lcaron', 'Ľ'),
			_Utils_Tuple2('lcaron', 'ľ'),
			_Utils_Tuple2('Lcedil', 'Ļ'),
			_Utils_Tuple2('lcedil', 'ļ'),
			_Utils_Tuple2('lceil', '⌈'),
			_Utils_Tuple2('lcub', '{'),
			_Utils_Tuple2('Lcy', 'Л'),
			_Utils_Tuple2('lcy', 'л'),
			_Utils_Tuple2('ldca', '⤶'),
			_Utils_Tuple2('ldquo', '“'),
			_Utils_Tuple2('ldquor', '„'),
			_Utils_Tuple2('ldrdhar', '⥧'),
			_Utils_Tuple2('ldrushar', '⥋'),
			_Utils_Tuple2('ldsh', '↲'),
			_Utils_Tuple2('le', '≤'),
			_Utils_Tuple2('lE', '≦'),
			_Utils_Tuple2('LeftAngleBracket', '⟨'),
			_Utils_Tuple2('LeftArrowBar', '⇤'),
			_Utils_Tuple2('leftarrow', '←'),
			_Utils_Tuple2('LeftArrow', '←'),
			_Utils_Tuple2('Leftarrow', '⇐'),
			_Utils_Tuple2('LeftArrowRightArrow', '⇆'),
			_Utils_Tuple2('leftarrowtail', '↢'),
			_Utils_Tuple2('LeftCeiling', '⌈'),
			_Utils_Tuple2('LeftDoubleBracket', '⟦'),
			_Utils_Tuple2('LeftDownTeeVector', '⥡'),
			_Utils_Tuple2('LeftDownVectorBar', '⥙'),
			_Utils_Tuple2('LeftDownVector', '⇃'),
			_Utils_Tuple2('LeftFloor', '⌊'),
			_Utils_Tuple2('leftharpoondown', '↽'),
			_Utils_Tuple2('leftharpoonup', '↼'),
			_Utils_Tuple2('leftleftarrows', '⇇'),
			_Utils_Tuple2('leftrightarrow', '↔'),
			_Utils_Tuple2('LeftRightArrow', '↔'),
			_Utils_Tuple2('Leftrightarrow', '⇔'),
			_Utils_Tuple2('leftrightarrows', '⇆'),
			_Utils_Tuple2('leftrightharpoons', '⇋'),
			_Utils_Tuple2('leftrightsquigarrow', '↭'),
			_Utils_Tuple2('LeftRightVector', '⥎'),
			_Utils_Tuple2('LeftTeeArrow', '↤'),
			_Utils_Tuple2('LeftTee', '⊣'),
			_Utils_Tuple2('LeftTeeVector', '⥚'),
			_Utils_Tuple2('leftthreetimes', '⋋'),
			_Utils_Tuple2('LeftTriangleBar', '⧏'),
			_Utils_Tuple2('LeftTriangle', '⊲'),
			_Utils_Tuple2('LeftTriangleEqual', '⊴'),
			_Utils_Tuple2('LeftUpDownVector', '⥑'),
			_Utils_Tuple2('LeftUpTeeVector', '⥠'),
			_Utils_Tuple2('LeftUpVectorBar', '⥘'),
			_Utils_Tuple2('LeftUpVector', '↿'),
			_Utils_Tuple2('LeftVectorBar', '⥒'),
			_Utils_Tuple2('LeftVector', '↼'),
			_Utils_Tuple2('lEg', '⪋'),
			_Utils_Tuple2('leg', '⋚'),
			_Utils_Tuple2('leq', '≤'),
			_Utils_Tuple2('leqq', '≦'),
			_Utils_Tuple2('leqslant', '⩽'),
			_Utils_Tuple2('lescc', '⪨'),
			_Utils_Tuple2('les', '⩽'),
			_Utils_Tuple2('lesdot', '⩿'),
			_Utils_Tuple2('lesdoto', '⪁'),
			_Utils_Tuple2('lesdotor', '⪃'),
			_Utils_Tuple2('lesg', '⋚︀'),
			_Utils_Tuple2('lesges', '⪓'),
			_Utils_Tuple2('lessapprox', '⪅'),
			_Utils_Tuple2('lessdot', '⋖'),
			_Utils_Tuple2('lesseqgtr', '⋚'),
			_Utils_Tuple2('lesseqqgtr', '⪋'),
			_Utils_Tuple2('LessEqualGreater', '⋚'),
			_Utils_Tuple2('LessFullEqual', '≦'),
			_Utils_Tuple2('LessGreater', '≶'),
			_Utils_Tuple2('lessgtr', '≶'),
			_Utils_Tuple2('LessLess', '⪡'),
			_Utils_Tuple2('lesssim', '≲'),
			_Utils_Tuple2('LessSlantEqual', '⩽'),
			_Utils_Tuple2('LessTilde', '≲'),
			_Utils_Tuple2('lfisht', '⥼'),
			_Utils_Tuple2('lfloor', '⌊'),
			_Utils_Tuple2('Lfr', '\uD835\uDD0F'),
			_Utils_Tuple2('lfr', '\uD835\uDD29'),
			_Utils_Tuple2('lg', '≶'),
			_Utils_Tuple2('lgE', '⪑'),
			_Utils_Tuple2('lHar', '⥢'),
			_Utils_Tuple2('lhard', '↽'),
			_Utils_Tuple2('lharu', '↼'),
			_Utils_Tuple2('lharul', '⥪'),
			_Utils_Tuple2('lhblk', '▄'),
			_Utils_Tuple2('LJcy', 'Љ'),
			_Utils_Tuple2('ljcy', 'љ'),
			_Utils_Tuple2('llarr', '⇇'),
			_Utils_Tuple2('ll', '≪'),
			_Utils_Tuple2('Ll', '⋘'),
			_Utils_Tuple2('llcorner', '⌞'),
			_Utils_Tuple2('Lleftarrow', '⇚'),
			_Utils_Tuple2('llhard', '⥫'),
			_Utils_Tuple2('lltri', '◺'),
			_Utils_Tuple2('Lmidot', 'Ŀ'),
			_Utils_Tuple2('lmidot', 'ŀ'),
			_Utils_Tuple2('lmoustache', '⎰'),
			_Utils_Tuple2('lmoust', '⎰'),
			_Utils_Tuple2('lnap', '⪉'),
			_Utils_Tuple2('lnapprox', '⪉'),
			_Utils_Tuple2('lne', '⪇'),
			_Utils_Tuple2('lnE', '≨'),
			_Utils_Tuple2('lneq', '⪇'),
			_Utils_Tuple2('lneqq', '≨'),
			_Utils_Tuple2('lnsim', '⋦'),
			_Utils_Tuple2('loang', '⟬'),
			_Utils_Tuple2('loarr', '⇽'),
			_Utils_Tuple2('lobrk', '⟦'),
			_Utils_Tuple2('longleftarrow', '⟵'),
			_Utils_Tuple2('LongLeftArrow', '⟵'),
			_Utils_Tuple2('Longleftarrow', '⟸'),
			_Utils_Tuple2('longleftrightarrow', '⟷'),
			_Utils_Tuple2('LongLeftRightArrow', '⟷'),
			_Utils_Tuple2('Longleftrightarrow', '⟺'),
			_Utils_Tuple2('longmapsto', '⟼'),
			_Utils_Tuple2('longrightarrow', '⟶'),
			_Utils_Tuple2('LongRightArrow', '⟶'),
			_Utils_Tuple2('Longrightarrow', '⟹'),
			_Utils_Tuple2('looparrowleft', '↫'),
			_Utils_Tuple2('looparrowright', '↬'),
			_Utils_Tuple2('lopar', '⦅'),
			_Utils_Tuple2('Lopf', '\uD835\uDD43'),
			_Utils_Tuple2('lopf', '\uD835\uDD5D'),
			_Utils_Tuple2('loplus', '⨭'),
			_Utils_Tuple2('lotimes', '⨴'),
			_Utils_Tuple2('lowast', '∗'),
			_Utils_Tuple2('lowbar', '_'),
			_Utils_Tuple2('LowerLeftArrow', '↙'),
			_Utils_Tuple2('LowerRightArrow', '↘'),
			_Utils_Tuple2('loz', '◊'),
			_Utils_Tuple2('lozenge', '◊'),
			_Utils_Tuple2('lozf', '⧫'),
			_Utils_Tuple2('lpar', '('),
			_Utils_Tuple2('lparlt', '⦓'),
			_Utils_Tuple2('lrarr', '⇆'),
			_Utils_Tuple2('lrcorner', '⌟'),
			_Utils_Tuple2('lrhar', '⇋'),
			_Utils_Tuple2('lrhard', '⥭'),
			_Utils_Tuple2('lrm', '\u200E'),
			_Utils_Tuple2('lrtri', '⊿'),
			_Utils_Tuple2('lsaquo', '‹'),
			_Utils_Tuple2('lscr', '\uD835\uDCC1'),
			_Utils_Tuple2('Lscr', 'ℒ'),
			_Utils_Tuple2('lsh', '↰'),
			_Utils_Tuple2('Lsh', '↰'),
			_Utils_Tuple2('lsim', '≲'),
			_Utils_Tuple2('lsime', '⪍'),
			_Utils_Tuple2('lsimg', '⪏'),
			_Utils_Tuple2('lsqb', '['),
			_Utils_Tuple2('lsquo', '‘'),
			_Utils_Tuple2('lsquor', '‚'),
			_Utils_Tuple2('Lstrok', 'Ł'),
			_Utils_Tuple2('lstrok', 'ł'),
			_Utils_Tuple2('ltcc', '⪦'),
			_Utils_Tuple2('ltcir', '⩹'),
			_Utils_Tuple2('lt', '<'),
			_Utils_Tuple2('LT', '<'),
			_Utils_Tuple2('Lt', '≪'),
			_Utils_Tuple2('ltdot', '⋖'),
			_Utils_Tuple2('lthree', '⋋'),
			_Utils_Tuple2('ltimes', '⋉'),
			_Utils_Tuple2('ltlarr', '⥶'),
			_Utils_Tuple2('ltquest', '⩻'),
			_Utils_Tuple2('ltri', '◃'),
			_Utils_Tuple2('ltrie', '⊴'),
			_Utils_Tuple2('ltrif', '◂'),
			_Utils_Tuple2('ltrPar', '⦖'),
			_Utils_Tuple2('lurdshar', '⥊'),
			_Utils_Tuple2('luruhar', '⥦'),
			_Utils_Tuple2('lvertneqq', '≨︀'),
			_Utils_Tuple2('lvnE', '≨︀'),
			_Utils_Tuple2('macr', '¯'),
			_Utils_Tuple2('male', '♂'),
			_Utils_Tuple2('malt', '✠'),
			_Utils_Tuple2('maltese', '✠'),
			_Utils_Tuple2('Map', '⤅'),
			_Utils_Tuple2('map', '↦'),
			_Utils_Tuple2('mapsto', '↦'),
			_Utils_Tuple2('mapstodown', '↧'),
			_Utils_Tuple2('mapstoleft', '↤'),
			_Utils_Tuple2('mapstoup', '↥'),
			_Utils_Tuple2('marker', '▮'),
			_Utils_Tuple2('mcomma', '⨩'),
			_Utils_Tuple2('Mcy', 'М'),
			_Utils_Tuple2('mcy', 'м'),
			_Utils_Tuple2('mdash', '—'),
			_Utils_Tuple2('mDDot', '∺'),
			_Utils_Tuple2('measuredangle', '∡'),
			_Utils_Tuple2('MediumSpace', '\u205F'),
			_Utils_Tuple2('Mellintrf', 'ℳ'),
			_Utils_Tuple2('Mfr', '\uD835\uDD10'),
			_Utils_Tuple2('mfr', '\uD835\uDD2A'),
			_Utils_Tuple2('mho', '℧'),
			_Utils_Tuple2('micro', 'µ'),
			_Utils_Tuple2('midast', '*'),
			_Utils_Tuple2('midcir', '⫰'),
			_Utils_Tuple2('mid', '∣'),
			_Utils_Tuple2('middot', '·'),
			_Utils_Tuple2('minusb', '⊟'),
			_Utils_Tuple2('minus', '−'),
			_Utils_Tuple2('minusd', '∸'),
			_Utils_Tuple2('minusdu', '⨪'),
			_Utils_Tuple2('MinusPlus', '∓'),
			_Utils_Tuple2('mlcp', '⫛'),
			_Utils_Tuple2('mldr', '…'),
			_Utils_Tuple2('mnplus', '∓'),
			_Utils_Tuple2('models', '⊧'),
			_Utils_Tuple2('Mopf', '\uD835\uDD44'),
			_Utils_Tuple2('mopf', '\uD835\uDD5E'),
			_Utils_Tuple2('mp', '∓'),
			_Utils_Tuple2('mscr', '\uD835\uDCC2'),
			_Utils_Tuple2('Mscr', 'ℳ'),
			_Utils_Tuple2('mstpos', '∾'),
			_Utils_Tuple2('Mu', 'Μ'),
			_Utils_Tuple2('mu', 'μ'),
			_Utils_Tuple2('multimap', '⊸'),
			_Utils_Tuple2('mumap', '⊸'),
			_Utils_Tuple2('nabla', '∇'),
			_Utils_Tuple2('Nacute', 'Ń'),
			_Utils_Tuple2('nacute', 'ń'),
			_Utils_Tuple2('nang', '∠⃒'),
			_Utils_Tuple2('nap', '≉'),
			_Utils_Tuple2('napE', '⩰̸'),
			_Utils_Tuple2('napid', '≋̸'),
			_Utils_Tuple2('napos', 'ŉ'),
			_Utils_Tuple2('napprox', '≉'),
			_Utils_Tuple2('natural', '♮'),
			_Utils_Tuple2('naturals', 'ℕ'),
			_Utils_Tuple2('natur', '♮'),
			_Utils_Tuple2('nbsp', '\u00A0'),
			_Utils_Tuple2('nbump', '≎̸'),
			_Utils_Tuple2('nbumpe', '≏̸'),
			_Utils_Tuple2('ncap', '⩃'),
			_Utils_Tuple2('Ncaron', 'Ň'),
			_Utils_Tuple2('ncaron', 'ň'),
			_Utils_Tuple2('Ncedil', 'Ņ'),
			_Utils_Tuple2('ncedil', 'ņ'),
			_Utils_Tuple2('ncong', '≇'),
			_Utils_Tuple2('ncongdot', '⩭̸'),
			_Utils_Tuple2('ncup', '⩂'),
			_Utils_Tuple2('Ncy', 'Н'),
			_Utils_Tuple2('ncy', 'н'),
			_Utils_Tuple2('ndash', '–'),
			_Utils_Tuple2('nearhk', '⤤'),
			_Utils_Tuple2('nearr', '↗'),
			_Utils_Tuple2('neArr', '⇗'),
			_Utils_Tuple2('nearrow', '↗'),
			_Utils_Tuple2('ne', '≠'),
			_Utils_Tuple2('nedot', '≐̸'),
			_Utils_Tuple2('NegativeMediumSpace', '\u200B'),
			_Utils_Tuple2('NegativeThickSpace', '\u200B'),
			_Utils_Tuple2('NegativeThinSpace', '\u200B'),
			_Utils_Tuple2('NegativeVeryThinSpace', '\u200B'),
			_Utils_Tuple2('nequiv', '≢'),
			_Utils_Tuple2('nesear', '⤨'),
			_Utils_Tuple2('nesim', '≂̸'),
			_Utils_Tuple2('NestedGreaterGreater', '≫'),
			_Utils_Tuple2('NestedLessLess', '≪'),
			_Utils_Tuple2('NewLine', '\n'),
			_Utils_Tuple2('nexist', '∄'),
			_Utils_Tuple2('nexists', '∄'),
			_Utils_Tuple2('Nfr', '\uD835\uDD11'),
			_Utils_Tuple2('nfr', '\uD835\uDD2B'),
			_Utils_Tuple2('ngE', '≧̸'),
			_Utils_Tuple2('nge', '≱'),
			_Utils_Tuple2('ngeq', '≱'),
			_Utils_Tuple2('ngeqq', '≧̸'),
			_Utils_Tuple2('ngeqslant', '⩾̸'),
			_Utils_Tuple2('nges', '⩾̸'),
			_Utils_Tuple2('nGg', '⋙̸'),
			_Utils_Tuple2('ngsim', '≵'),
			_Utils_Tuple2('nGt', '≫⃒'),
			_Utils_Tuple2('ngt', '≯'),
			_Utils_Tuple2('ngtr', '≯'),
			_Utils_Tuple2('nGtv', '≫̸'),
			_Utils_Tuple2('nharr', '↮'),
			_Utils_Tuple2('nhArr', '⇎'),
			_Utils_Tuple2('nhpar', '⫲'),
			_Utils_Tuple2('ni', '∋'),
			_Utils_Tuple2('nis', '⋼'),
			_Utils_Tuple2('nisd', '⋺'),
			_Utils_Tuple2('niv', '∋'),
			_Utils_Tuple2('NJcy', 'Њ'),
			_Utils_Tuple2('njcy', 'њ'),
			_Utils_Tuple2('nlarr', '↚'),
			_Utils_Tuple2('nlArr', '⇍'),
			_Utils_Tuple2('nldr', '‥'),
			_Utils_Tuple2('nlE', '≦̸'),
			_Utils_Tuple2('nle', '≰'),
			_Utils_Tuple2('nleftarrow', '↚'),
			_Utils_Tuple2('nLeftarrow', '⇍'),
			_Utils_Tuple2('nleftrightarrow', '↮'),
			_Utils_Tuple2('nLeftrightarrow', '⇎'),
			_Utils_Tuple2('nleq', '≰'),
			_Utils_Tuple2('nleqq', '≦̸'),
			_Utils_Tuple2('nleqslant', '⩽̸'),
			_Utils_Tuple2('nles', '⩽̸'),
			_Utils_Tuple2('nless', '≮'),
			_Utils_Tuple2('nLl', '⋘̸'),
			_Utils_Tuple2('nlsim', '≴'),
			_Utils_Tuple2('nLt', '≪⃒'),
			_Utils_Tuple2('nlt', '≮'),
			_Utils_Tuple2('nltri', '⋪'),
			_Utils_Tuple2('nltrie', '⋬'),
			_Utils_Tuple2('nLtv', '≪̸'),
			_Utils_Tuple2('nmid', '∤'),
			_Utils_Tuple2('NoBreak', '\u2060'),
			_Utils_Tuple2('NonBreakingSpace', '\u00A0'),
			_Utils_Tuple2('nopf', '\uD835\uDD5F'),
			_Utils_Tuple2('Nopf', 'ℕ'),
			_Utils_Tuple2('Not', '⫬'),
			_Utils_Tuple2('not', '¬'),
			_Utils_Tuple2('NotCongruent', '≢'),
			_Utils_Tuple2('NotCupCap', '≭'),
			_Utils_Tuple2('NotDoubleVerticalBar', '∦'),
			_Utils_Tuple2('NotElement', '∉'),
			_Utils_Tuple2('NotEqual', '≠'),
			_Utils_Tuple2('NotEqualTilde', '≂̸'),
			_Utils_Tuple2('NotExists', '∄'),
			_Utils_Tuple2('NotGreater', '≯'),
			_Utils_Tuple2('NotGreaterEqual', '≱'),
			_Utils_Tuple2('NotGreaterFullEqual', '≧̸'),
			_Utils_Tuple2('NotGreaterGreater', '≫̸'),
			_Utils_Tuple2('NotGreaterLess', '≹'),
			_Utils_Tuple2('NotGreaterSlantEqual', '⩾̸'),
			_Utils_Tuple2('NotGreaterTilde', '≵'),
			_Utils_Tuple2('NotHumpDownHump', '≎̸'),
			_Utils_Tuple2('NotHumpEqual', '≏̸'),
			_Utils_Tuple2('notin', '∉'),
			_Utils_Tuple2('notindot', '⋵̸'),
			_Utils_Tuple2('notinE', '⋹̸'),
			_Utils_Tuple2('notinva', '∉'),
			_Utils_Tuple2('notinvb', '⋷'),
			_Utils_Tuple2('notinvc', '⋶'),
			_Utils_Tuple2('NotLeftTriangleBar', '⧏̸'),
			_Utils_Tuple2('NotLeftTriangle', '⋪'),
			_Utils_Tuple2('NotLeftTriangleEqual', '⋬'),
			_Utils_Tuple2('NotLess', '≮'),
			_Utils_Tuple2('NotLessEqual', '≰'),
			_Utils_Tuple2('NotLessGreater', '≸'),
			_Utils_Tuple2('NotLessLess', '≪̸'),
			_Utils_Tuple2('NotLessSlantEqual', '⩽̸'),
			_Utils_Tuple2('NotLessTilde', '≴'),
			_Utils_Tuple2('NotNestedGreaterGreater', '⪢̸'),
			_Utils_Tuple2('NotNestedLessLess', '⪡̸'),
			_Utils_Tuple2('notni', '∌'),
			_Utils_Tuple2('notniva', '∌'),
			_Utils_Tuple2('notnivb', '⋾'),
			_Utils_Tuple2('notnivc', '⋽'),
			_Utils_Tuple2('NotPrecedes', '⊀'),
			_Utils_Tuple2('NotPrecedesEqual', '⪯̸'),
			_Utils_Tuple2('NotPrecedesSlantEqual', '⋠'),
			_Utils_Tuple2('NotReverseElement', '∌'),
			_Utils_Tuple2('NotRightTriangleBar', '⧐̸'),
			_Utils_Tuple2('NotRightTriangle', '⋫'),
			_Utils_Tuple2('NotRightTriangleEqual', '⋭'),
			_Utils_Tuple2('NotSquareSubset', '⊏̸'),
			_Utils_Tuple2('NotSquareSubsetEqual', '⋢'),
			_Utils_Tuple2('NotSquareSuperset', '⊐̸'),
			_Utils_Tuple2('NotSquareSupersetEqual', '⋣'),
			_Utils_Tuple2('NotSubset', '⊂⃒'),
			_Utils_Tuple2('NotSubsetEqual', '⊈'),
			_Utils_Tuple2('NotSucceeds', '⊁'),
			_Utils_Tuple2('NotSucceedsEqual', '⪰̸'),
			_Utils_Tuple2('NotSucceedsSlantEqual', '⋡'),
			_Utils_Tuple2('NotSucceedsTilde', '≿̸'),
			_Utils_Tuple2('NotSuperset', '⊃⃒'),
			_Utils_Tuple2('NotSupersetEqual', '⊉'),
			_Utils_Tuple2('NotTilde', '≁'),
			_Utils_Tuple2('NotTildeEqual', '≄'),
			_Utils_Tuple2('NotTildeFullEqual', '≇'),
			_Utils_Tuple2('NotTildeTilde', '≉'),
			_Utils_Tuple2('NotVerticalBar', '∤'),
			_Utils_Tuple2('nparallel', '∦'),
			_Utils_Tuple2('npar', '∦'),
			_Utils_Tuple2('nparsl', '⫽⃥'),
			_Utils_Tuple2('npart', '∂̸'),
			_Utils_Tuple2('npolint', '⨔'),
			_Utils_Tuple2('npr', '⊀'),
			_Utils_Tuple2('nprcue', '⋠'),
			_Utils_Tuple2('nprec', '⊀'),
			_Utils_Tuple2('npreceq', '⪯̸'),
			_Utils_Tuple2('npre', '⪯̸'),
			_Utils_Tuple2('nrarrc', '⤳̸'),
			_Utils_Tuple2('nrarr', '↛'),
			_Utils_Tuple2('nrArr', '⇏'),
			_Utils_Tuple2('nrarrw', '↝̸'),
			_Utils_Tuple2('nrightarrow', '↛'),
			_Utils_Tuple2('nRightarrow', '⇏'),
			_Utils_Tuple2('nrtri', '⋫'),
			_Utils_Tuple2('nrtrie', '⋭'),
			_Utils_Tuple2('nsc', '⊁'),
			_Utils_Tuple2('nsccue', '⋡'),
			_Utils_Tuple2('nsce', '⪰̸'),
			_Utils_Tuple2('Nscr', '\uD835\uDCA9'),
			_Utils_Tuple2('nscr', '\uD835\uDCC3'),
			_Utils_Tuple2('nshortmid', '∤'),
			_Utils_Tuple2('nshortparallel', '∦'),
			_Utils_Tuple2('nsim', '≁'),
			_Utils_Tuple2('nsime', '≄'),
			_Utils_Tuple2('nsimeq', '≄'),
			_Utils_Tuple2('nsmid', '∤'),
			_Utils_Tuple2('nspar', '∦'),
			_Utils_Tuple2('nsqsube', '⋢'),
			_Utils_Tuple2('nsqsupe', '⋣'),
			_Utils_Tuple2('nsub', '⊄'),
			_Utils_Tuple2('nsubE', '⫅̸'),
			_Utils_Tuple2('nsube', '⊈'),
			_Utils_Tuple2('nsubset', '⊂⃒'),
			_Utils_Tuple2('nsubseteq', '⊈'),
			_Utils_Tuple2('nsubseteqq', '⫅̸'),
			_Utils_Tuple2('nsucc', '⊁'),
			_Utils_Tuple2('nsucceq', '⪰̸'),
			_Utils_Tuple2('nsup', '⊅'),
			_Utils_Tuple2('nsupE', '⫆̸'),
			_Utils_Tuple2('nsupe', '⊉'),
			_Utils_Tuple2('nsupset', '⊃⃒'),
			_Utils_Tuple2('nsupseteq', '⊉'),
			_Utils_Tuple2('nsupseteqq', '⫆̸'),
			_Utils_Tuple2('ntgl', '≹'),
			_Utils_Tuple2('Ntilde', 'Ñ'),
			_Utils_Tuple2('ntilde', 'ñ'),
			_Utils_Tuple2('ntlg', '≸'),
			_Utils_Tuple2('ntriangleleft', '⋪'),
			_Utils_Tuple2('ntrianglelefteq', '⋬'),
			_Utils_Tuple2('ntriangleright', '⋫'),
			_Utils_Tuple2('ntrianglerighteq', '⋭'),
			_Utils_Tuple2('Nu', 'Ν'),
			_Utils_Tuple2('nu', 'ν'),
			_Utils_Tuple2('num', '#'),
			_Utils_Tuple2('numero', '№'),
			_Utils_Tuple2('numsp', '\u2007'),
			_Utils_Tuple2('nvap', '≍⃒'),
			_Utils_Tuple2('nvdash', '⊬'),
			_Utils_Tuple2('nvDash', '⊭'),
			_Utils_Tuple2('nVdash', '⊮'),
			_Utils_Tuple2('nVDash', '⊯'),
			_Utils_Tuple2('nvge', '≥⃒'),
			_Utils_Tuple2('nvgt', '>⃒'),
			_Utils_Tuple2('nvHarr', '⤄'),
			_Utils_Tuple2('nvinfin', '⧞'),
			_Utils_Tuple2('nvlArr', '⤂'),
			_Utils_Tuple2('nvle', '≤⃒'),
			_Utils_Tuple2('nvlt', '<⃒'),
			_Utils_Tuple2('nvltrie', '⊴⃒'),
			_Utils_Tuple2('nvrArr', '⤃'),
			_Utils_Tuple2('nvrtrie', '⊵⃒'),
			_Utils_Tuple2('nvsim', '∼⃒'),
			_Utils_Tuple2('nwarhk', '⤣'),
			_Utils_Tuple2('nwarr', '↖'),
			_Utils_Tuple2('nwArr', '⇖'),
			_Utils_Tuple2('nwarrow', '↖'),
			_Utils_Tuple2('nwnear', '⤧'),
			_Utils_Tuple2('Oacute', 'Ó'),
			_Utils_Tuple2('oacute', 'ó'),
			_Utils_Tuple2('oast', '⊛'),
			_Utils_Tuple2('Ocirc', 'Ô'),
			_Utils_Tuple2('ocirc', 'ô'),
			_Utils_Tuple2('ocir', '⊚'),
			_Utils_Tuple2('Ocy', 'О'),
			_Utils_Tuple2('ocy', 'о'),
			_Utils_Tuple2('odash', '⊝'),
			_Utils_Tuple2('Odblac', 'Ő'),
			_Utils_Tuple2('odblac', 'ő'),
			_Utils_Tuple2('odiv', '⨸'),
			_Utils_Tuple2('odot', '⊙'),
			_Utils_Tuple2('odsold', '⦼'),
			_Utils_Tuple2('OElig', 'Œ'),
			_Utils_Tuple2('oelig', 'œ'),
			_Utils_Tuple2('ofcir', '⦿'),
			_Utils_Tuple2('Ofr', '\uD835\uDD12'),
			_Utils_Tuple2('ofr', '\uD835\uDD2C'),
			_Utils_Tuple2('ogon', '˛'),
			_Utils_Tuple2('Ograve', 'Ò'),
			_Utils_Tuple2('ograve', 'ò'),
			_Utils_Tuple2('ogt', '⧁'),
			_Utils_Tuple2('ohbar', '⦵'),
			_Utils_Tuple2('ohm', 'Ω'),
			_Utils_Tuple2('oint', '∮'),
			_Utils_Tuple2('olarr', '↺'),
			_Utils_Tuple2('olcir', '⦾'),
			_Utils_Tuple2('olcross', '⦻'),
			_Utils_Tuple2('oline', '‾'),
			_Utils_Tuple2('olt', '⧀'),
			_Utils_Tuple2('Omacr', 'Ō'),
			_Utils_Tuple2('omacr', 'ō'),
			_Utils_Tuple2('Omega', 'Ω'),
			_Utils_Tuple2('omega', 'ω'),
			_Utils_Tuple2('Omicron', 'Ο'),
			_Utils_Tuple2('omicron', 'ο'),
			_Utils_Tuple2('omid', '⦶'),
			_Utils_Tuple2('ominus', '⊖'),
			_Utils_Tuple2('Oopf', '\uD835\uDD46'),
			_Utils_Tuple2('oopf', '\uD835\uDD60'),
			_Utils_Tuple2('opar', '⦷'),
			_Utils_Tuple2('OpenCurlyDoubleQuote', '“'),
			_Utils_Tuple2('OpenCurlyQuote', '‘'),
			_Utils_Tuple2('operp', '⦹'),
			_Utils_Tuple2('oplus', '⊕'),
			_Utils_Tuple2('orarr', '↻'),
			_Utils_Tuple2('Or', '⩔'),
			_Utils_Tuple2('or', '∨'),
			_Utils_Tuple2('ord', '⩝'),
			_Utils_Tuple2('order', 'ℴ'),
			_Utils_Tuple2('orderof', 'ℴ'),
			_Utils_Tuple2('ordf', 'ª'),
			_Utils_Tuple2('ordm', 'º'),
			_Utils_Tuple2('origof', '⊶'),
			_Utils_Tuple2('oror', '⩖'),
			_Utils_Tuple2('orslope', '⩗'),
			_Utils_Tuple2('orv', '⩛'),
			_Utils_Tuple2('oS', 'Ⓢ'),
			_Utils_Tuple2('Oscr', '\uD835\uDCAA'),
			_Utils_Tuple2('oscr', 'ℴ'),
			_Utils_Tuple2('Oslash', 'Ø'),
			_Utils_Tuple2('oslash', 'ø'),
			_Utils_Tuple2('osol', '⊘'),
			_Utils_Tuple2('Otilde', 'Õ'),
			_Utils_Tuple2('otilde', 'õ'),
			_Utils_Tuple2('otimesas', '⨶'),
			_Utils_Tuple2('Otimes', '⨷'),
			_Utils_Tuple2('otimes', '⊗'),
			_Utils_Tuple2('Ouml', 'Ö'),
			_Utils_Tuple2('ouml', 'ö'),
			_Utils_Tuple2('ovbar', '⌽'),
			_Utils_Tuple2('OverBar', '‾'),
			_Utils_Tuple2('OverBrace', '⏞'),
			_Utils_Tuple2('OverBracket', '⎴'),
			_Utils_Tuple2('OverParenthesis', '⏜'),
			_Utils_Tuple2('para', '¶'),
			_Utils_Tuple2('parallel', '∥'),
			_Utils_Tuple2('par', '∥'),
			_Utils_Tuple2('parsim', '⫳'),
			_Utils_Tuple2('parsl', '⫽'),
			_Utils_Tuple2('part', '∂'),
			_Utils_Tuple2('PartialD', '∂'),
			_Utils_Tuple2('Pcy', 'П'),
			_Utils_Tuple2('pcy', 'п'),
			_Utils_Tuple2('percnt', '%'),
			_Utils_Tuple2('period', '.'),
			_Utils_Tuple2('permil', '‰'),
			_Utils_Tuple2('perp', '⊥'),
			_Utils_Tuple2('pertenk', '‱'),
			_Utils_Tuple2('Pfr', '\uD835\uDD13'),
			_Utils_Tuple2('pfr', '\uD835\uDD2D'),
			_Utils_Tuple2('Phi', 'Φ'),
			_Utils_Tuple2('phi', 'φ'),
			_Utils_Tuple2('phiv', 'ϕ'),
			_Utils_Tuple2('phmmat', 'ℳ'),
			_Utils_Tuple2('phone', '☎'),
			_Utils_Tuple2('Pi', 'Π'),
			_Utils_Tuple2('pi', 'π'),
			_Utils_Tuple2('pitchfork', '⋔'),
			_Utils_Tuple2('piv', 'ϖ'),
			_Utils_Tuple2('planck', 'ℏ'),
			_Utils_Tuple2('planckh', 'ℎ'),
			_Utils_Tuple2('plankv', 'ℏ'),
			_Utils_Tuple2('plusacir', '⨣'),
			_Utils_Tuple2('plusb', '⊞'),
			_Utils_Tuple2('pluscir', '⨢'),
			_Utils_Tuple2('plus', '+'),
			_Utils_Tuple2('plusdo', '∔'),
			_Utils_Tuple2('plusdu', '⨥'),
			_Utils_Tuple2('pluse', '⩲'),
			_Utils_Tuple2('PlusMinus', '±'),
			_Utils_Tuple2('plusmn', '±'),
			_Utils_Tuple2('plussim', '⨦'),
			_Utils_Tuple2('plustwo', '⨧'),
			_Utils_Tuple2('pm', '±'),
			_Utils_Tuple2('Poincareplane', 'ℌ'),
			_Utils_Tuple2('pointint', '⨕'),
			_Utils_Tuple2('popf', '\uD835\uDD61'),
			_Utils_Tuple2('Popf', 'ℙ'),
			_Utils_Tuple2('pound', '£'),
			_Utils_Tuple2('prap', '⪷'),
			_Utils_Tuple2('Pr', '⪻'),
			_Utils_Tuple2('pr', '≺'),
			_Utils_Tuple2('prcue', '≼'),
			_Utils_Tuple2('precapprox', '⪷'),
			_Utils_Tuple2('prec', '≺'),
			_Utils_Tuple2('preccurlyeq', '≼'),
			_Utils_Tuple2('Precedes', '≺'),
			_Utils_Tuple2('PrecedesEqual', '⪯'),
			_Utils_Tuple2('PrecedesSlantEqual', '≼'),
			_Utils_Tuple2('PrecedesTilde', '≾'),
			_Utils_Tuple2('preceq', '⪯'),
			_Utils_Tuple2('precnapprox', '⪹'),
			_Utils_Tuple2('precneqq', '⪵'),
			_Utils_Tuple2('precnsim', '⋨'),
			_Utils_Tuple2('pre', '⪯'),
			_Utils_Tuple2('prE', '⪳'),
			_Utils_Tuple2('precsim', '≾'),
			_Utils_Tuple2('prime', '′'),
			_Utils_Tuple2('Prime', '″'),
			_Utils_Tuple2('primes', 'ℙ'),
			_Utils_Tuple2('prnap', '⪹'),
			_Utils_Tuple2('prnE', '⪵'),
			_Utils_Tuple2('prnsim', '⋨'),
			_Utils_Tuple2('prod', '∏'),
			_Utils_Tuple2('Product', '∏'),
			_Utils_Tuple2('profalar', '⌮'),
			_Utils_Tuple2('profline', '⌒'),
			_Utils_Tuple2('profsurf', '⌓'),
			_Utils_Tuple2('prop', '∝'),
			_Utils_Tuple2('Proportional', '∝'),
			_Utils_Tuple2('Proportion', '∷'),
			_Utils_Tuple2('propto', '∝'),
			_Utils_Tuple2('prsim', '≾'),
			_Utils_Tuple2('prurel', '⊰'),
			_Utils_Tuple2('Pscr', '\uD835\uDCAB'),
			_Utils_Tuple2('pscr', '\uD835\uDCC5'),
			_Utils_Tuple2('Psi', 'Ψ'),
			_Utils_Tuple2('psi', 'ψ'),
			_Utils_Tuple2('puncsp', '\u2008'),
			_Utils_Tuple2('Qfr', '\uD835\uDD14'),
			_Utils_Tuple2('qfr', '\uD835\uDD2E'),
			_Utils_Tuple2('qint', '⨌'),
			_Utils_Tuple2('qopf', '\uD835\uDD62'),
			_Utils_Tuple2('Qopf', 'ℚ'),
			_Utils_Tuple2('qprime', '⁗'),
			_Utils_Tuple2('Qscr', '\uD835\uDCAC'),
			_Utils_Tuple2('qscr', '\uD835\uDCC6'),
			_Utils_Tuple2('quaternions', 'ℍ'),
			_Utils_Tuple2('quatint', '⨖'),
			_Utils_Tuple2('quest', '?'),
			_Utils_Tuple2('questeq', '≟'),
			_Utils_Tuple2('quot', '\"'),
			_Utils_Tuple2('QUOT', '\"'),
			_Utils_Tuple2('rAarr', '⇛'),
			_Utils_Tuple2('race', '∽̱'),
			_Utils_Tuple2('Racute', 'Ŕ'),
			_Utils_Tuple2('racute', 'ŕ'),
			_Utils_Tuple2('radic', '√'),
			_Utils_Tuple2('raemptyv', '⦳'),
			_Utils_Tuple2('rang', '⟩'),
			_Utils_Tuple2('Rang', '⟫'),
			_Utils_Tuple2('rangd', '⦒'),
			_Utils_Tuple2('range', '⦥'),
			_Utils_Tuple2('rangle', '⟩'),
			_Utils_Tuple2('raquo', '»'),
			_Utils_Tuple2('rarrap', '⥵'),
			_Utils_Tuple2('rarrb', '⇥'),
			_Utils_Tuple2('rarrbfs', '⤠'),
			_Utils_Tuple2('rarrc', '⤳'),
			_Utils_Tuple2('rarr', '→'),
			_Utils_Tuple2('Rarr', '↠'),
			_Utils_Tuple2('rArr', '⇒'),
			_Utils_Tuple2('rarrfs', '⤞'),
			_Utils_Tuple2('rarrhk', '↪'),
			_Utils_Tuple2('rarrlp', '↬'),
			_Utils_Tuple2('rarrpl', '⥅'),
			_Utils_Tuple2('rarrsim', '⥴'),
			_Utils_Tuple2('Rarrtl', '⤖'),
			_Utils_Tuple2('rarrtl', '↣'),
			_Utils_Tuple2('rarrw', '↝'),
			_Utils_Tuple2('ratail', '⤚'),
			_Utils_Tuple2('rAtail', '⤜'),
			_Utils_Tuple2('ratio', '∶'),
			_Utils_Tuple2('rationals', 'ℚ'),
			_Utils_Tuple2('rbarr', '⤍'),
			_Utils_Tuple2('rBarr', '⤏'),
			_Utils_Tuple2('RBarr', '⤐'),
			_Utils_Tuple2('rbbrk', '❳'),
			_Utils_Tuple2('rbrace', '}'),
			_Utils_Tuple2('rbrack', ']'),
			_Utils_Tuple2('rbrke', '⦌'),
			_Utils_Tuple2('rbrksld', '⦎'),
			_Utils_Tuple2('rbrkslu', '⦐'),
			_Utils_Tuple2('Rcaron', 'Ř'),
			_Utils_Tuple2('rcaron', 'ř'),
			_Utils_Tuple2('Rcedil', 'Ŗ'),
			_Utils_Tuple2('rcedil', 'ŗ'),
			_Utils_Tuple2('rceil', '⌉'),
			_Utils_Tuple2('rcub', '}'),
			_Utils_Tuple2('Rcy', 'Р'),
			_Utils_Tuple2('rcy', 'р'),
			_Utils_Tuple2('rdca', '⤷'),
			_Utils_Tuple2('rdldhar', '⥩'),
			_Utils_Tuple2('rdquo', '”'),
			_Utils_Tuple2('rdquor', '”'),
			_Utils_Tuple2('rdsh', '↳'),
			_Utils_Tuple2('real', 'ℜ'),
			_Utils_Tuple2('realine', 'ℛ'),
			_Utils_Tuple2('realpart', 'ℜ'),
			_Utils_Tuple2('reals', 'ℝ'),
			_Utils_Tuple2('Re', 'ℜ'),
			_Utils_Tuple2('rect', '▭'),
			_Utils_Tuple2('reg', '®'),
			_Utils_Tuple2('REG', '®'),
			_Utils_Tuple2('ReverseElement', '∋'),
			_Utils_Tuple2('ReverseEquilibrium', '⇋'),
			_Utils_Tuple2('ReverseUpEquilibrium', '⥯'),
			_Utils_Tuple2('rfisht', '⥽'),
			_Utils_Tuple2('rfloor', '⌋'),
			_Utils_Tuple2('rfr', '\uD835\uDD2F'),
			_Utils_Tuple2('Rfr', 'ℜ'),
			_Utils_Tuple2('rHar', '⥤'),
			_Utils_Tuple2('rhard', '⇁'),
			_Utils_Tuple2('rharu', '⇀'),
			_Utils_Tuple2('rharul', '⥬'),
			_Utils_Tuple2('Rho', 'Ρ'),
			_Utils_Tuple2('rho', 'ρ'),
			_Utils_Tuple2('rhov', 'ϱ'),
			_Utils_Tuple2('RightAngleBracket', '⟩'),
			_Utils_Tuple2('RightArrowBar', '⇥'),
			_Utils_Tuple2('rightarrow', '→'),
			_Utils_Tuple2('RightArrow', '→'),
			_Utils_Tuple2('Rightarrow', '⇒'),
			_Utils_Tuple2('RightArrowLeftArrow', '⇄'),
			_Utils_Tuple2('rightarrowtail', '↣'),
			_Utils_Tuple2('RightCeiling', '⌉'),
			_Utils_Tuple2('RightDoubleBracket', '⟧'),
			_Utils_Tuple2('RightDownTeeVector', '⥝'),
			_Utils_Tuple2('RightDownVectorBar', '⥕'),
			_Utils_Tuple2('RightDownVector', '⇂'),
			_Utils_Tuple2('RightFloor', '⌋'),
			_Utils_Tuple2('rightharpoondown', '⇁'),
			_Utils_Tuple2('rightharpoonup', '⇀'),
			_Utils_Tuple2('rightleftarrows', '⇄'),
			_Utils_Tuple2('rightleftharpoons', '⇌'),
			_Utils_Tuple2('rightrightarrows', '⇉'),
			_Utils_Tuple2('rightsquigarrow', '↝'),
			_Utils_Tuple2('RightTeeArrow', '↦'),
			_Utils_Tuple2('RightTee', '⊢'),
			_Utils_Tuple2('RightTeeVector', '⥛'),
			_Utils_Tuple2('rightthreetimes', '⋌'),
			_Utils_Tuple2('RightTriangleBar', '⧐'),
			_Utils_Tuple2('RightTriangle', '⊳'),
			_Utils_Tuple2('RightTriangleEqual', '⊵'),
			_Utils_Tuple2('RightUpDownVector', '⥏'),
			_Utils_Tuple2('RightUpTeeVector', '⥜'),
			_Utils_Tuple2('RightUpVectorBar', '⥔'),
			_Utils_Tuple2('RightUpVector', '↾'),
			_Utils_Tuple2('RightVectorBar', '⥓'),
			_Utils_Tuple2('RightVector', '⇀'),
			_Utils_Tuple2('ring', '˚'),
			_Utils_Tuple2('risingdotseq', '≓'),
			_Utils_Tuple2('rlarr', '⇄'),
			_Utils_Tuple2('rlhar', '⇌'),
			_Utils_Tuple2('rlm', '\u200F'),
			_Utils_Tuple2('rmoustache', '⎱'),
			_Utils_Tuple2('rmoust', '⎱'),
			_Utils_Tuple2('rnmid', '⫮'),
			_Utils_Tuple2('roang', '⟭'),
			_Utils_Tuple2('roarr', '⇾'),
			_Utils_Tuple2('robrk', '⟧'),
			_Utils_Tuple2('ropar', '⦆'),
			_Utils_Tuple2('ropf', '\uD835\uDD63'),
			_Utils_Tuple2('Ropf', 'ℝ'),
			_Utils_Tuple2('roplus', '⨮'),
			_Utils_Tuple2('rotimes', '⨵'),
			_Utils_Tuple2('RoundImplies', '⥰'),
			_Utils_Tuple2('rpar', ')'),
			_Utils_Tuple2('rpargt', '⦔'),
			_Utils_Tuple2('rppolint', '⨒'),
			_Utils_Tuple2('rrarr', '⇉'),
			_Utils_Tuple2('Rrightarrow', '⇛'),
			_Utils_Tuple2('rsaquo', '›'),
			_Utils_Tuple2('rscr', '\uD835\uDCC7'),
			_Utils_Tuple2('Rscr', 'ℛ'),
			_Utils_Tuple2('rsh', '↱'),
			_Utils_Tuple2('Rsh', '↱'),
			_Utils_Tuple2('rsqb', ']'),
			_Utils_Tuple2('rsquo', '’'),
			_Utils_Tuple2('rsquor', '’'),
			_Utils_Tuple2('rthree', '⋌'),
			_Utils_Tuple2('rtimes', '⋊'),
			_Utils_Tuple2('rtri', '▹'),
			_Utils_Tuple2('rtrie', '⊵'),
			_Utils_Tuple2('rtrif', '▸'),
			_Utils_Tuple2('rtriltri', '⧎'),
			_Utils_Tuple2('RuleDelayed', '⧴'),
			_Utils_Tuple2('ruluhar', '⥨'),
			_Utils_Tuple2('rx', '℞'),
			_Utils_Tuple2('Sacute', 'Ś'),
			_Utils_Tuple2('sacute', 'ś'),
			_Utils_Tuple2('sbquo', '‚'),
			_Utils_Tuple2('scap', '⪸'),
			_Utils_Tuple2('Scaron', 'Š'),
			_Utils_Tuple2('scaron', 'š'),
			_Utils_Tuple2('Sc', '⪼'),
			_Utils_Tuple2('sc', '≻'),
			_Utils_Tuple2('sccue', '≽'),
			_Utils_Tuple2('sce', '⪰'),
			_Utils_Tuple2('scE', '⪴'),
			_Utils_Tuple2('Scedil', 'Ş'),
			_Utils_Tuple2('scedil', 'ş'),
			_Utils_Tuple2('Scirc', 'Ŝ'),
			_Utils_Tuple2('scirc', 'ŝ'),
			_Utils_Tuple2('scnap', '⪺'),
			_Utils_Tuple2('scnE', '⪶'),
			_Utils_Tuple2('scnsim', '⋩'),
			_Utils_Tuple2('scpolint', '⨓'),
			_Utils_Tuple2('scsim', '≿'),
			_Utils_Tuple2('Scy', 'С'),
			_Utils_Tuple2('scy', 'с'),
			_Utils_Tuple2('sdotb', '⊡'),
			_Utils_Tuple2('sdot', '⋅'),
			_Utils_Tuple2('sdote', '⩦'),
			_Utils_Tuple2('searhk', '⤥'),
			_Utils_Tuple2('searr', '↘'),
			_Utils_Tuple2('seArr', '⇘'),
			_Utils_Tuple2('searrow', '↘'),
			_Utils_Tuple2('sect', '§'),
			_Utils_Tuple2('semi', ';'),
			_Utils_Tuple2('seswar', '⤩'),
			_Utils_Tuple2('setminus', '∖'),
			_Utils_Tuple2('setmn', '∖'),
			_Utils_Tuple2('sext', '✶'),
			_Utils_Tuple2('Sfr', '\uD835\uDD16'),
			_Utils_Tuple2('sfr', '\uD835\uDD30'),
			_Utils_Tuple2('sfrown', '⌢'),
			_Utils_Tuple2('sharp', '♯'),
			_Utils_Tuple2('SHCHcy', 'Щ'),
			_Utils_Tuple2('shchcy', 'щ'),
			_Utils_Tuple2('SHcy', 'Ш'),
			_Utils_Tuple2('shcy', 'ш'),
			_Utils_Tuple2('ShortDownArrow', '↓'),
			_Utils_Tuple2('ShortLeftArrow', '←'),
			_Utils_Tuple2('shortmid', '∣'),
			_Utils_Tuple2('shortparallel', '∥'),
			_Utils_Tuple2('ShortRightArrow', '→'),
			_Utils_Tuple2('ShortUpArrow', '↑'),
			_Utils_Tuple2('shy', '\u00AD'),
			_Utils_Tuple2('Sigma', 'Σ'),
			_Utils_Tuple2('sigma', 'σ'),
			_Utils_Tuple2('sigmaf', 'ς'),
			_Utils_Tuple2('sigmav', 'ς'),
			_Utils_Tuple2('sim', '∼'),
			_Utils_Tuple2('simdot', '⩪'),
			_Utils_Tuple2('sime', '≃'),
			_Utils_Tuple2('simeq', '≃'),
			_Utils_Tuple2('simg', '⪞'),
			_Utils_Tuple2('simgE', '⪠'),
			_Utils_Tuple2('siml', '⪝'),
			_Utils_Tuple2('simlE', '⪟'),
			_Utils_Tuple2('simne', '≆'),
			_Utils_Tuple2('simplus', '⨤'),
			_Utils_Tuple2('simrarr', '⥲'),
			_Utils_Tuple2('slarr', '←'),
			_Utils_Tuple2('SmallCircle', '∘'),
			_Utils_Tuple2('smallsetminus', '∖'),
			_Utils_Tuple2('smashp', '⨳'),
			_Utils_Tuple2('smeparsl', '⧤'),
			_Utils_Tuple2('smid', '∣'),
			_Utils_Tuple2('smile', '⌣'),
			_Utils_Tuple2('smt', '⪪'),
			_Utils_Tuple2('smte', '⪬'),
			_Utils_Tuple2('smtes', '⪬︀'),
			_Utils_Tuple2('SOFTcy', 'Ь'),
			_Utils_Tuple2('softcy', 'ь'),
			_Utils_Tuple2('solbar', '⌿'),
			_Utils_Tuple2('solb', '⧄'),
			_Utils_Tuple2('sol', '/'),
			_Utils_Tuple2('Sopf', '\uD835\uDD4A'),
			_Utils_Tuple2('sopf', '\uD835\uDD64'),
			_Utils_Tuple2('spades', '♠'),
			_Utils_Tuple2('spadesuit', '♠'),
			_Utils_Tuple2('spar', '∥'),
			_Utils_Tuple2('sqcap', '⊓'),
			_Utils_Tuple2('sqcaps', '⊓︀'),
			_Utils_Tuple2('sqcup', '⊔'),
			_Utils_Tuple2('sqcups', '⊔︀'),
			_Utils_Tuple2('Sqrt', '√'),
			_Utils_Tuple2('sqsub', '⊏'),
			_Utils_Tuple2('sqsube', '⊑'),
			_Utils_Tuple2('sqsubset', '⊏'),
			_Utils_Tuple2('sqsubseteq', '⊑'),
			_Utils_Tuple2('sqsup', '⊐'),
			_Utils_Tuple2('sqsupe', '⊒'),
			_Utils_Tuple2('sqsupset', '⊐'),
			_Utils_Tuple2('sqsupseteq', '⊒'),
			_Utils_Tuple2('square', '□'),
			_Utils_Tuple2('Square', '□'),
			_Utils_Tuple2('SquareIntersection', '⊓'),
			_Utils_Tuple2('SquareSubset', '⊏'),
			_Utils_Tuple2('SquareSubsetEqual', '⊑'),
			_Utils_Tuple2('SquareSuperset', '⊐'),
			_Utils_Tuple2('SquareSupersetEqual', '⊒'),
			_Utils_Tuple2('SquareUnion', '⊔'),
			_Utils_Tuple2('squarf', '▪'),
			_Utils_Tuple2('squ', '□'),
			_Utils_Tuple2('squf', '▪'),
			_Utils_Tuple2('srarr', '→'),
			_Utils_Tuple2('Sscr', '\uD835\uDCAE'),
			_Utils_Tuple2('sscr', '\uD835\uDCC8'),
			_Utils_Tuple2('ssetmn', '∖'),
			_Utils_Tuple2('ssmile', '⌣'),
			_Utils_Tuple2('sstarf', '⋆'),
			_Utils_Tuple2('Star', '⋆'),
			_Utils_Tuple2('star', '☆'),
			_Utils_Tuple2('starf', '★'),
			_Utils_Tuple2('straightepsilon', 'ϵ'),
			_Utils_Tuple2('straightphi', 'ϕ'),
			_Utils_Tuple2('strns', '¯'),
			_Utils_Tuple2('sub', '⊂'),
			_Utils_Tuple2('Sub', '⋐'),
			_Utils_Tuple2('subdot', '⪽'),
			_Utils_Tuple2('subE', '⫅'),
			_Utils_Tuple2('sube', '⊆'),
			_Utils_Tuple2('subedot', '⫃'),
			_Utils_Tuple2('submult', '⫁'),
			_Utils_Tuple2('subnE', '⫋'),
			_Utils_Tuple2('subne', '⊊'),
			_Utils_Tuple2('subplus', '⪿'),
			_Utils_Tuple2('subrarr', '⥹'),
			_Utils_Tuple2('subset', '⊂'),
			_Utils_Tuple2('Subset', '⋐'),
			_Utils_Tuple2('subseteq', '⊆'),
			_Utils_Tuple2('subseteqq', '⫅'),
			_Utils_Tuple2('SubsetEqual', '⊆'),
			_Utils_Tuple2('subsetneq', '⊊'),
			_Utils_Tuple2('subsetneqq', '⫋'),
			_Utils_Tuple2('subsim', '⫇'),
			_Utils_Tuple2('subsub', '⫕'),
			_Utils_Tuple2('subsup', '⫓'),
			_Utils_Tuple2('succapprox', '⪸'),
			_Utils_Tuple2('succ', '≻'),
			_Utils_Tuple2('succcurlyeq', '≽'),
			_Utils_Tuple2('Succeeds', '≻'),
			_Utils_Tuple2('SucceedsEqual', '⪰'),
			_Utils_Tuple2('SucceedsSlantEqual', '≽'),
			_Utils_Tuple2('SucceedsTilde', '≿'),
			_Utils_Tuple2('succeq', '⪰'),
			_Utils_Tuple2('succnapprox', '⪺'),
			_Utils_Tuple2('succneqq', '⪶'),
			_Utils_Tuple2('succnsim', '⋩'),
			_Utils_Tuple2('succsim', '≿'),
			_Utils_Tuple2('SuchThat', '∋'),
			_Utils_Tuple2('sum', '∑'),
			_Utils_Tuple2('Sum', '∑'),
			_Utils_Tuple2('sung', '♪'),
			_Utils_Tuple2('sup1', '¹'),
			_Utils_Tuple2('sup2', '²'),
			_Utils_Tuple2('sup3', '³'),
			_Utils_Tuple2('sup', '⊃'),
			_Utils_Tuple2('Sup', '⋑'),
			_Utils_Tuple2('supdot', '⪾'),
			_Utils_Tuple2('supdsub', '⫘'),
			_Utils_Tuple2('supE', '⫆'),
			_Utils_Tuple2('supe', '⊇'),
			_Utils_Tuple2('supedot', '⫄'),
			_Utils_Tuple2('Superset', '⊃'),
			_Utils_Tuple2('SupersetEqual', '⊇'),
			_Utils_Tuple2('suphsol', '⟉'),
			_Utils_Tuple2('suphsub', '⫗'),
			_Utils_Tuple2('suplarr', '⥻'),
			_Utils_Tuple2('supmult', '⫂'),
			_Utils_Tuple2('supnE', '⫌'),
			_Utils_Tuple2('supne', '⊋'),
			_Utils_Tuple2('supplus', '⫀'),
			_Utils_Tuple2('supset', '⊃'),
			_Utils_Tuple2('Supset', '⋑'),
			_Utils_Tuple2('supseteq', '⊇'),
			_Utils_Tuple2('supseteqq', '⫆'),
			_Utils_Tuple2('supsetneq', '⊋'),
			_Utils_Tuple2('supsetneqq', '⫌'),
			_Utils_Tuple2('supsim', '⫈'),
			_Utils_Tuple2('supsub', '⫔'),
			_Utils_Tuple2('supsup', '⫖'),
			_Utils_Tuple2('swarhk', '⤦'),
			_Utils_Tuple2('swarr', '↙'),
			_Utils_Tuple2('swArr', '⇙'),
			_Utils_Tuple2('swarrow', '↙'),
			_Utils_Tuple2('swnwar', '⤪'),
			_Utils_Tuple2('szlig', 'ß'),
			_Utils_Tuple2('Tab', '\t'),
			_Utils_Tuple2('target', '⌖'),
			_Utils_Tuple2('Tau', 'Τ'),
			_Utils_Tuple2('tau', 'τ'),
			_Utils_Tuple2('tbrk', '⎴'),
			_Utils_Tuple2('Tcaron', 'Ť'),
			_Utils_Tuple2('tcaron', 'ť'),
			_Utils_Tuple2('Tcedil', 'Ţ'),
			_Utils_Tuple2('tcedil', 'ţ'),
			_Utils_Tuple2('Tcy', 'Т'),
			_Utils_Tuple2('tcy', 'т'),
			_Utils_Tuple2('tdot', '⃛'),
			_Utils_Tuple2('telrec', '⌕'),
			_Utils_Tuple2('Tfr', '\uD835\uDD17'),
			_Utils_Tuple2('tfr', '\uD835\uDD31'),
			_Utils_Tuple2('there4', '∴'),
			_Utils_Tuple2('therefore', '∴'),
			_Utils_Tuple2('Therefore', '∴'),
			_Utils_Tuple2('Theta', 'Θ'),
			_Utils_Tuple2('theta', 'θ'),
			_Utils_Tuple2('thetasym', 'ϑ'),
			_Utils_Tuple2('thetav', 'ϑ'),
			_Utils_Tuple2('thickapprox', '≈'),
			_Utils_Tuple2('thicksim', '∼'),
			_Utils_Tuple2('ThickSpace', '\u205F\u200A'),
			_Utils_Tuple2('ThinSpace', '\u2009'),
			_Utils_Tuple2('thinsp', '\u2009'),
			_Utils_Tuple2('thkap', '≈'),
			_Utils_Tuple2('thksim', '∼'),
			_Utils_Tuple2('THORN', 'Þ'),
			_Utils_Tuple2('thorn', 'þ'),
			_Utils_Tuple2('tilde', '˜'),
			_Utils_Tuple2('Tilde', '∼'),
			_Utils_Tuple2('TildeEqual', '≃'),
			_Utils_Tuple2('TildeFullEqual', '≅'),
			_Utils_Tuple2('TildeTilde', '≈'),
			_Utils_Tuple2('timesbar', '⨱'),
			_Utils_Tuple2('timesb', '⊠'),
			_Utils_Tuple2('times', '×'),
			_Utils_Tuple2('timesd', '⨰'),
			_Utils_Tuple2('tint', '∭'),
			_Utils_Tuple2('toea', '⤨'),
			_Utils_Tuple2('topbot', '⌶'),
			_Utils_Tuple2('topcir', '⫱'),
			_Utils_Tuple2('top', '⊤'),
			_Utils_Tuple2('Topf', '\uD835\uDD4B'),
			_Utils_Tuple2('topf', '\uD835\uDD65'),
			_Utils_Tuple2('topfork', '⫚'),
			_Utils_Tuple2('tosa', '⤩'),
			_Utils_Tuple2('tprime', '‴'),
			_Utils_Tuple2('trade', '™'),
			_Utils_Tuple2('TRADE', '™'),
			_Utils_Tuple2('triangle', '▵'),
			_Utils_Tuple2('triangledown', '▿'),
			_Utils_Tuple2('triangleleft', '◃'),
			_Utils_Tuple2('trianglelefteq', '⊴'),
			_Utils_Tuple2('triangleq', '≜'),
			_Utils_Tuple2('triangleright', '▹'),
			_Utils_Tuple2('trianglerighteq', '⊵'),
			_Utils_Tuple2('tridot', '◬'),
			_Utils_Tuple2('trie', '≜'),
			_Utils_Tuple2('triminus', '⨺'),
			_Utils_Tuple2('TripleDot', '⃛'),
			_Utils_Tuple2('triplus', '⨹'),
			_Utils_Tuple2('trisb', '⧍'),
			_Utils_Tuple2('tritime', '⨻'),
			_Utils_Tuple2('trpezium', '⏢'),
			_Utils_Tuple2('Tscr', '\uD835\uDCAF'),
			_Utils_Tuple2('tscr', '\uD835\uDCC9'),
			_Utils_Tuple2('TScy', 'Ц'),
			_Utils_Tuple2('tscy', 'ц'),
			_Utils_Tuple2('TSHcy', 'Ћ'),
			_Utils_Tuple2('tshcy', 'ћ'),
			_Utils_Tuple2('Tstrok', 'Ŧ'),
			_Utils_Tuple2('tstrok', 'ŧ'),
			_Utils_Tuple2('twixt', '≬'),
			_Utils_Tuple2('twoheadleftarrow', '↞'),
			_Utils_Tuple2('twoheadrightarrow', '↠'),
			_Utils_Tuple2('Uacute', 'Ú'),
			_Utils_Tuple2('uacute', 'ú'),
			_Utils_Tuple2('uarr', '↑'),
			_Utils_Tuple2('Uarr', '↟'),
			_Utils_Tuple2('uArr', '⇑'),
			_Utils_Tuple2('Uarrocir', '⥉'),
			_Utils_Tuple2('Ubrcy', 'Ў'),
			_Utils_Tuple2('ubrcy', 'ў'),
			_Utils_Tuple2('Ubreve', 'Ŭ'),
			_Utils_Tuple2('ubreve', 'ŭ'),
			_Utils_Tuple2('Ucirc', 'Û'),
			_Utils_Tuple2('ucirc', 'û'),
			_Utils_Tuple2('Ucy', 'У'),
			_Utils_Tuple2('ucy', 'у'),
			_Utils_Tuple2('udarr', '⇅'),
			_Utils_Tuple2('Udblac', 'Ű'),
			_Utils_Tuple2('udblac', 'ű'),
			_Utils_Tuple2('udhar', '⥮'),
			_Utils_Tuple2('ufisht', '⥾'),
			_Utils_Tuple2('Ufr', '\uD835\uDD18'),
			_Utils_Tuple2('ufr', '\uD835\uDD32'),
			_Utils_Tuple2('Ugrave', 'Ù'),
			_Utils_Tuple2('ugrave', 'ù'),
			_Utils_Tuple2('uHar', '⥣'),
			_Utils_Tuple2('uharl', '↿'),
			_Utils_Tuple2('uharr', '↾'),
			_Utils_Tuple2('uhblk', '▀'),
			_Utils_Tuple2('ulcorn', '⌜'),
			_Utils_Tuple2('ulcorner', '⌜'),
			_Utils_Tuple2('ulcrop', '⌏'),
			_Utils_Tuple2('ultri', '◸'),
			_Utils_Tuple2('Umacr', 'Ū'),
			_Utils_Tuple2('umacr', 'ū'),
			_Utils_Tuple2('uml', '¨'),
			_Utils_Tuple2('UnderBar', '_'),
			_Utils_Tuple2('UnderBrace', '⏟'),
			_Utils_Tuple2('UnderBracket', '⎵'),
			_Utils_Tuple2('UnderParenthesis', '⏝'),
			_Utils_Tuple2('Union', '⋃'),
			_Utils_Tuple2('UnionPlus', '⊎'),
			_Utils_Tuple2('Uogon', 'Ų'),
			_Utils_Tuple2('uogon', 'ų'),
			_Utils_Tuple2('Uopf', '\uD835\uDD4C'),
			_Utils_Tuple2('uopf', '\uD835\uDD66'),
			_Utils_Tuple2('UpArrowBar', '⤒'),
			_Utils_Tuple2('uparrow', '↑'),
			_Utils_Tuple2('UpArrow', '↑'),
			_Utils_Tuple2('Uparrow', '⇑'),
			_Utils_Tuple2('UpArrowDownArrow', '⇅'),
			_Utils_Tuple2('updownarrow', '↕'),
			_Utils_Tuple2('UpDownArrow', '↕'),
			_Utils_Tuple2('Updownarrow', '⇕'),
			_Utils_Tuple2('UpEquilibrium', '⥮'),
			_Utils_Tuple2('upharpoonleft', '↿'),
			_Utils_Tuple2('upharpoonright', '↾'),
			_Utils_Tuple2('uplus', '⊎'),
			_Utils_Tuple2('UpperLeftArrow', '↖'),
			_Utils_Tuple2('UpperRightArrow', '↗'),
			_Utils_Tuple2('upsi', 'υ'),
			_Utils_Tuple2('Upsi', 'ϒ'),
			_Utils_Tuple2('upsih', 'ϒ'),
			_Utils_Tuple2('Upsilon', 'Υ'),
			_Utils_Tuple2('upsilon', 'υ'),
			_Utils_Tuple2('UpTeeArrow', '↥'),
			_Utils_Tuple2('UpTee', '⊥'),
			_Utils_Tuple2('upuparrows', '⇈'),
			_Utils_Tuple2('urcorn', '⌝'),
			_Utils_Tuple2('urcorner', '⌝'),
			_Utils_Tuple2('urcrop', '⌎'),
			_Utils_Tuple2('Uring', 'Ů'),
			_Utils_Tuple2('uring', 'ů'),
			_Utils_Tuple2('urtri', '◹'),
			_Utils_Tuple2('Uscr', '\uD835\uDCB0'),
			_Utils_Tuple2('uscr', '\uD835\uDCCA'),
			_Utils_Tuple2('utdot', '⋰'),
			_Utils_Tuple2('Utilde', 'Ũ'),
			_Utils_Tuple2('utilde', 'ũ'),
			_Utils_Tuple2('utri', '▵'),
			_Utils_Tuple2('utrif', '▴'),
			_Utils_Tuple2('uuarr', '⇈'),
			_Utils_Tuple2('Uuml', 'Ü'),
			_Utils_Tuple2('uuml', 'ü'),
			_Utils_Tuple2('uwangle', '⦧'),
			_Utils_Tuple2('vangrt', '⦜'),
			_Utils_Tuple2('varepsilon', 'ϵ'),
			_Utils_Tuple2('varkappa', 'ϰ'),
			_Utils_Tuple2('varnothing', '∅'),
			_Utils_Tuple2('varphi', 'ϕ'),
			_Utils_Tuple2('varpi', 'ϖ'),
			_Utils_Tuple2('varpropto', '∝'),
			_Utils_Tuple2('varr', '↕'),
			_Utils_Tuple2('vArr', '⇕'),
			_Utils_Tuple2('varrho', 'ϱ'),
			_Utils_Tuple2('varsigma', 'ς'),
			_Utils_Tuple2('varsubsetneq', '⊊︀'),
			_Utils_Tuple2('varsubsetneqq', '⫋︀'),
			_Utils_Tuple2('varsupsetneq', '⊋︀'),
			_Utils_Tuple2('varsupsetneqq', '⫌︀'),
			_Utils_Tuple2('vartheta', 'ϑ'),
			_Utils_Tuple2('vartriangleleft', '⊲'),
			_Utils_Tuple2('vartriangleright', '⊳'),
			_Utils_Tuple2('vBar', '⫨'),
			_Utils_Tuple2('Vbar', '⫫'),
			_Utils_Tuple2('vBarv', '⫩'),
			_Utils_Tuple2('Vcy', 'В'),
			_Utils_Tuple2('vcy', 'в'),
			_Utils_Tuple2('vdash', '⊢'),
			_Utils_Tuple2('vDash', '⊨'),
			_Utils_Tuple2('Vdash', '⊩'),
			_Utils_Tuple2('VDash', '⊫'),
			_Utils_Tuple2('Vdashl', '⫦'),
			_Utils_Tuple2('veebar', '⊻'),
			_Utils_Tuple2('vee', '∨'),
			_Utils_Tuple2('Vee', '⋁'),
			_Utils_Tuple2('veeeq', '≚'),
			_Utils_Tuple2('vellip', '⋮'),
			_Utils_Tuple2('verbar', '|'),
			_Utils_Tuple2('Verbar', '‖'),
			_Utils_Tuple2('vert', '|'),
			_Utils_Tuple2('Vert', '‖'),
			_Utils_Tuple2('VerticalBar', '∣'),
			_Utils_Tuple2('VerticalLine', '|'),
			_Utils_Tuple2('VerticalSeparator', '❘'),
			_Utils_Tuple2('VerticalTilde', '≀'),
			_Utils_Tuple2('VeryThinSpace', '\u200A'),
			_Utils_Tuple2('Vfr', '\uD835\uDD19'),
			_Utils_Tuple2('vfr', '\uD835\uDD33'),
			_Utils_Tuple2('vltri', '⊲'),
			_Utils_Tuple2('vnsub', '⊂⃒'),
			_Utils_Tuple2('vnsup', '⊃⃒'),
			_Utils_Tuple2('Vopf', '\uD835\uDD4D'),
			_Utils_Tuple2('vopf', '\uD835\uDD67'),
			_Utils_Tuple2('vprop', '∝'),
			_Utils_Tuple2('vrtri', '⊳'),
			_Utils_Tuple2('Vscr', '\uD835\uDCB1'),
			_Utils_Tuple2('vscr', '\uD835\uDCCB'),
			_Utils_Tuple2('vsubnE', '⫋︀'),
			_Utils_Tuple2('vsubne', '⊊︀'),
			_Utils_Tuple2('vsupnE', '⫌︀'),
			_Utils_Tuple2('vsupne', '⊋︀'),
			_Utils_Tuple2('Vvdash', '⊪'),
			_Utils_Tuple2('vzigzag', '⦚'),
			_Utils_Tuple2('Wcirc', 'Ŵ'),
			_Utils_Tuple2('wcirc', 'ŵ'),
			_Utils_Tuple2('wedbar', '⩟'),
			_Utils_Tuple2('wedge', '∧'),
			_Utils_Tuple2('Wedge', '⋀'),
			_Utils_Tuple2('wedgeq', '≙'),
			_Utils_Tuple2('weierp', '℘'),
			_Utils_Tuple2('Wfr', '\uD835\uDD1A'),
			_Utils_Tuple2('wfr', '\uD835\uDD34'),
			_Utils_Tuple2('Wopf', '\uD835\uDD4E'),
			_Utils_Tuple2('wopf', '\uD835\uDD68'),
			_Utils_Tuple2('wp', '℘'),
			_Utils_Tuple2('wr', '≀'),
			_Utils_Tuple2('wreath', '≀'),
			_Utils_Tuple2('Wscr', '\uD835\uDCB2'),
			_Utils_Tuple2('wscr', '\uD835\uDCCC'),
			_Utils_Tuple2('xcap', '⋂'),
			_Utils_Tuple2('xcirc', '◯'),
			_Utils_Tuple2('xcup', '⋃'),
			_Utils_Tuple2('xdtri', '▽'),
			_Utils_Tuple2('Xfr', '\uD835\uDD1B'),
			_Utils_Tuple2('xfr', '\uD835\uDD35'),
			_Utils_Tuple2('xharr', '⟷'),
			_Utils_Tuple2('xhArr', '⟺'),
			_Utils_Tuple2('Xi', 'Ξ'),
			_Utils_Tuple2('xi', 'ξ'),
			_Utils_Tuple2('xlarr', '⟵'),
			_Utils_Tuple2('xlArr', '⟸'),
			_Utils_Tuple2('xmap', '⟼'),
			_Utils_Tuple2('xnis', '⋻'),
			_Utils_Tuple2('xodot', '⨀'),
			_Utils_Tuple2('Xopf', '\uD835\uDD4F'),
			_Utils_Tuple2('xopf', '\uD835\uDD69'),
			_Utils_Tuple2('xoplus', '⨁'),
			_Utils_Tuple2('xotime', '⨂'),
			_Utils_Tuple2('xrarr', '⟶'),
			_Utils_Tuple2('xrArr', '⟹'),
			_Utils_Tuple2('Xscr', '\uD835\uDCB3'),
			_Utils_Tuple2('xscr', '\uD835\uDCCD'),
			_Utils_Tuple2('xsqcup', '⨆'),
			_Utils_Tuple2('xuplus', '⨄'),
			_Utils_Tuple2('xutri', '△'),
			_Utils_Tuple2('xvee', '⋁'),
			_Utils_Tuple2('xwedge', '⋀'),
			_Utils_Tuple2('Yacute', 'Ý'),
			_Utils_Tuple2('yacute', 'ý'),
			_Utils_Tuple2('YAcy', 'Я'),
			_Utils_Tuple2('yacy', 'я'),
			_Utils_Tuple2('Ycirc', 'Ŷ'),
			_Utils_Tuple2('ycirc', 'ŷ'),
			_Utils_Tuple2('Ycy', 'Ы'),
			_Utils_Tuple2('ycy', 'ы'),
			_Utils_Tuple2('yen', '¥'),
			_Utils_Tuple2('Yfr', '\uD835\uDD1C'),
			_Utils_Tuple2('yfr', '\uD835\uDD36'),
			_Utils_Tuple2('YIcy', 'Ї'),
			_Utils_Tuple2('yicy', 'ї'),
			_Utils_Tuple2('Yopf', '\uD835\uDD50'),
			_Utils_Tuple2('yopf', '\uD835\uDD6A'),
			_Utils_Tuple2('Yscr', '\uD835\uDCB4'),
			_Utils_Tuple2('yscr', '\uD835\uDCCE'),
			_Utils_Tuple2('YUcy', 'Ю'),
			_Utils_Tuple2('yucy', 'ю'),
			_Utils_Tuple2('yuml', 'ÿ'),
			_Utils_Tuple2('Yuml', 'Ÿ'),
			_Utils_Tuple2('Zacute', 'Ź'),
			_Utils_Tuple2('zacute', 'ź'),
			_Utils_Tuple2('Zcaron', 'Ž'),
			_Utils_Tuple2('zcaron', 'ž'),
			_Utils_Tuple2('Zcy', 'З'),
			_Utils_Tuple2('zcy', 'з'),
			_Utils_Tuple2('Zdot', 'Ż'),
			_Utils_Tuple2('zdot', 'ż'),
			_Utils_Tuple2('zeetrf', 'ℨ'),
			_Utils_Tuple2('ZeroWidthSpace', '\u200B'),
			_Utils_Tuple2('Zeta', 'Ζ'),
			_Utils_Tuple2('zeta', 'ζ'),
			_Utils_Tuple2('zfr', '\uD835\uDD37'),
			_Utils_Tuple2('Zfr', 'ℨ'),
			_Utils_Tuple2('ZHcy', 'Ж'),
			_Utils_Tuple2('zhcy', 'ж'),
			_Utils_Tuple2('zigrarr', '⇝'),
			_Utils_Tuple2('zopf', '\uD835\uDD6B'),
			_Utils_Tuple2('Zopf', 'ℤ'),
			_Utils_Tuple2('Zscr', '\uD835\uDCB5'),
			_Utils_Tuple2('zscr', '\uD835\uDCCF'),
			_Utils_Tuple2('zwj', '\u200D'),
			_Utils_Tuple2('zwnj', '\u200C')
		]));
var $hecrj$html_parser$Html$Parser$namedCharacterReference = A2(
	$elm$parser$Parser$map,
	function (reference) {
		return A2(
			$elm$core$Maybe$withDefault,
			'&' + (reference + ';'),
			A2($elm$core$Dict$get, reference, $hecrj$html_parser$Html$Parser$NamedCharacterReferences$dict));
	},
	$elm$parser$Parser$getChompedString(
		$hecrj$html_parser$Html$Parser$chompOneOrMore($elm$core$Char$isAlpha)));
var $elm$core$Char$fromCode = _Char_fromCode;
var $rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return $elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char.valueOf()) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2($elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2($elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return $elm$core$Result$Err(
							$elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $rtfeldman$elm_hex$Hex$fromString = function (str) {
	if ($elm$core$String$isEmpty(str)) {
		return $elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2($elm$core$String$startsWith, '-', str)) {
				var list = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					$elm$core$List$tail(
						$elm$core$String$toList(str)));
				return A2(
					$elm$core$Result$map,
					$elm$core$Basics$negate,
					A3(
						$rtfeldman$elm_hex$Hex$fromStringHelp,
						$elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					$rtfeldman$elm_hex$Hex$fromStringHelp,
					$elm$core$String$length(str) - 1,
					$elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				$elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2($elm$core$Result$mapError, formatError, result);
	}
};
var $elm$core$Char$isHexDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return ((48 <= code) && (code <= 57)) || (((65 <= code) && (code <= 70)) || ((97 <= code) && (code <= 102)));
};
var $hecrj$html_parser$Html$Parser$hexadecimal = A2(
	$elm$parser$Parser$andThen,
	function (hex) {
		var _v0 = $rtfeldman$elm_hex$Hex$fromString(
			$elm$core$String$toLower(hex));
		if (_v0.$ === 'Ok') {
			var value = _v0.a;
			return $elm$parser$Parser$succeed(value);
		} else {
			var error = _v0.a;
			return $elm$parser$Parser$problem(error);
		}
	},
	$elm$parser$Parser$getChompedString(
		$hecrj$html_parser$Html$Parser$chompOneOrMore($elm$core$Char$isHexDigit)));
var $elm$parser$Parser$ExpectingInt = {$: 'ExpectingInt'};
var $elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
var $elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
var $elm$parser$Parser$Advanced$bumpOffset = F2(
	function (newOffset, s) {
		return {col: s.col + (newOffset - s.offset), context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src};
	});
var $elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
var $elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
var $elm$parser$Parser$Advanced$consumeExp = F2(
	function (offset, src) {
		if (A3($elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
			var eOffset = offset + 1;
			var expOffset = (A3($elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3($elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src)) ? (eOffset + 1) : eOffset;
			var newOffset = A2($elm$parser$Parser$Advanced$chompBase10, expOffset, src);
			return _Utils_eq(expOffset, newOffset) ? (-newOffset) : newOffset;
		} else {
			return offset;
		}
	});
var $elm$parser$Parser$Advanced$consumeDotAndExp = F2(
	function (offset, src) {
		return A3($elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2(
			$elm$parser$Parser$Advanced$consumeExp,
			A2($elm$parser$Parser$Advanced$chompBase10, offset + 1, src),
			src) : A2($elm$parser$Parser$Advanced$consumeExp, offset, src);
	});
var $elm$parser$Parser$Advanced$finalizeInt = F5(
	function (invalid, handler, startOffset, _v0, s) {
		var endOffset = _v0.a;
		var n = _v0.b;
		if (handler.$ === 'Err') {
			var x = handler.a;
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		} else {
			var toValue = handler.a;
			return _Utils_eq(startOffset, endOffset) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				_Utils_cmp(s.offset, startOffset) < 0,
				A2($elm$parser$Parser$Advanced$fromState, s, invalid)) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				toValue(n),
				A2($elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
		}
	});
var $elm$core$String$toFloat = _String_toFloat;
var $elm$parser$Parser$Advanced$finalizeFloat = F6(
	function (invalid, expecting, intSettings, floatSettings, intPair, s) {
		var intOffset = intPair.a;
		var floatOffset = A2($elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.src);
		if (floatOffset < 0) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				true,
				A4($elm$parser$Parser$Advanced$fromInfo, s.row, s.col - (floatOffset + s.offset), invalid, s.context));
		} else {
			if (_Utils_eq(s.offset, floatOffset)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting));
			} else {
				if (_Utils_eq(intOffset, floatOffset)) {
					return A5($elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.offset, intPair, s);
				} else {
					if (floatSettings.$ === 'Err') {
						var x = floatSettings.a;
						return A2(
							$elm$parser$Parser$Advanced$Bad,
							true,
							A2($elm$parser$Parser$Advanced$fromState, s, invalid));
					} else {
						var toValue = floatSettings.a;
						var _v1 = $elm$core$String$toFloat(
							A3($elm$core$String$slice, s.offset, floatOffset, s.src));
						if (_v1.$ === 'Nothing') {
							return A2(
								$elm$parser$Parser$Advanced$Bad,
								true,
								A2($elm$parser$Parser$Advanced$fromState, s, invalid));
						} else {
							var n = _v1.a;
							return A3(
								$elm$parser$Parser$Advanced$Good,
								true,
								toValue(n),
								A2($elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
						}
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$number = function (c) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			if (A3($elm$parser$Parser$Advanced$isAsciiCode, 48, s.offset, s.src)) {
				var zeroOffset = s.offset + 1;
				var baseOffset = zeroOffset + 1;
				return A3($elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.hex,
					baseOffset,
					A2($elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.src),
					s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.octal,
					baseOffset,
					A3($elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.src),
					s) : (A3($elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.src) ? A5(
					$elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.binary,
					baseOffset,
					A3($elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.src),
					s) : A6(
					$elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					_Utils_Tuple2(zeroOffset, 0),
					s)));
			} else {
				return A6(
					$elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					A3($elm$parser$Parser$Advanced$consumeBase, 10, s.offset, s.src),
					s);
			}
		});
};
var $elm$parser$Parser$Advanced$int = F2(
	function (expecting, invalid) {
		return $elm$parser$Parser$Advanced$number(
			{
				binary: $elm$core$Result$Err(invalid),
				expecting: expecting,
				_float: $elm$core$Result$Err(invalid),
				hex: $elm$core$Result$Err(invalid),
				_int: $elm$core$Result$Ok($elm$core$Basics$identity),
				invalid: invalid,
				octal: $elm$core$Result$Err(invalid)
			});
	});
var $elm$parser$Parser$int = A2($elm$parser$Parser$Advanced$int, $elm$parser$Parser$ExpectingInt, $elm$parser$Parser$ExpectingInt);
var $hecrj$html_parser$Html$Parser$numericCharacterReference = function () {
	var codepoint = $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$chompIf(
						function (c) {
							return _Utils_eq(
								c,
								_Utils_chr('x')) || _Utils_eq(
								c,
								_Utils_chr('X'));
						})),
				$hecrj$html_parser$Html$Parser$hexadecimal),
				A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$chompWhile(
						$elm$core$Basics$eq(
							_Utils_chr('0')))),
				$elm$parser$Parser$int)
			]));
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$chompIf(
				$elm$core$Basics$eq(
					_Utils_chr('#')))),
		A2(
			$elm$parser$Parser$map,
			A2($elm$core$Basics$composeR, $elm$core$Char$fromCode, $elm$core$String$fromChar),
			codepoint));
}();
var $hecrj$html_parser$Html$Parser$characterReference = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$ignorer,
		$elm$parser$Parser$succeed($elm$core$Basics$identity),
		$elm$parser$Parser$chompIf(
			$elm$core$Basics$eq(
				_Utils_chr('&')))),
	$elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$backtrackable($hecrj$html_parser$Html$Parser$namedCharacterReference),
				$hecrj$html_parser$Html$Parser$chompSemicolon),
				A2(
				$elm$parser$Parser$ignorer,
				$elm$parser$Parser$backtrackable($hecrj$html_parser$Html$Parser$numericCharacterReference),
				$hecrj$html_parser$Html$Parser$chompSemicolon),
				$elm$parser$Parser$succeed('&')
			])));
var $hecrj$html_parser$Html$Parser$tagAttributeQuotedValue = function (quote) {
	var isQuotedValueChar = function (c) {
		return (!_Utils_eq(c, quote)) && (!_Utils_eq(
			c,
			_Utils_chr('&')));
	};
	return A2(
		$elm$parser$Parser$keeper,
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$succeed($elm$core$Basics$identity),
			$elm$parser$Parser$chompIf(
				$elm$core$Basics$eq(quote))),
		A2(
			$elm$parser$Parser$ignorer,
			A2(
				$elm$parser$Parser$map,
				$elm$core$String$join(''),
				$hecrj$html_parser$Html$Parser$many(
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$elm$parser$Parser$getChompedString(
								$hecrj$html_parser$Html$Parser$chompOneOrMore(isQuotedValueChar)),
								$hecrj$html_parser$Html$Parser$characterReference
							])))),
			$elm$parser$Parser$chompIf(
				$elm$core$Basics$eq(quote))));
};
var $hecrj$html_parser$Html$Parser$oneOrMore = F2(
	function (type_, parser_) {
		return A2(
			$elm$parser$Parser$loop,
			_List_Nil,
			function (list) {
				return $elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$map,
							function (_new) {
								return $elm$parser$Parser$Loop(
									A2($elm$core$List$cons, _new, list));
							},
							parser_),
							$elm$core$List$isEmpty(list) ? $elm$parser$Parser$problem('expecting at least one ' + type_) : $elm$parser$Parser$succeed(
							$elm$parser$Parser$Done(
								$elm$core$List$reverse(list)))
						]));
			});
	});
var $hecrj$html_parser$Html$Parser$tagAttributeUnquotedValue = function () {
	var isUnquotedValueChar = function (c) {
		return (!$hecrj$html_parser$Html$Parser$isSpaceCharacter(c)) && ((!_Utils_eq(
			c,
			_Utils_chr('\"'))) && ((!_Utils_eq(
			c,
			_Utils_chr('\''))) && ((!_Utils_eq(
			c,
			_Utils_chr('='))) && ((!_Utils_eq(
			c,
			_Utils_chr('<'))) && ((!_Utils_eq(
			c,
			_Utils_chr('>'))) && ((!_Utils_eq(
			c,
			_Utils_chr('`'))) && (!_Utils_eq(
			c,
			_Utils_chr('&')))))))));
	};
	return A2(
		$elm$parser$Parser$map,
		$elm$core$String$join(''),
		A2(
			$hecrj$html_parser$Html$Parser$oneOrMore,
			'attribute value',
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						$elm$parser$Parser$getChompedString(
						$hecrj$html_parser$Html$Parser$chompOneOrMore(isUnquotedValueChar)),
						$hecrj$html_parser$Html$Parser$characterReference
					]))));
}();
var $hecrj$html_parser$Html$Parser$tagAttributeValue = $elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$chompIf(
						$elm$core$Basics$eq(
							_Utils_chr('=')))),
				$elm$parser$Parser$chompWhile($hecrj$html_parser$Html$Parser$isSpaceCharacter)),
			$elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						$hecrj$html_parser$Html$Parser$tagAttributeUnquotedValue,
						$hecrj$html_parser$Html$Parser$tagAttributeQuotedValue(
						_Utils_chr('\"')),
						$hecrj$html_parser$Html$Parser$tagAttributeQuotedValue(
						_Utils_chr('\''))
					]))),
			$elm$parser$Parser$succeed('')
		]));
var $hecrj$html_parser$Html$Parser$tagAttribute = A2(
	$elm$parser$Parser$keeper,
	A2(
		$elm$parser$Parser$keeper,
		$elm$parser$Parser$succeed($elm$core$Tuple$pair),
		A2(
			$elm$parser$Parser$ignorer,
			$hecrj$html_parser$Html$Parser$tagAttributeName,
			$elm$parser$Parser$chompWhile($hecrj$html_parser$Html$Parser$isSpaceCharacter))),
	A2(
		$elm$parser$Parser$ignorer,
		$hecrj$html_parser$Html$Parser$tagAttributeValue,
		$elm$parser$Parser$chompWhile($hecrj$html_parser$Html$Parser$isSpaceCharacter)));
var $hecrj$html_parser$Html$Parser$tagAttributes = $hecrj$html_parser$Html$Parser$many($hecrj$html_parser$Html$Parser$tagAttribute);
var $hecrj$html_parser$Html$Parser$tagName = A2(
	$elm$parser$Parser$map,
	$elm$core$String$toLower,
	$elm$parser$Parser$getChompedString(
		A2(
			$elm$parser$Parser$ignorer,
			$elm$parser$Parser$chompIf($elm$core$Char$isAlphaNum),
			$elm$parser$Parser$chompWhile(
				function (c) {
					return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
						c,
						_Utils_chr('-'));
				}))));
var $hecrj$html_parser$Html$Parser$Text = function (a) {
	return {$: 'Text', a: a};
};
var $hecrj$html_parser$Html$Parser$text = A2(
	$elm$parser$Parser$map,
	A2(
		$elm$core$Basics$composeR,
		$elm$core$String$join(''),
		$hecrj$html_parser$Html$Parser$Text),
	A2(
		$hecrj$html_parser$Html$Parser$oneOrMore,
		'text element',
		$elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					$elm$parser$Parser$getChompedString(
					$hecrj$html_parser$Html$Parser$chompOneOrMore(
						function (c) {
							return (!_Utils_eq(
								c,
								_Utils_chr('<'))) && (!_Utils_eq(
								c,
								_Utils_chr('&')));
						})),
					$hecrj$html_parser$Html$Parser$characterReference
				]))));
function $hecrj$html_parser$Html$Parser$cyclic$node() {
	return $elm$parser$Parser$oneOf(
		_List_fromArray(
			[
				$hecrj$html_parser$Html$Parser$text,
				$hecrj$html_parser$Html$Parser$comment,
				$hecrj$html_parser$Html$Parser$cyclic$element()
			]));
}
function $hecrj$html_parser$Html$Parser$cyclic$element() {
	return A2(
		$elm$parser$Parser$andThen,
		function (_v0) {
			var name = _v0.a;
			var attributes = _v0.b;
			return $hecrj$html_parser$Html$Parser$isVoidElement(name) ? A2(
				$elm$parser$Parser$ignorer,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						A3($hecrj$html_parser$Html$Parser$Element, name, attributes, _List_Nil)),
					$elm$parser$Parser$oneOf(
						_List_fromArray(
							[
								$elm$parser$Parser$chompIf(
								$elm$core$Basics$eq(
									_Utils_chr('/'))),
								$elm$parser$Parser$succeed(_Utils_Tuple0)
							]))),
				$elm$parser$Parser$chompIf(
					$elm$core$Basics$eq(
						_Utils_chr('>')))) : A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed(
						A2($hecrj$html_parser$Html$Parser$Element, name, attributes)),
					$elm$parser$Parser$chompIf(
						$elm$core$Basics$eq(
							_Utils_chr('>')))),
				A2(
					$elm$parser$Parser$ignorer,
					$hecrj$html_parser$Html$Parser$many(
						$elm$parser$Parser$backtrackable(
							$hecrj$html_parser$Html$Parser$cyclic$node())),
					$hecrj$html_parser$Html$Parser$closingTag(name)));
		},
		A2(
			$elm$parser$Parser$keeper,
			A2(
				$elm$parser$Parser$keeper,
				A2(
					$elm$parser$Parser$ignorer,
					$elm$parser$Parser$succeed($elm$core$Tuple$pair),
					$elm$parser$Parser$chompIf(
						$elm$core$Basics$eq(
							_Utils_chr('<')))),
				A2(
					$elm$parser$Parser$ignorer,
					$hecrj$html_parser$Html$Parser$tagName,
					$elm$parser$Parser$chompWhile($hecrj$html_parser$Html$Parser$isSpaceCharacter))),
			$hecrj$html_parser$Html$Parser$tagAttributes));
}
try {
	var $hecrj$html_parser$Html$Parser$node = $hecrj$html_parser$Html$Parser$cyclic$node();
	$hecrj$html_parser$Html$Parser$cyclic$node = function () {
		return $hecrj$html_parser$Html$Parser$node;
	};
	var $hecrj$html_parser$Html$Parser$element = $hecrj$html_parser$Html$Parser$cyclic$element();
	$hecrj$html_parser$Html$Parser$cyclic$element = function () {
		return $hecrj$html_parser$Html$Parser$element;
	};
} catch ($) {
	throw 'Some top-level definitions from `Html.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    node\n  │     ↓\n  │    element\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $hecrj$html_parser$Html$Parser$run = function (str) {
	return $elm$core$String$isEmpty(str) ? $elm$core$Result$Ok(_List_Nil) : A2(
		$elm$parser$Parser$run,
		A2($hecrj$html_parser$Html$Parser$oneOrMore, 'node', $hecrj$html_parser$Html$Parser$node),
		str);
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $hecrj$html_parser$Html$Parser$Util$toAttribute = function (_v0) {
	var name = _v0.a;
	var value = _v0.b;
	return A2($elm$html$Html$Attributes$attribute, name, value);
};
var $hecrj$html_parser$Html$Parser$Util$toVirtualDom = function (nodes) {
	return A2($elm$core$List$map, $hecrj$html_parser$Html$Parser$Util$toVirtualDomEach, nodes);
};
var $hecrj$html_parser$Html$Parser$Util$toVirtualDomEach = function (node) {
	switch (node.$) {
		case 'Element':
			var name = node.a;
			var attrs = node.b;
			var children = node.c;
			return A3(
				$elm$html$Html$node,
				name,
				A2($elm$core$List$map, $hecrj$html_parser$Html$Parser$Util$toAttribute, attrs),
				$hecrj$html_parser$Html$Parser$Util$toVirtualDom(children));
		case 'Text':
			var s = node.a;
			return $elm$html$Html$text(s);
		default:
			return $elm$html$Html$text('');
	}
};
var $author$project$HtmlDefs$textHtml = function (t) {
	var _v0 = $hecrj$html_parser$Html$Parser$run(t);
	if (_v0.$ === 'Ok') {
		var nodes = _v0.a;
		return $hecrj$html_parser$Html$Parser$Util$toVirtualDom(nodes);
	} else {
		return _List_Nil;
	}
};
var $author$project$HtmlDefs$introHtml = $author$project$HtmlDefs$textHtml('\n   <p>\n            A vi-inspired diagram editor, with              \n            (latex) labelled nodes and edges, tested with Firefox, written in <a href="https://elm-lang.org/">Elm</a> (see the code on \n        <a href="https://github.com/amblafont/graph-editor-web">github</a>).\n            Higher cells are supported.\n	    For a short description, see <a href="https://hal.science/hal-04407118v1">here</a>.\n        For a video demonstrating the mechanisation features, see <a href="https://github.com/amblafont/vscode-yade-example/releases/download/v0.1/demo-yade-example.mp4">here</a>.\n	    </p>\n	    <p>\n	    For LaTeX export, press (capital) \'X\' after selection. The output code relies on\n      a custom <a href="https://raw.githubusercontent.com/amblafont/graph-editor-web/master/tools/yade.sty">latex package</a>.\n	    </p>\n	    <p>\n            Read the tutorial first, and then try some <a href="?scenario=exercise1">exercise</a>.\n        </p>');
var $author$project$Modes$isResizeMode = function (m) {
	if (m.$ === 'ResizeMode') {
		return true;
	} else {
		return false;
	}
};
var $author$project$HtmlDefs$latexPreambleId = 'latex-preamble';
var $elm$html$Html$Events$onMouseLeave = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseUp = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		$elm$json$Json$Decode$succeed(msg));
};
var $author$project$Main$openFile = _Platform_outgoingPort(
	'openFile',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $author$project$Main$quickInputView = function (m) {
	return A2(
		$elm$html$Html$p,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text('Enter equation: '),
				A2(
				$elm$html$Html$input,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$type_('text'),
						$elm$html$Html$Attributes$id($author$project$HtmlDefs$quickInputId),
						$elm$html$Html$Events$onInput(
						$author$project$Msg$QuickInput(false)),
						$elm$html$Html$Attributes$value(m.quickInput)
					]),
				_List_Nil)
			]));
};
var $author$project$Main$quickLoad = _Platform_outgoingPort(
	'quickLoad',
	function ($) {
		return $elm$json$Json$Encode$null;
	});
var $author$project$Msg$DuplicateTab = {$: 'DuplicateTab'};
var $author$project$Msg$NewTab = {$: 'NewTab'};
var $author$project$Msg$RemoveTab = {$: 'RemoveTab'};
var $author$project$Msg$SwitchTab = function (a) {
	return {$: 'SwitchTab', a: a};
};
var $author$project$Msg$TabMoveLeft = {$: 'TabMoveLeft'};
var $author$project$Msg$TabMoveRight = {$: 'TabMoveRight'};
var $author$project$Main$promptTabTitle = _Platform_outgoingPort('promptTabTitle', $elm$json$Json$Encode$string);
var $author$project$Main$renderTabs = function (tabs) {
	var activeTab = $author$project$Model$getActiveTabInTabs(tabs);
	var leftButton = A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Events$onClick($author$project$Msg$TabMoveLeft),
				$elm$html$Html$Attributes$title('Swap tab order')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('<')
			]));
	var rightButton = A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Events$onClick($author$project$Msg$TabMoveRight),
				$elm$html$Html$Attributes$title('Swap tab order')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('>')
			]));
	var renderTab = F2(
		function (i, tab) {
			var classes = A2(
				$elm$core$List$cons,
				$elm$html$Html$Attributes$class('tab-button'),
				tab.active ? _List_fromArray(
					[
						$elm$html$Html$Attributes$class('active-tab')
					]) : _List_Nil);
			var mainButton = A2(
				$elm$html$Html$button,
				_Utils_ap(
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick(
							$author$project$Msg$SwitchTab(i))
						]),
					classes),
				_List_fromArray(
					[
						$elm$html$Html$text(tab.title)
					]));
			return mainButton;
		});
	var newButton = A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Events$onClick($author$project$Msg$NewTab)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('New tab')
			]));
	var dupButton = A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Events$onClick($author$project$Msg$DuplicateTab)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('Duplicate tab')
			]));
	var removeButton = A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Events$onClick($author$project$Msg$RemoveTab)
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('Remove tab')
			]));
	var renameButton = A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				$elm$html$Html$Events$onClick(
				$author$project$Msg$Do(
					$author$project$Main$promptTabTitle(activeTab.title)))
			]),
		_List_fromArray(
			[
				$elm$html$Html$text('Rename tab')
			]));
	return _Utils_ap(
		_List_fromArray(
			[newButton, dupButton, removeButton, renameButton]),
		_Utils_ap(
			A2($elm$core$List$indexedMap, renderTab, tabs),
			_List_fromArray(
				[leftButton, rightButton])));
};
var $elm$html$Html$Attributes$rows = function (n) {
	return A2(
		_VirtualDom_attribute,
		'rows',
		$elm$core$String$fromInt(n));
};
var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
var $author$project$HtmlDefs$slider = F5(
	function (msg, name, min, max, value) {
		var f = $elm$core$String$fromInt;
		return A2(
			$elm$html$Html$label,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'padding', '20px')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('range'),
							$elm$html$Html$Attributes$value(
							f(value)),
							$elm$html$Html$Attributes$min(
							f(min)),
							$elm$html$Html$Attributes$max(
							f(max)),
							$elm$html$Html$Events$onInput(
							A2(
								$elm$core$Basics$composeR,
								$elm$core$String$toInt,
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Maybe$withDefault(value),
									msg)))
						]),
					_List_Nil),
					$elm$html$Html$text(name)
				]));
	});
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $elm$virtual_dom$VirtualDom$attributeNS = F3(
	function (namespace, key, value) {
		return A3(
			_VirtualDom_attributeNS,
			namespace,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $author$project$String$Html$toHtmlAttribute = function (attr) {
	if (attr.$ === 'AttributeNS') {
		var nameSpace = attr.a;
		var key = attr.b;
		var value = attr.c;
		return A2(
			(nameSpace === '') ? $elm$html$Html$Attributes$attribute : $elm$virtual_dom$VirtualDom$attributeNS(nameSpace),
			key,
			value);
	} else {
		var a = attr.a;
		return a;
	}
};
var $author$project$String$Html$toHtml = function (root) {
	switch (root.$) {
		case 'NodeNS':
			var nameSpace = root.a;
			var tagName = root.b;
			var attrs = root.c;
			var children = root.d;
			return A3(
				(nameSpace === '') ? $elm$virtual_dom$VirtualDom$node : $elm$virtual_dom$VirtualDom$nodeNS(nameSpace),
				tagName,
				A2($elm$core$List$map, $author$project$String$Html$toHtmlAttribute, attrs),
				A2($elm$core$List$map, $author$project$String$Html$toHtml, children));
		case 'TextNode':
			var s = root.a;
			return $elm$html$Html$text(s);
		default:
			var h = root.b;
			return h;
	}
};
var $author$project$Drawing$svg = F2(
	function (l, d) {
		return $author$project$String$Html$toHtml(
			A2(
				$author$project$Drawing$svgHelper,
				A2($elm$core$List$map, $author$project$String$Html$ghostAttribute, l),
				d));
	});
var $elm$html$Html$textarea = _VirtualDom_node('textarea');
var $author$project$Main$viewGraph = function (model) {
	var modelGraph = $author$project$Model$getActiveGraph(model);
	var missings = $author$project$Polygraph$invalidEdges(modelGraph);
	var drawings = A2(
		$author$project$Main$toDrawing,
		model,
		$author$project$Main$graphDrawingFromModel(model));
	var grid = model.hideGrid ? $author$project$Drawing$empty : $author$project$Drawing$grid(
		$author$project$Model$getCurrentSizeGrid(model));
	var nmissings = $elm$core$List$length(missings);
	var svg = A2(
		$author$project$Drawing$svg,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$id($author$project$HtmlDefs$canvasId),
				A2($elm$html$Html$Attributes$style, 'border-style', 'solid'),
				A2(
				$elm$html$Html$Events$on,
				'mousemove',
				A3($elm$json$Json$Decode$map2, $author$project$Msg$MouseMoveRaw, $elm$json$Json$Decode$value, $author$project$HtmlDefs$keysDecoder)),
				$elm$html$Html$Events$onMouseLeave($author$project$Msg$MouseLeaveCanvas),
				A3(
				$mpizenberg$elm_pointer_events$Html$Events$Extra$Mouse$onWithOptions,
				'mousedown',
				{preventDefault: false, stopPropagation: false},
				$author$project$Msg$MouseDown),
				$elm$html$Html$Events$onMouseUp($author$project$Msg$MouseUp)
			]),
		$author$project$Drawing$group(
			_List_fromArray(
				[
					grid,
					drawings,
					$author$project$Main$additionnalDrawing(model),
					$author$project$Drawing$emptyForeign
				])));
	var helpDiv = $author$project$Main$helpMsg(model);
	var overlayHelp = model.showOverlayHelp ? _List_fromArray(
		[
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('overlay')
				]),
			_List_fromArray(
				[helpDiv]))
		]) : _List_Nil;
	var contents = _Utils_ap(
		_List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_Nil,
				_Utils_ap(
					$author$project$HtmlDefs$introHtml,
					(!_Utils_eq(model.scenario, $author$project$Msg$Watch)) ? _List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick(
									$author$project$Msg$Do(
										$author$project$Main$openFile(_Utils_Tuple0))),
									$elm$html$Html$Attributes$id('load-button')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Load graph')
								])),
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick(
									$author$project$Msg$Do(
										$author$project$Main$quickLoad(_Utils_Tuple0))),
									$elm$html$Html$Attributes$title('Local or session storage')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('QuickLoad graph')
								]))
						]) : _List_Nil)),
				$elm$html$Html$text(model.statusMsg),
				A2(
				$elm$html$Html$p,
				_List_Nil,
				_Utils_ap(
					_List_fromArray(
						[
							$author$project$Main$helpMsg(model),
							$author$project$Main$quickInputView(model)
						]),
					overlayHelp))
			]),
		_Utils_ap(
			_Utils_eq(model.scenario, $author$project$Msg$Watch) ? _List_Nil : _List_fromArray(
				[
					$elm$html$Html$text('Filename: '),
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('text'),
							$elm$html$Html$Events$onInput($author$project$Msg$FileName),
							$elm$html$Html$Attributes$id('filename'),
							$elm$html$Html$Attributes$value(model.fileName)
						]),
					_List_Nil)
				]),
			_Utils_ap(
				_List_fromArray(
					[
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick($author$project$Msg$Save),
								$elm$html$Html$Attributes$id('save-button'),
								$elm$html$Html$Attributes$title('Opens a save dialog box')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Save')
							])),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick(
								$author$project$Msg$Clear(
									{preamble: '', scenario: model.scenario}))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Clear')
							])),
						A2(
						$elm$html$Html$a,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$href('#' + $author$project$HtmlDefs$latexPreambleId)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Latex preamble')
							])),
						A4($author$project$HtmlDefs$checkbox, $author$project$Msg$ToggleHideGrid, 'Show grid', '', !model.hideGrid),
						A4($author$project$HtmlDefs$checkbox, $author$project$Msg$ToggleAutosave, 'Autosave', 'Quicksave every minute', model.autoSave),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick($author$project$Msg$ExportQuiver)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Export selection to quiver')
							])),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick($author$project$Msg$SaveGridSize)
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Save grid size preferences')
							])),
						A2(
						$elm$html$Html$button,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick($author$project$Msg$OptimalGridSize),
								$elm$html$Html$Attributes$title('Select two nodes. The new grid size is the max of the coordinate differences.')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Calibrate grid size')
							]))
					]),
				_Utils_ap(
					$author$project$Modes$isResizeMode(model.mode) ? _List_fromArray(
						[
							A5(
							$author$project$HtmlDefs$slider,
							$author$project$Msg$SizeGrid,
							'Grid size (' + ($elm$core$String$fromInt(
								$author$project$Model$getCurrentSizeGrid(model)) + ')'),
							$author$project$Model$minSizeGrid,
							$author$project$Model$maxSizeGrid,
							$author$project$Model$getCurrentSizeGrid(model))
						]) : _List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$p,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('tabs')
								]),
							$author$project$Main$renderTabs(model.tabs)),
							A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(
									(nmissings > 0) ? ($elm$core$String$fromInt(nmissings) + ' nodes or edges could not be rendered.') : '')
								])),
							svg,
							A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('LaTeX preamble'),
									A2(
									$elm$html$Html$textarea,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$cols(100),
											$elm$html$Html$Attributes$rows(100),
											$elm$html$Html$Attributes$placeholder('latex Preamble'),
											$elm$html$Html$Attributes$value(model.latexPreamble),
											$elm$html$Html$Attributes$id($author$project$HtmlDefs$latexPreambleId),
											$elm$html$Html$Events$onInput($author$project$Msg$LatexPreambleEdit)
										]),
									_List_Nil)
								]))
						])))));
	return A2($elm$html$Html$div, _List_Nil, contents);
};
var $author$project$Main$view = function (m) {
	var _v0 = m.scenario;
	if (_v0.$ === 'SimpleScenario') {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text(m.statusMsg)
				]));
	} else {
		return $author$project$Main$viewGraph(m);
	}
};
var $author$project$Main$main = $elm$browser$Browser$element(
	{
		init: function (_v0) {
			var defaultGridSize = _v0.defaultGridSize;
			return _Utils_Tuple2(
				$author$project$Model$createModel(defaultGridSize),
				$elm$core$Platform$Cmd$none);
		},
		subscriptions: $author$project$Main$subscriptions,
		update: $author$project$Main$updateIntercept,
		view: $author$project$Main$view
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (defaultGridSize) {
			return $elm$json$Json$Decode$succeed(
				{defaultGridSize: defaultGridSize});
		},
		A2($elm$json$Json$Decode$field, 'defaultGridSize', $elm$json$Json$Decode$int)))(0)}});}(this));