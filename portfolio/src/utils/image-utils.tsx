function getImageURL(name: string){
    return new URL(`../assets/portfolio-images/${name}`, import.meta.url).href
}

export {getImageURL};