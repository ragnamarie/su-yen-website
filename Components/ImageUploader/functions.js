export async function uploadFile(url, { arg }) {
  console.log(url);
  console.log(arg);

  arg.title = "Title";

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      fileData: arg,
    }),
  });
}

export async function onChange(event, setFileData) {
  const file = (event.currentTarget.files || [])[0];
  console.log(file);

  if (file) {
    setFileData({
      binaryData: Buffer.from(await file.arrayBuffer()),
      originalFilename: file.name,
      size: file.size,
      mimetype: file.type,
    });
  }
}

export async function onSubmit(event, fileData, trigger) {
  console.log(fileData);
  event.preventDefault();
  if (!fileData) {
    return;
  }

  const formElement = event.currentTarget;
  trigger(fileData);
  formElement.reset();
}
