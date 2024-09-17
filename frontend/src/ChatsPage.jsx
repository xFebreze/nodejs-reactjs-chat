import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh' }}>
            <PrettyChatWindow
                projectId='9c23fc2e-b250-45ea-99d2-c9767665b637'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%' }}/>
        </div>
    )
}

export default ChatsPage