import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native"
import TodoList from "./TodoList";

const Todo = () => {
    const [todoItems, setTodoItems] = useState(() => [
        // { id: 384736, title: "Задача items", isComplete: true },
        // { id: 992615, title: "Задача items2", isComplete: false }
    ])

    const [text, setText] = useState('')
    const changeText = text => setText(text)

    const addTodoItem = () => {
        if (text.length > 0) {
            setTodoItems([
                ...todoItems,
                { id: Math.random(), title: text, isComplete: false }
            ])
        }
        setText('')
    }

    const completeTodoItem = id => setTodoItems(todoItems.map(
        todoItem => todoItem.id === id ? { ...todoItem, isComplete: !todoItem.isComplete } : todoItem
    ))

    const removeTodoItem = id => setTodoItems(
        todoItems.filter(todoItem => todoItem.id !== id))

    return (
        <>
            <TodoList todoItems={todoItems} completeTodoItem={completeTodoItem} removeTodoItem={removeTodoItem} />
            <TextInput style={styles.textInput}
                placeholder="Додати задачу"
                value={text}
                onChangeText={changeText}
                onSubmitEditing={addTodoItem}
            />
        </>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 40,
        paddingHorizontal: 20,
        borderWidth: StyleSheet.hairlineWidth,
    }
})

export default Todo