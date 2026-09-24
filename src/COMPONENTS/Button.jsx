export default function Button ({onClick, name, classname,icon}) {
return (
<button className={classname}>
<img src={icon}></img>
{name}
</button>
)
}