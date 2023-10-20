import valid from 'card-validator';

export default {
    isValidCreditCard: (creditCard) => {

        //{"cvv": "", "holder_name": "ssd", "number": "dddw", "valid_date": ""}

        //HOLDER NAME
        if (!valid.cardholderName(creditCard.holder_name).isValid){
            return {error: true, message: 'Invalid holder name.'};
        }

        //CARD NUMBER
        if (!valid.number(creditCard.number).isValid){
            return {error: true, message: 'Invalid card number.'};
        }


        //EXPIRATION DATE
        if (!valid.expirationDate(creditCard.valid_date).isValid){
            return {error: true, message: 'Invalid date.'};
        }

        //CVV

        if (!valid.cvv(creditCard.cvv).isValid){
            return {error: true, message: 'Invalid CVV.'};
        }

        return {error: false};
    },
};
