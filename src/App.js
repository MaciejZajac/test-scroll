import React, { useEffect } from 'react';
import Picker from 'rmc-picker';

function App() {
    const [state, setState] = React.useState(1);
    const [items, setItems] = React.useState([]);
    const [saved, setSaved] = React.useState(0);
    const [state2, setState2] = React.useState(1);
    const [items2, setItems2] = React.useState([]);
    const [saved2, setSaved2] = React.useState(0);

    const onChange = (value) => {
        setState(value);
    };
    const onChange2 = (value) => {
        setState2(value);
    };

    // const onScrollChange = (value) => {
    //     console.log('onScrollChange', value);
    // };

    const getItems = () => {
        const items = [];
        for (let i = 0; i < 1000; i++) {
            items.push(
                <Picker.Item value={i + ''} key={i}>
                    {'A lot stuff going on! ' + i}
                </Picker.Item>
            );
        }
        return items;
    };

    const getItems2 = () => {
        const items = [];
        for (let i = 0; i < 300; i++) {
            items.push(
                <Picker.Item value={i + ''} key={i}>
                    {'A lot stuff going on! ' + i}
                </Picker.Item>
            );
        }
        return items;
    };

    const handleSave = () => {
        setSaved(state);
    };

    const handleSave2 = () => {
        setSaved2(state2);
    };
    useEffect(() => {
        const newItems = getItems();
        const newItems2 = getItems2();

        setItems(newItems);
        setItems2(newItems2);
    }, []);

    return (
        <div>
            <div style={{ background: '#f5f5f9', padding: 10 }}>
                <Picker selectedValue={state} onValueChange={onChange}>
                    {items}
                </Picker>
            </div>
            <button onClick={handleSave}>Save</button>
            <br />
            <br />
            selected: {state}
            <br />
            saved: {saved}
            <br />
            <br />
            <br />
            <div style={{ background: '#f5f5f9', padding: 10 }}>
                <Picker selectedValue={state2} onValueChange={onChange2}>
                    {items2}
                </Picker>
            </div>
            <button onClick={handleSave2}>Save</button>
            <br />
            <br />
            selected: {state2}
            <br />
            saved: {saved2}
        </div>
    );
}

export default App;
