export default function Header({text}) {
    if (text && text[0].toLowerCase() === text[0]) {
        text = text.split("").map((character, index) => index === 0 ? character.toUpperCase() : character)
    }
    return (
        <h1 className="text-[2rem] ">{text}</h1>
    )
}