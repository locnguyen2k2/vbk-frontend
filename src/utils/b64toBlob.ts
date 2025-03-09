export const b64toBlob = (base64: string) =>
  fetch(base64).then(res => res.blob());