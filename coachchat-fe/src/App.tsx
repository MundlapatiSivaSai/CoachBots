import { DeepChat } from 'deep-chat-react';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <h1>Deep Chat</h1>
      <DeepChat
        demo={true}
        style={{ borderRadius: '10px' }}
        textInput={{ placeholder: { text: 'Welcome to the demo!' } }}
        request={{
          url: "http://localhost:5002/chat",
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
        }}
      />
    </div>
  );
};

export default App;
