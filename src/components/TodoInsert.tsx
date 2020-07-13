import React, { ChangeEvent, FormEvent, useState } from 'react';

function TodoInsert() {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        // WE GOTTA APPLY CUSTOM HOOKS.
        setValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="Let's input your work"
                value = {value}
                onChange = {onChange}
            />
            <button type="submit">SUBMIT</button>
        </form>
    );
}

export default TodoInsert