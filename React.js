function app(params) {
  return React.createElement(
    "h1",
    { class: "main" },
    "This My First React App Cosde"
  );
};

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(app));
