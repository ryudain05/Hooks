export const App = () => {
  const input = useRef();
  setTimeout(() => input.current.focus(), 5000);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={input} placeholder="la" />
    </div>
  );
};
