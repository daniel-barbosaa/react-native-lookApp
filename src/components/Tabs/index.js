import React from 'react';

import { Box, Text, ScrollView, Touchable} from '../../components/index';
import {colors} from '../../styles/theme.json';

const Tabs = ({tabs = [], active = '', onChange = (tab) => {}}) => {

    const totalTabs = tabs?.length;

    const activeTabStyle = {
        borderBottomWidth: 3,
        borderColor: colors.danger,
    };
    return (
        <Box row horizontal style={{maxHeight: 70, backgroundColor: colors.light,
        }}>
           {tabs?.map((opt) => (
             <Touchable onPress={() => {
                onChange(opt.value);
             }} hasPadding style={ [
                {
                    alignItems: 'center',
                 },
                 active === opt.value ? activeTabStyle : {},
             ]

            }
             >
                <Text color={ active === opt.value ? 'primary' : undefined}>{opt.label}</Text>
             </Touchable>
           ))}
        </Box>
    );
};

export default Tabs;
