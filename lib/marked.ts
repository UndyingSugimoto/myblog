import marked from 'marked';
import hljs from 'highlight.js';

const mk = marked.setOptions({
  highlight: function (code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  },
});
export default mk;
