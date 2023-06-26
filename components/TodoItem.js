import { func } from "prop-types";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TodoItem = ({ title, isComplete, complete, remove }) => (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={isComplete && styles.textComplete}>
                {title}
            </Text>
        </View>

        <View>
            <TouchableOpacity
                style={[styles.button, styles.buttonSuccess]}
                onPress={complete}
            >
                <Text style={styles.buttonText}>
                    {isComplete ? 'Відмінити' : 'Виконати'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.buttonDanger]}
                onPress={remove} >
                <Text style={styles.buttonText}>
                    Видалити
                </Text>
            </TouchableOpacity>
        </View>
    </View>
)

TodoItem.defaultProps = {
    title: 'Без назви',
    isComplete: false,
    complete: func,
    remove: func,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    textContainer: {
        flex: 1
    },
    textComplete: {
        textDecorationLine: 'line-through'
    },
    button: {
        minWidth: 100,
        margin: 3,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: '#007bff'
    },
    buttonSuccess: {
        backgroundColor: '#28a745'
    },
    buttonDanger: {
        backgroundColor: '#dc3545'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
})

export default TodoItem