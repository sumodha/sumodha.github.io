
function Card({imgSrc, title, subtitle, hasGithubLink, tags} :   {imgSrc: string, title:string, subtitle: string, hasGithubLink: boolean, tags: Array<String>}) {
    return (
    <>
    <img src = "./assets/react.svg" />
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    {hasGithubLink?<h1>yes</h1>:<h1>no</h1>}
    {tags.map((element, idx) => <h1 key={idx}>{element}</h1>)}
    </>
    );
}

export default Card;