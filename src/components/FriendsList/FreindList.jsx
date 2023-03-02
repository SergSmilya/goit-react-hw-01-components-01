export function FriendList({items}) {
    return (
        <ul className="friend-list">
            {items.map(({avatar, name, isOnline, id}) => {
                return (<li key={id} className="item">
                    <span className="status">{isOnline}</span>
                    <img className="avatar" src={avatar} alt={name} width="48" />
                    <p className="name">{name}</p>
                    </li>)
            })}
        </ul>   
    )
}