/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../styles/theme.json';
import {Box,Text, Touchable, Spacer} from '../index';


const Picker = ({options = [], initialValue = '', title = '', onChange = (value) => {}}) => {
    const [selected, setSelected] = useState('');

    useEffect(() => {
        setSelected(initialValue);
    }, []);

    return (
       <>
        <Text Bold color="dark">{title}</Text>
        <Spacer />
        <Box row fluid height="50px">
            {options?.map(opt => (
                <Touchable
                onPress={() => {
                    setSelected(opt?.value);
                    onChange(opt?.value);
                }}
                style={[styles.base, styles[selected === opt?.value ? 'checked' : 'unchecked' ]]}>
                    <Text style={selected === opt?.value ? styles.text : undefined}>{opt?.label}</Text>
                </Touchable>
            ))}
        </Box>
       </>
    );
};

const styles = StyleSheet.create({
    base: {
        maxWidth: 45,
        height: 45,
        marginRight: 10,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unchecked: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.muted,
    },
    checked: {
        backgroundColor: colors.primary,
        color: colors.light,
    },
    text: {
        color: colors.light,
    },
});

export default Picker;
