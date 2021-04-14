import React, { useEffect } from 'react';
import Picker from 'rmc-picker';

function App() {
    const [state, setState] = React.useState([1]);
    const [items, setItems] = React.useState([]);

    const onChange = (value) => {
        setState(value);
    };

    // const onScrollChange = (value) => {
    //     console.log('onScrollChange', value);
    // };

    const getItems = () => {
        const items = [];
        for (let i = 0; i < 3000; i++) {
            items.push(
                <Picker.Item value={i + ''} key={i}>
                    {'A lot stuff going on!' + i}
                </Picker.Item>
            );
        }
        return items;
    };

    useEffect(() => {
        const newItems = getItems();

        setItems(newItems);
    }, []);

    return (
        <div>
            <div style={{ background: '#f5f5f9', padding: 10 }}>
                <Picker selectedValue={state} onValueChange={onChange}>
                    {items}
                </Picker>
            </div>
        </div>
    );
}

export default App;
