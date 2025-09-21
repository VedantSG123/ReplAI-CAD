declare module '*?worker' {
  // `new` is required to be able to create a new Worker
  const MyWorker: new () => Worker
  export default MyWorker
}
