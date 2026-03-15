function getImageURL(name: string){
    return new URL(`../assets/portfolio/${name}`, import.meta.url).href
}

export {getImageURL};