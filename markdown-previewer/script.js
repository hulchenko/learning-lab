//Marked CDN setup:
//CDN link: https://cdnjs.cloudflare.com/ajax/libs/marked/2.0.1/marked.min.js
marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
//

function App() {
  const [text, setText] = React.useState(placeholder);

  return (
    <div className="split left">
      <div className="text-center">
        <h1 className="p-4">Editor</h1>
        <textarea
          name="text"
          id="editor"
          rows="10"
          className="textarea"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></textarea>
      </div>
      <div className="split right">
        <div className="text-center">
          <h1 className="p-4" id="preview">
            Preview
          </h1>
          <Preview markdown={text} />
        </div>
      </div>
    </div>
  );
}

const placeholder = `# Hello!
<hr>
## This is a sub-heading...
### Some other features:

**bold** text, or _italic_, or **_both!_**
~crossed out~

There's also [links](https://www.google.ca/), and
> Block Quotes!

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png)
`;

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      id="preview"
    ></div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
