
const downloadClick=(datas,name="ordre_de_virrement.txt")=> {
    const blob = new Blob([datas], { type: "octet-stream" });
    const href = URL.createObjectURL(blob);
    const a=Object.assign(document.createElement('a',{href,style:"display.none",download:name}))
    document.body.appendChild(a)
    a.click()
    URL.revokeObjectURL(href);
    a.remove()
}
