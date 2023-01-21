function app(params) {
  return React.createElement(
    "table",
    {},
    React.createElement(
      "tr",
      {},
      React.createElement(
        "th",
        {},
        "The LIst Of The Year",
        React.createElement("td", {}, "Faheem Khan")
      )
    )
  )
};

ReactDOM.createRoot(document.getElementById("root"))
  .render(React.createElement(app));

// const domContainer = document.querySelector('#root');
// const root = ReactDOM.createRoot(domContainer);
// root.render(React.createElement(app));