"use strict";(self.webpackChunknotepecker_18=self.webpackChunknotepecker_18||[]).push([[534],{2534:function(e,t,n){function r(e){for(var t={},n=0,r=e.length;n<r;++n)t[e[n]]=!0;return t}n.r(t),n.d(t,{ruby:function(){return x}});var i,a=["alias","and","BEGIN","begin","break","case","class","def","defined?","do","else","elsif","END","end","ensure","false","for","if","in","module","next","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield","nil","raise","throw","catch","fail","loop","callcc","caller","lambda","proc","public","protected","private","require","load","require_relative","extend","autoload","__END__","__FILE__","__LINE__","__dir__"],o=r(a),u=r(["def","class","case","for","while","until","module","catch","loop","proc","begin"]),l=r(["end","until"]),f={"[":"]","{":"}","(":")"},s={"]":"[","}":"{",")":"("};function c(e,t,n){return n.tokenize.push(e),e(t,n)}function d(e,t){if(e.sol()&&e.match("=begin")&&e.eol())return t.tokenize.push(m),"comment";if(e.eatSpace())return null;var n,r,a,o=e.next();if("`"==o||"'"==o||'"'==o)return c(h(o,"string",'"'==o||"`"==o),e,t);if("/"==o)return function(e){var t,n=e.pos,r=0,i=!1,a=!1;for(;null!=(t=e.next());)if(a)a=!1;else{if("[{(".indexOf(t)>-1)r++;else if("]})".indexOf(t)>-1){if(--r<0)break}else if("/"==t&&0==r){i=!0;break}a="\\"==t}return e.backUp(e.pos-n),i}(e)?c(h(o,"string.special",!0),e,t):"operator";if("%"==o){var u="string",l=!0;e.eat("s")?u="atom":e.eat(/[WQ]/)?u="string":e.eat(/[r]/)?u="string.special":e.eat(/[wxq]/)&&(u="string",l=!1);var s=e.eat(/[^\w\s=]/);return s?(f.propertyIsEnumerable(s)&&(s=f[s]),c(h(s,u,l,!0),e,t)):"operator"}if("#"==o)return e.skipToEnd(),"comment";if("<"==o&&(n=e.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return c((r=n[2],a=n[1],function(e,t){return a&&e.eatSpace(),e.match(r)?t.tokenize.pop():e.skipToEnd(),"string"}),e,t);if("0"==o)return e.eat("x")?e.eatWhile(/[\da-fA-F]/):e.eat("b")?e.eatWhile(/[01]/):e.eatWhile(/[0-7]/),"number";if(/\d/.test(o))return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),"number";if("?"==o){for(;e.match(/^\\[CM]-/););return e.eat("\\")?e.eatWhile(/\w/):e.next(),"string"}if(":"==o)return e.eat("'")?c(h("'","atom",!1),e,t):e.eat('"')?c(h('"',"atom",!0),e,t):e.eat(/[\<\>]/)?(e.eat(/[\<\>]/),"atom"):e.eat(/[\+\-\*\/\&\|\:\!]/)?"atom":e.eat(/[a-zA-Z$@_\xa1-\uffff]/)?(e.eatWhile(/[\w$\xa1-\uffff]/),e.eat(/[\?\!\=]/),"atom"):"operator";if("@"==o&&e.match(/^@?[a-zA-Z_\xa1-\uffff]/))return e.eat("@"),e.eatWhile(/[\w\xa1-\uffff]/),"propertyName";if("$"==o)return e.eat(/[a-zA-Z_]/)?e.eatWhile(/[\w]/):e.eat(/\d/)?e.eat(/\d/):e.next(),"variableName.special";if(/[a-zA-Z_\xa1-\uffff]/.test(o))return e.eatWhile(/[\w\xa1-\uffff]/),e.eat(/[\?\!]/),e.eat(":")?"atom":"variable";if("|"!=o||!t.varList&&"{"!=t.lastTok&&"do"!=t.lastTok){if(/[\(\)\[\]{}\\;]/.test(o))return i=o,null;if("-"==o&&e.eat(">"))return"operator";if(/[=+\-\/*:\.^%<>~|]/.test(o)){var d=e.eatWhile(/[=+\-\/*:\.^%<>~|]/);return"."!=o||d||(i="."),"operator"}return null}return i="|",null}function p(e){return e||(e=1),function(t,n){if("}"==t.peek()){if(1==e)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n);n.tokenize[n.tokenize.length-1]=p(e-1)}else"{"==t.peek()&&(n.tokenize[n.tokenize.length-1]=p(e+1));return d(t,n)}}function k(){var e=!1;return function(t,n){return e?(n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)):(e=!0,d(t,n))}}function h(e,t,n,r){return function(i,a){var o,u=!1;for("read-quoted-paused"===a.context.type&&(a.context=a.context.prev,i.eat("}"));null!=(o=i.next());){if(o==e&&(r||!u)){a.tokenize.pop();break}if(n&&"#"==o&&!u){if(i.eat("{")){"}"==e&&(a.context={prev:a.context,type:"read-quoted-paused"}),a.tokenize.push(p());break}if(/[@\$]/.test(i.peek())){a.tokenize.push(k());break}}u=!u&&"\\"==o}return t}}function m(e,t){return e.sol()&&e.match("=end")&&e.eol()&&t.tokenize.pop(),e.skipToEnd(),"comment"}var x={name:"ruby",startState:function(e){return{tokenize:[d],indented:0,context:{type:"top",indented:-e},continuedLine:!1,lastTok:null,varList:!1}},token:function(e,t){i=null,e.sol()&&(t.indented=e.indentation());var n,r=t.tokenize[t.tokenize.length-1](e,t),a=i;if("variable"==r){var f=e.current();"keyword"==(r="."==t.lastTok?"property":o.propertyIsEnumerable(e.current())?"keyword":/^[A-Z]/.test(f)?"tag":"def"==t.lastTok||"class"==t.lastTok||t.varList?"def":"variable")&&(a=f,u.propertyIsEnumerable(f)?n="indent":l.propertyIsEnumerable(f)?n="dedent":"if"!=f&&"unless"!=f||e.column()!=e.indentation()?"do"==f&&t.context.indented<t.indented&&(n="indent"):n="indent")}return(i||r&&"comment"!=r)&&(t.lastTok=a),"|"==i&&(t.varList=!t.varList),"indent"==n||/[\(\[\{]/.test(i)?t.context={prev:t.context,type:i||r,indented:t.indented}:("dedent"==n||/[\)\]\}]/.test(i))&&t.context.prev&&(t.context=t.context.prev),e.eol()&&(t.continuedLine="\\"==i||"operator"==r),r},indent:function(e,t,n){if(e.tokenize[e.tokenize.length-1]!=d)return null;var r=t&&t.charAt(0),i=e.context,a=i.type==s[r]||"keyword"==i.type&&/^(?:end|until|else|elsif|when|rescue)\b/.test(t);return i.indented+(a?0:n.unit)+(e.continuedLine?n.unit:0)},languageData:{indentOnInput:/^\s*(?:end|rescue|elsif|else|\})$/,commentTokens:{line:"#"},autocomplete:a}}}}]);
//# sourceMappingURL=534.66e95f69.chunk.js.map