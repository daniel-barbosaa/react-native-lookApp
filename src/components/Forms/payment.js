/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';

import {Box, Input, Spacer, Text, Title, Touchable} from '../index';
import SegmentedPicker from 'react-native-segmented-picker';

const PaymentForm = ({onChange = (creditCart)=> {}}) => {

    const pikerRef = useRef(null);

    const [data , setData] = useState({
        holder_name: '',
        number: '',
        valid_date: '',
        cvv: '',
    });

    useEffect(() => {
        onChange(data);
    }, [data]);

    return (
        <>
             <SegmentedPicker
        ref={pikerRef}
        onConfirm={(validDate) => {
            setData({
                ...data, valid_date: `${validDate.month}/${validDate.year}`,
            });
        }}
        options={[
          {
            key: 'month',
            items: [
              { label: '11', value: '11' },
              { label: '12', value: '12' },
            ],
          },
          {
            key: 'year',
            items: [
              { label: '23', value: '2023' },
              { label: '24', value: '2024' },
            ],
          },
        ]}
      />
            <Box>
                <Title variant="ultra-small">Select and enter your payment details</Title>
                <Spacer />
                <Text variant="small" color="dark">By continuing you agree to our Terms</Text>
                <Spacer />
                <Input placeholder="Holder Name"
                    value={data.holder_name}
                    onChangeText={(holder_name) => {
                        setData({...data, holder_name });
                    }}
                />
                <Spacer />
                <Input placeholder="Credit Card Number"
                    value={data.number}
                    onChangeText={(number) => {
                        setData({...data, number });
                    }}
                />
                <Spacer />
                <Touchable width="100%" onPress={() => {
                    pikerRef.current.show();
                }}>
                    <Input value={data.valid_date} pointerEvents="none" editable={false} placeholder="09/2025"/>
                </Touchable>
                <Spacer />
                <Box row align="center">
                    <Box spacing="0px 10px 0px 0px">
                        <Input placeholder="CVV"
                        value={data.cvv}
                        onChangeText={(cvv) => {
                            setData({...data, cvv });
                        }}
                        />
                    </Box>
                    <Box>
                        <Text variant="small">3 or 4 digits usually found on the signature strip</Text>
                    </Box>
                </Box>
            </Box>
        </>
    );

};




export default PaymentForm;
