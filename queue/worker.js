// worker.js
self.onmessage = async function (event) {
  const data = event.data;
  console.log("正在打印4：", data.content);
  print();
  setTimeout(() => {
    // 任务完成后，可以向主线程发送一个消息告知任务已结束
    self.postMessage({ status: "finished", content: data.content });
  }, 2000);
};
