const apiRequest = async (path, extra = {}) => {
  return (
    await fetch(path, {
      headers: {
        'Content-Type': 'application/json',
        ...extra.headers,
      },
      ...extra,
    })
  ).json()
}

const classifyImages = async () => {
  const res = await apiRequest('/classify');
  document.getElementById('debugger').innerHTML = `Error: ${JSON.stringify(res)}`
}

const imageLister = async () => {
  const res = await apiRequest('/image-lister')
  const imagesHtml = res.images.map(image => {
    return `<div class="image">
      <div class="img-cont"><img src="/bn.jpg" /></div>
      <div class="text">
        <div>${image.categories.split(',').join(', ')}</div>
      </div>
    </div>`
  })
  document.getElementById('lister-cont').innerHTML = imagesHtml.join('');
}

(() => {
  imageLister()
  document.getElementById('container').innerHTML = (`
    <div>
      <div id="debugger"></div>
      <input type="text" placeholder="Indirizzo cartella..." value="./public" />
      <input type="button" onclick="classifyImages()" value="Classify images" />
    </div>

    <div id="lister-cont"></div>
  `)
})()
